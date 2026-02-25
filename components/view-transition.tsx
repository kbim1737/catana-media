"use client"

import { useEffect, useState, useRef } from "react"
import type { ViewName } from "@/hooks/use-view-navigation"

interface ViewTransitionProps {
  viewName: ViewName
  activeView: ViewName
  isTransitioning: boolean
  transitionDirection: "enter" | "exit"
  children: React.ReactNode
}

export function ViewTransition({
  viewName,
  activeView,
  isTransitioning,
  transitionDirection,
  children,
}: ViewTransitionProps) {
  const [shouldRender, setShouldRender] = useState(viewName === activeView)
  const containerRef = useRef<HTMLDivElement>(null)
  const isActive = viewName === activeView

  useEffect(() => {
    if (isActive) {
      setShouldRender(true)
      // Reset scroll position when entering a view
      if (containerRef.current) {
        containerRef.current.scrollTop = 0
      }
    } else if (!isTransitioning) {
      // Remove from DOM after transition completes
      const timer = setTimeout(() => setShouldRender(false), 50)
      return () => clearTimeout(timer)
    }
  }, [isActive, isTransitioning])

  if (!shouldRender) return null

  const getTransformStyle = () => {
    if (!isActive && !isTransitioning) {
      return {
        opacity: 0,
        transform: "perspective(1000px) translate3d(0, 0, -300px)",
        pointerEvents: "none" as const,
      }
    }

    if (isTransitioning && transitionDirection === "exit" && isActive) {
      // Current view is exiting — but this is the OLD view being replaced
      // Actually: during exit, the activeView hasn't changed yet
      return {
        opacity: 0,
        transform: "perspective(1000px) translate3d(0, 0, 300px)",
        pointerEvents: "none" as const,
      }
    }

    if (isTransitioning && transitionDirection === "enter" && isActive) {
      // New view entering
      return {
        opacity: 1,
        transform: "perspective(1000px) translate3d(0, 0, 0)",
        pointerEvents: "auto" as const,
      }
    }

    if (isActive && !isTransitioning) {
      return {
        opacity: 1,
        transform: "perspective(1000px) translate3d(0, 0, 0)",
        pointerEvents: "auto" as const,
      }
    }

    return {
      opacity: 0,
      transform: "perspective(1000px) translate3d(0, 0, -300px)",
      pointerEvents: "none" as const,
    }
  }

  const style = getTransformStyle()

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-y-auto"
      style={{
        ...style,
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}
