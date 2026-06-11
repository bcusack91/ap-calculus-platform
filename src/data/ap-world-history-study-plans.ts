import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-world-history-sprint',
  title: '4-Week AP World History Sprint',
  description: 'Fast review of core World History topics — perfect for students who need a quick refresher before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Global Tapestry Review', type: 'LESSON' as const, topicSlug: 'wh-global-tapestry', dayOfWeek: 1 },
      { title: 'Dar al-Islam Review', type: 'LESSON' as const, topicSlug: 'wh-dar-al-islam', dayOfWeek: 2 },
      { title: 'Silk Roads & Mongols Review', type: 'LESSON' as const, topicSlug: 'wh-silk-roads-mongols', dayOfWeek: 3 },
      { title: 'Indian Ocean Trade Review', type: 'LESSON' as const, topicSlug: 'wh-indian-ocean-trade', dayOfWeek: 4 },
      { title: 'Americas & Africa Review', type: 'LESSON' as const, topicSlug: 'wh-americas-africa-1200', dayOfWeek: 5 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Land-Based Empires Review', type: 'LESSON' as const, topicSlug: 'wh-land-based-empires', dayOfWeek: 0 },
      { title: 'Islamic Empires Review', type: 'LESSON' as const, topicSlug: 'wh-islamic-empires', dayOfWeek: 2 },
      { title: 'East Asian Empires Review', type: 'LESSON' as const, topicSlug: 'wh-east-asian-empires', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Transoceanic Interactions Review', type: 'LESSON' as const, topicSlug: 'wh-transoceanic', dayOfWeek: 0 },
      { title: 'Enlightenment & Revolutions Review', type: 'LESSON' as const, topicSlug: 'wh-enlightenment-political-revolutions', dayOfWeek: 2 },
      { title: 'Industrial Revolution Review', type: 'LESSON' as const, topicSlug: 'wh-industrial-revolution', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Imperialism Review', type: 'LESSON' as const, topicSlug: 'wh-imperialism', dayOfWeek: 0 },
      { title: 'Reform & Migration Review', type: 'LESSON' as const, topicSlug: 'wh-reform-migration', dayOfWeek: 2 },
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Review', type: 'CUSTOM' as const, dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-world-history-standard',
  title: '10-Week AP World History Plan',
  description: 'Balanced study schedule covering all World History units with lessons, quizzes, practice, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Global Tapestry', type: 'LESSON' as const, topicSlug: 'wh-global-tapestry', dayOfWeek: 1 },
      { title: 'Dar al-Islam', type: 'LESSON' as const, topicSlug: 'wh-dar-al-islam', dayOfWeek: 3 },
      { title: 'Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Silk Roads & Mongols', type: 'LESSON' as const, topicSlug: 'wh-silk-roads-mongols', dayOfWeek: 0 },
      { title: 'Indian Ocean Trade', type: 'LESSON' as const, topicSlug: 'wh-indian-ocean-trade', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Americas & Africa', type: 'LESSON' as const, topicSlug: 'wh-americas-africa-1200', dayOfWeek: 0 },
      { title: 'Land-Based Empires', type: 'LESSON' as const, topicSlug: 'wh-land-based-empires', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Islamic Empires', type: 'LESSON' as const, topicSlug: 'wh-islamic-empires', dayOfWeek: 0 },
      { title: 'East Asian Empires', type: 'LESSON' as const, topicSlug: 'wh-east-asian-empires', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Exploration & Columbian Exchange', type: 'LESSON' as const, topicSlug: 'wh-exploration-columbian-exchange', dayOfWeek: 0 },
      { title: 'Maritime Empires', type: 'LESSON' as const, topicSlug: 'wh-maritime-empires-labor', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Transoceanic Interactions', type: 'LESSON' as const, topicSlug: 'wh-transoceanic', dayOfWeek: 0 },
      { title: 'Enlightenment & Revolutions', type: 'LESSON' as const, topicSlug: 'wh-enlightenment-political-revolutions', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Industrial Revolution', type: 'LESSON' as const, topicSlug: 'wh-industrial-revolution', dayOfWeek: 0 },
      { title: 'Revolutions', type: 'LESSON' as const, topicSlug: 'wh-revolutions', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Consequences of Industrialization', type: 'LESSON' as const, topicSlug: 'wh-consequences-industrialization', dayOfWeek: 0 },
      { title: 'Imperialism', type: 'LESSON' as const, topicSlug: 'wh-imperialism', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Reform & Migration', type: 'LESSON' as const, topicSlug: 'wh-reform-migration', dayOfWeek: 0 },
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
  id: '16-week-world-history-comprehensive',
  title: '16-Week AP World History Mastery',
  description: 'In-depth study plan covering all World History units with practice problems, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Global Tapestry', type: 'LESSON' as const, topicSlug: 'wh-global-tapestry', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Dar al-Islam', type: 'LESSON' as const, topicSlug: 'wh-dar-al-islam', dayOfWeek: 0 }, { title: 'Silk Roads & Mongols', type: 'LESSON' as const, topicSlug: 'wh-silk-roads-mongols', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Indian Ocean Trade', type: 'LESSON' as const, topicSlug: 'wh-indian-ocean-trade', dayOfWeek: 0 }, { title: 'Americas & Africa', type: 'LESSON' as const, topicSlug: 'wh-americas-africa-1200', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Land-Based Empires', type: 'LESSON' as const, topicSlug: 'wh-land-based-empires', dayOfWeek: 0 }, { title: 'Islamic Empires', type: 'LESSON' as const, topicSlug: 'wh-islamic-empires', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'East Asian Empires', type: 'LESSON' as const, topicSlug: 'wh-east-asian-empires', dayOfWeek: 0 }, { title: 'Exploration & Columbian Exchange', type: 'LESSON' as const, topicSlug: 'wh-exploration-columbian-exchange', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Maritime Empires', type: 'LESSON' as const, topicSlug: 'wh-maritime-empires-labor', dayOfWeek: 0 }, { title: 'Transoceanic Interactions', type: 'LESSON' as const, topicSlug: 'wh-transoceanic', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Enlightenment & Revolutions', type: 'LESSON' as const, topicSlug: 'wh-enlightenment-political-revolutions', dayOfWeek: 0 }, { title: 'Industrial Revolution', type: 'LESSON' as const, topicSlug: 'wh-industrial-revolution', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Revolutions', type: 'LESSON' as const, topicSlug: 'wh-revolutions', dayOfWeek: 0 }, { title: 'Consequences of Industrialization', type: 'LESSON' as const, topicSlug: 'wh-consequences-industrialization', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(8, [{ title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Target Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcard Drill', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(9, [{ title: 'Imperialism', type: 'LESSON' as const, topicSlug: 'wh-imperialism', dayOfWeek: 0 }, { title: 'Reform & Migration', type: 'LESSON' as const, topicSlug: 'wh-reform-migration', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(10, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(11, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(12, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(13, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(14, [{ title: 'Full Practice Exam #2', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'FRQ Practice Set', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(15, [{ title: 'Full Practice Exam #3', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Final Review & Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD' as const, dayOfWeek: 4 }, { title: 'Exam Tips & Strategy', type: 'CUSTOM' as const, dayOfWeek: 5 }]),
  ],
}

export const AP_WORLD_HISTORY_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP World History',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-world-history', label: 'AP World History' },
  apiEndpoint: '/api/ap-world-history-study-plans',
  diagnosticPrefix: 'ap-world-history-diagnostic',
  accent: 'amber',
  examLabel: 'AP Exam Date',
  plans: AP_WORLD_HISTORY_PLANS,
}
