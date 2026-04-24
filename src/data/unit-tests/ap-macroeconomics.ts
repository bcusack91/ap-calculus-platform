import { macroQuestionPool } from '@/data/exit-quizzes/ap-macroeconomics'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_MACRO_UNITS: UnitDef[] = [
  { id: 'basic-concepts', unitNumber: 1, name: 'Unit 1: Basic Economic Concepts', shortName: 'Basic Concepts', description: 'Scarcity, PPC, comparative advantage, and supply & demand.', topicSlugs: ['basic-concepts'], exam_weight: '5–10%', color: 'from-blue-500 to-cyan-500', icon: '🔍' },
  { id: 'measurement', unitNumber: 2, name: 'Unit 2: Economic Indicators & Business Cycle', shortName: 'Measurement', description: 'GDP, unemployment, CPI, inflation, and the business cycle.', topicSlugs: ['measurement'], exam_weight: '12–17%', color: 'from-indigo-500 to-purple-500', icon: '📊' },
  { id: 'national-income', unitNumber: 3, name: 'Unit 3: National Income & Price Determination', shortName: 'National Income', description: 'AD/AS model, fiscal policy, and the multiplier effect.', topicSlugs: ['national-income'], exam_weight: '17–27%', color: 'from-purple-500 to-pink-500', icon: '💵' },
  { id: 'financial-sector', unitNumber: 4, name: 'Unit 4: Financial Sector', shortName: 'Financial Sector', description: 'Money, banking, money market, and monetary policy.', topicSlugs: ['financial-sector'], exam_weight: '17–27%', color: 'from-emerald-500 to-teal-500', icon: '🏦' },
  { id: 'stabilization', unitNumber: 5, name: 'Unit 5: Long-Run & Stabilization Policies', shortName: 'Stabilization', description: 'Phillips curve, monetary & fiscal policy interaction, and crowding out.', topicSlugs: ['stabilization'], exam_weight: '20–30%', color: 'from-amber-500 to-orange-500', icon: '⚖️' },
  { id: 'international', unitNumber: 6, name: 'Unit 6: Open Economy — International Trade & Finance', shortName: 'International', description: 'Balance of payments, foreign exchange markets, and trade policy.', topicSlugs: ['international'], exam_weight: '10–13%', color: 'from-rose-500 to-pink-500', icon: '🌍' },
]

export const AP_MACRO_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-macroeconomics',
  courseHubHref: '/ap-macroeconomics',
  courseTitle: 'AP Macroeconomics',
  unitTestRoute: '/ap-macro-unit-tests',
  units: AP_MACRO_UNITS,
  pool: macroQuestionPool,
}
