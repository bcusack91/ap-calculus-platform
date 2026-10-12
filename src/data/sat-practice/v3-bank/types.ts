/**
 * SAT form v3 bank item: an authored, digital-SAT-format question that v3
 * forms draw in place of the v2 "lesson drill" items. Options are served in
 * authored order, so `optionExplanations` line up with `options` as shown.
 */
export type SatV3BankSkill = 'boundaries' | 'form-structure-sense'

export interface SatV3BankItem {
  /** Stable bank id ('sat-v3-sec-001' …); used as the question id on SAT forms. Never renumber. */
  id: string
  /** The short text with one blank (______), a blank line, then the standard SAT stem line. */
  question: string
  options: [string, string, string, string]
  correctIndex: 0 | 1 | 2 | 3
  explanation: string
  /** Why each choice is right or wrong, aligned to `options`; no letter/position references. */
  optionExplanations: [string, string, string, string]
  difficulty: 'easy' | 'medium' | 'hard'
  skill: SatV3BankSkill
  /** An existing Standard English Conventions lesson slug (RW_DOMAIN_SLUGS.conventions). */
  topicSlug: string
}
