/**
 * Match creation stamps pacing into gameData (bot-pacing-server.ts): the
 * pacing course, every question's expectedSeconds, and — for the Accuracy
 * Challenge — the match clock. The async-challenge route derives its default
 * clock the same way. Prisma and auth are mocked; question drawing is stubbed
 * with a fixed set so the numbers are exact.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { accuracyChallengeLimitSeconds, asyncChallengeDefaultLimit, expectedSolveSeconds } from '@/lib/bot-pacing'
import { resolvePaceCourseKey } from '@/lib/bot-pacing-server'

const state = vi.hoisted(() => ({
  created: [] as Array<{ data: { gameData: Record<string, unknown>; gameMode?: string } }>,
  asyncCreated: [] as Array<{ data: { timeLimit: number; questions: Array<Record<string, unknown>> } }>,
}))

const mockAuth = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/app/api/competitive/_lib/sweep-stale-matches', () => ({
  sweepStaleMatchesForUser: vi.fn(async () => 0),
  sweepStaleMatchById: vi.fn(async () => false),
  STALE_MATCH_MS: 15 * 60 * 1000,
}))
vi.mock('@/lib/ai-opponent-identity', () => ({ makeRandomAIIdentity: vi.fn(async () => ({ name: 'Quill', avatar: null })) }))

// A fixed 20-question draw: a hard-tier style ramp (4 easy, 6 medium, 10 hard).
const FIXED = [
  ...Array.from({ length: 4 }, (_, i) => ({ id: i, difficulty: 'easy', question: `Easy ${i}`, options: ['a', 'b', 'c', 'd'], correctAnswer: 0, answerIndex: 0, type: 'multiple-choice' })),
  ...Array.from({ length: 6 }, (_, i) => ({ id: 4 + i, difficulty: 'medium', question: `Medium ${i}`, options: ['a', 'b', 'c', 'd'], correctAnswer: 1, answerIndex: 1, type: 'multiple-choice' })),
  ...Array.from({ length: 10 }, (_, i) => ({ id: 10 + i, difficulty: 'hard', question: `Hard ${i}`, options: ['a', 'b', 'c', 'd'], correctAnswer: 2, answerIndex: 2, type: 'multiple-choice' })),
]
vi.mock('@/lib/competitive-utils', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/lib/competitive-utils')>()
  return {
    ...actual,
    generateMatchQuestions: vi.fn(async (count: number) => FIXED.slice(0, count).map((q) => ({ ...q }))),
  }
})

vi.mock('@/lib/prisma', () => {
  const competitiveMatch = {
    create: vi.fn(async (args: { data: { gameData: Record<string, unknown>; gameMode?: string } }) => {
      state.created.push(args)
      return { id: `m${state.created.length}` }
    }),
    findFirst: vi.fn(async () => null),
  }
  const matchmakingQueue = {
    deleteMany: vi.fn(async () => ({ count: 0 })),
    delete: vi.fn(async () => ({})),
    findFirst: vi.fn(async () => ({ id: 'q1' })),
    count: vi.fn(async () => 1),
    create: vi.fn(async () => ({})),
  }
  const user = {
    findUnique: vi.fn(async ({ where }: { where: { email?: string; id?: string } }) =>
      where.email === 'ai-opponent@studyai.com'
        ? { id: 'bot', email: where.email, competitiveProfile: { overallMMR: 1000 } }
        : { id: 'me', email: where.email, competitiveProfile: { overallMMR: 1000 }, matchmakingEntry: null, topicProgress: [] },
    ),
    create: vi.fn(),
  }
  const tx = {
    competitiveMatch,
    matchmakingQueue,
    $queryRaw: vi.fn(async () => [{ id: 'q1', userId: 'opp', mmr: 1000, tier: null }]),
  }
  return {
    prisma: {
      competitiveMatch,
      matchmakingQueue,
      user,
      asyncChallenge: {
        create: vi.fn(async (args: { data: { timeLimit: number; questions: Array<Record<string, unknown>> } }) => {
          state.asyncCreated.push(args)
          return { id: `c${state.asyncCreated.length}` }
        }),
      },
      $transaction: vi.fn(async (fn: (t: typeof tx) => Promise<unknown>) => fn(tx)),
    },
  }
})

import { POST as practicePost } from '@/app/api/competitive/practice-ai/route'
import { POST as queuePost } from '@/app/api/competitive/queue/route'
import { POST as asyncPost } from '@/app/api/competitive/async-challenge/route'

const post = (url: string, body: unknown) =>
  new NextRequest(`http://localhost${url}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })

beforeEach(() => {
  state.created.length = 0
  state.asyncCreated.length = 0
  mockAuth.mockResolvedValue({ user: { id: 'me', email: 'me@example.com' } })
})

describe('practice-ai stores pacing in gameData', () => {
  it('Accuracy Challenge on a calculus topic: course key, per-question expectedSeconds, a 30–45 min clock', async () => {
    const res = await practicePost(post('/api/competitive/practice-ai', { topicSlug: 'optimization-calcab', gameMode: 'ACCURACY_CHALLENGE', aiDifficulty: 'hard' }))
    expect(res.status).toBe(200)
    const gd = state.created[0].data.gameData
    expect(gd.paceCourseKey).toBe('ap-calculus-ab')
    expect(gd.aiDifficulty).toBe('hard')
    const questions = gd.questions as Array<Record<string, unknown>>
    expect(questions).toHaveLength(20)
    for (const q of questions) {
      expect(q.expectedSeconds).toBe(expectedSolveSeconds(q, 'ap-calculus-ab'))
      expect(q.expectedSeconds as number).toBeGreaterThan(0)
    }
    expect(questions[0].expectedSeconds).toBe(66)
    expect(questions[19].expectedSeconds).toBe(165)
    expect(gd.timeLimitSeconds).toBe(accuracyChallengeLimitSeconds(questions, 'ap-calculus-ab'))
    expect(gd.timeLimitSeconds).toBe(45 * 60) // ×1.15 headroom = 2,960 s → capped at 45 min; 4×66 + 6×110 + 10×165 = 2574 s
  })

  it('Speed Race stores the course key and expectedSeconds but no clock', async () => {
    await practicePost(post('/api/competitive/practice-ai', { topicSlug: 'solving-linear-equations-algebra1', gameMode: 'SPEED_RACE', aiDifficulty: 'easy' }))
    const gd = state.created[0].data.gameData
    expect(gd.paceCourseKey).toBe('algebra-1')
    expect(gd.timeLimitSeconds).toBeUndefined()
    expect((gd.questions as Array<Record<string, unknown>>)[0].expectedSeconds).toBe(24)
  })

  it('defaults to the unit-circle game when no topic is sent', async () => {
    await practicePost(post('/api/competitive/practice-ai', { gameMode: 'SPEED_RACE' }))
    expect(state.created[0].data.gameData.paceCourseKey).toBe('unit-circle')
  })
})

describe('queue stores pacing in gameData', () => {
  it('a claimed Accuracy Challenge on an Algebra 1 topic gets its own (short) clock', async () => {
    const res = await queuePost(post('/api/competitive/queue', { topicSlug: 'solving-linear-equations-algebra1', gameMode: 'ACCURACY_CHALLENGE' }))
    const body = await res.json()
    expect(body.status).toBe('matched')
    const gd = state.created[0].data.gameData
    expect(gd.paceCourseKey).toBe('algebra-1')
    const questions = gd.questions as Array<Record<string, unknown>>
    expect(questions.every((q) => typeof q.expectedSeconds === 'number')).toBe(true)
    expect(gd.timeLimitSeconds).toBe(18 * 60) // ×1.15 headroom → 1,076 s → 18 min; 4×24 + 6×40 + 10×60 = 936 s → 16 min
    expect(gd.timeLimitSeconds).toBeLessThan(45 * 60)
  })
})

describe('async-challenge clock', () => {
  it('derives the default from the questions when the caller sends none', async () => {
    const res = await asyncPost(post('/api/competitive/async-challenge', { topicSlug: 'optimization-calcab', questionCount: 10 }))
    const body = await res.json()
    const stored = state.asyncCreated[0].data
    expect(stored.timeLimit).toBe(asyncChallengeDefaultLimit(stored.questions, 'ap-calculus-ab'))
    expect(stored.timeLimit).toBe(18 * 60) // ×1.15 headroom → 1,063 s → 18 min; 4×66 + 6×110 = 924 s → rounds up to 16 min
    expect(body.timeLimit).toBe(stored.timeLimit)
    expect(stored.questions.every((q) => typeof q.expectedSeconds === 'number')).toBe(true)
  })

  it('an Algebra 1 challenge of the same length gets a much shorter default', async () => {
    await asyncPost(post('/api/competitive/async-challenge', { topicSlug: 'solving-linear-equations-algebra1', questionCount: 10 }))
    expect(state.asyncCreated[0].data.timeLimit).toBe(7 * 60) // ×1.15 headroom → 386 s → 7 min; 4×24 + 6×40 = 336 s → 6 min
  })

  it('honours a caller-supplied limit inside the widened [60, 2700] clamp', async () => {
    await asyncPost(post('/api/competitive/async-challenge', { topicSlug: 'optimization-calcab', timeLimit: 120 }))
    await asyncPost(post('/api/competitive/async-challenge', { topicSlug: 'optimization-calcab', timeLimit: 5000 }))
    await asyncPost(post('/api/competitive/async-challenge', { topicSlug: 'optimization-calcab', timeLimit: 10 }))
    expect(state.asyncCreated.map((c) => c.data.timeLimit)).toEqual([120, 2700, 60])
  })
})

describe('resolvePaceCourseKey (server, with the bank scan)', () => {
  vi.setConfig({ testTimeout: 120_000 })

  it('finds the course of a bare bank slug the static tables cannot name', async () => {
    expect(await resolvePaceCourseKey('activation-energy-arrhenius')).toBe('ap-chemistry')
    expect(await resolvePaceCourseKey('centripetal-force')).toBe('ap-physics1')
    expect(await resolvePaceCourseKey('composite-functions')).toBe('ap-precalculus')
    expect(await resolvePaceCourseKey('power-rule')).toBe('ap-calculus-ab')
    expect(await resolvePaceCourseKey('infinite-sequences-calcbc')).toBe('ap-calculus-bc')
  })

  it('SAT slugs resolve to their section; MCAT to mcat; unknown stays unknown', async () => {
    expect(await resolvePaceCourseKey('sat')).toBe('sat')
    expect(await resolvePaceCourseKey('sat-math-algebra')).toBe('sat-math')
    expect(await resolvePaceCourseKey('sat-rw-conventions')).toBe('sat-rw')
    expect(await resolvePaceCourseKey('mcat')).toBe('mcat')
    expect(await resolvePaceCourseKey('no-such-topic-anywhere')).toBe('unknown')
    expect(await resolvePaceCourseKey(undefined)).toBe('unit-circle')
    expect(await resolvePaceCourseKey('the-unit-circle')).toBe('unit-circle')
  })

  it('a composite resolves to its slowest course', async () => {
    expect(await resolvePaceCourseKey('multi:centripetal-force,solving-linear-equations-algebra1')).toBe('ap-physics1')
  })
})
