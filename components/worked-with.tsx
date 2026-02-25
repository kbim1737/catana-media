"use client"

import Image from "next/image"
import { Reveal, LineGrow } from "@/components/animated"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const collaborators = [
  { src: "/collaborators/1200x1200bf-60.png", alt: "Collaborator", scale: 1 },
  { src: "/collaborators/IMG_5961.png", alt: "Night Market", scale: 2 },
  { src: "/collaborators/cinematic_music_group_logo.png", alt: "Cinematic Music Group", scale: 1 },
  { src: "/collaborators/danielsLogo-1.png", alt: "Daniels", scale: 1 },
  { src: "/collaborators/images (1).png", alt: "Collaborator", scale: 1 },
  { src: "/collaborators/images (2).png", alt: "Collaborator", scale: 1 },
  { src: "/collaborators/images (3).png", alt: "Collaborator", scale: 1 },
  { src: "/collaborators/lg-68ff392fa72fc-NYFW-The-Shows.webp", alt: "NYFW The Shows", scale: 1 },
  { src: "/collaborators/unnamed (1).png", alt: "Collaborator", scale: 1 },
]

function LogoCard({ src, alt, scale = 1 }: { src: string; alt: string; scale?: number }) {
  return (
    <div className="flex-shrink-0 w-28 h-16 mx-2 md:w-48 md:h-20 md:mx-6 flex items-center justify-center px-2 md:px-4 relative">
      <div className="relative w-full h-full" style={{ transform: `scale(${scale})` }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain hover:scale-105 transition-all duration-500 collab-logo"
        />
      </div>
    </div>
  )
}

export function WorkedWith({ showTitle = false }: { showTitle?: boolean }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className={`overflow-hidden bg-primary ${showTitle ? "py-12 lg:py-16" : "py-6 lg:py-8"}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {showTitle && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-6">
            <Reveal>
              <p className="text-xl lg:text-2xl uppercase tracking-[0.3em] text-primary-foreground mb-3">
                Worked With
              </p>
            </Reveal>
          </div>

          <div className="flex justify-center mb-8">
            <LineGrow className="w-24 h-px bg-primary-foreground/40" delay={0.3} />
          </div>
        </div>
      )}

      {/* Scrolling logos — 5x duplication for seamless infinite loop */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <div
          className="flex hover:[animation-play-state:paused]"
          style={{ animation: "logo-scroll 12s linear infinite" }}
        >
          {Array.from({ length: 5 }).flatMap((_, setIndex) =>
            collaborators.map((logo, i) => (
              <LogoCard key={`${setIndex}-${i}`} src={logo.src} alt={logo.alt} scale={logo.scale} />
            ))
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-60%);
          }
        }
      `}</style>
    </section>
  )
}
