import { engLangQuestionPool } from '@/data/exit-quizzes/ap-english-language'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * AP English Language's nine CED units each revisit the same four skill
 * categories (the Big Ideas), so the unit tests follow those four: one test
 * per skill category, each drawing that skill from every unit. The exit
 * pool's domains don't line up with them, so topics are filed by the course's
 * own skill grouping (the lesson categories). Weights are the CED's
 * multiple-choice weighting by skill category (reading and writing questions).
 */
export const AP_ENGLISH_LANG_UNIT_ASSIGNMENT: UnitAssignment = {
  topics: {
    'englang-writing-for-audience': 'rhetorical-situation',
    'englang-rhetorical-analysis-essay': 'rhetorical-situation',
    'englang-developing-arguments': 'claims-evidence',
    'englang-synthesis': 'claims-evidence',
    'englang-synthesis-essay': 'claims-evidence',
    'englang-logical-fallacies': 'reasoning-organization',
    'englang-ethos-pathos-logos': 'style',
    'englang-rhetorical-devices': 'style',
  },
}

export const AP_ENGLISH_LANG_UNITS: UnitDef[] = [
  { id: 'rhetorical-situation', unitNumber: 1, name: 'Rhetorical Situation (all units)', shortName: 'Rhetorical Situation', description: 'Exigence, audience, purpose, context, and message, and how writers make choices for a rhetorical situation.', topicSlugs: ['englang-intro-rhetoric', 'englang-writing-for-audience', 'englang-rhetorical-analysis-essay'], exam_weight: 'Reading 11–14% · Writing 11–14%', color: 'from-blue-500 to-indigo-500', icon: '🎯' },
  { id: 'claims-evidence', unitNumber: 2, name: 'Claims and Evidence (all units)', shortName: 'Claims & Evidence', description: 'Identifying and writing defensible claims, choosing and explaining evidence, and synthesizing sources.', topicSlugs: ['englang-claims-evidence', 'englang-developing-arguments', 'englang-synthesis-essay'], exam_weight: 'Reading 13–16% · Writing 11–14%', color: 'from-indigo-500 to-purple-500', icon: '📌' },
  { id: 'reasoning-organization', unitNumber: 3, name: 'Reasoning and Organization (all units)', shortName: 'Reasoning & Organization', description: 'Lines of reasoning, methods of development, transitions, structure, and flawed reasoning.', topicSlugs: ['englang-argument-structure', 'englang-logical-fallacies'], exam_weight: 'Reading 13–16% · Writing 11–14%', color: 'from-purple-500 to-pink-500', icon: '🧩' },
  { id: 'style', unitNumber: 4, name: 'Style (all units)', shortName: 'Style', description: 'Diction, syntax, tone, figurative language, and rhetorical devices, and how style serves purpose.', topicSlugs: ['englang-diction-syntax', 'englang-tone-voice-analysis', 'englang-ethos-pathos-logos', 'englang-rhetorical-devices'], exam_weight: 'Reading 11–14% · Writing 11–14%', color: 'from-amber-500 to-orange-500', icon: '✒️' },
]

export const AP_ENGLISH_LANG_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-english-language',
  courseHubHref: '/ap-english-language',
  courseTitle: 'AP English Language',
  unitTestRoute: '/ap-english-lang-unit-tests',
  units: AP_ENGLISH_LANG_UNITS,
  pool: assignUnits(engLangQuestionPool, AP_ENGLISH_LANG_UNIT_ASSIGNMENT),
}
