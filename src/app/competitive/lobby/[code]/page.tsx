'use client'

import { useState, useEffect, useCallback, use } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { COMPETITIVE_COURSES } from '@/lib/competitive-catalog'
import CompetitiveTopicPicker, { composeTopicSlug, decomposeTopicSlug } from '@/components/CompetitiveTopicPicker'

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
  topicSlug?: string | null
  gameMode?: string | null
  difficulty?: string | null
  closedAt: string | null
}


const GAME_MODES = [
  { id: 'SPEED_RACE', label: '⚡ Speed Race', desc: 'First to 10 correct wins' },
  { id: 'ACCURACY_CHALLENGE', label: '🎯 Accuracy Challenge', desc: 'Highest accuracy in 5 minutes' },
  // CHAOS is unranked by construction — the match engine skips MMR and profile
  // stats for chaos matches — so friends can spam power-ups with nothing at stake.
  { id: 'CHAOS', label: '🌀 Chaos Mode', desc: 'Power-ups & mayhem · does NOT affect MMR' },
] as const

const DIFFICULTIES = [
  { id: 'easy', label: '🟢 Easy', desc: 'All easy questions' },
  { id: 'medium', label: '🟡 Medium', desc: 'A few easy, then medium' },
  { id: 'hard', label: '🔴 Hard', desc: 'Warm-up, then mostly hard' },
] as const

export default function LobbyRoomPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = use(params)
  const router = useRouter()
  const { data: session, status: authStatus } = useSession()
  const [lobby, setLobby] = useState<LobbyState | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  // Topic picker state
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [gameMode, setGameMode] = useState<typeof GAME_MODES[number]['id']>('SPEED_RACE')
  const [difficulty, setDifficulty] = useState<typeof DIFFICULTIES[number]['id']>('medium')
  // Prefill pickers ONCE from the lobby's advertised settings (set when the
  // lobby was created from the open-lobby browser). After that the host's
  // in-room choices win — the poll must not keep resetting them.
  const [prefilled, setPrefilled] = useState(false)
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

  useEffect(() => {
    if (prefilled || !lobby) return
    if (lobby.topicSlug) setSelectedTopics(decomposeTopicSlug(lobby.topicSlug))
    if (lobby.gameMode && GAME_MODES.some(m => m.id === lobby.gameMode)) {
      setGameMode(lobby.gameMode as typeof GAME_MODES[number]['id'])
    }
    if (lobby.difficulty && DIFFICULTIES.some(d => d.id === lobby.difficulty)) {
      setDifficulty(lobby.difficulty as typeof DIFFICULTIES[number]['id'])
    }
    setPrefilled(true)
  }, [lobby, prefilled])

  // Close the lobby the moment the host actually leaves an EMPTY waiting room
  // (tab close / navigation away — SPA navigation into a match does not fire
  // pagehide). Only when no guest has joined: with an opponent present, a
  // refresh must not destroy the pair, so the 10-minute heartbeat sweep owns
  // that case. The leave endpoint closes host-owned lobbies.
  useEffect(() => {
    const onPageHide = () => {
      if (lobby?.youAreHost && lobby.status === 'WAITING' && !lobby.guest) {
        navigator.sendBeacon(`/api/competitive/lobby/${code}/leave`)
      }
    }
    window.addEventListener('pagehide', onPageHide)
    return () => window.removeEventListener('pagehide', onPageHide)
  }, [lobby?.youAreHost, lobby?.status, lobby?.guest, code])

  // If a match starts (or we discover one in progress), redirect both players to the match page
  useEffect(() => {
    if (lobby?.status === 'IN_MATCH' && lobby.currentMatch && lobby.currentMatch.status === 'IN_PROGRESS') {
      router.push(`/competitive/match/${lobby.currentMatch.id}`)
    }
  }, [lobby, router])



  const startMatch = async () => {
    if (selectedTopics.length === 0) return
    setStarting(true)
    setError(null)
    try {
      const res = await fetch(`/api/competitive/lobby/${code}/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug: composeTopicSlug(selectedTopics), gameMode, difficulty }),
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
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-6 sm:py-8 px-3 sm:px-4">
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
              <label className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Topics <span className="font-normal text-gray-400">(one or several — questions get mixed)</span>
              </label>
              <div className="mb-5">
                <CompetitiveTopicPicker selected={selectedTopics} onChange={setSelectedTopics} accent="blue" />
              </div>

              {/* Mode picker */}
              <label className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">Game Mode</label>
              <div className="mb-5 grid gap-2 sm:grid-cols-3">
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

              {/* Difficulty picker */}
              <label className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">Difficulty</label>
              <div className="mb-5 grid gap-2 sm:grid-cols-3">
                {DIFFICULTIES.map(d => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDifficulty(d.id)}
                    className={`rounded-lg border-2 p-3 text-left transition ${
                      difficulty === d.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                        : 'border-gray-200 hover:border-blue-300 dark:border-gray-700'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 dark:text-white">{d.label}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{d.desc}</div>
                  </button>
                ))}
              </div>

              <button
                onClick={startMatch}
                disabled={!lobby.guest || selectedTopics.length === 0 || starting}
                className="w-full rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-bold text-white shadow-lg transition hover:shadow-xl disabled:opacity-50"
              >
                {starting ? 'Starting…' : !lobby.guest ? 'Waiting for opponent…' : selectedTopics.length === 0 ? 'Pick a topic to start' : 'Start Match'}
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
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-blue-500 text-xl font-bold text-white shrink-0">
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
          <button onClick={onContinue} className="rounded-lg bg-gradient-to-r from-accent to-accent-secondary px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-lg">
            {youAreHost ? 'Pick another challenge' : 'Back to lobby'}
          </button>
        </div>
      </div>
    </div>
  )
}
