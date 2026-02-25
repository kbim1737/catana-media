"use client"

import { useState, useCallback, useRef } from "react"

export type ViewName = "home" | "portfolio" | "about" | "inquiries"

export function useViewNavigation() {
  const [activeView, setActiveView] = useState<ViewName>("home")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<"enter" | "exit">("enter")
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const navigateTo = useCallback((view: ViewName) => {
    if (isTransitioning || view === activeView) return

    setIsTransitioning(true)
    setTransitionDirection("exit")

    // Exit animation (600ms) → swap view → enter animation (600ms)
    timeoutRef.current = setTimeout(() => {
      setActiveView(view)
      setTransitionDirection("enter")

      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false)
      }, 600)
    }, 600)
  }, [isTransitioning, activeView])

  const goHome = useCallback(() => {
    navigateTo("home")
  }, [navigateTo])

  return {
    activeView,
    isTransitioning,
    transitionDirection,
    navigateTo,
    goHome,
  }
}
