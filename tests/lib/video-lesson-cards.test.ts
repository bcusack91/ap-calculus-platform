/**
 * Video lesson review cards join a student's deck one MODULE at a time (owner,
 * Nov 2026): a module (two source videos) counts as finished once every one
 * of its sections is watched and every checkpoint settled. The topic-wide
 * unlock (lesson + exit quiz) never hands these cards out.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { visibleSteps, type ProgressSteps, type StoredStep } from '@/lib/video-lesson-core'

const mockFindMany = vi.fn()
const mockCreateMany = vi.fn()
vi.mock('@/lib/prisma', () => ({
  prisma: {
    flashcard: { findMany: (...a: unknown[]) => mockFindMany(...a) },
    flashcardProgress: { createMany: (...a: unknown[]) => mockCreateMany(...a) },
    user: { findUnique: vi.fn().mockResolvedValue({ flashcardNewPerDay: null }) },
  },
}))
vi.mock('@/lib/study-context', () => ({
  resolveUnlockContexts: vi.fn().mockResolvedValue({ contexts: ['personal', 'course:mcat-prep'], activeContext: 'personal' }),
}))

const q = { question: 'Which?', options: ['a', 'b', 'c', 'd'], correctAnswer: 0, explanation: 'a' }
const step = (order: number, video: number, section: string): StoredStep => ({
  order,
  clipId: `v${video}-${section}`,
  yield: null,
  questions: [q],
  clip: { title: section, provider: 'FILE', providerId: '/x.mp4', durationSec: 100, tags: ['lesson-mcat-circ1', `video-${video}`, `section-${section}`, 'role-teach'] },
})
// Two modules: videos 1–2, then 3–4.
const STEPS = visibleSteps([step(0, 1, '01-a'), step(1, 2, '02-a'), step(2, 3, '03-a'), step(3, 4, '04-a')], false)
const done = { ranges: [[0, 100]] as [number, number][], answered: { '0': { correct: true, at: '2026-11-15T00:00:00Z' } } }
const progress = (...clipIds: string[]): ProgressSteps => Object.fromEntries(clipIds.map((id) => [id, done]))

describe('finishedModules', () => {
  it('counts a module only when all of its sections are watched and answered', async () => {
    const { finishedModules } = await import('@/lib/video-lesson-cards')
    expect(finishedModules(STEPS, progress('v1-01-a'))).toEqual([])
    expect(finishedModules(STEPS, progress('v1-01-a', 'v2-02-a'))).toEqual([{ module: 1, lessonKey: 'mcat-circ1', videos: [1, 2] }])
    // Watched but the checkpoint unanswered: not finished.
    const unanswered = { ...progress('v1-01-a'), 'v2-02-a': { ranges: [[0, 100]] as [number, number][] } }
    expect(finishedModules(STEPS, unanswered)).toEqual([])
  })

  it('reports only the modules this save finished', async () => {
    const { newlyFinishedModules } = await import('@/lib/video-lesson-cards')
    const before = progress('v1-01-a', 'v2-02-a', 'v3-03-a')
    const after = progress('v1-01-a', 'v2-02-a', 'v3-03-a', 'v4-04-a')
    expect(newlyFinishedModules(STEPS, before, after)).toEqual([{ module: 2, lessonKey: 'mcat-circ1', videos: [3, 4] }])
    expect(newlyFinishedModules(STEPS, after, after)).toEqual([])
  })
})

describe('unlockVideoModuleCards', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockCreateMany.mockResolvedValue({ count: 2 })
  })

  it('adds the module videos’ cards to every target deck, in deck order', async () => {
    const { REVIEW_DECKS } = await import('@/data/video-lesson-flashcards')
    const first = REVIEW_DECKS['mcat-circ1'][1][0].front
    const second = REVIEW_DECKS['mcat-circ1'][1][1].front
    const fromVideo2 = REVIEW_DECKS['mcat-circ1'][2][0].front
    mockFindMany.mockResolvedValue([
      { id: 'c', front: fromVideo2, videoDeck: 'mcat-circ1:2' },
      { id: 'b', front: second, videoDeck: 'mcat-circ1:1' },
      { id: 'a', front: first, videoDeck: 'mcat-circ1:1' },
    ])
    const { unlockVideoModuleCards } = await import('@/lib/video-lesson-cards')
    const res = await unlockVideoModuleCards('u1', { id: 't1', title: 'Circuits Part 1' }, 'mcat-prep', [{ module: 1, lessonKey: 'mcat-circ1', videos: [1, 2] }])
    expect(mockFindMany.mock.calls[0][0].where).toEqual({ topicId: 't1', videoDeck: { in: ['mcat-circ1:1', 'mcat-circ1:2'] } })
    expect(mockCreateMany).toHaveBeenCalledTimes(2)
    const rows = mockCreateMany.mock.calls[0][0].data
    expect(rows.map((r: { flashcardId: string }) => r.flashcardId)).toEqual(['a', 'b', 'c'])
    expect(mockCreateMany.mock.calls.map((c) => c[0].data[0].context)).toEqual(['personal', 'course:mcat-prep'])
    expect(mockCreateMany.mock.calls[0][0].skipDuplicates).toBe(true)
    expect(res).toEqual({ newCards: 2, topicTitle: 'Module 1 of Circuits Part 1' })
  })

  it('does nothing for a module with no stored cards', async () => {
    mockFindMany.mockResolvedValue([])
    const { unlockVideoModuleCards } = await import('@/lib/video-lesson-cards')
    expect(await unlockVideoModuleCards('u1', { id: 't1', title: 'X' }, null, [{ module: 3, lessonKey: 'mcat-circ1', videos: [5, 6] }])).toBeNull()
    expect(mockCreateMany).not.toHaveBeenCalled()
  })
})
