'use client'

import { useState, useEffect } from 'react'

export default function StreakNotification() {
  const [show, setShow] = useState(false)
  const [streak, setStreak] = useState(0)
  const [type, setType] = useState<'at-risk' | 'milestone' | null>(null)

  useEffect(() => {
    async function checkStreak() {
      try {
        const res = await fetch('/api/streak/status')
        if (!res.ok) return
        const data = await res.json()

        if (data.atRisk && data.currentStreak > 0) {
          setStreak(data.currentStreak)
          setType('at-risk')
          setShow(true)
        } else if (data.milestone) {
          setStreak(data.currentStreak)
          setType('milestone')
          setShow(true)
        }
      } catch { /* silent */ }
    }

    // Check after 2 seconds to not block render
    const timer = setTimeout(checkStreak, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!show || !type) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-4 max-w-sm">
      <div className={`rounded-xl shadow-lg border p-4 ${
        type === 'at-risk'
          ? 'bg-orange-50 border-orange-200 dark:bg-orange-900/30 dark:border-orange-700'
          : 'bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-700'
      }`}>
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">
            {type === 'at-risk' ? '🔥' : '🎉'}
          </span>
          <div className="flex-1">
            <h4 className={`font-bold text-sm ${
              type === 'at-risk'
                ? 'text-orange-900 dark:text-orange-200'
                : 'text-green-900 dark:text-green-200'
            }`}>
              {type === 'at-risk'
                ? `Don't lose your ${streak}-day streak!`
                : `${streak}-day streak milestone! 🏆`
              }
            </h4>
            <p className={`text-xs mt-1 ${
              type === 'at-risk'
                ? 'text-orange-700 dark:text-orange-300'
                : 'text-green-700 dark:text-green-300'
            }`}>
              {type === 'at-risk'
                ? 'Complete at least one activity today to keep your streak alive.'
                : 'Amazing dedication! Keep studying to reach even higher milestones.'
              }
            </p>
          </div>
          <button
            onClick={() => setShow(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-sm"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
