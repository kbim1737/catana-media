"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px 500px 0px", once = true } = options
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  const handleScroll = useCallback(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const elementCenter = rect.top + rect.height / 2
    const distanceFromCenter = elementCenter - windowHeight / 2
    setOffset(distanceFromCenter * speed * -0.1)
  }, [speed])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return { ref, offset }
}
