import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-english-lang-sprint',
  title: '4-Week AP English Language Sprint',
  description: 'Fast review of core English Language topics — perfect for students who need a quick refresher before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Intro to Rhetoric Review', type: 'LESSON' as const, topicSlug: 'englang-intro-rhetoric', dayOfWeek: 1 },
      { title: 'Rhetorical Situation Review', type: 'LESSON' as const, topicSlug: 'englang-rhetorical-situation', dayOfWeek: 2 },
      { title: 'Rhetorical Writing Review', type: 'LESSON' as const, topicSlug: 'englang-rhetorical-situation-writing', dayOfWeek: 3 },
      { title: 'Claims & Evidence Review', type: 'LESSON' as const, topicSlug: 'englang-claims-evidence', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Claims Reading Review', type: 'LESSON' as const, topicSlug: 'englang-claims-evidence-reading', dayOfWeek: 0 },
      { title: 'Claims Writing Review', type: 'LESSON' as const, topicSlug: 'englang-claims-evidence-writing', dayOfWeek: 2 },
      { title: 'Reasoning in Reading Review', type: 'LESSON' as const, topicSlug: 'englang-reasoning-org-reading', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Argument Structure Review', type: 'LESSON' as const, topicSlug: 'englang-argument-structure', dayOfWeek: 0 },
      { title: 'Diction & Syntax Review', type: 'LESSON' as const, topicSlug: 'englang-diction-syntax', dayOfWeek: 2 },
      { title: 'Style in Reading Review', type: 'LESSON' as const, topicSlug: 'englang-style-reading', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Ethos/Pathos/Logos Review', type: 'LESSON' as const, topicSlug: 'englang-ethos-pathos-logos', dayOfWeek: 0 },
      { title: 'Logical Fallacies Review', type: 'LESSON' as const, topicSlug: 'englang-logical-fallacies', dayOfWeek: 2 },
      { title: 'Synthesis Review', type: 'LESSON' as const, topicSlug: 'englang-synthesis', dayOfWeek: 4 },
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Review', type: 'CUSTOM' as const, dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-english-lang-standard',
  title: '10-Week AP English Language Plan',
  description: 'Balanced study schedule covering all English Language units with lessons, quizzes, practice, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Intro to Rhetoric', type: 'LESSON' as const, topicSlug: 'englang-intro-rhetoric', dayOfWeek: 1 },
      { title: 'Rhetorical Situation', type: 'LESSON' as const, topicSlug: 'englang-rhetorical-situation', dayOfWeek: 3 },
      { title: 'Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Rhetorical Writing', type: 'LESSON' as const, topicSlug: 'englang-rhetorical-situation-writing', dayOfWeek: 0 },
      { title: 'Claims & Evidence', type: 'LESSON' as const, topicSlug: 'englang-claims-evidence', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Claims Reading', type: 'LESSON' as const, topicSlug: 'englang-claims-evidence-reading', dayOfWeek: 0 },
      { title: 'Claims Writing', type: 'LESSON' as const, topicSlug: 'englang-claims-evidence-writing', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Reasoning in Reading', type: 'LESSON' as const, topicSlug: 'englang-reasoning-org-reading', dayOfWeek: 0 },
      { title: 'Reasoning in Writing', type: 'LESSON' as const, topicSlug: 'englang-reasoning-org-writing', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Argument Structure', type: 'LESSON' as const, topicSlug: 'englang-argument-structure', dayOfWeek: 0 },
      { title: 'Diction & Syntax', type: 'LESSON' as const, topicSlug: 'englang-diction-syntax', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Style in Reading', type: 'LESSON' as const, topicSlug: 'englang-style-reading', dayOfWeek: 0 },
      { title: 'Style in Writing', type: 'LESSON' as const, topicSlug: 'englang-style-writing', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Ethos/Pathos/Logos', type: 'LESSON' as const, topicSlug: 'englang-ethos-pathos-logos', dayOfWeek: 0 },
      { title: 'Logical Fallacies', type: 'LESSON' as const, topicSlug: 'englang-logical-fallacies', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Synthesis', type: 'LESSON' as const, topicSlug: 'englang-synthesis', dayOfWeek: 0 },
      { title: 'Developing Arguments', type: 'LESSON' as const, topicSlug: 'englang-developing-arguments', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 0 },
      { title: 'Review Results & Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 2 },
      { title: 'FRQ Practice', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD' as const, dayOfWeek: 4 },
      { title: 'Second Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 5 },
    ]),
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '16-week-english-lang-comprehensive',
  title: '16-Week AP English Language Mastery',
  description: 'In-depth study plan covering all English Language units with practice problems, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Intro to Rhetoric', type: 'LESSON' as const, topicSlug: 'englang-intro-rhetoric', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Rhetorical Situation', type: 'LESSON' as const, topicSlug: 'englang-rhetorical-situation', dayOfWeek: 0 }, { title: 'Rhetorical Writing', type: 'LESSON' as const, topicSlug: 'englang-rhetorical-situation-writing', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Claims & Evidence', type: 'LESSON' as const, topicSlug: 'englang-claims-evidence', dayOfWeek: 0 }, { title: 'Claims Reading', type: 'LESSON' as const, topicSlug: 'englang-claims-evidence-reading', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Claims Writing', type: 'LESSON' as const, topicSlug: 'englang-claims-evidence-writing', dayOfWeek: 0 }, { title: 'Reasoning in Reading', type: 'LESSON' as const, topicSlug: 'englang-reasoning-org-reading', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Reasoning in Writing', type: 'LESSON' as const, topicSlug: 'englang-reasoning-org-writing', dayOfWeek: 0 }, { title: 'Argument Structure', type: 'LESSON' as const, topicSlug: 'englang-argument-structure', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Diction & Syntax', type: 'LESSON' as const, topicSlug: 'englang-diction-syntax', dayOfWeek: 0 }, { title: 'Style in Reading', type: 'LESSON' as const, topicSlug: 'englang-style-reading', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Style in Writing', type: 'LESSON' as const, topicSlug: 'englang-style-writing', dayOfWeek: 0 }, { title: 'Ethos/Pathos/Logos', type: 'LESSON' as const, topicSlug: 'englang-ethos-pathos-logos', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Logical Fallacies', type: 'LESSON' as const, topicSlug: 'englang-logical-fallacies', dayOfWeek: 0 }, { title: 'Synthesis', type: 'LESSON' as const, topicSlug: 'englang-synthesis', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(8, [{ title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Target Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcard Drill', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(9, [{ title: 'Developing Arguments', type: 'LESSON' as const, topicSlug: 'englang-developing-arguments', dayOfWeek: 0 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(10, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(11, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(12, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(13, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(14, [{ title: 'Full Practice Exam #2', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'FRQ Practice Set', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(15, [{ title: 'Full Practice Exam #3', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Final Review & Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD' as const, dayOfWeek: 4 }, { title: 'Exam Tips & Strategy', type: 'CUSTOM' as const, dayOfWeek: 5 }]),
  ],
}

export const AP_ENG_LANG_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP English Language',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-english-language', label: 'AP English Language' },
  apiEndpoint: '/api/ap-english-lang-study-plans',
  diagnosticPrefix: 'ap-english-lang-diagnostic',
  accent: 'cyan',
  examLabel: 'AP Exam Date',
  plans: AP_ENG_LANG_PLANS,
}
