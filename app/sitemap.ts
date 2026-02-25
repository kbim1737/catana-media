import type { MetadataRoute } from "next"

const BASE_URL = "https://catana.media"
const locales = ["en", "es", "hu", "ro"] as const

function langAlternates(path: string) {
  return Object.fromEntries(
    locales.map((l) => [
      l,
      l === "en" ? `${BASE_URL}${path}` : `${BASE_URL}${path}${path === "/" ? "" : "/"}?lang=${l}`,
    ])
  )
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: langAlternates("/") },
    },
    {
      url: `${BASE_URL}/#portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: langAlternates("/#portfolio") },
    },
    {
      url: `${BASE_URL}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: langAlternates("/#about") },
    },
    {
      url: `${BASE_URL}/#inquiries`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: langAlternates("/#inquiries") },
    },
  ]
}
