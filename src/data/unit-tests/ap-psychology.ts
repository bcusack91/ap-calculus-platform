import { apPsychQuestionPool } from '@/data/exit-quizzes/ap-psychology'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

// Units follow the 2024-25 AP Psychology Course and Exam Description (five units);
// research methods are science practices tested across them. topicSlugs are exit-pool domains.
export const AP_PSYCHOLOGY_UNITS: UnitDef[] = [
  { id: 'biological-bases', unitNumber: 1, name: 'Unit 1: Biological Bases of Behavior', shortName: 'Biological Bases', description: 'Heredity and environment, the nervous and endocrine systems, the brain, sleep, and sensation.', topicSlugs: ['biological-bases', 'sensation-perception'], exam_weight: '15–25%', color: 'from-indigo-500 to-purple-500', icon: '🧠' },
  { id: 'cognition', unitNumber: 2, name: 'Unit 2: Cognition', shortName: 'Cognition', description: 'Perception, thinking and problem solving, intelligence, and memory.', topicSlugs: ['memory', 'thinking-language'], exam_weight: '15–25%', color: 'from-amber-500 to-orange-500', icon: '💭' },
  { id: 'development-learning', unitNumber: 3, name: 'Unit 3: Development and Learning', shortName: 'Development & Learning', description: 'Lifespan development, classical and operant conditioning, and social learning.', topicSlugs: ['developmental', 'learning'], exam_weight: '15–25%', color: 'from-emerald-500 to-teal-500', icon: '🎓' },
  { id: 'social-personality', unitNumber: 4, name: 'Unit 4: Social Psychology and Personality', shortName: 'Social & Personality', description: 'Attribution, attitudes, conformity and group behavior, personality, motivation, and emotion.', topicSlugs: ['social', 'personality', 'motivation-emotion'], exam_weight: '15–25%', color: 'from-fuchsia-500 to-violet-500', icon: '👥' },
  { id: 'mental-physical-health', unitNumber: 5, name: 'Unit 5: Mental and Physical Health', shortName: 'Mental & Physical Health', description: 'Psychological disorders, treatment, stress and health, and positive psychology.', topicSlugs: ['disorders-treatment'], exam_weight: '15–25%', color: 'from-cyan-500 to-blue-500', icon: '🩺' },
  { id: 'science-practices', unitNumber: 6, name: 'Science Practices: Research Methods', shortName: 'Research Methods', description: 'Research design, variables, statistics, and ethics, which the exam tests in every unit and in the AAQ and EBQ.', topicSlugs: ['history-approaches'], exam_weight: 'All units', color: 'from-blue-500 to-cyan-500', icon: '📚' },
]

export const AP_PSYCHOLOGY_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-psychology',
  courseHubHref: '/ap-psychology',
  courseTitle: 'AP Psychology',
  unitTestRoute: '/ap-psych-unit-tests',
  units: AP_PSYCHOLOGY_UNITS,
  pool: apPsychQuestionPool,
}
