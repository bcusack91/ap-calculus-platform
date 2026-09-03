'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import Link from 'next/link'
import { Printer, BarChart3, MessageSquare, FileText } from 'lucide-react'
import SubmissionFeedbackModal from '@/components/SubmissionFeedbackModal'

interface Assignment {
  id: string
  title: string
  type: string
  topicSlug: string | null
  dueDate: string | null
}

interface Grade {
  assignmentId: string
  submissionId: string | null
  score: number | null
  status: string
  percentage: number | null
  feedback: string | null
}

interface Student {
  id: string
  name: string | null
  email: string | null
  grades: Grade[]
  average: number | null
  submitted: number
  total: number
}

interface AssignmentStat {
  id: string
  average: number | null
  submissionCount: number
  totalStudents: number
}

interface GradebookProps {
  classroomId: string
  classroomName?: string
}

export default function Gradebook({ classroomId, classroomName }: GradebookProps) {
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [stats, setStats] = useState<AssignmentStat[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<'name' | 'average'>('name')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  // Which cell is currently being edited, and which is mid-save.
  const [editing, setEditing] = useState<{ studentId: string; assignmentId: string } | null>(null)
  const [savingCell, setSavingCell] = useState<string | null>(null)
  // Cell-level feedback modal target (submission id + display context).
  const [feedbackFor, setFeedbackFor] = useState<{
    submissionId: string; studentName: string; assignmentTitle: string
    score: number | null; feedback: string | null
  } | null>(null)
  // Set when the user hits Escape (or Enter/Tab, which save explicitly), so the
  // input's onBlur (which can fire as the field unmounts) skips the save instead
  // of committing the typed value.
  const cancelRef = useRef(false)
  // Blur doesn't reliably fire when a focused input unmounts, so the flag
  // resets itself on the next tick rather than depending on the blur handler.
  const suppressNextBlur = () => {
    cancelRef.current = true
    setTimeout(() => { cancelRef.current = false }, 0)
  }

  const load = useCallback(async () => {
    try {
      const res = await fetch(`/api/teacher/gradebook?classroomId=${classroomId}`)
      const data = await res.json()
      setAssignments(data.assignments ?? [])
      setStudents(data.students ?? [])
      setStats(data.assignmentStats ?? [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [classroomId])

  useEffect(() => {
    load()
  }, [load])

  // Persist (or clear) a single grade. The local state is updated optimistically
  // (grades, student averages and the footer's assignment averages are all
  // recomputed in place) so a cell edit doesn't refetch the whole gradebook; on
  // a failed save the previous state is rolled back. `raw` is a percentage
  // string (0-100); empty clears the grade.
  const saveGrade = async (studentId: string, assignmentId: string, raw: string) => {
    setEditing(null)
    const trimmed = raw.trim()

    let score: number | null
    if (trimmed === '') {
      score = null
    } else {
      const pct = Number(trimmed)
      if (!Number.isFinite(pct) || pct < 0 || pct > 100) return // ignore invalid input
      score = pct / 100
    }

    // No-op if unchanged.
    const current = students.find((s) => s.id === studentId)?.grades.find((g) => g.assignmentId === assignmentId)
    const currentScore = current?.score ?? null
    if (
      (score === null && currentScore === null) ||
      (score !== null && currentScore !== null && Math.abs(score - currentScore) < 1e-9)
    ) {
      return
    }

    const cellKey = `${studentId}-${assignmentId}`
    setSavingCell(cellKey)

    // Snapshot for rollback, then apply the edit locally.
    const prevStudents = students
    const prevStats = stats
    const newPct = score === null ? null : Math.round(score * 100)
    const nextStudents = students.map((s) => {
      if (s.id !== studentId) return s
      const grades = s.grades.map((g) =>
        g.assignmentId === assignmentId
          ? { ...g, score, percentage: newPct, status: score === null ? g.status : 'COMPLETED' }
          : g
      )
      const scored = grades.filter((g) => g.percentage !== null)
      const average = scored.length > 0
        ? Math.round(scored.reduce((sum, g) => sum + (g.percentage ?? 0), 0) / scored.length)
        : null
      return {
        ...s,
        grades,
        average,
        submitted: grades.filter((g) => g.status !== 'NOT_SUBMITTED').length,
      }
    })
    setStudents(nextStudents)
    setStats(stats.map((st) => {
      if (st.id !== assignmentId) return st
      const scores = nextStudents
        .map((s) => s.grades.find((g) => g.assignmentId === assignmentId)?.percentage)
        .filter((p): p is number => p != null)
      return {
        ...st,
        average: scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null,
        submissionCount: scores.length,
      }
    }))

    try {
      const res = await fetch('/api/teacher/gradebook', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ classroomId, assignmentId, studentId, score }),
      })
      if (!res.ok) throw new Error(`Save failed (${res.status})`)
      // A brand-new grade upserts a submission row server-side; refresh quietly
      // so the cell gains its submission id (for the feedback affordance)
      // without blocking the edit flow.
      if (!current?.submissionId && score !== null) load()
    } catch (err) {
      console.error(err)
      setStudents(prevStudents)
      setStats(prevStats)
    } finally {
      setSavingCell(null)
    }
  }

  const sorted = useMemo(() => {
    return [...students].sort((a, b) => {
      if (sortBy === 'name') {
        const cmp = (a.name ?? '').localeCompare(b.name ?? '')
        return sortDir === 'asc' ? cmp : -cmp
      }
      const aAvg = a.average ?? -1
      const bAvg = b.average ?? -1
      return sortDir === 'asc' ? aAvg - bAvg : bAvg - aAvg
    })
  }, [students, sortBy, sortDir])

  const toggleSort = (col: 'name' | 'average') => {
    if (sortBy === col) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortBy(col)
      setSortDir('asc')
    }
  }

  const gradeColor = (pct: number | null) => {
    if (pct === null) return 'text-gray-500 dark:text-gray-400'
    if (pct >= 90) return 'text-green-600 dark:text-green-400'
    if (pct >= 80) return 'text-blue-600 dark:text-blue-400'
    if (pct >= 70) return 'text-yellow-600 dark:text-yellow-400'
    if (pct >= 60) return 'text-orange-600 dark:text-orange-400'
    return 'text-red-600 dark:text-red-400'
  }

  const letterGrade = (pct: number | null) => {
    if (pct === null) return '—'
    if (pct >= 93) return 'A'
    if (pct >= 90) return 'A-'
    if (pct >= 87) return 'B+'
    if (pct >= 83) return 'B'
    if (pct >= 80) return 'B-'
    if (pct >= 77) return 'C+'
    if (pct >= 73) return 'C'
    if (pct >= 70) return 'C-'
    if (pct >= 67) return 'D+'
    if (pct >= 60) return 'D'
    return 'F'
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
        <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
      </div>
    )
  }

  if (assignments.length === 0) {
    return (
      <div className="p-8 text-center">
        <BarChart3 className="w-8 h-8 mx-auto mb-2 text-gray-400" aria-hidden />
        <p className="text-gray-500 font-medium">No assignments yet</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Create assignments to see grades here</p>
      </div>
    )
  }

  return (
    <div className="gradebook-print-root">
      {/* Print-only report header */}
      <div className="hidden print:block mb-4">
        <h1 className="text-xl font-bold">{classroomName ? `${classroomName} — Grade Report` : 'Grade Report'}</h1>
        <p className="text-sm">
          Printed {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
          {' · '}{students.length} students · {assignments.length} assignments
        </p>
      </div>

      {/* Toolbar (hidden when printing) */}
      <div className="flex justify-end gap-2 mb-4 print:hidden">
        <Link
          href={`/teacher/classroom/${classroomId}/report`}
          className="px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
        >
          <FileText className="inline w-4 h-4 mr-1.5 -mt-0.5" aria-hidden />Class report
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
        >
          <Printer className="inline w-4 h-4 mr-1.5 -mt-0.5" aria-hidden />Print report
        </button>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{students.length}</p>
          <p className="text-xs text-gray-500">Students</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{assignments.length}</p>
          <p className="text-xs text-gray-500">Assignments</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm text-center">
          <p className={`text-2xl font-bold ${gradeColor(
            students.length > 0
              ? Math.round(
                  students.filter((s) => s.average !== null).reduce((sum, s) => sum + (s.average ?? 0), 0) /
                    Math.max(students.filter((s) => s.average !== null).length, 1)
                )
              : null
          )}`}>
            {students.filter((s) => s.average !== null).length > 0
              ? `${Math.round(
                  students.filter((s) => s.average !== null).reduce((sum, s) => sum + (s.average ?? 0), 0) /
                    students.filter((s) => s.average !== null).length
                )}%`
              : '—'}
          </p>
          <p className="text-xs text-gray-500">Class Average</p>
        </div>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 print:hidden">Click any grade cell to set or change a score (0–100%). Leave it blank to clear.</p>

      {/* Gradebook table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                className="text-left p-3 font-medium text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-900 sticky left-0 bg-white dark:bg-gray-800 z-10"
                onClick={() => toggleSort('name')}
              >
                Student {sortBy === 'name' && (sortDir === 'asc' ? '↑' : '↓')}
              </th>
              {assignments.map((a) => (
                <th
                  key={a.id}
                  className="text-center p-3 font-medium text-gray-600 dark:text-gray-400 min-w-[100px]"
                  title={a.title}
                >
                  <div className="truncate max-w-[140px] mx-auto" title={a.title}>{a.title}</div>
                </th>
              ))}
              <th
                className="text-center p-3 font-medium text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-900 min-w-[80px]"
                onClick={() => toggleSort('average')}
              >
                Avg {sortBy === 'average' && (sortDir === 'asc' ? '↑' : '↓')}
              </th>
              <th className="text-center p-3 font-medium text-gray-600 dark:text-gray-400 min-w-[60px]">
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((student) => (
              <tr key={student.id} className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                <td className="p-3 font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800 z-10">
                  <div className="truncate max-w-[150px]">{student.name || 'Unknown'}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[150px]">{student.email}</div>
                </td>
                {assignments.map((a) => {
                  const g = student.grades.find((gr) => gr.assignmentId === a.id)
                  const isEditing = editing?.studentId === student.id && editing?.assignmentId === a.id
                  const isSaving = savingCell === `${student.id}-${a.id}`
                  return (
                    <td key={a.id} className="text-center p-3 relative group/cell">
                      {isEditing ? (
                        <input
                          autoFocus
                          type="number"
                          min={0}
                          max={100}
                          defaultValue={g?.percentage ?? ''}
                          onBlur={(e) => {
                            if (cancelRef.current) { cancelRef.current = false; return }
                            saveGrade(student.id, a.id, e.target.value)
                          }}
                          onKeyDown={(e) => {
                            // Enter saves and moves down a row; Tab moves across
                            // (shift+Tab back); Escape cancels. cancelRef keeps
                            // the unmounting input's blur from double-saving.
                            if (e.key === 'Enter') {
                              e.preventDefault()
                              const value = (e.target as HTMLInputElement).value
                              suppressNextBlur()
                              saveGrade(student.id, a.id, value)
                              const rowIdx = sorted.findIndex((s) => s.id === student.id)
                              const nextStudent = sorted[rowIdx + 1]
                              if (nextStudent) setEditing({ studentId: nextStudent.id, assignmentId: a.id })
                            } else if (e.key === 'Tab') {
                              e.preventDefault()
                              const value = (e.target as HTMLInputElement).value
                              suppressNextBlur()
                              saveGrade(student.id, a.id, value)
                              const colIdx = assignments.findIndex((x) => x.id === a.id)
                              const nextAssignment = assignments[colIdx + (e.shiftKey ? -1 : 1)]
                              if (nextAssignment) setEditing({ studentId: student.id, assignmentId: nextAssignment.id })
                            } else if (e.key === 'Escape') {
                              suppressNextBlur()
                              setEditing(null)
                            }
                          }}
                          className="w-16 px-1 py-0.5 text-center text-base border-2 border-accent rounded dark:bg-gray-700 dark:text-white"
                          aria-label={`Grade for ${student.name || 'student'} on ${a.title}`}
                        />
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => setEditing({ studentId: student.id, assignmentId: a.id })}
                            disabled={isSaving}
                            className={`w-full font-medium rounded px-1 py-0.5 hover:bg-accent-subtle dark:hover:bg-accent-light/20 ${gradeColor(g?.percentage ?? null)} ${isSaving ? 'opacity-40' : ''}`}
                            title="Click to edit grade"
                          >
                            {g?.percentage != null ? `${g.percentage}%` : '—'}
                          </button>
                          {g?.submissionId && (
                            <button
                              type="button"
                              onClick={() => setFeedbackFor({
                                submissionId: g.submissionId!,
                                studentName: student.name || 'Student',
                                assignmentTitle: a.title,
                                score: g.percentage,
                                feedback: g.feedback,
                              })}
                              className={`absolute top-0.5 right-0.5 p-0.5 rounded transition-opacity hover:text-accent-hover focus-visible:opacity-100 print:hidden ${
                                g.feedback
                                  ? 'opacity-100 text-accent'
                                  : 'opacity-0 group-hover/cell:opacity-100 text-gray-400'
                              }`}
                              title={g.feedback ? 'Edit feedback' : 'Leave feedback'}
                              aria-label={`Feedback for ${student.name || 'student'} on ${a.title}`}
                            >
                              <MessageSquare className="w-3.5 h-3.5" aria-hidden />
                            </button>
                          )}
                        </>
                      )}
                    </td>
                  )
                })}
                <td className={`text-center p-3 font-bold ${gradeColor(student.average)}`}>
                  {student.average !== null ? `${student.average}%` : '—'}
                </td>
                <td className={`text-center p-3 font-bold ${gradeColor(student.average)}`}>
                  {letterGrade(student.average)}
                </td>
              </tr>
            ))}
          </tbody>
          {/* Footer with assignment averages */}
          <tfoot>
            <tr className="border-t-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50">
              <td className="p-3 font-medium text-gray-600 dark:text-gray-400 sticky left-0 bg-gray-50 dark:bg-gray-700 z-10">
                Class Average
              </td>
              {assignments.map((a) => {
                const stat = stats.find((s) => s.id === a.id)
                return (
                  <td key={a.id} className={`text-center p-3 font-medium ${gradeColor(stat?.average ?? null)}`}>
                    {stat?.average != null ? `${stat?.average}%` : '—'}
                  </td>
                )
              })}
              <td className="text-center p-3" />
              <td className="text-center p-3" />
            </tr>
          </tfoot>
        </table>
      </div>

      <SubmissionFeedbackModal
        open={!!feedbackFor}
        onClose={() => setFeedbackFor(null)}
        submissionId={feedbackFor?.submissionId ?? null}
        studentName={feedbackFor?.studentName}
        assignmentTitle={feedbackFor?.assignmentTitle}
        currentScore={feedbackFor?.score ?? null}
        currentFeedback={feedbackFor?.feedback ?? null}
        onSaved={load}
      />
    </div>
  )
}
