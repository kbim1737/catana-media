import { NextResponse } from "next/server"

const CACHE_TTL = 60 * 60 * 1000 // 1 hour
let cache: { data: Record<string, number>; timestamp: number } | null = null

// Rate limit: 30 requests per minute per IP
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 30
const RATE_LIMIT_WINDOW = 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }
  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// YouTube video ID format: 11 alphanumeric chars, hyphens, underscores
const YOUTUBE_ID_REGEX = /^[a-zA-Z0-9_-]{11}$/

async function fetchViewCount(videoId: string): Promise<number> {
  try {
    const res = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    })
    const html = await res.text()
    const match = html.match(/"viewCount":"(\d+)"/)
    return match ? parseInt(match[1], 10) : 0
  } catch {
    return 0
  }
}

export async function GET(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded?.split(",")[0]?.trim() || "unknown"

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    )
  }

  const { searchParams } = new URL(request.url)
  const idsParam = searchParams.get("ids")

  if (!idsParam) {
    return NextResponse.json({ error: "Missing ids parameter" }, { status: 400 })
  }

  const ids = idsParam.split(",").slice(0, 50) // Max 50 IDs per request

  // Validate every ID matches YouTube format
  for (const id of ids) {
    if (!YOUTUBE_ID_REGEX.test(id)) {
      return NextResponse.json({ error: "Invalid video ID format" }, { status: 400 })
    }
  }

  // Return cached data if fresh
  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    const allCached = ids.every((id) => id in cache!.data)
    if (allCached) {
      const views: Record<string, number> = {}
      for (const id of ids) views[id] = cache.data[id]
      return NextResponse.json(views)
    }
  }

  // Fetch all view counts in parallel
  const results = await Promise.all(
    ids.map(async (id) => ({ id, views: await fetchViewCount(id) }))
  )

  const views: Record<string, number> = {}
  for (const r of results) views[r.id] = r.views

  // Update cache
  cache = { data: { ...(cache?.data ?? {}), ...views }, timestamp: Date.now() }

  return NextResponse.json(views)
}
