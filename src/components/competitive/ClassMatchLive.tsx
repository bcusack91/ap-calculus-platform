'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Swords, Users, X } from 'lucide-react'
import ClassPoolRoster from '@/components/competitive/ClassPoolRoster'
import { orderLauncherCourses, classCourseCount, type LauncherCourse } from '@/lib/deck-launcher-courses'
import { classPoolFrom, POOL_MODE_LABELS, type PoolMode } from '@/lib/class-pool'
import type { PoolStateView } from '@/lib/class-pool-server'

/**
 * Class competition on the live-class page.
 *
 * Teacher: "⚔️ Class competition" panel — pick the topic (defaults to the deck
 * just presented) and mode, optionally join as a player, Start. While the pool
 * is open: the live roster, Join/Leave for the teacher, Close.
 * Student: a banner while the class has an open pool → the pool page
 * (/competitive/class/[poolId]), which queues them and sends them into matches.
 */

interface PoolSummary {
  id: string
  topicTitle: string
  courseName: string | null
  scope: 'topic' | 'course'
  gameMode: PoolMode
  waiting: number
  youAreWaiting: boolean
}

interface Suggestion { topicSlug: string; title: string; courseSlug: string | null }

const MODE_CHOICES: PoolMode[] = ['SPEED_RACE', 'TEAM_BATTLE', 'CHAOS', 'ACCURACY_CHALLENGE']

function usePoolSummary(sessionId: string, intervalMs: number) {
  const [pool, setPool] = useState<PoolSummary | null>(null)
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [nonce, setNonce] = useState(0)
  const refresh = useCallback(() => setNonce((n) => n + 1), [])
  useEffect(() => {
    let active = true
    const run = async () => {
      try {
        const r = await fetch(`/api/competitive/class-pool?sessionId=${encodeURIComponent(sessionId)}`, { cache: 'no-store' })
        if (!r.ok || !active) return
        const d = await r.json()
        if (!active) return
        setPool(d.pool ?? null)
        setSuggestion(d.suggestion ?? null)
        setLoaded(true)
      } catch { /* next poll retries */ }
    }
    void run()
    const t = setInterval(run, intervalMs)
    return () => { active = false; clearInterval(t) }
  }, [sessionId, intervalMs, nonce])
  return { pool, suggestion, loaded, refresh }
}

export default function ClassMatchLive({ sessionId, classroomId, youAreTeacher }: { sessionId: string; classroomId: string; youAreTeacher: boolean }) {
  return youAreTeacher
    ? <TeacherPanel sessionId={sessionId} classroomId={classroomId} />
    : <StudentBanner sessionId={sessionId} />
}

/* ------------------------------------------------------------------------ */

function StudentBanner({ sessionId }: { sessionId: string }) {
  const { pool } = usePoolSummary(sessionId, 5_000)
  if (!pool) return null
  const mode = POOL_MODE_LABELS[pool.gameMode]
  return (
    <div className="mb-4 overflow-hidden rounded-2xl bg-gradient-to-r from-accent to-accent-secondary p-[2px] shadow-lg">
      <div className="flex flex-col gap-3 rounded-[14px] bg-card px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
            <Swords className="h-4 w-4" aria-hidden /> Class match is open
          </p>
          <p className="truncate text-base font-bold text-foreground sm:text-lg">
            Class match: {pool.topicTitle}
          </p>
          <p className="text-sm text-muted-foreground">
            <span aria-hidden>{mode.icon}</span> {mode.short} · ranked against classmates near your MMR
            {pool.waiting > 0 && <> · {pool.waiting} waiting</>}
          </p>
        </div>
        <Link
          href={`/competitive/class/${pool.id}`}
          data-qa="class-match-join"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-6 py-2.5 font-bold text-white shadow-md transition hover:from-accent-hover hover:to-accent-secondary-hover"
        >
          {pool.youAreWaiting ? 'Back to the queue' : 'Join'} <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------ */

function TeacherPanel({ sessionId, classroomId }: { sessionId: string; classroomId: string }) {
  const { pool, suggestion, loaded, refresh } = usePoolSummary(sessionId, 4_000)
  if (!loaded) return null
  return pool
    ? <OpenPoolPanel poolId={pool.id} onClosed={refresh} />
    : <StartPoolForm sessionId={sessionId} classroomId={classroomId} suggestion={suggestion} onStarted={refresh} />
}

function PanelShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="mb-4 rounded-2xl border border-card-border bg-card p-4 shadow-sm sm:p-5" aria-label="Class competition">
      {children}
    </section>
  )
}

function StartPoolForm({ sessionId, classroomId, suggestion, onStarted }: {
  sessionId: string
  classroomId: string
  suggestion: Suggestion | null
  onStarted: () => void
}) {
  const [open, setOpen] = useState(false)
  const [courses, setCourses] = useState<LauncherCourse[]>([])
  const [ownCount, setOwnCount] = useState(0)
  const [course, setCourse] = useState('')
  const [catalog, setCatalog] = useState<{ name: string; topics: { slug: string; title: string }[] }[]>([])
  const [topic, setTopic] = useState('')
  const [mode, setMode] = useState<PoolMode>('SPEED_RACE')
  const [joinAsPlayer, setJoinAsPlayer] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Same course resolution as the slide launcher: assigned → diagnosed → every course with decks.
  useEffect(() => {
    if (!open) return
    let active = true
    void (async () => {
      try {
        const [assignedRes, discRes, libRes] = await Promise.all([
          fetch(`/api/teacher/classrooms/${classroomId}/courses`, { cache: 'no-store' }),
          fetch(`/api/teacher/classrooms/${classroomId}/class-plan`, { cache: 'no-store' }),
          fetch('/api/teacher/slide-library', { cache: 'no-store' }),
        ])
        const assigned: string[] = assignedRes.ok ? ((await assignedRes.json()).courseSlugs ?? []) : []
        const disc = discRes.ok ? await discRes.json() : null
        const diagnosed = ((disc?.availableCourses ?? []) as { courseSlug: string | null }[]).map((c) => c.courseSlug)
        const library: LauncherCourse[] = libRes.ok ? ((await libRes.json()).courses ?? []) : []
        if (!active) return
        const ordered = orderLauncherCourses(library, assigned, diagnosed)
        setCourses(ordered)
        setOwnCount(classCourseCount(ordered, assigned, diagnosed))
        const preferred = suggestion?.courseSlug && ordered.some((c) => c.slug === suggestion.courseSlug) ? suggestion.courseSlug : ordered[0]?.slug ?? ''
        setCourse((prev) => prev || preferred)
      } catch { /* leave the picker empty */ }
    })()
    return () => { active = false }
  }, [open, classroomId, suggestion?.courseSlug])

  useEffect(() => {
    if (!course) return
    let active = true
    void (async () => {
      try {
        const r = await fetch(`/api/teacher/slide-library?course=${encodeURIComponent(course)}`, { cache: 'no-store' })
        const d = r.ok ? await r.json() : null
        if (!active) return
        const cats: { name: string; topics: { slug: string; title: string }[] }[] = d?.categories ?? []
        setCatalog(cats)
        const all = cats.flatMap((c) => c.topics.map((t) => t.slug))
        setTopic((prev) => {
          if (prev && all.includes(prev)) return prev
          if (suggestion && all.includes(suggestion.topicSlug)) return suggestion.topicSlug
          return all[0] ?? ''
        })
      } catch { /* keep the old list */ }
    })()
    return () => { active = false }
  }, [course, suggestion])

  const start = async () => {
    setBusy(true)
    setError(null)
    try {
      const r = await fetch('/api/competitive/class-pool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ classroomId, liveSessionId: sessionId, topicSlug: topic, courseSlug: course, gameMode: mode, joinAsPlayer }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) { setError(d.error || 'Could not start the class match'); return }
      onStarted()
    } finally {
      setBusy(false)
    }
  }

  if (!open) {
    return (
      <div className="mb-4 flex flex-wrap items-center gap-2 rounded-xl border border-card-border bg-card px-4 py-3">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <Swords className="h-4 w-4 text-accent" aria-hidden /> Class competition
        </span>
        {suggestion && (
          <span className="min-w-0 truncate text-sm text-muted-foreground">on <span className="font-medium text-foreground">{suggestion.title}</span></span>
        )}
        <button
          onClick={() => setOpen(true)}
          className="ml-auto rounded-lg bg-gradient-to-r from-accent to-accent-secondary px-4 py-1.5 text-sm font-semibold text-white transition hover:from-accent-hover hover:to-accent-secondary-hover"
        >
          Set up a class match
        </button>
      </div>
    )
  }

  const select = 'w-full rounded-lg border border-card-border bg-card px-3 py-2 text-sm text-foreground'
  return (
    <PanelShell>
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <h2 className="flex items-center gap-1.5 text-base font-bold text-foreground">
            <Swords className="h-5 w-5 text-accent" aria-hidden /> Class competition
          </h2>
          <p className="text-sm text-muted-foreground">
            Everyone who joins is paired with the classmate closest to their MMR — continuously, so finished players requeue straight away. Ranked like any match.
          </p>
        </div>
        <button onClick={() => setOpen(false)} aria-label="Close class competition setup" className="rounded-lg p-1 text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {courses.length > 1 && (
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-foreground">Course</span>
            <select aria-label="Class match course" value={course} onChange={(e) => { setCourse(e.target.value); setTopic('') }} className={select}>
              {ownCount > 0 && (
                <optgroup label="This class">
                  {courses.slice(0, ownCount).map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                </optgroup>
              )}
              <optgroup label={ownCount > 0 ? 'Other courses' : 'Courses'}>
                {courses.slice(ownCount).map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
              </optgroup>
            </select>
          </label>
        )}
        <label className={`block text-sm ${courses.length > 1 ? '' : 'sm:col-span-2'}`}>
          <span className="mb-1 block font-medium text-foreground">Topic</span>
          <select aria-label="Class match topic" value={topic} onChange={(e) => setTopic(e.target.value)} className={select}>
            {catalog.map((cat) => (
              <optgroup key={cat.name} label={cat.name}>
                {cat.topics.map((t) => (
                  <option key={t.slug} value={t.slug}>{t.title}{suggestion?.topicSlug === t.slug ? ' (just presented)' : ''}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
      </div>
      <fieldset className="mt-3">
        <legend className="mb-1 text-sm font-medium text-foreground">Mode</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {MODE_CHOICES.map((m) => {
            const info = POOL_MODE_LABELS[m]
            const selected = mode === m
            return (
              <label key={m} className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-sm transition ${selected ? 'border-accent bg-accent-subtle font-semibold text-accent' : 'border-card-border text-foreground hover:border-accent'}`}>
                <input type="radio" name="class-match-mode" value={m} checked={selected} onChange={() => setMode(m)} className="sr-only" />
                <span aria-hidden>{info.icon}</span> {info.short}
              </label>
            )
          })}
        </div>
        {mode === 'CHAOS' && <p className="mt-1 text-xs text-muted-foreground">Chaos matches are unranked (power-ups), as everywhere on the site.</p>}
        {mode === 'TEAM_BATTLE' && <p className="mt-1 text-xs text-muted-foreground">Matches start whenever four players are free: highest + lowest MMR vs the middle two.</p>}
      </fieldset>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input type="checkbox" checked={joinAsPlayer} onChange={(e) => setJoinAsPlayer(e.target.checked)} className="h-4 w-4 accent-[var(--accent)]" />
          Join as a player
        </label>
        <button
          onClick={() => void start()}
          disabled={busy || !topic}
          className="ml-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-5 py-2 text-sm font-bold text-white shadow-md transition hover:from-accent-hover hover:to-accent-secondary-hover disabled:opacity-50"
        >
          <Swords className="h-4 w-4" aria-hidden /> {busy ? 'Starting…' : 'Start class match'}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-700 dark:text-red-400" role="alert">{error}</p>}
    </PanelShell>
  )
}

function OpenPoolPanel({ poolId, onClosed }: { poolId: string; onClosed: () => void }) {
  const router = useRouter()
  const [state, setState] = useState<PoolStateView | null>(null)
  const { data: authSession } = useSession()
  const viewerId = authSession?.user?.id ?? ''
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    try {
      const r = await fetch(`/api/competitive/class-pool/${poolId}`, { cache: 'no-store' })
      if (!r.ok) return
      setState(await r.json())
    } catch { /* next poll */ }
  }, [poolId])

  useEffect(() => {
    void load()
    const t = setInterval(load, 2_500)
    return () => clearInterval(t)
  }, [load])

  const act = async (action: 'join' | 'leave' | 'close') => {
    if (action === 'close' && !confirm('Close the class match? Matches in play finish normally; nobody new is paired.')) return
    setBusy(true)
    setError(null)
    try {
      const r = await fetch(`/api/competitive/class-pool/${poolId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) setError(d.error || 'Something went wrong')
      if (action === 'close') onClosed()
      await load()
    } finally {
      setBusy(false)
    }
  }

  if (!state) return <PanelShell><div className="h-24 animate-pulse rounded-xl bg-gray-100 dark:bg-gray-800" /></PanelShell>
  const mode = POOL_MODE_LABELS[state.pool.gameMode as PoolMode]
  const me = state.me
  const matchHref = me.matchId
    ? `/competitive/${me.isTeam ? 'team-match' : 'match'}/${me.matchId}?from=${encodeURIComponent(classPoolFrom(poolId))}`
    : null

  return (
    <PanelShell>
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-accent">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 motion-reduce:animate-none" aria-hidden /> Class match open
          </p>
          <h2 className="truncate text-base font-bold text-foreground">
            <Swords className="mr-1.5 -mt-1 inline h-5 w-5 text-accent" aria-hidden />
            {state.pool.topicTitle}
          </h2>
          <p className="text-sm text-muted-foreground">
            <span aria-hidden>{mode.icon}</span> {mode.label} · <Users className="-mt-0.5 inline h-3.5 w-3.5" aria-hidden /> {state.counts.members} in class
          </p>
          {state.pool.scope === 'course' && (
            <p className="mt-1 rounded-lg bg-amber-50 px-2 py-1 text-xs text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
              Questions from the whole course{state.pool.courseName ? ` (${state.pool.courseName})` : ''} — this topic has no competitive set.
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {me.state === 'in_match' && matchHref ? (
            <button
              onClick={() => router.push(matchHref)}
              className="animate-pulse rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-4 py-2 text-sm font-bold text-white shadow-md motion-reduce:animate-none"
            >
              Play your match →
            </button>
          ) : me.state === 'waiting' ? (
            <button onClick={() => void act('leave')} disabled={busy} className="rounded-xl border border-card-border px-4 py-2 text-sm font-semibold text-foreground hover:border-accent hover:text-accent disabled:opacity-50">
              Leave queue
            </button>
          ) : (
            <button onClick={() => void act('join')} disabled={busy} className="rounded-xl border border-accent px-4 py-2 text-sm font-semibold text-accent hover:bg-accent-subtle disabled:opacity-50">
              Join as a player
            </button>
          )}
          <button onClick={() => void act('close')} disabled={busy} className="rounded-xl border border-red-300 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100 disabled:opacity-50 dark:border-red-700 dark:bg-red-900/30 dark:text-red-300">
            Close pool
          </button>
        </div>
      </div>
      {me.state === 'waiting' && (
        <p className="mb-3 text-sm text-muted-foreground">You&apos;re in the queue — a &ldquo;Play your match&rdquo; button appears here when you&apos;re paired.</p>
      )}
      {error && <p className="mb-2 text-sm text-red-700 dark:text-red-400" role="alert">{error}</p>}
      <ClassPoolRoster state={state} viewerId={viewerId} compact />
    </PanelShell>
  )
}
