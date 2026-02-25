"use client"

import { useEffect } from "react"
import { useTranslation } from "@/hooks/use-translation"

export function SeoHead() {
  const { t, locale } = useTranslation()

  useEffect(() => {
    document.title = t.meta.title

    // Helper to set or create a meta tag
    function setMeta(attr: string, key: string, content: string) {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta("name", "description", t.meta.description)
    setMeta("name", "keywords", t.meta.keywords)

    // Open Graph
    setMeta("property", "og:title", t.meta.title)
    setMeta("property", "og:description", t.meta.description)
    setMeta("property", "og:type", "website")
    setMeta("property", "og:url", "https://catana.media")
    setMeta("property", "og:site_name", "CATANA MEDIA")
    const localeRegionMap: Record<string, string> = { en: "en_US", es: "es_ES", hu: "hu_HU", ro: "ro_RO" }
    setMeta("property", "og:locale", localeRegionMap[locale] || "en_US")

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image")
    setMeta("name", "twitter:title", t.meta.title)
    setMeta("name", "twitter:description", t.meta.description)

    // Hreflang alternate links
    const locales = ["en", "es", "hu", "ro"] as const
    locales.forEach((l) => {
      const id = `hreflang-${l}`
      let link = document.getElementById(id) as HTMLLinkElement | null
      if (!link) {
        link = document.createElement("link")
        link.id = id
        link.rel = "alternate"
        link.hreflang = l
        document.head.appendChild(link)
      }
      link.href = l === "en" ? "https://catana.media" : `https://catana.media?lang=${l}`
    })

    // JSON-LD structured data
    const jsonLdId = "json-ld-structured"
    let script = document.getElementById(jsonLdId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement("script")
      script.id = jsonLdId
      script.type = "application/ld+json"
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: "Christopher Catana",
          jobTitle: t.landing.subtitle,
          url: "https://catana.media",
          sameAs: [
            "https://www.instagram.com/catanaaudio/",
            "https://www.youtube.com/@CatanaAudio",
          ],
        },
        {
          "@type": "ProfessionalService",
          name: "CATANA MEDIA",
          url: "https://catana.media",
          description: t.meta.description,
          areaServed: "Worldwide",
          knowsAbout: [
            t.marquee.creativeDirection,
            t.marquee.livePerformance,
            t.marquee.video,
            t.marquee.audio,
            t.marquee.photo,
            t.marquee.editing,
            t.marquee.production,
            t.marquee.events,
          ],
        },
      ],
    })
  }, [t, locale])

  return null
}
