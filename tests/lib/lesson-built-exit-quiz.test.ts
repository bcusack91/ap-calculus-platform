/// <reference types="vite/client" />
/**
 * Lesson-built exit quizzes (owner request 2026-10-02): a topic's exit quiz
 * covers exactly what its lesson teaches, and asks low-yield questions only of
 * students who turned on "Include low-yield details".
 *
 * Runs over every topic in LESSON_BUILT_EXIT_TOPICS. Pins: the topic is wired
 * to its own lesson-built module; every item is well formed and tagged; there
 * are enough default items for a full quiz; default draws never contain a LOW
 * item; opted-in draws can; and the server regrade reproduces either kind of
 * draw, so a LOW item is graded from the bank rather than trusted from the
 * client.
 */
import { describe, it, expect } from 'vitest'
import { generateExitQuiz } from '@/data/exit-quizzes'
import { LESSON_BUILT_EXIT_TOPICS, type LessonExitItem } from '@/data/exit-quizzes/lesson-built'
import { regradeExitQuiz, regradeExitQuizSeeded } from '@/lib/exit-quiz-regrade'
import { shuffleOptions } from '@/lib/shuffle-options'
import { LESSON_YIELDS } from '@/lib/lesson-yield'

const modules = import.meta.glob<{ EXIT_POOL: LessonExitItem[] }>('../../src/data/exit-quizzes/lesson-built/*.ts', { eager: true })
const poolFor = (slug: string) => modules[`../../src/data/exit-quizzes/lesson-built/${slug}.ts`]?.EXIT_POOL

/** Answer every question correctly, as the client would submit it. */
function perfectAnswers(qs: Awaited<ReturnType<typeof generateExitQuiz>>) {
  return qs.map((q) => ({
    questionId: q.id,
    selectedAnswer: shuffleOptions(q.options, q.correctIndex, q.id + q.question).correctIndex,
  }))
}

it('every lesson-built module is listed, and every listed topic has a module', () => {
  const files = Object.keys(modules).map((k) => k.split('/').pop()!.replace(/\.ts$/, '')).sort()
  expect(files).toEqual([...LESSON_BUILT_EXIT_TOPICS].sort())
})

describe.each([...LESSON_BUILT_EXIT_TOPICS])('%s', (slug) => {
  const pool = poolFor(slug)!
  const LOW = new Set(pool.filter((q) => q.yield === 'LOW').map((q) => q.question))
  const ALL = new Set(pool.map((q) => q.question))

  it('has a well-formed, fully tagged pool with enough default items', () => {
    for (const q of pool) {
      expect(LESSON_YIELDS).toContain(q.yield)
      expect(q.options).toHaveLength(4)
      expect(new Set(q.options).size, q.question).toBe(4)
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0)
      expect(q.correctAnswer).toBeLessThan(4)
    }
    expect(new Set(pool.map((q) => q.question)).size, 'duplicate stems').toBe(pool.length)
    expect(pool.filter((q) => q.yield !== 'LOW').length).toBeGreaterThanOrEqual(20)
  })

  it('is wired to its own pool: every drawn question comes from it', async () => {
    for (let seed = 1; seed <= 30; seed++) {
      for (const q of await generateExitQuiz(slug, 10, undefined, seed, { includeLowYield: true })) {
        expect(ALL.has(q.question), q.question).toBe(true)
      }
    }
  })

  it('never asks a low-yield question by default', async () => {
    for (let seed = 1; seed <= 100; seed++) {
      const quiz = await generateExitQuiz(slug, 10, undefined, seed)
      expect(quiz).toHaveLength(10)
      expect(quiz.some((q) => LOW.has(q.question))).toBe(false)
    }
  })

  it('reproduces an opted-in draw from its seed and grades it from the bank', async () => {
    if (LOW.size === 0) return
    let seed = 1
    let quiz = await generateExitQuiz(slug, 10, undefined, seed, { includeLowYield: true })
    while (!quiz.some((q) => LOW.has(q.question))) {
      seed++
      expect(seed, 'no opted-in draw within 200 seeds contains a LOW item').toBeLessThan(200)
      quiz = await generateExitQuiz(slug, 10, undefined, seed, { includeLowYield: true })
    }
    const again = await generateExitQuiz(slug, 10, undefined, seed, { includeLowYield: true })
    expect(again.map((q) => q.id)).toEqual(quiz.map((q) => q.id))

    const answers = perfectAnswers(quiz)
    const seeded = await regradeExitQuizSeeded(slug, answers, seed, 10, undefined, true)
    expect(seeded?.score).toBe(10)
    expect(seeded?.resolvedCount).toBe(10)

    // Without the seed, the id-based fallback still resolves LOW items.
    const probe = await regradeExitQuiz(slug, answers)
    expect(probe.resolvedCount).toBe(10)
    expect(probe.score).toBe(10)
  })
})
