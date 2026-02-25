"use client"

import { ViewHeader } from "@/components/view-header"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { WorkedWith } from "@/components/worked-with"

interface PortfolioViewProps {
  onBack: () => void
}

export function PortfolioView({ onBack }: PortfolioViewProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ViewHeader title="Portfolio" onBack={onBack} />
      <div className="flex-1">
        <PortfolioGrid />
      </div>
      <WorkedWith />
    </div>
  )
}
