'use client'

import { useEffect, useState, useCallback } from 'react'
import { Printer } from 'lucide-react'
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
  classroom?: { id: string; name: string | null }
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
  selfDirected?: {
    unitTests: { courseSlug: string; unit: string; correct: number; total: number; percentage: number; completedAt: string }[]
    frqs: { courseSlug: string; mode: string; pointsEarned: number; pointsPossible: number; questionCount: number; percentage: number; completedAt: string }[]
    satPracticeTests: { testNumber: number; totalScore: number; rwScore: number; mathScore: number; completedAt: string }[]
    mcatPracticeTests: { section: string; score: number; percentage: number; completedAt: string }[]
    diagnostics: { category: string; scoreLabel: string | null; takenAt: string }[]
    counts: { unitTests: number; frqs: number; satPracticeTests: number; mcatPracticeTests: number; diagnostics: number }
  }
  generatedAt: string
}

/** One line of self-directed work: what it was, when, and how it went. */
function WorkRow({ title, meta, right, tone }: {
  title: string; meta: string; right: string; tone?: 'good' | 'warn' | 'bad' | 'default'
}) {
  return (
    <div className="print-row flex items-center justify-between gap-3 rounded-xl bg-gray-50 dark:bg-gray-700/30 p-3">
      <div className="min-w-0">
        <p className="font-medium text-sm text-gray-900 dark:text-white truncate">{title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{meta}</p>
      </div>
      <span className={`shrink-0 text-sm font-bold ${
        tone === 'good' ? 'text-green-600 dark:text-green-400'
          : tone === 'warn' ? 'text-amber-600 dark:text-amber-400'
          : tone === 'bad' ? 'text-red-600 dark:text-red-400'
          : 'text-gray-500 dark:text-gray-400'
      }`}>{right}</span>
    </div>
  )
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
    <div className="print-row rounded-xl bg-gray-50 dark:bg-gray-700/30 p-3">
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
      <div className="student-report-print-root p-6 max-h-[75vh] overflow-y-auto">
        {/* Print-only stylesheet — mounted only while this modal is open, so it
            cannot leak into normal printing. See the comment above the CSS. */}
        <style media="print">{STUDENT_REPORT_PRINT_CSS}</style>

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
            {/* Print-only report header (the dialog title bar is outside the
                print root, so the student's name is repeated here for paper). */}
            <div className="hidden print:block">
              <h1 className="text-xl font-bold">
                {report.student.name || studentName || 'Student'} — Student Report
              </h1>
              <p className="text-sm">
                {report.classroom?.name ? `${report.classroom.name} · ` : ''}
                {report.student.email ? `${report.student.email} · ` : ''}
                Printed {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="flex items-start justify-between gap-3 -mt-2 print:hidden">
              {report.student.email ? (
                <p className="text-sm text-gray-500 dark:text-gray-400">{report.student.email}</p>
              ) : <span />}
              <button
                type="button"
                onClick={() => window.print()}
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
              >
                <Printer className="w-4 h-4" aria-hidden />Print report
              </button>
            </div>

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
                {/* On paper the color-coded bars carry no information — print a table instead. */}
                <table className="hidden print:table w-full text-sm">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Topic</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.quizTrend.map((q, i) => (
                      <tr key={i}>
                        <td>{q.date ? new Date(q.date).toLocaleDateString() : '—'}</td>
                        <td>{q.topic}</td>
                        <td>{q.score}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex items-end gap-1.5 h-28 print:hidden">
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
                    <div key={sub.name} className="print-row">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{sub.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {sub.completed}/{sub.total}
                          <span className="hidden print:inline"> ({sub.percentage}%)</span>
                        </span>
                      </div>
                      {/* An accent-on-gray bar prints as an empty white pill; the numbers above cover it. */}
                      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden print:hidden">
                        <div className="h-full rounded-full bg-accent" style={{ width: `${sub.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Work the student chose to do on their own. None of this used to
                reach a teacher at all — it was recorded nowhere, so a student
                could put in hours and the report would look empty. */}
            {report.selfDirected && (
              report.selfDirected.counts.unitTests +
              report.selfDirected.counts.frqs +
              report.selfDirected.counts.satPracticeTests +
              report.selfDirected.counts.mcatPracticeTests +
              report.selfDirected.counts.diagnostics
            ) > 0 && (
              <section>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Work done independently</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  Not assigned by anyone — this is what the student took on themselves.
                </p>
                <div className="space-y-2">
                  {report.selfDirected.unitTests.slice(0, 6).map((u, i) => (
                    <WorkRow
                      key={`ut-${i}`}
                      title={`Unit test — ${u.unit}`}
                      meta={`${u.courseSlug} · ${u.correct}/${u.total} · ${new Date(u.completedAt).toLocaleDateString()}`}
                      right={`${u.percentage}%`}
                      tone={scoreTone(u.percentage, 70)}
                    />
                  ))}
                  {report.selfDirected.frqs.slice(0, 6).map((f, i) => (
                    <WorkRow
                      key={`frq-${i}`}
                      title={`Free response — ${f.questionCount} question${f.questionCount === 1 ? '' : 's'}${f.mode === 'timed' ? ' (timed)' : ''}`}
                      meta={`${f.courseSlug} · ${f.pointsEarned}/${f.pointsPossible} points · ${new Date(f.completedAt).toLocaleDateString()}`}
                      right={`${f.percentage}%`}
                      tone={scoreTone(f.percentage, 70)}
                    />
                  ))}
                  {report.selfDirected.satPracticeTests.slice(0, 4).map((t, i) => (
                    <WorkRow
                      key={`sat-${i}`}
                      title={`SAT practice test ${t.testNumber}`}
                      meta={`R&W ${t.rwScore} · Math ${t.mathScore} · ${new Date(t.completedAt).toLocaleDateString()}`}
                      right={String(t.totalScore)}
                    />
                  ))}
                  {report.selfDirected.mcatPracticeTests.slice(0, 4).map((t, i) => (
                    <WorkRow
                      key={`mcat-${i}`}
                      title={`MCAT practice — ${t.section}`}
                      meta={new Date(t.completedAt).toLocaleDateString()}
                      right={String(t.score)}
                    />
                  ))}
                  {report.selfDirected.diagnostics.slice(0, 5).map((d, i) => (
                    <WorkRow
                      key={`diag-${i}`}
                      title={`Diagnostic — ${d.category}`}
                      meta={new Date(d.takenAt).toLocaleDateString()}
                      right={d.scoreLabel ?? '—'}
                    />
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
                      <div key={i} className="print-row flex items-center justify-between gap-3 rounded-xl bg-gray-50 dark:bg-gray-700/30 p-3">
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
              Quiz, flashcard and independent-work figures cover this student across all of Study Mondo; assignments are limited to this class.
            </p>
          </div>
        )}
      </div>
    </FocusTrapDialog>
  )
}

/**
 * Print stylesheet for the per-student report.
 *
 * Same visibility-toggling technique as `.gradebook-print-root` in globals.css,
 * but scoped to this component: the `<style>` tag above only exists in the DOM
 * while the modal is open, so a print with the modal closed is untouched.
 *
 * Coexistence with the gradebook's global print CSS: the modal can open on the
 * classroom page while the Gradebook (Insights tab) is mounted, and both rule
 * sets would then mark their own root `visibility: visible`. The modal wins by
 * `display: none`-ing the gradebook root outright — display beats visibility,
 * and the rule vanishes with the modal, so the gradebook's own print flow is
 * unaffected whenever this dialog is closed.
 */
const STUDENT_REPORT_PRINT_CSS = `
  /* The dialog locks body scroll; undo that for pagination. */
  body:has(.student-report-print-root) { overflow: visible !important; }

  /* Show only the report. */
  body:has(.student-report-print-root) * { visibility: hidden; }
  body:has(.student-report-print-root) .student-report-print-root,
  body:has(.student-report-print-root) .student-report-print-root * { visibility: visible; }

  /* If the gradebook is also on the page, the open modal takes precedence. */
  body:has(.student-report-print-root) .gradebook-print-root,
  body:has(.student-report-print-root) .gradebook-print-root * { display: none !important; }

  /* Un-fix and un-clip the dialog ancestors so the report flows across pages
     instead of being trapped in the modal's scroll box. */
  body:has(.student-report-print-root) [role="presentation"],
  body:has(.student-report-print-root) [role="dialog"] {
    position: static !important;
    overflow: visible !important;
    max-height: none !important;
    max-width: none !important;
    width: auto !important;
    margin: 0 !important;
    box-shadow: none !important;
  }

  .student-report-print-root {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100% !important;
    max-height: none !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    font-size: 11pt;
  }

  /* Plain black-on-white, no chrome, regardless of theme. */
  .student-report-print-root,
  .student-report-print-root * {
    color: #000 !important;
    background: #fff !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  /* The gray stat/work cards keep their shape with a light border. */
  .student-report-print-root .print-row.rounded-xl,
  .student-report-print-root .print-row .rounded-xl {
    border: 1px solid #ccc !important;
  }

  /* Page-break hygiene: never split a card/row, keep headings with content. */
  .student-report-print-root .print-row { break-inside: avoid; }
  .student-report-print-root h3 { break-after: avoid; }

  /* Print tables (quiz trend): bordered, header repeated on every page. */
  .student-report-print-root table {
    width: 100% !important;
    border-collapse: collapse !important;
    font-size: 10pt;
  }
  .student-report-print-root th,
  .student-report-print-root td {
    border: 1px solid #999 !important;
    padding: 4px 6px !important;
    text-align: left;
  }
  .student-report-print-root thead { display: table-header-group; }
  .student-report-print-root tr { break-inside: avoid; }

  .student-report-print-root .truncate {
    overflow: visible !important;
    text-overflow: clip !important;
    white-space: normal !important;
    max-width: none !important;
  }
`
