/**
 * Single source of truth for site-wide catalog stats.
 *
 * Course/topic counts used to be hardcoded as "24 courses, 700+ topics" in ~12
 * scattered places (with a stray "22 AP courses" too) — all wrong and mutually
 * inconsistent. These derive from the course registry instead, so marketing copy
 * can't drift from reality again.
 */
import { courseMeta, sectionOrder } from '@/data/course-metadata'

/** Number of courses in the catalog (derived from the registry — currently 38). */
export const COURSE_COUNT = Object.keys(courseMeta).length

/**
 * Human-facing topic-count label. The real DB count is ~950; we show a rounded
 * "N+" so static copy is always true and rarely needs touching as topics grow.
 */
export const TOPIC_COUNT_LABEL = '900+'

// Display names for course slugs whose Title-Case derivation isn't clean.
const NAME_OVERRIDES: Record<string, string> = {
  'pre-algebra': 'Pre-Algebra',
  'ap-precalculus': 'AP Precalculus',
  'ap-calculus-ab': 'AP Calculus AB',
  'ap-calculus-bc': 'AP Calculus BC',
  'ap-physics-c-mechanics': 'AP Physics C: Mechanics',
  'ap-physics-c-em': 'AP Physics C: E&M',
  'ap-us-government': 'AP US Government',
  'ap-us-history': 'AP US History',
  'ap-african-american-studies': 'AP African American Studies',
  'ap-computer-science-a': 'AP Computer Science A',
  'ap-computer-science-principles': 'AP CS Principles',
  'organic-chemistry': 'Organic Chemistry',
  'organic-chemistry-1': 'Organic Chemistry I',
  'organic-chemistry-2': 'Organic Chemistry II',
  'sat-prep': 'SAT Prep',
  'act-prep': 'ACT Prep',
  'mcat-prep': 'MCAT Prep',
}

/** Readable display name for a course slug. */
export function courseDisplayName(slug: string): string {
  if (NAME_OVERRIDES[slug]) return NAME_OVERRIDES[slug]
  return slug
    .split('-')
    .map((w) => (w === 'ap' ? 'AP' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
}

export interface CatalogGroup {
  section: string
  courses: { slug: string; name: string; icon: string }[]
}

/**
 * The full catalog grouped by section (registry order). Used for "courses we
 * cover" lists so they always include every course and never under-count.
 */
export const COURSE_CATALOG: CatalogGroup[] = sectionOrder
  .map((section) => ({
    section,
    courses: Object.entries(courseMeta)
      .filter(([, m]) => m.section === section)
      .map(([slug, m]) => ({ slug, name: courseDisplayName(slug), icon: m.icon })),
  }))
  .filter((g) => g.courses.length > 0)
