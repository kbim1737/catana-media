"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#work", label: "Portfolio" },
  { href: "#about", label: "About" },
]

function ThemeToggle() {
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
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Track inner shadow */}
      <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]" />

      {/* Thumb */}
      <div
        className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300"
        style={{
          left: dark ? "2px" : "calc(100% - 22px)",
        }}
      />
    </button>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl [-webkit-backdrop-filter:blur(24px)] border-b border-border/50"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{
        transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, -100%, 0)",
        transition:
          "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.5s ease, border-color 0.5s ease",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className={`text-xl font-bold tracking-tighter transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white"}`}>
            CATANA MEDIA
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm uppercase tracking-widest transition-colors duration-300 ${scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white"}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, -10px, 0)",
                  transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s, color 0.3s ease`,
                }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground px-5 py-2 text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, -10px, 0)",
                transition: "opacity 0.5s ease 0.7s, transform 0.5s ease 0.7s, background-color 0.3s ease",
              }}
            >
              Inquiries
            </Link>
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, -10px, 0)",
                transition: "opacity 0.5s ease 0.8s, transform 0.5s ease 0.8s",
              }}
            >
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: toggle + menu button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-8 h-8 flex items-center justify-center transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white"}`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span
                className="absolute transition-all duration-300"
                style={{
                  opacity: isOpen ? 0 : 1,
                  transform: isOpen ? "rotate(90deg) scale(0)" : "rotate(0deg) scale(1)",
                }}
              >
                <Menu className="h-6 w-6" />
              </span>
              <span
                className="absolute transition-all duration-300"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0)",
                }}
              >
                <X className="h-6 w-6" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className="md:hidden overflow-hidden bg-background border-t border-border"
        style={{
          maxHeight: isOpen ? "400px" : "0",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
        }}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
              style={{
                transform: isOpen ? "translate3d(0, 0, 0)" : "translate3d(-20px, 0, 0)",
                opacity: isOpen ? 1 : 0,
                transition: `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s, opacity 0.4s ease ${i * 0.05}s, color 0.3s ease`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-primary-foreground px-5 py-3 text-center text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300"
          >
            Inquiries
          </Link>
        </div>
      </div>
    </nav>
  )
}
