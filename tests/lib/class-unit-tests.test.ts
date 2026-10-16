import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockUnitTests = vi.fn()
const mockDiagnostics = vi.fn()
const mockTopics = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    mcatUnitTest: { findMany: (...a: unknown[]) => mockUnitTests(...a) },
    diagnosticTest: { findMany: (...a: unknown[]) => mockDiagnostics(...a) },
    topic: { findMany: (...a: unknown[]) => mockTopics(...a) },
  },
}))

import { loadClassUnitTests, loadUnitTestLessonScores } from '@/lib/class-unit-tests'

const at = (d: string) => new Date(`2026-10-${d}T12:00:00Z`)

describe('loadClassUnitTests', () => {
  beforeEach(() => {
    mockUnitTests.mockReset()
    mockDiagnostics.mockReset()
  })

  it('numbers cycles per course, groups sittings, newest cycle first', async () => {
    mockUnitTests.mockResolvedValue([
      { id: 'u1', userId: 'a', diagnosticId: 'd1', topicSlugs: ['t1', 't2', 't3', 't4', 't5'], correct: 15, total: 25, percentage: 60, passed: false, completedAt: at('02') },
      { id: 'u2', userId: 'a', diagnosticId: 'd1', topicSlugs: ['t1', 't2', 't3', 't4', 't5'], correct: 20, total: 25, percentage: 80, passed: true, completedAt: at('03') },
      { id: 'u3', userId: 'a', diagnosticId: 'd2', topicSlugs: ['t6'], correct: null, total: 25, percentage: null, passed: false, completedAt: null },
      { id: 'u4', userId: 'b', diagnosticId: 's1', topicSlugs: ['x'], correct: 19, total: 25, percentage: 76, passed: true, completedAt: at('05') },
    ])
    mockDiagnostics.mockResolvedValue([
      { id: 'd1', userId: 'a', category: 'mcat-full-diagnostic' },
      { id: 'satA', userId: 'a', category: 'sat-full-diagnostic' },
      { id: 'd2', userId: 'a', category: 'mcat-full-diagnostic' },
      { id: 's0', userId: 'b', category: 'sat-full-diagnostic' },
      { id: 's1', userId: 'b', category: 'sat-full-diagnostic' },
    ])

    const out = await loadClassUnitTests(['a', 'b', 'c'])

    const a = out.get('a')!
    expect(a.map((c) => [c.course, c.cycle])).toEqual([['MCAT', 2], ['MCAT', 1]])
    expect(a[0]).toMatchObject({ inProgress: true, attempts: [] })
    expect(a[1].attempts.map((x) => [x.percentage, x.passed])).toEqual([[60, false], [80, true]])
    expect(a[1].lessons).toBe(5)
    expect(out.get('b')![0]).toMatchObject({ course: 'SAT', cycle: 2 })
    expect(out.has('c')).toBe(false)
  })

  it('includes AP cycle tests, numbered among that course\'s diagnostics only', async () => {
    mockUnitTests.mockResolvedValue([
      { id: 'p1', userId: 'a', diagnosticId: 'chem2', topicSlugs: ['gibbs-free-energy', 'periodic-trends'], correct: 18, total: 25, percentage: 72, passed: false, completedAt: at('06') },
      { id: 'p2', userId: 'a', diagnosticId: 'calc1', topicSlugs: ['related-rates'], correct: 21, total: 25, percentage: 84, passed: true, completedAt: at('07') },
    ])
    mockDiagnostics.mockResolvedValue([
      { id: 'chem1', userId: 'a', category: 'ap-chem-diagnostic-1' },
      { id: 'calc1', userId: 'a', category: 'calcab-diagnostic-1' },
      { id: 'chem2', userId: 'a', category: 'ap-chem-diagnostic-2' },
    ])
    const a = (await loadClassUnitTests(['a'])).get('a')!
    expect(a.map((c) => [c.course, c.cycle, c.lessons])).toEqual([['AP Calculus AB', 1, 1], ['AP Chemistry', 2, 2]])
    expect(a[0].attempts[0]).toMatchObject({ percentage: 84, passed: true })
  })

  it('skips the diagnostic lookup when nobody has a unit test', async () => {
    mockUnitTests.mockResolvedValue([])
    expect((await loadClassUnitTests(['a'])).size).toBe(0)
    expect(mockDiagnostics).not.toHaveBeenCalled()
  })
})

describe('loadUnitTestLessonScores', () => {
  it('scores each lesson in plan order with topic titles; unanswered counts wrong', async () => {
    mockUnitTests.mockResolvedValue([
      {
        id: 'u1',
        topicSlugs: ['t2', 't1'],
        questions: [
          { topicSlug: 't1', correctIndex: 0 },
          { topicSlug: 't1', correctIndex: 1 },
          { topicSlug: 't2', correctIndex: 2 },
          { topicSlug: 't2', correctIndex: 3 },
        ],
        answers: [0, 0, 2, null],
      },
    ])
    mockTopics.mockResolvedValue([{ slug: 't1', title: 'Enzymes' }])

    const out = await loadUnitTestLessonScores('a')

    expect(out.u1).toEqual([
      { slug: 't2', title: 't2', correct: 1, total: 2 },
      { slug: 't1', title: 'Enzymes', correct: 1, total: 2 },
    ])
  })
})
