'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'

interface Assignment {
  id: string
  title: string
  type: string
  topicSlug: string | null
  dueDate: string | null
}

interface Grade {
  assignmentId: string
  score: number | null
  status: string
  percentage: number | null
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
  // Set when the user hits Escape, so the input's onBlur (which can fire as the
  // field unmounts) skips the save instead of committing the typed value.
  const cancelRef = useRef(false)

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

  // Persist (or clear) a single grade, then refetch so averages/footer stay in
  // sync with the server's calculation. `raw` is a percentage string (0-100);
  // empty clears the grade.
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
    try {
      const res = await fetch('/api/teacher/gradebook', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ classroomId, assignmentId, studentId, score }),
      })
      if (res.ok) await load()
    } catch (err) {
      console.error(err)
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
        <p className="text-3xl mb-2">📊</p>
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
      <div className="flex justify-end mb-4 print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
        >
          🖨️ Print report
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
                  className="text-center p-3 font-medium text-gray-600 dark:text-gray-400 min-w-[80px]"
                  title={a.title}
                >
                  <div className="truncate max-w-[80px]">{a.title}</div>
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
                    <td key={a.id} className="text-center p-3">
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
                            if (e.key === 'Enter') (e.target as HTMLInputElement).blur()
                            else if (e.key === 'Escape') { cancelRef.current = true; setEditing(null) }
                          }}
                          className="w-16 px-1 py-0.5 text-center text-base border-2 border-blue-400 rounded dark:bg-gray-700 dark:text-white"
                          aria-label={`Grade for ${student.name || 'student'} on ${a.title}`}
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setEditing({ studentId: student.id, assignmentId: a.id })}
                          disabled={isSaving}
                          className={`w-full font-medium rounded px-1 py-0.5 hover:bg-blue-50 dark:hover:bg-blue-900/20 ${gradeColor(g?.percentage ?? null)} ${isSaving ? 'opacity-40' : ''}`}
                          title="Click to edit grade"
                        >
                          {g?.percentage != null ? `${g.percentage}%` : '—'}
                        </button>
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
    </div>
  )
}
