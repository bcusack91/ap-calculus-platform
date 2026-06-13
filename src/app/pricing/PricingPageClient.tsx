'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { trackPremiumUpgradeClick } from '@/lib/analytics'
import { PREMIUM_BENEFITS, PREMIUM_PRICING, FREE_LIMITS } from '@/lib/premium'

// Free tier — these are genuinely free for everyone (the platform is ad-funded).
const FREE_FEATURES = [
  'All courses, topics, lessons & interactive content',
  'Diagnostics, practice tests, daily questions & study plans',
  'Example problems & worked solutions',
  'Flashcards, streaks, achievements & progress tracking',
  `${FREE_LIMITS.aiExplanationsPerDay} AI tutor explanations per day`,
  'Ad-supported experience',
]

// Premium — ONLY what is actually gated. Sourced from src/lib/premium.ts so this
// list can't drift from the real gates (it previously advertised free features).
const PREMIUM_FEATURES = ['Everything in Free, plus:', ...PREMIUM_BENEFITS]

export default function PricingPageClient() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  const [loading, setLoading] = useState(false)

  const monthlyPrice = PREMIUM_PRICING.monthly
  const annualPrice = PREMIUM_PRICING.annual
  const price = billing === 'monthly' ? monthlyPrice : annualPrice
  const isPremium = session?.user?.role === 'PREMIUM' || session?.user?.role === 'ADMIN'

  const handleUpgrade = async () => {
    trackPremiumUpgradeClick('pricing_page')
    if (status !== 'authenticated') {
      router.push('/auth/signin?callbackUrl=/pricing')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ billing }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      console.error('Checkout failed')
    } finally {
      setLoading(false)
    }
  }

  const handleManage = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/stripe/portal', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      console.error('Portal failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Study Mondo is free forever. Upgrade to Premium for the full experience.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billing === 'monthly'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billing === 'annual'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              Annual
              <span className="ml-1.5 text-xs bg-green-100 dark:bg-green-900/30 text-green-600 px-1.5 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free plan */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Free</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Everything you need to get started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$0</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            {!session ? (
              <button
                onClick={() => router.push('/auth/signup')}
                className="w-full py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Get Started — Free
              </button>
            ) : (
              <div className="w-full py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-center text-gray-500 dark:text-gray-400 font-medium">
                {isPremium ? 'Included' : 'Current Plan'}
              </div>
            )}
          </div>

          {/* Premium plan */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-purple-500 p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Premium</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">The complete study experience</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-purple-600">${price.toFixed(2)}</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
              {billing === 'annual' && (
                <p className="text-xs text-gray-400 mt-1">Billed annually (${(annualPrice * 12).toFixed(2)}/year)</p>
              )}
            </div>
            <ul className="space-y-3 mb-8">
              {PREMIUM_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            {isPremium ? (
              <button
                onClick={handleManage}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Manage Subscription'}
              </button>
            ) : (
              <button
                onClick={handleUpgrade}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Upgrade to Premium'}
              </button>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: 'Can I cancel anytime?', a: 'Yes! Cancel your subscription at any time from the customer portal. You\'ll keep Premium access until the end of your billing period.' },
              { q: 'Is the free plan really free?', a: 'Absolutely. Study Mondo\'s free plan includes access to all text explanations, example problems, and basic flashcards — forever. We fund it through ads.' },
              { q: 'Do you offer student discounts?', a: 'Our pricing is already student-friendly. We\'re also exploring institutional licensing for schools — contact us for details.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, debit cards, and Apple Pay / Google Pay through our payment processor Stripe.' },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{q}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
