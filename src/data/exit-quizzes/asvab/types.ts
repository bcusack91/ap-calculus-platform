/**
 * Item shape of the ASVAB exit-quiz pools (src/data/exit-quizzes/asvab/<unit>.ts),
 * identical to src/data/exit-quizzes/ap-precalculus.ts. Platform-owned: content
 * agents import it, they do not edit it.
 */
export interface AsvabExitQuestion {
  question: string
  options: string[]
  /** Index into `options` (options are shuffled at display). */
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  /** The unit (Category slug without `asvab-`), e.g. 'arithmetic-reasoning'. */
  domain: string
  /** The topic slug (course-includes ASVAB_CATEGORIES), e.g. 'asvab-ar-ratios-rates'. */
  topicSlug: string
  /** Lesson part (1-based) that teaches this item; a missed item sends the student back to it. */
  part: number
  /** Unit-test form set (optional; unit tests draw every item when absent). */
  formSet?: 'A' | 'B' | 'both'
  /**
   * Optional picture drawn above the question: one inline `<svg viewBox=…>`
   * that passes isSafeSvg (src/lib/safe-svg.ts; drawing tags only, currentColor
   * + the fig-* theme classes of src/lib/lesson-figure.ts). Renderers inject it
   * only after that check. Assembling Objects items put the top box and the
   * four numbered answer figures in this one SVG and use the options
   * 'Figure 1'..'Figure 4', which every surface keeps in authored order
   * (src/lib/shuffle-options.ts keepsAuthoredOrder).
   */
  figure?: string
  /** Text alternative for `figure` (what is given, never which choice is right). */
  figureAlt?: string
}
