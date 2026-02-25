"use client"

import { Headphones, Film, Clapperboard, Sparkles } from "lucide-react"
import { Reveal, CinematicZoom, LineGrow } from "@/components/animated"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into the track, the artist's vision, and the story we want to tell. Every great visual starts with understanding the sound.",
    icon: Headphones,
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Storyboarding, mood boards, location scouting, and creative direction. We build the world before we ever pick up a camera.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Production",
    description:
      "Cinematic-grade equipment, handpicked crews, and meticulous attention to detail. Every frame is crafted with purpose.",
    icon: Clapperboard,
  },
  {
    number: "04",
    title: "Post & Delivery",
    description:
      "Color grading, VFX, editorial — polished to perfection. Delivered in formats ready for every platform.",
    icon: Film,
  },
]

function ProcessCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })
  const Icon = step.icon

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "perspective(600px) rotateY(0deg) translate3d(0, 0, 0) scale(1)"
          : `perspective(600px) rotateY(${index % 2 === 0 ? 35 : -35}deg) translate3d(0, 0, -80px) scale(0.85)`,
        transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
      }}
    >
      <div>
        <div className="group bg-background p-8 lg:p-10 hover:bg-card transition-colors duration-500 border border-border hover:border-primary/20 relative overflow-hidden h-full">
          {/* Background number */}
          <span className="absolute -right-4 -top-6 text-[8rem] font-bold text-foreground/[0.03] group-hover:text-primary/[0.06] transition-colors duration-700 leading-none select-none">
            {step.number}
          </span>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <span className="text-5xl font-bold text-secondary tracking-tighter group-hover:text-primary/30 transition-colors duration-500">
                {step.number}
              </span>
              <Icon className="h-6 w-6 text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Bottom line that expands on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </div>
      </div>
    </div>
  )
}

export function ProcessSection() {
  return (
    <CinematicZoom>
      <section id="process" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-6">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">
                The Process
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-foreground text-balance">
                How I Work
              </h2>
            </Reveal>
          </div>

          {/* Animated divider line */}
          <div className="flex justify-center mb-20">
            <LineGrow className="w-24 h-px bg-primary/40" delay={0.3} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <ProcessCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>
    </CinematicZoom>
  )
}
