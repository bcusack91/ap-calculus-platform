/**
 * The daily question draws from the student's OWN course (UX plan Phase 2).
 *
 * Regression guarded: every student got the same Limits / Derivatives /
 * Integrals / Algebra / SAT Math mix, which is off-subject for AP Biology,
 * MCAT or history students. Students whose course has no bank still get
 * that mixed set, unchanged.
 */
import { describe, it, expect } from 'vitest'
import {
  DAILY_CHALLENGE_SIZE,
  DEFAULT_DAILY_SET,
  dailySetForCourse,
  dailySetLabel,
  getDailyQuestions,
  isDailySetKey,
  pickDailySet,
} from '@/lib/daily-challenge'

const DAY = '2026-09-28'

describe('pickDailySet — which bank a student gets', () => {
  it("uses the student's best-ranked course that has a bank", () => {
    expect(pickDailySet(['ap-biology', 'sat-prep'])).toBe('ap-biology')
    expect(pickDailySet(['mcat-prep'])).toBe('mcat')
  })

  it('skips courses with no bank and falls back to the mixed set', () => {
    expect(pickDailySet(['grade-4-math', 'ap-us-history'])).toBe('ap-us-history')
    expect(pickDailySet(['grade-4-math'])).toBe(DEFAULT_DAILY_SET)
    expect(pickDailySet([])).toBe(DEFAULT_DAILY_SET)
  })

  it('maps catalog aliases (PSAT, precalc, both O-Chem courses, CS Principles)', () => {
    expect(dailySetForCourse('psat')).toBe('sat')
    expect(dailySetForCourse('sat-prep')).toBe('sat')
    expect(dailySetForCourse('ap-precalculus')).toBe('precalc')
    expect(dailySetForCourse('organic-chemistry-1')).toBe('ochem')
    expect(dailySetForCourse('organic-chemistry-2')).toBe('ochem')
    expect(dailySetForCourse('ap-cs-principles')).toBe('ap-computer-science-principles')
    expect(dailySetForCourse('ap-computer-science-principles')).toBe('ap-computer-science-principles')
    expect(dailySetForCourse('grade-5-math')).toBeNull()
  })

  it('validates client-supplied set keys', () => {
    expect(isDailySetKey('ap-biology')).toBe(true)
    expect(isDailySetKey('mixed')).toBe(true)
    expect(isDailySetKey('constructor')).toBe(false)
    expect(isDailySetKey('nope')).toBe(false)
    expect(isDailySetKey(undefined)).toBe(false)
    expect(dailySetLabel('ap-biology')).toBe('AP Biology')
  })
})

describe('getDailyQuestions — per-course sets', () => {
  it('serves five questions from the course bank, deterministically', async () => {
    const a = await getDailyQuestions(DAY, 'ap-biology')
    expect(a).toHaveLength(DAILY_CHALLENGE_SIZE)
    expect(new Set(a.map((q) => q.subject))).toEqual(new Set(['AP Biology']))
    // distinct questions, and a valid answer index in the served order
    expect(new Set(a.map((q) => q.question)).size).toBe(a.length)
    for (const q of a) {
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0)
      expect(q.correctAnswer).toBeLessThan(q.options.length)
    }
    // The grader regenerates the identical set (ids, questions, option order)
    const again = await getDailyQuestions(DAY, 'ap-biology')
    expect(again.map((q) => [q.id, q.question, q.options.join('|'), q.correctAnswer])).toEqual(
      a.map((q) => [q.id, q.question, q.options.join('|'), q.correctAnswer]),
    )
  })

  it('round-robins a two-bank course (SAT: Math + Reading & Writing)', async () => {
    const qs = await getDailyQuestions(DAY, 'sat')
    expect(qs).toHaveLength(DAILY_CHALLENGE_SIZE)
    expect(new Set(qs.map((q) => q.subject))).toEqual(new Set(['SAT Math', 'SAT Reading & Writing']))
  })

  it('MCAT students get MCAT questions', async () => {
    const qs = await getDailyQuestions(DAY, 'mcat')
    expect(qs).toHaveLength(DAILY_CHALLENGE_SIZE)
    expect(qs.every((q) => q.subject === 'MCAT')).toBe(true)
  })

  it('keeps the original mixed set (one per bank, legacy ids) as the fallback', async () => {
    const qs = await getDailyQuestions(DAY)
    expect(qs.map((q) => q.id)).toEqual([
      `${DAY}-limits`,
      `${DAY}-derivatives`,
      `${DAY}-integrals`,
      `${DAY}-algebra`,
      `${DAY}-sat-math`,
    ])
    // An unknown set key is treated as the mixed set, never an error
    const unknown = await getDailyQuestions(DAY, 'not-a-set')
    expect(unknown.map((q) => q.id)).toEqual(qs.map((q) => q.id))
  })
})
