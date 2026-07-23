/**
 * Shared shape for MCAT competitive-mode questions authored specifically for
 * head-to-head play (short stems, fast to read, one concept each).
 *
 * These live alongside — not inside — the MCAT exit-quiz pools: the exit
 * quizzes stay the assessment bank, while these fill out the competitive
 * hierarchy so every subtopic has enough questions for a full 10-question
 * match. The MCAT bank merges both sources.
 *
 * LaTeX rules (learned the hard way from the flashcard audit):
 *  - Write math inside `$…$` explicitly. Never rely on auto-formatting.
 *  - In these single-quoted TS strings a LaTeX backslash must be DOUBLED
 *    (`'$\\frac{a}{b}$'`), otherwise `\f`, `\t`, `\n` become control chars.
 *  - Prefer `_{}`/`^{}` over unicode sub/superscripts.
 *  - scripts/verify-mcat-questions.ts KaTeX-compiles every segment in CI-able
 *    form; run it after editing.
 */
export interface McatBankQuestion {
  question: string
  options: string[]
  /** Index into `options` of the correct choice. */
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  /** Must match a subtopic slug declared in mcat-bank.ts. */
  subtopicSlug: string
}
