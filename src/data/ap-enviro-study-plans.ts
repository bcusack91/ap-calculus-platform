import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-enviro-sprint',
  title: '4-Week AP Environmental Science Sprint',
  description: 'Fast review of core Environmental Science topics — perfect for students who need a quick refresher before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Ecosystem Structure Review', type: 'LESSON' as const, topicSlug: 'apes-ecosystem-structure', dayOfWeek: 1 },
      { title: 'Biogeochemical Cycles Review', type: 'LESSON' as const, topicSlug: 'apes-biogeochemical-cycles', dayOfWeek: 2 },
      { title: 'Earth Systems Review', type: 'LESSON' as const, topicSlug: 'apes-earth-systems', dayOfWeek: 3 },
      { title: 'Biodiversity Review', type: 'LESSON' as const, topicSlug: 'apes-biodiversity', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Conservation Review', type: 'LESSON' as const, topicSlug: 'apes-biodiversity-conservation', dayOfWeek: 0 },
      { title: 'Biomes & Succession Review', type: 'LESSON' as const, topicSlug: 'apes-biomes-succession', dayOfWeek: 2 },
      { title: 'Population Ecology Review', type: 'LESSON' as const, topicSlug: 'apes-population-ecology', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Agriculture & Land Review', type: 'LESSON' as const, topicSlug: 'apes-agriculture-land', dayOfWeek: 0 },
      { title: 'Water Resources Review', type: 'LESSON' as const, topicSlug: 'apes-water-resources', dayOfWeek: 2 },
      { title: 'Fossil Fuels & Nuclear Review', type: 'LESSON' as const, topicSlug: 'apes-fossil-fuels-nuclear', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Energy Concepts Review', type: 'LESSON' as const, topicSlug: 'apes-energy', dayOfWeek: 0 },
      { title: 'Atmospheric Pollution Review', type: 'LESSON' as const, topicSlug: 'apes-atmospheric-pollution', dayOfWeek: 2 },
      { title: 'Climate Change Review', type: 'LESSON' as const, topicSlug: 'apes-atmosphere-climate', dayOfWeek: 4 },
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Review', type: 'CUSTOM' as const, dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-enviro-standard',
  title: '10-Week AP Environmental Science Plan',
  description: 'Balanced study schedule covering all Environmental Science units with lessons, quizzes, practice, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Ecosystem Structure', type: 'LESSON' as const, topicSlug: 'apes-ecosystem-structure', dayOfWeek: 1 },
      { title: 'Biogeochemical Cycles', type: 'LESSON' as const, topicSlug: 'apes-biogeochemical-cycles', dayOfWeek: 3 },
      { title: 'Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Earth Systems', type: 'LESSON' as const, topicSlug: 'apes-earth-systems', dayOfWeek: 0 },
      { title: 'Biodiversity', type: 'LESSON' as const, topicSlug: 'apes-biodiversity', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Conservation', type: 'LESSON' as const, topicSlug: 'apes-biodiversity-conservation', dayOfWeek: 0 },
      { title: 'Biomes & Succession', type: 'LESSON' as const, topicSlug: 'apes-biomes-succession', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Population Ecology', type: 'LESSON' as const, topicSlug: 'apes-population-ecology', dayOfWeek: 0 },
      { title: 'Human Population', type: 'LESSON' as const, topicSlug: 'apes-human-population', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Agriculture & Land', type: 'LESSON' as const, topicSlug: 'apes-agriculture-land', dayOfWeek: 0 },
      { title: 'Water Resources', type: 'LESSON' as const, topicSlug: 'apes-water-resources', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Fossil Fuels & Nuclear', type: 'LESSON' as const, topicSlug: 'apes-fossil-fuels-nuclear', dayOfWeek: 0 },
      { title: 'Renewable Energy', type: 'LESSON' as const, topicSlug: 'apes-renewable-energy', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Energy Concepts', type: 'LESSON' as const, topicSlug: 'apes-energy', dayOfWeek: 0 },
      { title: 'Atmospheric Pollution', type: 'LESSON' as const, topicSlug: 'apes-atmospheric-pollution', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Climate Change', type: 'LESSON' as const, topicSlug: 'apes-atmosphere-climate', dayOfWeek: 0 },
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
  id: '16-week-enviro-comprehensive',
  title: '16-Week AP Environmental Science Mastery',
  description: 'In-depth study plan covering all Environmental Science units with practice problems, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Ecosystem Structure', type: 'LESSON' as const, topicSlug: 'apes-ecosystem-structure', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Biogeochemical Cycles', type: 'LESSON' as const, topicSlug: 'apes-biogeochemical-cycles', dayOfWeek: 0 }, { title: 'Earth Systems', type: 'LESSON' as const, topicSlug: 'apes-earth-systems', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Biodiversity', type: 'LESSON' as const, topicSlug: 'apes-biodiversity', dayOfWeek: 0 }, { title: 'Conservation', type: 'LESSON' as const, topicSlug: 'apes-biodiversity-conservation', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Biomes & Succession', type: 'LESSON' as const, topicSlug: 'apes-biomes-succession', dayOfWeek: 0 }, { title: 'Population Ecology', type: 'LESSON' as const, topicSlug: 'apes-population-ecology', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Human Population', type: 'LESSON' as const, topicSlug: 'apes-human-population', dayOfWeek: 0 }, { title: 'Agriculture & Land', type: 'LESSON' as const, topicSlug: 'apes-agriculture-land', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Water Resources', type: 'LESSON' as const, topicSlug: 'apes-water-resources', dayOfWeek: 0 }, { title: 'Fossil Fuels & Nuclear', type: 'LESSON' as const, topicSlug: 'apes-fossil-fuels-nuclear', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Renewable Energy', type: 'LESSON' as const, topicSlug: 'apes-renewable-energy', dayOfWeek: 0 }, { title: 'Energy Concepts', type: 'LESSON' as const, topicSlug: 'apes-energy', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Atmospheric Pollution', type: 'LESSON' as const, topicSlug: 'apes-atmospheric-pollution', dayOfWeek: 0 }, { title: 'Climate Change', type: 'LESSON' as const, topicSlug: 'apes-atmosphere-climate', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
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

export const AP_ENVIRO_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Environmental Science',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-environmental-science', label: 'AP Environmental Science' },
  apiEndpoint: '/api/ap-enviro-study-plans',
  accent: 'green',
  examLabel: 'AP Exam Date',
  plans: AP_ENVIRO_PLANS,
}
