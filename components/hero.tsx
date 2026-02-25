"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

export function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20
    const y = (e.clientY / window.innerHeight - 0.5) * 20
    setMousePos({ x, y })
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background image with subtle mouse parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-[-20px]"
          style={{
            transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0) scale(1.05)`,
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Image
            src="/images/hero-bg5.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
      </div>

      {/* Animated grid lines overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[1 / 4, 1 / 2, 3 / 4].map((pos, i) => (
          <div
            key={i}
            className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"
            style={{
              left: `${pos * 100}%`,
              opacity: loaded ? 1 : 0,
              transition: `opacity 2s ease-out ${1.5 + i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center pt-24">
        {/* Subtitle */}
        <div className="overflow-hidden mb-6">
          <p
            className="text-base sm:text-lg uppercase tracking-[0.4em] text-primary font-semibold [text-shadow:0_0_40px_rgba(255,255,255,0.25),0_0_80px_rgba(255,255,255,0.15),0_0_140px_rgba(255,255,255,0.08)]"
            style={{
              transform: loaded ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)",
              opacity: loaded ? 1 : 0,
              transition:
                "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          >
            Creative Multimedia Director
          </p>
        </div>

        {/* Main heading with per-line reveal */}
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter text-white leading-none">
          {[0, 1].map((i) => (
            <span key={i} className="block overflow-hidden">
              <span
                className="block"
                style={{
                  transform: loaded ? "translate3d(0, 0, 0) rotate(0deg)" : "translate3d(0, 120%, 0) rotate(3deg)",
                  opacity: loaded ? 1 : 0,
                  transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.15}s, opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.15}s`,
                }}
              >
                {i === 0 && <>Same <span className="text-primary">Standards</span></>}
                {i === 1 && <>Around the <span className="text-primary">World</span></>}
              </span>
            </span>
          ))}
        </h1>

      </div>
    </section>
  )
}
