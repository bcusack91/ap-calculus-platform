'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

/**
 * Blocking age screen for authenticated users who have no recorded birth year.
 *
 * The credential signup flow already collects a birth year, but Google (OAuth)
 * sign-ups and legacy accounts created before the age screen existed have
 * `birthYear = null`. For COPPA child-directed treatment we must know the age, so
 * this gate asks once — non-dismissably — before the account can use the app.
 * Renders nothing for signed-out users or anyone who already has a birth year.
 *
 * "Already has a birth year" is decided by the database, not the session
 * token. The token carries a copy of the field, but the cookie holding it is
 * only rewritten by /api/auth/session — the update() below, or the client's
 * own session fetches — and that write can fail (rate limit, network) or be
 * overtaken by a stale response. Students who had given their year were
 * asked again on every full page load until the copy caught up. So when the
 * token says null, the gate checks the row first: if the year is there it
 * stays hidden and quietly refreshes the token; only a null row shows it.
 */
export type BirthYearCheck = 'pending' | 'known' | 'missing'

/** Whether to render the gate, from what the session and the row say. */
export function shouldShowBirthYearGate(input: {
  status: 'loading' | 'authenticated' | 'unauthenticated'
  tokenBirthYear: number | null | undefined
  dbCheck: BirthYearCheck
  saved: boolean
}): boolean {
  if (input.status !== 'authenticated') return false
  if (input.tokenBirthYear != null) return false
  if (input.saved) return false
  return input.dbCheck === 'missing'
}

export default function BirthYearGate() {
  const { data: session, status, update } = useSession()
  const [birthYear, setBirthYear] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(false)
  const [dbCheck, setDbCheck] = useState<BirthYearCheck>('pending')

  const tokenBirthYear = session?.user?.birthYear
  const needsCheck = status === 'authenticated' && tokenBirthYear == null && !saved

  useEffect(() => {
    if (!needsCheck) return
    let cancelled = false
    fetch('/api/user/birth-year', { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { birthYear?: number | null } | null) => {
        if (cancelled) return
        if (data && data.birthYear != null) {
          // The row is filled; the token is just behind. Heal it in the
          // background so the rest of the app (and the next page load) see it.
          setDbCheck('known')
          void update().catch(() => undefined)
        } else if (data) {
          setDbCheck('missing')
        }
        // A failed check (rate limit, offline) leaves 'pending': asking again
        // is the bug this guards against, and the next page load re-checks.
      })
      .catch(() => undefined)
    return () => {
      cancelled = true
    }
  }, [needsCheck, update])

  if (!shouldShowBirthYearGate({ status, tokenBirthYear, dbCheck, saved })) return null

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
      // The birth year is now persisted server-side, so dismiss the gate right
      // away (no dependence on the session round-trip), then refresh the session
      // in the background so birthYear propagates to the rest of the app. If
      // that refresh fails, the row still has the year and the check above
      // keeps the gate hidden on the next page.
      setSaved(true)
      void update().catch(() => undefined)
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
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          placeholder="e.g. 2012"
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
        <button
          onClick={submit}
          disabled={submitting}
          className="mt-5 w-full px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-bold rounded-lg hover:from-accent-hover hover:to-accent-secondary-hover transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Saving…' : 'Continue'}
        </button>
      </div>
    </div>
  )
}
