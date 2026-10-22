/**
 * An entrance quiz lets a student skip lesson part N by answering both of
 * part N's items correctly, so every AP topic's entrance quiz must be built
 * from the lesson that topic renders: one quiz part per lesson part, titled
 * exactly as the registry titles it, with exactly two items per part.
 * Phase 1 (Oct 2026) rebuilt every AP entrance quiz to this shape; the old
 * generated quizzes had stale part maps and keyed the longest option ~60% of
 * the time. The fixture lists every production AP topic that renders a
 * lesson (retired and redirected slugs excluded).
 */
import { describe, it, expect } from 'vitest'
import { hasEntranceQuiz, loadEntranceQuiz } from '@/data/entrance-quizzes'
import { getInteractiveTopicConfig } from '@/data/interactive-lessons/registry'
import slugsByCourse from '../fixtures/ap-lesson-topic-slugs.json'

/** AP Calculus AB 4.7, promoted to a live topic in Oct 2026 (lesson + quizzes in progress). */
const PENDING_TOPICS = new Set<string>() // lhopitals-rule landed 2026-10-22

const entries = Object.entries(slugsByCourse as Record<string, string[]>).flatMap(([course, slugs]) =>
  slugs.map((slug) => [course, slug] as const),
)

describe('AP entrance quizzes match the lesson each topic renders', () => {
  it('covers every AP course', () => {
    expect(Object.keys(slugsByCourse).length).toBeGreaterThanOrEqual(23)
    expect(entries.length).toBeGreaterThan(450)
  })

  it.each(entries)('%s / %s', async (_course, slug) => {
    // A topic whose lesson and entrance quiz are still being authored. Checked
    // in full as soon as both are registered; drop the entry then.
    if (PENDING_TOPICS.has(slug) && (!getInteractiveTopicConfig(slug) || !hasEntranceQuiz(slug))) return
    const config = getInteractiveTopicConfig(slug)
    expect(config, `${slug} has no lesson`).not.toBeNull()
    expect(hasEntranceQuiz(slug), `${slug} has no entrance quiz`).toBe(true)
    const quiz = await loadEntranceQuiz(slug)
    expect(quiz, slug).not.toBeNull()
    const lessonTitles = config!.parts.map((p) => p.title)
    const quizParts = quiz!.parts
    expect(quizParts.map((p) => p.partTitle), `${slug} part titles`).toEqual(lessonTitles)
    expect(quizParts.map((p) => p.partNumber)).toEqual(lessonTitles.map((_, i) => i + 1))
    const questions = quiz!.questions
    expect(questions.length, `${slug} item count`).toBe(2 * lessonTitles.length)
    for (let n = 1; n <= lessonTitles.length; n++) {
      const inPart = questions.filter((q) => q.partNumber === n)
      expect(inPart.length, `${slug} part ${n}`).toBe(2)
      for (const q of inPart) expect(q.partTitle, `${slug} item ${q.id}`).toBe(lessonTitles[n - 1])
    }
  })
})
