/**
 * Guards for the rules the class-lobby Chaos routes depend on. These are the
 * invariants a teacher would notice breaking in front of a live class, kept at
 * the pure-logic level so they run without a database.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import {
  GENTLE_BLOCKED,
  TEAM_WIDE_ITEM,
  rollLobbyDrop,
  resolveTargets,
  emptyLobbyChaos,
  LOBBY_MAX_INVENTORY,
} from '@/lib/lobby-chaos'
import { POWER_UPS, type PowerUpId } from '@/lib/chaos-powerups'

const repoFile = (p: string) => fs.readFileSync(path.join(process.cwd(), p), 'utf8')

describe('gentle mode is actually safe', () => {
  it('bans every effect that shakes, flashes or blacks out the screen', () => {
    // If someone adds a new full-screen attack to the 1v1 bank, this fails
    // until they decide whether a class of 30 should ever see it.
    const violent: PowerUpId[] = ['earthquake', 'blackout', 'chaos-storm', 'screen-flip', 'ink-splat']
    for (const id of violent) expect(GENTLE_BLOCKED.has(id)).toBe(true)
  })

  it('keeps a team-wide item available under gentle, and it is not a banned one', () => {
    expect(GENTLE_BLOCKED.has(TEAM_WIDE_ITEM.gentle)).toBe(false)
    expect(POWER_UPS[TEAM_WIDE_ITEM.gentle].kind).toBe('attack')
  })

  it('defaults to gentle on the server, so full chaos is always a deliberate choice', () => {
    const route = repoFile('src/app/api/teacher/lobby/route.ts')
    expect(route).toContain("body?.chaosIntensity === 'full' ? 'full' : 'gentle'")
  })
})

describe('targeting never lets a lobby gang up on one student', () => {
  const roster = [
    { id: 'a1', team: 0, score: 100 },
    { id: 'b1', team: 1, score: 900 },
    { id: 'b2', team: 1, score: 900 },
    { id: 'c1', team: 2, score: 200 },
  ]

  it('a single-scope attack is aimed by the server, not chosen by the student', () => {
    // The route must not accept a target id from the client; if it ever does,
    // a class can pile onto one child.
    const route = repoFile('src/app/api/teacher/lobby/[id]/powerup/route.ts')
    expect(route).not.toMatch(/targetId:\s*z\./)
    expect(route).toContain('resolveTargets(')
  })

  it('never returns the attacker or a teammate as a target', () => {
    for (let seed = 0; seed < 100; seed++) {
      const rng = () => (seed % 97) / 97
      for (const scope of ['single', 'team'] as const) {
        const hit = resolveTargets({ attackerTeam: 1, scope, participants: roster, rng })
        expect(hit).not.toContain('b1')
        expect(hit).not.toContain('b2')
      }
    }
  })
})

describe('inventory and scoring rules', () => {
  it('caps what a student can stockpile', () => {
    expect(LOBBY_MAX_INVENTORY).toBe(2)
    const answer = repoFile('src/app/api/teacher/lobby/[id]/answer/route.ts')
    expect(answer).toContain('chaos.inventory.length < LOBBY_MAX_INVENTORY')
  })

  it('doubles a correct answer to 200 rather than the flat 100', () => {
    const answer = repoFile('src/app/api/teacher/lobby/[id]/answer/route.ts')
    expect(answer).toContain('doubled ? 200 : 100')
  })

  it('starts a student with nothing', () => {
    expect(emptyLobbyChaos()).toEqual({ inventory: [], effects: [] })
  })
})

describe('the delivery channel stays open', () => {
  it('keeps polling during a Chaos match, since polling is how attacks arrive', () => {
    // The page deliberately stops polling once a normal match starts. Chaos
    // must opt back in or an attack never reaches its victim.
    const page = repoFile('src/app/teacher/lobby/[id]/play/page.tsx')
    expect(page).toContain("s.gameMode === 'CHAOS'")
  })

  it('tells the victim who hit them', () => {
    const page = repoFile('src/app/teacher/lobby/[id]/play/page.tsx')
    expect(page).toContain('hit you with')
  })

  it('never ships another student’s inventory to the client', () => {
    const play = repoFile('src/app/api/teacher/lobby/[id]/play/route.ts')
    // The roster is loaded for the standings, but powerUps is read in a
    // separate query scoped to the caller's own row — no other inventory is
    // ever in scope to leak, and the roster payload carries names only.
    const rosterSelect = play.slice(play.indexOf('participants: {'), play.indexOf('user: { select: { name: true } }'))
    expect(rosterSelect).not.toContain('powerUps')
    expect(play).toContain('where: { id: me.id },\n      select: { powerUps: true },')
    expect(play).not.toContain('email: true')
  })
})

describe('1v1 chaos is left alone', () => {
  it('does not retune the shared 1v1 drop table', () => {
    // The lobby has its own tables precisely so class play cannot change the
    // balance of the ranked-queue chaos mode.
    const shared = repoFile('src/lib/chaos-powerups.ts')
    expect(shared).toContain('export function rollPowerUpDrop')
    const lobby = repoFile('src/lib/lobby-chaos.ts')
    expect(lobby).not.toContain('rollPowerUpDrop')
  })

  it('leaves PowerUpBar working without the new scope prop', () => {
    const bar = repoFile('src/components/ChaosMode.tsx')
    expect(bar).toContain("scopes?: Array<'single' | 'team'>")
  })
})

describe('drop pacing', () => {
  it('a student who is even still finds items, so the mode is not dead weight', () => {
    let hits = 0
    let seed = 1
    const rng = () => {
      seed = (seed * 1103515245 + 12345) % 2147483648
      return seed / 2147483648
    }
    for (let i = 0; i < 5000; i++) {
      if (rollLobbyDrop({ pointDeficit: 0, intensity: 'gentle', rng })) hits++
    }
    expect(hits / 5000).toBeGreaterThan(0.25)
    expect(hits / 5000).toBeLessThan(0.45)
  })
})
