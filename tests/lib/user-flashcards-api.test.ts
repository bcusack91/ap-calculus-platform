/**
 * /api/user-flashcards — student-made cards. Every query is scoped to the
 * signed-in user; another student's card is a 404 (never a 403); text is
 * length-limited; a student can keep at most USER_CARD_CAP cards.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { USER_CARD_CAP, USER_CARD_MAX_TEXT } from '@/lib/user-flashcard-ids'

let sessionUser: string | null = 'student-1'
const store = new Map<string, Record<string, unknown>>()
let countOverride: number | null = null
let nextId = 1

function matches(row: Record<string, unknown>, where: Record<string, unknown>): boolean {
  return Object.entries(where).every(([k, v]) => {
    if (k === 'OR' || k === 'nextReview') return true
    return row[k] === v
  })
}

const db = {
  userFlashcard: {
    findMany: vi.fn(async ({ where }: { where: Record<string, unknown> }) => [...store.values()].filter((r) => matches(r, where))),
    count: vi.fn(async ({ where }: { where: Record<string, unknown> }) =>
      countOverride ?? [...store.values()].filter((r) => matches(r, where)).length,
    ),
    groupBy: vi.fn(async () => []),
    findFirst: vi.fn(async ({ where }: { where: Record<string, unknown> }) => [...store.values()].find((r) => matches(r, where)) ?? null),
    create: vi.fn(async ({ data }: { data: Record<string, unknown> }) => {
      const row = { id: `c${nextId++}`, nextReview: new Date(), reviewCount: 0, interval: 0, isMinuteInterval: false, createdAt: new Date(), updatedAt: new Date(), ...data }
      store.set(row.id as string, row)
      return row
    }),
    update: vi.fn(async ({ where, data }: { where: { id: string }; data: Record<string, unknown> }) => {
      const row = { ...store.get(where.id)!, ...data }
      store.set(where.id, row)
      return row
    }),
    deleteMany: vi.fn(async ({ where }: { where: Record<string, unknown> }) => {
      const hits = [...store.values()].filter((r) => matches(r, where))
      for (const h of hits) store.delete(h.id as string)
      return { count: hits.length }
    }),
  },
}

vi.mock('@/lib/auth', () => ({ auth: async () => (sessionUser ? { user: { id: sessionUser } } : null) }))
vi.mock('@/lib/prisma', () => ({
  prisma: new Proxy({}, { get: (_t, k) => (db as Record<string | symbol, unknown>)[k] }),
}))

import { GET, POST } from '@/app/api/user-flashcards/route'
import { PUT, DELETE } from '@/app/api/user-flashcards/[id]/route'

const req = (url: string, method = 'GET', body?: unknown) =>
  new NextRequest(`http://localhost${url}`, {
    method,
    ...(body !== undefined ? { body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } } : {}),
  })
const params = (id: string) => ({ params: Promise.resolve({ id }) })

function seed(userId: string, extra: Record<string, unknown> = {}) {
  const id = `seed${nextId++}`
  store.set(id, { id, userId, front: 'Q', back: 'A', hint: null, courseSlug: '', topicSlug: '', origin: 'manual', nextReview: new Date(), reviewCount: 0, interval: 0, isMinuteInterval: false, createdAt: new Date(), updatedAt: new Date(), ...extra })
  return id
}

beforeEach(() => {
  vi.clearAllMocks()
  store.clear()
  sessionUser = 'student-1'
  countOverride = null
})

describe('POST /api/user-flashcards', () => {
  it('creates a card owned by the signed-in user', async () => {
    const res = await POST(req('/api/user-flashcards', 'POST', { front: ' What is ATP? ', back: 'Energy currency', courseSlug: 'mcat-prep', origin: 'mistake' }))
    expect(res.status).toBe(201)
    const { card } = await res.json()
    expect(card).toMatchObject({ front: 'What is ATP?', back: 'Energy currency', courseSlug: 'mcat-prep', origin: 'mistake' })
    expect(db.userFlashcard.create.mock.calls[0][0].data.userId).toBe('student-1')
  })

  it('defaults origin to manual and blanks to empty slugs', async () => {
    await POST(req('/api/user-flashcards', 'POST', { front: 'Q', back: 'A' }))
    expect(db.userFlashcard.create.mock.calls[0][0].data).toMatchObject({ origin: 'manual', courseSlug: '', topicSlug: '', hint: null })
  })

  it('rejects empty and over-long text', async () => {
    expect((await POST(req('/api/user-flashcards', 'POST', { front: '   ', back: 'A' }))).status).toBe(400)
    expect((await POST(req('/api/user-flashcards', 'POST', { front: 'Q', back: 'x'.repeat(USER_CARD_MAX_TEXT + 1) }))).status).toBe(400)
    expect((await POST(req('/api/user-flashcards', 'POST', { front: 'x'.repeat(USER_CARD_MAX_TEXT), back: 'A' }))).status).toBe(201)
    expect((await POST(req('/api/user-flashcards', 'POST', { front: 'Q', back: 'A', origin: 'robot' }))).status).toBe(400)
    expect((await POST(req('/api/user-flashcards', 'POST', { front: 'Q', back: 'A', courseSlug: 'Bad Slug!' }))).status).toBe(400)
  })

  it('caps each student at USER_CARD_CAP cards', async () => {
    countOverride = USER_CARD_CAP
    const res = await POST(req('/api/user-flashcards', 'POST', { front: 'Q', back: 'A' }))
    expect(res.status).toBe(409)
    expect(db.userFlashcard.create).not.toHaveBeenCalled()
    countOverride = USER_CARD_CAP - 1
    expect((await POST(req('/api/user-flashcards', 'POST', { front: 'Q', back: 'A' }))).status).toBe(201)
  })

  it('requires sign-in', async () => {
    sessionUser = null
    expect((await POST(req('/api/user-flashcards', 'POST', { front: 'Q', back: 'A' }))).status).toBe(401)
    expect((await GET(req('/api/user-flashcards'))).status).toBe(401)
  })
})

describe('GET /api/user-flashcards', () => {
  it('lists only the signed-in user’s cards, with the course filter', async () => {
    seed('student-1', { courseSlug: 'sat' })
    seed('student-1', { courseSlug: 'mcat-prep' })
    seed('student-2', { courseSlug: 'sat' })
    const all = await (await GET(req('/api/user-flashcards'))).json()
    expect(all.cards).toHaveLength(2)
    expect(all.cap).toBe(USER_CARD_CAP)
    const sat = await (await GET(req('/api/user-flashcards?course=sat'))).json()
    expect(sat.cards).toHaveLength(1)
    expect(sat.cards[0].courseSlug).toBe('sat')
    for (const call of db.userFlashcard.findMany.mock.calls) expect(call[0].where.userId).toBe('student-1')
  })
})

describe('PUT/DELETE /api/user-flashcards/[id]', () => {
  it('edits the owner’s card (raw or u:-prefixed id) and keeps its schedule', async () => {
    const id = seed('student-1', { interval: 8, reviewCount: 4 })
    const res = await PUT(req(`/api/user-flashcards/${id}`, 'PUT', { back: 'Better answer' }), params(`u:${id}`))
    expect(res.status).toBe(200)
    expect(store.get(id)).toMatchObject({ back: 'Better answer', interval: 8, reviewCount: 4 })
  })

  it('404s another student’s card on edit and delete', async () => {
    const id = seed('student-2')
    expect((await PUT(req(`/api/user-flashcards/${id}`, 'PUT', { front: 'hijack' }), params(id))).status).toBe(404)
    expect((await DELETE(req(`/api/user-flashcards/${id}`, 'DELETE'), params(id))).status).toBe(404)
    expect(store.get(id)!.front).toBe('Q')
  })

  it('rejects an empty or over-long edit', async () => {
    const id = seed('student-1')
    expect((await PUT(req(`/api/user-flashcards/${id}`, 'PUT', {}), params(id))).status).toBe(400)
    expect((await PUT(req(`/api/user-flashcards/${id}`, 'PUT', { front: 'x'.repeat(USER_CARD_MAX_TEXT + 1) }), params(id))).status).toBe(400)
  })

  it('deletes the owner’s card', async () => {
    const id = seed('student-1')
    const res = await DELETE(req(`/api/user-flashcards/${id}`, 'DELETE'), params(id))
    expect(res.status).toBe(200)
    expect(store.has(id)).toBe(false)
    expect(db.userFlashcard.deleteMany.mock.calls[0][0].where).toEqual({ id, userId: 'student-1' })
  })
})
