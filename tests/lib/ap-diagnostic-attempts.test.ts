/**
 * AP diagnostic attempts: the submit routes tie their QuestionActivity rows
 * to the stored attempt (answer log, /review, the mistake log) the way the SAT
 * and MCAT routes do, and the review resolver names the real AP course.
 *
 * Before Oct 2026 all 23 AP submit routes logged rows with no attempt id or
 * kind, and the resolver split 'ap-chem-diagnostic-3' on '-' into course 'ap'
 * ("AP diagnostic", back link /ap-diagnostic).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockAuth = vi.fn()
const mockRecord = vi.fn()
const mockCreate = vi.fn()
const mockFindFirst = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/study-tracking', () => ({ recordQuestions: (...a: unknown[]) => mockRecord(...a) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    diagnosticTest: {
      create: (...a: unknown[]) => mockCreate(...a),
      findFirst: (...a: unknown[]) => mockFindFirst(...a),
    },
    questionActivity: { findMany: vi.fn().mockResolvedValue([]) },
    topic: { findMany: vi.fn().mockResolvedValue([]) },
  },
}))

import { CLASS_PLAN_COURSES } from '@/lib/class-plan-config'
import { apDiagnosticCourse, resolveAttempt } from '@/lib/question-resolver'

/** API folder, the category prefix its page stores, and the DB course. */
const AP_ROUTES = CLASS_PLAN_COURSES.filter((c) => c.courseSlug?.startsWith('ap-')).map((c) => ({
  dir: c.key === 'ap-aas' ? 'ap-african-american-studies-diagnostic' : `${c.key}-diagnostic`,
  category: `${c.categoryPrefix}-2`,
  courseSlug: c.courseSlug!,
}))

const post = (body: unknown) =>
  new Request('http://localhost/api/x', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })

const results = (topicSlug: string) => ({
  form: 2,
  totalCorrect: 1,
  totalQuestions: 2,
  recommendedTopics: [{ slug: topicSlug, name: 'Old name', priority: 'high' }],
  review: {
    questions: [
      { question: 'Which organelle makes most of the ATP in a eukaryotic cell?', options: ['Ribosome', 'Mitochondrion', 'Golgi', 'Nucleus'], correctAnswer: 1, domain: 'd1', topicSlug },
      { question: 'What is 2 + 2?', options: ['3', '4'], correctAnswer: 1, domain: 'd1', topicSlug },
    ],
    answers: [1, 0],
    domainNames: { d1: 'Domain 1' },
  },
  domains: [{ domainId: 'd1', domainName: 'Domain 1', correct: 1, total: 2 }],
})

beforeEach(() => {
  vi.clearAllMocks()
  mockAuth.mockResolvedValue({ user: { id: 'u1' } })
  mockRecord.mockResolvedValue(undefined)
  mockCreate.mockImplementation(async ({ data }: { data: Record<string, unknown> }) => ({ id: 'diag-1', ...data }))
})

describe('AP diagnostic submit routes tag rows with the stored attempt', () => {
  it('covers all 23 AP diagnostics', () => {
    expect(AP_ROUTES).toHaveLength(23)
  })

  it.each(AP_ROUTES)('$dir', async ({ dir, category, courseSlug }) => {
    const { POST } = await import(`../../src/app/api/${dir}/submit/route.ts`)
    const res = await POST(post({ category, results: results('some-topic'), weakAreas: ['Domain 1'], strengths: [] }))
    expect(res.status).toBe(200)
    expect(mockRecord).toHaveBeenCalledTimes(1)
    const rows = mockRecord.mock.calls[0][1] as Record<string, unknown>[]
    expect(rows).toHaveLength(2)
    for (const r of rows) {
      expect(r.attemptId).toBe('diag-1')
      expect(r.attemptKind).toBe('diagnostic')
      expect(r.courseSlug).toBe(courseSlug)
      expect(r.source).toBe('DIAGNOSTIC')
    }
    expect(rows.map((r) => r.correct)).toEqual([1, 0])
  })

  it('stores a stale client’s legacy slugs as production topics', async () => {
    const { POST } = await import('@/app/api/ap-bio-diagnostic/submit/route')
    await POST(post({ category: 'ap-bio-diagnostic-2', results: results('ap-bio-cell-structure-function'), weakAreas: [], strengths: [] }))
    const stored = mockCreate.mock.calls[0][0].data.results
    expect(stored.recommendedTopics[0]).toMatchObject({ slug: 'cell-organelles', name: 'Cell Organelles' })
    expect(stored.review.questions.map((q: { topicSlug: string }) => q.topicSlug)).toEqual(['cell-organelles', 'cell-organelles'])
    const rows = mockRecord.mock.calls[0][1] as Record<string, unknown>[]
    expect(rows[0].topicSlug).toBe('cell-organelles')
  })
})

describe('review resolver: AP diagnostics name their course', () => {
  it('maps every AP category to its course slug, name and diagnostic page', () => {
    expect(apDiagnosticCourse('ap-chem-diagnostic-3')).toEqual({ courseSlug: 'ap-chemistry', label: 'AP Chemistry', backHref: '/ap-chem-diagnostic' })
    expect(apDiagnosticCourse('calcab-diagnostic-1')).toEqual({ courseSlug: 'ap-calculus-ab', label: 'AP Calculus AB', backHref: '/calcab-diagnostic' })
    expect(apDiagnosticCourse('ap-aas-diagnostic-4')).toEqual({ courseSlug: 'ap-african-american-studies', label: 'AP African American Studies', backHref: '/ap-african-american-studies-diagnostic' })
    for (const r of AP_ROUTES) expect(apDiagnosticCourse(r.category)?.courseSlug).toBe(r.courseSlug)
    expect(apDiagnosticCourse('sat-full-diagnostic')).toBeNull()
    expect(apDiagnosticCourse('algebra1-diagnostic-2')).toBeNull()
  })

  it('resolves an AP attempt under the real course with production topic tags', async () => {
    mockFindFirst.mockResolvedValue({ category: 'ap-bio-diagnostic-2', results: { ...results('ap-bio-cell-structure-function'), estimatedAPScore: 3 }, createdAt: new Date('2026-10-01') })
    const a = await resolveAttempt('diagnostic', 'diag-1', 'u1')
    expect(a).toMatchObject({ course: 'ap-biology', title: 'AP Biology diagnostic', backHref: '/ap-bio-diagnostic', score: { correct: 1, total: 2, label: '3/5' } })
    expect(a!.items.map((i) => i?.topicSlug)).toEqual(['cell-organelles', 'cell-organelles'])
  })

  it('leaves non-AP diagnostics as they were', async () => {
    mockFindFirst.mockResolvedValue({ category: 'algebra1-diagnostic-2', results: results('algebra-topic'), createdAt: new Date('2026-10-01') })
    const a = await resolveAttempt('diagnostic', 'diag-2', 'u1')
    expect(a).toMatchObject({ course: 'algebra1', title: 'ALGEBRA1 diagnostic', backHref: '/algebra1-diagnostic' })
  })
})
