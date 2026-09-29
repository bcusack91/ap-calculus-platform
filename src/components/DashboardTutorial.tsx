'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'

/**
 * The dashboard tour: the real study loop in six short steps, each pointed at
 * the dashboard element it talks about (a lightweight coachmark — a highlight
 * ring plus a popover anchored to `[data-tour="…"]`, no library). When a step's
 * element isn't on screen (a different tab, an empty state, a narrow layout)
 * the step falls back to a centered card with the same text.
 *
 * Opens once automatically; the dashboard's "?" button replays it.
 */

export interface TourStep {
  title: string
  body: string
  /** data-tour anchors to try, in order. None found = centered card. */
  anchors: string[]
}

export const TOUR_STEPS: TourStep[] = [
  {
    title: '1. Start with a diagnostic',
    body: 'Each course has a free diagnostic. It finds what you already know and what to study first. Your next step always sits at the top of this page.',
    anchors: ['next-step'],
  },
  {
    title: '2. Your study plan',
    body: 'The diagnostic builds your study plan: the topics you most need, in order. The next-step card walks you through them one at a time.',
    anchors: ['study-plans'],
  },
  {
    title: '3. Clear a topic',
    body: `A topic is a short entrance quiz (ace it to test out), then the lesson parts, then an exit quiz. Score ${TOPIC_CLEAR_PERCENT}% on the exit quiz to clear it.`,
    anchors: ['continue', 'next-step'],
  },
  {
    title: '4. Flashcards, every day',
    body: "Finish a topic's lesson and its exit quiz and its flashcards join your deck. Review the cards that are due each day; a few minutes keeps them from piling up.",
    anchors: ['flashcards'],
  },
  {
    title: '5. Retake the diagnostic',
    body: 'Once your plan is cleared, retake the diagnostic to see how much you have grown and get a new plan.',
    anchors: ['study-plans'],
  },
  {
    title: '6. Optional: your class and Competitive',
    body: "In a class? Join with your teacher's code; assignments then come first in your next step. Competitive Mode is for extra practice against the AI or classmates.",
    anchors: ['join-class', 'competitive'],
  },
]

const STORAGE_KEY = 'dashboard-tutorial-completed'

function readCompleted(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null
  } catch {
    return true // storage blocked: never auto-open (the "?" still works)
  }
}

/** The first anchor element that is actually rendered and visible. */
function findAnchor(anchors: string[]): HTMLElement | null {
  for (const name of anchors) {
    const el = document.querySelector<HTMLElement>(`[data-tour="${name}"]`)
    if (el && el.getClientRects().length > 0) {
      const r = el.getBoundingClientRect()
      if (r.width > 0 && r.height > 0) return el
    }
  }
  return null
}

const PAD = 6
const GAP = 12
const MIN_SPACE = 200

export default function DashboardTutorial({
  forceOpen = false,
  onClose,
}: {
  /** When flipped to true (e.g. via the "?" header button), reopens the tour from step 1. */
  forceOpen?: boolean
  onClose?: () => void
}) {
  const [step, setStep] = useState(() => (typeof window === 'undefined' || readCompleted() ? -1 : 0))
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [viewport, setViewport] = useState({ w: 0, h: 0 })
  const anchorRef = useRef<HTMLElement | null>(null)
  const nextButtonRef = useRef<HTMLButtonElement | null>(null)

  // Intentional replay: restart from the beginning even if previously completed.
  // Render-time state adjustment (React's sanctioned prop-change pattern) rather
  // than an effect, so the reset happens in the same pass with no flicker.
  const [prevForceOpen, setPrevForceOpen] = useState(forceOpen)
  if (forceOpen !== prevForceOpen) {
    setPrevForceOpen(forceOpen)
    if (forceOpen) setStep(0)
  }

  const open = step >= 0 && step < TOUR_STEPS.length
  const current = open ? TOUR_STEPS[step] : null

  const complete = useCallback(() => {
    setStep(-1)
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      /* storage blocked — nothing to remember */
    }
    onClose?.()
  }, [onClose])

  const measure = useCallback(() => {
    setViewport({ w: window.innerWidth, h: window.innerHeight })
    const el = anchorRef.current
    setRect(el && el.isConnected ? el.getBoundingClientRect() : null)
  }, [])

  // Find this step's element, bring it into view, then track it.
  useEffect(() => {
    if (!current) return
    const el = findAnchor(current.anchors)
    anchorRef.current = el
    if (el) el.scrollIntoView({ block: 'center', inline: 'nearest' })
    const frame = requestAnimationFrame(measure)
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', measure, true)
    nextButtonRef.current?.focus()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', measure, true)
    }
  }, [current, measure])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') complete()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, complete])

  if (!current) return null

  const isLast = step === TOUR_STEPS.length - 1
  const next = () => (isLast ? complete() : setStep(step + 1))

  const card = (
    <>
      <h2 id="dashboard-tour-title" className="text-lg font-bold text-gray-900 dark:text-white">
        {current.title}
      </h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{current.body}</p>

      <div className="mt-4 flex items-center gap-1.5" aria-hidden="true">
        {TOUR_STEPS.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === step ? 'bg-accent' : i < step ? 'bg-accent-muted' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
        <span className="sr-only">
          Step {step + 1} of {TOUR_STEPS.length}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          onClick={complete}
          className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          Skip tour
        </button>
        <div className="flex gap-2">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Back
            </button>
          )}
          <button
            ref={nextButtonRef}
            onClick={next}
            className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {isLast ? 'Got it' : 'Next'}
          </button>
        </div>
      </div>
    </>
  )

  // ── Coachmark: highlight the element and anchor the popover beside it ──
  if (rect && viewport.w > 0) {
    const width = Math.min(360, viewport.w - 32)
    const left = Math.min(Math.max(rect.left, 16), viewport.w - width - 16)
    const spaceBelow = viewport.h - rect.bottom
    const spaceAbove = rect.top
    const position: React.CSSProperties =
      spaceBelow >= MIN_SPACE
        ? { top: rect.bottom + PAD + GAP }
        : spaceAbove >= MIN_SPACE
          ? { bottom: viewport.h - rect.top + PAD + GAP }
          : { bottom: 16 }

    return (
      <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="dashboard-tour-title">
        {/* Click shield — the tour is modal while it runs */}
        <div className="absolute inset-0" onClick={complete} aria-hidden="true" />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed rounded-2xl ring-2 ring-white transition-all duration-200"
          style={{
            top: rect.top - PAD,
            left: rect.left - PAD,
            width: rect.width + PAD * 2,
            height: rect.height + PAD * 2,
            boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.55)',
          }}
        />
        <div
          className="fixed rounded-2xl bg-white p-5 shadow-2xl dark:bg-gray-800"
          style={{ left, width, ...position }}
        >
          {card}
        </div>
      </div>
    )
  }

  // ── Fallback: centered card ──
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dashboard-tour-title"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-800">{card}</div>
    </div>
  )
}
