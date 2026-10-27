'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { trackPremiumPurchase } from '@/lib/analytics'

function PremiumSuccess() {
  const router = useRouter()
  const { update } = useSession()
  const [refreshing, setRefreshing] = useState(true)
  const checkoutSessionId = useSearchParams().get('session_id')

  // Analytics `purchase` (GA4 key event): only for a Checkout redirect whose
  // session the server confirms is complete and this user's. A visit without
  // a session_id, or with one that is not, reports nothing; the once guard
  // (and GA4's transaction_id dedupe) drops a revisit of the same session.
  useEffect(() => {
    if (!checkoutSessionId) return
    let cancelled = false
    fetch(`/api/stripe/checkout/session?session_id=${encodeURIComponent(checkoutSessionId)}`, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { transactionId?: unknown; value?: unknown; currency?: unknown; plan?: unknown } | null) => {
        if (cancelled || !d || typeof d.transactionId !== 'string' || typeof d.value !== 'number') return
        trackPremiumPurchase({
          transactionId: d.transactionId,
          value: d.value,
          currency: typeof d.currency === 'string' ? d.currency : 'USD',
          plan: typeof d.plan === 'string' ? d.plan : 'premium',
        })
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [checkoutSessionId])

  // The Stripe webhook flips the user to PREMIUM server-side; force a JWT refresh
  // so the new role is reflected immediately instead of after the periodic
  // refresh window. Poll a few times to ride out webhook delivery latency.
  useEffect(() => {
    let cancelled = false
    let tries = 0
    async function refresh() {
      while (!cancelled && tries < 5) {
        tries++
        const updated = await update()
        if (cancelled) return
        if ((updated?.user as { role?: string } | undefined)?.role === 'PREMIUM') break
        await new Promise((r) => setTimeout(r, 1500))
      }
      if (!cancelled) {
        setRefreshing(false)
        router.refresh()
      }
    }
    refresh()
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-subtle to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent mb-3">
          Welcome to Premium!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your subscription is active. You now have unlimited AI tutoring, advanced analytics,
          and every Premium learning feature unlocked.
        </p>
        {refreshing && (
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">Activating your account…</p>
        )}
        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-bold rounded-lg hover:from-accent-hover hover:to-accent-secondary-hover transition-all shadow-lg"
          >
            Go to Dashboard
          </Link>
          <Link href="/" className="text-accent dark:text-accent-muted hover:underline text-sm">
            Back to home
          </Link>
        </div>
        <p className="mt-6 text-xs text-gray-400 dark:text-gray-500">
          A receipt has been emailed to you. Manage your subscription anytime from your account settings.
        </p>
      </div>
    </div>
  )
}

export default function PremiumSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <PremiumSuccess />
    </Suspense>
  )
}
