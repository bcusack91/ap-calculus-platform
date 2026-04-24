import { worldHistQuestionPool } from '@/data/exit-quizzes/ap-world-history'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_WORLD_HISTORY_UNITS: UnitDef[] = [
  { id: 'global-tapestry', unitNumber: 1, name: 'Unit 1: The Global Tapestry (c. 1200–1450)', shortName: 'Global Tapestry', description: 'States and societies in Afro-Eurasia from 1200–1450.', topicSlugs: ['global-tapestry'], exam_weight: '8–10%', color: 'from-amber-500 to-orange-500', icon: '🌍' },
  { id: 'networks-exchange', unitNumber: 2, name: 'Unit 2: Networks of Exchange (c. 1200–1450)', shortName: 'Networks of Exchange', description: 'Silk Roads, Indian Ocean, trans-Saharan trade, and the Mongols.', topicSlugs: ['networks-exchange'], exam_weight: '8–10%', color: 'from-orange-500 to-red-500', icon: '🐫' },
  { id: 'land-based-empires', unitNumber: 3, name: 'Unit 3: Land-Based Empires (c. 1450–1750)', shortName: 'Land-Based Empires', description: 'Ottoman, Safavid, Mughal, Russian, Ming/Qing empires and their interactions.', topicSlugs: ['land-based-empires'], exam_weight: '12–15%', color: 'from-red-500 to-rose-500', icon: '🏯' },
  { id: 'transoceanic', unitNumber: 4, name: 'Unit 4: Transoceanic Interconnections (c. 1450–1750)', shortName: 'Transoceanic', description: 'Maritime exploration, Columbian Exchange, Atlantic slave trade, and global commerce.', topicSlugs: ['transoceanic'], exam_weight: '12–15%', color: 'from-rose-500 to-pink-500', icon: '⛵' },
  { id: 'revolutions', unitNumber: 5, name: 'Unit 5: Revolutions (c. 1750–1900)', shortName: 'Revolutions', description: 'Enlightenment, political revolutions, industrial revolution, and imperialism.', topicSlugs: ['revolutions'], exam_weight: '12–15%', color: 'from-purple-500 to-fuchsia-500', icon: '⚙️' },
  { id: 'consequences', unitNumber: 6, name: 'Unit 6–9: Global Conflicts, Cold War & Globalization', shortName: 'Modern Era', description: 'World Wars, decolonization, Cold War, post-1945 globalization, and the 21st century.', topicSlugs: ['consequences'], exam_weight: '40–50%', color: 'from-indigo-500 to-blue-500', icon: '🌐' },
]

export const AP_WORLD_HISTORY_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-world-history',
  courseHubHref: '/ap-world-history',
  courseTitle: 'AP World History',
  unitTestRoute: '/ap-world-history-unit-tests',
  units: AP_WORLD_HISTORY_UNITS,
  pool: worldHistQuestionPool,
}
