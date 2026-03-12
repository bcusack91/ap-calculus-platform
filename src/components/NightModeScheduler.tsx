'use client'

import { useState, useEffect } from 'react'

interface NightScheduleProps {
  onScheduleChange?: (enabled: boolean, start: string, end: string) => void
}

export default function NightModeScheduler({ onScheduleChange }: NightScheduleProps) {
  const [enabled, setEnabled] = useState(false)
  const [startTime, setStartTime] = useState('20:00')
  const [endTime, setEndTime] = useState('07:00')

  useEffect(() => {
    const saved = localStorage.getItem('night-mode-schedule')
    if (saved) {
      try {
        const { enabled: e, start, end } = JSON.parse(saved)
        setEnabled(e)
        setStartTime(start)
        setEndTime(end)
      } catch { /* silent */ }
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    function checkTime() {
      const now = new Date()
      const [sh, sm] = startTime.split(':').map(Number)
      const [eh, em] = endTime.split(':').map(Number)
      const currentMins = now.getHours() * 60 + now.getMinutes()
      const startMins = sh * 60 + sm
      const endMins = eh * 60 + em

      let isNight: boolean
      if (startMins > endMins) {
        // Overnight schedule (e.g., 20:00 - 07:00)
        isNight = currentMins >= startMins || currentMins < endMins
      } else {
        isNight = currentMins >= startMins && currentMins < endMins
      }

      const isDark = document.documentElement.classList.contains('dark')
      if (isNight && !isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else if (!isNight && isDark && localStorage.getItem('night-mode-was-auto') === 'true') {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }

      if (isNight) localStorage.setItem('night-mode-was-auto', 'true')
    }

    checkTime()
    const interval = setInterval(checkTime, 60000)
    return () => clearInterval(interval)
  }, [enabled, startTime, endTime])

  const save = (newEnabled: boolean, newStart: string, newEnd: string) => {
    setEnabled(newEnabled)
    setStartTime(newStart)
    setEndTime(newEnd)
    localStorage.setItem('night-mode-schedule', JSON.stringify({
      enabled: newEnabled, start: newStart, end: newEnd,
    }))
    onScheduleChange?.(newEnabled, newStart, newEnd)
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          🌙 Auto Night Mode
        </label>
        <button
          onClick={() => save(!enabled, startTime, endTime)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            enabled ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
          }`}
          role="switch"
          aria-checked={enabled}
        >
          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`} />
        </button>
      </div>
      {enabled && (
        <div className="flex items-center gap-2 text-sm">
          <label className="text-gray-500 dark:text-gray-400">From</label>
          <input
            type="time"
            value={startTime}
            onChange={e => save(enabled, e.target.value, endTime)}
            className="px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm"
          />
          <label className="text-gray-500 dark:text-gray-400">to</label>
          <input
            type="time"
            value={endTime}
            onChange={e => save(enabled, startTime, e.target.value)}
            className="px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm"
          />
        </div>
      )}
    </div>
  )
}
