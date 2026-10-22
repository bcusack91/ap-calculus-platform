'use client'

/**
 * UI for the short first session (Phase 3 W5): the choice screen that leads
 * with "Start with Part 1 · ~N min", the slim progress line above the lesson,
 * and the keep-going / stop-here card after Part 1. Pure presentational —
 * the renderer owns the state. Copy comes from src/lib/first-session.ts.
 */
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { checkpointText, firstStepHeadline, progressLineText, startPartLabel, type FirstSessionChoice as Choice } from '@/lib/first-session'

interface FirstSessionChoiceProps {
  topicTitle: string
  courseName?: string | null
  totalParts: number
  partMinutes: number
  hasExitQuiz: boolean
  hasEntranceQuiz: boolean
  entranceQuizLoading?: boolean
  onChoice: (choice: Choice) => void
  onEntranceQuiz?: () => void
}

export function FirstSessionChoice({
  topicTitle,
  courseName,
  totalParts,
  partMinutes,
  hasExitQuiz,
  hasEntranceQuiz,
  entranceQuizLoading = false,
  onChoice,
  onEntranceQuiz,
}: FirstSessionChoiceProps) {
  // Default focus on Part 1: Enter starts the short path.
  const primaryRef = useRef<HTMLButtonElement>(null)
  useEffect(() => { primaryRef.current?.focus() }, [])

  return (
    <div className="max-w-2xl mx-auto py-12 px-4" data-testid="first-session-choice">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
        <div className="text-5xl mb-4">🎯</div>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent dark:text-accent-muted mb-1">
          {courseName ? `Your first step in ${courseName}` : 'Your first step'}
        </p>
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{topicTitle}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          This lesson has <strong>{totalParts} {totalParts === 1 ? 'part' : 'parts'}</strong>
          {hasExitQuiz ? ' and a short exit quiz at the end' : ''}. Do just Part 1 now — we save your place after every part.
        </p>
        <div className="flex flex-col gap-3 items-stretch sm:items-center">
          <button
            ref={primaryRef}
            type="button"
            data-testid="first-session-part1"
            onClick={() => onChoice('part1')}
            className="px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-colors shadow-lg sm:min-w-[280px]"
          >
            {startPartLabel(partMinutes)}
          </button>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              data-testid="first-session-full"
              onClick={() => onChoice('full')}
              className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Read the whole lesson
            </button>
            {hasExitQuiz && (
              <button
                type="button"
                data-testid="first-session-quiz"
                onClick={() => onChoice('quiz')}
                className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Jump to the exit quiz
              </button>
            )}
          </div>
        </div>
        {hasEntranceQuiz && onEntranceQuiz && (
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-5">
            Already know some of this?{' '}
            <button
              type="button"
              onClick={onEntranceQuiz}
              disabled={entranceQuizLoading}
              className="underline hover:text-accent disabled:opacity-50"
            >
              {entranceQuizLoading ? 'Loading quiz…' : 'Take the entrance quiz to skip parts you’ve mastered'}
            </button>
          </p>
        )}
      </div>
    </div>
  )
}

interface FirstSessionProgressLineProps {
  part: number
  totalParts: number
  hasExitQuiz: boolean
  quizPassed?: boolean
  courseName?: string | null
  topicTitle?: string
}

/** "Part 1 of 7 · exit quiz after Part 7", updated as parts complete. */
export function FirstSessionProgressLine({ part, totalParts, hasExitQuiz, quizPassed, courseName, topicTitle }: FirstSessionProgressLineProps) {
  const done = Math.max(0, Math.min(totalParts, part - 1))
  return (
    <div
      data-testid="first-session-progress"
      className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-xl border border-accent-light/60 bg-white/80 px-4 py-2 text-sm dark:border-accent-hover/40 dark:bg-gray-800/80"
      aria-live="polite"
    >
      <span className="font-medium text-gray-800 dark:text-gray-100">{progressLineText(part, totalParts, { hasExitQuiz, quizPassed })}</span>
      {topicTitle && (
        <span className="truncate text-xs text-gray-500 dark:text-gray-400">{firstStepHeadline(courseName, topicTitle)}</span>
      )}
      <div className="basis-full h-1 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden" aria-hidden="true">
        <div className="h-full rounded-full bg-accent transition-all duration-500" style={{ width: `${Math.round((done / Math.max(totalParts, 1)) * 100)}%` }} />
      </div>
    </div>
  )
}

interface FirstSessionCheckpointProps {
  completedParts: number
  totalParts: number
  placeSaved: boolean
  stopHref: string
  onContinue: () => void
}

/** After Part 1: keep going (primary) or stop for today (the course hub shows next-up). */
export function FirstSessionCheckpoint({ completedParts, totalParts, placeSaved, stopHref, onContinue }: FirstSessionCheckpointProps) {
  return (
    <div
      data-testid="first-session-checkpoint"
      role="status"
      className="rounded-2xl border-2 border-green-200 bg-white/95 p-5 text-center shadow-md dark:border-green-800 dark:bg-gray-800/95"
    >
      <p className="text-base font-semibold text-gray-900 dark:text-white">{checkpointText(completedParts, totalParts, placeSaved)}</p>
      <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
        <button
          type="button"
          onClick={onContinue}
          className="px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-colors shadow"
        >
          Continue to Part {Math.min(totalParts, completedParts + 1)} →
        </button>
        <Link
          href={stopHref}
          data-testid="first-session-stop"
          className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 text-center"
        >
          Stop for today
        </Link>
      </div>
    </div>
  )
}
