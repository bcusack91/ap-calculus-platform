/**
 * SAT competitive question bank — section → domain → skill hierarchy.
 *
 * Mirrors the MCAT bank's three-level shape, but follows the official College
 * Board Digital SAT blueprint:
 *
 *   SECTION (2, the scored sections)
 *     └── DOMAIN (8 — 4 math, 4 reading & writing)
 *           └── SKILL (37 — the 29 official "skill/knowledge testing points"
 *                      plus 8 finer practice pools; see SatSkill.officialSkill)
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
import { satMathAlgebra2Questions } from './sat-questions-math-algebra-2'
import { satMathAdvancedQuestions } from './sat-questions-math-advanced'
import { satMathAdvanced2Questions } from './sat-questions-math-advanced-2'
import { satMathProblemSolvingQuestions } from './sat-questions-math-problem-solving'
import { satMathGeometryQuestions } from './sat-questions-math-geometry'
import { satRwQuestions } from './sat-questions-rw'

export interface SatSkill {
  /** Competitive slug — 'sat-skill-<key>'. */
  slug: string
  /**
   * The full name — the official College Board wording for official skills.
   * Shown as a tooltip in the picker, and kept verbatim for blueprint fidelity.
   */
  title: string
  /**
   * Short label for the picker UI. College Board's official names run up to 77
   * characters ("Nonlinear equations in one variable and systems of equations
   * in two variables"), which turn the skill picker into a wall of prose. The
   * picker shows this; `title` remains the authoritative name.
   */
  short: string
  /**
   * Exact `skill` tag(s) used in sat-math-bank / sat-rw-bank. Questions are
   * pulled by matching this string, so it must stay in sync with the banks —
   * scripts/verify-sat-questions.ts fails the build if a tag stops matching.
   * Empty for practice subdivisions, whose questions are all authored.
   */
  tags: string[]
  /**
   * The official College Board skill this belongs to, when this entry is a
   * PRACTICE SUBDIVISION rather than an official skill itself.
   *
   * College Board's taxonomy is uneven: "Nonlinear functions" is one named
   * skill covering quadratic graphs, exponentials, polynomial/rational
   * behavior, and transformations, while Algebra splits comparable content
   * across five. Treating that as one playable pool under-serves Advanced Math,
   * which carries ~35% of the math section — the same weight as Algebra.
   *
   * So the official skills remain (blueprint fidelity, and they keep the
   * bank-tagged questions), and finer pools sit alongside them for practice.
   * Pools intentionally OVERLAP in content; they are practice sets, not a
   * partition of the question bank.
   */
  officialSkill?: string
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

const skill = (key: string, title: string, short: string, tags?: string[]): SatSkill => ({
  slug: `sat-skill-${key}`,
  title,
  short,
  tags: tags ?? [title],
})

/** A finer practice pool sitting under an official College Board skill. */
const sub = (key: string, title: string, short: string, officialSkill: string): SatSkill => ({
  slug: `sat-skill-${key}`,
  title,
  short,
  tags: [],
  officialSkill,
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
          skill('linear-equations-one-var', 'Linear equations in one variable', 'Linear Equations'),
          skill('linear-equations-two-var', 'Linear equations in two variables', 'Two-Variable Equations'),
          skill('linear-functions', 'Linear functions', 'Linear Functions'),
          skill('systems-linear-equations', 'Systems of two linear equations in two variables', 'Systems of Equations'),
          skill('linear-inequalities', 'Linear inequalities in one or two variables', 'Linear Inequalities'),
          // Systems of inequalities (shaded-region problems) and reading linear
          // relationships off a graph are heavily tested but had ~1 and ~22
          // questions respectively across the whole math bank.
          sub('systems-inequalities', 'Systems of Inequalities & Regions', 'Systems of Inequalities', 'Linear inequalities in one or two variables'),
          sub('graphing-linear', 'Graphing Linear Relationships', 'Graphing Lines', 'Linear equations in two variables'),
        ],
      },
      {
        slug: 'sat-math-advanced',
        title: 'Advanced Math',
        emoji: '🧮',
        skills: [
          skill('equivalent-expressions', 'Equivalent expressions', 'Equivalent Expressions'),
          skill('nonlinear-equations', 'Nonlinear equations in one variable and systems of equations in two variables', 'Nonlinear Equations'),
          skill('nonlinear-functions', 'Nonlinear functions', 'Nonlinear Functions'),
          // Practice subdivisions — see SatSkill.officialSkill. Advanced Math is
          // ~35% of the math section but the official taxonomy names only 3
          // skills for it, so these break the grab-bags into playable pools.
          sub('quadratic-equations', 'Quadratic Equations & the Quadratic Formula', 'Quadratic Equations', 'Nonlinear equations in one variable and systems of equations in two variables'),
          sub('quadratic-graphs', 'Quadratic Graphs & Vertex Form', 'Quadratic Graphs', 'Nonlinear functions'),
          sub('exponential-functions', 'Exponential Functions & Growth/Decay', 'Exponentials', 'Nonlinear functions'),
          sub('polynomial-rational', 'Polynomials & Rational Expressions', 'Polynomials & Rationals', 'Equivalent expressions'),
          sub('radicals-absolute-complex', 'Radicals, Absolute Value & Complex Numbers', 'Radicals & Complex', 'Nonlinear equations in one variable and systems of equations in two variables'),
          sub('function-notation-transformations', 'Function Notation, Composition & Transformations', 'Functions & Transformations', 'Nonlinear functions'),
        ],
      },
      {
        slug: 'sat-math-problem-solving',
        title: 'Problem-Solving & Data Analysis',
        emoji: '📈',
        skills: [
          skill('ratios-rates-units', 'Ratios, rates, proportional relationships, and units', 'Ratios & Rates'),
          skill('percentages', 'Percentages', 'Percentages'),
          skill('one-variable-data', 'One-variable data: distributions and measures of center and spread', 'One-Variable Data'),
          skill('two-variable-data', 'Two-variable data: models and scatterplots', 'Scatterplots & Models'),
          skill('probability', 'Probability and conditional probability', 'Probability'),
          skill('sample-inference', 'Inference from sample statistics and margin of error', 'Sampling & Margin of Error'),
          skill('statistical-claims', 'Evaluating statistical claims: observational studies and experiments', 'Study Design & Claims'),
        ],
      },
      {
        slug: 'sat-math-geometry',
        title: 'Geometry & Trigonometry',
        emoji: '📏',
        skills: [
          skill('area-volume', 'Area and volume', 'Area & Volume'),
          skill('lines-angles-triangles', 'Lines, angles, and triangles', 'Lines, Angles & Triangles'),
          skill('right-triangles-trig', 'Right triangles and trigonometry', 'Right Triangles & Trig'),
          skill('circles', 'Circles', 'Circles'),
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
          skill('central-ideas-details', 'Central Ideas and Details', 'Central Ideas'),
          skill('inferences', 'Inferences', 'Inferences'),
          skill('command-of-evidence', 'Command of Evidence', 'Command of Evidence'),
        ],
      },
      {
        slug: 'sat-rw-craft-structure',
        title: 'Craft & Structure',
        emoji: '🎨',
        skills: [
          skill('words-in-context', 'Words in Context', 'Words in Context'),
          skill('text-structure-purpose', 'Text Structure and Purpose', 'Text Structure'),
          skill('cross-text-connections', 'Cross-Text Connections', 'Cross-Text Links'),
        ],
      },
      {
        slug: 'sat-rw-expression',
        title: 'Expression of Ideas',
        emoji: '✍️',
        skills: [
          skill('rhetorical-synthesis', 'Rhetorical Synthesis', 'Rhetorical Synthesis'),
          skill('transitions', 'Transitions', 'Transitions'),
        ],
      },
      {
        slug: 'sat-rw-conventions',
        title: 'Standard English Conventions',
        emoji: '📝',
        skills: [
          skill('boundaries', 'Boundaries', 'Boundaries'),
          skill('form-structure-sense', 'Form, Structure, and Sense', 'Form & Structure'),
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
  ...satMathAlgebra2Questions,
  ...satMathAdvancedQuestions,
  ...satMathAdvanced2Questions,
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
