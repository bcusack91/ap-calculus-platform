/**
 * Cram-plan / study-plan landing page configuration.
 *
 * Five plan variants per AP course, rendered at:
 *   /courses/[course-slug]/cram/[plan-slug]
 *
 * Content body lives in:
 *   content/cram-plans/[course-slug]/[plan-slug].mdx
 */

export type CramPlanSlug =
  | '3-day'
  | '7-day'
  | '1-month'
  | 'frq-practice'
  | 'last-minute-review'

export interface CramPlanConfig {
  slug: CramPlanSlug
  /** Suffix appended to the course title in <title> and H1, e.g. "3-Day Cram Plan". */
  titleSuffix: string
  /** Short marketing tagline shown under the H1. */
  tagline: string
  /** Default meta description fragment if the MDX file does not override it. */
  descriptionFragment: string
  /** Emoji used in card UI. */
  icon: string
  /** Estimated reading/study time displayed in the hero. */
  estimate: string
}

export const CRAM_PLANS: CramPlanConfig[] = [
  {
    slug: '3-day',
    titleSuffix: '3-Day Cram Plan',
    tagline: 'A focused 72-hour rescue plan when the exam is almost here.',
    descriptionFragment:
      'A realistic 3-day cram schedule for the AP exam: highest-yield topics, daily checklists, and the practice that actually moves your score.',
    icon: '🚨',
    estimate: '~12 hours total study',
  },
  {
    slug: '7-day',
    titleSuffix: '7-Day Cram Plan',
    tagline: 'One full week to lock in the highest-leverage topics and FRQ patterns.',
    descriptionFragment:
      'A day-by-day 7-day cram plan covering the top scoring topics, FRQ strategy, and a realistic timed practice ramp.',
    icon: '📆',
    estimate: '~25 hours total study',
  },
  {
    slug: '1-month',
    titleSuffix: '1-Month Study Plan',
    tagline: 'A structured 4-week plan that builds mastery without burning out.',
    descriptionFragment:
      'A complete 4-week AP study plan: weekly topic breakdown, mixed practice, FRQ work, and a timed final-week mock.',
    icon: '🗓️',
    estimate: '~60 hours total over 4 weeks',
  },
  {
    slug: 'frq-practice',
    titleSuffix: 'FRQ Practice Guide',
    tagline: 'How to attack free-response questions and earn easy partial credit.',
    descriptionFragment:
      'Free-response strategy for the AP exam: scoring patterns, template phrasings, and worked examples that mirror real released FRQs.',
    icon: '✍️',
    estimate: '~3-4 hours of focused work',
  },
  {
    slug: 'last-minute-review',
    titleSuffix: 'Last-Minute Review (Night Before)',
    tagline: 'The night-before checklist: top formulas, common traps, and what NOT to do.',
    descriptionFragment:
      'A one-page night-before review for the AP exam: must-know formulas, common traps, calculator tips, and morning-of advice.',
    icon: '🌙',
    estimate: '~45 minutes to skim',
  },
]

export const CRAM_PLAN_BY_SLUG: Record<CramPlanSlug, CramPlanConfig> = Object.fromEntries(
  CRAM_PLANS.map((p) => [p.slug, p])
) as Record<CramPlanSlug, CramPlanConfig>

/**
 * Course slugs eligible for cram-plan landing pages.
 * Currently restricted to AP courses (the high-intent SEO audience).
 */
export const CRAM_PLAN_COURSE_SLUGS: string[] = [
  'ap-calculus-ab',
  'ap-calculus-bc',
  'ap-precalculus',
  'ap-statistics',
  'ap-physics-1',
  'ap-physics-2',
  'ap-physics-c-mechanics',
  'ap-physics-c-em',
  'ap-chemistry',
  'ap-biology',
  'ap-psychology',
  'ap-environmental-science',
  'ap-us-government',
  'ap-us-history',
  'ap-world-history',
  'ap-human-geography',
  'ap-macroeconomics',
  'ap-microeconomics',
  'ap-african-american-studies',
  'ap-english-language',
  'ap-english-literature',
  'ap-computer-science-a',
  'ap-computer-science-principles',
]

export function isCramPlanCourse(slug: string): boolean {
  return CRAM_PLAN_COURSE_SLUGS.includes(slug)
}

export function isCramPlanSlug(value: string): value is CramPlanSlug {
  return value in CRAM_PLAN_BY_SLUG
}
