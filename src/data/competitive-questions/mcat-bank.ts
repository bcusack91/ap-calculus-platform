/**
 * MCAT competitive question bank.
 *
 * The MCAT is the one course with a real three-level hierarchy, mirroring the
 * AAMC exam blueprint:
 *
 *   SECTION (4, the scored AAMC sections)
 *     └── AREA (9 subject areas — the "subcourses")
 *           └── SUBTOPIC (25 finely-tagged topics)
 *
 * Questions are sourced from the existing MCAT exit-quiz pools rather than
 * duplicated here, so there is exactly one place to author MCAT content.
 * `generateExitQuiz` already preserves each question's subtopic tag in its
 * `category` field, which is what lets us filter to a single subtopic.
 *
 * Slug rules (these are what the queue/match pipeline stores in
 * CompetitiveMatch.topicSlug):
 *   - subtopic → the exit-quiz `subtopicSlug` (e.g. mcat-physics-mechanics-kinematics-mcat)
 *   - area     → 'mcat-area-<key>'      (e.g. mcat-area-biochemistry)
 *   - section  → 'mcat-section-<key>'   (e.g. mcat-section-chem-phys)
 *   - whole exam → 'mcat'
 * Multi-topic selections use the generic `multi:` composite slug handled in
 * competitive-utils (works across areas, sections, and even other courses).
 */
import { generateExitQuiz as genChemQuiz } from '../exit-quizzes/mcat-general-chemistry'
import { generateExitQuiz as orgChemQuiz } from '../exit-quizzes/mcat-organic-chemistry'
import { generateExitQuiz as physMechQuiz } from '../exit-quizzes/mcat-physics-mechanics'
import { generateExitQuiz as physElecQuiz } from '../exit-quizzes/mcat-physics-electricity'
import { generateExitQuiz as biochemQuiz } from '../exit-quizzes/mcat-biochemistry'
import { generateExitQuiz as bioQuiz } from '../exit-quizzes/mcat-biology'
import { generateExitQuiz as geneticsQuiz } from '../exit-quizzes/mcat-genetics-evolution'
import { generateExitQuiz as organsQuiz } from '../exit-quizzes/mcat-organ-systems'
import { generateExitQuiz as psychSocQuiz } from '../exit-quizzes/mcat-psychology-sociology'
import { generateExitQuiz as carsQuiz } from '../exit-quizzes/mcat-cars'
// Competitive-specific question sets (authored for head-to-head play). Merged
// with the exit-quiz pools so every subtopic has a full match's worth.
import type { McatBankQuestion } from './mcat-question-types'
import { chemistryQuestions } from './mcat-questions-chemistry'
import { chemistryQuestions2 } from './mcat-questions-chemistry-2'
import { physicsQuestions } from './mcat-questions-physics'
import { physicsQuestions2 } from './mcat-questions-physics-2'
import { biologyQuestions } from './mcat-questions-biology'
import { biologyQuestions2 } from './mcat-questions-biology-2'
import { biologyQuestions3 } from './mcat-questions-biology-3'
import { behavioralQuestions } from './mcat-questions-behavioral'
import { behavioralQuestions2 } from './mcat-questions-behavioral-2'
import { gapsChemPhysQuestions } from './mcat-questions-gaps-chemphys'
import { gapsBioPsychQuestions } from './mcat-questions-gaps-biopsych'

const AUTHORED: McatBankQuestion[] = [
  ...chemistryQuestions,
  ...chemistryQuestions2,
  ...physicsQuestions,
  ...physicsQuestions2,
  ...biologyQuestions,
  ...biologyQuestions2,
  ...biologyQuestions3,
  ...behavioralQuestions,
  ...behavioralQuestions2,
  ...gapsChemPhysQuestions,
  ...gapsBioPsychQuestions,
]

/** Authored questions indexed by subtopic slug (built once). */
const AUTHORED_BY_SUBTOPIC = new Map<string, McatBankQuestion[]>()
for (const q of AUTHORED) {
  const list = AUTHORED_BY_SUBTOPIC.get(q.subtopicSlug) ?? []
  list.push(q)
  AUTHORED_BY_SUBTOPIC.set(q.subtopicSlug, list)
}

export interface McatCompetitiveQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  /** Finest tag available: subtopic slug when tagged, else the area slug. */
  topicSlug: string
  areaSlug: string
  sectionSlug: string
}

export interface McatSubtopic {
  slug: string
  title: string
}

export interface McatArea {
  /** Area slug: 'mcat-area-<key>'. */
  slug: string
  title: string
  emoji: string
  subtopics: McatSubtopic[]
}

export interface McatSection {
  /** Section slug: 'mcat-section-<key>'. */
  slug: string
  title: string
  short: string
  emoji: string
  gradient: string
  areas: McatArea[]
}

type QuizFn = (count: number, topicSlug?: string) => Array<{
  question: string
  options: string[]
  correctIndex: number
  explanation?: string
  difficulty?: string
  category?: string
}>

/** area key → its source quiz generator. */
const AREA_SOURCE: Record<string, QuizFn> = {
  'general-chemistry': genChemQuiz as QuizFn,
  'organic-chemistry': orgChemQuiz as QuizFn,
  'physics-mechanics': physMechQuiz as QuizFn,
  'physics-electricity': physElecQuiz as QuizFn,
  biochemistry: biochemQuiz as QuizFn,
  biology: bioQuiz as QuizFn,
  'genetics-evolution': geneticsQuiz as QuizFn,
  'organ-systems': organsQuiz as QuizFn,
  'psychology-sociology': psychSocQuiz as QuizFn,
  cars: carsQuiz as QuizFn,
}

const sub = (slug: string, title: string): McatSubtopic => ({ slug, title })

export const MCAT_SECTIONS: McatSection[] = [
  {
    slug: 'mcat-section-chem-phys',
    title: 'Chemical & Physical Foundations of Biological Systems',
    short: 'Chem/Phys',
    emoji: '⚗️',
    gradient: 'from-teal-500 to-cyan-500',
    areas: [
      {
        slug: 'mcat-area-general-chemistry',
        title: 'General Chemistry',
        emoji: '🧪',
        subtopics: [
          sub('mcat-general-chemistry-atomic-structure-mcat', 'Atomic Structure'),
          sub('mcat-general-chemistry-stoichiometry-mcat', 'Stoichiometry'),
          sub('mcat-general-chemistry-thermodynamics-mcat', 'Thermodynamics'),
          sub('mcat-general-chemistry-kinetics-mcat', 'Kinetics'),
          sub('mcat-general-chemistry-acid-base-equilibrium-mcat', 'Acid–Base & Equilibrium'),
          sub('mcat-general-chemistry-solubility-ions-mcat', 'Solubility & Ions in Solution'),
        ],
      },
      {
        slug: 'mcat-area-organic-chemistry',
        title: 'Organic Chemistry',
        emoji: '🔬',
        subtopics: [
          sub('mcat-organic-chemistry-functional-groups-mcat', 'Functional Groups'),
          sub('mcat-organic-chemistry-stereochemistry-mcat', 'Stereochemistry'),
          sub('mcat-organic-chemistry-sn1-sn2-e1-e2-mcat', 'SN1 / SN2 / E1 / E2'),
          sub('mcat-organic-chemistry-carbonyls-mcat', 'Carbonyl Chemistry'),
          sub('mcat-organic-chemistry-spectroscopy-mcat', 'Spectroscopy'),
        ],
      },
      {
        slug: 'mcat-area-physics-mechanics',
        title: 'Physics: Mechanics & Fluids',
        emoji: '🚀',
        subtopics: [
          sub('mcat-physics-mechanics-kinematics-mcat', 'Kinematics'),
          sub('mcat-physics-mechanics-forces-newton-laws-mcat', "Forces & Newton's Laws"),
          sub('mcat-physics-mechanics-work-energy-power-mcat', 'Work, Energy & Power'),
          sub('mcat-physics-mechanics-momentum-collisions-mcat', 'Momentum & Collisions'),
          sub('mcat-physics-mechanics-fluids-waves-mcat', 'Fluids & Waves'),
        ],
      },
      {
        slug: 'mcat-area-physics-electricity',
        title: 'Physics: Electricity, Magnetism & Optics',
        emoji: '⚡',
        subtopics: [
          sub('mcat-physics-electricity-electrostatics-mcat', 'Electrostatics'),
          sub('mcat-physics-electricity-circuits-mcat', 'Circuits'),
          sub('mcat-physics-electricity-magnetism-mcat', 'Magnetism'),
          sub('mcat-physics-electricity-optics-mcat', 'Optics'),
          sub('mcat-physics-electricity-electrochemistry-mcat', 'Electrochemistry'),
        ],
      },
      {
        // AAMC content category 5C plus the cross-cutting Scientific Inquiry
        // and Reasoning Skills, which are tested in EVERY science section but
        // had no home in the original hierarchy.
        slug: 'mcat-area-lab-data',
        title: 'Lab Techniques & Data Analysis',
        emoji: '🧰',
        subtopics: [
          sub('mcat-lab-separations-mcat', 'Separations & Purification'),
          sub('mcat-research-methods-biostats-mcat', 'Research Methods & Biostatistics'),
        ],
      },
    ],
  },
  {
    slug: 'mcat-section-bio-biochem',
    title: 'Biological & Biochemical Foundations of Living Systems',
    short: 'Bio/Biochem',
    emoji: '🧬',
    gradient: 'from-green-500 to-emerald-500',
    areas: [
      {
        slug: 'mcat-area-biochemistry',
        title: 'Biochemistry',
        emoji: '🧫',
        subtopics: [
          sub('mcat-biochemistry-amino-acids-proteins-mcat', 'Amino Acids & Proteins'),
          sub('mcat-biochemistry-enzymes-kinetics-mcat', 'Enzymes & Kinetics'),
          sub('mcat-biochemistry-carbohydrate-metabolism-mcat', 'Carbohydrate Metabolism'),
          sub('mcat-biochemistry-lipid-metabolism-mcat', 'Lipid Metabolism'),
          sub('mcat-biochemistry-bioenergetics-mcat', 'Bioenergetics'),
        ],
      },
      {
        slug: 'mcat-area-biology',
        title: 'Cell & Molecular Biology',
        emoji: '🦠',
        subtopics: [
          sub('mcat-biology-cell-structure-mcat', 'Cell Structure & Transport'),
          sub('mcat-biology-cell-cycle-mcat', 'Cell Cycle, Mitosis & Meiosis'),
          sub('mcat-biology-molecular-biology-mcat', 'DNA, Transcription & Translation'),
          sub('mcat-biology-microbiology-mcat', 'Microbiology & Viruses'),
        ],
      },
      {
        slug: 'mcat-area-genetics-evolution',
        title: 'Genetics & Evolution',
        emoji: '🧬',
        subtopics: [
          sub('mcat-genetics-mendelian-mcat', 'Mendelian Genetics'),
          sub('mcat-genetics-molecular-mcat', 'Molecular Genetics & Mutations'),
          sub('mcat-genetics-evolution-mcat', 'Evolution & Population Genetics'),
        ],
      },
      {
        slug: 'mcat-area-organ-systems',
        title: 'Organ Systems',
        emoji: '🫀',
        subtopics: [
          sub('mcat-organ-systems-nervous-mcat', 'Nervous System'),
          sub('mcat-organ-systems-cardio-resp-mcat', 'Cardiovascular & Respiratory'),
          sub('mcat-organ-systems-endocrine-mcat', 'Endocrine System'),
          sub('mcat-organ-systems-digestive-renal-mcat', 'Digestive & Renal'),
          sub('mcat-organ-systems-immune-musculoskeletal-mcat', 'Immune & Musculoskeletal'),
          sub('mcat-organ-systems-reproductive-mcat', 'Reproductive System'),
          sub('mcat-organ-systems-embryology-mcat', 'Embryology & Development'),
        ],
      },
    ],
  },
  {
    slug: 'mcat-section-psych-soc',
    title: 'Psychological, Social & Biological Foundations of Behavior',
    short: 'Psych/Soc',
    emoji: '🧠',
    gradient: 'from-purple-500 to-pink-500',
    areas: [
      {
        slug: 'mcat-area-psychology-sociology',
        title: 'Psychology & Sociology',
        emoji: '🧠',
        subtopics: [
          sub('mcat-psych-sensation-perception-mcat', 'Sensation & Perception'),
          sub('mcat-psych-learning-memory-mcat', 'Learning & Memory'),
          sub('mcat-psych-cognition-language-mcat', 'Cognition & Language'),
          sub('mcat-psych-motivation-emotion-personality-mcat', 'Motivation, Emotion & Personality'),
          sub('mcat-psych-social-psychology-mcat', 'Social Psychology'),
          sub('mcat-psych-sociology-social-structure-mcat', 'Sociology & Social Structure'),
          sub('mcat-psych-consciousness-sleep-mcat', 'Consciousness & Sleep'),
          sub('mcat-psych-identity-self-concept-mcat', 'Identity & Self-Concept'),
          // AAMC Foundational Concept 10 — previously unrepresented entirely.
          sub('mcat-psych-social-inequality-mcat', 'Social Inequality & Health Disparities'),
          sub('mcat-psych-demographics-social-change-mcat', 'Demographics & Social Change'),
        ],
      },
    ],
  },
  {
    slug: 'mcat-section-cars',
    title: 'Critical Analysis & Reasoning Skills',
    short: 'CARS',
    emoji: '📖',
    gradient: 'from-amber-500 to-orange-500',
    areas: [
      {
        slug: 'mcat-area-cars',
        title: 'Critical Analysis & Reasoning',
        emoji: '📖',
        subtopics: [
          // The three AAMC CARS skills. Foundations of Comprehension was missing.
          sub('mcat-cars-foundations-comprehension-mcat', 'Foundations of Comprehension'),
          sub('mcat-cars-reasoning-within-text-mcat', 'Reasoning Within the Text'),
          sub('mcat-cars-reasoning-beyond-text-mcat', 'Reasoning Beyond the Text'),
        ],
      },
    ],
  },
]

const areaKey = (areaSlug: string) => areaSlug.replace(/^mcat-area-/, '')

/** Flat lookup tables built once from MCAT_SECTIONS. */
const AREA_BY_SLUG = new Map<string, { area: McatArea; section: McatSection }>()
const SECTION_BY_SLUG = new Map<string, McatSection>()
const SUBTOPIC_BY_SLUG = new Map<string, { subtopic: McatSubtopic; area: McatArea; section: McatSection }>()
for (const section of MCAT_SECTIONS) {
  SECTION_BY_SLUG.set(section.slug, section)
  for (const area of section.areas) {
    AREA_BY_SLUG.set(area.slug, { area, section })
    for (const subtopic of area.subtopics) SUBTOPIC_BY_SLUG.set(subtopic.slug, { subtopic, area, section })
  }
}

export const MCAT_ALL_SLUG = 'mcat'

/** Is this slug anywhere in the MCAT hierarchy (subtopic, area, section, or all)? */
export function isMcatSlug(slug: string): boolean {
  return slug === MCAT_ALL_SLUG || SUBTOPIC_BY_SLUG.has(slug) || AREA_BY_SLUG.has(slug) || SECTION_BY_SLUG.has(slug)
}

/** Human label for any MCAT slug (used by the queue page + teacher UI chips). */
export function mcatSlugLabel(slug: string): string | null {
  if (slug === MCAT_ALL_SLUG) return 'MCAT — full exam'
  const st = SUBTOPIC_BY_SLUG.get(slug)
  if (st) return `${st.area.title} · ${st.subtopic.title}`
  const ar = AREA_BY_SLUG.get(slug)
  if (ar) return ar.area.title
  const sec = SECTION_BY_SLUG.get(slug)
  if (sec) return sec.title
  return null
}

/** Every selectable leaf slug under a section/area/all — used to expand a
 *  broad selection into its constituent topics. */
export function expandMcatSlug(slug: string): string[] {
  if (slug === MCAT_ALL_SLUG) {
    return MCAT_SECTIONS.flatMap((s) => s.areas.flatMap((a) => (a.subtopics.length ? a.subtopics.map((t) => t.slug) : [a.slug])))
  }
  const sec = SECTION_BY_SLUG.get(slug)
  if (sec) return sec.areas.flatMap((a) => (a.subtopics.length ? a.subtopics.map((t) => t.slug) : [a.slug]))
  const ar = AREA_BY_SLUG.get(slug)
  if (ar) return ar.area.subtopics.length ? ar.area.subtopics.map((t) => t.slug) : [ar.area.slug]
  return [slug]
}

function pull(areaSlugOrKey: string, count: number, subtopicSlug?: string): McatCompetitiveQuestion[] {
  const key = areaKey(areaSlugOrKey)
  const entry = AREA_BY_SLUG.get(`mcat-area-${key}`)
  const sectionSlug = entry?.section.slug ?? ''
  const areaSlug = `mcat-area-${key}`

  // 1. Exit-quiz-sourced questions (the original MCAT content).
  const fn = AREA_SOURCE[key]
  const fromQuiz: McatCompetitiveQuestion[] = []
  if (fn) {
    // Ask for far more than needed so we get the whole pool, then filter.
    const raw = fn(500, subtopicSlug)
    // Only strict-filter when the upstream pool actually carries this tag;
    // areas whose subtopics are defined solely by authored questions would
    // otherwise wrongly fall back to the entire untagged pool.
    const tagged = raw.filter((q) => q.category === subtopicSlug)
    const source = subtopicSlug ? tagged : raw
    for (const [i, q] of source.entries()) {
      fromQuiz.push({
        id: i,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctIndex,
        explanation: q.explanation ?? '',
        difficulty: (q.difficulty as 'easy' | 'medium' | 'hard') ?? 'medium',
        topicSlug: subtopicSlug ?? q.category ?? areaSlug,
        areaSlug,
        sectionSlug,
      })
    }
  }

  // 2. Authored competitive questions for this subtopic (or every subtopic in
  //    the area when no subtopic was requested).
  const authoredSlugs = subtopicSlug
    ? [subtopicSlug]
    : (entry?.area.subtopics.map((t) => t.slug) ?? [])
  const fromAuthored: McatCompetitiveQuestion[] = []
  for (const slug of authoredSlugs) {
    for (const [i, q] of (AUTHORED_BY_SUBTOPIC.get(slug) ?? []).entries()) {
      fromAuthored.push({
        id: fromQuiz.length + fromAuthored.length + i,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        difficulty: q.difficulty,
        topicSlug: slug,
        areaSlug,
        sectionSlug,
      })
    }
  }

  return [...fromQuiz, ...fromAuthored]
}

/**
 * Questions for any MCAT slug. Broad slugs (area / section / whole exam) sample
 * evenly across their constituent pools so a "Chem/Phys" match isn't 90% gen
 * chem just because that pool is largest.
 */
export function getMcatQuestions(count: number = 10, topicSlug?: string): McatCompetitiveQuestion[] {
  const slug = topicSlug && isMcatSlug(topicSlug) ? topicSlug : MCAT_ALL_SLUG

  // Exact subtopic
  const st = SUBTOPIC_BY_SLUG.get(slug)
  if (st) return shuffle(pull(st.area.slug, count, st.subtopic.slug)).slice(0, count)

  // Area (all its subtopics, or the untagged whole pool)
  const ar = AREA_BY_SLUG.get(slug)
  if (ar) return shuffle(pull(ar.area.slug, count)).slice(0, count)

  // Section or whole exam → round-robin across constituent areas for balance
  const areas = slug === MCAT_ALL_SLUG
    ? MCAT_SECTIONS.flatMap((s) => s.areas)
    : (SECTION_BY_SLUG.get(slug)?.areas ?? [])
  const pools = areas.map((a) => shuffle(pull(a.slug, count)))
  const out: McatCompetitiveQuestion[] = []
  for (let i = 0; out.length < count; i++) {
    let progressed = false
    for (const pool of pools) {
      if (i < pool.length) {
        out.push(pool[i])
        progressed = true
        if (out.length >= count) break
      }
    }
    if (!progressed) break
  }
  return shuffle(out).slice(0, count)
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Question count available for a slug — powers the picker's "N questions" hints. */
export function mcatQuestionCount(slug: string): number {
  const st = SUBTOPIC_BY_SLUG.get(slug)
  if (st) return pull(st.area.slug, 500, st.subtopic.slug).length
  const ar = AREA_BY_SLUG.get(slug)
  if (ar) return pull(ar.area.slug, 500).length
  const areas = slug === MCAT_ALL_SLUG
    ? MCAT_SECTIONS.flatMap((s) => s.areas)
    : (SECTION_BY_SLUG.get(slug)?.areas ?? [])
  return areas.reduce((n, a) => n + pull(a.slug, 500).length, 0)
}
