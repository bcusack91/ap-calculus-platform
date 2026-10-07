import { describe, it, expect } from 'vitest'
import { summarizeEntranceQuizzes, summarizeExitQuizzes } from '@/lib/quiz-results'

const at = (iso: string) => new Date(iso)
const titles = new Map([['topic-a', 'Topic A']])

describe('summarizeEntranceQuizzes', () => {
  const q = (topicSlug: string, correct: number, when: string) => ({ topicSlug, answered: 1, correct, answeredAt: at(when) })

  it('groups one sitting per shared timestamp and reports latest and best', () => {
    const rows = [
      // first sitting: 3/4
      q('topic-a', 1, '2026-10-01T10:00:00Z'), q('topic-a', 1, '2026-10-01T10:00:00Z'),
      q('topic-a', 1, '2026-10-01T10:00:00Z'), q('topic-a', 0, '2026-10-01T10:00:00Z'),
      // retake: 2/4
      q('topic-a', 1, '2026-10-03T09:00:00Z'), q('topic-a', 1, '2026-10-03T09:00:00Z'),
      q('topic-a', 0, '2026-10-03T09:00:00Z'), q('topic-a', 0, '2026-10-03T09:00:00Z'),
    ]
    const [s] = summarizeEntranceQuizzes(rows, [], titles, () => 4)
    expect(s).toMatchObject({
      topicSlug: 'topic-a', topicTitle: 'Topic A', sittings: 2,
      lastCorrect: 2, lastTotal: 4, lastPercent: 50,
      bestCorrect: 3, bestTotal: 4, bestPercent: 75,
      partsTestedOut: 0, totalParts: 4,
    })
    expect(s.lastTaken?.toISOString()).toBe('2026-10-03T09:00:00.000Z')
  })

  it('counts tested-out parts only within the lesson, and keeps test-outs that predate recorded answers', () => {
    const [s] = summarizeEntranceQuizzes([], [{ topicSlug: 'topic-b', masteredParts: [1, 2, 3, 4, 5, 6, 7] }], titles, () => 4)
    expect(s).toMatchObject({ topicSlug: 'topic-b', topicTitle: null, sittings: 0, lastCorrect: null, partsTestedOut: 4, totalParts: 4 })
  })

  it('falls back to the saved part count when the lesson is not registered', () => {
    const [s] = summarizeEntranceQuizzes([], [{ topicSlug: 'x', masteredParts: [1, 3] }], titles, () => null)
    expect(s.partsTestedOut).toBe(2)
  })

  it('ignores empty or malformed saved parts', () => {
    expect(summarizeEntranceQuizzes([], [{ topicSlug: 'x', masteredParts: [] }, { topicSlug: 'y', masteredParts: 'nope' }], titles, () => 4)).toEqual([])
  })
})

describe('summarizeExitQuizzes', () => {
  const a = (score: number, totalQuestions: number, when: string, passed = false, mustRedoUnit = false) => ({
    topicSlug: 'topic-a', score, totalQuestions, passed, mustRedoUnit, completedAt: at(when),
  })

  it('carries each score with its own question count (8-question quizzes are not out of 10)', () => {
    const [s] = summarizeExitQuizzes([a(8, 8, '2026-10-02T00:00:00Z', true)], titles)
    expect(s).toMatchObject({ bestScore: 8, bestTotal: 8, bestPercent: 100, passed: true, topicTitle: 'Topic A' })
  })

  it('picks the best attempt by percentage and the latest by date', () => {
    const [s] = summarizeExitQuizzes(
      [a(14, 20, '2026-10-01T00:00:00Z'), a(9, 10, '2026-10-02T00:00:00Z', true), a(5, 10, '2026-10-03T00:00:00Z')],
      titles,
    )
    expect(s).toMatchObject({ totalAttempts: 3, bestScore: 9, bestTotal: 10, bestPercent: 90, lastScore: 5, lastTotal: 10, passed: true, mustRedoUnit: false })
  })

  it('flags must-redo only when never passed and the latest attempt says so', () => {
    const [s] = summarizeExitQuizzes([a(2, 10, '2026-10-01T00:00:00Z', false, true)], titles)
    expect(s.mustRedoUnit).toBe(true)
  })
})
