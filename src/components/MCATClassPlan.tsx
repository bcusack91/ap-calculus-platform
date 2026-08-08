'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

/**
 * "MCAT Plan" tab on the teacher classroom page — the class-level half of the
 * weekly MCAT loop. Students take the weekly diagnostic and study their
 * personal top-5 as homework (the retake gate enforces it); this panel pools
 * every student's latest attempt and ranks what the CLASS most needs, sized to
 * the week's four 45-minute teaching blocks (2 meetings x 90 min).
 *
 * The top 4 are highlighted as this week's blocks; ranks 5-8 are listed so the
 * teacher can overrule the arithmetic. Each block links the lesson (present it
 * over a live session) and one-click-assigns exit-quiz practice at the same
 * 80% bar the retake gate uses.
 */

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
  estimatedScore: number | null
  percentage: number | null
  recommendedCount: number
  pendingCount: number
  canRetake: boolean
}

interface PlanData {
  classTopics: ClassTopic[]
  students: StudentRow[]
  studentsWithAttempts: number
  totalStudents: number
}

export default function MCATClassPlan({ classroomId }: { classroomId: string }) {
  const [data, setData] = useState<PlanData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [assigned, setAssigned] = useState<Set<string>>(new Set())
  const [assigning, setAssigning] = useState<string | null>(null)

  const load = useCallback(() => {
    fetch(`/api/teacher/classrooms/${classroomId}/mcat-class-plan`, { cache: 'no-store' })
      .then(async (r) => {
        const d = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(d.error || 'Could not load the class plan')
        setData(d)
        setError(null)
      })
      .catch((e) => setError(e instanceof Error ? e.message : 'Could not load the class plan'))
  }, [classroomId])

  useEffect(() => { load() }, [load])

  const assignPractice = async (topic: ClassTopic) => {
    setAssigning(topic.slug)
    try {
      const due = new Date()
      due.setDate(due.getDate() + 7)
      const r = await fetch(`/api/teacher/classrooms/${classroomId}/assignments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `Practice: ${topic.name}`,
          description: 'Assigned from this week’s MCAT class plan — pass the exit quiz to complete.',
          type: 'QUIZ',
          topicSlug: topic.slug,
          dueDate: due.toISOString(),
          requiredScore: 0.8, // same bar as the diagnostic retake gate
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
  if (!data) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-3">
        <div className="h-6 w-64 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-40 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
      </div>
    )
  }

  if (data.studentsWithAttempts === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
        <p className="mb-2 text-3xl">🩺</p>
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">No MCAT diagnostics yet</h2>
        <p className="mx-auto max-w-md text-sm text-gray-500 dark:text-gray-400">
          Once your students take the <Link href="/mcat-diagnostic" className="text-blue-600 hover:underline dark:text-blue-400">MCAT diagnostic</Link>,
          this tab pools everyone&apos;s results and ranks the topics your class collectively needs — sized to four
          45-minute teaching blocks per week. Have each student take it before your first meeting.
        </p>
      </div>
    )
  }

  const blocks = data.classTopics.slice(0, 4)
  const alsoSurfaced = data.classTopics.slice(4)

  return (
    <div className="space-y-6">
      {/* This week's blocks */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">🗓️ This week&apos;s class plan</h2>
          <button onClick={load} className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-400">↻ Refresh</button>
        </div>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Ranked from your students&apos; latest diagnostics ({data.studentsWithAttempts} of {data.totalStudents} have
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
          Teach a block live: classroom page → Go Live → share your screen or the whiteboard while walking through the lesson.
        </p>
      </div>

      {/* Roster status */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Students</h2>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Homework = their personal 5 modules; clearing all 5 (exit quiz ≥80% or entrance mastery) unlocks their next weekly diagnostic.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
                <th className="py-2 pr-4">Student</th>
                <th className="py-2 pr-4">Last diagnostic</th>
                <th className="py-2 pr-4">Est. score</th>
                <th className="py-2 pr-4">Homework</th>
                <th className="py-2">Next test</th>
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
                  <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">{s.estimatedScore ?? '—'}</td>
                  <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">
                    {s.recommendedCount === 0 ? '—' : `${s.recommendedCount - s.pendingCount}/${s.recommendedCount} modules`}
                  </td>
                  <td className="py-2">
                    {s.takenAt === null ? (
                      <span className="text-xs text-gray-400">ready</span>
                    ) : s.canRetake ? (
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">✓ unlocked</span>
                    ) : (
                      <span className="text-xs font-medium text-amber-600 dark:text-amber-400">🔒 {s.pendingCount} module{s.pendingCount === 1 ? '' : 's'} left</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
