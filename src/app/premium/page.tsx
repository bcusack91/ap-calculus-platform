import Link from 'next/link'
import type { Metadata } from 'next'
import { PREMIUM_BENEFITS, PREMIUM_PRICING } from '@/lib/premium'

export const metadata: Metadata = {
  title: 'Study Mondo Premium — Unlimited AI Tutor & Advanced Analytics',
  description:
    'Upgrade to Premium for unlimited AI tutor explanations, advanced performance analytics, and priority support.',
  alternates: { canonical: 'https://www.studymondo.com/premium' },
}

const BENEFIT_ICONS = ['🤖', '📊', '💬']

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Hero */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-1.5 text-sm font-semibold text-accent-hover dark:bg-accent-light/40 dark:text-accent-muted">
            ⭐ Study Mondo Premium
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-600 to-cyan-600">
            Go further with Premium
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            The free plan covers a huge amount — courses, lessons, diagnostics, and practice. Premium
            adds the power-ups serious students want: unlimited AI tutoring, advanced analytics, and
            priority support.
          </p>

          {/* Benefits — sourced from src/lib/premium.ts so this matches what's actually gated */}
          <div className="mx-auto mt-12 grid max-w-2xl gap-6 text-left sm:grid-cols-2">
            {PREMIUM_BENEFITS.map((benefit, i) => (
              <div
                key={benefit}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <span className="flex-shrink-0 text-2xl">{BENEFIT_ICONS[i] ?? '⭐'}</span>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="mt-12">
            <p className="text-gray-600 dark:text-gray-400">
              <span className="text-4xl font-bold text-accent">${PREMIUM_PRICING.annual.toFixed(2)}</span>
              <span className="text-gray-500 dark:text-gray-400">/mo billed annually</span>
              <span className="ml-2 text-sm text-gray-400">(or ${PREMIUM_PRICING.monthly.toFixed(2)}/mo)</span>
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/pricing"
                className="rounded-lg bg-gradient-to-r from-accent to-accent-secondary px-8 py-3 font-bold text-white shadow-lg transition-all hover:from-accent-hover hover:to-accent-secondary-hover"
              >
                See Plans & Upgrade →
              </Link>
              <Link
                href="/"
                className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Keep Studying Free
              </Link>
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-lg text-sm text-gray-500 dark:text-gray-400">
            The free plan covers a lot. Premium adds the extras above for students who want to go
            further. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  )
}
