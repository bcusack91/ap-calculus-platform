'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import ClassDiagnosticsPanel from '@/components/ClassDiagnosticsPanel'

/**
 * "Class Plan" tab on the teacher classroom page — works for any course with
 * a diagnostic (MCAT, SAT, every AP, core math). Students take the course
 * diagnostic and study their personal recommendations as homework; this panel
 * pools every student's latest attempt and ranks what the CLASS most needs,
 * sized to four 45-minute teaching blocks (2 meetings x 90 min).
 *
 * The course selector only offers courses this roster actually has attempts
 * for; it auto-picks the one with the most. Top 4 topics are this week's
 * blocks; ranks 5-8 are swap candidates. Each block links the lesson (present
 * it over a live session) and one-click-assigns exit-quiz practice at 80%.
 * For the MCAT (gated), the roster also shows whether each student's next
 * weekly diagnostic is unlocked — homework completion IS the unlock.
 */

interface AvailableCourse { key: string; label: string; gated: boolean; studentsWithAttempts: number }

interface ClassTopic {
  slug: string
  name: string
  weighted: number
  studentCount: number
  students: { name: string; priority: string; cleared: boolean }[]
  topicPath: string | null
  lessonPath: string | null
}

interface StudentRow {
  userId: string
  name: string
  takenAt: string | null
  stale: boolean
  scoreLabel: string | null
  recommendedCount: number
  pendingCount: number
  canRetake: boolean
}

interface PlanData {
  course: { key: string; label: string; gated: boolean }
  classTopics: ClassTopic[]
  students: StudentRow[]
  studentsWithAttempts: number
  totalStudents: number
}

export default function ClassPlan({ classroomId }: { classroomId: string }) {
  const [available, setAvailable] = useState<AvailableCourse[] | null>(null)
  const [courseKey, setCourseKey] = useState<string | null>(null)
  const [data, setData] = useState<PlanData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [assigned, setAssigned] = useState<Set<string>>(new Set())
  const [assigning, setAssigning] = useState<string | null>(null)

  // Discover which courses this roster has diagnostic data for.
  useEffect(() => {
    let active = true
    fetch(`/api/teacher/classrooms/${classroomId}/class-plan`, { cache: 'no-store' })
      .then(async (r) => {
        const d = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(d.error || 'Could not load the class plan')
        if (!active) return
        setAvailable(d.availableCourses ?? [])
        if (d.availableCourses?.length > 0) setCourseKey((k) => k ?? d.availableCourses[0].key)
      })
      .catch((e) => { if (active) setError(e instanceof Error ? e.message : 'Could not load the class plan') })
    return () => { active = false }
  }, [classroomId])

  const loadPlan = useCallback(() => {
    if (!courseKey) return
    fetch(`/api/teacher/classrooms/${classroomId}/class-plan?course=${encodeURIComponent(courseKey)}`, { cache: 'no-store' })
      .then(async (r) => {
        const d = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(d.error || 'Could not load the class plan')
        setData(d)
        setError(null)
      })
      .catch((e) => setError(e instanceof Error ? e.message : 'Could not load the class plan'))
  }, [classroomId, courseKey])

  useEffect(() => { loadPlan() }, [loadPlan])

  const assignPractice = async (topic: ClassTopic) => {
    if (!data) return
    setAssigning(topic.slug)
    try {
      const due = new Date()
      due.setDate(due.getDate() + 7)
      const r = await fetch(`/api/teacher/classrooms/${classroomId}/assignments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `Practice: ${topic.name}`,
          description: `Assigned from this week’s ${data.course.label} class plan — pass the exit quiz to complete.`,
          type: 'QUIZ',
          topicSlug: topic.slug,
          dueDate: due.toISOString(),
          requiredScore: 0.8,
        }),
      })
      if (r.ok) setAssigned(prev => new Set(prev).add(topic.slug))
    } finally {
      setAssigning(null)
    }
  }

  if (error) {
    return <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-sm text-red-600 dark:text-red-400">{error}</div>
  }
  if (available === null || (courseKey && !data)) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-3">
        <div className="h-6 w-64 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-40 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
      </div>
    )
  }

  if (available.length === 0 || !data) {
    return (
      <div className="space-y-6">
      <ClassDiagnosticsPanel classroomId={classroomId} />
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
        <p className="mb-2 text-3xl">🗓️</p>
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">No diagnostics yet</h2>
        <p className="mx-auto max-w-md text-sm text-gray-500 dark:text-gray-400">
          Once your students take their course&apos;s diagnostic test (MCAT, SAT, or any AP course), this tab pools
          everyone&apos;s results and ranks the topics your class collectively needs — sized to four 45-minute
          teaching blocks per week. Have each student take their diagnostic before your first meeting.
        </p>
      </div>
      </div>
    )
  }

  const blocks = data.classTopics.slice(0, 4)
  const alsoSurfaced = data.classTopics.slice(4)
  const gated = data.course.gated

  return (
    <div className="space-y-6">
      <ClassDiagnosticsPanel classroomId={classroomId} />

      {/* This week's blocks */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">🗓️ This week&apos;s class plan</h2>
            {available.length > 1 ? (
              <select
                value={data.course.key}
                onChange={(e) => { setData(null); setCourseKey(e.target.value) }}
                className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                {available.map(c => (
                  <option key={c.key} value={c.key}>{c.label} ({c.studentsWithAttempts})</option>
                ))}
              </select>
            ) : (
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                {data.course.label}
              </span>
            )}
          </div>
          <button onClick={loadPlan} className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-400">↻ Refresh</button>
        </div>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Ranked from your students&apos; latest {data.course.label} diagnostics ({data.studentsWithAttempts} of {data.totalStudents} have
          taken one) — high-priority needs count double. Four blocks ≈ two 90-minute meetings.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {blocks.map((t, i) => (
            <div key={t.slug} className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 dark:border-emerald-800 dark:bg-emerald-900/10">
              <div className="mb-1 flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase text-emerald-600 dark:text-emerald-400">Block {i + 1} · 45 min</p>
                  <h3 className="font-bold text-gray-900 dark:text-white">{t.name}</h3>
                </div>
                <span
                  className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                  title={t.students.map(s => `${s.name} (${s.priority})`).join(', ')}
                >
                  {t.studentCount}/{data.studentsWithAttempts} students
                </span>
              </div>
              <p className="mb-3 text-xs text-gray-500 dark:text-gray-400 truncate" title={t.students.map(s => s.name).join(', ')}>
                {t.students.map(s => s.name).join(', ')}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.lessonPath && (
                  <Link href={t.lessonPath} target="_blank" className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700">
                    📖 Present lesson
                  </Link>
                )}
                <Link
                  href={`/teacher/slides?topic=${encodeURIComponent(t.slug)}`}
                  target="_blank"
                  className="rounded-lg border border-emerald-300 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-900/30"
                >
                  🖥️ Slides
                </Link>
                <button
                  onClick={() => void assignPractice(t)}
                  disabled={assigning === t.slug || assigned.has(t.slug)}
                  className="rounded-lg border border-emerald-300 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 disabled:opacity-60 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-900/30"
                >
                  {assigned.has(t.slug) ? '✓ Practice assigned' : assigning === t.slug ? 'Assigning…' : '📋 Assign practice'}
                </button>
              </div>
            </div>
          ))}
        </div>
        {alsoSurfaced.length > 0 && (
          <div className="mt-4">
            <p className="mb-1.5 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">Also surfaced (swap a block if you know better)</p>
            <div className="flex flex-wrap gap-2">
              {alsoSurfaced.map(t => (
                <span key={t.slug} className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 dark:border-gray-600 dark:text-gray-300" title={t.students.map(s => s.name).join(', ')}>
                  {t.name} · {t.studentCount} student{t.studentCount === 1 ? '' : 's'}
                </span>
              ))}
            </div>
          </div>
        )}
        <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
          Teach a block live: Go Live above → share your screen or the whiteboard while walking through the lesson.
        </p>
      </div>

      {/* Roster status */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Students</h2>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Homework = their personal recommended modules (exit quiz ≥80% or entrance mastery clears one).
          {gated && ' For the MCAT, clearing all of them unlocks their next weekly diagnostic.'}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
                <th className="py-2 pr-4">Student</th>
                <th className="py-2 pr-4">Last diagnostic</th>
                <th className="py-2 pr-4">Score</th>
                <th className="py-2 pr-4">Homework</th>
                {gated && <th className="py-2">Next test</th>}
              </tr>
            </thead>
            <tbody>
              {data.students.map(s => (
                <tr key={s.userId} className="border-b border-gray-100 dark:border-gray-700/50">
                  <td className="py-2 pr-4 font-medium text-gray-800 dark:text-gray-200">{s.name}</td>
                  <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">
                    {s.takenAt ? (
                      <>
                        {new Date(s.takenAt).toLocaleDateString()}
                        {s.stale && <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">not this week</span>}
                      </>
                    ) : (
                      <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900/40 dark:text-red-300">never taken</span>
                    )}
                  </td>
                  <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">{s.scoreLabel ?? '—'}</td>
                  <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">
                    {s.recommendedCount === 0 ? '—' : `${s.recommendedCount - s.pendingCount}/${s.recommendedCount} modules`}
                  </td>
                  {gated && (
                    <td className="py-2">
                      {s.takenAt === null ? (
                        <span className="text-xs text-gray-400">ready</span>
                      ) : s.canRetake ? (
                        <span className="text-xs font-medium text-green-600 dark:text-green-400">✓ unlocked</span>
                      ) : (
                        <span className="text-xs font-medium text-amber-600 dark:text-amber-400">🔒 {s.pendingCount} module{s.pendingCount === 1 ? '' : 's'} left</span>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
