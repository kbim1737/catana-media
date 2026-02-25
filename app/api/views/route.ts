import { NextResponse } from "next/server"

const CACHE_TTL = 60 * 60 * 1000 // 1 hour
let cache: { data: Record<string, number>; timestamp: number } | null = null

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
  const { searchParams } = new URL(request.url)
  const idsParam = searchParams.get("ids")

  if (!idsParam) {
    return NextResponse.json({ error: "Missing ids parameter" }, { status: 400 })
  }

  const ids = idsParam.split(",")

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
