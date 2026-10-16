import { usHistQuestionPool } from '@/data/exit-quizzes/ap-us-history'
import { AP_US_HISTORY_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-us-history-supplement'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * The 9 periods of the AP US History CED, one unit test each. The exit pool
 * groups Periods 1-2 and 7-9 into single domains, so its topics are split by
 * period. AP_US_HISTORY_UNIT_SUPPLEMENT fills the periods where the pool is thin.
 */
export const AP_US_HISTORY_UNIT_ASSIGNMENT: UnitAssignment = {
  topics: {
    'apush-native-societies-exploration': 'period-1',
    'apush-colonial-america': 'period-2',
    'apush-colonial-society-conflicts': 'period-2',
    'apush-progressivism-wwi': 'period-7',
    'apush-depression-wwii': 'period-7',
    'apush-cold-war-civil-rights': 'period-8',
    'apush-vietnam-social-change': 'period-8',
    'apush-reagan-to-present': 'period-9',
  },
}

export const AP_US_HISTORY_UNITS: UnitDef[] = [
  { id: 'period-1', unitNumber: 1, name: 'Period 1: 1491–1607', shortName: 'Contact', description: 'Native American societies, European exploration, the Columbian Exchange, and early Spanish colonization.', topicSlugs: ['apush-native-societies-exploration'], exam_weight: '4–6%', color: 'from-amber-500 to-orange-500', icon: '🪶' },
  { id: 'period-2', unitNumber: 2, name: 'Period 2: 1607–1754', shortName: 'Colonial America', description: 'Spanish, French, Dutch, and British colonies; the Atlantic economy and slavery; and colonial society and conflict.', topicSlugs: ['apush-colonial-america', 'apush-colonial-society-conflicts'], exam_weight: '6–8%', color: 'from-yellow-500 to-amber-500', icon: '⛵' },
  { id: 'period-3', unitNumber: 3, name: 'Period 3: 1754–1800', shortName: 'Revolution & New Republic', description: 'The Seven Years’ War, the American Revolution, the Articles and the Constitution, and the early Republic.', topicSlugs: ['apush-revolution-independence', 'apush-constitution-early-republic'], exam_weight: '10–17%', color: 'from-orange-500 to-red-500', icon: '🇺🇸' },
  { id: 'period-4', unitNumber: 4, name: 'Period 4: 1800–1848', shortName: 'Early Republic & Reform', description: 'Jeffersonian and Jacksonian democracy, the Market Revolution, the Second Great Awakening and reform, and expansion.', topicSlugs: ['apush-democracy-expansion', 'apush-reform-movements'], exam_weight: '10–17%', color: 'from-red-500 to-rose-500', icon: '🚂' },
  { id: 'period-5', unitNumber: 5, name: 'Period 5: 1844–1877', shortName: 'Civil War & Reconstruction', description: 'Manifest Destiny, sectional crisis, the Civil War, and Reconstruction.', topicSlugs: ['apush-civil-war', 'apush-reconstruction'], exam_weight: '10–17%', color: 'from-rose-500 to-pink-500', icon: '⚔️' },
  { id: 'period-6', unitNumber: 6, name: 'Period 6: 1865–1898', shortName: 'Gilded Age', description: 'Industrialization, the West, immigration and urbanization, labor, and Populism.', topicSlugs: ['apush-gilded-age'], exam_weight: '10–17%', color: 'from-fuchsia-500 to-violet-500', icon: '🏭' },
  { id: 'period-7', unitNumber: 7, name: 'Period 7: 1890–1945', shortName: 'Progressives to WWII', description: 'Imperialism, the Progressive Era, World War I, the 1920s, the Great Depression and New Deal, and World War II.', topicSlugs: ['apush-progressivism-wwi', 'apush-depression-wwii'], exam_weight: '10–17%', color: 'from-violet-500 to-indigo-500', icon: '🏛️' },
  { id: 'period-8', unitNumber: 8, name: 'Period 8: 1945–1980', shortName: 'Cold War & Civil Rights', description: 'The early Cold War, postwar society, the civil rights movement, the Great Society, Vietnam, and the 1970s.', topicSlugs: ['apush-cold-war-civil-rights', 'apush-vietnam-social-change'], exam_weight: '10–17%', color: 'from-indigo-500 to-blue-500', icon: '🛰️' },
  { id: 'period-9', unitNumber: 9, name: 'Period 9: 1980–Present', shortName: 'Modern America', description: 'The conservative resurgence, the end of the Cold War, globalization and technology, and debates since 2001.', topicSlugs: ['apush-reagan-to-present'], exam_weight: '4–6%', color: 'from-blue-500 to-cyan-500', icon: '💻' },
]

export const AP_US_HISTORY_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-us-history',
  courseHubHref: '/ap-us-history',
  courseTitle: 'AP US History',
  unitTestRoute: '/ap-us-history-unit-tests',
  units: AP_US_HISTORY_UNITS,
  pool: [...assignUnits(usHistQuestionPool, AP_US_HISTORY_UNIT_ASSIGNMENT), ...AP_US_HISTORY_UNIT_SUPPLEMENT],
}
