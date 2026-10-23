/**
 * AP Precalculus competitive mode draws from the precalc bank it shares with
 * the non-AP Precalculus course. The AP view drops what the AP exam does not
 * assess (Unit 4, plus three limaçon/equation-conversion polar items), and
 * every AP Precalculus topic must route to that view instead of falling
 * through to cumulative questions from other subjects (Oct 2026: picking
 * "Complex Numbers" served an integral and an optics item; the unmapped
 * `negative-and-coterminal-angles` row served BC polar and limits).
 *
 * 2026-10-22 finalize (ap-phase1-pipeline/precalc-final/PLAN.md): the course
 * is 19 live Topic rows in the three CED units plus 27 retired rows that 308
 * to a live row. Every live row draws only from the bank topics of its own
 * unit; every retired row routes exactly like its target; the bank carries
 * >= 10 items (>= 3 hard) per on-exam topic after the depth rebuild.
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
import {
  generateMatchQuestions,
  AP_LESSON_BANK_TOPICS,
  AP_PRECALC_BANK_TOPICS,
  AP_PRECALC_COMPETITIVE_TOPICS,
  COURSE_GROUPING_LESSONS,
} from '@/lib/competitive-utils'
import { getCourseTopics } from '@/lib/teacher-lobby-courses'
import { dailySetForCourse } from '@/lib/daily-challenge'
import { COURSE_PAGE_CONFIGS } from '@/components/competitive/course-page-configs'
import { PRECALC_TOPIC_TITLES } from '@/lib/course-includes'
import { PRECALCULUS_UNIT_TESTS_CONFIG, PRECALCULUS_UNITS } from '@/data/unit-tests/precalculus'
import { courseKeyFromTables } from '@/lib/bot-pacing'
import slugsByCourse from '../fixtures/ap-lesson-topic-slugs.json'

// The first match draw loads every AP bank (the generic AP slug map).
vi.setConfig({ testTimeout: 60_000 })

const fixture = slugsByCourse as Record<string, string[]>

// ---------------------------------------------------------------------------
// The canonical layout (PLAN.md): live Topic slugs by CED unit, and the bank
// topics each unit owns. Pinned here on purpose — the fixture is generated
// from the same table, and a drift in either shows up as a failure.
const LIVE_BY_UNIT: Record<1 | 2 | 3, string[]> = {
  1: [
    'rates-of-change-precalc', 'polynomial-functions-precalc', 'fundamental-theorem-algebra',
    'polynomial-division-remainder-theorem', 'rational-functions-precalc', 'transformations-precalc',
    'function-modeling-precalc',
  ],
  2: [
    'sequences-series-precalc', 'exponential-functions-precalc', 'function-composition-inverses-precalc',
    'logarithmic-functions-precalc', 'exponential-logarithmic-modeling-precalc',
  ],
  3: [
    'the-unit-circle', 'trigonometric-functions-precalc', 'graphing-trig-functions',
    'inverse-trig-functions-precalc', 'solving-trig-equations', 'trigonometric-identities-precalc',
    'polar-coordinates-precalc',
  ],
}
const BANK_BY_UNIT: Record<1 | 2 | 3, string[]> = {
  1: [
    'rates-of-change', 'polynomial-functions-end-behavior', 'polynomial-zeros-multiplicity',
    'complex-numbers-fundamental-theorem', 'polynomial-division', 'rational-functions-asymptotes',
    'transformations-of-functions', 'function-model-selection', 'piecewise-functions',
  ],
  2: [
    'arithmetic-geometric-sequences', 'sequences-and-series', 'exponential-functions-growth-decay',
    'exponential-models-applications', 'composite-functions', 'inverse-functions',
    'logarithmic-functions-properties', 'natural-log-and-e', 'logarithmic-equations', 'logarithmic-models-semi-log',
  ],
  3: [
    'trigonometric-ratios-unit-circle', 'graphs-of-sine-and-cosine', 'inverse-trig-functions',
    'trig-identities-pythagorean', 'polar-coordinates-graphs',
  ],
}
const LIVE = [...LIVE_BY_UNIT[1], ...LIVE_BY_UNIT[2], ...LIVE_BY_UNIT[3]]
const unitOfLive = (slug: string) => ([1, 2, 3] as const).find((u) => LIVE_BY_UNIT[u].includes(slug))!
const unitOfBank = (slug: string) => ([1, 2, 3] as const).find((u) => BANK_BY_UNIT[u].includes(slug))

/** Retired Topic slug -> the live row it 308s to (PLAN.md, 27 rows). */
const RETIRED_TO_TARGET: Record<string, string> = {
  'function-transformations': 'transformations-precalc',
  'transformations-functions-precalc': 'transformations-precalc',
  'composite-inverse-functions': 'function-composition-inverses-precalc',
  'piecewise-functions': 'function-modeling-precalc',
  'rates-of-change': 'rates-of-change-precalc',
  'sequences-arithmetic-geometric': 'sequences-series-precalc',
  'polynomial-functions-end-behavior': 'polynomial-functions-precalc',
  'polynomial-functions-end-behavior-precalc': 'polynomial-functions-precalc',
  'solving-polynomial-inequalities': 'polynomial-functions-precalc',
  'rational-functions-asymptotes': 'rational-functions-precalc',
  'rational-functions-asymptotes-precalc': 'rational-functions-precalc',
  'solving-rational-inequalities': 'rational-functions-precalc',
  'complex-numbers': 'fundamental-theorem-algebra',
  'exponential-functions-modeling-precalc': 'exponential-functions-precalc',
  'exponential-functions-growth-decay': 'exponential-functions-precalc',
  'logarithmic-exponential-models': 'exponential-logarithmic-modeling-precalc',
  'logarithmic-functions': 'logarithmic-functions-precalc',
  'logarithmic-functions-equations-precalc': 'logarithmic-functions-precalc',
  'solving-exponential-logarithmic-equations': 'logarithmic-functions-precalc',
  'degrees-and-radians': 'trigonometric-functions-precalc',
  'negative-and-coterminal-angles': 'trigonometric-functions-precalc',
  'unit-circle-radian-measure': 'the-unit-circle',
  'trigonometric-identities': 'trigonometric-identities-precalc',
  'sum-difference-identities': 'trigonometric-identities-precalc',
  'double-half-angle-identities': 'trigonometric-identities-precalc',
  'inverse-trig-functions': 'inverse-trig-functions-precalc',
  'polar-coordinates': 'polar-coordinates-precalc',
}
const EXAM_PREP = ['precalc-frq-strategies', 'precalc-exam-review']
// Served as the click-the-position unit-circle game, not bank MCQs.
const UNIT_CIRCLE_GAME = new Set(['the-unit-circle'])

const isExcluded = (q: { id: number; topicSlug: string }) =>
  AP_PRECALC_EXCLUDED_IDS.has(q.id) || AP_PRECALC_EXCLUDED_TOPIC_SLUGS.has(q.topicSlug)
const apStems = new Set(apPrecalcQuestionBank.map((q) => q.question))
const excludedStems = new Set(
  precalcQuestionBank.filter(isExcluded).map((q) => q.question).filter((s) => !apStems.has(s)),
)
const stemsOf = (qs: Array<{ question?: unknown }>) => qs.map((q) => String(q.question))
/** Bank topic(s) a served stem can belong to (stems are unique, but keep it a set). */
const stemTopics = new Map<string, Set<string>>()
for (const q of apPrecalcQuestionBank) stemTopics.set(q.question, new Set([...(stemTopics.get(q.question) ?? []), q.topicSlug]))
const topicsOfDraw = (qs: Array<{ question?: unknown }>) =>
  stemsOf(qs).map((s) => stemTopics.get(s) ?? new Set<string>(['<foreign>']))

describe('the canonical layout and the fixture agree', () => {
  it('fixture = the 19 live PLAN.md slugs', () => {
    expect([...fixture['ap-precalculus']].sort()).toEqual([...LIVE].sort())
    expect(LIVE).toHaveLength(19)
    expect(Object.keys(RETIRED_TO_TARGET)).toHaveLength(27)
    for (const target of Object.values(RETIRED_TO_TARGET)) expect(LIVE, target).toContain(target)
  })

  it('AP_PRECALC_BANK_TOPICS lists exactly the on-exam bank topics, grouped by unit', () => {
    const inBank = new Set(apPrecalcQuestionBank.map((q) => q.topicSlug))
    expect([...AP_PRECALC_BANK_TOPICS].sort()).toEqual([...inBank].sort())
    expect([...AP_PRECALC_BANK_TOPICS].sort()).toEqual([...BANK_BY_UNIT[1], ...BANK_BY_UNIT[2], ...BANK_BY_UNIT[3]].sort())
  })

  it('AP_PRECALC_COMPETITIVE_TOPICS covers every live, retired and exam-prep slug', () => {
    for (const s of [...LIVE, ...Object.keys(RETIRED_TO_TARGET), ...EXAM_PREP]) expect(AP_PRECALC_COMPETITIVE_TOPICS.has(s), s).toBe(true)
  })

  it('no precalc slug is a whole-bank COURSE_GROUPING_LESSONS bucket', () => {
    for (const s of [...LIVE, ...Object.keys(RETIRED_TO_TARGET), ...EXAM_PREP]) expect(COURSE_GROUPING_LESSONS[s], s).toBeUndefined()
  })
})

describe('AP Precalculus draws exclude off-exam items', () => {
  it('excludes exactly the 53 listed items and keeps every on-exam topic at >= 10 items with >= 3 hard', () => {
    expect(precalcQuestionBank.filter(isExcluded)).toHaveLength(53)
    expect(apPrecalcQuestionBank.some(isExcluded)).toBe(false)
    expect(apPrecalcQuestionBank).toHaveLength(460)
    const counts = new Map<string, number>()
    const hard = new Map<string, number>()
    for (const q of apPrecalcQuestionBank) {
      counts.set(q.topicSlug, (counts.get(q.topicSlug) ?? 0) + 1)
      if (q.difficulty === 'hard') hard.set(q.topicSlug, (hard.get(q.topicSlug) ?? 0) + 1)
    }
    expect(counts.size).toBe(24)
    for (const [slug, n] of counts) expect(n, slug).toBeGreaterThanOrEqual(10)
    for (const slug of counts.keys()) expect(hard.get(slug) ?? 0, `${slug} hard items`).toBeGreaterThanOrEqual(3)
    // The 22 original topics were rebuilt to >= 19 (10 + 10, minus retags).
    for (const slug of AP_PRECALC_BANK_TOPICS) {
      if (slug === 'function-model-selection' || slug === 'logarithmic-models-semi-log') continue
      expect(counts.get(slug) ?? 0, slug).toBeGreaterThanOrEqual(19)
    }
    expect(new Set(apPrecalcQuestionBank.map((q) => q.id)).size).toBe(apPrecalcQuestionBank.length)
    expect(new Set(apPrecalcQuestionBank.map((q) => q.question)).size).toBe(apPrecalcQuestionBank.length)
  })

  it('every item has four distinct options and an in-range key', () => {
    for (const q of precalcQuestionBank) {
      expect(q.options, `#${q.id}`).toHaveLength(4)
      expect(new Set(q.options).size, `#${q.id}`).toBe(4)
      expect(q.correctAnswer, `#${q.id}`).toBeGreaterThanOrEqual(0)
      expect(q.correctAnswer, `#${q.id}`).toBeLessThan(4)
      // List-style data must be a pipe table, never whitespace-aligned rows.
      expect(/[A-Za-z)]: +-?\d+ +-?\d+ +-?\d+/.test(q.question), `#${q.id} pseudo-table`).toBe(false)
    }
  })

  it('the 2026-10 audit items are fixed', () => {
    const byId = new Map(precalcQuestionBank.map((q) => [q.id, q]))
    // Retags
    expect(byId.get(215)!.topicSlug).toBe('inverse-trig-functions')
    expect(byId.get(125)!.topicSlug).toBe('logarithmic-functions-properties')
    expect(byId.get(29)!.topicSlug).toBe('logarithmic-equations')
    // Off-scope complex arithmetic / finance recall rewritten
    for (const id of [96, 97, 99, 168, 169, 172]) expect(byId.get(id)!.question, `#${id}`).not.toMatch(/\(\d \+ \d i\)|Modulus|i\^[24]/)
    for (const id of [30, 112, 106]) expect(byId.get(id)!.question, `#${id}`).not.toMatch(/compound/i)
    // Broken stems / keys / explanation
    expect(byId.get(134)!.question).not.toMatch(/as above/)
    expect(byId.get(243)!.options[byId.get(243)!.correctAnswer]).not.toMatch(/turning points − 1/)
    expect(byId.get(141)!.explanation).toMatch(/Difference of cubes/)
    // Duplicates replaced (later copy differs from the earlier one)
    const pairs: Array<[number, number]> = [[239, 27], [226, 51], [210, 54], [211, 57], [186, 58], [191, 60], [187, 61], [147, 86], [148, 87], [119, 103], [121, 104]]
    for (const [later, earlier] of pairs) expect(byId.get(later)!.question, `#${later} still duplicates #${earlier}`).not.toBe(byId.get(earlier)!.question)
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
    const qs = await generateMatchQuestions(40, 'ap-precalculus', ['fundamental-theorem-algebra'])
    const allowed = new Set(['complex-numbers-fundamental-theorem', 'polynomial-zeros-multiplicity'])
    expect(qs).toHaveLength(40)
    for (const ts of topicsOfDraw(qs)) expect([...ts].some((t) => allowed.has(t)), [...ts].join()).toBe(true)
  })

  it('teacher lobbies offer the live layout rows with their lesson titles', async () => {
    const topics = await getCourseTopics('ap-precalculus')
    const expected = LIVE.filter((s) => !UNIT_CIRCLE_GAME.has(s))
    expect(topics.map((t) => t.slug).sort()).toEqual([...expected].sort())
    for (const t of topics) {
      expect(t.title, t.slug).toBe(PRECALC_TOPIC_TITLES[t.slug])
      expect(t.count, t.slug).toBeGreaterThanOrEqual(10)
      expect(AP_PRECALC_EXCLUDED_TOPIC_SLUGS.has(t.slug), t.slug).toBe(false)
    }
    expect(topics.find((t) => t.slug === 'polar-coordinates-precalc')?.count).toBe(20)
    expect(topics.find((t) => t.slug === 'function-modeling-precalc')?.count).toBe(30)
  })

  it('the daily challenge uses the AP set', () => {
    expect(dailySetForCourse('ap-precalculus')).toBe('ap-precalculus')
  })
})

describe('every live AP Precalculus topic draws only from its own CED unit', () => {
  it.each(LIVE.filter((s) => !UNIT_CIRCLE_GAME.has(s)))('%s', async (slug) => {
    const entry = AP_LESSON_BANK_TOPICS[slug]
    expect(entry, `${slug} has no bank mapping`).toBeDefined()
    expect(entry.course).toBe('ap-precalculus')
    const unit = unitOfLive(slug)
    for (const t of entry.topics) expect(unitOfBank(t), `${slug} -> ${t} is not a Unit ${unit} bank topic`).toBe(unit)
    const own = new Set(entry.topics)
    const qs = await generateMatchQuestions(40, slug, [])
    expect(qs.length).toBeGreaterThanOrEqual(10)
    for (const ts of topicsOfDraw(qs)) expect([...ts].some((t) => own.has(t)), `${slug} served ${[...ts].join()}`).toBe(true)
    // Bot pacing resolves the row to the AP course (not 'unknown' = 60 s fallback).
    expect(courseKeyFromTables(slug)).toBe('ap-precalculus')
  })

  it('the-unit-circle keeps the unit-circle game', async () => {
    const qs = (await generateMatchQuestions(10, 'the-unit-circle', [])) as unknown as Array<{ type: string }>
    for (const q of qs) expect(['find-angle', 'find-coordinate']).toContain(q.type)
  })

  it('exam-prep rows draw the whole on-exam pool, listed explicitly', () => {
    for (const s of EXAM_PREP) {
      expect(AP_LESSON_BANK_TOPICS[s]?.course).toBe('ap-precalculus')
      expect([...AP_LESSON_BANK_TOPICS[s].topics].sort()).toEqual([...AP_PRECALC_BANK_TOPICS].sort())
    }
  })
})

describe('every retired AP Precalculus topic routes exactly like its 308 target', () => {
  it.each(Object.entries(RETIRED_TO_TARGET))('%s -> %s', async (retired, target) => {
    const entry = AP_LESSON_BANK_TOPICS[retired]
    expect(entry, `${retired} has no bank mapping`).toBeDefined()
    expect(entry.course).toBe('ap-precalculus')
    if (UNIT_CIRCLE_GAME.has(target)) {
      // The game has no bank topics; the retired MCQ row stays on the unit-circle pool.
      expect(entry.topics).toEqual(['trigonometric-ratios-unit-circle'])
    } else {
      expect([...entry.topics].sort()).toEqual([...AP_LESSON_BANK_TOPICS[target].topics].sort())
    }
    const own = new Set(entry.topics)
    const qs = await generateMatchQuestions(40, retired, [])
    expect(qs.length).toBeGreaterThanOrEqual(10)
    for (const ts of topicsOfDraw(qs)) expect([...ts].some((t) => own.has(t)), `${retired} served ${[...ts].join()}`).toBe(true)
    expect(courseKeyFromTables(retired)).toBe('ap-precalculus')
  })
})

describe('the non-AP precalc draw still covers the whole bank', () => {
  it('keeps all 510 items across 29 topics, including Unit 4', () => {
    expect(precalcQuestionBank).toHaveLength(510)
    expect(new Set(precalcQuestionBank.map((q) => q.topicSlug)).size).toBe(29)
    expect(precalcQuestionBank.some((q) => q.id > 513)).toBe(false)
    const all = getPreCalcQuestions(1_000_000)
    expect(all).toHaveLength(510)
    expect(all.filter(isExcluded)).toHaveLength(53)
    for (const slug of AP_PRECALC_EXCLUDED_TOPIC_SLUGS) {
      expect(getPreCalcQuestions(100, slug).every((q) => q.topicSlug === slug), slug).toBe(true)
    }
  })

  it("the 'precalc' match slug still draws from the whole bank", async () => {
    const qs = await generateMatchQuestions(1000, 'precalc', [])
    expect(qs).toHaveLength(510)
    const stems = new Set(precalcQuestionBank.map((q) => q.question))
    for (const s of stemsOf(qs)) expect(stems.has(s), s).toBe(true)
    expect(stemsOf(qs).some((s) => excludedStems.has(s))).toBe(true)
  })

  it('the seeded non-AP unit tests still resolve every unit to a pool', () => {
    expect(PRECALCULUS_UNIT_TESTS_CONFIG.pool.length).toBeGreaterThan(0)
    for (const unit of PRECALCULUS_UNITS) {
      const n = PRECALCULUS_UNIT_TESTS_CONFIG.pool.filter((q) => q.domain === unit.id).length
      expect(n, unit.id).toBeGreaterThanOrEqual(20)
    }
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
