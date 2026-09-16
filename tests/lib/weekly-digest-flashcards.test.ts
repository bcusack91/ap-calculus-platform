/**
 * "N flashcards reviewed" in the weekly digest must count cards the student
 * actually rated this week, once per card.
 *
 * Two things made the old row count wrong: a progress row is stamped
 * lastReviewed at CREATION (unlocks and deck backfills), so a week's fresh
 * unlocks read as reviews the student never did; and the same card holds one
 * row per study mode (personal + course deck), so every card counted twice.
 * Measured in prod before the fix: a student with 0 reviews would have been
 * emailed "54 flashcards reviewed".
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockUserFindMany = vi.fn()
const mockSubscriberFindMany = vi.fn()
const mockSend = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findMany: (...a: unknown[]) => mockUserFindMany(...a) },
    emailSubscriber: { findMany: (...a: unknown[]) => mockSubscriberFindMany(...a) },
  },
}))
vi.mock('@/lib/email', () => ({ sendWeeklyDigest: (...a: unknown[]) => mockSend(...a) }))
vi.mock('@/lib/cron-auth', () => ({ requireCronSecret: () => null }))

import { GET } from '@/app/api/cron/weekly-digest/route'

describe('weekly digest flashcard count', () => {
  beforeEach(() => {
    mockUserFindMany.mockReset()
    mockSubscriberFindMany.mockReset().mockResolvedValue([])
    mockSend.mockReset().mockResolvedValue(undefined)
  })

  it('asks the database only for cards that were actually rated', async () => {
    mockUserFindMany.mockResolvedValue([])
    await GET(new Request('http://x/api/cron/weekly-digest'))
    const args = mockUserFindMany.mock.calls[0][0] as { select: { flashcardProgress: { where: Record<string, unknown> } } }
    expect(args.select.flashcardProgress.where).toMatchObject({ reviewCount: { gt: 0 } })
  })

  it('counts a card once even when it lives in two study-mode decks', async () => {
    mockUserFindMany.mockResolvedValue([
      {
        email: 'student@example.com',
        name: 'Sam',
        topicProgress: [{ timeSpent: 600 }],
        // Same card in the personal deck and the course deck.
        flashcardProgress: [{ flashcardId: 'card-A' }, { flashcardId: 'card-A' }, { flashcardId: 'card-B' }],
        exitQuizAttempts: [],
        dailyStreak: { currentStreak: 3 },
      },
    ])
    const res = await GET(new Request('http://x/api/cron/weekly-digest'))
    expect((await res.json()).sent).toBe(1)
    const stats = mockSend.mock.calls[0][2] as { flashcardsReviewed: number }
    expect(stats.flashcardsReviewed).toBe(2) // was 3 under the row count
  })
})
