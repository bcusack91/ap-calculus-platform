/**
 * The exit quiz must not be skippable.
 *
 * Two holes are pinned here:
 *  1. Lesson-part mastery (calculatePartMastery hits 1.0 the moment the last
 *     part's sections are ticked, and an autosave/beforeunload can write that
 *     while the exit-quiz overlay is still open) used to waive the
 *     ExitQuizAttempt requirement. Only a genuine ENTRANCE-quiz test-out may.
 *  2. A later diagnostic cycle re-recommending topics the student already
 *     cleared, which satisfied the plan on arrival and unlocked the next
 *     diagnostic for free.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { isEntranceMastery } from '@/lib/flashcard-unlock'
import { selectPlanTopics, type PlanDomainResult } from '@/data/mcat-practice/diagnostic-generator'

// Real registry part counts (verified against prod rows): 7 and 4 parts.
const SEVEN_PART_TOPIC = 'mcat-cars-passages-mcat'
const FOUR_PART_TOPIC = 'mcat-microbiology-viruses-mcat'

describe('isEntranceMastery — entrance test-out vs. finishing the lesson', () => {
  it('rejects mastery with no entrance test-out (lesson completion only)', () => {
    expect(
      isEntranceMastery({ topicSlug: SEVEN_PART_TOPIC, masteryLevel: 1, masteredParts: null }),
    ).toBe(false)
    expect(
      isEntranceMastery({ topicSlug: SEVEN_PART_TOPIC, masteryLevel: 1, masteredParts: [] }),
    ).toBe(false)
  })

  it('accepts an entrance quiz that tested out of every part', () => {
    expect(
      isEntranceMastery({
        topicSlug: SEVEN_PART_TOPIC,
        masteryLevel: 1,
        masteredParts: [1, 2, 3, 4, 5, 6, 7],
      }),
    ).toBe(true)
  })

  it('rejects a PARTIAL test-out — the studied parts still owe the exit quiz', () => {
    expect(
      isEntranceMastery({
        topicSlug: SEVEN_PART_TOPIC,
        masteryLevel: 1,
        masteredParts: [1, 2, 4, 5, 6, 7], // part 3 was studied, not tested out of
      }),
    ).toBe(false)
  })

  it('tolerates authored quizzes numbering parts beyond the lesson (prod shape)', () => {
    // Prod: masteredParts [1..7] stored against a 4-part lesson.
    expect(
      isEntranceMastery({
        topicSlug: FOUR_PART_TOPIC,
        masteryLevel: 0.999,
        masteredParts: [1, 2, 3, 4, 5, 6, 7],
      }),
    ).toBe(true)
  })

  it('needs mastery too, not just a stored part list', () => {
    expect(
      isEntranceMastery({ topicSlug: FOUR_PART_TOPIC, masteryLevel: 0.5, masteredParts: [1, 2, 3, 4] }),
    ).toBe(false)
  })

  it('never locks out a topic whose lesson shape is unknown', () => {
    expect(
      isEntranceMastery({ topicSlug: 'not-a-registered-lesson', masteryLevel: 1, masteredParts: [1] }),
    ).toBe(true)
  })

  it('ignores junk in the Json column', () => {
    expect(
      isEntranceMastery({ topicSlug: FOUR_PART_TOPIC, masteryLevel: 1, masteredParts: 'all' }),
    ).toBe(false)
    expect(
      isEntranceMastery({ topicSlug: FOUR_PART_TOPIC, masteryLevel: 1, masteredParts: [0, -1] }),
    ).toBe(false)
  })
})

// --------------- maybeUnlockFlashcards (prisma mocked) ---------------

const mockTopicFindUnique = vi.fn()
const mockProgressFindUnique = vi.fn()
const mockExitAttemptFindFirst = vi.fn()
const mockSlideDeckFindFirst = vi.fn()
const mockUserFindUnique = vi.fn()
const mockCreateMany = vi.fn()
const mockCount = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    topic: { findUnique: (...a: unknown[]) => mockTopicFindUnique(...a) },
    topicProgress: { findUnique: (...a: unknown[]) => mockProgressFindUnique(...a) },
    exitQuizAttempt: { findFirst: (...a: unknown[]) => mockExitAttemptFindFirst(...a) },
    slideDeck: { findFirst: (...a: unknown[]) => mockSlideDeckFindFirst(...a) },
    user: { findUnique: (...a: unknown[]) => mockUserFindUnique(...a) },
    flashcardProgress: {
      createMany: (...a: unknown[]) => mockCreateMany(...a),
      count: (...a: unknown[]) => mockCount(...a),
    },
    flashcard: { createMany: vi.fn(), findMany: vi.fn() },
  },
}))

vi.mock('@/lib/study-context', () => ({
  PERSONAL_CONTEXT: 'personal',
  resolveUnlockContexts: vi.fn().mockResolvedValue({
    contexts: ['personal'],
    activeContext: 'personal',
  }),
}))

vi.mock('@/data/exit-quizzes', () => ({
  hasExitQuiz: () => true, // every topic under test has a quiz mapped
}))

describe('maybeUnlockFlashcards — the exit quiz is required', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockTopicFindUnique.mockResolvedValue({
      id: 'topic-1',
      title: 'CARS Passages',
      textContent: '',
      flashcards: [{ id: 'card-1' }, { id: 'card-2' }],
      exampleProblems: [],
      category: { course: { slug: 'mcat-prep' } },
    })
    mockSlideDeckFindFirst.mockResolvedValue(null)
    mockUserFindUnique.mockResolvedValue({ flashcardNewPerDay: 100 })
    mockCreateMany.mockResolvedValue({ count: 2 })
    mockCount.mockResolvedValue(2)
  })

  it('does NOT unlock on lesson completion alone (the skippable-quiz bug)', async () => {
    mockProgressFindUnique.mockResolvedValue({
      status: 'MASTERED',
      masteryLevel: 1,
      masteredParts: null,
    })
    mockExitAttemptFindFirst.mockResolvedValue(null)

    const { maybeUnlockFlashcards } = await import('@/lib/flashcard-unlock')
    const result = await maybeUnlockFlashcards('user-1', SEVEN_PART_TOPIC)

    expect(result.unlocked).toBe(false)
    expect(mockCreateMany).not.toHaveBeenCalled()
  })

  it('unlocks for a student who aced the ENTRANCE quiz (no attempt can exist)', async () => {
    mockProgressFindUnique.mockResolvedValue({
      status: 'MASTERED',
      masteryLevel: 1,
      masteredParts: [1, 2, 3, 4, 5, 6, 7],
    })
    mockExitAttemptFindFirst.mockResolvedValue(null)

    const { maybeUnlockFlashcards } = await import('@/lib/flashcard-unlock')
    const result = await maybeUnlockFlashcards('user-1', SEVEN_PART_TOPIC)

    expect(result.unlocked).toBe(true)
    expect(mockCreateMany).toHaveBeenCalled()
  })

  it('unlocks once the exit quiz is submitted, at any score', async () => {
    mockProgressFindUnique.mockResolvedValue({
      status: 'COMPLETED',
      masteryLevel: 0.7,
      masteredParts: null,
    })
    mockExitAttemptFindFirst.mockResolvedValue({ id: 'attempt-1' })

    const { maybeUnlockFlashcards } = await import('@/lib/flashcard-unlock')
    const result = await maybeUnlockFlashcards('user-1', SEVEN_PART_TOPIC)

    expect(result.unlocked).toBe(true)
  })

  it('still requires the lesson side: an attempt alone does not unlock', async () => {
    mockProgressFindUnique.mockResolvedValue({
      status: 'IN_PROGRESS',
      masteryLevel: 0.2,
      masteredParts: null,
    })
    mockExitAttemptFindFirst.mockResolvedValue({ id: 'attempt-1' })

    const { maybeUnlockFlashcards } = await import('@/lib/flashcard-unlock')
    const result = await maybeUnlockFlashcards('user-1', SEVEN_PART_TOPIC)

    expect(result.unlocked).toBe(false)
  })
})

// --------------- selectPlanTopics (mastered-topic filter) ---------------

const DOMAINS: PlanDomainResult[] = [
  { domainId: 'gen-chem', domainName: 'General Chemistry', level: 'weak' },
  { domainId: 'org-chem', domainName: 'Organic Chemistry', level: 'moderate' },
  { domainId: 'physics', domainName: 'Physics', level: 'strong' },
]

const rec = (slug: string, priority: 'high' | 'medium' | 'low' = 'high') => ({
  slug,
  name: slug,
  priority,
})

describe('selectPlanTopics — cycles 2-3 cannot auto-clear', () => {
  const fiveStale = [rec('a'), rec('b'), rec('c'), rec('d'), rec('e')]

  it('leaves an all-fresh plan exactly as recommended', () => {
    const selected = selectPlanTopics({
      recommended: fiveStale,
      domains: DOMAINS,
      isStale: () => false,
    })
    expect(selected.map((t) => t.slug)).toEqual(['a', 'b', 'c', 'd', 'e'])
  })

  it('replaces already-cleared recommendations with real, uncleared work', () => {
    const selected = selectPlanTopics({
      recommended: fiveStale,
      domains: DOMAINS,
      isStale: (slug) => fiveStale.some((t) => t.slug === slug),
    })
    expect(selected).toHaveLength(5)
    // None of the pre-cleared topics survive while substitutes exist.
    expect(selected.every((t) => !fiveStale.some((s) => s.slug === t.slug))).toBe(true)
    // Substitutes come from the weak domain first (gen-chem subtopics).
    expect(selected[0].slug.startsWith('mcat-general-chemistry-')).toBe(true)
  })

  it('keeps fresh recommendations and only backfills the cleared slots', () => {
    const selected = selectPlanTopics({
      recommended: fiveStale,
      domains: DOMAINS,
      isStale: (slug) => slug === 'b' || slug === 'd',
    })
    expect(selected).toHaveLength(5)
    expect(selected.slice(0, 3).map((t) => t.slug)).toEqual(['a', 'c', 'e'])
    expect(selected).not.toContainEqual(expect.objectContaining({ slug: 'b' }))
  })

  it('substitutes a sibling subtopic when no domain is weak (all-strong retake)', () => {
    // Real prod shape: cycle 2 scored strong everywhere, so the domain pool is
    // empty, yet the two misses re-recommended topics cleared in cycle 1.
    const selected = selectPlanTopics({
      recommended: [rec('mcat-cars-passages-mcat')],
      domains: [{ domainId: 'cars', domainName: 'CARS', level: 'strong' }],
      isStale: (slug) => slug === 'mcat-cars-passages-mcat',
      limit: 1,
    })
    expect(selected.map((t) => t.slug)).toEqual(['mcat-cars-reasoning-mcat'])
  })

  it('never returns a short plan — cleared topics come back as a last resort', () => {
    const selected = selectPlanTopics({
      recommended: fiveStale,
      domains: [], // no domain results stored → no substitutes available
      isStale: () => true,
    })
    expect(selected).toHaveLength(5)
    expect(selected.map((t) => t.slug)).toEqual(['a', 'b', 'c', 'd', 'e'])
  })

  it('cannot deadlock when the student has mastered everything', () => {
    const selected = selectPlanTopics({
      recommended: fiveStale,
      domains: DOMAINS,
      isStale: () => true, // every candidate, substitutes included
    })
    expect(selected).toHaveLength(5)
    expect(selected.map((t) => t.slug)).toEqual(['a', 'b', 'c', 'd', 'e'])
  })

  it('does not swap out a topic cleared DURING this cycle (no treadmill)', () => {
    // isStale answers "cleared BEFORE this diagnostic", so work done inside the
    // cycle leaves the plan intact and simply counts as done.
    const selected = selectPlanTopics({
      recommended: fiveStale,
      domains: DOMAINS,
      isStale: () => false,
    })
    expect(selected.map((t) => t.slug)).toContain('a')
  })

  it('dedupes and honours a custom limit', () => {
    const selected = selectPlanTopics({
      recommended: [rec('a'), rec('a'), rec('b')],
      domains: DOMAINS,
      isStale: () => false,
      limit: 2,
    })
    expect(selected.map((t) => t.slug)).toEqual(['a', 'b'])
  })
})
