/**
 * Competitive bot pacing (owner request 2026-10-22): the bot's clock, the
 * Accuracy Challenge clock and the async-challenge default all flow from one
 * number per question — course exam pacing × item difficulty × item length —
 * so an inverse-derivative item and a one-variable linear equation no longer
 * share a 2.5–4.5 s timer.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import {
  ACCURACY_BOUNDS,
  ASYNC_LIMIT_BOUNDS,
  BOT_STRENGTH_COPY,
  COURSE_BASELINES,
  LEGACY_ACCURACY_LIMIT_SECONDS,
  MAX_LENGTH_FACTOR,
  MIN_BOT_DELAY_SECONDS,
  accuracyChallengeLimitSeconds,
  annotateExpectedSeconds,
  asyncChallengeDefaultLimit,
  botAccuracy,
  botAnswerIndex,
  botAnswerPlan,
  clampAsyncLimit,
  courseKeyForTopic,
  expectedSolveSeconds,
  formatMinutes,
  lengthFactor,
  matchPaceCourseKey,
  matchTimeLimitSeconds,
  planBotMove,
  questionExpectedSeconds,
  type BotMatchView,
  type BotStrength,
  type PaceableQuestion,
} from '@/lib/bot-pacing'

const repoFile = (p: string) => fs.readFileSync(path.join(process.cwd(), p), 'utf8')

// ── Fixtures ────────────────────────────────────────────────────────────
const calcHardLong: PaceableQuestion & { answerIndex: number } = {
  type: 'multiple-choice',
  difficulty: 'hard',
  question:
    'Let $f$ be the function given by $f(x) = x^3 + 3x - 2$ and let $g$ be the inverse of $f$. The table below gives selected values of $f$.\n\n' +
    '| $x$ | 0 | 1 | 2 |\n|---|---|---|---|\n| $f(x)$ | -2 | 2 | 12 |\n\nWhat is the value of $g\'(2)$?',
  options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$6$', '$3$'],
  answerIndex: 0,
}
const calcEasyShort: PaceableQuestion & { answerIndex: number } = {
  type: 'multiple-choice',
  difficulty: 'easy',
  question: 'Find $\\frac{d}{dx}(x^4)$.',
  options: ['$4x^3$', '$x^3$', '$4x^4$', '$3x^4$'],
  answerIndex: 0,
}
const algebraEasyShort: PaceableQuestion & { answerIndex: number } = {
  type: 'multiple-choice',
  difficulty: 'easy',
  question: 'Solve for $x$: $2x + 3 = 11$.',
  options: ['4', '7', '14', '5.5'],
  answerIndex: 0,
}
const unitCircle: PaceableQuestion & { answerIndex: number } = {
  type: 'find-angle',
  prompt: 'Click the position for angle 30°',
  answerIndex: 1,
}
const plain = (difficulty: 'easy' | 'medium' | 'hard', i: number): PaceableQuestion & { answerIndex: number } => ({
  type: 'multiple-choice',
  difficulty,
  question: `Question ${i}: evaluate the expression shown.`,
  options: ['A', 'B', 'C', 'D'],
  answerIndex: i % 4,
})
const mix = (easy: number, medium: number, hard: number) => [
  ...Array.from({ length: easy }, (_, i) => plain('easy', i)),
  ...Array.from({ length: medium }, (_, i) => plain('medium', i)),
  ...Array.from({ length: hard }, (_, i) => plain('hard', i)),
]

/** Deterministic rng that cycles through the given values. */
const seq = (...values: number[]) => {
  let i = 0
  return () => values[i++ % values.length]
}
/** A small LCG so statistical checks are repeatable. */
const lcg = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296
  return seed / 4294967296
}

// ── Baselines ───────────────────────────────────────────────────────────
describe('course baselines', () => {
  it('every baseline documents its source and ranks the courses the owner described', () => {
    for (const [key, b] of Object.entries(COURSE_BASELINES)) {
      expect(b.seconds, key).toBeGreaterThan(0)
      expect(b.source.length, key).toBeGreaterThan(10)
    }
    expect(COURSE_BASELINES['ap-calculus-ab'].seconds).toBe(110)
    expect(COURSE_BASELINES['ap-calculus-bc'].seconds).toBe(110)
    expect(COURSE_BASELINES['algebra-1'].seconds).toBe(40)
    expect(COURSE_BASELINES['pre-algebra'].seconds).toBe(30)
    expect(COURSE_BASELINES['unit-circle'].seconds).toBe(5)
    expect(COURSE_BASELINES['ap-calculus-ab'].seconds).toBeGreaterThan(COURSE_BASELINES['ap-chemistry'].seconds)
    expect(COURSE_BASELINES['ap-chemistry'].seconds).toBeGreaterThan(COURSE_BASELINES['ap-psychology'].seconds)
    expect(COURSE_BASELINES['sat-math'].seconds).toBeGreaterThan(COURSE_BASELINES['sat-rw'].seconds)
    expect(COURSE_BASELINES['act-math'].seconds).toBeGreaterThan(COURSE_BASELINES['act-english'].seconds)
  })
})

// ── Course resolution ───────────────────────────────────────────────────
describe('courseKeyForTopic', () => {
  it('resolves the four calculus slug shapes', () => {
    expect(courseKeyForTopic('ap-calculus-ab')).toBe('ap-calculus-ab')
    expect(courseKeyForTopic('ap-calculus-bc')).toBe('ap-calculus-bc')
    expect(courseKeyForTopic('optimization-calcab')).toBe('ap-calculus-ab') // AP_LESSON_BANK_TOPICS
    expect(courseKeyForTopic('calcbc-sequences-series')).toBe('ap-calculus-bc') // COURSE_GROUPING_LESSONS
    expect(courseKeyForTopic('direct-substitution-method')).toBe('ap-calculus-ab') // CALC_CATEGORIES layout
    expect(courseKeyForTopic('alternating-series-calcbc')).toBe('ap-calculus-bc') // slug convention
  })

  it('resolves a legacy AB bank slug, an algebra slug and the unit circle', () => {
    expect(courseKeyForTopic('power-rule')).toBe('ap-calculus-ab')
    expect(courseKeyForTopic('derivatives')).toBe('ap-calculus-ab')
    expect(courseKeyForTopic('solving-linear-equations-algebra1')).toBe('algebra-1')
    expect(courseKeyForTopic('algebra-1')).toBe('algebra-1')
    expect(courseKeyForTopic('the-unit-circle')).toBe('unit-circle')
    expect(courseKeyForTopic('unit-circle')).toBe('unit-circle')
    expect(courseKeyForTopic(undefined)).toBe('unit-circle')
    expect(courseKeyForTopic('')).toBe('unit-circle')
  })

  it('covers the other course families', () => {
    expect(courseKeyForTopic('ap-bio-photosynthesis')).toBe('ap-biology')
    expect(courseKeyForTopic('physics-c-coulomb-law')).toBe('ap-physics-c-em')
    expect(courseKeyForTopic('physics-c-1d-kinematics')).toBe('ap-physics-c-mech')
    expect(courseKeyForTopic('classical-conditioning')).toBe('ap-psychology')
    expect(courseKeyForTopic('normal-distributions')).toBe('ap-statistics')
    expect(courseKeyForTopic('pythagorean-theorem')).toBe('geometry')
    expect(courseKeyForTopic('sat-math-algebra')).toBe('sat-math')
    expect(courseKeyForTopic('sat-rw-conventions')).toBe('sat-rw')
    expect(courseKeyForTopic('sat')).toBe('sat')
    expect(courseKeyForTopic('mcat-section-chem-phys')).toBe('mcat')
    expect(courseKeyForTopic('act-math')).toBe('act-math')
    expect(courseKeyForTopic('negative-numbers-grade6')).toBe('pre-algebra')
    expect(courseKeyForTopic('ap-physics-c-mechanics')).toBe('ap-physics-c-mech')
  })

  it('does not let a prefix pattern misread an unrelated bank slug', () => {
    // 'act…' and 'sat…' bank slugs from other courses must not become ACT/SAT.
    expect(courseKeyForTopic('activation-energy-arrhenius')).toBe('unknown')
    expect(courseKeyForTopic('saturated-solutions')).toBe('unknown')
    expect(courseKeyForTopic('no-such-topic')).toBe('unknown')
  })

  it('paces a multi-course composite for its slowest course', () => {
    expect(courseKeyForTopic('multi:optimization-calcab,solving-linear-equations-algebra1')).toBe('ap-calculus-ab')
    expect(courseKeyForTopic('multi:solving-linear-equations-algebra1,pythagorean-theorem')).toBe('geometry')
  })

  it('a live match prefers the stored paceCourseKey over the slug', () => {
    expect(matchPaceCourseKey({ topicSlug: 'optimization-calcab', gameData: { paceCourseKey: 'algebra-1' } })).toBe('algebra-1')
    expect(matchPaceCourseKey({ topicSlug: 'optimization-calcab', gameData: { paceCourseKey: 'bogus' } })).toBe('ap-calculus-ab')
    expect(matchPaceCourseKey({ topicSlug: 'optimization-calcab' })).toBe('ap-calculus-ab')
  })
})

// ── Expected solve time ─────────────────────────────────────────────────
describe('expectedSolveSeconds', () => {
  it('a hard long-stem calculus item is at least 6x an easy short Algebra 1 item', () => {
    const calc = expectedSolveSeconds(calcHardLong, 'ap-calculus-ab')
    const alg = expectedSolveSeconds(algebraEasyShort, 'algebra-1')
    expect(alg).toBe(24) // 40 × 0.6 × 1.0
    expect(calc).toBeGreaterThanOrEqual(110 * 1.5 * 1.35)
    expect(calc / alg).toBeGreaterThanOrEqual(6)
  })

  it('applies the difficulty factors', () => {
    expect(expectedSolveSeconds(plain('easy', 0), 'ap-calculus-ab')).toBe(66)
    expect(expectedSolveSeconds(plain('medium', 0), 'ap-calculus-ab')).toBe(110)
    expect(expectedSolveSeconds(plain('hard', 0), 'ap-calculus-ab')).toBe(165)
    expect(expectedSolveSeconds({ question: 'untagged', options: ['a', 'b'] }, 'ap-calculus-ab')).toBe(110)
  })

  it('length factor: long stems, tables/figures, math spans and long options add time, capped at 1.6x', () => {
    expect(lengthFactor(plain('medium', 0))).toBe(1)
    expect(lengthFactor({ question: 'x'.repeat(220), options: ['a'] })).toBeCloseTo(1.1, 5)
    expect(lengthFactor({ question: 'see the table\n|---|---|\n', options: ['a'] })).toBeCloseTo(1.25, 5)
    expect(lengthFactor({ question: 'see the figure <svg></svg>', options: ['a'] })).toBeCloseTo(1.25, 5)
    expect(lengthFactor({ question: '$a$ $b$ $c$', options: ['a'] })).toBeCloseTo(1.1, 5)
    expect(lengthFactor({ question: '$a$ $b$ $c$ $d$ $e$ $f$', options: ['a'] })).toBeCloseTo(1.2, 5)
    expect(lengthFactor({ question: 'q', options: ['x'.repeat(50), 'y'.repeat(50)] })).toBeCloseTo(1.1, 5)
    expect(lengthFactor({ question: 'q', options: ['x'.repeat(90)] })).toBeCloseTo(1.2, 5)
    const monster = { question: 'x'.repeat(2000) + ' |---| $a$ $b$ $c$ $d$ $e$ $f$', options: ['y'.repeat(200)] }
    expect(lengthFactor(monster)).toBe(MAX_LENGTH_FACTOR)
    expect(expectedSolveSeconds(monster, 'ap-calculus-ab')).toBe(110 * 1.6)
  })

  it('unit-circle clicks are the 5 s recall item in any course', () => {
    expect(expectedSolveSeconds(unitCircle, 'unit-circle')).toBe(5)
    expect(expectedSolveSeconds(unitCircle, 'ap-calculus-ab')).toBe(5)
  })

  it('an unknown course falls back to 60 s', () => {
    expect(expectedSolveSeconds(plain('medium', 0), 'unknown')).toBe(60)
    expect(expectedSolveSeconds(plain('medium', 0), 'not-a-course')).toBe(60)
  })

  it('a stored expectedSeconds wins over a recomputation; annotate stamps every question', () => {
    expect(questionExpectedSeconds({ ...plain('medium', 0), expectedSeconds: 42 }, 'ap-calculus-ab')).toBe(42)
    expect(questionExpectedSeconds({ ...plain('medium', 0), expectedSeconds: -1 }, 'ap-calculus-ab')).toBe(110)
    expect(questionExpectedSeconds({ ...plain('medium', 0), expectedSeconds: '42' }, 'ap-calculus-ab')).toBe(110)
    const stamped = annotateExpectedSeconds(mix(1, 1, 1), 'algebra-1')
    expect(stamped.map((q) => q.expectedSeconds)).toEqual([24, 40, 60])
    expect(stamped[0]).toMatchObject({ difficulty: 'easy', answerIndex: 0 })
  })
})

// ── Bot plan ────────────────────────────────────────────────────────────
describe('botAnswerPlan', () => {
  const strengths: BotStrength[] = ['easy', 'medium', 'hard']

  it('calc hard item vs algebra easy item, at every strength (worked examples)', () => {
    const rows = strengths.map((s) => ({
      s,
      calc: botAnswerPlan(calcHardLong, 'ap-calculus-ab', s, seq(0.5, 0.5, 0.5)).delayMs,
      alg: botAnswerPlan(algebraEasyShort, 'algebra-1', s, seq(0.5, 0.5, 0.5)).delayMs,
    }))
    for (const r of rows) {
      expect(r.calc / r.alg, r.s).toBeGreaterThanOrEqual(6)
      expect(r.alg, r.s).toBeGreaterThanOrEqual(MIN_BOT_DELAY_SECONDS * 1000)
    }
    // Easy bot is slower than the expected time, hard bot faster.
    const calcExpected = expectedSolveSeconds(calcHardLong, 'ap-calculus-ab') * 1000
    expect(rows[0].calc).toBeGreaterThan(calcExpected)
    expect(rows[2].calc).toBeLessThan(calcExpected)
  })

  it('orders strengths: easy slower than medium slower than hard, for the same draw', () => {
    for (const q of [calcHardLong, calcEasyShort, plain('medium', 0)]) {
      const [e, m, h] = strengths.map((s) => botAnswerPlan(q, 'ap-calculus-ab', s, seq(0.5, 0.9)).delayMs)
      expect(e).toBeGreaterThan(m)
      expect(m).toBeGreaterThan(h)
    }
  })

  it('stays inside the strength bands, never under 3 s, never over 3x expected', () => {
    const rng = lcg(7)
    const bands = { easy: [1.15, 1.6 + 0.5], medium: [0.75, 1.05], hard: [0.5, 0.7] } as const
    for (const s of strengths) {
      for (let i = 0; i < 3000; i++) {
        const q = [calcHardLong, calcEasyShort, algebraEasyShort, plain('medium', i)][i % 4]
        const plan = botAnswerPlan(q, i % 2 ? 'ap-calculus-ab' : 'algebra-1', s, rng)
        const factor = plan.delayMs / 1000 / plan.expectedSeconds
        expect(plan.delayMs).toBeGreaterThanOrEqual(MIN_BOT_DELAY_SECONDS * 1000)
        expect(plan.delayMs).toBeLessThanOrEqual(3 * plan.expectedSeconds * 1000 + 1)
        if (plan.delayMs > MIN_BOT_DELAY_SECONDS * 1000) {
          expect(factor).toBeGreaterThanOrEqual(bands[s][0] - 1e-9)
          expect(factor).toBeLessThanOrEqual(bands[s][1] + 1e-9)
        }
      }
    }
  })

  it('the easy bot sometimes stalls, the others never do', () => {
    const rng = lcg(3)
    const slow = (s: BotStrength) => {
      let n = 0
      for (let i = 0; i < 2000; i++) {
        const p = botAnswerPlan(plain('medium', i), 'ap-calculus-ab', s, rng)
        if (p.delayMs / 1000 / p.expectedSeconds > 1.6) n++
      }
      return n
    }
    expect(slow('easy')).toBeGreaterThan(100)
    expect(slow('medium')).toBe(0)
    expect(slow('hard')).toBe(0)
  })

  it('the floor binds on the unit circle for a hard bot; the cap binds on a tiny stored expectation', () => {
    const hardUnit = botAnswerPlan(unitCircle, 'unit-circle', 'hard', seq(0, 0.5))
    expect(hardUnit.delayMs).toBe(3000) // 5 s × 0.5 = 2.5 s → floor
    const tiny = botAnswerPlan({ ...plain('medium', 0), expectedSeconds: 2 }, 'algebra-1', 'easy', seq(1, 0, 0.5))
    expect(tiny.delayMs).toBeLessThanOrEqual(6000) // 3 × 2 s
    expect(tiny.delayMs).toBeGreaterThanOrEqual(3000)
  })

  it('within one match the bot takes longer on hard items than on easy ones', () => {
    const rng = lcg(11)
    for (const s of strengths) {
      let hardTotal = 0
      let easyTotal = 0
      for (let i = 0; i < 500; i++) {
        hardTotal += botAnswerPlan(plain('hard', i), 'ap-calculus-ab', s, rng).delayMs
        easyTotal += botAnswerPlan(plain('easy', i), 'ap-calculus-ab', s, rng).delayMs
      }
      expect(hardTotal / easyTotal).toBeGreaterThan(1.8)
      // And deterministically, for the same draw:
      expect(botAnswerPlan(plain('hard', 0), 'ap-calculus-ab', s, seq(0.3, 0.9)).delayMs)
        .toBeGreaterThan(botAnswerPlan(plain('easy', 0), 'ap-calculus-ab', s, seq(0.3, 0.9)).delayMs)
    }
  })

  it('accuracy: base by strength, shifted by item difficulty, clamped', () => {
    expect(botAccuracy(plain('medium', 0), 'easy')).toBe(0.7)
    expect(botAccuracy(plain('medium', 0), 'medium')).toBe(0.83)
    expect(botAccuracy(plain('medium', 0), 'hard')).toBe(0.95)
    expect(botAccuracy(plain('easy', 0), 'easy')).toBe(0.77)
    expect(botAccuracy(plain('easy', 0), 'medium')).toBe(0.9)
    expect(botAccuracy(plain('easy', 0), 'hard')).toBe(ACCURACY_BOUNDS.max) // 1.02 clamped to 0.98
    expect(botAccuracy(plain('hard', 0), 'easy')).toBe(0.58)
    expect(botAccuracy(plain('hard', 0), 'medium')).toBe(0.71)
    expect(botAccuracy(plain('hard', 0), 'hard')).toBe(0.89)
    // The draw honours it: rng below → correct, above → wrong.
    expect(botAnswerPlan(plain('hard', 0), 'ap-calculus-ab', 'medium', seq(0.5, 0.70)).correct).toBe(true)
    expect(botAnswerPlan(plain('hard', 0), 'ap-calculus-ab', 'medium', seq(0.5, 0.72)).correct).toBe(false)
    // Over many draws the hit rate tracks the accuracy.
    const rng = lcg(5)
    let hits = 0
    for (let i = 0; i < 4000; i++) if (botAnswerPlan(plain('hard', i), 'ap-calculus-ab', 'medium', rng).correct) hits++
    expect(hits / 4000).toBeGreaterThan(0.67)
    expect(hits / 4000).toBeLessThan(0.75)
  })

  it('unknown strengths behave as medium', () => {
    expect(botAnswerPlan(plain('medium', 0), 'algebra-1', 'ultra', seq(0.5, 0.5)).delayMs)
      .toBe(botAnswerPlan(plain('medium', 0), 'algebra-1', 'medium', seq(0.5, 0.5)).delayMs)
  })

  it('botAnswerIndex returns the key when correct and a different option when wrong', () => {
    expect(botAnswerIndex(calcHardLong, true)).toBe(0)
    const rng = lcg(9)
    for (let i = 0; i < 200; i++) {
      const idx = botAnswerIndex(calcHardLong, false, rng)
      expect(idx).not.toBe(0)
      expect(idx).toBeLessThan(4)
    }
    // Unit-circle items have 16 positions and no options array.
    for (let i = 0; i < 200; i++) {
      const idx = botAnswerIndex(unitCircle, false, rng)
      expect(idx).not.toBe(1)
      expect(idx).toBeLessThan(16)
    }
  })
})

// ── The match page's decision ───────────────────────────────────────────
describe('planBotMove (the match page bot effect)', () => {
  const base: BotMatchView = {
    status: 'IN_PROGRESS',
    player1Id: 'me',
    player2Id: 'bot',
    player2IsAI: true,
    player1QuestionIndex: 0,
    player2QuestionIndex: 2,
    questions: [calcEasyShort, plain('medium', 1), calcHardLong, algebraEasyShort],
    topicSlug: 'optimization-calcab',
    gameData: { aiDifficulty: 'medium', paceCourseKey: 'ap-calculus-ab' },
  }

  it('plans the opponent bot’s current question with the stored course and strength', () => {
    const move = planBotMove(base, 'me', 0, seq(0.5, 0.5, 0.5))
    expect(move).not.toBeNull()
    expect(move!.playerId).toBe('bot')
    expect(move!.questionIndex).toBe(2)
    expect(move!.freezeWaitMs).toBe(0)
    expect(move!.delayMs).toBe(botAnswerPlan(calcHardLong, 'ap-calculus-ab', 'medium', seq(0.5, 0.5, 0.5)).delayMs)
    expect(move!.correct).toBe(true)
    expect(move!.answerIndex).toBe(0)
  })

  it('a wrong plan submits a different option', () => {
    const move = planBotMove(base, 'me', 0, seq(0.5, 0.99, 0.4))
    expect(move!.correct).toBe(false)
    expect(move!.answerIndex).not.toBe(0)
  })

  it('returns null when there is no bot, the match is over, or the bot is out of questions', () => {
    expect(planBotMove({ ...base, player2IsAI: false }, 'me')).toBeNull()
    expect(planBotMove({ ...base, status: 'COMPLETED' }, 'me')).toBeNull()
    expect(planBotMove({ ...base, player2QuestionIndex: 4 }, 'me')).toBeNull()
    // The viewer IS the bot slot's opponent only when the other side is AI.
    expect(planBotMove({ ...base, player1IsAI: true, player2IsAI: false }, 'me')).toBeNull()
  })

  it('works when the viewer is player 2 and the bot is player 1', () => {
    const move = planBotMove({ ...base, player1Id: 'bot', player2Id: 'me', player1IsAI: true, player2IsAI: false, player1QuestionIndex: 3 }, 'me', 0, seq(0.5, 0.5, 0.5))
    expect(move!.playerId).toBe('bot')
    expect(move!.questionIndex).toBe(3)
    // Algebra item in a calculus match still paces as the match's course.
    expect(move!.delayMs).toBe(botAnswerPlan(algebraEasyShort, 'ap-calculus-ab', 'medium', seq(0.5, 0.5, 0.5)).delayMs)
  })

  it('keeps the Freeze power-up: the bot waits out the remaining freeze', () => {
    const now = 1_000_000
    const frozen: BotMatchView = {
      ...base,
      gameData: {
        ...base.gameData,
        powerUps: { player2: { effects: [{ type: 'freeze', startedAt: now - 2000, durationMs: 8000 }] } },
      },
    }
    const plain1 = planBotMove(base, 'me', now, seq(0.5, 0.5, 0.5))!
    const move = planBotMove(frozen, 'me', now, seq(0.5, 0.5, 0.5))!
    expect(move.freezeWaitMs).toBe(6000)
    expect(move.delayMs).toBe(plain1.delayMs + 6000)
    // An expired freeze adds nothing.
    const expired = { ...frozen, gameData: { ...frozen.gameData, powerUps: { player2: { effects: [{ type: 'freeze', startedAt: now - 20000, durationMs: 8000 }] } } } }
    expect(planBotMove(expired, 'me', now, seq(0.5, 0.5, 0.5))!.freezeWaitMs).toBe(0)
  })

  it('falls back to the topic slug for matches created before paceCourseKey was stored', () => {
    const legacy = { ...base, gameData: { aiDifficulty: 'medium' } }
    expect(planBotMove(legacy, 'me', 0, seq(0.5, 0.5, 0.5))!.delayMs)
      .toBe(botAnswerPlan(calcHardLong, 'ap-calculus-ab', 'medium', seq(0.5, 0.5, 0.5)).delayMs)
    const algebraMatch = { ...legacy, topicSlug: 'solving-linear-equations-algebra1' }
    expect(planBotMove(algebraMatch, 'me', 0, seq(0.5, 0.5, 0.5))!.delayMs)
      .toBe(botAnswerPlan(calcHardLong, 'algebra-1', 'medium', seq(0.5, 0.5, 0.5)).delayMs)
  })
})

// ── Match clocks ────────────────────────────────────────────────────────
describe('challenge clocks', () => {
  it('20 calculus items land in 30–45 minutes', () => {
    const mediumTier = accuracyChallengeLimitSeconds(mix(6, 14, 0), 'ap-calculus-ab')
    const hardTier = accuracyChallengeLimitSeconds(mix(4, 6, 10), 'ap-calculus-ab')
    const allMedium = accuracyChallengeLimitSeconds(mix(0, 20, 0), 'ap-calculus-ab')
    for (const limit of [mediumTier, hardTier, allMedium]) {
      expect(limit).toBeGreaterThanOrEqual(30 * 60)
      expect(limit).toBeLessThanOrEqual(45 * 60)
      expect(limit % 60).toBe(0)
    }
    expect(mediumTier).toBe(38 * 60) // ×1.15 headroom → 2,226 s → 38 min; 6×66 + 14×110 = 1936 s → 33 min
    expect(hardTier).toBe(45 * 60) // ×1.15 headroom → 2,960 s → capped 45 min; 4×66 + 6×110 + 10×165 = 2574 s → 43 min
  })

  it('20 Algebra 1 items land near 15 minutes', () => {
    const allMedium = accuracyChallengeLimitSeconds(mix(0, 20, 0), 'algebra-1')
    expect(allMedium).toBe(16 * 60) // ×1.15 headroom → 920 s → 16 min; 20×40 = 800 s → 14 min
    const mediumTier = accuracyChallengeLimitSeconds(mix(6, 14, 0), 'algebra-1')
    expect(mediumTier).toBeGreaterThanOrEqual(12 * 60)
    expect(mediumTier).toBeLessThanOrEqual(16 * 60)
  })

  it('floors at 5 minutes and caps at 45', () => {
    expect(accuracyChallengeLimitSeconds(mix(0, 3, 0), 'algebra-1')).toBe(5 * 60)
    expect(accuracyChallengeLimitSeconds(Array.from({ length: 20 }, () => unitCircle), 'unit-circle')).toBe(5 * 60)
    expect(accuracyChallengeLimitSeconds(mix(0, 0, 20).map((q) => ({ ...q, question: 'x'.repeat(1000) })), 'ap-calculus-ab')).toBe(45 * 60)
  })

  it('uses stored expectedSeconds when the questions carry them', () => {
    const stamped = mix(0, 10, 0).map((q) => ({ ...q, expectedSeconds: 100 }))
    expect(accuracyChallengeLimitSeconds(stamped, 'algebra-1')).toBe(20 * 60) // 1000 s × 1.15 = 1,150 s → 20 min, not 10×40
  })

  it('async default: same shape, clamped to [60 s, 45 min]', () => {
    expect(asyncChallengeDefaultLimit(mix(0, 10, 0), 'algebra-1')).toBe(8 * 60) // 400 s × 1.15 = 460 s → 8 min
    expect(asyncChallengeDefaultLimit(mix(0, 10, 0), 'ap-calculus-ab')).toBe(22 * 60) // 1,100 s × 1.15 = 1,265 s → 22 min
    expect(asyncChallengeDefaultLimit([unitCircle], 'unit-circle')).toBe(ASYNC_LIMIT_BOUNDS.min)
    expect(asyncChallengeDefaultLimit(mix(0, 0, 20).map((q) => ({ ...q, question: 'x'.repeat(1000) })), 'ap-calculus-ab')).toBe(ASYNC_LIMIT_BOUNDS.max)
    expect(clampAsyncLimit(10)).toBe(60)
    expect(clampAsyncLimit(900)).toBe(900)
    expect(clampAsyncLimit(5000)).toBe(2700)
  })

  it('a stored match reads its own clock, older matches keep the legacy 5 minutes', () => {
    expect(matchTimeLimitSeconds({ timeLimitSeconds: 1980 })).toBe(1980)
    expect(matchTimeLimitSeconds({})).toBe(LEGACY_ACCURACY_LIMIT_SECONDS)
    expect(matchTimeLimitSeconds(undefined)).toBe(300)
    expect(matchTimeLimitSeconds({ timeLimitSeconds: 0 })).toBe(300)
    expect(matchTimeLimitSeconds({ timeLimitSeconds: '1980' })).toBe(300)
    expect(formatMinutes(1980)).toBe('33 min')
    expect(formatMinutes(90)).toBe('1.5 min')
  })
})

// ── Copy + wiring guards ────────────────────────────────────────────────
describe('surfaces', () => {
  it('bot strength copy talks about the problems, not seconds', () => {
    for (const { label, desc } of Object.values(BOT_STRENGTH_COPY)) {
      expect(label.length).toBeGreaterThan(0)
      expect(desc).toMatch(/student/)
      expect(desc).toMatch(/%/)
      expect(desc).not.toMatch(/\d+\s*(s|sec|seconds?)\b/)
    }
  })

  it('the match and team pages run the bot from bot-pacing, with no inline timing table left', () => {
    const match = repoFile('src/app/competitive/match/[id]/page.tsx')
    expect(match).toContain("from '@/lib/bot-pacing'")
    expect(match).toContain('planBotMove(')
    expect(match).toContain('matchTimeLimitSeconds(matchState.gameData)')
    expect(match).not.toContain('difficultySettings')
    expect(match).not.toMatch(/5 \* 60/)
    const team = repoFile('src/app/competitive/team-match/[id]/page.tsx')
    expect(team).toContain('botAnswerPlan(')
    expect(team).not.toContain('difficultySettings')
    const legacy = repoFile('src/lib/ai-opponent.ts')
    expect(legacy).not.toContain('export function simulateAIAnswer')
    expect(legacy).not.toContain('minResponseTime')
  })

  it('the server enforces the stored clock and every match creator stamps pacing', () => {
    for (const f of ['src/app/api/competitive/match/[id]/answer/route.ts', 'src/app/api/competitive/match/[id]/complete/route.ts']) {
      const src = repoFile(f)
      expect(src, f).toContain('matchTimeLimitSeconds(')
      expect(src, f).not.toMatch(/5 \* 60 \* 1000/)
    }
    for (const f of [
      'src/app/api/competitive/queue/route.ts',
      'src/app/api/competitive/practice-ai/route.ts',
      'src/app/api/competitive/team-queue/route.ts',
      'src/app/api/competitive/lobby/[code]/start/route.ts',
    ]) {
      const src = repoFile(f)
      expect(src, f).toContain('paceMatchQuestions(')
      // One pacing spread per draw: every created match carries paceCourseKey.
      expect(src.match(/\.\.\.pacing,/g)?.length ?? 0, f).toBe(src.match(/generateMatchQuestions\(/g)!.length)
    }
    expect(repoFile('src/app/api/competitive/async-challenge/route.ts')).toContain('paceAsyncChallenge(')
    // The async button no longer forces 300 s, so the derived default applies.
    const button = repoFile('src/components/AsyncChallengeButton.tsx')
    expect(button).not.toContain('timeLimit = 300')
    expect(repoFile('src/app/competitive/lobby/[code]/page.tsx')).not.toContain('in 5 minutes')
  })
})
