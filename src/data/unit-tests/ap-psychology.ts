import { apPsychQuestionPool } from '@/data/exit-quizzes/ap-psychology'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_PSYCHOLOGY_UNITS: UnitDef[] = [
  { id: 'history-approaches', unitNumber: 1, name: 'Unit 1: History & Approaches', shortName: 'History & Approaches', description: 'Major perspectives, research methods, ethics, and statistics.', topicSlugs: ['history-approaches'], exam_weight: '10–14%', color: 'from-blue-500 to-cyan-500', icon: '📚' },
  { id: 'biological-bases', unitNumber: 2, name: 'Unit 2: Biological Bases of Behavior', shortName: 'Biological Bases', description: 'Neurons, the nervous & endocrine systems, the brain, and consciousness.', topicSlugs: ['biological-bases'], exam_weight: '8–10%', color: 'from-indigo-500 to-purple-500', icon: '🧠' },
  { id: 'sensation-perception', unitNumber: 3, name: 'Unit 3: Sensation & Perception', shortName: 'Sensation & Perception', description: 'Vision, hearing, other senses, perceptual organization, and illusions.', topicSlugs: ['sensation-perception'], exam_weight: '6–8%', color: 'from-purple-500 to-pink-500', icon: '👁️' },
  { id: 'learning', unitNumber: 4, name: 'Unit 4: Learning', shortName: 'Learning', description: 'Classical & operant conditioning, observational learning, and reinforcement schedules.', topicSlugs: ['learning'], exam_weight: '7–9%', color: 'from-emerald-500 to-teal-500', icon: '🎓' },
  { id: 'memory', unitNumber: 5, name: 'Unit 5: Cognitive Psychology — Memory', shortName: 'Memory', description: 'Encoding, storage, retrieval, forgetting, and memory models.', topicSlugs: ['memory'], exam_weight: '13–17%', color: 'from-amber-500 to-orange-500', icon: '💭' },
  { id: 'thinking-language', unitNumber: 6, name: 'Unit 6: Cognition — Thinking & Language', shortName: 'Thinking & Language', description: 'Problem-solving, decision making, intelligence, and language acquisition.', topicSlugs: ['thinking-language'], exam_weight: '13–17%', color: 'from-orange-500 to-red-500', icon: '🗣️' },
  { id: 'developmental', unitNumber: 7, name: 'Unit 7: Developmental Psychology', shortName: 'Developmental', description: 'Lifespan development, Piaget, Erikson, attachment, and aging.', topicSlugs: ['developmental'], exam_weight: '7–9%', color: 'from-rose-500 to-pink-500', icon: '👶' },
  { id: 'motivation-emotion', unitNumber: 8, name: 'Unit 8: Motivation, Emotion & Personality', shortName: 'Motivation & Emotion', description: 'Theories of motivation, emotion, stress, and personality assessment.', topicSlugs: ['motivation-emotion'], exam_weight: '11–15%', color: 'from-fuchsia-500 to-violet-500', icon: '❤️' },
  { id: 'personality', unitNumber: 9, name: 'Unit 9: Personality', shortName: 'Personality', description: 'Psychodynamic, trait, humanistic, and social-cognitive theories of personality.', topicSlugs: ['personality'], exam_weight: '11–15%', color: 'from-violet-500 to-indigo-500', icon: '🪞' },
  { id: 'disorders-treatment', unitNumber: 10, name: 'Unit 10: Psychological Disorders & Treatment', shortName: 'Disorders & Treatment', description: 'DSM categories, anxiety/mood/psychotic disorders, and therapies.', topicSlugs: ['disorders-treatment'], exam_weight: '12–16%', color: 'from-cyan-500 to-blue-500', icon: '🩺' },
  { id: 'social', unitNumber: 11, name: 'Unit 11: Social Psychology', shortName: 'Social Psychology', description: 'Attribution, conformity, obedience, prejudice, and group behavior.', topicSlugs: ['social'], exam_weight: '8–10%', color: 'from-teal-500 to-emerald-500', icon: '👥' },
]

export const AP_PSYCHOLOGY_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-psychology',
  courseHubHref: '/ap-psychology',
  courseTitle: 'AP Psychology',
  unitTestRoute: '/ap-psych-unit-tests',
  units: AP_PSYCHOLOGY_UNITS,
  pool: apPsychQuestionPool,
}
