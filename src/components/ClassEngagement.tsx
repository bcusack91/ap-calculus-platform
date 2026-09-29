'use client'

import { Fragment, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { Download } from 'lucide-react'
import type { ClassStudentRow, MetricsRange } from '@/lib/student-metrics'
import {
  FlagBadge,
  NO_DATA_COPY,
  StudyFilters,
  fmtHours,
  fmtPct,
  type StudyScope,
} from '@/components/teacher/StudyReportShared'

/**
 * "Engagement" tab on the teacher classroom page: honest time-on-task.
 *
 * Leads with the per-student study-activity table (GET …/activity, the same
 * numbers as the "Export activity CSV" download): active hours and days,
 * flashcard reviews / minutes / Again rate, questions answered and accuracy,
 * exit-quiz passes, overdue cards, and flags. Each name opens that student's
 * full study report.
 *
 * Below it, the older lesson-level views that the table does not replace:
 * lesson time with click-through flags (lessons completed in under 5
 * minutes) and a per-lesson drill-down, the 7-day flashcard habit grid, and
 * live-session attendance.
 */

type ActivityStudent = ClassStudentRow & { id: string; name: string | null; email: string | null }
interface ActivityPayload {
  range: MetricsRange
  scope: StudyScope
  target: { courseSlug: string; label: string; hours: number; topics: number } | null
  students: ActivityStudent[]
}

const TH = 'py-2 pr-3 font-medium align-bottom leading-tight'
const NUM = 'py-2 pr-3 text-right tabular-nums text-gray-700 dark:text-gray-300'

/** Per-student activity table with Range + Scope filters and the CSV export. */
export function ClassActivityTable({ classroomId }: { classroomId: string }) {
  const [range, setRange] = useState<MetricsRange>('7d')
  const [scope, setScope] = useState<StudyScope>('all')
  const [data, setData] = useState<ActivityPayload | null>(null)
  const [error, setError] = useState<string | null>(null)
  // Which filter pair the shown rows belong to; a mismatch means a refetch is
  // in flight, and the old rows stay up dimmed rather than flashing a skeleton.
  const [loadedFor, setLoadedFor] = useState<string | null>(null)
  const key = `${range}|${scope}`
  const loading = loadedFor !== key

  useEffect(() => {
    let cancelled = false
    fetch(`/api/teacher/classrooms/${classroomId}/activity?range=${range}&scope=${scope}`, { cache: 'no-store' })
      .then(async (r) => {
        const d = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(d.error || 'Could not load class activity')
        if (!cancelled) {
          setData(d)
          setError(null)
        }
      })
      .catch((e) => !cancelled && setError(e instanceof Error ? e.message : 'Could not load class activity'))
      .finally(() => !cancelled && setLoadedFor(`${range}|${scope}`))
    return () => {
      cancelled = true
    }
  }, [classroomId, range, scope])

  const qs = `range=${range}&scope=${scope}`
  const csvHref = `/api/teacher/classrooms/${classroomId}/activity?${qs}&format=csv`
  const reportHref = (id: string) =>
    `/teacher/classroom/${classroomId}/student/${id}${range !== '7d' || scope !== 'all' ? `?${qs}` : ''}`
  const students = data?.students ?? []
  const nothingRecorded =
    students.length > 0 && students.every((s) => s.activeSeconds === 0 && s.reviews === 0 && s.answered === 0)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Study activity</h2>
        <a
          href={csvHref}
          download
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
        >
          <Download className="w-4 h-4" aria-hidden />
          Export activity CSV
        </a>
      </div>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        Active time excludes idle (2+ minutes without input) and hidden tabs. Click a name for the full study report.
        {data?.target && ` Below target = under the ${data.target.label} pace of ${data.target.hours} h a week.`}
      </p>
      <StudyFilters
        range={range}
        scope={scope}
        onChange={(next) => {
          setRange(next.range)
          setScope(next.scope)
        }}
        className="mb-4"
      />

      {error ? (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      ) : !data ? (
        <div className="h-40 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
      ) : students.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No students yet.</p>
      ) : (
        <>
          {nothingRecorded && (
            <p className="mb-3 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
              {NO_DATA_COPY}. Active time, flashcard ratings and answered questions will fill in as students study.
            </p>
          )}
          <div className={`overflow-x-auto transition-opacity ${loading ? 'opacity-60' : ''}`} aria-busy={loading}>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  <th className={`${TH} sticky left-0 bg-white dark:bg-gray-800`}>Student</th>
                  <th className={`${TH} text-right`}>Active hours</th>
                  <th className={`${TH} text-right`}>Active days</th>
                  <th className={`${TH} text-right`}>Flashcard reviews</th>
                  <th className={`${TH} text-right`}>Flashcard minutes</th>
                  <th className={`${TH} text-right`}>Again %</th>
                  <th className={`${TH} text-right`}>Questions answered</th>
                  <th className={`${TH} text-right`}>Accuracy</th>
                  <th className={`${TH} text-right`}>Exit passes</th>
                  <th className={`${TH} text-right`}>Overdue</th>
                  <th className={`${TH} min-w-[9rem]`}>Flags</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id} className="border-b border-gray-100 dark:border-gray-700/50">
                    <td className="sticky left-0 bg-white dark:bg-gray-800 py-2 pr-3 whitespace-nowrap">
                      <Link
                        href={reportHref(s.id)}
                        className="font-medium text-gray-900 dark:text-white hover:text-accent hover:underline"
                      >
                        {s.name || s.email || 'Unnamed Student'}
                      </Link>
                    </td>
                    <td className={NUM}>{fmtHours(s.activeSeconds)}</td>
                    <td className={NUM}>{s.activeDays}</td>
                    <td className={NUM}>{s.reviews}</td>
                    <td className={NUM}>{Math.round(s.flashcardSeconds / 60)}</td>
                    <td className={NUM}>{fmtPct(s.againRate)}</td>
                    <td className={NUM}>{s.answered}</td>
                    <td className={NUM}>{fmtPct(s.accuracy)}</td>
                    <td className={NUM}>{s.exitPasses}</td>
                    <td className={NUM}>{s.overdue}</td>
                    <td className="py-2">
                      {s.flags.length ? (
                        <span className="flex flex-wrap gap-1">
                          {s.flags.map((f) => (
                            <FlagBadge key={f} flag={f} />
                          ))}
                        </span>
                      ) : (
                        <span className="text-xs text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

interface StudentRow { userId: string; name: string; totalSeconds: number; completedLessons: number; flaggedLessons: number }
interface TopicRow { title: string; course: string | null; status: string; seconds: number; lastAccessed: string | null; flagged: boolean }
interface SessionRow { id: string; mode: string; status: string; startedAt: string; endedAt: string | null; attendees: { name: string; minutes: number }[] }
interface FlashcardRow { userId: string; name: string; days: number[]; activeDays: number; totalReviews: number }

function fmtMinutes(seconds: number): string {
  const m = Math.round(seconds / 60)
  if (m < 60) return `${m}m`
  return `${Math.floor(m / 60)}h ${m % 60}m`
}

export default function ClassEngagement({ classroomId }: { classroomId: string }) {
  const [students, setStudents] = useState<StudentRow[] | null>(null)
  const [sessions, setSessions] = useState<SessionRow[]>([])
  const [flashcards, setFlashcards] = useState<FlashcardRow[]>([])
  const [flashcardDayKeys, setFlashcardDayKeys] = useState<string[]>([])
  const [expanded, setExpanded] = useState<string | null>(null)
  const [detail, setDetail] = useState<{ userId: string; topics: TopicRow[] } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback((studentId?: string) => {
    const qs = studentId ? `?student=${encodeURIComponent(studentId)}` : ''
    fetch(`/api/teacher/classrooms/${classroomId}/engagement${qs}`, { cache: 'no-store' })
      .then(async r => {
        const d = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(d.error || 'Could not load engagement data')
        setStudents(d.students)
        setSessions(d.sessions ?? [])
        setFlashcards(d.flashcards ?? [])
        setFlashcardDayKeys(d.flashcardDayKeys ?? [])
        if (d.detail) setDetail(d.detail)
        setError(null)
      })
      .catch(e => setError(e instanceof Error ? e.message : 'Could not load engagement data'))
  }, [classroomId])

  useEffect(() => { load() }, [load])

  const toggleStudent = (userId: string) => {
    if (expanded === userId) { setExpanded(null); return }
    setExpanded(userId)
    setDetail(null)
    load(userId)
  }

  // The activity table loads on its own, so a slow or failed lesson-time
  // load never hides it.
  if (error || !students) {
    return (
      <div className="space-y-6">
        <ClassActivityTable classroomId={classroomId} />
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          {error ? (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          ) : (
            <div className="h-40 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <ClassActivityTable classroomId={classroomId} />

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">⏱ Lesson time</h2>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Real time spent inside lessons, all time. <span className="font-medium text-amber-600 dark:text-amber-400">⚠ flags</span> mark
          lessons completed in under 5 minutes — usually clicking through for credit. Click a student for their per-lesson breakdown.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
                <th className="py-2 pr-4">Student</th>
                <th className="py-2 pr-4">Lesson time</th>
                <th className="py-2 pr-4">Lessons completed</th>
                <th className="py-2">Click-through flags</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => (
                <Fragment key={s.userId}>
                  <tr
                    onClick={() => toggleStudent(s.userId)}
                    className="cursor-pointer border-b border-gray-100 transition hover:bg-gray-50 dark:border-gray-700/50 dark:hover:bg-gray-700/40"
                  >
                    <td className="py-2 pr-4 font-medium text-gray-800 dark:text-gray-200">
                      {expanded === s.userId ? '▾ ' : '▸ '}{s.name}
                    </td>
                    <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">{fmtMinutes(s.totalSeconds)}</td>
                    <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">{s.completedLessons}</td>
                    <td className="py-2">
                      {s.flaggedLessons > 0 ? (
                        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                          ⚠ {s.flaggedLessons}
                        </span>
                      ) : (
                        <span className="text-xs text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                  {expanded === s.userId && (
                    <tr>
                      <td colSpan={4} className="bg-gray-50 px-4 py-3 dark:bg-gray-900/40">
                        {detail?.userId === s.userId ? (
                          detail.topics.length === 0 ? (
                            <p className="text-xs text-gray-500">No lesson activity yet.</p>
                          ) : (
                            <div className="max-h-72 space-y-1 overflow-y-auto">
                              {detail.topics.map((t, i) => (
                                <div key={i} className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white px-3 py-1.5 text-xs dark:bg-gray-800">
                                  <span className="font-medium text-gray-800 dark:text-gray-200">
                                    {t.flagged && <span title="Completed in under 5 minutes" className="mr-1">⚠️</span>}
                                    {t.title}
                                    {t.course && <span className="ml-2 text-gray-400">{t.course}</span>}
                                  </span>
                                  <span className="text-gray-500 dark:text-gray-400">
                                    {t.status.toLowerCase().replace('_', ' ')} · {fmtMinutes(t.seconds)}
                                    {t.lastAccessed && ` · ${new Date(t.lastAccessed).toLocaleDateString()}`}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )
                        ) : (
                          <p className="text-xs text-gray-400">Loading…</p>
                        )}
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">🎴 Daily flashcards</h2>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Days each student reviewed flashcards over the last 7 days (any deck). Goal:{' '}
          <span className="font-medium text-green-600 dark:text-green-400">5+ days a week</span>. A filled dot = at least one
          review that day; the number under each dot is cards reviewed.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
                <th className="py-2 pr-4">Student</th>
                {flashcardDayKeys.map(k => (
                  <th key={k} className="py-2 pr-2 text-center font-medium">
                    {new Date(`${k}T12:00:00Z`).toLocaleDateString(undefined, { weekday: 'short' })}
                  </th>
                ))}
                <th className="py-2 pr-4 text-center">Days</th>
                <th className="py-2 text-center">Cards</th>
              </tr>
            </thead>
            <tbody>
              {flashcards.map(row => (
                <tr key={row.userId} className="border-b border-gray-100 dark:border-gray-700/50">
                  <td className="py-2 pr-4 font-medium text-gray-900 dark:text-white">{row.name}</td>
                  {row.days.map((n, i) => (
                    <td key={i} className="py-2 pr-2 text-center">
                      <span
                        className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold ${
                          n > 0
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
                        }`}
                        title={n > 0 ? `${n} card${n === 1 ? '' : 's'} reviewed` : 'No reviews'}
                      >
                        {n > 0 ? (n > 99 ? '99' : n) : '·'}
                      </span>
                    </td>
                  ))}
                  <td className="py-2 pr-4 text-center">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        row.activeDays >= 5
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : row.activeDays >= 3
                            ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                            : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                      }`}
                    >
                      {row.activeDays}/7
                    </span>
                  </td>
                  <td className="py-2 text-center text-gray-600 dark:text-gray-300">{row.totalReviews}</td>
                </tr>
              ))}
              {flashcards.length === 0 && (
                <tr><td colSpan={10} className="py-4 text-sm text-gray-400">No students yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">🎥 Live-session attendance</h2>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Minutes are estimated from activity while the session page was open.
        </p>
        {sessions.length === 0 ? (
          <p className="text-sm text-gray-400">No live sessions yet — attendance appears after your first Go Live.</p>
        ) : (
          <div className="space-y-3">
            {sessions.map(s => (
              <div key={s.id} className="rounded-xl border border-gray-200 p-3 dark:border-gray-700">
                <div className="mb-1 flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {s.mode === 'CONFERENCE' ? '🎥 Conference' : '📡 Webcast'} · {new Date(s.startedAt).toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {s.status === 'LIVE' ? '🔴 live now' : `${s.attendees.length} attendee${s.attendees.length === 1 ? '' : 's'}`}
                  </span>
                </div>
                {s.attendees.length === 0 ? (
                  <p className="text-xs text-gray-400">No students joined.</p>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {s.attendees.map((a, i) => (
                      <span key={i} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                        {a.name} · {a.minutes}m
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
