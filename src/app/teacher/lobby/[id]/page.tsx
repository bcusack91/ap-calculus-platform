'use client'

import { use, useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

interface Participant {
  id: string
  userId: string
  team: number | null
  mmrAtJoin: number
  joinedAt: string
  score: number
  questionsAnswered: number
  questionsCorrect: number
  user: { id: string; name: string | null; email: string | null; image: string | null }
}

interface LobbyDetail {
  id: string
  joinCode: string
  name: string
  topicSlug: string | null
  gameMode: string
  numTeams: number
  status: 'OPEN' | 'IN_PROGRESS' | 'CLOSED'
  createdAt: string
  startedAt: string | null
  closedAt: string | null
  endsAt: string | null
  courseSlug: string | null
  topicSlugs: string[]
  durationSec: number
  teacher: { id: string; name: string | null; email: string | null }
  classroom: { id: string; name: string } | null
  participants: Participant[]
}

interface CourseInfo { slug: string; name: string }
interface TopicInfo { slug: string; title: string }

const TEAM_COLORS = [
  'bg-rose-100 text-rose-900 border-rose-300',
  'bg-sky-100 text-sky-900 border-sky-300',
  'bg-emerald-100 text-emerald-900 border-emerald-300',
  'bg-amber-100 text-amber-900 border-amber-300',
  'bg-violet-100 text-violet-900 border-violet-300',
  'bg-orange-100 text-orange-900 border-orange-300',
  'bg-teal-100 text-teal-900 border-teal-300',
  'bg-pink-100 text-pink-900 border-pink-300',
]

const PRESET_DURATIONS = [
  { label: '5 min', sec: 300 },
  { label: '10 min', sec: 600 },
  { label: '15 min', sec: 900 },
]

export default function TeacherLobbyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const { status } = useSession()
  const [lobby, setLobby] = useState<LobbyDetail | null>(null)
  const [isTeacher, setIsTeacher] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  // Match settings (teacher-only)
  const [courses, setCourses] = useState<CourseInfo[]>([])
  const [topics, setTopics] = useState<TopicInfo[]>([])
  const [selCourse, setSelCourse] = useState<string>('')
  const [selTopics, setSelTopics] = useState<string[]>([])
  const [selDuration, setSelDuration] = useState<number>(600)
  const [customDurationMin, setCustomDurationMin] = useState<string>('')
  const [savingSettings, setSavingSettings] = useState(false)

  // Live countdown
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 500)
    return () => clearInterval(t)
  }, [])

  const load = useCallback(async () => {
    try {
      const res = await fetch(`/api/teacher/lobby/${id}`)
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'Failed to load')
        return
      }
      setLobby(json.lobby)
      setIsTeacher(json.isTeacher)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed')
    }
  }, [id])

  useEffect(() => {
    if (status === 'unauthenticated') router.push(`/auth/signin?callbackUrl=/teacher/lobby/${id}`)
  }, [status, router, id])

  useEffect(() => {
    if (status === 'authenticated') {
      void load()
      const t = setInterval(() => {
        void load()
      }, 1500)
      return () => clearInterval(t)
    }
  }, [status, load])

  // Redirect non-teacher participants into the play view once the match starts
  useEffect(() => {
    if (lobby?.status === 'IN_PROGRESS' && !isTeacher) {
      router.replace(`/teacher/lobby/${id}/play`)
    }
  }, [lobby?.status, isTeacher, router, id])

  // Initialize settings UI from lobby once loaded
  useEffect(() => {
    if (!lobby) return
    if (selCourse === '' && lobby.courseSlug) setSelCourse(lobby.courseSlug)
    if (selTopics.length === 0 && lobby.topicSlugs?.length) setSelTopics(lobby.topicSlugs)
    if (lobby.durationSec && [300, 600, 900].includes(lobby.durationSec)) {
      setSelDuration(lobby.durationSec)
    } else if (lobby.durationSec) {
      setSelDuration(0)
      setCustomDurationMin(String(Math.round(lobby.durationSec / 60)))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lobby?.id])

  // Load supported courses (teacher only)
  useEffect(() => {
    if (!isTeacher) return
    void (async () => {
      const res = await fetch('/api/teacher/lobby/courses')
      const json = await res.json()
      if (res.ok) setCourses(json.courses || [])
    })()
  }, [isTeacher])

  // Load topics for selected course
  useEffect(() => {
    if (!isTeacher || !selCourse) {
      setTopics([])
      return
    }
    void (async () => {
      const res = await fetch(`/api/teacher/lobby/courses?course=${encodeURIComponent(selCourse)}`)
      const json = await res.json()
      if (res.ok) setTopics(json.topics || [])
    })()
  }, [isTeacher, selCourse])

  function toggleTopic(slug: string) {
    setSelTopics(prev => (prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]))
  }

  async function saveSettings() {
    setSavingSettings(true)
    setError(null)
    try {
      const durationSec =
        selDuration > 0
          ? selDuration
          : Math.max(60, Math.min(60 * 60, Math.round((Number(customDurationMin) || 10) * 60)))
      const res = await fetch(`/api/teacher/lobby/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseSlug: selCourse || null,
          topicSlugs: selTopics,
          durationSec,
        }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed')
      await load()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setSavingSettings(false)
    }
  }

  async function balance() {
    setBusy(true); setError(null)
    try {
      const res = await fetch(`/api/teacher/lobby/${id}/balance`, { method: 'POST' })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed')
      await load()
    } catch (e) { setError(e instanceof Error ? e.message : 'Failed') } finally { setBusy(false) }
  }

  async function start() {
    if (!selCourse || selTopics.length === 0) {
      setError('Pick a course and at least one topic before starting.')
      return
    }
    setBusy(true); setError(null)
    try {
      // Save settings first to make sure latest are persisted
      await saveSettings()
      const res = await fetch(`/api/teacher/lobby/${id}/start`, { method: 'POST' })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed')
      await load()
    } catch (e) { setError(e instanceof Error ? e.message : 'Failed') } finally { setBusy(false) }
  }

  async function close() {
    if (!confirm('End / close this match?')) return
    setBusy(true)
    try {
      const res = await fetch(`/api/teacher/lobby/${id}/close`, { method: 'POST' })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || 'Failed')
      }
      await load()
    } catch (e) { setError(e instanceof Error ? e.message : 'Failed') } finally { setBusy(false) }
  }

  async function leave() {
    if (!confirm('Leave this lobby?')) return
    try {
      await fetch(`/api/teacher/lobby/join?lobbyId=${id}`, { method: 'DELETE' })
      router.push('/competitive')
    } catch {}
  }

  const teamGroups = useMemo<Participant[][]>(() => {
    if (!lobby) return []
    const arr: Participant[][] = Array.from({ length: lobby.numTeams }, () => [])
    for (const p of lobby.participants) {
      if (p.team !== null && p.team !== undefined) arr[p.team]?.push(p)
    }
    return arr
  }, [lobby])

  const unassigned = useMemo<Participant[]>(() => {
    if (!lobby) return []
    return lobby.participants.filter(p => p.team === null || p.team === undefined)
  }, [lobby])

  const teamScores = useMemo(() => {
    return teamGroups.map((group, i) => ({
      team: i,
      score: group.reduce((s, p) => s + (p.score || 0), 0),
      answered: group.reduce((s, p) => s + (p.questionsAnswered || 0), 0),
      avgMMR: group.length ? Math.round(group.reduce((s, p) => s + p.mmrAtJoin, 0) / group.length) : 0,
      count: group.length,
    }))
  }, [teamGroups])

  if (status === 'loading' || !lobby) {
    return <div className="p-8 text-gray-600">{error || 'Loading…'}</div>
  }

  const endsAtMs = lobby.endsAt ? new Date(lobby.endsAt).getTime() : null
  const remainingSec = endsAtMs ? Math.max(0, Math.floor((endsAtMs - now) / 1000)) : null
  const remainingMin = remainingSec !== null ? Math.floor(remainingSec / 60) : null
  const remainingS = remainingSec !== null ? remainingSec % 60 : null

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{lobby.name}</h1>
            <p className="text-sm text-gray-500">
              {lobby.classroom ? `${lobby.classroom.name} · ` : ''}
              {lobby.numTeams} teams · {lobby.participants.length} participants
              {lobby.courseSlug ? ` · ${lobby.courseSlug}` : ''}
              {lobby.topicSlugs?.length ? ` · ${lobby.topicSlugs.length} topics` : ''}
            </p>
          </div>
          <span
            className={
              'rounded-full px-3 py-1 text-xs font-medium ' +
              (lobby.status === 'OPEN'
                ? 'bg-green-100 text-green-800'
                : lobby.status === 'IN_PROGRESS'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-gray-100 text-gray-700')
            }
          >
            {lobby.status}
          </span>
        </div>

        <div className="rounded-lg border border-indigo-200 bg-white p-4 mb-5">
          <div className="text-sm text-gray-600">Share this code with students:</div>
          <div className="mt-1 text-3xl font-mono font-bold tracking-widest text-indigo-700">
            {lobby.joinCode}
          </div>
          <div className="mt-1 text-xs text-gray-500">
            Students go to <code>/competitive/join</code> and enter the code.
          </div>
        </div>

        {error && <div className="mb-4 rounded bg-red-50 p-3 text-sm text-red-700">{error}</div>}

        {/* Match settings — teacher only, while OPEN */}
        {isTeacher && lobby.status === 'OPEN' && (
          <div className="mb-5 rounded-lg border border-gray-200 bg-white p-5">
            <h2 className="text-lg font-semibold mb-3">Match settings</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
              <select
                className="w-full rounded border-gray-300 sm:w-72"
                value={selCourse}
                onChange={e => { setSelCourse(e.target.value); setSelTopics([]) }}
              >
                <option value="">— Select a course —</option>
                {courses.map(c => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>

            {selCourse && (
              <div className="mb-4">
                <div className="flex items-baseline justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Topics ({selTopics.length} selected)
                  </label>
                  <div className="flex gap-3 text-xs">
                    <button
                      type="button"
                      className="text-indigo-600 hover:underline"
                      onClick={() => setSelTopics(topics.map(t => t.slug))}
                    >
                      Select all
                    </button>
                    <button
                      type="button"
                      className="text-gray-500 hover:underline"
                      onClick={() => setSelTopics([])}
                    >
                      Clear
                    </button>
                  </div>
                </div>
                <div className="max-h-64 overflow-y-auto rounded border border-gray-200 p-2 grid sm:grid-cols-2 gap-1">
                  {topics.length === 0 && (
                    <div className="text-sm text-gray-500 p-2">Loading topics…</div>
                  )}
                  {topics.map(t => (
                    <label key={t.slug} className="flex items-center gap-2 text-sm p-1 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={selTopics.includes(t.slug)}
                        onChange={() => toggleTopic(t.slug)}
                      />
                      <span>{t.title}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Match length</label>
              <div className="flex flex-wrap items-center gap-2">
                {PRESET_DURATIONS.map(p => (
                  <button
                    key={p.sec}
                    type="button"
                    onClick={() => { setSelDuration(p.sec); setCustomDurationMin('') }}
                    className={
                      'rounded-md px-3 py-1.5 text-sm border ' +
                      (selDuration === p.sec
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50')
                    }
                  >
                    {p.label}
                  </button>
                ))}
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min={1}
                    max={60}
                    placeholder="custom"
                    className="w-24 rounded border-gray-300 text-sm"
                    value={customDurationMin}
                    onChange={e => { setCustomDurationMin(e.target.value); setSelDuration(0) }}
                  />
                  <span className="text-sm text-gray-500">min</span>
                </div>
              </div>
            </div>

            <button
              onClick={saveSettings}
              disabled={savingSettings}
              className="rounded-md border border-indigo-600 px-3 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-50 disabled:opacity-50"
            >
              {savingSettings ? 'Saving…' : 'Save settings'}
            </button>
          </div>
        )}

        {isTeacher && lobby.status === 'OPEN' && (
          <div className="mb-5 flex flex-wrap gap-2">
            <button
              onClick={balance}
              disabled={busy || lobby.participants.length < lobby.numTeams}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              Balance teams (snake-draft by MMR)
            </button>
            <button
              onClick={start}
              disabled={busy || unassigned.length > 0 || lobby.participants.length === 0 || !selCourse || selTopics.length === 0}
              className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
            >
              Start match
            </button>
            <button
              onClick={close}
              disabled={busy}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50 disabled:opacity-50"
            >
              Close lobby
            </button>
          </div>
        )}

        {lobby.status === 'IN_PROGRESS' && remainingSec !== null && (
          <div className="mb-5 rounded-lg border-2 border-amber-300 bg-amber-50 p-4 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wide text-amber-700">Time remaining</div>
              <div className="text-3xl font-mono font-bold text-amber-900">
                {String(remainingMin).padStart(2, '0')}:{String(remainingS).padStart(2, '0')}
              </div>
            </div>
            {isTeacher ? (
              <button
                onClick={close}
                disabled={busy}
                className="rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 disabled:opacity-50"
              >
                End match now
              </button>
            ) : (
              <a
                href={`/teacher/lobby/${id}/play`}
                className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Enter match →
              </a>
            )}
          </div>
        )}

        {!isTeacher && lobby.status === 'OPEN' && (
          <div className="mb-5">
            <button
              onClick={leave}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
            >
              Leave lobby
            </button>
          </div>
        )}

        {(lobby.status === 'IN_PROGRESS' || lobby.status === 'CLOSED') && (
          <>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Team scoreboard</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {teamScores
                .slice()
                .sort((a, b) => b.score - a.score)
                .map(s => (
                  <div
                    key={s.team}
                    className={'rounded-lg border-2 p-4 ' + TEAM_COLORS[s.team % TEAM_COLORS.length]}
                  >
                    <div className="flex items-baseline justify-between">
                      <div className="font-bold">Team {s.team + 1}</div>
                      <div className="text-2xl font-bold">{s.score}</div>
                    </div>
                    <div className="text-xs opacity-80">{s.answered} answered · {s.count} players</div>
                  </div>
                ))}
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mb-2">Top players</h2>
            <ul className="rounded-lg border border-gray-200 bg-white divide-y mb-6">
              {lobby.participants
                .slice()
                .sort((a, b) => (b.score || 0) - (a.score || 0))
                .slice(0, 10)
                .map((p, i) => (
                  <li key={p.id} className="flex justify-between items-center p-3 text-sm">
                    <span>
                      <span className="font-mono text-gray-400 mr-2">#{i + 1}</span>
                      {p.user.name || p.user.email || 'Anonymous'}
                      {p.team !== null && p.team !== undefined && (
                        <span className="ml-2 text-xs text-gray-500">Team {p.team + 1}</span>
                      )}
                    </span>
                    <span className="font-mono">
                      <span className="font-bold">{p.score || 0}</span>
                      <span className="text-xs text-gray-500 ml-2">
                        {p.questionsCorrect || 0}/{p.questionsAnswered || 0}
                      </span>
                    </span>
                  </li>
                ))}
            </ul>
          </>
        )}

        {lobby.status === 'OPEN' && (
          <>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Teams</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {teamScores.map(s => (
                <div
                  key={s.team}
                  className={'rounded-lg border-2 p-4 ' + TEAM_COLORS[s.team % TEAM_COLORS.length]}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="font-bold">Team {s.team + 1}</div>
                    <div className="text-sm">avg MMR {s.avgMMR}</div>
                  </div>
                  <div className="text-xs mb-2">{s.count} players</div>
                  <ul className="space-y-1">
                    {teamGroups[s.team].map(p => (
                      <li key={p.id} className="flex justify-between text-sm">
                        <span className="truncate">{p.user.name || p.user.email || 'Anonymous'}</span>
                        <span className="font-mono text-xs opacity-70">{p.mmrAtJoin}</span>
                      </li>
                    ))}
                    {teamGroups[s.team].length === 0 && (
                      <li className="text-xs italic opacity-60">No players yet</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            {unassigned.length > 0 && (
              <>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Waiting room</h2>
                <ul className="rounded-lg border border-gray-200 bg-white divide-y">
                  {unassigned.map(p => (
                    <li key={p.id} className="flex justify-between p-3 text-sm">
                      <span>{p.user.name || p.user.email || 'Anonymous'}</span>
                      <span className="font-mono text-gray-500">MMR {p.mmrAtJoin}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
