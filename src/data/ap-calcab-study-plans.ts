import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

/* ── 4-Week Sprint ── */
const sprint: StudyPlanTemplate = {
  id: '4-week-calcab-sprint',
  title: '4-Week AP Calc AB Sprint',
  description: 'Fast-paced review ideal for students who already have a solid foundation and want to sharpen skills before the AP exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Calc AB Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review Limits & Continuity', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 1 },
      { title: 'Limits Flashcard Drill', type: 'FLASHCARD', dayOfWeek: 3 },
      { title: 'Limit Laws & Squeeze Theorem Practice', type: 'PRACTICE', topicSlug: 'limits-continuity-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Derivative Rules Review', type: 'LESSON', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 0 },
      { title: 'Chain Rule & Implicit Differentiation', type: 'LESSON', topicSlug: 'chain-rule-calcab', dayOfWeek: 1 },
      { title: 'Derivatives Flashcard Drill', type: 'FLASHCARD', dayOfWeek: 3 },
      { title: 'Applications of Derivatives Practice', type: 'PRACTICE', topicSlug: 'applications-of-derivatives-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Definite & Indefinite Integrals', type: 'LESSON', topicSlug: 'definite-integrals-calcab', dayOfWeek: 0 },
      { title: 'FTC & U-Substitution', type: 'LESSON', topicSlug: 'definite-integrals-calcab', dayOfWeek: 1 },
      { title: 'Integration Quiz', type: 'QUIZ', topicSlug: 'definite-integrals-calcab', dayOfWeek: 3 },
      { title: 'Area Between Curves Practice', type: 'PRACTICE', topicSlug: 'area-between-curves-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Differential Equations Review', type: 'LESSON', topicSlug: 'differential-equations-calcab', dayOfWeek: 0 },
      { title: 'Full AP Calc AB Practice Exam', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

/* ── 10-Week Standard ── */
const standard: StudyPlanTemplate = {
  id: '10-week-calcab-standard',
  title: '10-Week AP Calc AB Plan',
  description: 'Balanced study schedule covering every major topic with lessons, quizzes, flashcards, and timed practice. Ideal for most students.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Calc AB Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Limits: Graphical & Numerical', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 1 },
      { title: 'Limits: Algebraic Techniques', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 3 },
      { title: 'Limits Quiz', type: 'QUIZ', topicSlug: 'limits-continuity-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Continuity & IVT', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 0 },
      { title: 'Squeeze Theorem', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 2 },
      { title: 'Limits Flashcard Drill', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Limits Practice Set', type: 'PRACTICE', topicSlug: 'limits-continuity-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Derivative Definition & Rules', type: 'LESSON', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 0 },
      { title: 'Power, Product & Quotient Rules', type: 'LESSON', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 2 },
      { title: 'Derivatives Quiz', type: 'QUIZ', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 4 },
      { title: 'Derivatives Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Chain Rule', type: 'LESSON', topicSlug: 'chain-rule-calcab', dayOfWeek: 0 },
      { title: 'Implicit Differentiation', type: 'LESSON', topicSlug: 'implicit-differentiation', dayOfWeek: 2 },
      { title: 'Related Rates', type: 'LESSON', topicSlug: 'related-rates', dayOfWeek: 4 },
      { title: 'Chain Rule & Implicit Diff Quiz', type: 'QUIZ', topicSlug: 'chain-rule-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Applications of Derivatives Overview', type: 'LESSON', topicSlug: 'applications-of-derivatives-calcab', dayOfWeek: 0 },
      { title: 'Mean Value Theorem', type: 'LESSON', topicSlug: 'theorem-applications-calcab', dayOfWeek: 1 },
      { title: 'Curve Sketching (1st & 2nd Derivative Tests)', type: 'LESSON', topicSlug: 'applications-of-derivatives-calcab', dayOfWeek: 3 },
      { title: 'Applications Practice Set', type: 'PRACTICE', topicSlug: 'applications-of-derivatives-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Optimization Problems', type: 'LESSON', topicSlug: 'optimization-calcab', dayOfWeek: 0 },
      { title: 'Linear Approximation', type: 'LESSON', topicSlug: 'linearization-differentials-calcab', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam (MC only)', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Antiderivatives & Indefinite Integrals', type: 'LESSON', topicSlug: 'antiderivatives-indefinite-integrals-calcab', dayOfWeek: 0 },
      { title: 'Definite Integrals & Riemann Sums', type: 'LESSON', topicSlug: 'definite-integrals-calcab', dayOfWeek: 2 },
      { title: 'Integration Quiz', type: 'QUIZ', topicSlug: 'definite-integrals-calcab', dayOfWeek: 4 },
      { title: 'Integration Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Fundamental Theorem of Calculus', type: 'LESSON', topicSlug: 'definite-integrals-calcab', dayOfWeek: 0 },
      { title: 'U-Substitution', type: 'LESSON', topicSlug: 'u-substitution-calcab', dayOfWeek: 2 },
      { title: 'FTC & Substitution Practice', type: 'PRACTICE', topicSlug: 'definite-integrals-calcab', dayOfWeek: 4 },
      { title: 'Integration Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Area Between Curves', type: 'LESSON', topicSlug: 'area-between-curves-calcab', dayOfWeek: 0 },
      { title: 'Volumes of Revolution', type: 'LESSON', topicSlug: 'volumes-of-revolution-calcab', dayOfWeek: 2 },
      { title: 'Differential Equations & Slope Fields', type: 'LESSON', topicSlug: 'differential-equations-calcab', dayOfWeek: 4 },
      { title: 'Applications of Integration Quiz', type: 'QUIZ', topicSlug: 'area-between-curves-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Full AP Calc AB Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Practice Exam Results', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Target Weak Topics Review', type: 'CUSTOM', dayOfWeek: 3 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Second Practice Exam', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
  ],
}

/* ── 18-Week Comprehensive ── */
const comprehensive: StudyPlanTemplate = {
  id: '18-week-calcab-comprehensive',
  title: '18-Week AP Calc AB Mastery',
  description: 'Deep, thorough study plan for students starting from scratch or aiming for a 5. Covers every concept with multiple review cycles and timed exams.',
  durationWeeks: 18, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Calc AB Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Precalculus Review: Functions & Graphs', type: 'LESSON', dayOfWeek: 1 },
      { title: 'Precalculus Review: Trig Functions', type: 'LESSON', dayOfWeek: 3 },
      { title: 'Diagnostic Review & Goal Setting', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Introduction to Limits', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 0 },
      { title: 'Limits: Graphical & Numerical', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 1 },
      { title: 'Limits: Algebraic Methods', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 3 },
      { title: 'Limits Flashcard Set', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Limits Practice Problems', type: 'PRACTICE', topicSlug: 'limits-continuity-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Continuity Definitions & Types', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 0 },
      { title: 'Intermediate Value Theorem', type: 'LESSON', topicSlug: 'limits-continuity-calcab', dayOfWeek: 2 },
      { title: 'Limits & Continuity Quiz', type: 'QUIZ', topicSlug: 'limits-continuity-calcab', dayOfWeek: 4 },
      { title: 'Limits Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Derivative from Definition', type: 'LESSON', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 0 },
      { title: 'Power Rule & Constant Rule', type: 'LESSON', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 2 },
      { title: 'Sum, Difference, Product Rules', type: 'LESSON', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 4 },
      { title: 'Basic Derivatives Quiz', type: 'QUIZ', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Quotient Rule', type: 'LESSON', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 0 },
      { title: 'Derivatives of Trig Functions', type: 'LESSON', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 2 },
      { title: 'Derivative Rules Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Derivative Rules Practice', type: 'PRACTICE', topicSlug: 'basic-differentiation-rules-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Chain Rule', type: 'LESSON', topicSlug: 'chain-rule-calcab', dayOfWeek: 0 },
      { title: 'Implicit Differentiation', type: 'LESSON', topicSlug: 'implicit-differentiation', dayOfWeek: 2 },
      { title: 'Chain Rule & Implicit Diff Practice', type: 'PRACTICE', topicSlug: 'chain-rule-calcab', dayOfWeek: 4 },
      { title: 'Derivatives Quiz (All Rules)', type: 'QUIZ', topicSlug: 'chain-rule-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Related Rates', type: 'LESSON', topicSlug: 'related-rates', dayOfWeek: 0 },
      { title: 'Related Rates Practice', type: 'PRACTICE', topicSlug: 'related-rates', dayOfWeek: 2 },
      { title: 'Derivatives of Inverse Functions', type: 'LESSON', topicSlug: 'inverse-functions-derivatives-calcab', dayOfWeek: 4 },
      { title: 'Related Rates Quiz', type: 'QUIZ', topicSlug: 'related-rates', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Mean Value Theorem', type: 'LESSON', topicSlug: 'theorem-applications-calcab', dayOfWeek: 0 },
      { title: 'Extreme Values & Critical Points', type: 'LESSON', topicSlug: 'applications-of-derivatives-calcab', dayOfWeek: 2 },
      { title: 'First Derivative Test', type: 'LESSON', topicSlug: 'applications-of-derivatives-calcab', dayOfWeek: 4 },
      { title: 'MVT & Extrema Practice', type: 'PRACTICE', topicSlug: 'theorem-applications-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Second Derivative Test & Concavity', type: 'LESSON', topicSlug: 'applications-of-derivatives-calcab', dayOfWeek: 0 },
      { title: 'Curve Sketching', type: 'LESSON', topicSlug: 'applications-of-derivatives-calcab', dayOfWeek: 2 },
      { title: 'Optimization', type: 'LESSON', topicSlug: 'optimization-calcab', dayOfWeek: 4 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Review Practice Exam Results', type: 'CUSTOM', dayOfWeek: 0 },
      { title: 'Linearization & Differentials', type: 'LESSON', topicSlug: 'linearization-differentials-calcab', dayOfWeek: 2 },
      { title: 'L\'Hôpital\'s Rule', type: 'LESSON', topicSlug: 'lhopitals-rule', dayOfWeek: 4 },
      { title: 'Derivatives Comprehensive Quiz', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(10, [
      { title: 'Antiderivatives & Basic Integration', type: 'LESSON', topicSlug: 'antiderivatives-indefinite-integrals-calcab', dayOfWeek: 0 },
      { title: 'Riemann Sums', type: 'LESSON', topicSlug: 'definite-integrals-calcab', dayOfWeek: 2 },
      { title: 'Definite Integrals', type: 'LESSON', topicSlug: 'definite-integrals-calcab', dayOfWeek: 4 },
      { title: 'Integration Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(11, [
      { title: 'FTC Part 1', type: 'LESSON', topicSlug: 'definite-integrals-calcab', dayOfWeek: 0 },
      { title: 'FTC Part 2', type: 'LESSON', topicSlug: 'definite-integrals-calcab', dayOfWeek: 2 },
      { title: 'FTC Practice', type: 'PRACTICE', topicSlug: 'definite-integrals-calcab', dayOfWeek: 4 },
      { title: 'FTC Quiz', type: 'QUIZ', topicSlug: 'definite-integrals-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(12, [
      { title: 'U-Substitution', type: 'LESSON', topicSlug: 'u-substitution-calcab', dayOfWeek: 0 },
      { title: 'U-Substitution Practice', type: 'PRACTICE', topicSlug: 'u-substitution-calcab', dayOfWeek: 2 },
      { title: 'Integration Techniques Quiz', type: 'QUIZ', topicSlug: 'u-substitution-calcab', dayOfWeek: 4 },
      { title: 'Integration Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(13, [
      { title: 'Area Between Curves', type: 'LESSON', topicSlug: 'area-between-curves-calcab', dayOfWeek: 0 },
      { title: 'Area Practice Problems', type: 'PRACTICE', topicSlug: 'area-between-curves-calcab', dayOfWeek: 2 },
      { title: 'Volumes: Disk & Washer Methods', type: 'LESSON', topicSlug: 'volumes-of-revolution-calcab', dayOfWeek: 4 },
      { title: 'Volumes Practice', type: 'PRACTICE', topicSlug: 'volumes-of-revolution-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(14, [
      { title: 'Differential Equations Intro', type: 'LESSON', topicSlug: 'differential-equations-calcab', dayOfWeek: 0 },
      { title: 'Slope Fields', type: 'LESSON', topicSlug: 'differential-equations-calcab', dayOfWeek: 2 },
      { title: 'Separation of Variables', type: 'LESSON', topicSlug: 'differential-equations-calcab', dayOfWeek: 4 },
      { title: 'Diff Eq Quiz', type: 'QUIZ', topicSlug: 'differential-equations-calcab', dayOfWeek: 5 },
    ]),
    ...weekTasks(15, [
      { title: 'Accumulation Functions', type: 'LESSON', topicSlug: 'definite-integrals-calcab', dayOfWeek: 0 },
      { title: 'Net Change & Motion Problems', type: 'LESSON', topicSlug: 'definite-integrals-calcab', dayOfWeek: 2 },
      { title: 'Comprehensive Integration Quiz', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Full Practice Exam #2', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
    ...weekTasks(16, [
      { title: 'Review Practice Exam #2', type: 'CUSTOM', dayOfWeek: 0 },
      { title: 'FRQ Practice: Area & Volume', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'FRQ Practice: Rates & Accumulation', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Comprehensive Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(17, [
      { title: 'Full Practice Exam #3', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review & Target Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Exam Strategy & Tips Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const AP_CALCAB_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Calculus AB',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-calculus-ab', label: 'AP Calculus AB' },
  apiEndpoint: '/api/ap-calcab-study-plans',
  diagnosticPrefix: 'calcab-diagnostic',
  accent: 'blue',
  examLabel: 'AP Exam Date',
  plans: AP_CALCAB_PLANS,
}
