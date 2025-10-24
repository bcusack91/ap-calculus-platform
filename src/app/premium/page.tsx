'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { PLANS } from '@/lib/stripe'
import Link from 'next/link'

export default function PremiumPage() {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const isPremium = session?.user?.role === 'PREMIUM'

  const handleCheckout = async () => {
    if (!session) {
      window.location.href = '/api/auth/signin?callbackUrl=/premium'
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
      })
      const { url } = await response.json()
      
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            {isPremium ? 'You\'re a Premium Member! 🎉' : 'Upgrade to Premium'}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isPremium 
              ? 'Enjoy all the premium features and ad-free learning experience'
              : 'Unlock advanced features and accelerate your calculus mastery'
            }
          </p>
        </div>

        {/* Pricing Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Free Plan */}
          <div className="rounded-lg border p-8">
            <h2 className="text-2xl font-bold mb-2">Free</h2>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground">/forever</span>
            </div>
            <ul className="space-y-3 mb-8">
              {PLANS.FREE.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/topics"
              className="block w-full text-center rounded-md border-2 border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
            >
              Get Started Free
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="rounded-lg border-2 border-purple-500 p-8 relative bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Premium</h2>
            <div className="mb-6">
              <span className="text-4xl font-bold">${PLANS.PREMIUM.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {PLANS.PREMIUM.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            {isPremium ? (
              <div className="w-full text-center rounded-md bg-purple-600 px-6 py-3 font-semibold text-white">
                ✓ Active Subscription
              </div>
            ) : (
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full rounded-md bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Loading...' : 'Upgrade to Premium'}
              </button>
            )}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Feature Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <span className="text-3xl">🎥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
              <p className="text-muted-foreground">
                Watch comprehensive video explanations for every topic with step-by-step walkthroughs
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Spaced Repetition</h3>
              <p className="text-muted-foreground">
                Anki-style flashcard system that adapts to your memory, ensuring you never forget
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
              <p className="text-muted-foreground">
                Take diagnostic tests and get personalized learning paths based on your knowledge gaps
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="rounded-lg border p-6">
              <summary className="cursor-pointer font-semibold">
                Can I cancel my subscription anytime?
              </summary>
              <p className="mt-2 text-muted-foreground">
                Yes! You can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
              </p>
            </details>
            
            <details className="rounded-lg border p-6">
              <summary className="cursor-pointer font-semibold">
                What payment methods do you accept?
              </summary>
              <p className="mt-2 text-muted-foreground">
                We accept all major credit cards through our secure Stripe payment processor.
              </p>
            </details>
            
            <details className="rounded-lg border p-6">
              <summary className="cursor-pointer font-semibold">
                Is there a student discount?
              </summary>
              <p className="mt-2 text-muted-foreground">
                We're working on student discount programs. Check back soon or contact us for more information.
              </p>
            </details>
            
            <details className="rounded-lg border p-6">
              <summary className="cursor-pointer font-semibold">
                What happens to my progress if I downgrade?
              </summary>
              <p className="mt-2 text-muted-foreground">
                Your progress data is saved! If you upgrade again, you'll pick up right where you left off.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}
