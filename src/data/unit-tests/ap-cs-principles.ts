import { cspQuestionPool } from '@/data/exit-quizzes/ap-cs-principles'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_CSP_UNITS: UnitDef[] = [
  { id: 'creative-development', unitNumber: 1, name: 'Big Idea 1: Creative Development', shortName: 'Creative Development', description: 'Collaboration, program function & purpose, design, and program development.', topicSlugs: ['creative-development'], exam_weight: '10–13%', color: 'from-blue-500 to-cyan-500', icon: '💡' },
  { id: 'data', unitNumber: 2, name: 'Big Idea 2: Data', shortName: 'Data', description: 'Binary, data abstraction, data compression, and information extraction.', topicSlugs: ['data'], exam_weight: '17–22%', color: 'from-indigo-500 to-purple-500', icon: '📊' },
  { id: 'algorithms', unitNumber: 3, name: 'Big Idea 3: Algorithms & Programming', shortName: 'Algorithms', description: 'Variables, data abstraction, algorithms, simulations, and procedures.', topicSlugs: ['algorithms'], exam_weight: '30–35%', color: 'from-purple-500 to-pink-500', icon: '🧠' },
  { id: 'computing-systems', unitNumber: 4, name: 'Big Idea 4: Computing Systems & Networks', shortName: 'Systems & Networks', description: 'Internet, fault tolerance, parallel & distributed computing.', topicSlugs: ['computing-systems'], exam_weight: '11–15%', color: 'from-emerald-500 to-teal-500', icon: '🌐' },
  { id: 'impact', unitNumber: 5, name: 'Big Idea 5: Impact of Computing', shortName: 'Impact', description: 'Beneficial and harmful effects, digital divide, computing bias, and security.', topicSlugs: ['impact'], exam_weight: '21–26%', color: 'from-rose-500 to-pink-500', icon: '🌍' },
]

export const AP_CSP_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-cs-principles',
  courseHubHref: '/ap-cs-principles',
  courseTitle: 'AP Computer Science Principles',
  unitTestRoute: '/ap-csp-unit-tests',
  units: AP_CSP_UNITS,
  pool: cspQuestionPool,
}
