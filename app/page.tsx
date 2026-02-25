"use client"

import { useViewNavigation } from "@/hooks/use-view-navigation"
import { ViewTransition } from "@/components/view-transition"
import { TransitionOverlay } from "@/components/transition-overlay"
import { LandingView } from "@/components/views/landing-view"
import { PortfolioView } from "@/components/views/portfolio-view"
import { AboutView } from "@/components/views/about-view"
import { InquiriesView } from "@/components/views/inquiries-view"

export default function Home() {
  const { activeView, isTransitioning, transitionDirection, navigateTo, goHome } =
    useViewNavigation()

  return (
    <main>
      <ViewTransition
        viewName="home"
        activeView={activeView}
        isTransitioning={isTransitioning}
        transitionDirection={transitionDirection}
      >
        <LandingView onNavigate={navigateTo} />
      </ViewTransition>

      <ViewTransition
        viewName="portfolio"
        activeView={activeView}
        isTransitioning={isTransitioning}
        transitionDirection={transitionDirection}
      >
        <PortfolioView onBack={goHome} />
      </ViewTransition>

      <ViewTransition
        viewName="about"
        activeView={activeView}
        isTransitioning={isTransitioning}
        transitionDirection={transitionDirection}
      >
        <AboutView onBack={goHome} />
      </ViewTransition>

      <ViewTransition
        viewName="inquiries"
        activeView={activeView}
        isTransitioning={isTransitioning}
        transitionDirection={transitionDirection}
      >
        <InquiriesView onBack={goHome} />
      </ViewTransition>

      <TransitionOverlay isTransitioning={isTransitioning} />
    </main>
  )
}
