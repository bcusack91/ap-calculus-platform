'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { ArrowLeft, Swords } from 'lucide-react'

export default function LobbyHomePage() {
  const router = useRouter()
  const { status } = useSession()
  const [code, setCode] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const create = async () => {
    setError(null)
    setBusy(true)
    try {
      const res = await fetch('/api/competitive/lobby', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' })
      const text = await res.text()
      const data = text ? (() => { try { return JSON.parse(text) } catch { return null } })() : null
      if (!res.ok) throw new Error(data?.error || `Server error (${res.status})`)
      if (!data?.code) throw new Error('Server returned no lobby code')
      router.push(`/competitive/lobby/${data.code}`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to create lobby')
      setBusy(false)
    }
  }

  const join = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const trimmed = code.trim().toUpperCase()
    if (!trimmed) return
    setBusy(true)
    try {
      // 1) Try private 1v1 lobby
      const res = await fetch('/api/competitive/lobby', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: trimmed }),
      })
      const text = await res.text()
      const data = text ? (() => { try { return JSON.parse(text) } catch { return null } })() : null
      if (res.ok && data?.code) {
        router.push(`/competitive/lobby/${data.code}`)
        return
      }

      // 2) Fall back to teacher class lobby (different code namespace)
      if (res.status === 404) {
        const teacherRes = await fetch('/api/teacher/lobby/join', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: trimmed }),
        })
        const teacherData = await teacherRes.json().catch(() => null)
        if (teacherRes.ok && teacherData?.lobbyId) {
          router.push(`/teacher/lobby/${teacherData.lobbyId}`)
          return
        }
        throw new Error(teacherData?.error || data?.error || 'Lobby not found')
      }

      throw new Error(data?.error || `Server error (${res.status})`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to join lobby')
      setBusy(false)
    }
  }

  if (status === 'loading') {
    return <div className="p-6 text-center text-gray-500">Loading…</div>
  }
  if (status === 'unauthenticated') {
    return (
      <div className="mx-auto max-w-md p-6 text-center">
        <p className="mb-4 text-gray-700 dark:text-gray-300">Please sign in to play in a private lobby.</p>
        <Link href="/auth/signin" className="rounded-lg bg-accent px-5 py-2.5 font-semibold text-white hover:bg-accent-hover">Sign In</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-accent-subtle dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-8 px-3 sm:px-4">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="text-center">
          <h1 className="flex items-center justify-center gap-2 text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
            <Swords className="h-8 w-8 text-accent" aria-hidden /> Private Lobby
          </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Looking for someone to play? <Link href="/competitive/lobbies" className="font-semibold text-accent underline">Browse open lobbies</Link> instead.
        </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Play head-to-head with a friend. Create a lobby, share the code, and pick any challenge together.
          </p>
        </div>

        {error && (
          <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-700 dark:bg-red-900/30 dark:text-red-300">
            {error}
          </div>
        )}

        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Create a New Lobby</h2>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            You&apos;ll get a join code to share with your opponent.
          </p>
          <button
            onClick={create}
            disabled={busy}
            className="w-full rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl disabled:opacity-50"
          >
            {busy ? 'Creating…' : 'Create Lobby'}
          </button>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Join a Lobby</h2>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Enter a friend&apos;s 1v1 code <em>or</em> a teacher&apos;s 6-character class lobby code.
          </p>
          <form onSubmit={join} className="space-y-3">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="ENTER CODE"
              maxLength={8}
              autoCapitalize="characters"
              className="w-full rounded-xl border-2 border-gray-300 px-4 py-3 text-center text-2xl font-bold tracking-[0.4em] uppercase focus:border-accent focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
            <button
              type="submit"
              disabled={busy || !code.trim()}
              className="w-full rounded-xl border-2 border-accent px-6 py-3 font-semibold text-accent transition hover:bg-accent-subtle disabled:opacity-50 dark:hover:bg-accent-light/20"
            >
              {busy ? 'Joining…' : 'Join Lobby'}
            </button>
          </form>
        </div>

        <div className="text-center">
          <Link href="/competitive" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to Competitive
          </Link>
        </div>
      </div>
    </div>
  )
}
