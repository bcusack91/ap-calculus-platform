/**
 * Bluebook companion: entry validation, which domains the plan picks, the
 * stored sectionScores shape (existing readers keep reading rw/math), the
 * qbank deep-link params, and the API route's save path.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  BLUEBOOK_SOURCES,
  bluebookSectionScores,
  readBluebookSectionScores,
  selectPlanDomains,
  validateBluebookEntry,
  type SatPredictionSnapshot,
} from '@/lib/sat-bluebook'
import { SAT_DOMAINS } from '@/lib/sat-domains'
import { parseQbankUrlParams, satDomainQbankHref, hasQbankPreset } from '@/lib/qbank-url'
import { SAT_DOMAIN_LABELS, RW_DOMAIN_SLUGS, MATH_DOMAIN_SLUGS } from '@/data/sat-practice/test-generator'

const mockAuth = vi.fn()
const mockExternalFindMany = vi.fn()
const mockAttempts = vi.fn()
const mockCreate = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    satTestAttempt: { findMany: (...a: unknown[]) => mockAttempts(...a) },
    externalExamScore: {
      findMany: (...a: unknown[]) => mockExternalFindMany(...a),
      create: (...a: unknown[]) => mockCreate(...a),
    },
  },
}))

const NOW = new Date('2026-10-12T15:00:00')
const valid = { source: 'Bluebook Practice 4', takenAt: '2026-10-04', total: 1250, rw: 610, math: 640 }

describe('validateBluebookEntry', () => {
  it('accepts a complete entry and coerces form strings', () => {
    const r = validateBluebookEntry({ ...valid, total: '1250', rw: '610', math: '640', domains: { algebra: '3', geometry: 6 } }, NOW)
    expect(r).toEqual({ ok: true, value: { ...valid, domains: { algebra: 3, geometry: 6 } } })
  })

  it('offers Bluebook 1–10 and an official SAT', () => {
    expect(BLUEBOOK_SOURCES).toHaveLength(11)
    expect(BLUEBOOK_SOURCES[0]).toBe('Bluebook Practice 1')
    expect(BLUEBOOK_SOURCES[9]).toBe('Bluebook Practice 10')
    expect(BLUEBOOK_SOURCES).toContain('Official SAT')
    expect(validateBluebookEntry({ ...valid, source: 'Bluebook Practice 11' }, NOW).ok).toBe(false)
  })

  it.each([
    ['section below 200', { rw: 190, total: 830 }, 'rw'],
    ['section above 800', { math: 810, total: 1420 }, 'math'],
    ['section not a multiple of 10', { rw: 615, total: 1255 }, 'rw'],
    ['total not the sum', { total: 1260 }, 'total'],
    ['total not a multiple of 10', { total: 1255 }, 'total'],
    ['missing math', { math: '' }, 'math'],
  ])('rejects %s', (_label, over, field) => {
    const r = validateBluebookEntry({ ...valid, ...over }, NOW)
    expect(r.ok).toBe(false)
    if (!r.ok) expect(r.field).toBe(field)
  })

  it('rejects future dates and bad bands', () => {
    expect(validateBluebookEntry({ ...valid, takenAt: '2026-10-20' }, NOW).ok).toBe(false)
    expect(validateBluebookEntry({ ...valid, takenAt: 'yesterday' }, NOW).ok).toBe(false)
    expect(validateBluebookEntry({ ...valid, domains: { algebra: 8 } }, NOW).ok).toBe(false)
    expect(validateBluebookEntry({ ...valid, domains: { algebra: 0 } }, NOW).ok).toBe(false)
    expect(validateBluebookEntry({ ...valid, domains: { calculus: 3 } }, NOW).ok).toBe(false)
  })

  it('ignores blank band slots', () => {
    const r = validateBluebookEntry({ ...valid, domains: { algebra: '', advanced: null, geometry: 5 } }, NOW)
    expect(r.ok && r.value.domains).toEqual({ geometry: 5 })
  })
})

describe('selectPlanDomains', () => {
  it('ranks by band, then the weaker section, then exam weight', () => {
    const plan = selectPlanDomains({
      rw: 650,
      math: 560,
      domains: {
        'information-ideas': 5, 'craft-structure': 4, expression: 6, conventions: 4,
        algebra: 4, advanced: 3, 'problem-solving': 5, geometry: 4,
      },
    })
    // advanced (3), then the band-4s: Math (lower section) before R&W, Algebra (35%) before Geometry (15%).
    expect(plan.map((d) => d.key)).toEqual(['advanced', 'algebra', 'geometry'])
    expect(plan[0]).toMatchObject({ band: 3, section: 'math', sectionScore: 560 })
  })

  it('drops a clearly stronger third domain', () => {
    const plan = selectPlanDomains({ rw: 700, math: 700, domains: { algebra: 2, advanced: 3, geometry: 6, conventions: 6 } })
    expect(plan.map((d) => d.key)).toEqual(['algebra', 'advanced'])
  })

  it('keeps a third domain one band above the second, drops one two bands above', () => {
    const keep = selectPlanDomains({ rw: 610, math: 560, domains: { advanced: 2, algebra: 3, 'problem-solving': 4, conventions: 5 } })
    expect(keep.map((d) => d.key)).toEqual(['advanced', 'algebra', 'problem-solving'])
    const drop = selectPlanDomains({ rw: 610, math: 560, domains: { advanced: 2, algebra: 2, 'problem-solving': 4 } })
    expect(drop.map((d) => d.key)).toEqual(['algebra', 'advanced'])
  })

  it('never builds the plan from top-band domains unless it must', () => {
    const allStrong = selectPlanDomains({ rw: 780, math: 790, domains: Object.fromEntries(SAT_DOMAINS.map((d) => [d.key, 7])) })
    expect(allStrong).toHaveLength(2)
    const oneWeak = selectPlanDomains({ rw: 780, math: 760, domains: { algebra: 7, advanced: 5, geometry: 7 } })
    expect(oneWeak.map((d) => d.key)).toEqual(['advanced', 'algebra'])
  })

  it('without bands: three from a section that trails by 60+', () => {
    const plan = selectPlanDomains({ rw: 700, math: 560, domains: {} })
    expect(plan.map((d) => d.key)).toEqual(['algebra', 'advanced', 'problem-solving'])
    expect(plan.every((d) => d.band === null)).toBe(true)
  })

  it('without bands: two from the weaker section and one from the other when close', () => {
    const plan = selectPlanDomains({ rw: 600, math: 640, domains: {} })
    expect(plan.map((d) => d.key)).toEqual(['craft-structure', 'information-ideas', 'algebra'])
  })

  it('a single band is not enough to rank by bands', () => {
    const plan = selectPlanDomains({ rw: 600, math: 700, domains: { geometry: 2 } })
    expect(plan.every((d) => d.band === null)).toBe(true)
  })
})

describe('stored sectionScores', () => {
  const predicted: SatPredictionSnapshot = { total: 1210, rw: 600, math: 610, confidence: 'medium', evidence: { practiceTests: 1, diagnostics: 2, quizzes: 5 } }

  it('keeps rw/math as top-level numbers and adds the companion fields', () => {
    const s = bluebookSectionScores({ rw: 610, math: 640, domains: { algebra: 3 } }, predicted)
    expect(s).toEqual({
      rw: 610, math: 640, companion: 1, domains: { algebra: 3 },
      predicted: 1210, predictedRw: 600, predictedMath: 610, predictedConfidence: 'medium',
      predictedEvidence: { practiceTests: 1, diagnostics: 2, quizzes: 5 },
    })
    // JSON round trip (it is stored as JSONB) reads back the same.
    expect(readBluebookSectionScores(JSON.parse(JSON.stringify(s)))).toEqual({
      rw: 610, math: 640, domains: { algebra: 3 }, predicted, companion: true,
    })
  })

  it('omits domains and prediction when there are none', () => {
    expect(bluebookSectionScores({ rw: 500, math: 520, domains: {} }, null)).toEqual({ rw: 500, math: 520, companion: 1 })
  })

  it('reads rows written by the generic outside-score form', () => {
    expect(readBluebookSectionScores({ rw: 650, math: 700 })).toEqual({ rw: 650, math: 700, domains: {}, predicted: null, companion: false })
    expect(readBluebookSectionScores(null)).toEqual({ rw: null, math: null, domains: {}, predicted: null, companion: false })
  })

  it('superscore (an existing reader) still sees rw/math on a companion row', async () => {
    mockAttempts.mockResolvedValue([])
    mockExternalFindMany.mockResolvedValue([
      {
        id: 'e1',
        source: 'Bluebook Practice 4',
        takenAt: new Date('2026-10-04T12:00:00Z'),
        sectionScores: JSON.parse(JSON.stringify(bluebookSectionScores({ rw: 610, math: 640, domains: { algebra: 3 } }, predicted))),
      },
    ])
    const { loadSatSittings } = await import('@/lib/superscore-server')
    const sittings = await loadSatSittings('u1')
    expect(sittings).toHaveLength(1)
    expect(sittings[0]).toMatchObject({ rw: 610, math: 640, source: 'college-board', label: 'Bluebook Practice 4' })
  })
})

describe('domain table', () => {
  it('labels match the blueprint and qbank disciplines', () => {
    for (const d of SAT_DOMAINS) expect(d.label).toBe(SAT_DOMAIN_LABELS[d.key])
    expect(SAT_DOMAINS).toHaveLength(Object.keys(SAT_DOMAIN_LABELS).length)
  })

  it('every domain has lesson pools in the blueprint', () => {
    for (const d of SAT_DOMAINS) {
      const slugs = { ...RW_DOMAIN_SLUGS, ...MATH_DOMAIN_SLUGS }[d.key]
      expect(slugs?.length).toBeGreaterThan(0)
    }
  })

  it('section shares add up to 100%', () => {
    for (const s of ['rw', 'math'] as const) {
      const sum = SAT_DOMAINS.filter((d) => d.section === s).reduce((n, d) => n + d.share, 0)
      expect(sum).toBeCloseTo(1, 5)
    }
  })
})

describe('qbank URL params', () => {
  it('a bare URL presets nothing', () => {
    expect(parseQbankUrlParams('', 'sat')).toEqual({})
    expect(hasQbankPreset(parseQbankUrlParams('?', 'sat'))).toBe(false)
  })

  it('maps a domain key or label to its discipline and section', () => {
    expect(parseQbankUrlParams('?domain=algebra&count=15&mode=tutor', 'sat')).toEqual({
      sections: ['math'], disciplines: ['Algebra'], count: 15, mode: 'tutor',
    })
    expect(parseQbankUrlParams('domain=Craft%20and%20Structure,advanced', 'sat')).toEqual({
      sections: ['reading-writing', 'math'], disciplines: ['Craft and Structure', 'Advanced Math'],
    })
  })

  it('clamps count and drops invalid values', () => {
    expect(parseQbankUrlParams('?count=500', 'sat').count).toBe(60)
    expect(parseQbankUrlParams('?count=1', 'sat').count).toBe(5)
    expect(parseQbankUrlParams('?count=abc&mode=fast&pool=weird&domain=calculus&difficulty=hard,impossible', 'sat')).toEqual({
      difficulties: ['hard'],
    })
  })

  it('reads sections, topics and pool; domain is SAT-only', () => {
    expect(parseQbankUrlParams('?section=cars&topic=mcat-cars-1&pool=incorrect&domain=algebra', 'mcat')).toEqual({
      sections: ['cars'], topics: ['mcat-cars-1'], pool: 'incorrect',
    })
    expect(parseQbankUrlParams('?section=bogus', 'sat')).toEqual({})
  })

  it('round-trips the plan link', () => {
    const href = satDomainQbankHref('problem-solving', { count: 15 })
    expect(href).toBe('/sat/qbank?domain=problem-solving&count=15&mode=tutor')
    expect(parseQbankUrlParams(href.split('?')[1], 'sat')).toEqual({
      sections: ['math'], disciplines: ['Problem-Solving and Data Analysis'], count: 15, mode: 'tutor',
    })
  })
})

describe('POST /api/sat/bluebook', () => {
  const plan = { basis: 'bands', lane: 'regular', domains: [], resetsReadiness: true }
  const mockPrediction = vi.fn()
  const mockPlan = vi.fn()

  beforeEach(() => {
    vi.resetModules()
    mockCreate.mockReset().mockResolvedValue({ id: 'new1' })
    mockPrediction.mockReset()
    mockPlan.mockReset().mockResolvedValue(plan)
    mockAuth.mockReset().mockResolvedValue({ user: { id: 'u1' } })
    vi.doMock('@/lib/sat-bluebook-server', () => ({
      predictionSnapshot: (...a: unknown[]) => mockPrediction(...a),
      buildBluebookPlan: (...a: unknown[]) => mockPlan(...a),
      loadBluebookEntries: async () => [],
    }))
  })

  const post = async (body: unknown) => {
    const { POST } = await import('@/app/api/sat/bluebook/route')
    const req = new Request('http://localhost/api/sat/bluebook', { method: 'POST', body: JSON.stringify(body) })
    return POST(req as unknown as Parameters<typeof POST>[0])
  }

  it('saves an ExternalExamScore with rw/math, bands and the prediction', async () => {
    mockPrediction.mockResolvedValue({ total: 1180, rw: 590, math: 590, confidence: 'low', evidence: { practiceTests: 0, diagnostics: 1, quizzes: 0 } })
    const res = await post({ ...valid, takenAt: '2026-01-04', domains: { algebra: 3, advanced: 4 } })
    expect(res.status).toBe(200)
    const data = mockCreate.mock.calls[0][0].data
    expect(data).toMatchObject({ userId: 'u1', course: 'sat', source: 'Bluebook Practice 4', totalScore: 1250 })
    expect(data.sectionScores).toMatchObject({ rw: 610, math: 640, companion: 1, domains: { algebra: 3, advanced: 4 }, predicted: 1180, predictedConfidence: 'low' })
    expect(mockPlan).toHaveBeenCalledWith('u1', expect.objectContaining({ rw: 610, math: 640, domains: { algebra: 3, advanced: 4 } }))
    const json = await res.json()
    expect(json.entry).toMatchObject({ id: 'new1', total: 1250, companion: true })
    expect(json.entry.predicted).toBeUndefined()
  })

  it('stores no prediction when there is no evidence', async () => {
    mockPrediction.mockResolvedValue(null)
    await post({ ...valid, takenAt: '2026-01-04' })
    expect(mockCreate.mock.calls[0][0].data.sectionScores).toEqual({ rw: 610, math: 640, companion: 1 })
  })

  it('rejects an invalid entry without saving', async () => {
    const res = await post({ ...valid, takenAt: '2026-01-04', total: 1300 })
    expect(res.status).toBe(400)
    expect((await res.json()).field).toBe('total')
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('requires sign-in', async () => {
    mockAuth.mockResolvedValue(null)
    expect((await post(valid)).status).toBe(401)
  })
})
