'use client'

import { useEffect, useState, useCallback } from 'react'
import FocusTrapDialog from '@/components/FocusTrapDialog'

/**
 * One student's full picture, for a teacher.
 *
 * /api/teacher/student-report has always returned this data — lesson progress,
 * quiz trend, flashcard mastery, streak, assignment history — but nothing in the
 * UI called it, so "how is this student actually doing?" (the question teachers
 * ask most) had no answer anywhere in the product. This is that screen.
 *
 * Built as a modal rather than a route so it opens from wherever the teacher
 * already is — the dashboard's submission list or the classroom roster — without
 * losing their place.
 */

interface StudentReport {
  student: { id: string; name: string | null; email: string | null; image: string | null }
  summary: {
    completedLessons: number
    totalLessons: number
    avgQuizScore: number | null
    assignmentAvg: number | null
    flashcardTotal: number
    flashcardMastered: number
    flashcardDue: number
    totalStudyMinutes: number
    currentStreak: number
    longestStreak: number
  }
  subjects: { name: string; completed: number; total: number; percentage: number }[]
  quizTrend: { date?: string; score: number; topic: string }[]
  assignments: {
    title: string
    type: string
    score: number | null
    requiredScore: number | null
    status: string
    completedAt?: string
  }[]
  generatedAt: string
}

function Stat({ label, value, hint, tone = 'default' }: {
  label: string; value: string; hint?: string; tone?: 'default' | 'good' | 'warn' | 'bad'
}) {
  const toneClass =
    tone === 'good' ? 'text-green-600 dark:text-green-400'
      : tone === 'warn' ? 'text-amber-600 dark:text-amber-400'
      : tone === 'bad' ? 'text-red-600 dark:text-red-400'
      : 'text-gray-900 dark:text-white'
  return (
    <div className="rounded-xl bg-gray-50 dark:bg-gray-700/30 p-3">
      <div className={`text-2xl font-bold ${toneClass}`}>{value}</div>
      <div className="text-xs font-medium text-gray-600 dark:text-gray-300">{label}</div>
      {hint && <div className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{hint}</div>}
    </div>
  )
}

/** Score-to-tone, shared by the trend chart and the assignment rows. */
const scoreTone = (pct: number | null, required = 70) =>
  pct === null ? 'default' : pct >= required ? 'good' : pct >= required - 15 ? 'warn' : 'bad'

export default function StudentReportModal({
  open, onClose, studentId, classroomId, studentName,
}: {
  open: boolean
  onClose: () => void
  studentId: string | null
  classroomId: string | null
  studentName?: string
}) {
  const [report, setReport] = useState<StudentReport | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!studentId || !classroomId) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/teacher/student-report?studentId=${studentId}&classroomId=${classroomId}`)
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Could not load this student’s report')
      }
      setReport(await res.json())
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }, [studentId, classroomId])

  useEffect(() => {
    if (open) { setReport(null); load() }
  }, [open, load])

  const s = report?.summary
  const maxTrend = Math.max(100, ...(report?.quizTrend.map((q) => q.score) ?? [0]))

  return (
    <FocusTrapDialog
      open={open}
      onClose={onClose}
      title={report?.student.name || studentName || 'Student report'}
    >
      <div className="p-6 max-h-[75vh] overflow-y-auto">
        {loading && <p className="text-center text-gray-500 py-10">Loading report…</p>}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20 p-4">
            <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            <button onClick={load} className="mt-2 text-sm font-semibold text-red-700 dark:text-red-300 underline">
              Try again
            </button>
          </div>
        )}

        {report && s && (
          <div className="space-y-6">
            {report.student.email && (
              <p className="text-sm text-gray-500 dark:text-gray-400 -mt-2">{report.student.email}</p>
            )}

            {/* Headline numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Stat
                label="Quiz average"
                value={s.avgQuizScore === null ? '—' : `${s.avgQuizScore}%`}
                hint={s.avgQuizScore === null ? 'no quizzes yet' : undefined}
                tone={scoreTone(s.avgQuizScore)}
              />
              <Stat
                label="Assignment average"
                value={s.assignmentAvg === null ? '—' : `${s.assignmentAvg}%`}
                hint={s.assignmentAvg === null ? 'nothing graded yet' : undefined}
                tone={scoreTone(s.assignmentAvg)}
              />
              <Stat
                label="Lessons completed"
                value={`${s.completedLessons}`}
                hint={s.totalLessons > 0 ? `of ${s.totalLessons} started` : 'none started'}
              />
              <Stat
                label="Current streak"
                value={`${s.currentStreak}`}
                hint={`best ${s.longestStreak}`}
                tone={s.currentStreak > 0 ? 'good' : 'default'}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <Stat label="Flashcards mastered" value={`${s.flashcardMastered}`} hint={`of ${s.flashcardTotal}`} />
              <Stat
                label="Cards due now"
                value={`${s.flashcardDue}`}
                tone={s.flashcardDue > 20 ? 'warn' : 'default'}
              />
              <Stat
                label="Study time"
                value={s.totalStudyMinutes >= 60 ? `${Math.round(s.totalStudyMinutes / 60)}h` : `${s.totalStudyMinutes}m`}
              />
            </div>

            {/* Quiz trend — most recent last, so it reads left to right like time */}
            {report.quizTrend.length > 0 && (
              <section>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Recent quiz scores</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Oldest to newest, last {report.quizTrend.length}</p>
                <div className="flex items-end gap-1.5 h-28">
                  {report.quizTrend.map((q, i) => {
                    const tone = scoreTone(q.score)
                    const bar =
                      tone === 'good' ? 'bg-green-500' : tone === 'warn' ? 'bg-amber-500' : 'bg-red-500'
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                        <div
                          className={`w-full rounded-t ${bar} transition-all`}
                          style={{ height: `${Math.max(4, (q.score / maxTrend) * 100)}%` }}
                        />
                        <span className="sr-only">{q.topic}: {q.score}%</span>
                        <div
                          role="tooltip"
                          className="pointer-events-none absolute bottom-full mb-1 hidden group-hover:block whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-[11px] text-white z-10"
                        >
                          {q.topic} · {q.score}%
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>
            )}

            {/* Per-course progress */}
            {report.subjects.length > 0 && (
              <section>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Progress by course</h3>
                <div className="space-y-2">
                  {report.subjects.map((sub) => (
                    <div key={sub.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{sub.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{sub.completed}/{sub.total}</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <div className="h-full rounded-full bg-accent" style={{ width: `${sub.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Assignment history for THIS classroom */}
            <section>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Assignments in this class</h3>
              {report.assignments.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400">No assignment submissions yet.</p>
              ) : (
                <div className="space-y-2">
                  {report.assignments.map((a, i) => {
                    const pct = a.score === null ? null : Math.round(a.score * 100)
                    const tone = scoreTone(pct, a.requiredScore ?? 70)
                    return (
                      <div key={i} className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 dark:bg-gray-700/30 p-3">
                        <div className="min-w-0">
                          <p className="font-medium text-sm text-gray-900 dark:text-white truncate">{a.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {a.status.toLowerCase()}
                            {a.completedAt && ` · ${new Date(a.completedAt).toLocaleDateString()}`}
                          </p>
                        </div>
                        <span className={`shrink-0 text-sm font-bold ${
                          tone === 'good' ? 'text-green-600 dark:text-green-400'
                            : tone === 'warn' ? 'text-amber-600 dark:text-amber-400'
                            : tone === 'bad' ? 'text-red-600 dark:text-red-400'
                            : 'text-gray-400'
                        }`}>
                          {pct === null ? 'ungraded' : `${pct}%`}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </section>

            <p className="text-[11px] text-gray-400 dark:text-gray-500">
              Quiz and flashcard figures cover this student across all of Study Mondo; assignments are limited to this class.
            </p>
          </div>
        )}
      </div>
    </FocusTrapDialog>
  )
}
