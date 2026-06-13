import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

// Resolvable interactive-lesson slugs for Algebra 1 (verified via getInteractiveTopicConfig):
//   solving-linear-equations-algebra1, graphing-linear-functions-algebra1,
//   systems-of-equations-algebra1, inequalities-algebra1, factoring-algebra1

const sprint: StudyPlanTemplate = {
  id: '4-week-algebra1-sprint',
  title: '4-Week Algebra 1 Sprint',
  description: 'A fast review of the Algebra 1 essentials — solving equations, graphing lines, systems, inequalities, and factoring — for students who need a focused refresh before a test.',
  durationWeeks: 4, targetImprovement: '1 letter grade', weeklyHours: '4–6 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Algebra 1 Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Solving Linear Equations', type: 'LESSON', topicSlug: 'solving-linear-equations-algebra1', dayOfWeek: 1 },
      { title: 'Multi-Step & Variables on Both Sides', type: 'LESSON', topicSlug: 'solving-linear-equations-algebra1', dayOfWeek: 3 },
      { title: 'Equations Quiz', type: 'QUIZ', topicSlug: 'solving-linear-equations-algebra1', dayOfWeek: 4 },
      { title: 'Equations & Expressions Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Graphing Linear Functions', type: 'LESSON', topicSlug: 'graphing-linear-functions-algebra1', dayOfWeek: 0 },
      { title: 'Slope & Slope-Intercept Form', type: 'LESSON', topicSlug: 'graphing-linear-functions-algebra1', dayOfWeek: 2 },
      { title: 'Graphing Practice', type: 'PRACTICE', topicSlug: 'graphing-linear-functions-algebra1', dayOfWeek: 4 },
      { title: 'Graphing Quiz', type: 'QUIZ', topicSlug: 'graphing-linear-functions-algebra1', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Systems of Equations', type: 'LESSON', topicSlug: 'systems-of-equations-algebra1', dayOfWeek: 0 },
      { title: 'Inequalities', type: 'LESSON', topicSlug: 'inequalities-algebra1', dayOfWeek: 2 },
      { title: 'Systems & Inequalities Practice', type: 'PRACTICE', topicSlug: 'systems-of-equations-algebra1', dayOfWeek: 4 },
      { title: 'Inequalities Quiz', type: 'QUIZ', topicSlug: 'inequalities-algebra1', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Factoring', type: 'LESSON', topicSlug: 'factoring-algebra1', dayOfWeek: 0 },
      { title: 'Factoring Quiz', type: 'QUIZ', topicSlug: 'factoring-algebra1', dayOfWeek: 2 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '8-week-algebra1-standard',
  title: '8-Week Algebra 1 Plan',
  description: 'A balanced plan that builds Algebra 1 mastery one topic at a time — linear equations, graphing and functions, systems, inequalities, polynomials, and factoring — with regular quizzes and practice.',
  durationWeeks: 8, targetImprovement: '1–2 letter grades', weeklyHours: '5–7 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Algebra 1 Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review Results & Set Goals', type: 'CUSTOM', dayOfWeek: 1 },
      { title: 'Solving One- & Two-Step Equations', type: 'LESSON', topicSlug: 'solving-linear-equations-algebra1', dayOfWeek: 3 },
      { title: 'Equations Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Multi-Step Equations', type: 'LESSON', topicSlug: 'solving-linear-equations-algebra1', dayOfWeek: 0 },
      { title: 'Variables on Both Sides & Special Cases', type: 'LESSON', topicSlug: 'solving-linear-equations-algebra1', dayOfWeek: 2 },
      { title: 'Equations Practice', type: 'PRACTICE', topicSlug: 'solving-linear-equations-algebra1', dayOfWeek: 4 },
      { title: 'Equations Quiz', type: 'QUIZ', topicSlug: 'solving-linear-equations-algebra1', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Graphing Lines & Slope', type: 'LESSON', topicSlug: 'graphing-linear-functions-algebra1', dayOfWeek: 0 },
      { title: 'Slope-Intercept & Point-Slope Form', type: 'LESSON', topicSlug: 'graphing-linear-functions-algebra1', dayOfWeek: 2 },
      { title: 'Writing Linear Equations', type: 'LESSON', topicSlug: 'graphing-linear-functions-algebra1', dayOfWeek: 4 },
      { title: 'Graphing Quiz', type: 'QUIZ', topicSlug: 'graphing-linear-functions-algebra1', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Solving Systems by Substitution', type: 'LESSON', topicSlug: 'systems-of-equations-algebra1', dayOfWeek: 0 },
      { title: 'Solving Systems by Elimination', type: 'LESSON', topicSlug: 'systems-of-equations-algebra1', dayOfWeek: 2 },
      { title: 'Systems Word Problems', type: 'LESSON', topicSlug: 'systems-of-equations-algebra1', dayOfWeek: 4 },
      { title: 'Systems Quiz', type: 'QUIZ', topicSlug: 'systems-of-equations-algebra1', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Linear & Compound Inequalities', type: 'LESSON', topicSlug: 'inequalities-algebra1', dayOfWeek: 0 },
      { title: 'Absolute Value Inequalities', type: 'LESSON', topicSlug: 'inequalities-algebra1', dayOfWeek: 2 },
      { title: 'Mid-Course Checkpoint Practice', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Exponent Rules & Polynomials', type: 'LESSON', topicSlug: 'factoring-algebra1', dayOfWeek: 0 },
      { title: 'Multiplying Polynomials', type: 'LESSON', topicSlug: 'factoring-algebra1', dayOfWeek: 2 },
      { title: 'Polynomials Practice', type: 'PRACTICE', topicSlug: 'factoring-algebra1', dayOfWeek: 4 },
      { title: 'Polynomials Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Factoring by GCF & Grouping', type: 'LESSON', topicSlug: 'factoring-algebra1', dayOfWeek: 0 },
      { title: 'Factoring Trinomials & Special Products', type: 'LESSON', topicSlug: 'factoring-algebra1', dayOfWeek: 2 },
      { title: 'Factoring Practice', type: 'PRACTICE', topicSlug: 'factoring-algebra1', dayOfWeek: 4 },
      { title: 'Factoring Quiz', type: 'QUIZ', topicSlug: 'factoring-algebra1', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Full Algebra 1 Practice Test', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Missed Problems', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Test Strategy Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const ALGEBRA1_PLANS: StudyPlanTemplate[] = [sprint, standard]

export const config: StudyPlanSelectorConfig = {
  subject: 'Algebra 1',
  description: 'Choose a pre-built study schedule for Algebra 1 covering equations, linear functions, systems, inequalities, and factoring.',
  backLink: { href: '/algebra-1', label: 'Algebra 1' },
  apiEndpoint: '/api/algebra1-study-plans',
  accent: 'blue',
  examLabel: 'Target Test Date',
  plans: ALGEBRA1_PLANS,
  diagnosticPrefix: 'algebra1-diagnostic',
}
