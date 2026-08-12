'use client'

import { useCallback, useEffect, useState } from 'react'

/**
 * Assigned class diagnostics — sits at the top of the Class Plan tab.
 * "Assign Diagnostic" freezes ONE generated test for the whole roster
 * (identical questions — owner decision), students get a dashboard banner
 * until they take it, and results aggregate here: completion, class average,
 * weakest domains, per-student scores.
 */

interface DiagStudent { userId: string; name: string; takenAt: string | null; scoreLabel: string | null; percentage: number | null }
interface Diag {
  id: string
  courseKey: string
  courseLabel: string
  title: string
  dueDate: string | null
  createdAt: string
  takenCount: number
  totalStudents: number
  avgPercentage: number | null
  domainAverages: { name: string; avg: number }[]
  students: DiagStudent[]
}

export default function ClassDiagnosticsPanel({ classroomId }: { classroomId: string }) {
  const [diagnostics, setDiagnostics] = useState<Diag[] | null>(null)
  const [assignable, setAssignable] = useState<{ key: string; label: string }[]>([])
  const [expanded, setExpanded] = useState<string | null>(null)
  const [assigning, setAssigning] = useState(false)
  const [courseKey, setCourseKey] = useState('mcat')
  const [dueDate, setDueDate] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(() => {
    fetch(`/api/teacher/classrooms/${classroomId}/class-diagnostics`, { cache: 'no-store' })
      .then(async r => {
        const d = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(d.error || 'Could not load diagnostics')
        setDiagnostics(d.diagnostics)
        setAssignable(d.assignableCourses ?? [])
        setError(null)
      })
      .catch(e => setError(e instanceof Error ? e.message : 'Could not load diagnostics'))
  }, [classroomId])

  useEffect(() => { load() }, [load])

  const assign = async () => {
    setBusy(true)
    setError(null)
    try {
      const r = await fetch(`/api/teacher/classrooms/${classroomId}/class-diagnostics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseKey, dueDate: dueDate || undefined }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) { setError(d.error || 'Could not assign'); return }
      setAssigning(false)
      setDueDate('')
      load()
    } finally {
      setBusy(false)
    }
  }

  if (diagnostics === null && !error) return null

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">📝 Assigned diagnostics</h2>
        <button
          onClick={() => setAssigning(v => !v)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {assigning ? 'Cancel' : '➕ Assign diagnostic'}
        </button>
      </div>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        One frozen test, identical questions for everyone — results are directly comparable. Students see a
        banner on their dashboard until they&apos;ve taken it.
      </p>
      {error && <p className="mb-3 text-sm text-red-600 dark:text-red-400">{error}</p>}

      {assigning && (
        <div className="mb-4 flex flex-wrap items-end gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <label className="text-sm">
            <span className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Course</span>
            <select value={courseKey} onChange={e => setCourseKey(e.target.value)} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white">
              {assignable.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Due date (optional)</span>
            <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          </label>
          <button
            onClick={() => void assign()}
            disabled={busy}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {busy ? 'Generating test…' : 'Assign to class'}
          </button>
        </div>
      )}

      {(diagnostics ?? []).length === 0 ? (
        <p className="text-sm text-gray-400">
          Nothing assigned yet. Assign Diagnostic 1 after your introductory class — every student gets the same
          questions, and this panel fills with results as they take it.
        </p>
      ) : (
        <div className="space-y-3">
          {(diagnostics ?? []).map(d => (
            <div key={d.id} className="rounded-xl border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setExpanded(expanded === d.id ? null : d.id)}
                className="flex w-full flex-wrap items-center justify-between gap-2 px-4 py-3 text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {expanded === d.id ? '▾' : '▸'} {d.courseLabel} {d.title}
                  {d.dueDate && <span className="ml-2 text-xs font-normal text-gray-500">due {new Date(d.dueDate).toLocaleDateString()}</span>}
                </span>
                <span className="flex items-center gap-3 text-sm">
                  <span className={`font-medium ${d.takenCount === d.totalStudents ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
                    {d.takenCount}/{d.totalStudents} taken
                  </span>
                  {d.avgPercentage !== null && <span className="text-gray-500 dark:text-gray-400">class avg {d.avgPercentage}%</span>}
                </span>
              </button>
              {expanded === d.id && (
                <div className="border-t border-gray-100 px-4 py-3 dark:border-gray-700">
                  {d.domainAverages.length > 0 && (
                    <div className="mb-3">
                      <p className="mb-1.5 text-xs font-medium uppercase text-gray-400">Class domain averages (weakest first)</p>
                      <div className="flex flex-wrap gap-1.5">
                        {d.domainAverages.map(dom => (
                          <span key={dom.name} className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${dom.avg < 50 ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' : dom.avg < 75 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' : 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'}`}>
                            {dom.name} {dom.avg}%
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="grid gap-1.5 sm:grid-cols-2">
                    {d.students.map(s => (
                      <div key={s.userId} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-1.5 text-sm dark:bg-gray-700/50">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{s.name}</span>
                        {s.takenAt ? (
                          <span className="text-gray-600 dark:text-gray-400">
                            {s.scoreLabel ?? '—'}{s.percentage !== null && ` (${s.percentage}%)`}
                          </span>
                        ) : (
                          <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900/40 dark:text-red-300">not taken</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
