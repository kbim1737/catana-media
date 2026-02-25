"use client"

import Image from "next/image"
import {
  Reveal,
  CountUp,
  StaggerChildren,
  SectionReveal3D,
  ScrollRotate,
} from "@/components/animated"

const stats = [
  { number: 1000, suffix: "+", label: "Videos/Shorts Shot & Directed" },
  { number: 300, suffix: "M+", label: "Total Views" },
  { number: 250, suffix: "+", label: "Artists & Clients" },
]

export function AboutSection() {
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
                  About
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-6 text-balance">
                  Turning Dreams Into a Reality
                </h2>
              </Reveal>
              <Reveal direction="right" delay={0.3}>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hey! My name is Christopher Catana – I have been passionate
                    about all forms of art &amp; media since I was very young.
                    Through the years of learning and networking, I have reached
                    the point where I want to make others&apos; dreams and
                    imaginations become a reality!
                  </p>
                  <p>
                    I don&apos;t just point a camera. I immerse myself in the
                    project. I work closely with every client to understand what
                    your media platform or art needs to achieve the goals we set.
                    Then we start constructing foundations and pillars to make
                    processes and goals easier and faster to achieve! From $0
                    shoots to high-end productions, the standards stay the same.
                  </p>
                  <p>
                    300M+ views and counting, but the numbers aren&apos;t the
                    point. The point is making something that artists and fans
                    keep coming back to watch.
                  </p>
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
