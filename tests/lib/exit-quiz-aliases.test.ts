import { describe, expect, it } from 'vitest'
import { EXIT_QUIZ_ALIASES, generateExitQuiz, hasExitQuiz, resolveExitQuizSlug } from '@/data/exit-quizzes'
import { hasInteractiveLesson } from '@/data/interactive-lessons/registry'
import { LEGACY_TOPIC_REDIRECTS } from '@/lib/legacy-topic-redirects'

describe('exit-quiz aliases', () => {
  it('every alias points at a registered pool slug', () => {
    for (const [from, to] of Object.entries(EXIT_QUIZ_ALIASES)) {
      expect(resolveExitQuizSlug(from)).toBe(to)
      expect(hasExitQuiz(to), `${from} -> ${to}`).toBe(true)
    }
  })

  it('an aliased topic has a lesson, an exit quiz, and is not redirected away', async () => {
    for (const from of Object.keys(EXIT_QUIZ_ALIASES)) {
      expect(hasInteractiveLesson(from), from).toBe(true)
      expect(hasExitQuiz(from), from).toBe(true)
      expect(LEGACY_TOPIC_REDIRECTS[from], from).toBeUndefined()
      const questions = await generateExitQuiz(from, 5, undefined, 42)
      expect(questions.length, from).toBeGreaterThan(0)
    }
  })

  it('no legacy redirect targets one of the Calc suites that has no production Topic row', () => {
    const noTopicRow = [
      'derivatives-exp-log-calcab',
      'implicit-differentiation-calcab',
      'related-rates-calcab',
      'concavity-inflection-points-calcab',
    ]
    for (const [from, to] of Object.entries(LEGACY_TOPIC_REDIRECTS)) {
      expect(noTopicRow, `${from} -> ${to}`).not.toContain(to)
    }
  })
})
