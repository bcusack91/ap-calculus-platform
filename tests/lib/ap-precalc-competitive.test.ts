/**
 * AP Precalculus competitive mode draws from the precalc bank it shares with
 * the non-AP Precalculus course. The AP view drops what the AP exam does not
 * assess (Unit 4, plus three limaçon/equation-conversion polar items), and
 * every AP Precalculus topic must route to that view instead of falling
 * through to cumulative questions from other subjects (Oct 2026: picking
 * "Complex Numbers" served an integral and an optics item).
 *
 * The last block probes every AP course's fixture slugs the same way, since
 * the same fallback hit 11 other AP courses.
 */
import { describe, it, expect, vi } from 'vitest'
import {
  precalcQuestionBank,
  apPrecalcQuestionBank,
  getApPrecalcQuestions,
  getPreCalcQuestions,
  AP_PRECALC_EXCLUDED_IDS,
  AP_PRECALC_EXCLUDED_TOPIC_SLUGS,
} from '@/data/competitive-questions/precalc-bank'
import { generateMatchQuestions, AP_LESSON_BANK_TOPICS } from '@/lib/competitive-utils'
import { getCourseTopics } from '@/lib/teacher-lobby-courses'
import { dailySetForCourse } from '@/lib/daily-challenge'
import { COURSE_PAGE_CONFIGS } from '@/components/competitive/course-page-configs'
import { REPARENTED_AP_TOPICS } from '@/data/retired-ap-topics'
import slugsByCourse from '../fixtures/ap-lesson-topic-slugs.json'

// The first match draw loads every AP bank (the generic AP slug map).
vi.setConfig({ testTimeout: 60_000 })

const fixture = slugsByCourse as Record<string, string[]>
// Production AP Precalculus topics: the lesson fixture plus the topics that
// were reparented out of retired Unit 4 (polar is Topics 3.13-3.15).
const AP_PRECALC_SLUGS = [
  ...fixture['ap-precalculus'],
  ...Object.keys(REPARENTED_AP_TOPICS).filter((s) => !fixture['ap-precalculus'].includes(s)),
]
// Served as the click-the-position unit-circle game, not bank MCQs.
const UNIT_CIRCLE_GAME = new Set(['the-unit-circle'])

const isExcluded = (q: { id: number; topicSlug: string }) =>
  AP_PRECALC_EXCLUDED_IDS.has(q.id) || AP_PRECALC_EXCLUDED_TOPIC_SLUGS.has(q.topicSlug)
const apStems = new Set(apPrecalcQuestionBank.map((q) => q.question))
const excludedStems = new Set(
  precalcQuestionBank.filter(isExcluded).map((q) => q.question).filter((s) => !apStems.has(s)),
)
const stemsOf = (qs: Array<{ question?: unknown }>) => qs.map((q) => String(q.question))

describe('AP Precalculus draws exclude off-exam items', () => {
  it('excludes exactly the 53 listed items and keeps every on-exam topic at 10', () => {
    expect(precalcQuestionBank.filter(isExcluded)).toHaveLength(53)
    expect(apPrecalcQuestionBank.some(isExcluded)).toBe(false)
    const counts = new Map<string, number>()
    for (const q of apPrecalcQuestionBank) counts.set(q.topicSlug, (counts.get(q.topicSlug) ?? 0) + 1)
    expect(counts.size).toBe(22)
    for (const [slug, n] of counts) expect(n, slug).toBe(10)
    expect(new Set(apPrecalcQuestionBank.map((q) => q.id)).size).toBe(apPrecalcQuestionBank.length)
  })

  it('getApPrecalcQuestions never returns an excluded item, whatever topic is asked for', () => {
    expect(getApPrecalcQuestions(1_000_000).some(isExcluded)).toBe(false)
    for (const slug of [...AP_PRECALC_EXCLUDED_TOPIC_SLUGS, 'polar-coordinates-graphs', 'no-such-topic']) {
      expect(getApPrecalcQuestions(1_000_000, slug).some(isExcluded), slug).toBe(false)
    }
  })

  it('the AP course page fallback draws only on-exam items', async () => {
    const fallback = COURSE_PAGE_CONFIGS['ap-precalculus'].fallbackTopicSlug
    expect(fallback).toBe('ap-precalculus')
    for (const tier of [undefined, 'easy', 'medium', 'hard'] as const) {
      const qs = await generateMatchQuestions(1000, fallback, [], tier)
      expect(qs.length).toBeGreaterThan(0)
      for (const s of stemsOf(qs)) {
        expect(excludedStems.has(s), s).toBe(false)
        expect(apStems.has(s), s).toBe(true)
      }
    }
  })

  it('standard mode with completed lessons draws from the mapped bank topics', async () => {
    const qs = await generateMatchQuestions(40, 'ap-precalculus', ['complex-numbers'])
    const allowed = new Set(apPrecalcQuestionBank.filter((q) => q.topicSlug === 'complex-numbers-fundamental-theorem').map((q) => q.question))
    expect(qs).toHaveLength(10)
    for (const s of stemsOf(qs)) expect(allowed.has(s), s).toBe(true)
  })

  it('teacher lobbies offer only on-exam topics', async () => {
    const topics = await getCourseTopics('ap-precalculus')
    expect(topics).toHaveLength(22)
    for (const t of topics) expect(AP_PRECALC_EXCLUDED_TOPIC_SLUGS.has(t.slug), t.slug).toBe(false)
    expect(topics.find((t) => t.slug === 'polar-coordinates-graphs')?.count).toBe(10)
  })

  it('the daily challenge uses the AP set', () => {
    expect(dailySetForCourse('ap-precalculus')).toBe('ap-precalculus')
  })
})

describe('every AP Precalculus topic routes to the AP precalc pool', () => {
  it.each(AP_PRECALC_SLUGS.filter((s) => !UNIT_CIRCLE_GAME.has(s)))('%s', async (slug) => {
    const entry = AP_LESSON_BANK_TOPICS[slug]
    expect(entry, `${slug} has no bank mapping`).toBeDefined()
    expect(entry.course).toBe('ap-precalculus')
    const wanted = new Set(apPrecalcQuestionBank.filter((q) => entry.topics.includes(q.topicSlug)).map((q) => q.question))
    expect(wanted.size, `${slug} maps to no AP bank items`).toBeGreaterThan(0)
    const qs = await generateMatchQuestions(10, slug, [])
    expect(qs).toHaveLength(10)
    for (const s of stemsOf(qs)) expect(wanted.has(s), `${slug}: ${s}`).toBe(true)
  })

  it('the-unit-circle keeps the unit-circle game', async () => {
    const qs = (await generateMatchQuestions(10, 'the-unit-circle', [])) as unknown as Array<{ type: string }>
    for (const q of qs) expect(['find-angle', 'find-coordinate']).toContain(q.type)
  })
})

describe('the non-AP precalc draw is unchanged', () => {
  it('keeps all 270 items across 27 topics, including Unit 4', () => {
    expect(precalcQuestionBank).toHaveLength(270)
    expect(new Set(precalcQuestionBank.map((q) => q.topicSlug)).size).toBe(27)
    expect(precalcQuestionBank.some((q) => q.id > 270)).toBe(false)
    const all = getPreCalcQuestions(1_000_000)
    expect(all).toHaveLength(270)
    expect(all.filter(isExcluded)).toHaveLength(53)
    for (const slug of AP_PRECALC_EXCLUDED_TOPIC_SLUGS) {
      expect(getPreCalcQuestions(100, slug).every((q) => q.topicSlug === slug), slug).toBe(true)
    }
  })

  it("the 'precalc' match slug still draws from the whole bank", async () => {
    const qs = await generateMatchQuestions(1000, 'precalc', [])
    expect(qs).toHaveLength(270)
    const stems = new Set(precalcQuestionBank.map((q) => q.question))
    for (const s of stemsOf(qs)) expect(stems.has(s), s).toBe(true)
    expect(stemsOf(qs).some((s) => excludedStems.has(s))).toBe(true)
  })
})

// ---------------------------------------------------------------------------
// Cross-subject fallback guard for every AP course.
const COURSE_BANKS: Record<string, () => Promise<Array<{ question: string }>>> = {
  'ap-precalculus': async () => (await import('@/data/competitive-questions/precalc-bank')).getApPrecalcQuestions(1_000_000),
  'ap-calculus-ab': async () => (await import('@/data/competitive-questions/ap-calculus-bank')).getApCalculusQuestions(1_000_000),
  'ap-calculus-bc': async () => (await import('@/data/competitive-questions/ap-calculus-bc-bank')).getApCalculusBCQuestions(1_000_000),
  'ap-physics-1': async () => (await import('@/data/competitive-questions/ap-physics1-bank')).getApPhysics1Questions(1_000_000),
  'ap-physics-2': async () => (await import('@/data/competitive-questions/ap-physics2-bank')).getApPhysics2Questions(1_000_000),
  'ap-physics-c-mechanics': async () => (await import('@/data/competitive-questions/ap-physics-c-mech-bank')).getApPhysicsCMechQuestions(1_000_000),
  'ap-physics-c-em': async () => (await import('@/data/competitive-questions/ap-physics-c-em-bank')).getApPhysicsCEMQuestions(1_000_000),
  'ap-chemistry': async () => (await import('@/data/competitive-questions/ap-chemistry-bank')).getApChemistryQuestions(1_000_000),
  'ap-biology': async () => (await import('@/data/competitive-questions/ap-biology-bank')).getApBiologyQuestions(1_000_000),
  'ap-psychology': async () => (await import('@/data/competitive-questions/ap-psychology-bank')).getApPsychologyQuestions(1_000_000),
  'ap-statistics': async () => (await import('@/data/competitive-questions/ap-statistics-bank')).getApStatisticsQuestions(1_000_000),
  'ap-human-geography': async () => (await import('@/data/competitive-questions/ap-human-geo-bank')).getApHumanGeoQuestions(1_000_000),
  'ap-us-government': async () => (await import('@/data/competitive-questions/ap-us-gov-bank')).getApUSGovQuestions(1_000_000),
  'ap-world-history': async () => (await import('@/data/competitive-questions/ap-world-history-bank')).getApWorldHistoryQuestions(1_000_000),
  'ap-us-history': async () => (await import('@/data/competitive-questions/ap-us-history-bank')).getApUSHistoryQuestions(1_000_000),
  'ap-macroeconomics': async () => (await import('@/data/competitive-questions/ap-macro-bank')).getApMacroQuestions(1_000_000),
  'ap-microeconomics': async () => (await import('@/data/competitive-questions/ap-micro-bank')).getApMicroQuestions(1_000_000),
  'ap-african-american-studies': async () => (await import('@/data/competitive-questions/ap-african-american-studies-bank')).getApAASQuestions(1_000_000),
  'ap-english-literature': async () => (await import('@/data/competitive-questions/ap-english-lit-bank')).getApEngLitQuestions(1_000_000),
  'ap-english-language': async () => (await import('@/data/competitive-questions/ap-english-lang-bank')).getApEngLangQuestions(1_000_000),
  'ap-environmental-science': async () => (await import('@/data/competitive-questions/ap-enviro-bank')).getApAPESQuestions(1_000_000),
  'ap-computer-science-a': async () => (await import('@/data/competitive-questions/ap-csa-bank')).getApCSAQuestions(1_000_000),
  'ap-computer-science-principles': async () => (await import('@/data/competitive-questions/ap-csp-bank')).getApCSPQuestions(1_000_000),
}

describe('every AP fixture topic draws from its own course bank', () => {
  it('covers every fixture course', () => {
    expect(Object.keys(fixture).sort()).toEqual(Object.keys(COURSE_BANKS).sort())
  })

  it('every mapped bank topic exists in its bank', async () => {
    const byCourse: Record<string, string> = {
      'ap-precalculus': 'ap-precalculus', 'ap-calculus-ab': 'ap-calculus-ab', 'ap-chemistry': 'ap-chemistry',
      'ap-biology': 'ap-biology', 'ap-human-geo': 'ap-human-geography', 'ap-us-gov': 'ap-us-government',
      'ap-world-history': 'ap-world-history', 'ap-african-american-studies': 'ap-african-american-studies',
      'ap-english-lit': 'ap-english-literature', 'ap-english-lang': 'ap-english-language',
      'ap-enviro': 'ap-environmental-science', 'ap-csa': 'ap-computer-science-a', 'ap-csp': 'ap-computer-science-principles',
    }
    for (const [lesson, { course, topics }] of Object.entries(AP_LESSON_BANK_TOPICS)) {
      const bankTopics = new Set(((await COURSE_BANKS[byCourse[course]]()) as Array<{ topicSlug?: string }>).map((q) => q.topicSlug))
      for (const t of topics) expect(bankTopics.has(t), `${lesson} -> ${t}`).toBe(true)
    }
  })

  const entries = Object.entries(fixture).flatMap(([course, slugs]) =>
    slugs.filter((s) => !UNIT_CIRCLE_GAME.has(s)).map((slug) => [course, slug] as const),
  )
  it.each(entries)('%s / %s', async (course, slug) => {
    const own = new Set((await COURSE_BANKS[course]()).map((q) => q.question))
    const qs = await generateMatchQuestions(10, slug, [])
    expect(qs.length).toBeGreaterThan(0)
    for (const s of stemsOf(qs)) expect(own.has(s), `${slug} served a foreign item: ${s}`).toBe(true)
  })
})
