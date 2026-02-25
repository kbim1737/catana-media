"use client"

import Image from "next/image"
import {
  Reveal,
  CountUp,
  StaggerChildren,
  SectionReveal3D,
  ScrollRotate,
} from "@/components/animated"
import { useTranslation } from "@/hooks/use-translation"

export function AboutSection() {
  const { t } = useTranslation()

  const stats = [
    { number: 1000, suffix: "+", label: t.about.statVideos },
    { number: 300, suffix: "M+", label: t.about.statViews },
    { number: 250, suffix: "+", label: t.about.statArtists },
  ]

  return (
    <SectionReveal3D origin="left" intensity="dramatic">
      <section id="about" className="py-24 lg:py-32 bg-card overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image with scroll-driven subtle 3D rotation */}
            <Reveal direction="left" delay={0.1}>
              <ScrollRotate axis="y" maxDeg={4}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/about2.jpg"
                    alt="Christopher Catana directing on set"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </ScrollRotate>
            </Reveal>

            {/* Content */}
            <div>
              <Reveal direction="right" delay={0.1}>
                <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">
                  {t.about.label}
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-6 text-balance">
                  {t.about.heading}
                </h2>
              </Reveal>
              <Reveal direction="right" delay={0.3}>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t.about.bio1}</p>
                  <p>{t.about.bio2}</p>
                  <p>{t.about.bio3}</p>
                </div>
              </Reveal>

              {/* Stats */}
              <StaggerChildren
                className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border"
                staggerDelay={0.15}
                direction="up"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl lg:text-4xl font-bold text-primary tracking-tighter">
                      <CountUp target={stat.number} suffix={stat.suffix} duration={2500} />
                    </p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </StaggerChildren>

            </div>
          </div>
        </div>
      </section>
    </SectionReveal3D>
  )
}
