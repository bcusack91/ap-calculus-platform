import { describe, it, expect } from 'vitest'
import {
  balanceTeams,
  botOfferFor,
  classPoolFrom,
  classPoolIdFromParam,
  matchBackPath,
  planPoolPairings,
  POOL_BOT_OFFER_MS,
  POOL_SETTLE_MS,
  type PoolWaiter,
} from '@/lib/class-pool'

const NOW = 1_000_000
const w = (userId: string, mmr: number, waitedMs = 10_000, lastOpponents?: string[]): PoolWaiter => ({
  userId,
  mmr,
  joinedAt: NOW - waitedMs,
  lastOpponents,
})
const ids = (pairs: Array<[PoolWaiter, PoolWaiter]>) => pairs.map(([a, b]) => [a.userId, b.userId].sort().join('+')).sort()

describe('planPoolPairings — head-to-head', () => {
  it('pairs each settled player with the closest-MMR free classmate (5 players → 2 pairs, 1 waits)', () => {
    // a joined first; closest to a (900) is b (1000); then c (1100) takes d (1300); e waits.
    const plan = planPoolPairings([w('a', 900, 9000), w('b', 1000, 8000), w('c', 1100, 7000), w('d', 1300, 6000), w('e', 1600, 5000)], 'SPEED_RACE', NOW)
    expect(ids(plan.pairs)).toEqual(['a+b', 'c+d'])
    expect(plan.teams).toEqual([])
  })

  it('five who join together form the two closest pairs, whatever the click order', () => {
    // The 1600 clicked first, by a millisecond — still the outlier who waits.
    const plan = planPoolPairings([w('s1600', 1600, 10_005), w('s1300', 1300, 10_004), w('s900', 900, 10_003), w('s1000', 1000, 10_002), w('s1100', 1100, 10_001)], 'SPEED_RACE', NOW)
    expect(ids(plan.pairs)).toEqual(['s1000+s900', 's1100+s1300'])
  })

  it('someone who has waited much longer is not the one left out again', () => {
    // 'old' (1600) has waited a minute; the newcomers re-pair around them.
    const plan = planPoolPairings([w('old', 1600, 70_000), w('a', 900), w('b', 1000), w('c', 1100), w('d', 1300)], 'SPEED_RACE', NOW)
    expect(plan.pairs.flat().map((p) => p.userId)).toContain('old')
    expect(plan.pairs).toHaveLength(2)
  })

  it('a burst of joins pairs by MMR, not by click order', () => {
    // Click order low, high, low, high — closest-MMR wins over arrival order.
    const plan = planPoolPairings([w('low1', 800, 9000), w('high1', 1500, 8900), w('low2', 820, 8800), w('high2', 1490, 8700)], 'SPEED_RACE', NOW)
    expect(ids(plan.pairs)).toEqual(['high1+high2', 'low1+low2'])
  })

  it('no MMR window inside a class: far-apart players still pair when they are the only two', () => {
    const plan = planPoolPairings([w('a', 600), w('b', 2400)], 'ACCURACY_CHALLENGE', NOW)
    expect(ids(plan.pairs)).toEqual(['a+b'])
  })

  it('waits for the settle delay before anyone starts a pairing', () => {
    const fresh = planPoolPairings([w('a', 1000, POOL_SETTLE_MS - 1), w('b', 1000, 100)], 'SPEED_RACE', NOW)
    expect(fresh.pairs).toEqual([])
    const settled = planPoolPairings([w('a', 1000, POOL_SETTLE_MS), w('b', 1000, 100)], 'SPEED_RACE', NOW)
    expect(ids(settled.pairs)).toEqual(['a+b'])
  })

  it('avoids an immediate rematch when another classmate is free', () => {
    // b is closest to a, but they just played; c is free, so a gets c.
    const plan = planPoolPairings([w('a', 1000, 9000, ['b']), w('b', 1010, 8000, ['a']), w('c', 1200, 7000)], 'SPEED_RACE', NOW)
    expect(ids(plan.pairs)).toEqual(['a+c'])
  })

  it('rematches when the last opponent is the only one free', () => {
    const plan = planPoolPairings([w('a', 1000, 9000, ['b']), w('b', 1010, 8000, ['a'])], 'CHAOS', NOW)
    expect(ids(plan.pairs)).toEqual(['a+b'])
  })

  it('odd one out stays waiting', () => {
    const plan = planPoolPairings([w('solo', 1000)], 'SPEED_RACE', NOW)
    expect(plan.pairs).toEqual([])
  })
})

describe('planPoolPairings — team 2v2', () => {
  it('forms a match once four are free, highest + lowest vs the middle two', () => {
    const plan = planPoolPairings([w('a', 1400), w('b', 1000, 9000), w('c', 1200), w('d', 900)], 'TEAM_BATTLE', NOW)
    expect(plan.pairs).toEqual([])
    expect(plan.teams).toHaveLength(1)
    const t = plan.teams[0]
    expect(t.team1.map((p) => p.userId)).toEqual(['a', 'd'])
    expect(t.team2.map((p) => p.userId)).toEqual(['c', 'b'])
  })

  it('three free players wait; the anchor takes the three nearest MMRs when more are free', () => {
    expect(planPoolPairings([w('a', 1000), w('b', 1000), w('c', 1000)], 'TEAM_BATTLE', NOW).teams).toEqual([])
    const plan = planPoolPairings(
      [w('anchor', 1000, 20_000), w('n1', 1010), w('n2', 990), w('n3', 1050), w('far', 2000)],
      'TEAM_BATTLE',
      NOW,
    )
    const players = [...plan.teams[0].team1, ...plan.teams[0].team2].map((p) => p.userId).sort()
    expect(players).toEqual(['anchor', 'n1', 'n2', 'n3'])
  })

  it('needs at least one settled player', () => {
    const plan = planPoolPairings([w('a', 1000, 1), w('b', 1000, 1), w('c', 1000, 1), w('d', 1000, 1)], 'TEAM_BATTLE', NOW)
    expect(plan.teams).toEqual([])
  })

  it('balanceTeams keeps team averages close', () => {
    const t = balanceTeams([w('a', 1600), w('b', 1400), w('c', 1200), w('d', 1000)])
    const avg = (team: PoolWaiter[]) => (team[0].mmr + team[1].mmr) / 2
    expect(Math.abs(avg(t.team1) - avg(t.team2))).toBe(0)
    expect(() => balanceTeams([w('a', 1), w('b', 2)])).toThrow()
  })
})

describe('botOfferFor (odd one out)', () => {
  it('offers a bot after 25 s alone in a head-to-head pool', () => {
    const me = { userId: 'me', joinedAt: NOW - POOL_BOT_OFFER_MS }
    expect(botOfferFor(me, 1, 'SPEED_RACE', NOW)).toBe(true)
    expect(botOfferFor({ ...me, joinedAt: NOW - POOL_BOT_OFFER_MS + 1 }, 1, 'SPEED_RACE', NOW)).toBe(false)
    expect(botOfferFor(me, 2, 'SPEED_RACE', NOW)).toBe(false)
    expect(botOfferFor(null, 1, 'SPEED_RACE', NOW)).toBe(false)
  })
  it('team pools offer it while fewer than four are waiting', () => {
    const me = { userId: 'me', joinedAt: NOW - 30_000 }
    expect(botOfferFor(me, 3, 'TEAM_BATTLE', NOW)).toBe(true)
    expect(botOfferFor(me, 4, 'TEAM_BATTLE', NOW)).toBe(false)
  })
})

describe('match screen back links', () => {
  it('class-pool matches go back to the pool page; others keep their behaviour', () => {
    expect(classPoolFrom('abc123')).toBe('class-pool:abc123')
    expect(classPoolIdFromParam('class-pool:abc123')).toBe('abc123')
    expect(matchBackPath('class-pool:abc123')).toBe('/competitive/class/abc123')
    expect(matchBackPath('ap-calculus-ab')).toBe('/competitive/ap-calculus-ab')
    expect(matchBackPath(null)).toBe('/competitive')
    expect(classPoolIdFromParam('ap-calculus-ab')).toBeNull()
    expect(classPoolIdFromParam('class-pool:../../x')).toBeNull()
  })
})
