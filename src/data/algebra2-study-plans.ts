import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

// Resolvable interactive-lesson slugs for Algebra 2 (verified via getInteractiveTopicConfig):
//   polynomial-operations-algebra2, rational-expressions-algebra2, exponential-functions-algebra2

const sprint: StudyPlanTemplate = {
  id: '4-week-algebra2-sprint',
  title: '4-Week Algebra 2 Sprint',
  description: 'A fast review of the core Algebra 2 function families — polynomials, rational expressions, and exponentials/logarithms — for students who need a focused refresh.',
  durationWeeks: 4, targetImprovement: '1 letter grade', weeklyHours: '4–6 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Algebra 2 Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Polynomial Operations', type: 'LESSON', topicSlug: 'polynomial-operations-algebra2', dayOfWeek: 1 },
      { title: 'Factoring & Polynomial Division', type: 'LESSON', topicSlug: 'polynomial-operations-algebra2', dayOfWeek: 3 },
      { title: 'Polynomials Quiz', type: 'QUIZ', topicSlug: 'polynomial-operations-algebra2', dayOfWeek: 4 },
      { title: 'Polynomials Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Simplifying Rational Expressions', type: 'LESSON', topicSlug: 'rational-expressions-algebra2', dayOfWeek: 0 },
      { title: 'Rational Equations', type: 'LESSON', topicSlug: 'rational-expressions-algebra2', dayOfWeek: 2 },
      { title: 'Rationals Practice', type: 'PRACTICE', topicSlug: 'rational-expressions-algebra2', dayOfWeek: 4 },
      { title: 'Rationals Quiz', type: 'QUIZ', topicSlug: 'rational-expressions-algebra2', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Exponential Functions', type: 'LESSON', topicSlug: 'exponential-functions-algebra2', dayOfWeek: 0 },
      { title: 'Logarithms & Their Properties', type: 'LESSON', topicSlug: 'exponential-functions-algebra2', dayOfWeek: 2 },
      { title: 'Exponential & Log Practice', type: 'PRACTICE', topicSlug: 'exponential-functions-algebra2', dayOfWeek: 4 },
      { title: 'Exponential & Log Quiz', type: 'QUIZ', topicSlug: 'exponential-functions-algebra2', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Mixed Function-Family Practice', type: 'PRACTICE', topicSlug: 'polynomial-operations-algebra2', dayOfWeek: 0 },
      { title: 'Full Algebra 2 Practice Test', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '8-week-algebra2-standard',
  title: '8-Week Algebra 2 Plan',
  description: 'A balanced plan through the Algebra 2 function families — polynomials, rational expressions, exponentials, and logarithms — with regular quizzes and practice tests.',
  durationWeeks: 8, targetImprovement: '1–2 letter grades', weeklyHours: '5–7 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Algebra 2 Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review Results & Set Goals', type: 'CUSTOM', dayOfWeek: 1 },
      { title: 'Polynomial Operations & Arithmetic', type: 'LESSON', topicSlug: 'polynomial-operations-algebra2', dayOfWeek: 3 },
      { title: 'Polynomials Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Factoring Higher-Degree Polynomials', type: 'LESSON', topicSlug: 'polynomial-operations-algebra2', dayOfWeek: 0 },
      { title: 'Polynomial Long & Synthetic Division', type: 'LESSON', topicSlug: 'polynomial-operations-algebra2', dayOfWeek: 2 },
      { title: 'Polynomial Zeros & Theorems', type: 'LESSON', topicSlug: 'polynomial-operations-algebra2', dayOfWeek: 4 },
      { title: 'Polynomials Quiz', type: 'QUIZ', topicSlug: 'polynomial-operations-algebra2', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Simplifying Rational Expressions', type: 'LESSON', topicSlug: 'rational-expressions-algebra2', dayOfWeek: 0 },
      { title: 'Multiplying & Dividing Rationals', type: 'LESSON', topicSlug: 'rational-expressions-algebra2', dayOfWeek: 2 },
      { title: 'Adding & Subtracting Rationals', type: 'LESSON', topicSlug: 'rational-expressions-algebra2', dayOfWeek: 4 },
      { title: 'Rationals Quiz', type: 'QUIZ', topicSlug: 'rational-expressions-algebra2', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Solving Rational Equations', type: 'LESSON', topicSlug: 'rational-expressions-algebra2', dayOfWeek: 0 },
      { title: 'Complex Fractions', type: 'LESSON', topicSlug: 'rational-expressions-algebra2', dayOfWeek: 2 },
      { title: 'Rationals Practice', type: 'PRACTICE', topicSlug: 'rational-expressions-algebra2', dayOfWeek: 4 },
      { title: 'Rationals Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Exponential Functions & Graphs', type: 'LESSON', topicSlug: 'exponential-functions-algebra2', dayOfWeek: 0 },
      { title: 'Exponential Growth & Decay', type: 'LESSON', topicSlug: 'exponential-functions-algebra2', dayOfWeek: 2 },
      { title: 'Mid-Course Checkpoint Practice', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Introduction to Logarithms', type: 'LESSON', topicSlug: 'exponential-functions-algebra2', dayOfWeek: 0 },
      { title: 'Properties of Logarithms', type: 'LESSON', topicSlug: 'exponential-functions-algebra2', dayOfWeek: 2 },
      { title: 'Solving Exponential & Log Equations', type: 'LESSON', topicSlug: 'exponential-functions-algebra2', dayOfWeek: 4 },
      { title: 'Exponential & Log Quiz', type: 'QUIZ', topicSlug: 'exponential-functions-algebra2', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Mixed Function-Family Review', type: 'LESSON', topicSlug: 'rational-expressions-algebra2', dayOfWeek: 0 },
      { title: 'Polynomial & Rational Practice', type: 'PRACTICE', topicSlug: 'polynomial-operations-algebra2', dayOfWeek: 2 },
      { title: 'Exponential & Log Practice', type: 'PRACTICE', topicSlug: 'exponential-functions-algebra2', dayOfWeek: 4 },
      { title: 'Cumulative Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Full Algebra 2 Practice Test', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Missed Problems', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Test Strategy Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const ALGEBRA2_PLANS: StudyPlanTemplate[] = [sprint, standard]

export const config: StudyPlanSelectorConfig = {
  subject: 'Algebra 2',
  description: 'Choose a pre-built study schedule for Algebra 2 covering polynomials, rational expressions, and exponential and logarithmic functions.',
  backLink: { href: '/algebra-2', label: 'Algebra 2' },
  apiEndpoint: '/api/algebra2-study-plans',
  accent: 'cyan',
  examLabel: 'Target Test Date',
  plans: ALGEBRA2_PLANS,
  diagnosticPrefix: 'algebra2-diagnostic',
}
