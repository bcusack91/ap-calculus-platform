'use client'

import { useState, useCallback } from 'react'

/**
 * #188: Power-Ups in Competitive Mode
 * Consumable power-ups players can use during competitive matches
 */

export interface PowerUp {
  id: string
  name: string
  description: string
  icon: string
  effect: 'extra_time' | 'fifty_fifty' | 'skip_question' | 'double_points' | 'hint' | 'shield'
  duration?: number
  rarity: 'common' | 'rare' | 'epic'
  cost: number // XP cost
}

const POWER_UPS: PowerUp[] = [
  {
    id: 'extra-time',
    name: 'Time Freeze',
    description: 'Add 15 seconds to the current question timer',
    icon: '⏱️',
    effect: 'extra_time',
    duration: 15,
    rarity: 'common',
    cost: 50,
  },
  {
    id: 'fifty-fifty',
    name: '50/50',
    description: 'Eliminate two wrong answers',
    icon: '✂️',
    effect: 'fifty_fifty',
    rarity: 'common',
    cost: 75,
  },
  {
    id: 'skip',
    name: 'Skip',
    description: 'Skip a question without penalty and get a new one',
    icon: '⏭️',
    effect: 'skip_question',
    rarity: 'rare',
    cost: 100,
  },
  {
    id: 'double-points',
    name: 'Double Points',
    description: 'Next correct answer is worth double points',
    icon: '✖️2️⃣',
    effect: 'double_points',
    rarity: 'rare',
    cost: 150,
  },
  {
    id: 'hint',
    name: 'Hint',
    description: 'Get a helpful hint for the current question',
    icon: '💡',
    effect: 'hint',
    rarity: 'common',
    cost: 60,
  },
  {
    id: 'shield',
    name: 'Shield',
    description: 'Protect your streak — wrong answer won\'t break it',
    icon: '🛡️',
    effect: 'shield',
    rarity: 'epic',
    cost: 200,
  },
]

interface PowerUpInventory {
  [powerUpId: string]: number
}

export function usePowerUps() {
  const [inventory, setInventory] = useState<PowerUpInventory>(() => {
    if (typeof window === 'undefined') return {}
    try {
      const stored = localStorage.getItem('studymondo_powerups')
      return stored ? JSON.parse(stored) : {}
    } catch { return {} }
  })

  const [activePowerUp, setActivePowerUp] = useState<PowerUp | null>(null)

  const purchasePowerUp = useCallback((powerUpId: string, currentXP: number): boolean => {
    const pu = POWER_UPS.find(p => p.id === powerUpId)
    if (!pu || currentXP < pu.cost) return false
    setInventory(prev => {
      const updated = { ...prev, [powerUpId]: (prev[powerUpId] || 0) + 1 }
      localStorage.setItem('studymondo_powerups', JSON.stringify(updated))
      return updated
    })
    return true
  }, [])

  const usePowerUp = useCallback((powerUpId: string): PowerUp | null => {
    if ((inventory[powerUpId] || 0) <= 0) return null
    const pu = POWER_UPS.find(p => p.id === powerUpId)
    if (!pu) return null
    setInventory(prev => {
      const updated = { ...prev, [powerUpId]: prev[powerUpId] - 1 }
      localStorage.setItem('studymondo_powerups', JSON.stringify(updated))
      return updated
    })
    setActivePowerUp(pu)
    return pu
  }, [inventory])

  return { inventory, activePowerUp, purchasePowerUp, usePowerUp, clearActive: () => setActivePowerUp(null), POWER_UPS }
}

export function PowerUpShop({ currentXP, onPurchase }: { currentXP: number; onPurchase: (id: string, cost: number) => void }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">🛒 Power-Up Shop</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Spend XP to buy power-ups for competitive matches</p>
      <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-3">⭐ {currentXP} XP available</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {POWER_UPS.map(pu => {
          const canAfford = currentXP >= pu.cost
          return (
            <div key={pu.id} className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
              <div className="text-2xl mb-1">{pu.icon}</div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white">{pu.name}</h4>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 mb-2">{pu.description}</p>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium capitalize ${
                pu.rarity === 'epic' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                pu.rarity === 'rare' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
              }`}>{pu.rarity}</span>
              <button
                onClick={() => canAfford && onPurchase(pu.id, pu.cost)}
                disabled={!canAfford}
                className={`mt-2 w-full py-1 text-xs rounded font-medium transition-colors ${
                  canAfford ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                }`}
              >
                {pu.cost} XP
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function PowerUpBar({ inventory, onUse }: { inventory: PowerUpInventory; onUse: (id: string) => void }) {
  return (
    <div className="flex gap-2">
      {POWER_UPS.filter(pu => (inventory[pu.id] || 0) > 0).map(pu => (
        <button
          key={pu.id}
          onClick={() => onUse(pu.id)}
          className="relative flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors text-sm"
          title={pu.description}
        >
          <span>{pu.icon}</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
            {inventory[pu.id]}
          </span>
        </button>
      ))}
    </div>
  )
}
