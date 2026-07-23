/**
 * SAT competitive question bank — section → domain → skill hierarchy.
 *
 * Mirrors the MCAT bank's three-level shape, but follows the official College
 * Board Digital SAT blueprint:
 *
 *   SECTION (2, the scored sections)
 *     └── DOMAIN (8 — 4 math, 4 reading & writing)
 *           └── SKILL (29 — the official "skill/knowledge testing points")
 *
 * Questions are NOT duplicated here. The existing sat-math-bank and sat-rw-bank
 * already tag every question with its official College Board `skill` string, so
 * this file only groups and filters them, merged with competitive-specific
 * questions authored to bring every skill up to a full match's worth.
 *
 * Slug rules (what CompetitiveMatch.topicSlug stores) — the top two levels are
 * the slugs that ALREADY shipped, so existing matches, assignments, and unlock
 * records keep resolving unchanged. Only the skill tier is new:
 *   - skill    → 'sat-skill-<key>'   (e.g. sat-skill-linear-equations-one-var)
 *   - domain   → 'sat-math-algebra', 'sat-rw-conventions', …  (pre-existing)
 *   - section  → 'sat-math', 'sat-rw'                          (pre-existing)
 *   - whole test → 'sat'
 * Multi-skill selections use the generic `multi:` composite slug from
 * competitive-utils, which is what lets a teacher assign mixed practice drawn
 * from several skills — or from SAT plus another course entirely.
 */
import { getSatMathQuestions, type SatMathQuestion } from './sat-math-bank'
import { getSatRwQuestions, type SatRwQuestion } from './sat-rw-bank'
import { getSatPunctuationQuestions } from './sat-punctuation-bank'
import { getSatPunctuationGeneralQuestions } from './sat-punctuation-general-bank'
import type { SatBankQuestion } from './sat-question-types'
import { satMathAlgebraQuestions } from './sat-questions-math-algebra'
import { satMathAdvancedQuestions } from './sat-questions-math-advanced'
import { satMathProblemSolvingQuestions } from './sat-questions-math-problem-solving'
import { satMathGeometryQuestions } from './sat-questions-math-geometry'
import { satRwQuestions } from './sat-questions-rw'

export interface SatSkill {
  /** Competitive slug — 'sat-skill-<key>'. */
  slug: string
  /** Student-facing title (the official College Board skill name). */
  title: string
  /**
   * Exact `skill` tag(s) used in sat-math-bank / sat-rw-bank. Questions are
   * pulled by matching this string, so it must stay in sync with the banks —
   * scripts/verify-sat-questions.ts fails the build if a tag stops matching.
   */
  tags: string[]
}

export interface SatDomain {
  /** Pre-existing domain slug (do not rename — saved matches reference these). */
  slug: string
  title: string
  emoji: string
  skills: SatSkill[]
}

export interface SatSection {
  slug: string
  title: string
  emoji: string
  domains: SatDomain[]
}

const skill = (key: string, title: string, tags?: string[]): SatSkill => ({
  slug: `sat-skill-${key}`,
  title,
  tags: tags ?? [title],
})

export const SAT_SECTIONS: SatSection[] = [
  {
    slug: 'sat-math',
    title: 'Math',
    emoji: '📐',
    domains: [
      {
        slug: 'sat-math-algebra',
        title: 'Algebra',
        emoji: '📊',
        skills: [
          skill('linear-equations-one-var', 'Linear equations in one variable'),
          skill('linear-equations-two-var', 'Linear equations in two variables'),
          skill('linear-functions', 'Linear functions'),
          skill('systems-linear-equations', 'Systems of two linear equations in two variables'),
          skill('linear-inequalities', 'Linear inequalities in one or two variables'),
        ],
      },
      {
        slug: 'sat-math-advanced',
        title: 'Advanced Math',
        emoji: '🧮',
        skills: [
          skill('equivalent-expressions', 'Equivalent expressions'),
          skill('nonlinear-equations', 'Nonlinear equations in one variable and systems of equations in two variables'),
          skill('nonlinear-functions', 'Nonlinear functions'),
        ],
      },
      {
        slug: 'sat-math-problem-solving',
        title: 'Problem-Solving & Data Analysis',
        emoji: '📈',
        skills: [
          skill('ratios-rates-units', 'Ratios, rates, proportional relationships, and units'),
          skill('percentages', 'Percentages'),
          skill('one-variable-data', 'One-variable data: distributions and measures of center and spread'),
          skill('two-variable-data', 'Two-variable data: models and scatterplots'),
          skill('probability', 'Probability and conditional probability'),
          skill('sample-inference', 'Inference from sample statistics and margin of error'),
          skill('statistical-claims', 'Evaluating statistical claims: observational studies and experiments'),
        ],
      },
      {
        slug: 'sat-math-geometry',
        title: 'Geometry & Trigonometry',
        emoji: '📏',
        skills: [
          skill('area-volume', 'Area and volume'),
          skill('lines-angles-triangles', 'Lines, angles, and triangles'),
          skill('right-triangles-trig', 'Right triangles and trigonometry'),
          skill('circles', 'Circles'),
        ],
      },
    ],
  },
  {
    slug: 'sat-rw',
    title: 'Reading & Writing',
    emoji: '📖',
    domains: [
      {
        slug: 'sat-rw-information-ideas',
        title: 'Information & Ideas',
        emoji: '🔍',
        skills: [
          skill('central-ideas-details', 'Central Ideas and Details'),
          skill('inferences', 'Inferences'),
          skill('command-of-evidence', 'Command of Evidence'),
        ],
      },
      {
        slug: 'sat-rw-craft-structure',
        title: 'Craft & Structure',
        emoji: '🎨',
        skills: [
          skill('words-in-context', 'Words in Context'),
          skill('text-structure-purpose', 'Text Structure and Purpose'),
          skill('cross-text-connections', 'Cross-Text Connections'),
        ],
      },
      {
        slug: 'sat-rw-expression',
        title: 'Expression of Ideas',
        emoji: '✍️',
        skills: [
          skill('rhetorical-synthesis', 'Rhetorical Synthesis'),
          skill('transitions', 'Transitions'),
        ],
      },
      {
        slug: 'sat-rw-conventions',
        title: 'Standard English Conventions',
        emoji: '📝',
        skills: [
          skill('boundaries', 'Boundaries'),
          skill('form-structure-sense', 'Form, Structure, and Sense'),
        ],
      },
    ],
  },
]

export interface SatCompetitiveQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  /** Finest tag available: the skill slug. */
  topicSlug: string
}

// ---------------------------------------------------------------------------
// Indexes (built once at module load)
// ---------------------------------------------------------------------------

export const SAT_SKILLS: SatSkill[] = SAT_SECTIONS.flatMap(s => s.domains.flatMap(d => d.skills))
export const SAT_DOMAINS: SatDomain[] = SAT_SECTIONS.flatMap(s => s.domains)

/** skill slug → skill. */
const SKILL_BY_SLUG = new Map(SAT_SKILLS.map(s => [s.slug, s]))
/** domain slug → its skill slugs. */
const DOMAIN_SKILLS = new Map(SAT_DOMAINS.map(d => [d.slug, d.skills.map(s => s.slug)]))
/** section slug → its skill slugs. */
const SECTION_SKILLS = new Map(SAT_SECTIONS.map(s => [s.slug, s.domains.flatMap(d => d.skills.map(k => k.slug))]))
/** College Board skill tag → skill slug. */
const SLUG_BY_TAG = new Map<string, string>()
for (const s of SAT_SKILLS) for (const t of s.tags) SLUG_BY_TAG.set(t, s.slug)

/** Authored competitive questions indexed by skill slug. */
const AUTHORED_BY_SKILL = new Map<string, SatBankQuestion[]>()
for (const q of [
  ...satMathAlgebraQuestions,
  ...satMathAdvancedQuestions,
  ...satMathProblemSolvingQuestions,
  ...satMathGeometryQuestions,
  ...satRwQuestions,
]) {
  const list = AUTHORED_BY_SKILL.get(q.skillSlug) ?? []
  list.push(q)
  AUTHORED_BY_SKILL.set(q.skillSlug, list)
}

/** Existing-bank questions indexed by skill slug (via their College Board tag). */
const BANK_BY_SKILL = new Map<string, SatCompetitiveQuestion[]>()
{
  const push = (slug: string, q: Omit<SatCompetitiveQuestion, 'topicSlug' | 'id'>) => {
    const list = BANK_BY_SKILL.get(slug) ?? []
    list.push({ ...q, id: list.length, topicSlug: slug })
    BANK_BY_SKILL.set(slug, list)
  }
  const ingest = (qs: Array<SatMathQuestion | SatRwQuestion>) => {
    for (const q of qs) {
      const slug = q.skill ? SLUG_BY_TAG.get(q.skill) : undefined
      if (!slug) continue // untagged or retired tag — surfaced by the verifier
      push(slug, { question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, difficulty: q.difficulty })
    }
  }
  // `Infinity` would break the banks' slice-based getters; a large finite count
  // reliably returns everything (largest bank is a few hundred questions).
  ingest(getSatMathQuestions(100000) as SatMathQuestion[])
  ingest(getSatRwQuestions(100000) as SatRwQuestion[])
  // The two legacy punctuation banks predate the Digital SAT skill taxonomy and
  // carry no `skill` tag, but their content is exactly Standard English
  // Conventions: comma/semicolon/colon splices are Boundaries, everything else
  // (agreement, tense, modifiers) is Form, Structure, and Sense.
  for (const q of getSatPunctuationQuestions(100000)) {
    push('sat-skill-boundaries', { question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, difficulty: (q as { difficulty?: 'easy' | 'medium' | 'hard' }).difficulty ?? 'medium' })
  }
  for (const q of getSatPunctuationGeneralQuestions(100000)) {
    push('sat-skill-form-structure-sense', { question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, difficulty: (q as { difficulty?: 'easy' | 'medium' | 'hard' }).difficulty ?? 'medium' })
  }
}

/** Every question available for a single skill (existing bank + authored). */
export function questionsForSkill(skillSlug: string): SatCompetitiveQuestion[] {
  const fromBank = BANK_BY_SKILL.get(skillSlug) ?? []
  const authored = (AUTHORED_BY_SKILL.get(skillSlug) ?? []).map((q, i) => ({
    id: fromBank.length + i,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    difficulty: q.difficulty,
    topicSlug: skillSlug,
  }))
  return [...fromBank, ...authored]
}

/** Whole-test slug — every skill in both sections. */
export const SAT_ALL_SLUG = 'sat'

/** Number of distinct questions available for any hierarchy slug. */
export function satQuestionCount(slug: string): number {
  return skillSlugsFor(slug).reduce((n, s) => n + questionsForSkill(s).length, 0)
}

/** Skill slugs covered by any level of the hierarchy, or [] if not an SAT slug. */
export function skillSlugsFor(slug: string): string[] {
  if (slug === 'sat') return SAT_SKILLS.map(s => s.slug)
  if (SKILL_BY_SLUG.has(slug)) return [slug]
  const domain = DOMAIN_SKILLS.get(slug)
  if (domain) return domain
  const section = SECTION_SKILLS.get(slug)
  if (section) return section
  return []
}

/** True when this slug names any node of the SAT hierarchy. */
export function isSatHierarchySlug(slug: string): boolean {
  return skillSlugsFor(slug).length > 0
}

/**
 * Draw `count` questions for any SAT hierarchy slug. Broader slugs round-robin
 * across their skills so a domain or whole-section match stays balanced instead
 * of over-drawing from whichever skill happens to have the deepest pool.
 */
export function getSatQuestions(count: number, slug: string): SatCompetitiveQuestion[] {
  const skills = skillSlugsFor(slug)
  if (skills.length === 0) return []

  const pools = skills.map(s => shuffle(questionsForSkill(s))).filter(p => p.length > 0)
  if (pools.length === 0) return []

  const out: SatCompetitiveQuestion[] = []
  for (let round = 0; out.length < count; round++) {
    let drewAny = false
    for (const pool of pools) {
      if (round >= pool.length) continue
      out.push(pool[round])
      drewAny = true
      if (out.length >= count) break
    }
    if (!drewAny) break // every pool exhausted
  }
  return shuffle(out).slice(0, count).map((q, i) => ({ ...q, id: i }))
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
