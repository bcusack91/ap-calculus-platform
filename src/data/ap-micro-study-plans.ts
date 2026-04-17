import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-micro-sprint',
  title: '4-Week AP Microeconomics Sprint',
  description: 'Fast review of core Microeconomics topics — perfect for students who need a quick refresher before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Scarcity & Marginal Analysis Review', type: 'LESSON' as const, topicSlug: 'micro-scarcity-marginal-analysis', dayOfWeek: 1 },
      { title: 'Supply & Demand Review', type: 'LESSON' as const, topicSlug: 'micro-supply-demand', dayOfWeek: 2 },
      { title: 'Market Equilibrium Review', type: 'LESSON' as const, topicSlug: 'micro-demand-supply-equilibrium', dayOfWeek: 3 },
      { title: 'Elasticity Review', type: 'LESSON' as const, topicSlug: 'micro-elasticity', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Government Intervention Review', type: 'LESSON' as const, topicSlug: 'micro-government-intervention', dayOfWeek: 0 },
      { title: 'Production & Costs Review', type: 'LESSON' as const, topicSlug: 'micro-production-costs', dayOfWeek: 2 },
      { title: 'Perfect Competition Review', type: 'LESSON' as const, topicSlug: 'micro-perfect-competition', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Monopolistic & Oligopoly Review', type: 'LESSON' as const, topicSlug: 'micro-monopolistic-oligopoly', dayOfWeek: 0 },
      { title: 'Labor Markets Review', type: 'LESSON' as const, topicSlug: 'micro-labor-markets', dayOfWeek: 2 },
      { title: 'Factor Markets Review', type: 'LESSON' as const, topicSlug: 'micro-factor-markets', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Market Failure Review', type: 'LESSON' as const, topicSlug: 'micro-market-failure', dayOfWeek: 0 },
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Review', type: 'CUSTOM' as const, dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-micro-standard',
  title: '10-Week AP Microeconomics Plan',
  description: 'Balanced study schedule covering all Microeconomics units with lessons, quizzes, practice, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Scarcity & Marginal Analysis', type: 'LESSON' as const, topicSlug: 'micro-scarcity-marginal-analysis', dayOfWeek: 1 },
      { title: 'Supply & Demand', type: 'LESSON' as const, topicSlug: 'micro-supply-demand', dayOfWeek: 3 },
      { title: 'Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Market Equilibrium', type: 'LESSON' as const, topicSlug: 'micro-demand-supply-equilibrium', dayOfWeek: 0 },
      { title: 'Elasticity', type: 'LESSON' as const, topicSlug: 'micro-elasticity', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Government Intervention', type: 'LESSON' as const, topicSlug: 'micro-government-intervention', dayOfWeek: 0 },
      { title: 'Production & Costs', type: 'LESSON' as const, topicSlug: 'micro-production-costs', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Perfect Competition', type: 'LESSON' as const, topicSlug: 'micro-perfect-competition', dayOfWeek: 0 },
      { title: 'Monopoly', type: 'LESSON' as const, topicSlug: 'micro-monopoly', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Monopolistic & Oligopoly', type: 'LESSON' as const, topicSlug: 'micro-monopolistic-oligopoly', dayOfWeek: 0 },
      { title: 'Labor Markets', type: 'LESSON' as const, topicSlug: 'micro-labor-markets', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Factor Markets', type: 'LESSON' as const, topicSlug: 'micro-factor-markets', dayOfWeek: 0 },
      { title: 'Externalities & Public Goods', type: 'LESSON' as const, topicSlug: 'micro-externalities-public-goods', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Market Failure', type: 'LESSON' as const, topicSlug: 'micro-market-failure', dayOfWeek: 0 },
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
  id: '16-week-micro-comprehensive',
  title: '16-Week AP Microeconomics Mastery',
  description: 'In-depth study plan covering all Microeconomics units with practice problems, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Scarcity & Marginal Analysis', type: 'LESSON' as const, topicSlug: 'micro-scarcity-marginal-analysis', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Supply & Demand', type: 'LESSON' as const, topicSlug: 'micro-supply-demand', dayOfWeek: 0 }, { title: 'Market Equilibrium', type: 'LESSON' as const, topicSlug: 'micro-demand-supply-equilibrium', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Elasticity', type: 'LESSON' as const, topicSlug: 'micro-elasticity', dayOfWeek: 0 }, { title: 'Government Intervention', type: 'LESSON' as const, topicSlug: 'micro-government-intervention', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Production & Costs', type: 'LESSON' as const, topicSlug: 'micro-production-costs', dayOfWeek: 0 }, { title: 'Perfect Competition', type: 'LESSON' as const, topicSlug: 'micro-perfect-competition', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Monopoly', type: 'LESSON' as const, topicSlug: 'micro-monopoly', dayOfWeek: 0 }, { title: 'Monopolistic & Oligopoly', type: 'LESSON' as const, topicSlug: 'micro-monopolistic-oligopoly', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Labor Markets', type: 'LESSON' as const, topicSlug: 'micro-labor-markets', dayOfWeek: 0 }, { title: 'Factor Markets', type: 'LESSON' as const, topicSlug: 'micro-factor-markets', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Externalities & Public Goods', type: 'LESSON' as const, topicSlug: 'micro-externalities-public-goods', dayOfWeek: 0 }, { title: 'Market Failure', type: 'LESSON' as const, topicSlug: 'micro-market-failure', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
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

export const AP_MICRO_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Microeconomics',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-microeconomics', label: 'AP Microeconomics' },
  apiEndpoint: '/api/ap-micro-study-plans',
  accent: 'violet',
  examLabel: 'AP Exam Date',
  plans: AP_MICRO_PLANS,
}
