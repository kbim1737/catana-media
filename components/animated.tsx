"use client"

import { type ReactNode, type CSSProperties, useState, useEffect, useRef, useCallback } from "react"
import { useScrollAnimation, useParallax } from "@/hooks/use-scroll-animation"

/* ── Reveal ─────────────────────────────────────────────── */
interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  distance?: number
  once?: boolean
  threshold?: number
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  distance = 60,
  once = true,
  threshold = 0.15,
}: RevealProps) {
  const { ref, isVisible } = useScrollAnimation({ once, threshold })

  const directionMap: Record<string, string> = {
    up: `translate3d(0, ${distance}px, 0)`,
    down: `translate3d(0, -${distance}px, 0)`,
    left: `translate3d(${distance}px, 0, 0)`,
    right: `translate3d(-${distance}px, 0, 0)`,
    none: "translate3d(0, 0, 0)",
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : directionMap[direction],
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

/* ── StaggerChildren ────────────────────────────────────── */
interface StaggerChildrenProps {
  children: ReactNode[]
  className?: string
  childClassName?: string
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  duration?: number
  threshold?: number
}

export function StaggerChildren({
  children,
  className = "",
  childClassName = "",
  staggerDelay = 0.12,
  direction = "up",
  distance = 50,
  duration = 0.7,
  threshold = 0.1,
}: StaggerChildrenProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })

  const directionMap: Record<string, string> = {
    up: `translate3d(0, ${distance}px, 0)`,
    down: `translate3d(0, -${distance}px, 0)`,
    left: `translate3d(${distance}px, 0, 0)`,
    right: `translate3d(-${distance}px, 0, 0)`,
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          className={childClassName}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translate3d(0, 0, 0)" : directionMap[direction],
            transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

/* ── ParallaxSection ────────────────────────────────────── */
interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ children, className = "", speed = 0.3 }: ParallaxSectionProps) {
  const { ref, offset } = useParallax(speed)

  return (
    <div ref={ref} className={className}>
      <div style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
        {children}
      </div>
    </div>
  )
}

/* ── SectionReveal3D ────────────────────────────────────── */
/*
   iOS Safari fix: instead of using CSS `perspective` on a parent
   (which causes rendering bugs on iOS), we apply the perspective
   directly in the transform string of the animated child.
   We also avoid `overflow:hidden` on the perspective wrapper
   and remove `willChange` which causes blank layers on iOS.
*/
interface SectionReveal3DProps {
  children: ReactNode
  className?: string
  origin?: "bottom" | "left" | "right" | "top"
  delay?: number
  threshold?: number
  rootMargin?: string
  intensity?: "normal" | "dramatic"
}

export function SectionReveal3D({
  children,
  className = "",
  origin = "bottom",
  delay = 0,
  threshold = 0.05,
  rootMargin,
  intensity = "normal",
}: SectionReveal3DProps) {
  const { ref, isVisible } = useScrollAnimation({ once: true, threshold, rootMargin })

  const angle = intensity === "dramatic" ? 16 : 10
  const dist = intensity === "dramatic" ? 100 : 60

  /* Build transform strings with perspective() baked in — iOS-safe */
  const hidden: Record<string, string> = {
    bottom: `perspective(800px) rotateX(${angle}deg) translate3d(0, ${dist}px, 0) scale(0.94)`,
    top: `perspective(800px) rotateX(-${angle}deg) translate3d(0, -${dist}px, 0) scale(0.94)`,
    left: `perspective(800px) rotateY(${angle}deg) translate3d(-${dist}px, 0, 0) scale(0.94)`,
    right: `perspective(800px) rotateY(-${angle}deg) translate3d(${dist}px, 0, 0) scale(0.94)`,
  }

  const origins: Record<string, string> = {
    bottom: "center bottom",
    top: "center top",
    left: "left center",
    right: "right center",
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "perspective(800px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale(1)"
          : hidden[origin],
        transformOrigin: origins[origin],
        transition: `opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

/* ── FlipReveal ─────────────────────────────────────────── */
/*
   iOS fix: perspective() baked into the transform, no parent
   perspective div. Removed backfaceVisibility.
*/
interface FlipRevealProps {
  children: ReactNode
  className?: string
  axis?: "x" | "y"
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function FlipReveal({
  children,
  className = "",
  axis = "x",
  delay = 0,
  threshold = 0.1,
  rootMargin,
}: FlipRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ once: true, threshold, rootMargin })

  const hiddenTransform =
    axis === "x"
      ? "perspective(800px) rotateX(70deg) translate3d(0, 40px, 0)"
      : "perspective(800px) rotateY(70deg) translate3d(40px, 0, 0)"

  const visibleTransform = "perspective(800px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)"

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? visibleTransform : hiddenTransform,
        transformOrigin: axis === "x" ? "center bottom" : "left center",
        transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

/* ── CinematicZoom ──────────────────────────────────────── */
/*
   iOS fix: perspective() inside transform string, no wrapper div.
*/
interface CinematicZoomProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export function CinematicZoom({
  children,
  className = "",
  delay = 0,
  threshold = 0.08,
}: CinematicZoomProps) {
  const { ref, isVisible } = useScrollAnimation({ once: true, threshold })

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "perspective(1000px) translate3d(0, 0, 0) scale(1) rotateX(0deg)"
          : "perspective(1000px) translate3d(0, 0, -200px) scale(0.8) rotateX(6deg)",
        transition: `opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

/* ── ScrollRotate ───────────────────────────────────────── */
/*
   iOS fix: use requestAnimationFrame instead of setState on
   every scroll event. Avoids excessive re-renders on iOS.
   Use translate3d to hardware-accelerate.
*/
interface ScrollRotateProps {
  children: ReactNode
  className?: string
  axis?: "x" | "y"
  maxDeg?: number
}

export function ScrollRotate({
  children,
  className = "",
  axis = "y",
  maxDeg = 8,
}: ScrollRotateProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const update = () => {
      const rect = container.getBoundingClientRect()
      const windowH = window.innerHeight
      const progress = (rect.top + rect.height / 2) / windowH
      const deg = (progress - 0.5) * 2 * maxDeg
      const transform =
        axis === "x"
          ? `perspective(800px) rotateX(${deg}deg)`
          : `perspective(800px) rotateY(${deg}deg)`
      inner.style.transform = transform
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [axis, maxDeg])

  return (
    <div ref={containerRef} className={className}>
      <div ref={innerRef} style={{ transition: "transform 0.15s linear" }}>
        {children}
      </div>
    </div>
  )
}

/* ── CountUp ────────────────────────────────────────────── */
interface CountUpProps {
  target: number
  suffix?: string
  className?: string
  duration?: number
}

export function CountUp({ target, suffix = "", className = "", duration = 2000 }: CountUpProps) {
  const { ref, isVisible } = useScrollAnimation({ once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}

/* ── HorizontalReveal ───────────────────────────────────── */
/*
   iOS fix: use transform scaleX instead of clip-path, which
   is much more reliable on iOS Safari.
*/
interface HorizontalRevealProps {
  children: ReactNode
  className?: string
  direction?: "left" | "right"
  delay?: number
}

export function HorizontalReveal({
  children,
  className = "",
  direction = "right",
  delay = 0,
}: HorizontalRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={className}
      style={{
        overflow: "hidden",
      }}
    >
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translate3d(0, 0, 0)"
            : direction === "right"
              ? "translate3d(100%, 0, 0)"
              : "translate3d(-100%, 0, 0)",
          transition: `opacity 0.8s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s, transform 1.2s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

/* ── LineGrow ───────────────────────────────────────────── */
interface LineGrowProps {
  className?: string
  delay?: number
}

export function LineGrow({ className = "", delay = 0 }: LineGrowProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 })

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: isVisible ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left center",
        transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    />
  )
}

/* ── ScaleIn ────────────────────────────────────────────── */
/*
   iOS fix: removed filter:blur() which causes rendering issues
   on iOS Safari. Using only opacity + scale.
*/
interface ScaleInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScaleIn({ children, className = "", delay = 0 }: ScaleInProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.85)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
