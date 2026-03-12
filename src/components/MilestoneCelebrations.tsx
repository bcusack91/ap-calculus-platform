'use client'

import { useState, useEffect } from 'react'

/**
 * #190: Milestone Celebrations
 * Triggered celebrations for reaching study milestones
 */

interface Milestone {
  id: string
  title: string
  description: string
  icon: string
  threshold: number
  metric: 'problems_solved' | 'minutes_studied' | 'quizzes_completed' | 'streak_days' | 'xp_earned' | 'lessons_completed'
  celebration: 'confetti' | 'fireworks' | 'glow' | 'shake'
}

const MILESTONES: Milestone[] = [
  { id: 'first-problem', title: 'First Problem!', description: 'Solved your very first problem', icon: '🌱', threshold: 1, metric: 'problems_solved', celebration: 'glow' },
  { id: '10-problems', title: 'Getting Started', description: '10 problems solved', icon: '📝', threshold: 10, metric: 'problems_solved', celebration: 'glow' },
  { id: '50-problems', title: 'Problem Solver', description: '50 problems conquered', icon: '🎯', threshold: 50, metric: 'problems_solved', celebration: 'confetti' },
  { id: '100-problems', title: 'Century Mark', description: '100 problems! Impressive!', icon: '💯', threshold: 100, metric: 'problems_solved', celebration: 'confetti' },
  { id: '500-problems', title: 'Problem Hurricane', description: '500 problems demolished', icon: '🌪️', threshold: 500, metric: 'problems_solved', celebration: 'fireworks' },
  { id: '1000-problems', title: 'The Thousand', description: '1000 problems. Legendary.', icon: '🏆', threshold: 1000, metric: 'problems_solved', celebration: 'fireworks' },
  { id: '1-hour', title: 'First Hour', description: 'Studied for a full hour', icon: '⏰', threshold: 60, metric: 'minutes_studied', celebration: 'glow' },
  { id: '10-hours', title: 'Dedicated Learner', description: '10 hours of studying', icon: '📚', threshold: 600, metric: 'minutes_studied', celebration: 'confetti' },
  { id: '50-hours', title: 'Study Machine', description: '50 hours of studying', icon: '🤖', threshold: 3000, metric: 'minutes_studied', celebration: 'fireworks' },
  { id: 'first-quiz', title: 'Quiz Time!', description: 'Completed first quiz', icon: '✅', threshold: 1, metric: 'quizzes_completed', celebration: 'glow' },
  { id: '25-quizzes', title: 'Quiz Regular', description: '25 quizzes completed', icon: '📋', threshold: 25, metric: 'quizzes_completed', celebration: 'confetti' },
  { id: '7-streak', title: 'Weekly Warrior', description: '7-day study streak', icon: '🔥', threshold: 7, metric: 'streak_days', celebration: 'confetti' },
  { id: '30-streak', title: 'Monthly Master', description: '30-day streak! Incredible!', icon: '🗓️', threshold: 30, metric: 'streak_days', celebration: 'fireworks' },
  { id: '100-streak', title: 'Centurion', description: '100-day streak. You are unstoppable.', icon: '🏛️', threshold: 100, metric: 'streak_days', celebration: 'fireworks' },
  { id: '1000-xp', title: 'First Thousand', description: '1000 XP earned', icon: '⭐', threshold: 1000, metric: 'xp_earned', celebration: 'glow' },
  { id: '10000-xp', title: 'XP King', description: '10,000 XP earned', icon: '👑', threshold: 10000, metric: 'xp_earned', celebration: 'fireworks' },
  { id: 'first-lesson', title: 'Explorer', description: 'Completed first lesson', icon: '🗺️', threshold: 1, metric: 'lessons_completed', celebration: 'glow' },
  { id: '10-lessons', title: 'Knowledge Seeker', description: '10 lessons completed', icon: '📖', threshold: 10, metric: 'lessons_completed', celebration: 'confetti' },
]

interface MilestoneState {
  reached: string[] // IDs of reached milestones
}

function getMilestoneState(): MilestoneState {
  if (typeof window === 'undefined') return { reached: [] }
  try {
    const stored = localStorage.getItem('studymondo_milestones')
    return stored ? JSON.parse(stored) : { reached: [] }
  } catch { return { reached: [] } }
}

export function useMilestones() {
  const [state, setState] = useState<MilestoneState>(getMilestoneState)
  const [pendingCelebration, setPendingCelebration] = useState<Milestone | null>(null)

  useEffect(() => {
    localStorage.setItem('studymondo_milestones', JSON.stringify(state))
  }, [state])

  const checkMilestone = (metric: Milestone['metric'], value: number) => {
    const newMilestone = MILESTONES.find(
      m => m.metric === metric && value >= m.threshold && !state.reached.includes(m.id)
    )
    if (newMilestone) {
      setState(prev => ({ reached: [...prev.reached, newMilestone.id] }))
      setPendingCelebration(newMilestone)
    }
  }

  return { reachedMilestones: state.reached, pendingCelebration, checkMilestone, dismissCelebration: () => setPendingCelebration(null) }
}

export function MilestoneCelebration({ milestone, onDismiss }: { milestone: Milestone; onDismiss: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 5000)
    return () => clearTimeout(timer)
  }, [onDismiss])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onDismiss}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center max-w-sm mx-4 shadow-2xl animate-bounce" onClick={e => e.stopPropagation()}>
        <div className="text-6xl mb-3">{milestone.icon}</div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">🎉 Milestone Reached!</h2>
        <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{milestone.title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{milestone.description}</p>
        <button onClick={onDismiss} className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
          Continue
        </button>
      </div>
    </div>
  )
}

export function MilestonesList({ reachedIds = [] }: { reachedIds?: string[] }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🏅 Milestones</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {reachedIds.length} / {MILESTONES.length} reached
      </p>
      <div className="space-y-2">
        {MILESTONES.map(m => {
          const reached = reachedIds.includes(m.id)
          return (
            <div key={m.id} className={`flex items-center gap-3 p-2 rounded-lg ${reached ? 'bg-green-50 dark:bg-green-900/20' : 'bg-gray-50 dark:bg-gray-700/30 opacity-60'}`}>
              <span className="text-xl">{reached ? m.icon : '🔒'}</span>
              <div className="flex-1">
                <span className="text-sm font-medium text-gray-900 dark:text-white">{m.title}</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">{m.description}</p>
              </div>
              {reached && <span className="text-green-500 text-sm">✓</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
