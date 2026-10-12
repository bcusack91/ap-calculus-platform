/**
 * SAT Craft and Structure lessons (Oct 2026): Text Structure and Purpose and
 * Cross-Text Connections.
 *
 * Pins: each topic resolves to its OWN 7-part lesson (no slugAlias shadows
 * it), its entrance quiz lines up part-for-part with the lesson, its
 * lesson-built exit pool is well formed, covers every part and honours a
 * requested difficulty, seeded draws reproduce, the diagnostic recommends the
 * right lesson for a missed Text Structure / Cross-Text question, and track
 * routing sends 700-800 students to the advanced Reading Comprehension lesson.
 */
import { describe, it, expect } from 'vitest'
import { getInteractiveTopicConfig, getInteractiveLessonData } from '@/data/interactive-lessons/registry'
import { hasEntranceQuiz, loadEntranceQuiz } from '@/data/entrance-quizzes'
import { generateExitQuiz, hasExitQuiz } from '@/data/exit-quizzes'
import {
  analyzeDiagnosticResults,
  craftStructureTopicFor,
  domainIdForTopicSlug,
  type DiagnosticQuestion,
} from '@/data/sat-practice/diagnostic-generator'
import { trackSlugFor } from '@/lib/sat-plan'
import { skillSlugsForCourseTopic } from '@/lib/sat-topic-map'
import { EXIT_POOL as TSP_POOL } from '@/data/exit-quizzes/sat-text-structure-purpose'
import { EXIT_POOL as CTC_POOL } from '@/data/exit-quizzes/sat-cross-text-connections'

const TOPICS = [
  { slug: 'sat-text-structure-purpose', pool: TSP_POOL },
  { slug: 'sat-cross-text-connections', pool: CTC_POOL },
] as const

describe.each(TOPICS)('$slug', ({ slug, pool }) => {
  it('resolves to its own 7-part lesson', async () => {
    const config = getInteractiveTopicConfig(slug)
    expect(config?.parts).toHaveLength(7)
    for (let part = 1; part <= 7; part++) {
      const data = await getInteractiveLessonData(slug, part)
      expect(data?.topicSlug).toBe(slug)
      const ids = data!.sections.map((s) => s.id)
      expect(new Set(ids).size).toBe(ids.length)
    }
  })

  it('has an entrance quiz with two questions per lesson part', async () => {
    expect(hasEntranceQuiz(slug)).toBe(true)
    const quiz = await loadEntranceQuiz(slug)
    expect(quiz).not.toBeNull()
    const parts = quiz!.parts.map((p) => p.partNumber)
    expect(parts).toEqual([1, 2, 3, 4, 5, 6, 7])
    const config = getInteractiveTopicConfig(slug)!
    quiz!.parts.forEach((p, i) => expect(p.partTitle).toBe(config.parts[i].title))
    for (const n of parts) expect(quiz!.questions.filter((q) => q.partNumber === n)).toHaveLength(2)
  })

  it('has a well-formed lesson-built exit pool covering every part and tier', () => {
    expect(hasExitQuiz(slug)).toBe(true)
    expect(pool.length).toBeGreaterThanOrEqual(36)
    expect(new Set(pool.map((q) => q.question)).size).toBe(pool.length)
    for (const q of pool) {
      expect(new Set(q.options).size, q.question).toBe(4)
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0)
      expect(q.correctAnswer).toBeLessThan(4)
      expect(['easy', 'medium', 'hard']).toContain(q.difficulty)
      expect(q.question).not.toMatch(/[$`\\]/)
    }
    expect(new Set(pool.map((q) => q.part))).toEqual(new Set([1, 2, 3, 4, 5, 6, 7]))
    for (const tier of ['easy', 'medium', 'hard'] as const) {
      expect(pool.filter((q) => q.difficulty === tier).length).toBeGreaterThanOrEqual(8)
    }
  })

  it('deals an untiered quiz across all seven parts and reproduces it from a seed', async () => {
    const a = await generateExitQuiz(slug, 10, undefined, 7)
    const b = await generateExitQuiz(slug, 10, undefined, 7)
    expect(a.map((q) => q.id)).toEqual(b.map((q) => q.id))
    expect(new Set(a.map((q) => q.partNumber)).size).toBe(7)
    const stems = new Set(pool.map((q) => q.question))
    for (const q of a) expect(stems.has(q.question)).toBe(true)
  })

  it('honours a requested difficulty (Core Skills slugs are forced to easy)', async () => {
    for (const tier of ['easy', 'hard'] as const) {
      const quiz = await generateExitQuiz(slug, 8, tier, 3)
      expect(quiz.every((q) => q.difficulty === tier)).toBe(true)
    }
    const core = await generateExitQuiz(`${slug}-core-skills`, 8, 'hard', 3)
    expect(core.every((q) => q.difficulty === 'easy')).toBe(true)
  })

  it('maps to its own competitive skill pool and the Craft & Structure diagnostic domain', () => {
    expect(skillSlugsForCourseTopic(slug)).toEqual([slug.replace(/^sat-/, 'sat-skill-')])
    expect(domainIdForTopicSlug(slug)).toBe('vocabulary')
  })
})

describe('craftStructureTopicFor', () => {
  it('reads the skill from College Board stems', () => {
    expect(craftStructureTopicFor('Text 1\nA.\n\nText 2\nB.\n\nBased on the texts, how would the author of Text 2 most likely respond?')).toBe('sat-cross-text-connections')
    expect(craftStructureTopicFor('Which choice best states the main purpose of the text?')).toBe('sat-text-structure-purpose')
    expect(craftStructureTopicFor('Which choice best describes the overall structure of the text?')).toBe('sat-text-structure-purpose')
    expect(craftStructureTopicFor('Which choice best describes the function of the second sentence in the text as a whole?')).toBe('sat-text-structure-purpose')
    expect(craftStructureTopicFor('As used in the text, what does the word "check" most nearly mean?')).toBeNull()
    expect(craftStructureTopicFor('Which choice best states the main idea of the text?')).toBeNull()
  })
})

describe('diagnostic recommendations', () => {
  const q = (over: Partial<DiagnosticQuestion>): DiagnosticQuestion => ({
    id: Math.random().toString(36),
    question: 'Q',
    options: ['a', 'b', 'c', 'd'],
    correctIndex: 0,
    explanation: '',
    category: 'x',
    domain: 'vocabulary',
    sourceSlug: 'sat-vocabulary-context',
    section: 'reading-writing',
    ...over,
  })

  it('sends a missed cross-text passage question to Cross-Text Connections', () => {
    const questions = [
      q({ question: 'Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1?', sourceSlug: 'passage-science' }),
      q({ question: 'As used in the text, what does the word "plastic" most nearly mean?' }),
    ]
    const res = analyzeDiagnosticResults(questions, [{ questionIndex: 0, selectedIndex: 2 }, { questionIndex: 1, selectedIndex: 0 }])
    expect(res.recommendedTopics[0].slug).toBe('sat-cross-text-connections')
  })

  it('sends a missed function question from the reading pool to Text Structure and Purpose', () => {
    const questions = [
      q({ question: 'Which choice best describes the function of the third sentence in the text as a whole?', sourceSlug: 'sat-reading-comprehension', domain: 'comprehension' }),
      q({ question: 'Which choice best states the main idea of the text?', sourceSlug: 'sat-central-ideas-details', domain: 'comprehension' }),
    ]
    const res = analyzeDiagnosticResults(questions, [{ questionIndex: 0, selectedIndex: 1 }, { questionIndex: 1, selectedIndex: 0 }])
    expect(res.recommendedTopics[0].slug).toBe('sat-text-structure-purpose')
  })

  it('still sends a missed words-in-context question to Vocabulary in Context', () => {
    const res = analyzeDiagnosticResults(
      [q({ question: 'As used in the text, what does the word "check" most nearly mean?' })],
      [{ questionIndex: 0, selectedIndex: 3 }],
    )
    expect(res.recommendedTopics[0].slug).toBe('sat-vocabulary-context')
  })
})

describe('track routing', () => {
  it('routes both lessons to the 700-800 Reading Comprehension lesson and keeps the regular lesson otherwise', () => {
    expect(trackSlugFor('sat-text-structure-purpose', 'advanced')).toBe('sat-reading-comprehension-advanced')
    expect(trackSlugFor('sat-cross-text-connections', 'advanced')).toBe('sat-reading-comprehension-advanced')
    // No Core Skills twin exists, so plan-status falls back to the base lesson.
    expect(trackSlugFor('sat-text-structure-purpose', 'core-skills')).toBe('sat-text-structure-purpose-core-skills')
    expect(trackSlugFor('sat-cross-text-connections', 'regular')).toBe('sat-cross-text-connections')
  })
})
