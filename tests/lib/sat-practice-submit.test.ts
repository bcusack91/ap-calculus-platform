/**
 * POST /api/sat-practice/submit is authoritative: it rebuilds the form, grades
 * by question id, routes Module 2 from Module 1, scores on the routed curve,
 * and logs one QuestionActivity row per question. Client scores are ignored.
 * New tests are form v2 (scoringVersion 3); a test started on form v1 is
 * recognised by its ids and graded/stored as v1 (scoringVersion 2).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockAuth = vi.fn()
const mockCreateMany = vi.fn()
const mockAttemptFindFirst = vi.fn()
const mockAttemptCreate = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => {
  const prisma = {
    questionActivity: { createMany: (...a: unknown[]) => mockCreateMany(...a) },
    topic: { findMany: vi.fn().mockResolvedValue([]), findUnique: vi.fn().mockResolvedValue(null) },
    user: { findUnique: vi.fn().mockResolvedValue(null) },
    satTestAttempt: {
      findFirst: (...a: unknown[]) => mockAttemptFindFirst(...a),
      create: (...a: unknown[]) => mockAttemptCreate(...a),
    },
  }
  return { prisma }
})

import { POST } from '@/app/api/sat-practice/submit/route'
import {
  buildPsatForm,
  buildSatForm,
  routedModule2,
  type SATFullTest,
  type SATTestQuestion,
  type SATTestSection,
} from '@/data/sat-practice/test-generator'
import { satSectionScaled, satSectionScaledRouted } from '@/lib/sat-scoring'
import { psatSectionScaledRouted } from '@/lib/psat-scoring'
import { gradeSatPractice, normalizeSatResponses, satSubmissionFormVersion } from '@/lib/sat-practice-grading'
import { satPracticeRows } from '@/lib/sat-practice-rows'
import { optionKey } from '@/lib/question-key'

type Row = Record<string, unknown>

const req = (body: unknown) =>
  new Request('http://localhost/api/sat-practice/submit', { method: 'POST', body: JSON.stringify(body) })

/** Answer the first `nRight` questions of a module correctly, the rest wrong (one skipped). */
function respond(section: SATTestSection, moduleIndex: number, nRight: number) {
  return section.questions.map((q: SATTestQuestion, i) => {
    const right = i < nRight
    const skip = !right && i === section.questions.length - 1
    return {
      moduleIndex,
      questionId: q.id,
      selectedIndex: q.gridIn || skip ? null : right ? q.correctIndex : (q.correctIndex + 1) % q.options.length,
      textValue: q.gridIn && !skip ? (right ? String(q.gridIn.correctAnswer) : '-99999') : null,
      flagged: i === 2,
      seconds: 40 + i,
    }
  })
}

function rowsOf(): Row[] {
  return (mockCreateMany.mock.calls.at(-1)?.[0] as { data: Row[] }).data
}

describe('POST /api/sat-practice/submit', { timeout: 180_000 }, () => {
  let base: SATFullTest

  beforeEach(async () => {
    vi.clearAllMocks()
    mockAuth.mockResolvedValue({ user: { id: 'u1' } })
    mockAttemptFindFirst.mockResolvedValue(null)
    mockAttemptCreate.mockImplementation(async ({ data }: { data: Row }) => ({ id: 'att1', ...data }))
    mockCreateMany.mockResolvedValue({ count: 0 })
    base = await buildSatForm(1, 'full')
  })

  it('grades by id, routes from Module 1, scores on the routed curve and ignores client scores', async () => {
    // R&W Module 1: 27/27 -> harder. Math Module 1: 10/22 -> easier.
    const rw2 = await routedModule2(base, 1, 'harder')
    const m2 = await routedModule2(base, 3, 'easier')
    const responses = [
      ...respond(base.sections[0], 0, 27),
      ...respond(rw2, 1, 13),
      ...respond(base.sections[2], 2, 10),
      ...respond(m2, 3, 20),
    ]
    const res = await POST(req({ testNumber: 1, format: 'full', rwScore: 800, mathScore: 800, totalScore: 1600, responses, timeSpent: 7000 }))
    const json = await res.json()
    expect(res.status).toBe(200)

    const data = mockAttemptCreate.mock.calls[0][0].data as Row
    const rwExpected = satSectionScaledRouted({ m1Correct: 27, m1Total: 27, m2Correct: 13, m2Total: 27, tier: 'harder' })
    const mathCorrectM2 = m2.questions.slice(0, 20).length
    const mathExpected = satSectionScaledRouted({ m1Correct: 10, m1Total: 22, m2Correct: mathCorrectM2, m2Total: 22, tier: 'easier' })
    expect(data).toMatchObject({
      format: 'full',
      rwTier: 'harder',
      mathTier: 'easier',
      scoringVersion: 3,
      rwCorrect: 40,
      rwTotal: 54,
      mathCorrect: 10 + mathCorrectM2,
      mathTotal: 44,
      rwScore: rwExpected,
      mathScore: mathExpected,
      totalScore: rwExpected + mathExpected,
    })
    expect(json).toMatchObject({ attemptId: 'att1', rwScore: rwExpected, mathScore: mathExpected, rwTier: 'harder', mathTier: 'easier' })
    expect(data.totalScore).not.toBe(1600)

    // Stored answers: one per question, in item order.
    const answers = data.answers as Row[]
    expect(answers).toHaveLength(98)
    expect(answers.map((a) => a.itemIndex)).toEqual([...Array(98).keys()])
    expect(answers[27].questionId).toBe(rw2.questions[0].id)
    expect(answers[2]).toMatchObject({ flagged: true, seconds: 42 })
    expect(answers[26]).toMatchObject({ correct: true })
    expect(answers[53]).toMatchObject({ selectedIndex: null, correct: false }) // the skipped last R&W item

    // One QuestionActivity row per question, carrying the answer-log fields.
    const rows = rowsOf()
    expect(rows).toHaveLength(98)
    expect(rows.every((r) => r.attemptKind === 'sat-practice' && r.attemptId === 'att1' && r.source === 'PRACTICE')).toBe(true)
    expect(rows.every((r) => String(r.questionKey).startsWith('q:'))).toBe(true)
    expect(rows.map((r) => r.itemIndex)).toEqual([...Array(98).keys()])
    const grid = rows.find((r, i) => i >= 76 && r.chosenText)
    expect(grid).toBeTruthy()
    expect(rows[2]).toMatchObject({ flagged: true, durationMs: 42_000 })
  })

  it('scores a Module 2 that started before the routed swap (pre-built ids) unrouted', async () => {
    const responses = [
      ...respond(base.sections[0], 0, 27), // earns harder...
      ...respond(base.sections[1], 1, 20), // ...but sat the pre-built module
      ...respond(base.sections[2], 2, 22),
      ...respond(await routedModule2(base, 3, 'harder'), 3, 11),
    ]
    await POST(req({ testNumber: 1, format: 'full', responses }))
    const data = mockAttemptCreate.mock.calls[0][0].data as Row
    expect(data.rwTier).toBeNull()
    expect(data.mathTier).toBe('harder')
    expect(data.rwScore).toBe(satSectionScaled(47 / 54))
    expect(data.rwCorrect).toBe(47)
  })

  it('grades unknown Module 2 ids as wrong against the module Module 1 earned', async () => {
    const tampered = respond(base.sections[1], 1, 27).map((r, i) => ({ ...r, questionId: `fake-${i}` }))
    const grade = await gradeSatPractice({
      testNumber: 1,
      format: 'full',
      responses: normalizeSatResponses({
        responses: [...respond(base.sections[0], 0, 27), ...tampered, ...respond(base.sections[2], 2, 22), ...respond(base.sections[3], 3, 22)],
      }, base.sections.map((s) => s.id)),
    })
    expect(grade.rw.module2).toBe('mismatch')
    expect(grade.rw.tier).toBe('harder')
    expect(grade.rw.m2Correct).toBe(0)
    expect(grade.math.module2).toBe('unrouted')
  })

  it('scores a mini test on the unrouted curve', async () => {
    const mini = await buildSatForm(2, 'mini')
    await POST(req({ testNumber: 2, format: 'mini', responses: [...respond(mini.sections[0], 0, 20), ...respond(mini.sections[1], 1, 11)] }))
    const data = mockAttemptCreate.mock.calls[0][0].data as Row
    expect(data).toMatchObject({ format: 'mini', rwTier: null, mathTier: null, rwCorrect: 20, rwTotal: 27, mathCorrect: 11, mathTotal: 22 })
    expect(data.rwScore).toBe(satSectionScaled(20 / 27))
    expect(rowsOf()).toHaveLength(49)
  })

  it('accepts the legacy payload (sections of answers, no format) from an older bundle', async () => {
    const legacy = {
      testNumber: 1,
      rwTotal: 54,
      rwScore: 700,
      mathScore: 700,
      totalScore: 1400,
      answers: base.sections.map((s, idx) => ({
        sectionId: s.id,
        answers: respond(s, idx, 15).map(({ questionId, selectedIndex, textValue }) => ({ questionId, selectedIndex, textValue })),
      })),
    }
    await POST(req(legacy))
    const data = mockAttemptCreate.mock.calls[0][0].data as Row
    // 15/27 and 15/22 on Module 1 -> easier for R&W, but the pre-built Module 2 was sent: unrouted.
    expect(data).toMatchObject({ format: 'full', rwTier: null, mathTier: null, rwCorrect: 30, mathCorrect: 30 })
  })

  it('a test started on form v1 is graded against v1 and stored as scoringVersion 2', async () => {
    const v1 = await buildSatForm(1, 'full', null, null, 1)
    expect(v1.formVersion).toBeUndefined()
    const rw2 = await routedModule2(v1, 1, 'harder')
    const m2 = await routedModule2(v1, 3, 'easier')
    const responses = [...respond(v1.sections[0], 0, 27), ...respond(rw2, 1, 13), ...respond(v1.sections[2], 2, 10), ...respond(m2, 3, 20)]
    // An old bundle (no formVersion in the body) and a new one that says v1.
    for (const extra of [{}, { formVersion: 1 }]) {
      mockAttemptCreate.mockClear()
      await POST(req({ testNumber: 1, format: 'full', responses, ...extra }))
      const data = mockAttemptCreate.mock.calls[0][0].data as Row
      expect(data).toMatchObject({ scoringVersion: 2, rwTier: 'harder', mathTier: 'easier', rwCorrect: 40, mathCorrect: 30 })
      expect(data.rwScore).toBe(satSectionScaledRouted({ m1Correct: 27, m1Total: 27, m2Correct: 13, m2Total: 27, tier: 'harder' }))
      const stored = (data.answers as Row[]).map((a) => a.questionId)
      expect(stored).toEqual([v1.sections[0], rw2, v1.sections[2], m2].flatMap((s) => s.questions.map((q) => q.id)))
    }
  })

  it('a v2 test is stored as scoringVersion 3 even if the body claims v1', async () => {
    const rw2 = await routedModule2(base, 1, 'easier')
    const responses = [...respond(base.sections[0], 0, 5), ...respond(rw2, 1, 5), ...respond(base.sections[2], 2, 22), ...respond(await routedModule2(base, 3, 'harder'), 3, 5)]
    await POST(req({ testNumber: 1, format: 'full', formVersion: 1, responses }))
    const data = mockAttemptCreate.mock.calls[0][0].data as Row
    expect(data).toMatchObject({ scoringVersion: 3, rwTier: 'easier', mathTier: 'harder' })
  })

  it('mini and PSAT tests fall back to v1 the same way', async () => {
    const mini1 = await buildSatForm(2, 'mini', null, null, 1)
    await POST(req({ testNumber: 2, format: 'mini', responses: [...respond(mini1.sections[0], 0, 20), ...respond(mini1.sections[1], 1, 11)] }))
    expect(mockAttemptCreate.mock.calls[0][0].data).toMatchObject({ scoringVersion: 2, format: 'mini', rwCorrect: 20, mathCorrect: 11 })

    const mini2 = await buildSatForm(2, 'mini')
    mockAttemptCreate.mockClear()
    await POST(req({ testNumber: 2, format: 'mini', responses: [...respond(mini2.sections[0], 0, 20), ...respond(mini2.sections[1], 1, 11)] }))
    expect(mockAttemptCreate.mock.calls[0][0].data).toMatchObject({ scoringVersion: 3, format: 'mini', rwCorrect: 20, mathCorrect: 11 })

    for (const v of [1, 2] as const) {
      const p = await buildPsatForm(1, null, null, v)
      const rw2 = await routedModule2(p, 1, 'harder')
      const m2 = await routedModule2(p, 3, 'easier')
      mockAttemptCreate.mockClear()
      await POST(req({ testNumber: 1, exam: 'psat', responses: [...respond(p.sections[0], 0, 27), ...respond(rw2, 1, 10), ...respond(p.sections[2], 2, 3), ...respond(m2, 3, 12)] }))
      const data = mockAttemptCreate.mock.calls[0][0].data as Row
      expect(data).toMatchObject({ scoringVersion: v === 2 ? 3 : 2, format: 'psat-full', rwTier: 'harder', mathTier: 'easier' })
      expect(data.rwScore).toBe(psatSectionScaledRouted({ m1Correct: 27, m1Total: 27, m2Correct: 10, m2Total: 27, tier: 'harder' }))
    }
  })

  it('picks the version every id belongs to; a garbled payload goes to the closer match', async () => {
    const v1 = await buildSatForm(3, 'full', null, null, 1)
    const v2 = await buildSatForm(3, 'full')
    const ids = (f: SATFullTest) => normalizeSatResponses({ responses: f.sections.flatMap((s, i) => respond(s, i, 10)) }, f.sections.map((s) => s.id))
    expect(await satSubmissionFormVersion({ testNumber: 3, format: 'full', responses: ids(v2) })).toBe(2)
    expect(await satSubmissionFormVersion({ testNumber: 3, format: 'full', responses: ids(v2), preferred: 1 })).toBe(2)
    expect(await satSubmissionFormVersion({ testNumber: 3, format: 'full', responses: ids(v1) })).toBe(1)
    expect(await satSubmissionFormVersion({ testNumber: 3, format: 'full', responses: [] })).toBe(2)
    expect(await satSubmissionFormVersion({ testNumber: 3, format: 'full', responses: [], preferred: 1 })).toBe(1)
    const garbled = ids(v1).map((r, i) => (i % 3 === 0 ? { ...r, questionId: `fake-${i}` } : r))
    expect(await satSubmissionFormVersion({ testNumber: 3, format: 'full', responses: garbled })).toBe(1)
    const fake = ids(v2).map((r, i) => ({ ...r, questionId: `fake-${i}` }))
    expect(await satSubmissionFormVersion({ testNumber: 3, format: 'full', responses: fake })).toBe(2)
  })

  it('rejects a bad test number and unauthenticated calls', async () => {
    expect((await POST(req({ testNumber: 'x' }))).status).toBe(400)
    mockAuth.mockResolvedValue(null)
    expect((await POST(req({ testNumber: 1 }))).status).toBe(401)
  })
})

describe('satPracticeRows', { timeout: 180_000 }, () => {
  it('per-question totals per section equal the old two batch rows', async () => {
    const base = await buildSatForm(5, 'full')
    const rw2 = await routedModule2(base, 1, 'easier')
    const m2 = await routedModule2(base, 3, 'harder')
    const grade = await gradeSatPractice({
      testNumber: 5,
      format: 'full',
      responses: [...respond(base.sections[0], 0, 12), ...respond(rw2, 1, 19), ...respond(base.sections[2], 2, 18), ...respond(m2, 3, 9)],
    })
    const rows = satPracticeRows(grade.items, { attemptId: 'a1' })
    // The old batch rows: answered = section total, correct = section correct.
    const oldBatch = {
      rw: { answered: grade.rw.m1Total + grade.rw.m2Total, correct: grade.rw.m1Correct + grade.rw.m2Correct },
      math: { answered: grade.math.m1Total + grade.math.m2Total, correct: grade.math.m1Correct + grade.math.m2Correct },
    }
    const sum = (section: string) => {
      const mine = rows.filter((_, i) => grade.items[i].question.section === section)
      return { answered: mine.reduce((n, r) => n + (r.answered ?? 0), 0), correct: mine.reduce((n, r) => n + (r.correct ?? 0), 0) }
    }
    expect(sum('reading-writing')).toEqual(oldBatch.rw)
    expect(sum('math')).toEqual(oldBatch.math)
    expect(oldBatch.rw).toEqual({ answered: 54, correct: 31 })
    expect(grade.rw.tier).toBe('easier')
    expect(grade.math.tier).toBe('harder')
    // Disciplines are the College Board domains; passage items keep their passage in the key.
    expect(new Set(rows.map((r) => r.discipline))).toContain('Standard English Conventions')
    expect(rows.every((r) => r.courseSlug === 'sat-prep')).toBe(true)
    // chosenKey: the picked option's text as shown; null for skips and every grid-in.
    rows.forEach((r, i) => {
      const it = grade.items[i]
      const expected = it.question.gridIn || it.selectedIndex === null ? null : optionKey(it.question.options[it.selectedIndex])
      expect(r.chosenKey ?? null).toBe(expected)
    })
    expect(rows.some((r) => r.chosenKey)).toBe(true)
    expect(rows.some((r, i) => grade.items[i].question.gridIn && r.chosenText && !r.chosenKey)).toBe(true)
  })
})
