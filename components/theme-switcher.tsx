"use client"

import { useState, useEffect } from "react"

export function ThemeSwitcher() {
  const [dark, setDark] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const saved = localStorage.getItem("theme")
    const isDark = saved ? saved === "dark" : prefersDark
    setDark(isDark)
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light")
    setMounted(true)
  }, [])

  function toggle() {
    setPressed(true)
    setTimeout(() => setPressed(false), 200)
    const next = !dark
    setDark(next)
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light")
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggle}
      className="fixed top-20 right-6 z-50 group"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Mounting plate */}
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-b from-zinc-600 to-zinc-800 p-1 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]">
        {/* Inner ring / bezel */}
        <div className="w-full h-full rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 p-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
          {/* The red button */}
          <div
            className="w-full h-full rounded-full relative overflow-hidden transition-all duration-150"
            style={{
              background: dark
                ? "radial-gradient(circle at 35% 35%, #ff4444, #cc0000 50%, #880000)"
                : "radial-gradient(circle at 35% 35%, #ff6666, #aa2222 50%, #661111)",
              boxShadow: pressed
                ? "inset 0 3px 8px rgba(0,0,0,0.6)"
                : dark
                  ? "0 3px 12px rgba(255,50,50,0.4), inset 0 -2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,150,150,0.3)"
                  : "0 1px 4px rgba(100,0,0,0.3), inset 0 2px 6px rgba(0,0,0,0.4)",
              transform: pressed ? "scale(0.95)" : "scale(1)",
            }}
          >
            {/* Highlight / gloss */}
            <div
              className="absolute top-1 left-2 w-6 h-3 rounded-full transition-opacity duration-150"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.45), rgba(255,255,255,0))",
                opacity: pressed ? 0.15 : 0.5,
              }}
            />

            {/* ON/OFF indicator light */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2">
              <div
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: dark ? "#44ff88" : "#333",
                  boxShadow: dark ? "0 0 6px #44ff88, 0 0 12px #44ff8866" : "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="mt-1.5 text-center">
        <span className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
          {dark ? "ON" : "OFF"}
        </span>
      </div>
    </button>
  )
}
