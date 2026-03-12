'use client'

import { useState, useEffect, useCallback } from 'react'

/**
 * #176: XP Points System
 * Tracks XP for all activities: quizzes, lessons, flashcards, competitive matches, daily logins
 */

export interface XPEvent {
  type: 'quiz_complete' | 'lesson_complete' | 'flashcard_review' | 'competitive_win' | 'competitive_loss' | 'daily_login' | 'streak_bonus' | 'mini_boss_clear' | 'frq_complete' | 'exit_quiz_pass' | 'perfect_score'
  baseXP: number
  multiplier?: number
  description: string
}

const XP_VALUES: Record<XPEvent['type'], number> = {
  quiz_complete: 25,
  lesson_complete: 50,
  flashcard_review: 10,
  competitive_win: 75,
  competitive_loss: 20,
  daily_login: 15,
  streak_bonus: 30,
  mini_boss_clear: 100,
  frq_complete: 40,
  exit_quiz_pass: 35,
  perfect_score: 150,
}

interface XPState {
  totalXP: number
  todayXP: number
  weekXP: number
  history: { type: XPEvent['type']; xp: number; timestamp: number }[]
}

function getStoredXP(): XPState {
  if (typeof window === 'undefined') return { totalXP: 0, todayXP: 0, weekXP: 0, history: [] }
  try {
    const stored = localStorage.getItem('studymondo_xp')
    if (stored) return JSON.parse(stored)
  } catch { /* ignore */ }
  return { totalXP: 0, todayXP: 0, weekXP: 0, history: [] }
}

export function useXPSystem() {
  const [xpState, setXPState] = useState<XPState>(getStoredXP)

  useEffect(() => {
    localStorage.setItem('studymondo_xp', JSON.stringify(xpState))
  }, [xpState])

  const awardXP = useCallback((type: XPEvent['type'], multiplier = 1) => {
    const base = XP_VALUES[type] || 10
    const xp = Math.round(base * multiplier)
    setXPState(prev => ({
      totalXP: prev.totalXP + xp,
      todayXP: prev.todayXP + xp,
      weekXP: prev.weekXP + xp,
      history: [...prev.history.slice(-99), { type, xp, timestamp: Date.now() }],
    }))
    return xp
  }, [])

  return { ...xpState, awardXP, XP_VALUES }
}

export function XPDisplay({ totalXP, todayXP }: { totalXP: number; todayXP: number }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1.5 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1.5 rounded-full">
        <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">⭐ {totalXP.toLocaleString()} XP</span>
      </div>
      {todayXP > 0 && (
        <span className="text-xs text-gray-500 dark:text-gray-400">+{todayXP} today</span>
      )}
    </div>
  )
}

export function XPGainToast({ xp, type }: { xp: number; type: string }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed top-20 right-4 z-50 animate-bounce bg-yellow-400 dark:bg-yellow-600 text-black dark:text-white px-4 py-2 rounded-lg shadow-lg font-bold">
      +{xp} XP — {type.replace(/_/g, ' ')}
    </div>
  )
}
