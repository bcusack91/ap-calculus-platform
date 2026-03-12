'use client'

import { useMemo } from 'react'

/**
 * #177: Level-Up System (Level 1-50+)
 * Maps XP to levels with titles and progress bars
 */

interface LevelInfo {
  level: number
  title: string
  xpRequired: number
  xpForNext: number
  progress: number // 0-100
}

const LEVEL_TITLES: Record<number, string> = {
  1: 'Newcomer',
  2: 'Beginner',
  3: 'Apprentice',
  5: 'Student',
  7: 'Learner',
  10: 'Scholar',
  13: 'Dedicated',
  15: 'Sharp Mind',
  18: 'Rising Star',
  20: 'Knowledge Seeker',
  23: 'Ace',
  25: 'Expert',
  28: 'Mastermind',
  30: 'Genius',
  33: 'Virtuoso',
  35: 'Prodigy',
  38: 'Sage',
  40: 'Grand Scholar',
  43: 'Champion',
  45: 'Legend',
  48: 'Titan',
  50: 'Transcendent',
}

function getTitle(level: number): string {
  const keys = Object.keys(LEVEL_TITLES).map(Number).sort((a, b) => b - a)
  for (const k of keys) {
    if (level >= k) return LEVEL_TITLES[k]
  }
  return 'Newcomer'
}

function xpForLevel(level: number): number {
  // Quadratic XP curve: level N requires ~50*N² total XP
  return Math.round(50 * level * level)
}

export function calculateLevel(totalXP: number): LevelInfo {
  let level = 1
  while (xpForLevel(level + 1) <= totalXP && level < 100) {
    level++
  }
  const currentLevelXP = xpForLevel(level)
  const nextLevelXP = xpForLevel(level + 1)
  const progress = Math.min(100, Math.round(((totalXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100))

  return {
    level,
    title: getTitle(level),
    xpRequired: nextLevelXP - totalXP,
    xpForNext: nextLevelXP,
    progress,
  }
}

export function LevelBadge({ totalXP }: { totalXP: number }) {
  const info = useMemo(() => calculateLevel(totalXP), [totalXP])

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white font-bold text-lg shadow-md">
        {info.level}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">{info.title}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{info.xpRequired} XP to next</span>
        </div>
        <div className="mt-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${info.progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export function LevelUpModal({ level, title, onClose }: { level: number; title: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center max-w-sm mx-4 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Level Up!</h2>
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white font-bold text-3xl shadow-lg">
          {level}
        </div>
        <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold mb-1">{title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Keep going — your next goal awaits!</p>
        <button onClick={onClose} className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Continue
        </button>
      </div>
    </div>
  )
}
