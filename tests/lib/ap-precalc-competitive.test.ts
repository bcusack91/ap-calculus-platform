/**
 * AP Precalculus competitive mode draws from precalc-bank.ts, which holds
 * only what the AP exam assesses (the non-AP Precalculus track that shared
 * it, with its Unit 4 and three limaçon/equation-conversion polar items, was
 * retired 2026-10-23). Every AP Precalculus topic must route to that bank
 * instead of falling through to cumulative questions from other subjects
 * (Oct 2026: picking "Complex Numbers" served an integral and an optics item;
 * the unmapped `negative-and-coterminal-angles` row served BC polar and limits).
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
import { apPrecalcQuestionBank, getApPrecalcQuestions } from '@/data/competitive-questions/precalc-bank'
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

/** Unit 4 bank topics the retired non-AP track carried; no item may be tagged with them. */
const UNIT4_BANK_TOPICS = ['law-of-sines-and-cosines', 'parametric-equations-motion', 'vectors-in-two-dimensions', 'matrices-and-determinants', 'systems-of-equations-matrices']
const apStems = new Set(apPrecalcQuestionBank.map((q) => q.question))
const stemsOf = (qs: Array<{ question?: unknown }>) => qs.map((q) => String(q.question))
/** Bank topic(s) a served stem can belong to (stems are unique, but keep it a set). */
const stemTopics = new Map<string, Set<string>>()
for (const q of apPrecalcQuestionBank) stemTopics.set(q.question, new Set([...(stemTopics.get(q.question) ?? []), q.topicSlug]))
const topicsOfDraw = (qs: Array<{ question?: unknown }>) =>
  stemsOf(qs).map((s) => stemTopics.get(s) ?? new Set<string>(['<foreign>']))

describe('the canonical layout and the fixture agree', () => {
  it('fixture = the 19 live PLAN.md slugs + the 2 exam-prep lessons', () => {
    expect([...fixture['ap-precalculus']].sort()).toEqual([...LIVE, ...EXAM_PREP].sort())
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

describe('the precalc bank is the AP on-exam pool', () => {
  it('is on-exam only (533 items, 24 topics, no Unit 4) and keeps every topic at >= 10 items with >= 3 hard', () => {
    for (const q of apPrecalcQuestionBank) expect(UNIT4_BANK_TOPICS, `#${q.id}`).not.toContain(q.topicSlug)
    // The three off-exam polar items (limaçon a/b classification, equation conversion) are gone.
    for (const id of [69, 207, 208]) expect(apPrecalcQuestionBank.find((q) => q.id === id), `#${id}`).toBeUndefined()
    expect(apPrecalcQuestionBank).toHaveLength(533)
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
    for (const q of apPrecalcQuestionBank) {
      expect(q.options, `#${q.id}`).toHaveLength(4)
      expect(new Set(q.options).size, `#${q.id}`).toBe(4)
      expect(q.correctAnswer, `#${q.id}`).toBeGreaterThanOrEqual(0)
      expect(q.correctAnswer, `#${q.id}`).toBeLessThan(4)
      // List-style data must be a pipe table, never whitespace-aligned rows.
      expect(/[A-Za-z)]: +-?\d+ +-?\d+ +-?\d+/.test(q.question), `#${q.id} pseudo-table`).toBe(false)
    }
  })

  it('the 2026-10 audit items are fixed', () => {
    const byId = new Map(apPrecalcQuestionBank.map((q) => [q.id, q]))
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

  it('every difficulty is one of the three labels and every topic keeps >= 3 hard items', () => {
    const hard = new Map<string, number>()
    for (const q of apPrecalcQuestionBank) {
      expect(['easy', 'medium', 'hard'], `#${q.id}`).toContain(q.difficulty)
      if (q.difficulty === 'hard') hard.set(q.topicSlug, (hard.get(q.topicSlug) ?? 0) + 1)
    }
    for (const slug of AP_PRECALC_BANK_TOPICS) expect(hard.get(slug) ?? 0, `${slug} hard items`).toBeGreaterThanOrEqual(3)
  })

  it('the 2026-10-23 round-2 alignment fixes hold', () => {
    const byId = new Map(apPrecalcQuestionBank.map((q) => [q.id, q]))
    // Exponential model choice (CED 2.6) left the Unit 1 model-selection topic.
    for (const id of [355, 362]) expect(byId.get(id)!.topicSlug, `#${id}`).toBe('exponential-models-applications')
    expect(byId.get(118)!.topicSlug).toBe('logarithmic-equations')
    // Off-scope / broken / duplicate items rewritten in place.
    expect(byId.get(118)!.question).not.toMatch(/grows continuously at/)
    expect(byId.get(321)!.question).not.toMatch(/remainder/i)
    expect(byId.get(489)!.question).not.toMatch(/ladder/i)
    expect(byId.get(175)!.question).not.toMatch(/same \$f, g\$/)
    expect(byId.get(251)!.question).not.toMatch(/Vertical asymptote/)
    expect(byId.get(177)!.question).not.toMatch(/^Domain of \$f \\circ g\$ requires/)
    // Hard top-up: ids 514-593 exist (73 of them; 532-533, 550-553 and 573 are unused).
    expect(apPrecalcQuestionBank.filter((q) => q.id >= 514)).toHaveLength(73)
  })

  it('getApPrecalcQuestions serves the whole pool for a Unit 4 or unknown topic, never a Unit 4 item', () => {
    expect(getApPrecalcQuestions(1_000_000)).toHaveLength(533)
    for (const slug of [...UNIT4_BANK_TOPICS, 'no-such-topic']) {
      const qs = getApPrecalcQuestions(1_000_000, slug)
      expect(qs, slug).toHaveLength(533)
      expect(qs.some((q) => q.topicSlug === slug), slug).toBe(false)
    }
    expect(getApPrecalcQuestions(1_000_000, 'polar-coordinates-graphs').every((q) => q.topicSlug === 'polar-coordinates-graphs')).toBe(true)
  })

  it('the AP course page fallback draws only on-exam items', async () => {
    const fallback = COURSE_PAGE_CONFIGS['ap-precalculus'].fallbackTopicSlug
    expect(fallback).toBe('ap-precalculus')
    for (const tier of [undefined, 'easy', 'medium', 'hard'] as const) {
      const qs = await generateMatchQuestions(1000, fallback, [], tier)
      expect(qs.length).toBeGreaterThan(0)
      for (const s of stemsOf(qs)) {
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
    // The exam-prep lessons route to the whole on-exam bank, so the lobby offers them too.
    const expected = [...LIVE.filter((s) => !UNIT_CIRCLE_GAME.has(s)), ...EXAM_PREP]
    expect(topics.map((t) => t.slug).sort()).toEqual([...expected].sort())
    for (const t of topics) {
      expect(t.title, t.slug).toBe(PRECALC_TOPIC_TITLES[t.slug])
      expect(t.count, t.slug).toBeGreaterThanOrEqual(10)
      expect(UNIT4_BANK_TOPICS, t.slug).not.toContain(t.slug)
    }
    expect(topics.find((t) => t.slug === 'polar-coordinates-precalc')?.count).toBe(22)
    expect(topics.find((t) => t.slug === 'function-modeling-precalc')?.count).toBe(34)
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

describe('the retired non-AP precalc surface maps to AP Precalculus', () => {
  it("old 'precalc' / 'precalculus' keys pace and study as the AP course", () => {
    expect(courseKeyFromTables('precalc')).toBe('ap-precalculus')
    expect(courseKeyFromTables('precalculus')).toBe('ap-precalculus')
    expect(dailySetForCourse('precalculus')).toBe('ap-precalculus')
  })
})
