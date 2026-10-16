import { describe, it, expect, vi } from 'vitest'

let apPracticeRows: unknown[] = []

const db = {
  diagnosticTest: {
    findMany: vi.fn(async ({ where }: { where: { userId?: string; id?: { in: string[] }; category?: { startsWith?: string } } }) =>
      where.id
        ? [{ id: 'd1', category: 'mcat-full-diagnostic' }]
        : where.category?.startsWith === 'ap-practice-exam:'
        ? apPracticeRows
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

describe('AP practice exams', () => {
  const mcqReview = { review: { questions: [{ question: 'q' }], answers: [0], frq: [] } }
  const frqItem = (i: number) => ({
    s: 1, i, section: 'Section II', number: i + 1, type: 'saq', title: `FRQ ${i + 1}`, prompt: 'p',
    parts: [{ label: 'a', question: 'Explain.', response: 'Because…', rubric: [{ id: 'r1', label: '1 pt', earned: true }] }],
    earned: 1, possible: 4, selfScored: true,
  })

  it('lists every form of all four flagships in their own window, skipping score-only attempts', async () => {
    apPracticeRows = [
      { id: 'chem3', category: 'ap-practice-exam:ap-chem', createdAt: new Date('2026-10-15'), results: { subject: 'AP Chemistry', form: 3, estimatedAPScore: 4, percentage: 62, review: { ...mcqReview.review, frq: [frqItem(0), frqItem(1)] } } },
      { id: 'bio2', category: 'ap-practice-exam:ap-bio', createdAt: new Date('2026-10-14'), results: { subject: 'AP Biology', form: 2, estimatedAPScore: 3, percentage: 50, ...mcqReview } },
      // Free response only (stopped after Section I was skipped) — still reviewable.
      { id: 'phys1', category: 'ap-practice-exam:ap-physics1', createdAt: new Date('2026-10-13'), results: { subject: 'AP Physics 1', form: 1, estimatedAPScore: 2, percentage: 35, review: { questions: [], answers: [], frq: [frqItem(0)] } } },
      { id: 'calc2', category: 'ap-practice-exam:ap-calcab', createdAt: new Date('2026-10-12'), results: { subject: 'AP Calculus AB', form: 2, estimatedAPScore: 5, percentage: 74, ...mcqReview } },
      // Saved before per-question capture: nothing to rebuild.
      { id: 'legacy', category: 'ap-practice-exam:ap-chem', createdAt: new Date('2026-09-01'), results: { subject: 'AP Chemistry', estimatedAPScore: 3, percentage: 50 } },
    ]
    const list = (await listReviewableAttempts('stu', 'cls')).filter((a) => a.kind === 'ap-practice')
    expect(list.map((a) => [a.id, a.title, a.score, a.detail])).toEqual([
      ['chem3', 'AP Chemistry practice exam · Form 3', '4/5 · 62%', '2 free responses to read'],
      ['bio2', 'AP Biology practice exam · Form 2', '3/5 · 50%', undefined],
      ['phys1', 'AP Physics 1 practice exam · Form 1', '2/5 · 35%', '1 free response to read'],
      ['calc2', 'AP Calculus AB practice exam · Form 2', '5/5 · 74%', undefined],
    ])
    expect(list[0].href).toBe('/review/ap-practice/chem3?class=cls&student=stu')
    // The diagnostics window leaves practice exams to their own query.
    const firstCall = db.diagnosticTest.findMany.mock.calls.find((c) => !(c[0] as { where: { id?: unknown } }).where.id && !(c[0] as { where: { category?: unknown } }).where.category)
    expect((firstCall![0] as { where: Record<string, unknown> }).where.NOT).toEqual({ category: { startsWith: 'ap-practice-exam:' } })
    apPracticeRows = []
  })
})
