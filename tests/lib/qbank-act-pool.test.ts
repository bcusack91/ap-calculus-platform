/**
 * ACT question bank pool: the lesson-built ACT exit pools filed under the four
 * ACT sections, keyed exactly as the exit quiz keys them (so a miss there and a
 * miss here are the same mistake), with test-day logistics and every
 * full-length form item left out.
 */
import { describe, it, expect, beforeAll } from 'vitest'
import { buildActPool, eligibleUnits, filterUnit, type QbankPool, type QbankStudentState } from '@/lib/qbank-pools'
import { actMixedItemSection, actTopicSection } from '@/lib/act-topic-sections'
import { LESSON_BUILT_EXIT_TOPICS } from '@/data/exit-quizzes/lesson-built'
import { QBANK_SECTIONS, isQbankCourse, secondsPerQuestion } from '@/lib/qbank-types'
import { questionKey } from '@/lib/question-key'
import { ACT_FL_FORM_NUMBERS, getActForm } from '@/data/act-practice/full-length'
import { actFlQuestionKey, actFlSlots } from '@/lib/question-sources/act'
import { fixtureForm } from '../fixtures/act-fl-fixture'

const NOBODY: QbankStudentState = { includeLowYield: false, seenKeys: new Set(), incorrectKeys: new Set(), flaggedKeys: new Set() }

let act: QbankPool
beforeAll(async () => {
  act = await buildActPool()
}, 120_000)

describe('ACT pool', () => {
  it('is a qbank course with the four ACT sections at exam pace', () => {
    expect(isQbankCourse('act')).toBe(true)
    expect(QBANK_SECTIONS.act.map((s) => s.id)).toEqual(['english', 'math', 'reading', 'science'])
    expect(secondsPerQuestion('act', 'english')).toBe(42)
  })

  it('holds the lesson-built ACT pools across all four sections, each key once', () => {
    const items = act.units.flatMap((u) => u.items)
    expect(items.length).toBeGreaterThan(650)
    expect(new Set(items.map((i) => i.questionKey)).size).toBe(items.length)
    expect(new Set(items.map((i) => i.section))).toEqual(new Set(['english', 'math', 'reading', 'science']))
    expect(items.every((i) => i.discipline === QBANK_SECTIONS.act.find((s) => s.id === i.section)!.label)).toBe(true)
    // Low-yield items need the opt-in; most items are served without it.
    expect(eligibleUnits(act, {}, 'all', NOBODY).length).toBeGreaterThan(500)
  })

  it('files items under -act topics, without test-day logistics', () => {
    const topics = new Set(act.units.map((u) => u.topicSlug))
    for (const t of topics) {
      expect(t).toMatch(/^act-.*-act$/)
      expect(LESSON_BUILT_EXIT_TOPICS as readonly string[]).toContain(t)
    }
    expect(topics.has('act-test-day-strategy-act')).toBe(false)
    expect(topics.size).toBe(19)
    expect(actTopicSection('act-english-grammar-act')).toBe('english')
    expect(actTopicSection('act-trigonometry-act')).toBe('math')
    expect(actTopicSection('act-reading-main-ideas-act')).toBe('reading')
    expect(actTopicSection('act-science-data-act')).toBe('science')
    expect(actTopicSection('sat-math')).toBeNull()
  })

  it('splits the Reading + Science tips pool by question', () => {
    const tips = act.units.filter((u) => u.topicSlug === 'act-reading-science-tips-act')
    expect(new Set(tips.map((u) => u.section))).toEqual(new Set(['reading', 'science']))
    expect(actMixedItemSection('The author’s attitude toward the method is best described as')).toBe('reading')
    expect(actMixedItemSection('According to Table 1, which trial took longest?')).toBe('science')
  })

  it('keys items exactly as the exit quiz does (authored order, no passage id)', async () => {
    const mod = (await import('@/data/exit-quizzes/lesson-built/act-plane-geometry-act')) as { EXIT_POOL: { question: string; options: string[]; correctAnswer: number }[] }
    const first = mod.EXIT_POOL[0]
    const key = questionKey({ question: first.question, options: first.options, correctIndex: first.correctAnswer })
    const unit = act.units.find((u) => u.id === key)
    expect(unit?.topicSlug).toBe('act-plane-geometry-act')
    expect(filterUnit(unit!, { sections: ['math'] }, true)).not.toBeNull()
    expect(filterUnit(unit!, { sections: ['english'] }, true)).toBeNull()
  })

  it('never contains a full-length form question', async () => {
    const keys = new Set(act.units.flatMap((u) => u.items.map((i) => i.questionKey)))
    const stems = new Set(act.units.flatMap((u) => u.items.map((i) => i.question.trim())))
    const forms = [fixtureForm(1), ...(await Promise.all(ACT_FL_FORM_NUMBERS.map((n) => getActForm(n)))).filter((f) => f !== null)]
    for (const form of forms) {
      for (const s of actFlSlots(form!, true)) {
        expect(keys.has(actFlQuestionKey(s.question, s.passage))).toBe(false)
        if (s.question.question.trim().length > 40) expect(stems.has(s.question.question.trim()), s.question.id).toBe(false)
      }
    }
  })
})
