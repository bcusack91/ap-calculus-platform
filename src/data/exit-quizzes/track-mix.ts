/**
 * Track-routed difficulty mixes for exit quizzes (AP difficulty tracks,
 * src/lib/ap-track.ts).
 *
 * A mix is not a tier filter: it reweights the draw from a topic's pool and
 * then tops up from the neighbouring tiers, so a tracked quiz is ALWAYS the
 * same size as the untracked one (min(count, pool size)). A topic with no hard
 * items still gets a full 5-track quiz (medium first, then easy); a topic with
 * few easy items still gets a full Foundation quiz.
 *
 * The mix travels as the quiz's `difficulty` (ExitQuizAttempt.difficulty is a
 * free string), alongside the seed, so the submit route and /review rebuild the
 * exact quiz. The values are new strings on purpose: 'easy' / 'medium' / 'hard'
 * were already sent by tiered practice and stored on old attempts, and the AP
 * pools ignored them, so honouring those would change how old attempts replay.
 *
 * Randomness goes through Math.random only, so the seeded generator in
 * index.ts reproduces a draw exactly.
 */

export type ExitQuizTier = 'easy' | 'medium' | 'hard'
export type ExitQuizTrackMix = 'foundation-mix' | 'five-mix'

export const EXIT_QUIZ_TRACK_MIXES: readonly ExitQuizTrackMix[] = ['foundation-mix', 'five-mix']

export function isTrackMix(d: unknown): d is ExitQuizTrackMix {
  return d === 'foundation-mix' || d === 'five-mix'
}

/**
 * Target share of each tier, and the order leftover seats are filled in when
 * a tier runs short.
 *
 * - Foundation: half easy, half medium, no hard by design; hard items appear
 *   only when easy + medium cannot fill the quiz.
 * - 5-track: half medium, half hard, no easy by design. Hard is the scarcest
 *   tier in the AP pools (often 1–5 per topic), so in practice the quiz takes
 *   every hard item, fills with medium, and uses easy only as a last resort.
 */
export const TRACK_MIX_RULES: Record<ExitQuizTrackMix, { share: Record<ExitQuizTier, number>; fill: ExitQuizTier[] }> = {
  'foundation-mix': { share: { easy: 0.5, medium: 0.5, hard: 0 }, fill: ['easy', 'medium', 'hard'] },
  'five-mix': { share: { easy: 0, medium: 0.5, hard: 0.5 }, fill: ['hard', 'medium', 'easy'] },
}

function shuffle<T>(items: readonly T[]): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/**
 * Draw `count` items (or the whole pool when it is smaller) weighted by the
 * track's mix. `tierOf` reads an item's difficulty; untagged items count as
 * medium. Deterministic under a seeded Math.random.
 */
export function drawTrackMix<T>(
  pool: readonly T[],
  count: number,
  mix: ExitQuizTrackMix,
  tierOf: (item: T) => ExitQuizTier | undefined,
): T[] {
  const n = Math.max(0, Math.min(Math.floor(count), pool.length))
  if (n === 0) return []
  const rules = TRACK_MIX_RULES[mix]
  const byTier: Record<ExitQuizTier, T[]> = { easy: [], medium: [], hard: [] }
  for (const item of shuffle(pool)) byTier[tierOf(item) ?? 'medium'].push(item)

  const picked: T[] = []
  const taken: Record<ExitQuizTier, number> = { easy: 0, medium: 0, hard: 0 }
  // 1. Each tier's target share, as far as the tier has items.
  for (const tier of rules.fill) {
    const want = Math.min(Math.round(n * rules.share[tier]), n - picked.length, byTier[tier].length)
    picked.push(...byTier[tier].slice(0, want))
    taken[tier] = want
  }
  // 2. Top up the seats a short tier left empty, in the track's fill order.
  for (const tier of rules.fill) {
    if (picked.length >= n) break
    const more = byTier[tier].slice(taken[tier], taken[tier] + (n - picked.length))
    picked.push(...more)
  }
  // Interleave the tiers so the hard (or easy) items are not bunched together.
  return shuffle(picked)
}

/**
 * A pool generator's draw: the difficulty-weighted draw for a track mix, else
 * the pool's own untracked draw, untouched. Any other `difficulty` value
 * ('easy' / 'medium' / 'hard' from tiered practice, or none) takes the
 * untracked draw, exactly as before the tracks existed.
 */
export function drawWithTrackMix<T extends { difficulty?: ExitQuizTier }>(
  pool: readonly T[],
  count: number,
  difficulty: unknown,
  untracked: () => T[],
): T[] {
  return isTrackMix(difficulty) ? drawTrackMix(pool, count, difficulty, (q) => q.difficulty) : untracked()
}
