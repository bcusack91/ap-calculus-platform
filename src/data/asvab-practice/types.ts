import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * One ASVAB practice-test item (form 1). A FullLengthPracticeExam MCQ plus the
 * fields the form checker (scripts/check-asvab-practice-form.ts) needs:
 * - `topic`: one of the 35 ASVAB topic slugs (course-includes ASVAB_CATEGORIES)
 *   from the subtest's own Category;
 * - `difficulty`: the CAT is adaptive, so a fixed form samples easy → hard
 *   inside each subtest (authored in that order);
 * - `optionExplanations`: required here (why each choice is right or wrong,
 *   aligned to the authored `options`, naming choices by content, never by letter);
 * - `figureHtml` (MCQItem): trusted generated SVG drawn above the question
 *   (circuits, machines, geometry, Assembling Objects). Figure-choice items put
 *   one SVG string in each option.
 */
export type AsvabPracticeItem = MCQItem & {
  difficulty: 'easy' | 'medium' | 'hard'
  optionExplanations: string[]
}
