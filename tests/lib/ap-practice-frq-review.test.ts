/**
 * AP practice-exam free response is stored with the attempt (responses +
 * rubric ticks in results.review.frq) and comes back through the review
 * resolver, which is what the review page and a teacher's Tests to review read.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { config as chem } from '@/data/ap-chem-practice/config'
import { config as apush } from '@/data/ap-us-history-practice/config'
import { gradeApExam, frqPossible } from '@/lib/ap-practice-grading'
import { apPracticeFrqItems } from '@/lib/question-sources/ap-practice'
import { rubricKeys } from '@/lib/ap-practice-runner'
import type { SAQItem } from '@/components/FullLengthPracticeExam'

const frqSection = chem.sections.findIndex((s) => s.items.some((i) => i.type !== 'mcq'))
const q1 = chem.sections[frqSection].items[0] as SAQItem

describe('gradeApExam stores free response', () => {
  it('keeps each response with its rubric, scored from the ticked boxes', () => {
    const responses = q1.parts.map((_, pi) => (pi === 0 ? 'Ka = [H+][A-]/[HA]' : ''))
    const g = gradeApExam(chem, [], [{ s: frqSection, i: 0, earned: 99, responses, ticked: ['a-a1', 'b-b1', 'b-b1', 'nope'], submitted: true }])
    const f = g.review.frq[0]
    expect(f).toMatchObject({ s: frqSection, i: 0, number: 1, type: 'saq', earned: 2, possible: frqPossible(q1), selfScored: true, section: 'Free Response' })
    expect(f.prompt).toContain('Acetic Acid')
    expect(f.parts).toHaveLength(q1.parts.length)
    expect(f.parts[0]).toMatchObject({ label: 'a', response: 'Ka = [H+][A-]/[HA]' })
    expect(f.parts[0].rubric[0]).toMatchObject({ id: 'a1', earned: true })
    expect(f.parts[1].rubric.map((r) => r.earned)).toEqual([true, false, false])
    // Ticked boxes win over the claimed count; points still count toward the section.
    expect(g.earned).toBe(2)
  })

  it('stores every FRQ item, written or not, and older clients still score from `earned`', () => {
    const g = gradeApExam(chem, [], [{ s: frqSection, i: 1, earned: 3 }])
    expect(g.review.frq).toHaveLength(chem.sections[frqSection].items.length)
    expect(g.review.frq[1]).toMatchObject({ earned: 3, selfScored: false })
    expect(g.review.frq[1].parts.every((p) => p.response === '' && p.rubric.every((r) => !r.earned))).toBe(true)
    expect(g.review.frq[0].earned).toBe(0)
  })

  it('clips huge responses', () => {
    const g = gradeApExam(chem, [], [{ s: frqSection, i: 0, earned: 0, responses: ['x'.repeat(50000)] }])
    expect(g.review.frq[0].parts[0].response.length).toBe(20000)
  })

  it('essays keep the chosen prompt and one response', () => {
    const leqS = apush.sections.findIndex((s) => s.items.some((i) => i.type === 'leq'))
    const leq = apush.sections[leqS].items[0]
    const g = gradeApExam(apush, [], [{ s: leqS, i: 0, earned: 0, responses: ['Essay text'], ticked: rubricKeys(leq).slice(0, 2), chosenPromptIndex: 0, submitted: true }])
    const f = g.review.frq.find((x) => x.s === leqS)!
    expect(f.type).toBe('leq')
    expect(f.parts).toHaveLength(1)
    expect(f.parts[0].response).toBe('Essay text')
    expect(f.earned).toBe(2)
    expect(f.prompt.length).toBeGreaterThan(0)
  })
})

describe('apPracticeFrqItems (review resolver source)', () => {
  it('reads what the grader stored, through a JSON round trip', () => {
    const g = gradeApExam(chem, [], [{ s: frqSection, i: 0, earned: 0, responses: ['hello'], ticked: ['a-a1'], submitted: true }])
    const items = apPracticeFrqItems(JSON.parse(JSON.stringify({ review: g.review })))
    expect(items).toHaveLength(g.review.frq.length)
    expect(items[0]).toMatchObject({ number: 1, earned: 1, selfScored: true, type: 'saq' })
    expect(items[0].parts[0].response).toBe('hello')
    expect(items[0].parts[0].rubric[0].earned).toBe(true)
  })

  it('drops junk and returns nothing for attempts saved before FRQ capture', () => {
    expect(apPracticeFrqItems({ review: { questions: [], answers: [] } })).toEqual([])
    expect(apPracticeFrqItems(null)).toEqual([])
    expect(apPracticeFrqItems('not json')).toEqual([])
    const items = apPracticeFrqItems({
      review: {
        frq: [
          { type: 'essay', s: 0, i: 0, possible: 3 },
          { type: 'saq', s: -1, i: 0, possible: 3 },
          { type: 'saq', s: 1, i: 2, possible: 4, earned: 9, parts: [{ label: 'a', response: 7, rubric: [{ label: 'pt', earned: 'yes' }, 'junk'] }] },
        ],
      },
    })
    expect(items).toHaveLength(1)
    expect(items[0]).toMatchObject({ s: 1, i: 2, number: 3, earned: 4, possible: 4, title: 'Free-response question 3' })
    expect(items[0].parts[0]).toEqual({ label: 'a', question: '', response: '', rubric: [{ id: '', label: 'pt', description: '', earned: false }] })
  })
})

/* ---------------- resolveAttempt('ap-practice') ---------------- */

const stored: { results: unknown } = { results: null }
vi.mock('@/lib/prisma', () => ({
  prisma: {
    diagnosticTest: {
      findFirst: vi.fn(async () => ({ category: 'ap-practice-exam:ap-chem', results: stored.results, createdAt: new Date('2026-10-16T12:00:00Z') })),
    },
    questionActivity: { findMany: vi.fn(async () => []) },
    topic: { findMany: vi.fn(async () => []) },
  },
}))

const { resolveAttempt } = await import('@/lib/question-resolver')

describe("resolveAttempt('ap-practice')", () => {
  beforeEach(() => {
    stored.results = null
  })

  it('returns the multiple choice and the free response with the student’s answers', async () => {
    const mcqs = chem.sections[0].items
    const g = gradeApExam(chem, [], [{ s: frqSection, i: 0, earned: 0, responses: ['my answer'], ticked: ['a-a1'], submitted: true }])
    stored.results = JSON.parse(JSON.stringify({ version: 1, examKey: 'ap-chem', ...g }))
    const a = await resolveAttempt('ap-practice', 'att1', 'stu')
    expect(a).not.toBeNull()
    expect(a!.items).toHaveLength(mcqs.length)
    expect(a!.frq).toHaveLength(chem.sections[frqSection].items.length)
    expect(a!.frq![0].parts[0].response).toBe('my answer')
    expect(a!.frq![0].earned).toBe(1)
    expect(a!.backHref).toBe('/ap-chem-practice')
  })

  it('an attempt saved before FRQ capture has no frq list', async () => {
    const g = gradeApExam(chem, [], [])
    const { frq: _drop, ...review } = g.review
    stored.results = JSON.parse(JSON.stringify({ ...g, review }))
    const a = await resolveAttempt('ap-practice', 'att1', 'stu')
    expect(a!.frq).toBeUndefined()
  })
})
