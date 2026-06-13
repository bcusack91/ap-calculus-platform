import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

// Resolvable interactive-lesson slugs for Pre-Algebra (verified via getInteractiveTopicConfig):
//   intro-variables-prealgebra, order-of-operations-prealgebra, fractions-decimals-percents-prealgebra

const sprint: StudyPlanTemplate = {
  id: '4-week-prealgebra-sprint',
  title: '4-Week Pre-Algebra Sprint',
  description: 'A fast review of Pre-Algebra essentials — order of operations, fractions, decimals and percents, and intro to variables and expressions — for a quick refresh.',
  durationWeeks: 4, targetImprovement: '1 letter grade', weeklyHours: '3–5 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Pre-Algebra Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Integers & Order of Operations', type: 'LESSON', topicSlug: 'order-of-operations-prealgebra', dayOfWeek: 1 },
      { title: 'PEMDAS Practice', type: 'PRACTICE', topicSlug: 'order-of-operations-prealgebra', dayOfWeek: 3 },
      { title: 'Order of Operations Quiz', type: 'QUIZ', topicSlug: 'order-of-operations-prealgebra', dayOfWeek: 4 },
      { title: 'Number Sense Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Operations with Fractions', type: 'LESSON', topicSlug: 'fractions-decimals-percents-prealgebra', dayOfWeek: 0 },
      { title: 'Decimals & Percents', type: 'LESSON', topicSlug: 'fractions-decimals-percents-prealgebra', dayOfWeek: 2 },
      { title: 'Fractions, Decimals & Percents Practice', type: 'PRACTICE', topicSlug: 'fractions-decimals-percents-prealgebra', dayOfWeek: 4 },
      { title: 'Fractions & Percents Quiz', type: 'QUIZ', topicSlug: 'fractions-decimals-percents-prealgebra', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Variables & Expressions', type: 'LESSON', topicSlug: 'intro-variables-prealgebra', dayOfWeek: 0 },
      { title: 'Evaluating & Simplifying Expressions', type: 'LESSON', topicSlug: 'intro-variables-prealgebra', dayOfWeek: 2 },
      { title: 'Expressions Practice', type: 'PRACTICE', topicSlug: 'intro-variables-prealgebra', dayOfWeek: 4 },
      { title: 'Expressions Quiz', type: 'QUIZ', topicSlug: 'intro-variables-prealgebra', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Mixed Review Practice', type: 'PRACTICE', topicSlug: 'order-of-operations-prealgebra', dayOfWeek: 0 },
      { title: 'Full Pre-Algebra Practice Test', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '8-week-prealgebra-standard',
  title: '8-Week Pre-Algebra Plan',
  description: 'A balanced plan building number-sense and early-algebra skills — integers, fractions, decimals, percents, expressions, and equations — with regular quizzes and practice.',
  durationWeeks: 8, targetImprovement: '1–2 letter grades', weeklyHours: '4–6 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Pre-Algebra Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review Results & Set Goals', type: 'CUSTOM', dayOfWeek: 1 },
      { title: 'Integers & Absolute Value', type: 'LESSON', topicSlug: 'order-of-operations-prealgebra', dayOfWeek: 3 },
      { title: 'Number Sense Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Operations with Integers', type: 'LESSON', topicSlug: 'order-of-operations-prealgebra', dayOfWeek: 0 },
      { title: 'Order of Operations (PEMDAS)', type: 'LESSON', topicSlug: 'order-of-operations-prealgebra', dayOfWeek: 2 },
      { title: 'Integers & PEMDAS Practice', type: 'PRACTICE', topicSlug: 'order-of-operations-prealgebra', dayOfWeek: 4 },
      { title: 'Integers Quiz', type: 'QUIZ', topicSlug: 'order-of-operations-prealgebra', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Fraction Operations', type: 'LESSON', topicSlug: 'fractions-decimals-percents-prealgebra', dayOfWeek: 0 },
      { title: 'Decimal Operations', type: 'LESSON', topicSlug: 'fractions-decimals-percents-prealgebra', dayOfWeek: 2 },
      { title: 'Fraction–Decimal Conversions', type: 'LESSON', topicSlug: 'fractions-decimals-percents-prealgebra', dayOfWeek: 4 },
      { title: 'Fractions & Decimals Quiz', type: 'QUIZ', topicSlug: 'fractions-decimals-percents-prealgebra', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Percents & Percent Applications', type: 'LESSON', topicSlug: 'fractions-decimals-percents-prealgebra', dayOfWeek: 0 },
      { title: 'Ratios, Rates & Proportions', type: 'LESSON', topicSlug: 'fractions-decimals-percents-prealgebra', dayOfWeek: 2 },
      { title: 'Percents & Proportions Practice', type: 'PRACTICE', topicSlug: 'fractions-decimals-percents-prealgebra', dayOfWeek: 4 },
      { title: 'Percents Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Variables & Expressions', type: 'LESSON', topicSlug: 'intro-variables-prealgebra', dayOfWeek: 0 },
      { title: 'Combining Like Terms', type: 'LESSON', topicSlug: 'intro-variables-prealgebra', dayOfWeek: 2 },
      { title: 'Mid-Course Checkpoint Practice', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Evaluating Expressions', type: 'LESSON', topicSlug: 'intro-variables-prealgebra', dayOfWeek: 0 },
      { title: 'One- & Two-Step Equations', type: 'LESSON', topicSlug: 'intro-variables-prealgebra', dayOfWeek: 2 },
      { title: 'Expressions & Equations Practice', type: 'PRACTICE', topicSlug: 'intro-variables-prealgebra', dayOfWeek: 4 },
      { title: 'Expressions & Equations Quiz', type: 'QUIZ', topicSlug: 'intro-variables-prealgebra', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Cumulative Number-Sense Review', type: 'LESSON', topicSlug: 'fractions-decimals-percents-prealgebra', dayOfWeek: 0 },
      { title: 'Integers & Fractions Practice', type: 'PRACTICE', topicSlug: 'order-of-operations-prealgebra', dayOfWeek: 2 },
      { title: 'Expressions Practice', type: 'PRACTICE', topicSlug: 'intro-variables-prealgebra', dayOfWeek: 4 },
      { title: 'Cumulative Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Full Pre-Algebra Practice Test', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Missed Problems', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Test Strategy Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const PREALGEBRA_PLANS: StudyPlanTemplate[] = [sprint, standard]

export const config: StudyPlanSelectorConfig = {
  subject: 'Pre-Algebra',
  description: 'Choose a pre-built study schedule for Pre-Algebra covering integers, order of operations, fractions, decimals, percents, and expressions.',
  backLink: { href: '/pre-algebra', label: 'Pre-Algebra' },
  apiEndpoint: '/api/prealgebra-study-plans',
  accent: 'green',
  examLabel: 'Target Test Date',
  plans: PREALGEBRA_PLANS,
  diagnosticPrefix: 'prealgebra-diagnostic',
}
