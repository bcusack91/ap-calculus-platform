/**
 * SAT superscore = best R&W + best Math across StudyMondo full practice tests
 * and entered College Board scores, remembering which sitting each came from.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { computeSuperscore, type SatSitting } from '@/lib/superscore'

const mockAttempts = vi.fn()
const mockExternal = vi.fn()
const mockAuth = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    satTestAttempt: { findMany: (...a: unknown[]) => mockAttempts(...a) },
    externalExamScore: { findMany: (...a: unknown[]) => mockExternal(...a) },
  },
}))

const s = (over: Partial<SatSitting>): SatSitting => ({
  id: 'x', date: '2026-05-01T00:00:00.000Z', rw: 600, math: 600, source: 'studymondo', label: 'Test', ...over,
})

describe('computeSuperscore', () => {
  it('returns null with no usable sitting', () => {
    expect(computeSuperscore([])).toBeNull()
    expect(computeSuperscore([s({ rw: 0, math: 700 })])).toBeNull()
  })

  it('takes the best section from each sitting and names the source', () => {
    const a = s({ id: 'sm1', rw: 650, math: 700, source: 'studymondo', label: 'StudyMondo Practice Test 1' })
    const b = s({ id: 'cb1', rw: 720, math: 640, source: 'college-board', label: 'Bluebook Practice 4', date: '2026-06-01T00:00:00.000Z' })
    const r = computeSuperscore([a, b])!
    expect(r.total).toBe(1420)
    expect(r.rw).toEqual({ score: 720, from: b })
    expect(r.math).toEqual({ score: 700, from: a })
    expect(r.bestSingle.total).toBe(1360)
    expect(r.combined).toBe(true)
    expect(r.sittings).toBe(2)
  })

  it('equals the best single test when one sitting has both best sections', () => {
    const r = computeSuperscore([s({ id: 'a', rw: 700, math: 750 }), s({ id: 'b', rw: 650, math: 700 })])!
    expect(r.total).toBe(1450)
    expect(r.combined).toBe(false)
    expect(r.bestSingle.from.id).toBe('a')
  })

  it('breaks a tie in favor of the more recent sitting', () => {
    const old = s({ id: 'old', rw: 700, date: '2026-01-01T00:00:00.000Z' })
    const recent = s({ id: 'new', rw: 700, date: '2026-03-01T00:00:00.000Z' })
    expect(computeSuperscore([old, recent])!.rw.from.id).toBe('new')
    expect(computeSuperscore([recent, old])!.rw.from.id).toBe('new')
  })

  it('skips sittings with an out-of-range section', () => {
    const r = computeSuperscore([s({ id: 'bad', rw: 850, math: 800 }), s({ id: 'ok', rw: 600, math: 610 })])!
    expect(r.total).toBe(1210)
    expect(r.sittings).toBe(1)
  })
})

describe('loadSatSittings / GET /api/sat/superscore', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockAuth.mockResolvedValue({ user: { id: 'stu-1' } })
  })

  it('combines full StudyMondo tests with entered College Board scores, skipping minis, PSATs and incomplete entries', async () => {
    mockAttempts.mockResolvedValue([
      { id: 'full', testNumber: 2, rwScore: 640, mathScore: 710, rwTotal: 54, format: 'full', completedAt: new Date('2026-04-01') },
      { id: 'legacy', testNumber: 1, rwScore: 600, mathScore: 600, rwTotal: 54, format: null, completedAt: new Date('2026-03-01') },
      { id: 'mini', testNumber: 3, rwScore: 790, mathScore: 790, rwTotal: 27, format: 'mini', completedAt: new Date('2026-04-02') },
      { id: 'legacy-mini', testNumber: 4, rwScore: 780, mathScore: 780, rwTotal: 27, format: null, completedAt: new Date('2026-04-03') },
    ])
    mockExternal.mockResolvedValue([
      { id: 'cb', source: 'Bluebook Practice 2', sectionScores: { rw: 700, math: 650 }, takenAt: new Date('2026-05-01') },
      { id: 'psat', source: 'PSAT/NMSQT', sectionScores: { rw: 760, math: 760 }, takenAt: new Date('2026-05-02') },
      { id: 'total-only', source: 'Official SAT', sectionScores: null, takenAt: new Date('2026-05-03') },
    ])
    const { loadSatSittings } = await import('@/lib/superscore-server')
    const sittings = await loadSatSittings('stu-1')
    expect(sittings.map((x) => x.id)).toEqual(['legacy', 'full', 'cb'])
    expect(mockAttempts.mock.calls[0][0].where).toEqual({ userId: 'stu-1', completed: true })
    expect(mockExternal.mock.calls[0][0].where).toEqual({ userId: 'stu-1', course: 'sat' })

    const { GET } = await import('@/app/api/sat/superscore/route')
    const body = await (await GET()).json()
    expect(body.superscore.total).toBe(700 + 710)
    expect(body.superscore.rw.from.id).toBe('cb')
    expect(body.superscore.math.from.id).toBe('full')
  })

  it('requires sign-in', async () => {
    mockAuth.mockResolvedValue(null)
    const { GET } = await import('@/app/api/sat/superscore/route')
    expect((await GET()).status).toBe(401)
    expect(mockAttempts).not.toHaveBeenCalled()
  })
})
