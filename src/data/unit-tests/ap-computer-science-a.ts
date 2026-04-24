import { csaQuestionPool } from '@/data/exit-quizzes/ap-computer-science-a'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_CSA_UNITS: UnitDef[] = [
  { id: 'primitive-types', unitNumber: 1, name: 'Unit 1: Primitive Types', shortName: 'Primitive Types', description: 'Variables, primitive data types, expressions, and casting.', topicSlugs: ['primitive-types'], exam_weight: '2.5–5%', color: 'from-blue-500 to-cyan-500', icon: '🔢' },
  { id: 'using-objects', unitNumber: 2, name: 'Unit 2: Using Objects', shortName: 'Using Objects', description: 'Object instantiation, methods, the String class, and the Math class.', topicSlugs: ['using-objects'], exam_weight: '5–7.5%', color: 'from-indigo-500 to-purple-500', icon: '📦' },
  { id: 'conditionals', unitNumber: 3, name: 'Unit 3: Boolean Expressions & If Statements', shortName: 'Conditionals', description: 'Boolean logic, if/else, equivalent boolean expressions, and short-circuit eval.', topicSlugs: ['conditionals'], exam_weight: '15–17.5%', color: 'from-purple-500 to-pink-500', icon: '🔀' },
  { id: 'iteration', unitNumber: 4, name: 'Unit 4: Iteration', shortName: 'Iteration', description: 'while loops, for loops, nested loops, and informal runtime analysis.', topicSlugs: ['iteration'], exam_weight: '17.5–22.5%', color: 'from-emerald-500 to-teal-500', icon: '🔁' },
  { id: 'writing-classes', unitNumber: 5, name: 'Unit 5: Writing Classes', shortName: 'Writing Classes', description: 'Constructors, encapsulation, accessor/mutator methods, and scope.', topicSlugs: ['writing-classes'], exam_weight: '5–7.5%', color: 'from-amber-500 to-orange-500', icon: '🏗️' },
  { id: 'arrays', unitNumber: 6, name: 'Unit 6: Array', shortName: 'Arrays', description: 'Array creation, traversal, and common algorithms.', topicSlugs: ['arrays'], exam_weight: '10–15%', color: 'from-rose-500 to-pink-500', icon: '📋' },
  { id: 'arraylist', unitNumber: 7, name: 'Unit 7: ArrayList', shortName: 'ArrayList', description: 'ArrayList methods, traversal, and standard algorithms.', topicSlugs: ['arraylist'], exam_weight: '2.5–7.5%', color: 'from-fuchsia-500 to-violet-500', icon: '📑' },
  { id: '2d-array', unitNumber: 8, name: 'Unit 8: 2D Array', shortName: '2D Array', description: '2D array traversal, row-major / column-major ordering, and algorithms.', topicSlugs: ['2d-array'], exam_weight: '7.5–10%', color: 'from-cyan-500 to-blue-500', icon: '🔲' },
  { id: 'inheritance', unitNumber: 9, name: 'Unit 9: Inheritance', shortName: 'Inheritance', description: 'Subclasses, super, polymorphism, Object methods, and overriding.', topicSlugs: ['inheritance'], exam_weight: '5–10%', color: 'from-violet-500 to-indigo-500', icon: '🧬' },
]

export const AP_CSA_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-computer-science-a',
  courseHubHref: '/ap-computer-science-a',
  courseTitle: 'AP Computer Science A',
  unitTestRoute: '/ap-csa-unit-tests',
  units: AP_CSA_UNITS,
  pool: csaQuestionPool,
}
