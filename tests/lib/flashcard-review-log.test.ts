/**
 * Every flashcard rating lands in FlashcardReviewLog for the teacher's
 * per-student report: the rating, whether the card was new, its interval
 * before the rating, the class it was studied for, and the time on card.
 * Logging is best-effort — a failed insert must never fail the review.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { flashcardReviewSchema } from '@/lib/validations'
import { createCardTimer, MAX_CARD_MS } from '@/hooks/useCardShownTimer'

let context = 'personal'
const mockProgressFind = vi.fn()
const mockProgressUpsert = vi.fn()
const mockLogCreate = vi.fn()
const mockCardFind = vi.fn()
const mockExecuteRaw = vi.fn()
const mockAssignment = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: async () => ({ user: { id: 'student-1' } }) }))
vi.mock('@/lib/study-context', async (orig) => ({
  ...(await orig<typeof import('@/lib/study-context')>()),
  getActiveStudyContext: async () => context,
}))
vi.mock('@/lib/assignment-autocomplete', () => ({
  recordAssignmentCompletion: (...a: unknown[]) => mockAssignment(...a),
}))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    flashcardProgress: {
      findUnique: (...a: unknown[]) => mockProgressFind(...a),
      upsert: (...a: unknown[]) => mockProgressUpsert(...a),
    },
    flashcardReviewLog: { create: (...a: unknown[]) => mockLogCreate(...a) },
    flashcard: { findUnique: (...a: unknown[]) => mockCardFind(...a) },
    $executeRaw: (...a: unknown[]) => mockExecuteRaw(...a),
  },
}))

import { POST } from '@/app/api/flashcards/review/route'

function post(body: Record<string, unknown>) {
  return POST(
    new NextRequest('http://localhost/api/flashcards/review', {
      method: 'POST',
      body: JSON.stringify({ flashcardId: 'card-1', ...body }),
      headers: { 'Content-Type': 'application/json' },
    }),
  )
}

const logged = () => mockLogCreate.mock.calls[0][0].data

beforeEach(() => {
  vi.clearAllMocks()
  context = 'personal'
  mockProgressFind.mockResolvedValue(null)
  mockProgressUpsert.mockImplementation(async (args: { create: object }) => ({ id: 'p1', ...args.create }))
  mockLogCreate.mockResolvedValue({ id: 'log-1' })
  mockCardFind.mockResolvedValue({ topic: { slug: 'amino-acids', category: { course: { slug: 'mcat' } } } })
  mockExecuteRaw.mockResolvedValue(1)
  mockAssignment.mockResolvedValue(undefined)
})

describe('POST /api/flashcards/review — review log', () => {
  it('logs a brand-new card as new, with interval 0 and the mapped rating', async () => {
    const res = await post({ rating: 'good', durationMs: 4200 })
    expect(res.status).toBe(200)
    expect(mockLogCreate).toHaveBeenCalledTimes(1)
    expect(logged()).toEqual({
      userId: 'student-1',
      flashcardId: 'card-1',
      context: 'personal',
      classroomId: '',
      courseSlug: 'mcat',
      rating: 'GOOD',
      wasNew: true,
      intervalBefore: 0,
      durationMs: 4200,
    })
  })

  it('logs a mature review with its prior day interval and the class from a class context', async () => {
    context = 'class:cls-9'
    mockProgressFind.mockResolvedValue({
      easeFactor: 2.5, interval: 30, repetitions: 5, isMinuteInterval: false, reviewCount: 7,
    })
    await post({ rating: 'again', durationMs: 900 })
    expect(logged()).toMatchObject({
      context: 'class:cls-9',
      classroomId: 'cls-9',
      rating: 'AGAIN',
      wasNew: false,
      intervalBefore: 30,
    })
  })

  it('records a minute-scale (learning step) prior interval as 0 days', async () => {
    mockProgressFind.mockResolvedValue({
      easeFactor: 2.5, interval: 10, repetitions: 0, isMinuteInterval: true, reviewCount: 1,
    })
    await post({ rating: 'hard' })
    expect(logged()).toMatchObject({ rating: 'HARD', wasNew: false, intervalBefore: 0 })
  })

  it('treats an unreviewed progress row (reviewCount 0) as new', async () => {
    mockProgressFind.mockResolvedValue({
      easeFactor: 2.5, interval: 0, repetitions: 0, isMinuteInterval: false, reviewCount: 0,
    })
    await post({ rating: 'easy' })
    expect(logged()).toMatchObject({ rating: 'EASY', wasNew: true })
  })

  it('clamps durationMs to 60 s and stores null when absent', async () => {
    await post({ rating: 'good', durationMs: 3_000_000 })
    expect(logged().durationMs).toBe(60_000)
    mockLogCreate.mockClear()
    await post({ rating: 'good' })
    expect(logged().durationMs).toBeNull()
  })

  it('still returns the normal success response when the log insert throws', async () => {
    const err = vi.spyOn(console, 'error').mockImplementation(() => {})
    mockLogCreate.mockRejectedValue(new Error('db down'))
    const res = await post({ rating: 'good', durationMs: 1000 })
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.success).toBe(true)
    expect(body.progress).toBeTruthy()
    expect(mockAssignment).toHaveBeenCalled()
    expect(err).toHaveBeenCalledWith('flashcard review log failed (non-fatal):', expect.any(Error))
    err.mockRestore()
  })
})

describe('flashcardReviewSchema durationMs', () => {
  const base = { flashcardId: 'c', rating: 'good' }
  it('is optional', () => {
    expect(flashcardReviewSchema.safeParse(base).success).toBe(true)
  })
  it('accepts 0 through one hour', () => {
    expect(flashcardReviewSchema.safeParse({ ...base, durationMs: 0 }).success).toBe(true)
    expect(flashcardReviewSchema.safeParse({ ...base, durationMs: 1234.5 }).success).toBe(true)
    expect(flashcardReviewSchema.safeParse({ ...base, durationMs: 3_600_000 }).success).toBe(true)
  })
  it('rejects negatives, over an hour, and non-numbers', () => {
    expect(flashcardReviewSchema.safeParse({ ...base, durationMs: -1 }).success).toBe(false)
    expect(flashcardReviewSchema.safeParse({ ...base, durationMs: 3_600_001 }).success).toBe(false)
    expect(flashcardReviewSchema.safeParse({ ...base, durationMs: '500' }).success).toBe(false)
  })
})

describe('createCardTimer', () => {
  it('counts visible time since the card was shown', () => {
    const t = createCardTimer(1000)
    expect(t.elapsedMs(6000)).toBe(5000)
  })
  it('excludes time the tab was hidden', () => {
    const t = createCardTimer(0)
    t.setVisible(false, 2000)
    t.setVisible(true, 50_000)
    expect(t.elapsedMs(53_000)).toBe(5000)
  })
  it('starts paused when the card is shown in a hidden tab', () => {
    const t = createCardTimer(0, false)
    t.setVisible(true, 10_000)
    expect(t.elapsedMs(12_000)).toBe(2000)
  })
  it('restarts for a new card and caps at 60 s', () => {
    const t = createCardTimer(0)
    expect(t.elapsedMs(500_000)).toBe(MAX_CARD_MS)
    t.restart(500_000, true)
    expect(t.elapsedMs(503_000)).toBe(3000)
  })
})
