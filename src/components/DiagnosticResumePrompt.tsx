'use client'

/**
 * Menu-side resume offer and in-test exit controls for the AP diagnostics,
 * shared by every v1 page and the v2 page. The saved sitting itself is
 * managed by src/hooks/useDiagnosticResume.ts; these are only the controls.
 */

import { Clock, RotateCcw, Save } from 'lucide-react'
import type { ResumableSummary } from '@/hooks/useDiagnosticResume'

export function DiagnosticResumePrompt({
  label,
  resumable,
  onResume,
  onStartOver,
}: {
  /** Course name as shown to students, e.g. "AP Chemistry". */
  label: string
  resumable: ResumableSummary | null
  onResume: () => void
  /** Drops the saved sitting and starts a fresh one. */
  onStartOver: () => void
}) {
  if (!resumable) return null
  const { answered, total, minutesLeft, stale } = resumable
  return (
    <div
      role="region"
      aria-label={stale ? `${label} diagnostic no longer available` : `Resume your ${label} diagnostic`}
      className="mb-6 rounded-2xl border border-accent-light bg-accent-subtle p-5 dark:border-accent-muted"
      data-testid="diagnostic-resume-prompt"
    >
      {stale ? (
        <>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            Your unfinished {label} diagnostic can&apos;t be resumed
          </p>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
            The questions in that sitting have been updated since you saved it, so it has to start again from the beginning.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onStartOver}
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
            >
              <RotateCcw className="h-4 w-4" aria-hidden />
              Start over
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            Resume your {label} diagnostic ({answered} of {total} answered, {minutesLeft} min left)
          </p>
          <p className="mt-1 flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            The clock only runs while the test is open. Your answers so far are saved on this device.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onResume}
              className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
            >
              Resume
            </button>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined' && !window.confirm('Start over? Your saved answers for this diagnostic will be discarded.')) return
                onStartOver()
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-accent-light px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent-light dark:border-accent-muted"
            >
              <RotateCcw className="h-4 w-4" aria-hidden />
              Start over
            </button>
          </div>
        </>
      )}
    </div>
  )
}

/**
 * Replaces the old "Exit" link in the test header. Save and exit is the
 * primary action (the sitting is already saved, so it just leaves); Discard
 * is secondary and confirms first.
 */
export function DiagnosticExitButtons({ onSaveExit, onDiscard }: { onSaveExit: () => void; onDiscard: () => void }) {
  return (
    <span className="inline-flex items-center gap-3">
      <button
        type="button"
        onClick={onSaveExit}
        className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-accent dark:text-gray-300"
        title="Your answers and remaining time are kept so you can resume later"
      >
        <Save className="h-4 w-4" aria-hidden />
        Save and exit
      </button>
      <button
        type="button"
        onClick={() => {
          if (typeof window !== 'undefined' && !window.confirm('Discard this diagnostic? Your answers so far will be lost.')) return
          onDiscard()
        }}
        className="text-xs text-gray-500 transition hover:text-red-600 dark:text-gray-400"
      >
        Discard
      </button>
    </span>
  )
}
