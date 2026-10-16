/**
 * Guard for the AP per-unit tests (src/data/unit-tests/ap-*.ts).
 *
 * Each course's unit tests follow its CED units and draw from the course's
 * exit-quiz pool, re-filed onto those units by a UnitAssignment where the
 * pool's domains don't line up, plus a supplement for units the pool leaves
 * thin. The engine picks a unit's questions by `domain === unit.id`, so:
 *   - every exit-pool item must land in some unit (or be dropped on purpose by
 *     a null stem rule: items about the exam itself, not CED content);
 *   - every unit must draw at least 40 distinct items, enough for four
 *     12-question variations that barely overlap;
 *   - stem rules must keep matching exactly one item, so an edited stem can't
 *     silently fall back to the wrong unit;
 *   - the generated teacher unit picker (course-units.ts) must match.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

import { aasQuestionPool } from '@/data/exit-quizzes/ap-african-american-studies'
import { apBioQuestionPool } from '@/data/exit-quizzes/ap-biology'
import { calcABQuestionPool } from '@/data/exit-quizzes/ap-calculus-ab'
import { calcBCQuestionPool } from '@/data/exit-quizzes/ap-calculus-bc'
import { apChemQuestionPool } from '@/data/exit-quizzes/ap-chemistry'
import { csaQuestionPool } from '@/data/exit-quizzes/ap-computer-science-a'
import { cspQuestionPool } from '@/data/exit-quizzes/ap-cs-principles'
import { engLangQuestionPool } from '@/data/exit-quizzes/ap-english-language'
import { engLitQuestionPool } from '@/data/exit-quizzes/ap-english-literature'
import { enviroQuestionPool } from '@/data/exit-quizzes/ap-environmental-science'
import { apHumanGeoQuestionPool } from '@/data/exit-quizzes/ap-human-geography'
import { macroQuestionPool } from '@/data/exit-quizzes/ap-macroeconomics'
import { microQuestionPool } from '@/data/exit-quizzes/ap-microeconomics'
import { apPhysics1QuestionPool } from '@/data/exit-quizzes/ap-physics-1'
import { apPhysics2QuestionPool } from '@/data/exit-quizzes/ap-physics-2'
import { apPhysicsCEMQuestionPool } from '@/data/exit-quizzes/ap-physics-c-em'
import { apPhysicsCMechQuestionPool } from '@/data/exit-quizzes/ap-physics-c-mechanics'
import { apPrecalcQuestionPool } from '@/data/exit-quizzes/ap-precalculus'
import { apPsychQuestionPool } from '@/data/exit-quizzes/ap-psychology'
import { apStatsQuestionPool } from '@/data/exit-quizzes/ap-statistics'
import { usGovQuestionPool } from '@/data/exit-quizzes/ap-us-government'
import { usHistQuestionPool } from '@/data/exit-quizzes/ap-us-history'
import { worldHistQuestionPool } from '@/data/exit-quizzes/ap-world-history'

import { AP_AAS_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-african-american-studies'
import { AP_BIOLOGY_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-biology'
import { AP_CALCULUS_AB_UNIT_TESTS_CONFIG, CALC_AB_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-calculus-ab'
import { AP_CALCULUS_BC_UNIT_TESTS_CONFIG, BC_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-calculus-bc'
import { AP_CHEMISTRY_UNIT_TESTS_CONFIG, AP_CHEMISTRY_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-chemistry'
import { AP_CSA_UNIT_TESTS_CONFIG, AP_CSA_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-computer-science-a'
import { AP_CSP_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-cs-principles'
import { AP_ENGLISH_LANG_UNIT_TESTS_CONFIG, AP_ENGLISH_LANG_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-english-language'
import { AP_ENGLISH_LIT_UNIT_TESTS_CONFIG, AP_ENGLISH_LIT_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-english-literature'
import { AP_ENVIRO_UNIT_TESTS_CONFIG, AP_ENVIRO_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-environmental-science'
import { AP_HUMAN_GEO_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-human-geography'
import { AP_MACRO_UNIT_TESTS_CONFIG, AP_MACRO_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-macroeconomics'
import { AP_MICRO_UNIT_TESTS_CONFIG, AP_MICRO_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-microeconomics'
import { AP_PHYSICS1_UNIT_TESTS_CONFIG, AP_PHYSICS1_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-physics-1'
import { AP_PHYSICS2_UNIT_TESTS_CONFIG, AP_PHYSICS2_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-physics-2'
import { AP_PHYSICS_C_EM_UNIT_TESTS_CONFIG, AP_PHYSICS_C_EM_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-physics-c-em'
import { AP_PHYSICS_C_MECH_UNIT_TESTS_CONFIG, AP_PHYSICS_C_MECH_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-physics-c-mechanics'
import { AP_PRECALCULUS_UNIT_TESTS_CONFIG, AP_PRECALCULUS_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-precalculus'
import { AP_PSYCHOLOGY_UNIT_TESTS_CONFIG, AP_PSYCHOLOGY_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-psychology'
import { AP_STATISTICS_UNIT_TESTS_CONFIG, AP_STATISTICS_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-statistics'
import { AP_US_GOV_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-us-government'
import { AP_US_HISTORY_UNIT_TESTS_CONFIG, AP_US_HISTORY_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-us-history'
import { AP_WORLD_HISTORY_UNIT_TESTS_CONFIG, AP_WORLD_HISTORY_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-world-history'

import { AP_CHEMISTRY_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-chemistry-supplement'
import { AP_CSA_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-computer-science-a-supplement'
import { AP_CSP_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-cs-principles-supplement'
import { AP_ENVIRO_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-environmental-science-supplement'
import { AP_HUMAN_GEO_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-human-geography-supplement'
import { AP_MACRO_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-macroeconomics-supplement'
import { AP_MICRO_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-microeconomics-supplement'
import { AP_PHYSICS1_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-physics-1-supplement'
import { AP_PHYSICS_C_EM_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-physics-c-em-supplement'
import { AP_PHYSICS_C_MECH_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-physics-c-mechanics-supplement'
import { AP_PSYCHOLOGY_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-psychology-supplement'
import { AP_US_GOV_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-us-government-supplement'
import { AP_US_HISTORY_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-us-history-supplement'
import { AP_WORLD_HISTORY_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-world-history-supplement'

import { hasInteractiveLesson } from '@/data/interactive-lessons/registry'
import { unitsForCourse } from '@/lib/unit-tests/course-units'
import {
  assignUnits,
  generateUnitTest,
  unitPool,
  type CourseUnitTestConfig,
  type UnitAssignment,
  type UnitPoolQuestion,
} from '@/lib/unit-tests/engine'

type Raw = Pick<UnitPoolQuestion, 'question' | 'domain' | 'topicSlug'>

interface Course {
  config: CourseUnitTestConfig
  /** The exit pool(s) the config draws from, before re-filing. */
  pools: Raw[][]
  /** The rules applied to those pools. */
  rules: UnitAssignment[]
  supplement?: UnitPoolQuestion[]
}

const COURSES: Course[] = [
  { config: AP_AAS_UNIT_TESTS_CONFIG, pools: [aasQuestionPool], rules: [] },
  { config: AP_BIOLOGY_UNIT_TESTS_CONFIG, pools: [apBioQuestionPool], rules: [] },
  { config: AP_CALCULUS_AB_UNIT_TESTS_CONFIG, pools: [calcABQuestionPool], rules: [CALC_AB_UNIT_ASSIGNMENT] },
  { config: AP_CALCULUS_BC_UNIT_TESTS_CONFIG, pools: [calcABQuestionPool, calcBCQuestionPool], rules: [CALC_AB_UNIT_ASSIGNMENT, BC_UNIT_ASSIGNMENT] },
  { config: AP_CHEMISTRY_UNIT_TESTS_CONFIG, pools: [apChemQuestionPool], rules: [AP_CHEMISTRY_UNIT_ASSIGNMENT], supplement: AP_CHEMISTRY_UNIT_SUPPLEMENT },
  { config: AP_CSA_UNIT_TESTS_CONFIG, pools: [csaQuestionPool], rules: [AP_CSA_UNIT_ASSIGNMENT], supplement: AP_CSA_UNIT_SUPPLEMENT },
  { config: AP_CSP_UNIT_TESTS_CONFIG, pools: [cspQuestionPool], rules: [], supplement: AP_CSP_UNIT_SUPPLEMENT },
  { config: AP_ENGLISH_LANG_UNIT_TESTS_CONFIG, pools: [engLangQuestionPool], rules: [AP_ENGLISH_LANG_UNIT_ASSIGNMENT] },
  { config: AP_ENGLISH_LIT_UNIT_TESTS_CONFIG, pools: [engLitQuestionPool], rules: [AP_ENGLISH_LIT_UNIT_ASSIGNMENT] },
  { config: AP_ENVIRO_UNIT_TESTS_CONFIG, pools: [enviroQuestionPool], rules: [AP_ENVIRO_UNIT_ASSIGNMENT], supplement: AP_ENVIRO_UNIT_SUPPLEMENT },
  { config: AP_HUMAN_GEO_UNIT_TESTS_CONFIG, pools: [apHumanGeoQuestionPool], rules: [], supplement: AP_HUMAN_GEO_UNIT_SUPPLEMENT },
  { config: AP_MACRO_UNIT_TESTS_CONFIG, pools: [macroQuestionPool], rules: [AP_MACRO_UNIT_ASSIGNMENT], supplement: AP_MACRO_UNIT_SUPPLEMENT },
  { config: AP_MICRO_UNIT_TESTS_CONFIG, pools: [microQuestionPool], rules: [AP_MICRO_UNIT_ASSIGNMENT], supplement: AP_MICRO_UNIT_SUPPLEMENT },
  { config: AP_PHYSICS1_UNIT_TESTS_CONFIG, pools: [apPhysics1QuestionPool], rules: [AP_PHYSICS1_UNIT_ASSIGNMENT], supplement: AP_PHYSICS1_UNIT_SUPPLEMENT },
  { config: AP_PHYSICS2_UNIT_TESTS_CONFIG, pools: [apPhysics2QuestionPool], rules: [AP_PHYSICS2_UNIT_ASSIGNMENT] },
  { config: AP_PHYSICS_C_EM_UNIT_TESTS_CONFIG, pools: [apPhysicsCEMQuestionPool], rules: [AP_PHYSICS_C_EM_UNIT_ASSIGNMENT], supplement: AP_PHYSICS_C_EM_UNIT_SUPPLEMENT },
  { config: AP_PHYSICS_C_MECH_UNIT_TESTS_CONFIG, pools: [apPhysicsCMechQuestionPool], rules: [AP_PHYSICS_C_MECH_UNIT_ASSIGNMENT], supplement: AP_PHYSICS_C_MECH_UNIT_SUPPLEMENT },
  { config: AP_PRECALCULUS_UNIT_TESTS_CONFIG, pools: [apPrecalcQuestionPool], rules: [AP_PRECALCULUS_UNIT_ASSIGNMENT] },
  { config: AP_PSYCHOLOGY_UNIT_TESTS_CONFIG, pools: [apPsychQuestionPool], rules: [AP_PSYCHOLOGY_UNIT_ASSIGNMENT], supplement: AP_PSYCHOLOGY_UNIT_SUPPLEMENT },
  { config: AP_STATISTICS_UNIT_TESTS_CONFIG, pools: [apStatsQuestionPool], rules: [AP_STATISTICS_UNIT_ASSIGNMENT] },
  { config: AP_US_GOV_UNIT_TESTS_CONFIG, pools: [usGovQuestionPool], rules: [], supplement: AP_US_GOV_UNIT_SUPPLEMENT },
  { config: AP_US_HISTORY_UNIT_TESTS_CONFIG, pools: [usHistQuestionPool], rules: [AP_US_HISTORY_UNIT_ASSIGNMENT], supplement: AP_US_HISTORY_UNIT_SUPPLEMENT },
  { config: AP_WORLD_HISTORY_UNIT_TESTS_CONFIG, pools: [worldHistQuestionPool], rules: [AP_WORLD_HISTORY_UNIT_ASSIGNMENT], supplement: AP_WORLD_HISTORY_UNIT_SUPPLEMENT },
]

const MIN_ITEMS_PER_UNIT = 40
const slug = (c: Course) => c.config.courseSlug
const unitIds = (c: Course) => new Set(c.config.units.map((u) => u.id))
const droppedStems = (c: Course) =>
  c.rules.flatMap((r) => Object.entries(r.stems ?? {}).filter(([, unit]) => unit === null).map(([stem]) => stem))

describe('AP unit tests cover the whole course', () => {
  it('lists every AP course that has unit tests', () => {
    expect(COURSES).toHaveLength(23)
    expect(new Set(COURSES.map(slug)).size).toBe(COURSES.length)
  })

  it('uses the production course slugs, so finished unit tests complete course assignments', () => {
    const prodSlugs = Object.keys(
      JSON.parse(fs.readFileSync(path.join(process.cwd(), 'tests/fixtures/ap-lesson-topic-slugs.json'), 'utf8')),
    )
    expect(COURSES.map(slug).filter((s) => !prodSlugs.includes(s))).toEqual([])
    expect(prodSlugs.filter((s) => !COURSES.map(slug).includes(s))).toEqual([])
  })

  it.each(COURSES.map((c) => [slug(c), c] as const))('%s: unit ids and numbers are unique', (_, c) => {
    expect(unitIds(c).size).toBe(c.config.units.length)
    expect(new Set(c.config.units.map((u) => u.unitNumber)).size).toBe(c.config.units.length)
  })

  it.each(COURSES.map((c) => [slug(c), c] as const))('%s: every exit-pool domain and item lands in a unit', (_, c) => {
    const ids = unitIds(c)
    const filed = new Map(c.config.pool.map((q) => [q.question, q.domain]))
    const dropped = droppedStems(c)
    const strays: string[] = []
    for (const q of c.pools.flat()) {
      if (dropped.some((stem) => q.question.startsWith(stem))) continue
      const unit = filed.get(q.question)
      if (!unit || !ids.has(unit)) strays.push(`${q.domain}/${q.topicSlug} -> ${unit ?? 'missing'}: ${q.question.slice(0, 60)}`)
    }
    expect(strays).toEqual([])
    // Domain-level view of the same fact, for a readable failure.
    const domains = new Set(c.pools.flat().map((q) => q.domain))
    for (const d of domains) {
      const reached = c.pools.flat().some((q) => q.domain === d && ids.has(filed.get(q.question) ?? ''))
      expect(reached, `${slug(c)}: exit-pool domain ${d} reaches no unit`).toBe(true)
    }
  })

  it.each(COURSES.map((c) => [slug(c), c] as const))(`%s: every unit draws at least ${MIN_ITEMS_PER_UNIT} distinct items`, (_, c) => {
    const thin = c.config.units
      .map((u) => ({ unit: u.id, items: unitPool(c.config, u.id).length }))
      .filter((u) => u.items < MIN_ITEMS_PER_UNIT)
    expect(thin).toEqual([])
  })

  it.each(COURSES.map((c) => [slug(c), c] as const))('%s: every stem rule matches exactly one exit-pool item', (_, c) => {
    const pool = c.pools.flat()
    const bad = c.rules
      .flatMap((r) => Object.keys(r.stems ?? {}))
      .map((stem) => ({ stem, matches: pool.filter((q) => q.question.startsWith(stem)).length }))
      .filter((r) => r.matches !== 1)
    expect(bad).toEqual([])
  })

  it.each(COURSES.map((c) => [slug(c), c] as const))('%s: every unit generates a full 12-question variation', (_, c) => {
    for (const u of c.config.units) {
      const test = generateUnitTest(c.config, u.id, 1)
      expect(test.totalQuestions).toBe(12)
      expect(new Set(test.questions.map((q) => q.question)).size).toBe(12)
    }
  })

  it.each(COURSES.map((c) => [slug(c), c] as const))('%s: the generated teacher unit picker matches the config', (_, c) => {
    expect(unitsForCourse(slug(c))).toEqual(c.config.units.map((u) => ({ id: u.id, unitNumber: u.unitNumber, name: u.name })))
  })
})

describe('AP unit-test supplements', () => {
  const withSupplement = COURSES.filter((c) => c.supplement)

  it.each(withSupplement.map((c) => [slug(c), c] as const))('%s: items are well-formed, filed under a unit, and new', (_, c) => {
    const ids = unitIds(c)
    const exitStems = new Set(c.pools.flat().map((q) => q.question))
    const problems: string[] = []
    const seen = new Set<string>()
    for (const q of c.supplement!) {
      const where = `${q.domain}: ${q.question.slice(0, 50)}`
      if (!ids.has(q.domain)) problems.push(`unknown unit ${where}`)
      if (q.options.length !== 4) problems.push(`not 4 options ${where}`)
      if (!(q.correctAnswer >= 0 && q.correctAnswer < q.options.length)) problems.push(`bad key ${where}`)
      if (new Set(q.options).size !== q.options.length) problems.push(`repeated option ${where}`)
      if (!q.explanation?.trim()) problems.push(`no explanation ${where}`)
      if (exitStems.has(q.question)) problems.push(`repeats an exit-pool stem ${where}`)
      if (seen.has(q.question)) problems.push(`repeated stem ${where}`)
      seen.add(q.question)
    }
    expect(problems).toEqual([])
  })

  it.each(withSupplement.map((c) => [slug(c), c] as const))('%s: every topic a supplement item links to has a lesson', (_, c) => {
    const missing = [...new Set(c.supplement!.map((q) => q.topicSlug))].filter((s) => !hasInteractiveLesson(s))
    expect(missing).toEqual([])
  })
})

describe('assignUnits and unitPool', () => {
  const pool: UnitPoolQuestion[] = [
    { question: 'Q1 alpha', options: ['a', 'b', 'c', 'd'], correctAnswer: 0, explanation: 'e', domain: 'd1', topicSlug: 't1' },
    { question: 'Q2 beta', options: ['a', 'b', 'c', 'd'], correctAnswer: 0, explanation: 'e', domain: 'd1', topicSlug: 't2' },
    { question: 'Q3 gamma', options: ['a', 'b', 'c', 'd'], correctAnswer: 0, explanation: 'e', domain: 'd2', topicSlug: 't2' },
    { question: 'Q4 delta', options: ['a', 'b', 'c', 'd'], correctAnswer: 0, explanation: 'e', domain: 'd3', topicSlug: 't3' },
    { question: 'Q1 alpha', options: ['a', 'b', 'c', 'd'], correctAnswer: 0, explanation: 'e', domain: 'd1', topicSlug: 't9' },
  ]

  it('applies stems over topics over domains, and drops null stems', () => {
    const out = assignUnits(pool, {
      domains: { d1: 'u1', d2: 'u2' },
      topics: { t2: 'u3' },
      stems: { 'Q3': 'u4', 'Q4': null },
    })
    expect(out.map((q) => q.domain)).toEqual(['u1', 'u3', 'u4', 'u1'])
    // The input is not mutated.
    expect(pool[1].domain).toBe('d1')
  })

  it('leaves unmatched items on their own domain', () => {
    expect(assignUnits(pool, { domains: { d2: 'u2' } }).map((q) => q.domain)).toEqual(['d1', 'd1', 'u2', 'd3', 'd1'])
  })

  it('unitPool drops repeated stems', () => {
    const config = { courseSlug: 'x', courseHubHref: '/x', courseTitle: 'X', unitTestRoute: '/x-unit-tests', units: [], pool }
    expect(unitPool(config, 'd1').map((q) => q.question)).toEqual(['Q1 alpha', 'Q2 beta'])
  })
})
