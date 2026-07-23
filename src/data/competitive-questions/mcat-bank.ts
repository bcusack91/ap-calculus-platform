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
      // These three pools aren't subtopic-tagged upstream, so the area itself is
      // the finest selectable unit (the picker renders them as single chips).
      { slug: 'mcat-area-biology', title: 'Cell & Molecular Biology', emoji: '🦠', subtopics: [] },
      { slug: 'mcat-area-genetics-evolution', title: 'Genetics & Evolution', emoji: '🧬', subtopics: [] },
      { slug: 'mcat-area-organ-systems', title: 'Organ Systems', emoji: '🫀', subtopics: [] },
    ],
  },
  {
    slug: 'mcat-section-psych-soc',
    title: 'Psychological, Social & Biological Foundations of Behavior',
    short: 'Psych/Soc',
    emoji: '🧠',
    gradient: 'from-purple-500 to-pink-500',
    areas: [
      { slug: 'mcat-area-psychology-sociology', title: 'Psychology & Sociology', emoji: '🧠', subtopics: [] },
    ],
  },
  {
    slug: 'mcat-section-cars',
    title: 'Critical Analysis & Reasoning Skills',
    short: 'CARS',
    emoji: '📖',
    gradient: 'from-amber-500 to-orange-500',
    areas: [
      { slug: 'mcat-area-cars', title: 'Critical Analysis & Reasoning', emoji: '📖', subtopics: [] },
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
  const fn = AREA_SOURCE[key]
  if (!fn) return []
  const entry = AREA_BY_SLUG.get(`mcat-area-${key}`)
  const sectionSlug = entry?.section.slug ?? ''
  const areaSlug = `mcat-area-${key}`
  // Ask for far more than needed so we get the whole pool, then filter.
  const raw = fn(500, subtopicSlug)
  const filtered = subtopicSlug ? raw.filter((q) => q.category === subtopicSlug) : raw
  const source = filtered.length > 0 ? filtered : raw
  return source.map((q, i) => ({
    id: i,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctIndex,
    explanation: q.explanation ?? '',
    difficulty: (q.difficulty as 'easy' | 'medium' | 'hard') ?? 'medium',
    topicSlug: subtopicSlug ?? q.category ?? areaSlug,
    areaSlug,
    sectionSlug,
  }))
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
