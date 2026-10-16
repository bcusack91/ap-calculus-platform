import { worldHistQuestionPool } from '@/data/exit-quizzes/ap-world-history'
import { AP_WORLD_HISTORY_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-world-history-supplement'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * The 9 units of the AP World History: Modern CED. The Americas and Africa
 * c. 1200-1450 are Unit 1 (Topics 1.4-1.5), and the exit pool's single
 * `consequences` domain covers Units 6-9, so its topics are split by unit.
 * AP_WORLD_HISTORY_UNIT_SUPPLEMENT fills the units where the pool is thin.
 */
export const AP_WORLD_HISTORY_UNIT_ASSIGNMENT: UnitAssignment = {
  topics: {
    'wh-americas-africa-1200': 'global-tapestry',
    'wh-world-wars': 'global-conflict',
    'wh-mass-atrocities': 'global-conflict',
    'wh-cold-war-decolonization': 'cold-war-decolonization',
    'wh-newly-independent-states': 'cold-war-decolonization',
    'wh-globalization-tech': 'globalization',
    'wh-challenges-21st-century': 'globalization',
  },
}

export const AP_WORLD_HISTORY_UNITS: UnitDef[] = [
  { id: 'global-tapestry', unitNumber: 1, name: 'Unit 1: The Global Tapestry (c. 1200–c. 1450)', shortName: 'Global Tapestry', description: 'States and belief systems in East Asia, Dar al-Islam, South and Southeast Asia, the Americas, Africa, and Europe.', topicSlugs: ['wh-developments-east-asia', 'wh-dar-al-islam', 'wh-americas-africa-1200'], exam_weight: '8–10%', color: 'from-amber-500 to-orange-500', icon: '🌍' },
  { id: 'networks-exchange', unitNumber: 2, name: 'Unit 2: Networks of Exchange (c. 1200–c. 1450)', shortName: 'Networks of Exchange', description: 'The Silk Roads, the Mongol Empire, Indian Ocean and trans-Saharan trade, and the cultural effects of exchange.', topicSlugs: ['wh-silk-roads-mongols', 'wh-indian-ocean-trade'], exam_weight: '8–10%', color: 'from-orange-500 to-red-500', icon: '🐫' },
  { id: 'land-based-empires', unitNumber: 3, name: 'Unit 3: Land-Based Empires (c. 1450–c. 1750)', shortName: 'Land-Based Empires', description: 'The Ottoman, Safavid, Mughal, Ming and Qing, and Russian empires: expansion, administration, and belief systems.', topicSlugs: ['wh-islamic-empires', 'wh-east-asian-empires'], exam_weight: '12–15%', color: 'from-red-500 to-rose-500', icon: '🏯' },
  { id: 'transoceanic', unitNumber: 4, name: 'Unit 4: Transoceanic Interconnections (c. 1450–c. 1750)', shortName: 'Transoceanic', description: 'Maritime exploration, the Columbian Exchange, maritime empires, labor systems, and resistance.', topicSlugs: ['wh-exploration-columbian-exchange', 'wh-maritime-empires-labor'], exam_weight: '12–15%', color: 'from-rose-500 to-pink-500', icon: '⛵' },
  { id: 'revolutions', unitNumber: 5, name: 'Unit 5: Revolutions (c. 1750–c. 1900)', shortName: 'Revolutions', description: 'The Enlightenment, Atlantic revolutions, nationalism, and the Industrial Revolution.', topicSlugs: ['wh-enlightenment-political-revolutions', 'wh-industrial-revolution'], exam_weight: '12–15%', color: 'from-purple-500 to-fuchsia-500', icon: '⚙️' },
  { id: 'consequences', unitNumber: 6, name: 'Unit 6: Consequences of Industrialization (c. 1750–c. 1900)', shortName: 'Industrial Consequences', description: 'Imperialism and its justifications, resistance, economic imperialism, and global migration.', topicSlugs: ['wh-imperialism', 'wh-reform-migration'], exam_weight: '12–15%', color: 'from-fuchsia-500 to-violet-500', icon: '🚢' },
  { id: 'global-conflict', unitNumber: 7, name: 'Unit 7: Global Conflict (c. 1900–present)', shortName: 'Global Conflict', description: 'Shifting power after 1900, the world wars, the interwar years, and mass atrocities.', topicSlugs: ['wh-world-wars', 'wh-mass-atrocities'], exam_weight: '8–10%', color: 'from-violet-500 to-indigo-500', icon: '🎖️' },
  { id: 'cold-war-decolonization', unitNumber: 8, name: 'Unit 8: Cold War and Decolonization (c. 1900–present)', shortName: 'Cold War', description: 'The Cold War, spread of communism, decolonization, newly independent states, and the end of the Cold War.', topicSlugs: ['wh-cold-war-decolonization', 'wh-newly-independent-states'], exam_weight: '8–10%', color: 'from-indigo-500 to-blue-500', icon: '🌐' },
  { id: 'globalization', unitNumber: 9, name: 'Unit 9: Globalization (c. 1900–present)', shortName: 'Globalization', description: 'Advances in technology and medicine, the environment, economics, calls for reform, and global institutions.', topicSlugs: ['wh-globalization-tech', 'wh-challenges-21st-century'], exam_weight: '8–10%', color: 'from-blue-500 to-cyan-500', icon: '📡' },
]

export const AP_WORLD_HISTORY_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-world-history',
  courseHubHref: '/ap-world-history',
  courseTitle: 'AP World History',
  unitTestRoute: '/ap-world-history-unit-tests',
  units: AP_WORLD_HISTORY_UNITS,
  pool: [...assignUnits(worldHistQuestionPool, AP_WORLD_HISTORY_UNIT_ASSIGNMENT), ...AP_WORLD_HISTORY_UNIT_SUPPLEMENT],
}
