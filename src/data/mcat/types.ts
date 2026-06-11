/**
 * Shared content model for MCAT passage-based practice.
 *
 * The real MCAT is ~90% passage-based: a 200-400 word passage (often with a
 * figure or data table) followed by 4-7 questions, plus a few standalone
 * "discrete" questions per section. This model captures that shape and feeds
 * BOTH surfaces:
 *   - the full-length practice exam (assembled to AAMC section proportions)
 *   - the per-section passage practice pages (e.g. the CARS library)
 *
 * Figures are expressed as markdown (tables, or a described "Figure 1: ..."
 * block) inside passageText/figure — no binary image assets — so everything
 * renders through the existing rich-text/KaTeX pipeline.
 */

export type MCATSection = 'chem-phys' | 'cars' | 'bio-biochem' | 'psych-soc'

export const MCAT_SECTION_META: Record<
  MCATSection,
  { id: MCATSection; name: string; short: string; questions: number; minutes: number }
> = {
  'chem-phys': { id: 'chem-phys', name: 'Chemical & Physical Foundations of Biological Systems', short: 'Chem/Phys', questions: 59, minutes: 95 },
  cars: { id: 'cars', name: 'Critical Analysis & Reasoning Skills', short: 'CARS', questions: 53, minutes: 90 },
  'bio-biochem': { id: 'bio-biochem', name: 'Biological & Biochemical Foundations of Living Systems', short: 'Bio/Biochem', questions: 59, minutes: 95 },
  'psych-soc': { id: 'psych-soc', name: 'Psychological, Social, & Biological Foundations of Behavior', short: 'Psych/Soc', questions: 59, minutes: 95 },
}

/** Real-exam ordering of the four sections. */
export const MCAT_SECTION_ORDER: MCATSection[] = ['chem-phys', 'cars', 'bio-biochem', 'psych-soc']

export interface MCATPassageQuestion {
  /** Question stem. MCAT items are 4-option; passage-bound items reference the passage. */
  question: string
  options: [string, string, string, string]
  /** Index 0-3 of the correct option. */
  correctAnswer: number
  /** Why the key is right AND, for the best items, why the traps are wrong. */
  explanation: string
  /**
   * Tag: a content category (e.g. "Amino acids") or a CARS reasoning skill
   * (e.g. "inference", "main-idea", "strengthen-weaken").
   */
  skill?: string
  /**
   * Auto/AI-authored answer keys awaiting SME review. Surfaced in the UI as a
   * subtle "draft" marker so we never silently present an unverified key as
   * canonical. CARS keys especially are contestable and should default to true.
   */
  needsReview?: boolean
}

export interface MCATPassage {
  /** Stable id, e.g. "cars-hum-01", "cp-biochem-03". */
  id: string
  section: MCATSection
  /** Fine-grained discipline/genre: 'biochemistry' | 'physics' | 'humanities' | 'sociology' | ... */
  discipline: string
  title: string
  /**
   * The passage body (markdown; may embed a data table). For CARS this is the
   * full 500-600 word humanities/social-science passage. For science passages
   * it's the experimental/expository prose.
   */
  passageText: string
  /**
   * Optional figure/data block rendered after the passage (markdown table or a
   * "Figure 1." described block). Kept separate so the UI can frame it.
   */
  figure?: string
  /** 4-7 passage-bound questions. */
  questions: MCATPassageQuestion[]
  /** Set when the whole passage (text + keys) is AI-authored and unreviewed. */
  needsReview?: boolean
}

/** A standalone (non-passage) item, used sparingly the way the real exam does. */
export interface MCATDiscreteQuestion extends MCATPassageQuestion {
  id: string
  section: MCATSection
  discipline: string
}

/** Count questions across a passage list. */
export function countQuestions(passages: MCATPassage[]): number {
  return passages.reduce((n, p) => n + p.questions.length, 0)
}
