import { describe, it, expect } from 'vitest'
import { analyzeDiagnosticResults, domainIdForTopicSlug } from '@/data/sat-practice/diagnostic-generator'
import type { DiagnosticQuestion } from '@/data/sat-practice/diagnostic-generator'

/** Minimal hard-style question tagged the way generateHardModule now tags. */
function hardQ(slug: string, section: 'reading-writing' | 'math'): DiagnosticQuestion {
  return {
    question: `Q for ${slug} ${Math.random()}`,
    options: ['a', 'b', 'c', 'd'],
    correctIndex: 1,
    explanation: 'x',
    domain: domainIdForTopicSlug(slug) ?? slug,
    sourceSlug: slug,
    section,
  } as unknown as DiagnosticQuestion
}

describe('SAT hard-module scoring', () => {
  it('every hard-track topic slug maps to a real diagnostic domain', () => {
    const slugs = [
      'sat-vocabulary-context', 'sat-central-ideas-details', 'sat-command-evidence',
      'sat-reading-comprehension', 'sat-punctuation', 'sat-sentence-structure',
      'sat-transitions-organization', 'sat-effective-language-use',
      'sat-linear-equations-inequalities', 'sat-systems-linear-equations',
      'sat-linear-inequalities-graphs', 'sat-ratios-proportions-percents',
      'sat-functions', 'sat-nonlinear-equations-functions', 'sat-quadratic-equations',
      'sat-exponential-functions', 'sat-polynomials-factoring',
      'sat-polynomial-rational-expressions', 'sat-exponents-radicals',
      'sat-geometry-basics', 'sat-geometry-trigonometry', 'sat-circles',
      'sat-statistics-data-interpretation', 'sat-data-statistics',
      'sat-scatterplots-line-fit', 'sat-probability-two-way-tables',
    ]
    for (const slug of slugs) {
      expect(domainIdForTopicSlug(slug), slug).not.toBeNull()
    }
  })

  it('scores a hard module by real totals, never 0/0 (the reported bug)', () => {
    const questions = [
      hardQ('sat-quadratic-equations', 'math'),
      hardQ('sat-vocabulary-context', 'reading-writing'),
      hardQ('sat-circles', 'math'),
      hardQ('sat-punctuation', 'reading-writing'),
    ]
    // miss the first, get the rest
    const answers = questions.map((q, i) => ({ questionIndex: i, selectedIndex: i === 0 ? 0 : q.correctIndex }))
    const res = analyzeDiagnosticResults(questions, answers, 'hard')
    expect(res.totalQuestions).toBe(4)
    expect(res.totalCorrect).toBe(3)
    expect(res.estimatedScore).toBeGreaterThan(1200) // not the 400 floor
  })

  it('uses the 600-800 band for hard modules', () => {
    const questions = [hardQ('sat-quadratic-equations', 'math'), hardQ('sat-vocabulary-context', 'reading-writing')]
    const perfect = questions.map((q, i) => ({ questionIndex: i, selectedIndex: q.correctIndex }))
    const res = analyzeDiagnosticResults(questions, perfect, 'hard')
    expect(res.rwScore).toBe(800)
    expect(res.mathScore).toBe(800)
    const zero = questions.map((_, i) => ({ questionIndex: i, selectedIndex: null }))
    const worst = analyzeDiagnosticResults(questions, zero, 'hard')
    expect(worst.rwScore).toBe(600) // hard-band floor, not 200
  })

  it('excludes untested domains — a perfect partial run is not "weak everywhere"', () => {
    const questions = [hardQ('sat-quadratic-equations', 'math'), hardQ('sat-vocabulary-context', 'reading-writing')]
    const perfect = questions.map((q, i) => ({ questionIndex: i, selectedIndex: q.correctIndex }))
    const res = analyzeDiagnosticResults(questions, perfect, 'hard')
    expect(res.domains.every((d) => d.total > 0)).toBe(true)
    expect(res.weakAreas).toHaveLength(0)
    expect(res.recommendedTopics).toHaveLength(0)
  })

  it('regular band still maps the full 200-800 scale', () => {
    const questions = [hardQ('sat-quadratic-equations', 'math'), hardQ('sat-vocabulary-context', 'reading-writing')]
    const zero = questions.map((_, i) => ({ questionIndex: i, selectedIndex: null }))
    const res = analyzeDiagnosticResults(questions, zero)
    expect(res.rwScore).toBe(200)
    expect(res.mathScore).toBe(200)
  })
})
