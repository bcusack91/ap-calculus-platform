'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { CheckCircle2, ClipboardCheck, Lock } from 'lucide-react'

type CheckState = {
  required: boolean
  eligible: boolean
  questions: number
  reviews: number
  afterReviews: number
  dueNow: number
  doneRecently: boolean
  last: { attemptId: string; correct: number; total: number; overconfident: number; completedAt: string } | null
}

/**
 * The daily card check's status wherever a student lands after reviewing
 * cards: take it now / what unlocks it / done, with the last score. Renders
 * nothing when no reviewed card has a check question. `refreshKey` refetches
 * (pass something that changes when the due count does).
 */
export function CardCheckBanner({ refreshKey, className = '', onlyWhenEligible = false }: { refreshKey?: unknown; className?: string; /** Mid-session: stay hidden until the check can be taken. */ onlyWhenEligible?: boolean }) {
  const [state, setState] = useState<CheckState | null>(null)

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/flashcards/check', { cache: 'no-store' })
      if (res.ok) setState(await res.json())
    } catch {
      /* the banner is optional chrome: stay hidden when offline */
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- async fetch callback, not synchronous
    void load()
  }, [load, refreshKey])

  if (!state) return null
  if (onlyWhenEligible && !state.eligible) return null

  const box = `rounded-xl border-2 p-5 text-left ${className}`
  if (state.doneRecently && state.last) {
    return (
      <div role="status" className={`${box} border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/30`}>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-600 dark:text-green-400" aria-hidden />
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Today&apos;s card check is done: {state.last.correct} of {state.last.total} correct
            </p>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
              {state.last.overconfident > 0
                ? `${state.last.overconfident} card${state.last.overconfident === 1 ? '' : 's'} you rated Good or Easy ${state.last.overconfident === 1 ? 'comes' : 'come'} back tomorrow.`
                : 'Your ratings matched what you know. Your flashcards count as done for today.'}{' '}
              <Link href={`/flashcards/check?result=${state.last.attemptId}`} className="font-semibold text-accent underline">
                See the results
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
  if (!state.required) return null

  if (state.eligible) {
    return (
      <div role="status" className={`${box} border-accent-muted bg-accent-subtle dark:bg-accent-light/10`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <ClipboardCheck className="h-8 w-8 shrink-0 text-accent" aria-hidden />
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-gray-900 dark:text-gray-100">One step left: today&apos;s card check</p>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
              {state.questions} multiple-choice question{state.questions === 1 ? '' : 's'} on the cards you reviewed. Your flashcards count as done for today once you take it.
            </p>
          </div>
          <Link
            href="/flashcards/check"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-accent px-5 py-3 font-bold text-white shadow hover:bg-accent-hover"
          >
            Take the card check
          </Link>
        </div>
      </div>
    )
  }

  const reviewsLeft = Math.max(0, state.afterReviews - state.reviews)
  return (
    <div role="status" className={`${box} border-gray-200 bg-card dark:border-gray-700`}>
      <div className="flex items-start gap-3">
        <Lock className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-gray-900 dark:text-gray-100">Today&apos;s card check unlocks when your cards are done</p>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {state.dueNow} card{state.dueNow === 1 ? '' : 's'} still due. Finish them, or reach {state.afterReviews} reviews today ({reviewsLeft} to go), and the check opens. Your flashcards count as done once you take it.
          </p>
        </div>
      </div>
    </div>
  )
}
