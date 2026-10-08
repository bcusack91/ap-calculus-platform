import { describe, it, expect } from 'vitest'
import { bestSegment, termsOf } from '@/lib/text-terms'
import { makeLessonExitQuiz } from '@/data/exit-quizzes/lesson-built'

describe('termsOf', () => {
  it('keeps meaningful words, drops stopwords and LaTeX', () => {
    const t = termsOf('The $\\frac{a}{b}$ aldol condensation forms an enone, which is the answer')
    expect(t.has('aldol')).toBe(true)
    expect(t.has('condensation')).toBe(true)
    expect(t.has('enone')).toBe(true)
    expect(t.has('the')).toBe(false)
    expect(t.has('frac')).toBe(false)
    expect(t.has('answer')).toBe(false)
  })
})

describe('bestSegment — an exit-quiz question finds the lesson part that teaches it', () => {
  const parts = [
    termsOf('Nucleophilic addition to aldehydes and ketones: hydrates, hemiacetals, acetals, imines and enamines form at the carbonyl carbon'),
    termsOf('Enols and enolates: alpha hydrogen acidity, keto-enol tautomerism, the aldol condensation and Claisen condensation build carbon-carbon bonds'),
    termsOf('Carboxylic acid derivatives: acyl substitution, reactivity order of acid chlorides, anhydrides, esters and amides, saponification'),
  ]
  it('places questions by shared vocabulary, weighting rare terms', () => {
    expect(bestSegment(termsOf('Which product forms when an aldehyde reacts with excess alcohol under acid? An acetal'), parts)).toBe(0)
    expect(bestSegment(termsOf('The aldol condensation of two ketones first forms an enolate'), parts)).toBe(1)
    expect(bestSegment(termsOf('Rank acid chlorides, esters and amides by acyl substitution reactivity'), parts)).toBe(2)
  })
  it('refuses to guess when nothing overlaps', () => {
    expect(bestSegment(termsOf('Kinematics of projectile motion'), parts)).toBe(-1)
  })
})

describe('lesson-built exit quizzes carry the teaching part', () => {
  it('maps each item\'s part to partNumber', () => {
    const pool = [
      { id: 'a', question: 'Q1', options: ['1', '2', '3', '4'] as [string, string, string, string], correctAnswer: 0, explanation: '', difficulty: 'easy' as const, yield: 'HIGH' as const, part: 3 },
      { id: 'b', question: 'Q2', options: ['1', '2', '3', '4'] as [string, string, string, string], correctAnswer: 1, explanation: '', difficulty: 'easy' as const, yield: 'HIGH' as const, part: 1 },
    ]
    const qs = makeLessonExitQuiz(pool, 'topic-x')(2)
    expect(new Set(qs.map((q) => q.partNumber))).toEqual(new Set([1, 3]))
  })
})
