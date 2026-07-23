'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

function JoinClassContent() {
  const { data: session, status } = useSession()
  const _router = useRouter()
  void _router;
  const searchParams = useSearchParams()
  const codeFromUrl = searchParams.get('code') || ''
  const [joinCode, setJoinCode] = useState(codeFromUrl.toUpperCase())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState<{ name: string; teacher: string } | null>(null)
  const [autoJoinAttempted, setAutoJoinAttempted] = useState(false)

  // Auto-join if code was provided via URL and user is authenticated
  useEffect(() => {
    if (codeFromUrl && session && !autoJoinAttempted) {
      setAutoJoinAttempted(true)
      handleAutoJoin(codeFromUrl.toUpperCase())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeFromUrl, session])

  const handleAutoJoin = async (code: string) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/teacher/classrooms/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ joinCode: code }),
      })
      const data = await res.json()
      if (res.ok) {
        setSuccess({ name: data.classroom?.name || 'Classroom', teacher: data.classroom?.teacher || 'Teacher' })
      } else {
        setError(data.error || 'Failed to join classroom')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent" />
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-subtle via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Sign in to join a class</h1>
          <p className="text-gray-500 mb-6">You need an account to join a classroom.</p>
          <Link
            href={`/auth/signin?callbackUrl=${encodeURIComponent(joinCode ? `/join-class?code=${joinCode}` : '/join-class')}`}
            className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-semibold rounded-lg hover:from-accent-hover hover:to-accent-secondary-hover transition-all"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault()
    const code = joinCode.trim().toUpperCase()
    if (!code) return

    setLoading(true)
    setError('')
    setSuccess(null)

    try {
      const res = await fetch('/api/teacher/classrooms/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ joinCode: code }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to join class')
        return
      }

      setSuccess({ name: data.classroom.name, teacher: data.classroom.teacher || 'your teacher' })
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4 py-12">
      <div className="max-w-md mx-auto">
        {/* Back link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mb-6"
        >
          ← Back to Dashboard
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          {success ? (
            <div className="text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                You&apos;re in!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                You joined <span className="font-semibold text-accent">{success.name}</span>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Teacher: {success.teacher}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/dashboard"
                  className="px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-semibold rounded-lg hover:from-accent-hover hover:to-accent-secondary-hover transition-all text-center"
                >
                  Go to Dashboard
                </Link>
                <button
                  onClick={() => {
                    setSuccess(null)
                    setJoinCode('')
                  }}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Join Another Class
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🏫</div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Join a Classroom
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Enter the code your teacher shared with you
                </p>
              </div>

              <form onSubmit={handleJoin} className="space-y-4">
                <div>
                  <label htmlFor="joinCode" className="sr-only">
                    Class Code
                  </label>
                  <input
                    id="joinCode"
                    type="text"
                    value={joinCode}
                    onChange={(e) => {
                      setJoinCode(e.target.value.toUpperCase())
                      setError('')
                    }}
                    placeholder="Enter class code (e.g. ABC123)"
                    maxLength={10}
                    className="w-full text-center text-2xl font-mono tracking-widest px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    autoFocus
                    autoComplete="off"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-700 dark:text-red-300 text-center">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || joinCode.trim().length === 0}
                  className="w-full py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-semibold rounded-xl hover:from-accent-hover hover:to-accent-secondary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all text-lg"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      Joining...
                    </span>
                  ) : (
                    'Join Class'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function JoinClassPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent" />
      </div>
    }>
      <JoinClassContent />
    </Suspense>
  )
}
