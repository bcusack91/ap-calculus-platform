/**
 * MCAT cycle unit test (owner request 2026-10-03): 25 questions, ~5 per plan
 * topic, 75% to pass, retakes draw unseen questions whenever the pools allow.
 */
import { describe, it, expect } from 'vitest'
import {
  allocateQuestions,
  assembleUnitTest,
  gradeUnitTest,
  rankCandidates,
  unitTestPassed,
  MCAT_UNIT_TEST_PASS_PERCENT,
  MCAT_UNIT_TEST_QUESTIONS,
  type UnitTestCandidate,
} from '@/lib/mcat-unit-test'
import { generateExitQuiz } from '@/data/exit-quizzes'

const cand = (id: string): UnitTestCandidate => ({ id, question: id, options: ['a', 'b', 'c', 'd'], correctIndex: 0, explanation: '' })
const pool = (prefix: string, n: number) => Array.from({ length: n }, (_, i) => cand(`${prefix}${i}`))

describe('pass mark and size', () => {
  it('is 25 questions at 75%', () => {
    expect(MCAT_UNIT_TEST_QUESTIONS).toBe(25)
    expect(MCAT_UNIT_TEST_PASS_PERCENT).toBe(75)
  })

  it('passes at 19/25 and fails at 18/25 (no rounding up to 75%)', () => {
    expect(unitTestPassed(19, 25)).toBe(true)
    expect(unitTestPassed(18, 25)).toBe(false)
    expect(unitTestPassed(15, 20)).toBe(true)
    expect(unitTestPassed(0, 0)).toBe(false)
  })
})

describe('allocateQuestions', () => {
  it('gives 5 topics 5 questions each', () => {
    expect(allocateQuestions(5)).toEqual([5, 5, 5, 5, 5])
  })
  it('splits unevenly with the remainder on the earliest (highest-priority) topics', () => {
    expect(allocateQuestions(3)).toEqual([9, 8, 8])
    expect(allocateQuestions(4)).toEqual([7, 6, 6, 6])
    expect(allocateQuestions(0)).toEqual([])
  })
})

describe('rankCandidates', () => {
  it('orders never-seen, then exit-quiz-seen, then earlier-sitting repeats', () => {
    const ranked = rankCandidates(pool('q', 6), new Set(['q0', 'q1']), new Set(['q2', 'q1']), () => 0.5)
    const band = (id: string) => (['q0', 'q1'].includes(id) ? 2 : id === 'q2' ? 1 : 0)
    const bands = ranked.map((q) => band(q.id))
    expect(bands).toEqual([...bands].sort((a, b) => a - b))
    expect(ranked).toHaveLength(6)
  })
  it('drops duplicate ids', () => {
    expect(rankCandidates([cand('x'), cand('x'), cand('y')], new Set(), new Set())).toHaveLength(2)
  })
})

describe('assembleUnitTest', () => {
  it('takes 5 per topic, grouped in plan order', () => {
    const qs = assembleUnitTest(['a', 'b', 'c', 'd', 'e'].map((s) => ({ slug: s, ranked: pool(s, 40) })))
    expect(qs).toHaveLength(25)
    expect(qs.map((q) => q.topicSlug)).toEqual(['a', 'b', 'c', 'd', 'e'].flatMap((s) => Array(5).fill(s)))
  })
  it('hands a short or empty pool\'s share to the other topics so the test stays at 25', () => {
    const qs = assembleUnitTest([
      { slug: 'a', ranked: pool('a', 40) },
      { slug: 'b', ranked: pool('b', 2) },
      { slug: 'c', ranked: [] },
      { slug: 'd', ranked: pool('d', 40) },
      { slug: 'e', ranked: pool('e', 40) },
    ])
    expect(qs).toHaveLength(25)
    expect(qs.filter((q) => q.topicSlug === 'b')).toHaveLength(2)
    expect(qs.some((q) => q.topicSlug === 'c')).toBe(false)
  })
  it('returns everything available when the pools are smaller than 25 in total', () => {
    expect(assembleUnitTest([{ slug: 'a', ranked: pool('a', 3) }, { slug: 'b', ranked: pool('b', 4) }])).toHaveLength(7)
    expect(assembleUnitTest([{ slug: 'a', ranked: [] }])).toEqual([])
  })
})

describe('gradeUnitTest', () => {
  it('scores per topic and applies the 75% mark', () => {
    const questions = Array.from({ length: 25 }, (_, i) => ({ correctIndex: 1, topicSlug: `t${Math.floor(i / 5)}` }))
    const answers = questions.map((_, i) => (i < 19 ? 1 : i === 24 ? null : 0))
    const g = gradeUnitTest(questions, answers)
    expect(g).toMatchObject({ correct: 19, total: 25, percentage: 76, passed: true })
    expect(g.byTopic.t0).toEqual({ correct: 5, total: 5 })
    expect(g.byTopic.t3).toEqual({ correct: 4, total: 5 })
    expect(g.byTopic.t4).toEqual({ correct: 0, total: 5 })
    expect(gradeUnitTest(questions, questions.map((_, i) => (i < 18 ? 1 : 0))).passed).toBe(false)
  })
})

describe('retakes on the real exit pools', () => {
  // A typical cycle: one B/B, one C/P, one P/S, one CARS and one survey topic.
  const PLAN = [
    'mcat-biochemistry-enzymes-kinetics-mcat',
    'mcat-general-chemistry-acid-base-equilibrium-mcat',
    'mcat-psychology-behavior-disorders-mcat',
    'mcat-cars-reasoning-mcat',
    'mcat-molecular-biology-transcription-mcat',
  ]

  it('serves 25 questions, then fresh ones on each of 6 retakes', async () => {
    const pools = await Promise.all(
      PLAN.map(async (slug) => ({
        slug,
        items: (await generateExitQuiz(slug, 500)).map((q) => ({
          id: q.id, question: q.question, options: q.options, correctIndex: q.correctIndex, explanation: q.explanation,
        })),
      })),
    )
    const seen = new Set<string>()
    for (let sitting = 0; sitting < 7; sitting++) {
      const qs = assembleUnitTest(pools.map((p) => ({ slug: p.slug, ranked: rankCandidates(p.items, seen, new Set()) })))
      expect(qs).toHaveLength(25)
      for (const slug of PLAN) expect(qs.filter((q) => q.topicSlug === slug)).toHaveLength(5)
      for (const q of qs) {
        expect(seen.has(q.id), `sitting ${sitting + 1} repeated ${q.id}`).toBe(false)
        seen.add(q.id)
      }
    }
  })

  it('never serves LOW items unless the student opted in', async () => {
    const def = await generateExitQuiz('mcat-molecular-biology-transcription-mcat', 500)
    const withLow = await generateExitQuiz('mcat-molecular-biology-transcription-mcat', 500, undefined, undefined, { includeLowYield: true })
    expect(withLow.length).toBeGreaterThan(def.length)
  })
})
