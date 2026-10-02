/**
 * The Transcription exit quiz covers exactly what the lesson teaches, and asks
 * low-yield questions only of students who turned on "Include low-yield
 * details" (owner request 2026-10-02).
 *
 * Pins: the topic draws from its own lesson-built pool (no more off-topic
 * Golgi / macrolide items from the keyword-picked biology pool); default draws
 * never contain a LOW item; opted-in draws can; and the server regrade
 * reproduces either kind of draw, so a LOW item is graded from the bank rather
 * than trusted from the client.
 */
import { describe, it, expect } from 'vitest'
import { generateExitQuiz } from '@/data/exit-quizzes'
import { regradeExitQuiz, regradeExitQuizSeeded } from '@/lib/exit-quiz-regrade'
import { shuffleOptions } from '@/lib/shuffle-options'
import { TRANSCRIPTION_EXIT_POOL } from '@/data/exit-quizzes/mcat-transcription-pool'
import { LESSON_YIELDS } from '@/lib/lesson-yield'

const SLUG = 'mcat-molecular-biology-transcription-mcat'
const stems = (yieldIs: (y: string) => boolean) =>
  new Set(TRANSCRIPTION_EXIT_POOL.filter((q) => yieldIs(q.yield)).map((q) => q.question))
const LOW = stems((y) => y === 'LOW')
const ALL = stems(() => true)

/** Answer every question correctly, as the client would submit it. */
function perfectAnswers(qs: Awaited<ReturnType<typeof generateExitQuiz>>) {
  return qs.map((q) => ({
    questionId: q.id,
    selectedAnswer: shuffleOptions(q.options, q.correctIndex, q.id + q.question).correctIndex,
  }))
}

describe('Transcription exit-quiz pool', () => {
  it('is tagged throughout, with enough default items for a full quiz', () => {
    for (const q of TRANSCRIPTION_EXIT_POOL) {
      expect(LESSON_YIELDS).toContain(q.yield)
      expect(q.options).toHaveLength(4)
      expect(new Set(q.options).size).toBe(4)
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0)
      expect(q.correctAnswer).toBeLessThan(4)
    }
    expect(TRANSCRIPTION_EXIT_POOL.filter((q) => q.yield !== 'LOW').length).toBeGreaterThanOrEqual(20)
    expect(LOW.size).toBeGreaterThan(0)
  })

  it('draws only from the lesson-built pool (no off-topic area items)', async () => {
    for (let seed = 1; seed <= 40; seed++) {
      for (const q of await generateExitQuiz(SLUG, 10, undefined, seed, { includeLowYield: true })) {
        expect(ALL.has(q.question), q.question).toBe(true)
      }
    }
  })

  it('never asks a low-yield question by default', async () => {
    for (let seed = 1; seed <= 200; seed++) {
      const quiz = await generateExitQuiz(SLUG, 10, undefined, seed)
      expect(quiz).toHaveLength(10)
      expect(quiz.some((q) => LOW.has(q.question))).toBe(false)
    }
  })

  it('can ask low-yield questions of a student who opted in', async () => {
    let sawLow = false
    for (let seed = 1; seed <= 50 && !sawLow; seed++) {
      const quiz = await generateExitQuiz(SLUG, 10, undefined, seed, { includeLowYield: true })
      sawLow = quiz.some((q) => LOW.has(q.question))
    }
    expect(sawLow).toBe(true)
  })

  it('reproduces an opted-in draw from its seed and grades it from the bank', async () => {
    // Find a seed whose opted-in draw contains a LOW item.
    let seed = 1
    let quiz = await generateExitQuiz(SLUG, 10, undefined, seed, { includeLowYield: true })
    while (!quiz.some((q) => LOW.has(q.question))) {
      seed++
      quiz = await generateExitQuiz(SLUG, 10, undefined, seed, { includeLowYield: true })
    }
    const again = await generateExitQuiz(SLUG, 10, undefined, seed, { includeLowYield: true })
    expect(again.map((q) => q.id)).toEqual(quiz.map((q) => q.id))

    const answers = perfectAnswers(quiz)
    const seeded = await regradeExitQuizSeeded(SLUG, answers, seed, 10, undefined, true)
    expect(seeded?.score).toBe(10)
    expect(seeded?.resolvedCount).toBe(10)

    // Without the seed, the id-based fallback still resolves LOW items.
    const probe = await regradeExitQuiz(SLUG, answers)
    expect(probe.resolvedCount).toBe(10)
    expect(probe.score).toBe(10)
  })
})
