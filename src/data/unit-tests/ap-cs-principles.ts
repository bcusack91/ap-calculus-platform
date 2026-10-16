import { cspQuestionPool } from '@/data/exit-quizzes/ap-cs-principles'
import { AP_CSP_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-cs-principles-supplement'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

// The 5 Big Ideas of the AP CSP CED; each id is the exit pool's domain id.
// AP_CSP_UNIT_SUPPLEMENT fills Big Idea 1, where the pool is thin.

export const AP_CSP_UNITS: UnitDef[] = [
  { id: 'creative-development', unitNumber: 1, name: 'Big Idea 1: Creative Development', shortName: 'Creative Development', description: 'Collaboration, program function & purpose, design, and program development.', topicSlugs: ['csp-collaboration-development'], exam_weight: '10–13%', color: 'from-blue-500 to-cyan-500', icon: '💡' },
  { id: 'data', unitNumber: 2, name: 'Big Idea 2: Data', shortName: 'Data', description: 'Binary, data abstraction, data compression, and information extraction.', topicSlugs: ['csp-binary-data', 'csp-data-compression-analysis'], exam_weight: '17–22%', color: 'from-indigo-500 to-purple-500', icon: '📊' },
  { id: 'algorithms', unitNumber: 3, name: 'Big Idea 3: Algorithms & Programming', shortName: 'Algorithms', description: 'Variables, data abstraction, algorithms, simulations, and procedures.', topicSlugs: ['csp-variables-control', 'csp-procedures-lists', 'csp-algorithms'], exam_weight: '30–35%', color: 'from-purple-500 to-pink-500', icon: '🧠' },
  { id: 'computing-systems', unitNumber: 4, name: 'Big Idea 4: Computing Systems & Networks', shortName: 'Systems & Networks', description: 'Internet, fault tolerance, parallel & distributed computing.', topicSlugs: ['csp-internet-protocols', 'csp-fault-tolerance-security'], exam_weight: '11–15%', color: 'from-emerald-500 to-teal-500', icon: '🌐' },
  { id: 'impact', unitNumber: 5, name: 'Big Idea 5: Impact of Computing', shortName: 'Impact', description: 'Beneficial and harmful effects, digital divide, computing bias, and security.', topicSlugs: ['csp-social-ethical-impacts', 'csp-safe-computing'], exam_weight: '21–26%', color: 'from-rose-500 to-pink-500', icon: '🌍' },
]

export const AP_CSP_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-computer-science-principles',
  courseHubHref: '/ap-cs-principles',
  courseTitle: 'AP Computer Science Principles',
  unitTestRoute: '/ap-csp-unit-tests',
  units: AP_CSP_UNITS,
  pool: [...cspQuestionPool, ...AP_CSP_UNIT_SUPPLEMENT],
}
