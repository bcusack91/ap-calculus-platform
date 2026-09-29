/**
 * Onboarding reliability:
 *  - "Skip for now" is remembered (LearningPath.topicOrder marker) so the
 *    dashboard stops looping the user back to /onboarding.
 *  - Anyone who has taken a diagnostic counts as onboarded.
 *  - The goal step routes somewhere real: the course's diagnostic, or the hub
 *    for "just exploring"; the first topic only when there is no diagnostic.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockAuth = vi.fn()
const lp = vi.hoisted(() => ({ findUnique: vi.fn(), create: vi.fn(), update: vi.fn(), upsert: vi.fn() }))
const mockCourse = vi.fn()
const mockProgressCount = vi.fn()
const mockMemberCount = vi.fn()
const mockDiagnosticCount = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    learningPath: lp,
    course: { findUnique: (...a: unknown[]) => mockCourse(...a) },
    topicProgress: { count: (...a: unknown[]) => mockProgressCount(...a) },
    classroomMember: { count: (...a: unknown[]) => mockMemberCount(...a) },
    diagnosticTest: { count: (...a: unknown[]) => mockDiagnosticCount(...a) },
  },
}))

import { GET, POST } from '@/app/api/onboarding/route'
import { onboardingDestination, diagnosticRouteForCourseSlug } from '@/lib/onboarding-destination'

const post = (body: unknown) =>
  POST(new Request('http://localhost/api/onboarding', { method: 'POST', body: JSON.stringify(body) }))

const calcCourse = {
  slug: 'ap-calculus-ab',
  categories: [{ topics: [{ slug: 'limits-intro', title: 'Limits' }, { slug: 'continuity', title: 'Continuity' }] }],
}

beforeEach(() => {
  vi.clearAllMocks()
  mockAuth.mockResolvedValue({ user: { id: 'u1' } })
  lp.findUnique.mockResolvedValue({ currentTopic: null, topicOrder: null })
  mockCourse.mockResolvedValue(calcCourse)
  mockProgressCount.mockResolvedValue(0)
  mockMemberCount.mockResolvedValue(0)
  mockDiagnosticCount.mockResolvedValue(0)
})

describe('POST /api/onboarding — skip', () => {
  it('stores the skip marker on a fresh learning path', async () => {
    const body = await (await post({ skipped: true })).json()
    expect(body).toMatchObject({ success: true, skipped: true })
    expect(lp.update).toHaveBeenCalledWith({ where: { userId: 'u1' }, data: { topicOrder: '[]' } })
  })

  it('creates the row when a legacy account has none', async () => {
    lp.findUnique.mockResolvedValue(null)
    await post({ skipped: true })
    expect(lp.create).toHaveBeenCalledWith({ data: { userId: 'u1', topicOrder: '[]' } })
  })

  it('never overwrites a path the user already chose', async () => {
    lp.findUnique.mockResolvedValue({ currentTopic: 'limits-intro', topicOrder: '["limits-intro"]' })
    await post({ skipped: true })
    expect(lp.update).not.toHaveBeenCalled()
    expect(lp.create).not.toHaveBeenCalled()
  })
})

describe('GET /api/onboarding — hasCompletedOnboarding', () => {
  it('is false for a brand-new account', async () => {
    expect((await (await GET()).json()).hasCompletedOnboarding).toBe(false)
  })

  it('is true after a skip (topicOrder marker)', async () => {
    lp.findUnique.mockResolvedValue({ currentTopic: null, topicOrder: '[]' })
    expect((await (await GET()).json()).hasCompletedOnboarding).toBe(true)
  })

  it('is true once the user has taken any diagnostic', async () => {
    mockDiagnosticCount.mockResolvedValue(1)
    expect((await (await GET()).json()).hasCompletedOnboarding).toBe(true)
    expect(mockDiagnosticCount.mock.calls[0][0]).toEqual({ where: { userId: 'u1' } })
  })
})

describe('POST /api/onboarding — goal routing', () => {
  it('exam prep goes to the course diagnostic', async () => {
    const body = await (await post({ courseSlug: 'ap-calculus-ab', goalType: 'exam-prep' })).json()
    expect(body.destination).toBe('/calcab-diagnostic')
    expect(body.firstTopic).toBe('limits-intro')
  })

  it('catch-up / get-ahead also start with the diagnostic when there is one', async () => {
    expect((await (await post({ courseSlug: 'ap-calculus-ab', goalType: 'catch-up' })).json()).destination).toBe('/calcab-diagnostic')
    expect((await (await post({ courseSlug: 'ap-calculus-ab', goalType: 'get-ahead' })).json()).destination).toBe('/calcab-diagnostic')
  })

  it('just exploring goes to the course hub', async () => {
    const body = await (await post({ courseSlug: 'ap-calculus-ab', goalType: 'just-browsing' })).json()
    expect(body.destination).toBe('/ap-calculus-ab')
  })

  it('falls back to the first topic for a course with no diagnostic', async () => {
    mockCourse.mockResolvedValue({ slug: 'grade-5-math', categories: [{ topics: [{ slug: 'place-value', title: 'Place value' }] }] })
    const body = await (await post({ courseSlug: 'grade-5-math', goalType: 'exam-prep' })).json()
    expect(body.destination).toBe('/topics/place-value')
  })

  it('handles catalog tracks with no DB course row of their own (Precalculus, PSAT)', async () => {
    mockCourse.mockResolvedValue(null)
    const pre = await post({ courseSlug: 'precalculus', goalType: 'exam-prep' })
    expect(pre.status).toBe(200)
    expect((await pre.json()).destination).toBe('/precalc-diagnostic')

    mockCourse.mockResolvedValue({ slug: 'sat-prep', categories: [] })
    const psat = await (await post({ courseSlug: 'psat', goalType: 'exam-prep' })).json()
    expect(psat.destination).toBe('/sat-diagnostic')
    expect(mockCourse.mock.calls.at(-1)?.[0]).toMatchObject({ where: { slug: 'sat-prep' } })
  })

  it('rejects an unknown course', async () => {
    mockCourse.mockResolvedValue(null)
    expect((await post({ courseSlug: 'not-a-course', goalType: 'exam-prep' })).status).toBe(400)
  })
})

describe('onboardingDestination', () => {
  it('maps every onboarding course with a diagnostic to a real diagnostic route', () => {
    expect(diagnosticRouteForCourseSlug('ap-african-american-studies')).toBe('/ap-african-american-studies-diagnostic')
    expect(diagnosticRouteForCourseSlug('organic-chemistry-1')).toBe('/ochem-diagnostic')
    expect(diagnosticRouteForCourseSlug('mcat-prep')).toBe('/mcat-diagnostic')
    expect(diagnosticRouteForCourseSlug('grade-4-math')).toBeNull()
  })

  it('uses the hub when there is neither a diagnostic nor a topic', () => {
    expect(onboardingDestination({ courseSlug: 'grade-4-math', goal: 'exam-prep', firstTopic: null })).toBe('/grade-4-math')
  })
})

describe('diagnostic routes exist', () => {
  it('every course slug the resolver knows maps to a real page', async () => {
    const fs = await import('node:fs')
    const path = await import('node:path')
    const { CLASS_PLAN_COURSES } = await import('@/lib/class-plan-config')
    const slugs = [
      ...CLASS_PLAN_COURSES.map((c) => c.courseSlug).filter((s): s is string => !!s),
      'precalculus', 'organic-chemistry-1', 'organic-chemistry-2', 'psat',
    ]
    for (const slug of slugs) {
      const route = diagnosticRouteForCourseSlug(slug)
      expect(route, slug).toBeTruthy()
      expect(fs.existsSync(path.join(process.cwd(), 'src/app', route!, 'page.tsx')), `${slug} → ${route}`).toBe(true)
    }
  })
})
