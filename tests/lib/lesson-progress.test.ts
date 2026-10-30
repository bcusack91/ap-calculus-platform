import { describe, it, expect, vi } from 'vitest'

vi.mock('@/lib/prisma', () => ({ prisma: {} }))
vi.mock('@/lib/flashcard-unlock', () => ({ maybeUnlockFlashcards: vi.fn() }))
vi.mock('@/lib/redis', () => ({ invalidateCache: vi.fn(), dashboardCacheKey: (id: string) => id }))
vi.mock('@/lib/streak', () => ({ touchDailyStreak: vi.fn() }))
vi.mock('@/lib/assignment-autocomplete', () => ({ recordAssignmentStarted: vi.fn() }))

import { resolveStatus, statusForMastery } from '@/lib/lesson-progress'

describe('lesson progress status', () => {
  it('follows mastery thresholds', () => {
    expect(statusForMastery(0.95, true)).toBe('MASTERED')
    expect(statusForMastery(0.6, false)).toBe('COMPLETED')
    expect(statusForMastery(0.3, true)).toBe('IN_PROGRESS')
    expect(statusForMastery(0, false)).toBe('NOT_STARTED')
  })

  it('never downgrades', () => {
    expect(resolveStatus('MASTERED', 'COMPLETED')).toBe('MASTERED')
    expect(resolveStatus('COMPLETED', 'IN_PROGRESS')).toBe('COMPLETED')
    expect(resolveStatus('IN_PROGRESS', 'COMPLETED')).toBe('COMPLETED')
    expect(resolveStatus(null, 'IN_PROGRESS')).toBe('IN_PROGRESS')
  })
})
