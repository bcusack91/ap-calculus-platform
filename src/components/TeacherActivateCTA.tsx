'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

/**
 * Self-serve teacher activation CTA for the /for-teachers page.
 * - Signed out: routes to signup (returns here afterward).
 * - Already a teacher/admin: links straight to the dashboard.
 * - Free user: educator attestation + one-click activation, then refreshes the
 *   session so the new TEACHER role reaches the middleware before navigating.
 */
export function TeacherActivateCTA() {
  const { data: session, status, update } = useSession()
  const router = useRouter()
  const [attest, setAttest] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (status === 'loading') {
    return <div className="h-12 w-64 mx-auto rounded-xl bg-white/20 animate-pulse" />
  }

  const role = session?.user?.role
  const isTeacher = role === 'TEACHER' || role === 'ADMIN'

  if (!session) {
    return (
      <Link
        href="/auth/signup?callbackUrl=/for-teachers"
        className="inline-block px-8 py-4 rounded-xl bg-white text-accent-hover font-bold text-lg shadow-lg hover:bg-white/90 transition-colors"
      >
        Sign up free to get started
      </Link>
    )
  }

  if (isTeacher) {
    return (
      <Link
        href="/teacher"
        className="inline-block px-8 py-4 rounded-xl bg-white text-accent-hover font-bold text-lg shadow-lg hover:bg-white/90 transition-colors"
      >
        Go to your teacher dashboard →
      </Link>
    )
  }

  const activate = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/teacher/activate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ attest: true }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Could not activate teacher features.')
        return
      }
      await update() // propagate the new TEACHER role into the session/JWT
      router.push('/teacher')
    } catch {
      setError('Could not activate teacher features. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="inline-flex flex-col items-center gap-3">
      <label className="flex items-center gap-2 text-sm text-white/90 cursor-pointer">
        <input
          type="checkbox"
          checked={attest}
          onChange={(e) => setAttest(e.target.checked)}
          className="h-4 w-4 rounded"
        />
        I confirm I’m a teacher or educator.
      </label>
      <button
        onClick={activate}
        disabled={!attest || loading}
        className="px-8 py-4 rounded-xl bg-white text-accent-hover font-bold text-lg shadow-lg hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Activating…' : 'Activate my free teacher account'}
      </button>
      {error && <p className="text-sm text-red-100 bg-red-600/40 rounded-lg px-3 py-2 max-w-sm">{error}</p>}
    </div>
  )
}
