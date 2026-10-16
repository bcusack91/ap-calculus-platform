import { engLitQuestionPool } from '@/data/exit-quizzes/ap-english-literature'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * The AP English Literature CED's nine units are three passes through three
 * genres: short fiction (Units 1, 4, 7), poetry (2, 5, 8), and longer fiction
 * or drama (3, 6, 9). The CED weights the multiple-choice section by these
 * same three groups, so the unit tests follow them, each covering its three
 * units. The exit pool's skill-based domains (character, figurative
 * language, argument) are filed by the unit their lessons sit in.
 */
export const AP_ENGLISH_LIT_UNIT_ASSIGNMENT: UnitAssignment = {
  topics: {
    'englit-character-setting': 'short-fiction',
    'englit-narration-pov': 'short-fiction',
    'englit-narrative-perspective': 'short-fiction',
    'englit-symbol-motif-fiction': 'short-fiction',
    'englit-figurative-language': 'poetry',
    'englit-tone-speaker': 'poetry',
    'englit-narrative-complexity': 'longer-fiction',
    'englit-plot-conflict-theme': 'longer-fiction',
    'englit-social-commentary-drama': 'longer-fiction',
    'englit-essay-writing': 'longer-fiction',
  },
}

export const AP_ENGLISH_LIT_UNITS: UnitDef[] = [
  { id: 'short-fiction', unitNumber: 1, name: 'Short Fiction (Units 1, 4, and 7)', shortName: 'Short Fiction', description: 'Character, setting, plot, narrator and point of view, symbol and motif, and prose style in short stories.', topicSlugs: ['englit-short-fiction-1', 'englit-character-setting', 'englit-narration-pov', 'englit-short-fiction-2', 'englit-short-fiction-3'], exam_weight: '42–49%', color: 'from-blue-500 to-cyan-500', icon: '📖' },
  { id: 'poetry', unitNumber: 2, name: 'Poetry (Units 2, 5, and 8)', shortName: 'Poetry', description: 'Speaker and tone, structure and form, sound, imagery, and figurative language in poems.', topicSlugs: ['englit-poetry-1', 'englit-poetic-structure-form', 'englit-figurative-language', 'englit-poetry-2', 'englit-complex-poetic-analysis'], exam_weight: '36–45%', color: 'from-indigo-500 to-purple-500', icon: '🎼' },
  { id: 'longer-fiction', unitNumber: 3, name: 'Longer Fiction or Drama (Units 3, 6, and 9)', shortName: 'Longer Fiction & Drama', description: 'Structure, conflict, theme, complex narration, and social commentary in novels and plays, and literary argument.', topicSlugs: ['englit-longer-fiction', 'englit-dramatic-structure', 'englit-longer-fiction-2', 'englit-narrative-complexity', 'englit-essay-writing'], exam_weight: '15–18%', color: 'from-purple-500 to-pink-500', icon: '📚' },
]

export const AP_ENGLISH_LIT_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-english-literature',
  courseHubHref: '/ap-english-literature',
  courseTitle: 'AP English Literature',
  unitTestRoute: '/ap-english-lit-unit-tests',
  units: AP_ENGLISH_LIT_UNITS,
  pool: assignUnits(engLitQuestionPool, AP_ENGLISH_LIT_UNIT_ASSIGNMENT),
}
