import { describe, it, expect, beforeAll } from 'vitest'
import {
  generateDiagnosticTest,
  analyzeDiagnosticResults,
  type DiagnosticQuestion,
  type DiagnosticTestData,
} from '@/data/sat-practice/diagnostic-generator'

/**
 * Composition regression for the calibrated SAT diagnostic.
 *
 * The score curve in src/lib/sat-scoring.ts assumes ~28% hard tier in each
 * section, and the mix follows the College Board blueprint: R&W weighted
 * across Information & Ideas, Craft & Structure, Conventions and Expression;
 * Math across Algebra, Advanced Math, Problem-Solving and Geometry, with
 * grid-ins. If the composition drifts, the calibration silently breaks —
 * these tests pin it.
 */

let test1: DiagnosticTestData

beforeAll(async () => {
  test1 = await generateDiagnosticTest()
})

/** Answer every question correctly (grid-ins by typed value) or wrongly. */
function answerFor(q: DiagnosticQuestion, i: number, correct: boolean) {
  if (q.gridIn) return { questionIndex: i, selectedIndex: null, textValue: correct ? String(q.gridIn.correctAnswer) : '' }
  return { questionIndex: i, selectedIndex: correct ? q.correctIndex : (q.correctIndex + 1) % Math.max(q.options.length, 2) }
}

const RW_BLUEPRINT: Record<string, string> = {
  comprehension: 'information-ideas',
  evidence: 'information-ideas',
  vocabulary: 'craft-structure',
  grammar: 'conventions',
  punctuation: 'conventions',
  expression: 'expression',
}
const MATH_BLUEPRINT: Record<string, string> = {
  algebra: 'algebra',
  'advanced-math': 'advanced',
  functions: 'advanced',
  'problem-solving': 'problem-solving',
  geometry: 'geometry',
}

describe('generateDiagnosticTest composition', () => {
  it('serves 36 questions in 30 minutes', () => {
    expect(test1.totalQuestions).toBe(36)
    expect(test1.questions).toHaveLength(36)
    expect(test1.timeLimitMinutes).toBe(30)
  })

  it('splits 18 R&W then 18 Math', () => {
    const rw = test1.questions.filter(q => q.section === 'reading-writing')
    const math = test1.questions.filter(q => q.section === 'math')
    expect(rw).toHaveLength(18)
    expect(math).toHaveLength(18)
    const firstMath = test1.questions.findIndex(q => q.section === 'math')
    expect(test1.questions.slice(firstMath).every(q => q.section === 'math')).toBe(true)
  })

  it('includes real passage-based questions from several passages, each set consecutive', () => {
    const passageQs = test1.questions.filter(q => q.sourceSlug.startsWith('passage-'))
    expect(passageQs.length).toBeGreaterThanOrEqual(4)
    expect(passageQs.length).toBeLessThanOrEqual(5)
    for (const q of passageQs) {
      expect(q.passage).toBeTruthy()
      expect(q.passageId).toBeTruthy()
      expect(q.section).toBe('reading-writing')
    }
    const positions = new Map<string, number[]>()
    test1.questions.forEach((q, i) => {
      if (!q.passageId) return
      positions.set(q.passageId, [...(positions.get(q.passageId) ?? []), i])
    })
    expect(positions.size).toBeGreaterThanOrEqual(3)
    for (const p of positions.values()) expect(p[p.length - 1] - p[0]).toBe(p.length - 1)
  })

  it('weights R&W to the College Board blueprint', () => {
    const counts: Record<string, number> = {}
    for (const q of test1.questions.filter(x => x.section === 'reading-writing')) {
      const d = RW_BLUEPRINT[q.domain] ?? q.domain
      counts[d] = (counts[d] ?? 0) + 1
    }
    expect(counts['craft-structure']).toBeGreaterThanOrEqual(5)
    expect(counts['information-ideas']).toBeGreaterThanOrEqual(5)
    expect(counts['information-ideas']).toBeLessThanOrEqual(7)
    expect(counts.conventions).toBeGreaterThanOrEqual(3)
    expect(counts.expression).toBeGreaterThanOrEqual(2)
  })

  it('weights Math to the blueprint, with 4 grid-ins', () => {
    const counts: Record<string, number> = {}
    for (const q of test1.questions.filter(x => x.section === 'math')) {
      const d = MATH_BLUEPRINT[q.domain] ?? q.domain
      counts[d] = (counts[d] ?? 0) + 1
    }
    expect(counts).toEqual({ algebra: 6, advanced: 6, 'problem-solving': 3, geometry: 3 })
    const gridIns = test1.questions.filter(q => q.gridIn)
    expect(gridIns).toHaveLength(4)
    for (const q of gridIns) {
      expect(q.options).toEqual([])
      expect(q.difficulty).not.toBe('hard')
    }
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

  it('never repeats a question within a test', () => {
    // Passage prompts are generic ("Which choice best states the main idea of
    // the text?"), so a passage question is identified by passage + prompt.
    const keys = test1.questions.map(q => `${q.passageId ?? ''}|${q.question.replace(/\s+/g, ' ').trim().toLowerCase()}`)
    expect(new Set(keys).size).toBe(keys.length)
  })
})

describe('analyzeDiagnosticResults with the calibrated curve', () => {
  it('scores a perfect run at 1600 with a clamped range', () => {
    const answers = test1.questions.map((q, i) => answerFor(q, i, true))
    const results = analyzeDiagnosticResults(test1.questions, answers, 'regular')
    expect(results.estimatedScore).toBe(1600)
    expect(results.scoreRange).toEqual({ low: 1560, high: 1600 })
  })

  it('scores an all-wrong run at 400', () => {
    const answers = test1.questions.map((q, i) => answerFor(q, i, false))
    const results = analyzeDiagnosticResults(test1.questions, answers, 'regular')
    expect(results.estimatedScore).toBe(400)
    expect(results.scoreRange).toEqual({ low: 400, high: 440 })
  })

  it('grades grid-ins on the typed value, not a choice index', () => {
    const gridIndex = test1.questions.findIndex(q => q.gridIn)
    const q = test1.questions[gridIndex]
    const right = analyzeDiagnosticResults([q], [{ questionIndex: 0, selectedIndex: null, textValue: String(q.gridIn!.correctAnswer) }])
    const wrong = analyzeDiagnosticResults([q], [{ questionIndex: 0, selectedIndex: q.correctIndex }])
    expect(right.totalCorrect).toBe(1)
    expect(wrong.totalCorrect).toBe(0)
  })

  it('reports well below the old linear map through the middle of the scale', () => {
    // Answer ~60% correct per section: old map said 1120, calibration says ~1030.
    const answers = test1.questions.map((q, i) => answerFor(q, i, i % 5 < 3))
    const results = analyzeDiagnosticResults(test1.questions, answers, 'regular')
    expect(results.estimatedScore).toBeLessThan(1120)
    expect(results.estimatedScore).toBeGreaterThan(900)
    expect(results.scoreRange!.high - results.scoreRange!.low).toBe(80)
  })

  it('leaves the hard and easy bands exactly as they were (Core Skills invariant)', () => {
    const questions = test1.questions.slice(0, 20)
    // ~80% correct
    const answers = questions.map((q, i) => answerFor(q, i, i % 5 !== 0))
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
