import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-psych-sprint',
  title: '4-Week AP Psychology Sprint',
  description: 'Rapid review of the most-tested AP Psychology topics — biological bases, cognition, development, and abnormal psychology.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '4–6 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Psychology Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Biological Bases of Behavior', type: 'LESSON', topicSlug: 'biological-bases', dayOfWeek: 1 },
      { title: 'Sensation & Perception', type: 'LESSON', topicSlug: 'sensation-perception', dayOfWeek: 3 },
      { title: 'Bio Bases Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Learning & Conditioning', type: 'LESSON', topicSlug: 'learning', dayOfWeek: 0 },
      { title: 'Memory & Cognition', type: 'LESSON', topicSlug: 'cognition', dayOfWeek: 2 },
      { title: 'Learning & Memory Quiz', type: 'QUIZ', topicSlug: 'learning', dayOfWeek: 4 },
      { title: 'Cognition Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Developmental Psychology', type: 'LESSON', topicSlug: 'development', dayOfWeek: 0 },
      { title: 'Abnormal Psychology', type: 'LESSON', topicSlug: 'abnormal-psych', dayOfWeek: 2 },
      { title: 'Social Psychology', type: 'LESSON', topicSlug: 'social-psych', dayOfWeek: 4 },
      { title: 'Development & Abnormal Quiz', type: 'QUIZ', topicSlug: 'development', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Full AP Psychology Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Results & Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Key Theorists Review', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '8-week-psych-standard',
  title: '8-Week AP Psychology Plan',
  description: 'Covers all 9 units of the AP Psychology curriculum with a balanced mix of content review, vocabulary drills, and practice exams.',
  durationWeeks: 8, targetImprovement: '1–2 AP score points', weeklyHours: '5–7 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [{ title: 'Take AP Psychology Diagnostic', type: 'QUIZ', dayOfWeek: 0 }, { title: 'History & Approaches', type: 'LESSON', topicSlug: 'history-approaches', dayOfWeek: 1 }, { title: 'Research Methods', type: 'LESSON', topicSlug: 'research-methods', dayOfWeek: 3 }, { title: 'Research Methods Quiz', type: 'QUIZ', topicSlug: 'research-methods', dayOfWeek: 5 }]),
    ...weekTasks(1, [{ title: 'Biological Bases: Brain Structure', type: 'LESSON', topicSlug: 'biological-bases', dayOfWeek: 0 }, { title: 'Neurons & Neurotransmitters', type: 'LESSON', topicSlug: 'biological-bases', dayOfWeek: 2 }, { title: 'Bio Bases Flashcards', type: 'FLASHCARD', dayOfWeek: 4 }, { title: 'Biological Bases Quiz', type: 'QUIZ', topicSlug: 'biological-bases', dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Sensation', type: 'LESSON', topicSlug: 'sensation-perception', dayOfWeek: 0 }, { title: 'Perception', type: 'LESSON', topicSlug: 'sensation-perception', dayOfWeek: 2 }, { title: 'States of Consciousness', type: 'LESSON', topicSlug: 'consciousness', dayOfWeek: 4 }, { title: 'Sensation & Perception Quiz', type: 'QUIZ', topicSlug: 'sensation-perception', dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Classical & Operant Conditioning', type: 'LESSON', topicSlug: 'learning', dayOfWeek: 0 }, { title: 'Observational Learning', type: 'LESSON', topicSlug: 'learning', dayOfWeek: 2 }, { title: 'Memory Encoding & Storage', type: 'LESSON', topicSlug: 'cognition', dayOfWeek: 4 }, { title: 'Learning & Memory Quiz', type: 'QUIZ', topicSlug: 'learning', dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Thinking & Problem Solving', type: 'LESSON', topicSlug: 'cognition', dayOfWeek: 0 }, { title: 'Language & Intelligence', type: 'LESSON', topicSlug: 'cognition', dayOfWeek: 2 }, { title: 'Motivation & Emotion', type: 'LESSON', topicSlug: 'motivation-emotion', dayOfWeek: 4 }, { title: 'Cognition Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Developmental Psychology', type: 'LESSON', topicSlug: 'development', dayOfWeek: 0 }, { title: 'Personality Theories', type: 'LESSON', topicSlug: 'personality', dayOfWeek: 2 }, { title: 'Development Quiz', type: 'QUIZ', topicSlug: 'development', dayOfWeek: 4 }, { title: 'Development Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Abnormal Psychology & Disorders', type: 'LESSON', topicSlug: 'abnormal-psych', dayOfWeek: 0 }, { title: 'Treatment & Therapy', type: 'LESSON', topicSlug: 'abnormal-psych', dayOfWeek: 2 }, { title: 'Social Psychology', type: 'LESSON', topicSlug: 'social-psych', dayOfWeek: 4 }, { title: 'Abnormal & Social Quiz', type: 'QUIZ', topicSlug: 'abnormal-psych', dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Full AP Psychology Practice Exam', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Review Results & Weak Areas', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Key Theorists & Vocab Review', type: 'FLASHCARD', dayOfWeek: 4 }, { title: 'Second Practice Exam', type: 'PRACTICE', dayOfWeek: 5 }]),
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '12-week-psych-comprehensive',
  title: '12-Week AP Psychology Mastery',
  description: 'Thorough coverage of every AP Psychology unit with vocabulary mastery, key theorist reviews, multiple practice exams, and FRQ writing practice.',
  durationWeeks: 12, targetImprovement: '2–3 AP score points', weeklyHours: '7–9 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take AP Psychology Diagnostic', type: 'QUIZ', dayOfWeek: 0 }, { title: 'History of Psychology', type: 'LESSON', topicSlug: 'history-approaches', dayOfWeek: 2 }, { title: 'Research Methods & Ethics', type: 'LESSON', topicSlug: 'research-methods', dayOfWeek: 4 }, { title: 'Research Methods Quiz', type: 'QUIZ', topicSlug: 'research-methods', dayOfWeek: 5 }]),
    ...weekTasks(1, [{ title: 'Brain Anatomy', type: 'LESSON', topicSlug: 'biological-bases', dayOfWeek: 0 }, { title: 'Neurons & Neural Transmission', type: 'LESSON', topicSlug: 'biological-bases', dayOfWeek: 2 }, { title: 'Endocrine System', type: 'LESSON', topicSlug: 'biological-bases', dayOfWeek: 4 }, { title: 'Bio Bases Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Genetics & Behavior', type: 'LESSON', topicSlug: 'biological-bases', dayOfWeek: 0 }, { title: 'Sensation: Vision & Hearing', type: 'LESSON', topicSlug: 'sensation-perception', dayOfWeek: 2 }, { title: 'Other Senses', type: 'LESSON', topicSlug: 'sensation-perception', dayOfWeek: 4 }, { title: 'Bio Bases Quiz', type: 'QUIZ', topicSlug: 'biological-bases', dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Perception & Attention', type: 'LESSON', topicSlug: 'sensation-perception', dayOfWeek: 0 }, { title: 'Consciousness & Sleep', type: 'LESSON', topicSlug: 'consciousness', dayOfWeek: 2 }, { title: 'Drugs & Altered States', type: 'LESSON', topicSlug: 'consciousness', dayOfWeek: 4 }, { title: 'Sensation/Perception Quiz', type: 'QUIZ', topicSlug: 'sensation-perception', dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Classical Conditioning', type: 'LESSON', topicSlug: 'learning', dayOfWeek: 0 }, { title: 'Operant Conditioning', type: 'LESSON', topicSlug: 'learning', dayOfWeek: 2 }, { title: 'Observational & Cognitive Learning', type: 'LESSON', topicSlug: 'learning', dayOfWeek: 4 }, { title: 'Learning Quiz', type: 'QUIZ', topicSlug: 'learning', dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Memory Models & Encoding', type: 'LESSON', topicSlug: 'cognition', dayOfWeek: 0 }, { title: 'Retrieval & Forgetting', type: 'LESSON', topicSlug: 'cognition', dayOfWeek: 2 }, { title: 'Thinking, Language & Intelligence', type: 'LESSON', topicSlug: 'cognition', dayOfWeek: 4 }, { title: 'Cognition Quiz', type: 'QUIZ', topicSlug: 'cognition', dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Motivation & Emotion', type: 'LESSON', topicSlug: 'motivation-emotion', dayOfWeek: 4 }, { title: 'Stress & Health', type: 'LESSON', topicSlug: 'motivation-emotion', dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Lifespan Development (Prenatal–Adolescence)', type: 'LESSON', topicSlug: 'development', dayOfWeek: 0 }, { title: 'Lifespan Development (Adulthood–Aging)', type: 'LESSON', topicSlug: 'development', dayOfWeek: 2 }, { title: 'Development Quiz', type: 'QUIZ', topicSlug: 'development', dayOfWeek: 4 }, { title: 'Development Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(8, [{ title: 'Personality Theories: Psychoanalytic & Humanistic', type: 'LESSON', topicSlug: 'personality', dayOfWeek: 0 }, { title: 'Personality: Trait & Social-Cognitive', type: 'LESSON', topicSlug: 'personality', dayOfWeek: 2 }, { title: 'Personality Quiz', type: 'QUIZ', topicSlug: 'personality', dayOfWeek: 4 }, { title: 'Personality Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(9, [{ title: 'Psychological Disorders: Anxiety & Depression', type: 'LESSON', topicSlug: 'abnormal-psych', dayOfWeek: 0 }, { title: 'Disorders: Schizophrenia & Personality', type: 'LESSON', topicSlug: 'abnormal-psych', dayOfWeek: 2 }, { title: 'Treatment Approaches', type: 'LESSON', topicSlug: 'abnormal-psych', dayOfWeek: 4 }, { title: 'Disorders Quiz', type: 'QUIZ', topicSlug: 'abnormal-psych', dayOfWeek: 5 }]),
    ...weekTasks(10, [{ title: 'Social Psychology: Attribution & Attitudes', type: 'LESSON', topicSlug: 'social-psych', dayOfWeek: 0 }, { title: 'Conformity, Obedience & Group Dynamics', type: 'LESSON', topicSlug: 'social-psych', dayOfWeek: 2 }, { title: 'Social Psychology Quiz', type: 'QUIZ', topicSlug: 'social-psych', dayOfWeek: 4 }, { title: 'Social Psych Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(11, [{ title: 'Full Practice Exam #2', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'FRQ Writing Practice', type: 'PRACTICE', dayOfWeek: 2 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 }, { title: 'Exam Strategy & Tips', type: 'CUSTOM', dayOfWeek: 5 }]),
  ],
}

export const AP_PSYCH_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Psychology',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan covers key psychology units with lessons, term drills, and practice exams.',
  backLink: { href: '/ap-psychology', label: 'AP Psychology' },
  apiEndpoint: '/api/ap-psych-study-plans',
  accent: 'rose',
  examLabel: 'AP Exam Date',
  plans: AP_PSYCH_PLANS,
}
