# Multilingual + SEO Implementation Plan

## Phase 1: Translation System (3 new files) — STATUS: IN PROGRESS

### 1. `lib/translations.ts` — DONE
All translation strings for EN/ES/HU/RO organized by section.

### 2. `hooks/use-translation.tsx` — DONE
React Context + LanguageProvider + useTranslation hook with localStorage persistence and browser detection.

### 3. `components/language-switcher.tsx` — TODO
- Lucide Globe icon + compact dropdown (EN / ES / HU / RO)
- Calls `setLocale` from `useTranslation()`
- Click outside closes dropdown
- Placed next to ThemeToggle in landing-view + view-header

---

## Phase 2: Wire Translations (14 files modified) — TODO

### 4. `app/layout.tsx`
- Wrap children with `<LanguageProvider>`
- Remove static metadata export (will be handled client-side via `useEffect` + `document.title`)
- Keep font + viewport exports

### 5. `app/page.tsx`
- Add hash URL sync: `history.pushState` on navigation → `#portfolio`, `#about`, `#inquiries`
- On load: read hash → navigate to that view
- Import `useViewNavigation` already there — just add hash sync logic

### 6. `components/views/landing-view.tsx`
- Import `useTranslation`
- Nav links: change `navLinks` from const array to computed from `t.nav.portfolio`, `t.nav.about`, `t.nav.inquiries`
- Subtitle: `t.landing.subtitle`
- Heading: `t.landing.sameStandards` + `t.landing.aroundTheWorld`
- Add `<LanguageSwitcher />` next to `<ThemeToggle />`

### 7. `components/views/portfolio-view.tsx`
- Import `useTranslation`
- Title: `t.nav.portfolio`

### 8. `components/views/about-view.tsx`
- Import `useTranslation`
- Title: `t.nav.about`

### 9. `components/views/inquiries-view.tsx`
- Import `useTranslation`
- Title: `t.nav.inquiries`

### 10. `components/view-header.tsx`
- Import `useTranslation` + `LanguageSwitcher`
- "Back" text: `t.nav.back`
- Add `<LanguageSwitcher />` next to `<ThemeToggle />`

### 11. `components/about-section.tsx`
- Import `useTranslation`
- Label: `t.about.label`
- Heading: `t.about.heading`
- Bio paragraphs: `t.about.bio1`, `t.about.bio2`, `t.about.bio3`
- Stats labels: `t.about.statVideos`, `t.about.statViews`, `t.about.statArtists`

### 12. `components/contact-section.tsx`
- Import `useTranslation`
- Heading: `t.contact.heading` + `t.contact.headingAccent`
- Description: `t.contact.description`
- Form labels: `t.contact.labelName`, `.labelEmail`, `.labelProject`, `.labelMessage`
- Placeholders: `t.contact.placeholderName`, etc.
- Project types: `t.contact.projectMusicVideo`, etc.
- Button states: `t.contact.buttonSend`, `.buttonSending`, `.buttonSent`, `.buttonError`

### 13. `components/testimonials.tsx`
- Import `useTranslation`
- Title: `t.testimonials.title`
- Role labels: use `t.testimonials.roleRecordingArtist` / `t.testimonials.roleEPShowrunner`
- Quotes stay in English (real quotes from real people)

### 14. `components/portfolio-grid.tsx`
- Import `useTranslation`
- "All" filter button: `t.portfolio.filterAll` (replace first entry in categories display)
- Aria-labels: `t.portfolio.ariaClose`, `.ariaPrev`, `.ariaNext`

### 15. `components/worked-with.tsx`
- Import `useTranslation`
- Title: `t.workedWith.title`

### 16. `components/marquee-ticker.tsx`
- Import `useTranslation`
- All items computed from `t.marquee.*`

### 17. `components/theme-toggle.tsx`
- Import `useTranslation`
- Aria-label: `t.theme.switchToLight` / `t.theme.switchToDark`

---

## Phase 3: SEO (2 new files + meta updates) — TODO

### 18. Client-side meta tags (in `app/page.tsx` or a new `components/seo-head.tsx`)
- Since this is a client-side SPA, use `useEffect` to dynamically set:
  - `document.title` = `t.meta.title`
  - Meta description tag
  - Meta keywords tag
  - Open Graph tags (og:title, og:description, og:image, og:type, og:url)
  - Twitter card meta tags
- Also inject `<link rel="alternate" hreflang="xx">` for all 4 languages
- Inject JSON-LD structured data:
  - `Person` schema: Christopher Catana, jobTitle, url, sameAs (Instagram, YouTube)
  - `ProfessionalService` schema: video production, areaServed, knowsAbout

### 19. `app/sitemap.ts` — New file
```ts
import type { MetadataRoute } from "next"
const locales = ["en", "es", "hu", "ro"]
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://catana.media",
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(locales.map(l => [l, `https://catana.media?lang=${l}`]))
      },
    },
    // entries for #portfolio, #about, #inquiries
  ]
}
```

### 20. `app/robots.ts` — New file
```ts
import type { MetadataRoute } from "next"
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://catana.media/sitemap.xml",
  }
}
```

---

## Execution Order

1. ~~Create `lib/translations.ts`~~ DONE
2. ~~Create `hooks/use-translation.tsx`~~ DONE
3. Create `components/language-switcher.tsx`
4. Update `app/layout.tsx` (wrap with LanguageProvider)
5. Wire translations into all components (steps 6-17, can be done in bulk)
6. Add hash URL sync to `app/page.tsx`
7. Add SEO component for client-side meta tags
8. Create `app/sitemap.ts` and `app/robots.ts`
9. Run `pnpm build` to verify

---

## Verification Checklist
- [ ] `pnpm build` passes clean
- [ ] Globe icon toggles all 4 languages, all text updates
- [ ] localStorage persists language across refresh
- [ ] Browser language auto-detection works
- [ ] `<html lang="xx">` updates in DevTools
- [ ] Hash URLs work: navigate to #portfolio, refresh → opens portfolio
- [ ] View page source: meta tags, keywords, hreflang, JSON-LD present
- [ ] `/sitemap.xml` accessible
