"use client"

import Image from "next/image"
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState, useEffect, useMemo, useCallback } from "react"
import { createPortal } from "react-dom"
import { Reveal, FlipReveal } from "@/components/animated"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { projects, categories, type Project } from "@/lib/data"
import { useTranslation } from "@/hooks/use-translation"

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type Layout = "cinema" | "two" | "one"

const layoutIcons: { value: Layout; icon: React.ReactNode }[] = [
  {
    value: "cinema",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="2" width="14" height="5" rx="1" fill="currentColor" />
        <rect x="1" y="9" width="6" height="5" rx="1" fill="currentColor" />
        <rect x="9" y="9" width="6" height="5" rx="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    value: "two",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="2" width="6" height="5" rx="1" fill="currentColor" />
        <rect x="9" y="2" width="6" height="5" rx="1" fill="currentColor" />
        <rect x="1" y="9" width="6" height="5" rx="1" fill="currentColor" />
        <rect x="9" y="9" width="6" height="5" rx="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    value: "one",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="2" width="14" height="5" rx="1" fill="currentColor" />
        <rect x="1" y="9" width="14" height="5" rx="1" fill="currentColor" />
      </svg>
    ),
  },
]

function ProjectCard({
  project,
  index,
  isWide,
  onClick,
}: {
  project: Project
  index: number
  isWide: boolean
  onClick: () => void
}) {
  return (
    <FlipReveal axis={index % 2 === 0 ? "x" : "y"} delay={index * 0.05} threshold={0} className={isWide ? "md:col-span-2" : ""}>
      <article
        onClick={onClick}
        className={`group relative overflow-hidden cursor-pointer ${
          isWide ? "aspect-[21/9]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={`https://img.youtube.com/vi/${project.id}/maxresdefault.jpg`}
          alt={`${project.title} - ${project.artist}`}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          priority={index < 3}
        />
        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/60 transition-all duration-700" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center transition-all duration-500 group-hover:scale-100 scale-0">
            <Play className="h-7 w-7 text-primary-foreground ml-1" />
          </div>
        </div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-1">
                {project.title}
              </p>
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-white">
                {project.artist}
              </h3>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-primary mb-1">
                {project.role}
              </p>
              <div className="transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-widest text-white">
                  {project.category}
                </p>
                <p className="text-sm text-white">{project.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Corner accents on hover */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/0 group-hover:border-primary/40 transition-all duration-500 group-hover:w-10 group-hover:h-10" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/0 group-hover:border-primary/40 transition-all duration-500 group-hover:w-10 group-hover:h-10" />
      </article>
    </FlipReveal>
  )
}

function HorizontalCard({
  project,
  index,
  onClick,
}: {
  project: Project
  index: number
  onClick: () => void
}) {
  const reversed = index % 2 !== 0

  return (
    <FlipReveal axis="x" delay={index * 0.05} threshold={0}>
      <article
        onClick={onClick}
        className={`group cursor-pointer flex overflow-hidden border border-border/50 hover:border-border transition-all duration-500 ${
          reversed ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Thumbnail */}
        <div className="relative w-1/3 shrink-0 aspect-[3/1] overflow-hidden">
          <Image
            src={`https://img.youtube.com/vi/${project.id}/maxresdefault.jpg`}
            alt={`${project.title} - ${project.artist}`}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            priority={index < 3}
          />
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-all duration-700" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-all duration-500 group-hover:scale-100 scale-0">
              <Play className="h-3 w-3 text-primary-foreground ml-0.5" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col justify-center p-3 lg:p-6 bg-card">
          <p className="text-[10px] uppercase tracking-widest text-primary mb-0.5">
            {project.title}
          </p>
          <h3 className="text-sm lg:text-base font-bold tracking-tight text-foreground mb-1.5">
            {project.artist}
          </h3>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>{project.role}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>{project.category}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>{project.year}</span>
          </div>
        </div>
      </article>
    </FlipReveal>
  )
}

export function PortfolioGrid() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState("All")
  const [layout, setLayout] = useState<Layout>("cinema")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [views, setViews] = useState<Record<string, number>>({})

  useEffect(() => {
    const ids = projects.map((p) => p.id).join(",")
    fetch(`/api/views?ids=${ids}`)
      .then((r) => r.json())
      .then((data) => setViews(data))
      .catch(() => {})
  }, [])

  const sortedProjects = useMemo(() => {
    if (Object.keys(views).length === 0) return projects

    const withViews = projects.map((p) => ({ ...p, views: views[p.id] ?? 0 }))
    withViews.sort((a, b) => b.views - a.views)

    const top5 = shuffle(withViews.slice(0, 5))
    const rest = shuffle(withViews.slice(5))

    return [...top5, ...rest]
  }, [views])

  const filteredProjects =
    activeFilter === "All"
      ? sortedProjects
      : sortedProjects.filter((p) => p.category === activeFilter)

  const selectedProject = selectedIndex !== null ? filteredProjects[selectedIndex] : null

  const goNext = useCallback(() => {
    setSelectedIndex((i) => (i !== null ? (i + 1) % filteredProjects.length : null))
  }, [filteredProjects.length])

  const goPrev = useCallback(() => {
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + filteredProjects.length) % filteredProjects.length : null
    )
  }, [filteredProjects.length])

  useEffect(() => {
    if (selectedIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "Escape") setSelectedIndex(null)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [selectedIndex, goNext, goPrev])

  const gridClass =
    layout === "one"
      ? "grid grid-cols-1 gap-4"
      : "grid grid-cols-1 md:grid-cols-2 gap-6"

  return (
    <>
        <section id="work" className="py-8 lg:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <Reveal direction="left">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-foreground text-balance">
                  CATANA MEDIA
                </h2>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <div className="flex items-center gap-2 flex-wrap">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                        activeFilter === cat
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/50"
                      }`}
                    >
                      {cat === "All" ? t.portfolio.filterAll : cat}
                    </button>
                  ))}

                  {/* Divider */}
                  <div className="w-px h-6 bg-border mx-1" />

                  {/* Layout toggles */}
                  {layoutIcons.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setLayout(opt.value)}
                      className={`p-2 transition-all duration-300 ${
                        layout === opt.value
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/50"
                      }`}
                    >
                      {opt.icon}
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Grid */}
            <div className={gridClass}>
              {filteredProjects.map((project, index) => {
                if (layout === "one") {
                  return (
                    <HorizontalCard
                      key={project.id}
                      project={project}
                      index={index}
                      onClick={() => setSelectedIndex(index)}
                    />
                  )
                }

                const isWide = layout === "cinema" && (index === 0 || index === 3)

                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isWide={isWide}
                    onClick={() => setSelectedIndex(index)}
                  />
                )
              })}
            </div>
          </div>
        </section>

      {/* Video Modal — custom, no Radix */}
      {selectedIndex !== null && selectedProject && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-50">
          {/* Backdrop — click to close */}
          <div className="absolute inset-0 bg-black/80 animate-in fade-in-0 duration-200" onClick={() => setSelectedIndex(null)} />

          {/* Arrow: prev */}
          <button
            onClick={() => goPrev()}
            className="absolute left-0 lg:left-[2%] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-6 text-white/60 hover:text-white transition-colors duration-300"
            aria-label={t.portfolio.ariaPrev}
          >
            <ChevronLeft className="h-16 w-16 lg:h-20 lg:w-20" strokeWidth={1.5} />
          </button>

          {/* Arrow: next */}
          <button
            onClick={() => goNext()}
            className="absolute right-0 lg:right-[2%] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-6 text-white/60 hover:text-white transition-colors duration-300"
            aria-label={t.portfolio.ariaNext}
          >
            <ChevronRight className="h-16 w-16 lg:h-20 lg:w-20" strokeWidth={1.5} />
          </button>

          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-10 p-2 text-white/60 hover:text-white transition-colors duration-300"
            aria-label={t.portfolio.ariaClose}
          >
            <X className="h-8 w-8" strokeWidth={1.5} />
          </button>

          {/* Modal content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4">
            <div className="bg-background border border-border rounded-lg overflow-hidden shadow-2xl animate-in zoom-in-95 fade-in-0 duration-200">
              <div className="relative w-full aspect-video">
                <iframe
                  key={selectedProject.id}
                  src={`https://www.youtube.com/embed/${selectedProject.id}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
                  title={selectedProject.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground">
                    {selectedProject.artist}
                  </h3>
                  <p className="text-sm text-primary mt-1">
                    {selectedProject.title}
                  </p>
                </div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground pt-1">
                  {selectedProject.role}
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
