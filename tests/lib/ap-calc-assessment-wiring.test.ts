/**
 * AP Calculus AB/BC assessment wiring (calc-final, Oct 2026).
 *
 * - The BC v1 diagnostic is weighted like the BC exam: Units 1-8 are most of
 *   it, so about 60% of every form comes from the AB pool, including AB Unit 7
 *   (slope fields, separable equations, exponential models).
 * - Neither v1 diagnostic serves exam-trivia items (calculator rules, timing,
 *   sub-scores): they test no CED content, and the unit tests drop them by the
 *   same stem rules.
 * - L'Hospital's Rule (CED 4.7) is the AB topic `lhopitals-rule`: its exit-pool
 *   items file into Unit 4 for unit tests and the qbank, and the v2 bank tags
 *   its L'Hospital limits with it.
 */
import { describe, it, expect } from 'vitest'
import { generateCalcABDiagnosticTest, TOTAL_FORMS as AB_FORMS } from '@/data/ap-calculus-ab-diagnostic'
import { CALC_BC_DOMAINS, generateCalcBCDiagnosticTest, TOTAL_FORMS as BC_FORMS } from '@/data/ap-calculus-bc-diagnostic'
import { CALC_AB_UNIT_ASSIGNMENT, isCalcAbExamTrivia } from '@/data/unit-tests/ap-calculus-ab'
import { BC_UNIT_ASSIGNMENT, isCalcBcExamTrivia } from '@/data/unit-tests/ap-calculus-bc'
import { assignUnits } from '@/lib/unit-tests/engine'
import { apDiagnosticCourse } from '@/lib/ap-diagnostic-courses'
import { AP_DIAG_V2_BLUEPRINTS } from '@/lib/ap-diagnostic-v2/blueprints'
import { bank as calcAbV2Bank } from '@/data/ap-diagnostic-v2/ap-calculus-ab'

describe('AP Calculus BC v1 diagnostic blueprint', () => {
  const abTarget = CALC_BC_DOMAINS.filter((d) => d.source === 'ab').reduce((s, d) => s + d.questionTarget, 0)
  const total = CALC_BC_DOMAINS.reduce((s, d) => s + d.questionTarget, 0)

  it('draws about 60% of each form from AB content, including AB differential equations', () => {
    expect(abTarget / total).toBeGreaterThanOrEqual(0.55)
    expect(abTarget / total).toBeLessThanOrEqual(0.7)
    const diffeq = CALC_BC_DOMAINS.find((d) => d.id === 'diffeq')
    expect(diffeq?.source).toBe('ab')
    expect(diffeq?.topicSlugs).toEqual(expect.arrayContaining(['differential-equations-calcab', 'exponential-models-calcab']))
  })

  it('serves full forms whose length and clock match the landing-page copy', () => {
    const copy = apDiagnosticCourse('ap-calculus-bc')!
    for (let f = 1; f <= BC_FORMS; f++) {
      const t = generateCalcBCDiagnosticTest(f)
      expect(t.questions).toHaveLength(total)
      expect(t.questions.filter((q) => q.domain === 'diffeq').length).toBeGreaterThan(0)
      expect(new Set(t.questions.map((q) => q.question)).size).toBe(total)
      expect(t.totalQuestions).toBe(copy.questionCount)
      expect(t.timeLimitMinutes).toBe(copy.timeLimitMinutes)
    }
  })
})

describe('v1 calculus diagnostics leave out exam trivia', () => {
  it('no AB form serves an item the AB unit tests drop', () => {
    for (let f = 1; f <= AB_FORMS; f++) {
      const t = generateCalcABDiagnosticTest(f as Parameters<typeof generateCalcABDiagnosticTest>[0])
      expect(t.questions.filter((q) => isCalcAbExamTrivia(q.question)).map((q) => q.question)).toEqual([])
    }
  })

  it('no BC form serves an item the AB or BC unit tests drop', () => {
    for (let f = 1; f <= BC_FORMS; f++) {
      const t = generateCalcBCDiagnosticTest(f)
      expect(t.questions.filter((q) => isCalcBcExamTrivia(q.question)).map((q) => q.question)).toEqual([])
    }
  })

  it('the trivia rules catch the items the Oct 2026 audit found on live forms', () => {
    for (const stem of [
      'Which reference material does the AP Calculus exam provide?',
      'When the AP exam allows a calculator, you may:',
    ]) expect(isCalcAbExamTrivia(stem), stem).toBe(true)
    for (const stem of [
      'On the 2027 AP Calculus BC exam, the no-calculator multiple-choice part has 29 questions in 62 minutes.',
      'A student\'s free-response answer reads "fnInt(x^2, x, 0, 3) = 9" with no other work.',
      'Which differential equations topic is tested on the AP Calculus BC exam but not on the AB exam?',
      'The BC exam awards a separate "AB sub-score" reflecting:',
      'When the AP exam allows a calculator, you may:',
    ]) expect(isCalcBcExamTrivia(stem), stem).toBe(true)
    expect(isCalcAbExamTrivia('What is $\\lim_{x \\to 0} \\dfrac{\\sin(4x)}{2x}$?')).toBe(false)
  })
})

describe("L'Hospital's Rule (CED 4.7) is wired as an AB Unit 4 topic", () => {
  const item = { question: 'Evaluate the limit by L\'Hospital\'s Rule.', options: ['1', '2', '3', '4'], correctAnswer: 0, explanation: '', domain: 'applications-derivatives', topicSlug: 'lhopitals-rule' }

  it('files its exit-pool items into Unit 4 for the AB and BC unit tests and qbank', () => {
    for (const domain of ['applications-derivatives', 'limits', 'exam-prep']) {
      const [filed] = assignUnits([{ ...item, domain }], CALC_AB_UNIT_ASSIGNMENT)
      expect(filed.domain, domain).toBe('applications-derivatives')
    }
    // BC files the AB pool by the AB rules; its own rules must not refile it.
    expect(assignUnits([item], BC_UNIT_ASSIGNMENT)[0].domain).toBe('applications-derivatives')
  })

  it('is a v2 Unit 4 topic, and the v2 bank tags its L\'Hospital limits with it', () => {
    const unit4 = AP_DIAG_V2_BLUEPRINTS['ap-calculus-ab'].units.find((u) => u.id === 'unit-4')!
    expect(unit4.topicSlugs).toContain('lhopitals-rule')
    expect(AP_DIAG_V2_BLUEPRINTS['ap-calculus-ab'].topicNames['lhopitals-rule']).toBeTruthy()
    const tagged = calcAbV2Bank.items.filter((i) => i.topicSlug === 'lhopitals-rule').map((i) => i.id).sort()
    expect(tagged).toEqual(expect.arrayContaining(['calcab-u4-010', 'calcab-u4-011']))
  })
})
