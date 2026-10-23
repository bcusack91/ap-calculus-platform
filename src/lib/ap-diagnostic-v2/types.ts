/**
 * AP diagnostic v2: shared types for the item banks, the blueprints, the
 * generated sittings and the scored results.
 *
 * v2 replaces the 10 fixed forms (drawn from the exit-quiz pools) with a
 * dedicated bank per course under `src/data/ap-diagnostic-v2/<course>/`:
 * per-unit quotas from the CED exam weightings, a difficulty mix inside every
 * unit, stimulus sets (tables, graphs, passages, figures) served whole in
 * authored order, cross-device seen tracking, and a ± band on the 1–5
 * estimate. Attempts store `results.version = 2` under the course's existing
 * category prefix (`<prefix>-v2`), so history, plan-status, the predictor and
 * the teacher views read them unchanged.
 *
 * Author-facing rules live in the brief (ap-phase1-pipeline/AP-DIAG-V2-BRIEF.md)
 * and are enforced by scripts/check-ap-diagnostic-v2.ts.
 */
import type { MCATFigureSpec } from '@/data/mcat/types'
import type { DiagnosticDataTable } from '@/components/MCATDiagnosticVisuals'

export type ApDiagV2Difficulty = 'easy' | 'medium' | 'hard'
export const AP_DIAG_V2_DIFFICULTIES: readonly ApDiagV2Difficulty[] = ['easy', 'medium', 'hard']

/** Course slugs that have a v2 blueprint (DB Course.slug). */
export type ApDiagV2Course = 'ap-chemistry' | 'ap-biology' | 'ap-physics-1' | 'ap-calculus-ab' | 'ap-calculus-bc' | 'ap-precalculus'

/**
 * A shared stimulus (AP "question set"). Every item that points at it is
 * served together, consecutively, in the order the items appear in the bank.
 *
 * - `table`:   a data table — `dataTable` (MCAT table shape) or a markdown pipe table in `content`.
 * - `graph`:   a plotted graph — `chart` (MCATFigure: line / scatter / bar, x placed by value).
 * - `passage`: a written experiment, scenario or source — prose in `content`.
 * - `figure`:  a labelled diagram (free-body diagram, circuit, apparatus, slope field…) — authored
 *              inline `svg` drawn with `currentColor` so it reads in light and dark mode. `content`
 *              must still say in words what the figure shows (screen readers; review copies).
 */
export interface ApDiagV2Stimulus {
  id: string
  title: string
  kind: 'table' | 'graph' | 'passage' | 'figure'
  /** Rich text (renderRichText): prose, `$…$` math, markdown pipe tables, `**bold**`. */
  content: string
  dataTable?: DiagnosticDataTable
  chart?: MCATFigureSpec
  svg?: string
}

/** One multiple-choice item in a course's v2 bank. */
export interface ApDiagV2Item {
  /** Stable, unique across the course bank. Stimulus-set items: `<stimulusId>-q<n>`, n = 1, 2, … in authored order. */
  id: string
  stem: string
  /** Exactly 4 options for these courses (CED: A–D). */
  options: string[]
  correctIndex: number
  explanation: string
  /** Blueprint unit id (`unit-1` … `unit-10`). */
  unit: string
  /** Production Topic slug (tests/fixtures/ap-lesson-topic-slugs.json) whose lesson teaches this item. */
  topicSlug: string
  difficulty: ApDiagV2Difficulty
  stimulusId?: string
  /**
   * Authoring metadata only (the sitting has no calculator section): true marks
   * an item written in the exam's Part B "graphing calculator allowed" style —
   * a context or data model whose numbers are still hand-doable. Absent =
   * Part A (no-calculator) style. Lets a bank report its Part A / Part B mix.
   */
  calculator?: boolean
}

export interface ApDiagV2Bank {
  course: ApDiagV2Course
  stimuli: ApDiagV2Stimulus[]
  items: ApDiagV2Item[]
}

export interface ApDiagV2Unit {
  /** `unit-<n>`; the scored domain id. */
  id: string
  number: number
  name: string
  /** CED "Exam Weighting" range for the multiple-choice section, in percent. */
  weight: readonly [number, number]
  /** Production topics this unit's items may be tagged with; the first ones are the fallback recommendations. */
  topicSlugs: string[]
}

export interface ApDiagV2Blueprint {
  course: ApDiagV2Course
  label: string
  /** DiagnosticTest.category prefix the course already uses; v2 stores `${categoryPrefix}-v2`. */
  categoryPrefix: string
  /** Seen-tracking key (`/api/<seenCourse>-diagnostic/seen`), also the API route base. */
  seenCourse: 'ap-chem' | 'ap-bio' | 'ap-physics1' | 'calcab' | 'calcbc' | 'ap-precalculus'
  /**
   * v2 courses whose bank this course's bank contains (AP Calculus BC = the AB
   * bank + BC-only items). Seen tracking also reads those courses' attempts,
   * so a student who sat the included course's v2 is not re-served its items.
   */
  includes?: ApDiagV2Course[]
  /** The diagnostic page path. */
  pagePath: string
  /** Questions per sitting. */
  length: number
  timeLimitMinutes: number
  /** Stimulus sets served per sitting (when the bank has enough). */
  setsPerSitting: number
  /** ReferenceSheetModal course slug, when the real exam provides a sheet. */
  referenceSheet?: string
  units: ApDiagV2Unit[]
  /** Display names of the production topics (recommendation labels). */
  topicNames: Record<string, string>
  /** Where the weights come from. */
  weightSource: string
}

/** An item as served in a sitting (and stored in `results.review.questions`). */
export interface ApDiagV2Question {
  id: string
  question: string
  options: string[]
  /** Correct option index in the order SHOWN. */
  correctAnswer: number
  explanation: string
  /** Unit id — the scored domain. */
  domain: string
  topicSlug: string
  difficulty: ApDiagV2Difficulty
  /** The stimulus, in the MCAT passage shape the review layer already renders. */
  passage?: ApDiagV2Passage
}

export interface ApDiagV2Passage {
  id: string
  title: string
  body: string
  kind: ApDiagV2Stimulus['kind']
  dataTable?: DiagnosticDataTable
  chart?: MCATFigureSpec
  /** Authored SVG; rendered only after isSafeSvg. Review pages re-attach it from the bank. */
  svg?: string
}

export interface ApDiagV2TestData {
  version: 2
  course: ApDiagV2Course
  questions: ApDiagV2Question[]
  domains: { id: string; name: string }[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface ApDiagV2DomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface ApDiagV2RecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface ApDiagV2Results {
  version: 2
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  /** ± band on the 1–5 estimate (binomial SE of the percent correct, mapped through the cutoffs). */
  scoreRange: { low: number; high: number }
  /** The same band in percent correct. */
  percentRange: { low: number; high: number }
  domains: ApDiagV2DomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: ApDiagV2RecommendedTopic[]
}
