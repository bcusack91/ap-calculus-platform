/**
 * Pre-built MCAT study plan templates (3-month, 6-month, 12-month).
 */

export interface MCATTemplatePlanTask {
  title: string
  type: 'LESSON' | 'FLASHCARD' | 'QUIZ' | 'PRACTICE' | 'CUSTOM'
  topicSlug?: string
  weekOffset: number
  dayOfWeek: number
}

export interface MCATStudyPlanTemplate {
  id: string
  title: string
  description: string
  durationWeeks: number
  targetImprovement: string
  weeklyHours: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  tasks: MCATTemplatePlanTask[]
}

function weekTasks(
  weekOffset: number,
  items: Omit<MCATTemplatePlanTask, 'weekOffset'>[],
): MCATTemplatePlanTask[] {
  return items.map(t => ({ ...t, weekOffset }))
}

// ─────────────────────────────────────────────
// 3-MONTH INTENSIVE (12 weeks)
// ─────────────────────────────────────────────
const threeMonthTasks: MCATTemplatePlanTask[] = [
  // Week 1 — Diagnostic & Bio Foundations
  ...weekTasks(0, [
    { title: 'Take MCAT Diagnostic Test', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review Diagnostic Results', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'Cell Biology Lesson', type: 'LESSON', topicSlug: 'mcat-cell-biology-mcat', dayOfWeek: 2 },
    { title: 'General Chemistry Lesson', type: 'LESSON', topicSlug: 'mcat-general-chemistry-mcat', dayOfWeek: 3 },
    { title: 'Cell Biology Quiz', type: 'QUIZ', topicSlug: 'mcat-cell-biology-mcat', dayOfWeek: 4 },
    { title: 'CARS Practice (3 passages)', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  // Week 2 — Biochem & Organic
  ...weekTasks(1, [
    { title: 'Biochemistry Foundations Lesson', type: 'LESSON', topicSlug: 'mcat-biochemistry-foundations-mcat', dayOfWeek: 0 },
    { title: 'Organic Chemistry Lesson', type: 'LESSON', topicSlug: 'mcat-organic-chemistry-mcat', dayOfWeek: 1 },
    { title: 'Biochemistry Quiz', type: 'QUIZ', topicSlug: 'mcat-biochemistry-foundations-mcat', dayOfWeek: 2 },
    { title: 'Gen Chem Quiz', type: 'QUIZ', topicSlug: 'mcat-general-chemistry-mcat', dayOfWeek: 3 },
    { title: 'CARS Practice (3 passages)', type: 'PRACTICE', dayOfWeek: 4 },
    { title: 'Organic Chemistry Quiz', type: 'QUIZ', topicSlug: 'mcat-organic-chemistry-mcat', dayOfWeek: 5 },
  ]),
  // Week 3 — Physics & Genetics
  ...weekTasks(2, [
    { title: 'Physics: Mechanics Lesson', type: 'LESSON', topicSlug: 'mcat-physics-mechanics-mcat', dayOfWeek: 0 },
    { title: 'Genetics & Evolution Lesson', type: 'LESSON', topicSlug: 'mcat-genetics-evolution-mcat', dayOfWeek: 1 },
    { title: 'Physics Quiz', type: 'QUIZ', topicSlug: 'mcat-physics-mechanics-mcat', dayOfWeek: 2 },
    { title: 'Molecular Biology Lesson', type: 'LESSON', topicSlug: 'mcat-molecular-biology-mcat', dayOfWeek: 3 },
    { title: 'Genetics Quiz', type: 'QUIZ', topicSlug: 'mcat-genetics-evolution-mcat', dayOfWeek: 4 },
    { title: 'CARS Practice (3 passages)', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  // Week 4 — Organ Systems & E&M
  ...weekTasks(3, [
    { title: 'Organ Systems Lesson', type: 'LESSON', topicSlug: 'mcat-organ-systems-mcat', dayOfWeek: 0 },
    { title: 'Physics: Electricity Lesson', type: 'LESSON', topicSlug: 'mcat-physics-electricity-mcat', dayOfWeek: 1 },
    { title: 'Organ Systems Quiz', type: 'QUIZ', topicSlug: 'mcat-organ-systems-mcat', dayOfWeek: 2 },
    { title: 'Anatomy & Physiology Lesson', type: 'LESSON', topicSlug: 'mcat-anatomy-physiology-mcat', dayOfWeek: 3 },
    { title: 'Electricity Quiz', type: 'QUIZ', topicSlug: 'mcat-physics-electricity-mcat', dayOfWeek: 4 },
  ]),
  // Week 5 — Psych/Soc
  ...weekTasks(4, [
    { title: 'Psychology & Behavior Lesson', type: 'LESSON', topicSlug: 'mcat-psychology-behavior-mcat', dayOfWeek: 0 },
    { title: 'Sociology Lesson', type: 'LESSON', topicSlug: 'mcat-sociology-mcat', dayOfWeek: 1 },
    { title: 'Psychology Quiz', type: 'QUIZ', topicSlug: 'mcat-psychology-behavior-mcat', dayOfWeek: 2 },
    { title: 'Sociology Quiz', type: 'QUIZ', topicSlug: 'mcat-sociology-mcat', dayOfWeek: 3 },
    { title: 'CARS Practice (4 passages)', type: 'PRACTICE', dayOfWeek: 4 },
    { title: 'Chem/Phys Section Practice', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  // Week 6 — Review & Practice
  ...weekTasks(5, [
    { title: 'Review Weak Areas (Gen Chem, OChem)', type: 'CUSTOM', dayOfWeek: 0 },
    { title: 'Flashcard Review: All Bio Topics', type: 'FLASHCARD', dayOfWeek: 1 },
    { title: 'Bio/Biochem Section Practice', type: 'PRACTICE', dayOfWeek: 2 },
    { title: 'Flashcard Review: Psych/Soc', type: 'FLASHCARD', dayOfWeek: 3 },
    { title: 'Psych/Soc Section Practice', type: 'PRACTICE', dayOfWeek: 4 },
    { title: 'CARS Practice (4 passages)', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  // Week 7-8 — Deep review
  ...weekTasks(6, [
    { title: 'Review: Physics Weak Topics', type: 'CUSTOM', dayOfWeek: 0 },
    { title: 'Review: Biochem Weak Topics', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'Full Chem/Phys Section Practice', type: 'PRACTICE', dayOfWeek: 2 },
    { title: 'Full Bio/Biochem Section Practice', type: 'PRACTICE', dayOfWeek: 3 },
    { title: 'CARS Practice (5 passages)', type: 'PRACTICE', dayOfWeek: 4 },
  ]),
  ...weekTasks(7, [
    { title: 'Review: Organ Systems & Anatomy', type: 'CUSTOM', dayOfWeek: 0 },
    { title: 'Review: Genetics & Evolution', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'Full Psych/Soc Section Practice', type: 'PRACTICE', dayOfWeek: 2 },
    { title: 'Microbiology Review', type: 'LESSON', topicSlug: 'mcat-microbiology-mcat', dayOfWeek: 3 },
    { title: 'CARS Practice (5 passages)', type: 'PRACTICE', dayOfWeek: 4 },
  ]),
  // Week 9-10 — Practice tests
  ...weekTasks(8, [
    { title: 'Science Passage Strategy', type: 'LESSON', topicSlug: 'mcat-science-passage-strategy-mcat', dayOfWeek: 0 },
    { title: 'Test Day Strategy Lesson', type: 'LESSON', topicSlug: 'mcat-test-day-strategy-mcat', dayOfWeek: 1 },
    { title: 'Timed Chem/Phys Practice', type: 'PRACTICE', dayOfWeek: 2 },
    { title: 'Timed Bio/Biochem Practice', type: 'PRACTICE', dayOfWeek: 3 },
    { title: 'Timed CARS Practice', type: 'PRACTICE', dayOfWeek: 4 },
    { title: 'Timed Psych/Soc Practice', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(9, [
    { title: 'Review Weak Topics from Practice', type: 'CUSTOM', dayOfWeek: 0 },
    { title: 'Flashcard Review: All Sciences', type: 'FLASHCARD', dayOfWeek: 1 },
    { title: 'Full-length practice exam (Chem/Phys + CARS)', type: 'PRACTICE', dayOfWeek: 2 },
    { title: 'Review practice exam results', type: 'CUSTOM', dayOfWeek: 3 },
    { title: 'Full-length practice exam (Bio/Biochem + Psych/Soc)', type: 'PRACTICE', dayOfWeek: 4 },
  ]),
  // Week 11-12 — Final review
  ...weekTasks(10, [
    { title: 'Target weakest topics for review', type: 'CUSTOM', dayOfWeek: 0 },
    { title: 'Flashcard Sprint: High-yield facts', type: 'FLASHCARD', dayOfWeek: 1 },
    { title: 'CARS Daily Practice', type: 'PRACTICE', dayOfWeek: 2 },
    { title: 'Formula & Equation Review', type: 'CUSTOM', dayOfWeek: 3 },
    { title: 'Light Review & Rest', type: 'CUSTOM', dayOfWeek: 4 },
  ]),
  ...weekTasks(11, [
    { title: 'Light Review: Key Concepts', type: 'CUSTOM', dayOfWeek: 0 },
    { title: 'Review Test Day Strategy', type: 'LESSON', topicSlug: 'mcat-test-day-strategy-mcat', dayOfWeek: 1 },
    { title: 'Light CARS practice', type: 'PRACTICE', dayOfWeek: 2 },
    { title: 'Relax & Prepare Materials', type: 'CUSTOM', dayOfWeek: 3 },
    { title: 'Test Day!', type: 'CUSTOM', dayOfWeek: 4 },
  ]),
]

// ─────────────────────────────────────────────
// 6-MONTH COMPREHENSIVE (26 weeks)
// ─────────────────────────────────────────────
const sixMonthTasks: MCATTemplatePlanTask[] = [
  // Phase 1 (Weeks 0-7): Content Review
  ...weekTasks(0, [
    { title: 'Take MCAT Diagnostic Test', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review Results & Create Study Schedule', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'General Chemistry Review', type: 'LESSON', topicSlug: 'mcat-general-chemistry-mcat', dayOfWeek: 2 },
    { title: 'CARS Daily Practice', type: 'PRACTICE', dayOfWeek: 4 },
  ]),
  ...weekTasks(1, [
    { title: 'General Chemistry (continued)', type: 'LESSON', topicSlug: 'mcat-general-chemistry-mcat', dayOfWeek: 0 },
    { title: 'Gen Chem Quiz', type: 'QUIZ', topicSlug: 'mcat-general-chemistry-mcat', dayOfWeek: 2 },
    { title: 'Organic Chemistry Review', type: 'LESSON', topicSlug: 'mcat-organic-chemistry-mcat', dayOfWeek: 3 },
    { title: 'CARS Daily Practice', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(2, [
    { title: 'Organic Chemistry (continued)', type: 'LESSON', topicSlug: 'mcat-organic-chemistry-mcat', dayOfWeek: 0 },
    { title: 'OChem Quiz', type: 'QUIZ', topicSlug: 'mcat-organic-chemistry-mcat', dayOfWeek: 2 },
    { title: 'Physics: Mechanics Review', type: 'LESSON', topicSlug: 'mcat-physics-mechanics-mcat', dayOfWeek: 3 },
    { title: 'CARS Daily Practice', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(3, [
    { title: 'Physics: Mechanics (continued)', type: 'LESSON', topicSlug: 'mcat-physics-mechanics-mcat', dayOfWeek: 0 },
    { title: 'Physics Quiz', type: 'QUIZ', topicSlug: 'mcat-physics-mechanics-mcat', dayOfWeek: 2 },
    { title: 'Physics: Electricity Review', type: 'LESSON', topicSlug: 'mcat-physics-electricity-mcat', dayOfWeek: 3 },
    { title: 'CARS Daily Practice', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(4, [
    { title: 'Biochemistry Review', type: 'LESSON', topicSlug: 'mcat-biochemistry-foundations-mcat', dayOfWeek: 0 },
    { title: 'Electricity Quiz', type: 'QUIZ', topicSlug: 'mcat-physics-electricity-mcat', dayOfWeek: 1 },
    { title: 'Biochemistry (continued)', type: 'LESSON', topicSlug: 'mcat-biochemistry-foundations-mcat', dayOfWeek: 2 },
    { title: 'Biochem Quiz', type: 'QUIZ', topicSlug: 'mcat-biochemistry-foundations-mcat', dayOfWeek: 4 },
    { title: 'CARS Daily Practice', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(5, [
    { title: 'Cell Biology Review', type: 'LESSON', topicSlug: 'mcat-cell-biology-mcat', dayOfWeek: 0 },
    { title: 'Molecular Biology Review', type: 'LESSON', topicSlug: 'mcat-molecular-biology-mcat', dayOfWeek: 2 },
    { title: 'Cell Bio Quiz', type: 'QUIZ', topicSlug: 'mcat-cell-biology-mcat', dayOfWeek: 3 },
    { title: 'CARS Daily Practice', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(6, [
    { title: 'Organ Systems Review', type: 'LESSON', topicSlug: 'mcat-organ-systems-mcat', dayOfWeek: 0 },
    { title: 'Genetics & Evolution Review', type: 'LESSON', topicSlug: 'mcat-genetics-evolution-mcat', dayOfWeek: 2 },
    { title: 'Organ Systems Quiz', type: 'QUIZ', topicSlug: 'mcat-organ-systems-mcat', dayOfWeek: 3 },
    { title: 'CARS Daily Practice', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(7, [
    { title: 'Psychology & Behavior Review', type: 'LESSON', topicSlug: 'mcat-psychology-behavior-mcat', dayOfWeek: 0 },
    { title: 'Sociology Review', type: 'LESSON', topicSlug: 'mcat-sociology-mcat', dayOfWeek: 2 },
    { title: 'Psych Quiz', type: 'QUIZ', topicSlug: 'mcat-psychology-behavior-mcat', dayOfWeek: 3 },
    { title: 'Sociology Quiz', type: 'QUIZ', topicSlug: 'mcat-sociology-mcat', dayOfWeek: 4 },
    { title: 'CARS Daily Practice', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  // Phase 2 (Weeks 8-17): Practice & Review
  ...weekTasks(8, [
    { title: 'Chem/Phys Section Practice', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review Chem/Phys Results', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'Weak Area Review: Gen Chem', type: 'CUSTOM', dayOfWeek: 2 },
    { title: 'CARS Practice (4 passages)', type: 'PRACTICE', dayOfWeek: 4 },
  ]),
  ...weekTasks(10, [
    { title: 'Bio/Biochem Section Practice', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review Bio Results', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'Weak Area Review: Bio Topics', type: 'CUSTOM', dayOfWeek: 2 },
    { title: 'CARS Practice (4 passages)', type: 'PRACTICE', dayOfWeek: 4 },
  ]),
  ...weekTasks(12, [
    { title: 'Psych/Soc Section Practice', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review Psych/Soc Results', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'Anatomy & Physiology Review', type: 'LESSON', topicSlug: 'mcat-anatomy-physiology-mcat', dayOfWeek: 2 },
    { title: 'CARS Practice (5 passages)', type: 'PRACTICE', dayOfWeek: 4 },
  ]),
  ...weekTasks(14, [
    { title: 'Microbiology Review', type: 'LESSON', topicSlug: 'mcat-microbiology-mcat', dayOfWeek: 0 },
    { title: 'Full Chem/Phys + CARS Practice', type: 'PRACTICE', dayOfWeek: 2 },
    { title: 'Review Practice Results', type: 'CUSTOM', dayOfWeek: 3 },
    { title: 'Full Bio/Biochem + Psych/Soc Practice', type: 'PRACTICE', dayOfWeek: 4 },
  ]),
  ...weekTasks(16, [
    { title: 'Science Passage Strategy', type: 'LESSON', topicSlug: 'mcat-science-passage-strategy-mcat', dayOfWeek: 0 },
    { title: 'CARS Strategy Review', type: 'LESSON', topicSlug: 'mcat-cars-strategy-mcat', dayOfWeek: 1 },
    { title: 'Timed Section Practice', type: 'PRACTICE', dayOfWeek: 3 },
  ]),
  // Phase 3 (Weeks 18-25): Full-length practice & final review
  ...weekTasks(20, [
    { title: 'Full-Length Practice Test 1', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review Practice Test 1', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'Weak Area Remediation', type: 'CUSTOM', dayOfWeek: 3 },
    { title: 'CARS Practice', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(22, [
    { title: 'Full-Length Practice Test 2', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review Practice Test 2', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'Final Weak Area Review', type: 'CUSTOM', dayOfWeek: 3 },
  ]),
  ...weekTasks(24, [
    { title: 'Test Day Strategy Review', type: 'LESSON', topicSlug: 'mcat-test-day-strategy-mcat', dayOfWeek: 0 },
    { title: 'High-Yield Flashcard Sprint', type: 'FLASHCARD', dayOfWeek: 1 },
    { title: 'Light Review & Rest', type: 'CUSTOM', dayOfWeek: 3 },
    { title: 'Test Day!', type: 'CUSTOM', dayOfWeek: 5 },
  ]),
]

// ─────────────────────────────────────────────
// 12-MONTH MASTERY (52 weeks - abbreviated task list)
// ─────────────────────────────────────────────
const twelveMonthTasks: MCATTemplatePlanTask[] = [
  ...weekTasks(0, [
    { title: 'Take MCAT Diagnostic Test', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review Results & Set 12-Month Goals', type: 'CUSTOM', dayOfWeek: 1 },
    { title: 'General Chemistry Deep Dive', type: 'LESSON', topicSlug: 'mcat-general-chemistry-mcat', dayOfWeek: 3 },
  ]),
  ...weekTasks(2, [
    { title: 'General Chemistry Quiz', type: 'QUIZ', topicSlug: 'mcat-general-chemistry-mcat', dayOfWeek: 0 },
    { title: 'Organic Chemistry Deep Dive', type: 'LESSON', topicSlug: 'mcat-organic-chemistry-mcat', dayOfWeek: 1 },
    { title: 'CARS Practice (2 passages)', type: 'PRACTICE', dayOfWeek: 4 },
  ]),
  ...weekTasks(4, [
    { title: 'Organic Chemistry Quiz', type: 'QUIZ', topicSlug: 'mcat-organic-chemistry-mcat', dayOfWeek: 0 },
    { title: 'Physics: Mechanics Deep Dive', type: 'LESSON', topicSlug: 'mcat-physics-mechanics-mcat', dayOfWeek: 1 },
    { title: 'CARS Practice (2 passages)', type: 'PRACTICE', dayOfWeek: 4 },
  ]),
  ...weekTasks(6, [
    { title: 'Physics Quiz', type: 'QUIZ', topicSlug: 'mcat-physics-mechanics-mcat', dayOfWeek: 0 },
    { title: 'Physics: Electricity Deep Dive', type: 'LESSON', topicSlug: 'mcat-physics-electricity-mcat', dayOfWeek: 1 },
    { title: 'CARS Practice (2 passages)', type: 'PRACTICE', dayOfWeek: 4 },
  ]),
  ...weekTasks(8, [
    { title: 'Electricity Quiz', type: 'QUIZ', topicSlug: 'mcat-physics-electricity-mcat', dayOfWeek: 0 },
    { title: 'Biochemistry Deep Dive', type: 'LESSON', topicSlug: 'mcat-biochemistry-foundations-mcat', dayOfWeek: 1 },
    { title: 'Biochem Quiz', type: 'QUIZ', topicSlug: 'mcat-biochemistry-foundations-mcat', dayOfWeek: 4 },
  ]),
  ...weekTasks(10, [
    { title: 'Cell Biology Deep Dive', type: 'LESSON', topicSlug: 'mcat-cell-biology-mcat', dayOfWeek: 0 },
    { title: 'Molecular Biology Deep Dive', type: 'LESSON', topicSlug: 'mcat-molecular-biology-mcat', dayOfWeek: 2 },
    { title: 'CARS Practice (3 passages)', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(12, [
    { title: 'Cell Bio Quiz', type: 'QUIZ', topicSlug: 'mcat-cell-biology-mcat', dayOfWeek: 0 },
    { title: 'Organ Systems Deep Dive', type: 'LESSON', topicSlug: 'mcat-organ-systems-mcat', dayOfWeek: 1 },
    { title: 'CARS Practice (3 passages)', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(14, [
    { title: 'Organ Systems Quiz', type: 'QUIZ', topicSlug: 'mcat-organ-systems-mcat', dayOfWeek: 0 },
    { title: 'Genetics & Evolution Deep Dive', type: 'LESSON', topicSlug: 'mcat-genetics-evolution-mcat', dayOfWeek: 1 },
    { title: 'Genetics Quiz', type: 'QUIZ', topicSlug: 'mcat-genetics-evolution-mcat', dayOfWeek: 4 },
  ]),
  ...weekTasks(16, [
    { title: 'Anatomy & Physiology Review', type: 'LESSON', topicSlug: 'mcat-anatomy-physiology-mcat', dayOfWeek: 0 },
    { title: 'Microbiology Review', type: 'LESSON', topicSlug: 'mcat-microbiology-mcat', dayOfWeek: 2 },
    { title: 'CARS Practice (3 passages)', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(18, [
    { title: 'Psychology & Behavior Deep Dive', type: 'LESSON', topicSlug: 'mcat-psychology-behavior-mcat', dayOfWeek: 0 },
    { title: 'Sociology Deep Dive', type: 'LESSON', topicSlug: 'mcat-sociology-mcat', dayOfWeek: 2 },
    { title: 'Psych/Soc Quizzes', type: 'QUIZ', topicSlug: 'mcat-psychology-behavior-mcat', dayOfWeek: 4 },
  ]),
  // Phase 2: Practice (weeks 20-36)
  ...weekTasks(20, [
    { title: 'Chem/Phys Section Practice', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review & Remediate', type: 'CUSTOM', dayOfWeek: 2 },
    { title: 'CARS Practice (4 passages)', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(24, [
    { title: 'Bio/Biochem Section Practice', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review & Remediate', type: 'CUSTOM', dayOfWeek: 2 },
    { title: 'CARS Practice (4 passages)', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(28, [
    { title: 'Psych/Soc Section Practice', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review & Remediate', type: 'CUSTOM', dayOfWeek: 2 },
    { title: 'CARS Strategy Review', type: 'LESSON', topicSlug: 'mcat-cars-strategy-mcat', dayOfWeek: 4 },
  ]),
  ...weekTasks(32, [
    { title: 'Full-Length Practice Test 1', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Review & Remediate', type: 'CUSTOM', dayOfWeek: 2 },
    { title: 'Science Passage Strategy', type: 'LESSON', topicSlug: 'mcat-science-passage-strategy-mcat', dayOfWeek: 4 },
  ]),
  ...weekTasks(36, [
    { title: 'Full-Length Practice Test 2', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Comprehensive Review', type: 'CUSTOM', dayOfWeek: 2 },
  ]),
  // Phase 3: Final prep (weeks 40-51)
  ...weekTasks(40, [
    { title: 'Full-Length Practice Test 3', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Targeted Remediation', type: 'CUSTOM', dayOfWeek: 2 },
    { title: 'CARS Practice (5 passages)', type: 'PRACTICE', dayOfWeek: 5 },
  ]),
  ...weekTasks(44, [
    { title: 'Full-Length Practice Test 4', type: 'PRACTICE', dayOfWeek: 0 },
    { title: 'Final Weak Area Review', type: 'CUSTOM', dayOfWeek: 2 },
  ]),
  ...weekTasks(48, [
    { title: 'High-Yield Review Sprint', type: 'FLASHCARD', dayOfWeek: 0 },
    { title: 'Test Day Strategy', type: 'LESSON', topicSlug: 'mcat-test-day-strategy-mcat', dayOfWeek: 2 },
    { title: 'Light Review', type: 'CUSTOM', dayOfWeek: 4 },
  ]),
  ...weekTasks(51, [
    { title: 'Final Light Review', type: 'CUSTOM', dayOfWeek: 0 },
    { title: 'Rest & Prepare', type: 'CUSTOM', dayOfWeek: 2 },
    { title: 'Test Day!', type: 'CUSTOM', dayOfWeek: 4 },
  ]),
]

export const MCAT_STUDY_PLANS: MCATStudyPlanTemplate[] = [
  {
    id: '3-month-intensive',
    title: '3-Month MCAT Intensive',
    description: 'A fast-paced, intensive study plan covering all MCAT content with section practices and full-length tests. Best for students who already have foundational knowledge.',
    durationWeeks: 12,
    targetImprovement: '5–10 points',
    weeklyHours: '25–35 hours',
    difficulty: 'Advanced',
    tasks: threeMonthTasks,
  },
  {
    id: '6-month-comprehensive',
    title: '6-Month Comprehensive Plan',
    description: 'A balanced plan with thorough content review, spaced repetition, regular CARS practice, and multiple full-length practice tests. Ideal for most pre-med students.',
    durationWeeks: 26,
    targetImprovement: '10–15 points',
    weeklyHours: '15–25 hours',
    difficulty: 'Intermediate',
    tasks: sixMonthTasks,
  },
  {
    id: '12-month-mastery',
    title: '12-Month MCAT Mastery',
    description: 'The most comprehensive plan with deep content review, extensive practice, multiple full-length tests, and ample time for remediation. For students starting from scratch or targeting 520+.',
    durationWeeks: 52,
    targetImprovement: '15–20+ points',
    weeklyHours: '10–20 hours',
    difficulty: 'Beginner',
    tasks: twelveMonthTasks,
  },
]

export function resolveMCATTemplateTasks(
  template: MCATStudyPlanTemplate,
  startDate: Date,
): { title: string; type: string; topicSlug?: string; dueDate: Date; sortOrder: number }[] {
  return template.tasks.map((t, i) => {
    const dueDate = new Date(startDate)
    dueDate.setDate(dueDate.getDate() + t.weekOffset * 7 + t.dayOfWeek)
    return {
      title: t.title,
      type: t.type,
      topicSlug: t.topicSlug,
      dueDate,
      sortOrder: i,
    }
  })
}
