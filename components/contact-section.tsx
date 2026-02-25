"use client"

import { ArrowUpRight, Instagram, Youtube, Mail } from "lucide-react"
import Link from "next/link"
import { Reveal, SectionReveal3D, FlipReveal } from "@/components/animated"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <SectionReveal3D origin="bottom" intensity="dramatic">
      <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-1/2 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <Reveal direction="left">
                <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">
                  Contact
                </p>
              </Reveal>
              <Reveal direction="left" delay={0.15}>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-foreground text-balance mb-6">
                  Let&apos;s Create
                  <br />
                  Something <span className="text-primary">Iconic</span>
                </h2>
              </Reveal>
              <Reveal direction="left" delay={0.3}>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Independent artist or major label -- I bring the same energy
                  and attention to every project. If you&apos;ve got a track that
                  needs a visual, let&apos;s talk.
                </p>
              </Reveal>

              {/* Social links */}
              <div className="mt-12 flex flex-col gap-4">
                {[
                  { href: "https://instagram.com", icon: Instagram, label: "Instagram", external: true },
                  { href: "https://youtube.com", icon: Youtube, label: "YouTube", external: true },
                  { href: "mailto:hello@kristof.studio", icon: Mail, label: "hello@kristof.studio", external: false },
                ].map((link, i) => (
                  <Reveal key={link.label} direction="left" delay={0.4 + i * 0.1}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors duration-300"
                    >
                      <link.icon className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                      <span className="text-sm uppercase tracking-widest">
                        {link.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right — Form with 3D flip entrance */}
            <FlipReveal axis="y" delay={0.2}>
              <div
                ref={formRef}
                className="border border-border p-8 lg:p-12 hover:border-primary/20 transition-colors duration-700 relative overflow-hidden"
              >
                {/* Animated top accent line */}
                <div
                  className="absolute top-0 left-0 h-px bg-primary"
                  style={{
                    width: formVisible ? "100%" : "0%",
                    transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
                  }}
                />

                <form className="flex flex-col gap-6">
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  ].map((field, i) => (
                    <div
                      key={field.id}
                      className="flex flex-col gap-2"
                      style={{
                        opacity: formVisible ? 1 : 0,
                        transform: formVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
                        transition: `all 0.6s ease ${0.4 + i * 0.1}s`,
                      }}
                    >
                      <label
                        htmlFor={field.id}
                        className="text-xs uppercase tracking-widest text-muted-foreground"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300"
                      />
                    </div>
                  ))}

                  <div
                    className="flex flex-col gap-2"
                    style={{
                      opacity: formVisible ? 1 : 0,
                      transform: formVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
                      transition: "all 0.6s ease 0.6s",
                    }}
                  >
                    <label
                      htmlFor="project"
                      className="text-xs uppercase tracking-widest text-muted-foreground"
                    >
                      Project Type
                    </label>
                    <select
                      id="project"
                      className="bg-transparent border-b border-border pb-3 text-foreground focus:border-primary focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-card text-muted-foreground">
                        Select a project type
                      </option>
                      <option value="music-video" className="bg-card text-foreground">Music Video</option>
                      <option value="visual-album" className="bg-card text-foreground">Visual Album</option>
                      <option value="short-film" className="bg-card text-foreground">Short Film</option>
                      <option value="commercial" className="bg-card text-foreground">Commercial</option>
                      <option value="other" className="bg-card text-foreground">Other</option>
                    </select>
                  </div>

                  <div
                    className="flex flex-col gap-2"
                    style={{
                      opacity: formVisible ? 1 : 0,
                      transform: formVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
                      transition: "all 0.6s ease 0.7s",
                    }}
                  >
                    <label
                      htmlFor="message"
                      className="text-xs uppercase tracking-widest text-muted-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell me about your vision..."
                      className="bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest self-start hover:bg-primary/90 transition-colors duration-300"
                    style={{
                      opacity: formVisible ? 1 : 0,
                      transform: formVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
                      transition: "opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s, background-color 0.3s ease",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FlipReveal>
          </div>
        </div>
      </section>
    </SectionReveal3D>
  )
}
