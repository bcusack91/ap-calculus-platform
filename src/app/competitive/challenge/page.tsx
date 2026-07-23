'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'

const SUBJECT_LABELS: Record<string, string> = {
  'ap-calculus-ab': 'AP Calculus AB',
  'ap-calculus-bc': 'AP Calculus BC',
  'ap-chemistry': 'AP Chemistry',
  'ap-biology': 'AP Biology',
  'ap-psychology': 'AP Psychology',
  'ap-physics-1': 'AP Physics 1',
  'ap-physics1': 'AP Physics 1',
  'ap-statistics': 'AP Statistics',
  'sat-math': 'SAT Math',
  'sat-reading': 'SAT Reading',
  'sat-punctuation-commas-semicolons': 'SAT Punctuation: Commas & Semicolons',
  'sat-punctuation': 'SAT Punctuation: All Marks',
  'act-math': 'ACT Math',
  'algebra-1': 'Algebra 1',
  'algebra': 'Algebra 1',
  'geometry': 'Geometry',
  'pre-calculus': 'Pre-Calculus',
  'precalc': 'Pre-Calculus',
  'derivatives': 'Derivatives',
  'limits': 'Limits',
  'integrals': 'Integrals',
}

function ChallengeContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { data: session, status } = useSession()
  const [accepting, setAccepting] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const subject = searchParams.get('s') || ''
  const questionCount = searchParams.get('q') || '10'
  const timeLimit = searchParams.get('t') || '300'
  const challengerName = searchParams.get('c') || 'A friend'

  const subjectLabel = SUBJECT_LABELS[subject] || subject

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/auth/signin?callbackUrl=${encodeURIComponent(window.location.href)}`)
    }
  }, [status, router])

  const acceptChallenge = async () => {
    if (accepting) return
    setAccepting(true)
    setError(null)

    try {
      const res = await fetch('/api/competitive/accept-challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Failed to accept challenge')
        setAccepting(false)
        return
      }

      setAccepted(true)

      // Redirect to competitive mode after a brief delay
      setTimeout(() => {
        router.push('/competitive')
      }, 2000)
    } catch {
      setError('Network error. Please try again.')
      setAccepting(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    )
  }

  if (!session) return null

  if (accepted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-accent-subtle to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            Challenge Accepted!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            <strong>{subjectLabel}</strong> is now permanently unlocked in Competitive Mode.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Redirecting to Competitive Mode...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-accent-subtle to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            You&apos;ve Been Challenged!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            <strong>{challengerName}</strong> wants to battle you!
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Subject</span>
            <span className="font-bold text-gray-900 dark:text-white">{subjectLabel}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Questions</span>
            <span className="font-bold text-gray-900 dark:text-white">{questionCount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Time Limit</span>
            <span className="font-bold text-gray-900 dark:text-white">
              {Math.floor(Number(timeLimit) / 60)} min
            </span>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-6">
          <p className="text-sm text-green-800 dark:text-green-300 text-center">
            🔓 Accepting this challenge will <strong>permanently unlock {subjectLabel}</strong> in Competitive Mode for you!
          </p>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
            <p className="text-sm text-red-700 dark:text-red-300 text-center">{error}</p>
          </div>
        )}

        <button
          onClick={acceptChallenge}
          disabled={accepting}
          className="w-full py-4 bg-gradient-to-r from-accent to-accent-secondary hover:from-accent-hover hover:to-accent-secondary-hover text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {accepting ? 'Accepting...' : 'Accept Challenge'}
        </button>

        <button
          onClick={() => router.push('/competitive')}
          className="w-full mt-3 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  )
}

export default function ChallengePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading challenge...</div>
      </div>
    }>
      <ChallengeContent />
    </Suspense>
  )
}
