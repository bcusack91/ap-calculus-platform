import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

/**
 * PSAT/NMSQT study plans.
 *
 * The PSAT tests the same eight domains as the Digital SAT at a lower ceiling,
 * so these plans point at the shared SAT lessons and diagnostic while sending
 * assessment work to the PSAT-specific unit tests and full-length exam.
 * Sophomores typically sit the PSAT in October, which is why the standard plan
 * is 8 weeks rather than a full semester.
 */
const sprint: StudyPlanTemplate = {
  id: '4-week-psat-sprint',
  title: '4-Week PSAT Sprint',
  description: 'A focused month before test day: diagnose, drill the two weakest domains per section, then sit a full-length practice test.',
  durationWeeks: 4, targetImprovement: '60–100 points', weeklyHours: '4–6 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review Results & Pick Two Focus Domains', type: 'CUSTOM', dayOfWeek: 1 },
      { title: 'Unit Test: Information & Ideas', type: 'QUIZ', dayOfWeek: 3 },
      { title: 'Unit Test: Craft & Structure', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Unit Test: Expression of Ideas', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Unit Test: Standard English Conventions', type: 'QUIZ', dayOfWeek: 2 },
      { title: 'Grammar Rules Flashcards', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Retake Your Weakest R&W Unit (Variation 2)', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Unit Test: Algebra', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Unit Test: Advanced Math', type: 'QUIZ', dayOfWeek: 2 },
      { title: 'Unit Test: Problem-Solving & Data', type: 'QUIZ', dayOfWeek: 3 },
      { title: 'Unit Test: Geometry & Trig', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Full-Length PSAT Practice Test', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Every Missed Question', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Retake Your Two Weakest Units (Variation 3)', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Test-Day Logistics & Timing Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '8-week-psat-standard',
  title: '8-Week PSAT Plan',
  description: 'A domain-by-domain build through all eight PSAT areas, with a unit test after each and two full-length practice tests — paced for a fall test date.',
  durationWeeks: 8, targetImprovement: '100–150 points', weeklyHours: '5–7 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review Results & Set a Target Score', type: 'CUSTOM', dayOfWeek: 1 },
      { title: 'Reading: Central Ideas & Purpose', type: 'LESSON', topicSlug: 'sat-reading-evidence-sat', dayOfWeek: 3 },
      { title: 'Unit Test: Information & Ideas', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Reading: Words in Context', type: 'LESSON', topicSlug: 'sat-reading-writing-strategy-sat', dayOfWeek: 0 },
      { title: 'Reading: Text Structure & Purpose', type: 'LESSON', topicSlug: 'sat-reading-evidence-sat', dayOfWeek: 2 },
      { title: 'Unit Test: Craft & Structure', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Vocabulary in Context Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Writing: Transitions', type: 'LESSON', topicSlug: 'sat-expression-ideas-sat', dayOfWeek: 0 },
      { title: 'Writing: Rhetorical Synthesis', type: 'LESSON', topicSlug: 'sat-expression-ideas-sat', dayOfWeek: 2 },
      { title: 'Unit Test: Expression of Ideas', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Review Missed Transition Questions', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Grammar: Sentence Boundaries', type: 'LESSON', topicSlug: 'sat-punctuation-commas-semicolons-sat', dayOfWeek: 0 },
      { title: 'Grammar: Agreement, Verbs & Pronouns', type: 'LESSON', topicSlug: 'sat-grammar-conventions-sat', dayOfWeek: 2 },
      { title: 'Unit Test: Standard English Conventions', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Grammar Rules Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Full-Length PSAT Practice Test #1', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Score It & Identify the Two Weakest Domains', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Retake Your Weakest R&W Unit (Variation 2)', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Timing Practice: R&W Module Pacing', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Math: Linear Equations & Functions', type: 'LESSON', topicSlug: 'sat-linear-equations-sat', dayOfWeek: 0 },
      { title: 'Math: Systems & Inequalities', type: 'LESSON', topicSlug: 'sat-linear-equations-sat', dayOfWeek: 2 },
      { title: 'Unit Test: Algebra', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Algebra Formula Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Math: Quadratics & Equivalent Expressions', type: 'LESSON', topicSlug: 'sat-quadratic-equations-sat', dayOfWeek: 0 },
      { title: 'Unit Test: Advanced Math', type: 'QUIZ', dayOfWeek: 1 },
      { title: 'Math: Ratios, Percentages & Data', type: 'LESSON', topicSlug: 'sat-ratios-proportions-sat', dayOfWeek: 3 },
      { title: 'Unit Test: Problem-Solving & Data', type: 'QUIZ', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Math: Geometry & Right Triangles', type: 'LESSON', topicSlug: 'sat-geometry-angles-sat', dayOfWeek: 0 },
      { title: 'Unit Test: Geometry & Trig', type: 'QUIZ', dayOfWeek: 1 },
      { title: 'Full-Length PSAT Practice Test #2', type: 'PRACTICE', dayOfWeek: 3 },
      { title: 'Final Review & Test-Day Logistics', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const PSAT_PLANS: StudyPlanTemplate[] = [sprint, standard]

export const config: StudyPlanSelectorConfig = {
  subject: 'PSAT/NMSQT',
  description: 'Choose a PSAT study schedule covering all eight digital-PSAT domains across Reading & Writing and Math. Every hour also builds your SAT score.',
  backLink: { href: '/psat', label: 'PSAT/NMSQT' },
  apiEndpoint: '/api/psat-study-plans',
  accent: 'violet',
  examLabel: 'PSAT Test Date',
  plans: PSAT_PLANS,
  diagnosticPrefix: 'sat-diagnostic',
}
