/**
 * ASVAB scoring: standard-score estimates, VE, the AFQT percentile and the
 * service line scores (composites).
 *
 * Every rule here comes from asvab-pipeline/ASVAB-FACTS.md, whose primary
 * source for scoring is the DMDC report that defines the current scale:
 *
 *   [SEGALL] D. O. Segall, "Development and Evaluation of the 1997 ASVAB Score
 *   Scale", Defense Manpower Data Center, July 2004 (implemented 2004),
 *   https://www.officialasvab.com/wp-content/uploads/2019/08/1997score_scale.pdf
 *
 * WHAT IS OFFICIAL (exact):
 *   - Subtest standard scores: mean 50, SD 10 in the 1997 youth sample.
 *   - VE = optimally weighted WK + PC (PC gets 0.61934 of WK's weight),
 *     re-standardized to mean 50 / SD 10 [SEGALL §2.3, eq. 2.3 + Table 2.4].
 *   - AS = equal-weighted AI + SI, re-standardized [SEGALL §2.3, eq. 2.4].
 *   - AFQT raw = AR + MK + 2·VE (rounded standard scores) [SEGALL §2.4].
 *   - AFQT raw -> percentile: Table 2.5, embedded below exactly.
 *   - Air Force M/A/G/E percentiles: Tables C.1-C.4, embedded below exactly.
 *   - Marine Corps GT/MM/EL/CL and Army GT rescaling: §2.5.2-2.5.3.
 *   - Army CL/CO/EL/FA/GM/MM/OF/SC/ST: Table 2.7 weights ('97 metric).
 *   - Navy composites: unit-weighted raw sums [SEGALL Table 5.1; OA-JOBS].
 *
 * WHAT IS AN ESTIMATE:
 *   The step from "questions answered correctly" to a standard score. The
 *   CAT-ASVAB is adaptive and IRT-scored: your standard score depends on WHICH
 *   items you got right, not on a count, and no public number-right ->
 *   standard-score table exists for the CAT (ASVAB-FACTS §2). So every
 *   practice-based score on the site is an ESTIMATE shown with a range:
 *   estimateStandardScore() turns a fixed-form tally into a standard score
 *   with an uncertainty band, and everything downstream (VE, AFQT, line
 *   scores) carries that band through. Only scores typed in from a real
 *   ASVAB score report are exact.
 *
 * CALIBRATION NOTE (read before changing STANDARD_SCORE_ANCHORS):
 *   The anchors are a conservative, uncalibrated judgment, NOT fitted to
 *   real students yet. Following the lesson of the SAT/MCAT curves (never
 *   anchor "half right" to the scale midpoint), the average 18-23-year-old is
 *   placed at ~58% correct on our mixed-difficulty forms, chance guessing on
 *   4-choice items (25%) sits about 1.8 SD below average, and a perfect
 *   fixed-form run tops out at 70 (+2 SD) before shrinkage. Re-anchor only
 *   with (Study Mondo %, real ASVAB standard score or AFQT) pairs.
 */
import { ASVAB_CATEGORIES } from '@/lib/course-includes'

export type AsvabSubtestId = 'GS' | 'AR' | 'WK' | 'PC' | 'MK' | 'EI' | 'AI' | 'SI' | 'MC' | 'AO'

export interface AsvabSubtest {
  id: AsvabSubtestId
  name: string
  /** The course Category (course-includes ASVAB_CATEGORIES) that teaches it. */
  categorySlug: string
  /** Counts toward the AFQT (WK, PC, AR, MK). */
  afqt: boolean
}

const cat = (slug: string) => {
  const c = ASVAB_CATEGORIES.find((x) => x.slug === slug)
  if (!c) throw new Error(`unknown ASVAB category ${slug}`)
  return c.slug
}

/** The ten CAT-ASVAB subtests in course (unit) order. */
export const ASVAB_SUBTESTS: AsvabSubtest[] = [
  { id: 'WK', name: 'Word Knowledge', categorySlug: cat('asvab-word-knowledge'), afqt: true },
  { id: 'PC', name: 'Paragraph Comprehension', categorySlug: cat('asvab-paragraph-comprehension'), afqt: true },
  { id: 'AR', name: 'Arithmetic Reasoning', categorySlug: cat('asvab-arithmetic-reasoning'), afqt: true },
  { id: 'MK', name: 'Mathematics Knowledge', categorySlug: cat('asvab-mathematics-knowledge'), afqt: true },
  { id: 'GS', name: 'General Science', categorySlug: cat('asvab-general-science'), afqt: false },
  { id: 'EI', name: 'Electronics Information', categorySlug: cat('asvab-electronics-information'), afqt: false },
  { id: 'AI', name: 'Auto Information', categorySlug: cat('asvab-auto-information'), afqt: false },
  { id: 'SI', name: 'Shop Information', categorySlug: cat('asvab-shop-information'), afqt: false },
  { id: 'MC', name: 'Mechanical Comprehension', categorySlug: cat('asvab-mechanical-comprehension'), afqt: false },
  { id: 'AO', name: 'Assembling Objects', categorySlug: cat('asvab-assembling-objects'), afqt: false },
]

/** The four AFQT subtests. */
export const AFQT_SUBTESTS: AsvabSubtestId[] = ASVAB_SUBTESTS.filter((s) => s.afqt).map((s) => s.id)

export type AfqtSubtestId = 'WK' | 'PC' | 'AR' | 'MK'

/** The subtest a topic slug belongs to (via its course Category), or null. */
export function subtestOfTopic(topicSlug: string): AsvabSubtestId | null {
  const c = ASVAB_CATEGORIES.find((x) => x.topics.includes(topicSlug))
  return ASVAB_SUBTESTS.find((s) => s.categorySlug === c?.slug)?.id ?? null
}

/**
 * The subtest named by a free-form label: an id ('MK'), a name ('Word
 * Knowledge'), a unit id ('arithmetic-reasoning'), a category slug, or a topic
 * slug. Used to read section/domain labels stored by other surfaces.
 */
export function subtestFromLabel(label: string | null | undefined): AsvabSubtestId | null {
  if (!label) return null
  const raw = label.trim()
  const up = raw.toUpperCase()
  const byId = ASVAB_SUBTESTS.find((s) => s.id === up)
  if (byId) return byId.id
  const fromTopic = subtestOfTopic(raw)
  if (fromTopic) return fromTopic
  const norm = raw.toLowerCase().replace(/^asvab-/, '').replace(/[^a-z]+/g, ' ').trim()
  for (const s of ASVAB_SUBTESTS) {
    const name = s.name.toLowerCase()
    const unit = s.categorySlug.replace(/^asvab-/, '').replace(/-/g, ' ')
    if (norm === name || norm === unit || norm.startsWith(`${name} `) || norm.startsWith(`${unit} `)) return s.id
  }
  return null
}

/* ------------------------------------------------------------------ */
/*  Official tables [SEGALL] — embedded exactly                        */
/* ------------------------------------------------------------------ */

interface PercentileTable {
  /** Lowest listed sum; every sum at or below it maps to pct[0]. */
  min: number
  /** Highest listed sum; every sum at or above it maps to the last entry. */
  max: number
  /** pct[i] = percentile for sum (min + i). */
  pct: number[]
}

/**
 * '97 AFQT Percentile Conversion, [SEGALL] Table 2.5: AFQT raw sum
 * (AR + MK + 2·VE) -> AFQT percentile. ≤109 -> 1, ≥269 -> 99. Percentiles
 * 37, 58 and 65 never occur (cumulative rounding skips them; ASVAB-FACTS §2).
 */
export const AFQT_PERCENTILE_TABLE: PercentileTable = {
  min: 109,
  max: 269,
  pct: [
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 9,
    9, 9, 9, 10, 10, 11, 11, 11, 12, 13, 13, 14, 15, 15, 16, 16, 17, 17, 18, 19,
    19, 20, 21, 22, 22, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 35,
    36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    57, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 82, 83, 84, 85, 85, 86, 87, 88, 88, 89, 90, 90, 91, 92, 92,
    93, 93, 93, 94, 94, 95, 95, 95, 96, 96, 96, 97, 97, 97, 97, 98, 98, 98, 98, 98,
    99,
  ],
}

/** '97 Air Force Mechanical (M) Percentile Conversion, [SEGALL] Table C.1 (sum AR+MC+AS+2VE). */
export const AF_M_PERCENTILE_TABLE: PercentileTable = {
  min: 144,
  max: 329,
  pct: [
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3,
    4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7,
    7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 13, 13, 14, 14,
    14, 15, 15, 15, 16, 16, 17, 18, 18, 19, 19, 20, 21, 21, 22, 22, 23, 24, 24, 25,
    26, 26, 27, 28, 28, 29, 29, 30, 31, 31, 33, 33, 34, 35, 36, 37, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 78,
    79, 80, 81, 81, 82, 83, 84, 85, 86, 86, 87, 87, 88, 88, 89, 90, 90, 91, 91, 92,
    92, 93, 93, 93, 94, 94, 95, 95, 95, 95, 96, 96, 96, 97, 97, 97, 97, 97, 98, 98,
    98, 98, 98, 98, 98, 99,
  ],
}

/** '97 Air Force Administrative (A) Percentile Conversion, [SEGALL] Table C.2 (sum MK+VE). */
export const AF_A_PERCENTILE_TABLE: PercentileTable = {
  min: 55,
  max: 134,
  pct: [
    1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9,
    10, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 23, 25, 27, 28, 30, 32, 34, 35, 37,
    39, 41, 43, 45, 47, 49, 50, 52, 55, 56, 59, 61, 63, 65, 67, 69, 71, 72, 74, 76,
    78, 80, 82, 84, 85, 87, 88, 90, 91, 92, 93, 94, 95, 96, 96, 97, 97, 98, 98, 99,
  ],
}

/** '97 Air Force General (G) Percentile Conversion, [SEGALL] Table C.3 (sum AR+VE). */
export const AF_G_PERCENTILE_TABLE: PercentileTable = {
  min: 51,
  max: 135,
  pct: [
    1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 7,
    7, 8, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 23, 24, 26, 28,
    30, 32, 33, 36, 38, 40, 42, 44, 47, 49, 51, 53, 55, 57, 59, 62, 64, 66, 68, 70,
    72, 74, 76, 78, 80, 81, 83, 84, 85, 87, 88, 89, 91, 92, 93, 94, 95, 95, 96, 96,
    97, 97, 98, 98, 99,
  ],
}

/** '97 Air Force Electrical (E) Percentile Conversion, [SEGALL] Table C.4 (sum GS+AR+MK+EI). */
export const AF_E_PERCENTILE_TABLE: PercentileTable = {
  min: 119,
  max: 272,
  pct: [
    1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12,
    12, 13, 13, 14, 14, 15, 16, 16, 17, 17, 18, 19, 19, 20, 21, 22, 23, 23, 24, 25,
    26, 27, 28, 30, 31, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47,
    49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 76, 77, 79, 80, 81, 81, 82, 83, 84, 84, 85, 86, 87, 87,
    88, 88, 89, 89, 90, 91, 91, 91, 92, 92, 93, 93, 94, 94, 94, 95, 95, 95, 96, 96,
    96, 96, 97, 97, 97, 97, 98, 98, 98, 98, 98, 98, 98, 99,
  ],
}

function lookup(table: PercentileTable, sum: number): number {
  const s = Math.round(sum)
  if (s <= table.min) return table.pct[0]
  if (s >= table.max) return table.pct[table.pct.length - 1]
  return table.pct[s - table.min]
}

/** AFQT percentile (1-99) for an AFQT raw sum, from the official 1997-scale table. */
export function afqtPercentileFromRaw(raw: number): number {
  return lookup(AFQT_PERCENTILE_TABLE, raw)
}

/* ------------------------------------------------------------------ */
/*  AFQT categories [OA-SCORES]                                        */
/* ------------------------------------------------------------------ */

export type AfqtCategoryId = 'I' | 'II' | 'IIIA' | 'IIIB' | 'IVA' | 'IVB' | 'IVC' | 'V'

/** Current official AFQT categories (officialasvab.com scores page), highest first. */
export const AFQT_CATEGORIES: { id: AfqtCategoryId; min: number; max: number }[] = [
  { id: 'I', min: 93, max: 99 },
  { id: 'II', min: 65, max: 92 },
  { id: 'IIIA', min: 50, max: 64 },
  { id: 'IIIB', min: 31, max: 49 },
  { id: 'IVA', min: 21, max: 30 },
  { id: 'IVB', min: 16, max: 20 },
  { id: 'IVC', min: 10, max: 15 },
  { id: 'V', min: 1, max: 9 },
]

export function afqtCategory(percentile: number): AfqtCategoryId {
  const p = Math.max(1, Math.min(99, Math.round(percentile)))
  return (AFQT_CATEGORIES.find((c) => p >= c.min) ?? AFQT_CATEGORIES[AFQT_CATEGORIES.length - 1]).id
}

/* ------------------------------------------------------------------ */
/*  VE and AS composites [SEGALL §2.3]                                 */
/* ------------------------------------------------------------------ */

// SVE = 7.225587·θWK + 5.010103·θPC + 46.897156 (eq. 2.3), with
// S_k = A_k·θ_k + B_k (Table 2.4: WK A 11.032817 B 47.809880; PC A 12.351821
// B 45.886521). Substituting θ = (S − B)/A gives VE directly in standard
// scores: ≈ 0.65492·WK + 0.40562·PC − 3.0267 (ratio 0.61934, as the report says).
const VE_WK = 7.225587 / 11.032817
const VE_PC = 5.010103 / 12.351821
const VE_CONST = 46.897156 - VE_WK * 47.80988 - VE_PC * 45.886521

// SAS = 7.648241·θAI + 6.991018·θSI + 56.220220 (eq. 2.4); Table 2.4 AI A
// 14.183186 B 55.582509, SI A 12.964407 B 55.952500 -> ≈ 0.53925·AI + 0.53925·SI − 3.9247.
const AS_AI = 7.648241 / 14.183186
const AS_SI = 6.991018 / 12.964407
const AS_CONST = 56.22022 - AS_AI * 55.582509 - AS_SI * 55.9525

/** Exported for tests and for error propagation. */
export const VE_WEIGHTS = { WK: VE_WK, PC: VE_PC, constant: VE_CONST }
export const AS_WEIGHTS = { AI: AS_AI, SI: AS_SI, constant: AS_CONST }

/**
 * Verbal Expression from WK and PC standard scores: the official weighted
 * blend (WK counts more), NOT a plain sum. Rounded to an integer, as used
 * operationally, unless `round` is false.
 */
export function veFromWkPc(wk: number, pc: number, round = true): number {
  const v = VE_WK * wk + VE_PC * pc + VE_CONST
  return round ? Math.round(v) : v
}

/** Auto & Shop composite from AI and SI standard scores (equal weights, re-standardized). */
export function asFromAiSi(ai: number, si: number, round = true): number {
  const v = AS_AI * ai + AS_SI * si + AS_CONST
  return round ? Math.round(v) : v
}

/** AFQT raw sum = AR + MK + 2·VE (standard scores) [SEGALL §2.4]. */
export function afqtRawScore(s: { AR: number; MK: number; VE: number }): number {
  return Math.round(s.AR) + Math.round(s.MK) + 2 * Math.round(s.VE)
}

export interface AfqtResult {
  ve: number
  raw: number
  percentile: number
  category: AfqtCategoryId
}

/** Exact AFQT from real WK/PC/AR/MK standard scores (e.g. typed in from a score report). */
export function afqtFromStandardScores(s: Record<AfqtSubtestId, number>): AfqtResult {
  const ve = veFromWkPc(Math.round(s.WK), Math.round(s.PC))
  const raw = afqtRawScore({ AR: s.AR, MK: s.MK, VE: ve })
  const percentile = afqtPercentileFromRaw(raw)
  return { ve, raw, percentile, category: afqtCategory(percentile) }
}

/* ------------------------------------------------------------------ */
/*  Percent correct -> estimated standard score (ESTIMATE)             */
/* ------------------------------------------------------------------ */

/**
 * Fraction correct on a fixed Study Mondo form -> estimated standard score
 * (mean 50, SD 10), interpolated linearly between anchors. See the
 * CALIBRATION NOTE at the top: an uncalibrated, deliberately conservative
 * judgment. Do not reorder; pct ascending.
 */
export const STANDARD_SCORE_ANCHORS: { pct: number; score: number }[] = [
  { pct: 0, score: 20 },
  { pct: 0.25, score: 32 }, // chance on 4-choice items
  { pct: 0.4, score: 40 },
  { pct: 0.58, score: 50 }, // the average 18-23-year-old (NOT 50% correct)
  { pct: 0.75, score: 57 },
  { pct: 0.9, score: 64 },
  { pct: 1, score: 70 },
]

/** The anchor curve itself (no sampling adjustment). */
export function standardScoreFromFraction(fraction: number): number {
  const p = Math.max(0, Math.min(1, fraction))
  for (let i = 1; i < STANDARD_SCORE_ANCHORS.length; i++) {
    const lo = STANDARD_SCORE_ANCHORS[i - 1]
    const hi = STANDARD_SCORE_ANCHORS[i]
    if (p <= hi.pct) {
      const t = (p - lo.pct) / (hi.pct - lo.pct || 1)
      return lo.score + t * (hi.score - lo.score)
    }
  }
  return STANDARD_SCORE_ANCHORS[STANDARD_SCORE_ANCHORS.length - 1].score
}

function curveSlope(fraction: number): number {
  const p = Math.max(0, Math.min(1, fraction))
  for (let i = 1; i < STANDARD_SCORE_ANCHORS.length; i++) {
    const lo = STANDARD_SCORE_ANCHORS[i - 1]
    const hi = STANDARD_SCORE_ANCHORS[i]
    if (p <= hi.pct) return (hi.score - lo.score) / (hi.pct - lo.pct)
  }
  return 0
}

/** Population prior: standard scores are N(50, 10²) in the reference sample. */
const PRIOR_MEAN = 50
const PRIOR_VAR = 100
/** Extra SD (standard-score points) for the curve itself being uncalibrated. */
export const MODEL_SD = 3
/** Item count assumed when only a percent is known (one CAT subtest's worth). */
export const DEFAULT_ITEM_COUNT = 15

export interface StandardScoreEstimate {
  /** Rounded estimated standard score. */
  score: number
  /** Unrounded estimate (used for propagation). */
  value: number
  /** SD of the estimate in standard-score points (sampling + model). */
  sd: number
  low: number
  high: number
  /** Items the estimate rests on (may be fractional when evidence is weighted). */
  n: number
  fraction: number
}

/**
 * Estimated standard score from `correct` of `total` items, with an
 * uncertainty band (±1 SD, about a 68% window).
 *
 * 1. The anchor curve maps the fraction correct to a standard score.
 * 2. Its sampling error is the binomial SD of the fraction (with a
 *    half-item continuity adjustment so 0/n and n/n still carry error),
 *    times the local slope of the curve.
 * 3. Like the real CAT (a Bayesian estimate with a population prior; SEGALL
 *    §2.2 note 2), the estimate is pulled toward the mean in proportion to
 *    how little evidence there is: 2 items barely move it, 15 items move it
 *    most of the way.
 * 4. The band adds MODEL_SD for the uncalibrated curve.
 */
export function estimateStandardScore(correct: number, total: number): StandardScoreEstimate {
  const n = Math.max(0, total)
  if (n <= 0) {
    const sd = Math.sqrt(PRIOR_VAR + MODEL_SD * MODEL_SD)
    return { score: PRIOR_MEAN, value: PRIOR_MEAN, sd, low: Math.round(PRIOR_MEAN - sd), high: Math.round(PRIOR_MEAN + sd), n: 0, fraction: 0 }
  }
  const k = Math.max(0, Math.min(n, correct))
  const fraction = k / n
  const x = standardScoreFromFraction(fraction)
  const pAdj = (k + 0.5) / (n + 1)
  const sampleSd = curveSlope(fraction) * Math.sqrt((pAdj * (1 - pAdj)) / n)
  const measVar = sampleSd * sampleSd
  const shrink = PRIOR_VAR / (PRIOR_VAR + measVar)
  const value = PRIOR_MEAN + (x - PRIOR_MEAN) * shrink
  const postVar = (PRIOR_VAR * measVar) / (PRIOR_VAR + measVar)
  const sd = Math.sqrt(postVar + MODEL_SD * MODEL_SD)
  return { score: Math.round(value), value, sd, low: Math.round(value - sd), high: Math.round(value + sd), n, fraction }
}

/** Same as estimateStandardScore, from a fraction and an assumed item count. */
export function estimateStandardScoreFromFraction(fraction: number, items = DEFAULT_ITEM_COUNT): StandardScoreEstimate {
  const f = Math.max(0, Math.min(1, fraction))
  return estimateStandardScore(f * items, items)
}

/* ------------------------------------------------------------------ */
/*  AFQT estimate                                                      */
/* ------------------------------------------------------------------ */

export interface AfqtEstimate {
  /** AFQT percentile point estimate (1-99). */
  percentile: number
  /** Low/high end of the honest projection window (about 68%). */
  low: number
  high: number
  /** Same window as an object (shared ScorePredictor shape). */
  range: { low: number; high: number }
  category: AfqtCategoryId
  /** Category at each end of the window. */
  categoryRange: { low: AfqtCategoryId; high: AfqtCategoryId }
  raw: number
  rawRange: { low: number; high: number }
  ve: number
  standardScores: Record<AfqtSubtestId, StandardScoreEstimate>
}

/** The AFQT estimate from per-subtest standard-score estimates. */
export function estimateAfqtFromEstimates(est: Record<AfqtSubtestId, StandardScoreEstimate>): AfqtEstimate {
  const veValue = VE_WK * est.WK.value + VE_PC * est.PC.value + VE_CONST
  const veSd = Math.sqrt((VE_WK * est.WK.sd) ** 2 + (VE_PC * est.PC.sd) ** 2)
  const ve = Math.round(veValue)
  const raw = afqtRawScore({ AR: est.AR.value, MK: est.MK.value, VE: veValue })
  // Errors on different subtests are independent; VE counts twice.
  const rawSd = Math.sqrt(est.AR.sd ** 2 + est.MK.sd ** 2 + 4 * veSd ** 2)
  const rawLow = Math.round(raw - rawSd)
  const rawHigh = Math.round(raw + rawSd)
  const percentile = afqtPercentileFromRaw(raw)
  const low = afqtPercentileFromRaw(rawLow)
  const high = afqtPercentileFromRaw(rawHigh)
  return {
    percentile,
    low,
    high,
    range: { low, high },
    category: afqtCategory(percentile),
    categoryRange: { low: afqtCategory(low), high: afqtCategory(high) },
    raw,
    rawRange: { low: rawLow, high: rawHigh },
    ve,
    standardScores: est,
  }
}

/**
 * AFQT estimate from right/total tallies on each AFQT subtest. Returns null
 * unless all four subtests have at least one item.
 */
export function estimateAfqtFromCounts(
  counts: Partial<Record<AfqtSubtestId, { correct: number; total: number }>>,
): AfqtEstimate | null {
  const ids: AfqtSubtestId[] = ['WK', 'PC', 'AR', 'MK']
  if (!ids.every((id) => (counts[id]?.total ?? 0) > 0)) return null
  const est = Object.fromEntries(ids.map((id) => [id, estimateStandardScore(counts[id]!.correct, counts[id]!.total)])) as Record<
    AfqtSubtestId,
    StandardScoreEstimate
  >
  return estimateAfqtFromEstimates(est)
}

/**
 * AFQT estimate from the fraction correct (0-1) on each AFQT subtest.
 * `itemCounts` says how many items each fraction rests on (default 15, one
 * CAT subtest's worth): fewer items mean a wider window. Returns null unless
 * all four fractions are given.
 */
export function estimateAfqtFromPercentCorrect(
  byTest: Partial<Record<AfqtSubtestId, number>>,
  itemCounts: Partial<Record<AfqtSubtestId, number>> = {},
): AfqtEstimate | null {
  const ids: AfqtSubtestId[] = ['WK', 'PC', 'AR', 'MK']
  if (!ids.every((id) => typeof byTest[id] === 'number' && Number.isFinite(byTest[id]))) return null
  const est = Object.fromEntries(
    ids.map((id) => [id, estimateStandardScoreFromFraction(byTest[id] as number, itemCounts[id] ?? DEFAULT_ITEM_COUNT)]),
  ) as Record<AfqtSubtestId, StandardScoreEstimate>
  return estimateAfqtFromEstimates(est)
}

/* ------------------------------------------------------------------ */
/*  Line scores / service composites                                   */
/* ------------------------------------------------------------------ */

/** Inputs a composite is built from: subtests plus the VE and AS composites. */
export type CompositeInput = 'GS' | 'AR' | 'MK' | 'EI' | 'MC' | 'AO' | 'VE' | 'AS'

export type Service = 'Air Force' | 'Marine Corps' | 'Army' | 'Navy'

export interface CompositeDef {
  service: Service
  code: string
  name: string
  /** Weight per input; the sum is the "unstandardized" composite. */
  weights: Partial<Record<CompositeInput, number>>
  /** Readable formula, e.g. "AR + MC + VE". */
  formula: string
  /** How the sum becomes the reported score. */
  scale:
    | { kind: 'percentile'; table: PercentileTable }
    | { kind: 'linear'; slope: number; intercept: number }
    | { kind: 'raw' }
  /** Short note shown with the score. */
  note?: string
}

const pctScale = (table: PercentileTable) => ({ kind: 'percentile' as const, table })
const linear = (slope: number, intercept: number) => ({ kind: 'linear' as const, slope, intercept })

/** Army Table 2.7 composite (constant folded into the intercept, slope 1). */
function army(code: string, name: string, w: [number, number, number, number, number, number, number], constant: number, drivers: string): CompositeDef {
  const [GS, AR, MK, MC, EI, AS, VE] = w
  return {
    service: 'Army',
    code,
    name,
    weights: { GS, AR, MK, MC, EI, AS, VE },
    formula: `weighted blend; counts most: ${drivers}`,
    scale: linear(1, constant),
    note: 'Official weighted blend (DMDC 1997 metric), not a simple sum.',
  }
}

/**
 * Every composite with an official definition in ASVAB-FACTS §4 (SEGALL
 * §2.5, Tables 2.7 and 5.1; officialasvab.com military-jobs page). Coast
 * Guard and Space Force publish no composite system of their own (Space Force
 * uses the Air Force MAGE), so they are not listed.
 */
export const LINE_SCORE_COMPOSITES: CompositeDef[] = [
  // Air Force "MAGE" (also used by Space Force): percentiles, Tables C.1-C.4.
  { service: 'Air Force', code: 'M', name: 'Mechanical', weights: { AR: 1, MC: 1, AS: 1, VE: 2 }, formula: 'AR + MC + AS + 2·VE', scale: pctScale(AF_M_PERCENTILE_TABLE) },
  { service: 'Air Force', code: 'A', name: 'Administrative', weights: { MK: 1, VE: 1 }, formula: 'MK + VE', scale: pctScale(AF_A_PERCENTILE_TABLE) },
  { service: 'Air Force', code: 'G', name: 'General', weights: { AR: 1, VE: 1 }, formula: 'AR + VE', scale: pctScale(AF_G_PERCENTILE_TABLE) },
  { service: 'Air Force', code: 'E', name: 'Electronics', weights: { GS: 1, AR: 1, MK: 1, EI: 1 }, formula: 'GS + AR + MK + EI', scale: pctScale(AF_E_PERCENTILE_TABLE) },
  // Marine Corps (mean 100, SD 20), SEGALL §2.5.2.
  { service: 'Marine Corps', code: 'GT', name: 'General Technical', weights: { AR: 1, MC: 1, VE: 1 }, formula: 'AR + MC + VE', scale: linear(0.755294, -13.289535), note: 'Marine GT includes MC (the Army GT does not).' },
  { service: 'Marine Corps', code: 'MM', name: 'Mechanical Maintenance', weights: { AR: 1, MC: 1, EI: 1, AS: 1 }, formula: 'AR + MC + EI + AS', scale: linear(0.588215, -17.645724) },
  { service: 'Marine Corps', code: 'EL', name: 'Electronics', weights: { GS: 1, AR: 1, MK: 1, EI: 1 }, formula: 'GS + AR + MK + EI', scale: linear(0.577992, -15.599795) },
  { service: 'Marine Corps', code: 'CL', name: 'Clerical', weights: { MK: 1, VE: 1 }, formula: 'MK + VE', scale: linear(1.092264, -9.232992) },
  // Army (mean 100, SD 20): GT exact (§2.5.3); the other nine are Table 2.7 weights.
  { service: 'Army', code: 'GT', name: 'General Technical', weights: { AR: 1, VE: 1 }, formula: 'AR + VE', scale: linear(1.074292, -7.443781) },
  army('CL', 'Clerical', [0, 0.75179, 0.58715, 0.11541, 0.07756, 0.07489, 0.67976], -14.32772, 'AR, VE, MK'),
  army('CO', 'Combat', [0.19868, 0.3309, 0.63397, 0.38486, 0.19979, 0.41161, 0.30347], -23.17105, 'MK, AS, MC'),
  army('EL', 'Electronics', [0.08324, 0.44254, 0.49064, 0.26341, 0.30258, 0.36786, 0.49906], -22.46667, 'VE, MK, AR'),
  army('FA', 'Field Artillery', [0.15031, 0.42263, 0.60172, 0.42966, 0.16389, 0.35866, 0.31958], -22.32119, 'MK, MC, AR'),
  army('GM', 'General Maintenance', [0.23521, 0.46357, 0.45285, 0.2928, 0.30216, 0.50542, 0.21527], -23.36174, 'AS, AR, MK'),
  army('MM', 'Mechanical Maintenance', [0.05942, 0.32829, 0.28517, 0.39607, 0.30796, 0.87309, 0.2115], -23.08481, 'AS, MC, AR, EI'),
  army('OF', 'Operators and Food', [0.14306, 0.53676, 0.34092, 0.36843, 0.19683, 0.50334, 0.36757], -22.84882, 'AR, AS, MC'),
  army('SC', 'Surveillance and Communications', [0.01235, 0.42812, 0.6365, 0.2507, 0.32194, 0.24636, 0.5277], -21.18951, 'MK, VE, AR'),
  army('ST', 'Skilled Technical', [0.12865, 0.4901, 0.47825, 0.31207, 0.14493, 0.21736, 0.62177], -19.65219, 'VE, AR, MK'),
  // Navy: raw sums of standard scores; each rating sets its own cutoff.
  { service: 'Navy', code: 'GT', name: 'General Technical', weights: { AR: 1, VE: 1 }, formula: 'AR + VE', scale: { kind: 'raw' } },
  { service: 'Navy', code: 'EL', name: 'Electronics', weights: { GS: 1, AR: 1, MK: 1, EI: 1 }, formula: 'GS + AR + MK + EI', scale: { kind: 'raw' } },
  { service: 'Navy', code: 'BEE', name: 'Basic Electricity and Electronics', weights: { GS: 1, AR: 1, MK: 2 }, formula: 'GS + AR + 2·MK', scale: { kind: 'raw' } },
  { service: 'Navy', code: 'ENG', name: 'Engineering', weights: { MK: 1, AS: 1 }, formula: 'MK + AS', scale: { kind: 'raw' } },
  { service: 'Navy', code: 'MEC', name: 'Mechanical', weights: { AR: 1, MC: 1, AS: 1 }, formula: 'AR + MC + AS', scale: { kind: 'raw' } },
  { service: 'Navy', code: 'MEC2', name: 'Mechanical 2', weights: { AR: 1, MC: 1, AO: 1 }, formula: 'AR + MC + AO', scale: { kind: 'raw' } },
  { service: 'Navy', code: 'NUC', name: 'Nuclear Field', weights: { AR: 1, MK: 1, MC: 1, VE: 1 }, formula: 'AR + MK + MC + VE', scale: { kind: 'raw' } },
  { service: 'Navy', code: 'OPS', name: 'Operations', weights: { AR: 1, MK: 1, AO: 1, VE: 1 }, formula: 'AR + MK + AO + VE', scale: { kind: 'raw' } },
  { service: 'Navy', code: 'HM', name: 'Hospital Corpsman', weights: { GS: 1, MK: 1, VE: 1 }, formula: 'GS + MK + VE', scale: { kind: 'raw' } },
  { service: 'Navy', code: 'ADM', name: 'Administrative', weights: { MK: 1, VE: 1 }, formula: 'MK + VE', scale: { kind: 'raw' } },
]

function scaleSum(def: CompositeDef, sum: number): number {
  const s = def.scale
  if (s.kind === 'percentile') return lookup(s.table, sum)
  if (s.kind === 'linear') return Math.round(s.slope * sum + s.intercept)
  return Math.round(sum)
}

/** Reported score range of a composite (for display and clamping). */
export function compositeScaleLabel(def: CompositeDef): string {
  if (def.scale.kind === 'percentile') return 'percentile (1-99)'
  if (def.scale.kind === 'linear') return 'scale score (average 100)'
  return 'sum of standard scores'
}

export type StandardScores = Partial<Record<AsvabSubtestId, number>>

function compositeInputs(s: StandardScores): Partial<Record<CompositeInput, number>> {
  const out: Partial<Record<CompositeInput, number>> = {}
  for (const k of ['GS', 'AR', 'MK', 'EI', 'MC', 'AO'] as const) if (typeof s[k] === 'number') out[k] = Math.round(s[k] as number)
  if (typeof s.WK === 'number' && typeof s.PC === 'number') out.VE = veFromWkPc(s.WK, s.PC)
  if (typeof s.AI === 'number' && typeof s.SI === 'number') out.AS = asFromAiSi(s.AI, s.SI)
  return out
}

export interface LineScore {
  service: Service
  code: string
  name: string
  formula: string
  /** Reported score: AF percentile, Marine/Army scale score, Navy raw sum. */
  score: number
  /** Unstandardized sum the score came from. */
  sum: number
  scaleLabel: string
  note?: string
}

/** Exact line scores from real standard scores; composites missing an input are skipped. */
export function lineScores(scores: StandardScores): LineScore[] {
  const inputs = compositeInputs(scores)
  const out: LineScore[] = []
  for (const def of LINE_SCORE_COMPOSITES) {
    const keys = Object.keys(def.weights) as CompositeInput[]
    if (!keys.every((k) => typeof inputs[k] === 'number')) continue
    const sum = keys.reduce((n, k) => n + (def.weights[k] as number) * (inputs[k] as number), 0)
    out.push({ service: def.service, code: def.code, name: def.name, formula: def.formula, score: scaleSum(def, sum), sum, scaleLabel: compositeScaleLabel(def), note: def.note })
  }
  return out
}

export interface LineScoreEstimate extends LineScore {
  low: number
  high: number
}

/**
 * Line-score ESTIMATES from per-subtest estimates, each with a ±1 SD window
 * propagated from the subtest estimates (independent errors). Composites
 * missing an input are skipped.
 */
export function estimateLineScores(est: Partial<Record<AsvabSubtestId, StandardScoreEstimate>>): LineScoreEstimate[] {
  const val: Partial<Record<CompositeInput, { v: number; sd: number }>> = {}
  for (const k of ['GS', 'AR', 'MK', 'EI', 'MC', 'AO'] as const) {
    const e = est[k]
    if (e) val[k] = { v: e.value, sd: e.sd }
  }
  if (est.WK && est.PC) {
    val.VE = {
      v: VE_WK * est.WK.value + VE_PC * est.PC.value + VE_CONST,
      sd: Math.sqrt((VE_WK * est.WK.sd) ** 2 + (VE_PC * est.PC.sd) ** 2),
    }
  }
  if (est.AI && est.SI) {
    val.AS = {
      v: AS_AI * est.AI.value + AS_SI * est.SI.value + AS_CONST,
      sd: Math.sqrt((AS_AI * est.AI.sd) ** 2 + (AS_SI * est.SI.sd) ** 2),
    }
  }
  const out: LineScoreEstimate[] = []
  for (const def of LINE_SCORE_COMPOSITES) {
    const keys = Object.keys(def.weights) as CompositeInput[]
    if (!keys.every((k) => val[k])) continue
    // Operational composites use rounded subtest scores.
    const sum = keys.reduce((n, k) => n + (def.weights[k] as number) * Math.round(val[k]!.v), 0)
    const sd = Math.sqrt(keys.reduce((n, k) => n + ((def.weights[k] as number) * val[k]!.sd) ** 2, 0))
    out.push({
      service: def.service,
      code: def.code,
      name: def.name,
      formula: def.formula,
      score: scaleSum(def, sum),
      sum: Math.round(sum),
      low: scaleSum(def, sum - sd),
      high: scaleSum(def, sum + sd),
      scaleLabel: compositeScaleLabel(def),
      note: def.note,
    })
  }
  return out
}

/* ------------------------------------------------------------------ */
/*  Branch AFQT minimums (ASVAB-FACTS §3) — these change often         */
/* ------------------------------------------------------------------ */

export const BRANCH_MINIMUMS_AS_OF = 'October 25, 2026'

export interface BranchMinimum {
  branch: string
  /** Published minimum with a high-school diploma, or null when none is published. */
  diploma: number | null
  /** Published minimum with a GED / alternative credential, or null when none is published. */
  ged: number | null
  note: string
  source: string
}

export const BRANCH_MINIMUMS: BranchMinimum[] = [
  { branch: 'Army', diploma: 31, ged: null, note: 'GED minimum not stated on goarmy.com. Applicants scoring 21-30 may qualify for the Future Soldier Prep Course (academic track).', source: 'https://www.goarmy.com/how-to-join/steps/asvab' },
  { branch: 'Navy', diploma: 31, ged: null, note: 'No GED number published on the Navy recruiting site. The Navy Recruiting Manual requires 50 or higher for applicants without a Tier 1 or Tier 2 education credential.', source: 'https://etoolbox.cnrc.navy.mil/assets/N7B/instructions/Enlisted%20-%20Navy%20Recruiting%20Manual.pdf' },
  { branch: 'Air Force', diploma: 31, ged: 50, note: 'Both values published on airforce.com.', source: 'https://www.airforce.com/asvab' },
  { branch: 'Marine Corps', diploma: 31, ged: null, note: 'No GED number published; GED applicants get further recruiter review.', source: 'https://www.marines.com/frequently-asked-questions' },
  { branch: 'Coast Guard', diploma: 32, ged: null, note: 'GED applicants also need Coast Guard Accessions approval; no official GED number is published.', source: 'https://www.gocoastguard.com/get-started' },
  { branch: 'Space Force', diploma: null, ged: null, note: 'No AFQT number published ("a qualifying ASVAB score"); jobs list Air Force composite minimums.', source: 'https://www.spaceforce.com/how-to-join/enlisted-guardians' },
]

/** Army Future Soldier Prep Course academic-track floor (goarmy.com). */
export const ARMY_FSPC_MINIMUM = 21

/** Whether a percentile meets each branch's published diploma minimum (null = no published number). */
export function branchesCleared(percentile: number): { branch: string; minimum: number | null; clears: boolean | null }[] {
  return BRANCH_MINIMUMS.map((b) => ({ branch: b.branch, minimum: b.diploma, clears: b.diploma == null ? null : percentile >= b.diploma }))
}
