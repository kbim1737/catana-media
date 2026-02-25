"use client"

import { useState, useRef, useEffect } from "react"
import { Globe } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import type { Locale } from "@/lib/translations"

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "hu", label: "HU" },
  { code: "ro", label: "RO" },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground transition-colors duration-300"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="text-xs uppercase tracking-widest font-medium">{locale}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-background border border-border rounded shadow-lg overflow-hidden z-50 min-w-[80px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setLocale(lang.code); setOpen(false) }}
              className={`w-full px-4 py-2 text-xs uppercase tracking-widest text-left transition-colors duration-200 ${
                locale === lang.code
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:bg-muted hover:text-foreground"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
