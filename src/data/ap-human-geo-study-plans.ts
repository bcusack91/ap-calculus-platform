import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-human-geo-sprint',
  title: '4-Week AP Human Geography Sprint',
  description: 'Fast review of core Human Geography topics — perfect for students who need a quick refresher before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Introduction to Geography Review', type: 'LESSON' as const, topicSlug: 'hg-intro-geography', dayOfWeek: 1 },
      { title: 'Spatial Concepts & Data Review', type: 'LESSON' as const, topicSlug: 'hg-spatial-concepts', dayOfWeek: 2 },
      { title: 'Population Distribution Review', type: 'LESSON' as const, topicSlug: 'hg-population-distribution', dayOfWeek: 3 },
      { title: 'Population Growth Review', type: 'LESSON' as const, topicSlug: 'hg-population-growth', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Migration Patterns Review', type: 'LESSON' as const, topicSlug: 'hg-migration', dayOfWeek: 0 },
      { title: 'Cultural Diffusion Review', type: 'LESSON' as const, topicSlug: 'hg-culture-diffusion', dayOfWeek: 2 },
      { title: 'Language & Religion Review', type: 'LESSON' as const, topicSlug: 'hg-language-religion', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Political Geography Review', type: 'LESSON' as const, topicSlug: 'hg-political-geography', dayOfWeek: 0 },
      { title: 'Political Power Review', type: 'LESSON' as const, topicSlug: 'hg-political-power', dayOfWeek: 2 },
      { title: 'Agricultural Origins Review', type: 'LESSON' as const, topicSlug: 'hg-agricultural-origins', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Urbanization Review', type: 'LESSON' as const, topicSlug: 'hg-urbanization', dayOfWeek: 0 },
      { title: 'Urban Challenges Review', type: 'LESSON' as const, topicSlug: 'hg-urban-challenges', dayOfWeek: 2 },
      { title: 'Industrialization Review', type: 'LESSON' as const, topicSlug: 'hg-industrialization', dayOfWeek: 4 },
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Review', type: 'CUSTOM' as const, dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-human-geo-standard',
  title: '10-Week AP Human Geography Plan',
  description: 'Balanced study schedule covering all Human Geography units with lessons, quizzes, practice, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Introduction to Geography', type: 'LESSON' as const, topicSlug: 'hg-intro-geography', dayOfWeek: 1 },
      { title: 'Spatial Concepts & Data', type: 'LESSON' as const, topicSlug: 'hg-spatial-concepts', dayOfWeek: 3 },
      { title: 'Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Population Distribution', type: 'LESSON' as const, topicSlug: 'hg-population-distribution', dayOfWeek: 0 },
      { title: 'Population Growth', type: 'LESSON' as const, topicSlug: 'hg-population-growth', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Migration Patterns', type: 'LESSON' as const, topicSlug: 'hg-migration', dayOfWeek: 0 },
      { title: 'Cultural Diffusion', type: 'LESSON' as const, topicSlug: 'hg-culture-diffusion', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Language & Religion', type: 'LESSON' as const, topicSlug: 'hg-language-religion', dayOfWeek: 0 },
      { title: 'Ethnicity & Identity', type: 'LESSON' as const, topicSlug: 'hg-ethnicity-identity', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Political Geography', type: 'LESSON' as const, topicSlug: 'hg-political-geography', dayOfWeek: 0 },
      { title: 'Political Power', type: 'LESSON' as const, topicSlug: 'hg-political-power', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Agricultural Origins', type: 'LESSON' as const, topicSlug: 'hg-agricultural-origins', dayOfWeek: 0 },
      { title: 'Agricultural Practices', type: 'LESSON' as const, topicSlug: 'hg-agricultural-practices', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Urbanization', type: 'LESSON' as const, topicSlug: 'hg-urbanization', dayOfWeek: 0 },
      { title: 'Urban Challenges', type: 'LESSON' as const, topicSlug: 'hg-urban-challenges', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Industrialization', type: 'LESSON' as const, topicSlug: 'hg-industrialization', dayOfWeek: 0 },
      { title: 'Globalization & Trade', type: 'LESSON' as const, topicSlug: 'hg-globalization-trade', dayOfWeek: 2 },
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
  id: '16-week-human-geo-comprehensive',
  title: '16-Week AP Human Geography Mastery',
  description: 'In-depth study plan covering all Human Geography units with practice problems, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Introduction to Geography', type: 'LESSON' as const, topicSlug: 'hg-intro-geography', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Spatial Concepts & Data', type: 'LESSON' as const, topicSlug: 'hg-spatial-concepts', dayOfWeek: 0 }, { title: 'Population Distribution', type: 'LESSON' as const, topicSlug: 'hg-population-distribution', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Population Growth', type: 'LESSON' as const, topicSlug: 'hg-population-growth', dayOfWeek: 0 }, { title: 'Migration Patterns', type: 'LESSON' as const, topicSlug: 'hg-migration', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Cultural Diffusion', type: 'LESSON' as const, topicSlug: 'hg-culture-diffusion', dayOfWeek: 0 }, { title: 'Language & Religion', type: 'LESSON' as const, topicSlug: 'hg-language-religion', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Ethnicity & Identity', type: 'LESSON' as const, topicSlug: 'hg-ethnicity-identity', dayOfWeek: 0 }, { title: 'Political Geography', type: 'LESSON' as const, topicSlug: 'hg-political-geography', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Political Power', type: 'LESSON' as const, topicSlug: 'hg-political-power', dayOfWeek: 0 }, { title: 'Agricultural Origins', type: 'LESSON' as const, topicSlug: 'hg-agricultural-origins', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Agricultural Practices', type: 'LESSON' as const, topicSlug: 'hg-agricultural-practices', dayOfWeek: 0 }, { title: 'Urbanization', type: 'LESSON' as const, topicSlug: 'hg-urbanization', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Urban Challenges', type: 'LESSON' as const, topicSlug: 'hg-urban-challenges', dayOfWeek: 0 }, { title: 'Industrialization', type: 'LESSON' as const, topicSlug: 'hg-industrialization', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(8, [{ title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Target Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcard Drill', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(9, [{ title: 'Globalization & Trade', type: 'LESSON' as const, topicSlug: 'hg-globalization-trade', dayOfWeek: 0 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(10, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(11, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(12, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(13, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(14, [{ title: 'Full Practice Exam #2', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'FRQ Practice Set', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(15, [{ title: 'Full Practice Exam #3', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Final Review & Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD' as const, dayOfWeek: 4 }, { title: 'Exam Tips & Strategy', type: 'CUSTOM' as const, dayOfWeek: 5 }]),
  ],
}

export const AP_HUMAN_GEO_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Human Geography',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-human-geography', label: 'AP Human Geography' },
  apiEndpoint: '/api/ap-human-geo-study-plans',
  accent: 'blue',
  examLabel: 'AP Exam Date',
  plans: AP_HUMAN_GEO_PLANS,
}
