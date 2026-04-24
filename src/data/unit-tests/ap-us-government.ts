import { usGovQuestionPool } from '@/data/exit-quizzes/ap-us-government'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_US_GOV_UNITS: UnitDef[] = [
  { id: 'foundations', unitNumber: 1, name: 'Unit 1: Foundations of American Democracy', shortName: 'Foundations', description: 'Founding ideals, Constitution, federalism, and foundational documents.', topicSlugs: ['foundations'], exam_weight: '15–22%', color: 'from-blue-500 to-indigo-500', icon: '🏛️' },
  { id: 'branches', unitNumber: 2, name: 'Unit 2: Interactions Among Branches of Government', shortName: 'Branches', description: 'Congress, the presidency, the judiciary, and the bureaucracy.', topicSlugs: ['branches'], exam_weight: '25–36%', color: 'from-indigo-500 to-purple-500', icon: '⚖️' },
  { id: 'civil-liberties-rights', unitNumber: 3, name: 'Unit 3: Civil Liberties & Civil Rights', shortName: 'Civil Liberties & Rights', description: 'Bill of Rights, selective incorporation, and landmark cases.', topicSlugs: ['civil-liberties-rights'], exam_weight: '13–18%', color: 'from-purple-500 to-pink-500', icon: '✊' },
  { id: 'political-ideology', unitNumber: 4, name: 'Unit 4: American Political Ideologies & Beliefs', shortName: 'Ideologies', description: 'Political socialization, public opinion polling, and ideologies.', topicSlugs: ['political-ideology'], exam_weight: '10–15%', color: 'from-amber-500 to-orange-500', icon: '🗳️' },
  { id: 'political-participation', unitNumber: 5, name: 'Unit 5: Political Participation', shortName: 'Participation', description: 'Voting, elections, parties, interest groups, and the media.', topicSlugs: ['political-participation'], exam_weight: '20–27%', color: 'from-rose-500 to-pink-500', icon: '🎙️' },
]

export const AP_US_GOV_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-us-government',
  courseHubHref: '/ap-us-government',
  courseTitle: 'AP US Government',
  unitTestRoute: '/ap-us-gov-unit-tests',
  units: AP_US_GOV_UNITS,
  pool: usGovQuestionPool,
}
