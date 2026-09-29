'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

/**
 * Self-serve teacher activation CTA for the /for-teachers page.
 * - Signed out: routes to teacher-mode signup (creates + activates in one form).
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
  const [nextSteps, setNextSteps] = useState<{ label: string; detail: string; href: string }[]>([])

  if (status === 'loading') {
    return <div className="h-12 w-64 mx-auto rounded-xl bg-white/20 animate-pulse" />
  }

  const role = session?.user?.role
  const isTeacher = role === 'TEACHER' || role === 'ADMIN'

  if (!session) {
    // Teacher-mode signup creates the account AND turns on teacher features
    // in one form, then lands on the teacher dashboard.
    return (
      <div className="inline-flex flex-col items-center gap-2">
        <Link
          href="/auth/signup?role=teacher"
          className="inline-block px-8 py-4 rounded-xl bg-white text-accent-hover font-bold text-lg shadow-lg hover:bg-white/90 transition-colors"
        >
          Sign up free to get started
        </Link>
        <p className="text-sm text-white/85">
          Already have an account?{' '}
          <Link href="/auth/signin?callbackUrl=%2Ffor-teachers" className="font-semibold underline hover:text-white">
            Sign in
          </Link>{' '}
          and turn on teacher features here.
        </p>
      </div>
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
    setNextSteps([])
    try {
      const res = await fetch('/api/teacher/activate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ attest: true }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Could not activate teacher features.')
        if (Array.isArray(data.nextSteps)) setNextSteps(data.nextSteps)
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
      {error && nextSteps.length === 0 && (
        <p role="alert" className="text-sm text-red-100 bg-red-600/40 rounded-lg px-3 py-2 max-w-sm">{error}</p>
      )}
      {error && nextSteps.length > 0 && (
        // An explanation with a way forward (e.g. a Premium account), not a raw error.
        <div role="alert" className="max-w-md rounded-xl bg-white/95 p-4 text-left text-sm text-gray-800 shadow-lg dark:bg-gray-800 dark:text-gray-100">
          <p>{error}</p>
          <p className="mt-2 font-semibold">What you can do:</p>
          <ul className="mt-1 space-y-2">
            {nextSteps.map((step) => (
              <li key={step.href}>
                <a href={step.href} className="font-semibold text-accent hover:underline">{step.label}</a>
                <span className="block text-gray-600 dark:text-gray-300">{step.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
