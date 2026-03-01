'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface ReviewStats {
  total: number
  due: number
  new: number
  review: number
}

export default function FlashcardReviewDashboard() {
  const { status } = useSession()
  const [stats, setStats] = useState<ReviewStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'authenticated') {
      loadStats()
    }
  }, [status])

  async function loadStats() {
    try {
      const response = await fetch('/api/flashcards/review')
      if (!response.ok) throw new Error('Failed to load stats')
      
      const data = await response.json()
      setStats(data.stats)
    } catch (error) {
      console.error('Error loading stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="container py-10">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div className="container py-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Sign In Required</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Sign in to track your flashcard progress with spaced repetition.
          </p>
          <Link
            href="/auth/signin"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Flashcard Review</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Master your knowledge with Anki-style spaced repetition
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-900 mb-2">
              {stats?.total || 0}
            </div>
            <div className="text-sm font-semibold text-purple-700">Total Cards</div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-red-900 mb-2">
              {stats?.due || 0}
            </div>
            <div className="text-sm font-semibold text-red-700">Due Now</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-900 mb-2">
              {stats?.new || 0}
            </div>
            <div className="text-sm font-semibold text-green-700">New Cards</div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">
              {stats?.review || 0}
            </div>
            <div className="text-sm font-semibold text-blue-700">Review</div>
          </div>
        </div>

        {/* Action Buttons */}
        {stats && stats.due > 0 ? (
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300 rounded-xl p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                🎯 Ready to Review!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                You have {stats.due} card{stats.due === 1 ? '' : 's'} due for review
              </p>
              <Link
                href="/flashcards/review/start"
                className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold rounded-lg shadow-lg transition-all"
              >
                Start Review Session
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-xl p-8 mb-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                All Caught Up!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                No cards due right now. Keep learning to add more!
              </p>
            </div>
          </div>
        )}

        {/* How It Works */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">How Spaced Repetition Works</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Complete a Topic</h3>
                <p className="text-gray-600">
                  When you finish a topic or pass a check for understanding, flashcards are automatically generated from the key concepts, equations, and definitions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Review New Cards</h3>
                <p className="text-gray-600">
                  Study your flashcards and rate how well you remembered each one: Again, Hard, Good, or Easy.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Smart Scheduling</h3>
                <p className="text-gray-600">
                  The system uses the SM-2 algorithm (same as Anki) to schedule reviews at optimal intervals. Cards you find easy appear less often, while difficult cards come back sooner.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Build Long-Term Memory</h3>
                <p className="text-gray-600">
                  Review cards just before you&apos;re about to forget them. This strengthens memory and helps you retain information for exams and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-3">💡 Pro Tips</h3>
          <ul className="space-y-2 text-sm text-blue-900">
            <li>• Review daily for best results (even just 5-10 minutes)</li>
            <li>• Be honest with your ratings - it helps the algorithm work better</li>
            <li>• New cards appear immediately after completing topics</li>
            <li>• The more you use it, the smarter the scheduling becomes</li>
            <li>• Struggling with a card? Hit &quot;Again&quot; to see it sooner</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/flashcards"
            className="block p-6 bg-white border-2 border-gray-200 hover:border-purple-300 rounded-xl transition-all"
          >
            <div className="text-2xl mb-2">📚</div>
            <h3 className="font-bold text-gray-900 mb-1">Browse All Flashcards</h3>
            <p className="text-sm text-gray-600">View flashcards by topic</p>
          </Link>

          <Link
            href="/topics"
            className="block p-6 bg-white border-2 border-gray-200 hover:border-purple-300 rounded-xl transition-all"
          >
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-bold text-gray-900 mb-1">Continue Learning</h3>
            <p className="text-sm text-gray-600">Complete more topics to add flashcards</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
