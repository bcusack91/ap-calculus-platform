/**
 * Competitive cosmetics catalog — the single source of truth for item ids,
 * prices, and slots. Imported by BOTH the client shop (src/components/PowerUps.tsx)
 * and the server route (src/app/api/competitive/cosmetics/route.ts), so prices
 * are always validated server-side against the same data the shop displays.
 *
 * Cosmetics are PURELY VISUAL flair: they make you look cooler in competitive
 * mode but give NO gameplay advantage, so every match stays perfectly fair.
 * Bought with server-tracked challenge XP (see /api/challenges `totalXpEarned`).
 *
 * Keep this module dependency-free and side-effect-free (it ships in the
 * client bundle). Never repurpose or delete an id once shipped — players own
 * these ids in their persisted `CompetitiveProfile.cosmetics` state.
 */

/** Where an equipped cosmetic renders. All current items style the nameplate. */
export type CosmeticSlot = 'nameplate'

export interface Cosmetic {
  id: string
  name: string
  description: string
  icon: string
  rarity: 'common' | 'rare' | 'epic'
  cost: number
  /** Which equip slot this item occupies. */
  slot: CosmeticSlot
  /** Tailwind classes applied to the player's nameplate when equipped. */
  nameplateClass: string
}

export const COSMETICS: Cosmetic[] = [
  { id: 'neon-trail', name: 'Neon Trail', description: 'A glowing neon outline on your nameplate.', icon: '✨', rarity: 'common', cost: 50, slot: 'nameplate',
    nameplateClass: 'text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]' },
  { id: 'confetti', name: 'Confetti Burst', description: 'A festive sparkle frames your name.', icon: '🎉', rarity: 'common', cost: 75, slot: 'nameplate',
    nameplateClass: 'text-pink-500' },
  { id: 'golden-nameplate', name: 'Golden Nameplate', description: 'Your name shines in radiant gold.', icon: '🏷️', rarity: 'rare', cost: 100, slot: 'nameplate',
    nameplateClass: 'bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-extrabold' },
  { id: 'flame-aura', name: 'Flame Aura', description: 'A flickering flame aura around your name.', icon: '🔥', rarity: 'rare', cost: 150, slot: 'nameplate',
    nameplateClass: 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.9)]' },
  { id: 'galaxy', name: 'Galaxy Arena', description: 'A cosmic gradient sweeps across your name.', icon: '🌌', rarity: 'epic', cost: 200, slot: 'nameplate',
    nameplateClass: 'bg-gradient-to-r from-indigo-400 via-accent-muted to-fuchsia-400 bg-clip-text text-transparent font-extrabold' },
  { id: 'champion-crown', name: 'Champion Crown', description: 'A crown sits beside your name.', icon: '👑', rarity: 'epic', cost: 300, slot: 'nameplate',
    nameplateClass: 'text-amber-400 font-extrabold' },
]

export function getCosmetic(id: string): Cosmetic | undefined {
  return COSMETICS.find((c) => c.id === id)
}

/**
 * Server-persisted cosmetics state, stored as JSON on
 * `CompetitiveProfile.cosmetics`. `initialized: true` marks that the state has
 * been written at least once — after that, the one-time localStorage import is
 * permanently closed for the user.
 */
export interface CosmeticsState {
  owned: string[]
  equipped: Partial<Record<CosmeticSlot, string>>
  xpSpent: number
  initialized: boolean
}

export const EMPTY_COSMETICS_STATE: CosmeticsState = {
  owned: [],
  equipped: {},
  xpSpent: 0,
  initialized: false,
}

/**
 * Coerce an untrusted/unknown JSON value (DB column or client import payload)
 * into a well-formed CosmeticsState: unknown item ids are dropped, equipped
 * entries must be owned and slot-correct, xpSpent is clamped to
 * [0, sum of owned items' prices]. Returns EMPTY_COSMETICS_STATE for null/garbage.
 */
export function sanitizeCosmeticsState(raw: unknown): CosmeticsState {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return { ...EMPTY_COSMETICS_STATE }
  const obj = raw as Record<string, unknown>

  const owned = Array.isArray(obj.owned)
    ? [...new Set(obj.owned.filter((id): id is string => typeof id === 'string' && !!getCosmetic(id)))]
    : []

  const equipped: Partial<Record<CosmeticSlot, string>> = {}
  const rawEquipped = obj.equipped
  if (typeof rawEquipped === 'string') {
    // Legacy localStorage shape: a single equipped id (nameplate slot).
    const c = getCosmetic(rawEquipped)
    if (c && owned.includes(c.id)) equipped[c.slot] = c.id
  } else if (rawEquipped && typeof rawEquipped === 'object' && !Array.isArray(rawEquipped)) {
    for (const [slot, id] of Object.entries(rawEquipped as Record<string, unknown>)) {
      if (typeof id !== 'string') continue
      const c = getCosmetic(id)
      if (c && c.slot === slot && owned.includes(c.id)) equipped[c.slot] = c.id
    }
  }

  const maxSpend = owned.reduce((sum, id) => sum + (getCosmetic(id)?.cost ?? 0), 0)
  // Legacy localStorage used `spent`; server state uses `xpSpent`.
  const claimed = Number(obj.xpSpent ?? obj.spent)
  const xpSpent = Math.min(Math.max(0, Number.isFinite(claimed) ? Math.floor(claimed) : 0), maxSpend)

  return { owned, equipped, xpSpent, initialized: obj.initialized === true }
}
