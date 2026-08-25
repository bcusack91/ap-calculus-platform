// AUTO-GENERATED. Where a course's unit tests and free-response practice live,
// so an assignment of those types can send a student to the right page.
// Plain literals on purpose: this is imported by a client page, and pulling in
// the unit-test configs themselves would drag 35 question banks into the bundle.

const UNIT_TEST_ROUTES: Record<string, string> = {
  'act-prep': '/act-unit-tests',
  'algebra-1': '/algebra1-unit-tests',
  'algebra-2': '/algebra2-unit-tests',
  'ap-african-american-studies': '/ap-aas-unit-tests',
  'ap-biology': '/ap-bio-unit-tests',
  'ap-calculus-ab': '/ap-calcab-unit-tests',
  'ap-calculus-bc': '/ap-calcbc-unit-tests',
  'ap-chemistry': '/ap-chem-unit-tests',
  'ap-computer-science-a': '/ap-csa-unit-tests',
  'ap-cs-principles': '/ap-csp-unit-tests',
  'ap-english-language': '/ap-english-lang-unit-tests',
  'ap-english-literature': '/ap-english-lit-unit-tests',
  'ap-environmental-science': '/ap-enviro-unit-tests',
  'ap-human-geography': '/ap-human-geo-unit-tests',
  'ap-macroeconomics': '/ap-macro-unit-tests',
  'ap-microeconomics': '/ap-micro-unit-tests',
  'ap-physics-1': '/ap-physics1-unit-tests',
  'ap-physics-2': '/ap-physics2-unit-tests',
  'ap-physics-c-em': '/ap-physics-c-em-unit-tests',
  'ap-physics-c-mechanics': '/ap-physics-c-mech-unit-tests',
  'ap-precalculus': '/ap-precalc-unit-tests',
  'ap-psychology': '/ap-psych-unit-tests',
  'ap-statistics': '/ap-stats-unit-tests',
  'ap-us-government': '/ap-us-gov-unit-tests',
  'ap-us-history': '/ap-us-history-unit-tests',
  'ap-world-history': '/ap-world-history-unit-tests',
  'geometry': '/geometry-unit-tests',
  'grade-8-math': '/grade8-math-unit-tests',
  'mcat-prep': '/mcat-unit-tests',
  'organic-chemistry-1': '/ochem1-unit-tests',
  'organic-chemistry-2': '/ochem2-unit-tests',
  'pre-algebra': '/prealgebra-unit-tests',
  'precalculus': '/precalc-unit-tests',
  'psat': '/psat-unit-tests',
  'sat-prep': '/sat-unit-tests',
}

const FRQ_ROUTES: Record<string, string> = {
  'ap-african-american-studies': '/ap-african-american-studies-frq',
  'ap-biology': '/ap-bio-frq',
  'ap-calculus-ab': '/ap-calc-ab-frq',
  'ap-calculus-bc': '/ap-calc-bc-frq',
  'ap-chemistry': '/ap-chem-frq',
  'ap-computer-science-a': '/ap-csa-frq',
  'ap-english-language': '/ap-english-lang-frq',
  'ap-english-literature': '/ap-english-lit-frq',
  'ap-environmental-science': '/ap-enviro-frq',
  'ap-human-geography': '/ap-human-geo-frq',
  'ap-macroeconomics': '/ap-macro-frq',
  'ap-microeconomics': '/ap-micro-frq',
  'ap-physics-1': '/ap-physics1-frq',
  'ap-physics-2': '/ap-physics2-frq',
  'ap-physics-c-em': '/ap-physics-c-em-frq',
  'ap-physics-c-mechanics': '/ap-physics-c-mech-frq',
  'ap-precalculus': '/ap-precalc-frq',
  'ap-psychology': '/ap-psych-frq',
  'ap-statistics': '/ap-stats-frq',
  'ap-us-government': '/ap-us-gov-frq',
  'ap-us-history': '/ap-us-history-frq',
  'ap-world-history': '/ap-world-history-frq',
}

/** The unit-tests page for a course, or null if it has none. */
export function unitTestRouteFor(courseSlug: string | null | undefined): string | null {
  return courseSlug ? UNIT_TEST_ROUTES[courseSlug] ?? null : null
}

/** The free-response page for a course, or null if it has none. */
export function frqRouteFor(courseSlug: string | null | undefined): string | null {
  return courseSlug ? FRQ_ROUTES[courseSlug] ?? null : null
}
