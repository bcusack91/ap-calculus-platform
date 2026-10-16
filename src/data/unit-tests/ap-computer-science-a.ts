import { csaQuestionPool } from '@/data/exit-quizzes/ap-computer-science-a'
import { AP_CSA_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-computer-science-a-supplement'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

// Units follow the 2025-26 AP CSA Course and Exam Description (four units;
// inheritance was removed from the course). The exit pool still uses the old
// ten-unit domains, so each one is filed under its new unit (recursion is
// Topics 4.16-4.17). AP_CSA_UNIT_SUPPLEMENT fills Unit 3, where the pool is thin.
export const AP_CSA_UNIT_ASSIGNMENT: UnitAssignment = {
  domains: {
    'primitive-types': 'using-objects-methods',
    'using-objects': 'using-objects-methods',
    conditionals: 'selection-iteration',
    iteration: 'selection-iteration',
    'writing-classes': 'class-creation',
    arrays: 'data-collections',
    arraylist: 'data-collections',
    '2d-array': 'data-collections',
  },
}

export const AP_CSA_UNITS: UnitDef[] = [
  { id: 'using-objects-methods', unitNumber: 1, name: 'Unit 1: Using Objects and Methods', shortName: 'Objects & Methods', description: 'Primitive types, expressions, casting, calling methods, and the String and Math classes.', topicSlugs: ['csa-variables-types', 'csa-expressions-operators', 'csa-strings-objects'], exam_weight: '15–25%', color: 'from-blue-500 to-cyan-500', icon: '📦' },
  { id: 'selection-iteration', unitNumber: 2, name: 'Unit 2: Selection and Iteration', shortName: 'Selection & Iteration', description: 'Boolean expressions, if statements, while and for loops, and nested loops.', topicSlugs: ['csa-conditionals', 'csa-loops'], exam_weight: '25–35%', color: 'from-purple-500 to-pink-500', icon: '🔁' },
  { id: 'class-creation', unitNumber: 3, name: 'Unit 3: Class Creation', shortName: 'Class Creation', description: 'Constructors, instance variables, accessors and mutators, encapsulation, and scope.', topicSlugs: ['csa-class-design'], exam_weight: '10–18%', color: 'from-amber-500 to-orange-500', icon: '🏗️' },
  { id: 'data-collections', unitNumber: 4, name: 'Unit 4: Data Collections', shortName: 'Data Collections', description: 'Arrays, ArrayList, 2D arrays, standard traversal, search and sort algorithms, and recursion.', topicSlugs: ['csa-arrays', 'csa-arraylist-usage', 'csa-2d-arrays', 'csa-recursive-methods'], exam_weight: '30–40%', color: 'from-rose-500 to-pink-500', icon: '📋' },
]

export const AP_CSA_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-computer-science-a',
  courseHubHref: '/ap-computer-science-a',
  courseTitle: 'AP Computer Science A',
  unitTestRoute: '/ap-csa-unit-tests',
  units: AP_CSA_UNITS,
  pool: [...assignUnits(csaQuestionPool, AP_CSA_UNIT_ASSIGNMENT), ...AP_CSA_UNIT_SUPPLEMENT],
}
