'use client'

import { useCallback, useEffect, useSyncExternalStore } from 'react'
import {
  COSMETICS,
  getCosmetic,
  sanitizeCosmeticsState,
  type Cosmetic,
  type CosmeticSlot,
} from '@/lib/cosmetics-catalog'

// Re-exported so existing importers keep working; the catalog itself now lives
// in src/lib/cosmetics-catalog.ts (shared with the server route, which is the
// price/ownership authority).
export { COSMETICS }
export type { Cosmetic }

/**
 * Competitive cosmetics ("power-ups" — kept that export name for callers).
 * These are PURELY VISUAL flair: they make you look cooler in competitive mode
 * but give NO gameplay advantage, so every match stays perfectly fair. Bought
 * with server-tracked challenge XP (see /api/challenges `totalXpEarned`).
 *
 * Ownership, the equipped picks, and the XP spend ledger are ACCOUNT-WIDE:
 * persisted on `CompetitiveProfile.cosmetics` via /api/competitive/cosmetics,
 * so purchases roam across devices. A legacy device's localStorage state
 * (`mondo_cosmetics`) is imported once, server-side validated, on first load —
 * then the key is cleared. If the API is unreachable (e.g. the migration
 * hasn't been applied in an environment yet), the shop degrades to a
 * read-only view of this device's legacy state instead of crashing.
 */

const STORE_KEY = 'mondo_cosmetics' // legacy device-local state, import-then-clear

// ---------------------------------------------------------------------------
// Shared client store (module-level, one fetch per page load, every
// useCosmetics() instance sees the same state).
// ---------------------------------------------------------------------------

interface CosmeticsClientState {
  /** 'loading' until the API answers; 'unavailable' = read-only local fallback. */
  status: 'loading' | 'ready' | 'unavailable'
  owned: string[]
  equipped: Partial<Record<CosmeticSlot, string>>
  xpSpent: number
  /** Last mutation error (e.g. rejected purchase) — shown in the shop. */
  error: string | null
}

const INITIAL_STATE: CosmeticsClientState = {
  status: 'loading',
  owned: [],
  equipped: {},
  xpSpent: 0,
  error: null,
}

let store: CosmeticsClientState = INITIAL_STATE
const listeners = new Set<() => void>()

function setStore(next: CosmeticsClientState) {
  store = next
  listeners.forEach((l) => l())
}
function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
const getSnapshot = () => store
const getServerSnapshot = () => INITIAL_STATE

interface ServerStatePayload {
  persistence?: string
  owned?: string[]
  equipped?: Partial<Record<CosmeticSlot, string>>
  xpSpent?: number
  canImport?: boolean
  error?: string
  alreadyInitialized?: boolean
}

function applyServerState(data: ServerStatePayload, error: string | null = null) {
  setStore({
    status: 'ready',
    owned: Array.isArray(data.owned) ? data.owned : [],
    equipped: data.equipped && typeof data.equipped === 'object' ? data.equipped : {},
    xpSpent: Number(data.xpSpent) || 0,
    error,
  })
}

function readLegacyLocal() {
  try {
    return sanitizeCosmeticsState(JSON.parse(localStorage.getItem(STORE_KEY) || 'null'))
  } catch {
    return sanitizeCosmeticsState(null)
  }
}

function fallbackToLocal() {
  const local = readLegacyLocal()
  setStore({
    status: 'unavailable',
    owned: local.owned,
    equipped: local.equipped,
    xpSpent: local.xpSpent,
    error: null,
  })
}

let loadPromise: Promise<void> | null = null

/** Fetch server state once per page load; runs the one-time localStorage import. */
function ensureLoaded() {
  if (loadPromise) return loadPromise
  loadPromise = (async () => {
    try {
      const res = await fetch('/api/competitive/cosmetics')
      if (!res.ok) return fallbackToLocal()
      const data: ServerStatePayload = await res.json()
      if (data.persistence !== 'ok') return fallbackToLocal()

      // One-time migration handshake: while the server has never stored state
      // for this user (canImport), push this device's legacy purchases up.
      // The server validates ids against the catalog, caps xpSpent at the sum
      // of the imported items' prices, and closes the window permanently.
      if (data.canImport) {
        const local = readLegacyLocal()
        if (local.owned.length > 0) {
          try {
            const importRes = await fetch('/api/competitive/cosmetics', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ action: 'import', state: local }),
            })
            const importData: ServerStatePayload = await importRes.json()
            if (importRes.ok) {
              try { localStorage.removeItem(STORE_KEY) } catch {}
              return applyServerState(importData)
            }
            if (importData.alreadyInitialized) {
              // Another device won the race — the account state is authoritative
              // now, so drop the legacy key and re-read.
              try { localStorage.removeItem(STORE_KEY) } catch {}
              const refetch = await fetch('/api/competitive/cosmetics')
              if (refetch.ok) {
                const fresh: ServerStatePayload = await refetch.json()
                if (fresh.persistence === 'ok') return applyServerState(fresh)
              }
            }
          } catch {}
        }
      }
      applyServerState(data)
    } catch {
      fallbackToLocal()
    }
  })()
  return loadPromise
}

async function mutate(body: Record<string, unknown>, optimistic: CosmeticsClientState) {
  const previous = store
  setStore(optimistic)
  try {
    const res = await fetch('/api/competitive/cosmetics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data: ServerStatePayload = await res.json().catch(() => ({}))
    if (!res.ok) {
      setStore({ ...previous, error: data.error || 'Something went wrong — try again.' })
      return false
    }
    applyServerState(data)
    return true
  } catch {
    setStore({ ...previous, error: 'Network error — your purchase was not charged.' })
    return false
  }
}

// ---------------------------------------------------------------------------
// Hook + components
// ---------------------------------------------------------------------------

export function useCosmetics() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    ensureLoaded()
  }, [])

  const purchase = useCallback((id: string, availableXP: number): boolean => {
    const c = getCosmetic(id)
    if (!c) return false
    const s = store
    if (s.status !== 'ready') return false
    if (s.owned.includes(id) || availableXP < c.cost) return false
    // Optimistic: own it, auto-equip if the slot is free, charge the XP.
    // `mutate` rolls back and surfaces the server's error text on rejection.
    void mutate(
      { action: 'purchase', itemId: id },
      {
        ...s,
        owned: [...s.owned, id],
        equipped: s.equipped[c.slot] ? s.equipped : { ...s.equipped, [c.slot]: id },
        xpSpent: s.xpSpent + c.cost,
        error: null,
      }
    )
    return true
  }, [])

  /** Toggle: equips the item, or unequips its slot if it's already equipped. */
  const equip = useCallback((id: string) => {
    const c = getCosmetic(id)
    if (!c) return
    const s = store
    if (s.status !== 'ready' || !s.owned.includes(id)) return
    if (s.equipped[c.slot] === id) {
      const equipped = { ...s.equipped }
      delete equipped[c.slot]
      void mutate({ action: 'unequip', slot: c.slot }, { ...s, equipped, error: null })
    } else {
      void mutate(
        { action: 'equip', itemId: id, slot: c.slot },
        { ...s, equipped: { ...s.equipped, [c.slot]: id }, error: null }
      )
    }
  }, [])

  return {
    status: state.status,
    owned: state.owned,
    equipped: state.equipped.nameplate ?? null,
    spent: state.xpSpent,
    error: state.error,
    purchase,
    equip,
  }
}

const rarityChip: Record<Cosmetic['rarity'], string> = {
  epic: 'bg-accent-light text-accent-hover dark:bg-accent-light/30 dark:text-accent-muted',
  rare: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  common: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400',
}

/**
 * Cosmetics shop. `currentXP` is the player's real, server-persisted challenge
 * XP total (monotonic); the spend ledger is server-persisted too, so
 * available = earned − spent and both halves roam with the account.
 * Self-contained: purchase + equip are optimistic API calls with rollback.
 */
export function PowerUpShop({ currentXP }: { currentXP: number }) {
  const { status, owned, equipped, spent, error, purchase, equip } = useCosmetics()
  const available = Math.max(0, currentXP - spent)
  const readOnly = status !== 'ready'

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">🛍️ Cosmetics Shop</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Spend XP from daily &amp; weekly challenges on visual flair for competitive mode. Cosmetics are looks only — they never affect gameplay, so matches stay fair.</p>
      <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-2">⭐ {available} XP available</p>
      {status === 'unavailable' && (
        <p className="mb-2 text-xs text-amber-600 dark:text-amber-400">Purchases are temporarily unavailable — showing what this device has. Your XP is safe; check back soon.</p>
      )}
      {error && (
        <p className="mb-2 text-xs font-medium text-red-600 dark:text-red-400" role="alert">{error}</p>
      )}

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
          const canAfford = available >= c.cost && !readOnly
          return (
            <div key={c.id} className={`p-3 rounded-lg border text-center ${isEquipped ? 'border-indigo-500 ring-1 ring-indigo-400' : 'border-gray-200 dark:border-gray-600'}`}>
              <div className="text-2xl mb-1">{c.icon}</div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white">{c.name}</h4>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 mb-2">{c.description}</p>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium capitalize ${rarityChip[c.rarity]}`}>{c.rarity}</span>
              {isOwned ? (
                <button
                  onClick={() => equip(c.id)}
                  disabled={readOnly}
                  className={`mt-2 w-full py-1 text-xs rounded font-medium transition-colors ${isEquipped ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200'} ${readOnly ? 'opacity-60 cursor-not-allowed' : ''}`}
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
 * Equipped state comes from the account (server), so flair follows the player
 * across devices; renders the plain name while loading or if the API is down.
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
