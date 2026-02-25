"use client"

import { ViewHeader } from "@/components/view-header"
import { ContactSection } from "@/components/contact-section"
import { useTranslation } from "@/hooks/use-translation"

interface InquiriesViewProps {
  onBack: () => void
}

export function InquiriesView({ onBack }: InquiriesViewProps) {
  const { t } = useTranslation()
  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <ViewHeader title={t.nav.inquiries} onBack={onBack} />
      <div className="flex-1 overflow-y-auto [&_#contact]:py-6 [&_#contact]:lg:py-10 [&_.grid]:gap-8 [&_.grid]:lg:gap-16">
        <ContactSection />
      </div>
    </div>
  )
}
