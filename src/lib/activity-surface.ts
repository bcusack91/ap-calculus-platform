import type { ActivitySurface } from '@prisma/client'

/**
 * What a student is doing right now, for the site-wide active-time tracker.
 *
 * Every page gets a default from its path. A page that knows better — the
 * lesson while its entrance or exit quiz is up, a test runner while its timer
 * runs — overrides it with useActivitySurface (src/hooks/useActivitySurface).
 * Kept client-safe: no server imports.
 */
export type ActivityState = {
  surface: ActivitySurface
  topicSlug?: string
  courseSlug?: string
  /** A timed test is running: idle time counts (reading a passage is work). */
  timed?: boolean
}

export const ACTIVITY_SURFACES: readonly ActivitySurface[] = [
  'LESSON',
  'ENTRANCE_QUIZ',
  'EXIT_QUIZ',
  'FLASHCARDS',
  'DIAGNOSTIC',
  'PRACTICE_TEST',
  'FULL_LENGTH',
  'COMPETITIVE',
  'OTHER',
]

/** The default surface for a path. */
export function surfaceForPath(pathname: string | null | undefined): ActivityState {
  const path = (pathname || '/').split('?')[0]
  const seg = path.split('/').filter(Boolean)
  const first = seg[0] ?? ''

  if (first === 'topics' && seg[1]) return { surface: 'LESSON', topicSlug: decodeURIComponent(seg[1]) }
  if (first === 'flashcards' || first === 'flashcard-sets') return { surface: 'FLASHCARDS' }
  if (first === 'competitive') return { surface: 'COMPETITIVE' }
  if (first === 'mcat-full-length' || first.endsWith('-full-exam')) return { surface: 'FULL_LENGTH' }
  if (first.endsWith('-diagnostic') || first === 'diagnostic-review') return { surface: 'DIAGNOSTIC' }
  if (
    first.endsWith('-practice') ||
    first.endsWith('-unit-tests') ||
    first.endsWith('-frq') ||
    first === 'sat-grid-in' ||
    // MCAT section pages run passage sets (src/app/mcat-cars etc.)
    ['mcat-cars', 'mcat-chem-phys', 'mcat-bio-biochem', 'mcat-psych-soc'].includes(first)
  ) {
    return { surface: 'PRACTICE_TEST' }
  }
  return { surface: 'OTHER' }
}

/** Buffer key for a segment of time. */
export function segmentKey(s: ActivityState): string {
  return `${s.surface}|${s.topicSlug ?? ''}|${s.courseSlug ?? ''}`
}

export function parseSegmentKey(key: string): ActivityState {
  const [surface, topicSlug, courseSlug] = key.split('|')
  return {
    surface: (ACTIVITY_SURFACES as readonly string[]).includes(surface) ? (surface as ActivitySurface) : 'OTHER',
    ...(topicSlug ? { topicSlug } : {}),
    ...(courseSlug ? { courseSlug } : {}),
  }
}

/**
 * Fit reported seconds into what wall time allows. A student can't study more
 * seconds than have passed since their last recorded flush (two visible tabs
 * would otherwise double-count), and one flush never carries more than
 * `maxPerFlush`. Scales every segment down proportionally when over.
 */
export function clampSegments<T extends { seconds: number }>(segments: T[], allowedSeconds: number): T[] {
  const cleaned = segments
    .map((s) => ({ ...s, seconds: Math.max(0, Math.floor(s.seconds)) }))
    .filter((s) => s.seconds > 0)
  const total = cleaned.reduce((n, s) => n + s.seconds, 0)
  const allowed = Math.max(0, Math.floor(allowedSeconds))
  if (total <= allowed) return cleaned
  if (allowed === 0) return []
  const scale = allowed / total
  return cleaned.map((s) => ({ ...s, seconds: Math.floor(s.seconds * scale) })).filter((s) => s.seconds > 0)
}
