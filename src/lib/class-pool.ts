/**
 * Class match pools — pure rules (no database).
 *
 * A teacher opens a pool from a live class; every member who joins waits in
 * it, and free players are paired CONTINUOUSLY (owner ruling 2026-10-25): no
 * teacher-run rounds, a player who finishes requeues and is paired again with
 * whoever is free. The server (class-pool-server.ts) feeds the waiting list to
 * planPoolPairings under a pool-row lock and creates one ordinary ranked match
 * per pair (or per 2v2 group).
 *
 * Rules:
 *   - Head-to-head (Speed Race / Accuracy / Chaos): free players are paired
 *     with the closest-MMR free classmate — as a whole, so five players who
 *     join together form the two closest pairs and the outlier waits (a
 *     min-cost pairing over the MMR-sorted list, then a swap pass). No MMR
 *     window: inside a class everyone is fair game, so two far-apart players
 *     still pair when they're the only ones free. Every pair needs one player
 *     who has settled (waited POOL_SETTLE_MS) — the delay lets a burst of
 *     joins ("everyone join now") pair by MMR instead of by click order. The
 *     longer someone has waited, the less they can be the one left out, and
 *     last pool match's opponent is avoided whenever anyone else is free.
 *   - Team 2v2: once four are free (one of them settled), the settled anchor
 *     and the three classmates closest to their MMR form a match, split
 *     highest + lowest vs the middle two.
 *   - Odd one out: after POOL_BOT_OFFER_MS alone (or short of four for teams)
 *     the pool offers a practice bot.
 */

export const POOL_MODES = ['SPEED_RACE', 'ACCURACY_CHALLENGE', 'TEAM_BATTLE', 'CHAOS'] as const
export type PoolMode = (typeof POOL_MODES)[number]

export function isPoolMode(v: unknown): v is PoolMode {
  return typeof v === 'string' && (POOL_MODES as readonly string[]).includes(v)
}

export const POOL_MODE_LABELS: Record<PoolMode, { icon: string; label: string; short: string }> = {
  SPEED_RACE: { icon: '⚡', label: 'Head-to-head (Speed Race)', short: 'Head-to-head' },
  ACCURACY_CHALLENGE: { icon: '🎯', label: 'Head-to-head (Accuracy)', short: 'Accuracy' },
  TEAM_BATTLE: { icon: '👥', label: 'Team 2v2', short: 'Team 2v2' },
  CHAOS: { icon: '🎲', label: 'Chaos (unranked)', short: 'Chaos' },
}

/** A waiter must have waited this long before they start a pairing. */
export const POOL_SETTLE_MS = 6_000
/** Waiting alone this long earns the practice-bot offer. */
export const POOL_BOT_OFFER_MS = 25_000
/** Queue rows older than this are dropped (closed tab, lost phone). */
export const POOL_STALE_WAIT_MS = 10 * 60 * 1000

export interface PoolWaiter {
  userId: string
  mmr: number
  /** epoch ms */
  joinedAt: number
  /** Opponents in this player's most recent pool match. */
  lastOpponents?: readonly string[]
}

export interface PoolTeamGroup {
  team1: [PoolWaiter, PoolWaiter]
  team2: [PoolWaiter, PoolWaiter]
}

export interface PoolPlan {
  pairs: Array<[PoolWaiter, PoolWaiter]>
  teams: PoolTeamGroup[]
}

const byWait = (a: PoolWaiter, b: PoolWaiter) => a.joinedAt - b.joinedAt || a.userId.localeCompare(b.userId)

/** Highest + lowest vs the middle two (sorted by MMR, descending). */
export function balanceTeams(four: readonly PoolWaiter[]): PoolTeamGroup {
  if (four.length !== 4) throw new Error('balanceTeams needs exactly 4 players')
  const s = [...four].sort((a, b) => b.mmr - a.mmr || a.userId.localeCompare(b.userId))
  return { team1: [s[0], s[3]], team2: [s[1], s[2]] }
}

/* Pairing costs, in MMR points. Leaving a settled player unpaired costs far
 * more than any MMR gap (no window inside a class) plus a little per second
 * they have already waited, so the one left out is the newest arrival unless
 * keeping them in saves a lot of MMR spread; an immediate rematch costs more
 * than any gap but less than leaving someone out. */
const SKIP_SETTLED = 10_000
const WAIT_WEIGHT_PER_S = 50
const REMATCH = 5_000

function isRematch(a: PoolWaiter, b: PoolWaiter): boolean {
  return !!(a.lastOpponents?.includes(b.userId) || b.lastOpponents?.includes(a.userId))
}

/**
 * Min-cost head-to-head pairing: an exact DP over the MMR-sorted list (pairing
 * neighbours is optimal for |MMR gap| costs), then a swap pass that fixes what
 * the rematch penalty breaks (it isn't a 1-D distance).
 */
function planHeadToHead(waiting: readonly PoolWaiter[], now: number, settleMs: number): Array<[PoolWaiter, PoolWaiter]> {
  const ripe = (w: PoolWaiter) => now - w.joinedAt >= settleMs
  const skip = (w: PoolWaiter) => (ripe(w) ? SKIP_SETTLED + (Math.max(0, now - w.joinedAt - settleMs) / 1000) * WAIT_WEIGHT_PER_S : 0)
  const pairCost = (a: PoolWaiter, b: PoolWaiter) =>
    !ripe(a) && !ripe(b) ? Infinity : Math.abs(a.mmr - b.mmr) + (isRematch(a, b) ? REMATCH : 0)

  const f = [...waiting].sort((a, b) => a.mmr - b.mmr || byWait(a, b))
  const n = f.length
  const dp: number[] = new Array(n + 1).fill(0)
  const choice: Array<'skip' | 'pair'> = new Array(n + 1).fill('skip')
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + skip(f[i - 1])
    choice[i] = 'skip'
    if (i >= 2) {
      const c = dp[i - 2] + pairCost(f[i - 2], f[i - 1])
      if (c < dp[i]) { dp[i] = c; choice[i] = 'pair' }
    }
  }
  let pairs: Array<[PoolWaiter, PoolWaiter]> = []
  for (let i = n; i > 0;) {
    if (choice[i] === 'pair') { pairs.push([f[i - 2], f[i - 1]]); i -= 2 } else i -= 1
  }
  const paired = new Set(pairs.flat())
  let skipped = f.filter((w) => !paired.has(w))

  // Swap pass: re-pair two pairs, or trade a paired player for a skipped one,
  // whenever that lowers the total. Bounded; converges in a few rounds.
  for (let round = 0; round < 50; round++) {
    let improved = false
    outer: for (let i = 0; i < pairs.length; i++) {
      const [a, b] = pairs[i]
      const cur = pairCost(a, b)
      for (let j = i + 1; j < pairs.length; j++) {
        const [c, d] = pairs[j]
        const base = cur + pairCost(c, d)
        for (const [x, y] of [[[a, c], [b, d]], [[a, d], [b, c]]] as Array<[[PoolWaiter, PoolWaiter], [PoolWaiter, PoolWaiter]]>) {
          if (pairCost(...x) + pairCost(...y) < base) { pairs[i] = x; pairs[j] = y; improved = true; break outer }
        }
      }
      for (const sk of skipped) {
        const base = cur + skip(sk)
        for (const [keep, out] of [[a, b], [b, a]] as Array<[PoolWaiter, PoolWaiter]>) {
          if (pairCost(keep, sk) + skip(out) < base) {
            pairs[i] = [keep, sk]
            skipped = skipped.filter((w) => w !== sk).concat(out)
            improved = true
            break outer
          }
        }
      }
    }
    if (!improved) break
  }
  pairs = pairs.filter(([a, b]) => Number.isFinite(pairCost(a, b)))
  // The longer-waiting player is player 1.
  return pairs.map(([a, b]) => (byWait(a, b) <= 0 ? [a, b] : [b, a]) as [PoolWaiter, PoolWaiter]).sort((p, q) => byWait(p[0], q[0]))
}

export function planPoolPairings(
  waiting: readonly PoolWaiter[],
  mode: PoolMode,
  now: number,
  settleMs: number = POOL_SETTLE_MS,
): PoolPlan {
  const plan: PoolPlan = { pairs: [], teams: [] }
  const free = [...waiting].sort(byWait)
  const ripe = (w: PoolWaiter) => now - w.joinedAt >= settleMs
  const take = (w: PoolWaiter) => free.splice(free.indexOf(w), 1)

  if (mode === 'TEAM_BATTLE') {
    for (;;) {
      if (free.length < 4) break
      const anchor = free.find(ripe)
      if (!anchor) break
      take(anchor)
      const nearest = [...free]
        .sort((a, b) => Math.abs(a.mmr - anchor.mmr) - Math.abs(b.mmr - anchor.mmr) || byWait(a, b))
        .slice(0, 3)
      nearest.forEach(take)
      plan.teams.push(balanceTeams([anchor, ...nearest]))
    }
    return plan
  }

  plan.pairs = planHeadToHead(free, now, settleMs)
  return plan
}

/**
 * Should this waiting player be offered a practice bot? Alone for 25 s in a
 * head-to-head pool, or short of four for 25 s in a team pool.
 */
export function botOfferFor(
  me: Pick<PoolWaiter, 'userId' | 'joinedAt'> | null,
  waitingCount: number,
  mode: PoolMode,
  now: number,
): boolean {
  if (!me) return false
  if (now - me.joinedAt < POOL_BOT_OFFER_MS) return false
  return mode === 'TEAM_BATTLE' ? waitingCount < 4 : waitingCount <= 1
}

/* ------------------------------------------------------------------------ */
/* Match screens: where "Play again" goes.                                   */
/* ------------------------------------------------------------------------ */

export const CLASS_POOL_FROM_PREFIX = 'class-pool:'

/** `?from=` value for a match started from a class pool. */
export function classPoolFrom(poolId: string): string {
  return `${CLASS_POOL_FROM_PREFIX}${poolId}`
}

/** The class pool id a match page's `?from=` points back to, if any. */
export function classPoolIdFromParam(from: string | null | undefined): string | null {
  if (!from || !from.startsWith(CLASS_POOL_FROM_PREFIX)) return null
  const id = from.slice(CLASS_POOL_FROM_PREFIX.length)
  return /^[A-Za-z0-9_-]{1,64}$/.test(id) ? id : null
}

/**
 * Where a match page's back / play-again button goes: the class pool (which
 * requeues on arrival) for pool matches, else the competitive course page
 * named by `from`, else the hub — the behaviour every other match keeps.
 */
export function matchBackPath(from: string | null | undefined): string {
  const poolId = classPoolIdFromParam(from)
  if (poolId) return `/competitive/class/${poolId}`
  return from ? `/competitive/${from}` : '/competitive'
}
