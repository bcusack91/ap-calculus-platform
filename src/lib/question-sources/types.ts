/**
 * Shared shape for one rebuilt question in a review (attempt review page,
 * mistake log, mistake re-quiz). Every question source (exit quiz, unit test,
 * diagnostic, MCAT full-length / practice, SAT practice) exposes a pure helper
 * that turns stored attempt data back into these items.
 */
export interface ReviewPassage {
  id: string;
  title: string;
  body: string;
  /** Opaque figure payload (source-specific); rendered by the review UI if present. */
  figure?: unknown;
}

export interface ReviewItem {
  /** Position of the question within its attempt (matches QuestionActivity.itemIndex). */
  index: number;
  /** questionKey() of the question as defined in its bank ('q:' + 16 hex). */
  questionKey: string;
  question: string;
  /** Options in the order they were SHOWN to the student. */
  options: string[];
  /** Correct option index in the shown order. */
  correctIndex: number;
  explanation: string;
  passage?: ReviewPassage | null;
  /** Shown-order index the student picked; null = skipped. */
  chosenIndex: number | null;
  /** Typed answer for grid-ins. */
  chosenText?: string | null;
  flagged: boolean;
  durationMs?: number | null;
  topicSlug?: string;
  discipline?: string;
  /** Typed-answer (SAT grid-in) key. Server-side grading only — never sent before an answer. */
  gridIn?: { correctAnswer: number; acceptableAnswers?: number[]; tolerance?: number };
  /** Server's verdict where the options can't say (grid-ins). */
  correct?: boolean;
  /** Reasoning-skill tag (MCAT CARS: 'main-idea', 'inference', … — see src/lib/cars-skills.ts). */
  skill?: string;
  /**
   * One authored explanation per option, aligned to the SHOWN order (`options`).
   * Sources remap from the bank's original order when options were shuffled.
   */
  optionExplanations?: string[];
}
