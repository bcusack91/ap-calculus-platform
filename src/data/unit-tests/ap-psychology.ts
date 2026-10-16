import { apPsychQuestionPool } from '@/data/exit-quizzes/ap-psychology'
import { AP_PSYCHOLOGY_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-psychology-supplement'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

// Units follow the 2024-25 AP Psychology Course and Exam Description (five
// units); research methods are science practices tested across them. The exit
// pool still uses the older eleven-unit domains, so each one is filed under its
// CED unit: sensation is Unit 1 and perception Unit 2; motivation and emotion
// are Unit 4; stress, coping and well-being are Unit 5 (health psychology).
// AP_PSYCHOLOGY_UNIT_SUPPLEMENT fills the research-methods unit, where the
// pool is thin.
export const AP_PSYCHOLOGY_UNIT_ASSIGNMENT: UnitAssignment = {
  domains: {
    'history-approaches': 'science-practices',
    memory: 'cognition',
    'thinking-language': 'cognition',
    developmental: 'development-learning',
    learning: 'development-learning',
    social: 'social-personality',
    personality: 'social-personality',
    'motivation-emotion': 'social-personality',
    'disorders-treatment': 'mental-physical-health',
  },
  topics: {
    'sensation-sensory-processing': 'biological-bases',
    'perception-attention': 'cognition',
  },
  stems: {
    'Hans Selye\'s General Adaptation Syndrome': 'mental-physical-health',
    'A nurse who has worked double shifts for months': 'mental-physical-health',
    'According to the general adaptation syndrome, a person is MOST susceptible': 'mental-physical-health',
    'Shelley Taylor proposed that under stress': 'mental-physical-health',
    'Worried about a difficult chemistry test, Lena': 'mental-physical-health',
    'Long commutes, noisy roommates, and constant deadlines': 'mental-physical-health',
    'Ari feels nervous excitement as he prepares': 'mental-physical-health',
    'Students under prolonged exam stress': 'mental-physical-health',
    'Studies of subjective well-being find': 'mental-physical-health',
  },
}

export const AP_PSYCHOLOGY_UNITS: UnitDef[] = [
  { id: 'biological-bases', unitNumber: 1, name: 'Unit 1: Biological Bases of Behavior', shortName: 'Biological Bases', description: 'Heredity and environment, the nervous and endocrine systems, the brain, sleep, and sensation.', topicSlugs: ['biological-bases-brain', 'genetics-behavior', 'sensation-sensory-processing'], exam_weight: '15–25%', color: 'from-indigo-500 to-purple-500', icon: '🧠' },
  { id: 'cognition', unitNumber: 2, name: 'Unit 2: Cognition', shortName: 'Cognition', description: 'Perception, thinking and problem solving, intelligence, and memory.', topicSlugs: ['perception-attention', 'thinking-problem-solving', 'language-intelligence', 'memory-encoding-storage', 'retrieval-forgetting'], exam_weight: '15–25%', color: 'from-amber-500 to-orange-500', icon: '💭' },
  { id: 'development-learning', unitNumber: 3, name: 'Unit 3: Development and Learning', shortName: 'Development & Learning', description: 'Lifespan development, classical and operant conditioning, and social learning.', topicSlugs: ['prenatal-childhood-development', 'adolescence-adulthood', 'classical-conditioning', 'operant-conditioning', 'observational-learning-cognition'], exam_weight: '15–25%', color: 'from-emerald-500 to-teal-500', icon: '🎓' },
  { id: 'social-personality', unitNumber: 4, name: 'Unit 4: Social Psychology and Personality', shortName: 'Social & Personality', description: 'Attribution, attitudes, conformity and group behavior, personality, motivation, and emotion.', topicSlugs: ['social-influence-conformity', 'attitudes-persuasion', 'group-behavior-prejudice', 'personality-theories', 'motivation-theories', 'emotion-stress'], exam_weight: '15–25%', color: 'from-fuchsia-500 to-violet-500', icon: '👥' },
  { id: 'mental-physical-health', unitNumber: 5, name: 'Unit 5: Mental and Physical Health', shortName: 'Mental & Physical Health', description: 'Psychological disorders, treatment, stress and health, and positive psychology.', topicSlugs: ['psychological-disorders-overview', 'mood-psychotic-disorders', 'treatment-therapy', 'emotion-stress'], exam_weight: '15–25%', color: 'from-cyan-500 to-blue-500', icon: '🩺' },
  { id: 'science-practices', unitNumber: 6, name: 'Science Practices: Research Methods', shortName: 'Research Methods', description: 'Research design, variables, statistics, and ethics, which the exam tests in every unit and in the AAQ and EBQ.', topicSlugs: ['history-approaches-psychology'], exam_weight: 'All units', color: 'from-blue-500 to-cyan-500', icon: '📚' },
]

export const AP_PSYCHOLOGY_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-psychology',
  courseHubHref: '/ap-psychology',
  courseTitle: 'AP Psychology',
  unitTestRoute: '/ap-psych-unit-tests',
  units: AP_PSYCHOLOGY_UNITS,
  pool: [...assignUnits(apPsychQuestionPool, AP_PSYCHOLOGY_UNIT_ASSIGNMENT), ...AP_PSYCHOLOGY_UNIT_SUPPLEMENT],
}
