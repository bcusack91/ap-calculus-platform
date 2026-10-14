import { csaQuestionPool } from '@/data/exit-quizzes/ap-computer-science-a'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

// Units follow the 2025-26 AP CSA Course and Exam Description (four units;
// inheritance was removed from the course). topicSlugs are exit-pool domains.
export const AP_CSA_UNITS: UnitDef[] = [
  { id: 'using-objects-methods', unitNumber: 1, name: 'Unit 1: Using Objects and Methods', shortName: 'Objects & Methods', description: 'Primitive types, expressions, casting, calling methods, and the String and Math classes.', topicSlugs: ['primitive-types', 'using-objects'], exam_weight: '15–25%', color: 'from-blue-500 to-cyan-500', icon: '📦' },
  { id: 'selection-iteration', unitNumber: 2, name: 'Unit 2: Selection and Iteration', shortName: 'Selection & Iteration', description: 'Boolean expressions, if statements, while and for loops, and nested loops.', topicSlugs: ['conditionals', 'iteration'], exam_weight: '25–35%', color: 'from-purple-500 to-pink-500', icon: '🔁' },
  { id: 'class-creation', unitNumber: 3, name: 'Unit 3: Class Creation', shortName: 'Class Creation', description: 'Constructors, instance variables, accessors and mutators, encapsulation, and scope.', topicSlugs: ['writing-classes'], exam_weight: '10–18%', color: 'from-amber-500 to-orange-500', icon: '🏗️' },
  { id: 'data-collections', unitNumber: 4, name: 'Unit 4: Data Collections', shortName: 'Data Collections', description: 'Arrays, ArrayList, 2D arrays, and the standard traversal and search algorithms.', topicSlugs: ['arrays', 'arraylist', '2d-array'], exam_weight: '30–40%', color: 'from-rose-500 to-pink-500', icon: '📋' },
]

export const AP_CSA_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-computer-science-a',
  courseHubHref: '/ap-computer-science-a',
  courseTitle: 'AP Computer Science A',
  unitTestRoute: '/ap-csa-unit-tests',
  units: AP_CSA_UNITS,
  pool: csaQuestionPool,
}
