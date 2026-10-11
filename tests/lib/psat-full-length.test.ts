/**
 * Adaptive PSAT/NMSQT full-length: the PSAT forms (deterministic, PSAT
 * difficulty profile, non-overlapping), the PSAT routed curves (160-760,
 * monotonic, derived from the SAT routed curves), server grading in the
 * submit route (format 'psat-full'), and the review rebuild.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockAuth = vi.fn()
const mockAttemptFindFirst = vi.fn()
const mockAttemptCreate = vi.fn()
const mockCreateMany = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    questionActivity: { createMany: (...a: unknown[]) => mockCreateMany(...a) },
    topic: { findMany: vi.fn().mockResolvedValue([]), findUnique: vi.fn().mockResolvedValue(null) },
    user: { findUnique: vi.fn().mockResolvedValue(null) },
    satTestAttempt: {
      findFirst: (...a: unknown[]) => mockAttemptFindFirst(...a),
      create: (...a: unknown[]) => mockAttemptCreate(...a),
    },
  },
}))

import { POST } from '@/app/api/sat-practice/submit/route'
import {
  buildPsatForm,
  buildSatForm,
  routedModule2,
  psatFormOf,
  PSAT_DIFFICULTY_PROFILE,
  PSAT_FORM_COUNT,
  PSAT_PRACTICE_TESTS,
  type SATFullTest,
  type SATTestQuestion,
  type SATTestSection,
} from '@/data/sat-practice/test-generator'
import {
  PSAT_CURVE_ANCHORS,
  PSAT_EASIER_ROUTE_CEILING,
  PSAT_HARDER_ROUTE_ANCHORS,
  PSAT_EASIER_ROUTE_ANCHORS,
  PSAT_SAT_OFFSET,
  psatSectionScaledRouted,
  psatSelectionIndexOf,
  psatSelectionIndexRange,
  psatSectionRange,
} from '@/lib/psat-scoring'
import {
  SAT_HARDER_ROUTE_ANCHORS,
  SAT_EASIER_ROUTE_ANCHORS,
  SAT_CURVE_ANCHORS,
  satSectionScaledRouted,
  type SatRoute,
} from '@/lib/sat-scoring'
import { gradeSatPractice, storedSatAnswers } from '@/lib/sat-practice-grading'
import { satAttemptExam, satAttemptFormat, satPracticeReviewItems } from '@/lib/question-sources/sat'

type Row = Record<string, unknown>

const req = (body: unknown) =>
  new Request('http://localhost/api/sat-practice/submit', { method: 'POST', body: JSON.stringify(body) })

/** Answer the first `nRight` questions of a module correctly, the rest wrong. */
function respond(section: SATTestSection, moduleIndex: number, nRight: number) {
  return section.questions.map((q: SATTestQuestion, i) => {
    const right = i < nRight
    return {
      moduleIndex,
      questionId: q.id,
      selectedIndex: q.gridIn ? null : right ? q.correctIndex : (q.correctIndex + 1) % q.options.length,
      textValue: q.gridIn ? (right ? String(q.gridIn.correctAnswer) : '-99999') : null,
      flagged: i === 1,
      seconds: 30,
    }
  })
}

const hardCount = (qs: SATTestQuestion[]) => qs.filter((q) => q.difficulty === 'hard').length
const contentKey = (q: SATTestQuestion) => (q.passage ? `p:${q.passage.id}|${q.question}` : q.question)

/* ------------------------------------------------------------------ */
/*  Forms                                                              */
/* ------------------------------------------------------------------ */

describe('buildPsatForm', { timeout: 180_000 }, () => {
  it('builds three full-length adaptive PSAT forms with the SAT structure', async () => {
    expect(PSAT_FORM_COUNT).toBe(3)
    expect(PSAT_PRACTICE_TESTS.map((t) => t.id)).toEqual([1, 2, 3])
    for (const n of [1, 2, 3]) {
      const f = await buildPsatForm(n)
      expect(f.exam).toBe('psat')
      expect(f.format).toBe('full')
      expect(f.sections.map((s) => [s.id, s.moduleNum, s.questions.length, s.timeLimitSeconds])).toEqual([
        ['rw-1', 1, 27, 32 * 60],
        ['rw-2', 2, 27, 32 * 60],
        ['math-1', 1, 22, 35 * 60],
        ['math-2', 2, 22, 35 * 60],
      ])
      expect(f.totalQuestions).toBe(98)
      // No repeated question within a form.
      const keys = f.sections.flatMap((s) => s.questions.map(contentKey))
      expect(new Set(keys).size).toBe(keys.length)
    }
  })

  it('is deterministic: cached, and identical when rebuilt from a fresh module', async () => {
    const a = await buildPsatForm(2, 'harder', 'easier')
    expect(await buildPsatForm(2, 'harder', 'easier')).toBe(a)
    vi.resetModules()
    const fresh = await import('@/data/sat-practice/test-generator')
    const b = await fresh.buildPsatForm(2, 'harder', 'easier')
    const shape = (f: SATFullTest) => f.sections.map((s) => s.questions.map((q) => [q.id, q.question, q.options, q.correctIndex]))
    expect(shape(b)).toEqual(shape(a))
  })

  it('is a different form from the SAT practice test of the same number', async () => {
    const psat = await buildPsatForm(1)
    const sat = await buildSatForm(1, 'full')
    expect(psat).not.toBe(sat)
    const satKeys = new Set(sat.sections.flatMap((s) => s.questions.map(contentKey)))
    const shared = psat.sections.flatMap((s) => s.questions).filter((q) => satKeys.has(contentKey(q)))
    expect(shared.length).toBeLessThan(20)
  })

  it('keeps the three PSAT forms (every route) essentially non-overlapping', async () => {
    const all: Set<string>[] = []
    for (const n of [1, 2, 3]) {
      const keys = new Set<string>()
      for (const r of [null, 'harder', 'easier'] as const) {
        for (const s of (await buildPsatForm(n, r, r)).sections) for (const q of s.questions) keys.add(contentKey(q))
      }
      all.push(keys)
    }
    for (let a = 0; a < 3; a++) {
      for (let b = a + 1; b < 3; b++) {
        const overlap = [...all[a]].filter((k) => all[b].has(k)).length
        // Only thin pools (Craft & Structure vocabulary) may lend an item across forms.
        expect(overlap / all[a].size).toBeLessThan(0.05)
      }
    }
    // Pool items prefer their own PSAT form.
    const f1 = await buildPsatForm(1)
    const pool = f1.sections.flatMap((s) => s.questions).filter((q) => q.sourceSlug.startsWith('sat-'))
    const own = pool.filter((q) => psatFormOf(q.id) === 0).length
    expect(own / pool.length).toBeGreaterThan(0.9)
  })

  it('holds every module to the PSAT difficulty profile (fewer hard items than the SAT, especially in the harder Module 2)', async () => {
    for (const n of [1, 2, 3]) {
      const base = await buildPsatForm(n)
      for (const s of base.sections) {
        expect(hardCount(s.questions)).toBeLessThanOrEqual(Math.floor(s.questions.length * PSAT_DIFFICULTY_PROFILE.module1.hardShare))
      }
      for (const idx of [1, 3]) {
        const harder = await routedModule2(base, idx, 'harder')
        const easier = await routedModule2(base, idx, 'easier')
        expect(harder.tier).toBe('hard')
        expect(harder.questions).toHaveLength(base.sections[idx].questions.length)
        expect(easier.questions).toHaveLength(base.sections[idx].questions.length)
        expect(hardCount(harder.questions)).toBeLessThanOrEqual(Math.floor(harder.questions.length * PSAT_DIFFICULTY_PROFILE.harder.hardShare))
        // The harder module is genuinely harder than Module 1 ...
        expect(hardCount(harder.questions)).toBeGreaterThan(hardCount(base.sections[idx - 1].questions))
        // ... and the easier module has no hard-tier items.
        expect(hardCount(easier.questions)).toBe(0)
        expect(easier.questions.filter((q) => q.difficulty === 'easy').length).toBeGreaterThan(easier.questions.length / 3)
      }
    }
    // The SAT's harder Module 2 is far harder than the PSAT's.
    const sat = await buildSatForm(1, 'full')
    const psat = await buildPsatForm(1)
    for (const idx of [1, 3]) {
      const satHard = hardCount((await routedModule2(sat, idx, 'harder')).questions)
      const psatHard = hardCount((await routedModule2(psat, idx, 'harder')).questions)
      expect(psatHard).toBeLessThan(satHard)
    }
  })
})

/* ------------------------------------------------------------------ */
/*  Curves                                                             */
/* ------------------------------------------------------------------ */

describe('PSAT routed curves', () => {
  it('are the SAT routed anchors shifted down 40 (the documented mapping)', () => {
    expect(PSAT_SAT_OFFSET).toBe(40)
    expect(PSAT_HARDER_ROUTE_ANCHORS).toEqual(SAT_HARDER_ROUTE_ANCHORS.map((a) => ({ pct: a.pct, scaled: a.scaled - 40 })))
    expect(PSAT_EASIER_ROUTE_ANCHORS).toEqual(SAT_EASIER_ROUTE_ANCHORS.map((a) => ({ pct: a.pct, scaled: a.scaled - 40 })))
    expect(PSAT_CURVE_ANCHORS).toEqual(SAT_CURVE_ANCHORS.map((a) => ({ pct: a.pct, scaled: a.scaled - 40 })))
    expect(PSAT_EASIER_ROUTE_CEILING).toBe(590)
  })

  const sections = [
    { name: 'R&W', m1: 27, m2: 27 },
    { name: 'Math', m1: 22, m2: 22 },
  ]
  const routes: (SatRoute | null)[] = ['harder', 'easier', null]

  it('stay inside 160-760 in multiples of 10, monotonic in correct answers on every route', () => {
    for (const { m1, m2 } of sections) {
      for (const tier of routes) {
        let prev = -Infinity
        for (let correct = 0; correct <= m1 + m2; correct++) {
          const m1Correct = Math.min(m1, correct)
          const score = psatSectionScaledRouted({ m1Correct, m1Total: m1, m2Correct: correct - m1Correct, m2Total: m2, tier })
          expect(score).toBeGreaterThanOrEqual(160)
          expect(score).toBeLessThanOrEqual(760)
          expect(score % 10).toBe(0)
          expect(score).toBeGreaterThanOrEqual(prev)
          prev = score
        }
      }
    }
  })

  it('track the SAT routed score minus 40 (within rounding) and keep the route caps', () => {
    for (const { m1, m2 } of sections) {
      for (const tier of routes) {
        for (let correct = 0; correct <= m1 + m2; correct++) {
          const m1Correct = Math.min(m1, correct)
          const a = { m1Correct, m1Total: m1, m2Correct: correct - m1Correct, m2Total: m2, tier }
          expect(Math.abs(psatSectionScaledRouted(a) - (satSectionScaledRouted(a) - 40))).toBeLessThanOrEqual(6)
        }
      }
      // Bounds: zero and perfect.
      expect(psatSectionScaledRouted({ m1Correct: 0, m1Total: m1, m2Correct: 0, m2Total: m2, tier: 'easier' })).toBe(160)
      expect(psatSectionScaledRouted({ m1Correct: m1, m1Total: m1, m2Correct: m2, m2Total: m2, tier: 'harder' })).toBe(760)
      // The easier route caps the reachable score.
      expect(psatSectionScaledRouted({ m1Correct: m1, m1Total: m1, m2Correct: m2, m2Total: m2, tier: 'easier' })).toBe(590)
    }
  })

  it('pins the inherited calibration points (60% -> 475, 88% -> 630 after rounding)', () => {
    expect(psatSectionScaledRouted({ m1Correct: 30, m1Total: 50, m2Correct: 0, m2Total: 0, tier: 'harder' })).toBe(480) // 475 -> nearest 10
    expect(psatSectionScaledRouted({ m1Correct: 44, m1Total: 50, m2Correct: 0, m2Total: 0, tier: 'harder' })).toBe(630) // 632
    expect(psatSectionScaledRouted({ m1Correct: 30, m1Total: 50, m2Correct: 0, m2Total: 0, tier: null })).toBe(480)
  })

  it('reports ranges and the Selection Index', () => {
    expect(psatSectionRange(600)).toEqual({ low: 580, high: 620 })
    expect(psatSectionRange(170)).toEqual({ low: 160, high: 190 })
    expect(psatSelectionIndexOf(700, 680)).toBe(208)
    expect(psatSelectionIndexRange(700, 680)).toEqual({ low: 202, high: 214 })
  })
})

/* ------------------------------------------------------------------ */
/*  Server grading + review                                            */
/* ------------------------------------------------------------------ */

describe('POST /api/sat-practice/submit — PSAT', { timeout: 180_000 }, () => {
  let base: SATFullTest

  beforeEach(async () => {
    vi.clearAllMocks()
    mockAuth.mockResolvedValue({ user: { id: 'u1' } })
    mockAttemptFindFirst.mockResolvedValue(null)
    mockAttemptCreate.mockImplementation(async ({ data }: { data: Row }) => ({ id: 'psat1', ...data }))
    mockCreateMany.mockResolvedValue({ count: 0 })
    base = await buildPsatForm(1)
  })

  it('grades the PSAT form on the PSAT routed curves and stores format psat-full', async () => {
    const rw2 = await routedModule2(base, 1, 'harder')
    const m2 = await routedModule2(base, 3, 'easier')
    const responses = [
      ...respond(base.sections[0], 0, 24), // 24/27 -> harder
      ...respond(rw2, 1, 15),
      ...respond(base.sections[2], 2, 10), // 10/22 -> easier
      ...respond(m2, 3, 18),
    ]
    const res = await POST(req({ testNumber: 1, format: 'full', exam: 'psat', responses, totalScore: 1520, timeSpent: 7000 }))
    expect(res.status).toBe(200)
    const json = await res.json()
    const data = mockAttemptCreate.mock.calls[0][0].data as Row
    const rwExpected = psatSectionScaledRouted({ m1Correct: 24, m1Total: 27, m2Correct: 15, m2Total: 27, tier: 'harder' })
    const mathExpected = psatSectionScaledRouted({ m1Correct: 10, m1Total: 22, m2Correct: 18, m2Total: 22, tier: 'easier' })
    expect(data).toMatchObject({
      format: 'psat-full',
      scoringVersion: 3, // routed scoring on form v2
      rwTier: 'harder',
      mathTier: 'easier',
      rwCorrect: 39,
      rwTotal: 54,
      mathCorrect: 28,
      mathTotal: 44,
      rwScore: rwExpected,
      mathScore: mathExpected,
      totalScore: rwExpected + mathExpected,
    })
    expect(rwExpected % 10).toBe(0)
    expect(data.totalScore).toBeLessThanOrEqual(1520)
    expect(json).toMatchObject({ exam: 'psat', format: 'psat-full', attemptId: 'psat1', rwScore: rwExpected })
    expect((data.answers as Row[])[27].questionId).toBe(rw2.questions[0].id)

    // One answer-log row per question, on the shared SAT course.
    const rows = (mockCreateMany.mock.calls.at(-1)?.[0] as { data: Row[] }).data
    expect(rows).toHaveLength(98)
    expect(rows.every((r) => r.attemptKind === 'sat-practice' && r.attemptId === 'psat1' && r.courseSlug === 'sat-prep')).toBe(true)

    // The duplicate guard is scoped to the PSAT format.
    expect(mockAttemptFindFirst.mock.calls[0][0].where).toMatchObject({ format: 'psat-full', testNumber: 1 })
  })

  it('accepts format psat-full as the exam signal, and rejects an unknown PSAT test number', async () => {
    await POST(req({ testNumber: 2, format: 'psat-full', responses: [] }))
    expect((mockAttemptCreate.mock.calls[0][0].data as Row).format).toBe('psat-full')
    expect((mockAttemptCreate.mock.calls[0][0].data as Row).rwScore).toBe(160)
    expect((await POST(req({ testNumber: 4, exam: 'psat', responses: [] }))).status).toBe(400)
  })

  it('still grades SAT submissions as SAT', async () => {
    const sat = await buildSatForm(1, 'full')
    await POST(req({ testNumber: 1, format: 'full', responses: respond(sat.sections[0], 0, 27) }))
    const data = mockAttemptCreate.mock.calls[0][0].data as Row
    expect(data.format).toBe('full')
    expect(Number(data.rwScore)).toBeGreaterThanOrEqual(200)
  })
})

describe('PSAT review rebuild', { timeout: 180_000 }, () => {
  it('rebuilds every question of a PSAT attempt from format psat-full + routes', async () => {
    const base = await buildPsatForm(3)
    const rw2 = await routedModule2(base, 1, 'harder')
    const m2 = await routedModule2(base, 3, 'harder')
    const responses = [
      ...respond(base.sections[0], 0, 27),
      ...respond(rw2, 1, 5),
      ...respond(base.sections[2], 2, 22),
      ...respond(m2, 3, 5),
    ]
    const grade = await gradeSatPractice({ testNumber: 3, format: 'full', exam: 'psat', responses })
    expect(grade.exam).toBe('psat')
    expect(grade.rw.tier).toBe('harder')
    expect(grade.math.tier).toBe('harder')
    const attempt = {
      testNumber: 3,
      format: 'psat-full',
      rwTier: grade.rw.tier,
      mathTier: grade.math.tier,
      rwTotal: 54,
      scoringVersion: 3,
      answers: JSON.parse(JSON.stringify(storedSatAnswers(grade.items))),
    }
    expect(satAttemptExam(attempt)).toBe('psat')
    expect(satAttemptFormat(attempt)).toBe('full')
    const items = await satPracticeReviewItems(attempt)
    expect(items).toHaveLength(98)
    expect(items[27].question).toBe(rw2.questions[0].question)
    expect(items[76].question).toBe(m2.questions[0].question)
    expect(items[1]).toMatchObject({ flagged: true, durationMs: 30_000 })
    // The same answers against the SAT form would not line up.
    const asSat = await satPracticeReviewItems({ ...attempt, format: 'full' })
    expect(asSat.length).toBeLessThan(98)
  })
})
