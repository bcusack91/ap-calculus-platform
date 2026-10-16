/**
 * /api/exam-goals: owner-scoped score goals with per-course ranges, and target
 * colleges whose ranges come from the curated list, never from the client.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { goalProgress, normalizeGoalColleges, parseStoredColleges, rangeStanding } from '@/lib/exam-goals'

const mockAuth = vi.fn()
const mockFindUnique = vi.fn()
const mockUpsert = vi.fn()
const mockCurrent = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    examGoal: {
      findUnique: (...a: unknown[]) => mockFindUnique(...a),
      upsert: (...a: unknown[]) => mockUpsert(...a),
    },
  },
}))
vi.mock('@/lib/exam-goal-server', () => ({ currentScoreFor: (...a: unknown[]) => mockCurrent(...a) }))

const put = async (body: unknown) => {
  const { PUT } = await import('@/app/api/exam-goals/route')
  return PUT(new NextRequest('http://localhost/api/exam-goals', { method: 'PUT', body: JSON.stringify(body) }))
}
const get = async (qs: string) => {
  const { GET } = await import('@/app/api/exam-goals/route')
  return GET(new NextRequest(`http://localhost/api/exam-goals${qs}`))
}

beforeEach(() => {
  vi.clearAllMocks()
  mockAuth.mockResolvedValue({ user: { id: 'stu-1' } })
  mockCurrent.mockResolvedValue({ score: 1380, basis: 'Superscore', source: null, at: null })
  mockUpsert.mockImplementation(async (args: { create: { targetScore: number; colleges: unknown } }) => ({
    targetScore: args.create.targetScore,
    colleges: args.create.colleges,
    updatedAt: new Date('2026-10-10T00:00:00.000Z'),
  }))
})

describe('PUT /api/exam-goals validation', () => {
  it.each([
    ['sat', 400, 1600, 390, 1610],
    ['mcat', 472, 528, 471, 529],
    ['act', 1, 36, 0, 37],
    ['psat', 320, 1520, 310, 1530],
    // AP goals are 1–5, keyed by the class-plan key (the four flagships and one more).
    ['ap-chem', 1, 5, 0, 6],
    ['ap-bio', 1, 5, 0, 6],
    ['ap-physics1', 1, 5, 0, 6],
    ['calcab', 1, 5, 0, 6],
    ['ap-us-history', 1, 5, 0, 6],
  ])('%s accepts %i–%i and rejects %i / %i', async (course, lo, hi, below, above) => {
    expect((await put({ course, targetScore: lo })).status).toBe(200)
    expect((await put({ course, targetScore: hi })).status).toBe(200)
    const low = await put({ course, targetScore: below })
    expect(low.status).toBe(400)
    expect((await low.json()).error).toContain(`${lo}–${hi}`)
    expect((await put({ course, targetScore: above })).status).toBe(400)
  })

  it('rejects unknown courses, non-integers, junk bodies and too many colleges', async () => {
    expect((await put({ course: 'gre', targetScore: 320 })).status).toBe(400)
    expect((await put({ course: 'sat', targetScore: 1450.5 })).status).toBe(400)
    expect((await put({ course: 'sat', targetScore: '1450' })).status).toBe(400)
    expect((await put(null)).status).toBe(400)
    const many = Array.from({ length: 13 }, (_, i) => ({ name: `College ${i}` }))
    expect((await put({ course: 'sat', targetScore: 1450, colleges: many })).status).toBe(400)
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('requires sign-in', async () => {
    mockAuth.mockResolvedValue(null)
    expect((await put({ course: 'sat', targetScore: 1400 })).status).toBe(401)
    expect((await get('?course=sat')).status).toBe(401)
    expect(mockUpsert).not.toHaveBeenCalled()
    expect(mockFindUnique).not.toHaveBeenCalled()
  })
})

describe('ownership', () => {
  it('writes only the session user’s row, ignoring any userId in the body', async () => {
    await put({ course: 'sat', targetScore: 1500, userId: 'someone-else' })
    const args = mockUpsert.mock.calls[0][0]
    expect(args.where).toEqual({ userId_course: { userId: 'stu-1', course: 'sat' } })
    expect(args.create.userId).toBe('stu-1')
  })

  it('reads only the session user’s row', async () => {
    mockFindUnique.mockResolvedValue({ targetScore: 1500, colleges: [{ name: 'Rice University', low: 1500, high: 1570 }], updatedAt: new Date() })
    const res = await get('?course=sat&userId=someone-else')
    expect(res.status).toBe(200)
    expect(mockFindUnique.mock.calls[0][0].where).toEqual({ userId_course: { userId: 'stu-1', course: 'sat' } })
    expect(mockCurrent).toHaveBeenCalledWith('stu-1', 'sat')
    const body = await res.json()
    expect(body.goal.targetScore).toBe(1500)
    expect(body.current.score).toBe(1380)
  })

  it('GET rejects an unknown course', async () => {
    expect((await get('?course=lsat')).status).toBe(400)
  })
})

describe('colleges', () => {
  it('takes known ranges from the curated list, never the client, and keeps free text', async () => {
    const res = await put({
      course: 'sat',
      targetScore: 1500,
      colleges: [{ name: 'rice university', low: 400, high: 500 }, { name: 'My Local College' }, { name: 'Rice University' }],
    })
    const { goal } = await res.json()
    expect(goal.colleges).toEqual([
      { name: 'Rice University', low: 1500, high: 1570 },
      { name: 'My Local College', low: null, high: null },
    ])
  })

  it('stores no schools on an AP goal, whatever the client sends', async () => {
    const res = await put({ course: 'ap-chem', targetScore: 5, colleges: [{ name: 'Rice University' }] })
    expect(res.status).toBe(200)
    expect(mockUpsert.mock.calls[0][0].create).toMatchObject({ course: 'ap-chem', targetScore: 5, colleges: [] })
    expect((await res.json()).goal).toMatchObject({ course: 'ap-chem', targetScore: 5, colleges: [] })
    expect((await put({ course: 'ap-chem', targetScore: 4.5 })).status).toBe(400)
    expect((await put({ course: 'ap-fake', targetScore: 4 })).status).toBe(400)
  })

  it('GET reads an AP goal by its class-plan key', async () => {
    mockFindUnique.mockResolvedValue({ targetScore: 4, colleges: [], updatedAt: new Date() })
    const res = await get('?course=calcab')
    expect(res.status).toBe(200)
    expect(mockCurrent).toHaveBeenCalledWith('stu-1', 'calcab')
  })

  it('uses ACT ranges for ACT goals and no ranges for MCAT', () => {
    expect(normalizeGoalColleges('act', [{ name: 'Rice University' }])[0]).toEqual({ name: 'Rice University', low: 34, high: 36 })
    expect(normalizeGoalColleges('mcat', [{ name: 'Rice University' }])[0]).toEqual({ name: 'Rice University', low: null, high: null })
  })

  it('parses stored JSON defensively', () => {
    expect(parseStoredColleges(null)).toEqual([])
    expect(parseStoredColleges([{ name: 'A', low: 1, high: 2 }, { nope: true }, 'x', { name: ' ' }])).toEqual([{ name: 'A', low: 1, high: 2 }])
  })

  it('places a score against a middle-50% range', () => {
    expect(rangeStanding(1580, 1500, 1570)).toBe('above')
    expect(rangeStanding(1500, 1500, 1570)).toBe('within')
    expect(rangeStanding(1490, 1500, 1570)).toBe('below')
    expect(rangeStanding(null, 1500, 1570)).toBe('unknown')
    expect(rangeStanding(1500, null, null)).toBe('unknown')
  })

  it('measures progress from the scale floor', () => {
    expect(goalProgress('sat', 1000, 1600)).toBeCloseTo(0.5)
    expect(goalProgress('sat', 1700, 1600)).toBe(1)
    expect(goalProgress('mcat', null, 515)).toBe(0)
  })
})
