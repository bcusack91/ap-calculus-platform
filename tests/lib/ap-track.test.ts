/**
 * AP difficulty tracks (Phase 2 gap 7, routing only): placement from the
 * latest diagnostic, the exit-quiz difficulty mix per track (with the
 * small-pool and short-tier fallbacks), the plan ordering, and the replay of a
 * tracked exit quiz through the review resolver.
 */
import { describe, it, expect } from 'vitest'
import {
  AP_TRACK_COURSES,
  AP_TRACK_MIX,
  AP_TRACK_THRESHOLDS,
  apDiagnosticPercent,
  apTrackForPercent,
  apTrackFromResults,
  apTrackPlacement,
  compareTrackMixes,
  isApTrackCourse,
  orderTopicsForTrack,
  parseApTrack,
} from '@/lib/ap-track'
import { AP_SCORE_CUTOFFS, apScoreRange } from '@/lib/ap-scoring'
import { drawTrackMix, isTrackMix, type ExitQuizTier } from '@/data/exit-quizzes/track-mix'
import { generateExitQuiz } from '@/data/exit-quizzes'
import { apChemQuestionPool } from '@/data/exit-quizzes/ap-chemistry'
import { apPhysics1QuestionPool } from '@/data/exit-quizzes/ap-physics-1'
import { calcABQuestionPool } from '@/data/exit-quizzes/ap-calculus-ab'
import { apBioQuestionPool } from '@/data/exit-quizzes/ap-biology'
import { relevantPool } from '@/data/exit-quizzes/relevance-fallback'
import { regradeExitQuizAttempt, regradeExitQuizSeeded } from '@/lib/exit-quiz-regrade'
import { exitReviewItems } from '@/lib/question-sources/exit'
import { shuffleOptions } from '@/lib/shuffle-options'

/* ------------------------------------------------------------------ */
/*  Placement                                                          */
/* ------------------------------------------------------------------ */

describe('AP track placement', () => {
  it('takes its thresholds from the shared 1–5 cutoffs (Foundation under the 3 line, 5-track at the 4 line)', () => {
    const at = (s: number) => AP_SCORE_CUTOFFS.find((c) => c.score === s)!.minPercent
    expect(AP_TRACK_THRESHOLDS).toEqual({ foundationBelow: at(3), fiveAtOrAbove: at(4) })
    expect(AP_TRACK_THRESHOLDS).toEqual({ foundationBelow: 43, fiveAtOrAbove: 57 })
  })

  it('places by percent: Foundation below 43, Regular 43–56, 5-track from 57 (an estimated 4 or 5)', () => {
    expect(apTrackForPercent(0)).toBe('foundation')
    expect(apTrackForPercent(42)).toBe('foundation')
    expect(apTrackForPercent(43)).toBe('regular')
    expect(apTrackForPercent(50)).toBe('regular')
    expect(apTrackForPercent(56)).toBe('regular')
    expect(apTrackForPercent(57)).toBe('five')
    expect(apTrackForPercent(69)).toBe('five')
    expect(apTrackForPercent(70)).toBe('five')
    expect(apTrackForPercent(100)).toBe('five')
  })

  it('agrees with the estimate a diagnostic shows at every raw score (33-question sitting)', () => {
    const seen = new Set<string>()
    for (let c = 0; c <= 33; c++) {
      const shown = apScoreRange(c, 33).score
      const placed = apTrackFromResults({ totalCorrect: c, totalQuestions: 33, percentage: Math.round((c / 33) * 100) })
      expect(placed.estimatedScore).toBe(shown)
      expect(placed.track).toBe(shown <= 2 ? 'foundation' : shown >= 4 ? 'five' : 'regular')
      seen.add(`${shown}:${placed.track}`)
    }
    // Every estimate occurs in the sweep, and a 4 lands on the 5-track.
    expect([...seen].sort()).toEqual(['1:foundation', '2:foundation', '3:regular', '4:five', '5:five'])
  })

  it('a 4 is on the 5-track and the hub line names the estimate it came from', () => {
    const four = apTrackFromResults({ totalCorrect: 20, totalQuestions: 33, percentage: 61 })
    expect(four).toMatchObject({ track: 'five', estimatedScore: 4, source: 'diagnostic', override: null })
    expect(four.explanation).toMatch(/^Your last diagnostic estimated a 4, so your exit quizzes lean toward medium and hard/)
    const five = apTrackFromResults({ totalCorrect: 25, totalQuestions: 33, percentage: 76 })
    expect(five.estimatedScore).toBe(5)
    expect(five.explanation).toMatch(/^Your last diagnostic estimated a 5, so your exit quizzes lean toward medium and hard/)
    const three = apTrackFromResults({ totalCorrect: 16, totalQuestions: 33, percentage: 48 })
    expect(three).toMatchObject({ track: 'regular', estimatedScore: 3 })
    expect(three.explanation).toMatch(/^Your last diagnostic estimated a 3, so your exit quizzes use the standard mix/)
  })

  it('reads v1 forms and v2 sittings alike, and re-estimates instead of trusting a stored old-cutoff score', () => {
    // v1 attempt stored before Oct 2026: 72% was a "3" under the old 80/65/50/35 cutoffs.
    const v1 = { form: 4, totalCorrect: 24, totalQuestions: 33, percentage: 73, estimatedAPScore: 3, recommendedTopics: [] }
    expect(apTrackFromResults(v1)).toMatchObject({ track: 'five', source: 'diagnostic', estimatedScore: 5, mix: 'five-mix' })
    const v2 = { version: 2, totalCorrect: 12, totalQuestions: 33, percentage: 36, estimatedAPScore: 2, scoreRange: { low: 2, high: 3 } }
    expect(apTrackFromResults(v2)).toMatchObject({ track: 'foundation', estimatedScore: 2, mix: 'foundation-mix' })
    // Only a percentage (no raw counts).
    expect(apDiagnosticPercent({ percentage: 50 })).toBe(50)
    expect(apTrackFromResults({ percentage: 50 }).track).toBe('regular')
  })

  it('is Regular with no readable diagnostic', () => {
    for (const r of [null, undefined, {}, { recommendedTopics: [] }, { percentage: 'high' }, 'x']) {
      expect(apTrackFromResults(r)).toMatchObject({ track: 'regular', source: 'default', mix: undefined, percent: null, override: null })
    }
  })

  it('a teacher override beats the diagnostic in both directions, and says so', () => {
    const fiveResults = { totalCorrect: 28, totalQuestions: 33, percentage: 85 }
    const down = apTrackPlacement(fiveResults, 'foundation')
    expect(down).toMatchObject({ track: 'foundation', mix: 'foundation-mix', source: 'teacher', override: 'foundation', percent: 85, estimatedScore: 5 })
    expect(down.explanation).toMatch(/^Your teacher set your track to Foundation, so your exit quizzes lean toward easy and medium/)
    const up = apTrackPlacement({ percentage: 20 }, 'five')
    expect(up).toMatchObject({ track: 'five', mix: 'five-mix', source: 'teacher', override: 'five', estimatedScore: 1 })
    expect(up.explanation).toMatch(/^Your teacher set your track to 5-track, so/)
    // Pinned to Regular with no diagnostic: still 'teacher', not the "take the diagnostic" line.
    const pinnedRegular = apTrackPlacement(null, 'regular')
    expect(pinnedRegular).toMatchObject({ track: 'regular', mix: undefined, source: 'teacher', override: 'regular', percent: null })
    expect(pinnedRegular.explanation).toMatch(/^Your teacher set your track to Regular, so your exit quizzes use the standard mix/)
    // No override = the computed placement, exactly.
    expect(apTrackPlacement(fiveResults, null)).toEqual(apTrackFromResults(fiveResults))
    expect(apTrackPlacement(fiveResults, undefined)).toEqual(apTrackFromResults(fiveResults))
  })

  it('parses stored override strings strictly', () => {
    expect(parseApTrack('foundation')).toBe('foundation')
    expect(parseApTrack('regular')).toBe('regular')
    expect(parseApTrack('five')).toBe('five')
    for (const bad of ['five-mix', 'Foundation', '', null, undefined, 5, {}]) expect(parseApTrack(bad)).toBeNull()
  })

  it('ranks the gating mixes: foundation-mix < untracked (Regular) < five-mix', () => {
    expect(compareTrackMixes('foundation-mix', undefined)).toBeLessThan(0)
    expect(compareTrackMixes('foundation-mix', 'five-mix')).toBeLessThan(0)
    expect(compareTrackMixes(undefined, 'five-mix')).toBeLessThan(0)
    expect(compareTrackMixes('five-mix', undefined)).toBeGreaterThan(0)
    expect(compareTrackMixes('five-mix', 'foundation-mix')).toBeGreaterThan(0)
    expect(compareTrackMixes(undefined, undefined)).toBe(0)
    expect(compareTrackMixes('foundation-mix', 'foundation-mix')).toBe(0)
  })

  it('gives Regular the untracked draw and the other two a mix', () => {
    expect(AP_TRACK_MIX).toEqual({ foundation: 'foundation-mix', regular: undefined, five: 'five-mix' })
    expect(isTrackMix('foundation-mix') && isTrackMix('five-mix')).toBe(true)
    expect(isTrackMix('easy') || isTrackMix('hard') || isTrackMix(undefined)).toBe(false)
  })

  it('is switched on for the four flagships only', () => {
    expect([...AP_TRACK_COURSES].sort()).toEqual(['ap-biology', 'ap-calculus-ab', 'ap-chemistry', 'ap-physics-1'])
    expect(isApTrackCourse('ap-statistics')).toBe(false)
    expect(isApTrackCourse('sat-prep')).toBe(false)
    expect(isApTrackCourse(undefined)).toBe(false)
  })
})

/* ------------------------------------------------------------------ */
/*  The difficulty mix (pure draw)                                     */
/* ------------------------------------------------------------------ */

type Item = { id: string; difficulty?: ExitQuizTier }
const items = (tier: ExitQuizTier | undefined, n: number, tag = tier ?? 'none'): Item[] =>
  Array.from({ length: n }, (_, i) => ({ id: `${tag}-${i}`, difficulty: tier }))
const tally = (drawn: Item[]) => {
  const t = { easy: 0, medium: 0, hard: 0 }
  for (const q of drawn) t[q.difficulty ?? 'medium']++
  return t
}
const draw = (pool: Item[], count: number, mix: 'foundation-mix' | 'five-mix') => drawTrackMix(pool, count, mix, (q) => q.difficulty)

function withSeed<T>(seed: number, fn: () => T): T {
  let a = seed >>> 0
  const real = Math.random
  Math.random = () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  try { return fn() } finally { Math.random = real }
}

describe('drawTrackMix', () => {
  const balanced = [...items('easy', 6), ...items('medium', 6), ...items('hard', 6)]

  it('Foundation: half easy, half medium, no hard when easy + medium can fill it', () => {
    expect(tally(draw(balanced, 10, 'foundation-mix'))).toEqual({ easy: 5, medium: 5, hard: 0 })
  })

  it('5-track: half medium, half hard, no easy when medium + hard can fill it', () => {
    expect(tally(draw(balanced, 10, 'five-mix'))).toEqual({ easy: 0, medium: 5, hard: 5 })
  })

  it('tops up a short tier in the track\'s order, so the quiz keeps its full size', () => {
    // Typical AP topic: hard is scarce.
    const scarceHard = [...items('easy', 8), ...items('medium', 7), ...items('hard', 1)]
    expect(tally(draw(scarceHard, 10, 'five-mix'))).toEqual({ easy: 2, medium: 7, hard: 1 })
    // Few easy items: Foundation fills with medium before it touches hard.
    const scarceEasy = [...items('easy', 3), ...items('medium', 8), ...items('hard', 5)]
    expect(tally(draw(scarceEasy, 10, 'foundation-mix'))).toEqual({ easy: 3, medium: 7, hard: 0 })
    // One tier only: still a full quiz.
    expect(draw(items('easy', 15), 10, 'five-mix')).toHaveLength(10)
    expect(draw(items('hard', 15), 10, 'foundation-mix')).toHaveLength(10)
  })

  it('serves the whole pool, without repeats, when the pool is smaller than the quiz', () => {
    const small = [...items('easy', 2), ...items('medium', 2), ...items('hard', 2)]
    for (const mix of ['foundation-mix', 'five-mix'] as const) {
      const drawn = draw(small, 10, mix)
      expect(drawn).toHaveLength(6)
      expect(new Set(drawn.map((q) => q.id)).size).toBe(6)
    }
    expect(draw([], 10, 'five-mix')).toEqual([])
  })

  it('never repeats an item and counts untagged items as medium', () => {
    const untagged = [...items('easy', 6), ...items(undefined, 6), ...items('hard', 6)]
    const drawn = draw(untagged, 10, 'foundation-mix')
    expect(new Set(drawn.map((q) => q.id)).size).toBe(10)
    expect(tally(drawn)).toEqual({ easy: 5, medium: 5, hard: 0 })
  })

  it('is deterministic under a seeded Math.random', () => {
    const a = withSeed(42, () => draw(balanced, 10, 'five-mix').map((q) => q.id))
    const b = withSeed(42, () => draw(balanced, 10, 'five-mix').map((q) => q.id))
    expect(a).toEqual(b)
  })
})

/* ------------------------------------------------------------------ */
/*  The real AP exit pools through generateExitQuiz                    */
/* ------------------------------------------------------------------ */

type PoolItem = { question: string; options: string[]; difficulty: ExitQuizTier; topicSlug: string }
const FLAGSHIP_TOPICS: { course: string; topic: string; pool: PoolItem[] }[] = [
  { course: 'ap-chemistry', topic: 'oxidation-reduction-reactions', pool: apChemQuestionPool },
  { course: 'ap-physics-1', topic: 'collisions', pool: apPhysics1QuestionPool },
  { course: 'ap-calculus-ab', topic: 'volumes-of-revolution-calcab', pool: calcABQuestionPool },
  // Every water-properties item carries an authored tag, so apBioQuestionPool's tier is the real one.
  { course: 'ap-biology', topic: 'water-properties', pool: apBioQuestionPool },
]

describe('tracked exit quizzes on the AP flagship pools', () => {
  for (const { course, topic, pool } of FLAGSHIP_TOPICS) {
    const topicPool = relevantPool(pool, topic)
    const tierOf = new Map(topicPool.map((q) => [q.question, q.difficulty]))
    const avail = { easy: 0, medium: 0, hard: 0 }
    for (const q of topicPool) avail[q.difficulty]++

    it(`${course}: same size as the untracked quiz, leaning by track`, async () => {
      for (let seed = 1; seed <= 20; seed++) {
        const regular = await generateExitQuiz(topic, 10, undefined, seed)
        const foundation = await generateExitQuiz(topic, 10, 'foundation-mix', seed)
        const five = await generateExitQuiz(topic, 10, 'five-mix', seed)
        expect(foundation).toHaveLength(regular.length)
        expect(five).toHaveLength(regular.length)
        const t = (qs: { question: string }[]) => {
          const out = { easy: 0, medium: 0, hard: 0 }
          for (const q of qs) out[tierOf.get(q.question)!]++
          return out
        }
        const f = t(foundation)
        const v = t(five)
        // Foundation takes no hard item while easy + medium can fill the quiz.
        if (avail.easy + avail.medium >= 10) expect(f.hard).toBe(0)
        // 5-track takes every hard item up to half the quiz, and no easy while medium + hard can fill it.
        expect(v.hard).toBe(Math.min(avail.hard, 5))
        if (avail.medium + avail.hard >= 10) expect(v.easy).toBe(0)
        expect(v.hard).toBeGreaterThanOrEqual(f.hard)
        expect(f.easy).toBeGreaterThanOrEqual(v.easy)
      }
    })
  }

  it('leaves a tiered-practice difficulty untouched on the AP pools (old attempts replay as before)', async () => {
    for (const { topic } of FLAGSHIP_TOPICS) {
      for (const tier of ['easy', 'medium', 'hard'] as const) {
        expect(await generateExitQuiz(topic, 10, tier, 7)).toEqual(await generateExitQuiz(topic, 10, undefined, 7))
      }
    }
  })

  it('drops a track mix for a pool that does not honour it (SAT), at generation and so at replay', async () => {
    for (const seed of [3, 11]) {
      expect(await generateExitQuiz('sat-circles', 10, 'five-mix', seed)).toEqual(await generateExitQuiz('sat-circles', 10, undefined, seed))
      expect(await generateExitQuiz('sat-circles', 10, 'foundation-mix', seed)).toEqual(await generateExitQuiz('sat-circles', 10, undefined, seed))
    }
  })
})

/* ------------------------------------------------------------------ */
/*  Replay of a tracked attempt (submit regrade + /review resolver)    */
/* ------------------------------------------------------------------ */

describe('replaying a tracked exit quiz', () => {
  const topic = 'collisions'

  it('rebuilds exactly the quiz the student saw, from the stored seed and mix', async () => {
    for (const mix of ['foundation-mix', 'five-mix'] as const) {
      const seed = 123456 + (mix === 'five-mix' ? 1 : 0)
      const served = await generateExitQuiz(topic, 10, mix, seed)
      // The client shows options through its seeded shuffle; answer the first
      // five right and the rest wrong.
      const answers = served.map((q, i) => {
        const shown = shuffleOptions(q.options, q.correctIndex, q.id + q.question)
        return { questionId: q.id, selectedAnswer: i < 5 ? shown.correctIndex : (shown.correctIndex + 1) % q.options.length, correct: true }
      })

      // The submit route's seeded regrade: authoritative, nothing left to the client.
      const seeded = await regradeExitQuizSeeded(topic, answers, seed, served.length, mix)
      expect(seeded).not.toBeNull()
      expect(seeded!.resolvedCount).toBe(served.length)
      expect(seeded!.score).toBe(5)

      // The stored attempt (difficulty column = the mix) through the shared path and /review.
      const stored = { topicSlug: topic, answers, totalQuestions: served.length, seed, difficulty: mix, includeLowYield: false }
      const graded = await regradeExitQuizAttempt(topic, answers, stored)
      expect(graded.score).toBe(5)
      const review = await exitReviewItems(stored)
      expect(review).toHaveLength(served.length)
      review.forEach((item, i) => {
        expect(item).not.toBeNull()
        expect(item!.question).toBe(served[i].question)
        const shown = shuffleOptions(served[i].options, served[i].correctIndex, served[i].id + served[i].question)
        expect(item!.options).toEqual(shown.options)
        expect(item!.correctIndex).toBe(shown.correctIndex)
        expect(item!.chosenIndex).toBe(answers[i].selectedAnswer)
      })
    }
  })

  it('needs the stored mix: the same seed drawn untracked is a different quiz', async () => {
    let differs = 0
    for (let seed = 1; seed <= 10; seed++) {
      const tracked = (await generateExitQuiz(topic, 10, 'five-mix', seed)).map((q) => q.id).sort()
      const untracked = (await generateExitQuiz(topic, 10, undefined, seed)).map((q) => q.id).sort()
      if (tracked.join() !== untracked.join()) differs++
    }
    expect(differs).toBeGreaterThan(0)
  })
})

/* ------------------------------------------------------------------ */
/*  Plan ordering                                                      */
/* ------------------------------------------------------------------ */

describe('orderTopicsForTrack', () => {
  // Chemistry units (CED weight midpoints): 1 (8%), 3 (20%), 6 (8%), 8 (13%).
  const topics = [
    { slug: 'acid-base-titrations', priority: 'high' }, // unit 8
    { slug: 'ideal-gas-law', priority: 'medium' }, // unit 3
    { slug: 'enthalpy-calorimetry', priority: 'high' }, // unit 6
    { slug: 'moles-molar-mass', priority: 'high' }, // unit 1
  ]
  const order = (track: 'foundation' | 'regular' | 'five', course = 'ap-chemistry') =>
    orderTopicsForTrack(course, topics, track).map((t) => t.slug)

  it('Regular keeps the given (priority) order', () => {
    expect(order('regular')).toEqual(topics.map((t) => t.slug))
  })

  it('Foundation: weakest first, then the earliest unit', () => {
    expect(order('foundation')).toEqual(['moles-molar-mass', 'enthalpy-calorimetry', 'acid-base-titrations', 'ideal-gas-law'])
  })

  it('5-track: the most heavily weighted unit first', () => {
    expect(order('five')).toEqual(['ideal-gas-law', 'acid-base-titrations', 'moles-molar-mass', 'enthalpy-calorimetry'])
  })

  it('leaves courses without tracks, and unknown topics, in place', () => {
    expect(order('five', 'ap-statistics')).toEqual(topics.map((t) => t.slug))
    const withUnknown = [{ slug: 'not-a-topic', priority: 'high' }, ...topics]
    expect(orderTopicsForTrack('ap-chemistry', withUnknown, 'foundation').map((t) => t.slug).at(-2)).toBe('not-a-topic')
  })
})
