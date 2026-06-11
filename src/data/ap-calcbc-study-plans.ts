import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

/* ── 4-Week Sprint ── */
const sprint: StudyPlanTemplate = {
  id: '4-week-calcbc-sprint',
  title: '4-Week AP Calc BC Sprint',
  description: 'Fast-paced review of all BC topics — AB foundations plus series, parametric/polar, and advanced integration. Best for students with solid AB skills.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Calc BC Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review Limits, Derivatives & Integration (AB Foundations)', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 1 },
      { title: 'Integration by Parts', type: 'LESSON', topicSlug: 'integration-by-parts-calcbc', dayOfWeek: 3 },
      { title: 'Advanced Integration Techniques Practice', type: 'PRACTICE', topicSlug: 'advanced-integration-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Parametric Curves & Calculus', type: 'LESSON', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 0 },
      { title: 'Polar Curves & Calculus', type: 'LESSON', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 1 },
      { title: 'Vector-Valued Functions', type: 'LESSON', topicSlug: 'vector-valued-functions-calcbc', dayOfWeek: 3 },
      { title: 'Parametric/Polar Practice', type: 'PRACTICE', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Sequences & Infinite Series Intro', type: 'LESSON', topicSlug: 'infinite-sequences-calcbc', dayOfWeek: 0 },
      { title: 'Convergence Tests', type: 'LESSON', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 1 },
      { title: 'Power Series & Taylor/Maclaurin Series', type: 'LESSON', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 3 },
      { title: 'Series Quiz', type: 'QUIZ', topicSlug: 'infinite-series-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Lagrange Error Bound & Series Applications', type: 'LESSON', topicSlug: 'lagrange-error-bound-calcbc', dayOfWeek: 0 },
      { title: 'Full AP Calc BC Practice Exam', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

/* ── 10-Week Standard ── */
const standard: StudyPlanTemplate = {
  id: '10-week-calcbc-standard',
  title: '10-Week AP Calc BC Plan',
  description: 'Balanced schedule covering every major BC topic — AB review, advanced integration, parametric/polar, and series — with lessons, quizzes, and practice exams.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Calc BC Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Limits & Continuity Review', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 1 },
      { title: 'Differentiation Rules Review', type: 'LESSON', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 3 },
      { title: 'AB Foundation Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'FTC & U-Substitution Review', type: 'LESSON', topicSlug: 'fundamental-theorem-calculus-calcab', dayOfWeek: 0 },
      { title: 'Integration by Parts', type: 'LESSON', topicSlug: 'integration-by-parts-calcbc', dayOfWeek: 2 },
      { title: 'Partial Fractions', type: 'LESSON', topicSlug: 'partial-fractions-calcbc', dayOfWeek: 4 },
      { title: 'Advanced Integration Quiz', type: 'QUIZ', topicSlug: 'integration-by-parts-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Improper Integrals', type: 'LESSON', topicSlug: 'improper-integrals-calcbc', dayOfWeek: 0 },
      { title: 'Euler\'s Method', type: 'LESSON', topicSlug: 'euler-method-advanced-calcbc', dayOfWeek: 2 },
      { title: 'Logistic Growth Models', type: 'LESSON', topicSlug: 'logistic-models-calcbc', dayOfWeek: 4 },
      { title: 'Integration Techniques Practice', type: 'PRACTICE', topicSlug: 'advanced-integration-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Parametric Equations & Curves', type: 'LESSON', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 0 },
      { title: 'Arc Length (Parametric & Polar)', type: 'LESSON', topicSlug: 'arc-length-surface-area-calcbc', dayOfWeek: 2 },
      { title: 'Polar Curves & Area', type: 'LESSON', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 4 },
      { title: 'Parametric/Polar Quiz', type: 'QUIZ', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Vector-Valued Functions', type: 'LESSON', topicSlug: 'vector-valued-functions-calcbc', dayOfWeek: 0 },
      { title: 'Vector Motion & Arc Length', type: 'PRACTICE', topicSlug: 'vector-valued-functions-calcbc', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam (MC only)', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Sequences & Limits of Sequences', type: 'LESSON', topicSlug: 'infinite-sequences-calcbc', dayOfWeek: 0 },
      { title: 'Infinite Series & Partial Sums', type: 'LESSON', topicSlug: 'infinite-series-calcbc', dayOfWeek: 2 },
      { title: 'Geometric & p-Series', type: 'LESSON', topicSlug: 'infinite-series-calcbc', dayOfWeek: 4 },
      { title: 'Sequences & Series Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Integral & Comparison Tests', type: 'LESSON', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 0 },
      { title: 'Ratio & Root Tests', type: 'LESSON', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 2 },
      { title: 'Alternating Series Test & Error', type: 'LESSON', topicSlug: 'alternating-series-calcbc', dayOfWeek: 4 },
      { title: 'Convergence Tests Quiz', type: 'QUIZ', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Power Series & Radius of Convergence', type: 'LESSON', topicSlug: 'power-series-calcbc', dayOfWeek: 0 },
      { title: 'Taylor & Maclaurin Series', type: 'LESSON', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 2 },
      { title: 'Lagrange Error Bound', type: 'LESSON', topicSlug: 'lagrange-error-bound-calcbc', dayOfWeek: 4 },
      { title: 'Power & Taylor Series Quiz', type: 'QUIZ', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Series Applications', type: 'LESSON', topicSlug: 'series-applications-calcbc', dayOfWeek: 0 },
      { title: 'Series Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 2 },
      { title: 'Full AP Calc BC Practice Exam', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Practice Exam Results', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'FRQ Practice: Integration & Series', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'FRQ Practice: Parametric/Polar & Vectors', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Final Comprehensive Flashcard Review', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Exam Strategy & Final Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

/* ── 18-Week Comprehensive ── */
const comprehensive: StudyPlanTemplate = {
  id: '18-week-calcbc-comprehensive',
  title: '18-Week AP Calc BC Mastery Plan',
  description: 'Complete deep-dive into all BC topics with thorough AB review, multiple practice exams, and targeted FRQ preparation. Ideal for students aiming for a 5.',
  durationWeeks: 18, targetImprovement: '2+ AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Calc BC Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Limits: Graphical & Numerical', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 1 },
      { title: 'Limits: Algebraic Techniques', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 3 },
      { title: 'Limits Quiz', type: 'QUIZ', topicSlug: 'limits-continuity-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Continuity & IVT', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 0 },
      { title: 'Derivative Definition & Basic Rules', type: 'LESSON', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 2 },
      { title: 'Chain Rule & Implicit Differentiation', type: 'LESSON', topicSlug: 'chain-rule-calcab', dayOfWeek: 4 },
      { title: 'Differentiation Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Applications of Derivatives (MVT, Extrema)', type: 'LESSON', topicSlug: 'applications-of-derivatives-calcab', dayOfWeek: 0 },
      { title: 'Curve Sketching & Optimization', type: 'LESSON', topicSlug: 'optimization-calcab', dayOfWeek: 2 },
      { title: 'Related Rates', type: 'LESSON', topicSlug: 'related-rates-calcab', dayOfWeek: 4 },
      { title: 'Derivatives Comprehensive Quiz', type: 'QUIZ', topicSlug: 'applications-of-derivatives-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Antiderivatives & Indefinite Integrals', type: 'LESSON', topicSlug: 'antiderivatives-calcab', dayOfWeek: 0 },
      { title: 'Definite Integrals & Riemann Sums', type: 'LESSON', topicSlug: 'definite-integrals-calcab', dayOfWeek: 2 },
      { title: 'Fundamental Theorem of Calculus', type: 'LESSON', topicSlug: 'fundamental-theorem-calculus-calcab', dayOfWeek: 4 },
      { title: 'FTC & Integration Quiz', type: 'QUIZ', topicSlug: 'fundamental-theorem-calculus-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'U-Substitution', type: 'LESSON', topicSlug: 'u-substitution-calcab', dayOfWeek: 0 },
      { title: 'Area Between Curves', type: 'LESSON', topicSlug: 'area-between-curves-calcab', dayOfWeek: 2 },
      { title: 'Volumes of Revolution (Disk/Washer)', type: 'LESSON', topicSlug: 'volumes-of-revolution-calcab', dayOfWeek: 4 },
      { title: 'AB Review Practice Exam (MC only)', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Differential Equations & Slope Fields', type: 'LESSON', topicSlug: 'differential-equations-calcab', dayOfWeek: 0 },
      { title: 'Separation of Variables', type: 'LESSON', topicSlug: 'differential-equations-calcab', dayOfWeek: 2 },
      { title: 'Integration by Parts', type: 'LESSON', topicSlug: 'integration-by-parts-calcbc', dayOfWeek: 4 },
      { title: 'Integration by Parts Practice', type: 'PRACTICE', topicSlug: 'integration-by-parts-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Partial Fractions', type: 'LESSON', topicSlug: 'partial-fractions-calcbc', dayOfWeek: 0 },
      { title: 'Improper Integrals', type: 'LESSON', topicSlug: 'improper-integrals-calcbc', dayOfWeek: 2 },
      { title: 'Advanced Integration Techniques', type: 'LESSON', topicSlug: 'advanced-integration-calcbc', dayOfWeek: 4 },
      { title: 'Advanced Integration Quiz', type: 'QUIZ', topicSlug: 'integration-by-parts-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Euler\'s Method', type: 'LESSON', topicSlug: 'euler-method-advanced-calcbc', dayOfWeek: 0 },
      { title: 'Logistic Growth Models', type: 'LESSON', topicSlug: 'logistic-models-calcbc', dayOfWeek: 2 },
      { title: 'Advanced Integration Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Review Mid-Course Exam Results', type: 'CUSTOM', dayOfWeek: 0 },
      { title: 'Parametric Equations & Derivatives', type: 'LESSON', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 2 },
      { title: 'Parametric Arc Length & Area', type: 'LESSON', topicSlug: 'arc-length-surface-area-calcbc', dayOfWeek: 4 },
      { title: 'Parametric Quiz', type: 'QUIZ', topicSlug: 'parametric-curves-calculus-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Polar Coordinates & Graphs', type: 'LESSON', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 0 },
      { title: 'Polar Area & Arc Length', type: 'LESSON', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 2 },
      { title: 'Vector-Valued Functions', type: 'LESSON', topicSlug: 'vector-valued-functions-calcbc', dayOfWeek: 4 },
      { title: 'Parametric/Polar/Vector Practice', type: 'PRACTICE', topicSlug: 'polar-calculus-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(10, [
      { title: 'Sequences & Limits of Sequences', type: 'LESSON', topicSlug: 'infinite-sequences-calcbc', dayOfWeek: 0 },
      { title: 'Series & Partial Sums', type: 'LESSON', topicSlug: 'infinite-series-calcbc', dayOfWeek: 2 },
      { title: 'Geometric Series & p-Series', type: 'LESSON', topicSlug: 'infinite-series-calcbc', dayOfWeek: 4 },
      { title: 'Sequences & Series Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(11, [
      { title: 'Integral Test & Comparison Tests', type: 'LESSON', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 0 },
      { title: 'Limit Comparison Test', type: 'LESSON', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 2 },
      { title: 'Ratio & Root Tests', type: 'LESSON', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 4 },
      { title: 'Convergence Tests Quiz', type: 'QUIZ', topicSlug: 'convergence-tests-summary-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(12, [
      { title: 'Alternating Series & Error Bound', type: 'LESSON', topicSlug: 'alternating-series-calcbc', dayOfWeek: 0 },
      { title: 'Power Series & Radius of Convergence', type: 'LESSON', topicSlug: 'power-series-calcbc', dayOfWeek: 2 },
      { title: 'Interval of Convergence', type: 'PRACTICE', topicSlug: 'power-series-calcbc', dayOfWeek: 4 },
      { title: 'Series Comprehensive Quiz', type: 'QUIZ', topicSlug: 'infinite-series-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(13, [
      { title: 'Taylor Series', type: 'LESSON', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 0 },
      { title: 'Maclaurin Series', type: 'LESSON', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 2 },
      { title: 'Lagrange Error Bound', type: 'LESSON', topicSlug: 'lagrange-error-bound-calcbc', dayOfWeek: 4 },
      { title: 'Taylor & Maclaurin Quiz', type: 'QUIZ', topicSlug: 'taylor-maclaurin-series-calcbc', dayOfWeek: 5 },
    ]),
    ...weekTasks(14, [
      { title: 'Series Applications', type: 'LESSON', topicSlug: 'series-applications-calcbc', dayOfWeek: 0 },
      { title: 'Full AP Calc BC Practice Exam #2', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Practice Exam #2', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Series Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(15, [
      { title: 'FRQ Practice: Integration Techniques', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'FRQ Practice: Series & Convergence', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'FRQ Practice: Parametric & Polar', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Comprehensive Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(16, [
      { title: 'Full AP Calc BC Practice Exam #3', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Practice Exam #3 & Target Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'FRQ Practice: Differential Equations', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Final Flashcard Drill', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(17, [
      { title: 'Light Review: AB Foundations', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 0 },
      { title: 'Light Review: BC Techniques & Series', type: 'FLASHCARD', dayOfWeek: 2 },
      { title: 'Exam Strategy & Tips', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Rest & Final Confidence Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const AP_CALCBC_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Calculus BC',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-calculus-bc', label: 'AP Calculus BC' },
  apiEndpoint: '/api/ap-calcbc-study-plans',
  diagnosticPrefix: 'calcbc-diagnostic',
  accent: 'blue',
  examLabel: 'AP Exam Date',
  plans: AP_CALCBC_PLANS,
}
