"use client"

import { Quote } from "lucide-react"
import { Reveal, SectionReveal3D, LineGrow, FlipReveal } from "@/components/animated"
import { useTranslation } from "@/hooks/use-translation"

const testimonials = [
  {
    quoteKey: "quote3" as const,
    name: "Don Sikorski",
    href: "https://www.linkedin.com/in/djsikorski",
    roleKey: "roleEPShowrunner" as const,
  },
]

export function Testimonials() {
  const { t, locale } = useTranslation()

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

          <div className="max-w-2xl mx-auto">
            {testimonials.map((item, i) => (
              <FlipReveal key={item.name} axis="x" delay={i * 0.1} threshold={0} rootMargin="0px 0px 100px 0px">
                <div className="group border border-border p-8 lg:p-10 hover:border-primary/30 transition-colors duration-500 relative overflow-hidden h-full">
                  <Quote className="h-8 w-8 text-primary/30 mb-6 group-hover:text-primary/60 transition-colors duration-500" />
                  <blockquote className={`text-foreground/90 text-lg lg:text-xl mb-8 ${locale === "hu" ? "leading-loose" : "leading-relaxed"}`}>
                    {t.testimonials[item.quoteKey]}
                  </blockquote>

                  {/* Expanding divider */}
                  <div className="w-12 h-px bg-primary/30 group-hover:w-24 transition-all duration-700 mb-6" />

                  <div>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {item.name}
                        </a>
                      ) : item.name}
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
