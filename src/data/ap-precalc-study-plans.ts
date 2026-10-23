import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

/**
 * AP Precalculus study plans (rewritten Oct 2026, precalc-final PLAN.md).
 *
 * Every LESSON/QUIZ/PRACTICE task points at the canonical lesson that teaches it:
 *   Unit 1  rates-of-change-precalc · polynomial-functions-precalc · fundamental-theorem-algebra ·
 *           polynomial-division-remainder-theorem · rational-functions-precalc · transformations-precalc ·
 *           function-modeling-precalc
 *   Unit 2  sequences-series-precalc · exponential-functions-precalc · function-composition-inverses-precalc ·
 *           logarithmic-functions-precalc · exponential-logarithmic-modeling-precalc
 *   Unit 3  the-unit-circle · trigonometric-functions-precalc · graphing-trig-functions ·
 *           inverse-trig-functions-precalc · solving-trig-equations · trigonometric-identities-precalc ·
 *           polar-coordinates-precalc
 * Unit 4 (parameters, vectors, matrices) is not assessed and is not scheduled.
 * Exam (May 2027): 42 MCQ in 105 min (29 no-calculator + 13 graphing calculator) and
 * 4 FRQs in 70 min (Q1 Function Concepts, Q2 Non-Periodic Modeling, Q3 Periodic Modeling,
 * Q4 Symbolic Manipulations), weighted 62.5% / 37.5%.
 */

const sprint: StudyPlanTemplate = {
  id: '4-week-precalc-sprint',
  title: '4-Week AP Precalculus Sprint',
  description: 'Fast review of the three exam units — polynomial and rational, exponential and logarithmic, trigonometric and polar functions — for students with a solid foundation who need a final push before the May exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '4–6 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Precalculus Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Rates of Change and Function Behavior', type: 'LESSON', topicSlug: 'rates-of-change-precalc', dayOfWeek: 1 },
      { title: 'Polynomial Functions: Zeros, Multiplicity, End Behavior', type: 'LESSON', topicSlug: 'polynomial-functions-precalc', dayOfWeek: 2 },
      { title: 'Rational Functions: Asymptotes, Holes, Inequalities', type: 'LESSON', topicSlug: 'rational-functions-precalc', dayOfWeek: 4 },
      { title: 'Unit 1 Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Transformations of Functions', type: 'LESSON', topicSlug: 'transformations-precalc', dayOfWeek: 0 },
      { title: 'Exponential Functions and Growth Models', type: 'LESSON', topicSlug: 'exponential-functions-precalc', dayOfWeek: 1 },
      { title: 'Logarithmic Functions and Equations', type: 'LESSON', topicSlug: 'logarithmic-functions-precalc', dayOfWeek: 3 },
      { title: 'Unit 2 Quiz', type: 'QUIZ', topicSlug: 'logarithmic-functions-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Trigonometric Functions and the Unit Circle', type: 'LESSON', topicSlug: 'trigonometric-functions-precalc', dayOfWeek: 0 },
      { title: 'Sinusoidal Functions and Modeling', type: 'LESSON', topicSlug: 'graphing-trig-functions', dayOfWeek: 2 },
      { title: 'Solving Trigonometric Equations', type: 'LESSON', topicSlug: 'solving-trig-equations', dayOfWeek: 4 },
      { title: 'Unit 3 Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Polar Coordinates and Polar Functions', type: 'LESSON', topicSlug: 'polar-coordinates-precalc', dayOfWeek: 0 },
      { title: 'Full-Length Practice Exam (42 MCQ + 4 FRQ)', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Weak Areas from the Practice Exam', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '8-week-precalc-standard',
  title: '8-Week AP Precalculus Plan',
  description: 'Balanced study of every lesson in the three AP Precalculus exam units, with unit quizzes, a mid-course practice exam, and free-response practice in the four 2027 question types.',
  durationWeeks: 8, targetImprovement: '1–2 AP score points', weeklyHours: '5–7 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Precalculus Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Rates of Change', type: 'LESSON', topicSlug: 'rates-of-change-precalc', dayOfWeek: 1 },
      { title: 'Polynomial Functions', type: 'LESSON', topicSlug: 'polynomial-functions-precalc', dayOfWeek: 3 },
      { title: 'Complex Zeros and the Fundamental Theorem of Algebra', type: 'LESSON', topicSlug: 'fundamental-theorem-algebra', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Polynomial Division and Equivalent Forms', type: 'LESSON', topicSlug: 'polynomial-division-remainder-theorem', dayOfWeek: 0 },
      { title: 'Rational Functions', type: 'LESSON', topicSlug: 'rational-functions-precalc', dayOfWeek: 2 },
      { title: 'Transformations of Functions', type: 'LESSON', topicSlug: 'transformations-precalc', dayOfWeek: 4 },
      { title: 'Unit 1 Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Function Model Selection and Construction', type: 'LESSON', topicSlug: 'function-modeling-precalc', dayOfWeek: 0 },
      { title: 'Unit 1 Quiz', type: 'QUIZ', topicSlug: 'rational-functions-precalc', dayOfWeek: 2 },
      { title: 'FRQ Q2 Practice: Modeling a Non-Periodic Context', type: 'PRACTICE', topicSlug: 'function-modeling-precalc', dayOfWeek: 4 },
      { title: 'Sequences', type: 'LESSON', topicSlug: 'sequences-series-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Exponential Functions', type: 'LESSON', topicSlug: 'exponential-functions-precalc', dayOfWeek: 0 },
      { title: 'Function Composition and Inverses', type: 'LESSON', topicSlug: 'function-composition-inverses-precalc', dayOfWeek: 2 },
      { title: 'Logarithmic Functions', type: 'LESSON', topicSlug: 'logarithmic-functions-precalc', dayOfWeek: 4 },
      { title: 'Unit 2 Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Exponential and Logarithmic Data Modeling and Semi-log Plots', type: 'LESSON', topicSlug: 'exponential-logarithmic-modeling-precalc', dayOfWeek: 0 },
      { title: 'Unit 2 Quiz', type: 'QUIZ', topicSlug: 'logarithmic-functions-precalc', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam (42 MCQ + 4 FRQ)', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Practice Exam Results', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'The Unit Circle', type: 'LESSON', topicSlug: 'the-unit-circle', dayOfWeek: 0 },
      { title: 'Trigonometric Functions', type: 'LESSON', topicSlug: 'trigonometric-functions-precalc', dayOfWeek: 2 },
      { title: 'Sinusoidal Functions and Modeling', type: 'LESSON', topicSlug: 'graphing-trig-functions', dayOfWeek: 4 },
      { title: 'Unit 3 Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Inverse Trigonometric Functions', type: 'LESSON', topicSlug: 'inverse-trig-functions-precalc', dayOfWeek: 0 },
      { title: 'Solving Trigonometric Equations and Inequalities', type: 'LESSON', topicSlug: 'solving-trig-equations', dayOfWeek: 2 },
      { title: 'Trigonometric Identities and Equivalent Forms', type: 'LESSON', topicSlug: 'trigonometric-identities-precalc', dayOfWeek: 4 },
      { title: 'Unit 3 Quiz', type: 'QUIZ', topicSlug: 'graphing-trig-functions', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Polar Coordinates and Polar Functions', type: 'LESSON', topicSlug: 'polar-coordinates-precalc', dayOfWeek: 0 },
      { title: 'Full-Length Practice Exam (42 MCQ + 4 FRQ)', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Timed FRQ Set: Q1–Q4 (70 minutes)', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Exam Strategy Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '12-week-precalc-comprehensive',
  title: '12-Week AP Precalculus Mastery',
  description: 'Complete AP Precalculus preparation: every lesson in Units 1–3, topic practice, two full-length practice exams, graphing-calculator skills for Section I Part B and FRQ Part A, and timed free-response practice in all four question types.',
  durationWeeks: 12, targetImprovement: '2–3 AP score points', weeklyHours: '7–9 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Set Goals and Review Plan', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Rates of Change', type: 'LESSON', topicSlug: 'rates-of-change-precalc', dayOfWeek: 4 },
    ]),
    ...weekTasks(1, [
      { title: 'Polynomial Functions', type: 'LESSON', topicSlug: 'polynomial-functions-precalc', dayOfWeek: 0 },
      { title: 'Complex Zeros and the Fundamental Theorem of Algebra', type: 'LESSON', topicSlug: 'fundamental-theorem-algebra', dayOfWeek: 2 },
      { title: 'Polynomial Division and Equivalent Forms', type: 'LESSON', topicSlug: 'polynomial-division-remainder-theorem', dayOfWeek: 4 },
      { title: 'Unit 1 Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Rational Functions', type: 'LESSON', topicSlug: 'rational-functions-precalc', dayOfWeek: 0 },
      { title: 'Rational Functions Practice', type: 'PRACTICE', topicSlug: 'rational-functions-precalc', dayOfWeek: 2 },
      { title: 'Transformations of Functions', type: 'LESSON', topicSlug: 'transformations-precalc', dayOfWeek: 4 },
      { title: 'Unit 1 Quiz', type: 'QUIZ', topicSlug: 'polynomial-functions-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Function Model Selection and Construction', type: 'LESSON', topicSlug: 'function-modeling-precalc', dayOfWeek: 0 },
      { title: 'FRQ Q2 Practice: Modeling a Non-Periodic Context', type: 'PRACTICE', topicSlug: 'function-modeling-precalc', dayOfWeek: 2 },
      { title: 'FRQ Q1 Practice: Function Concepts', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Unit 1 Review Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Sequences', type: 'LESSON', topicSlug: 'sequences-series-precalc', dayOfWeek: 0 },
      { title: 'Exponential Functions', type: 'LESSON', topicSlug: 'exponential-functions-precalc', dayOfWeek: 2 },
      { title: 'Exponential Models Practice', type: 'PRACTICE', topicSlug: 'exponential-functions-precalc', dayOfWeek: 4 },
      { title: 'Unit 2 Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Function Composition and Inverses', type: 'LESSON', topicSlug: 'function-composition-inverses-precalc', dayOfWeek: 0 },
      { title: 'Logarithmic Functions', type: 'LESSON', topicSlug: 'logarithmic-functions-precalc', dayOfWeek: 2 },
      { title: 'Exponential and Logarithmic Equations Practice', type: 'PRACTICE', topicSlug: 'logarithmic-functions-precalc', dayOfWeek: 4 },
      { title: 'Unit 2 Quiz', type: 'QUIZ', topicSlug: 'exponential-functions-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Exponential and Logarithmic Data Modeling and Semi-log Plots', type: 'LESSON', topicSlug: 'exponential-logarithmic-modeling-precalc', dayOfWeek: 0 },
      { title: 'Mid-Course Practice Exam (42 MCQ + 4 FRQ)', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Practice Exam Results', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Unit 2 Review Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'The Unit Circle', type: 'LESSON', topicSlug: 'the-unit-circle', dayOfWeek: 0 },
      { title: 'Trigonometric Functions', type: 'LESSON', topicSlug: 'trigonometric-functions-precalc', dayOfWeek: 2 },
      { title: 'Sinusoidal Functions and Modeling', type: 'LESSON', topicSlug: 'graphing-trig-functions', dayOfWeek: 4 },
      { title: 'Unit 3 Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Sinusoidal Modeling Practice', type: 'PRACTICE', topicSlug: 'graphing-trig-functions', dayOfWeek: 0 },
      { title: 'FRQ Q3 Practice: Modeling a Periodic Context', type: 'PRACTICE', topicSlug: 'graphing-trig-functions', dayOfWeek: 2 },
      { title: 'Inverse Trigonometric Functions', type: 'LESSON', topicSlug: 'inverse-trig-functions-precalc', dayOfWeek: 4 },
      { title: 'Trigonometric Functions Quiz', type: 'QUIZ', topicSlug: 'trigonometric-functions-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Solving Trigonometric Equations and Inequalities', type: 'LESSON', topicSlug: 'solving-trig-equations', dayOfWeek: 0 },
      { title: 'Trigonometric Identities and Equivalent Forms', type: 'LESSON', topicSlug: 'trigonometric-identities-precalc', dayOfWeek: 2 },
      { title: 'FRQ Q4 Practice: Symbolic Manipulations', type: 'PRACTICE', topicSlug: 'trigonometric-identities-precalc', dayOfWeek: 4 },
      { title: 'Identities and Equations Quiz', type: 'QUIZ', topicSlug: 'trigonometric-identities-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(10, [
      { title: 'Polar Coordinates and Polar Functions', type: 'LESSON', topicSlug: 'polar-coordinates-precalc', dayOfWeek: 0 },
      { title: 'Polar Functions Practice', type: 'PRACTICE', topicSlug: 'polar-coordinates-precalc', dayOfWeek: 2 },
      { title: 'Unit 3 Quiz', type: 'QUIZ', topicSlug: 'polar-coordinates-precalc', dayOfWeek: 4 },
      { title: 'Unit 3 Review Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(11, [
      { title: 'Full-Length Practice Exam #2 (42 MCQ + 4 FRQ)', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Timed FRQ Set: Q1–Q4 (70 minutes)', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Exam Strategy and Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const AP_PRECALC_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Precalculus',
  description: 'Choose a pre-built study schedule for AP Precalculus covering the three exam units: polynomial and rational, exponential and logarithmic, and trigonometric and polar functions.',
  backLink: { href: '/ap-precalculus', label: 'AP Precalculus' },
  apiEndpoint: '/api/ap-precalc-study-plans',
  accent: 'emerald',
  examLabel: 'AP Exam Date',
  plans: AP_PRECALC_PLANS,
  // The diagnostic page stores `ap-precalculus-diagnostic-<form>`; this drives the "personalized from your diagnostic" banner.
  diagnosticPrefix: 'ap-precalculus-diagnostic',
}
