'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Printer, AlertTriangle, FileText } from 'lucide-react'

/**
 * Whole-class summary report — a printable one-pager for a teacher:
 * class header, summary stats, a per-student table, and a "needs attention"
 * list. On screen it renders as a preview with a Print button; `@media print`
 * (scoped below, same visibility-toggling technique as the gradebook's
 * `.gradebook-print-root`, but with this page's own class so the two never
 * collide) strips everything but the report itself.
 *
 * Data: the existing classroom performance endpoint carries all per-student
 * aggregation; the sibling `report` endpoint adds classroom/teacher names and
 * the true assignment count. Both routes enforce owner/co-teacher access, so
 * this client page needs no auth logic of its own beyond surfacing errors.
 */

interface StudentPerformance {
  userId: string
  name: string
  email: string | null
  topicStats: { started: number; completed: number; avgMastery: number; totalTimeMinutes: number }
  assignmentStats: { completed: number; total: number; avgScore: number | null }
  streak: { current: number; longest: number; lastActive: string | null }
}

interface PerformancePayload {
  students: StudentPerformance[]
  classSummary: {
    totalStudents: number
    avgMastery: number
    totalTopicsCompleted: number
    activeStreaks: number
    avgAssignmentScore: number
    avgStreak: number
  }
}

interface ReportMeta {
  classroom: { id: string; name: string; subject: string | null }
  teacher: { name: string | null; email: string | null }
  assignmentCount: number
  generatedAt: string
}

const DAY_MS = 24 * 60 * 60 * 1000

function daysSince(iso: string | null): number | null {
  if (!iso) return null
  const t = new Date(iso).getTime()
  if (!Number.isFinite(t)) return null
  return Math.max(0, Math.floor((Date.now() - t) / DAY_MS))
}

function lastActiveLabel(iso: string | null): string {
  const d = daysSince(iso)
  if (d === null) return 'Never'
  if (d === 0) return 'Today'
  if (d === 1) return 'Yesterday'
  return `${d} days ago`
}

export default function ClassReportPage() {
  const params = useParams<{ id: string }>()
  const classroomId = params?.id

  const [performance, setPerformance] = useState<PerformancePayload | null>(null)
  const [meta, setMeta] = useState<ReportMeta | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!classroomId) return
    setLoading(true)
    setError(null)
    try {
      const [perfRes, metaRes] = await Promise.all([
        fetch(`/api/teacher/classrooms/${classroomId}/performance`),
        fetch(`/api/teacher/classrooms/${classroomId}/report`),
      ])
      if (!perfRes.ok || !metaRes.ok) {
        const status = !perfRes.ok ? perfRes.status : metaRes.status
        throw new Error(
          status === 401 || status === 403
            ? 'You do not have access to this classroom.'
            : status === 404
              ? 'Classroom not found.'
              : 'Could not load the class report.'
        )
      }
      setPerformance(await perfRes.json())
      setMeta(await metaRes.json())
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }, [classroomId])

  useEffect(() => {
    load()
  }, [load])

  const students = useMemo(
    () => [...(performance?.students ?? [])].sort((a, b) => a.name.localeCompare(b.name)),
    [performance]
  )

  const assignmentCount = meta?.assignmentCount ?? 0

  // Class-wide assignment completion: completed submissions over the number of
  // assignment slots (students x assignments). Falls back to submission rows
  // when the class has students but the count is unavailable.
  const completionPct = useMemo(() => {
    if (!performance || students.length === 0) return null
    const completed = students.reduce((sum, s) => sum + s.assignmentStats.completed, 0)
    const slots =
      assignmentCount > 0
        ? students.length * assignmentCount
        : students.reduce((sum, s) => sum + s.assignmentStats.total, 0)
    return slots > 0 ? Math.round((completed / slots) * 100) : null
  }, [performance, students, assignmentCount])

  // Recomputed from per-student rows because classSummary.avgAssignmentScore
  // reports 0 (not "none") when nothing has been graded yet.
  const avgAssignmentScore = useMemo(() => {
    const scored = students.filter((s) => s.assignmentStats.avgScore !== null)
    if (scored.length === 0) return null
    return Math.round(
      scored.reduce((sum, s) => sum + (s.assignmentStats.avgScore ?? 0), 0) / scored.length
    )
  }, [students])

  // Students who likely need an intervention, with the reasons spelled out —
  // that is what a teacher hands to a counselor or brings to a conference.
  const needsAttention = useMemo(() => {
    return students
      .map((s) => {
        const reasons: string[] = []
        if (s.assignmentStats.avgScore !== null && s.assignmentStats.avgScore < 70) {
          reasons.push(`assignment average ${s.assignmentStats.avgScore}%`)
        }
        if (s.topicStats.started > 0 && s.topicStats.avgMastery < 40) {
          reasons.push(`low mastery (${s.topicStats.avgMastery}%)`)
        }
        if (assignmentCount > 0 && s.assignmentStats.completed < assignmentCount / 2) {
          reasons.push(`${s.assignmentStats.completed} of ${assignmentCount} assignments done`)
        }
        const inactive = daysSince(s.streak.lastActive)
        if (inactive === null) reasons.push('no activity recorded')
        else if (inactive >= 7) reasons.push(`inactive ${inactive} days`)
        return { student: s, reasons }
      })
      .filter((x) => x.reasons.length > 0)
  }, [students, assignmentCount])

  const printedDate = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Print stylesheet — scoped to this page's own root class. */}
      <style media="print">{CLASS_REPORT_PRINT_CSS}</style>

      {/* Screen-only chrome */}
      <div className="flex items-center justify-between gap-3 mb-6 print:hidden">
        <Link
          href={`/teacher/classroom/${classroomId}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden />
          Back to classroom
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          disabled={loading || !!error}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent-hover shadow-sm disabled:opacity-50"
        >
          <Printer className="w-4 h-4" aria-hidden />
          Print report
        </button>
      </div>

      {loading && (
        <div className="space-y-4">
          <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20 p-6 text-center">
          <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
          <button
            onClick={load}
            className="mt-2 text-sm font-semibold text-red-700 dark:text-red-300 underline"
          >
            Try again
          </button>
        </div>
      )}

      {!loading && !error && performance && meta && (
        <div className="class-report-print-root bg-card border border-card-border rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Report header */}
          <header className="mb-6 pb-4 border-b border-card-border">
            <div className="flex items-start gap-3">
              <FileText className="w-8 h-8 text-accent mt-0.5 print:hidden" aria-hidden />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {meta.classroom.name} — Class Report
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  {meta.classroom.subject ? `${meta.classroom.subject} · ` : ''}
                  {meta.teacher.name ? `Teacher: ${meta.teacher.name} · ` : ''}
                  {printedDate}
                </p>
              </div>
            </div>
          </header>

          {/* Summary stats */}
          <section className="mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="print-stat rounded-xl bg-gray-50 dark:bg-gray-700/30 p-4 text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {performance.classSummary.totalStudents}
                </p>
                <p className="text-xs font-medium text-muted-foreground">Students</p>
              </div>
              <div className="print-stat rounded-xl bg-gray-50 dark:bg-gray-700/30 p-4 text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {performance.classSummary.avgMastery}%
                </p>
                <p className="text-xs font-medium text-muted-foreground">Avg mastery</p>
              </div>
              <div className="print-stat rounded-xl bg-gray-50 dark:bg-gray-700/30 p-4 text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {completionPct === null ? '—' : `${completionPct}%`}
                </p>
                <p className="text-xs font-medium text-muted-foreground">
                  Assignment completion{assignmentCount > 0 ? ` (${assignmentCount} assigned)` : ''}
                </p>
              </div>
              <div className="print-stat rounded-xl bg-gray-50 dark:bg-gray-700/30 p-4 text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {avgAssignmentScore === null ? '—' : `${avgAssignmentScore}%`}
                </p>
                <p className="text-xs font-medium text-muted-foreground">Avg assignment score</p>
              </div>
            </div>
          </section>

          {/* Per-student table */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Students</h2>
            {students.length === 0 ? (
              <p className="text-sm text-muted-foreground">No students in this class yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-card-border text-left">
                      <th className="p-2.5 font-medium text-muted-foreground">Student</th>
                      <th className="p-2.5 font-medium text-muted-foreground text-center">Mastery</th>
                      <th className="p-2.5 font-medium text-muted-foreground text-center">Assignments</th>
                      <th className="p-2.5 font-medium text-muted-foreground text-center">Avg score</th>
                      <th className="p-2.5 font-medium text-muted-foreground text-center">Last active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s) => (
                      <tr key={s.userId} className="border-b border-gray-100 dark:border-gray-700/50">
                        <td className="p-2.5">
                          <span className="font-medium text-gray-900 dark:text-white">{s.name}</span>
                          {s.email && (
                            <span className="block text-xs text-muted-foreground">{s.email}</span>
                          )}
                        </td>
                        <td className="p-2.5 text-center text-gray-900 dark:text-white">
                          {s.topicStats.started > 0 ? `${s.topicStats.avgMastery}%` : '—'}
                        </td>
                        <td className="p-2.5 text-center text-gray-900 dark:text-white">
                          {s.assignmentStats.completed}
                          {assignmentCount > 0 ? ` / ${assignmentCount}` : ''}
                        </td>
                        <td className="p-2.5 text-center text-gray-900 dark:text-white">
                          {s.assignmentStats.avgScore === null ? '—' : `${s.assignmentStats.avgScore}%`}
                        </td>
                        <td className="p-2.5 text-center text-gray-900 dark:text-white">
                          {lastActiveLabel(s.streak.lastActive)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {/* Needs attention */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500 print:hidden" aria-hidden />
              Students needing attention
            </h2>
            {needsAttention.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No students are flagged right now — everyone is on track.
              </p>
            ) : (
              <ul className="space-y-2">
                {needsAttention.map(({ student, reasons }) => (
                  <li
                    key={student.userId}
                    className="print-stat rounded-xl bg-gray-50 dark:bg-gray-700/30 p-3 text-sm"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">{student.name}</span>
                    <span className="text-muted-foreground"> — {reasons.join('; ')}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <p className="text-[11px] text-muted-foreground mt-8">
            Mastery covers this class&rsquo;s topics; assignment figures are limited to this class.
            Generated by Study Mondo on {printedDate}.
          </p>
        </div>
      )}
    </div>
  )
}

/**
 * Print stylesheet, same visibility-toggling technique as the gradebook's
 * global `.gradebook-print-root` CSS but scoped to this page's own class.
 * The two never conflict: `.gradebook-print-root` is not mounted on this
 * route, and this `<style>` tag exists only on this route.
 */
const CLASS_REPORT_PRINT_CSS = `
  /* Show only the report — hides the site nav, back link and button. */
  body:has(.class-report-print-root) * { visibility: hidden; }
  body:has(.class-report-print-root) .class-report-print-root,
  body:has(.class-report-print-root) .class-report-print-root * { visibility: visible; }
  body:has(.class-report-print-root) .class-report-print-root {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0 !important;
    border: none !important;
    border-radius: 0 !important;
  }

  /* Plain black-on-white regardless of theme. */
  .class-report-print-root,
  .class-report-print-root * {
    color: #000 !important;
    background: #fff !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  .class-report-print-root { font-size: 11pt; }

  /* Stat cards and attention rows keep their shape with a light border. */
  .class-report-print-root .print-stat {
    border: 1px solid #ccc !important;
    break-inside: avoid;
  }
  .class-report-print-root h1,
  .class-report-print-root h2 { break-after: avoid; }
  .class-report-print-root section { break-inside: auto; }

  /* Full-width bordered table, header repeated on every printed page. */
  .class-report-print-root .overflow-x-auto { overflow: visible !important; }
  .class-report-print-root table {
    width: 100% !important;
    border-collapse: collapse !important;
    font-size: 10pt;
  }
  .class-report-print-root th,
  .class-report-print-root td {
    border: 1px solid #999 !important;
    padding: 4px 6px !important;
  }
  .class-report-print-root thead { display: table-header-group; }
  .class-report-print-root tr { break-inside: avoid; }
`
