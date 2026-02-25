"use client"

import Link from "next/link"
import { Reveal, ScaleIn } from "@/components/animated"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 relative overflow-hidden">
      {/* Large background text */}
      <ScaleIn>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[12rem] md:text-[18rem] font-bold tracking-tighter text-foreground/[0.02] leading-none whitespace-nowrap">
            CATANA MEDIA
          </span>
        </div>
      </ScaleIn>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="text-xl font-bold tracking-tighter text-foreground">
              CATANA MEDIA
            </Link>

            <div className="flex items-center gap-8">
              {["Work", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group relative text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
                </Link>
              ))}
            </div>

            <p className="text-xs text-muted-foreground tracking-widest">
              &copy; 2026 Catana Media. All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
