/**
 * Competitive rank ladder — the single source of the MMR thresholds.
 * getRankFromMMR (competitive-utils, server) and the hub's player card
 * (client) both read this, so the progress bar can never disagree with the
 * rank a match actually assigns. Client-safe: no imports.
 *
 * The leaderboard legend (src/app/leaderboard/page.tsx) still keeps its own
 * copy of the ranges; keep it in sync if these change.
 */

export interface RankTier {
  name: string
  /** Lowest MMR that earns this rank. */
  min: number
  emoji: string
  /** Badge chip colors (rank identity, light + dark). */
  badge: string
}

/** Ascending by `min`. */
export const RANK_TIERS: RankTier[] = [
  { name: 'Bronze', min: -Infinity, emoji: '🥉', badge: 'bg-amber-100 text-amber-800 ring-amber-200 dark:bg-amber-900/40 dark:text-amber-200 dark:ring-amber-800' },
  { name: 'Silver', min: 1000, emoji: '🥈', badge: 'bg-gray-100 text-gray-700 ring-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700' },
  { name: 'Gold', min: 1400, emoji: '🥇', badge: 'bg-yellow-100 text-yellow-800 ring-yellow-200 dark:bg-yellow-900/40 dark:text-yellow-200 dark:ring-yellow-800' },
  { name: 'Platinum', min: 1800, emoji: '💎', badge: 'bg-cyan-100 text-cyan-800 ring-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-200 dark:ring-cyan-800' },
  { name: 'Diamond', min: 2200, emoji: '💠', badge: 'bg-blue-100 text-blue-800 ring-blue-200 dark:bg-blue-900/40 dark:text-blue-200 dark:ring-blue-800' },
]

export function rankTierForMMR(mmr: number): RankTier {
  let tier = RANK_TIERS[0]
  for (const t of RANK_TIERS) if (mmr >= t.min) tier = t
  return tier
}

/** Display styling for a stored rank name; unknown/legacy names fall back to the MMR tier. */
export function rankTierByName(name: string | null | undefined, mmr: number): RankTier {
  return RANK_TIERS.find((t) => t.name === name) ?? rankTierForMMR(mmr)
}

export interface RankProgress {
  current: RankTier
  /** null at the top rank. */
  next: RankTier | null
  /** MMR still needed for `next` (0 at the top rank). */
  toNext: number
  /** 0–1 progress through the current tier toward `next` (1 at the top rank). */
  fraction: number
}

/**
 * Progress from the current tier's floor to the next tier. Bronze has no
 * floor, so its bar runs from 600 (an arbitrary visual start) — the copy
 * always states the exact MMR still needed.
 */
export function rankProgress(mmr: number): RankProgress {
  const current = rankTierForMMR(mmr)
  const idx = RANK_TIERS.indexOf(current)
  const next = RANK_TIERS[idx + 1] ?? null
  if (!next) return { current, next: null, toNext: 0, fraction: 1 }
  const floor = Number.isFinite(current.min) ? current.min : next.min - 400
  const fraction = Math.min(1, Math.max(0, (mmr - floor) / (next.min - floor)))
  return { current, next, toNext: Math.max(0, next.min - mmr), fraction }
}
