import { aasQuestionPool } from '@/data/exit-quizzes/ap-african-american-studies'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_AAS_UNITS: UnitDef[] = [
  { id: 'origins-diaspora', unitNumber: 1, name: 'Unit 1: Origins of the African Diaspora', shortName: 'Origins of Diaspora', description: 'Early African societies, trade, and the origins of the African diaspora.', topicSlugs: ['origins-diaspora'], exam_weight: '20–25%', color: 'from-amber-500 to-orange-500', icon: '🌍' },
  { id: 'freedom-enslavement', unitNumber: 2, name: 'Unit 2: Freedom, Enslavement & Resistance', shortName: 'Freedom & Resistance', description: 'Atlantic slave trade, slavery in the Americas, and resistance.', topicSlugs: ['freedom-enslavement'], exam_weight: '25–30%', color: 'from-orange-500 to-red-500', icon: '⛓️' },
  { id: 'practice-freedom', unitNumber: 3, name: 'Unit 3: The Practice of Freedom', shortName: 'Practice of Freedom', description: 'Reconstruction, Black institutions, and early 20th-century Black life.', topicSlugs: ['practice-freedom'], exam_weight: '25–30%', color: 'from-rose-500 to-pink-500', icon: '✊' },
  { id: 'movements-debates', unitNumber: 4, name: 'Unit 4: Movements & Debates', shortName: 'Movements & Debates', description: 'Civil Rights, Black Power, and contemporary movements.', topicSlugs: ['movements-debates'], exam_weight: '25–30%', color: 'from-fuchsia-500 to-violet-500', icon: '📣' },
]

export const AP_AAS_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-african-american-studies',
  courseHubHref: '/ap-african-american-studies',
  courseTitle: 'AP African American Studies',
  unitTestRoute: '/ap-aas-unit-tests',
  units: AP_AAS_UNITS,
  pool: aasQuestionPool,
}
