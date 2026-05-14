'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function JoinTeacherLobbyPage() {
  const router = useRouter()
  const { status } = useSession()
  const [code, setCode] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (status === 'unauthenticated') {
    router.push('/auth/signin?callbackUrl=/competitive/join')
    return null
  }

  async function join() {
    setBusy(true)
    setError(null)
    try {
      const res = await fetch('/api/teacher/lobby/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed to join')
      router.push(`/teacher/lobby/${json.lobbyId}`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-6 flex items-start justify-center">
      <div className="w-full max-w-md mt-12 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Join class lobby</h1>
        <p className="text-sm text-gray-500 mb-4">
          Enter the 6-character code your teacher gave you.
        </p>
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <input
          value={code}
          onChange={e => setCode(e.target.value.toUpperCase())}
          maxLength={6}
          className="w-full text-center text-2xl font-mono tracking-widest rounded border-gray-300 mb-3"
          placeholder="ABC123"
        />
        <button
          onClick={join}
          disabled={busy || code.length < 6}
          className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 disabled:opacity-50"
        >
          {busy ? 'Joining…' : 'Join lobby'}
        </button>
      </div>
    </div>
  )
}
