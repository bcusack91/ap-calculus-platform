import { SAT_SECTIONS, questionsForSkill } from '@/data/competitive-questions/sat-bank'
import type { CourseUnitTestConfig, UnitDef, UnitPoolQuestion } from '@/lib/unit-tests/engine'

/**
 * SAT unit tests — one "unit" per official College Board DOMAIN (8 total:
 * 4 Math, 4 Reading & Writing).
 *
 * The SAT competitive bank is already organized section → domain → skill, so a
 * domain maps onto a unit test directly. Questions are pulled per skill and
 * stamped with their domain id, giving each unit test a deep pool drawn from
 * every skill in that domain.
 */

const DOMAIN_META: Record<string, { icon: string; color: string; weight: string }> = {
  'sat-math-algebra': { icon: '📊', color: 'from-blue-500 to-indigo-500', weight: '~35% of Math' },
  'sat-math-advanced': { icon: '🧮', color: 'from-indigo-500 to-violet-500', weight: '~35% of Math' },
  'sat-math-problem-solving': { icon: '📈', color: 'from-violet-500 to-purple-500', weight: '~15% of Math' },
  'sat-math-geometry': { icon: '📐', color: 'from-purple-500 to-fuchsia-500', weight: '~15% of Math' },
  'sat-rw-information-ideas': { icon: '🔍', color: 'from-cyan-500 to-sky-500', weight: '~26% of R&W' },
  'sat-rw-craft-structure': { icon: '🎨', color: 'from-sky-500 to-blue-500', weight: '~28% of R&W' },
  'sat-rw-expression': { icon: '✍️', color: 'from-teal-500 to-cyan-500', weight: '~20% of R&W' },
  'sat-rw-conventions': { icon: '📝', color: 'from-emerald-500 to-teal-500', weight: '~26% of R&W' },
}

const domains = SAT_SECTIONS.flatMap((s) => s.domains.map((d) => ({ section: s, domain: d })))

export const SAT_UNITS: UnitDef[] = domains.map(({ section, domain }, i) => {
  const meta = DOMAIN_META[domain.slug] ?? { icon: '📚', color: 'from-gray-500 to-slate-500', weight: '' }
  return {
    id: domain.slug,
    unitNumber: i + 1,
    name: `${section.title}: ${domain.title}`,
    shortName: domain.title,
    description: `${domain.skills.map((k) => k.short).join(' · ')}.`,
    topicSlugs: domain.skills.map((k) => k.slug),
    exam_weight: meta.weight,
    color: meta.color,
    icon: meta.icon,
  }
})

/** Every skill's questions, stamped with the parent domain the engine filters on. */
const pool: UnitPoolQuestion[] = domains.flatMap(({ domain }) =>
  domain.skills.flatMap((skill) =>
    questionsForSkill(skill.slug).map((q) => ({
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      domain: domain.slug,
      topicSlug: skill.slug,
    }))
  )
)

export const SAT_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'sat-prep',
  courseHubHref: '/sat',
  courseTitle: 'SAT',
  unitTestRoute: '/sat-unit-tests',
  units: SAT_UNITS,
  pool,
  // Skill slugs aren't curriculum topics, so review links would 404 — point
  // students at the SAT hub instead.
  reviewHrefBase: '/sat',
}
