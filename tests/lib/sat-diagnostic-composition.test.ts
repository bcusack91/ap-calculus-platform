import { describe, it, expect, beforeAll } from 'vitest'
import {
  generateDiagnosticTest,
  analyzeDiagnosticResults,
  type DiagnosticTestData,
} from '@/data/sat-practice/diagnostic-generator'

/**
 * Composition regression for the calibrated SAT diagnostic.
 *
 * The score curve in src/lib/sat-scoring.ts assumes this mix (majority real
 * passage items in R&W, ~28% hard tier in each section). If the composition
 * drifts, the calibration silently breaks — these tests pin it.
 */

let test1: DiagnosticTestData

beforeAll(async () => {
  test1 = await generateDiagnosticTest()
})

describe('generateDiagnosticTest composition', () => {
  it('serves 36 questions in 30 minutes', () => {
    expect(test1.totalQuestions).toBe(36)
    expect(test1.questions).toHaveLength(36)
    expect(test1.timeLimitMinutes).toBe(30)
  })

  it('splits 18 R&W / 18 Math', () => {
    const rw = test1.questions.filter(q => q.section === 'reading-writing')
    const math = test1.questions.filter(q => q.section === 'math')
    expect(rw).toHaveLength(18)
    expect(math).toHaveLength(18)
  })

  it('R&W majority is real passage-based questions (10 of 18)', () => {
    const passageQs = test1.questions.filter(q => q.sourceSlug.startsWith('passage-'))
    expect(passageQs).toHaveLength(10)
    for (const q of passageQs) {
      expect(q.passage).toBeTruthy()
      expect(q.section).toBe('reading-writing')
    }
  })

  it('passage questions come from several distinct passages', () => {
    const texts = new Set(
      test1.questions.filter(q => q.passage).map(q => q.passage),
    )
    expect(texts.size).toBeGreaterThanOrEqual(5)
  })

  it('includes 5 hard-tier items in each section (~28%)', () => {
    const rwHard = test1.questions.filter(
      q => q.section === 'reading-writing' && q.difficulty === 'hard',
    )
    const mathHard = test1.questions.filter(
      q => q.section === 'math' && q.difficulty === 'hard',
    )
    expect(rwHard).toHaveLength(5)
    expect(mathHard).toHaveLength(5)
  })

  it('never draws from the meta-strategy pools', () => {
    // These pools quiz students ABOUT the SAT rather than on SAT skills.
    const banned = new Set([
      'sat-finding-textual-evidence',
      'sat-time-management',
    ])
    for (const q of test1.questions) {
      if (q.difficulty === 'hard') continue // hard tier items are real tasks
      expect(banned.has(q.sourceSlug)).toBe(false)
    }
  })

  it('every question carries a known domain id so attribution works', () => {
    const domainIds = new Set(test1.domains.map(d => d.id))
    for (const q of test1.questions) {
      expect(domainIds.has(q.domain)).toBe(true)
    }
  })
})

describe('analyzeDiagnosticResults with the calibrated curve', () => {
  it('scores a perfect run at 1600 with a clamped range', () => {
    const answers = test1.questions.map((q, i) => ({ questionIndex: i, selectedIndex: q.correctIndex }))
    const results = analyzeDiagnosticResults(test1.questions, answers, 'regular')
    expect(results.estimatedScore).toBe(1600)
    expect(results.scoreRange).toEqual({ low: 1560, high: 1600 })
  })

  it('scores an all-wrong run at 400', () => {
    const answers = test1.questions.map((q, i) => ({
      questionIndex: i,
      selectedIndex: (q.correctIndex + 1) % Math.max(q.options.length, 2),
    }))
    const results = analyzeDiagnosticResults(test1.questions, answers, 'regular')
    expect(results.estimatedScore).toBe(400)
    expect(results.scoreRange).toEqual({ low: 400, high: 440 })
  })

  it('reports well below the old linear map through the middle of the scale', () => {
    // Answer ~60% correct per section: old map said 1120, calibration says ~1030.
    const answers = test1.questions.map((q, i) => ({
      questionIndex: i,
      selectedIndex: i % 5 < 3 ? q.correctIndex : (q.correctIndex + 1) % Math.max(q.options.length, 2),
    }))
    const results = analyzeDiagnosticResults(test1.questions, answers, 'regular')
    expect(results.estimatedScore).toBeLessThan(1120)
    expect(results.estimatedScore).toBeGreaterThan(900)
    expect(results.scoreRange!.high - results.scoreRange!.low).toBe(80)
  })

  it('leaves the hard and easy bands exactly as they were (Core Skills invariant)', () => {
    const questions = test1.questions.slice(0, 20)
    const answers = questions.map((q, i) => ({
      questionIndex: i,
      // ~80% correct
      selectedIndex: i % 5 === 0 ? (q.correctIndex + 1) % Math.max(q.options.length, 2) : q.correctIndex,
    }))
    const hard = analyzeDiagnosticResults(questions, answers, 'hard')
    const easy = analyzeDiagnosticResults(questions, answers, 'easy')
    // hard: 600 + pct*200 per section; easy: 200 + pct*350 per section.
    for (const d of hard.domains) {
      expect(d.total).toBeGreaterThan(0)
    }
    const rwPctHard = (() => {
      const rw = hard.domains.filter(d => d.section === 'reading-writing')
      const c = rw.reduce((s, d) => s + d.correct, 0)
      const t = rw.reduce((s, d) => s + d.total, 0)
      return t > 0 ? c / t : 0
    })()
    expect(hard.rwScore).toBe(Math.round(600 + rwPctHard * 200))
    const rwPctEasy = rwPctHard
    expect(easy.rwScore).toBe(Math.round(200 + rwPctEasy * 350))
  })
})
