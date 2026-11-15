/**
 * How the flashcard catalog (/flashcards) is organised (owner, 2026-11-13:
 * "by content area and then subject … then pick the set of cards … organised
 * by unit as well"):
 *
 *   /flashcards                        content AREAS → courses
 *   /flashcards?course=<slug>          the course's UNITS → card sets (topics)
 *   /flashcards?course=mcat-prep       MCAT sections → SUBJECTS
 *   /flashcards?course=…&subject=<key> the subject's UNITS → card sets
 *
 * A course with more sets than one page can hold (MCAT: 117) gets a subject
 * layer (SUBJECT_LAYOUTS). Its DB categories are the four exam sections, far
 * too coarse to pick a set from, so subjects and units are declared here by
 * topic slug. Pure data and functions: safe for ISR pages and tests.
 */

export interface FlashcardArea {
  key: string
  name: string
  blurb: string
  /** DB Course.slug, in display order. */
  courses: string[]
}

export const FLASHCARD_AREAS: FlashcardArea[] = [
  { key: 'test-prep', name: 'Test Prep', blurb: 'MCAT, SAT, ACT and ASVAB', courses: ['mcat-prep', 'sat-prep', 'act-prep', 'asvab'] },
  { key: 'ap-math', name: 'AP Math', blurb: 'Precalculus, Calculus and Statistics', courses: ['ap-precalculus', 'ap-calculus-ab', 'ap-calculus-bc', 'ap-statistics'] },
  {
    key: 'ap-science',
    name: 'AP Science',
    blurb: 'Biology, Chemistry, Physics and Environmental Science',
    courses: ['ap-biology', 'ap-chemistry', 'ap-physics-1', 'ap-physics-2', 'ap-physics-c-mechanics', 'ap-physics-c-em', 'ap-environmental-science'],
  },
  {
    key: 'ap-history-social',
    name: 'AP History & Social Science',
    blurb: 'History, Government, Geography, Psychology and Economics',
    courses: ['ap-us-history', 'ap-world-history', 'ap-us-government', 'ap-human-geography', 'ap-psychology', 'ap-macroeconomics', 'ap-microeconomics', 'ap-african-american-studies'],
  },
  { key: 'ap-english', name: 'AP English', blurb: 'Language and Literature', courses: ['ap-english-language', 'ap-english-literature'] },
  { key: 'ap-computer-science', name: 'AP Computer Science', blurb: 'Computer Science A and Principles', courses: ['ap-computer-science-a', 'ap-computer-science-principles'] },
  { key: 'high-school-math', name: 'High School Math', blurb: 'Pre-Algebra through Algebra 2', courses: ['pre-algebra', 'algebra-1', 'geometry', 'algebra-2'] },
  { key: 'middle-school-math', name: 'Grades 4–8 Math', blurb: 'Grade-level math', courses: ['grade-4-math', 'grade-5-math', 'grade-6-math', 'grade-7-math', 'grade-8-math'] },
  { key: 'college-science', name: 'College Science', blurb: 'Organic Chemistry', courses: ['organic-chemistry'] },
]

/** Courses no area names land here, so a new course is never invisible. */
export const OTHER_AREA: FlashcardArea = { key: 'more', name: 'More Courses', blurb: 'Everything else', courses: [] }

export function areaOfCourse(courseSlug: string): FlashcardArea {
  return FLASHCARD_AREAS.find((a) => a.courses.includes(courseSlug)) ?? OTHER_AREA
}

/** Courses grouped by area, in area order then the area's own course order; empty areas dropped. */
export function groupCoursesByArea<T extends { slug: string }>(courses: readonly T[]): { area: FlashcardArea; courses: T[] }[] {
  const out = [...FLASHCARD_AREAS, OTHER_AREA].map((area) => ({ area, courses: [] as T[] }))
  for (const c of courses) out.find((g) => g.area === areaOfCourse(c.slug))!.courses.push(c)
  for (const g of out) {
    const pos = (slug: string) => {
      const i = g.area.courses.indexOf(slug)
      return i === -1 ? Number.MAX_SAFE_INTEGER : i
    }
    g.courses.sort((a, b) => pos(a.slug) - pos(b.slug))
  }
  return out.filter((g) => g.courses.length > 0)
}

// ── Subject layer (large courses) ────────────────────────────────────────

export interface DeckUnit {
  name: string
  /** Topic slugs in study order. */
  slugs: string[]
}

export interface DeckSubject {
  key: string
  name: string
  /** DB Category.slug this subject is listed under (the exam section). */
  section: string
  /** A topic whose slug starts with one of these belongs here, unless another subject's unit names it. */
  prefixes: string[]
  /** Units in study order. Topics of the subject that no unit names follow in a last "More" unit. */
  units: DeckUnit[]
}

const m = (stem: string) => `mcat-${stem}-mcat`

export const MCAT_SUBJECTS: DeckSubject[] = [
  // Chemical & Physical Foundations
  {
    key: 'physics',
    name: 'Physics',
    section: 'mcat-chem-phys-foundations',
    prefixes: ['mcat-physics-'],
    units: [
      { name: 'Mechanics', slugs: ['physics-mechanics', 'physics-mechanics-kinematics', 'physics-mechanics-forces-newton-laws', 'physics-mechanics-work-energy-power', 'physics-mechanics-momentum-collisions'].map(m) },
      { name: 'Fluids', slugs: ['physics-mechanics-fluids', 'physics-mechanics-fluid-dynamics'].map(m) },
      {
        name: 'Electricity & Circuits',
        slugs: ['physics-electricity', 'physics-electricity-electrostatics', 'physics-electricity-dc-circuits', 'physics-electricity-kirchhoff-power', 'physics-electricity-emf-capacitors', 'physics-electricity-rc-circuits'].map(m),
      },
      { name: 'Magnetism', slugs: ['physics-electricity-magnetism', 'physics-electricity-induction'].map(m) },
      { name: 'Waves, Sound & Light', slugs: ['physics-waves-interference', 'physics-waves-sound', 'physics-electricity-optics'].map(m) },
    ],
  },
  {
    key: 'general-chemistry',
    name: 'General Chemistry',
    section: 'mcat-chem-phys-foundations',
    prefixes: ['mcat-general-chemistry-'],
    units: [
      { name: 'Atoms & Nuclei', slugs: ['general-chemistry', 'general-chemistry-atomic-structure', 'general-chemistry-spectra-nuclear'].map(m) },
      { name: 'Reactions, Solutions & Gases', slugs: ['general-chemistry-stoichiometry', 'general-chemistry-solutions-gases'].map(m) },
      { name: 'Thermodynamics & Kinetics', slugs: ['general-chemistry-thermodynamics', 'general-chemistry-kinetics', 'general-chemistry-energy-mechanisms'].map(m) },
      { name: 'Equilibrium, Acids & Bases', slugs: ['general-chemistry-acid-base-equilibrium', 'general-chemistry-titrations-equilibrium'].map(m) },
      // Filed under physics-electricity in the database; it is chemistry.
      { name: 'Electrochemistry', slugs: ['physics-electricity-electrochemistry'].map(m) },
    ],
  },
  {
    key: 'organic-chemistry',
    name: 'Organic Chemistry',
    section: 'mcat-chem-phys-foundations',
    prefixes: ['mcat-organic-chemistry-'],
    units: [
      { name: 'Structure', slugs: ['organic-chemistry', 'organic-chemistry-functional-groups', 'organic-chemistry-stereochemistry'].map(m) },
      { name: 'Reactions', slugs: ['organic-chemistry-sn1-sn2-e1-e2', 'organic-chemistry-carbonyls'].map(m) },
      { name: 'Spectroscopy', slugs: ['organic-chemistry-spectroscopy'].map(m) },
    ],
  },
  {
    key: 'biochemistry',
    name: 'Biochemistry',
    section: 'mcat-chem-phys-foundations',
    prefixes: ['mcat-biochemistry-'],
    units: [
      { name: 'Biomolecules & Enzymes', slugs: ['biochemistry-foundations', 'biochemistry-amino-acids-proteins', 'biochemistry-enzymes-kinetics'].map(m) },
      { name: 'Metabolism', slugs: ['biochemistry-carbohydrate-metabolism', 'biochemistry-lipid-metabolism', 'biochemistry-bioenergetics'].map(m) },
    ],
  },
  {
    key: 'lab-methods',
    name: 'Lab Methods',
    section: 'mcat-chem-phys-foundations',
    prefixes: ['mcat-lab-methods-'],
    units: [{ name: 'Lab Methods', slugs: ['lab-methods', 'lab-methods-spectroscopy-assays'].map(m) }],
  },
  // Biological & Biochemical Foundations
  {
    key: 'molecular-biology',
    name: 'Molecular Biology',
    section: 'mcat-bio-biochem-foundations',
    prefixes: ['mcat-molecular-biology-'],
    units: [
      {
        name: 'Molecular Biology',
        slugs: ['molecular-biology', 'molecular-biology-dna-replication', 'molecular-biology-transcription', 'molecular-biology-translation', 'molecular-biology-biotechnology'].map(m),
      },
    ],
  },
  {
    key: 'cell-biology',
    name: 'Cell Biology',
    section: 'mcat-bio-biochem-foundations',
    prefixes: ['mcat-cell-biology-'],
    units: [{ name: 'Cell Biology', slugs: ['cell-biology', 'cell-biology-organelles', 'cell-biology-membrane-transport', 'cell-biology-signaling', 'cell-biology-cell-cycle'].map(m) }],
  },
  {
    key: 'microbiology',
    name: 'Microbiology',
    section: 'mcat-bio-biochem-foundations',
    prefixes: ['mcat-microbiology-'],
    units: [
      { name: 'Microbes', slugs: ['microbiology', 'microbiology-bacteria', 'microbiology-viruses'].map(m) },
      { name: 'Microbial Genetics & Treatment', slugs: ['microbiology-genetics', 'microbiology-genetics-regulation', 'microbiology-antimicrobials'].map(m) },
    ],
  },
  {
    key: 'genetics-evolution',
    name: 'Genetics & Evolution',
    section: 'mcat-bio-biochem-foundations',
    prefixes: ['mcat-genetics-evolution-'],
    units: [
      {
        name: 'Genetics & Evolution',
        slugs: ['genetics-evolution', 'genetics-evolution-mendelian', 'genetics-evolution-population-genetics', 'genetics-evolution-natural-selection', 'genetics-evolution-immunology'].map(m),
      },
    ],
  },
  {
    key: 'physiology',
    name: 'Organ Systems & Physiology',
    section: 'mcat-bio-biochem-foundations',
    prefixes: ['mcat-organ-systems-', 'mcat-anatomy-physiology-'],
    units: [
      { name: 'Organ Systems', slugs: ['organ-systems', 'organ-systems-cardiovascular', 'organ-systems-respiratory', 'organ-systems-renal', 'organ-systems-endocrine-nervous'].map(m) },
      { name: 'Movement, Senses & Reproduction', slugs: ['anatomy-physiology', 'anatomy-physiology-musculoskeletal', 'anatomy-physiology-sensory', 'anatomy-physiology-reproductive'].map(m) },
      { name: 'Development', slugs: ['anatomy-physiology-embryology', 'anatomy-physiology-organogenesis'].map(m) },
    ],
  },
  // Psychological, Social & Biological Foundations
  {
    key: 'psychology',
    name: 'Psychology',
    section: 'mcat-psych-soc-foundations',
    prefixes: ['mcat-psychology-', 'mcat-social-psychology-', 'mcat-biological-basis-behavior-'],
    units: [
      {
        name: 'Mind & Behavior',
        slugs: ['psychology-behavior', 'biological-basis-behavior', 'psychology-behavior-sensation-perception', 'psychology-behavior-learning-memory', 'psychology-behavior-cognition-language'].map(m),
      },
      { name: 'The Person & Others', slugs: ['psychology-behavior-development', 'psychology-behavior-disorders', 'social-psychology'].map(m) },
    ],
  },
  {
    key: 'sociology',
    name: 'Sociology',
    section: 'mcat-psych-soc-foundations',
    prefixes: ['mcat-sociology-'],
    units: [
      {
        name: 'Sociology',
        slugs: ['sociology', 'sociology-structure-stratification', 'sociology-culture-socialization', 'sociology-groups-interaction', 'sociology-interaction-organizations', 'sociology-health-disparities'].map(m),
      },
    ],
  },
  // CARS
  {
    key: 'cars-strategy',
    name: 'CARS Strategy',
    section: 'mcat-cars',
    prefixes: ['mcat-cars-strategy-'],
    units: [{ name: 'CARS Strategy', slugs: ['cars-strategy', 'cars-strategy-active-reading', 'cars-strategy-main-idea-inference', 'cars-strategy-elimination', 'cars-strategy-timing'].map(m) }],
  },
  {
    key: 'cars-passages',
    name: 'CARS Passage Types',
    section: 'mcat-cars',
    prefixes: ['mcat-cars-passages-'],
    units: [{ name: 'CARS Passage Types', slugs: ['cars-passages', 'cars-passages-humanities', 'cars-passages-social-science', 'cars-passages-ethics', 'cars-passages-comparative'].map(m) }],
  },
  {
    key: 'cars-reasoning',
    name: 'CARS Reasoning',
    section: 'mcat-cars',
    prefixes: ['mcat-cars-reasoning-'],
    units: [{ name: 'CARS Reasoning', slugs: ['cars-reasoning', 'cars-reasoning-argument-structure', 'cars-reasoning-assumptions', 'cars-reasoning-strengthen-weaken', 'cars-reasoning-fallacies'].map(m) }],
  },
  // Strategy & Test Day
  {
    key: 'science-passages',
    name: 'Science Passage Strategy',
    section: 'mcat-strategy',
    prefixes: ['mcat-science-passage-strategy-'],
    units: [
      {
        name: 'Science Passage Strategy',
        slugs: ['science-passage-strategy', 'science-passage-strategy-reading', 'science-passage-strategy-figures', 'science-passage-strategy-experimental-design', 'science-passage-strategy-discrete-questions'].map(m),
      },
    ],
  },
  {
    key: 'research-data',
    name: 'Research & Data Skills',
    section: 'mcat-strategy',
    prefixes: ['mcat-research-methods-', 'mcat-biostatistics-', 'mcat-quantitative-skills-'],
    units: [{ name: 'Research & Data Skills', slugs: ['research-methods', 'biostatistics', 'quantitative-skills'].map(m) }],
  },
  {
    key: 'test-day',
    name: 'Test Day',
    section: 'mcat-strategy',
    prefixes: ['mcat-test-day-strategy-'],
    units: [
      {
        name: 'Test Day',
        slugs: ['test-day-strategy', 'test-day-strategy-format-scoring', 'test-day-strategy-study-planning', 'test-day-strategy-section-specific', 'test-day-strategy-test-day-logistics'].map(m),
      },
    ],
  },
]

/** Courses whose catalog has a subject layer between the course and its units. */
export const SUBJECT_LAYOUTS: Record<string, DeckSubject[]> = { 'mcat-prep': MCAT_SUBJECTS }

export function subjectLayoutOf(courseSlug: string | null | undefined): DeckSubject[] | null {
  return (courseSlug && SUBJECT_LAYOUTS[courseSlug]) || null
}

/** The subject a topic belongs to: a unit that names it wins, then the slug prefix. */
export function subjectOfTopic(subjects: readonly DeckSubject[], topicSlug: string): DeckSubject | null {
  return (
    subjects.find((s) => s.units.some((u) => u.slugs.includes(topicSlug))) ??
    subjects.find((s) => s.prefixes.some((p) => topicSlug.startsWith(p))) ??
    null
  )
}

/**
 * A subject's topics split into its units, each in the unit's study order.
 * Topics the units do not name keep their given order in a last "More" unit,
 * so a new topic shows up before anyone files it. Empty units are dropped.
 */
export function groupIntoUnits<T extends { slug: string }>(subject: DeckSubject, topics: readonly T[]): { name: string; topics: T[] }[] {
  const bySlug = new Map(topics.map((t) => [t.slug, t]))
  const placed = new Set<string>()
  const out: { name: string; topics: T[] }[] = []
  for (const u of subject.units) {
    const rows = u.slugs.map((s) => bySlug.get(s)).filter((t): t is T => !!t)
    rows.forEach((t) => placed.add(t.slug))
    if (rows.length > 0) out.push({ name: u.name, topics: rows })
  }
  const rest = topics.filter((t) => !placed.has(t.slug))
  if (rest.length > 0) out.push({ name: out.length > 0 ? `More ${subject.name}` : subject.name, topics: rest })
  return out
}

/** `/flashcards` links, so every page builds them the same way. */
export function flashcardCatalogHref(courseSlug?: string | null, subjectKey?: string | null): string {
  if (!courseSlug) return '/flashcards'
  const q = new URLSearchParams({ course: courseSlug })
  if (subjectKey) q.set('subject', subjectKey)
  return `/flashcards?${q.toString()}`
}
