"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/hooks/use-translation"

export function ThemeToggle() {
  const { t } = useTranslation()
  const [dark, setDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const saved = localStorage.getItem("theme")
    const isDark = saved ? saved === "dark" : prefersDark
    setDark(isDark)
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light")
    setMounted(true)
  }, [])

  function toggle() {
    const next = !dark
    setDark(next)
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light")
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  if (!mounted) return <div className="w-11 h-6" />

  return (
    <button
      onClick={toggle}
      className="relative w-11 h-6 rounded-full transition-colors duration-500 focus:outline-none"
      style={{
        backgroundColor: dark ? "oklch(0.65 0.17 230)" : "oklch(0.55 0.24 350)",
      }}
      aria-label={dark ? t.theme.switchToLight : t.theme.switchToDark}
    >
      <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]" />
      <div
        className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300"
        style={{
          left: dark ? "2px" : "calc(100% - 22px)",
        }}
      />
    </button>
  )
}
