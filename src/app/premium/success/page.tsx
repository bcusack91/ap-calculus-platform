'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

function PremiumSuccess() {
  const router = useRouter()
  const { update } = useSession()
  const [refreshing, setRefreshing] = useState(true)

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
          Welcome to Premium!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your subscription is active. You now have an ad-free experience, advanced analytics,
          spaced-repetition flashcards, and every premium learning feature unlocked.
        </p>
        {refreshing && (
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">Activating your account…</p>
        )}
        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
          >
            Go to Dashboard
          </Link>
          <Link href="/" className="text-purple-600 dark:text-purple-400 hover:underline text-sm">
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
