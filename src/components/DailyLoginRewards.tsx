'use client'

import { useState, useEffect } from 'react'

/**
 * #178: Daily Login Rewards
 * Consecutive day login tracking with escalating rewards
 */

interface DailyReward {
  day: number
  xp: number
  label: string
  icon: string
}

const DAILY_REWARDS: DailyReward[] = [
  { day: 1, xp: 15, label: 'Day 1', icon: '🌟' },
  { day: 2, xp: 20, label: 'Day 2', icon: '⭐' },
  { day: 3, xp: 25, label: 'Day 3', icon: '💫' },
  { day: 4, xp: 30, label: 'Day 4', icon: '🔥' },
  { day: 5, xp: 40, label: 'Day 5', icon: '🏆' },
  { day: 6, xp: 50, label: 'Day 6', icon: '💎' },
  { day: 7, xp: 100, label: 'Week Bonus!', icon: '👑' },
]

interface LoginState {
  lastLogin: string | null
  consecutiveDays: number
  claimedToday: boolean
  totalLogins: number
}

function getLoginState(): LoginState {
  if (typeof window === 'undefined') return { lastLogin: null, consecutiveDays: 0, claimedToday: false, totalLogins: 0 }
  try {
    const stored = localStorage.getItem('studymondo_daily_login')
    if (stored) return JSON.parse(stored)
  } catch { /* ignore */ }
  return { lastLogin: null, consecutiveDays: 0, claimedToday: false, totalLogins: 0 }
}

function todayStr(): string {
  return new Date().toISOString().split('T')[0]
}

export function DailyLoginRewards({ onClaimXP }: { onClaimXP?: (xp: number) => void }) {
  const [state, setState] = useState<LoginState>(getLoginState)
  const [showClaimed, setShowClaimed] = useState(false)

  useEffect(() => {
    const today = todayStr()
    if (state.lastLogin === today) {
      setState(prev => ({ ...prev, claimedToday: true }))
    } else {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayStr = yesterday.toISOString().split('T')[0]
      const isConsecutive = state.lastLogin === yesterdayStr
      setState(prev => ({
        ...prev,
        consecutiveDays: isConsecutive ? prev.consecutiveDays : 0,
        claimedToday: false,
      }))
    }
  }, [state.lastLogin])

  useEffect(() => {
    localStorage.setItem('studymondo_daily_login', JSON.stringify(state))
  }, [state])

  const currentDay = (state.consecutiveDays % 7) + 1
  const currentReward = DAILY_REWARDS.find(r => r.day === currentDay) || DAILY_REWARDS[0]

  const claimReward = () => {
    if (state.claimedToday) return
    const xp = currentReward.xp
    setState(prev => ({
      lastLogin: todayStr(),
      consecutiveDays: prev.consecutiveDays + 1,
      claimedToday: true,
      totalLogins: prev.totalLogins + 1,
    }))
    onClaimXP?.(xp)
    setShowClaimed(true)
    setTimeout(() => setShowClaimed(false), 3000)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Daily Login Rewards</h3>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {DAILY_REWARDS.map((reward) => {
          const isDone = reward.day < currentDay || (reward.day === currentDay && state.claimedToday)
          const isCurrent = reward.day === currentDay && !state.claimedToday
          return (
            <div
              key={reward.day}
              className={`text-center p-2 rounded-lg border-2 transition-all ${
                isDone
                  ? 'bg-green-100 dark:bg-green-900/30 border-green-400 dark:border-green-600'
                  : isCurrent
                  ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-400 dark:border-yellow-500 animate-pulse'
                  : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600'
              }`}
            >
              <div className="text-xl">{isDone ? '✅' : reward.icon}</div>
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1">{reward.label}</div>
              <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">+{reward.xp}</div>
            </div>
          )
        })}
      </div>

      {!state.claimedToday ? (
        <button
          onClick={claimReward}
          className="w-full py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-md"
        >
          {currentReward.icon} Claim {currentReward.label} — +{currentReward.xp} XP
        </button>
      ) : (
        <div className="text-center py-2.5 text-green-600 dark:text-green-400 font-semibold">
          ✅ Reward Claimed! Come back tomorrow.
        </div>
      )}

      {showClaimed && (
        <div className="mt-3 text-center text-sm text-yellow-600 dark:text-yellow-400 font-bold animate-bounce">
          🎉 +{currentReward.xp} XP earned!
        </div>
      )}

      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
        {state.consecutiveDays} day streak · {state.totalLogins} total logins
      </p>
    </div>
  )
}
