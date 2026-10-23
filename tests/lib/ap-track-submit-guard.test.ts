/**
 * The exit-quiz submit route's server-side AP track mix check (src/lib/ap-track.ts):
 * a quiz drawn at a mix EASIER than the student's current track is refused
 * (409, nothing written) so a hand-sent 'foundation-mix' cannot ease the
 * mastery gate; a harder mix, no mix, and the tiered practice values are
 * accepted exactly as before. The current track honours a teacher override.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockAuth = vi.fn()
const mockTopicFindUnique = vi.fn()
const mockOverrideFindUnique = vi.fn()
const mockDiagFindFirst = vi.fn()
const mockExitFindFirst = vi.fn()
const mockExitCreate = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => {
  const prisma = {
    topic: {
      findUnique: (...a: unknown[]) => mockTopicFindUnique(...a),
      findFirst: vi.fn().mockResolvedValue(null),
    },
    apTrackOverride: { findUnique: (...a: unknown[]) => mockOverrideFindUnique(...a) },
    diagnosticTest: { findFirst: (...a: unknown[]) => mockDiagFindFirst(...a) },
    exitQuizAttempt: {
      findFirst: (...a: unknown[]) => mockExitFindFirst(...a),
      create: (...a: unknown[]) => mockExitCreate(...a),
    },
    competitiveProfile: { upsert: vi.fn() },
    topicProgress: { upsert: vi.fn() },
    factoringPerformanceMetrics: { createMany: vi.fn().mockResolvedValue({ count: 0 }) },
    $transaction: async (fn: (tx: unknown) => unknown) => fn(prisma),
  }
  return { prisma }
})
vi.mock('@/lib/exit-quiz-regrade', () => ({
  regradeExitQuizSeeded: vi.fn().mockResolvedValue(null),
  regradeExitQuiz: vi.fn().mockResolvedValue({ score: 0, resolvedCount: 0, unresolvedCount: 0, usedFallback: false, perAnswer: [], items: [] }),
}))
vi.mock('@/lib/streak', () => ({ touchDailyStreak: vi.fn() }))
vi.mock('@/lib/assignment-autocomplete', () => ({ recordAssignmentCompletion: vi.fn() }))
vi.mock('@/lib/flashcard-unlock', () => ({ maybeUnlockFlashcards: vi.fn().mockResolvedValue({ unlocked: false }) }))
vi.mock('@/lib/study-tracking', () => ({ recordQuestions: vi.fn() }))

import { POST } from '@/app/api/exit-quiz/submit/route'

const post = (body: Record<string, unknown>) =>
  POST(new Request('http://localhost/api/exit-quiz/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }))

const base = { topicSlug: 'collisions', score: 3, totalQuestions: 10, answers: [] }
const chemResults = (percentage: number) => ({ totalCorrect: Math.round((percentage / 100) * 33), totalQuestions: 33, percentage })
/** The student's current standing: a diagnostic percent and/or a pinned track. */
const standing = (percent: number | null, override: string | null = null) => {
  mockDiagFindFirst.mockResolvedValue(percent === null ? null : { results: chemResults(percent) })
  mockOverrideFindUnique.mockResolvedValue(override ? { track: override } : null)
}

beforeEach(() => {
  vi.clearAllMocks()
  mockAuth.mockResolvedValue({ user: { id: 'u1' } })
  mockTopicFindUnique.mockResolvedValue({ category: { course: { slug: 'ap-physics-1' } } })
  mockExitFindFirst.mockResolvedValue(null)
  mockExitCreate.mockImplementation(async ({ data }: { data: Record<string, unknown> }) => ({ id: 'att-1', ...data }))
  standing(null)
})

describe('POST /api/exit-quiz/submit — AP track mix check', () => {
  it('refuses a Foundation mix from a Regular student (no diagnostic) and records nothing', async () => {
    const res = await post({ ...base, seed: 7, difficulty: 'foundation-mix' })
    expect(res.status).toBe(409)
    const body = await res.json()
    expect(body).toMatchObject({ code: 'TRACK_MIX_MISMATCH', track: 'regular', expectedMix: null })
    expect(body.error).toMatch(/Reload the lesson/)
    expect(body.error).toMatch(/Regular track/)
    expect(mockExitCreate).not.toHaveBeenCalled()
    expect(mockExitFindFirst).not.toHaveBeenCalled()
    // The course came from the topic's category, as the lesson page derives it.
    expect(mockTopicFindUnique.mock.calls[0][0].where).toEqual({ slug: 'collisions' })
  })

  it('refuses a Foundation mix from a Regular (estimated 3) and a 5-track (estimated 4 or 5) student', async () => {
    for (const percent of [50, 61, 85]) {
      standing(percent)
      const res = await post({ ...base, seed: 7, difficulty: 'foundation-mix' })
      expect(res.status).toBe(409)
      expect((await res.json()).track).toBe(percent < 57 ? 'regular' : 'five')
    }
    expect(mockExitCreate).not.toHaveBeenCalled()
  })

  it('accepts a Foundation mix from a Foundation student (estimated 1–2)', async () => {
    standing(30)
    const res = await post({ ...base, seed: 7, difficulty: 'foundation-mix' })
    expect(res.status).toBe(200)
    expect(mockExitCreate).toHaveBeenCalledTimes(1)
    expect(mockExitCreate.mock.calls[0][0].data).toMatchObject({ difficulty: 'foundation-mix', seed: 7 })
  })

  it('accepts a 5-track mix from everyone (harder is fine)', async () => {
    for (const percent of [null, 30, 50, 85]) {
      standing(percent)
      expect((await post({ ...base, seed: 7, difficulty: 'five-mix' })).status).toBe(200)
    }
    expect(mockExitCreate).toHaveBeenCalledTimes(4)
  })

  it('accepts a body with no mix, and the tiered practice values, without looking anything up (legacy clients)', async () => {
    for (const difficulty of [undefined, 'easy', 'medium', 'hard']) {
      const res = await post({ ...base, seed: 7, ...(difficulty ? { difficulty } : {}) })
      expect(res.status).toBe(200)
    }
    expect(mockExitCreate).toHaveBeenCalledTimes(4)
    expect(mockTopicFindUnique).not.toHaveBeenCalled()
    expect(mockDiagFindFirst).not.toHaveBeenCalled()
    expect(mockOverrideFindUnique).not.toHaveBeenCalled()
  })

  it('honours the teacher override when deciding the current track', async () => {
    // A 5 on the diagnostic, pinned to Foundation: the Foundation mix is theirs.
    standing(85, 'foundation')
    expect((await post({ ...base, seed: 7, difficulty: 'foundation-mix' })).status).toBe(200)
    // A 1 on the diagnostic, pinned to Regular: the Foundation mix is now too easy.
    standing(20, 'regular')
    const res = await post({ ...base, seed: 8, difficulty: 'foundation-mix' })
    expect(res.status).toBe(409)
    expect(await res.json()).toMatchObject({ code: 'TRACK_MIX_MISMATCH', track: 'regular' })
    // Pinned to the 5-track: same.
    standing(20, 'five')
    expect((await post({ ...base, seed: 9, difficulty: 'foundation-mix' })).status).toBe(409)
    expect(mockOverrideFindUnique.mock.calls[0][0].where).toEqual({ userId_courseSlug: { userId: 'u1', courseSlug: 'ap-physics-1' } })
  })

  it('lets a mix through for a topic outside the track courses (the pool ignores it anyway)', async () => {
    mockTopicFindUnique.mockResolvedValue({ category: { course: { slug: 'sat-prep' } } })
    expect((await post({ ...base, topicSlug: 'sat-circles', seed: 7, difficulty: 'foundation-mix' })).status).toBe(200)
    mockTopicFindUnique.mockResolvedValue(null)
    expect((await post({ ...base, topicSlug: 'no-such-topic', seed: 7, difficulty: 'foundation-mix' })).status).toBe(200)
    expect(mockDiagFindFirst).not.toHaveBeenCalled()
  })

  it('still rejects an unknown difficulty value', async () => {
    expect((await post({ ...base, seed: 7, difficulty: 'expert-mix' })).status).toBe(400)
    expect(mockExitCreate).not.toHaveBeenCalled()
  })
})

describe('POST /api/exit-quiz/submit — AP Precalculus is a track course (30-question sitting)', () => {
  const precalc = { ...base, topicSlug: 'rational-functions-precalc' }
  const precalcResults = (correct: number) => ({ totalCorrect: correct, totalQuestions: 30, percentage: Math.round((correct / 30) * 100) })
  const standingPrecalc = (correct: number | null, override: string | null = null) => {
    mockDiagFindFirst.mockResolvedValue(correct === null ? null : { results: precalcResults(correct) })
    mockOverrideFindUnique.mockResolvedValue(override ? { track: override } : null)
  }

  beforeEach(() => {
    mockTopicFindUnique.mockResolvedValue({ category: { course: { slug: 'ap-precalculus' } } })
  })

  it('refuses a Foundation mix from a Regular (15/30) or 5-track (18/30, 24/30) student, and from one with no diagnostic', async () => {
    for (const [correct, track] of [[null, 'regular'], [15, 'regular'], [18, 'five'], [24, 'five']] as const) {
      standingPrecalc(correct)
      const res = await post({ ...precalc, seed: 7, difficulty: 'foundation-mix' })
      expect(res.status).toBe(409)
      expect(await res.json()).toMatchObject({ code: 'TRACK_MIX_MISMATCH', track })
    }
    expect(mockExitCreate).not.toHaveBeenCalled()
    expect(mockTopicFindUnique.mock.calls[0][0].where).toEqual({ slug: 'rational-functions-precalc' })
    // The placement read the course's diagnostic prefix and its override row.
    expect(mockDiagFindFirst.mock.calls[0][0].where).toEqual({ userId: 'u1', category: { startsWith: 'ap-precalculus-diagnostic' } })
    expect(mockOverrideFindUnique.mock.calls[0][0].where).toEqual({ userId_courseSlug: { userId: 'u1', courseSlug: 'ap-precalculus' } })
  })

  it('accepts a Foundation mix from a Foundation student (10/30), and a 5-track mix from everyone', async () => {
    standingPrecalc(10)
    expect((await post({ ...precalc, seed: 7, difficulty: 'foundation-mix' })).status).toBe(200)
    for (const correct of [null, 10, 15, 24]) {
      standingPrecalc(correct)
      expect((await post({ ...precalc, seed: 8, difficulty: 'five-mix' })).status).toBe(200)
    }
    expect(mockExitCreate).toHaveBeenCalledTimes(5)
  })

  it('honours the teacher override: a 5 pinned to Foundation may submit the Foundation mix; a 1 pinned up may not', async () => {
    standingPrecalc(24, 'foundation')
    expect((await post({ ...precalc, seed: 7, difficulty: 'foundation-mix' })).status).toBe(200)
    standingPrecalc(6, 'five')
    const res = await post({ ...precalc, seed: 8, difficulty: 'foundation-mix' })
    expect(res.status).toBe(409)
    expect(await res.json()).toMatchObject({ code: 'TRACK_MIX_MISMATCH', track: 'five', expectedMix: 'five-mix' })
  })
})
