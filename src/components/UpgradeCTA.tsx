'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

/**
 * UpgradeBanner — Contextual CTA for free users to upgrade to Premium.
 * Shows on content pages, after quiz completions, etc.
 */
export function UpgradeBanner({ feature, className = '' }: { feature?: string; className?: string }) {
  const { data: session } = useSession()
  if (!session || session.user?.role === 'PREMIUM' || session.user?.role === 'ADMIN') return null

  return (
    <div className={`bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-5 text-white ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg">⭐ Upgrade to Premium</h3>
          <p className="text-sm text-purple-100 mt-1">
            {feature
              ? `Unlock ${feature} and get access to all premium features.`
              : 'Get unlimited access to all courses, quizzes, and advanced analytics.'}
          </p>
        </div>
        <Link
          href="/pricing"
          className="px-5 py-2.5 bg-white text-purple-700 font-semibold rounded-lg hover:bg-purple-50 transition-colors flex-shrink-0"
        >
          View Plans
        </Link>
      </div>
    </div>
  )
}

/**
 * PremiumLock — Overlay for premium-only content.
 */
export function PremiumLock({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  const { data: session } = useSession()

  if (session?.user?.role === 'PREMIUM' || session?.user?.role === 'ADMIN') {
    return <>{children}</>
  }

  return (
    <div className={`relative ${className}`}>
      {children && <div className="blur-sm pointer-events-none select-none">{children}</div>}
      <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-xl">
        <div className="text-center p-6">
          <span className="text-4xl">🔒</span>
          <h3 className="font-bold text-gray-900 dark:text-white mt-2">Premium Content</h3>
          <p className="text-sm text-gray-500 mt-1 mb-3">Upgrade to access this feature</p>
          <Link
            href="/pricing"
            className="inline-flex px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 text-sm"
          >
            Upgrade Now
          </Link>
        </div>
      </div>
    </div>
  )
}

/**
 * InlineUpgradePrompt — Small inline CTA for use within content sections.
 */
export function InlineUpgradePrompt({ message }: { message?: string }) {
  const { data: session } = useSession()
  if (!session || session.user?.role === 'PREMIUM' || session.user?.role === 'ADMIN') return null

  return (
    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg">
      <span className="text-xl">⭐</span>
      <p className="text-sm text-purple-800 dark:text-purple-200 flex-1">
        {message || 'Want unlimited access? Upgrade to Premium!'}
      </p>
      <Link
        href="/pricing"
        className="text-sm font-semibold text-purple-700 dark:text-purple-300 hover:underline flex-shrink-0"
      >
        Upgrade →
      </Link>
    </div>
  )
}
