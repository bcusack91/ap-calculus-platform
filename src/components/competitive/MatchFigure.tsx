'use client'

/**
 * The picture of a competitive question (Assembling Objects boxes, gear
 * trains, circuits…). Match gameData carries only `figureRef`
 * (src/lib/competitive-figures.ts); this fetches the SVG once per ref (module
 * cache shared by every screen of the session), checks it with isSafeSvg and
 * draws it with the lesson-figure theme. Questions without a ref render
 * nothing, so every other course's match screens are unchanged.
 */

import { useEffect, useState } from 'react'
import { LessonFigure } from '@/components/lesson/LessonFigure'
import { isSafeSvg } from '@/lib/safe-svg'

interface FigureData { svg: string; alt: string }

const cache = new Map<string, Promise<FigureData | null>>()

function loadFigure(ref: string): Promise<FigureData | null> {
  let p = cache.get(ref)
  if (!p) {
    p = fetch(`/api/competitive/figure/${encodeURIComponent(ref)}`)
      .then(async (r) => {
        if (!r.ok) return null
        const d = (await r.json()) as Partial<FigureData>
        return typeof d.svg === 'string' && isSafeSvg(d.svg) ? { svg: d.svg, alt: typeof d.alt === 'string' ? d.alt : '' } : null
      })
      .catch(() => null)
      .then((d) => {
        if (!d) cache.delete(ref) // let a later render retry a failed fetch
        return d
      })
    cache.set(ref, p)
  }
  return p
}

/** The question's figure reference, when it has one. */
export function figureRefOf(q: unknown): string | undefined {
  const ref = q && typeof q === 'object' ? (q as { figureRef?: unknown }).figureRef : undefined
  return typeof ref === 'string' && ref.length > 0 ? ref : undefined
}

/** Warm the cache for a match's questions so the next figure appears without a wait. */
export function prefetchMatchFigures(questions: readonly unknown[] | null | undefined): void {
  if (!questions) return
  for (const q of questions) {
    const ref = figureRefOf(q)
    if (ref) void loadFigure(ref)
  }
}

export function MatchFigure({ figureRef, size = 'md', className = 'mb-4' }: { figureRef?: string; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const [state, setState] = useState<{ ref: string; data: FigureData | null } | null>(null)

  useEffect(() => {
    if (!figureRef) return
    let live = true
    loadFigure(figureRef).then((data) => {
      if (live) setState({ ref: figureRef, data })
    })
    return () => {
      live = false
    }
  }, [figureRef])

  if (!figureRef) return null
  const data = state?.ref === figureRef ? state.data : undefined
  return (
    <div className={className} data-testid="match-figure">
      {data ? (
        <LessonFigure figure={{ svg: data.svg, alt: data.alt, size }} />
      ) : (
        <div
          className="mx-auto flex h-48 w-full max-w-lg items-center justify-center rounded-xl border border-dashed border-card-border text-sm text-muted-foreground"
          role="status"
        >
          {data === null ? 'Figure unavailable.' : 'Loading figure…'}
        </div>
      )}
    </div>
  )
}
