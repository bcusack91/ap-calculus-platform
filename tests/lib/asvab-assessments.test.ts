/**
 * ASVAB assessments (asvab-pipeline B1): diagnostic composition and scoring,
 * study plans and the daily-question rotation.
 */
import { describe, it, expect } from 'vitest'
import { ASVAB_TOPIC_SLUGS } from '@/lib/course-includes'
import { isSafeSvg } from '@/lib/safe-svg'
import { subtestOfTopic } from '@/lib/asvab-scoring'
import {
  ASVAB_DIAGNOSTIC_QUESTIONS,
  DIAGNOSTIC_BLUEPRINT,
  TOTAL_FORMS,
  generateAsvabDiagnostic,
  pickNextForm,
  scoreAsvabDiagnostic,
} from '@/data/asvab-diagnostic'
import { ASVAB_PLANS } from '@/data/asvab-study-plans'
import { AFQT_TOPICS, TECHNICAL_TOPICS, getDailyQuestions, topicForDay } from '@/data/asvab-daily-question'
import { DIAGNOSTIC_ABOUT } from '@/lib/diagnostic-about'

const TEST_PREP = ['asvab-afqt-scores', 'asvab-test-strategy']

describe('ASVAB diagnostic composition', () => {
  it('has at least 3 forms that each follow the blueprint', () => {
    expect(TOTAL_FORMS).toBeGreaterThanOrEqual(3)
    for (let f = 1; f <= TOTAL_FORMS; f++) {
      const t = generateAsvabDiagnostic(f)
      for (const { subtest, count } of DIAGNOSTIC_BLUEPRINT) {
        expect(t.questions.filter((q) => q.subtest === subtest), `form ${f} ${subtest}`).toHaveLength(count)
      }
      // Administration order: subtests appear as contiguous blocks in blueprint order.
      const order = t.questions.map((q) => q.subtest).filter((s, i, a) => s !== a[i - 1])
      expect(order).toEqual(DIAGNOSTIC_BLUEPRINT.map((b) => b.subtest))
    }
  })

  it('weights the sitting toward the AFQT (at least 70% AFQT items, about 50 items)', () => {
    const total = DIAGNOSTIC_BLUEPRINT.reduce((n, b) => n + b.count, 0)
    const afqt = DIAGNOSTIC_BLUEPRINT.filter((b) => ['WK', 'PC', 'AR', 'MK'].includes(b.subtest)).reduce((n, b) => n + b.count, 0)
    expect(total).toBeGreaterThanOrEqual(45)
    expect(total).toBeLessThanOrEqual(60)
    expect(afqt / total).toBeGreaterThanOrEqual(0.7)
  })

  it('every item is well formed and tagged with a topic of its own subtest', () => {
    const ids = new Set<string>()
    for (const q of ASVAB_DIAGNOSTIC_QUESTIONS) {
      expect(ids.has(q.id), q.id).toBe(false)
      ids.add(q.id)
      expect(q.options, q.id).toHaveLength(4)
      expect(new Set(q.options).size, q.id).toBe(4)
      expect(q.correctAnswer, q.id).toBeGreaterThanOrEqual(0)
      expect(q.correctAnswer, q.id).toBeLessThan(4)
      expect(q.explanation.length, q.id).toBeGreaterThan(20)
      expect(ASVAB_TOPIC_SLUGS, q.id).toContain(q.topicSlug)
      expect(TEST_PREP, q.id).not.toContain(q.topicSlug)
      expect(subtestOfTopic(q.topicSlug), q.id).toBe(q.subtest)
      expect(q.domain).toBe(q.subtest)
      if (q.passage?.svg) expect(isSafeSvg(q.passage.svg), q.id).toBe(true)
      if (q.noShuffle) expect(q.passage?.svg, q.id).toBeTruthy()
      // Options shuffle on screen, so explanations must not name letters.
      if (!q.noShuffle) expect(q.explanation, q.id).not.toMatch(/\b(option|choice|answer) [A-D]\b/)
    }
  })

  it('every AFQT subtest is 3 easy / 4 medium / 3 hard on each form (WK, AR, MK)', () => {
    for (let f = 1; f <= TOTAL_FORMS; f++) {
      for (const s of ['WK', 'AR', 'MK'] as const) {
        const qs = ASVAB_DIAGNOSTIC_QUESTIONS.filter((q) => q.form === f && q.subtest === s)
        const mix = ['easy', 'medium', 'hard'].map((d) => qs.filter((q) => q.difficulty === d).length)
        expect(mix, `form ${f} ${s}`).toEqual([3, 4, 3])
      }
    }
  })

  it('has no repeated item (stem + passage) across forms', () => {
    const seen = new Set<string>()
    for (const q of ASVAB_DIAGNOSTIC_QUESTIONS) {
      const key = `${q.passage?.body ?? ''}|${q.passage?.svg ?? ''}|${q.question}`.toLowerCase()
      expect(seen.has(key), q.id).toBe(false)
      seen.add(key)
    }
  })

  it('rotates forms and is registered as rotating', () => {
    expect(pickNextForm([])).toBe(1)
    expect(pickNextForm([1])).toBe(2)
    expect(pickNextForm([1, 2])).toBe(3)
    expect(pickNextForm([1, 2, 3])).toBe(1)
    expect(pickNextForm([2])).toBe(1)
    expect(DIAGNOSTIC_ABOUT['asvab-diagnostic']?.rotatesForms).toBe(true)
  })
})

describe('ASVAB diagnostic scoring', () => {
  const t = generateAsvabDiagnostic(1)
  it('a perfect sitting estimates a top category with no recommendations', () => {
    const r = scoreAsvabDiagnostic(1, t.questions, t.questions.map((q) => q.correctAnswer))
    expect(r.totalCorrect).toBe(t.totalQuestions)
    expect(['I', 'II']).toContain(r.afqt.category)
    expect(r.recommendedTopics).toEqual([])
    expect(r.afqtRange).toEqual({ low: r.afqt.low, high: r.afqt.high })
  })
  it('a blank sitting estimates Category V and recommends AFQT topics first', () => {
    const r = scoreAsvabDiagnostic(1, t.questions, [])
    expect(r.afqt.category).toBe('V')
    expect(r.recommendedTopics.length).toBeGreaterThan(0)
    expect(r.recommendedTopics.length).toBeLessThanOrEqual(6)
    for (const rec of r.recommendedTopics) expect(['WK', 'PC', 'AR', 'MK']).toContain(rec.domainId)
  })
  it('recommends exactly the topics that were missed, with real slugs and a range in the summary', () => {
    const answers = t.questions.map((q) => (q.subtest === 'AR' ? (q.correctAnswer + 1) % 4 : q.correctAnswer))
    const r = scoreAsvabDiagnostic(1, t.questions, answers)
    const arTopics = new Set(t.questions.filter((q) => q.subtest === 'AR').map((q) => q.topicSlug))
    expect(new Set(r.recommendedTopics.map((x) => x.slug))).toEqual(arTopics)
    expect(r.domains.find((d) => d.domainId === 'AR')?.level).toBe('weak')
    expect(r.estimatedLevel).toMatch(/^AFQT \d+(–\d+)? \(estimate, Category [IV]+[ABC]?\)$/)
    expect(r.lineScores.length).toBeGreaterThan(20)
    expect(r.afqt.low).toBeLessThanOrEqual(r.afqt.percentile)
    expect(r.afqt.high).toBeGreaterThanOrEqual(r.afqt.percentile)
  })
})

describe('ASVAB study plans', () => {
  it('offers 4-, 8- and 12-week plans', () => {
    expect(ASVAB_PLANS.map((p) => p.durationWeeks)).toEqual([4, 8, 12])
  })
  it('every task links a real topic or is a tool task, and weeks stay in range', () => {
    for (const p of ASVAB_PLANS) {
      for (const task of p.tasks) {
        if (task.topicSlug) expect(ASVAB_TOPIC_SLUGS, `${p.id}: ${task.title}`).toContain(task.topicSlug)
        else expect(['QUIZ', 'PRACTICE'], `${p.id}: ${task.title}`).toContain(task.type)
        expect(task.weekOffset).toBeLessThan(p.durationWeeks)
        expect(task.dayOfWeek).toBeGreaterThanOrEqual(0)
        expect(task.dayOfWeek).toBeLessThanOrEqual(6)
      }
    }
  })
  it('puts the AFQT first: every week-1 lesson is an AFQT or AFQT-score topic', () => {
    for (const p of ASVAB_PLANS) {
      for (const task of p.tasks.filter((x) => x.weekOffset === 0 && x.type === 'LESSON')) {
        const s = subtestOfTopic(task.topicSlug!)
        expect(s === null ? TEST_PREP.includes(task.topicSlug!) : ['WK', 'PC', 'AR', 'MK'].includes(s), `${p.id}: ${task.title}`).toBe(true)
      }
    }
  })
  it('the 12-week plan covers all 35 topics', () => {
    const covered = new Set(ASVAB_PLANS[2].tasks.map((t) => t.topicSlug).filter(Boolean))
    expect([...ASVAB_TOPIC_SLUGS].filter((s) => !covered.has(s))).toEqual([])
  })
})

describe('ASVAB daily question', () => {
  it('alternates AFQT and technical topics and never serves test-prep topics', () => {
    expect(AFQT_TOPICS).toHaveLength(16)
    expect(TECHNICAL_TOPICS).toHaveLength(17)
    for (let d = 0; d < 80; d++) {
      const slug = topicForDay(d)
      expect(TEST_PREP).not.toContain(slug)
      expect(d % 2 === 0 ? AFQT_TOPICS : TECHNICAL_TOPICS).toContain(slug)
    }
  })
  it('returns a well-formed question or nothing, drawn from an exact-tag pool', () => {
    const out = getDailyQuestions(new Date(2026, 9, 25))
    expect(out.length).toBeLessThanOrEqual(1)
    for (const q of out) {
      expect(ASVAB_TOPIC_SLUGS).toContain(q.topicSlug)
      expect(q.question.options.length).toBeGreaterThanOrEqual(2)
      expect(q.question.correctAnswer).toBeLessThan(q.question.options.length)
      expect(q.section.length).toBeGreaterThan(0)
    }
  })
})
