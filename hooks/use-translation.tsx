"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { translations, type Locale, type TranslationStrings } from "@/lib/translations"

interface TranslationContextValue {
  t: TranslationStrings
  locale: Locale
  setLocale: (locale: Locale) => void
}

const TranslationContext = createContext<TranslationContextValue | null>(null)

const STORAGE_KEY = "lang"
const SUPPORTED: Locale[] = ["en", "es", "hu", "ro"]

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "en"
  const lang = navigator.language.toLowerCase()
  // Check exact match first (e.g. "hu", "ro")
  const exact = SUPPORTED.find((l) => lang === l)
  if (exact) return exact
  // Check prefix (e.g. "es-MX" → "es")
  const prefix = SUPPORTED.find((l) => lang.startsWith(l + "-"))
  if (prefix) return prefix
  return "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
    const initial = saved && SUPPORTED.includes(saved) ? saved : detectBrowserLocale()
    setLocaleState(initial)
    document.documentElement.lang = initial
    setMounted(true)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }, [])

  const value: TranslationContextValue = {
    t: translations[locale],
    locale,
    setLocale,
  }

  // Avoid hydration mismatch — render children immediately but with default locale
  // The useEffect will correct it on mount
  if (!mounted) {
    return (
      <TranslationContext.Provider value={{ t: translations.en, locale: "en", setLocale }}>
        {children}
      </TranslationContext.Provider>
    )
  }

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(TranslationContext)
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider")
  return ctx
}
