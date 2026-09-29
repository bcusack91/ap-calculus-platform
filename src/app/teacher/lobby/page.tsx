'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Plus, Swords } from 'lucide-react'
import ClassGameOptions, {
  DEFAULT_CLASS_GAME,
  classGameRequestBody,
  type ClassGameSettings,
} from '@/components/teacher/ClassGameOptions'
import HelpLink, { HELP_ARTICLES } from '@/components/HelpLink'

interface LobbySummary {
  id: string
  joinCode: string
  name: string
  topicSlug: string | null
  gameMode: string
  numTeams: number
  format?: string | null
  status: 'OPEN' | 'IN_PROGRESS' | 'CLOSED'
  createdAt: string
  classroom: { id: string; name: string } | null
  _count: { participants: number }
}

export default function TeacherLobbiesPage() {
  const router = useRouter()
  const { status } = useSession()
  const [lobbies, setLobbies] = useState<LobbySummary[]>([])
  const [classrooms, setClassrooms] = useState<{ id: string; name: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const [newGame, setNewGame] = useState<ClassGameSettings>(DEFAULT_CLASS_GAME)
  // Optional: tie the game to a class so it shows in that class's Work › Class games.
  const [classroomId, setClassroomId] = useState('')
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/teacher/lobby')
    }
  }, [status, router])

  const load = useCallback(async () => {
    try {
      const [res, classRes] = await Promise.all([
        fetch('/api/teacher/lobby'),
        fetch('/api/teacher/classrooms'),
      ])
      if (res.status === 403) {
        router.push('/for-teachers')
        return
      }
      const json = await res.json()
      setLobbies(json.lobbies ?? [])
      if (classRes.ok) {
        const cj = await classRes.json()
        setClassrooms(
          ((cj.classrooms ?? []) as { id: string; name: string; isActive?: boolean }[])
            .filter((c) => c.isActive !== false)
            .map((c) => ({ id: c.id, name: c.name })),
        )
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    if (status === 'authenticated') void load()
  }, [status, load])

  async function createLobby() {
    setCreating(true)
    setError(null)
    try {
      const res = await fetch('/api/teacher/lobby', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(classGameRequestBody(newGame, classroomId || null, 'Class Match')),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Could not create the class game')
      setShowCreate(false)
      setNewGame(DEFAULT_CLASS_GAME)
      router.push(`/teacher/lobby/${json.lobby.id}`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not create the class game')
    } finally {
      setCreating(false)
    }
  }

  if (status === 'loading' || loading) {
    return <div className="p-8 text-gray-600 dark:text-gray-400">Loading…</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent-subtle to-white p-6 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="inline-flex items-center gap-2 text-3xl font-bold text-gray-900 dark:text-white">
              Class games
              <HelpLink article={HELP_ARTICLES.classGamesAndLiveLessons} label="How class games work" />
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Start a game, show students the code, then play as MMR-balanced teams or a free-for-all.
            </p>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-white font-medium hover:bg-accent-hover"
          >
            <Plus className="h-4 w-4" aria-hidden="true" /> New class game
          </button>
        </div>

        {showCreate && (
          <div className="mb-6 rounded-2xl border border-accent-light bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="text-lg font-semibold mb-3">New class game</h2>
            {error && <p role="alert" className="text-red-600 dark:text-red-400 text-sm mb-2">{error}</p>}
            {classrooms.length > 0 && (
              <label className="mb-4 block text-sm" htmlFor="lobby-classroom">
                <span className="mb-1 block text-gray-600 dark:text-gray-400">Class (optional)</span>
                <select
                  id="lobby-classroom"
                  value={classroomId}
                  onChange={(e) => setClassroomId(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:w-auto"
                >
                  <option value="">No class — anyone with the code can join</option>
                  {classrooms.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </label>
            )}
            <ClassGameOptions value={newGame} onChange={setNewGame} idPrefix="lobby" />
            <div className="mt-4 flex gap-2">
              <button
                onClick={createLobby}
                disabled={creating}
                className="rounded-xl bg-accent px-4 py-2 text-white text-sm font-medium hover:bg-accent-hover disabled:opacity-50"
              >
                {creating ? 'Creating…' : 'Create'}
              </button>
              <button
                onClick={() => setShowCreate(false)}
                className="rounded-xl border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {lobbies.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-500 dark:border-gray-600 dark:text-gray-400">
            <Swords className="mx-auto mb-2 h-8 w-8 text-gray-300 dark:text-gray-600" aria-hidden="true" />
            No class games yet. Start one to get going.
          </div>
        ) : (
          <div className="space-y-3">
            {lobbies.map(l => (
              <Link
                key={l.id}
                href={`/teacher/lobby/${l.id}`}
                className="block rounded-xl border border-gray-200 bg-white p-4 hover:border-accent transition-colors dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white truncate">{l.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Code <span className="font-mono font-bold text-accent">{l.joinCode}</span>
                      {' · '}
                      {l._count.participants} participants
                      {' · '}
                      {l.format === 'RACE_FFA' ? 'Free-for-all' : `${l.numTeams} teams`}
                      {l.gameMode === 'CHAOS' ? ' · Chaos' : ''}
                      {l.classroom ? ` · ${l.classroom.name}` : ''}
                    </div>
                  </div>
                  <span
                    className={
                      'shrink-0 rounded-full px-3 py-1 text-xs font-medium ' +
                      (l.status === 'OPEN'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : l.status === 'IN_PROGRESS'
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300')
                    }
                  >
                    {l.status === 'OPEN' ? 'Open' : l.status === 'IN_PROGRESS' ? 'Playing' : 'Ended'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
