'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface LobbySummary {
  id: string
  joinCode: string
  name: string
  topicSlug: string | null
  gameMode: string
  numTeams: number
  status: 'OPEN' | 'IN_PROGRESS' | 'CLOSED'
  createdAt: string
  classroom: { id: string; name: string } | null
  _count: { participants: number }
}

export default function TeacherLobbiesPage() {
  const router = useRouter()
  const { status } = useSession()
  const [lobbies, setLobbies] = useState<LobbySummary[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const [newLobby, setNewLobby] = useState({ name: '', numTeams: 2 })
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/teacher/lobby')
    }
  }, [status, router])

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/teacher/lobby')
      if (res.status === 403) {
        router.push('/dashboard')
        return
      }
      const json = await res.json()
      setLobbies(json.lobbies ?? [])
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
        body: JSON.stringify({
          name: newLobby.name || 'Class Match',
          numTeams: newLobby.numTeams,
        }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed to create lobby')
      setShowCreate(false)
      setNewLobby({ name: '', numTeams: 2 })
      router.push(`/teacher/lobby/${json.lobby.id}`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setCreating(false)
    }
  }

  if (status === 'loading' || loading) {
    return <div className="p-8 text-gray-600">Loading…</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Class Lobbies</h1>
            <p className="text-gray-600 mt-1">
              Create a lobby, share the code with students, then split them into MMR-balanced teams.
            </p>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700"
          >
            + New Lobby
          </button>
        </div>

        {showCreate && (
          <div className="mb-6 rounded-lg border border-indigo-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Create lobby</h2>
            {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
            <div className="grid sm:grid-cols-2 gap-3">
              <label className="text-sm">
                <span className="block text-gray-600 mb-1">Name</span>
                <input
                  className="w-full rounded border-gray-300"
                  value={newLobby.name}
                  onChange={e => setNewLobby({ ...newLobby, name: e.target.value })}
                  placeholder="Period 4 Calculus"
                />
              </label>
              <label className="text-sm">
                <span className="block text-gray-600 mb-1">Number of teams</span>
                <input
                  type="number"
                  min={2}
                  max={8}
                  className="w-full rounded border-gray-300"
                  value={newLobby.numTeams}
                  onChange={e => setNewLobby({ ...newLobby, numTeams: Math.max(2, Math.min(8, Number(e.target.value) || 2)) })}
                />
              </label>
            </div>
            <p className="mt-3 text-xs text-gray-500">You'll pick the course, topics, and timer on the next screen.</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={createLobby}
                disabled={creating}
                className="rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-50"
              >
                {creating ? 'Creating…' : 'Create'}
              </button>
              <button
                onClick={() => setShowCreate(false)}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {lobbies.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center text-gray-500">
            No lobbies yet — create one to get started.
          </div>
        ) : (
          <div className="space-y-3">
            {lobbies.map(l => (
              <Link
                key={l.id}
                href={`/teacher/lobby/${l.id}`}
                className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-indigo-400 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{l.name}</div>
                    <div className="text-sm text-gray-500">
                      Code <span className="font-mono font-bold text-indigo-700">{l.joinCode}</span>
                      {' · '}
                      {l._count.participants} participants
                      {' · '}
                      {l.numTeams} teams
                      {l.classroom ? ` · ${l.classroom.name}` : ''}
                    </div>
                  </div>
                  <span
                    className={
                      'rounded-full px-3 py-1 text-xs font-medium ' +
                      (l.status === 'OPEN'
                        ? 'bg-green-100 text-green-800'
                        : l.status === 'IN_PROGRESS'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-gray-100 text-gray-700')
                    }
                  >
                    {l.status}
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
