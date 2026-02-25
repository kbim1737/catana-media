"use client"

import { ViewHeader } from "@/components/view-header"
import { AboutSection } from "@/components/about-section"
import { WorkedWith } from "@/components/worked-with"
import { Testimonials } from "@/components/testimonials"
import { useTranslation } from "@/hooks/use-translation"

interface AboutViewProps {
  onBack: () => void
}

export function AboutView({ onBack }: AboutViewProps) {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ViewHeader title={t.nav.about} onBack={onBack} />
      <div className="flex-1">
        <AboutSection />
        <Testimonials />
      </div>
      <WorkedWith showTitle />
    </div>
  )
}
