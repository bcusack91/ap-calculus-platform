'use client'

import { useEffect, useState } from 'react'

interface SiteStats {
  students: number
  lessonsStudied: number
  flashcardsReviewed: number
  matchesPlayed: number
  courses: number
  topics: number
}

function formatNumber(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K`
  return n.toLocaleString()
}

export default function DynamicStats() {
  const [stats, setStats] = useState<SiteStats | null>(null)

  useEffect(() => {
    fetch('/api/stats')
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {})
  }, [])

  if (!stats || (stats.students === 0 && stats.lessonsStudied === 0)) {
    // Fallback static display
    return (
      <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
        <div>
          <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">24</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Courses</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">700+</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Topics</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">100%</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Free</div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
      <div>
        <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">{formatNumber(stats.students)}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">Students</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">{formatNumber(stats.lessonsStudied)}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">Lessons Studied</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-green-700 dark:text-green-400">{formatNumber(stats.flashcardsReviewed)}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">Flashcard Reviews</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">{formatNumber(stats.matchesPlayed)}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">Matches Played</div>
      </div>
    </div>
  )
}
