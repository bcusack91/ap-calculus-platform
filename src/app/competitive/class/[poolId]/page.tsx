'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { ArrowLeft, Bot, Swords } from 'lucide-react'
import ClassPoolRoster from '@/components/competitive/ClassPoolRoster'
import { classPoolFrom, POOL_MODE_LABELS, type PoolMode } from '@/lib/class-pool'
import type { PoolStateView } from '@/lib/class-pool-server'

/**
 * Class match pool — /competitive/class/[poolId].
 *
 * Arriving here queues you (from the live-class banner, or "Play again in
 * class" on a results screen); the page polls the pool every 2 s, and the
 * moment you're paired it sends you into the match. Alone for 25 s it offers
 * a practice bot. Leaving takes you out of the queue and back to the class.
 */

const POLL_MS = 2_000

function formatWait(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000))
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

export default function ClassPoolPage() {
  const { poolId } = useParams<{ poolId: string }>()
  const router = useRouter()
  const { data: authSession, status: authStatus } = useSession()
  const viewerId = authSession?.user?.id ?? ''
  const [state, setState] = useState<PoolStateView | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [otherMatch, setOtherMatch] = useState<{ matchId: string; isTeam: boolean } | null>(null)
  const [botBusy, setBotBusy] = useState(false)
  const [now, setNow] = useState(() => Date.now())
  // We came here to play: rejoin whenever the server says we're idle (after
  // a match, or if a stale tab dropped us). Leave turns this off.
  const wantToPlay = useRef(true)
  const joining = useRef(false)
  const redirected = useRef(false)
  const clockSkew = useRef(0)

  useEffect(() => {
    if (authStatus === 'unauthenticated') router.push(`/auth/signin?callbackUrl=/competitive/class/${poolId}`)
  }, [authStatus, poolId, router])

  const goToMatch = useCallback((matchId: string, isTeam: boolean) => {
    if (redirected.current) return
    redirected.current = true
    router.replace(`/competitive/${isTeam ? 'team-match' : 'match'}/${matchId}?from=${encodeURIComponent(classPoolFrom(poolId))}`)
  }, [poolId, router])

  const post = useCallback(async (action: 'join' | 'leave') => {
    const r = await fetch(`/api/competitive/class-pool/${poolId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action }),
    })
    return { ok: r.ok, status: r.status, data: await r.json().catch(() => ({})) }
  }, [poolId])

  const join = useCallback(async () => {
    if (joining.current || !wantToPlay.current) return
    joining.current = true
    try {
      const res = await post('join')
      if (res.data?.status === 'matched') goToMatch(res.data.matchId, !!res.data.isTeam)
      else if (res.data?.status === 'in_other_match') {
        wantToPlay.current = false
        setOtherMatch({ matchId: res.data.matchId, isTeam: !!res.data.isTeam })
      } else if (!res.ok && res.status !== 410) setError(res.data?.error || 'Could not join the class match')
    } finally {
      joining.current = false
    }
  }, [post, goToMatch])

  const poll = useCallback(async () => {
    try {
      const r = await fetch(`/api/competitive/class-pool/${poolId}`, { cache: 'no-store' })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) { setError(d.error || 'Could not load this class match'); return }
      const s = d as PoolStateView
      clockSkew.current = Date.now() - s.serverNow
      setState(s)
      setError(null)
      if (s.me.state === 'in_match' && s.me.matchId) goToMatch(s.me.matchId, !!s.me.isTeam)
      else if (s.me.state === 'idle' && s.pool.status === 'OPEN' && wantToPlay.current) void join()
    } catch { /* transient — next poll */ }
  }, [poolId, goToMatch, join])

  useEffect(() => {
    if (authStatus !== 'authenticated') return
    void poll()
    const t = setInterval(poll, POLL_MS)
    const tick = setInterval(() => setNow(Date.now()), 1_000)
    return () => { clearInterval(t); clearInterval(tick) }
  }, [authStatus, poll])

  // Closing the tab while waiting takes you out of the queue, so nobody is
  // paired with an empty chair (in-app navigation into a match doesn't fire this).
  useEffect(() => {
    const onHide = () => {
      if (!wantToPlay.current || redirected.current) return
      try {
        navigator.sendBeacon?.(`/api/competitive/class-pool/${poolId}`, new Blob([JSON.stringify({ action: 'leave' })], { type: 'application/json' }))
      } catch { /* best effort */ }
    }
    window.addEventListener('pagehide', onHide)
    return () => window.removeEventListener('pagehide', onHide)
  }, [poolId])

  const leave = async () => {
    wantToPlay.current = false
    await post('leave').catch(() => {})
    router.push(state?.pool.liveSessionId ? `/live/${state.pool.liveSessionId}` : '/dashboard')
  }

  const playBot = async () => {
    setBotBusy(true)
    try {
      const r = await fetch('/api/competitive/practice-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ poolId, aiDifficulty: 'medium' }),
      })
      const d = await r.json().catch(() => ({}))
      if (r.ok && d.matchId) goToMatch(d.matchId, !!d.isTeamMatch)
      else setError(d.error || 'Could not start a practice match')
    } finally {
      setBotBusy(false)
    }
  }

  const backHref = state?.pool.liveSessionId ? `/live/${state.pool.liveSessionId}` : '/dashboard'

  if (error && !state) {
    return (
      <Shell>
        <div className="rounded-3xl border border-card-border bg-card p-8 text-center shadow-sm">
          <p className="mb-4 text-lg font-semibold text-foreground">{error}</p>
          <Link href="/dashboard" className="font-semibold text-accent hover:underline">← Back to dashboard</Link>
        </div>
      </Shell>
    )
  }
  if (!state) {
    return (
      <Shell>
        <div className="space-y-4" aria-busy="true" aria-label="Loading class match">
          <div className="h-48 animate-pulse rounded-3xl bg-gray-200 dark:bg-gray-800 motion-reduce:animate-none" />
          <div className="h-40 animate-pulse rounded-3xl bg-gray-200 dark:bg-gray-800 motion-reduce:animate-none" />
        </div>
      </Shell>
    )
  }

  const mode = POOL_MODE_LABELS[state.pool.gameMode as PoolMode]
  const closed = state.pool.status !== 'OPEN'
  const waitedMs = state.me.state === 'waiting' && state.me.waitedMs !== undefined
    ? state.me.waitedMs + Math.max(0, now - (state.serverNow + clockSkew.current))
    : 0
  const othersWaiting = state.waiting.filter((w) => w.id !== viewerId)
  const isTeamMode = state.pool.gameMode === 'TEAM_BATTLE'

  return (
    <Shell>
      <Link
        href={backHref}
        onClick={() => { if (!wantToPlay.current) return; wantToPlay.current = false; void post('leave').catch(() => {}) }}
        className="mb-3 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden /> Back to {state.pool.liveSessionId ? 'the live class' : 'dashboard'}
      </Link>

      <section className="overflow-hidden rounded-3xl border border-card-border bg-card shadow-sm">
        <div className="bg-gradient-to-r from-accent to-accent-secondary px-5 py-4 text-white sm:px-7 sm:py-5">
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-white/85">
            <Swords className="h-4 w-4" aria-hidden /> Class match
          </p>
          <h1 className="text-xl font-extrabold leading-tight sm:text-2xl">{state.pool.topicTitle}</h1>
          <p className="mt-1 flex flex-wrap gap-1.5 text-xs font-semibold">
            <span className="rounded-full bg-white/20 px-2.5 py-1"><span aria-hidden>{mode.icon}</span> {mode.label}</span>
            <span className="rounded-full bg-white/20 px-2.5 py-1">{state.pool.gameMode === 'CHAOS' ? 'Unranked' : 'Ranked · counts toward MMR'}</span>
            {state.pool.scope === 'course' && state.pool.courseName && (
              <span className="rounded-full bg-white/20 px-2.5 py-1">Questions from all of {state.pool.courseName}</span>
            )}
          </p>
        </div>

        <div className="p-5 text-center sm:p-7">
          {closed ? (
            <>
              <p className="text-lg font-bold text-foreground">This class match has ended</p>
              <p className="mt-1 text-sm text-muted-foreground">Your teacher closed it. Nice work!</p>
              <Link href={backHref} className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-bold text-white shadow-md">
                Back to class
              </Link>
            </>
          ) : otherMatch ? (
            <>
              <p className="text-lg font-bold text-foreground">You&apos;re still in another match</p>
              <p className="mt-1 text-sm text-muted-foreground">Finish it first, then come back to join the class match.</p>
              <Link
                href={`/competitive/${otherMatch.isTeam ? 'team-match' : 'match'}/${otherMatch.matchId}`}
                className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-bold text-white shadow-md"
              >
                Go to that match
              </Link>
            </>
          ) : state.me.state === 'in_match' ? (
            <p className="text-lg font-bold text-foreground">Match found — starting…</p>
          ) : (
            <>
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent-subtle ring-4 ring-accent-light" aria-hidden>
                <Swords className="h-8 w-8 animate-pulse text-accent motion-reduce:animate-none" />
              </div>
              <p className="text-lg font-bold text-foreground" role="status" aria-live="polite">
                {isTeamMode ? 'Gathering four players…' : 'Finding a classmate…'}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {isTeamMode
                  ? `Teams form as soon as four of you are free (${Math.min(state.counts.waiting, 4)}/4 now).`
                  : 'You’ll face the free classmate closest to your MMR.'}
                {' '}Waiting <span className="font-mono tabular-nums">{formatWait(waitedMs)}</span>
              </p>
              {othersWaiting.length > 0 && (
                <p className="mt-2 text-sm text-foreground">
                  Also waiting: {othersWaiting.slice(0, 6).map((w) => w.name).join(', ')}
                  {othersWaiting.length > 6 && ` +${othersWaiting.length - 6}`}
                </p>
              )}
              {state.me.botOffer && (
                <div className="mx-auto mt-4 max-w-md rounded-2xl border border-card-border bg-gray-50 p-4 dark:bg-gray-800/60">
                  <p className="text-sm text-foreground">
                    {isTeamMode ? 'Not enough classmates free for a team match yet.' : 'Nobody else is free right now.'} Warm up against a bot while you wait — practice, no MMR change.
                  </p>
                  <button
                    onClick={() => void playBot()}
                    disabled={botBusy}
                    className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-5 py-2.5 font-bold text-white shadow-md transition hover:from-accent-hover hover:to-accent-secondary-hover disabled:opacity-50"
                  >
                    <Bot className="h-4 w-4" aria-hidden /> {botBusy ? 'Starting…' : 'Play a practice bot'}
                  </button>
                </div>
              )}
              <button onClick={() => void leave()} className="mt-5 text-sm font-semibold text-muted-foreground underline-offset-2 hover:text-accent hover:underline">
                Leave the class match
              </button>
            </>
          )}
          {error && <p className="mt-3 text-sm text-red-700 dark:text-red-400" role="alert">{error}</p>}
        </div>
      </section>

      <section className="mt-5 rounded-3xl border border-card-border bg-card p-5 shadow-sm sm:p-7" aria-label="Class roster">
        <h2 className="mb-3 text-base font-bold text-foreground">Your class</h2>
        <ClassPoolRoster state={state} viewerId={viewerId} />
      </section>
    </Shell>
  )
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 dark:bg-gray-950 sm:py-10">
      <div className="mx-auto max-w-2xl">{children}</div>
    </div>
  )
}
