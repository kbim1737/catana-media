"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function MarqueeTicker() {
  const items = [
    "Creative Direction",
    "Live Performance",
    "AUDIO",
    "VIDEO",
    "PHOTO",
    "PRE PRODUCTION",
    "PRODUCTION",
    "POST PRODUCTION",
    "EDITING",
    "SOCIAL MEDIA OPERATIONS",
    "EVENTS"
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

      <div className="flex items-center animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center text-sm uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default"
          >
            <span className="mx-6">{item}</span>
            <span className="text-primary/60 text-xs">&#x2022;</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
