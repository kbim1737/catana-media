"use client"

import { ViewHeader } from "@/components/view-header"
import { AboutSection } from "@/components/about-section"
import { WorkedWith } from "@/components/worked-with"
import { Testimonials } from "@/components/testimonials"

interface AboutViewProps {
  onBack: () => void
}

export function AboutView({ onBack }: AboutViewProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ViewHeader title="About" onBack={onBack} />
      <div className="flex-1">
        <AboutSection />
        <Testimonials />
      </div>
      <WorkedWith showTitle />
    </div>
  )
}
