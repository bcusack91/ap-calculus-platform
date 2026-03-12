'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

type TimerMode = 'focus' | 'break' | 'long-break'

const MODES: Record<TimerMode, { label: string; minutes: number; color: string }> = {
  focus: { label: 'Focus', minutes: 25, color: 'text-red-600 dark:text-red-400' },
  break: { label: 'Break', minutes: 5, color: 'text-green-600 dark:text-green-400' },
  'long-break': { label: 'Long Break', minutes: 15, color: 'text-blue-600 dark:text-blue-400' },
}

export default function PomodoroTimer() {
  const [mode, setMode] = useState<TimerMode>('focus')
  const [secondsLeft, setSecondsLeft] = useState(MODES.focus.minutes * 60)
  const [running, setRunning] = useState(false)
  const [completedPomodoros, setCompletedPomodoros] = useState(0)
  const [minimized, setMinimized] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const switchMode = useCallback((newMode: TimerMode) => {
    setMode(newMode)
    setSecondsLeft(MODES[newMode].minutes * 60)
    setRunning(false)
  }, [])

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setRunning(false)
            // Timer complete
            if (mode === 'focus') {
              const newCount = completedPomodoros + 1
              setCompletedPomodoros(newCount)
              // Every 4 pomodoros, take a long break
              if (newCount % 4 === 0) {
                switchMode('long-break')
              } else {
                switchMode('break')
              }
              // Play notification sound if available
              try { new Audio('/sounds/timer-done.mp3').play().catch(() => {}) } catch {}
            } else {
              switchMode('focus')
            }
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running, mode, completedPomodoros, switchMode])

  const mins = Math.floor(secondsLeft / 60)
  const secs = secondsLeft % 60
  const totalSeconds = MODES[mode].minutes * 60
  const progressPct = ((totalSeconds - secondsLeft) / totalSeconds) * 100
  const config = MODES[mode]

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-4 left-4 z-40 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700 flex items-center gap-2 hover:shadow-xl transition-shadow"
      >
        <span className="text-lg">🍅</span>
        <span className={`font-mono font-bold text-sm ${config.color}`}>
          {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
        </span>
        {running && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
      </button>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          🍅 Pomodoro Timer
        </h3>
        <button
          onClick={() => setMinimized(true)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-sm"
          aria-label="Minimize timer"
        >
          ▾
        </button>
      </div>

      {/* Mode Tabs */}
      <div className="flex gap-1 mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
        {(Object.entries(MODES) as [TimerMode, typeof MODES[TimerMode]][]).map(([key, m]) => (
          <button
            key={key}
            onClick={() => switchMode(key)}
            className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-all ${
              mode === key
                ? 'bg-white dark:bg-gray-600 shadow-sm text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <div className="text-center mb-4">
        <div className="relative inline-flex items-center justify-center w-40 h-40">
          <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4"
              className="text-gray-200 dark:text-gray-700" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4"
              className={config.color}
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - progressPct / 100)}`}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s linear' }}
            />
          </svg>
          <span className={`font-mono text-3xl font-bold ${config.color}`}>
            {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <button
          onClick={() => setRunning(!running)}
          className={`px-6 py-2 rounded-lg font-semibold text-sm transition-colors ${
            running
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {running ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={() => switchMode(mode)}
          className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Pomodoro Counter */}
      <div className="text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Pomodoros completed: <span className="font-bold text-gray-900 dark:text-white">{completedPomodoros}</span>
        </p>
        <div className="flex items-center justify-center gap-1 mt-1">
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i} className={`w-3 h-3 rounded-full ${
              i < (completedPomodoros % 4) ? 'bg-red-500' : 'bg-gray-200 dark:bg-gray-700'
            }`} />
          ))}
        </div>
      </div>
    </div>
  )
}
