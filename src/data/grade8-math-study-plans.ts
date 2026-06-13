import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

// Resolvable interactive-lesson slugs for Grade 8 Math (verified via getInteractiveTopicConfig):
//   linear-functions-grade8, pythagorean-theorem-grade8, transformations-grade8

const sprint: StudyPlanTemplate = {
  id: '4-week-grade8-math-sprint',
  title: '4-Week Grade 8 Math Sprint',
  description: 'A fast review of the most-tested Grade 8 topics — linear functions, the Pythagorean theorem, and geometric transformations — for a focused refresh.',
  durationWeeks: 4, targetImprovement: '1 letter grade', weeklyHours: '3–5 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Grade 8 Math Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Linear Functions & Slope', type: 'LESSON', topicSlug: 'linear-functions-grade8', dayOfWeek: 1 },
      { title: 'Graphing Linear Functions', type: 'LESSON', topicSlug: 'linear-functions-grade8', dayOfWeek: 3 },
      { title: 'Linear Functions Quiz', type: 'QUIZ', topicSlug: 'linear-functions-grade8', dayOfWeek: 4 },
      { title: 'Functions Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'The Pythagorean Theorem', type: 'LESSON', topicSlug: 'pythagorean-theorem-grade8', dayOfWeek: 0 },
      { title: 'Applying the Pythagorean Theorem', type: 'LESSON', topicSlug: 'pythagorean-theorem-grade8', dayOfWeek: 2 },
      { title: 'Pythagorean Theorem Practice', type: 'PRACTICE', topicSlug: 'pythagorean-theorem-grade8', dayOfWeek: 4 },
      { title: 'Pythagorean Theorem Quiz', type: 'QUIZ', topicSlug: 'pythagorean-theorem-grade8', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Geometric Transformations', type: 'LESSON', topicSlug: 'transformations-grade8', dayOfWeek: 0 },
      { title: 'Congruence & Similarity via Transformations', type: 'LESSON', topicSlug: 'transformations-grade8', dayOfWeek: 2 },
      { title: 'Transformations Practice', type: 'PRACTICE', topicSlug: 'transformations-grade8', dayOfWeek: 4 },
      { title: 'Transformations Quiz', type: 'QUIZ', topicSlug: 'transformations-grade8', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Mixed Review Practice', type: 'PRACTICE', topicSlug: 'linear-functions-grade8', dayOfWeek: 0 },
      { title: 'Full Grade 8 Math Practice Test', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '8-week-grade8-math-standard',
  title: '8-Week Grade 8 Math Plan',
  description: 'A balanced plan across the Grade 8 strands — the number system, expressions and equations, functions, geometry, and statistics — with regular quizzes and a full practice test.',
  durationWeeks: 8, targetImprovement: '1–2 letter grades', weeklyHours: '4–6 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Grade 8 Math Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review Results & Set Goals', type: 'CUSTOM', dayOfWeek: 1 },
      { title: 'Rational & Irrational Numbers', type: 'LESSON', topicSlug: 'linear-functions-grade8', dayOfWeek: 3 },
      { title: 'Number System Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Integer Exponents & Scientific Notation', type: 'LESSON', topicSlug: 'linear-functions-grade8', dayOfWeek: 0 },
      { title: 'Solving Linear Equations', type: 'LESSON', topicSlug: 'linear-functions-grade8', dayOfWeek: 2 },
      { title: 'Expressions & Equations Practice', type: 'PRACTICE', topicSlug: 'linear-functions-grade8', dayOfWeek: 4 },
      { title: 'Expressions & Equations Quiz', type: 'QUIZ', topicSlug: 'linear-functions-grade8', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Understanding Functions', type: 'LESSON', topicSlug: 'linear-functions-grade8', dayOfWeek: 0 },
      { title: 'Slope & Linear Functions', type: 'LESSON', topicSlug: 'linear-functions-grade8', dayOfWeek: 2 },
      { title: 'Comparing Functions', type: 'LESSON', topicSlug: 'linear-functions-grade8', dayOfWeek: 4 },
      { title: 'Functions Quiz', type: 'QUIZ', topicSlug: 'linear-functions-grade8', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Translations & Reflections', type: 'LESSON', topicSlug: 'transformations-grade8', dayOfWeek: 0 },
      { title: 'Rotations & Dilations', type: 'LESSON', topicSlug: 'transformations-grade8', dayOfWeek: 2 },
      { title: 'Transformations Practice', type: 'PRACTICE', topicSlug: 'transformations-grade8', dayOfWeek: 4 },
      { title: 'Transformations Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Congruence & Similarity', type: 'LESSON', topicSlug: 'transformations-grade8', dayOfWeek: 0 },
      { title: 'Angle Relationships', type: 'LESSON', topicSlug: 'transformations-grade8', dayOfWeek: 2 },
      { title: 'Mid-Course Checkpoint Practice', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'The Pythagorean Theorem', type: 'LESSON', topicSlug: 'pythagorean-theorem-grade8', dayOfWeek: 0 },
      { title: 'Distance on the Coordinate Plane', type: 'LESSON', topicSlug: 'pythagorean-theorem-grade8', dayOfWeek: 2 },
      { title: 'Volume of Cylinders, Cones & Spheres', type: 'LESSON', topicSlug: 'pythagorean-theorem-grade8', dayOfWeek: 4 },
      { title: 'Geometry Quiz', type: 'QUIZ', topicSlug: 'pythagorean-theorem-grade8', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Scatter Plots & Trend Lines', type: 'LESSON', topicSlug: 'linear-functions-grade8', dayOfWeek: 0 },
      { title: 'Two-Way Tables & Bivariate Data', type: 'LESSON', topicSlug: 'linear-functions-grade8', dayOfWeek: 2 },
      { title: 'Statistics Practice', type: 'PRACTICE', topicSlug: 'linear-functions-grade8', dayOfWeek: 4 },
      { title: 'Cumulative Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Full Grade 8 Math Practice Test', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Missed Problems', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Test Strategy Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const GRADE8_MATH_PLANS: StudyPlanTemplate[] = [sprint, standard]

export const config: StudyPlanSelectorConfig = {
  subject: 'Grade 8 Math',
  description: 'Choose a pre-built study schedule for Grade 8 Math covering the number system, functions, the Pythagorean theorem, transformations, and statistics.',
  backLink: { href: '/grade-8-math', label: 'Grade 8 Math' },
  apiEndpoint: '/api/grade8-math-study-plans',
  accent: 'amber',
  examLabel: 'Target Test Date',
  plans: GRADE8_MATH_PLANS,
  diagnosticPrefix: 'grade8-math-diagnostic',
}
