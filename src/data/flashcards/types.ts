/**
 * Seed flashcards for topics that shipped without any.
 *
 * LaTeX rule: write math explicitly inside `$…$`. Any card containing a `$`
 * bypasses formatFlashcardContent's auto-wrapper entirely (it returns early
 * when it sees a delimiter), which is exactly what we want — the auto-wrapper
 * is what produced the render bugs the flashcard audit found. In these
 * single-quoted TS strings a LaTeX backslash must be DOUBLED (`'$\\frac{a}{b}$'`).
 *
 * Verify with: npx tsx scripts/verify-seed-flashcards.ts
 */
export interface SeedFlashcard {
  front: string
  back: string
  hint?: string
}

/** topic slug → its cards. */
export type FlashcardsByTopic = Record<string, SeedFlashcard[]>
