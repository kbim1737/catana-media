"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useMemo } from "react"
import { Instagram, Mail, Youtube } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MarqueeTicker } from "@/components/marquee-ticker"
import { useTranslation } from "@/hooks/use-translation"
import type { ViewName } from "@/hooks/use-view-navigation"

interface LandingViewProps {
  onNavigate: (view: ViewName) => void
}

const socialLinks = [
  { href: "https://www.instagram.com/catanaaudio/?hl=en", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@CatanaAudio", icon: Youtube, label: "YouTube" },
  { href: "mailto:mediacatana@gmail.com", icon: Mail, label: "Email" },
]

export function LandingView({ onNavigate }: LandingViewProps) {
  const { t } = useTranslation()
  const [loaded, setLoaded] = useState(false)
  const [tilted, setTilted] = useState(false)
  const [showSweep, setShowSweep] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(false)

  const navLinks = useMemo(
    () => [
      { label: t.nav.portfolio, view: "portfolio" as ViewName },
      { label: t.nav.about, view: "about" as ViewName },
      { label: t.nav.inquiries, view: "inquiries" as ViewName },
    ],
    [t]
  )

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024)
    check()
    window.addEventListener("resize", check)
    const timer1 = setTimeout(() => setLoaded(true), 100)
    const timer2 = setTimeout(() => { setTilted(true); setShowSweep(true) }, 1200)
    const timer3 = setTimeout(() => setShowSweep(false), 2200)
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); window.removeEventListener("resize", check) }
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40
    const y = (e.clientY / window.innerHeight - 0.5) * 40
    setMousePos({ x, y })
  }, [])

  return (
    <div className="min-h-screen flex flex-col overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Full-screen hero area */}
      <div className="relative flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Background image with mouse parallax */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-[-30px]"
            style={{
              transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0) scale(1.06)`,
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Desktop background */}
            <Image
              src="/images/hero-bg5.jpg"
              alt=""
              fill
              className="object-cover object-left hidden md:block"
              priority
            />
            {/* Mobile background */}
            <Image
              src="/images/hero-bg4.jpg"
              alt=""
              fill
              className="object-cover object-left md:hidden"
              priority
            />
          </div>
          {/* Dark overlay + left gradient for text readability */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>

        {/* Grid lines overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[1 / 4, 1 / 2, 3 / 4].map((pos, i) => (
            <div
              key={i}
              className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"
              style={{
                left: `${pos * 100}%`,
                opacity: loaded ? 1 : 0,
                transition: `opacity 2s ease-out ${1.5 + i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Top bar: Logo + Theme Toggle + Language Switcher */}
        <div className="relative z-20 flex items-center justify-between px-6 lg:px-12 pt-6 lg:pt-8">
          <div
            className="flex items-center gap-0.5 lg:gap-3"
            style={{
              transform: !loaded
                ? "translate3d(-30px, -10px, 0) rotate(0deg)"
                : tilted
                  ? "translate3d(0, 0, 0) rotate(-2deg)"
                  : "translate3d(0, 0, 0) rotate(0deg)",
              opacity: loaded ? 1 : 0,
              transition: !loaded
                ? "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, opacity 0.8s ease 0.2s"
                : "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease 0.2s",
            }}
          >
            <span className="text-2xl lg:text-3xl font-bold tracking-tighter text-white mr-[-36px] lg:mr-0 leading-none lg:leading-normal">
              CATANA MEDIA
            </span>
            <span className="w-px h-8 lg:h-6 bg-primary" />
            <span className="text-xs lg:text-sm uppercase tracking-[0.2em] text-primary font-medium ml-2.5 lg:ml-0">
              {t.landing.subtitle}
            </span>
          </div>
          <div
            className="flex flex-col lg:flex-row items-end lg:items-center gap-2 lg:gap-3"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translate3d(0, 0, 0)" : "translate3d(20px, 0, 0)",
              transition: "all 0.6s ease 0.5s",
            }}
          >
            <LanguageSwitcher className="text-white/70 hover:text-white" />
            <ThemeToggle />
          </div>
        </div>

        {/* Main content area */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-stretch px-6 lg:px-12 pb-8">
          {/* Left side: Large nav links */}
          <div className="flex-1 flex flex-col justify-start pt-16 lg:justify-center lg:py-0">
            <nav className="flex flex-col gap-3 lg:gap-4">
              {navLinks.map((link, i) => (
                <button
                  key={link.view}
                  onClick={() => onNavigate(link.view)}
                  className="group text-left"
                  style={{
                    transform: !loaded
                      ? "translate3d(-60px, 0, 0) rotate(0deg)"
                      : tilted
                        ? "translate3d(0, 0, 0) rotate(-1.5deg)"
                        : "translate3d(0, 0, 0) rotate(0deg)",
                    opacity: loaded ? 1 : 0,
                    transition: !loaded
                      ? `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.12}s, opacity 0.8s ease ${0.4 + i * 0.12}s`
                      : `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.08}s, opacity 0.8s ease ${0.4 + i * 0.12}s`,
                  }}
                >
                  <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-primary">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                    {showSweep && !isDesktop && (
                      <span
                        className="absolute -bottom-1 left-0 w-full h-1 bg-primary animate-underline-sweep"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Right side: Subtitle + heading */}
          <div className="flex-1 flex flex-col justify-start pt-4 lg:justify-center items-start lg:items-end text-left lg:text-right lg:py-0">
            <div
              style={{
                transform: !loaded
                  ? "translate3d(40px, 20px, 0) rotate(0deg)"
                  : tilted
                    ? "translate3d(0, 0, 0) rotate(1deg)"
                    : "translate3d(0, 0, 0) rotate(0deg)",
                opacity: loaded ? 1 : 0,
                transition: !loaded
                  ? "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s, opacity 1s ease 0.6s"
                  : "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1s ease 0.6s",
              }}
            >
              <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.9]">
                {t.landing.sameStandards.split(" ").map((word, i, arr) => (
                  <span key={i}>
                    {i === 0 ? word + " " : ""}
                    {i === 1 ? <span className="text-primary">{word}</span> : ""}
                    {i === 1 && <br />}
                  </span>
                ))}
                {t.landing.aroundTheWorld.split(" ").map((word, i, arr) => (
                  <span key={`w-${i}`}>
                    {i < arr.length - 1 ? word + " " : <span className="text-primary">{word}</span>}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        </div>

        {/* Social icons — bottom center of hero */}
        <div className="absolute bottom-20 left-0 right-0 z-20 flex items-center justify-center gap-6">
          {socialLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors duration-300"
              aria-label={link.label}
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translate3d(0, 0, 0)" : "translate3d(0, 10px, 0)",
                transition: `opacity 0.6s ease ${1.2 + i * 0.15}s, transform 0.6s ease ${1.2 + i * 0.15}s, color 0.3s ease`,
              }}
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>

      {/* Marquee ticker at the very bottom */}
      <MarqueeTicker />
    </div>
  )
}
