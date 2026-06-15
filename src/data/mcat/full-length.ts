/**
 * Assembles a passage-based full-length MCAT practice exam from the section
 * banks, in real-exam section order, with discrete (non-passage) questions
 * interspersed among the passages — mirroring the AAMC format.
 *
 * Targets the official form: Chem/Phys 59, CARS 54, Bio/Biochem 59, Psych/Soc 59
 * (realized total 231). Each science section is packed to its exact count: whole
 * passages first, then a window of discrete questions fills the remainder.
 *
 * REDUNDANCY NOTES — measured against the current banks (and the honest limits):
 *   chem-phys  10 passages / 54 passage-Q + 8 discretes  (target 59 → 5 discretes used)
 *   bio-biochem 10 / 51 + 9   (target 59 → 8 used)
 *   psych-soc  10 / 51 + 8    (target 59 → 8 used)
 *   cars       12 / 72        (target 53 → ~9 passages, ~54)
 *
 * Because each science bank's passage-questions (51–54) barely reach 59 and the
 * smallest passage is 5 Q, hitting EXACTLY 59 forces every form to use ALL 10
 * passages — so the science passage SET is identical across Form 1 and Form 2.
 * That overlap is IRREDUCIBLE in code until a bank grows past ~64 passage-Q (so
 * a form can omit a whole passage) or the per-section target is allowed to drop.
 * We therefore differentiate the two forms — and break up within-test redundancy
 * — at the QUESTION level instead:
 *   1. orderPassagesForForm — deterministic per-form passage SEQUENCE (same set,
 *      different order), so a retake doesn't feel identical.
 *   2. declusterPassage / spreadSkills — reorder a passage's questions to avoid
 *      back-to-back same-skill items, but ONLY when the passage actually has a
 *      skill collision (so CARS reading-order passages keep their authored order).
 *   3. a rotated discrete WINDOW + buildDiscreteBins — the 8-question discrete
 *      "wall" is split into up to MAX_DISCRETE_BINS skill-balanced mini-blocks and
 *      interleaved among the passages (the psych-soc identify-the-concept wall
 *      drops from a same-skill run of 4 to 3). The window rotates per form, which
 *      changes the drawn discretes for chem-phys/bio-biochem; for psych-soc the
 *      window (8) equals the pool (8) so it is order-only.
 * All ordering is a pure function of the form number via an FNV-1a hash — no
 * Math.random / Date.now — so each form is fully reproducible.
 *
 * Two CONTENT defects are not assembly-fixable and need a retag/rebalance pass:
 *   - cp-orgo-01 has 4 of 5 questions tagged 'Extraction' (residual run floor 3);
 *   - the psych-soc discrete pool is 7 of 8 'identify-the-concept'.
 */
import type { MCATPassage, MCATPassageQuestion, MCATDiscreteQuestion, MCATSection } from './types'
import { MCAT_SECTION_META, countQuestions } from './types'
import { CARS_PASSAGES, SECTION_PASSAGES, SECTION_DISCRETES } from './passages'
import { buildDiscretesPassage } from './passages/discretes-helper'

type ScienceSection = Exclude<MCATSection, 'cars'>

/** Max number of interleaved discrete mini-blocks per science section. */
const MAX_DISCRETE_BINS = 4

/** Stable, RNG-free FNV-1a hash of a string seeded by the form number. */
function stableHash(str: string, seed: number): number {
  let h = (2166136261 ^ seed) >>> 0
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Highest count of any single skill among the questions (1 ⇒ all distinct). */
function maxSkillFreq(questions: MCATPassageQuestion[]): number {
  const counts = new Map<string, number>()
  let max = 0
  for (const q of questions) {
    if (!q.skill) continue // unskilled items never count as a collision
    const n = (counts.get(q.skill) ?? 0) + 1
    counts.set(q.skill, n)
    if (n > max) max = n
  }
  return max
}

/**
 * Reorder questions to minimize adjacent same-skill items: greedily emit the
 * skill-group with the most remaining items that isn't the one just placed
 * (forced to repeat only when a single skill is all that's left). This reaches
 * the theoretical-minimum run. Deterministic — the form only varies tie-breaks,
 * so it never worsens the run. Never drops or duplicates a question. Unskilled
 * items become singleton groups so they freely separate same-skill runs.
 */
function spreadSkills<T extends MCATPassageQuestion>(questions: T[], form: number): T[] {
  const groups = new Map<string, T[]>()
  questions.forEach((q, i) => {
    const k = q.skill ? `s:${q.skill}` : `u:${i}`
    const g = groups.get(k)
    if (g) g.push(q)
    else groups.set(k, [q])
  })
  const buckets = [...groups.entries()].map(([key, items]) => ({ key, items: [...items] }))
  const bySize = (a: { key: string; items: T[] }, b: { key: string; items: T[] }) =>
    b.items.length - a.items.length || stableHash(a.key, form) - stableHash(b.key, form)

  const out: T[] = []
  let lastKey: string | null = null
  while (out.length < questions.length) {
    buckets.sort(bySize)
    const pick = buckets.find((b) => b.items.length > 0 && b.key !== lastKey)
      ?? buckets.find((b) => b.items.length > 0)!
    out.push(pick.items.shift()!)
    lastKey = pick.key
  }
  return out
}

/** De-cluster a passage's questions, but only if it has a same-skill collision
 *  (preserves authored reading order for CARS and all-unique science passages). */
function declusterPassage(p: MCATPassage, form: number): MCATPassage {
  return maxSkillFreq(p.questions) <= 1 ? p : { ...p, questions: spreadSkills(p.questions, form) }
}

/** Deterministic per-form ordering of a passage list (stable hash on id+form). */
function orderPassagesForForm(passages: MCATPassage[], form: number): MCATPassage[] {
  return [...passages].sort((a, b) => stableHash(a.id, form) - stableHash(b.id, form))
}

/** Take `size` discretes from `pool` starting at a form-dependent offset, so the
 *  two forms draw different items wherever the pool is larger than the window. */
function rotateWindow<T>(pool: T[], form: number, size: number): T[] {
  if (pool.length === 0 || size <= 0) return []
  const off = stableHash('discretes', form) % pool.length
  return [...pool.slice(off), ...pool.slice(0, off)].slice(0, Math.min(size, pool.length))
}

/** Split a discrete window into up to MAX_DISCRETE_BINS skill-balanced mini-blocks
 *  (round-robin over a skill-spread order so same-skill items land in different
 *  bins), each a synthetic passage with a UNIQUE id suffix. */
function buildDiscreteBins(section: ScienceSection, window: MCATDiscreteQuestion[], form: number): MCATPassage[] {
  if (!window.length) return []
  const binCount = Math.min(MAX_DISCRETE_BINS, window.length)
  const spread = spreadSkills(window, form)
  const bins: MCATDiscreteQuestion[][] = Array.from({ length: binCount }, () => [])
  spread.forEach((q, i) => bins[i % binCount].push(q))
  const nonEmpty = bins.filter((b) => b.length)
  return nonEmpty
    .map((b, i) => buildDiscretesPassage(section, b, undefined, { idSuffix: nonEmpty.length > 1 ? `-${i + 1}` : '' }))
    .filter((p): p is MCATPassage => p !== null)
}

/** Evenly interleave `inserts` among `base`, deterministically. */
function interleaveEven<T>(base: T[], inserts: T[]): T[] {
  if (inserts.length === 0) return [...base]
  const out: T[] = []
  const step = base.length / inserts.length
  let next = 0
  base.forEach((item, i) => {
    out.push(item)
    if (next < inserts.length && i + 1 >= Math.round((next + 1) * step)) out.push(inserts[next++])
  })
  while (next < inserts.length) out.push(inserts[next++])
  return out
}

/**
 * Pack a science section to its official count: include whole passages greedily
 * up to the target (with the current banks all 10 fit), de-clustered and ordered
 * per form, then fill the remainder with a rotated, binned, interleaved discrete
 * window. Falls short only if the banks can't supply enough (reported via count).
 */
function packScienceSection(section: ScienceSection, form: number): { passages: MCATPassage[]; count: number } {
  const target = MCAT_SECTION_META[section].questions
  const chosen: MCATPassage[] = []
  let count = 0
  for (const p of orderPassagesForForm(SECTION_PASSAGES[section], form)) {
    if (count + p.questions.length <= target) {
      chosen.push(declusterPassage(p, form))
      count += p.questions.length
    }
  }
  let bins: MCATPassage[] = []
  const remainder = target - count
  if (remainder > 0) {
    const window = rotateWindow(SECTION_DISCRETES[section], form, remainder)
    bins = buildDiscreteBins(section, window, form)
    count += window.length
  }
  return { passages: interleaveEven(chosen, bins), count }
}

/** CARS has no discretes: take whole passages (de-clustered, per-form order)
 *  until the target is met or just passed (the last passage can push slightly
 *  over the 53 target). The per-form order varies which 9-of-12 are chosen. */
function packCars(form: number): { passages: MCATPassage[]; count: number } {
  const target = MCAT_SECTION_META.cars.questions
  const out: MCATPassage[] = []
  let count = 0
  for (const p of orderPassagesForForm(CARS_PASSAGES, form)) {
    if (count >= target) break
    out.push(declusterPassage(p, form))
    count += p.questions.length
  }
  return { passages: out, count }
}

export interface MCATFullLength {
  form: 1 | 2
  passages: MCATPassage[]
  questionCount: number
  sectionCounts: Record<MCATSection, number>
}

/**
 * Two full-length forms. The science passage SET is identical across forms (see
 * the header — irreducible with current bank sizes), but each form sequences its
 * passages differently, de-clusters same-skill questions, and draws a rotated,
 * interleaved discrete window, so a retake is meaningfully re-paced rather than a
 * verbatim repeat. CARS additionally varies which 9 of its 12 passages appear.
 */
export function buildFullLength(form: 1 | 2): MCATFullLength {
  const cp = packScienceSection('chem-phys', form)
  const cars = packCars(form)
  const bb = packScienceSection('bio-biochem', form)
  const ps = packScienceSection('psych-soc', form)
  const passages = [...cp.passages, ...cars.passages, ...bb.passages, ...ps.passages]
  return {
    form,
    passages,
    questionCount: countQuestions(passages),
    sectionCounts: { 'chem-phys': cp.count, cars: cars.count, 'bio-biochem': bb.count, 'psych-soc': ps.count },
  }
}

export const FULL_LENGTH_FORMS: MCATFullLength[] = [buildFullLength(1), buildFullLength(2)]

// Backward-compatible exports (form 1).
export const FULL_LENGTH_PASSAGES: MCATPassage[] = FULL_LENGTH_FORMS[0].passages
export const FULL_LENGTH_QUESTION_COUNT = FULL_LENGTH_FORMS[0].questionCount
export const FULL_LENGTH_SECTION_COUNTS: Record<MCATSection, number> = FULL_LENGTH_FORMS[0].sectionCounts

/** Sum of official per-section limits (Chem/Phys 95 + CARS 90 + Bio 95 + Psych 95). */
export const FULL_LENGTH_MINUTES =
  MCAT_SECTION_META['chem-phys'].minutes +
  MCAT_SECTION_META.cars.minutes +
  MCAT_SECTION_META['bio-biochem'].minutes +
  MCAT_SECTION_META['psych-soc'].minutes
