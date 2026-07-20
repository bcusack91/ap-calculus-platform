/**
 * DB course slug → competitive subject-page path. The two namespaces diverged
 * (e.g. course `ap-physics-1` vs page /competitive/ap-physics1), so building
 * `/competitive/${courseSlug}` 404s for 12 courses and courses with no
 * competitive page at all (psychology, statistics, middle-school math, …).
 * Always route through this helper; unknown courses fall back to /competitive.
 */
const COURSE_TO_COMPETITIVE: Record<string, string> = {
  'algebra-1': 'algebra-1',
  'geometry': 'geometry',
  'ap-african-american-studies': 'ap-african-american-studies',
  'ap-biology': 'ap-biology',
  'ap-calculus-ab': 'ap-calculus-ab',
  'ap-calculus-bc': 'ap-calculus-bc',
  'ap-chemistry': 'ap-chemistry',
  'ap-computer-science-a': 'ap-csa',
  'ap-computer-science-principles': 'ap-csp',
  'ap-cs-principles': 'ap-csp',
  'ap-english-language': 'ap-english-lang',
  'ap-english-literature': 'ap-english-lit',
  'ap-environmental-science': 'ap-enviro',
  'ap-human-geography': 'ap-human-geo',
  'ap-macroeconomics': 'ap-macro',
  'ap-microeconomics': 'ap-micro',
  'ap-physics-1': 'ap-physics1',
  'ap-physics-2': 'ap-physics2',
  'ap-physics-c-em': 'ap-physics-c-em',
  'ap-physics-c-mechanics': 'ap-physics-c-mechanics',
  'ap-precalculus': 'ap-precalculus',
  'ap-us-government': 'ap-us-gov',
  'ap-us-history': 'ap-us-history',
  'ap-world-history': 'ap-world-history',
  'sat-prep': 'sat',
}

/** True if the course has its own competitive subject page. */
export function hasCompetitivePage(courseSlug?: string | null): boolean {
  return !!courseSlug && courseSlug in COURSE_TO_COMPETITIVE
}

/**
 * Safe competitive URL for a course (optionally pre-selecting a topic).
 * Unknown/absent course → the general /competitive hub (never a 404).
 */
export function competitiveHrefForCourse(courseSlug?: string | null, topicSlug?: string): string {
  const page = courseSlug ? COURSE_TO_COMPETITIVE[courseSlug] : undefined
  if (!page) return '/competitive'
  return topicSlug
    ? `/competitive/${page}?topic=${encodeURIComponent(topicSlug)}`
    : `/competitive/${page}`
}
