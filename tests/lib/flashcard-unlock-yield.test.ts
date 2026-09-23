/**
 * Unlocking a topic drips its cards into the queue by array index, and the
 * query feeding that array had no ORDER BY. Now the order is exam yield first
 * with a deterministic tiebreak, every card still gets a progress row (so an
 * opt-in later needs no backfill), and the toast counts what the student will
 * actually find.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockTopicFindUnique = vi.fn()
const mockCreateMany = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    topic: { findUnique: (...a: unknown[]) => mockTopicFindUnique(...a) },
    topicProgress: { findUnique: vi.fn().mockResolvedValue({ status: 'COMPLETED', masteryLevel: 1, masteredParts: null }) },
    exitQuizAttempt: { findFirst: vi.fn().mockResolvedValue({ id: 'attempt-1' }) },
    slideDeck: { findFirst: vi.fn().mockResolvedValue(null) },
    user: { findUnique: vi.fn().mockResolvedValue({ flashcardNewPerDay: 2 }) },
    flashcardProgress: {
      createMany: (...a: unknown[]) => mockCreateMany(...a),
      count: vi.fn().mockResolvedValue(5),
    },
    flashcard: { createMany: vi.fn(), findMany: vi.fn() },
  },
}))
vi.mock('@/lib/study-context', () => ({
  PERSONAL_CONTEXT: 'personal',
  resolveUnlockContexts: vi.fn().mockResolvedValue({ contexts: ['personal'], activeContext: 'personal' }),
}))
vi.mock('@/data/exit-quizzes', () => ({ hasExitQuiz: () => true }))

const t = (iso: string) => new Date(iso)
// Deliberately in a scrambled "Postgres order", with ties on yield.
const CARDS = [
  { id: 'low-old', examYield: 'LOW', createdAt: t('2026-01-01') },
  { id: 'med', examYield: 'MEDIUM', createdAt: t('2026-01-03') },
  { id: 'high-new', examYield: 'HIGH', createdAt: t('2026-01-05') },
  { id: 'unlabeled', examYield: null, createdAt: t('2026-01-02') },
  { id: 'high-old', examYield: 'HIGH', createdAt: t('2026-01-04') },
]

beforeEach(() => {
  vi.clearAllMocks()
  mockTopicFindUnique.mockResolvedValue({
    id: 'topic-1',
    title: 'Renal System',
    textContent: '',
    flashcards: CARDS,
    exampleProblems: [],
    category: { course: { slug: 'mcat-prep' } },
  })
  mockCreateMany.mockResolvedValue({ count: 5 })
})

describe('maybeUnlockFlashcards ordering', () => {
  it('drips high-yield first, low-yield last, with a deterministic tiebreak', async () => {
    const { maybeUnlockFlashcards } = await import('@/lib/flashcard-unlock')
    const result = await maybeUnlockFlashcards('user-1', 'mcat-organ-systems-renal-mcat')
    expect(result.unlocked).toBe(true)

    const rows = mockCreateMany.mock.calls[0][0].data as { flashcardId: string; nextReview: Date }[]
    expect(rows.map((r) => r.flashcardId)).toEqual(['high-old', 'high-new', 'unlabeled', 'med', 'low-old'])

    // newPerDay = 2: wave 1 is the two HIGH cards, wave 2 unlabeled + medium,
    // wave 3 the low card. Nothing is dropped.
    const day = (r: { nextReview: Date }) => Math.round((r.nextReview.getTime() - rows[0].nextReview.getTime()) / 86_400_000)
    expect(rows.map(day)).toEqual([0, 0, 1, 1, 2])
    expect(rows).toHaveLength(CARDS.length)
  })

  it('counts only the cards the student will be served', async () => {
    const { maybeUnlockFlashcards } = await import('@/lib/flashcard-unlock')
    const result = await maybeUnlockFlashcards('user-1', 'mcat-organ-systems-renal-mcat')
    // 5 cards, 1 LOW: "4 cards unlocked", not a promise of 5.
    expect(result.unlocked && result.totalCards).toBe(4)
  })
})
