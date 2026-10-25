import { asvabQuestionPool } from '@/data/exit-quizzes/asvab'
import { ASVAB_CATEGORIES } from '@/lib/course-includes'
import type { CourseUnitTestConfig, UnitDef, UnitPoolQuestion } from '@/lib/unit-tests/engine'

/**
 * ASVAB unit tests: one "unit" per CAT-ASVAB subtest (the ten subtest
 * Categories; AFQT/test day has no unit test). Unit ids are the Category slug
 * without 'asvab-' (= the exit pool's `domain`) and are stored in saved
 * attempts and in src/lib/unit-tests/course-units.ts (scripts/gen-course-lookups.ts),
 * so keep them. Content-store key 'asvab' (prisma/import-unit-tests.ts).
 *
 * The pool is the subtest's exit-quiz pool (src/data/exit-quizzes/asvab/<unit>.ts),
 * which the engine filters by `domain === unit.id`, the way the other courses'
 * unit tests draw from their pools. Items tagged with the test-prep domain have
 * no unit and are never drawn. A variant has up to 15 questions, the CAT-ASVAB's
 * largest subtest; counts and minutes below are from asvab-pipeline/ASVAB-FACTS.md.
 */
const SUBTEST: Record<string, { icon: string; weight: string; description: string }> = {
  'word-knowledge': { icon: '📖', weight: 'CAT-ASVAB: 15 questions · 9 min · AFQT', description: 'Synonyms, words in context, roots, prefixes and suffixes.' },
  'paragraph-comprehension': { icon: '📰', weight: 'CAT-ASVAB: 10 questions · 27 min · AFQT', description: 'Main idea and purpose, stated details and sequence, inference and tone.' },
  'arithmetic-reasoning': { icon: '🧮', weight: 'CAT-ASVAB: 15 questions · 55 min · AFQT', description: 'Word problems with whole numbers, fractions, percents, rates, averages and probability.' },
  'mathematics-knowledge': { icon: '📐', weight: 'CAT-ASVAB: 15 questions · 31 min · AFQT', description: 'Number properties, equations, polynomials, and geometry and measurement.' },
  'general-science': { icon: '🔬', weight: 'CAT-ASVAB: 15 questions · 12 min', description: 'Life science, earth and space science, chemistry and physics.' },
  'electronics-information': { icon: '⚡', weight: 'CAT-ASVAB: 15 questions · 10 min', description: 'Ohm’s law, series and parallel circuits, power, components and symbols.' },
  'auto-information': { icon: '🚗', weight: 'CAT-ASVAB: 10 questions · 7 min', description: 'Engines, drivetrain, brakes, steering and the electrical, fuel, cooling and exhaust systems.' },
  'shop-information': { icon: '🔧', weight: 'CAT-ASVAB: 10 questions · 6 min', description: 'Hand and power tools, fasteners, materials and shop practices.' },
  'mechanical-comprehension': { icon: '⚙️', weight: 'CAT-ASVAB: 15 questions · 22 min', description: 'Forces, work and energy, levers, pulleys, gears and fluids.' },
  'assembling-objects': { icon: '🧩', weight: 'CAT-ASVAB: 15 questions · 18 min', description: 'How shapes connect at labeled points and how pieces fit together.' },
}

export const ASVAB_UNITS: UnitDef[] = ASVAB_CATEGORIES.filter((c) => c.slug !== 'asvab-test-prep').map((c) => {
  const id = c.slug.replace(/^asvab-/, '')
  const meta = SUBTEST[id]
  return {
    id,
    unitNumber: c.order,
    name: c.name,
    shortName: c.name.replace(/ \([A-Z]+\)$/, ''),
    description: meta?.description ?? `Practice test for ${c.name}.`,
    topicSlugs: [...c.topics],
    exam_weight: meta?.weight ?? '',
    color: 'from-green-500 to-lime-500',
    icon: meta?.icon ?? '🎖️',
  }
})

const UNIT_IDS = new Set(ASVAB_UNITS.map((u) => u.id))

const pool: UnitPoolQuestion[] = asvabQuestionPool
  .filter((q) => UNIT_IDS.has(q.domain))
  .map((q) => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    domain: q.domain,
    topicSlug: q.topicSlug,
    ...(q.figure ? { figure: q.figure, figureAlt: q.figureAlt ?? '' } : {}),
  }))

export const ASVAB_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'asvab',
  courseHubHref: '/asvab',
  courseTitle: 'ASVAB',
  unitTestRoute: '/asvab-unit-tests',
  units: ASVAB_UNITS,
  pool,
  questionsPerVariantCap: 15,
  reviewHrefBase: '/asvab',
}
