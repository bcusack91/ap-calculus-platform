/**
 * Assembles the six full-length MCAT practice exams from their dedicated,
 * blueprinted banks (src/data/mcat/full-length/), in real-exam section order,
 * with the discrete (non-passage) questions interspersed among the passages
 * as on the AAMC form.
 *
 * Each form is curated, not packed: per science section exactly 10 passages
 * (44 questions) plus 15 discretes = 59; CARS 9 passages = 53; 230 in all,
 * the official count. Rebuilt 2026-09-29 after a blueprint review found the
 * old pool-packed forms short on passage length, information passages,
 * biochemistry and sociology, and one-genre per CARS form. The full-length
 * banks are separate from the diagnostic / section-practice banks, so nothing
 * a student saw in a diagnostic reappears here.
 *
 * What the assembler still does per form (all deterministic — a pure function
 * of the form number via an FNV-1a hash, no Math.random / Date.now):
 *   1. declusterPassage / spreadSkills — reorder a passage's questions only when
 *      it has back-to-back same-skill items (CARS reading order is preserved).
 *   2. buildDiscreteBins — the 15 discretes become up to MAX_DISCRETE_BINS
 *      skill-balanced mini-blocks interleaved evenly among the passages.
 */
import type { MCATPassage, MCATPassageQuestion, MCATDiscreteQuestion, MCATSection } from './types'
import { MCAT_SECTION_META, countQuestions } from './types'
import { buildDiscretesPassage } from './passages/discretes-helper'
import { FULL_LENGTH_BANKS, FULL_LENGTH_FORM_NUMBERS, type FullLengthFormNumber, type ScienceSection } from './full-length/index'

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
 * (forced to repeat only when a single skill is all that's left). Deterministic
 * — the form only varies tie-breaks. Never drops or duplicates a question.
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

/** Split the discretes into up to MAX_DISCRETE_BINS skill-balanced mini-blocks
 *  (round-robin over a skill-spread order so same-skill items land in different
 *  bins), each a synthetic passage with a UNIQUE id suffix. */
function buildDiscreteBins(section: ScienceSection, discretes: MCATDiscreteQuestion[], form: number): MCATPassage[] {
  if (!discretes.length) return []
  const binCount = Math.min(MAX_DISCRETE_BINS, discretes.length)
  const spread = spreadSkills(discretes, form)
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

function assembleScienceSection(section: ScienceSection, form: FullLengthFormNumber): { passages: MCATPassage[]; count: number } {
  const bank = FULL_LENGTH_BANKS[form].science[section]
  const passages = bank.passages.map((p) => declusterPassage(p, form))
  const bins = buildDiscreteBins(section, bank.discretes, form)
  const all = interleaveEven(passages, bins)
  return { passages: all, count: countQuestions(all) }
}

export interface MCATFullLength {
  form: FullLengthFormNumber
  passages: MCATPassage[]
  questionCount: number
  sectionCounts: Record<MCATSection, number>
}

export function buildFullLength(form: FullLengthFormNumber): MCATFullLength {
  const cp = assembleScienceSection('chem-phys', form)
  const cars = FULL_LENGTH_BANKS[form].cars.map((p) => declusterPassage(p, form))
  const bb = assembleScienceSection('bio-biochem', form)
  const ps = assembleScienceSection('psych-soc', form)
  const passages = [...cp.passages, ...cars, ...bb.passages, ...ps.passages]
  return {
    form,
    passages,
    questionCount: countQuestions(passages),
    sectionCounts: { 'chem-phys': cp.count, cars: countQuestions(cars), 'bio-biochem': bb.count, 'psych-soc': ps.count },
  }
}

export const FULL_LENGTH_FORMS: MCATFullLength[] = FULL_LENGTH_FORM_NUMBERS.map((f) => buildFullLength(f))

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
