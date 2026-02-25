"use client"

import { Quote } from "lucide-react"
import { Reveal, SectionReveal3D, LineGrow, FlipReveal } from "@/components/animated"
import { useTranslation } from "@/hooks/use-translation"

const testimonials = [
  {
    quote:
      "Kristof doesn't just direct videos -- he builds entire universes around the music. Every project we've done together has been a career-defining moment.",
    name: "Kai Vega",
    roleKey: "roleRecordingArtist" as const,
  },
  {
    quote:
      "The attention to detail is insane. He showed up with a vision that was ten times bigger than what I imagined, and he delivered on every single frame.",
    name: "Dex Monroe",
    roleKey: "roleRecordingArtist" as const,
  },
  {
    quote:
      "Chris Catana is the epitome of a hands-on, efficient producer \u2014 the kind of person every production needs on the ground. Over the course of our time working together, Chris demonstrated a level of versatility that is genuinely rare in television. Chris is a true jack of all trades, and more importantly, he executes at a high level across all of them. Any production would be fortunate to have him.",
    name: "Don Sikorski",
    roleKey: "roleEPShowrunner" as const,
  },
]

export function Testimonials() {
  const { t } = useTranslation()

  return (
    <SectionReveal3D origin="right" intensity="dramatic" threshold={0} rootMargin="0px 0px 100px 0px">
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-6">
            <Reveal>
              <p className="text-xl lg:text-2xl uppercase tracking-[0.3em] text-primary mb-3">
                {t.testimonials.title}
              </p>
            </Reveal>
          </div>

          <div className="flex justify-center mb-20">
            <LineGrow className="w-24 h-px bg-primary/40" delay={0.3} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <FlipReveal key={item.name} axis="x" delay={i * 0.1} threshold={0} rootMargin="0px 0px 100px 0px">
                <div className="group border border-border p-8 lg:p-10 hover:border-primary/30 transition-colors duration-500 relative overflow-hidden h-full">
                  <Quote className="h-8 w-8 text-primary/30 mb-6 group-hover:text-primary/60 transition-colors duration-500" />
                  <blockquote className="text-foreground/90 text-lg lg:text-xl leading-relaxed mb-8">
                    {item.quote}
                  </blockquote>

                  {/* Expanding divider */}
                  <div className="w-12 h-px bg-primary/30 group-hover:w-24 transition-all duration-700 mb-6" />

                  <div>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                      {item.name}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                      {t.testimonials[item.roleKey]}
                    </p>
                  </div>
                </div>
              </FlipReveal>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal3D>
  )
}
