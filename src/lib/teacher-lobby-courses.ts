// Registry of courses available for teacher class lobbies, plus topic listings
// and question pool building. Currently supports the topic-tagged banks that
// power the existing /competitive/<course> pages.

import { getAlgebra1Questions } from '@/data/competitive-questions/algebra1-bank'
import { getGeometryQuestions } from '@/data/competitive-questions/geometry-bank'
import { getApCalculusQuestions } from '@/data/competitive-questions/ap-calculus-bank'

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
  getQuestions: (count: number, topicSlug?: string) => TeacherLobbyQuestion[]
}

const COURSES: CourseRegistryEntry[] = [
  {
    slug: 'algebra-1',
    name: 'Algebra 1',
    getQuestions: (count, topic) => getAlgebra1Questions(count, topic) as TeacherLobbyQuestion[],
  },
  {
    slug: 'geometry',
    name: 'Geometry',
    getQuestions: (count, topic) => getGeometryQuestions(count, topic) as TeacherLobbyQuestion[],
  },
  {
    slug: 'ap-calculus-ab',
    name: 'AP Calculus AB',
    getQuestions: (count, topic) => getApCalculusQuestions(count, topic) as TeacherLobbyQuestion[],
  },
]

export function listSupportedCourses(): { slug: string; name: string }[] {
  return COURSES.map(c => ({ slug: c.slug, name: c.name }))
}

export function getCourseEntry(slug: string): CourseRegistryEntry | null {
  return COURSES.find(c => c.slug === slug) ?? null
}

/**
 * Return de-duplicated topic slugs (with prettified titles) found in the bank
 * for a given course.
 */
export function getCourseTopics(slug: string): { slug: string; title: string; count: number }[] {
  const entry = getCourseEntry(slug)
  if (!entry) return []
  const all = entry.getQuestions(100000)
  const counts = new Map<string, number>()
  for (const q of all) {
    counts.set(q.topicSlug, (counts.get(q.topicSlug) ?? 0) + 1)
  }
  return Array.from(counts.entries())
    .map(([s, count]) => ({ slug: s, title: prettifyTopicSlug(s), count }))
    .sort((a, b) => a.title.localeCompare(b.title))
}

function prettifyTopicSlug(slug: string): string {
  return slug
    .replace(/-(geometry|algebra1|alg1|geo)$/i, '')
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
export function buildQuestionPool(
  courseSlug: string,
  topicSlugs: string[],
  target: number,
): TeacherLobbyQuestion[] {
  const entry = getCourseEntry(courseSlug)
  if (!entry) return []

  // 1) Gather all questions matching at least one selected topic.
  let pool: TeacherLobbyQuestion[] = []
  if (topicSlugs.length === 0) {
    pool = entry.getQuestions(100000)
  } else {
    const seen = new Set<string | number>()
    for (const t of topicSlugs) {
      const qs = entry.getQuestions(100000, t)
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
