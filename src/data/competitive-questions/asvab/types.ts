/**
 * Item shape of the ASVAB competitive banks (src/data/competitive-questions/asvab/<unit>.ts):
 * the OptionQuestion shape of precalc-bank.ts items. Platform-owned: content
 * agents import it, they do not edit it.
 */
export interface AsvabCompetitiveQuestion {
  /** Unique across the whole ASVAB bank: unit n owns ids n*1000+1 .. n*1000+999 (WK 1001+, PC 2001+, ... test prep 11001+). */
  id: number
  question: string
  options: string[]
  /** Index into `options` (every competitive surface shuffles options). */
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  /** The topic slug (course-includes ASVAB_CATEGORIES), e.g. 'asvab-ar-ratios-rates'. */
  topicSlug: string
  /**
   * Optional picture (same rules as AsvabExitQuestion.figure: one isSafeSvg
   * inline SVG). Match gameData stores only a reference to it
   * (`figureRef: 'asvab:<id>'`); clients fetch the SVG from
   * /api/competitive/figure/<ref> (src/lib/competitive-figures.ts).
   */
  figure?: string
  /** Text alternative for `figure` (what is given, never which choice is right). */
  figureAlt?: string
}
