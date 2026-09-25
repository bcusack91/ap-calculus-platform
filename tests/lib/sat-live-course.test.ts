/**
 * The SAT live-course fixes of 2026-09-25, each pinned to the failure it
 * caused:
 *
 * - Grid-ins were tallied with `selectedIndex !== correctIndex` (null !== -1),
 *   so every grid-in — even a correct one — counted as a miss and recommended
 *   a pseudo topic ('grid-in-algebra') that does not exist. 97-100% of
 *   sittings carried at least one dead slot.
 * - hasExitQuiz said "no quiz" for every -core-skills topic, so the lesson
 *   never offered one and plan-status / flashcard unlock cleared the topic on
 *   lesson completion alone.
 * - Later diagnostic cycles could hand back topics already cleared.
 * - Placement flipped between Core Skills and Standard on single-sitting noise
 *   (sd ≈ 80 on the 36-question screen).
 */
import { describe, it, expect, beforeAll } from 'vitest'
import {
  generateDiagnosticTest,
  analyzeDiagnosticResults,
  canonicalizeSlug,
  satPlanCandidatePool,
  DIAGNOSTIC_DOMAINS,
  type DiagnosticQuestion,
  type DiagnosticTestData,
} from '@/data/sat-practice/diagnostic-generator'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { coreSkillsTrackStatus, parseSatTrackOverride } from '@/data/sat-practice/core-skills-modules'
import { satLane, selectSatPlanTopics, trackSlugFor } from '@/lib/sat-plan'
import { SAT_DIAGNOSTIC_SCORE_SD, diagnosticScreenRange } from '@/lib/sat-scoring'

let test1: DiagnosticTestData

beforeAll(async () => {
  test1 = await generateDiagnosticTest()
})

function answerFor(q: DiagnosticQuestion, i: number, correct: boolean) {
  if (q.gridIn) return { questionIndex: i, selectedIndex: null, textValue: correct ? String(q.gridIn.correctAnswer) : '' }
  return { questionIndex: i, selectedIndex: correct ? q.correctIndex : (q.correctIndex + 1) % Math.max(q.options.length, 2) }
}

/** Every slug the diagnostic is allowed to recommend: its domains' real topics. */
const REAL_TOPICS = new Set(DIAGNOSTIC_DOMAINS.flatMap((d) => d.slugs.map(canonicalizeSlug)))

describe('grid-ins on the SAT diagnostic', () => {
  it('carry a real topic, never a grid-in-* pseudo slug', () => {
    const grids = test1.questions.filter((q) => q.gridIn)
    expect(grids.length).toBeGreaterThan(0)
    for (const q of grids) {
      expect(q.sourceSlug.startsWith('grid-in-')).toBe(false)
      expect(REAL_TOPICS.has(q.sourceSlug)).toBe(true)
    }
  })

  it('a perfect sheet recommends nothing from grid-ins it got right', () => {
    const answers = test1.questions.map((q, i) => answerFor(q, i, true))
    const r = analyzeDiagnosticResults(test1.questions, answers)
    expect(r.percentage).toBe(100)
    // With no misses the only recommendations are top-ups from weak/moderate
    // domains, and a perfect sheet has none.
    expect(r.recommendedTopics).toEqual([])
  })

  it('every recommendation on an all-wrong sheet is a real topic', () => {
    const answers = test1.questions.map((q, i) => answerFor(q, i, false))
    const r = analyzeDiagnosticResults(test1.questions, answers)
    expect(r.recommendedTopics.length).toBe(5)
    for (const t of r.recommendedTopics) expect(REAL_TOPICS.has(t.slug)).toBe(true)
  })

  it('older stored grid-in slugs resolve to lessons that exist', () => {
    for (const legacy of ['grid-in-algebra', 'grid-in-advanced-math', 'grid-in-problem-solving', 'grid-in-statistics', 'grid-in-geometry']) {
      expect(REAL_TOPICS.has(canonicalizeSlug(legacy))).toBe(true)
    }
  })
})

describe('the diagnostic score window matches its measured noise', () => {
  it('is ±1 sd (80) on the 36-question screen', () => {
    expect(SAT_DIAGNOSTIC_SCORE_SD).toBe(80)
    expect(diagnosticScreenRange(1100)).toEqual({ low: 1020, high: 1180 })
    const answers = test1.questions.map((q, i) => answerFor(q, i, i % 3 !== 0))
    const r = analyzeDiagnosticResults(test1.questions, answers)
    expect(r.scoreRange!.high - r.scoreRange!.low).toBe(160)
  })
})

describe('Core Skills topics have an exit quiz', () => {
  it('hasExitQuiz follows the base topic', () => {
    for (const base of ['sat-functions', 'sat-linear-equations-inequalities', 'sat-punctuation']) {
      expect(hasExitQuiz(base)).toBe(true)
      expect(hasExitQuiz(`${base}-core-skills`)).toBe(true)
    }
    expect(hasExitQuiz('sat-not-a-topic-core-skills')).toBe(false)
  })
})

describe('placement', () => {
  const regular = (...scores: number[]) => scores.map((s) => ({ results: { estimatedScore: s } }))

  it('places a new student from their first screen', () => {
    expect(coreSkillsTrackStatus(regular(900)).placed).toBe(true)
    expect(coreSkillsTrackStatus(regular(1200)).placed).toBe(false)
  })

  it('reads the mean of the last two screens, so one noisy sitting does not flip the lane', () => {
    // 1080 then a noisy 1010: mean 1045 → still Core Skills.
    expect(coreSkillsTrackStatus(regular(1080, 1010)).placed).toBe(true)
    // A single noisy dip under the bar from a student averaging well above it.
    expect(coreSkillsTrackStatus(regular(1030, 1130)).placed).toBe(false)
  })

  it('a teacher override wins in every direction, including 700-800', () => {
    expect(coreSkillsTrackStatus(regular(800), [], 'advanced').placed).toBe(false)
    expect(parseSatTrackOverride('advanced')).toBe('advanced')
    expect(parseSatTrackOverride('bogus')).toBe(null)
    const core = coreSkillsTrackStatus(regular(800))
    expect(satLane({ override: 'advanced', core, latestIsHardModule: false, hardTrackUnlocked: false })).toBe('advanced')
    expect(satLane({ override: 'regular', core, latestIsHardModule: true, hardTrackUnlocked: true })).toBe('regular')
  })

  it('the 700-800 lane follows the student, not only the last attempt', () => {
    const notCore = coreSkillsTrackStatus(regular(1450))
    // A qualifying regular screen keeps them in the advanced lane even when
    // the latest attempt is an assigned regular diagnostic.
    expect(satLane({ override: null, core: notCore, latestIsHardModule: false, hardTrackUnlocked: true })).toBe('advanced')
    expect(satLane({ override: null, core: notCore, latestIsHardModule: false, hardTrackUnlocked: false })).toBe('regular')
  })

  it('routes base slugs through the alias table for track twins', () => {
    expect(trackSlugFor('sat-grammar-usage', 'advanced')).toBe('sat-sentence-structure-advanced')
    expect(trackSlugFor('sat-functions', 'core-skills')).toBe('sat-functions-core-skills')
    expect(trackSlugFor('sat-functions', 'regular')).toBe('sat-functions')
  })
})

describe('later cycles do not hand back topics already cleared', () => {
  const t = (slug: string, priority: 'high' | 'medium' = 'high') => ({ slug, name: slug, priority })

  it('swaps pre-cleared recommendations for uncleared work from the weak domains', () => {
    const cleared = new Set(['sat-functions', 'sat-circles'])
    const plan = selectSatPlanTopics({
      recommended: [t('sat-functions'), t('sat-circles'), t('sat-punctuation')],
      pool: [t('sat-functions'), t('sat-quadratic-equations'), t('sat-circles'), t('sat-exponents-radicals')],
      isStale: (s) => cleared.has(s),
      limit: 3,
    })
    expect(plan.map((p) => p.slug)).toEqual(['sat-punctuation', 'sat-quadratic-equations', 'sat-exponents-radicals'])
  })

  it('restores cleared topics last rather than returning a short plan', () => {
    const plan = selectSatPlanTopics({
      recommended: [t('a'), t('b')],
      pool: [],
      isStale: () => true,
      limit: 2,
    })
    expect(plan.map((p) => p.slug)).toEqual(['a', 'b'])
  })

  it('the backfill pool orders weak before moderate domains', () => {
    const pool = satPlanCandidatePool([
      { domainId: 'geometry', level: 'moderate' },
      { domainId: 'algebra', level: 'weak' },
      { domainId: 'vocabulary', level: 'strong' },
    ])
    expect(pool[0].slug).toBe('sat-linear-equations-inequalities')
    expect(pool.every((p) => REAL_TOPICS.has(p.slug))).toBe(true)
    expect(pool.some((p) => p.slug === 'sat-vocabulary-context')).toBe(false)
    const firstModerate = pool.findIndex((p) => p.priority === 'medium')
    expect(pool.slice(0, firstModerate).every((p) => p.priority === 'high')).toBe(true)
  })
})
