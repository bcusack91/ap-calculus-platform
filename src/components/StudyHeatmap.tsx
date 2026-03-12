'use client'

import { useState, useEffect, useMemo } from 'react'

/**
 * #189: Study Heatmap on Profile
 * GitHub-style contribution heatmap showing daily study activity
 */

interface StudyDay {
  date: string
  minutes: number
  problems: number
}

function generateSampleData(): StudyDay[] {
  const days: StudyDay[] = []
  const now = new Date()
  for (let i = 364; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().split('T')[0]
    // Simulate study activity
    const isWeekend = d.getDay() === 0 || d.getDay() === 6
    const rand = Math.random()
    let minutes = 0
    let problems = 0
    if (rand > 0.3) {
      minutes = Math.floor(Math.random() * (isWeekend ? 120 : 60)) + 5
      problems = Math.floor(minutes / 5) + Math.floor(Math.random() * 5)
    }
    days.push({ date: dateStr, minutes, problems })
  }
  return days
}

function getIntensity(minutes: number): number {
  if (minutes === 0) return 0
  if (minutes < 15) return 1
  if (minutes < 30) return 2
  if (minutes < 60) return 3
  return 4
}

const INTENSITY_COLORS = [
  'bg-gray-100 dark:bg-gray-800', // 0: no activity
  'bg-green-200 dark:bg-green-900', // 1: light
  'bg-green-400 dark:bg-green-700', // 2: medium
  'bg-green-600 dark:bg-green-500', // 3: heavy
  'bg-green-800 dark:bg-green-400', // 4: intense
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAYS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

export function StudyHeatmap({ data }: { data?: StudyDay[] }) {
  const [studyData, setStudyData] = useState<StudyDay[]>(data || [])
  const [hoveredDay, setHoveredDay] = useState<StudyDay | null>(null)

  useEffect(() => {
    if (!data) {
      // Load from localStorage or generate sample
      try {
        const stored = localStorage.getItem('studymondo_study_log')
        if (stored) {
          setStudyData(JSON.parse(stored))
        } else {
          setStudyData(generateSampleData())
        }
      } catch {
        setStudyData(generateSampleData())
      }
    }
  }, [data])

  const { weeks, totalMinutes, totalDays, currentStreak, longestStreak } = useMemo(() => {
    // Group into weeks (columns)
    const weeksArr: (StudyDay | null)[][] = []
    let currentWeek: (StudyDay | null)[] = []

    if (studyData.length > 0) {
      const firstDay = new Date(studyData[0].date).getDay()
      // Pad first week
      for (let i = 0; i < firstDay; i++) currentWeek.push(null)
    }

    for (const day of studyData) {
      currentWeek.push(day)
      if (currentWeek.length === 7) {
        weeksArr.push(currentWeek)
        currentWeek = []
      }
    }
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) currentWeek.push(null)
      weeksArr.push(currentWeek)
    }

    const totalMin = studyData.reduce((sum, d) => sum + d.minutes, 0)
    const activeDays = studyData.filter(d => d.minutes > 0).length

    // Calculate streaks
    let currStrk = 0
    let maxStrk = 0
    let tempStrk = 0
    for (let i = studyData.length - 1; i >= 0; i--) {
      if (studyData[i].minutes > 0) {
        tempStrk++
        if (i === studyData.length - 1 || (i < studyData.length - 1 && studyData[i+1].minutes > 0)) {
          currStrk = tempStrk
        }
      } else {
        if (i >= studyData.length - 2) currStrk = tempStrk
        maxStrk = Math.max(maxStrk, tempStrk)
        tempStrk = 0
      }
    }
    maxStrk = Math.max(maxStrk, tempStrk)

    return { weeks: weeksArr, totalMinutes: totalMin, totalDays: activeDays, currentStreak: currStrk, longestStreak: maxStrk }
  }, [studyData])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">📊 Study Activity</h3>
        <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span><strong className="text-gray-900 dark:text-white">{totalDays}</strong> active days</span>
          <span><strong className="text-gray-900 dark:text-white">{Math.round(totalMinutes / 60)}h</strong> total</span>
          <span>🔥 <strong className="text-gray-900 dark:text-white">{currentStreak}</strong> day streak</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex gap-0.5">
          {/* Day labels */}
          <div className="flex flex-col gap-0.5 mr-1">
            {DAYS.map((day, i) => (
              <div key={i} className="w-6 h-3 text-[10px] text-gray-400 leading-3">{day}</div>
            ))}
          </div>

          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-0.5">
              {week.map((day, di) => (
                <div
                  key={di}
                  className={`w-3 h-3 rounded-sm ${day ? INTENSITY_COLORS[getIntensity(day.minutes)] : 'bg-transparent'} cursor-pointer transition-all hover:ring-1 hover:ring-gray-400`}
                  onMouseEnter={() => day && setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Month labels */}
      <div className="ml-7 mt-1 flex text-[10px] text-gray-400">
        {MONTHS.map(m => (
          <span key={m} className="flex-1">{m}</span>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1 mt-3 justify-end text-[10px] text-gray-400">
        <span>Less</span>
        {INTENSITY_COLORS.map((color, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
        ))}
        <span>More</span>
      </div>

      {/* Tooltip */}
      {hoveredDay && (
        <div className="mt-2 text-xs text-gray-600 dark:text-gray-300 text-center">
          {new Date(hoveredDay.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}:
          <strong> {hoveredDay.minutes} min</strong> studied, <strong>{hoveredDay.problems}</strong> problems
        </div>
      )}

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
          <div className="text-lg font-bold text-gray-900 dark:text-white">{currentStreak}</div>
          <div className="text-[10px] text-gray-500 dark:text-gray-400">Current Streak</div>
        </div>
        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
          <div className="text-lg font-bold text-gray-900 dark:text-white">{longestStreak}</div>
          <div className="text-[10px] text-gray-500 dark:text-gray-400">Longest Streak</div>
        </div>
        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
          <div className="text-lg font-bold text-gray-900 dark:text-white">{totalDays > 0 ? Math.round(totalMinutes / totalDays) : 0}</div>
          <div className="text-[10px] text-gray-500 dark:text-gray-400">Avg Min/Day</div>
        </div>
      </div>
    </div>
  )
}
