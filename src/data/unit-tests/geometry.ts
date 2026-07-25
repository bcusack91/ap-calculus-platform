import { geometryQuestionBank } from '@/data/competitive-questions/geometry-bank'
import type { CourseUnitTestConfig, UnitDef, UnitPoolQuestion } from '@/lib/unit-tests/engine'

/**
 * Geometry unit tests.
 *
 * Same approach as Algebra 1: the ~300-question competitive bank is tagged only
 * by `topicSlug`, so UNIT_TOPICS groups those slugs into the five standard
 * Geometry units and the adapter stamps each question with the matching
 * `domain` the unit-test engine filters on.
 */

const UNIT_TOPICS: Record<string, string[]> = {
  'angles-lines': ['angle-relationships-geometry', 'parallel-lines-transversals'],
  triangles: ['triangle-angle-sum', 'similar-triangles-geometry'],
  'right-triangles': ['pythagorean-theorem', 'special-right-triangles', 'trigonometric-ratios-geo'],
  polygons: ['polygon-angle-sums', 'properties-quadrilaterals'],
  circles: ['circle-basics-geometry'],
}

export const GEOMETRY_UNITS: UnitDef[] = [
  { id: 'angles-lines', unitNumber: 1, name: 'Unit 1: Angles & Parallel Lines', shortName: 'Angles & Lines', description: 'Angle pairs, parallel lines cut by a transversal, and angle relationships.', topicSlugs: UNIT_TOPICS['angles-lines'], exam_weight: 'Core', color: 'from-rose-500 to-pink-500', icon: '📐' },
  { id: 'triangles', unitNumber: 2, name: 'Unit 2: Triangles & Similarity', shortName: 'Triangles', description: 'Triangle angle sum, congruence, and similar triangles.', topicSlugs: UNIT_TOPICS.triangles, exam_weight: 'Core', color: 'from-pink-500 to-fuchsia-500', icon: '🔺' },
  { id: 'right-triangles', unitNumber: 3, name: 'Unit 3: Right Triangles & Trigonometry', shortName: 'Right Triangles', description: 'Pythagorean theorem, special right triangles, and trig ratios.', topicSlugs: UNIT_TOPICS['right-triangles'], exam_weight: 'Core', color: 'from-fuchsia-500 to-purple-500', icon: '📏' },
  { id: 'polygons', unitNumber: 4, name: 'Unit 4: Polygons & Quadrilaterals', shortName: 'Polygons', description: 'Interior and exterior angle sums, and properties of quadrilaterals.', topicSlugs: UNIT_TOPICS.polygons, exam_weight: 'Core', color: 'from-purple-500 to-violet-500', icon: '⬟' },
  { id: 'circles', unitNumber: 5, name: 'Unit 5: Circles', shortName: 'Circles', description: 'Radius, diameter, circumference, area, arcs, and central angles.', topicSlugs: UNIT_TOPICS.circles, exam_weight: 'Core', color: 'from-violet-500 to-indigo-500', icon: '⭕' },
]

const DOMAIN_BY_SLUG = new Map<string, string>()
for (const [unitId, slugs] of Object.entries(UNIT_TOPICS)) {
  for (const s of slugs) DOMAIN_BY_SLUG.set(s, unitId)
}

const pool: UnitPoolQuestion[] = geometryQuestionBank
  .filter((q) => DOMAIN_BY_SLUG.has(q.topicSlug))
  .map((q) => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    domain: DOMAIN_BY_SLUG.get(q.topicSlug)!,
    topicSlug: q.topicSlug,
  }))

export const GEOMETRY_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'geometry',
  courseHubHref: '/geometry',
  courseTitle: 'Geometry',
  unitTestRoute: '/geometry-unit-tests',
  units: GEOMETRY_UNITS,
  pool,
}
