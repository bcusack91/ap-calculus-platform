'use client'

import { useState, useEffect, useCallback, use } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { COMPETITIVE_COURSE_CATEGORIES, COMPETITIVE_COURSES } from '@/lib/competitive-catalog'

interface PlayerInfo { id: string; name: string | null; image: string | null }
interface CurrentMatch {
  id: string
  status: string
  winnerId: string | null
  player1Id: string
  player2Id: string
  player1Score: number
  player2Score: number
  topicSlug: string
  gameMode: string
  completedAt: string | null
}
interface LobbyState {
  code: string
  status: 'WAITING' | 'IN_MATCH' | 'CLOSED'
  youAreHost: boolean
  host: PlayerInfo | null
  guest: PlayerInfo | null
  currentMatch: CurrentMatch | null
  lastMatchId: string | null
  closedAt: string | null
}

interface UnitTopic { slug: string; title: string; completed: boolean; masteryLevel: number }
interface Unit { name: string; slug: string; topics: UnitTopic[] }
interface CourseTopicsResponse { courseSlug: string; courseName: string; units: Unit[] }

const GAME_MODES = [
  { id: 'SPEED_RACE', label: '⚡ Speed Race', desc: 'First to 10 correct wins' },
  { id: 'ACCURACY_CHALLENGE', label: '🎯 Accuracy Challenge', desc: 'Highest accuracy in 5 minutes' },
] as const

export default function LobbyRoomPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = use(params)
  const router = useRouter()
  const { data: session, status: authStatus } = useSession()
  const [lobby, setLobby] = useState<LobbyState | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  // Topic picker state
  const [selectedCourse, setSelectedCourse] = useState<string>('')
  const [topics, setTopics] = useState<CourseTopicsResponse | null>(null)
  const [topicsLoading, setTopicsLoading] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string>('')
  const [gameMode, setGameMode] = useState<typeof GAME_MODES[number]['id']>('SPEED_RACE')
  const [starting, setStarting] = useState(false)

  const fetchLobby = useCallback(async () => {
    try {
      const res = await fetch(`/api/competitive/lobby/${code}`, { cache: 'no-store' })
      if (res.status === 404) { setError('Lobby not found'); setLoaded(true); return }
      if (res.status === 403) { setError('You are not a participant in this lobby'); setLoaded(true); return }
      const data: LobbyState = await res.json()
      setLobby(data)
      setLoaded(true)
    } catch (e) {
      console.error(e)
    }
  }, [code])

  // Initial fetch + polling
  useEffect(() => {
    if (authStatus !== 'authenticated') return
    fetchLobby()
    const id = setInterval(fetchLobby, 2500)
    return () => clearInterval(id)
  }, [fetchLobby, authStatus])

  // If a match starts (or we discover one in progress), redirect both players to the match page
  useEffect(() => {
    if (lobby?.status === 'IN_MATCH' && lobby.currentMatch && lobby.currentMatch.status === 'IN_PROGRESS') {
      router.push(`/competitive/match/${lobby.currentMatch.id}`)
    }
  }, [lobby, router])

  // Load topics when a course is picked
  useEffect(() => {
    if (!selectedCourse) { setTopics(null); return }
    setTopicsLoading(true)
    setSelectedTopic('')
    fetch(`/api/competitive/course-topics?course=${encodeURIComponent(selectedCourse)}`, { cache: 'no-store' })
      .then(r => r.json())
      .then((data: CourseTopicsResponse) => { setTopics(data); setTopicsLoading(false) })
      .catch(() => { setTopics(null); setTopicsLoading(false) })
  }, [selectedCourse])

  const startMatch = async () => {
    if (!selectedTopic) return
    setStarting(true)
    setError(null)
    try {
      const res = await fetch(`/api/competitive/lobby/${code}/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug: selectedTopic, gameMode }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Could not start match')
      router.push(`/competitive/match/${data.matchId}`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to start match')
      setStarting(false)
    }
  }

  const returnToWaiting = async () => {
    await fetch(`/api/competitive/lobby/${code}/return`, { method: 'POST' })
    fetchLobby()
  }

  const leaveLobby = async () => {
    await fetch(`/api/competitive/lobby/${code}/leave`, { method: 'POST' })
    router.push('/competitive/lobby')
  }

  const copyCode = async () => {
    try { await navigator.clipboard.writeText(code) } catch { /* noop */ }
  }

  const copyInviteLink = async () => {
    try {
      const url = `${window.location.origin}/competitive/lobby/${code}`
      await navigator.clipboard.writeText(url)
    } catch { /* noop */ }
  }

  if (authStatus === 'loading' || !loaded) {
    return <div className="p-8 text-center text-gray-500">Loading lobby…</div>
  }
  if (authStatus === 'unauthenticated') {
    return (
      <div className="mx-auto max-w-md p-6 text-center">
        <p className="mb-4 text-gray-700 dark:text-gray-300">Please sign in to join this lobby.</p>
        <Link href={`/auth/signin?callbackUrl=${encodeURIComponent(`/competitive/lobby/${code}`)}`}
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white">Sign In</Link>
      </div>
    )
  }
  if (error && !lobby) {
    return (
      <div className="mx-auto max-w-md p-6 text-center">
        <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-red-700 dark:border-red-700 dark:bg-red-900/30 dark:text-red-300">
          {error}
        </div>
        <Link href="/competitive/lobby" className="mt-4 inline-block text-blue-600">Back to lobbies</Link>
      </div>
    )
  }
  if (!lobby) return null

  if (lobby.status === 'CLOSED') {
    return (
      <div className="mx-auto max-w-md p-6 text-center">
        <p className="mb-4 text-gray-700 dark:text-gray-300">This lobby has been closed.</p>
        <Link href="/competitive/lobby" className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white">Back to Lobbies</Link>
      </div>
    )
  }

  const me = session?.user?.id
  const lastMatch = lobby.currentMatch
  const justFinished =
    lobby.status === 'WAITING' &&
    lastMatch &&
    (lastMatch.status === 'COMPLETED' || lastMatch.status === 'CANCELLED')

  // After a match finishes the server resets currentMatch to null, but during the brief window
  // before that, we still want to show the result and a "Pick another challenge" button.
  const matchFinishedDisplay =
    lobby.status === 'IN_MATCH' && lastMatch && lastMatch.status === 'COMPLETED'

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-6 sm:py-8 px-3 sm:px-4">
      <div className="mx-auto max-w-3xl space-y-5">
        {/* Header / code */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Lobby Code</p>
              <p className="text-3xl sm:text-4xl font-black tracking-[0.3em] text-gray-900 dark:text-white break-all">{lobby.code}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={copyCode} className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">Copy code</button>
              <button onClick={copyInviteLink} className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">Copy link</button>
              <button onClick={leaveLobby} className="rounded-lg border border-red-300 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30">
                {lobby.youAreHost ? 'Close lobby' : 'Leave'}
              </button>
            </div>
          </div>
        </div>

        {/* Players */}
        <div className="grid gap-3 sm:grid-cols-2">
          <PlayerCard label="Host" player={lobby.host} isYou={me === lobby.host?.id} />
          <PlayerCard label="Guest" player={lobby.guest} isYou={me === lobby.guest?.id} placeholder="Waiting for opponent…" />
        </div>

        {error && (
          <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-700 dark:bg-red-900/30 dark:text-red-300">
            {error}
          </div>
        )}

        {/* After-match summary banner */}
        {(justFinished || matchFinishedDisplay) && lastMatch && (
          <MatchResultBanner
            match={lastMatch}
            me={me}
            host={lobby.host}
            guest={lobby.guest}
            onContinue={returnToWaiting}
            youAreHost={lobby.youAreHost}
          />
        )}

        {/* Topic picker (host) / waiting state (guest) */}
        {lobby.status === 'WAITING' && (
          lobby.youAreHost ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Pick a Challenge</h2>

              {!lobby.guest && (
                <div className="mb-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                  Share the code above. Once your opponent joins you can start the match.
                </div>
              )}

              {/* Course picker */}
              <label className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">Course</label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="mb-4 w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
              >
                <option value="">Select a course…</option>
                {COMPETITIVE_COURSE_CATEGORIES.map(cat => (
                  <optgroup key={cat.id} label={`${cat.icon} ${cat.label}`}>
                    {cat.courses.map(c => (
                      <option key={c.slug} value={c.slug}>{c.emoji} {c.name}</option>
                    ))}
                  </optgroup>
                ))}
              </select>

              {/* Topic picker */}
              {selectedCourse && (
                <>
                  <label className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">Topic</label>
                  {topicsLoading ? (
                    <div className="mb-4 text-sm text-gray-500">Loading topics…</div>
                  ) : topics && topics.units.length > 0 ? (
                    <select
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="mb-4 w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                    >
                      <option value="">Select a topic…</option>
                      {topics.units.map(u => (
                        <optgroup key={u.slug} label={u.name}>
                          {u.topics.map(t => (
                            <option key={t.slug} value={t.slug}>
                              {t.completed ? '✓ ' : ''}{t.title}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  ) : (
                    <div className="mb-4 text-sm text-gray-500">No topics available for this course yet.</div>
                  )}
                </>
              )}

              {/* Mode picker */}
              <label className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">Game Mode</label>
              <div className="mb-5 grid gap-2 sm:grid-cols-2">
                {GAME_MODES.map(m => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setGameMode(m.id)}
                    className={`rounded-lg border-2 p-3 text-left transition ${
                      gameMode === m.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                        : 'border-gray-200 hover:border-blue-300 dark:border-gray-700'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 dark:text-white">{m.label}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{m.desc}</div>
                  </button>
                ))}
              </div>

              <button
                onClick={startMatch}
                disabled={!lobby.guest || !selectedTopic || starting}
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-bold text-white shadow-lg transition hover:shadow-xl disabled:opacity-50"
              >
                {starting ? 'Starting…' : !lobby.guest ? 'Waiting for opponent…' : !selectedTopic ? 'Pick a topic to start' : 'Start Match'}
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 text-center shadow-xl dark:border-gray-700 dark:bg-gray-800">
              <div className="text-4xl mb-2">⏳</div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Waiting for the host…</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {lobby.host?.name || 'The host'} is picking the next challenge.
              </p>
            </div>
          )
        )}

        <div className="text-center">
          <Link href="/competitive/lobby" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400">
            ← All lobbies
          </Link>
        </div>
      </div>
    </div>
  )
}

function PlayerCard({ label, player, isYou, placeholder }: { label: string; player: PlayerInfo | null; isYou: boolean; placeholder?: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-xl font-bold text-white shrink-0">
          {player?.name?.[0]?.toUpperCase() || (label === 'Host' ? 'H' : '?')}
        </div>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{label}</p>
          <p className="truncate font-semibold text-gray-900 dark:text-white">
            {player?.name || placeholder || 'Empty'} {isYou && <span className="text-xs text-blue-600 dark:text-blue-400">(you)</span>}
          </p>
        </div>
      </div>
    </div>
  )
}

function MatchResultBanner({ match, me, host, guest, onContinue, youAreHost }: {
  match: CurrentMatch
  me: string | undefined
  host: PlayerInfo | null
  guest: PlayerInfo | null
  onContinue: () => void
  youAreHost: boolean
}) {
  const youWon = match.winnerId && match.winnerId === me
  const tied = !match.winnerId
  const courseLabel = COMPETITIVE_COURSES.find(c => match.topicSlug?.includes(c.slug.replace(/^ap-/, '')))?.name
  const myScore = me === match.player1Id ? match.player1Score : match.player2Score
  const oppScore = me === match.player1Id ? match.player2Score : match.player1Score
  const oppName = (me === host?.id ? guest?.name : host?.name) || 'Opponent'

  return (
    <div className={`rounded-2xl border-2 p-4 sm:p-6 shadow-xl ${youWon ? 'border-green-400 bg-green-50 dark:bg-green-900/20' : tied ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'border-amber-400 bg-amber-50 dark:bg-amber-900/20'}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
            {tied ? '🤝 Tied!' : youWon ? '🏆 You won!' : `${oppName} won`}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 break-words">
            {match.gameMode.replace('_', ' ')}{courseLabel ? ` · ${courseLabel}` : ''} · You {myScore} – {oppScore} {oppName}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href={`/competitive/match/${match.id}`} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
            View results
          </Link>
          <button onClick={onContinue} className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-lg">
            {youAreHost ? 'Pick another challenge' : 'Back to lobby'}
          </button>
        </div>
      </div>
    </div>
  )
}
