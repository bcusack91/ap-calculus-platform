/**
 * Question bank routes: building a set (pool kinds from the answer log, no
 * keys sent), tutor grading and timed submit (one answer-log row per
 * question, never twice), and the review resolver rebuilding a finished set.
 * Prisma is an in-memory fake; the pool is a small fixture.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { QbankPool, QbankUnit, QbankCandidate } from '@/lib/qbank-pools'

type Row = Record<string, unknown>

const mockAuth = vi.fn()
const db = { sessions: [] as Row[], activity: [] as Row[], seq: 0 }

/** Enough of Prisma's where-matching for these routes. */
function matches(row: Row, where: Row): boolean {
  return Object.entries(where).every(([k, cond]) => {
    const v = row[k]
    if (cond && typeof cond === 'object' && !Array.isArray(cond) && !(cond instanceof Date)) {
      const c = cond as Row
      if ('in' in c) return (c.in as unknown[]).includes(v)
      if ('startsWith' in c) return typeof v === 'string' && v.startsWith(c.startsWith as string)
      if ('not' in c) return c.not === null ? v !== null && v !== undefined : v !== c.not
      if ('equals' in c) return JSON.stringify(v) === JSON.stringify(c.equals)
    }
    if (cond === null) return v === null || v === undefined
    return v === cond
  })
}
const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v), (k, val) => (k === 'startedAt' || k === 'completedAt') && typeof val === 'string' ? new Date(val) : val)

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => {
  const prisma = {
    qbankSession: {
      create: async ({ data }: { data: Row }) => {
        const row = { id: `qs${++db.seq}`, startedAt: new Date(), completedAt: null, correct: null, ...data }
        db.sessions.push(row)
        return clone(row)
      },
      findFirst: async ({ where }: { where: Row }) => {
        const r = db.sessions.find((s) => matches(s, where))
        return r ? clone(r) : null
      },
      findMany: async ({ where }: { where: Row }) => db.sessions.filter((s) => matches(s, where)).map(clone),
      updateMany: async ({ where, data }: { where: Row; data: Row }) => {
        const hits = db.sessions.filter((s) => matches(s, where))
        for (const s of hits) Object.assign(s, clone(data))
        return { count: hits.length }
      },
    },
    questionActivity: {
      findMany: async ({ where }: { where: Row }) => db.activity.filter((r) => matches(r, where)).map((r) => ({ ...r })),
      createMany: async ({ data }: { data: Row[] }) => {
        db.activity.push(...data.map((d) => ({ answeredAt: new Date(Date.now() + db.activity.length), ...d })))
        return { count: data.length }
      },
    },
    user: { findUnique: vi.fn().mockResolvedValue({ lessonIncludeLowYield: false, studyContext: 'personal' }) },
    topic: { findMany: vi.fn().mockResolvedValue([]), findUnique: vi.fn().mockResolvedValue(null) },
  }
  return { prisma }
})

// A small fixed pool: 12 discretes (one a grid-in) and one 4-question passage.
const cand = (key: string, over: Partial<QbankCandidate> = {}): QbankCandidate => ({
  questionKey: key, section: 'math', discipline: 'Algebra', topicSlug: 'sat-linear-equations-inequalities', difficulty: 'medium', lowYield: false,
  passageId: null, question: `Question ${key}?`, options: [`${key}-right`, `${key}-w1`, `${key}-w2`, `${key}-w3`], correctIndex: 0,
  explanation: `Because ${key}.`, passage: null, ...over,
})
const discretes: QbankUnit[] = Array.from({ length: 12 }, (_, i) => {
  const key = `q:${String(i).padStart(16, '0')}`
  const c = i === 11
    ? cand(key, { options: [], correctIndex: -1, gridIn: { correctAnswer: 4, acceptableAnswers: [], tolerance: 0 } })
    : cand(key)
  return { id: key, passageId: null, section: 'math', discipline: 'Algebra', topicSlug: c.topicSlug, items: [c] }
})
const passage: QbankUnit = {
  id: 'psg:p1', passageId: 'p1', section: 'reading-writing', discipline: 'Information and Ideas', topicSlug: 'sat-central-ideas-details',
  items: Array.from({ length: 4 }, (_, i) =>
    cand(`q:p1${String(i).padStart(14, '0')}`, { section: 'reading-writing', discipline: 'Information and Ideas', topicSlug: 'sat-central-ideas-details', passageId: 'p1', passage: { id: 'p1', title: 'P', body: 'Passage text' }, difficulty: null }),
  ),
}
const POOL: QbankPool = { course: 'sat', units: [...discretes, passage] }

vi.mock('@/lib/qbank-pools', async (orig) => {
  const actual = await orig<typeof import('@/lib/qbank-pools')>()
  return { ...actual, getQbankPool: async () => POOL }
})

import { POST as create, GET as list } from '@/app/api/qbank/route'
import { GET as counts } from '@/app/api/qbank/counts/route'
import { POST as answer } from '@/app/api/qbank/[id]/answer/route'
import { POST as submit } from '@/app/api/qbank/[id]/submit/route'
import { POST as progress } from '@/app/api/qbank/[id]/progress/route'
import { resolveAttempt } from '@/lib/question-resolver'
import { NextRequest } from 'next/server'

const post = (body: unknown) => new NextRequest('http://localhost/api/qbank', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
const get = (url: string) => new NextRequest(`http://localhost${url}`)
const ctx = (id: string) => ({ params: Promise.resolve({ id }) })

type View = { id: string; items: Row[]; feedback: (Row | null)[]; result: Row | null; completedAt: string | null; timeLimitSec: number | null }
async function build(body: Row): Promise<View> {
  const res = await create(post({ course: 'sat', count: 16, mode: 'tutor', pool: 'all', ...body }))
  expect(res.status).toBe(201)
  return (await res.json()).session
}
const stored = (id: string) => db.sessions.find((s) => s.id === id)!
const storedItems = (id: string) => stored(id).items as { questionKey: string; correctIndex: number; options: string[]; gridIn?: unknown }[]
const rowsFor = (id: string) => db.activity.filter((r) => r.attemptId === id)

beforeEach(() => {
  db.sessions = []
  db.activity = []
  db.seq = 0
  mockAuth.mockResolvedValue({ user: { id: 'u1' } })
})

describe('POST /api/qbank — building a set', () => {
  it('freezes the set and sends no keys, explanations or grid-in answers', async () => {
    const s = await build({ mode: 'timed' })
    expect(s.items).toHaveLength(16)
    const json = JSON.stringify(s)
    expect(json).not.toMatch(/correctIndex|explanation|gridIn|correctAnswer|Because q:/)
    expect(s.feedback.every((f) => f === null)).toBe(true)
    // SAT pace: 71 s per R&W question, 95 s per Math question.
    expect(s.timeLimitSec).toBe(4 * 71 + 12 * 95)
    // The passage stays whole and in order.
    const at = s.items.map((it, i) => ((it.passage as Row | null)?.id === 'p1' ? i : -1)).filter((i) => i >= 0)
    expect(at).toHaveLength(4)
    expect(at[3] - at[0]).toBe(3)
    // The stored copy has the key, remapped through the shuffle.
    for (const it of storedItems(s.id)) if (!it.gridIn) expect(it.options[it.correctIndex]).toMatch(/-right$/)
  })

  it("'unused' leaves out questions in the answer log", async () => {
    db.activity.push(
      { userId: 'u1', courseSlug: 'sat-prep', answered: 1, correct: 1, questionKey: discretes[0].id, chosenIndex: 0, flagged: false, answeredAt: new Date(), attemptKind: 'exit', attemptId: 'e1', itemIndex: 0, topicSlug: '', discipline: '', source: 'EXIT' },
      { userId: 'u1', courseSlug: 'sat-prep', answered: 1, correct: 1, questionKey: passage.items[2].questionKey, chosenIndex: 0, flagged: false, answeredAt: new Date(), attemptKind: 'exit', attemptId: 'e1', itemIndex: 1, topicSlug: '', discipline: '', source: 'EXIT' },
    )
    const s = await build({ pool: 'unused', count: 20 })
    const keys = storedItems(s.id).map((i) => i.questionKey)
    expect(keys).toHaveLength(11)
    expect(keys).not.toContain(discretes[0].id)
    expect(keys.some((k) => k.startsWith('q:p1'))).toBe(false)
  })

  it("'incorrect' and 'flagged' draw on active mistakes only", async () => {
    const miss = (key: string, flagged: boolean, chosenIndex: number | null) => ({
      userId: 'u1', courseSlug: 'sat-prep', answered: 1, correct: 0, questionKey: key, chosenIndex, flagged, answeredAt: new Date(), attemptKind: 'exit', attemptId: 'e9', itemIndex: 0, topicSlug: '', discipline: '', source: 'EXIT',
    })
    db.activity.push(miss(discretes[3].id, false, 2), miss(discretes[4].id, true, 0))
    const c = await (await counts(get('/api/qbank/counts?course=sat'))).json()
    expect(c.pools).toEqual({ all: 16, unused: 14, incorrect: 1, flagged: 1 })
    const res = await create(post({ course: 'sat', count: 5, mode: 'tutor', pool: 'incorrect' }))
    const s = (await res.json()).session
    expect(storedItems(s.id).map((i) => i.questionKey)).toEqual([discretes[3].id])
    const f = await create(post({ course: 'sat', count: 5, mode: 'tutor', pool: 'flagged' }))
    expect(storedItems((await f.json()).session.id).map((i) => i.questionKey)).toEqual([discretes[4].id])
  })

  it('rejects bad requests and empty results', async () => {
    expect((await create(post({ course: 'sat', count: 2, mode: 'tutor' }))).status).toBe(400)
    expect((await create(post({ course: 'gre', count: 10, mode: 'tutor' }))).status).toBe(400)
    expect((await create(post({ course: 'sat', count: 10, mode: 'tutor', topics: ['nope'] }))).status).toBe(422)
    mockAuth.mockResolvedValue(null)
    expect((await create(post({ course: 'sat', count: 10, mode: 'tutor' }))).status).toBe(401)
  })
})

describe('tutor mode — POST /api/qbank/<id>/answer', () => {
  it('grades on the server, logs one row, and a repeat returns the stored verdict without logging', async () => {
    const s = await build({ count: 16 })
    const items = storedItems(s.id)
    const i = items.findIndex((x) => !x.gridIn)
    const wrong = (items[i].correctIndex + 1) % 4
    const r1 = await (await answer(post({ index: i, chosenIndex: wrong, seconds: 42, flagged: true }), ctx(s.id))).json()
    expect(r1).toMatchObject({ correct: false, correctIndex: items[i].correctIndex, completed: false })
    expect(r1.explanation).toMatch(/^Because/)
    expect(rowsFor(s.id)).toHaveLength(1)
    expect(rowsFor(s.id)[0]).toMatchObject({
      source: 'PRACTICE', courseSlug: 'sat-prep', attemptKind: 'qbank', attemptId: s.id, itemIndex: i, questionKey: items[i].questionKey,
      chosenIndex: wrong, flagged: true, correct: 0, durationMs: 42000, discipline: expect.any(String),
    })
    expect(rowsFor(s.id)[0].chosenKey).toMatch(/^o:/)

    // Same question again, even with the right answer: stored verdict, no new row.
    const r2 = await (await answer(post({ index: i, chosenIndex: items[i].correctIndex }), ctx(s.id))).json()
    expect(r2.correct).toBe(false)
    expect(rowsFor(s.id)).toHaveLength(1)
  })

  it('grades a grid-in by value and returns the accepted answer', async () => {
    const s = await build({ count: 16 })
    const g = storedItems(s.id).findIndex((x) => x.gridIn)
    const r = await (await answer(post({ index: g, chosenText: '8/2' }), ctx(s.id))).json()
    expect(r).toMatchObject({ correct: true, acceptedAnswer: 4 })
    expect(rowsFor(s.id)[0]).toMatchObject({ chosenText: '8/2', correct: 1 })
    expect(rowsFor(s.id)[0].chosenIndex).toBeUndefined()
  })

  it('closes the set once every question is answered', async () => {
    const s = await build({ count: 5, sections: ['math'] })
    const items = storedItems(s.id)
    let last: Row = {}
    for (let i = 0; i < items.length; i++) {
      last = await (await answer(post(items[i].gridIn ? { index: i, chosenText: '4' } : { index: i, chosenIndex: items[i].correctIndex }), ctx(s.id))).json()
    }
    expect(last.completed).toBe(true)
    expect((last.session as View).result).toMatchObject({ correct: 5, total: 5, answered: 5 })
    expect(stored(s.id).correct).toBe(5)
    expect(rowsFor(s.id)).toHaveLength(5)
  })

  it('refuses timed sets', async () => {
    const s = await build({ mode: 'timed' })
    expect((await answer(post({ index: 0, chosenIndex: 0 }), ctx(s.id))).status).toBe(400)
  })
})

describe('timed mode — progress and submit', () => {
  it('grades everything, logs every question once (unanswered = skipped), and resubmitting changes nothing', async () => {
    const s = await build({ mode: 'timed', count: 16 })
    const items = storedItems(s.id)
    const answers = items.map((it, i) => (i === 0 ? null : it.gridIn ? { chosenText: '4' } : { chosenIndex: i % 2 ? it.correctIndex : (it.correctIndex + 1) % 4 }))
    const flags = items.map((_, i) => i === 2)
    const timings = items.map(() => 30)

    expect((await progress(post({ answers, flags, timings }), ctx(s.id))).status).toBe(200)
    expect(rowsFor(s.id)).toHaveLength(0) // saving progress grades and logs nothing

    const res = await (await submit(post({ answers, flags, timings }), ctx(s.id))).json()
    const expectCorrect = items.filter((it, i) => i !== 0 && (it.gridIn || i % 2 === 1)).length
    expect(res.attemptId).toBe(s.id)
    expect(res.score).toMatchObject({ correct: expectCorrect, total: 16, answered: 15 })
    expect(res.session.feedback.every((f: Row | null) => f && typeof f.correctIndex === 'number')).toBe(true)
    const rows = rowsFor(s.id)
    expect(rows).toHaveLength(16)
    expect(new Set(rows.map((r) => r.itemIndex)).size).toBe(16)
    expect(rows.reduce((n, r) => n + (r.correct as number), 0)).toBe(expectCorrect)
    const skipped = rows.find((r) => r.itemIndex === 0)!
    expect(skipped.chosenIndex).toBeUndefined()
    expect(skipped.correct).toBe(0)
    expect(rows.find((r) => r.itemIndex === 2)!.flagged).toBe(true)

    await submit(post({ answers: items.map((it) => ({ chosenIndex: it.correctIndex })) }), ctx(s.id))
    expect(rowsFor(s.id)).toHaveLength(16)
    expect(stored(s.id).correct).toBe(expectCorrect)
  })

  it("is the student's own: another account gets 404", async () => {
    const s = await build({ mode: 'timed' })
    mockAuth.mockResolvedValue({ user: { id: 'u2' } })
    expect((await submit(post({}), ctx(s.id))).status).toBe(404)
  })
})

describe('GET /api/qbank and the review resolver', () => {
  it('lists recent sets with the unfinished one to resume', async () => {
    const a = await build({ mode: 'timed' })
    const b = await build({ mode: 'tutor' })
    await submit(post({}), ctx(a.id))
    const d = await (await list(get('/api/qbank?course=sat'))).json()
    expect(d.sessions.map((x: Row) => x.id).sort()).toEqual([a.id, b.id].sort())
    expect(d.inProgressId).toBe(b.id)
  })

  it('rebuilds a finished set for /review/qbank/<id>, chosen answers, flags and time included', async () => {
    const s = await build({ mode: 'timed', count: 16 })
    const items = storedItems(s.id)
    const answers = items.map((it) => (it.gridIn ? { chosenText: '5' } : { chosenIndex: it.correctIndex }))
    const flags = items.map((_, i) => i === 1)
    await submit(post({ answers, flags, timings: items.map(() => 12) }), ctx(s.id))
    const attempt = await resolveAttempt('qbank', s.id, 'u1')
    expect(attempt).not.toBeNull()
    expect(attempt!.title).toMatch(/SAT practice set · Timed/)
    expect(attempt!.backHref).toBe('/sat/qbank')
    expect(attempt!.score).toEqual({ correct: 15, total: 16 })
    expect(attempt!.items).toHaveLength(16)
    attempt!.items.forEach((it, i) => {
      expect(it).not.toBeNull()
      expect(it!.questionKey).toBe(items[i].questionKey)
      expect(it!.revised).toBeUndefined()
      expect(it!.durationMs).toBe(12000)
      if (items[i].gridIn) expect(it).toMatchObject({ chosenText: '5', correct: false, chosenIndex: null })
      else expect(it!.chosenIndex).toBe(it!.correctIndex)
    })
    expect(attempt!.items[1]!.flagged).toBe(true)
    // Only the owner.
    expect(await resolveAttempt('qbank', s.id, 'u2')).toBeNull()
  })

  it('an unfinished tutor set shows only the questions already graded', async () => {
    const s = await build({ count: 16 })
    const items = storedItems(s.id)
    const i = items.findIndex((x) => !x.gridIn)
    await answer(post({ index: i, chosenIndex: items[i].correctIndex }), ctx(s.id))
    const attempt = await resolveAttempt('qbank', s.id, 'u1')
    expect(attempt!.items.filter(Boolean)).toHaveLength(1)
    expect(attempt!.items[i]).toMatchObject({ chosenIndex: items[i].correctIndex })
  })
})
