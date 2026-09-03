'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { ArrowLeft, School } from 'lucide-react'

function JoinTeacherLobbyContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const codeFromUrl = (searchParams.get('code') || '').toUpperCase()
  const { status } = useSession()
  const [code, setCode] = useState(codeFromUrl)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      // Carry the lobby code through sign-in so the student returns here with
      // the code pre-filled instead of losing the join intent.
      const dest = codeFromUrl
        ? `/competitive/join?code=${encodeURIComponent(codeFromUrl)}`
        : '/competitive/join'
      router.push(`/auth/signin?callbackUrl=${encodeURIComponent(dest)}`)
    }
  }, [status, router, codeFromUrl])

  if (status === 'unauthenticated') return null

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
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-accent-subtle dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-6 flex items-start justify-center">
      <div className="w-full max-w-md mt-12">
        <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-subtle text-accent">
            <School className="h-5 w-5" aria-hidden />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Join class lobby</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Enter the 6-character code your teacher gave you — you&apos;ll be auto-assigned to a balanced team.
          </p>
          {error && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{error}</p>}
          <input
            value={code}
            onChange={e => setCode(e.target.value.toUpperCase())}
            maxLength={6}
            className="w-full text-center text-2xl font-mono tracking-widest rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 mb-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="ABC123"
          />
          <button
            onClick={join}
            disabled={busy || code.length < 6}
            className="w-full rounded-lg bg-brand-gradient px-4 py-2.5 text-white font-semibold shadow transition hover:shadow-lg disabled:opacity-50"
          >
            {busy ? 'Joining…' : 'Join lobby'}
          </button>
        </div>
        <div className="mt-4 text-center">
          <Link href="/competitive" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to Competitive
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function JoinTeacherLobbyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent" />
        </div>
      }
    >
      <JoinTeacherLobbyContent />
    </Suspense>
  )
}
