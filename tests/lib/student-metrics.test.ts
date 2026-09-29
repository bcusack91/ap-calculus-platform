/**
 * The numbers on the teacher's per-student report (owner request 2026-09-29).
 * Pure summarizers only — the loaders are thin queries around these.
 */
import { describe, it, expect } from 'vitest'
import {
  summarizeActiveTime,
  summarizeFlashcards,
  summarizeQuestions,
  weakestAreas,
  mcatTrend,
  mcatPacing,
  topicsFirstClearedBetween,
  isClearingAttempt,
  rangeStart,
  RUSHING_MIN_REVIEWS,
  type ReviewLogRow,
  type QuestionRowLite,
} from '@/lib/student-metrics'

const D = (iso: string) => new Date(iso)

describe('summarizeActiveTime', () => {
  it('totals by surface and by day, counting active days', () => {
    const s = summarizeActiveTime([
      { day: D('2026-09-28'), surface: 'LESSON', seconds: 1200 },
      { day: D('2026-09-28'), surface: 'FLASHCARDS', seconds: 600 },
      { day: D('2026-09-29'), surface: 'LESSON', seconds: 300 },
      { day: D('2026-09-30'), surface: 'OTHER', seconds: 0 },
    ])
    expect(s.totalSeconds).toBe(2100)
    expect(s.activeDays).toBe(2)
    expect(s.bySurface.LESSON).toBe(1500)
    expect(s.byDay).toEqual([
      { day: '2026-09-28', seconds: 1800, bySurface: { LESSON: 1200, FLASHCARDS: 600 } },
      { day: '2026-09-29', seconds: 300, bySurface: { LESSON: 300 } },
    ])
  })
})

describe('summarizeFlashcards', () => {
  const log = (rating: ReviewLogRow['rating'], extra: Partial<ReviewLogRow> = {}): ReviewLogRow => ({
    rating,
    durationMs: 6000,
    wasNew: false,
    intervalBefore: 0,
    reviewedAt: D('2026-09-29T15:00:00Z'),
    ...extra,
  })

  it('counts ratings, shares, time, new cards and retention on mature cards', () => {
    const s = summarizeFlashcards(
      [
        log('AGAIN', { intervalBefore: 30 }),
        log('GOOD', { intervalBefore: 25 }),
        log('GOOD', { intervalBefore: 40 }),
        log('EASY', { wasNew: true }),
        log('HARD', { durationMs: null }),
      ],
      12,
    )
    expect(s.reviews).toBe(5)
    expect(s.ratings).toEqual({ AGAIN: 1, HARD: 1, GOOD: 2, EASY: 1 })
    expect(s.ratingShares.GOOD).toBeCloseTo(0.4)
    expect(s.newCards).toBe(1)
    expect(s.timedReviews).toBe(4)
    expect(s.totalSeconds).toBe(24)
    expect(s.avgSecondsPerCard).toBe(6)
    expect(s.matureReviews).toBe(3)
    expect(s.retention).toBeCloseTo(2 / 3)
    expect(s.overdue).toBe(12)
    expect(s.rushing).toBe(false)
  })

  it('flags rushing only with enough fast, timed reviews', () => {
    const fast = Array.from({ length: RUSHING_MIN_REVIEWS }, () => log('GOOD', { durationMs: 900 }))
    expect(summarizeFlashcards(fast, 0).rushing).toBe(true)
    expect(summarizeFlashcards(fast.slice(1), 0).rushing).toBe(false)
    const untimed = Array.from({ length: 30 }, () => log('GOOD', { durationMs: null }))
    expect(summarizeFlashcards(untimed, 0).rushing).toBe(false)
  })

  it('has no retention or average with nothing to measure', () => {
    const s = summarizeFlashcards([], 0)
    expect(s.retention).toBeNull()
    expect(s.avgSecondsPerCard).toBeNull()
    expect(s.ratingShares.AGAIN).toBe(0)
  })
})

describe('questions', () => {
  const q = (source: QuestionRowLite['source'], answered: number, correct: number, topicSlug = '', discipline = ''): QuestionRowLite => ({
    source,
    answered,
    correct,
    topicSlug,
    discipline,
    courseSlug: 'mcat-prep',
  })

  it('tallies by source (entrance / in-lesson / exit / tests) and overall', () => {
    const s = summarizeQuestions([q('ENTRANCE', 1, 1), q('ENTRANCE', 1, 0), q('LESSON', 4, 3), q('EXIT', 10, 8), q('FULL_LENGTH', 59, 40)])
    expect(s.bySource.ENTRANCE).toEqual({ answered: 2, correct: 1 })
    expect(s.bySource.LESSON).toEqual({ answered: 4, correct: 3 })
    expect(s.bySource.EXIT).toEqual({ answered: 10, correct: 8 })
    expect(s.total).toEqual({ answered: 75, correct: 52 })
  })

  it('never lets a bad row claim more correct than answered', () => {
    expect(summarizeQuestions([q('LESSON', 2, 5)]).total).toEqual({ answered: 2, correct: 2 })
  })

  it('ranks weakest areas, ignoring thin samples', () => {
    const rows = [
      q('DIAGNOSTIC', 10, 4, 'enzyme-kinetics', 'B/B'),
      q('DIAGNOSTIC', 10, 9, 'optics', 'C/P'),
      q('EXIT', 10, 5, 'amino-acids', ''),
      q('LESSON', 3, 0, 'thin-topic', ''),
    ]
    const w = weakestAreas(rows)
    // The enzyme topic and its B/B section tie at 40%; both lead the list.
    expect(w.slice(0, 2).map((a) => a.key).sort()).toEqual(['B/B', 'enzyme-kinetics'])
    expect(w[0].accuracy).toBe(0.4)
    expect(w[2]).toMatchObject({ kind: 'topic', key: 'amino-acids', accuracy: 0.5 })
    expect(w.map((a) => a.key)).not.toContain('thin-topic')
    expect(w.find((a) => a.kind === 'discipline' && a.key === 'B/B')?.accuracy).toBe(0.4)
  })
})

describe('MCAT trend and pacing', () => {
  const diag = {
    category: 'mcat-full-diagnostic',
    createdAt: D('2026-09-10T12:00:00Z'),
    classDiagnosticId: null,
    results: { estimatedScore: 498, chemPhysScore: 124, carsScore: 125, bioBiochemScore: 124, psychSocScore: 125 },
  }
  const classDiag = { ...diag, createdAt: D('2026-09-17T12:00:00Z'), classDiagnosticId: 'cd1', results: { ...diag.results, estimatedScore: 503, carsScore: 127 } }
  const fl = {
    category: 'mcat-full-length',
    createdAt: D('2026-09-24T12:00:00Z'),
    classDiagnosticId: null,
    results: {
      total: 506,
      sections: [
        { section: 'Chemical and Physical Foundations', short: 'C/P', correct: 40, total: 59, scaled: 126, elapsedSeconds: 5900 },
        { section: 'Critical Analysis and Reasoning Skills', short: 'CARS', correct: 38, total: 53, scaled: 127, elapsedSeconds: 5300 },
      ],
    },
  }

  it('orders diagnostics, class diagnostics and full-lengths with their four sections', () => {
    const t = mcatTrend([fl, diag, classDiag, { category: 'sat-full-diagnostic', createdAt: D('2026-09-01'), classDiagnosticId: null, results: {} }])
    expect(t.map((p) => [p.kind, p.total])).toEqual([
      ['diagnostic', 498],
      ['class-diagnostic', 503],
      ['full-length', 506],
    ])
    expect(t[0].sections).toEqual({ 'C/P': 124, CARS: 125, 'B/B': 124, 'P/S': 125 })
    expect(t[2].sections).toEqual({ 'C/P': 126, CARS: 127 })
  })

  it('names every section correctly from its long practice name', () => {
    const names = [
      ['Chemical and Physical Foundations of Biological Systems', 'C/P'],
      ['Critical Analysis and Reasoning Skills', 'CARS'],
      ['Biological and Biochemical Foundations of Living Systems', 'B/B'],
      ['Psychological, Social, and Biological Foundations of Behavior', 'P/S'],
    ]
    for (const [name, key] of names) {
      const [p] = mcatPacing([], [{ sectionName: name, total: 10, timeSpent: 900, completedAt: D('2026-09-25') }])
      expect(p.label).toBe(key)
    }
  })

  it('ignores out-of-range scores', () => {
    const bad = { ...diag, results: { estimatedScore: 12, chemPhysScore: 400 } }
    expect(mcatTrend([bad])).toEqual([])
  })

  it('computes seconds per question for full-length sections and section practice', () => {
    const p = mcatPacing([fl], [{ sectionName: 'Psychological, Social, and Biological Foundations', total: 20, timeSpent: 2000, completedAt: D('2026-09-25T12:00:00Z') }])
    expect(p).toEqual([
      { at: '2026-09-24T12:00:00.000Z', kind: 'full-length', label: 'C/P', secondsPerQuestion: 100 },
      { at: '2026-09-24T12:00:00.000Z', kind: 'full-length', label: 'CARS', secondsPerQuestion: 100 },
      { at: '2026-09-25T12:00:00.000Z', kind: 'practice', label: 'P/S', secondsPerQuestion: 100 },
    ])
  })
})

describe('weekly targets', () => {
  it('uses the one 80% pass mark', () => {
    expect(isClearingAttempt({ score: 8, totalQuestions: 10 })).toBe(true)
    expect(isClearingAttempt({ score: 7, totalQuestions: 10 })).toBe(false)
    expect(isClearingAttempt({ score: 0, totalQuestions: 0 })).toBe(false)
  })

  it('counts a topic in the week it was FIRST cleared, not on a later re-pass', () => {
    const attempts = [
      { topicSlug: 'a', score: 9, totalQuestions: 10, completedAt: D('2026-09-10') }, // cleared before
      { topicSlug: 'a', score: 10, totalQuestions: 10, completedAt: D('2026-09-27') },
      { topicSlug: 'b', score: 6, totalQuestions: 10, completedAt: D('2026-09-25') },
      { topicSlug: 'b', score: 8, totalQuestions: 10, completedAt: D('2026-09-26') }, // first clear this week
      { topicSlug: 'c', score: 5, totalQuestions: 10, completedAt: D('2026-09-27') },
    ]
    expect(topicsFirstClearedBetween(attempts, D('2026-09-23'), D('2026-09-30'))).toEqual(['b'])
  })

  it('range windows', () => {
    const now = D('2026-09-29T12:00:00Z')
    expect(rangeStart('7d', now)?.toISOString()).toBe('2026-09-22T12:00:00.000Z')
    expect(rangeStart('all', now)).toBeNull()
  })
})
