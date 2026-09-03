'use client'

import { useEffect, useRef, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { pendingJoinUrl } from '@/lib/pending-join'

function VerifyEmailContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  // Pending class-join code embedded in the verification link by
  // /api/auth/verify-email (POST). Validated before use.
  const rawJoin = (searchParams.get('join') || '').toUpperCase()
  const joinFromLink = /^[A-Z0-9-]{4,10}$/.test(rawJoin) ? rawJoin : null
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')
  // Pending class-join intent persisted by /join-class before the auth or
  // verification detour, so a student who verifies mid-join is routed back to
  // finish joining instead of being dropped on the dashboard. Read alongside
  // the verification result (never during render — cookies don't exist in SSR).
  const [joinUrl, setJoinUrl] = useState<string | null>(null)

  // Held in a ref so the verification effect keeps `[token]` as its only
  // dependency. The token is single-use and deleted on success, so re-running
  // that effect would re-POST a dead token and report "Invalid or expired"
  // over a verification that actually worked.
  const { update } = useSession()
  const updateSession = useRef(update)
  useEffect(() => { updateSession.current = update }, [update])

  useEffect(() => {
    if (!token) {
      const timeoutId = setTimeout(() => {
        setStatus('error')
        setMessage('No verification token provided.')
      }, 0)
      return () => clearTimeout(timeoutId)
    }

    let isCancelled = false
    fetch(`/api/auth/verify-email?token=${token}`)
      .then((res) => res.json())
      .then(async (data) => {
        if (isCancelled) return
        if (data.error) {
          setStatus('error')
          setMessage(data.error)
          return
        }
        // The signed-in JWT still carries the pre-verification `emailVerified`
        // (null). The jwt callback only re-reads it from the database on an
        // explicit update() or after a five-minute throttle, so without this
        // the dashboard keeps showing "Verify your email address" immediately
        // after a SUCCESSFUL verification — which reads as failure and sends
        // people round the loop again.
        try {
          await updateSession.current()
        } catch {
          // Non-fatal: the banner still clears once the throttle lapses.
        }
        if (isCancelled) return
        // Cookie-persisted join intent (the emailed ?join= code is handled at
        // render so this effect keeps `[token]` as its only dependency).
        setJoinUrl(pendingJoinUrl())
        setStatus('success')
        setMessage(data.message)
      })
      .catch(() => {
        if (isCancelled) return
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      })

    return () => {
      isCancelled = true
    }
  }, [token])

  // Prefer the join code embedded in the emailed link (it survives opening
  // the email on another device); fall back to the local pending-join cookie.
  const effectiveJoinUrl = joinFromLink
    ? `/join-class?code=${encodeURIComponent(joinFromLink)}`
    : joinUrl

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-subtle to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl text-center">
        {status === 'loading' && (
          <>
            <div className="inline-block w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4" />
            <h1 className="text-2xl font-bold mb-2">Verifying Your Email...</h1>
            <p className="text-gray-600 dark:text-gray-400">Please wait a moment.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="text-5xl mb-4">✅</div>
            <h1 className="text-2xl font-bold mb-3">Email Verified!</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>
            {effectiveJoinUrl ? (
              <div className="flex flex-col items-center gap-3">
                <Link
                  href={effectiveJoinUrl}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-bold rounded-lg hover:from-accent-hover hover:to-accent-secondary-hover transition-all"
                >
                  Finish Joining Your Class →
                </Link>
                <Link
                  href="/dashboard"
                  className="text-sm text-accent hover:text-accent-hover font-semibold"
                >
                  Go to Dashboard instead
                </Link>
              </div>
            ) : (
              <Link
                href="/dashboard"
                className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-bold rounded-lg hover:from-accent-hover hover:to-accent-secondary-hover transition-all"
              >
                Go to Dashboard →
              </Link>
            )}
          </>
        )}

        {status === 'error' && (
          <>
            <div className="text-5xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold mb-3">Verification Failed</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>
            <Link
              href="/dashboard"
              className="text-accent hover:text-accent-hover font-semibold"
            >
              ← Go to Dashboard
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  )
}
