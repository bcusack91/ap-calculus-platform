'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { COMPETITIVE_COURSE_CATEGORIES } from '@/lib/competitive-catalog'
import FocusTrapDialog from '@/components/FocusTrapDialog'

/**
 * Open-lobby browser — the liquidity answer to the ranked queue.
 *
 * The MMR queue pairs students who picked the same topic at the same moment,
 * which needs far more concurrent players than the site has. Here a host's
 * game stays visible until someone joins, so two students online in the same
 * hour can still find each other. The ranked queue is untouched; this is the
 * second door.
 *
 * Formats: 1v1 Ranked Duel (real CompetitiveMatch — affects MMR), 2v2 Team
 * Battle (MMR-balanced teams, casual), Free-for-All Race (2–8 players, casual).
 */

interface OpenLobby {
  kind: 'duel' | 'race'
  format: 'DUEL_1V1' | 'TEAM_2V2' | 'RACE_FFA'
  id: string
  code: string
  hostName: string
  hostMMR?: number
  isMine: boolean
  topicSlug?: string | null
  gameMode?: string
  difficulty?: string | null
  courseSlug?: string | null
  courseName?: string | null
  topicSlugs?: string[]
  durationSec?: number
  players: number
  maxPlayers: number
  createdAt: string
  joinHref: string
}

const FORMAT_META: Record<OpenLobby['format'], { icon: string; label: string; blurb: string }> = {
  DUEL_1V1: { icon: '⚔️', label: '1v1 Ranked Duel', blurb: 'Head-to-head — affects your MMR' },
  TEAM_2V2: { icon: '👥', label: '2v2 Team Battle', blurb: 'MMR-balanced teams · casual' },
  RACE_FFA: { icon: '🏁', label: 'Free-for-All Race', blurb: 'Up to 8 players · casual' },
}

const DIFFICULTIES = [
  { id: 'easy', label: '🟢 Easy', desc: 'All easy questions' },
  { id: 'medium', label: '🟡 Medium', desc: 'A few easy, then medium' },
  { id: 'hard', label: '🔴 Hard', desc: 'Warm-up, then mostly hard' },
] as const
type Difficulty = typeof DIFFICULTIES[number]['id']

const prettify = (slug: string) =>
  slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

function timeAgo(iso: string): string {
  const mins = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000))
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  return `${Math.round(mins / 60)}h ago`
}

export default function OpenLobbiesPage() {
  const router = useRouter()
  const { status } = useSession()
  const [lobbies, setLobbies] = useState<OpenLobby[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [joining, setJoining] = useState<string | null>(null)
  const [showCreate, setShowCreate] = useState(false)

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/competitive/open-lobbies', { cache: 'no-store' })
      if (res.status === 401) return // session still resolving; next poll retries
      if (!res.ok) throw new Error('Could not load lobbies')
      const json = await res.json()
      setLobbies(json.lobbies)
      setError(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    }
  }, [])

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/competitive/lobbies')
      return
    }
    load()
    const t = setInterval(load, 5000)
    return () => clearInterval(t)
  }, [status, load, router])

  const join = async (lobby: OpenLobby) => {
    setJoining(lobby.id)
    setError(null)
    try {
      if (lobby.isMine) {
        router.push(lobby.joinHref)
        return
      }
      if (lobby.kind === 'duel') {
        const res = await fetch('/api/competitive/lobby', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: lobby.code }),
        })
        const j = await res.json().catch(() => ({}))
        if (!res.ok) throw new Error(j.error || 'Could not join — it may have just filled')
        router.push(`/competitive/lobby/${lobby.code}`)
      } else {
        const res = await fetch('/api/teacher/lobby/join', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: lobby.code }),
        })
        const j = await res.json().catch(() => ({}))
        if (!res.ok) throw new Error(j.error || 'Could not join — it may have just filled')
        router.push(lobby.joinHref)
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
      setJoining(null)
      load() // refresh so a filled lobby disappears from the list
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container max-w-4xl py-8">
        <Link href="/competitive" className="mb-4 inline-flex items-center gap-1 text-sm text-orange-600 hover:underline dark:text-orange-400">
          ← Competitive Hub
        </Link>

        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">🎮 Open Lobbies</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Host a game and wait for challengers, or jump into one that&apos;s waiting.
            </p>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="rounded-xl bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
          >
            + Host a Lobby
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300">
            {error}
          </div>
        )}

        {lobbies === null ? (
          <p className="py-16 text-center text-gray-500">Loading lobbies…</p>
        ) : lobbies.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-lg dark:bg-gray-800">
            <div className="mb-3 text-5xl">🦗</div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">No open lobbies right now</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
              Be the first — host a lobby and it stays listed until someone joins.
              Or try the{' '}
              <Link href="/competitive" className="text-orange-600 underline dark:text-orange-400">
                ranked queue
              </Link>
              .
            </p>
            <button
              onClick={() => setShowCreate(true)}
              className="mt-5 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg"
            >
              + Host a Lobby
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {lobbies.map((l) => {
              const meta = FORMAT_META[l.format]
              const full = l.players >= l.maxPlayers
              const subject =
                l.kind === 'duel'
                  ? prettify(l.topicSlug || 'Any topic')
                  : [l.courseName, ...(l.topicSlugs || []).slice(0, 3).map(prettify)]
                      .filter(Boolean)
                      .join(' · ') || 'Mixed topics'
              return (
                <div
                  key={`${l.kind}-${l.id}`}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="text-3xl" aria-hidden>{meta.icon}</span>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900 dark:text-white">
                        {meta.label}
                        {l.isMine && (
                          <span className="ml-2 rounded-full bg-orange-100 px-2 py-0.5 text-[11px] font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
                            your lobby
                          </span>
                        )}
                      </p>
                      <p className="truncate text-sm text-gray-600 dark:text-gray-400">{subject}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {l.hostName}
                        {l.format === 'DUEL_1V1' && typeof l.hostMMR === 'number' && ` · ${l.hostMMR} MMR`}
                        {l.gameMode === 'CHAOS' && ' · 🌀 Chaos (no MMR)'}
                        {l.difficulty && ` · ${l.difficulty[0].toUpperCase()}${l.difficulty.slice(1)}`}
                        {' · '}{timeAgo(l.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {l.players}/{l.maxPlayers}
                    </span>
                    <button
                      onClick={() => join(l)}
                      disabled={joining === l.id || (full && !l.isMine)}
                      className="rounded-xl bg-gradient-to-r from-orange-600 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-50"
                    >
                      {joining === l.id ? 'Joining…' : l.isMine ? 'Return' : full ? 'Full' : 'Join'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <p className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
          1v1 duels are ranked and affect MMR. Team battles and races are casual — MMR
          is only used to keep 2v2 teams fair. Prefer instant matching?{' '}
          <Link href="/competitive" className="underline">Use the ranked queue</Link>.
        </p>
      </div>

      <CreateLobbyDialog open={showCreate} onClose={() => setShowCreate(false)} />
    </div>
  )
}

/* ── Create dialog ─────────────────────────────────────────────────────── */

interface TopicOption { slug: string; title: string }
interface TopicUnit { name: string; slug: string; topics: TopicOption[] }

function CreateLobbyDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter()
  const [format, setFormat] = useState<OpenLobby['format']>('DUEL_1V1')
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Duel pickers (competitive catalog + course-topics endpoint)
  const [duelCourse, setDuelCourse] = useState('')
  const [duelUnits, setDuelUnits] = useState<TopicUnit[] | null>(null)
  const [duelTopic, setDuelTopic] = useState('')
  const [duelMode, setDuelMode] = useState<'SPEED_RACE' | 'ACCURACY_CHALLENGE' | 'CHAOS'>('SPEED_RACE')
  const [difficulty, setDifficulty] = useState<Difficulty>('medium')

  // Race pickers (teacher-lobby course registry — plain-auth endpoint)
  const [raceCourses, setRaceCourses] = useState<{ slug: string; name: string }[] | null>(null)
  const [raceCourse, setRaceCourse] = useState('')
  const [raceTopics, setRaceTopics] = useState<TopicOption[] | null>(null)
  const [raceSelected, setRaceSelected] = useState<string[]>([])
  const [durationMin, setDurationMin] = useState(5)
  const [ffaMax, setFfaMax] = useState(8)

  useEffect(() => {
    if (!open) return
    setError(null)
    if ((format === 'TEAM_2V2' || format === 'RACE_FFA') && raceCourses === null) {
      fetch('/api/teacher/lobby/courses')
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => setRaceCourses(d?.courses ?? []))
        .catch(() => setRaceCourses([]))
    }
  }, [open, format, raceCourses])

  useEffect(() => {
    if (!duelCourse) { setDuelUnits(null); setDuelTopic(''); return }
    setDuelUnits(null)
    setDuelTopic('')
    // Response shape is { units: [{ name, topics: [...] }] } — grouped by unit,
    // NOT a flat topics array (which is what the race endpoint returns; reading
    // .topics here is the bug that left the 1v1 dropdown empty).
    fetch(`/api/competitive/course-topics?course=${encodeURIComponent(duelCourse)}`, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setDuelUnits(d?.units ?? []))
      .catch(() => setDuelUnits([]))
  }, [duelCourse])

  useEffect(() => {
    if (!raceCourse) { setRaceTopics(null); setRaceSelected([]); return }
    setRaceTopics(null)
    setRaceSelected([])
    fetch(`/api/teacher/lobby/courses?course=${encodeURIComponent(raceCourse)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setRaceTopics(d?.topics ?? []))
      .catch(() => setRaceTopics([]))
  }, [raceCourse])

  const create = async () => {
    setCreating(true)
    setError(null)
    try {
      const body =
        format === 'DUEL_1V1'
          ? { format, topicSlug: duelTopic, gameMode: duelMode, difficulty }
          : {
              format,
              courseSlug: raceCourse,
              topicSlugs: raceSelected,
              durationSec: durationMin * 60,
              difficulty,
              ...(format === 'RACE_FFA' ? { maxPlayers: ffaMax } : {}),
            }
      const res = await fetch('/api/competitive/open-lobbies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const j = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(j.error || 'Could not create the lobby')
      router.push(j.href)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
      setCreating(false)
    }
  }

  const canCreate =
    format === 'DUEL_1V1' ? !!duelTopic : !!raceCourse

  return (
    <FocusTrapDialog open={open} onClose={onClose} title="Host a lobby">
      <div className="max-h-[75vh] space-y-5 overflow-y-auto p-6">
        <div>
          <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Game format</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {(Object.keys(FORMAT_META) as OpenLobby['format'][]).map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`rounded-xl border-2 p-3 text-left transition ${
                  format === f
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                    : 'border-gray-200 hover:border-orange-300 dark:border-gray-700'
                }`}
              >
                <div className="text-xl" aria-hidden>{FORMAT_META[f].icon}</div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">{FORMAT_META[f].label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{FORMAT_META[f].blurb}</div>
              </button>
            ))}
          </div>
        </div>

        {format === 'DUEL_1V1' ? (
          <>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Course</label>
              <select
                value={duelCourse}
                onChange={(e) => setDuelCourse(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Choose a course…</option>
                {COMPETITIVE_COURSE_CATEGORIES.map((cat) => (
                  <optgroup key={cat.id} label={cat.label}>
                    {cat.courses.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.name}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            {duelCourse && (
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Topic</label>
                {duelUnits === null ? (
                  <p className="text-sm text-gray-500">Loading topics…</p>
                ) : duelUnits.length === 0 ? (
                  <p className="text-sm text-gray-500">No topics available for this course yet.</p>
                ) : (
                  <select
                    value={duelTopic}
                    onChange={(e) => setDuelTopic(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Choose a topic…</option>
                    {duelUnits.map((u) => (
                      <optgroup key={u.slug} label={u.name}>
                        {u.topics.map((t) => (
                          <option key={t.slug} value={t.slug}>{t.title}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                )}
              </div>
            )}
            <div>
              <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Mode</p>
              <div className="flex flex-wrap gap-2">
                {([['SPEED_RACE', '⚡ Speed Race'], ['ACCURACY_CHALLENGE', '🎯 Accuracy'], ['CHAOS', '🌀 Chaos']] as const).map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => setDuelMode(id)}
                    className={`rounded-xl border-2 px-4 py-2 text-sm font-semibold transition ${
                      duelMode === id
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {duelMode === 'CHAOS'
                  ? '🌀 Power-ups on, mayhem allowed — chaos duels are casual and never affect MMR.'
                  : 'Ranked — the result affects both players\u2019 MMR.'}
              </p>
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Course</label>
              <select
                value={raceCourse}
                onChange={(e) => setRaceCourse(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Choose a course…</option>
                {(raceCourses ?? []).map((c) => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>
            {raceCourse && raceTopics !== null && raceTopics.length > 0 && (
              <div>
                <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Topics <span className="font-normal text-gray-400">(none selected = whole course)</span>
                </p>
                <div className="flex max-h-36 flex-wrap gap-1.5 overflow-y-auto">
                  {raceTopics.map((t) => {
                    const on = raceSelected.includes(t.slug)
                    return (
                      <button
                        key={t.slug}
                        onClick={() =>
                          setRaceSelected((prev) =>
                            on ? prev.filter((s) => s !== t.slug) : [...prev, t.slug]
                          )
                        }
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                          on
                            ? 'border-orange-500 bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200'
                            : 'border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-300'
                        }`}
                      >
                        {t.title}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
            <div className="flex flex-wrap gap-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Race length</label>
                <select
                  value={durationMin}
                  onChange={(e) => setDurationMin(Number(e.target.value))}
                  className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                >
                  {[3, 5, 10, 15].map((m) => (
                    <option key={m} value={m}>{m} minutes</option>
                  ))}
                </select>
              </div>
              {format === 'RACE_FFA' && (
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Max players</label>
                  <select
                    value={ffaMax}
                    onChange={(e) => setFfaMax(Number(e.target.value))}
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  >
                    {[2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {format === 'TEAM_2V2'
                ? 'Starts when 4 players have joined — teams are balanced by MMR automatically.'
                : 'You choose when to start once at least 2 players are in.'}
            </p>
          </>
        )}

        <div>
          <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Question difficulty</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {DIFFICULTIES.map((d) => (
              <button
                key={d.id}
                onClick={() => setDifficulty(d.id)}
                className={`rounded-xl border-2 p-2.5 text-left transition ${
                  difficulty === d.id
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                    : 'border-gray-200 hover:border-orange-300 dark:border-gray-700'
                }`}
              >
                <div className="text-sm font-bold text-gray-900 dark:text-white">{d.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{d.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

        <div className="flex justify-end gap-2 pt-1">
          <button
            onClick={onClose}
            className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={create}
            disabled={!canCreate || creating}
            className="rounded-xl bg-gradient-to-r from-orange-600 to-red-600 px-6 py-2 text-sm font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-50"
          >
            {creating ? 'Creating…' : 'Create lobby'}
          </button>
        </div>
      </div>
    </FocusTrapDialog>
  )
}
