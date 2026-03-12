'use client'

import { useState, useEffect } from 'react'

export default function ProgressComparison() {
  const [data, setData] = useState<{
    percentile: number
    streakPercentile: number
    userCompleted: number
  } | null>(null)

  useEffect(() => {
    async function fetchComparison() {
      try {
        const res = await fetch('/api/dashboard/progress-comparison')
        if (res.ok) setData(await res.json())
      } catch { /* silent */ }
    }
    fetchComparison()
  }, [])

  if (!data) return null

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-5 text-white">
      <h3 className="font-bold text-sm mb-3">📊 How You Compare</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-3xl font-bold">Top {100 - data.percentile}%</p>
          <p className="text-xs text-indigo-200">in topics completed</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">Top {100 - data.streakPercentile}%</p>
          <p className="text-xs text-indigo-200">in study streaks</p>
        </div>
      </div>
      <p className="text-xs text-indigo-200 text-center mt-3">
        You&apos;ve completed {data.userCompleted} topics. Keep going! 🚀
      </p>
    </div>
  )
}
