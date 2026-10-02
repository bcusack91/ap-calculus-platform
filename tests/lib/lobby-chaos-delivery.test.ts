/**
 * Chaos attacks in class / free-for-all lobbies reach the victim intact
 * (bug report 2026-10-01: "Blackout said it landed, but the screen never went
 * dark, or only for an instant").
 *
 * Causes fixed, and pinned here:
 *  1. Attacks were timed from the moment they were FIRED (server clock), and
 *     the victim only polls every 2s, so most of a 3s Blackout was spent before
 *     it arrived. ingestEffects now times each attack from its arrival.
 *  2. The answer and power-up routes each read a player's powerUps blob,
 *     changed it, and wrote it back, so an answer submitted at the same moment
 *     as an attack erased it. Both now lock the rows they write and re-read
 *     inside the transaction.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { ingestEffects } from '@/lib/chaos-arrival'
import type { ActiveEffect } from '@/lib/chaos-powerups'

const blackout = (id: string, startedAt: number): ActiveEffect => ({
  id, type: 'blackout', from: 'Rival', startedAt, durationMs: 3000,
})

describe('ingestEffects: attacks are timed from arrival', () => {
  it('gives a late-arriving Blackout its full 3 seconds', () => {
    const fired = 1_000_000
    const arrived = fired + 2600 // a 2s poll gap plus request time
    const seen = new Set<string>()
    const { effects, fresh } = ingestEffects([], [blackout('b1', fired)], arrived, seen)
    expect(fresh).toHaveLength(1)
    expect(effects[0].startedAt).toBe(arrived)
    expect(effects[0].startedAt + effects[0].durationMs - arrived).toBe(3000)
  })

  it('does not depend on the device clock agreeing with the server', () => {
    // Device clock 5s ahead of the server: on server time this attack would
    // already be over when it lands.
    const { effects } = ingestEffects([], [blackout('b1', 1_000_000)], 1_000_000 + 5_000, new Set())
    expect(effects).toHaveLength(1)
  })

  it('keeps an attack running after the server stops listing it', () => {
    const seen = new Set<string>()
    const first = ingestEffects([], [blackout('b1', 0)], 2500, seen)
    // Next poll, 2s later: the server pruned it on its own clock.
    const second = ingestEffects(first.effects, [], 4500, seen)
    expect(second.effects.map((e) => e.id)).toEqual(['b1'])
    // It ends on the local clock: 3s after arrival.
    expect(ingestEffects(second.effects, [], 5500, seen).effects).toEqual([])
  })

  it('never restarts or re-announces an attack a later poll still lists', () => {
    const seen = new Set<string>()
    const first = ingestEffects([], [blackout('b1', 0)], 1000, seen)
    const again = ingestEffects(first.effects, [blackout('b1', 0)], 3000, seen)
    expect(again.fresh).toEqual([])
    expect(again.effects[0].startedAt).toBe(1000)
  })

  it('leaves self items (Time Warp) on server time, matching the server-side doubling', () => {
    const warp: ActiveEffect = { id: 'w1', type: 'time-warp', from: 'Me', startedAt: 500, durationMs: 5000 }
    const { effects } = ingestEffects([], [warp], 900, new Set())
    expect(effects[0].startedAt).toBe(500)
    // ...and drops one that is already over.
    expect(ingestEffects([], [warp], 6000, new Set()).effects).toEqual([])
  })
})

// ---- Route locking -------------------------------------------------------

type Row = { id: string; lobbyId: string; userId: string; team: number | null; score: number; powerUps: unknown; lastQuestionIndex: number; questionsAnswered: number; questionsCorrect: number; user?: { name: string } }

const calls: string[] = []
const rows = new Map<string, Row>()
let sessionUser = 'u-attacker'

function sqlText(strings: TemplateStringsArray) {
  return strings.join('?')
}
function sqlIds(values: unknown[]): string[] {
  // The power-up route passes Prisma.join(ids); the answer route passes plain values.
  const v = values[0] as { values?: unknown[] } | string
  return typeof v === 'object' && v?.values ? (v.values as string[]) : (values as string[])
}

const model = {
  findUnique: vi.fn(async ({ where }: { where: { id?: string; lobbyId_userId?: { userId: string } } }) => {
    calls.push('read')
    const row = where.id ? rows.get(where.id) : [...rows.values()].find((r) => r.userId === where.lobbyId_userId?.userId)
    return row ? structuredClone(row) : null
  }),
  findMany: vi.fn(async ({ where }: { where: { id?: { in: string[] } } }) => {
    calls.push('read-many')
    const all = [...rows.values()]
    return structuredClone(where.id ? all.filter((r) => where.id!.in.includes(r.id)) : all)
  }),
  update: vi.fn(async ({ where, data }: { where: { id: string }; data: Record<string, unknown> }) => {
    calls.push(`write:${where.id}`)
    const row = rows.get(where.id)!
    if (data.powerUps !== undefined) row.powerUps = structuredClone(data.powerUps)
    if (typeof data.lastQuestionIndex === 'number') row.lastQuestionIndex = data.lastQuestionIndex
    return structuredClone(row)
  }),
}
const tx = {
  $queryRaw: vi.fn(async (strings: TemplateStringsArray, ...values: unknown[]) => {
    calls.push(`lock:${sqlText(strings).includes('FOR UPDATE') ? sqlIds(values).join(',') : 'none'}`)
    return []
  }),
  teacherLobbyParticipant: model,
}

vi.mock('@/lib/auth', () => ({ auth: async () => ({ user: { id: sessionUser } }) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    teacherLobby: {
      findUnique: vi.fn(async () => ({
        id: 'L1', status: 'IN_PROGRESS', gameMode: 'CHAOS', chaosIntensity: 'full', endsAt: null,
        questionPool: [{ correctAnswer: 0, options: ['a', 'b', 'c', 'd'] }, { correctAnswer: 0, options: ['a', 'b', 'c', 'd'] }],
      })),
    },
    teacherLobbyParticipant: model,
    $transaction: async (fn: (t: typeof tx) => unknown) => {
      calls.push('begin')
      const out = await fn(tx)
      calls.push('commit')
      return out
    },
  },
}))

function seed() {
  calls.length = 0
  rows.clear()
  rows.set('p-b', { id: 'p-b', lobbyId: 'L1', userId: 'u-attacker', team: 1, score: 0, powerUps: { inventory: [{ id: 'blackout', scope: 'single' }], effects: [] }, lastQuestionIndex: 0, questionsAnswered: 0, questionsCorrect: 0, user: { name: 'Attacker' } })
  rows.set('p-a', { id: 'p-a', lobbyId: 'L1', userId: 'u-victim', team: 0, score: 0, powerUps: { inventory: [], effects: [] }, lastQuestionIndex: 0, questionsAnswered: 0, questionsCorrect: 0, user: { name: 'Victim' } })
}
const post = (body: unknown) => new NextRequest('http://localhost/x', { method: 'POST', body: JSON.stringify(body) })
const ctx = { params: Promise.resolve({ id: 'L1' }) }

describe('power-up route locks before it writes', () => {
  beforeEach(seed)

  it('locks attacker and victim in one id-ordered statement, then re-reads, then writes', async () => {
    sessionUser = 'u-attacker'
    const { POST } = await import('@/app/api/teacher/lobby/[id]/powerup/route')
    const res = await POST(post({ powerUpId: 'blackout' }), ctx)
    expect(res.status).toBe(200)
    const t = calls.slice(calls.indexOf('begin'))
    expect(t[1]).toBe('lock:p-a,p-b') // sorted: no deadlock between mutual attackers
    expect(t.indexOf('read-many')).toBeGreaterThan(1)
    expect(t.filter((c) => c.startsWith('write:'))).toEqual(['write:p-a', 'write:p-b'])
    expect((rows.get('p-a')!.powerUps as { effects: ActiveEffect[] }).effects.map((e) => e.type)).toEqual(['blackout'])
  })

  it('cannot spend the same item twice (a double tap finds it gone under the lock)', async () => {
    sessionUser = 'u-attacker'
    const { POST } = await import('@/app/api/teacher/lobby/[id]/powerup/route')
    expect((await POST(post({ powerUpId: 'blackout' }), ctx)).status).toBe(200)
    // Simulate the second request having read the inventory before the first wrote.
    const stale = structuredClone(rows.get('p-b')!)
    ;(stale.powerUps as { inventory: unknown[] }).inventory = [{ id: 'blackout', scope: 'single' }]
    model.findUnique.mockImplementationOnce(async () => { calls.push('read'); return stale })
    const second = await POST(post({ powerUpId: 'blackout' }), ctx)
    expect(second.status).toBe(400)
    expect((rows.get('p-a')!.powerUps as { effects: ActiveEffect[] }).effects).toHaveLength(1)
  })
})

describe('answer route locks before it reads', () => {
  beforeEach(seed)

  it('locks the player row, then reads it, so an attack that already landed survives the answer', async () => {
    // The attack landed (and committed) just before the victim's answer.
    ;(rows.get('p-a')!.powerUps as { effects: ActiveEffect[] }).effects.push(blackout('hit', Date.now()))
    sessionUser = 'u-victim'
    const { POST } = await import('@/app/api/teacher/lobby/[id]/answer/route')
    const res = await POST(post({ questionIndex: 0, selectedIndex: 0 }), ctx)
    expect(res.status).toBe(200)
    const t = calls.slice(calls.indexOf('begin'))
    expect(t[1].startsWith('lock:')).toBe(true)
    expect(t[2]).toBe('read')
    expect(t).toContain('write:p-a')
    expect(t[t.length - 1]).toBe('commit')
    expect((rows.get('p-a')!.powerUps as { effects: ActiveEffect[] }).effects.map((e) => e.id)).toContain('hit')
  })
})
