'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { BookOpen, CalendarDays, Check, ClipboardList, Presentation, RefreshCw } from 'lucide-react'
import ClassDiagnosticsPanel from '@/components/ClassDiagnosticsPanel'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { topicReviewAssignment } from '@/lib/topic-review-assignment'

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
 * it in a live lesson) and one-click-assigns the topic review (lesson + exit
 * quiz, cleared at TOPIC_CLEAR_PERCENT — see topic-review-assignment.ts).
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
  /** MCAT only: passed this cycle's unit test. */
  unitTestPassed?: boolean
  /** SAT only: the lane this student studies in, and any teacher override. */
  satLane?: 'core-skills' | 'regular' | 'advanced'
  satOverride?: 'core-skills' | 'regular' | 'advanced' | null
}

const SAT_LANE_LABEL: Record<NonNullable<StudentRow['satLane']>, string> = {
  'core-skills': 'Core Skills',
  regular: 'Standard',
  advanced: '700-800',
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
  const [trackSaving, setTrackSaving] = useState<string | null>(null)
  const [trackError, setTrackError] = useState<string | null>(null)
  const [assignError, setAssignError] = useState<string | null>(null)

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

  // SAT lane override: Automatic follows the student's diagnostics; the other
  // three pin them. Placement changes which lessons their plan routes to.
  const setSatTrack = async (studentId: string, override: string) => {
    setTrackSaving(studentId)
    setTrackError(null)
    try {
      const r = await fetch('/api/teacher/sat-track', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, classroomId, override }),
      })
      if (!r.ok) {
        const d = await r.json().catch(() => ({}))
        setTrackError(d.error || 'Could not change the track')
        return
      }
      loadPlan()
    } finally {
      setTrackSaving(null)
    }
  }

  useEffect(() => { loadPlan() }, [loadPlan])

  const assignPractice = async (topic: ClassTopic) => {
    if (!data) return
    setAssigning(topic.slug)
    setAssignError(null)
    try {
      const r = await fetch(`/api/teacher/classrooms/${classroomId}/assignments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(topicReviewAssignment({
          topicSlug: topic.slug,
          topicTitle: topic.name,
          source: `this week’s ${data.course.label} class plan`,
        })),
      })
      if (r.ok) setAssigned(prev => new Set(prev).add(topic.slug))
      else {
        const d = await r.json().catch(() => ({}))
        setAssignError(d.error || `Could not assign ${topic.name}. Please try again.`)
      }
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
        <CalendarDays className="mx-auto mb-2 h-8 w-8 text-accent" aria-hidden="true" />
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">No diagnostic results yet</h2>
        <p className="mx-auto max-w-md text-sm text-gray-500 dark:text-gray-400">
          Assign a diagnostic above. Once your students take it, this tab pools everyone&apos;s results and ranks the
          topics your class most needs this week, sized to four 45-minute teaching blocks.
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
            <h2 className="inline-flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
              <CalendarDays className="h-5 w-5 text-accent" aria-hidden="true" />
              This week&apos;s class plan
            </h2>
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
              <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent-hover dark:bg-accent-light/30 dark:text-accent-muted">
                {data.course.label}
              </span>
            )}
          </div>
          <button onClick={loadPlan} className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline dark:text-accent-muted">
            <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" /> Refresh
          </button>
        </div>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Ranked from your students&apos; latest {data.course.label} diagnostics ({data.studentsWithAttempts} of {data.totalStudents} have
          taken one) — high-priority needs count double. Four blocks ≈ two 90-minute meetings.
          {' '}<strong className="font-semibold text-gray-700 dark:text-gray-300">Assign review</strong> gives the class
          the topic&apos;s lesson; students clear it by scoring {TOPIC_CLEAR_PERCENT}% or higher on its exit quiz.
        </p>
        {assignError && <p role="alert" className="mb-3 text-sm text-red-600 dark:text-red-400">{assignError}</p>}
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
                  <Link href={t.lessonPath} target="_blank" className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700">
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" /> Present lesson
                  </Link>
                )}
                <Link
                  href={`/teacher/slides?topic=${encodeURIComponent(t.slug)}`}
                  target="_blank"
                  className="inline-flex items-center gap-1 rounded-lg border border-emerald-300 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-900/30"
                >
                  <Presentation className="h-3.5 w-3.5" aria-hidden="true" /> Slides
                </Link>
                <button
                  onClick={() => void assignPractice(t)}
                  disabled={assigning === t.slug || assigned.has(t.slug)}
                  className="inline-flex items-center gap-1 rounded-lg border border-emerald-300 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 disabled:opacity-60 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-900/30"
                >
                  {assigned.has(t.slug)
                    ? <><Check className="h-3.5 w-3.5" aria-hidden="true" /> Review assigned</>
                    : assigning === t.slug
                    ? 'Assigning…'
                    : <><ClipboardList className="h-3.5 w-3.5" aria-hidden="true" /> Assign review</>}
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
          Teach a block live: start a live lesson at the top of this class, then share your screen or the whiteboard while you walk through the lesson.
        </p>
      </div>

      {/* Roster status */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Students</h2>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Homework = their personal recommended topics (an exit quiz score of {TOPIC_CLEAR_PERCENT}% or higher, or entrance-quiz mastery, clears one).
          {gated && ' For the MCAT, clearing all of them and then passing a 25-question unit test on those topics unlocks their next weekly diagnostic.'}
          {data.course.key === 'sat' &&
            ' Each SAT student studies in a track: Core Skills (short lessons, easy items), Standard, or 700-800. Automatic places them from their diagnostics; pick a track to pin it.'}
        </p>
        {trackError && <p className="mb-3 text-sm text-red-600 dark:text-red-400">{trackError}</p>}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
                <th className="py-2 pr-4">Student</th>
                <th className="py-2 pr-4">Last diagnostic</th>
                <th className="py-2 pr-4">Score</th>
                <th className="py-2 pr-4">Homework</th>
                {data.course.key === 'sat' && <th className="py-2 pr-4">Track</th>}
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
                    {s.recommendedCount === 0 ? '—' : `${s.recommendedCount - s.pendingCount}/${s.recommendedCount} topics`}
                  </td>
                  {data.course.key === 'sat' && (
                    <td className="py-2 pr-4">
                      <label className="sr-only" htmlFor={`sat-track-${s.userId}`}>SAT track for {s.name}</label>
                      <select
                        id={`sat-track-${s.userId}`}
                        value={s.satOverride ?? 'auto'}
                        disabled={trackSaving === s.userId}
                        onChange={e => void setSatTrack(s.userId, e.target.value)}
                        className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="auto">Automatic{s.satLane && !s.satOverride ? ` (${SAT_LANE_LABEL[s.satLane]})` : ''}</option>
                        <option value="core-skills">Core Skills</option>
                        <option value="regular">Standard</option>
                        <option value="advanced">700-800</option>
                      </select>
                    </td>
                  )}
                  {gated && (
                    <td className="py-2">
                      {s.takenAt === null ? (
                        <span className="text-xs text-gray-400">ready</span>
                      ) : s.canRetake ? (
                        <span className="text-xs font-medium text-green-600 dark:text-green-400">✓ unlocked</span>
                      ) : s.pendingCount === 0 && s.unitTestPassed === false ? (
                        <span className="text-xs font-medium text-amber-600 dark:text-amber-400">📝 unit test to pass</span>
                      ) : (
                        <span className="text-xs font-medium text-amber-600 dark:text-amber-400">🔒 {s.pendingCount} topic{s.pendingCount === 1 ? '' : 's'} left</span>
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
