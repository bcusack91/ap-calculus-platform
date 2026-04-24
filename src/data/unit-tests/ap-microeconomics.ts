import { microQuestionPool } from '@/data/exit-quizzes/ap-microeconomics'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_MICRO_UNITS: UnitDef[] = [
  { id: 'basic-concepts', unitNumber: 1, name: 'Unit 1: Basic Economic Concepts', shortName: 'Basic Concepts', description: 'Scarcity, opportunity cost, PPC, comparative advantage, and economic systems.', topicSlugs: ['basic-concepts'], exam_weight: '12–15%', color: 'from-blue-500 to-cyan-500', icon: '🔍' },
  { id: 'supply-demand', unitNumber: 2, name: 'Unit 2: Supply & Demand', shortName: 'Supply & Demand', description: 'Demand & supply curves, equilibrium, elasticity, and consumer/producer surplus.', topicSlugs: ['supply-demand'], exam_weight: '20–25%', color: 'from-indigo-500 to-purple-500', icon: '📈' },
  { id: 'production-cost', unitNumber: 3, name: 'Unit 3: Production, Cost & Perfect Competition', shortName: 'Production & Costs', description: 'Production function, costs of production, and perfectly competitive firms.', topicSlugs: ['production-cost'], exam_weight: '22–25%', color: 'from-purple-500 to-pink-500', icon: '🏭' },
  { id: 'imperfect-competition', unitNumber: 4, name: 'Unit 4: Imperfect Competition', shortName: 'Imperfect Competition', description: 'Monopoly, oligopoly, monopolistic competition, game theory, and price discrimination.', topicSlugs: ['imperfect-competition'], exam_weight: '15–22%', color: 'from-amber-500 to-orange-500', icon: '🎰' },
  { id: 'factor-markets', unitNumber: 5, name: 'Unit 5: Factor Markets', shortName: 'Factor Markets', description: 'Demand for resources, monopsony, and labor markets.', topicSlugs: ['factor-markets'], exam_weight: '10–13%', color: 'from-rose-500 to-pink-500', icon: '👷' },
  { id: 'market-failure', unitNumber: 6, name: 'Unit 6: Market Failure & Government', shortName: 'Market Failure', description: 'Externalities, public goods, taxes & subsidies, and income inequality.', topicSlugs: ['market-failure'], exam_weight: '8–13%', color: 'from-violet-500 to-fuchsia-500', icon: '⚖️' },
]

export const AP_MICRO_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-microeconomics',
  courseHubHref: '/ap-microeconomics',
  courseTitle: 'AP Microeconomics',
  unitTestRoute: '/ap-micro-unit-tests',
  units: AP_MICRO_UNITS,
  pool: microQuestionPool,
}
