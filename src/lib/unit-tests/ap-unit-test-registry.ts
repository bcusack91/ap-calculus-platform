/**
 * Server-side access to each AP course's unit-test config (its exit pool filed
 * under CED units), for the question tools: per-question answer logging on the
 * per-unit tests, rebuilding those attempts for /review, the AP question bank
 * and the mistake log's unit filter.
 *
 * Every config is loaded lazily, one course at a time: the configs carry whole
 * question pools, and importing all of them into one module runs the
 * production build out of memory (see course-units.ts). Memoized per server
 * instance.
 */
import { questionKey } from '@/lib/question-key'
import { canonicalApTopicSlug, diagnosticItemKey, diagnosticItemTopic } from '@/lib/ap-topic-canonical'
import { isApToolCourse, type ApToolCourse } from '@/lib/question-tool-courses'
import type { CourseUnitTestConfig, UnitPoolQuestion } from '@/lib/unit-tests/engine'

type Loader<T> = () => Promise<T>

interface ApUnitTestSource {
  config: Loader<CourseUnitTestConfig>
  /** Authored unit-test items that are not in the exit pool (left out of the question bank). */
  supplement?: Loader<UnitPoolQuestion[]>
  /** Per-item topic exceptions beside the course's diagnostic (null = the diagnostic doesn't serve the item). */
  exceptions?: Loader<Record<string, string | null>>
}

const SOURCES: Record<ApToolCourse, ApUnitTestSource> = {
  'ap-calculus-ab': { config: () => import('@/data/unit-tests/ap-calculus-ab').then((m) => m.AP_CALCULUS_AB_UNIT_TESTS_CONFIG) },
  'ap-calculus-bc': { config: () => import('@/data/unit-tests/ap-calculus-bc').then((m) => m.AP_CALCULUS_BC_UNIT_TESTS_CONFIG) },
  'ap-precalculus': { config: () => import('@/data/unit-tests/ap-precalculus').then((m) => m.AP_PRECALCULUS_UNIT_TESTS_CONFIG) },
  'ap-statistics': { config: () => import('@/data/unit-tests/ap-statistics').then((m) => m.AP_STATISTICS_UNIT_TESTS_CONFIG) },
  'ap-biology': {
    config: () => import('@/data/unit-tests/ap-biology').then((m) => m.AP_BIOLOGY_UNIT_TESTS_CONFIG),
    exceptions: () => import('@/data/ap-biology-diagnostic').then((m) => m.BIO_ITEM_TOPIC_EXCEPTIONS),
  },
  'ap-chemistry': {
    config: () => import('@/data/unit-tests/ap-chemistry').then((m) => m.AP_CHEMISTRY_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-chemistry-supplement').then((m) => m.AP_CHEMISTRY_UNIT_SUPPLEMENT),
  },
  'ap-physics-1': {
    config: () => import('@/data/unit-tests/ap-physics-1').then((m) => m.AP_PHYSICS1_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-physics-1-supplement').then((m) => m.AP_PHYSICS1_UNIT_SUPPLEMENT),
  },
  'ap-physics-2': {
    config: () => import('@/data/unit-tests/ap-physics-2').then((m) => m.AP_PHYSICS2_UNIT_TESTS_CONFIG),
    exceptions: () => import('@/data/ap-physics-2-diagnostic').then((m) => m.PHYSICS2_ITEM_TOPIC_EXCEPTIONS),
  },
  'ap-physics-c-mechanics': {
    config: () => import('@/data/unit-tests/ap-physics-c-mechanics').then((m) => m.AP_PHYSICS_C_MECH_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-physics-c-mechanics-supplement').then((m) => m.AP_PHYSICS_C_MECH_UNIT_SUPPLEMENT),
    exceptions: () => import('@/data/ap-physics-c-mechanics-diagnostic').then((m) => m.PCMECH_ITEM_TOPIC_EXCEPTIONS),
  },
  'ap-physics-c-em': {
    config: () => import('@/data/unit-tests/ap-physics-c-em').then((m) => m.AP_PHYSICS_C_EM_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-physics-c-em-supplement').then((m) => m.AP_PHYSICS_C_EM_UNIT_SUPPLEMENT),
    exceptions: () => import('@/data/ap-physics-c-em-diagnostic').then((m) => m.PCEM_ITEM_TOPIC_EXCEPTIONS),
  },
  'ap-environmental-science': {
    config: () => import('@/data/unit-tests/ap-environmental-science').then((m) => m.AP_ENVIRO_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-environmental-science-supplement').then((m) => m.AP_ENVIRO_UNIT_SUPPLEMENT),
  },
  'ap-computer-science-a': {
    config: () => import('@/data/unit-tests/ap-computer-science-a').then((m) => m.AP_CSA_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-computer-science-a-supplement').then((m) => m.AP_CSA_UNIT_SUPPLEMENT),
  },
  'ap-computer-science-principles': {
    config: () => import('@/data/unit-tests/ap-cs-principles').then((m) => m.AP_CSP_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-cs-principles-supplement').then((m) => m.AP_CSP_UNIT_SUPPLEMENT),
  },
  'ap-english-language': { config: () => import('@/data/unit-tests/ap-english-language').then((m) => m.AP_ENGLISH_LANG_UNIT_TESTS_CONFIG) },
  'ap-english-literature': { config: () => import('@/data/unit-tests/ap-english-literature').then((m) => m.AP_ENGLISH_LIT_UNIT_TESTS_CONFIG) },
  'ap-us-history': {
    config: () => import('@/data/unit-tests/ap-us-history').then((m) => m.AP_US_HISTORY_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-us-history-supplement').then((m) => m.AP_US_HISTORY_UNIT_SUPPLEMENT),
  },
  'ap-world-history': {
    config: () => import('@/data/unit-tests/ap-world-history').then((m) => m.AP_WORLD_HISTORY_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-world-history-supplement').then((m) => m.AP_WORLD_HISTORY_UNIT_SUPPLEMENT),
  },
  'ap-us-government': {
    config: () => import('@/data/unit-tests/ap-us-government').then((m) => m.AP_US_GOV_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-us-government-supplement').then((m) => m.AP_US_GOV_UNIT_SUPPLEMENT),
  },
  'ap-human-geography': {
    config: () => import('@/data/unit-tests/ap-human-geography').then((m) => m.AP_HUMAN_GEO_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-human-geography-supplement').then((m) => m.AP_HUMAN_GEO_UNIT_SUPPLEMENT),
  },
  'ap-macroeconomics': {
    config: () => import('@/data/unit-tests/ap-macroeconomics').then((m) => m.AP_MACRO_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-macroeconomics-supplement').then((m) => m.AP_MACRO_UNIT_SUPPLEMENT),
  },
  'ap-microeconomics': {
    config: () => import('@/data/unit-tests/ap-microeconomics').then((m) => m.AP_MICRO_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-microeconomics-supplement').then((m) => m.AP_MICRO_UNIT_SUPPLEMENT),
  },
  'ap-psychology': {
    config: () => import('@/data/unit-tests/ap-psychology').then((m) => m.AP_PSYCHOLOGY_UNIT_TESTS_CONFIG),
    supplement: () => import('@/data/unit-tests/ap-psychology-supplement').then((m) => m.AP_PSYCHOLOGY_UNIT_SUPPLEMENT),
  },
  'ap-african-american-studies': { config: () => import('@/data/unit-tests/ap-african-american-studies').then((m) => m.AP_AAS_UNIT_TESTS_CONFIG) },
}

/** One pool item as the question tools see it. */
export interface ApPoolItem {
  q: UnitPoolQuestion & { difficulty?: unknown }
  /** questionKey() of the item (authored order; keys don't depend on order). */
  key: string
  /** The production topic it is filed under (legacy slugs canonicalized). */
  topicSlug: string
  /** CED unit id (the config's unit ids) and its name. */
  unitId: string
  unitLabel: string
  /** In the course's exit pool (not an authored unit-test supplement item). */
  exitPool: boolean
  /** The course's diagnostic serves the item (its per-item exception isn't null). */
  served: boolean
}

export interface ApUnitTestCourse {
  courseSlug: ApToolCourse
  config: CourseUnitTestConfig
  items: ApPoolItem[]
  byKey: Map<string, ApPoolItem>
  /** By diagnosticItemKey(stem): what the unit-test client sends to identify a shown question. */
  byStem: Map<string, ApPoolItem>
  /** Unit label of each production topic (the unit most of its items are filed under). */
  unitLabelOfTopic: Map<string, string>
  /** The production topic of a pool item. */
  topicOf: (q: { question: string; topicSlug: string }) => string
}

async function build(courseSlug: ApToolCourse): Promise<ApUnitTestCourse> {
  const src = SOURCES[courseSlug]
  const [config, supplement, exceptions] = await Promise.all([
    src.config(),
    src.supplement ? src.supplement() : Promise.resolve([] as UnitPoolQuestion[]),
    src.exceptions ? src.exceptions() : Promise.resolve({} as Record<string, string | null>),
  ])
  const supplementSet = new Set<UnitPoolQuestion>(supplement)
  const supplementStems = new Set(supplement.map((q) => q.question))
  const unitName = new Map(config.units.map((u) => [u.id, u.name]))
  const topicOf = (q: { question: string; topicSlug: string }) =>
    diagnosticItemTopic(courseSlug, q, exceptions) ?? canonicalApTopicSlug(courseSlug, q.topicSlug)

  const items: ApPoolItem[] = []
  const byKey = new Map<string, ApPoolItem>()
  const byStem = new Map<string, ApPoolItem>()
  const unitVotes = new Map<string, Map<string, number>>()
  for (const q of config.pool) {
    if (typeof q.question !== 'string' || !Array.isArray(q.options) || q.correctAnswer < 0 || q.correctAnswer >= q.options.length) continue
    const key = questionKey({ question: q.question, options: q.options, correctIndex: q.correctAnswer })
    if (byKey.has(key)) continue
    const topic = diagnosticItemTopic(courseSlug, q, exceptions)
    const item: ApPoolItem = {
      q,
      key,
      topicSlug: topic ?? canonicalApTopicSlug(courseSlug, q.topicSlug),
      unitId: q.domain,
      unitLabel: unitName.get(q.domain) ?? q.domain,
      exitPool: !supplementSet.has(q) && !supplementStems.has(q.question),
      served: topic !== null,
    }
    items.push(item)
    byKey.set(key, item)
    const stem = diagnosticItemKey(q.question)
    if (!byStem.has(stem)) byStem.set(stem, item)
    const votes = unitVotes.get(item.topicSlug) ?? new Map<string, number>()
    votes.set(item.unitLabel, (votes.get(item.unitLabel) ?? 0) + 1)
    unitVotes.set(item.topicSlug, votes)
  }
  const unitLabelOfTopic = new Map<string, string>()
  for (const [topic, votes] of unitVotes) {
    unitLabelOfTopic.set(topic, [...votes.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0])
  }
  // A unit's listed topics claim themselves when the pool has none of their items.
  for (const u of config.units) {
    for (const t of u.topicSlugs) {
      const slug = canonicalApTopicSlug(courseSlug, t)
      if (!unitLabelOfTopic.has(slug)) unitLabelOfTopic.set(slug, u.name)
    }
  }
  return { courseSlug, config, items, byKey, byStem, unitLabelOfTopic, topicOf }
}

const cache = new Map<ApToolCourse, Promise<ApUnitTestCourse>>()

/** The AP course's unit-test material, or null when the slug is not an AP tool course. */
export function loadApUnitTestCourse(courseSlug: string): Promise<ApUnitTestCourse> | null {
  if (!isApToolCourse(courseSlug)) return null
  let p = cache.get(courseSlug)
  if (!p) {
    p = build(courseSlug).catch((err) => {
      cache.delete(courseSlug)
      throw err
    })
    cache.set(courseSlug, p)
  }
  return p
}
