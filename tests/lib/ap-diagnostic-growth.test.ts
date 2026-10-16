/**
 * A student's AP diagnostic growth per course for the teacher's student and
 * study reports (src/lib/ap-diagnostic-growth.ts): first sitting → latest,
 * banded, for every AP course (v1 forms and v2 alike). Practice exams and
 * non-AP diagnostics stay out.
 */
import { describe, it, expect, vi } from 'vitest'

const findMany = vi.fn()
vi.mock('@/lib/prisma', () => ({ prisma: { diagnosticTest: { findMany: (...a: unknown[]) => findMany(...a) } } }))

const { apCourseGrowth, loadApDiagnosticGrowth } = await import('@/lib/ap-diagnostic-growth')

const ap = (correct: number, score: number, extra: Record<string, unknown> = {}) => ({
  totalCorrect: correct, totalQuestions: 33, percentage: Math.round((correct / 33) * 100), estimatedAPScore: score, ...extra,
})
const row = (id: string, category: string, day: string, results: unknown) => ({ id, category, createdAt: new Date(`2026-${day}T12:00:00Z`), results })

describe('apCourseGrowth', () => {
  it('bands first → latest for each of the four flagships', () => {
    const out = apCourseGrowth([
      row('c1', 'ap-chem-diagnostic-1', '09-01', ap(18, 3)),
      row('c2', 'ap-chem-diagnostic-v2', '10-01', ap(20, 4, { scoreRange: { low: 3, high: 4 } })),
      row('b1', 'ap-bio-diagnostic-2', '09-02', ap(18, 3)),
      row('b2', 'ap-bio-diagnostic-3', '09-20', ap(19, 3)),
      row('b3', 'ap-bio-diagnostic-v2', '10-02', ap(20, 4)),
      row('p1', 'ap-physics1-diagnostic-1', '09-03', ap(24, 5)),
      row('p2', 'ap-physics1-diagnostic-2', '10-03', ap(18, 3)),
      row('k1', 'calcab-diagnostic-1', '10-04', ap(18, 3)),
      // Not diagnostics, or not AP: left out.
      row('x1', 'ap-practice-exam:ap-chem', '10-05', { estimatedAPScore: 4, percentage: 62 }),
      row('x2', 'sat-full-diagnostic', '10-05', { estimatedScore: 1200 }),
    ])
    expect(out.map((c) => [c.course, c.sittings, c.first.label, c.latest.label])).toEqual([
      ['AP Calculus AB', 1, '3–4/5', '3–4/5'],
      ['AP Physics 1', 2, '4–5/5', '3–4/5'],
      ['AP Biology', 3, '3–4/5', '3–4/5'],
      ['AP Chemistry', 2, '3–4/5', '3–4/5'],
    ])
    const by = Object.fromEntries(out.map((c) => [c.courseKey, c]))
    expect(by['calcab'].growth).toBeNull()
    expect(by['ap-chem'].growth).toMatchObject({ delta: 1, low: 0, high: 2, meaningful: false })
    expect(by['ap-bio'].growth).toMatchObject({ delta: 1, low: 0, high: 2 })
    expect(by['ap-physics1'].growth!.delta).toBe(-2)
    expect(by['ap-physics1'].first.id).toBe('p1')
    expect(by['ap-physics1'].latest.id).toBe('p2')
  })

  it('loads only AP diagnostic categories for one student', async () => {
    findMany.mockResolvedValueOnce([row('c1', 'ap-chem-diagnostic-1', '09-01', ap(18, 3))])
    const out = await loadApDiagnosticGrowth('stu')
    expect(out).toHaveLength(1)
    const where = findMany.mock.calls[0][0].where as { userId: string; OR: { category: { startsWith: string } }[] }
    expect(where.userId).toBe('stu')
    const prefixes = where.OR.map((o) => o.category.startsWith)
    expect(prefixes).toEqual(expect.arrayContaining(['ap-chem-diagnostic', 'ap-bio-diagnostic', 'ap-physics1-diagnostic', 'calcab-diagnostic']))
    expect(prefixes).not.toContain('sat-full-diagnostic')
    expect(prefixes).not.toContain('mcat-full-diagnostic')
  })
})
