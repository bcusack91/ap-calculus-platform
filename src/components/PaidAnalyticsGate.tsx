'use client'

import Link from 'next/link'
import { useEffectiveRole } from '@/lib/use-effective-role'

/**
 * Gates an "advanced analytics" widget behind a paid plan (premium students OR
 * teachers; honors the admin View-as override). Free users see an upgrade
 * prompt in place of the widget. Used on the dashboard to make the deeper
 * analytics a real, populated Premium perk.
 */
export function PaidAnalyticsGate({ children, label = 'Advanced analytics' }: { children: React.ReactNode; label?: string }) {
  const { isPaid } = useEffectiveRole()
  if (isPaid) return <>{children}</>

  return (
    <div className="rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-6 text-center dark:border-purple-700 dark:from-purple-900/20 dark:to-blue-900/20">
      <span className="text-3xl">📈</span>
      <h3 className="mt-2 font-bold text-gray-900 dark:text-white">{label} is a Premium feature</h3>
      <p className="mx-auto mt-1 max-w-md text-sm text-gray-600 dark:text-gray-400">
        Upgrade to unlock deeper performance insights — peer comparison, your full study heatmap, and trend analysis.
      </p>
      <Link
        href="/pricing"
        className="mt-4 inline-flex rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:from-purple-700 hover:to-blue-700"
      >
        Upgrade to Premium
      </Link>
    </div>
  )
}
