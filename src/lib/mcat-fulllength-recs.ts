/**
 * Client-side, no-DB topic recommendations for the MCAT full-length results
 * screen — the full-length analogue of scoreMCATDiagnostic's recommendedTopics.
 *
 * The full-length questions carry only an optional free-text `skill`; they have
 * NO topic slug. Rather than edit ~240 questions, we attribute each question to
 * a topic via its PASSAGE: passage.discipline (an exact, already-present string)
 * maps to the SAME canonical `-mcat` topic slugs the live diagnostic recommends
 * (diagnostic-generator.ts CANONICAL_TOPIC_MAP), so every link resolves to a
 * real /topics/[slug]. Unmapped disciplines (e.g. the synthetic 'Discrete
 * questions' passages, or any future discipline) fall back to the passage's
 * section. Thresholds mirror the diagnostic exactly: >=70 strong (skip),
 * >=40 moderate (medium), <40 weak (high).
 */
import type { MCATPassage, MCATSection } from '@/data/mcat/types'

export interface FullLengthTopicRec {
  slug: string
  name: string
  priority: 'high' | 'medium'
}

/**
 * passage.discipline (exact strings as authored in src/data/mcat/passages/*)
 * -> canonical `-mcat` topic slug. Every target slug is one the live diagnostic
 * already recommends (CANONICAL_TOPIC_MAP) and is seeded as a real Topic in
 * prisma/seed-mcat-prep.ts. CARS disciplines are humanities/social-science
 * genres; they all roll up to the single CARS strategy topic, matching the
 * diagnostic's one CARS domain.
 */
export const DISCIPLINE_TOPIC_MAP: Record<string, string> = {
  // ---- Chem/Phys ----
  'general chemistry': 'mcat-general-chemistry-mcat',
  thermodynamics: 'mcat-general-chemistry-mcat',
  'organic chemistry': 'mcat-organic-chemistry-mcat',
  physics: 'mcat-physics-mechanics-mcat',
  // ---- Bio/Biochem ----
  biochemistry: 'mcat-biochemistry-foundations-mcat',
  metabolism: 'mcat-biochemistry-foundations-mcat',
  'cell biology': 'mcat-cell-biology-mcat',
  'molecular biology': 'mcat-cell-biology-mcat',
  microbiology: 'mcat-cell-biology-mcat',
  immunology: 'mcat-cell-biology-mcat',
  genetics: 'mcat-genetics-evolution-mcat',
  physiology: 'mcat-organ-systems-mcat',
  // ---- CARS (all humanities / social-science genres) ----
  philosophy: 'mcat-cars-strategy-mcat',
  'ethics / political philosophy': 'mcat-cars-strategy-mcat',
  'art / aesthetics': 'mcat-cars-strategy-mcat',
  'literary criticism': 'mcat-cars-strategy-mcat',
  'history / historiography': 'mcat-cars-strategy-mcat',
  'music / cultural criticism': 'mcat-cars-strategy-mcat',
  'cultural anthropology': 'mcat-cars-strategy-mcat',
  economics: 'mcat-cars-strategy-mcat',
  'political science': 'mcat-cars-strategy-mcat',
  psychology: 'mcat-cars-strategy-mcat',
  linguistics: 'mcat-cars-strategy-mcat',
  // ---- Psych/Soc ----
  'learning-and-memory': 'mcat-psychology-behavior-mcat',
  'social-psychology': 'mcat-psychology-behavior-mcat',
  'cognition-and-perception': 'mcat-psychology-behavior-mcat',
  'sensation-and-perception': 'mcat-psychology-behavior-mcat',
  'developmental-psychology': 'mcat-psychology-behavior-mcat',
  'biological-basis-of-behavior': 'mcat-psychology-behavior-mcat',
  'personality-and-disorders': 'mcat-psychology-behavior-mcat',
}
// NOTE: 'sociology' is authored in BOTH the psych-soc bank (section 'psych-soc')
// and the CARS social-science bank (section 'cars'), so it is intentionally NOT
// in the map above — passageTopicSlug() disambiguates it by section below.

/** Fallback when a discipline is unmapped (e.g. the synthetic 'Discrete questions'). */
export const SECTION_TOPIC_FALLBACK: Record<MCATSection, string> = {
  'chem-phys': 'mcat-general-chemistry-mcat',
  cars: 'mcat-cars-strategy-mcat',
  'bio-biochem': 'mcat-cell-biology-mcat',
  'psych-soc': 'mcat-psychology-behavior-mcat',
}

/** Human-readable label per canonical slug for the recommendation card. */
export const TOPIC_NAMES: Record<string, string> = {
  'mcat-general-chemistry-mcat': 'General Chemistry',
  'mcat-organic-chemistry-mcat': 'Organic Chemistry',
  'mcat-physics-mechanics-mcat': 'Physics',
  'mcat-physics-electricity-mcat': 'Physics (Electricity & Magnetism)',
  'mcat-biochemistry-foundations-mcat': 'Biochemistry',
  'mcat-cars-strategy-mcat': 'CARS Strategy',
  'mcat-cell-biology-mcat': 'Cell & Molecular Biology',
  'mcat-organ-systems-mcat': 'Organ Systems & Physiology',
  'mcat-genetics-evolution-mcat': 'Genetics & Evolution',
  'mcat-psychology-behavior-mcat': 'Psychology & Sociology',
}

/**
 * Resolve a passage to its canonical topic slug. A discipline that is shared
 * across two sections (only 'sociology' today) is disambiguated by section so a
 * psych-soc 'sociology' passage routes to Psych/Soc, not CARS.
 */
function passageTopicSlug(p: MCATPassage): string {
  if (p.discipline === 'sociology') {
    return p.section === 'cars'
      ? 'mcat-cars-strategy-mcat'
      : 'mcat-psychology-behavior-mcat'
  }
  return DISCIPLINE_TOPIC_MAP[p.discipline] ?? SECTION_TOPIC_FALLBACK[p.section]
}

/**
 * Aggregate the runner's existing right/wrong data by canonical topic slug and
 * emit up to 5 recommendations. `answers` is the runner's "p:q" -> selected
 * index map; an unanswered question counts as incorrect (same as the diagnostic,
 * where answer === undefined fails the correctness check).
 */
export function recommendFromFullLength(
  passages: MCATPassage[],
  answers: Record<string, number>,
): FullLengthTopicRec[] {
  const agg = new Map<string, { correct: number; total: number }>()

  passages.forEach((p, pi) => {
    const slug = passageTopicSlug(p)
    const bucket = agg.get(slug) ?? { correct: 0, total: 0 }
    p.questions.forEach((q, qi) => {
      bucket.total++
      if (answers[`${pi}:${qi}`] === q.correctAnswer) bucket.correct++
    })
    agg.set(slug, bucket)
  })

  // Map keys are already unique, so no explicit dedupe is needed — sort by
  // study impact and cap at 5. Secondary sort is by miss-volume (most-missed
  // first), which mirrors the diagnostic's INTENT (it sorts by exam weight).
  return [...agg.entries()]
    .map(([slug, { correct, total }]) => {
      const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
      const level: 'strong' | 'moderate' | 'weak' =
        percentage >= 70 ? 'strong' : percentage >= 40 ? 'moderate' : 'weak'
      return { slug, correct, total, percentage, level }
    })
    .filter((r) => r.level !== 'strong')
    .sort((a, b) => {
      if (a.level !== b.level) return a.level === 'weak' ? -1 : 1
      return b.total - b.correct - (a.total - a.correct)
    })
    .slice(0, 5)
    .map<FullLengthTopicRec>((r) => ({
      slug: r.slug,
      name: TOPIC_NAMES[r.slug] ?? r.slug,
      priority: r.level === 'weak' ? 'high' : 'medium',
    }))
}
