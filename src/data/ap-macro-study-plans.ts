import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-macro-sprint',
  title: '4-Week AP Macroeconomics Sprint',
  description: 'Fast review of core Macroeconomics topics — perfect for students who need a quick refresher before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Scarcity & Opportunity Cost Review', type: 'LESSON' as const, topicSlug: 'macro-scarcity-opportunity-cost', dayOfWeek: 1 },
      { title: 'Comparative Advantage Review', type: 'LESSON' as const, topicSlug: 'macro-comparative-advantage', dayOfWeek: 2 },
      { title: 'GDP & Growth Review', type: 'LESSON' as const, topicSlug: 'macro-gdp-growth', dayOfWeek: 3 },
      { title: 'Unemployment & Inflation Review', type: 'LESSON' as const, topicSlug: 'macro-unemployment-inflation', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'AD-AS Model Review', type: 'LESSON' as const, topicSlug: 'macro-ad-as', dayOfWeek: 0 },
      { title: 'Multiplier Effect Review', type: 'LESSON' as const, topicSlug: 'macro-multiplier-effect', dayOfWeek: 2 },
      { title: 'Phillips Curve Review', type: 'LESSON' as const, topicSlug: 'macro-phillips-curve', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Monetary Policy Review', type: 'LESSON' as const, topicSlug: 'macro-monetary-policy', dayOfWeek: 0 },
      { title: 'Fiscal Policy Review', type: 'LESSON' as const, topicSlug: 'macro-fiscal-policy', dayOfWeek: 2 },
      { title: 'Fiscal Policy Tools Review', type: 'LESSON' as const, topicSlug: 'macro-fiscal-policy-tools', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'International Trade Review', type: 'LESSON' as const, topicSlug: 'macro-international-trade-finance', dayOfWeek: 0 },
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Review', type: 'CUSTOM' as const, dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-macro-standard',
  title: '10-Week AP Macroeconomics Plan',
  description: 'Balanced study schedule covering all Macroeconomics units with lessons, quizzes, practice, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Scarcity & Opportunity Cost', type: 'LESSON' as const, topicSlug: 'macro-scarcity-opportunity-cost', dayOfWeek: 1 },
      { title: 'Comparative Advantage', type: 'LESSON' as const, topicSlug: 'macro-comparative-advantage', dayOfWeek: 3 },
      { title: 'Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'GDP & Growth', type: 'LESSON' as const, topicSlug: 'macro-gdp-growth', dayOfWeek: 0 },
      { title: 'Unemployment & Inflation', type: 'LESSON' as const, topicSlug: 'macro-unemployment-inflation', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'AD-AS Model', type: 'LESSON' as const, topicSlug: 'macro-ad-as', dayOfWeek: 0 },
      { title: 'Multiplier Effect', type: 'LESSON' as const, topicSlug: 'macro-multiplier-effect', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Phillips Curve', type: 'LESSON' as const, topicSlug: 'macro-phillips-curve', dayOfWeek: 0 },
      { title: 'Money & Banking', type: 'LESSON' as const, topicSlug: 'macro-money-banking', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Monetary Policy', type: 'LESSON' as const, topicSlug: 'macro-monetary-policy', dayOfWeek: 0 },
      { title: 'Fiscal Policy', type: 'LESSON' as const, topicSlug: 'macro-fiscal-policy', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Fiscal Policy Tools', type: 'LESSON' as const, topicSlug: 'macro-fiscal-policy-tools', dayOfWeek: 0 },
      { title: 'Open Economy', type: 'LESSON' as const, topicSlug: 'macro-open-economy', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'International Trade', type: 'LESSON' as const, topicSlug: 'macro-international-trade-finance', dayOfWeek: 0 },
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
  id: '16-week-macro-comprehensive',
  title: '16-Week AP Macroeconomics Mastery',
  description: 'In-depth study plan covering all Macroeconomics units with practice problems, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Scarcity & Opportunity Cost', type: 'LESSON' as const, topicSlug: 'macro-scarcity-opportunity-cost', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Comparative Advantage', type: 'LESSON' as const, topicSlug: 'macro-comparative-advantage', dayOfWeek: 0 }, { title: 'GDP & Growth', type: 'LESSON' as const, topicSlug: 'macro-gdp-growth', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Unemployment & Inflation', type: 'LESSON' as const, topicSlug: 'macro-unemployment-inflation', dayOfWeek: 0 }, { title: 'AD-AS Model', type: 'LESSON' as const, topicSlug: 'macro-ad-as', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Multiplier Effect', type: 'LESSON' as const, topicSlug: 'macro-multiplier-effect', dayOfWeek: 0 }, { title: 'Phillips Curve', type: 'LESSON' as const, topicSlug: 'macro-phillips-curve', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Money & Banking', type: 'LESSON' as const, topicSlug: 'macro-money-banking', dayOfWeek: 0 }, { title: 'Monetary Policy', type: 'LESSON' as const, topicSlug: 'macro-monetary-policy', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Fiscal Policy', type: 'LESSON' as const, topicSlug: 'macro-fiscal-policy', dayOfWeek: 0 }, { title: 'Fiscal Policy Tools', type: 'LESSON' as const, topicSlug: 'macro-fiscal-policy-tools', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Open Economy', type: 'LESSON' as const, topicSlug: 'macro-open-economy', dayOfWeek: 0 }, { title: 'International Trade', type: 'LESSON' as const, topicSlug: 'macro-international-trade-finance', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
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

export const AP_MACRO_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Macroeconomics',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-macroeconomics', label: 'AP Macroeconomics' },
  apiEndpoint: '/api/ap-macro-study-plans',
  accent: 'emerald',
  examLabel: 'AP Exam Date',
  plans: AP_MACRO_PLANS,
}
