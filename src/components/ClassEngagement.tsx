'use client'

import { Fragment, useCallback, useEffect, useState } from 'react'

/**
 * "Engagement" tab on the teacher classroom page: honest time-on-task.
 *
 * Study-time table (total minutes, lessons completed, ⚠ click-through count —
 * lessons completed in under 5 minutes), expandable to a per-lesson breakdown
 * per student, plus live-session attendance (who was in the room, for how
 * long). The point: a student who "completed" 12 lessons in 40 total minutes
 * is visible at a glance.
 */

interface StudentRow { userId: string; name: string; totalSeconds: number; completedLessons: number; flaggedLessons: number }
interface TopicRow { title: string; course: string | null; status: string; seconds: number; lastAccessed: string | null; flagged: boolean }
interface SessionRow { id: string; mode: string; status: string; startedAt: string; endedAt: string | null; attendees: { name: string; minutes: number }[] }

function fmtMinutes(seconds: number): string {
  const m = Math.round(seconds / 60)
  if (m < 60) return `${m}m`
  return `${Math.floor(m / 60)}h ${m % 60}m`
}

export default function ClassEngagement({ classroomId }: { classroomId: string }) {
  const [students, setStudents] = useState<StudentRow[] | null>(null)
  const [sessions, setSessions] = useState<SessionRow[]>([])
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

  if (error) return <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-sm text-red-600 dark:text-red-400">{error}</div>
  if (!students) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="h-40 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">⏱ Study time</h2>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Real time spent inside lessons. <span className="font-medium text-amber-600 dark:text-amber-400">⚠ flags</span> mark
          lessons completed in under 5 minutes — usually clicking through for credit. Click a student for their per-lesson breakdown.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
                <th className="py-2 pr-4">Student</th>
                <th className="py-2 pr-4">Total study time</th>
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
