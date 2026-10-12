/**
 * Full-length Enhanced ACT: section/skill metadata and scoring. Pure and
 * client-safe (the results page and the submit route share it).
 *
 *  - Each section's 1-36 score comes from its fraction correct through the
 *    calibrated anchor curve in act-scoring.ts (actSectionScaled).
 *  - Composite = rounded mean of English, Math and Reading (Enhanced ACT;
 *    Science is reported on its own).
 *  - STEM = rounded mean of Math and Science, only when Science was taken.
 *  - Every score is shown with a range (projectionRange): ±1 on the composite
 *    (a whole 131-question sitting), ±2 on a single section or STEM.
 */
import { actComposite, actSectionScaled, projectionRange, type ScoreRange } from '@/lib/act-scoring'
import { ACT_FL_BLUEPRINT, type ActFLSection, type ActFLSkill } from '@/data/act-practice/full-length/types'

export const ACT_FL_SECTION_ORDER: readonly ActFLSection[] = ['english', 'math', 'reading', 'science']
export const ACT_FL_CORE_SECTIONS: readonly ActFLSection[] = ['english', 'math', 'reading']

export const ACT_FL_SECTION_LABELS: Record<ActFLSection, string> = {
  english: 'English',
  math: 'Math',
  reading: 'Reading',
  science: 'Science',
}

/** Sections a sitting covers, in exam order. */
export function actFlSections(includeScience: boolean): ActFLSection[] {
  return ACT_FL_SECTION_ORDER.filter((s) => includeScience || s !== 'science')
}

export function isActFlSection(v: unknown): v is ActFLSection {
  return v === 'english' || v === 'math' || v === 'reading' || v === 'science'
}

export const ACT_FL_SKILL_META: Record<ActFLSkill, { label: string; section: ActFLSection; topicSlug: string }> = {
  POW: { label: 'Production of Writing', section: 'english', topicSlug: 'act-english-rhetorical-act' },
  KLA: { label: 'Knowledge of Language', section: 'english', topicSlug: 'act-english-rhetorical-act' },
  CSE: { label: 'Conventions of Standard English', section: 'english', topicSlug: 'act-english-grammar-act' },
  'PHM-N': { label: 'Number & Quantity', section: 'math', topicSlug: 'act-pre-algebra-basics-act' },
  'PHM-A': { label: 'Algebra', section: 'math', topicSlug: 'act-algebra-equations-act' },
  'PHM-F': { label: 'Functions', section: 'math', topicSlug: 'act-intermediate-algebra-act' },
  'PHM-G': { label: 'Geometry', section: 'math', topicSlug: 'act-plane-geometry-act' },
  'PHM-S': { label: 'Statistics & Probability', section: 'math', topicSlug: 'act-statistics-probability-act' },
  IES: { label: 'Integrating Essential Skills', section: 'math', topicSlug: 'act-math-strategy-act' },
  KID: { label: 'Key Ideas & Details', section: 'reading', topicSlug: 'act-reading-main-ideas-act' },
  CS: { label: 'Craft & Structure', section: 'reading', topicSlug: 'act-reading-strategy-act' },
  IKI: { label: 'Integration of Knowledge & Ideas', section: 'reading', topicSlug: 'act-reading-passage-types-act' },
  IOD: { label: 'Interpretation of Data', section: 'science', topicSlug: 'act-science-data-act' },
  SIN: { label: 'Scientific Investigation', section: 'science', topicSlug: 'act-science-experiments-act' },
  EMI: { label: 'Evaluation of Models, Inferences & Experimental Results', section: 'science', topicSlug: 'act-science-reasoning-act' },
}

export function isActFlSkill(v: unknown): v is ActFLSkill {
  return typeof v === 'string' && Object.prototype.hasOwnProperty.call(ACT_FL_SKILL_META, v)
}

/** Seconds each section allows. */
export function actFlSectionSeconds(section: ActFLSection): number {
  return ACT_FL_BLUEPRINT[section].minutes * 60
}

export interface ActFlSectionScore {
  section: ActFLSection
  label: string
  correct: number
  total: number
  scaled: number
  range: ScoreRange
  /** Seconds spent in the section (when the runner measured it). */
  elapsedSeconds?: number
}

export interface ActFlSkillScore {
  skill: ActFLSkill
  label: string
  section: ActFLSection
  correct: number
  total: number
}

export interface ActFlScore {
  includeScience: boolean
  sections: ActFlSectionScore[]
  composite: number
  compositeRange: ScoreRange
  /** Math + Science; null without Science. */
  stem: { score: number; range: ScoreRange } | null
  skills: ActFlSkillScore[]
  correct: number
  total: number
}

export interface ActFlGradedLike {
  section: ActFLSection
  skill: ActFLSkill
  isCorrect: boolean
}

/**
 * Score a graded sitting. Unanswered questions count wrong (they are in
 * `items` with isCorrect false). Sections with no items are left out.
 */
export function scoreActFullLength(
  items: readonly ActFlGradedLike[],
  includeScience: boolean,
  elapsed: Partial<Record<ActFLSection, number>> = {},
): ActFlScore {
  const sections: ActFlSectionScore[] = []
  for (const section of actFlSections(includeScience)) {
    const mine = items.filter((i) => i.section === section)
    if (!mine.length) continue
    const correct = mine.filter((i) => i.isCorrect).length
    const scaled = actSectionScaled(correct / mine.length)
    const out: ActFlSectionScore = {
      section,
      label: ACT_FL_SECTION_LABELS[section],
      correct,
      total: mine.length,
      scaled,
      range: projectionRange(scaled, 'medium'),
    }
    const e = elapsed[section]
    if (typeof e === 'number' && Number.isFinite(e)) out.elapsedSeconds = Math.max(0, Math.round(e))
    sections.push(out)
  }
  const scaledOf = (s: ActFLSection) => sections.find((x) => x.section === s)?.scaled
  const core = ACT_FL_CORE_SECTIONS.map(scaledOf).filter((v): v is number => typeof v === 'number')
  const composite = actComposite(core)
  const math = scaledOf('math')
  const science = includeScience ? scaledOf('science') : undefined
  const stemScore = typeof math === 'number' && typeof science === 'number' ? actComposite([math, science]) : null

  const bySkill = new Map<ActFLSkill, ActFlSkillScore>()
  for (const it of items) {
    if (!includeScience && it.section === 'science') continue
    const meta = ACT_FL_SKILL_META[it.skill]
    if (!meta) continue
    const row = bySkill.get(it.skill) ?? { skill: it.skill, label: meta.label, section: meta.section, correct: 0, total: 0 }
    row.total++
    if (it.isCorrect) row.correct++
    bySkill.set(it.skill, row)
  }
  const skillOrder = Object.keys(ACT_FL_SKILL_META) as ActFLSkill[]
  const skills = [...bySkill.values()].sort((a, b) => skillOrder.indexOf(a.skill) - skillOrder.indexOf(b.skill))

  const counted = items.filter((i) => includeScience || i.section !== 'science')
  return {
    includeScience,
    sections,
    composite,
    compositeRange: projectionRange(composite, 'high'),
    stem: stemScore === null ? null : { score: stemScore, range: projectionRange(stemScore, 'medium') },
    skills,
    correct: counted.filter((i) => i.isCorrect).length,
    total: counted.length,
  }
}

/** Skills below this accuracy feed "what to study next". */
export const ACT_FL_WEAK_SKILL = 0.7

/**
 * Topics to study from a scored sitting: the lesson topic behind each skill
 * under ACT_FL_WEAK_SKILL accuracy (weakest first; under 50% = high priority),
 * one entry per topic. Skills with fewer than 3 questions are ignored.
 */
export function actFlStudyTopics(skills: readonly ActFlSkillScore[]): { slug: string; skill: ActFLSkill; priority: 'high' | 'medium'; accuracy: number }[] {
  const out: { slug: string; skill: ActFLSkill; priority: 'high' | 'medium'; accuracy: number }[] = []
  const seen = new Set<string>()
  const ranked = skills
    .filter((s) => s.total >= 3)
    .map((s) => ({ s, acc: s.correct / s.total }))
    .filter(({ acc }) => acc < ACT_FL_WEAK_SKILL)
    .sort((a, b) => a.acc - b.acc)
  for (const { s, acc } of ranked) {
    const slug = ACT_FL_SKILL_META[s.skill].topicSlug
    if (seen.has(slug)) continue
    seen.add(slug)
    out.push({ slug, skill: s.skill, priority: acc < 0.5 ? 'high' : 'medium', accuracy: acc })
  }
  return out
}

/** "27 (26–28)" */
export function formatActRange(score: number, range: ScoreRange): string {
  return range.low === range.high ? `${score}` : `${score} (${range.low}–${range.high})`
}
