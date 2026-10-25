/**
 * Class match pools against an in-memory Prisma stand-in that honours the
 * where-clauses the routes use (poolId: null included) and the pool-row
 * `FOR UPDATE SKIP LOCKED` lock: isolation from the public queues, access
 * control, close / auto-close, and concurrent joins / passes never
 * double-booking anyone. Question drawing is stubbed.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

type Row = Record<string, unknown> & { id: string }
const db = vi.hoisted(() => ({
  tables: {} as Record<string, Array<Record<string, unknown> & { id: string }>>,
  locks: new Set<string>(),
  seq: 0,
}))

const mockAuth = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/app/api/competitive/_lib/sweep-stale-matches', () => ({
  sweepStaleMatchesForUser: vi.fn(async () => 0),
  sweepStaleMatchById: vi.fn(async () => false),
  STALE_MATCH_MS: 15 * 60 * 1000,
}))
vi.mock('@/lib/competitive-utils', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/lib/competitive-utils')>()
  return {
    ...actual,
    generateMatchQuestions: vi.fn(async (count: number) =>
      Array.from({ length: Math.min(count, 3) }, (_, i) => ({ id: i, question: `Q${i}`, options: ['a', 'b'], correctAnswer: 0, answerIndex: 0, type: 'multiple-choice' })),
    ),
  }
})
vi.mock('@/lib/bot-pacing-server', () => ({
  paceMatchQuestions: vi.fn(async (questions: unknown[]) => ({ questions, pacing: { paceCourseKey: 'test' } })),
}))

/* ---------------- in-memory prisma ---------------- */

function matches(row: Record<string, unknown>, where: Record<string, unknown> | undefined): boolean {
  if (!where) return true
  for (const [key, cond] of Object.entries(where)) {
    if (key === 'OR') {
      if (!(cond as Array<Record<string, unknown>>).some((c) => matches(row, c))) return false
      continue
    }
    const v = row[key]
    if (cond === null) { if (v !== null && v !== undefined) return false; continue }
    if (typeof cond === 'object' && !(cond instanceof Date)) {
      const c = cond as Record<string, unknown>
      if ('in' in c && !(c.in as unknown[]).includes(v)) return false
      if ('not' in c && v === c.not) return false
      if ('lt' in c && !((v as number | Date) < (c.lt as number | Date))) return false
      if ('lte' in c && !((v as number | Date) <= (c.lte as number | Date))) return false
      if ('gte' in c && !((v as number | Date) >= (c.gte as number | Date))) return false
      continue
    }
    if (v !== cond) return false
  }
  return true
}

const DEFAULTS: Record<string, () => Record<string, unknown>> = {
  matchmakingQueue: () => ({ joinedAt: new Date(), poolId: null, tier: null, gameMode: 'SPEED_RACE' }),
  classMatchPool: () => ({ status: 'OPEN', ranked: true, createdAt: new Date(), closedAt: null, liveSessionId: null, courseSlug: null, gameMode: 'SPEED_RACE' }),
  competitiveMatch: () => ({ startedAt: new Date(), completedAt: null, winnerId: null, poolId: null }),
  competitiveProfile: () => ({ overallMMR: 1000 }),
}

function model(name: string) {
  const t = () => (db.tables[name] ??= [])
  const pick = (rows: Row[], args?: { orderBy?: Record<string, 'asc' | 'desc'> | Array<Record<string, 'asc' | 'desc'>>; take?: number }) => {
    let out = [...rows]
    const orders = args?.orderBy ? (Array.isArray(args.orderBy) ? args.orderBy : [args.orderBy]) : []
    for (const o of [...orders].reverse()) {
      const [k, dir] = Object.entries(o)[0]
      out.sort((a, b) => ((a[k] as number) > (b[k] as number) ? 1 : (a[k] as number) < (b[k] as number) ? -1 : 0) * (dir === 'desc' ? -1 : 1))
    }
    if (args?.take) out = out.slice(0, args.take)
    return out
  }
  const withUser = (r: Row) => ({ ...r, user: db.tables.user?.find((u) => u.id === r.userId) ?? { name: null } })
  return {
    findUnique: vi.fn(async ({ where }: { where: Record<string, unknown> }) => {
      const flat = Object.fromEntries(Object.entries(where).flatMap(([k, v]) => (typeof v === 'object' && v !== null && !(v instanceof Date) ? Object.entries(v) : [[k, v]])))
      return t().find((r) => matches(r, flat)) ?? null
    }),
    findFirst: vi.fn(async (args: { where?: Record<string, unknown>; orderBy?: Record<string, 'asc' | 'desc'> } = {}) => pick(t().filter((r) => matches(r, args.where)), args)[0] ?? null),
    findMany: vi.fn(async (args: { where?: Record<string, unknown>; orderBy?: Record<string, 'asc' | 'desc'>; take?: number; select?: Record<string, unknown> } = {}) => {
      const rows = pick(t().filter((r) => matches(r, args.where)), args)
      return name === 'matchmakingQueue' ? rows.map(withUser) : rows
    }),
    count: vi.fn(async (args: { where?: Record<string, unknown> } = {}) => t().filter((r) => matches(r, args.where)).length),
    create: vi.fn(async ({ data }: { data: Record<string, unknown> }) => {
      if (name === 'matchmakingQueue' && t().some((r) => r.userId === data.userId)) throw Object.assign(new Error('unique'), { code: 'P2002' })
      const row = { id: `${name}-${++db.seq}`, ...(DEFAULTS[name]?.() ?? {}), ...data } as Row
      t().push(row)
      return row
    }),
    upsert: vi.fn(async ({ where, create }: { where: Record<string, unknown>; create: Record<string, unknown> }) => {
      const found = t().find((r) => matches(r, where))
      if (found) return found
      const row = { id: `${name}-${++db.seq}`, ...(DEFAULTS[name]?.() ?? {}), ...create } as Row
      t().push(row)
      return row
    }),
    update: vi.fn(async ({ where, data }: { where: Record<string, unknown>; data: Record<string, unknown> }) => {
      const row = t().find((r) => matches(r, where))
      if (!row) throw new Error('not found')
      Object.assign(row, data)
      return row
    }),
    updateMany: vi.fn(async ({ where, data }: { where: Record<string, unknown>; data: Record<string, unknown> }) => {
      const rows = t().filter((r) => matches(r, where))
      rows.forEach((r) => Object.assign(r, data))
      return { count: rows.length }
    }),
    delete: vi.fn(async ({ where }: { where: Record<string, unknown> }) => {
      const i = t().findIndex((r) => matches(r, where))
      if (i < 0) throw new Error('not found')
      return t().splice(i, 1)[0]
    }),
    deleteMany: vi.fn(async ({ where }: { where?: Record<string, unknown> } = {}) => {
      const keep = t().filter((r) => !matches(r, where))
      const count = t().length - keep.length
      db.tables[name] = keep
      return { count }
    }),
  }
}

vi.mock('@/lib/prisma', () => {
  const names = ['user', 'classroom', 'classroomCoTeacher', 'classroomMember', 'classMatchPool', 'matchmakingQueue', 'competitiveMatch', 'competitiveProfile', 'liveSession', 'topic', 'course', 'slideDeck']
  const base = Object.fromEntries(names.map((n) => [n, model(n)])) as Record<string, ReturnType<typeof model>>
  const makeTx = (held: string[]) => ({
    ...base,
    $queryRaw: vi.fn(async (strings: TemplateStringsArray, ...values: unknown[]) => {
      const sql = strings.join('?')
      if (sql.includes('FROM "ClassMatchPool"')) {
        const id = values[0] as string
        if (db.locks.has(id)) return [] // SKIP LOCKED
        const pool = db.tables.classMatchPool?.find((p) => p.id === id)
        if (!pool) return []
        db.locks.add(id)
        held.push(id)
        // Let a competing pass interleave while we hold the lock.
        await new Promise((r) => setTimeout(r, 5))
        return [{ id, status: pool.status, gameMode: pool.gameMode, matchTopicSlug: pool.matchTopicSlug }]
      }
      if (sql.includes('FROM "CompetitiveMatch"')) {
        // The slim roster query: gameData fields pulled out in SQL.
        const poolId = values[0] as string
        const liveTeamOnly = sql.includes("status = 'IN_PROGRESS'")
        return (db.tables.competitiveMatch ?? [])
          .filter((m) => m.poolId === poolId && (!liveTeamOnly || (m.status === 'IN_PROGRESS' && m.gameMode === 'TEAM_BATTLE')))
          .sort((a, b) => (b.startedAt as Date).getTime() - (a.startedAt as Date).getTime())
          .map((m) => {
            const gd = (m.gameData ?? {}) as { isTeamBattle?: boolean; team1?: { players: string[]; score: number }; team2?: { players: string[]; score: number }; isPracticeMatch?: boolean; aiName?: string }
            return {
              ...m,
              player1Score: m.player1Score ?? 0, player2Score: m.player2Score ?? 0,
              player1MMRBefore: m.player1MMRBefore ?? 1000, player1MMRAfter: m.player1MMRAfter ?? 1000,
              player2MMRBefore: m.player2MMRBefore ?? 1000, player2MMRAfter: m.player2MMRAfter ?? 1000,
              isTeam: !!gd.isTeamBattle, t1: gd.team1?.players ?? null, t1Score: gd.team1?.score ?? null,
              t2: gd.team2?.players ?? null, t2Score: gd.team2?.score ?? null, practice: !!gd.isPracticeMatch, aiName: gd.aiName ?? null,
            }
          })
      }
      if (sql.includes('FROM "MatchmakingQueue"')) {
        const id = values[0] as string
        const row = db.tables.matchmakingQueue?.find((r) => r.id === id)
        if (!row) return []
        if (sql.includes('"poolId" IS NULL') && row.poolId) return []
        return [row]
      }
      return []
    }),
  })
  const prisma = {
    ...base,
    $queryRaw: makeTx([]).$queryRaw,
    $transaction: vi.fn(async (arg: unknown) => {
      if (Array.isArray(arg)) return Promise.all(arg)
      const held: string[] = []
      try {
        return await (arg as (tx: unknown) => Promise<unknown>)(makeTx(held))
      } finally {
        held.forEach((id) => db.locks.delete(id))
      }
    }),
  }
  return { prisma }
})

import { tickPool, closePool } from '@/lib/class-pool-server'
import { GET as poolListGet, POST as poolCreate } from '@/app/api/competitive/class-pool/route'
import { GET as poolGet, POST as poolPost } from '@/app/api/competitive/class-pool/[poolId]/route'
import { POST as queuePost } from '@/app/api/competitive/queue/route'
import { POST as teamQueuePost } from '@/app/api/competitive/team-queue/route'

/* ---------------- fixtures ---------------- */

const tbl = (name: string): Row[] => db.tables[name] ?? []
const ago = (ms: number) => new Date(Date.now() - ms)
const seed = (name: string, row: Row) => { (db.tables[name] ??= []).push(row) }
const as = (id: string, role = 'STUDENT') => mockAuth.mockResolvedValue({ user: { id, email: `${id}@example.com`, role } })
const req = (url: string, body?: unknown) =>
  new NextRequest(`http://localhost${url}`, body === undefined ? undefined : { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
const ctx = (poolId: string) => ({ params: Promise.resolve({ poolId }) })
const pool = (over: Partial<Row> = {}): Row => ({
  id: 'pool1', classroomId: 'class1', liveSessionId: 'live1', teacherId: 'teacher', topicSlug: 'derivative-rules',
  matchTopicSlug: 'derivative-rules', courseSlug: 'ap-calculus-ab', gameMode: 'SPEED_RACE', ranked: true,
  status: 'OPEN', createdAt: new Date(), closedAt: null, ...over,
})
const q = (userId: string, over: Partial<Row> = {}): Row => ({
  id: `q-${userId}`, userId, topicSlug: 'derivative-rules', mmr: 1000, gameMode: 'SPEED_RACE', tier: null, poolId: 'pool1', joinedAt: ago(10_000), ...over,
})
const poolMatches = () => tbl('competitiveMatch').filter((m) => m.poolId)

beforeEach(() => {
  db.tables = {}
  db.locks.clear()
  db.seq = 0
  seed('classroom', { id: 'class1', teacherId: 'teacher', coTeachers: [] })
  seed('liveSession', { id: 'live1', classroomId: 'class1', status: 'LIVE' })
  for (const u of ['teacher', 's1', 's2', 's3', 's4', 'outsider', 'pub1', 'pub2', 'pub3']) {
    seed('user', { id: u, name: u.toUpperCase(), email: `${u}@example.com`, topicProgress: [], competitiveProfile: { overallMMR: 1000 }, matchmakingEntry: null })
  }
  for (const s of ['s1', 's2', 's3', 's4']) seed('classroomMember', { id: `m-${s}`, classroomId: 'class1', userId: s, isActive: true, nickname: null })
  // The public queue route reads the user with matchmakingEntry included.
  const userModel = (db.tables.user as Row[])
  userModel.forEach((u) => { Object.defineProperty(u, 'matchmakingEntry', { get: () => db.tables.matchmakingQueue?.find((r) => r.userId === u.id) ?? null, enumerable: true, configurable: true }) })
})

describe('isolation from the public queues', () => {
  it('a public 1v1 joiner never claims a class-pool waiter on the same topic and mode', async () => {
    seed('classMatchPool', pool())
    seed('matchmakingQueue', q('s1'))
    as('pub1')
    const res = await queuePost(req('/api/competitive/queue', { topicSlug: 'derivative-rules', gameMode: 'SPEED_RACE' }))
    const body = await res.json()
    expect(body.status).toBe('searching')
    expect(tbl('competitiveMatch')).toHaveLength(0)
    expect(tbl('matchmakingQueue').find((r) => r.userId === 's1')?.poolId).toBe('pool1')
  })

  it('a public team joiner never counts class-pool waiters toward its four', async () => {
    seed('classMatchPool', pool({ gameMode: 'TEAM_BATTLE' }))
    for (const s of ['s1', 's2', 's3']) seed('matchmakingQueue', q(s, { gameMode: 'TEAM_BATTLE' }))
    as('pub1')
    const res = await teamQueuePost(req('/api/competitive/team-queue', { topicSlug: 'derivative-rules' }))
    expect((await res.json()).status).toBe('searching')
    expect(tbl('competitiveMatch')).toHaveLength(0)
  })

  it('a pool pass never pairs a pool waiter with public-queue players', async () => {
    seed('classMatchPool', pool())
    seed('matchmakingQueue', q('s1'))
    seed('matchmakingQueue', q('pub1', { poolId: null }))
    seed('matchmakingQueue', q('pub2', { poolId: null }))
    expect(await tickPool('pool1')).toEqual([])
    expect(tbl('matchmakingQueue')).toHaveLength(3)
  })

  it('a user waiting in a pool is told so by the public queue instead of being double-queued', async () => {
    seed('classMatchPool', pool())
    seed('matchmakingQueue', q('s1'))
    as('s1')
    const res = await queuePost(req('/api/competitive/queue', { topicSlug: 'derivative-rules', gameMode: 'SPEED_RACE' }))
    expect(res.status).toBe(409)
    expect((await res.json()).status).toBe('in_class_pool')
  })
})

describe('pairing passes', () => {
  it('pairs two settled pool waiters into a ranked match tagged with the pool', async () => {
    seed('classMatchPool', pool())
    seed('matchmakingQueue', q('s1', { mmr: 1000 }))
    seed('matchmakingQueue', q('s2', { mmr: 1100 }))
    const created = await tickPool('pool1')
    expect(created).toHaveLength(1)
    const m = poolMatches()[0]
    expect(m).toMatchObject({ poolId: 'pool1', gameMode: 'SPEED_RACE', topicSlug: 'derivative-rules', status: 'IN_PROGRESS' })
    expect((m.gameData as Record<string, unknown>).isPracticeMatch).toBeUndefined()
    expect(tbl('matchmakingQueue')).toHaveLength(0)
  })

  it('a team pool builds one team match from four waiters', async () => {
    seed('classMatchPool', pool({ gameMode: 'TEAM_BATTLE' }))
    ;[['s1', 1400], ['s2', 1200], ['s3', 1000], ['s4', 900]].forEach(([u, mmr]) => seed('matchmakingQueue', q(u as string, { mmr, gameMode: 'TEAM_BATTLE' })))
    await tickPool('pool1')
    const m = poolMatches()[0]
    const gd = m.gameData as { isTeamBattle: boolean; team1: { players: string[] }; team2: { players: string[] } }
    expect(m.gameMode).toBe('TEAM_BATTLE')
    expect(gd.isTeamBattle).toBe(true)
    expect(gd.team1.players).toEqual(['s1', 's4'])
    expect(gd.team2.players).toEqual(['s2', 's3'])
  })

  it('two concurrent passes create exactly one match', async () => {
    seed('classMatchPool', pool())
    seed('matchmakingQueue', q('s1'))
    seed('matchmakingQueue', q('s2'))
    const [a, b] = await Promise.all([tickPool('pool1'), tickPool('pool1')])
    expect(a.length + b.length).toBe(1)
    expect(poolMatches()).toHaveLength(1)
  })

  it('two simultaneous joins never double-book the waiting player', async () => {
    seed('classMatchPool', pool())
    seed('matchmakingQueue', q('s1')) // settled, waiting
    mockAuth
      .mockResolvedValueOnce({ user: { id: 's2', email: 's2@example.com', role: 'STUDENT' } })
      .mockResolvedValueOnce({ user: { id: 's3', email: 's3@example.com', role: 'STUDENT' } })
    const p2 = poolPost(req('/api/competitive/class-pool/pool1', { action: 'join' }), ctx('pool1'))
    const p3 = poolPost(req('/api/competitive/class-pool/pool1', { action: 'join' }), ctx('pool1'))
    await Promise.all([p2, p3])
    // Drain: further passes (the 2 s polls) must not create a second match with s1.
    await tickPool('pool1')
    const withS1 = poolMatches().filter((m) => m.player1Id === 's1' || m.player2Id === 's1')
    expect(withS1).toHaveLength(1)
    const queued = tbl('matchmakingQueue').map((r) => r.userId)
    // Exactly one of s2/s3 got s1; the other is still waiting.
    expect(queued).toHaveLength(1)
    expect(['s2', 's3']).toContain(queued[0])
  })
})

describe('access control', () => {
  it('only the class’s teachers can open a pool', async () => {
    seed('topic', { id: 't1', slug: 'derivative-rules', title: 'Derivative Rules', category: { course: { slug: 'ap-calculus-ab' } } })
    as('s1')
    const denied = await poolCreate(req('/api/competitive/class-pool', { classroomId: 'class1', liveSessionId: 'live1', topicSlug: 'derivative-rules', gameMode: 'SPEED_RACE' }))
    expect(denied.status).toBe(403)
    as('outsider', 'TEACHER')
    const otherTeacher = await poolCreate(req('/api/competitive/class-pool', { classroomId: 'class1', topicSlug: 'derivative-rules', gameMode: 'SPEED_RACE' }))
    expect(otherTeacher.status).toBe(403)
  })

  it('outsiders cannot read or join a pool; members and teachers can', async () => {
    seed('classMatchPool', pool())
    as('outsider')
    expect((await poolGet(req('/api/competitive/class-pool/pool1'), ctx('pool1'))).status).toBe(403)
    expect((await poolPost(req('/api/competitive/class-pool/pool1', { action: 'join' }), ctx('pool1'))).status).toBe(403)
    as('s1')
    expect((await poolGet(req('/api/competitive/class-pool/pool1'), ctx('pool1'))).status).toBe(200)
    as('teacher', 'TEACHER')
    const res = await poolPost(req('/api/competitive/class-pool/pool1', { action: 'join' }), ctx('pool1'))
    expect(res?.status).toBe(200)
    // The teacher got a profile at the default MMR and is waiting.
    expect(tbl('competitiveProfile').some((p) => p.userId === 'teacher')).toBe(true)
    expect(tbl('matchmakingQueue').some((r) => r.userId === 'teacher' && r.poolId === 'pool1')).toBe(true)
  })

  it('students cannot close a pool', async () => {
    seed('classMatchPool', pool())
    as('s1')
    expect((await poolPost(req('/api/competitive/class-pool/pool1', { action: 'close' }), ctx('pool1'))).status).toBe(403)
  })
})

describe('close and auto-close', () => {
  it('closing removes the waiting list and blocks new joins; matches in play keep going', async () => {
    seed('classMatchPool', pool())
    seed('matchmakingQueue', q('s1'))
    seed('competitiveMatch', { id: 'live-m', poolId: 'pool1', player1Id: 's2', player2Id: 's3', status: 'IN_PROGRESS', gameMode: 'SPEED_RACE', startedAt: new Date(), gameData: {} })
    as('teacher', 'TEACHER')
    expect((await poolPost(req('/api/competitive/class-pool/pool1', { action: 'close' }), ctx('pool1'))).status).toBe(200)
    expect(tbl('matchmakingQueue')).toHaveLength(0)
    expect(tbl('classMatchPool')[0].status).toBe('CLOSED')
    expect(tbl('competitiveMatch').find((m) => m.id === 'live-m')?.status).toBe('IN_PROGRESS')
    as('s4')
    expect((await poolPost(req('/api/competitive/class-pool/pool1', { action: 'join' }), ctx('pool1'))).status).toBe(410)
  })

  it('a pool closes itself once its live session has ended', async () => {
    seed('classMatchPool', pool())
    seed('matchmakingQueue', q('s1'))
    tbl('liveSession')[0].status = 'ENDED'
    as('s1')
    const res = await poolListGet(req('/api/competitive/class-pool?sessionId=live1'))
    expect((await res.json()).pool).toBeNull()
    expect(tbl('classMatchPool')[0].status).toBe('CLOSED')
    expect(tbl('matchmakingQueue')).toHaveLength(0)
  })

  it('closePool is idempotent', async () => {
    seed('classMatchPool', pool())
    await closePool('pool1')
    await closePool('pool1')
    expect(tbl('classMatchPool')[0].status).toBe('CLOSED')
  })
})
