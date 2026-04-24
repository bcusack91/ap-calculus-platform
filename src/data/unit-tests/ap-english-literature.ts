import { engLitQuestionPool } from '@/data/exit-quizzes/ap-english-literature'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_ENGLISH_LIT_UNITS: UnitDef[] = [
  { id: 'short-fiction', unitNumber: 1, name: 'Unit 1: Short Fiction I', shortName: 'Short Fiction', description: 'Reading short fiction: setting, plot, character, and narrative voice.', topicSlugs: ['short-fiction'], exam_weight: '14–17%', color: 'from-blue-500 to-cyan-500', icon: '📖' },
  { id: 'poetry', unitNumber: 2, name: 'Unit 2 & 5: Poetry', shortName: 'Poetry', description: 'Reading poetry: form, structure, sound, and figurative language.', topicSlugs: ['poetry'], exam_weight: '20–30%', color: 'from-indigo-500 to-purple-500', icon: '🎼' },
  { id: 'longer-fiction', unitNumber: 3, name: 'Unit 3 & 6: Longer Fiction & Drama', shortName: 'Longer Fiction', description: 'Novels and plays: structure, theme, and complex characters.', topicSlugs: ['longer-fiction'], exam_weight: '20–30%', color: 'from-purple-500 to-pink-500', icon: '📚' },
  { id: 'character-narrative', unitNumber: 4, name: 'Unit 4 & 7: Character & Narrative Technique', shortName: 'Character & Narrative', description: 'Character development, narrative perspective, and point of view.', topicSlugs: ['character-narrative'], exam_weight: '14–17%', color: 'from-emerald-500 to-teal-500', icon: '🎭' },
  { id: 'figurative-language', unitNumber: 5, name: 'Unit 8: Figurative Language', shortName: 'Figurative Language', description: 'Symbol, metaphor, imagery, allusion, and tone.', topicSlugs: ['figurative-language'], exam_weight: '14–17%', color: 'from-amber-500 to-orange-500', icon: '🌈' },
  { id: 'analysis-argument', unitNumber: 6, name: 'Unit 9: Literary Analysis & Argument', shortName: 'Analysis & Argument', description: 'Constructing literary arguments and writing analytical essays.', topicSlugs: ['analysis-argument'], exam_weight: '14–17%', color: 'from-rose-500 to-pink-500', icon: '✍️' },
]

export const AP_ENGLISH_LIT_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-english-literature',
  courseHubHref: '/ap-english-literature',
  courseTitle: 'AP English Literature',
  unitTestRoute: '/ap-english-lit-unit-tests',
  units: AP_ENGLISH_LIT_UNITS,
  pool: engLitQuestionPool,
}
