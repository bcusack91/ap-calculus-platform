/**
 * SAT competitive question bank — section → category → challenge → pool.
 *
 * TWO trees share this file, and the distinction is the whole design:
 *
 *  - SAT_POOL_SECTIONS (internal tier) follows the official College Board
 *    Digital SAT blueprint: 2 sections → 8 domains → 37 POOLS (the 29 official
 *    "skill/knowledge testing points" plus 8 finer practice pools). Questions
 *    are tagged at this tier and its slugs are what already-saved matches,
 *    lobbies, and assignments reference — never rename or remove them.
 *
 *  - SAT_SECTIONS (display tier) mirrors the sat-prep CURRICULUM instead: the
 *    same 8 domains retitled to the lesson category names students study under
 *    ("Heart of Algebra", "Passport to Advanced Math", …), each containing
 *    CHALLENGES whose slug and title are copied verbatim from the interactive
 *    lesson topics (DB course `sat-prep`). A challenge draws from one or more
 *    pools via `members` — competitive is more granular than the curriculum, so
 *    several pools combine into one lesson-named challenge. This is what every
 *    picker shows, so what students battle on is named exactly like what they
 *    study. Challenges deliberately may exceed 40 questions.
 *
 * Questions are NOT duplicated here. The existing sat-math-bank and sat-rw-bank
 * already tag every question with its official College Board `skill` string, so
 * this file only groups and filters them, merged with competitive-specific
 * questions authored to bring every pool up to a full match's worth.
 *
 * Slug rules (what CompetitiveMatch.topicSlug stores) — every tier resolves,
 * old and new, so nothing saved ever breaks:
 *   - challenge → 'sat-topic-<key>'  where 'sat-<key>' is the sat-prep lesson
 *                 topic slug (e.g. sat-topic-quadratic-equations ↔ the lesson
 *                 'sat-quadratic-equations'). The 'sat-topic-' namespace avoids
 *                 colliding with the legacy bank pseudo-slug 'sat-punctuation'.
 *   - pool     → 'sat-skill-<key>'   (e.g. sat-skill-linear-equations-one-var)
 *   - domain   → 'sat-math-algebra', 'sat-rw-conventions', …  (pre-existing)
 *   - section  → 'sat-math', 'sat-rw'                          (pre-existing)
 *   - whole test → 'sat'
 * Multi-topic selections use the generic `multi:` composite slug from
 * competitive-utils, which is what lets a teacher assign mixed practice drawn
 * from several challenges — or from SAT plus another course entirely.
 *
 * Lesson topics with no matching challenge (deliberate): strategy-only topics
 * (Test-Taking Strategies), retired content ("Complex Numbers on the SAT" —
 * the Digital SAT does not test complex numbers), and legacy duplicates whose
 * pool already appears under the current name ("Finding Textual Evidence" ≡
 * Command of Evidence, "Conciseness and Redundancy" ≡ Effective Language Use,
 * and 5 of the 7 conventions lessons, which all share the 2 conventions pools).
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
  /** Competitive slug — 'sat-skill-<key>' for pools, 'sat-topic-<key>' for challenges. */
  slug: string
  /**
   * The full name. For pools this is the official College Board wording, kept
   * verbatim for blueprint fidelity; for challenges it is the interactive
   * lesson's title, kept verbatim for curriculum congruence.
   */
  title: string
  /**
   * Short label for the picker UI. College Board's official names run up to 77
   * characters, which turn the picker into a wall of prose. Challenges use the
   * lesson title itself — that's the point of them.
   */
  short: string
  /**
   * Exact `skill` tag(s) used in sat-math-bank / sat-rw-bank. Questions are
   * pulled by matching this string, so it must stay in sync with the banks —
   * scripts/verify-sat-questions.ts fails the build if a tag stops matching.
   * Empty for practice subdivisions and challenges, whose questions come from
   * authored files / member pools respectively.
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
  /**
   * CHALLENGE entries only: the pool slugs this challenge draws questions from.
   * Pools never overlap in questions (each question belongs to exactly one
   * pool), so a challenge's union is duplicate-free. Two challenges MAY share a
   * member pool — like the practice subdivisions, challenges are study surfaces
   * mirroring the lesson catalog, not a partition of the bank.
   */
  members?: string[]
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

/**
 * A lesson-aligned challenge. `lessonSlug` is the sat-prep DB topic slug
 * verbatim (so the two systems stay keyed 1:1); the competitive slug swaps the
 * 'sat-' prefix for 'sat-topic-'.
 */
const challenge = (lessonSlug: string, title: string, members: string[]): SatSkill => ({
  slug: `sat-topic-${lessonSlug.replace(/^sat-/, '')}`,
  title,
  short: title,
  tags: [],
  members: members.map(m => `sat-skill-${m}`),
})

/**
 * QUESTION-POOL tier — official College Board Digital SAT blueprint. Slugs and
 * tags are load-bearing (saved matches + bank question tags); display surfaces
 * should use SAT_SECTIONS below instead.
 */
export const SAT_POOL_SECTIONS: SatSection[] = [
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

/**
 * DISPLAY tier — what every picker renders. Same 8 domains (same slugs, so
 * "All of <domain>" selections keep resolving), retitled to the sat-prep lesson
 * CATEGORY names, each holding lesson-named challenges. The member keys below
 * are pool keys ('sat-skill-' is prefixed by the helper).
 */
export const SAT_SECTIONS: SatSection[] = [
  {
    slug: 'sat-math',
    title: 'Math',
    emoji: '📐',
    domains: [
      {
        slug: 'sat-math-algebra',
        title: 'Heart of Algebra',
        emoji: '📊',
        skills: [
          challenge('sat-linear-equations-inequalities', 'Linear Equations and Inequalities',
            ['linear-equations-one-var', 'linear-equations-two-var', 'linear-inequalities']),
          challenge('sat-functions', 'Functions',
            ['linear-functions', 'function-notation-transformations']),
          challenge('sat-systems-linear-equations', 'Systems of Linear Equations',
            ['systems-linear-equations']),
          challenge('sat-linear-inequalities-graphs', 'Linear Inequalities and Graphs',
            ['linear-inequalities', 'systems-inequalities', 'graphing-linear']),
        ],
      },
      {
        slug: 'sat-math-problem-solving',
        title: 'Problem Solving and Data Analysis',
        emoji: '📈',
        skills: [
          challenge('sat-ratios-proportions-percents', 'Ratios, Proportions, and Percents',
            ['ratios-rates-units', 'percentages']),
          challenge('sat-statistics-data-interpretation', 'Statistics and Data Interpretation',
            ['one-variable-data', 'sample-inference']),
          challenge('sat-probability-two-way-tables', 'Probability and Two-Way Tables',
            ['probability']),
          challenge('sat-scatterplots-line-fit', 'Scatterplots and Line of Best Fit',
            ['two-variable-data']),
          challenge('sat-data-statistics', 'Data Collection and Statistics',
            ['statistical-claims', 'sample-inference']),
        ],
      },
      {
        slug: 'sat-math-advanced',
        title: 'Passport to Advanced Math',
        emoji: '🧮',
        skills: [
          challenge('sat-quadratic-equations', 'Quadratic Equations',
            ['quadratic-equations', 'quadratic-graphs']),
          challenge('sat-exponents-radicals', 'Exponents and Radicals',
            ['radicals-absolute-complex']),
          challenge('sat-polynomial-rational-expressions', 'Polynomial and Rational Expressions',
            ['polynomial-rational']),
          challenge('sat-nonlinear-equations-functions', 'Nonlinear Equations and Functions',
            ['nonlinear-equations', 'nonlinear-functions']),
          challenge('sat-exponential-functions', 'Exponential Functions',
            ['exponential-functions']),
          challenge('sat-polynomials-factoring', 'Polynomials and Factoring',
            ['equivalent-expressions']),
        ],
      },
      {
        slug: 'sat-math-geometry',
        title: 'Additional Topics in Math',
        emoji: '📏',
        skills: [
          challenge('sat-geometry-basics', 'Geometry Basics',
            ['lines-angles-triangles', 'area-volume']),
          challenge('sat-geometry-trigonometry', 'Geometry and Trigonometry',
            ['right-triangles-trig', 'lines-angles-triangles']),
          challenge('sat-circles', 'Circles',
            ['circles']),
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
        title: 'Information and Ideas',
        emoji: '🔍',
        skills: [
          challenge('sat-reading-comprehension', 'Reading Comprehension Strategies',
            ['central-ideas-details', 'inferences', 'text-structure-purpose', 'cross-text-connections']),
          challenge('sat-central-ideas-details', 'Central Ideas and Details',
            ['central-ideas-details']),
          challenge('sat-command-evidence', 'Command of Evidence',
            ['command-of-evidence']),
        ],
      },
      {
        slug: 'sat-rw-craft-structure',
        title: 'Craft and Structure',
        emoji: '🎨',
        skills: [
          challenge('sat-vocabulary-context', 'Vocabulary in Context',
            ['words-in-context']),
        ],
      },
      {
        slug: 'sat-rw-expression',
        title: 'Expression of Ideas',
        emoji: '✍️',
        skills: [
          challenge('sat-effective-language-use', 'Effective Language Use',
            ['rhetorical-synthesis']),
          challenge('sat-transitions-organization', 'Transitions and Organization',
            ['transitions']),
        ],
      },
      {
        slug: 'sat-rw-conventions',
        title: 'Standard English Conventions',
        emoji: '📝',
        skills: [
          challenge('sat-punctuation', 'Punctuation',
            ['boundaries']),
          challenge('sat-grammar-conventions', 'Grammar and Conventions',
            ['form-structure-sense']),
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
  /** Finest tag available: the pool slug. */
  topicSlug: string
}

// ---------------------------------------------------------------------------
// Indexes (built once at module load)
// ---------------------------------------------------------------------------

/** The 37 question pools (tag tier) — what questions are actually keyed by. */
export const SAT_POOLS: SatSkill[] = SAT_POOL_SECTIONS.flatMap(s => s.domains.flatMap(d => d.skills))
/** The lesson-aligned challenges (display tier). */
export const SAT_SKILLS: SatSkill[] = SAT_SECTIONS.flatMap(s => s.domains.flatMap(d => d.skills))
export const SAT_DOMAINS: SatDomain[] = SAT_SECTIONS.flatMap(s => s.domains)

/** Pools belonging to a domain (unit tests draw these — disjoint, unlike challenges). */
export function poolsForDomain(domainSlug: string): SatSkill[] {
  return SAT_POOL_SECTIONS.flatMap(s => s.domains).find(d => d.slug === domainSlug)?.skills ?? []
}

/** Any resolvable leaf entry (pool or challenge) by slug. */
const SKILL_BY_SLUG = new Map([...SAT_POOLS, ...SAT_SKILLS].map(s => [s.slug, s]))
/** domain slug → its POOL slugs (original blueprint grouping — saved domain matches rely on it). */
const DOMAIN_SKILLS = new Map(
  SAT_POOL_SECTIONS.flatMap(s => s.domains).map(d => [d.slug, d.skills.map(k => k.slug)]),
)
/** section slug → its POOL slugs. */
const SECTION_SKILLS = new Map(
  SAT_POOL_SECTIONS.map(s => [s.slug, s.domains.flatMap(d => d.skills.map(k => k.slug))]),
)
/** College Board skill tag → pool slug. */
const SLUG_BY_TAG = new Map<string, string>()
for (const s of SAT_POOLS) for (const t of s.tags) SLUG_BY_TAG.set(t, s.slug)

/** Authored competitive questions indexed by pool slug. */
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

/** Existing-bank questions indexed by pool slug (via their College Board tag). */
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

/**
 * Every question available for a single pool or challenge. Challenges return
 * the union of their member pools (pools are disjoint in questions, so the
 * union is duplicate-free), re-numbered for stable per-call ids.
 */
export function questionsForSkill(slug: string): SatCompetitiveQuestion[] {
  const entry = SKILL_BY_SLUG.get(slug)
  if (entry?.members) {
    return entry.members.flatMap(m => questionsForSkill(m)).map((q, i) => ({ ...q, id: i }))
  }
  const fromBank = BANK_BY_SKILL.get(slug) ?? []
  const authored = (AUTHORED_BY_SKILL.get(slug) ?? []).map((q, i) => ({
    id: fromBank.length + i,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    difficulty: q.difficulty,
    topicSlug: slug,
  }))
  return [...fromBank, ...authored]
}

/** Whole-test slug — every skill in both sections. */
export const SAT_ALL_SLUG = 'sat'

/** Number of distinct questions available for any hierarchy slug. */
export function satQuestionCount(slug: string): number {
  return skillSlugsFor(slug).reduce((n, s) => n + questionsForSkill(s).length, 0)
}

/** POOL slugs covered by any level of the hierarchy, or [] if not an SAT slug. */
export function skillSlugsFor(slug: string): string[] {
  if (slug === 'sat') return SAT_POOLS.map(s => s.slug)
  const entry = SKILL_BY_SLUG.get(slug)
  if (entry) return entry.members ?? [slug]
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
 * across their pools so a challenge, domain, or whole-section match stays
 * balanced instead of over-drawing from whichever pool happens to be deepest.
 * Every pool is shuffled first and the result is re-shuffled, so selection is
 * random on every call; difficulty mixing happens downstream (the caller feeds
 * the full draw through pickTieredQuestions when a tier is chosen).
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
