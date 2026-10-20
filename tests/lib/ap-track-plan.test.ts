/**
 * AP difficulty tracks on the server surfaces: the plan builders order topics
 * by track and carry the placement (course hub), the lesson settings route
 * hands the lesson its exit-quiz mix, and the teacher's class plan shows each
 * student's track. Placement rules themselves: tests/lib/ap-track.test.ts.
 */
import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest'

const db = {
  diagnosticTest: { findFirst: vi.fn(), findMany: vi.fn() },
  apTrackOverride: { findUnique: vi.fn(), findMany: vi.fn() },
  user: { findUnique: vi.fn() },
  topic: { findMany: vi.fn() },
  topicProgress: { findMany: vi.fn() },
  exitQuizAttempt: { findMany: vi.fn() },
  mcatUnitTest: { findMany: vi.fn() },
  classroomMember: { findMany: vi.fn() },
  externalExamScore: { findMany: vi.fn() },
}
vi.mock('@/lib/prisma', () => ({ prisma: db }))
vi.mock('@/lib/auth', () => ({ auth: async () => ({ user: { id: 'u1' } }) }))
vi.mock('@/lib/teacher-auth', () => ({ requireClassroomAccess: async () => ({ classroom: { id: 'c1' } }) }))

const DIAG_AT = new Date('2026-10-10T12:00:00Z')
// Chemistry units (CED weight midpoints): periodic-trends 1 (8%), ideal-gas-law 3 (20%),
// equilibrium-constants-expressions 7 (8%), solubility-ksp 7 (8%), gibbs-free-energy 9 (8%).
const CHEM = [
  { slug: 'equilibrium-constants-expressions', name: 'Equilibrium', priority: 'high' },
  { slug: 'periodic-trends', name: 'Periodic Trends', priority: 'medium' },
  { slug: 'gibbs-free-energy', name: 'Gibbs', priority: 'high' },
  { slug: 'ideal-gas-law', name: 'Gases', priority: 'high' },
  { slug: 'solubility-ksp', name: 'Ksp', priority: 'high' },
]
const chemResults = (percentage: number) => ({ totalCorrect: Math.round((percentage / 100) * 33), totalQuestions: 33, percentage, recommendedTopics: CHEM })

const ORDER = {
  regular: ['equilibrium-constants-expressions', 'gibbs-free-energy', 'ideal-gas-law', 'solubility-ksp', 'periodic-trends'],
  foundation: ['ideal-gas-law', 'equilibrium-constants-expressions', 'solubility-ksp', 'gibbs-free-energy', 'periodic-trends'],
  five: ['ideal-gas-law', 'equilibrium-constants-expressions', 'solubility-ksp', 'gibbs-free-energy', 'periodic-trends'],
}

beforeEach(() => {
  vi.clearAllMocks()
  db.topic.findMany.mockImplementation(async ({ where }: { where: { slug: { in: string[] } } }) =>
    where.slug.in.map((slug) => ({ id: `t-${slug}`, slug, title: slug })),
  )
  db.topicProgress.findMany.mockResolvedValue([])
  db.exitQuizAttempt.findMany.mockResolvedValue([])
  db.mcatUnitTest.findMany.mockResolvedValue([])
  db.user.findUnique.mockResolvedValue({ lessonIncludeLowYield: false })
  db.externalExamScore.findMany.mockResolvedValue([])
  // No teacher overrides unless a test sets one.
  db.apTrackOverride.findUnique.mockResolvedValue(null)
  db.apTrackOverride.findMany.mockResolvedValue([])
})

describe('buildGenericPlanStatus orders an AP track course by track', () => {
  let mod: typeof import('@/lib/act-plan')
  beforeAll(async () => { mod = await import('@/lib/act-plan') }, 60_000)

  it('Regular (estimated 3): priority order, as before', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'd', createdAt: DIAG_AT, results: chemResults(52) })
    const p = await mod.buildGenericPlanStatus('u1', 'ap-chem')
    expect(p.recommendedTopics.map((t) => t.slug)).toEqual(ORDER.regular)
    expect(p.apTrack).toMatchObject({ track: 'regular', estimatedScore: 3 })
  })

  it('Foundation (estimated 2): weakest first, then the earliest unit', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'd', createdAt: DIAG_AT, results: chemResults(33) })
    const p = await mod.buildGenericPlanStatus('u1', 'ap-chem')
    expect(p.recommendedTopics.map((t) => t.slug)).toEqual(ORDER.foundation)
    expect(p.pendingTopics.map((t) => t.slug)).toEqual(ORDER.foundation)
    expect(p.apTrack).toMatchObject({ track: 'foundation', mix: 'foundation-mix' })
  })

  it('5-track (estimated 5): the heaviest-weighted unit first', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'd', createdAt: DIAG_AT, results: chemResults(82) })
    const p = await mod.buildGenericPlanStatus('u1', 'ap-chem')
    expect(p.recommendedTopics.map((t) => t.slug)).toEqual(ORDER.five)
    expect(p.apTrack).toMatchObject({ track: 'five', mix: 'five-mix' })
  })

  it('5-track (estimated 4): a 4 is on the 5-track since the Oct 2026 cutoff change', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'd', createdAt: DIAG_AT, results: chemResults(61) })
    const p = await mod.buildGenericPlanStatus('u1', 'ap-chem')
    expect(p.recommendedTopics.map((t) => t.slug)).toEqual(ORDER.five)
    expect(p.apTrack).toMatchObject({ track: 'five', mix: 'five-mix', estimatedScore: 4, source: 'diagnostic' })
  })

  it('a teacher override beats the diagnostic: a 5 pinned to Foundation gets the Foundation order', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'd', createdAt: DIAG_AT, results: chemResults(82) })
    db.apTrackOverride.findUnique.mockResolvedValue({ track: 'foundation' })
    const p = await mod.buildGenericPlanStatus('u1', 'ap-chem')
    expect(p.recommendedTopics.map((t) => t.slug)).toEqual(ORDER.foundation)
    expect(p.apTrack).toMatchObject({ track: 'foundation', mix: 'foundation-mix', source: 'teacher', override: 'foundation', estimatedScore: 5 })
    expect(db.apTrackOverride.findUnique.mock.calls[0][0].where).toEqual({ userId_courseSlug: { userId: 'u1', courseSlug: 'ap-chemistry' } })
  })

  it('a course without tracks is untouched and carries no placement', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ id: 'd', createdAt: DIAG_AT, results: { percentage: 20, recommendedTopics: [{ slug: 'b', name: 'b', priority: 'medium' }, { slug: 'a', name: 'a', priority: 'high' }] } })
    const p = await mod.buildGenericPlanStatus('u1', 'ap-stats')
    expect(p.recommendedTopics.map((t) => t.slug)).toEqual(['a', 'b'])
    expect(p.apTrack).toBeUndefined()
  })
})

describe('GET /api/study-plan/plan-status', () => {
  let GET: typeof import('@/app/api/study-plan/plan-status/route').GET
  beforeAll(async () => { ;({ GET } = await import('@/app/api/study-plan/plan-status/route')) }, 60_000)

  it('orders the AP plan by track and gives the hub its track line', async () => {
    db.diagnosticTest.findMany.mockResolvedValue([
      { id: 'chem', category: 'ap-chem-diagnostic-v2', results: chemResults(33), createdAt: DIAG_AT },
      { id: 'alg', category: 'algebra1-diagnostic', results: { percentage: 20, recommendedTopics: [{ slug: 'linear-equations', name: 'L', priority: 'high' }] }, createdAt: DIAG_AT },
    ])
    const body = await (await GET()).json()
    const chem = body.plans.find((p: { courseKey: string }) => p.courseKey === 'ap-chem')
    expect(chem.topics.map((t: { slug: string }) => t.slug)).toEqual(ORDER.foundation)
    expect(chem.apTrack).toEqual({
      track: 'foundation',
      label: 'Foundation track',
      explanation: expect.stringMatching(/^Your last diagnostic estimated a 2, so your exit quizzes lean toward easy and medium questions.*80%\.$/),
    })
    expect(body.plans.find((p: { courseKey: string }) => p.courseKey === 'algebra1').apTrack).toBeNull()
  })

  it('honours a teacher override per course (one query for all of them)', async () => {
    db.diagnosticTest.findMany.mockResolvedValue([
      { id: 'chem', category: 'ap-chem-diagnostic-v2', results: chemResults(33), createdAt: DIAG_AT },
    ])
    db.apTrackOverride.findMany.mockResolvedValue([{ courseSlug: 'ap-chemistry', track: 'five' }, { courseSlug: 'ap-biology', track: 'foundation' }])
    const body = await (await GET()).json()
    const chem = body.plans.find((p: { courseKey: string }) => p.courseKey === 'ap-chem')
    expect(chem.topics.map((t: { slug: string }) => t.slug)).toEqual(ORDER.five)
    expect(chem.apTrack).toEqual({
      track: 'five',
      label: '5-track',
      explanation: expect.stringMatching(/^Your teacher set your track to 5-track, so your exit quizzes lean toward medium and hard.*80%\.$/),
    })
    expect(db.apTrackOverride.findMany).toHaveBeenCalledTimes(1)
    expect(db.apTrackOverride.findMany.mock.calls[0][0].where).toEqual({ userId: 'u1' })
  })
})

describe('GET /api/lessons/settings?courseSlug=', () => {
  let GET: typeof import('@/app/api/lessons/settings/route').GET
  beforeAll(async () => { ;({ GET } = await import('@/app/api/lessons/settings/route')) }, 60_000)
  const req = (q: string) => new Request(`http://localhost/api/lessons/settings${q}`)

  it('hands a track course\'s lesson the exit-quiz mix, read from the latest diagnostic (v1 or v2)', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ results: chemResults(82) })
    expect(await (await GET(req('?courseSlug=ap-chemistry'))).json()).toEqual({
      includeLowYield: false,
      apTrack: { track: 'five', label: '5-track', mix: 'five-mix', source: 'diagnostic' },
    })
    expect(db.diagnosticTest.findFirst.mock.calls[0][0].where).toEqual({ userId: 'u1', category: { startsWith: 'ap-chem-diagnostic' } })
  })

  it('Regular (or no diagnostic) means no mix', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue(null)
    expect((await (await GET(req('?courseSlug=ap-physics-1'))).json()).apTrack).toEqual({ track: 'regular', label: 'Regular track', mix: null, source: 'default' })
    expect(db.diagnosticTest.findFirst.mock.calls[0][0].where.category).toEqual({ startsWith: 'ap-physics1-diagnostic' })
  })

  it('a teacher override wins over the diagnostic, and the lesson is told so', async () => {
    db.diagnosticTest.findFirst.mockResolvedValue({ results: chemResults(82) })
    db.apTrackOverride.findUnique.mockResolvedValue({ track: 'foundation' })
    expect((await (await GET(req('?courseSlug=ap-chemistry'))).json()).apTrack).toEqual({ track: 'foundation', label: 'Foundation track', mix: 'foundation-mix', source: 'teacher' })
    // A junk stored value is ignored (automatic placement).
    db.apTrackOverride.findUnique.mockResolvedValue({ track: 'expert' })
    expect((await (await GET(req('?courseSlug=ap-chemistry'))).json()).apTrack).toMatchObject({ track: 'five', source: 'diagnostic' })
  })

  it('leaves the field out for courses without tracks, without a query', async () => {
    for (const q of ['?courseSlug=ap-statistics', '?courseSlug=sat-prep', '']) {
      expect(await (await GET(req(q))).json()).toEqual({ includeLowYield: false })
    }
    expect(db.diagnosticTest.findFirst).not.toHaveBeenCalled()
    expect(db.apTrackOverride.findUnique).not.toHaveBeenCalled()
  })
})

describe('teacher class plan', () => {
  let GET: typeof import('@/app/api/teacher/classrooms/[id]/class-plan/route').GET
  beforeAll(async () => { ;({ GET } = await import('@/app/api/teacher/classrooms/[id]/class-plan/route')) }, 60_000)

  it('shows each student\'s track for an AP track course', async () => {
    db.classroomMember.findMany.mockResolvedValue([
      { userId: 'a', nickname: null, user: { name: 'Ann' } },
      { userId: 'b', nickname: null, user: { name: 'Ben' } },
      { userId: 'c', nickname: null, user: { name: 'Cal' } },
    ])
    db.diagnosticTest.findMany.mockResolvedValue([
      { id: 'da', userId: 'a', createdAt: new Date(), results: chemResults(33) },
      { id: 'db', userId: 'b', createdAt: new Date(), results: chemResults(82) },
    ])
    const { NextRequest } = await import('next/server')
    const res = await GET(new NextRequest('http://localhost/api/teacher/classrooms/c1/class-plan?course=ap-chem'), { params: Promise.resolve({ id: 'c1' }) })
    const body = await res.json()
    const track = (name: string) => body.students.find((s: { name: string }) => s.name === name).apTrack
    expect(track('Ann')).toEqual({ track: 'foundation', label: 'Foundation track', source: 'diagnostic', override: null })
    expect(track('Ben')).toEqual({ track: 'five', label: '5-track', source: 'diagnostic', override: null })
    expect(track('Cal')).toEqual({ track: 'regular', label: 'Regular track', source: 'default', override: null })
    expect(body.course).toEqual({ key: 'ap-chem', label: 'AP Chemistry', gated: false, courseSlug: 'ap-chemistry' })
    expect(db.apTrackOverride.findMany.mock.calls[0][0].where).toEqual({ userId: { in: ['a', 'b', 'c'] }, courseSlug: 'ap-chemistry' })
  })

  it('shows the effective track and the override for pinned students', async () => {
    db.classroomMember.findMany.mockResolvedValue([
      { userId: 'a', nickname: null, user: { name: 'Ann' } },
      { userId: 'c', nickname: null, user: { name: 'Cal' } },
    ])
    db.diagnosticTest.findMany.mockResolvedValue([{ id: 'da', userId: 'a', createdAt: new Date(), results: chemResults(33) }])
    db.apTrackOverride.findMany.mockResolvedValue([{ userId: 'a', track: 'five' }, { userId: 'c', track: 'foundation' }])
    const { NextRequest } = await import('next/server')
    const body = await (await GET(new NextRequest('http://localhost/api/teacher/classrooms/c1/class-plan?course=ap-chem'), { params: Promise.resolve({ id: 'c1' }) })).json()
    const track = (name: string) => body.students.find((s: { name: string }) => s.name === name).apTrack
    expect(track('Ann')).toEqual({ track: 'five', label: '5-track', source: 'teacher', override: 'five' })
    expect(track('Cal')).toEqual({ track: 'foundation', label: 'Foundation track', source: 'teacher', override: 'foundation' })
  })

  it('sends no track for other courses', async () => {
    db.classroomMember.findMany.mockResolvedValue([{ userId: 'a', nickname: null, user: { name: 'Ann' } }])
    db.diagnosticTest.findMany.mockResolvedValue([{ id: 'da', userId: 'a', createdAt: new Date(), results: { percentage: 20, recommendedTopics: [] } }])
    const { NextRequest } = await import('next/server')
    const body = await (await GET(new NextRequest('http://localhost/api/teacher/classrooms/c1/class-plan?course=ap-stats'), { params: Promise.resolve({ id: 'c1' }) })).json()
    expect(body.students[0].apTrack).toBeUndefined()
    expect(db.apTrackOverride.findMany).not.toHaveBeenCalled()
  })
})

describe('override reads fail soft', () => {
  it('a failing ApTrackOverride query logs and falls back to the diagnostic placement', async () => {
    const mod = await import('@/lib/ap-track-server')
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    db.apTrackOverride.findUnique.mockRejectedValue(new Error('relation "ApTrackOverride" does not exist'))
    db.diagnosticTest.findFirst.mockResolvedValue({ results: chemResults(82) })
    expect(await mod.apTrackForUser('u1', 'ap-chemistry')).toMatchObject({ track: 'five', source: 'diagnostic', override: null })
    db.apTrackOverride.findMany.mockRejectedValue(new Error('down'))
    expect((await mod.apTrackOverridesFor(['a'], 'ap-chemistry')).size).toBe(0)
    expect((await mod.apTrackOverridesForUser('u1')).size).toBe(0)
    expect(spy).toHaveBeenCalledTimes(3)
    spy.mockRestore()
  })
})
