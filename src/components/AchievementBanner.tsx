'use client'

import { useState, useEffect } from 'react'

interface AchievementBannerProps {
  name: string
  description: string
  icon: string
  onDismiss: () => void
}

export default function AchievementBanner({ name, description, icon, onDismiss }: AchievementBannerProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onDismiss, 300)
    }, 5000)
    return () => clearTimeout(timer)
  }, [onDismiss])

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    }`}>
      <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white rounded-xl shadow-2xl px-6 py-4 flex items-center gap-4 min-w-[300px] max-w-md">
        <span className="text-3xl flex-shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-yellow-100 uppercase tracking-wider">Achievement Unlocked!</p>
          <p className="font-bold truncate">{name}</p>
          <p className="text-sm text-yellow-100 truncate">{description}</p>
        </div>
        <button onClick={onDismiss} className="text-yellow-200 hover:text-white ml-2" aria-label="Dismiss">
          ✕
        </button>
      </div>
    </div>
  )
}
