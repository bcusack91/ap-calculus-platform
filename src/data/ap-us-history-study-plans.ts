import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-us-history-sprint',
  title: '4-Week AP US History Sprint',
  description: 'Fast review of core US History topics — perfect for students who need a quick refresher before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Native Societies & Exploration Review', type: 'LESSON' as const, topicSlug: 'apush-native-societies-exploration', dayOfWeek: 1 },
      { title: 'Colonial America Review', type: 'LESSON' as const, topicSlug: 'apush-colonial-america', dayOfWeek: 2 },
      { title: 'Colonial Society Review', type: 'LESSON' as const, topicSlug: 'apush-colonial-society-conflicts', dayOfWeek: 3 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Revolution & Independence Review', type: 'LESSON' as const, topicSlug: 'apush-revolution-independence', dayOfWeek: 0 },
      { title: 'Constitution & Early Republic Review', type: 'LESSON' as const, topicSlug: 'apush-constitution-early-republic', dayOfWeek: 2 },
      { title: 'Democracy & Expansion Review', type: 'LESSON' as const, topicSlug: 'apush-democracy-expansion', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Reform Movements Review', type: 'LESSON' as const, topicSlug: 'apush-reform-movements', dayOfWeek: 0 },
      { title: 'Civil War Review', type: 'LESSON' as const, topicSlug: 'apush-civil-war', dayOfWeek: 2 },
      { title: 'Reconstruction Review', type: 'LESSON' as const, topicSlug: 'apush-reconstruction', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Gilded Age Review', type: 'LESSON' as const, topicSlug: 'apush-gilded-age', dayOfWeek: 0 },
      { title: 'Progressivism & WWI Review', type: 'LESSON' as const, topicSlug: 'apush-progressivism-wwi', dayOfWeek: 2 },
      { title: 'Depression & WWII Review', type: 'LESSON' as const, topicSlug: 'apush-depression-wwii', dayOfWeek: 4 },
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Review', type: 'CUSTOM' as const, dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-us-history-standard',
  title: '10-Week AP US History Plan',
  description: 'Balanced study schedule covering all US History units with lessons, quizzes, practice, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Native Societies & Exploration', type: 'LESSON' as const, topicSlug: 'apush-native-societies-exploration', dayOfWeek: 1 },
      { title: 'Colonial America', type: 'LESSON' as const, topicSlug: 'apush-colonial-america', dayOfWeek: 3 },
      { title: 'Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Colonial Society', type: 'LESSON' as const, topicSlug: 'apush-colonial-society-conflicts', dayOfWeek: 0 },
      { title: 'Revolution & Independence', type: 'LESSON' as const, topicSlug: 'apush-revolution-independence', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Constitution & Early Republic', type: 'LESSON' as const, topicSlug: 'apush-constitution-early-republic', dayOfWeek: 0 },
      { title: 'Democracy & Expansion', type: 'LESSON' as const, topicSlug: 'apush-democracy-expansion', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Reform Movements', type: 'LESSON' as const, topicSlug: 'apush-reform-movements', dayOfWeek: 0 },
      { title: 'Civil War', type: 'LESSON' as const, topicSlug: 'apush-civil-war', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Reconstruction', type: 'LESSON' as const, topicSlug: 'apush-reconstruction', dayOfWeek: 0 },
      { title: 'Gilded Age', type: 'LESSON' as const, topicSlug: 'apush-gilded-age', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Progressivism & WWI', type: 'LESSON' as const, topicSlug: 'apush-progressivism-wwi', dayOfWeek: 0 },
      { title: 'Depression & WWII', type: 'LESSON' as const, topicSlug: 'apush-depression-wwii', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
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
  id: '16-week-us-history-comprehensive',
  title: '16-Week AP US History Mastery',
  description: 'In-depth study plan covering all US History units with practice problems, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Native Societies & Exploration', type: 'LESSON' as const, topicSlug: 'apush-native-societies-exploration', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Colonial America', type: 'LESSON' as const, topicSlug: 'apush-colonial-america', dayOfWeek: 0 }, { title: 'Colonial Society', type: 'LESSON' as const, topicSlug: 'apush-colonial-society-conflicts', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Revolution & Independence', type: 'LESSON' as const, topicSlug: 'apush-revolution-independence', dayOfWeek: 0 }, { title: 'Constitution & Early Republic', type: 'LESSON' as const, topicSlug: 'apush-constitution-early-republic', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Democracy & Expansion', type: 'LESSON' as const, topicSlug: 'apush-democracy-expansion', dayOfWeek: 0 }, { title: 'Reform Movements', type: 'LESSON' as const, topicSlug: 'apush-reform-movements', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Civil War', type: 'LESSON' as const, topicSlug: 'apush-civil-war', dayOfWeek: 0 }, { title: 'Reconstruction', type: 'LESSON' as const, topicSlug: 'apush-reconstruction', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Gilded Age', type: 'LESSON' as const, topicSlug: 'apush-gilded-age', dayOfWeek: 0 }, { title: 'Progressivism & WWI', type: 'LESSON' as const, topicSlug: 'apush-progressivism-wwi', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Depression & WWII', type: 'LESSON' as const, topicSlug: 'apush-depression-wwii', dayOfWeek: 0 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(8, [{ title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Target Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcard Drill', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(9, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(10, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(11, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(12, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(13, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(14, [{ title: 'Full Practice Exam #2', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'FRQ Practice Set', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(15, [{ title: 'Full Practice Exam #3', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Final Review & Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD' as const, dayOfWeek: 4 }, { title: 'Exam Tips & Strategy', type: 'CUSTOM' as const, dayOfWeek: 5 }]),
  ],
}

export const AP_US_HISTORY_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP US History',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-us-history', label: 'AP US History' },
  apiEndpoint: '/api/ap-us-history-study-plans',
  accent: 'red',
  examLabel: 'AP Exam Date',
  plans: AP_US_HISTORY_PLANS,
}
