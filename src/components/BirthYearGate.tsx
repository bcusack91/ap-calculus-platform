'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'

/**
 * Blocking age screen for authenticated users who have no recorded birth year.
 *
 * The credential signup flow already collects a birth year, but Google (OAuth)
 * sign-ups and legacy accounts created before the age screen existed have
 * `birthYear = null`. For COPPA child-directed treatment we must know the age, so
 * this gate asks once — non-dismissably — before the account can use the app.
 * Renders nothing for signed-out users or anyone who already has a birth year.
 */
export default function BirthYearGate() {
  const { data: session, status, update } = useSession()
  const [birthYear, setBirthYear] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  if (status !== 'authenticated') return null
  if (session?.user?.birthYear != null) return null

  const thisYear = new Date().getFullYear()

  const submit = async () => {
    setError('')
    const yr = Number(birthYear)
    if (!birthYear || !Number.isFinite(yr) || yr < 1900 || yr > thisYear) {
      setError('Please enter your birth year.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/user/birth-year', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ birthYear: yr }),
      })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        setError(d.error || 'Something went wrong. Please try again.')
        setSubmitting(false)
        return
      }
      // Apply child-directed treatment immediately for the current session
      // (the API also sets this cookie server-side).
      if (thisYear - yr < 13) {
        document.cookie = `mondo_u13=1; max-age=${60 * 60 * 24 * 365}; path=/; samesite=lax`
      }
      // Refresh the session so birthYear is populated and this gate unmounts.
      await update()
    } catch {
      setError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Confirm your birth year"
    >
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
        <div className="text-4xl mb-3 text-center">🎂</div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">One quick thing</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
          To keep younger learners safe, please tell us your birth year. This lets us limit ads and tracking
          for students under&nbsp;13.
        </p>
        <label htmlFor="gate-birth-year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Birth Year
        </label>
        <input
          id="gate-birth-year"
          type="number"
          inputMode="numeric"
          min={1900}
          max={thisYear}
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') submit() }}
          autoFocus
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          placeholder="e.g. 2012"
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
        <button
          onClick={submit}
          disabled={submitting}
          className="mt-5 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Saving…' : 'Continue'}
        </button>
      </div>
    </div>
  )
}
