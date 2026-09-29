// @vitest-environment jsdom
/**
 * Reviewing a past diagnostic shows the estimated overall score and the
 * estimated score for each section (owner request 2026-09-29). The review
 * page used to show one bare number and no sections; stored values were
 * always there. Stored numbers win over re-scoring (the SAT/MCAT curves were
 * recalibrated 2026-09-07).
 */
import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { summarizeAttemptScores, attemptScoreLine, diagnosticPathForCategory } from '@/lib/diagnostic-attempt-scores'
import DiagnosticAttemptScores from '@/components/DiagnosticAttemptScores'

const mcat = {
  totalCorrect: 30,
  totalQuestions: 45,
  percentage: 66.7,
  estimatedScore: 503,
  scoreRange: { low: 497, high: 509 },
  chemPhysScore: 126,
  carsScore: 125,
  bioBiochemScore: 127,
  psychSocScore: 125,
}

describe('summarizeAttemptScores', () => {
  it('MCAT: stored range and all four section scores', () => {
    const s = summarizeAttemptScores('mcat-full-diagnostic', mcat)
    expect(s.overall).toEqual({ label: 'Estimated score', value: '497–509', detail: 'midpoint 503 · out of 528' })
    expect(s.sections.map((x) => [x.key, x.value, x.outOf])).toEqual([
      ['C/P', 126, 132],
      ['CARS', 125, 132],
      ['B/B', 127, 132],
      ['P/S', 125, 132],
    ])
    expect(attemptScoreLine('mcat-full-diagnostic', mcat)).toBe('497–509 · C/P 126 · CARS 125 · B/B 127 · P/S 125')
  })

  it('MCAT: an attempt from before ranges were stored gets its range from the stored estimate', () => {
    const { scoreRange: _drop, ...old } = mcat
    void _drop
    const s = summarizeAttemptScores('mcat-full-diagnostic', old)
    expect(s.overall?.value).toMatch(/^\d{3}–\d{3}$/)
    expect(s.overall?.detail).toContain('midpoint 503')
  })

  it('SAT: range plus Reading & Writing and Math', () => {
    const s = summarizeAttemptScores('sat-full-diagnostic', { estimatedScore: 1180, scoreRange: { low: 1100, high: 1260 }, rwScore: 600, mathScore: 580 })
    expect(s.overall?.value).toBe('1100–1260')
    expect(s.sections).toEqual([
      { key: 'RW', label: 'Reading & Writing', value: 600, outOf: 800 },
      { key: 'Math', label: 'Math', value: 580, outOf: 800 },
    ])
  })

  it('ACT: composite range and four sections; a missing section is derived from its domains', () => {
    const s = summarizeAttemptScores('act-diagnostic-2', {
      estimatedComposite: 24,
      compositeRange: { low: 22, high: 26 },
      englishScore: 25,
      mathScore: 23,
      readingScore: 26,
      domains: [
        { domainName: 'Data', section: 'science', correct: 6, total: 10 },
        { domainName: 'Experiments', section: 'science', correct: 4, total: 10 },
      ],
    })
    expect(s.overall).toMatchObject({ label: 'Estimated composite', value: '22–26' })
    expect(s.sections.map((x) => x.key)).toEqual(['English', 'Math', 'Reading', 'Science'])
    expect(s.sections[3].value).toBeGreaterThanOrEqual(1)
    expect(s.sections[3].value).toBeLessThanOrEqual(36)
  })

  it('ignores stored values outside the scale', () => {
    const s = summarizeAttemptScores('mcat-full-diagnostic', { estimatedScore: 12, chemPhysScore: 400 })
    expect(s.overall).toBeNull()
    expect(s.sections).toEqual([])
  })

  it('Calc BC shows the AB subscore; other AP courses show their 1-5 and unit breakdown', () => {
    const bc = summarizeAttemptScores('calcbc-diagnostic-1', { estimatedAPScore: 4, abSubscore: 5 })
    expect(bc.overall?.value).toBe('4/5')
    expect(bc.sections).toEqual([{ key: 'AB', label: 'AB subscore', value: 5, outOf: 5 }])
    const bio = summarizeAttemptScores('ap-bio-diagnostic-2', {
      estimatedAPScore: 3,
      domains: [{ domainId: 'u1', domainName: 'Unit 1: Chemistry of Life', correct: 3, total: 5, percentage: 60 }],
    })
    expect(bio.overall).toEqual({ label: 'Estimated AP score', value: '3/5' })
    expect(bio.domains).toEqual([{ name: 'Unit 1: Chemistry of Life', correct: 3, total: 5, percentage: 60 }])
  })

  it('math-level courses show their level', () => {
    expect(summarizeAttemptScores('algebra1-diagnostic-1', { estimatedLevel: 'Proficient' }).overall).toEqual({ label: 'Estimated level', value: 'Proficient' })
  })

  it('accepts results stored as a JSON string', () => {
    expect(summarizeAttemptScores('mcat-full-diagnostic', JSON.stringify(mcat)).sections).toHaveLength(4)
  })
})

describe('diagnosticPathForCategory', () => {
  it('sends every attempt back to a page that exists', () => {
    expect(diagnosticPathForCategory('sat-full-diagnostic')).toBe('/sat-diagnostic')
    expect(diagnosticPathForCategory('sat-hard-module-2')).toBe('/sat-diagnostic')
    expect(diagnosticPathForCategory('mcat-full-diagnostic')).toBe('/mcat-diagnostic')
    expect(diagnosticPathForCategory('ap-aas-diagnostic-3')).toBe('/ap-african-american-studies-diagnostic')
    expect(diagnosticPathForCategory('act-diagnostic-2')).toBe('/act-diagnostic')
    expect(diagnosticPathForCategory('ap-bio-diagnostic-1')).toBe('/ap-bio-diagnostic')
  })
})

describe('DiagnosticAttemptScores', () => {
  afterEach(() => cleanup())

  it('renders the overall range and every section score', () => {
    render(<DiagnosticAttemptScores category="mcat-full-diagnostic" results={mcat} />)
    expect(screen.getByText('497–509')).toBeTruthy()
    expect(screen.getByText('midpoint 503 · out of 528')).toBeTruthy()
    for (const label of ['Chem/Phys', 'CARS', 'Bio/Biochem', 'Psych/Soc']) expect(screen.getByText(label)).toBeTruthy()
    expect(screen.getAllByText('out of 132')).toHaveLength(4)
    expect(screen.getByText('30/45')).toBeTruthy()
  })
})
