'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface PlanAccess {
  canAccess: boolean
  loading: boolean
  used: number
  limit: number
}

/**
 * Hook for the diagnostic results study-plan gate. Defaults to NOT-accessible
 * while loading so a locked user never sees the plan flash before the check
 * resolves. Pair with DiagnosticPlanPaywall:
 *   {recommendedTopics.length > 0 && planAccess.canAccess && ( <plan/> )}
 *   {recommendedTopics.length > 0 && !planAccess.loading && !planAccess.canAccess && <DiagnosticPlanPaywall/>}
 */
export function useDiagnosticPlanAccess(): PlanAccess {
  const [state, setState] = useState<PlanAccess>({ canAccess: false, loading: true, used: 0, limit: 1 })
  useEffect(() => {
    let active = true
    fetch('/api/diagnostics/plan-access')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!active) return
        if (d) setState({ canAccess: !!d.canAccess, loading: false, used: d.used ?? 0, limit: d.limit ?? 1 })
        else setState((s) => ({ ...s, canAccess: true, loading: false })) // fail open
      })
      .catch(() => {
        if (active) setState((s) => ({ ...s, canAccess: true, loading: false })) // fail open
      })
    return () => {
      active = false
    }
  }, [])
  return state
}

/** Paywall shown in place of the study plan once a free user is past their free diagnostic. */
export function DiagnosticPlanPaywall() {
  return (
    <div className="mb-8 rounded-2xl border-2 border-accent-muted bg-gradient-to-br from-accent-subtle to-blue-50 p-6 text-center dark:border-accent-hover dark:from-accent-light/20 dark:to-blue-900/20">
      <span className="text-4xl">🔒</span>
      <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
        Your personalized study plan is a Premium feature
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-gray-600 dark:text-gray-400">
        You&apos;ve used your free diagnostic study plan. Upgrade to Premium for unlimited diagnostics,
        personalized study plans, and targeted exercises across every subject.
      </p>
      <Link
        href="/pricing"
        className="mt-5 inline-flex rounded-lg bg-gradient-to-r from-accent to-accent-secondary px-6 py-2.5 font-semibold text-white transition hover:from-accent-hover hover:to-accent-secondary-hover"
      >
        Upgrade to Premium
      </Link>
    </div>
  )
}
