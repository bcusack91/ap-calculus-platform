/**
 * Shared shape for competitive-specific SAT questions.
 *
 * These supplement the sat-math-bank / sat-rw-bank pools so every official
 * College Board skill has a full match's worth (40+) of questions. Tagged by
 * SKILL slug (from sat-bank.ts), not by domain — the skill is the finest
 * playable unit and everything broader is derived from it.
 */
export interface SatBankQuestion {
  /** 'sat-skill-<key>' — must exist in SAT_SECTIONS or the verifier fails. */
  skillSlug: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}
