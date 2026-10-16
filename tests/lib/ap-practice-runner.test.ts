/**
 * The AP practice-exam runner's pure logic (src/lib/ap-practice-runner.ts):
 * calculator / no-calculator parts, exam tools per course, resume state, and
 * the FRQ capture sent to the submit route.
 */
import { describe, it, expect } from 'vitest'
import { config as calcab } from '@/data/ap-calcab-practice/config'
import { config as calcbc } from '@/data/ap-calcbc-practice/config'
import { config as precalc } from '@/data/ap-precalc-practice/config'
import { config as chem } from '@/data/ap-chem-practice/config'
import { config as psych } from '@/data/ap-psych-practice/config'
import { config as apush } from '@/data/ap-us-history-practice/config'
import { AP_PRACTICE_EXAMS } from '@/lib/ap-practice-exams'
import { hasReferenceSheet } from '@/data/ap-reference-sheets'
import {
  AP_EXAM_TOOLS,
  AP_PROGRESS_MAX_AGE_MS,
  apExamTools,
  blankAnswer,
  buildStages,
  examSignature,
  frqSubmission,
  isAnswered,
  parseApExamProgress,
  partHeading,
  restoreSitting,
  rubricKeys,
  stageName,
  type ApExamProgress,
  type ItemAnswer,
} from '@/lib/ap-practice-runner'
import type { FullLengthExamConfig, SAQItem } from '@/components/FullLengthPracticeExam'

const stagesOf = (c: FullLengthExamConfig, key: string) => buildStages(c.sections, apExamTools(key))
const summary = (c: FullLengthExamConfig, key: string) =>
  stagesOf(c, key).map((st) => ({ s: st.sectionIdx, part: st.partLabel ?? null, items: st.end - st.start, min: st.seconds / 60, calc: st.calculator }))

describe('calculator parts (May 2027 formats)', () => {
  it('AP Calculus AB splits Section I into Part A (29 Q, 62 min, no calculator) and Part B (13 Q, 38 min, calculator)', () => {
    expect(summary(calcab, 'ap-calcab')).toEqual([
      { s: 0, part: 'Part A', items: 29, min: 62, calc: false },
      { s: 0, part: 'Part B', items: 13, min: 38, calc: true },
      { s: 1, part: 'Part A', items: 2, min: 30, calc: true },
      { s: 1, part: 'Part B', items: 4, min: 60, calc: false },
    ])
    // Part A covers Q1–Q29 and Part B Q30–Q42, in authored order.
    const [a, b] = stagesOf(calcab, 'ap-calcab')
    expect([a.start, a.end, b.start, b.end]).toEqual([0, 29, 29, 42])
    expect(stageName(calcab.sections[0].name, a)).toBe('Section I, Part A')
  })

  it('AP Calculus BC uses the same split', () => {
    expect(summary(calcbc, 'ap-calcbc')).toEqual(summary(calcab, 'ap-calcab'))
  })

  it('AP Precalculus: Part A 29 Q in 65 min no calculator, Part B 13 Q in 40 min; FRQ 2 + 2 at 35 min', () => {
    expect(summary(precalc, 'ap-precalc')).toEqual([
      { s: 0, part: 'Part A', items: 29, min: 65, calc: false },
      { s: 0, part: 'Part B', items: 13, min: 40, calc: true },
      { s: 1, part: 'Part A', items: 2, min: 35, calc: true },
      { s: 1, part: 'Part B', items: 2, min: 35, calc: false },
    ])
  })

  it('split parts always add up to the section time', () => {
    for (const [c, key] of [[calcab, 'ap-calcab'], [calcbc, 'ap-calcbc'], [precalc, 'ap-precalc']] as const) {
      c.sections.forEach((sec, s) => {
        const mins = stagesOf(c, key).filter((st) => st.sectionIdx === s).reduce((n, st) => n + st.seconds / 60, 0)
        expect(mins, `${key} ${sec.id}`).toBe(sec.timeLimitMinutes)
      })
    }
  })

  it('Chemistry allows a calculator on both sections; Psychology and APUSH never', () => {
    expect(summary(chem, 'ap-chem')).toEqual([
      { s: 0, part: null, items: 60, min: 90, calc: true },
      { s: 1, part: null, items: 7, min: 105, calc: true },
    ])
    expect(stagesOf(psych, 'ap-psych').every((st) => !st.calculator && st.partCount === 1)).toBe(true)
    expect(stagesOf(apush, 'ap-us-history').some((st) => st.calculator)).toBe(false)
  })

  it('a content-store copy with a different item count still splits sensibly, and one too short runs whole', () => {
    const legacy = [{ id: 'mcq', timeLimitMinutes: 105, items: Array.from({ length: 45 }) }]
    const st = buildStages(legacy, AP_EXAM_TOOLS['ap-calcab'])
    expect(st.map((x) => [x.start, x.end, x.calculator])).toEqual([[0, 29, false], [29, 45, true]])
    const short = buildStages([{ id: 'mcq', timeLimitMinutes: 20, items: Array.from({ length: 10 }) }], AP_EXAM_TOOLS['ap-calcab'])
    expect(short).toHaveLength(1)
    expect(short[0]).toMatchObject({ start: 0, end: 10, seconds: 1200, partCount: 1 })
  })

  it('non-AP exams (no key) get no tools', () => {
    expect(apExamTools(undefined)).toEqual({})
    expect(apExamTools('not-a-key')).toEqual({})
  })
})

describe('exam tools registry', () => {
  it('only names real exam keys and reference sheets that exist', () => {
    for (const [key, tools] of Object.entries(AP_EXAM_TOOLS)) {
      expect(AP_PRACTICE_EXAMS[key], key).toBeDefined()
      if (tools.referenceSheet) {
        expect(hasReferenceSheet(tools.referenceSheet), key).toBe(true)
        expect(tools.referenceSheet).toBe(AP_PRACTICE_EXAMS[key].courseSlug)
      }
    }
  })

  it('Calculus has no reference sheet; Chemistry, Biology, Physics 1 and Statistics do', () => {
    expect(AP_EXAM_TOOLS['ap-calcab'].referenceSheet).toBeUndefined()
    expect(AP_EXAM_TOOLS['ap-calcbc'].referenceSheet).toBeUndefined()
    expect(AP_EXAM_TOOLS['ap-chem'].referenceSheet).toBe('ap-chemistry')
    expect(AP_EXAM_TOOLS['ap-bio'].referenceSheet).toBe('ap-biology')
    expect(AP_EXAM_TOOLS['ap-physics1'].referenceSheet).toBe('ap-physics-1')
    expect(AP_EXAM_TOOLS['ap-stats'].referenceSheet).toBe('ap-statistics')
    // Psychology's exam provides no sheet, though the repo has study notes for it.
    expect(AP_EXAM_TOOLS['ap-psych']).toBeUndefined()
  })

  it('every split section in every AP exam matches its parts', async () => {
    for (const [key, exam] of Object.entries(AP_PRACTICE_EXAMS)) {
      const c = await exam.load()
      const stages = buildStages(c.sections, apExamTools(key))
      c.sections.forEach((sec, s) => {
        const own = stages.filter((st) => st.sectionIdx === s)
        expect(own[0].start, key).toBe(0)
        expect(own[own.length - 1].end, key).toBe(sec.items.length)
        own.slice(1).forEach((st, k) => expect(st.start, key).toBe(own[k].end))
      })
    }
  }, 30_000) // loads every course's config; slow under full-suite load
})

describe('resume state', () => {
  const stages = stagesOf(calcab, 'ap-calcab')
  const sig = examSignature(calcab.subject, calcab.sections, stages)
  const NOW = 1_800_000_000_000
  const fresh = (): ApExamProgress => ({
    v: 1,
    sig,
    clientAttemptId: 'ap-abc-12345678',
    phase: 'section',
    stageIdx: 1,
    itemIdx: 31,
    answers: calcab.sections.map((sec) => sec.items.map(blankAnswer)),
    flags: ['0:30', '0:30', '0:35'],
    struck: { '0:31': [1, 2] },
    highlights: { 'stim:abcd1234': [{ start: 4, end: 9 }, { start: 8, end: 12 }] },
    deadline: NOW + 600_000,
    savedAt: NOW - 1000,
  })

  it('round-trips through JSON (flags deduped, highlights normalized)', () => {
    const p = fresh()
    ;(p.answers[0][31] as ItemAnswer) = { type: 'mcq', selected: 2 }
    const parts = (calcab.sections[1].items[0] as SAQItem).parts.map((_, pi) => (pi === 0 ? 'dy/dx = 3' : ''))
    ;(p.answers[1][0] as ItemAnswer) = { type: 'saq', responses: parts, checked: { 'a-a1': true }, submitted: true }
    const back = parseApExamProgress(JSON.stringify(p), sig, calcab.sections, stages.length, NOW)
    expect(back).not.toBeNull()
    expect(back!.answers[0][31]).toEqual({ type: 'mcq', selected: 2 })
    expect(back!.answers[1][0]).toEqual({ type: 'saq', responses: parts, checked: { 'a-a1': true }, submitted: true })
    expect(back!.flags).toEqual(['0:30', '0:35'])
    expect(back!.struck).toEqual({ '0:31': [1, 2] })
    expect(back!.highlights['stim:abcd1234']).toEqual([{ start: 4, end: 12 }])
    expect(back!.deadline).toBe(NOW + 600_000)
  })

  it('never restores onto a different exam, a stale sitting, or junk', () => {
    const raw = JSON.stringify(fresh())
    expect(parseApExamProgress(raw, 'other-sig', calcab.sections, stages.length, NOW)).toBeNull()
    expect(parseApExamProgress(raw, sig, calcab.sections, stages.length, NOW + AP_PROGRESS_MAX_AGE_MS + 5000)).toBeNull()
    expect(parseApExamProgress('{not json', sig, calcab.sections, stages.length, NOW)).toBeNull()
    expect(parseApExamProgress(null, sig, calcab.sections, stages.length, NOW)).toBeNull()
    expect(parseApExamProgress(JSON.stringify({ ...fresh(), stageIdx: 9 }), sig, calcab.sections, stages.length, NOW)).toBeNull()
    expect(parseApExamProgress(JSON.stringify({ ...fresh(), phase: 'bogus' }), sig, calcab.sections, stages.length, NOW)).toBeNull()
  })

  it('re-checks every answer against its item', () => {
    const p = fresh() as unknown as { answers: unknown[][] }
    p.answers[0][0] = { type: 'mcq', selected: 7 } // out of range
    p.answers[0][1] = { type: 'saq', responses: ['x'] } // wrong type for an MCQ
    p.answers[1][1] = { type: 'saq', responses: [42, 'ok'], checked: { 'a-a1': 'yes', 'b-b1': true }, submitted: 'true' }
    const back = parseApExamProgress(JSON.stringify(p), sig, calcab.sections, stages.length, NOW)!
    expect(back.answers[0][0]).toEqual({ type: 'mcq', selected: null })
    expect(back.answers[0][1]).toEqual({ type: 'mcq', selected: null })
    const saq = back.answers[1][1]
    expect(saq.type).toBe('saq')
    if (saq.type === 'saq') {
      expect(saq.responses[0]).toBe('')
      expect(saq.responses[1]).toBe('ok')
      expect(saq.responses).toHaveLength((calcab.sections[1].items[1] as SAQItem).parts.length)
      expect(saq.checked).toEqual({ 'b-b1': true })
      expect(saq.submitted).toBe(false)
    }
  })

  it('a part whose clock ran out while away is over; a live one resumes with its deadline', () => {
    const p = parseApExamProgress(JSON.stringify(fresh()), sig, calcab.sections, stages.length, NOW)!
    expect(restoreSitting(p, stages, NOW)).toMatchObject({ phase: 'section', stageIdx: 1, itemIdx: 31, deadline: NOW + 600_000 })
    expect(restoreSitting(p, stages, NOW + 600_001)).toMatchObject({ phase: 'section-complete', deadline: null })
  })

  it('clamps the item into the saved part (Part B never lands on a Part A question)', () => {
    const p = { ...fresh(), itemIdx: 3 }
    expect(restoreSitting(p, stages, NOW).itemIdx).toBe(29)
    expect(restoreSitting({ ...fresh(), itemIdx: 400 }, stages, NOW).itemIdx).toBe(41)
  })

  it('the signature changes when the questions or the part layout change', () => {
    const edited = calcab.sections.map((sec, s) => (s === 0 ? { ...sec, items: sec.items.slice(1) } : sec))
    expect(examSignature(calcab.subject, edited, buildStages(edited, apExamTools('ap-calcab')))).not.toBe(sig)
    expect(examSignature(calcab.subject, calcab.sections, buildStages(calcab.sections))).not.toBe(sig)
  })
})

describe('FRQ capture', () => {
  const frqItem = chem.sections[1].items[0] as SAQItem

  it('sends every response and only valid rubric ticks, counting points from them', () => {
    const keys = rubricKeys(frqItem)
    expect(keys[0]).toBe('a-a1')
    const answer: ItemAnswer = {
      type: 'saq',
      responses: frqItem.parts.map((_, pi) => `part ${pi}`),
      checked: { 'a-a1': true, 'b-b2': true, 'b-b3': false, 'z-made-up': true },
      submitted: true,
    }
    expect(frqSubmission(frqItem, answer, 1, 0)).toEqual({
      s: 1,
      i: 0,
      earned: 2,
      responses: frqItem.parts.map((_, pi) => `part ${pi}`),
      ticked: ['a-a1', 'b-b2'],
      submitted: true,
    })
  })

  it('an untouched FRQ is captured blank; multiple choice is not an FRQ', () => {
    expect(frqSubmission(frqItem, undefined, 1, 0)).toMatchObject({ earned: 0, ticked: [], submitted: false, responses: frqItem.parts.map(() => '') })
    expect(frqSubmission(chem.sections[0].items[0], undefined, 0, 0)).toBeNull()
  })

  it('essays: one response, rubric ids as keys, and the LEQ prompt chosen', () => {
    const leqSection = apush.sections.findIndex((s) => s.items.some((i) => i.type === 'leq'))
    const leq = apush.sections[leqSection].items[0]
    const keys = rubricKeys(leq)
    const sub = frqSubmission(leq, { type: 'leq', chosenPromptIndex: 0, response: 'My essay', checked: { [keys[0]]: true }, submitted: true }, leqSection, 0)
    expect(sub).toMatchObject({ responses: ['My essay'], ticked: [keys[0]], earned: 1, chosenPromptIndex: 0 })
  })

  it('isAnswered: an option picked, or any response text', () => {
    expect(isAnswered({ type: 'mcq', selected: null })).toBe(false)
    expect(isAnswered({ type: 'mcq', selected: 0 })).toBe(true)
    expect(isAnswered({ type: 'saq', responses: ['', '  '], checked: {}, submitted: false })).toBe(false)
    expect(isAnswered({ type: 'saq', responses: ['', 'x'], checked: {}, submitted: false })).toBe(true)
    expect(isAnswered({ type: 'dbq', chosenPromptIndex: 0, response: 'thesis', checked: {}, submitted: false })).toBe(true)
  })
})

describe('partHeading', () => {
  it('adds the part letter only when the authored question lacks it', () => {
    expect(partHeading('a', 'Find x.')).toBe('(a) Find x.')
    expect(partHeading('a', '(a) Find x.')).toBe('(a) Find x.')
    expect(partHeading('b', '**(b)** Find x.')).toBe('**(b)** Find x.')
    expect(partHeading('c', '(a) Find x.')).toBe('(c) (a) Find x.')
  })
})
