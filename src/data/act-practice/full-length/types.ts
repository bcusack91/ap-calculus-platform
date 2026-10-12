/**
 * Full-length Enhanced ACT practice forms (2025+ format), authored item by item.
 *
 * One form = four section files, src/data/act-practice/full-length/fl<N>-<section>.ts:
 *   English  — ActFLPassage[]  5 passages × 10 questions = 50, 35 min
 *   Math     — ActFLQuestion[] 45 discrete questions,          50 min
 *   Reading  — ActFLPassage[]  4 passages × 9 questions  = 36, 40 min
 *   Science  — ActFLPassage[]  6 passages, 40 questions total,   40 min (optional section)
 * Composite = mean of English, Math, Reading (Science reported separately).
 *
 * English passages mark underlined portions inline as `{{n:underlined text}}`
 * and bare positions (e.g. "where should sentence 3 go") as `{{n}}`, where n
 * is the question's `marker`. The runner renders the text underlined with a
 * superscript number. Math may use $…$ LaTeX and markdown tables; Science and
 * Reading carry tables and figure DESCRIPTIONS as markdown — no images.
 */

export type ActFLSection = 'english' | 'math' | 'reading' | 'science'

/**
 * ACT reporting categories (Enhanced ACT):
 *  English: POW Production of Writing · KLA Knowledge of Language · CSE Conventions of Standard English
 *  Math:    PHM-N Number & Quantity · PHM-A Algebra · PHM-F Functions · PHM-G Geometry ·
 *           PHM-S Statistics & Probability · IES Integrating Essential Skills
 *  Reading: KID Key Ideas & Details · CS Craft & Structure · IKI Integration of Knowledge & Ideas
 *  Science: IOD Interpretation of Data · SIN Scientific Investigation ·
 *           EMI Evaluation of Models, Inferences & Experimental Results
 */
export type ActFLSkill =
  | 'POW' | 'KLA' | 'CSE'
  | 'PHM-N' | 'PHM-A' | 'PHM-F' | 'PHM-G' | 'PHM-S' | 'IES'
  | 'KID' | 'CS' | 'IKI'
  | 'IOD' | 'SIN' | 'EMI'

export interface ActFLQuestion {
  /** Stable id, e.g. 'act-fl1-e-03-q7' or 'act-fl1-m-12'. Never reuse. */
  id: string
  question: string
  options: [string, string, string, string]
  correctIndex: 0 | 1 | 2 | 3
  /** Why the key is right (shown after the question in review). */
  explanation: string
  /** Why EACH choice is right or wrong, aligned to `options` order. */
  optionExplanations: [string, string, string, string]
  skill: ActFLSkill
  /** English only: the `{{n…}}` marker in the passage this question is about (omit for whole-passage questions). */
  marker?: number
  /** 'easy' | 'medium' | 'hard' — authored estimate, used for analytics only. */
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface ActFLPassage {
  /** e.g. 'act-fl1-e-03', 'act-fl2-r-02', 'act-fl3-s-05'. */
  id: string
  title: string
  /**
   * English: essay genre ('narrative' | 'informative' | 'argumentative').
   * Reading: 'literary-narrative' | 'social-science' | 'humanities' | 'natural-science' (one may be 'paired').
   * Science: 'data-representation' | 'research-summary' | 'conflicting-viewpoints'.
   */
  kind: string
  /** Markdown. English carries {{n:…}} markers; Science/Reading may include tables. */
  text: string
  questions: ActFLQuestion[]
}

export interface ActFLForm {
  form: number
  english: ActFLPassage[]
  math: ActFLQuestion[]
  reading: ActFLPassage[]
  science: ActFLPassage[]
}

/** Section blueprint (counts and minutes) for the Enhanced ACT. */
export const ACT_FL_BLUEPRINT: Record<ActFLSection, { questions: number; minutes: number; optional?: boolean }> = {
  english: { questions: 50, minutes: 35 },
  math: { questions: 45, minutes: 50 },
  reading: { questions: 36, minutes: 40 },
  science: { questions: 40, minutes: 40, optional: true },
}
