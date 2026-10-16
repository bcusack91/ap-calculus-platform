import { macroQuestionPool } from '@/data/exit-quizzes/ap-macroeconomics'
import { AP_MACRO_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-macroeconomics-supplement'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * The 6 units of the AP Macroeconomics CED. Fiscal policy, the multipliers and
 * automatic stabilizers are Unit 3 (Topics 3.8-3.9); the Phillips curve, money
 * growth and inflation, deficits and debt, crowding out, and growth policy are
 * Unit 5. The exit pool files them the other way round in places, so they are
 * re-filed here. AP_MACRO_UNIT_SUPPLEMENT fills the units where the pool is thin.
 */
export const AP_MACRO_UNIT_ASSIGNMENT: UnitAssignment = {
  topics: {
    'macro-phillips-curve': 'stabilization',
    'macro-fiscal-policy': 'national-income',
    'macro-fiscal-policy-tools': 'stabilization',
  },
  stems: {
    // macro-fiscal-policy items on deficits, debt and crowding out (Unit 5)
    'The government finances a larger budget deficit by borrowing': 'stabilization',
    'In which situation is crowding out from deficit spending': 'stabilization',
    'This year a government spends ': 'stabilization',
    'A government runs a budget surplus in a given year when': 'stabilization',
    'Persistent government deficits keep real interest rates elevated': 'stabilization',
    'A country starts with no debt, runs deficits of ': 'stabilization',
    // macro-fiscal-policy-tools items on multipliers and taxes (Unit 3)
    'With an MPC of 0.75, a ': 'national-income',
    'The government raises its spending by ': 'national-income',
    'Why does an equal increase in government spending and taxes': 'national-income',
    'A tax takes 8% of a low-income family': 'national-income',
    'Assume an MPC of 0.8. Which fiscal action': 'national-income',
    'To close an inflationary gap of ': 'national-income',
    // macro-monetary-policy items on the quantity theory (Topic 5.3)
    'Velocity is constant, real output grows 2% per year': 'stabilization',
    'The money supply is ': 'stabilization',
    'In the long run, a permanent increase in the growth rate of the money supply': 'stabilization',
  },
}

export const AP_MACRO_UNITS: UnitDef[] = [
  { id: 'basic-concepts', unitNumber: 1, name: 'Unit 1: Basic Economic Concepts', shortName: 'Basic Concepts', description: 'Scarcity, opportunity cost, the PPC, comparative advantage, and demand, supply, and market equilibrium.', topicSlugs: ['macro-scarcity-opportunity-cost', 'macro-comparative-advantage'], exam_weight: '5–10%', color: 'from-blue-500 to-cyan-500', icon: '🔍' },
  { id: 'measurement', unitNumber: 2, name: 'Unit 2: Economic Indicators and the Business Cycle', shortName: 'Measurement', description: 'GDP, unemployment, CPI, inflation, and the business cycle.', topicSlugs: ['macro-gdp-growth', 'macro-unemployment-inflation'], exam_weight: '12–17%', color: 'from-indigo-500 to-purple-500', icon: '📊' },
  { id: 'national-income', unitNumber: 3, name: 'Unit 3: National Income and Price Determination', shortName: 'National Income', description: 'Aggregate demand and supply, the multipliers, short- and long-run equilibrium, fiscal policy, and automatic stabilizers.', topicSlugs: ['macro-aggregate-demand-supply', 'macro-multiplier-effect', 'macro-fiscal-policy'], exam_weight: '17–27%', color: 'from-purple-500 to-pink-500', icon: '💵' },
  { id: 'financial-sector', unitNumber: 4, name: 'Unit 4: Financial Sector', shortName: 'Financial Sector', description: 'Money, banking, money market, and monetary policy.', topicSlugs: ['macro-money-banking', 'macro-monetary-policy'], exam_weight: '18–23%', color: 'from-emerald-500 to-teal-500', icon: '🏦' },
  { id: 'stabilization', unitNumber: 5, name: 'Unit 5: Long-Run Consequences of Stabilization Policies', shortName: 'Stabilization', description: 'Policy in the short and long run, the Phillips curve, money growth and inflation, deficits and debt, crowding out, and economic growth.', topicSlugs: ['macro-phillips-curve', 'macro-fiscal-policy-tools'], exam_weight: '20–30%', color: 'from-amber-500 to-orange-500', icon: '⚖️' },
  { id: 'international', unitNumber: 6, name: 'Unit 6: Open Economy—International Trade and Finance', shortName: 'International', description: 'Balance of payments, foreign exchange markets, and trade policy.', topicSlugs: ['macro-open-economy', 'macro-international-trade-finance'], exam_weight: '10–13%', color: 'from-rose-500 to-pink-500', icon: '🌍' },
]

export const AP_MACRO_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-macroeconomics',
  courseHubHref: '/ap-macroeconomics',
  courseTitle: 'AP Macroeconomics',
  unitTestRoute: '/ap-macro-unit-tests',
  units: AP_MACRO_UNITS,
  pool: [...assignUnits(macroQuestionPool, AP_MACRO_UNIT_ASSIGNMENT), ...AP_MACRO_UNIT_SUPPLEMENT],
}
