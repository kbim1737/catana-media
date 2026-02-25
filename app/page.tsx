"use client"

import { useEffect } from "react"
import { useViewNavigation } from "@/hooks/use-view-navigation"
import { ViewTransition } from "@/components/view-transition"
import { TransitionOverlay } from "@/components/transition-overlay"
import { LandingView } from "@/components/views/landing-view"
import { PortfolioView } from "@/components/views/portfolio-view"
import { AboutView } from "@/components/views/about-view"
import { InquiriesView } from "@/components/views/inquiries-view"
import { SeoHead } from "@/components/seo-head"
import type { ViewName } from "@/hooks/use-view-navigation"

const HASH_VIEWS: Record<string, ViewName> = {
  "#portfolio": "portfolio",
  "#about": "about",
  "#inquiries": "inquiries",
}

const VIEW_HASHES: Record<ViewName, string> = {
  home: "",
  portfolio: "#portfolio",
  about: "#about",
  inquiries: "#inquiries",
}

export default function Home() {
  const { activeView, isTransitioning, transitionDirection, navigateTo, goHome } =
    useViewNavigation()

  // On mount: read hash → navigate to view
  useEffect(() => {
    const hash = window.location.hash
    const view = HASH_VIEWS[hash]
    if (view) {
      navigateTo(view)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Sync hash on view change
  useEffect(() => {
    const hash = VIEW_HASHES[activeView]
    if (hash) {
      history.pushState(null, "", hash)
    } else {
      history.pushState(null, "", window.location.pathname)
    }
  }, [activeView])

  return (
    <main>
      <SeoHead />

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
