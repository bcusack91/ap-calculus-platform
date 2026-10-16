/**
 * The AP full-length practice exams (FullLengthPracticeExam), by the key each
 * page passes to getPracticeExamConfig. The submit route rebuilds an exam from
 * here — through the same content store the page used — so it grades the
 * version the student actually saw, never numbers sent by the browser.
 *
 * Attempts are stored as DiagnosticTest rows with category
 * `${AP_PRACTICE_CATEGORY_PREFIX}<key>` (like 'mcat-full-length' and
 * 'act-full-length'); no AP diagnostic query matches that prefix.
 */
import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'

export const AP_PRACTICE_CATEGORY_PREFIX = 'ap-practice-exam:'

export interface ApPracticeExam {
  /** DB Course.slug. */
  courseSlug: string
  /** The exam page. */
  path: string
  load: () => Promise<FullLengthExamConfig>
}

export const AP_PRACTICE_EXAMS: Record<string, ApPracticeExam> = {
  'ap-african-american-studies': { courseSlug: 'ap-african-american-studies', path: '/ap-african-american-studies-practice', load: () => import('@/data/ap-african-american-studies-practice/config').then((m) => m.config) },
  'ap-bio': { courseSlug: 'ap-biology', path: '/ap-bio-practice', load: () => import('@/data/ap-bio-practice/config').then((m) => m.config) },
  'ap-calcab': { courseSlug: 'ap-calculus-ab', path: '/ap-calcab-practice', load: () => import('@/data/ap-calcab-practice/config').then((m) => m.config) },
  'ap-calcbc': { courseSlug: 'ap-calculus-bc', path: '/ap-calcbc-practice', load: () => import('@/data/ap-calcbc-practice/config').then((m) => m.config) },
  'ap-chem': { courseSlug: 'ap-chemistry', path: '/ap-chem-practice', load: () => import('@/data/ap-chem-practice/config').then((m) => m.config) },
  'ap-csa': { courseSlug: 'ap-computer-science-a', path: '/ap-csa-practice', load: () => import('@/data/ap-csa-practice/config').then((m) => m.config) },
  'ap-csp': { courseSlug: 'ap-computer-science-principles', path: '/ap-csp-practice', load: () => import('@/data/ap-csp-practice/config').then((m) => m.config) },
  'ap-english-lang': { courseSlug: 'ap-english-language', path: '/ap-english-lang-practice', load: () => import('@/data/ap-english-lang-practice/config').then((m) => m.config) },
  'ap-english-lit': { courseSlug: 'ap-english-literature', path: '/ap-english-lit-practice', load: () => import('@/data/ap-english-lit-practice/config').then((m) => m.config) },
  'ap-enviro': { courseSlug: 'ap-environmental-science', path: '/ap-enviro-practice', load: () => import('@/data/ap-enviro-practice/config').then((m) => m.config) },
  'ap-human-geo': { courseSlug: 'ap-human-geography', path: '/ap-human-geo-practice', load: () => import('@/data/ap-human-geo-practice/config').then((m) => m.config) },
  'ap-macro': { courseSlug: 'ap-macroeconomics', path: '/ap-macro-practice', load: () => import('@/data/ap-macro-practice/config').then((m) => m.config) },
  'ap-micro': { courseSlug: 'ap-microeconomics', path: '/ap-micro-practice', load: () => import('@/data/ap-micro-practice/config').then((m) => m.config) },
  'ap-physics-c-em': { courseSlug: 'ap-physics-c-em', path: '/ap-physics-c-em-practice', load: () => import('@/data/ap-physics-c-em-practice/config').then((m) => m.config) },
  'ap-physics-c-mech': { courseSlug: 'ap-physics-c-mechanics', path: '/ap-physics-c-mech-practice', load: () => import('@/data/ap-physics-c-mech-practice/config').then((m) => m.config) },
  'ap-physics1': { courseSlug: 'ap-physics-1', path: '/ap-physics1-practice', load: () => import('@/data/ap-physics1-practice/config').then((m) => m.config) },
  'ap-physics2': { courseSlug: 'ap-physics-2', path: '/ap-physics2-practice', load: () => import('@/data/ap-physics2-practice/config').then((m) => m.config) },
  'ap-precalc': { courseSlug: 'ap-precalculus', path: '/ap-precalc-practice', load: () => import('@/data/ap-precalc-practice/config').then((m) => m.config) },
  'ap-psych': { courseSlug: 'ap-psychology', path: '/ap-psych-practice', load: () => import('@/data/ap-psych-practice/config').then((m) => m.config) },
  'ap-stats': { courseSlug: 'ap-statistics', path: '/ap-stats-practice', load: () => import('@/data/ap-stats-practice/config').then((m) => m.config) },
  'ap-us-gov': { courseSlug: 'ap-us-government', path: '/ap-us-gov-practice', load: () => import('@/data/ap-us-gov-practice/config').then((m) => m.config) },
  'ap-us-history': { courseSlug: 'ap-us-history', path: '/ap-us-history-practice', load: () => import('@/data/ap-us-history-practice/config').then((m) => m.config) },
  'ap-world-history': { courseSlug: 'ap-world-history', path: '/ap-world-history-practice', load: () => import('@/data/ap-world-history-practice/config').then((m) => m.config) },
}

export const isApPracticeKey = (key: unknown): key is string => typeof key === 'string' && Object.prototype.hasOwnProperty.call(AP_PRACTICE_EXAMS, key)
export const apPracticeCategory = (key: string) => `${AP_PRACTICE_CATEGORY_PREFIX}${key}`
export const apPracticeKeyOfCategory = (category: string) =>
  category.startsWith(AP_PRACTICE_CATEGORY_PREFIX) ? category.slice(AP_PRACTICE_CATEGORY_PREFIX.length) : null
