import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

// Resolvable interactive-lesson slugs for (non-AP) Precalculus — verified via getInteractiveTopicConfig:
//   function-composition-inverses-precalc, transformations-precalc, polynomial-functions-precalc,
//   rational-functions-precalc, exponential-functions-precalc, logarithmic-functions-precalc,
//   trigonometric-functions-precalc, the-unit-circle, trigonometric-identities-precalc,
//   inverse-trig-functions-precalc, law-of-sines-cosines-precalc, sequences-series-precalc,
//   polar-coordinates-precalc, vectors-two-dimensions-precalc, matrices-precalc,
//   conic-sections-precalc, parametric-equations-precalc, systems-of-equations-precalc,
//   continuity-precalc, limits-introduction-precalc, rates-of-change-precalc

const sprint: StudyPlanTemplate = {
  id: '4-week-precalculus-sprint',
  title: '4-Week Precalculus Sprint',
  description: 'A fast review of the Precalculus essentials — function families, exponentials and logs, and the core of trigonometry — for students who need a focused refresh.',
  durationWeeks: 4, targetImprovement: '1 letter grade', weeklyHours: '4–6 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Precalculus Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Function Composition & Inverses', type: 'LESSON', topicSlug: 'function-composition-inverses-precalc', dayOfWeek: 1 },
      { title: 'Polynomial & Rational Functions', type: 'LESSON', topicSlug: 'polynomial-functions-precalc', dayOfWeek: 3 },
      { title: 'Functions Quiz', type: 'QUIZ', topicSlug: 'polynomial-functions-precalc', dayOfWeek: 4 },
      { title: 'Functions Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Exponential Functions', type: 'LESSON', topicSlug: 'exponential-functions-precalc', dayOfWeek: 0 },
      { title: 'Logarithmic Functions', type: 'LESSON', topicSlug: 'logarithmic-functions-precalc', dayOfWeek: 2 },
      { title: 'Exponential & Log Practice', type: 'PRACTICE', topicSlug: 'logarithmic-functions-precalc', dayOfWeek: 4 },
      { title: 'Exponential & Log Quiz', type: 'QUIZ', topicSlug: 'exponential-functions-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'The Unit Circle', type: 'LESSON', topicSlug: 'the-unit-circle', dayOfWeek: 0 },
      { title: 'Trigonometric Functions', type: 'LESSON', topicSlug: 'trigonometric-functions-precalc', dayOfWeek: 2 },
      { title: 'Trigonometric Identities', type: 'LESSON', topicSlug: 'trigonometric-identities-precalc', dayOfWeek: 4 },
      { title: 'Trigonometry Quiz', type: 'QUIZ', topicSlug: 'trigonometric-functions-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Law of Sines & Cosines', type: 'LESSON', topicSlug: 'law-of-sines-cosines-precalc', dayOfWeek: 0 },
      { title: 'Full Precalculus Practice Test', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '8-week-precalculus-standard',
  title: '8-Week Precalculus Plan',
  description: 'A balanced plan covering function families, exponentials and logarithms, full trigonometry, analytic trig, and vectors, matrices and sequences, with regular quizzes and practice.',
  durationWeeks: 8, targetImprovement: '1–2 letter grades', weeklyHours: '5–7 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Precalculus Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review Results & Set Goals', type: 'CUSTOM', dayOfWeek: 1 },
      { title: 'Function Composition & Inverses', type: 'LESSON', topicSlug: 'function-composition-inverses-precalc', dayOfWeek: 3 },
      { title: 'Functions Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Function Transformations', type: 'LESSON', topicSlug: 'transformations-precalc', dayOfWeek: 0 },
      { title: 'Polynomial Functions & End Behavior', type: 'LESSON', topicSlug: 'polynomial-functions-precalc', dayOfWeek: 2 },
      { title: 'Rational Functions & Asymptotes', type: 'LESSON', topicSlug: 'rational-functions-precalc', dayOfWeek: 4 },
      { title: 'Functions Quiz', type: 'QUIZ', topicSlug: 'polynomial-functions-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Exponential Functions & Models', type: 'LESSON', topicSlug: 'exponential-functions-precalc', dayOfWeek: 0 },
      { title: 'Logarithmic Functions & Properties', type: 'LESSON', topicSlug: 'logarithmic-functions-precalc', dayOfWeek: 2 },
      { title: 'Exponential & Log Practice', type: 'PRACTICE', topicSlug: 'logarithmic-functions-precalc', dayOfWeek: 4 },
      { title: 'Exponential & Log Quiz', type: 'QUIZ', topicSlug: 'exponential-functions-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'The Unit Circle & Radian Measure', type: 'LESSON', topicSlug: 'the-unit-circle', dayOfWeek: 0 },
      { title: 'Graphing Trigonometric Functions', type: 'LESSON', topicSlug: 'trigonometric-functions-precalc', dayOfWeek: 2 },
      { title: 'Trigonometry Practice', type: 'PRACTICE', topicSlug: 'trigonometric-functions-precalc', dayOfWeek: 4 },
      { title: 'Trig Functions Quiz', type: 'QUIZ', topicSlug: 'trigonometric-functions-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Trigonometric Identities', type: 'LESSON', topicSlug: 'trigonometric-identities-precalc', dayOfWeek: 0 },
      { title: 'Inverse Trig Functions', type: 'LESSON', topicSlug: 'inverse-trig-functions-precalc', dayOfWeek: 2 },
      { title: 'Mid-Course Checkpoint Practice', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Law of Sines & Cosines', type: 'LESSON', topicSlug: 'law-of-sines-cosines-precalc', dayOfWeek: 0 },
      { title: 'Polar Coordinates', type: 'LESSON', topicSlug: 'polar-coordinates-precalc', dayOfWeek: 2 },
      { title: 'Parametric Equations', type: 'LESSON', topicSlug: 'parametric-equations-precalc', dayOfWeek: 4 },
      { title: 'Analytic Trig Quiz', type: 'QUIZ', topicSlug: 'law-of-sines-cosines-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Vectors in Two Dimensions', type: 'LESSON', topicSlug: 'vectors-two-dimensions-precalc', dayOfWeek: 0 },
      { title: 'Matrices & Systems', type: 'LESSON', topicSlug: 'matrices-precalc', dayOfWeek: 2 },
      { title: 'Sequences & Series', type: 'LESSON', topicSlug: 'sequences-series-precalc', dayOfWeek: 4 },
      { title: 'Vectors, Matrices & Sequences Quiz', type: 'QUIZ', topicSlug: 'sequences-series-precalc', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Conic Sections & Limits Preview', type: 'LESSON', topicSlug: 'conic-sections-precalc', dayOfWeek: 0 },
      { title: 'Full Precalculus Practice Test', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Test Strategy Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const PRECALCULUS_PLANS: StudyPlanTemplate[] = [sprint, standard]

export const config: StudyPlanSelectorConfig = {
  subject: 'Precalculus',
  description: 'Choose a pre-built study schedule for Precalculus covering function families, exponentials and logarithms, trigonometry, vectors, matrices, and sequences.',
  backLink: { href: '/precalc-diagnostic', label: 'Precalculus' },
  apiEndpoint: '/api/precalculus-study-plans',
  accent: 'violet',
  examLabel: 'Target Test Date',
  plans: PRECALCULUS_PLANS,
  diagnosticPrefix: 'precalculus-diagnostic',
}
