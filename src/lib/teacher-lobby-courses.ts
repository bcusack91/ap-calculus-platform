// Registry of courses available for teacher class lobbies, plus topic listings
// and question pool building. Covers every topic-tagged competitive bank.
//
// Banks that don't tag their questions with a topicSlug are exposed under a
// synthetic 'general' topic so the lobby UI still has at least one selectable
// option and the API doesn't 404.


export interface TeacherLobbyQuestion {
  id: number | string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  difficulty?: string
  topicSlug: string
}

interface CourseRegistryEntry {
  slug: string
  name: string
  /** Pull a large list of questions, optionally filtered by topic slug. */
  getQuestions: (count: number, topicSlug?: string) => Promise<TeacherLobbyQuestion[]>
}

type AnyQuestion = {
  id: number | string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  difficulty?: string
  topicSlug?: string
  subtopic?: string
}

// Lazy bank wrappers: each dynamically imports its bank chunk on first use
// (cached by the module system), keeping ~26 banks out of the teacher-lobby
// routes' cold-start bundles. Mirrors the competitive-utils lazy pattern.

async function getAlgebra1Questions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/algebra1-bank')
  return (m.getAlgebra1Questions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getGeometryQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/geometry-bank')
  return (m.getGeometryQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApCalculusQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-calculus-bank')
  return (m.getApCalculusQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApCalculusBCQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-calculus-bc-bank')
  return (m.getApCalculusBCQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getPreCalcQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/precalc-bank')
  return (m.getPreCalcQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getAlgebra2Questions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/algebra2-bank')
  return (m.getAlgebra2Questions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApBiologyQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-biology-bank')
  return (m.getApBiologyQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApChemistryQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-chemistry-bank')
  return (m.getApChemistryQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApPhysics1Questions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-physics1-bank')
  return (m.getApPhysics1Questions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApPhysics2Questions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-physics2-bank')
  return (m.getApPhysics2Questions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApPhysicsCMechQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-physics-c-mech-bank')
  return (m.getApPhysicsCMechQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApPhysicsCEMQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-physics-c-em-bank')
  return (m.getApPhysicsCEMQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApAPESQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-enviro-bank')
  return (m.getApAPESQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApWorldHistoryQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-world-history-bank')
  return (m.getApWorldHistoryQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApUSHistoryQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-us-history-bank')
  return (m.getApUSHistoryQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApAASQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-african-american-studies-bank')
  return (m.getApAASQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApHumanGeoQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-human-geo-bank')
  return (m.getApHumanGeoQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApUSGovQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-us-gov-bank')
  return (m.getApUSGovQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApMacroQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-macro-bank')
  return (m.getApMacroQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApMicroQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-micro-bank')
  return (m.getApMicroQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApEngLitQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-english-lit-bank')
  return (m.getApEngLitQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApEngLangQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-english-lang-bank')
  return (m.getApEngLangQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApCSAQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-csa-bank')
  return (m.getApCSAQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApCSPQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-csp-bank')
  return (m.getApCSPQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApStatisticsQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-statistics-bank')
  return (m.getApStatisticsQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}
async function getApPsychologyQuestions(count?: number, topicSlug?: string): Promise<AnyQuestion[]> {
  const m = await import('@/data/competitive-questions/ap-psychology-bank')
  return (m.getApPsychologyQuestions as (...a: unknown[]) => unknown[])(count, topicSlug) as unknown as AnyQuestion[]
}


/** Wrap a bank getter that supports topicSlug. Passes the slug through. */
function topicTagged(
  getter: (count?: number, topicSlug?: string) => Promise<AnyQuestion[]>,
): CourseRegistryEntry['getQuestions'] {
  return async (count, topic) => {
    const qs = await getter(count, topic)
    return qs.map(q => ({
      id: q.id,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      difficulty: q.difficulty,
      topicSlug: q.topicSlug ?? 'general',
    }))
  }
}

/**
 * Wrap a bank getter that doesn't tag topics. Exposes everything under a single
 * synthetic 'general' topic and ignores topic filter requests.
 */
function untagged(
  getter: (count?: number, topicSlug?: string) => Promise<AnyQuestion[]>,
): CourseRegistryEntry['getQuestions'] {
  return async (count, _topic) => {
    const qs = await getter(count)
    return qs.map(q => ({
      id: q.id,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      difficulty: q.difficulty,
      topicSlug: 'general',
    }))
  }
}

/** Algebra 2 bank groups by subtopic (enum), not topicSlug. */
function algebra2Adapter(): CourseRegistryEntry['getQuestions'] {
  return async (count, topic) => {
    const all = await getAlgebra2Questions(100000) as AnyQuestion[]
    const filtered = topic ? all.filter(q => q.subtopic === topic) : all
    const arr = [...filtered]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.slice(0, Math.max(count, 1)).map(q => ({
      id: q.id,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      difficulty: q.difficulty,
      topicSlug: q.subtopic ?? 'general',
    }))
  }
}

const COURSES: CourseRegistryEntry[] = [
  // Math
  { slug: 'algebra-1', name: 'Algebra 1', getQuestions: topicTagged(getAlgebra1Questions) },
  { slug: 'algebra-2', name: 'Algebra 2', getQuestions: algebra2Adapter() },
  { slug: 'geometry', name: 'Geometry', getQuestions: topicTagged(getGeometryQuestions) },
  { slug: 'ap-precalculus', name: 'AP Precalculus', getQuestions: topicTagged(getPreCalcQuestions) },
  { slug: 'ap-calculus-ab', name: 'AP Calculus AB', getQuestions: topicTagged(getApCalculusQuestions) },
  { slug: 'ap-calculus-bc', name: 'AP Calculus BC', getQuestions: topicTagged(getApCalculusBCQuestions) },
  { slug: 'ap-statistics', name: 'AP Statistics', getQuestions: untagged(getApStatisticsQuestions) },

  // Science
  { slug: 'ap-biology', name: 'AP Biology', getQuestions: topicTagged(getApBiologyQuestions) },
  { slug: 'ap-chemistry', name: 'AP Chemistry', getQuestions: topicTagged(getApChemistryQuestions) },
  { slug: 'ap-physics1', name: 'AP Physics 1', getQuestions: topicTagged(getApPhysics1Questions) },
  { slug: 'ap-physics2', name: 'AP Physics 2', getQuestions: topicTagged(getApPhysics2Questions) },
  { slug: 'ap-physics-c-mechanics', name: 'AP Physics C: Mechanics', getQuestions: topicTagged(getApPhysicsCMechQuestions) },
  { slug: 'ap-physics-c-em', name: 'AP Physics C: E&M', getQuestions: topicTagged(getApPhysicsCEMQuestions) },
  { slug: 'ap-enviro', name: 'AP Environmental Science', getQuestions: topicTagged(getApAPESQuestions) },

  // History & Social Science
  { slug: 'ap-world-history', name: 'AP World History', getQuestions: topicTagged(getApWorldHistoryQuestions) },
  { slug: 'ap-us-history', name: 'AP US History', getQuestions: topicTagged(getApUSHistoryQuestions) },
  { slug: 'ap-african-american-studies', name: 'AP African American Studies', getQuestions: topicTagged(getApAASQuestions) },
  { slug: 'ap-human-geo', name: 'AP Human Geography', getQuestions: topicTagged(getApHumanGeoQuestions) },
  { slug: 'ap-us-gov', name: 'AP US Government', getQuestions: topicTagged(getApUSGovQuestions) },
  { slug: 'ap-macro', name: 'AP Macroeconomics', getQuestions: topicTagged(getApMacroQuestions) },
  { slug: 'ap-micro', name: 'AP Microeconomics', getQuestions: topicTagged(getApMicroQuestions) },
  { slug: 'ap-psychology', name: 'AP Psychology', getQuestions: untagged(getApPsychologyQuestions) },

  // English
  { slug: 'ap-english-lit', name: 'AP English Literature', getQuestions: topicTagged(getApEngLitQuestions) },
  { slug: 'ap-english-lang', name: 'AP English Language', getQuestions: topicTagged(getApEngLangQuestions) },

  // Computer Science
  { slug: 'ap-csa', name: 'AP Computer Science A', getQuestions: topicTagged(getApCSAQuestions) },
  { slug: 'ap-csp', name: 'AP CS Principles', getQuestions: topicTagged(getApCSPQuestions) },
]

export function listSupportedCourses(): { slug: string; name: string }[] {
  return COURSES.map(c => ({ slug: c.slug, name: c.name }))
}

export function getCourseEntry(slug: string): CourseRegistryEntry | null {
  return COURSES.find(c => c.slug === slug) ?? null
}

/**
 * Return de-duplicated topic slugs (with prettified titles) found in the bank
 * for a given course. Falls back to a single 'general' topic if the bank
 * doesn't tag its questions.
 */
export async function getCourseTopics(slug: string): Promise<{ slug: string; title: string; count: number }[]> {
  const entry = getCourseEntry(slug)
  if (!entry) return []
  const all = await entry.getQuestions(100000)
  const counts = new Map<string, number>()
  for (const q of all) {
    const ts = q.topicSlug || 'general'
    counts.set(ts, (counts.get(ts) ?? 0) + 1)
  }
  return Array.from(counts.entries())
    .map(([s, count]) => ({ slug: s, title: prettifyTopicSlug(s), count }))
    .sort((a, b) => a.title.localeCompare(b.title))
}

function prettifyTopicSlug(slug: string): string {
  if (slug === 'general') return 'All Topics'
  return slug
    .replace(/-(geometry|algebra1|alg1|geo|calcab|calcbc)$/i, '')
    .split('-')
    .map(w => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ')
}

/**
 * Build a shuffled question pool of size `target` from the chosen topics.
 * Each question's options are shuffled once so that ALL students see the same
 * order (server-side scoring works against the stored correctAnswer).
 *
 * If multiple topics are selected, questions are interleaved roughly evenly.
 */
export async function buildQuestionPool(
  courseSlug: string,
  topicSlugs: string[],
  target: number,
): Promise<TeacherLobbyQuestion[]> {
  const entry = getCourseEntry(courseSlug)
  if (!entry) return []

  // 1) Gather all questions matching at least one selected topic.
  let pool: TeacherLobbyQuestion[] = []
  if (topicSlugs.length === 0) {
    pool = await entry.getQuestions(100000)
  } else {
    const seen = new Set<string | number>()
    for (const t of topicSlugs) {
      const qs = await entry.getQuestions(100000, t)
      for (const q of qs) {
        if (seen.has(q.id)) continue
        seen.add(q.id)
        pool.push(q)
      }
    }
  }

  // 2) Shuffle the deck.
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }

  // 3) Cap, then shuffle each question's options so correctAnswer != 0 always.
  const capped = pool.slice(0, Math.max(target, 1))
  return capped.map(q => shuffleQuestionOptions(q))
}

/** Fisher-Yates option shuffle that updates correctAnswer to the new index. */
function shuffleQuestionOptions(q: TeacherLobbyQuestion): TeacherLobbyQuestion {
  const correctText = q.options[q.correctAnswer]
  const opts = [...q.options]
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[opts[i], opts[j]] = [opts[j], opts[i]]
  }
  return { ...q, options: opts, correctAnswer: opts.indexOf(correctText) }
}
