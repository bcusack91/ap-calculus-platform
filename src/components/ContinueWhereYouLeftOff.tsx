'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface RecentTopic {
  topicSlug: string
  topicTitle: string
  courseName: string
  lastPart: number
  totalParts: number
  masteryLevel: number
  lastAccessed: string
}

export default function ContinueWhereYouLeftOff() {
  const [recent, setRecent] = useState<RecentTopic | null>(null)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    async function fetchRecent() {
      try {
        const res = await fetch('/api/dashboard/continue')
        if (res.ok) {
          const data = await res.json()
          if (data.topic) setRecent(data.topic)
        }
      } catch { /* silent */ }
    }
    fetchRecent()
  }, [])

  if (!recent || dismissed) return null

  const progressPct = Math.round((recent.lastPart / recent.totalParts) * 100)

  return (
    <div className="mb-6 relative overflow-hidden rounded-xl border border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-5">
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        aria-label="Dismiss"
      >
        ✕
      </button>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center text-2xl">
          📚
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Continue where you left off</p>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">{recent.topicTitle}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{recent.courseName} · Part {recent.lastPart} of {recent.totalParts}</p>
          <div className="mt-2 w-full max-w-xs bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-purple-600 rounded-full h-2 transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
        <Link
          href={`/topics/${recent.topicSlug}?part=${recent.lastPart}`}
          className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors whitespace-nowrap"
        >
          Resume →
        </Link>
      </div>
    </div>
  )
}
