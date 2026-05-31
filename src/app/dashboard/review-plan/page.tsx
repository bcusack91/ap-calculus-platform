'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface WeakTopic {
  slug: string
  title: string
  courseName: string
  masteryLevel: number
  quizAvgScore: number
}

interface PlanItem extends WeakTopic {
  day: number
  priority: 'high' | 'medium' | 'low'
}

// Spread the weakest topics across a 5-day review schedule, weakest first.
const PLAN_DAYS = 5

function buildPlan(topics: WeakTopic[]): PlanItem[] {
  const sorted = [...topics].sort((a, b) => a.masteryLevel - b.masteryLevel)
  return sorted.map((t, i) => ({
    ...t,
    day: (i % PLAN_DAYS) + 1,
    priority: t.masteryLevel < 25 ? 'high' : t.masteryLevel < 40 ? 'medium' : 'low',
  }))
}

const PRIORITY_STYLES: Record<PlanItem['priority'], { badge: string; label: string }> = {
  high: { badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300', label: 'High priority' },
  medium: { badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300', label: 'Medium priority' },
  low: { badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300', label: 'Brush up' },
}

export default function ReviewPlanPage() {
  const { status } = useSession()
  const router = useRouter()
  const [topics, setTopics] = useState<WeakTopic[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/dashboard/review-plan')
      return
    }
    if (status !== 'authenticated') return

    let cancelled = false
    async function loadTopics() {
      try {
        const res = await fetch('/api/dashboard/weak-topics')
        if (res.ok) {
          const data = await res.json()
          if (!cancelled) setTopics(data.topics ?? [])
        }
      } catch { /* silent */ }
      if (!cancelled) setLoading(false)
    }
    loadTopics()

    return () => { cancelled = true }
  }, [status, router])

  const plan = buildPlan(topics)
  const days = Array.from({ length: PLAN_DAYS }, (_, i) => i + 1).filter(d => plan.some(p => p.day === d))

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 hover:underline mb-6"
        >
          ← Back to Dashboard
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
            Your{' '}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Review Plan
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            A {PLAN_DAYS}-day schedule built from the topics where your mastery is lowest. Tackle the
            weakest topics first, one short session at a time.
          </p>
        </div>

        {loading ? (
          <div className="space-y-4 animate-pulse">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-24 bg-gray-100 dark:bg-gray-800 rounded-xl" />
            ))}
          </div>
        ) : plan.length === 0 ? (
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 sm:p-12">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">No weak topics right now</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Every topic you&apos;ve started is at 50%+ mastery. Keep up the great work — start a new
              lesson or sharpen your skills in competitive mode.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/topics"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:shadow-lg transition"
              >
                Browse Topics
              </Link>
              <Link
                href="/competitive"
                className="px-6 py-3 rounded-xl border-2 border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-400 font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition"
              >
                Competitive Mode
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {days.map(day => (
              <div key={day}>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-purple-600 text-white text-sm font-bold">
                    {day}
                  </span>
                  Day {day}
                </h2>
                <div className="space-y-3">
                  {plan
                    .filter(p => p.day === day)
                    .map(topic => {
                      const styles = PRIORITY_STYLES[topic.priority]
                      return (
                        <div
                          key={topic.slug}
                          className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm"
                        >
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="min-w-0">
                              <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                                {topic.title}
                              </h3>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {topic.courseName} · {topic.masteryLevel}% mastery · Avg quiz: {topic.quizAvgScore}%
                              </p>
                            </div>
                            <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold ${styles.badge}`}>
                              {styles.label}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-3">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-indigo-500 h-1.5 rounded-full"
                              style={{ width: `${Math.min(100, Math.max(2, topic.masteryLevel))}%` }}
                            />
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Link
                              href={`/topics/${topic.slug}`}
                              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition"
                            >
                              Study Lesson
                            </Link>
                            <Link
                              href={`/topics/${topic.slug}/interactive`}
                              className="px-4 py-2 rounded-lg border border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-400 text-sm font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition"
                            >
                              Interactive Practice
                            </Link>
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
