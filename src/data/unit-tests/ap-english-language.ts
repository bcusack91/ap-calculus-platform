import { engLangQuestionPool } from '@/data/exit-quizzes/ap-english-language'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_ENGLISH_LANG_UNITS: UnitDef[] = [
  { id: 'rhetorical-situation', unitNumber: 1, name: 'Unit 1: The Rhetorical Situation', shortName: 'Rhetorical Situation', description: 'Audience, purpose, exigence, context, and writer\u2019s message.', topicSlugs: ['rhetorical-situation'], exam_weight: '11–14%', color: 'from-blue-500 to-indigo-500', icon: '🎯' },
  { id: 'claims-evidence', unitNumber: 2, name: 'Unit 2: Claims & Evidence', shortName: 'Claims & Evidence', description: 'Identifying claims, lines of reasoning, and supporting evidence.', topicSlugs: ['claims-evidence'], exam_weight: '11–14%', color: 'from-indigo-500 to-purple-500', icon: '📌' },
  { id: 'reasoning-organization', unitNumber: 3, name: 'Unit 3: Reasoning & Organization', shortName: 'Reasoning & Organization', description: 'Logical structure, transitions, and methods of development.', topicSlugs: ['reasoning-organization'], exam_weight: '11–14%', color: 'from-purple-500 to-pink-500', icon: '🧩' },
  { id: 'style', unitNumber: 4, name: 'Unit 4: Style', shortName: 'Style', description: 'Word choice, syntax, tone, and stylistic choices.', topicSlugs: ['style'], exam_weight: '11–14%', color: 'from-amber-500 to-orange-500', icon: '✒️' },
  { id: 'rhetorical-devices', unitNumber: 5, name: 'Unit 5–7: Rhetorical Devices & Strategies', shortName: 'Rhetorical Devices', description: 'Ethos, pathos, logos, and common rhetorical devices.', topicSlugs: ['rhetorical-devices'], exam_weight: '20–30%', color: 'from-rose-500 to-pink-500', icon: '🎭' },
  { id: 'synthesis-argument', unitNumber: 6, name: 'Unit 8–9: Synthesis & Argument', shortName: 'Synthesis & Argument', description: 'Synthesizing sources and constructing original arguments.', topicSlugs: ['synthesis-argument'], exam_weight: '20–30%', color: 'from-fuchsia-500 to-violet-500', icon: '🪶' },
]

export const AP_ENGLISH_LANG_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-english-language',
  courseHubHref: '/ap-english-language',
  courseTitle: 'AP English Language',
  unitTestRoute: '/ap-english-lang-unit-tests',
  units: AP_ENGLISH_LANG_UNITS,
  pool: engLangQuestionPool,
}
