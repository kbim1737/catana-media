"use client"

import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

interface ViewHeaderProps {
  title: string
  onBack: () => void
}

export function ViewHeader({ title, onBack }: ViewHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl [-webkit-backdrop-filter:blur(24px)] border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors duration-300 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm uppercase tracking-widest font-medium">Back</span>
          </button>

          {/* Logo */}
          <span className="absolute left-1/2 -translate-x-1/2 text-lg font-bold tracking-tighter text-foreground">
            CATANA MEDIA
          </span>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
