"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useTranslation } from "@/hooks/use-translation"

export function MarqueeTicker() {
  const { t } = useTranslation()

  const items = [
    t.marquee.creativeDirection,
    t.marquee.livePerformance,
    t.marquee.audio,
    t.marquee.video,
    t.marquee.photo,
    t.marquee.preProduction,
    t.marquee.production,
    t.marquee.postProduction,
    t.marquee.editing,
    t.marquee.socialMedia,
    t.marquee.events,
  ]

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 })

  return (
    <div
      ref={ref}
      className="border-y border-border py-5 overflow-hidden relative -mt-16 z-10 bg-background"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className="flex items-center whitespace-nowrap hover:[animation-play-state:paused] marquee-ticker-scroll"
      >
        {Array.from({ length: 5 }).flatMap((_, setIndex) =>
          items.map((item, i) => (
            <span
              key={`${setIndex}-${i}`}
              className="inline-flex items-center text-sm uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default"
            >
              <span className="mx-6">{item}</span>
              <span className="text-primary/60 text-xs">&#x2022;</span>
            </span>
          ))
        )}
      </div>
      <style jsx global>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-60%);
          }
        }
        .marquee-ticker-scroll {
          animation: marquee-scroll 7s linear infinite;
        }
        @media (min-width: 768px) {
          .marquee-ticker-scroll {
            animation: marquee-scroll 18s linear infinite;
          }
        }
      `}</style>
    </div>
  )
}
