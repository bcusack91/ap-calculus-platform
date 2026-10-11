'use client'

/**
 * AAMC-style section review screen, shown before a section ends: lists the
 * unanswered and flagged questions with jump links, the full navigator, and
 * the end/submit action. `children` renders below the actions (the runner's
 * "you cannot come back" confirm).
 */

import { useEffect, useRef, type ReactNode } from 'react'
import { ArrowLeft, Circle, Flag } from 'lucide-react'
import QuestionNavigator, { navigatorItemLabel, type NavigatorItem } from '@/components/exam/QuestionNavigator'

export default function ExamReviewScreen({
  title,
  items,
  onJump,
  onReturn,
  onEnd,
  endLabel,
  children,
}: {
  title: string
  items: NavigatorItem[]
  onJump: (index: number) => void
  onReturn: () => void
  onEnd: () => void
  endLabel: string
  children?: ReactNode
}) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  // Move focus to the screen's heading so keyboard/screen-reader users land here.
  useEffect(() => { headingRef.current?.focus() }, [])

  const unanswered = items.map((it, i) => ({ it, i })).filter(({ it }) => !it.answered)
  const flagged = items.map((it, i) => ({ it, i })).filter(({ it }) => it.flagged)

  const jumpList = (list: { it: NavigatorItem; i: number }[], kind: 'unanswered' | 'flagged') => (
    <ul className="flex flex-wrap gap-2">
      {list.map(({ it, i }) => (
        <li key={it.key}>
          <button
            type="button"
            onClick={() => onJump(i)}
            aria-label={`Go to ${navigatorItemLabel({ ...it, current: false })}`}
            className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring motion-reduce:transition-none ${
              kind === 'flagged'
                ? 'border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-200'
                : 'border-dashed border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {kind === 'flagged'
              ? <Flag className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true" />
              : <Circle className="h-3 w-3" aria-hidden="true" />}
            Q{it.label}
            {it.group && <span className="font-normal text-gray-500 dark:text-gray-400">· {it.group}</span>}
          </button>
        </li>
      ))}
    </ul>
  )

  return (
    <section aria-labelledby="exam-review-heading" className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800">
      <h2
        id="exam-review-heading"
        ref={headingRef}
        tabIndex={-1}
        className="text-xl font-bold text-gray-900 focus:outline-none dark:text-white"
      >
        Section review: {title}
      </h2>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
        Check anything unanswered or flagged before you end the section. The clock is still running.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
          <h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-gray-800 dark:text-gray-100">
            <Circle className="h-3.5 w-3.5" aria-hidden="true" /> Unanswered ({unanswered.length})
          </h3>
          {unanswered.length ? jumpList(unanswered, 'unanswered') : <p className="text-sm text-gray-500 dark:text-gray-400">Every question has an answer.</p>}
        </div>
        <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
          <h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-gray-800 dark:text-gray-100">
            <Flag className="h-3.5 w-3.5" aria-hidden="true" /> Flagged for review ({flagged.length})
          </h3>
          {flagged.length ? jumpList(flagged, 'flagged') : <p className="text-sm text-gray-500 dark:text-gray-400">No flagged questions.</p>}
        </div>
      </div>

      <h3 className="mb-2 mt-6 text-sm font-semibold text-gray-800 dark:text-gray-100">All questions</h3>
      <QuestionNavigator items={items} onJump={onJump} />

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onReturn}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Return to questions
        </button>
        <button
          type="button"
          onClick={onEnd}
          className="rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-5 py-2.5 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
        >
          {endLabel}
        </button>
      </div>
      {children}
    </section>
  )
}
