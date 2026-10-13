import { describe, it, expect, vi } from 'vitest'

const db = {
  diagnosticTest: {
    findMany: vi.fn(async ({ where }: { where: { userId?: string; id?: { in: string[] } } }) =>
      where.id
        ? [{ id: 'd1', category: 'mcat-full-diagnostic' }]
        : [
            { id: 'd2', category: 'mcat-full-diagnostic', results: { estimatedScore: 491, review: { questions: [{ question: 'q' }], answers: [0] } }, createdAt: new Date('2026-10-13') },
            { id: 'old', category: 'sat-full-diagnostic', results: { estimatedScore: 1200 }, createdAt: new Date('2026-06-01') },
            { id: 'fl', category: 'mcat-full-length', results: { form: 3, total: 500, answers: {} }, createdAt: new Date('2026-10-05') },
            { id: 'd1', category: 'mcat-full-diagnostic', results: { estimatedScore: 484, review: { questions: [{ question: 'q' }], answers: [1] } }, createdAt: new Date('2026-09-29') },
          ],
    ),
  },
  satTestAttempt: {
    findMany: vi.fn(async () => [
      { id: 's-new', testNumber: 2, totalScore: 1310, format: 'full', answers: [{ questionId: 'x', moduleIndex: 0 }], completedAt: new Date('2026-10-11') },
      { id: 's-old', testNumber: 1, totalScore: 1250, format: null, answers: [1, 2, 3], completedAt: new Date('2026-08-01') },
    ]),
  },
  mcatUnitTest: {
    findMany: vi.fn(async () => [
      { id: 'u1', diagnosticId: 'd1', correct: 19, total: 25, percentage: 76, passed: true, completedAt: new Date('2026-10-12') },
    ]),
  },
}
vi.mock('@/lib/prisma', () => ({ prisma: db }))

const { listReviewableAttempts } = await import('@/lib/teacher-review-attempts')

describe('listReviewableAttempts', () => {
  it('lists only attempts the review page can rebuild, newest first, with teacher-view links', async () => {
    const list = await listReviewableAttempts('stu', 'cls')
    expect(list.map((a) => [a.kind, a.id, a.title, a.score])).toEqual([
      ['diagnostic', 'd2', 'MCAT diagnostic', '491'],
      ['unit-test', 'u1', 'MCAT unit test', '76% (19/25) · passed'],
      ['sat-practice', 's-new', 'SAT practice test 2', '1310'],
      ['mcat-fl', 'fl', 'MCAT full-length · Form 3', '500'],
      ['diagnostic', 'd1', 'MCAT diagnostic', '484'],
    ])
    expect(list[0].href).toBe('/review/diagnostic/d2?class=cls&student=stu')
  })
})
