'use client'

import { useState } from 'react'

interface Competition {
  id: string
  title: string
  topicSlug: string
  gameMode: string
  status: string
  scheduledAt: string
  endsAt: string
  duration: number
  _count?: { participants: number }
}

interface CompetitionCalendarProps {
  competitions: Competition[]
  onCompetitionClick?: (competition: Competition) => void
  className?: string
}

export default function CompetitionCalendar({
  competitions,
  onCompetitionClick,
  className = '',
}: CompetitionCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

  const competitionsByDay = (() => {
    const map: Record<string, Competition[]> = {}
    for (const c of competitions) {
      const d = new Date(c.scheduledAt)
      if (d.getFullYear() === year && d.getMonth() === month) {
        const key = d.getDate().toString()
        if (!map[key]) map[key] = []
        map[key].push(c)
      }
    }
    return map
  })()

  const prev = () => setCurrentDate(new Date(year, month - 1, 1))
  const next = () => setCurrentDate(new Date(year, month + 1, 1))
  const today = new Date()
  const isToday = (day: number) =>
    today.getFullYear() === year && today.getMonth() === month && today.getDate() === day

  const statusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'bg-green-500'
      case 'COMPLETED': return 'bg-gray-400'
      case 'SCHEDULED': return 'bg-blue-500'
      default: return 'bg-purple-500'
    }
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <button onClick={prev} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" aria-label="Previous month">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {monthNames[month]} {year}
        </h3>
        <button onClick={next} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" aria-label="Next month">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className="py-2">{d}</div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7">
        {/* Empty cells for days before the 1st */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="min-h-[80px] border-b border-r border-gray-100 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-900/30" />
        ))}

        {/* Days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const dayComps = competitionsByDay[day.toString()] || []
          return (
            <div
              key={day}
              className={`min-h-[80px] border-b border-r border-gray-100 dark:border-gray-700/50 p-1 ${
                isToday(day) ? 'bg-purple-50 dark:bg-purple-900/20' : ''
              }`}
            >
              <div className={`text-xs font-medium mb-1 px-1 ${
                isToday(day) ? 'text-purple-600 dark:text-purple-400 font-bold' : 'text-gray-600 dark:text-gray-400'
              }`}>
                {day}
              </div>
              <div className="space-y-0.5">
                {dayComps.slice(0, 2).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => onCompetitionClick?.(c)}
                    className="w-full text-left truncate text-[10px] font-medium px-1.5 py-0.5 rounded text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: '' }}
                    title={`${c.title} (${new Date(c.scheduledAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`}
                  >
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${statusColor(c.status)} mr-1`} />
                    {c.title}
                  </button>
                ))}
                {dayComps.length > 2 && (
                  <div className="text-[10px] text-gray-500 px-1">+{dayComps.length - 2} more</div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 px-4 py-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" /> Scheduled</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> Active</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-400" /> Completed</span>
      </div>
    </div>
  )
}
