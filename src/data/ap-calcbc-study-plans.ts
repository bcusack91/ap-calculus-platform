import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

/* ── 4-Week Sprint ── */
const sprint: StudyPlanTemplate = {
  id: '4-week-calcbc-sprint',
  title: '4-Week AP Calc BC Sprint',
  description: 'Fast-paced BC review for students who already know AB Calculus. Focuses on BC-exclusive topics: integration techniques, series, parametric/polar, and BC exam strategy.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Calc BC Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Integration by Parts', type: 'LESSON', topicSlug: 'integration-by-parts-calcbc', dayOfWeek: 1 },
      { title: 'Partial Fractions & Improper Integrals', type: 'LESSON', topicSlug: 'partial-fractions-calcbc', dayOfWeek: 3 },
      { title: 'Advanced Integration Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Parametric Curves & Calculus', type: 'LESSON', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 0 },
      { title: 'Polar Calculus', type: 'LESSON', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 2 },
      { title: 'Vector-Valued Functions', type: 'LESSON', topicSlug: 'vector-valued-functions-calcbc', dayOfWeek: 4 },
      { title: 'Parametric & Polar Quiz', type: 'QUIZ', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Infinite Sequences & Series Intro', type: 'LESSON', topicSlug: 'infinite-sequences-calcbc', dayOfWeek: 0 },
      { title: 'Convergence Tests Overview', type: 'LESSON', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 2 },
      { title: 'Power Series & Taylor Series', type: 'LESSON', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 4 },
      { title: 'Series Quiz', type: 'QUIZ', topicSlug: 'infinite-series-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Lagrange Error Bound & Euler\'s Method', type: 'LESSON', topicSlug: 'lagrange-error-bound-calcbc', dayOfWeek: 0 },
      { title: 'Full AP Calc BC Practice Exam', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'BC Exam Strategy Review', type: 'LESSON', topicSlug: 'bc-exam-strategies-calcbc', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

/* ── 10-Week Standard ── */
const standard: StudyPlanTemplate = {
  id: '10-week-calcbc-standard',
  title: '10-Week AP Calc BC Plan',
  description: 'Systematic coverage of all BC topics: advanced integration, parametric and polar calculus, infinite series, and differential equations — with lessons, quizzes, and timed practice.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Calc BC Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Integration by Parts', type: 'LESSON', topicSlug: 'integration-by-parts-calcbc', dayOfWeek: 1 },
      { title: 'Integration by Parts Practice', type: 'PRACTICE', topicSlug: 'integration-by-parts-calcbc', dayOfWeek: 3 },
      { title: 'Advanced Integration Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Partial Fractions Decomposition', type: 'LESSON', topicSlug: 'partial-fractions-calcbc', dayOfWeek: 0 },
      { title: 'Improper Integrals', type: 'LESSON', topicSlug: 'improper-integrals-calcbc', dayOfWeek: 2 },
      { title: 'Advanced Integration Techniques', type: 'LESSON', topicSlug: 'advanced-integration-calcbc', dayOfWeek: 4 },
      { title: 'Integration Techniques Quiz', type: 'QUIZ', topicSlug: 'partial-fractions-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Parametric Equations & Calculus', type: 'LESSON', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 0 },
      { title: 'Polar Coordinates & Calculus', type: 'LESSON', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 2 },
      { title: 'Vector-Valued Functions', type: 'LESSON', topicSlug: 'vector-valued-functions-calcbc', dayOfWeek: 4 },
      { title: 'Parametric & Polar Quiz', type: 'QUIZ', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Arc Length & Surface Area', type: 'LESSON', topicSlug: 'arc-length-surface-area-calcbc', dayOfWeek: 0 },
      { title: 'Arc Length Practice', type: 'PRACTICE', topicSlug: 'arc-length-surface-area-calcbc', dayOfWeek: 2 },
      { title: 'Mid-Course Review Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Parametric/Polar/Vector Quiz', type: 'QUIZ', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Infinite Sequences', type: 'LESSON', topicSlug: 'infinite-sequences-calcbc', dayOfWeek: 0 },
      { title: 'Infinite Series & Convergence', type: 'LESSON', topicSlug: 'infinite-series-calcbc', dayOfWeek: 2 },
      { title: 'Sequences & Series Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Sequences & Series Quiz', type: 'QUIZ', topicSlug: 'infinite-sequences-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Convergence Tests (p-series, Comparison)', type: 'LESSON', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 0 },
      { title: 'Alternating Series Test & Error', type: 'LESSON', topicSlug: 'alternating-series-calcbc', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam (MC)', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Power Series & Radius of Convergence', type: 'LESSON', topicSlug: 'power-series-calcbc', dayOfWeek: 0 },
      { title: 'Taylor & Maclaurin Series', type: 'LESSON', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 2 },
      { title: 'Lagrange Error Bound', type: 'LESSON', topicSlug: 'lagrange-error-bound-calcbc', dayOfWeek: 4 },
      { title: 'Power & Taylor Series Quiz', type: 'QUIZ', topicSlug: 'power-series-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Series Applications', type: 'LESSON', topicSlug: 'series-applications-calcbc', dayOfWeek: 0 },
      { title: 'Taylor Series Practice', type: 'PRACTICE', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 2 },
      { title: 'Series Comprehensive Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Convergence Tests Quiz', type: 'QUIZ', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Euler\'s Method (Advanced)', type: 'LESSON', topicSlug: 'euler-method-advanced-calcbc', dayOfWeek: 0 },
      { title: 'Logistic Growth Models', type: 'LESSON', topicSlug: 'logistic-models-calcbc', dayOfWeek: 2 },
      { title: 'Review & Connections Across Topics', type: 'LESSON', topicSlug: 'review-connections-calcbc', dayOfWeek: 4 },
      { title: 'Differential Equations Quiz', type: 'QUIZ', topicSlug: 'euler-method-advanced-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Full AP Calc BC Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Practice Exam Results', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'BC Exam Strategies', type: 'LESSON', topicSlug: 'bc-exam-strategies-calcbc', dayOfWeek: 4 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

/* ── 18-Week Comprehensive ── */
const comprehensive: StudyPlanTemplate = {
  id: '18-week-calcbc-comprehensive',
  title: '18-Week AP Calc BC Mastery',
  description: 'In-depth coverage of all AP Calculus BC topics — from advanced integration to infinite series and differential equations — with multiple practice exams and FRQ preparation. Ideal for students aiming for a 5.',
  durationWeeks: 18, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Calc BC Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'AB Calculus Rapid Review: Derivatives', type: 'LESSON', dayOfWeek: 2 },
      { title: 'AB Calculus Rapid Review: Integrals', type: 'LESSON', dayOfWeek: 4 },
      { title: 'Goal Setting & Study Plan Orientation', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Integration by Parts: Derivation & Formula', type: 'LESSON', topicSlug: 'integration-by-parts-calcbc', dayOfWeek: 0 },
      { title: 'Integration by Parts: Repeated & Tabular', type: 'LESSON', topicSlug: 'integration-by-parts-calcbc', dayOfWeek: 2 },
      { title: 'Integration by Parts Practice', type: 'PRACTICE', topicSlug: 'integration-by-parts-calcbc', dayOfWeek: 4 },
      { title: 'IBP Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Partial Fractions: Setup & Decomposition', type: 'LESSON', topicSlug: 'partial-fractions-calcbc', dayOfWeek: 0 },
      { title: 'Partial Fractions Practice', type: 'PRACTICE', topicSlug: 'partial-fractions-calcbc', dayOfWeek: 2 },
      { title: 'Improper Integrals: Type 1 & Type 2', type: 'LESSON', topicSlug: 'improper-integrals-calcbc', dayOfWeek: 4 },
      { title: 'Improper Integrals Quiz', type: 'QUIZ', topicSlug: 'improper-integrals-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Advanced Integration Techniques Overview', type: 'LESSON', topicSlug: 'advanced-integration-calcbc', dayOfWeek: 0 },
      { title: 'Trig Substitution & Trig Integrals', type: 'PRACTICE', topicSlug: 'advanced-integration-calcbc', dayOfWeek: 2 },
      { title: 'Integration Techniques Quiz', type: 'QUIZ', topicSlug: 'advanced-integration-calcbc', dayOfWeek: 4 },
      { title: 'Advanced Integration Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Parametric Equations: Derivatives', type: 'LESSON', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 0 },
      { title: 'Parametric Equations: Area & Arc Length', type: 'LESSON', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 2 },
      { title: 'Parametric Practice Problems', type: 'PRACTICE', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 4 },
      { title: 'Parametric Quiz', type: 'QUIZ', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Polar Coordinates: Graphing & Area', type: 'LESSON', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 0 },
      { title: 'Polar Arc Length & Slopes', type: 'LESSON', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 2 },
      { title: 'Polar Practice Problems', type: 'PRACTICE', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 4 },
      { title: 'Polar Quiz', type: 'QUIZ', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Vector-Valued Functions: Position & Velocity', type: 'LESSON', topicSlug: 'vector-valued-functions-calcbc', dayOfWeek: 0 },
      { title: 'Vector-Valued Functions: Acceleration & Speed', type: 'LESSON', topicSlug: 'vector-valued-functions-calcbc', dayOfWeek: 2 },
      { title: 'Arc Length & Surface Area', type: 'LESSON', topicSlug: 'arc-length-surface-area-calcbc', dayOfWeek: 4 },
      { title: 'Vector Functions & Arc Length Quiz', type: 'QUIZ', topicSlug: 'vector-valued-functions-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Practice Exam Results', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Parametric/Polar/Vector Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'FRQ Practice: Integration', type: 'PRACTICE', topicSlug: 'advanced-integration-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Infinite Sequences: Limits & Convergence', type: 'LESSON', topicSlug: 'infinite-sequences-calcbc', dayOfWeek: 0 },
      { title: 'Infinite Sequences: Monotone & Bounded', type: 'LESSON', topicSlug: 'infinite-sequences-calcbc', dayOfWeek: 2 },
      { title: 'Infinite Series: Partial Sums', type: 'LESSON', topicSlug: 'infinite-series-calcbc', dayOfWeek: 4 },
      { title: 'Sequences Quiz', type: 'QUIZ', topicSlug: 'infinite-sequences-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Geometric Series & Telescoping Series', type: 'LESSON', topicSlug: 'infinite-series-calcbc', dayOfWeek: 0 },
      { title: 'Divergence Test & Integral Test', type: 'LESSON', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 2 },
      { title: 'Comparison & Limit Comparison Tests', type: 'LESSON', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 4 },
      { title: 'Convergence Tests Quiz', type: 'QUIZ', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(10, [
      { title: 'Ratio Test & Root Test', type: 'LESSON', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 0 },
      { title: 'Alternating Series Test & Estimation', type: 'LESSON', topicSlug: 'alternating-series-calcbc', dayOfWeek: 2 },
      { title: 'Alternating Series Practice', type: 'PRACTICE', topicSlug: 'alternating-series-calcbc', dayOfWeek: 4 },
      { title: 'All Convergence Tests Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(11, [
      { title: 'Power Series: Definition & Radius of Convergence', type: 'LESSON', topicSlug: 'power-series-calcbc', dayOfWeek: 0 },
      { title: 'Interval of Convergence', type: 'LESSON', topicSlug: 'power-series-calcbc', dayOfWeek: 2 },
      { title: 'Power Series Differentiation & Integration', type: 'LESSON', topicSlug: 'power-series-calcbc', dayOfWeek: 4 },
      { title: 'Power Series Quiz', type: 'QUIZ', topicSlug: 'power-series-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(12, [
      { title: 'Taylor Series Construction', type: 'LESSON', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 0 },
      { title: 'Maclaurin Series (sin, cos, e^x, ln)', type: 'LESSON', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 2 },
      { title: 'Lagrange Error Bound', type: 'LESSON', topicSlug: 'lagrange-error-bound-calcbc', dayOfWeek: 4 },
      { title: 'Taylor & Maclaurin Series Quiz', type: 'QUIZ', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(13, [
      { title: 'Series Applications: Limits & Integrals', type: 'LESSON', topicSlug: 'series-applications-calcbc', dayOfWeek: 0 },
      { title: 'Series Applications Practice', type: 'PRACTICE', topicSlug: 'series-applications-calcbc', dayOfWeek: 2 },
      { title: 'Full Practice Exam #2', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Practice Exam #2', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(14, [
      { title: 'Euler\'s Method for Differential Equations', type: 'LESSON', topicSlug: 'euler-method-advanced-calcbc', dayOfWeek: 0 },
      { title: 'Euler\'s Method Practice', type: 'PRACTICE', topicSlug: 'euler-method-advanced-calcbc', dayOfWeek: 2 },
      { title: 'Logistic Growth & Differential Equations', type: 'LESSON', topicSlug: 'logistic-models-calcbc', dayOfWeek: 4 },
      { title: 'Euler & Logistic Models Quiz', type: 'QUIZ', topicSlug: 'euler-method-advanced-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(15, [
      { title: 'Connections: Integration & Series', type: 'LESSON', topicSlug: 'review-connections-calcbc', dayOfWeek: 0 },
      { title: 'FRQ Practice: Series', type: 'PRACTICE', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 2 },
      { title: 'FRQ Practice: Parametric & Polar', type: 'PRACTICE', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 4 },
      { title: 'Comprehensive Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(16, [
      { title: 'BC Exam Strategies & Tips', type: 'LESSON', topicSlug: 'bc-exam-strategies-calcbc', dayOfWeek: 0 },
      { title: 'Full Practice Exam #3', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Practice Exam #3', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Target Weak Topics Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(17, [
      { title: 'Full Practice Exam #4', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Final Topic Review', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Exam Day Preparation', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const AP_CALCBC_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Calculus BC',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan covers BC-exclusive topics like series, parametric/polar calculus, and advanced integration — automatically scheduled for you.',
  backLink: { href: '/ap-calculus-bc', label: 'AP Calculus BC' },
  apiEndpoint: '/api/ap-calcbc-study-plans',
  accent: 'blue',
  examLabel: 'AP Exam Date',
  plans: AP_CALCBC_PLANS,
}
