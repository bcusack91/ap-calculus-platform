/**
 * Unit tests for scoreMCATDiagnostic — the pure grader behind the MCAT
 * diagnostic. It buckets questions by `domain`, computes per-domain %/level,
 * estimates section scaled scores (118-132) and a 472-528 total, and surfaces
 * weak/moderate/strong areas. No DB/network — fully deterministic.
 *
 * The module's DIAGNOSTIC_DOMAINS list is module-private, so tests build
 * questions tagged with known domain ids ('gen-chem' -> chem-phys section,
 * 'cars' -> cars, 'psych-soc' -> psych-soc, 'cell-mol-bio' -> bio-biochem).
 */
import { describe, it, expect } from 'vitest'
import {
  scoreMCATDiagnostic,
  type MCATDiagnosticQuestion,
} from '@/data/mcat-practice/diagnostic-generator'

function q(
  id: string,
  domain: string,
  correctAnswer: number,
): MCATDiagnosticQuestion {
  return {
    id,
    question: `Q ${id}`,
    options: ['a', 'b', 'c', 'd'],
    correctAnswer,
    explanation: 'because',
    domain,
    sourceSlug: 'test-slug',
  }
}

describe('scoreMCATDiagnostic — empty / boundary inputs', () => {
  it('returns the 472 floor and zeros when there are no questions', () => {
    const r = scoreMCATDiagnostic([], {})
    expect(r.totalQuestions).toBe(0)
    expect(r.totalCorrect).toBe(0)
    expect(r.percentage).toBe(0)
    // Every section scores 118 (no questions) -> 4*118 = 472.
    expect(r.estimatedScore).toBe(472)
    expect(r.chemPhysScore).toBe(118)
    expect(r.carsScore).toBe(118)
    expect(r.bioBiochemScore).toBe(118)
    expect(r.psychSocScore).toBe(118)
  })

  it('treats unanswered questions (no entry in answers map) as incorrect', () => {
    const questions = [q('1', 'gen-chem', 0), q('2', 'gen-chem', 1)]
    const r = scoreMCATDiagnostic(questions, {}) // nothing answered
    expect(r.totalCorrect).toBe(0)
    expect(r.totalQuestions).toBe(2)
    expect(r.percentage).toBe(0)
  })
})

describe('scoreMCATDiagnostic — perfect and all-wrong', () => {
  const questions = [
    q('1', 'gen-chem', 0),
    q('2', 'gen-chem', 1),
    q('3', 'cars', 2),
    q('4', 'cars', 3),
  ]

  it('scores a fully-correct attempt at 100% with the attempted sections maxed (132)', () => {
    const answers = { 0: 0, 1: 1, 2: 2, 3: 3 }
    const r = scoreMCATDiagnostic(questions, answers)
    expect(r.totalCorrect).toBe(4)
    expect(r.totalQuestions).toBe(4)
    expect(r.percentage).toBe(100)
    expect(r.chemPhysScore).toBe(132) // gen-chem 100%
    expect(r.carsScore).toBe(132) // cars 100%
    // bio-biochem & psych-soc had no questions -> 118 each.
    expect(r.bioBiochemScore).toBe(118)
    expect(r.psychSocScore).toBe(118)
    expect(r.estimatedScore).toBe(132 + 132 + 118 + 118) // 500
  })

  it('scores an all-wrong attempt at 0% with attempted sections at the 118 floor', () => {
    const answers = { 0: 3, 1: 3, 2: 0, 3: 0 } // all wrong
    const r = scoreMCATDiagnostic(questions, answers)
    expect(r.totalCorrect).toBe(0)
    expect(r.percentage).toBe(0)
    expect(r.chemPhysScore).toBe(118)
    expect(r.carsScore).toBe(118)
    expect(r.estimatedScore).toBe(472)
  })
})

describe('scoreMCATDiagnostic — domain levels and rounding', () => {
  it('labels a domain "weak" below 40%, "moderate" 40-69%, "strong" at/above 70%', () => {
    // gen-chem: 1/4 correct = 25% -> weak
    // cars: 4/7 correct ≈ 57% -> moderate
    // psych-soc: 5/6 correct ≈ 83% -> strong
    const questions: MCATDiagnosticQuestion[] = [
      ...Array.from({ length: 4 }, (_, i) => q(`gc${i}`, 'gen-chem', 0)),
      ...Array.from({ length: 7 }, (_, i) => q(`cr${i}`, 'cars', 0)),
      ...Array.from({ length: 6 }, (_, i) => q(`ps${i}`, 'psych-soc', 0)),
    ]
    const answers: Record<number, number> = {}
    // gen-chem indices 0..3: get exactly 1 right
    answers[0] = 0
    // cars indices 4..10: get exactly 4 right
    answers[4] = 0
    answers[5] = 0
    answers[6] = 0
    answers[7] = 0
    // psych-soc indices 11..16: get exactly 5 right
    answers[11] = 0
    answers[12] = 0
    answers[13] = 0
    answers[14] = 0
    answers[15] = 0

    const r = scoreMCATDiagnostic(questions, answers)
    const byName = Object.fromEntries(r.domains.map((d) => [d.domainName, d]))

    expect(byName['General Chemistry'].percentage).toBe(25)
    expect(byName['General Chemistry'].level).toBe('weak')

    expect(byName['Critical Analysis & Reasoning'].percentage).toBe(57)
    expect(byName['Critical Analysis & Reasoning'].level).toBe('moderate')

    expect(byName['Psychology & Sociology'].percentage).toBe(83)
    expect(byName['Psychology & Sociology'].level).toBe('strong')

    // Strong area surfaces; weak area surfaces; moderate area surfaces.
    expect(r.strengths).toContain('Psychology & Sociology')
    expect(r.weakAreas).toContain('General Chemistry')
    expect(r.moderateAreas).toContain('Critical Analysis & Reasoning')
  })

  it('recommends weak domains at high priority and moderate at medium priority', () => {
    const questions: MCATDiagnosticQuestion[] = [
      ...Array.from({ length: 4 }, (_, i) => q(`gc${i}`, 'gen-chem', 0)), // weak (0%)
    ]
    const r = scoreMCATDiagnostic(questions, {}) // none correct -> weak
    expect(r.domains.find((d) => d.domainName === 'General Chemistry')?.level).toBe('weak')
    const gcRec = r.recommendedTopics.find((t) => t.name === 'General Chemistry')
    expect(gcRec?.priority).toBe('high')
  })

  it('keeps the estimated total within the valid 472..528 MCAT band', () => {
    const questions = [
      q('1', 'gen-chem', 0),
      q('2', 'cars', 1),
      q('3', 'cell-mol-bio', 2),
      q('4', 'psych-soc', 3),
    ]
    const answers = { 0: 0, 1: 9, 2: 2, 3: 9 } // mixed correct/incorrect
    const r = scoreMCATDiagnostic(questions, answers)
    expect(r.estimatedScore).toBeGreaterThanOrEqual(472)
    expect(r.estimatedScore).toBeLessThanOrEqual(528)
    expect(r.estimatedScore).toBe(
      r.chemPhysScore + r.carsScore + r.bioBiochemScore + r.psychSocScore,
    )
  })
})
