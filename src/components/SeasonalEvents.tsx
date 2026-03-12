'use client'

import { useState } from 'react'

/**
 * #180: Seasonal Events / Tournaments
 * Displays current seasonal events and upcoming tournaments
 */

interface SeasonalEvent {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  type: 'tournament' | 'event' | 'challenge'
  subject?: string
  xpMultiplier: number
  icon: string
  color: string
  prizes: string[]
}

const SEASONAL_EVENTS: SeasonalEvent[] = [
  {
    id: 'spring-calc-championship',
    title: 'Spring Calculus Championship',
    description: 'Compete in the ultimate calculus showdown! Top scorers earn exclusive badges and 3x XP.',
    startDate: '2025-03-15',
    endDate: '2025-04-15',
    type: 'tournament',
    subject: 'AP Calculus',
    xpMultiplier: 3,
    icon: '🌸',
    color: 'from-pink-500 to-rose-500',
    prizes: ['Gold Badge', '5000 Bonus XP', 'Champion Title'],
  },
  {
    id: 'summer-study-sprint',
    title: 'Summer Study Sprint',
    description: 'Complete 100 problems across any subject during summer. All activities earn 2x XP!',
    startDate: '2025-06-01',
    endDate: '2025-08-31',
    type: 'event',
    xpMultiplier: 2,
    icon: '☀️',
    color: 'from-yellow-500 to-orange-500',
    prizes: ['Summer Scholar Badge', '2x XP All Summer', 'Exclusive Title'],
  },
  {
    id: 'fall-ap-prep-marathon',
    title: 'Fall AP Prep Marathon',
    description: 'Prepare for AP exams with daily challenges. Complete all 30 days for maximum rewards.',
    startDate: '2025-09-01',
    endDate: '2025-09-30',
    type: 'challenge',
    xpMultiplier: 2,
    icon: '🍂',
    color: 'from-amber-500 to-red-500',
    prizes: ['Marathon Runner Badge', '3000 Bonus XP', '30-Day Streak Title'],
  },
  {
    id: 'winter-brain-freeze',
    title: 'Winter Brain Freeze',
    description: 'Speed-round tournament — answer as many questions as possible in 5 minutes!',
    startDate: '2025-12-15',
    endDate: '2026-01-15',
    type: 'tournament',
    xpMultiplier: 3,
    icon: '❄️',
    color: 'from-blue-400 to-cyan-500',
    prizes: ['Ice Crown Badge', '4000 Bonus XP', 'Speed Demon Title'],
  },
]

function getEventStatus(start: string, end: string): 'upcoming' | 'active' | 'ended' {
  const now = new Date()
  const s = new Date(start)
  const e = new Date(end)
  if (now < s) return 'upcoming'
  if (now > e) return 'ended'
  return 'active'
}

function daysUntil(date: string): number {
  return Math.max(0, Math.ceil((new Date(date).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
}

export function SeasonalEvents() {
  const [selectedEvent, setSelectedEvent] = useState<SeasonalEvent | null>(null)

  const sortedEvents = [...SEASONAL_EVENTS].sort((a, b) => {
    const statusOrder = { active: 0, upcoming: 1, ended: 2 }
    return statusOrder[getEventStatus(a.startDate, a.endDate)] - statusOrder[getEventStatus(b.startDate, b.endDate)]
  })

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">🏟️ Events & Tournaments</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Compete in seasonal events for bonus XP and exclusive rewards</p>

      <div className="space-y-3">
        {sortedEvents.map(event => {
          const status = getEventStatus(event.startDate, event.endDate)
          return (
            <button
              key={event.id}
              onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
              className="w-full text-left p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{event.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{event.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{event.xpMultiplier}x XP · {event.type}</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  status === 'active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  status === 'upcoming' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                  'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                }`}>
                  {status === 'active' ? 'LIVE' : status === 'upcoming' ? `In ${daysUntil(event.startDate)} days` : 'Ended'}
                </span>
              </div>

              {selectedEvent?.id === event.id && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{event.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {event.prizes.map((prize, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full">
                        🏅 {prize}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-gray-400">
                    {new Date(event.startDate).toLocaleDateString()} — {new Date(event.endDate).toLocaleDateString()}
                  </p>
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
