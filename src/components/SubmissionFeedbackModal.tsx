'use client'

import { useEffect, useState } from 'react'
import FocusTrapDialog from '@/components/FocusTrapDialog'

/**
 * Leave feedback on (and optionally re-grade) a single submission.
 *
 * /api/teacher/submissions/[id]/feedback has always accepted this, but no screen
 * called it — so a teacher could see that a student scored 45% and had no way to
 * say anything about it. A score with no reply is a dead end; this is the reply.
 *
 * The score field is optional and overrides auto-grading (the API sets
 * gradedManually), which is what a teacher needs when a student's work deserves
 * credit the auto-grader didn't give.
 */
export default function SubmissionFeedbackModal({
  open, onClose, submissionId, studentName, assignmentTitle, currentScore, currentFeedback, onSaved,
}: {
  open: boolean
  onClose: () => void
  submissionId: string | null
  studentName?: string
  assignmentTitle?: string
  /** 0-100 percent, or null when ungraded. */
  currentScore?: number | null
  currentFeedback?: string | null
  onSaved?: () => void
}) {
  const [feedback, setFeedback] = useState('')
  const [scoreInput, setScoreInput] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (open) {
      setFeedback(currentFeedback ?? '')
      setScoreInput(currentScore === null || currentScore === undefined ? '' : String(currentScore))
      setError(null)
    }
  }, [open, currentFeedback, currentScore])

  const save = async () => {
    if (!submissionId) return
    setSaving(true)
    setError(null)
    try {
      // Only send `score` when the teacher actually touched it — omitting the
      // key leaves the existing grade (and gradedManually) untouched, while
      // sending null deliberately clears it.
      const body: { feedback: string; score?: number | null } = { feedback }
      const trimmed = scoreInput.trim()
      const original = currentScore === null || currentScore === undefined ? '' : String(currentScore)
      if (trimmed !== original) {
        if (trimmed === '') {
          body.score = null
        } else {
          const pct = Number(trimmed)
          if (!Number.isFinite(pct) || pct < 0 || pct > 100) {
            setError('Score must be a number between 0 and 100')
            setSaving(false)
            return
          }
          // The API stores a 0-1 fraction, the UI speaks percent.
          body.score = pct / 100
        }
      }

      const res = await fetch(`/api/teacher/submissions/${submissionId}/feedback`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j.error || 'Could not save')
      }
      onSaved?.()
      onClose()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setSaving(false)
    }
  }

  return (
    <FocusTrapDialog open={open} onClose={onClose} title="Feedback">
      <div className="p-6 space-y-4">
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{studentName}</p>
          {assignmentTitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{assignmentTitle}</p>
          )}
        </div>

        <div>
          <label htmlFor="feedback-text" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Feedback for the student
          </label>
          <textarea
            id="feedback-text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={5}
            placeholder="What went well, and the one thing to work on next…"
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="feedback-score" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Override the grade <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              id="feedback-score"
              type="number"
              min={0}
              max={100}
              inputMode="numeric"
              value={scoreInput}
              onChange={(e) => setScoreInput(e.target.value)}
              placeholder="leave blank to keep as-is"
              className="w-44 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <span className="text-sm text-gray-500">%</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Entering a grade here replaces the auto-graded score and marks the submission complete.
            Clear the box to remove a manual grade.
          </p>
        </div>

        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={save}
            disabled={saving}
            className="px-4 py-2 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent-hover disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save feedback'}
          </button>
        </div>
      </div>
    </FocusTrapDialog>
  )
}
