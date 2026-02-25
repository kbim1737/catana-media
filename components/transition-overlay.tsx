"use client"

interface TransitionOverlayProps {
  isTransitioning: boolean
}

export function TransitionOverlay({ isTransitioning }: TransitionOverlayProps) {
  if (!isTransitioning) return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div className="view-transition-overlay absolute inset-0 bg-primary origin-bottom" />
    </div>
  )
}
