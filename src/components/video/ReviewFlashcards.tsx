'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, Layers, RotateCcw } from 'lucide-react'
import { MathText } from '@/components/MathText'
import type { ReviewCard } from '@/lib/video-lesson-core'

/**
 * The optional flashcard run before a video's "Remember" section: the
 * equations and key facts from the sections just watched, so the recap
 * questions (which span several sections) come after a chance to memorize.
 *
 * Studying shows one card at a time: the front, then the answer, then "Still
 * learning" (the card comes back at the end of the pile) or "Got it" (it
 * leaves the pile). The run is finished when the pile is empty (`onComplete`).
 *
 * Before a recap the run is REQUIRED (owner, 2026-11-13): there is no skip,
 * and the recap opens once every card is marked "Got it". Reopened later, or
 * before the exit quiz, it is optional and `onContinue` is one click away.
 */
export type ReviewFlashcardsProps = {
  cards: ReviewCard[]
  /** The video the cards belong to, e.g. "Current: Charge on the Move". */
  videoTitle: string | null
  /** Where "continue" leads, e.g. "the recap" or "the questions". */
  continueTo: string
  /** Skip the offer and open on the first card (the student asked for the cards). */
  startStudying?: boolean
  /** No skipping: the student must finish the pile to continue. */
  required?: boolean
  /** The pile was emptied (every card marked "Got it"). */
  onComplete?: () => void
  /** Under "All cards done". */
  doneNote?: string
  onContinue: () => void
}

const primaryBtn = 'inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-semibold text-white hover:bg-accent-hover'
const secondaryBtn = 'inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800'

export default function ReviewFlashcards({ cards, videoTitle, continueTo, startStudying = false, required = false, onComplete, doneNote, onContinue }: ReviewFlashcardsProps) {
  const [studying, setStudying] = useState(startStudying)
  /** Card indexes still to learn, in order; the first one is on screen. */
  const [pile, setPile] = useState<number[]>(() => cards.map((_, i) => i))
  const [flipped, setFlipped] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    rootRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [])

  const total = cards.length
  const learned = total - pile.length
  const current = pile.length > 0 ? cards[pile[0]] : null

  const restart = () => {
    setPile(cards.map((_, i) => i))
    setFlipped(false)
    setStudying(true)
  }
  const again = () => {
    setPile((p) => (p.length > 1 ? [...p.slice(1), p[0]] : p))
    setFlipped(false)
  }
  const gotIt = () => {
    if (pile.length === 1) onComplete?.()
    setPile((p) => p.slice(1))
    setFlipped(false)
  }

  const shell = 'scroll-mt-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8'

  if (!studying) {
    return (
      <div ref={rootRef} className={`${shell} text-center`} data-testid="review-flashcards-offer">
        <Layers className="mx-auto mb-3 h-10 w-10 text-accent dark:text-accent-muted" aria-hidden />
        <p className="text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-muted">{required ? 'Next' : 'Optional'} · before {continueTo}</p>
        <h2 className="mt-1 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">{required ? 'Flashcards first' : 'Review the flashcards first?'}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-gray-600 dark:text-gray-400 sm:text-base">
          {total} cards with the equations and key ideas from {videoTitle ? <span className="font-medium text-gray-800 dark:text-gray-200">{videoTitle}</span> : 'this video'}. {required ? `Mark every card "Got it" to open ${continueTo} and its questions.` : 'Lock them in now, and the questions get easier.'}
        </p>
        <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
          <button type="button" onClick={() => setStudying(true)} className={primaryBtn}>
            <Layers className="h-4 w-4" aria-hidden /> Study the flashcards
          </button>
          {!required && (
            <button type="button" onClick={onContinue} className={secondaryBtn}>
              Skip to {continueTo} <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          )}
        </div>
      </div>
    )
  }

  if (!current) {
    return (
      <div ref={rootRef} className={`${shell} text-center`} data-testid="review-flashcards-done">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-green-600 dark:text-green-400" aria-hidden />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">All {total} cards done</h2>
        {doneNote && <p className="mx-auto mt-2 max-w-md text-sm text-gray-600 dark:text-gray-400">{doneNote}</p>}
        <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
          <button type="button" onClick={restart} className={secondaryBtn}>
            <RotateCcw className="h-4 w-4" aria-hidden /> Go through them again
          </button>
          <button type="button" onClick={onContinue} className={primaryBtn}>
            Continue to {continueTo} <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div ref={rootRef} className={shell} data-testid="review-flashcards">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-muted">
          Flashcards{videoTitle ? ` · ${videoTitle}` : ''}
        </p>
        <span className="flex-1" />
        <p className="text-xs text-gray-500 dark:text-gray-400" aria-live="polite">
          {learned} of {total} learned
        </p>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700" aria-hidden>
        <div className="h-full rounded-full bg-green-500 transition-all" style={{ width: `${(learned / total) * 100}%` }} />
      </div>

      <div className="mt-4 rounded-xl border-2 border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <MathText text={current.front} className="text-base font-medium text-gray-900 dark:text-gray-100 sm:text-lg" />
        {flipped ? (
          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700" aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Answer</p>
            <MathText text={current.back} className="mt-1 text-base text-gray-800 dark:text-gray-200 sm:text-lg" />
          </div>
        ) : (
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Say the answer to yourself, then check it.</p>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        {required ? (
          <p className="order-last text-sm text-gray-500 dark:text-gray-400 sm:order-first">Mark every card &ldquo;Got it&rdquo; to continue.</p>
        ) : (
          <button type="button" onClick={onContinue} className="order-last text-sm font-medium text-accent hover:text-accent-hover dark:text-accent-muted sm:order-first">
            Skip to {continueTo}
          </button>
        )}
        <span className="hidden flex-1 sm:block" />
        {flipped ? (
          <>
            <button type="button" onClick={again} className={secondaryBtn}>
              <RotateCcw className="h-4 w-4" aria-hidden /> Still learning
            </button>
            <button type="button" onClick={gotIt} className={primaryBtn} autoFocus>
              <CheckCircle2 className="h-4 w-4" aria-hidden /> Got it
            </button>
          </>
        ) : (
          <button type="button" onClick={() => setFlipped(true)} className={primaryBtn} autoFocus>
            Show the answer
          </button>
        )}
      </div>
    </div>
  )
}
