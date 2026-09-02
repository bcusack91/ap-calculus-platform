'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react'
import SubmissionFeedbackModal from '@/components/SubmissionFeedbackModal'

export interface AssignmentStatsData {
  notStarted: number
  inProgress: number
  completed: number
  /** 0-1 fraction, null when no completed submission has a score. */
  avgScore: number | null
}

export interface SubmissionRow {
  id: string
  status: string
  score: number | null
  attempts: number
  feedback: string | null
  completedAt: string | null
  student: { id: string; name: string | null; email: string | null }
}

const STATUS_CHIP: Record<string, { label: string; cls: string }> = {
  COMPLETED: {
    label: 'Completed',
    cls: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
  IN_PROGRESS: {
    label: 'In progress',
    cls: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  },
  OVERDUE: {
    label: 'Overdue',
    cls: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  },
  NOT_STARTED: {
    label: 'Not started',
    cls: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
  },
}

/**
 * Real per-assignment progress: a compact distribution bar (completed /
 * in-progress / not-started), and an expandable per-student results table with
 * a Feedback button on completed rows. Replaces the old "N submissions" count,
 * which always equaled roster size because submission rows are pre-created as
 * NOT_STARTED for every member.
 */
export default function AssignmentResults({
  assignmentTitle,
  stats,
  submissions,
  onChanged,
}: {
  assignmentTitle: string
  stats: AssignmentStatsData | null
  submissions: SubmissionRow[] | null
  onChanged: () => void
}) {
  const [expanded, setExpanded] = useState(false)
  const [feedbackFor, setFeedbackFor] = useState<SubmissionRow | null>(null)

  if (!stats) {
    return <p className="text-xs text-gray-400 mt-3">Loading results…</p>
  }

  const total = stats.notStarted + stats.inProgress + stats.completed
  const pct = (n: number) => (total > 0 ? Math.max((n / total) * 100, n > 0 ? 3 : 0) : 0)

  const sorted = (submissions ?? []).slice().sort((a, b) => {
    const order: Record<string, number> = { COMPLETED: 0, IN_PROGRESS: 1, OVERDUE: 2, NOT_STARTED: 3 }
    const d = (order[a.status] ?? 4) - (order[b.status] ?? 4)
    if (d !== 0) return d
    return (a.student.name || a.student.email || '').localeCompare(b.student.name || b.student.email || '')
  })

  return (
    <div className="mt-3">
      {/* Distribution bar + counts */}
      <div className="flex items-center gap-3 flex-wrap">
        <div
          className="flex h-2 w-40 sm:w-56 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600"
          role="img"
          aria-label={`${stats.completed} completed, ${stats.inProgress} in progress, ${stats.notStarted} not started`}
        >
          <div className="bg-green-500" style={{ width: `${pct(stats.completed)}%` }} />
          <div className="bg-amber-400" style={{ width: `${pct(stats.inProgress)}%` }} />
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span>
            <span className="font-bold text-green-600 dark:text-green-400">{stats.completed}</span> done
          </span>
          <span>
            <span className="font-bold text-amber-600 dark:text-amber-400">{stats.inProgress}</span> in progress
          </span>
          <span>
            <span className="font-bold text-gray-600 dark:text-gray-300">{stats.notStarted}</span> not started
          </span>
          {stats.avgScore != null && (
            <span>
              avg <span className="font-bold text-gray-700 dark:text-gray-200">{Math.round(stats.avgScore * 100)}%</span>
            </span>
          )}
        </div>
        <button
          onClick={() => setExpanded((e) => !e)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? 'Hide results' : 'View results'}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" /> : <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />}
        </button>
      </div>

      {/* Per-student table */}
      {expanded && (
        <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          {sorted.length === 0 ? (
            <p className="p-4 text-sm text-gray-500">No students in this class yet.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                  <th className="text-left py-2 px-3 font-semibold text-gray-700 dark:text-gray-300">Student</th>
                  <th className="text-center py-2 px-3 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-center py-2 px-3 font-semibold text-gray-700 dark:text-gray-300">Score</th>
                  <th className="text-center py-2 px-3 font-semibold text-gray-700 dark:text-gray-300">Attempts</th>
                  <th className="text-right py-2 px-3 font-semibold text-gray-700 dark:text-gray-300">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((s) => {
                  const chip = STATUS_CHIP[s.status] ?? STATUS_CHIP.NOT_STARTED
                  return (
                    <tr key={s.id} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                      <td className="py-2 px-3">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {s.student.name || 'Unnamed student'}
                        </p>
                        <p className="text-xs text-gray-400">{s.student.email}</p>
                      </td>
                      <td className="text-center py-2 px-3">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${chip.cls}`}>
                          {chip.label}
                        </span>
                      </td>
                      <td className="text-center py-2 px-3 font-medium text-gray-700 dark:text-gray-200">
                        {s.score != null ? `${Math.round(s.score * 100)}%` : '—'}
                      </td>
                      <td className="text-center py-2 px-3 text-gray-600 dark:text-gray-400">{s.attempts}</td>
                      <td className="text-right py-2 px-3">
                        {s.status === 'COMPLETED' && (
                          <button
                            onClick={() => setFeedbackFor(s)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-accent-subtle dark:bg-accent-light/20 text-accent hover:bg-accent-light dark:hover:bg-accent-light/40 transition-colors"
                            title="Leave feedback or adjust the grade"
                          >
                            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                            {s.feedback ? 'Edit feedback' : 'Feedback'}
                          </button>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
      )}

      <SubmissionFeedbackModal
        open={!!feedbackFor}
        onClose={() => setFeedbackFor(null)}
        submissionId={feedbackFor?.id ?? null}
        studentName={feedbackFor?.student.name || feedbackFor?.student.email || undefined}
        assignmentTitle={assignmentTitle}
        currentScore={feedbackFor?.score != null ? Math.round(feedbackFor.score * 100) : null}
        currentFeedback={feedbackFor?.feedback ?? null}
        onSaved={onChanged}
      />
    </div>
  )
}
