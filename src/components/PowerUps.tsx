'use client'

import { useState, useCallback } from 'react'

/**
 * Competitive cosmetics ("power-ups" — kept that export name for callers).
 * These are PURELY VISUAL flair: they make you look cooler in competitive mode
 * but give NO gameplay advantage, so every match stays perfectly fair. Bought
 * with XP earned from wins; ownership + the equipped pick persist in
 * localStorage (no server stakes since they're cosmetic).
 */
export interface Cosmetic {
  id: string
  name: string
  description: string
  icon: string
  rarity: 'common' | 'rare' | 'epic'
  cost: number
  /** Tailwind classes applied to the player's nameplate when equipped. */
  nameplateClass: string
}

export const COSMETICS: Cosmetic[] = [
  { id: 'neon-trail', name: 'Neon Trail', description: 'A glowing neon outline on your nameplate.', icon: '✨', rarity: 'common', cost: 50,
    nameplateClass: 'text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]' },
  { id: 'confetti', name: 'Confetti Burst', description: 'A festive sparkle frames your name.', icon: '🎉', rarity: 'common', cost: 75,
    nameplateClass: 'text-pink-500' },
  { id: 'golden-nameplate', name: 'Golden Nameplate', description: 'Your name shines in radiant gold.', icon: '🏷️', rarity: 'rare', cost: 100,
    nameplateClass: 'bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-extrabold' },
  { id: 'flame-aura', name: 'Flame Aura', description: 'A flickering flame aura around your name.', icon: '🔥', rarity: 'rare', cost: 150,
    nameplateClass: 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.9)]' },
  { id: 'galaxy', name: 'Galaxy Arena', description: 'A cosmic gradient sweeps across your name.', icon: '🌌', rarity: 'epic', cost: 200,
    nameplateClass: 'bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent font-extrabold' },
  { id: 'champion-crown', name: 'Champion Crown', description: 'A crown sits beside your name.', icon: '👑', rarity: 'epic', cost: 300,
    nameplateClass: 'text-amber-400 font-extrabold' },
]

interface CosmeticState { owned: string[]; equipped: string | null; spent: number }
const STORE_KEY = 'mondo_cosmetics'

function load(): CosmeticState {
  if (typeof window === 'undefined') return { owned: [], equipped: null, spent: 0 }
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY) || '{}')
    return { owned: Array.isArray(s.owned) ? s.owned : [], equipped: s.equipped ?? null, spent: Number(s.spent) || 0 }
  } catch { return { owned: [], equipped: null, spent: 0 } }
}

export function useCosmetics() {
  // Lazy init reads localStorage on the client; SSR-safe (load() returns the
  // default when window is undefined).
  const [state, setState] = useState<CosmeticState>(load)

  const purchase = useCallback((id: string, availableXP: number): boolean => {
    const c = COSMETICS.find((x) => x.id === id)
    setState((prev) => {
      if (!c || prev.owned.includes(id) || availableXP < c.cost) return prev
      const next = { owned: [...prev.owned, id], equipped: prev.equipped ?? id, spent: prev.spent + c.cost }
      try { localStorage.setItem(STORE_KEY, JSON.stringify(next)) } catch {}
      return next
    })
    return !!c
  }, [])

  const equip = useCallback((id: string | null) => {
    setState((prev) => {
      if (id !== null && !prev.owned.includes(id)) return prev
      const next = { ...prev, equipped: prev.equipped === id ? null : id }
      try { localStorage.setItem(STORE_KEY, JSON.stringify(next)) } catch {}
      return next
    })
  }, [])

  return { ...state, purchase, equip }
}

const rarityChip: Record<Cosmetic['rarity'], string> = {
  epic: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  rare: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  common: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400',
}

/**
 * Cosmetics shop. `currentXP` is the player's earned XP (e.g. wins*10 + streak*5);
 * available = earned − spent. Self-contained: purchase + equip handled internally.
 */
export function PowerUpShop({ currentXP }: { currentXP: number }) {
  const { owned, equipped, spent, purchase, equip } = useCosmetics()
  const available = Math.max(0, currentXP - spent)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">🛍️ Cosmetics Shop</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Spend XP on visual flair for competitive mode. Cosmetics are looks only — they never affect gameplay, so matches stay fair.</p>
      <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-2">⭐ {available} XP available</p>

      {(() => {
        const e = COSMETICS.find((c) => c.id === equipped)
        return e ? (
          <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
            Equipped: <span className={e.nameplateClass}>Your name</span> <span aria-hidden>{e.icon}</span>
          </p>
        ) : null
      })()}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {COSMETICS.map((c) => {
          const isOwned = owned.includes(c.id)
          const isEquipped = equipped === c.id
          const canAfford = available >= c.cost
          return (
            <div key={c.id} className={`p-3 rounded-lg border text-center ${isEquipped ? 'border-indigo-500 ring-1 ring-indigo-400' : 'border-gray-200 dark:border-gray-600'}`}>
              <div className="text-2xl mb-1">{c.icon}</div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white">{c.name}</h4>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 mb-2">{c.description}</p>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium capitalize ${rarityChip[c.rarity]}`}>{c.rarity}</span>
              {isOwned ? (
                <button
                  onClick={() => equip(c.id)}
                  className={`mt-2 w-full py-1 text-xs rounded font-medium transition-colors ${isEquipped ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200'}`}
                >
                  {isEquipped ? '✓ Equipped' : 'Equip'}
                </button>
              ) : (
                <button
                  onClick={() => canAfford && purchase(c.id, available)}
                  disabled={!canAfford}
                  className={`mt-2 w-full py-1 text-xs rounded font-medium transition-colors ${canAfford ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'}`}
                >
                  {c.cost} XP
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/**
 * Renders the player's name with their equipped cosmetic flair applied. Drop in
 * wherever the competitive player's name appears (lobby card, match header).
 */
export function CosmeticNameplate({ name, className = '' }: { name: string; className?: string }) {
  const { equipped } = useCosmetics()
  const cosmetic = COSMETICS.find((c) => c.id === equipped)
  if (!cosmetic) return <span className={className}>{name}</span>
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span className={cosmetic.nameplateClass}>{name}</span>
      <span title={cosmetic.name} aria-hidden>{cosmetic.icon}</span>
    </span>
  )
}
