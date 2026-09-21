import { describe, it, expect } from 'vitest'
import {
  rollLobbyDrop,
  resolveTargets,
  questionsBehind,
  GENTLE_BLOCKED,
  TEAM_WIDE_ITEM,
  TEAM_WIDE_CHANCE,
} from '@/lib/lobby-chaos'
import { POWER_UPS, type PowerUpId } from '@/lib/chaos-powerups'

/** Deterministic rng cycling a fixed script, so a roll can be driven exactly. */
function scripted(values: number[]): () => number {
  let i = 0
  return () => values[i++ % values.length]
}

/** Mulberry32 — seeded and stable, for distribution checks. */
function seeded(seed: number): () => number {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

describe('questionsBehind', () => {
  it('converts a lobby point gap into questions behind', () => {
    // Lobby scoring is +100 / -50, so the raw gap runs to the thousands and
    // cannot feed thresholds written for a first-to-10 race.
    expect(questionsBehind(0)).toBe(0)
    expect(questionsBehind(300)).toBe(3)
    expect(questionsBehind(-200)).toBe(-2)
  })
})

describe('rollLobbyDrop — gentle intensity', () => {
  it('never yields an effect that shakes, flashes or blacks out the screen', () => {
    const rng = seeded(7)
    for (let i = 0; i < 4000; i++) {
      const drop = rollLobbyDrop({ pointDeficit: 500, intensity: 'gentle', rng })
      if (drop) expect(GENTLE_BLOCKED.has(drop.id)).toBe(false)
    }
  })

  it('still offers a team-wide item, using Freeze in place of the banned storm', () => {
    const rng = seeded(11)
    const teamWide: PowerUpId[] = []
    for (let i = 0; i < 6000; i++) {
      const drop = rollLobbyDrop({ pointDeficit: 400, intensity: 'gentle', rng })
      if (drop?.scope === 'team') teamWide.push(drop.id)
    }
    expect(teamWide.length).toBeGreaterThan(0)
    expect(new Set(teamWide)).toEqual(new Set([TEAM_WIDE_ITEM.gentle]))
  })
})

describe('rollLobbyDrop — full intensity', () => {
  it('uses the storm super for team-wide hits', () => {
    const rng = seeded(3)
    const teamWide: PowerUpId[] = []
    for (let i = 0; i < 6000; i++) {
      const drop = rollLobbyDrop({ pointDeficit: 400, intensity: 'full', rng })
      if (drop?.scope === 'team') teamWide.push(drop.id)
    }
    expect(teamWide.length).toBeGreaterThan(0)
    expect(new Set(teamWide)).toEqual(new Set([TEAM_WIDE_ITEM.full]))
  })
})

describe('rollLobbyDrop — the 90/10 split', () => {
  it('makes roughly a tenth of attack drops team-wide for a trailing student', () => {
    const rng = seeded(99)
    let attacks = 0
    let teamWide = 0
    for (let i = 0; i < 40000; i++) {
      const drop = rollLobbyDrop({ pointDeficit: 300, intensity: 'full', rng })
      if (!drop) continue
      if (drop.scope === 'team') { teamWide++; attacks++; continue }
      if (POWER_UPS[drop.id].kind === 'attack') attacks++
    }
    expect(attacks).toBeGreaterThan(1000)
    const share = teamWide / attacks
    expect(share).toBeGreaterThan(TEAM_WIDE_CHANCE * 0.7)
    expect(share).toBeLessThan(TEAM_WIDE_CHANCE * 1.4)
  })

  it('never hands a team-wide item to a student whose team is ahead', () => {
    const rng = seeded(5)
    for (let i = 0; i < 20000; i++) {
      const drop = rollLobbyDrop({ pointDeficit: -400, intensity: 'full', rng })
      if (drop) expect(drop.scope).toBe('single')
    }
  })

  it('drops more often the further behind a team is', () => {
    const rate = (deficit: number) => {
      const rng = seeded(21)
      let hits = 0
      for (let i = 0; i < 20000; i++) {
        if (rollLobbyDrop({ pointDeficit: deficit, intensity: 'full', rng })) hits++
      }
      return hits / 20000
    }
    expect(rate(500)).toBeGreaterThan(rate(0))
    expect(rate(0)).toBeGreaterThan(rate(-500))
  })

  it('gives a leading student mild utility only, never a heavy hitter', () => {
    const rng = seeded(31)
    for (let i = 0; i < 4000; i++) {
      const drop = rollLobbyDrop({ pointDeficit: -300, intensity: 'full', rng })
      if (drop) expect(['fog', 'slippery', 'shield', 'reflect', 'fifty-fifty']).toContain(drop.id)
    }
  })
})

describe('resolveTargets', () => {
  const roster = [
    { id: 'a1', team: 0, score: 100 },
    { id: 'a2', team: 0, score: 200 },
    { id: 'b1', team: 1, score: 900 },
    { id: 'b2', team: 1, score: 800 },
    { id: 'c1', team: 2, score: 300 },
  ]

  it('single scope hits exactly one student, never a teammate', () => {
    for (let i = 0; i < 50; i++) {
      const hit = resolveTargets({
        attackerTeam: 0, scope: 'single', participants: roster, rng: seeded(i),
      })
      expect(hit).toHaveLength(1)
      expect(['a1', 'a2']).not.toContain(hit[0])
    }
  })

  it('single scope can reach any opposing team, not just the leader', () => {
    const seen = new Set<string>()
    for (let i = 0; i < 200; i++) {
      seen.add(resolveTargets({
        attackerTeam: 0, scope: 'single', participants: roster, rng: seeded(i),
      })[0])
    }
    expect(seen.has('c1')).toBe(true)
  })

  it('team scope wipes the leading opposing team, and only that team', () => {
    const hit = resolveTargets({ attackerTeam: 0, scope: 'team', participants: roster })
    expect(new Set(hit)).toEqual(new Set(['b1', 'b2']))
  })

  it('team scope never catches the attacker even when their own team leads', () => {
    const leading = [
      { id: 'a1', team: 0, score: 5000 },
      { id: 'b1', team: 1, score: 100 },
    ]
    const hit = resolveTargets({ attackerTeam: 0, scope: 'team', participants: leading })
    expect(hit).toEqual(['b1'])
  })

  it('returns nobody when there is no opponent to hit', () => {
    const alone = [{ id: 'a1', team: 0, score: 100 }, { id: 'a2', team: 0, score: 50 }]
    expect(resolveTargets({ attackerTeam: 0, scope: 'single', participants: alone })).toEqual([])
    expect(resolveTargets({ attackerTeam: 0, scope: 'team', participants: alone })).toEqual([])
  })

  it('treats an unassigned attacker as opposing everyone with a team', () => {
    const hit = resolveTargets({
      attackerTeam: null, scope: 'single', participants: roster, rng: scripted([0]),
    })
    expect(hit).toHaveLength(1)
    expect(roster.map((p) => p.id)).toContain(hit[0])
  })
})
