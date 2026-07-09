'use client'

import { useState, useEffect, useCallback } from 'react'

/**
 * #183: Battle Pass Progression
 * Free + Premium tier battle pass with 30 levels of rewards
 */

interface BattlePassReward {
  level: number
  free: { name: string; icon: string; type: 'xp' | 'badge' | 'title' | 'powerup' }
  premium: { name: string; icon: string; type: 'xp' | 'badge' | 'title' | 'powerup' | 'cosmetic' }
}

const BATTLE_PASS_REWARDS: BattlePassReward[] = Array.from({ length: 30 }, (_, i) => {
  const level = i + 1
  const freeRewards = [
    { name: '+50 XP', icon: '⭐', type: 'xp' as const },
    { name: '+100 XP', icon: '⭐', type: 'xp' as const },
    { name: 'Common Badge', icon: '🏷️', type: 'badge' as const },
    { name: '+150 XP', icon: '⭐', type: 'xp' as const },
    { name: 'Title Unlock', icon: '📛', type: 'title' as const },
  ]
  const premiumRewards = [
    { name: '+100 XP', icon: '💎', type: 'xp' as const },
    { name: 'Rare Badge', icon: '🎖️', type: 'badge' as const },
    { name: '+200 XP', icon: '💎', type: 'xp' as const },
    { name: 'Epic Title', icon: '👑', type: 'title' as const },
    { name: 'Power-Up', icon: '🚀', type: 'powerup' as const },
  ]
  return {
    level,
    free: freeRewards[i % freeRewards.length],
    premium: premiumRewards[i % premiumRewards.length],
  }
})

// Override milestone rewards
BATTLE_PASS_REWARDS[9] = { level: 10, free: { name: 'Rare Badge', icon: '🎯', type: 'badge' }, premium: { name: 'Epic Badge', icon: '💜', type: 'badge' } }
BATTLE_PASS_REWARDS[19] = { level: 20, free: { name: 'Epic Title', icon: '🏆', type: 'title' }, premium: { name: 'Legendary Badge', icon: '⭐', type: 'badge' } }
BATTLE_PASS_REWARDS[29] = { level: 30, free: { name: 'Season Badge', icon: '🌟', type: 'badge' }, premium: { name: 'Legendary Title', icon: '👑', type: 'title' } }

interface BPState {
  currentLevel: number
  xpInLevel: number
  isPremium: boolean
  claimedFree: number[]
  claimedPremium: number[]
}

function getBPState(): BPState {
  if (typeof window === 'undefined') return { currentLevel: 1, xpInLevel: 0, isPremium: false, claimedFree: [], claimedPremium: [] }
  try {
    const stored = localStorage.getItem('studymondo_battlepass')
    if (stored) return JSON.parse(stored)
  } catch { /* ignore */ }
  return { currentLevel: 1, xpInLevel: 0, isPremium: false, claimedFree: [], claimedPremium: [] }
}

const XP_PER_LEVEL = 200

export function BattlePass() {
  const [state, setState] = useState<BPState>(getBPState)

  useEffect(() => {
    localStorage.setItem('studymondo_battlepass', JSON.stringify(state))
  }, [state])

  const addBPXP = useCallback((xp: number) => {
    setState(prev => {
      let newXP = prev.xpInLevel + xp
      let newLevel = prev.currentLevel
      while (newXP >= XP_PER_LEVEL && newLevel < 30) {
        newXP -= XP_PER_LEVEL
        newLevel++
      }
      return { ...prev, currentLevel: newLevel, xpInLevel: Math.min(newXP, XP_PER_LEVEL) }
    })
  }, [])

  const claimReward = (level: number, tier: 'free' | 'premium') => {
    setState(prev => {
      if (tier === 'free') {
        return { ...prev, claimedFree: [...prev.claimedFree, level] }
      }
      return { ...prev, claimedPremium: [...prev.claimedPremium, level] }
    })
  }

  const progress = (state.xpInLevel / XP_PER_LEVEL) * 100

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">🎮 Season Pass</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Level {state.currentLevel}/30</p>
        </div>
        {!state.isPremium && (
          <button className="px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-lg">
            Upgrade Premium
          </button>
        )}
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>Level {state.currentLevel}</span>
          <span>{state.xpInLevel}/{XP_PER_LEVEL} XP</span>
        </div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {BATTLE_PASS_REWARDS.slice(0, Math.min(state.currentLevel + 5, 30)).map(reward => {
          const unlocked = reward.level <= state.currentLevel
          const freeClaimed = state.claimedFree.includes(reward.level)
          const premClaimed = state.claimedPremium.includes(reward.level)
          const isMilestone = reward.level % 10 === 0

          return (
            <div key={reward.level} className={`flex items-center gap-3 p-2 rounded-lg ${
              isMilestone ? 'bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800' :
              'bg-gray-50 dark:bg-gray-700/30'
            }`}>
              <div className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold ${
                unlocked ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300' : 'bg-gray-200 text-gray-500 dark:bg-gray-600 dark:text-gray-400'
              }`}>{reward.level}</div>

              {/* Free tier */}
              <div className="flex-1 flex items-center gap-2">
                <span className="text-lg">{reward.free.icon}</span>
                <span className="text-xs text-gray-700 dark:text-gray-300">{reward.free.name}</span>
                {unlocked && !freeClaimed && (
                  <button onClick={() => claimReward(reward.level, 'free')}
                    className="text-xs px-3 py-1.5 bg-green-500 text-white rounded-full">Claim</button>
                )}
                {freeClaimed && <span className="text-[10px] text-green-500">✓</span>}
              </div>

              {/* Premium tier */}
              <div className="flex-1 flex items-center gap-2">
                <span className="text-lg">{state.isPremium ? reward.premium.icon : '🔒'}</span>
                <span className="text-xs text-gray-700 dark:text-gray-300">{reward.premium.name}</span>
                {state.isPremium && unlocked && !premClaimed && (
                  <button onClick={() => claimReward(reward.level, 'premium')}
                    className="text-xs px-3 py-1.5 bg-purple-500 text-white rounded-full">Claim</button>
                )}
                {premClaimed && <span className="text-[10px] text-purple-500">✓</span>}
              </div>
            </div>
          )
        })}
      </div>

      {/* Hidden: expose addBPXP for integration */}
      <input type="hidden" data-bp-add={addBPXP.toString()} />
    </div>
  )
}
