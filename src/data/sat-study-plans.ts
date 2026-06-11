/**
 * Pre-built SAT study plan templates (4-week, 8-week, 12-week).
 * Each template generates StudyTasks aligned with the existing StudyPlan/StudyTask models.
 */

export interface TemplatePlanTask {
  title: string
  type: 'LESSON' | 'FLASHCARD' | 'QUIZ' | 'PRACTICE' | 'CUSTOM'
  topicSlug?: string
  /** Week offset from plan start (0-indexed) */
  weekOffset: number
  /** Day within the week (0=Mon … 6=Sun) */
  dayOfWeek: number
}

export interface StudyPlanTemplate {
  id: string
  title: string
  description: string
  durationWeeks: number
  targetImprovement: string
  weeklyHours: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  tasks: TemplatePlanTask[]
}

// ────────────────────────────────────────────────────────────
// Helper – generates a flat list of tasks from weekly blocks
// ────────────────────────────────────────────────────────────
function weekTasks(
  weekOffset: number,
  items: Omit<TemplatePlanTask, 'weekOffset'>[],
): TemplatePlanTask[] {
  return items.map(t => ({ ...t, weekOffset }))
}

// ===============================================================
//  4-WEEK SPRINT (Beginner-friendly crash course)
// ===============================================================
const fourWeekTasks: TemplatePlanTask[] = [
  // Week 1 — Foundations
  ...weekTasks(0, [
    { title: 'Take SAT Diagnostic Test', type: 'PRACTICE', topicSlug: undefined, dayOfWeek: 0 },
    { title: 'Linear Equations Lesson', type: 'LESSON', topicSlug: 'sat-linear-equations-inequalities', dayOfWeek: 1 },
    { title: 'Reading Comprehension Lesson', type: 'LESSON', topicSlug: 'sat-central-ideas-details', dayOfWeek: 2 },
    { title: 'Linear Equations Quiz', type: 'QUIZ', topicSlug: 'sat-linear-equations-inequalities', dayOfWeek: 3 },
    { title: 'Vocabulary in Context Lesson', type: 'LESSON', topicSlug: 'sat-vocabulary-context', dayOfWeek: 4 },
    { title: 'Reading Comprehension Quiz', type: 'QUIZ', topicSlug: 'sat-central-ideas-details', dayOfWeek: 5 },
  ]),
  // Week 2 — Core Skills
  ...weekTasks(1, [
    { title: 'Systems of Equations Lesson', type: 'LESSON', topicSlug: 'sat-systems-equations', dayOfWeek: 0 },
    { title: 'Grammar & Conventions Lesson', type: 'LESSON', topicSlug: 'sat-grammar-usage', dayOfWeek: 1 },
    { title: 'Systems of Equations Quiz', type: 'QUIZ', topicSlug: 'sat-systems-equations', dayOfWeek: 2 },
    { title: 'Sentence Structure Lesson', type: 'LESSON', topicSlug: 'sat-sentence-structure', dayOfWeek: 3 },
    { title: 'Quadratic Equations Lesson', type: 'LESSON', topicSlug: 'sat-quadratic-equations', dayOfWeek: 4 },
    { title: 'Grammar Quiz', type: 'QUIZ', topicSlug: 'sat-grammar-usage', dayOfWeek: 5 },
  ]),
  // Week 3 — Advanced Topics
  ...weekTasks(2, [
    { title: 'Functions & Graphs Lesson', type: 'LESSON', topicSlug: 'sat-functions', dayOfWeek: 0 },
    { title: 'Central Ideas & Details Lesson', type: 'LESSON', topicSlug: 'sat-central-ideas-details', dayOfWeek: 1 },
    { title: 'Statistics & Data Lesson', type: 'LESSON', topicSlug: 'sat-statistics-data-interpretation', dayOfWeek: 2 },
    { title: 'Functions Quiz', type: 'QUIZ', topicSlug: 'sat-functions', dayOfWeek: 3 },
    { title: 'Geometry & Trigonometry Lesson', type: 'LESSON', topicSlug: 'sat-geometry-basics', dayOfWeek: 4 },
    { title: 'SAT Mini Practice Test', type: 'PRACTICE', topicSlug: undefined, dayOfWeek: 5 },
  ]),
  // Week 4 — Review & Test
  ...weekTasks(3, [
    { title: 'Review Weak Areas (from diagnostic)', type: 'CUSTOM', dayOfWeek: 0 },
    { title: 'Flashcard Review: All Math Topics', type: 'FLASHCARD', dayOfWeek: 1 },
    { title: 'Flashcard Review: All R&W Topics', type: 'FLASHCARD', dayOfWeek: 2 },
    { title: 'Timed Section Practice (Math)', type: 'PRACTICE', dayOfWeek: 3 },
    { title: 'Timed Section Practice (R&W)', type: 'PRACTICE', dayOfWeek: 4 },
    { title: 'Full-Length SAT Practice Test', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
]

// ===============================================================
//  8-WEEK COMPREHENSIVE PLAN (Intermediate)
// ===============================================================
const eightWeekTasks: TemplatePlanTask[] = [
  // Week 1 — Assessment & Algebra
  ...weekTasks(0, [
    { title: 'Take SAT Diagnostic Test', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review Diagnostic Results & Set Goals', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'Linear Equations Lesson', type: 'LESSON', topicSlug: 'sat-linear-equations-inequalities', dayOfWeek: 2 },
    { title: 'Inequalities Lesson', type: 'LESSON', topicSlug: 'sat-linear-inequalities-graphs', dayOfWeek: 3 },
    { title: 'Linear Equations Quiz', type: 'QUIZ', topicSlug: 'sat-linear-equations-inequalities', dayOfWeek: 4 },
  ]),
  // Week 2 — Reading Foundations
  ...weekTasks(1, [
    { title: 'Reading Comprehension Lesson', type: 'LESSON', topicSlug: 'sat-central-ideas-details', dayOfWeek: 0 },
    { title: 'Vocabulary in Context Lesson', type: 'LESSON', topicSlug: 'sat-vocabulary-context', dayOfWeek: 1 },
    { title: 'Finding Textual Evidence Lesson', type: 'LESSON', topicSlug: 'sat-finding-textual-evidence', dayOfWeek: 2 },
    { title: 'Reading Comprehension Quiz', type: 'QUIZ', topicSlug: 'sat-central-ideas-details', dayOfWeek: 3 },
    { title: 'Vocabulary Quiz', type: 'QUIZ', topicSlug: 'sat-vocabulary-context', dayOfWeek: 4 },
  ]),
  // Week 3 — Algebra cont. & Writing
  ...weekTasks(2, [
    { title: 'Systems of Equations Lesson', type: 'LESSON', topicSlug: 'sat-systems-equations', dayOfWeek: 0 },
    { title: 'Quadratic Equations Lesson', type: 'LESSON', topicSlug: 'sat-quadratic-equations', dayOfWeek: 1 },
    { title: 'Grammar & Conventions Lesson', type: 'LESSON', topicSlug: 'sat-grammar-usage', dayOfWeek: 2 },
    { title: 'Systems of Equations Quiz', type: 'QUIZ', topicSlug: 'sat-systems-equations', dayOfWeek: 3 },
    { title: 'Quadratic Equations Quiz', type: 'QUIZ', topicSlug: 'sat-quadratic-equations', dayOfWeek: 4 },
  ]),
  // Week 4 — Writing & Functions
  ...weekTasks(3, [
    { title: 'Sentence Structure Lesson', type: 'LESSON', topicSlug: 'sat-sentence-structure', dayOfWeek: 0 },
    { title: 'Punctuation Lesson', type: 'LESSON', topicSlug: 'sat-punctuation', dayOfWeek: 1 },
    { title: 'Functions & Graphs Lesson', type: 'LESSON', topicSlug: 'sat-functions', dayOfWeek: 2 },
    { title: 'Grammar Quiz', type: 'QUIZ', topicSlug: 'sat-grammar-usage', dayOfWeek: 3 },
    { title: 'SAT Mini Practice Test #1', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  // Week 5 — Advanced Math
  ...weekTasks(4, [
    { title: 'Exponents & Radicals Lesson', type: 'LESSON', topicSlug: 'sat-exponents-radicals', dayOfWeek: 0 },
    { title: 'Polynomials & Factoring Lesson', type: 'LESSON', topicSlug: 'sat-polynomials-factoring', dayOfWeek: 1 },
    { title: 'Circles & Complex Numbers Lesson', type: 'LESSON', topicSlug: 'sat-circles', dayOfWeek: 2 },
    { title: 'Functions Quiz', type: 'QUIZ', topicSlug: 'sat-functions', dayOfWeek: 3 },
    { title: 'Exponents Quiz', type: 'QUIZ', topicSlug: 'sat-exponents-radicals', dayOfWeek: 4 },
  ]),
  // Week 6 — Data & R&W Strategy
  ...weekTasks(5, [
    { title: 'Statistics & Data Lesson', type: 'LESSON', topicSlug: 'sat-statistics-data-interpretation', dayOfWeek: 0 },
    { title: 'Central Ideas & Details Lesson', type: 'LESSON', topicSlug: 'sat-central-ideas-details', dayOfWeek: 1 },
    { title: 'Command of Evidence Lesson', type: 'LESSON', topicSlug: 'sat-finding-textual-evidence', dayOfWeek: 2 },
    { title: 'Statistics Quiz', type: 'QUIZ', topicSlug: 'sat-statistics-data-interpretation', dayOfWeek: 3 },
    { title: 'Evidence Quiz', type: 'QUIZ', topicSlug: 'sat-finding-textual-evidence', dayOfWeek: 4 },
  ]),
  // Week 7 — Geometry & Strategy
  ...weekTasks(6, [
    { title: 'Geometry & Trigonometry Lesson', type: 'LESSON', topicSlug: 'sat-geometry-basics', dayOfWeek: 0 },
    { title: 'Word Problems Lesson', type: 'LESSON', topicSlug: 'sat-ratios-proportions-percents', dayOfWeek: 1 },
    { title: 'Time Management Lesson', type: 'LESSON', topicSlug: 'sat-time-management', dayOfWeek: 2 },
    { title: 'Geometry Quiz', type: 'QUIZ', topicSlug: 'sat-geometry-basics', dayOfWeek: 3 },
    { title: 'SAT Mini Practice Test #2', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  // Week 8 — Full Review & Practice Test
  ...weekTasks(7, [
    { title: 'Review All Weak Areas', type: 'CUSTOM', dayOfWeek: 0 },
    { title: 'Flashcard Review: Math', type: 'FLASHCARD', dayOfWeek: 1 },
    { title: 'Flashcard Review: Reading & Writing', type: 'FLASHCARD', dayOfWeek: 2 },
    { title: 'Timed Section Practice', type: 'PRACTICE', dayOfWeek: 3 },
    { title: 'Full-Length SAT Practice Test', type: 'PRACTICE', dayOfWeek: 5 },
    { title: 'Check Score Predictor & Adjust', type: 'CUSTOM', dayOfWeek: 6 },
  ]),
]

// ===============================================================
//  12-WEEK MASTERY PLAN (Advanced / high target score)
// ===============================================================
const twelveWeekTasks: TemplatePlanTask[] = [
  // Week 1 — Diagnostic & Foundations
  ...weekTasks(0, [
    { title: 'Take SAT Diagnostic Test', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review Diagnostic + Set 1500+ Goal', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'Linear Equations Deep Dive', type: 'LESSON', topicSlug: 'sat-linear-equations-inequalities', dayOfWeek: 2 },
    { title: 'Linear Inequalities Deep Dive', type: 'LESSON', topicSlug: 'sat-linear-inequalities-graphs', dayOfWeek: 3 },
    { title: 'Linear Equations Quiz', type: 'QUIZ', topicSlug: 'sat-linear-equations-inequalities', dayOfWeek: 4 },
    { title: 'Inequalities Quiz', type: 'QUIZ', topicSlug: 'sat-linear-inequalities-graphs', dayOfWeek: 5 },
  ]),
  // Week 2 — Reading I
  ...weekTasks(1, [
    { title: 'Reading Comprehension Lesson', type: 'LESSON', topicSlug: 'sat-central-ideas-details', dayOfWeek: 0 },
    { title: 'Vocabulary in Context Lesson', type: 'LESSON', topicSlug: 'sat-vocabulary-context', dayOfWeek: 1 },
    { title: 'Flashcard: SAT Vocabulary', type: 'FLASHCARD', topicSlug: 'sat-vocabulary-context', dayOfWeek: 2 },
    { title: 'Reading Comprehension Quiz', type: 'QUIZ', topicSlug: 'sat-central-ideas-details', dayOfWeek: 3 },
    { title: 'Vocabulary Quiz', type: 'QUIZ', topicSlug: 'sat-vocabulary-context', dayOfWeek: 4 },
  ]),
  // Week 3 — Systems & Evidence
  ...weekTasks(2, [
    { title: 'Systems of Equations Lesson', type: 'LESSON', topicSlug: 'sat-systems-equations', dayOfWeek: 0 },
    { title: 'Finding Textual Evidence Lesson', type: 'LESSON', topicSlug: 'sat-finding-textual-evidence', dayOfWeek: 1 },
    { title: 'Command of Evidence Lesson', type: 'LESSON', topicSlug: 'sat-finding-textual-evidence', dayOfWeek: 2 },
    { title: 'Systems Quiz', type: 'QUIZ', topicSlug: 'sat-systems-equations', dayOfWeek: 3 },
    { title: 'Evidence Quiz', type: 'QUIZ', topicSlug: 'sat-finding-textual-evidence', dayOfWeek: 4 },
  ]),
  // Week 4 — Quadratics & Grammar
  ...weekTasks(3, [
    { title: 'Quadratic Equations Lesson', type: 'LESSON', topicSlug: 'sat-quadratic-equations', dayOfWeek: 0 },
    { title: 'Grammar & Conventions Lesson', type: 'LESSON', topicSlug: 'sat-grammar-usage', dayOfWeek: 1 },
    { title: 'Sentence Structure Lesson', type: 'LESSON', topicSlug: 'sat-sentence-structure', dayOfWeek: 2 },
    { title: 'Quadratics Quiz', type: 'QUIZ', topicSlug: 'sat-quadratic-equations', dayOfWeek: 3 },
    { title: 'SAT Mini Practice Test #1', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  // Week 5 — Functions & Writing
  ...weekTasks(4, [
    { title: 'Functions & Graphs Lesson', type: 'LESSON', topicSlug: 'sat-functions', dayOfWeek: 0 },
    { title: 'Punctuation Lesson', type: 'LESSON', topicSlug: 'sat-punctuation', dayOfWeek: 1 },
    { title: 'Effective Language Use Lesson', type: 'LESSON', topicSlug: 'sat-conciseness-redundancy', dayOfWeek: 2 },
    { title: 'Functions Quiz', type: 'QUIZ', topicSlug: 'sat-functions', dayOfWeek: 3 },
    { title: 'Punctuation Quiz', type: 'QUIZ', topicSlug: 'sat-punctuation', dayOfWeek: 4 },
  ]),
  // Week 6 — Exponents & Data
  ...weekTasks(5, [
    { title: 'Exponents & Radicals Lesson', type: 'LESSON', topicSlug: 'sat-exponents-radicals', dayOfWeek: 0 },
    { title: 'Statistics & Data Lesson', type: 'LESSON', topicSlug: 'sat-statistics-data-interpretation', dayOfWeek: 1 },
    { title: 'Central Ideas & Details Lesson', type: 'LESSON', topicSlug: 'sat-central-ideas-details', dayOfWeek: 2 },
    { title: 'Exponents Quiz', type: 'QUIZ', topicSlug: 'sat-exponents-radicals', dayOfWeek: 3 },
    { title: 'Statistics Quiz', type: 'QUIZ', topicSlug: 'sat-statistics-data-interpretation', dayOfWeek: 4 },
  ]),
  // Week 7 — Polynomials & Advanced Topics
  ...weekTasks(6, [
    { title: 'Polynomials & Factoring Lesson', type: 'LESSON', topicSlug: 'sat-polynomials-factoring', dayOfWeek: 0 },
    { title: 'Circles & Complex Numbers Lesson', type: 'LESSON', topicSlug: 'sat-circles', dayOfWeek: 1 },
    { title: 'Transitions & Organization Lesson', type: 'LESSON', topicSlug: 'sat-transitions-organization', dayOfWeek: 2 },
    { title: 'Polynomials Quiz', type: 'QUIZ', topicSlug: 'sat-polynomials-factoring', dayOfWeek: 3 },
    { title: 'Circles Quiz', type: 'QUIZ', topicSlug: 'sat-circles', dayOfWeek: 4 },
  ]),
  // Week 8 — Geometry & Strategy
  ...weekTasks(7, [
    { title: 'Geometry & Trigonometry Lesson', type: 'LESSON', topicSlug: 'sat-geometry-basics', dayOfWeek: 0 },
    { title: 'Word Problems Lesson', type: 'LESSON', topicSlug: 'sat-ratios-proportions-percents', dayOfWeek: 1 },
    { title: 'Time Management Lesson', type: 'LESSON', topicSlug: 'sat-time-management', dayOfWeek: 2 },
    { title: 'Geometry Quiz', type: 'QUIZ', topicSlug: 'sat-geometry-basics', dayOfWeek: 3 },
    { title: 'SAT Mini Practice Test #2', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  // Week 9 — Full Practice Test #1
  ...weekTasks(8, [
    { title: 'Full-Length SAT Practice Test #1', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Analyze Practice Test Results', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'Review Missed Math Questions', type: 'CUSTOM', dayOfWeek: 2 },
    { title: 'Review Missed R&W Questions', type: 'CUSTOM', dayOfWeek: 3 },
    { title: 'Flashcard: Weak Topics', type: 'FLASHCARD', dayOfWeek: 4 },
  ]),
  // Week 10 — Targeted Remediation
  ...weekTasks(9, [
    { title: 'Retake Weakest Math Quiz', type: 'QUIZ', dayOfWeek: 0 },
    { title: 'Retake Weakest R&W Quiz', type: 'QUIZ', dayOfWeek: 1 },
    { title: 'Advanced Problem Practice (Math)', type: 'PRACTICE', dayOfWeek: 2 },
    { title: 'Advanced Passage Analysis (R&W)', type: 'PRACTICE', dayOfWeek: 3 },
    { title: 'SAT Calculator Strategy Lesson', type: 'LESSON', topicSlug: 'sat-calculator-strategy', dayOfWeek: 4 },
  ]),
  // Week 11 — Full Practice Test #2 + Review
  ...weekTasks(10, [
    { title: 'Full-Length SAT Practice Test #2', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Analyze & Compare to Test #1', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'Review Remaining Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
    { title: 'Timed Section Practice (R&W)', type: 'PRACTICE', dayOfWeek: 3 },
    { title: 'Timed Section Practice (Math)', type: 'PRACTICE', dayOfWeek: 4 },
  ]),
  // Week 12 — Final Review & Test Day Prep
  ...weekTasks(11, [
    { title: 'Test Day Strategy Lesson', type: 'LESSON', topicSlug: 'sat-test-day-strategy', dayOfWeek: 0 },
    { title: 'Flashcard Blitz: All Topics', type: 'FLASHCARD', dayOfWeek: 1 },
    { title: 'Light Review (No new material)', type: 'CUSTOM', dayOfWeek: 2 },
    { title: 'Check Score Predictor', type: 'CUSTOM', dayOfWeek: 3 },
    { title: 'Rest & Prepare for Test Day', type: 'CUSTOM', dayOfWeek: 4 },
    { title: 'SAT TEST DAY! Good luck!', type: 'CUSTOM', dayOfWeek: 5 },
  ]),
]

// ───────────────────────────────────────────────────
//  Export
// ───────────────────────────────────────────────────

export const SAT_STUDY_PLANS: StudyPlanTemplate[] = [
  {
    id: '4-week-sprint',
    title: '4-Week SAT Sprint',
    description:
      'A fast-paced crash course covering all essential SAT topics. Perfect if your test is coming up soon and you need a focused review.',
    durationWeeks: 4,
    targetImprovement: '50–100 points',
    weeklyHours: '5–7 hours',
    difficulty: 'Beginner',
    tasks: fourWeekTasks,
  },
  {
    id: '8-week-comprehensive',
    title: '8-Week Comprehensive Plan',
    description:
      'A balanced study plan that covers every SAT domain in depth with two practice tests. Ideal for students aiming for a solid score improvement.',
    durationWeeks: 8,
    targetImprovement: '100–200 points',
    weeklyHours: '5–8 hours',
    difficulty: 'Intermediate',
    tasks: eightWeekTasks,
  },
  {
    id: '12-week-mastery',
    title: '12-Week Mastery Plan',
    description:
      'The most thorough plan with deep coverage of every topic, multiple practice tests, targeted remediation, and test-day strategy. For students targeting 1400+.',
    durationWeeks: 12,
    targetImprovement: '150–300 points',
    weeklyHours: '7–10 hours',
    difficulty: 'Advanced',
    tasks: twelveWeekTasks,
  },
]

/**
 * Resolves template tasks into concrete dated StudyTask inputs
 * given a start date. Returns objects ready for Prisma create.
 */
export function resolveTemplateTasks(
  template: StudyPlanTemplate,
  startDate: Date,
): { title: string; type: string; topicSlug?: string; dueDate: Date; sortOrder: number }[] {
  return template.tasks.map((t, i) => {
    const due = new Date(startDate)
    // Move to Monday of start week, then add week offset + day
    const startDay = due.getDay() // 0=Sun
    const mondayOffset = startDay === 0 ? 1 : startDay === 1 ? 0 : 8 - startDay
    due.setDate(due.getDate() + mondayOffset + t.weekOffset * 7 + t.dayOfWeek)
    return {
      title: t.title,
      type: t.type,
      ...(t.topicSlug ? { topicSlug: t.topicSlug } : {}),
      dueDate: due,
      sortOrder: i,
    }
  })
}
