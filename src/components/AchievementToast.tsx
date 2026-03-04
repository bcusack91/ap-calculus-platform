'use client'

import { useEffect, useState } from 'react'

interface AchievementToastProps {
  achievements: string[]
  onDismiss: () => void
  autoDismissMs?: number
}

export default function AchievementToast({
  achievements,
  onDismiss,
  autoDismissMs = 6000,
}: AchievementToastProps) {
  const [visible, setVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < achievements.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      } else {
        setVisible(false)
        setTimeout(onDismiss, 300) // wait for fade out
      }
    }, autoDismissMs)

    return () => clearTimeout(timer)
  }, [currentIndex, achievements.length, autoDismissMs, onDismiss])

  if (achievements.length === 0) return null

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-gray-900 px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[280px] max-w-sm border border-yellow-300">
        <div className="text-3xl animate-bounce">🏆</div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold uppercase tracking-wider opacity-80">Achievement Unlocked!</p>
          <p className="font-bold text-sm truncate">{achievements[currentIndex]}</p>
          {achievements.length > 1 && (
            <p className="text-xs opacity-70 mt-0.5">{currentIndex + 1} of {achievements.length}</p>
          )}
        </div>
        <button
          onClick={() => { setVisible(false); setTimeout(onDismiss, 300) }}
          className="text-gray-700 hover:text-gray-900 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
          aria-label="Dismiss achievement notification"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
