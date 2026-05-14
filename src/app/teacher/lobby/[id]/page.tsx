'use client'

import { use, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

interface Participant {
  id: string
  userId: string
  team: number | null
  mmrAtJoin: number
  joinedAt: string
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
  teacher: { id: string; name: string | null; email: string | null }
  classroom: { id: string; name: string } | null
  participants: Participant[]
}

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

export default function TeacherLobbyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const { status } = useSession()
  const [lobby, setLobby] = useState<LobbyDetail | null>(null)
  const [isTeacher, setIsTeacher] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

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
      // poll every 3s while OPEN
      const t = setInterval(() => {
        void load()
      }, 3000)
      return () => clearInterval(t)
    }
  }, [status, load])

  async function balance() {
    setBusy(true)
    setError(null)
    try {
      const res = await fetch(`/api/teacher/lobby/${id}/balance`, { method: 'POST' })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed')
      await load()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setBusy(false)
    }
  }

  async function start() {
    setBusy(true)
    setError(null)
    try {
      const res = await fetch(`/api/teacher/lobby/${id}/start`, { method: 'POST' })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed')
      await load()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setBusy(false)
    }
  }

  async function close() {
    if (!confirm('Close this lobby? It cannot be reopened.')) return
    setBusy(true)
    try {
      const res = await fetch(`/api/teacher/lobby/${id}/close`, { method: 'POST' })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || 'Failed')
      }
      await load()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setBusy(false)
    }
  }

  async function leave() {
    if (!confirm('Leave this lobby?')) return
    try {
      await fetch(`/api/teacher/lobby/join?lobbyId=${id}`, { method: 'DELETE' })
      router.push('/competitive')
    } catch {}
  }

  if (status === 'loading' || !lobby) {
    return <div className="p-8 text-gray-600">{error || 'Loading…'}</div>
  }

  const teamGroups: Participant[][] = Array.from({ length: lobby.numTeams }, () => [])
  const unassigned: Participant[] = []
  for (const p of lobby.participants) {
    if (p.team === null || p.team === undefined) unassigned.push(p)
    else teamGroups[p.team]?.push(p)
  }
  const teamSummaries = teamGroups.map((group, i) => ({
    team: i,
    count: group.length,
    avgMMR: group.length ? Math.round(group.reduce((s, p) => s + p.mmrAtJoin, 0) / group.length) : 0,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{lobby.name}</h1>
            <p className="text-sm text-gray-500">
              {lobby.classroom ? `${lobby.classroom.name} · ` : ''}
              {lobby.numTeams} teams · {lobby.participants.length} participants
              {lobby.topicSlug ? ` · topic ${lobby.topicSlug}` : ''}
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

        {isTeacher && lobby.status === 'OPEN' && (
          <div className="mb-5 flex gap-2">
            <button
              onClick={balance}
              disabled={busy || lobby.participants.length < lobby.numTeams}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              Balance teams (snake-draft by MMR)
            </button>
            <button
              onClick={start}
              disabled={busy || unassigned.length > 0 || lobby.participants.length === 0}
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

        {isTeacher && lobby.status === 'IN_PROGRESS' && (
          <div className="mb-5">
            <button
              onClick={close}
              disabled={busy}
              className="rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 disabled:opacity-50"
            >
              End match (close lobby)
            </button>
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

        <h2 className="text-lg font-semibold text-gray-900 mb-2">Teams</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {teamSummaries.map(s => (
            <div
              key={s.team}
              className={
                'rounded-lg border-2 p-4 ' + (TEAM_COLORS[s.team % TEAM_COLORS.length])
              }
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
      </div>
    </div>
  )
}
