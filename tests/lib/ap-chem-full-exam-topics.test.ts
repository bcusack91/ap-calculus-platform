import { describe, it, expect } from 'vitest'
import { generateExitQuiz } from '@/data/exit-quizzes'
import { AP_CHEM_EXAM_TOPICS } from '@/data/ap-chem-full-exam-topics'

/**
 * The AP Chemistry full exam builds its multiple-choice section from exit-quiz
 * topics and silently skips any topic that fails to resolve. Its list once
 * held topic slugs with no exit quiz at all, so the section loaded zero
 * questions and nothing reported it.
 */
describe('AP Chemistry full exam topics', () => {
  it('resolves every topic to an exit quiz with questions', async () => {
    for (const slug of AP_CHEM_EXAM_TOPICS) {
      const pool = await generateExitQuiz(slug, 4)
      expect(pool.length, slug).toBeGreaterThan(0)
    }
  })

  it('supplies enough distinct questions for the 60-question section', async () => {
    const stems = new Set<string>()
    for (const slug of AP_CHEM_EXAM_TOPICS) {
      for (const q of await generateExitQuiz(slug, 4)) stems.add(q.question.trim().toLowerCase())
    }
    expect(stems.size).toBeGreaterThanOrEqual(60)
  })
})
