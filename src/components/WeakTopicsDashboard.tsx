'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface WeakTopic {
  slug: string
  title: string
  courseName: string
  masteryLevel: number
  quizAvgScore: number
}

export default function WeakTopicsDashboard() {
  const [weakTopics, setWeakTopics] = useState<WeakTopic[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch_data() {
      try {
        const res = await fetch('/api/dashboard/weak-topics')
        if (res.ok) {
          const data = await res.json()
          setWeakTopics(data.topics ?? [])
        }
      } catch { /* silent */ }
      setLoading(false)
    }
    fetch_data()
  }, [])

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm animate-pulse">
        <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="space-y-3">
          {[1, 2, 3].map(i => <div key={i} className="h-12 bg-gray-100 dark:bg-gray-700 rounded" />)}
        </div>
      </div>
    )
  }

  if (weakTopics.length === 0) return null

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm">
      <h3 className="font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
        ⚠️ Topics Needing Review
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
        These topics have low mastery. Focus on them to improve.
      </p>
      <div className="space-y-3">
        {weakTopics.slice(0, 5).map(topic => (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className="flex items-center gap-3 p-3 rounded-lg border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 hover:border-red-200 dark:hover:border-red-800 transition-colors group"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center">
              <span className="text-sm font-bold text-red-600 dark:text-red-400">{topic.masteryLevel}%</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-accent dark:group-hover:text-accent-muted">
                {topic.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{topic.courseName} · Avg quiz: {topic.quizAvgScore}%</p>
            </div>
            <span className="text-gray-400 group-hover:text-accent">→</span>
          </Link>
        ))}
      </div>
      <Link
        href="/dashboard/review-plan"
        className="block mt-4 text-center text-sm font-medium text-accent dark:text-accent-muted hover:underline"
      >
        Create a review plan →
      </Link>
    </div>
  )
}
