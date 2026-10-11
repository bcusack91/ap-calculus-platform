/**
 * One question's per-option explanations, keyed by its question key. `options`
 * are the option texts the explanations were written against (in the same
 * order as `explanations`); readers re-align by text to whatever order the
 * question is shown in.
 */
export interface SatOptionExplanationEntry {
  options: string[]
  explanations: string[]
}

export type SatOptionExplanationMap = Record<string, SatOptionExplanationEntry>
