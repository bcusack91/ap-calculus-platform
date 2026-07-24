import { MCAT_SECTIONS, getMcatQuestions } from '@/data/competitive-questions/mcat-bank'
import type { CourseUnitTestConfig, UnitDef, UnitPoolQuestion } from '@/lib/unit-tests/engine'

/**
 * MCAT unit tests — one "unit" per subject AREA (the AAMC "subcourses":
 * General Chemistry, Organic Chemistry, Physics, Biochemistry, Organ Systems,
 * Psychology & Sociology, CARS, …).
 *
 * The MCAT bank is organized section → area → subtopic, so an area maps onto a
 * unit test directly. `getMcatQuestions` resolves any node of that tree, so we
 * pull each area's full pool and stamp it with the area id.
 */

// Large enough to exhaust any single area's pool (deepest is a few hundred).
const ALL = 100_000

const areas = MCAT_SECTIONS.flatMap((s) => s.areas.map((a) => ({ section: s, area: a })))

export const MCAT_UNITS: UnitDef[] = areas.map(({ section, area }, i) => ({
  id: area.slug,
  unitNumber: i + 1,
  name: `${section.short}: ${area.title}`,
  shortName: area.title,
  description: `${area.subtopics.map((t) => t.title).slice(0, 4).join(' · ')}${area.subtopics.length > 4 ? ' · …' : ''}.`,
  topicSlugs: area.subtopics.map((t) => t.slug),
  exam_weight: section.short,
  color: 'from-emerald-500 to-teal-500',
  icon: area.emoji,
}))

const pool: UnitPoolQuestion[] = areas.flatMap(({ area }) =>
  getMcatQuestions(ALL, area.slug).map((q) => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    domain: area.slug,
    topicSlug: q.topicSlug,
  }))
)

export const MCAT_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'mcat-prep',
  courseHubHref: '/mcat',
  courseTitle: 'MCAT',
  unitTestRoute: '/mcat-unit-tests',
  units: MCAT_UNITS,
  pool,
  // Bank subtopic slugs are not 1:1 with curriculum topic slugs (see
  // mcat-topic-map.ts), so send review links to the MCAT hub rather than 404.
  reviewHrefBase: '/mcat',
}
