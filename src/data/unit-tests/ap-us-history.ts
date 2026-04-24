import { usHistQuestionPool } from '@/data/exit-quizzes/ap-us-history'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_US_HISTORY_UNITS: UnitDef[] = [
  { id: 'period-1-2', unitNumber: 1, name: 'Period 1–2: 1491–1754', shortName: 'Pre-Colonial & Colonial', description: 'Native societies, European exploration, colonization, and the Atlantic world.', topicSlugs: ['period-1-2'], exam_weight: '10–17%', color: 'from-amber-500 to-orange-500', icon: '🪶' },
  { id: 'period-3', unitNumber: 2, name: 'Period 3: 1754–1800', shortName: 'Revolution & New Republic', description: 'Imperial wars, the American Revolution, Constitution, and early Republic.', topicSlugs: ['period-3'], exam_weight: '10–17%', color: 'from-orange-500 to-red-500', icon: '🇺🇸' },
  { id: 'period-4', unitNumber: 3, name: 'Period 4: 1800–1848', shortName: 'Antebellum Era', description: 'Jeffersonian democracy, Market Revolution, reform movements, and Manifest Destiny.', topicSlugs: ['period-4'], exam_weight: '10–17%', color: 'from-red-500 to-rose-500', icon: '🚂' },
  { id: 'period-5', unitNumber: 4, name: 'Period 5: 1844–1877', shortName: 'Civil War & Reconstruction', description: 'Sectionalism, the Civil War, and Reconstruction.', topicSlugs: ['period-5'], exam_weight: '10–17%', color: 'from-rose-500 to-pink-500', icon: '⚔️' },
  { id: 'period-6', unitNumber: 5, name: 'Period 6: 1865–1898', shortName: 'Gilded Age', description: 'Industrialization, the West, immigration, urban politics, and Populism.', topicSlugs: ['period-6'], exam_weight: '10–17%', color: 'from-fuchsia-500 to-violet-500', icon: '🏭' },
  { id: 'period-7', unitNumber: 6, name: 'Period 7–9: 1890–Present', shortName: 'Modern America', description: 'Progressive era, world wars, Great Depression, Cold War, civil rights, and modern era.', topicSlugs: ['period-7'], exam_weight: '40–50%', color: 'from-blue-500 to-indigo-500', icon: '🛰️' },
]

export const AP_US_HISTORY_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-us-history',
  courseHubHref: '/ap-us-history',
  courseTitle: 'AP US History',
  unitTestRoute: '/ap-us-history-unit-tests',
  units: AP_US_HISTORY_UNITS,
  pool: usHistQuestionPool,
}
