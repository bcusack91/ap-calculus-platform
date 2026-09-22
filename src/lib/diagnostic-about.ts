/**
 * Registry for the server-rendered "About this diagnostic" section.
 *
 * Every diagnostic route is a 'use client' quiz, so the crawlable HTML was
 * only the ~150-word shell. Each entry names the course(s) whose units the
 * section describes, plus related tool routes (verified to exist under
 * src/app when this file was generated).
 *
 * Not every diagnostic belongs here: /precalc-diagnostic tests regular
 * Pre-Calculus, which has no Course row, so it has no unit list to show.
 * tests/lib/diagnostic-about.test.ts keeps this file honest.
 */
export type DiagnosticLink = { href: string; label: string }

export type DiagnosticAboutConfig = {
  /** Course.slug values whose categories are listed as the covered units. */
  courseSlugs: string[]
  /** Overrides the course name in headings when a diagnostic spans courses. */
  displayName?: string
  /** True when the quiz rotates through forms, so a retake is new questions. */
  rotatesForms?: boolean
  links: DiagnosticLink[]
}

export const DIAGNOSTIC_ABOUT: Record<string, DiagnosticAboutConfig> = {

  'act-diagnostic': {
    displayName: 'ACT',
    rotatesForms: true,
    courseSlugs: ['act-prep'],
    links: [{ href: '/act-practice', label: 'Practice questions' }, { href: '/act-unit-tests', label: 'Unit tests' }, { href: '/act-study-plans', label: 'Study plans' }, { href: '/act-daily-question', label: 'Daily question' }, { href: '/act-score-predictor', label: 'Score predictor' }],
  },
  'algebra1-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['algebra-1'],
    links: [{ href: '/algebra1-practice', label: 'Practice questions' }, { href: '/algebra1-unit-tests', label: 'Unit tests' }, { href: '/algebra1-study-plans', label: 'Study plans' }, { href: '/algebra1-daily-question', label: 'Daily question' }, { href: '/algebra1-score-predictor', label: 'Score predictor' }],
  },
  'algebra2-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['algebra-2'],
    links: [{ href: '/algebra2-practice', label: 'Practice questions' }, { href: '/algebra2-unit-tests', label: 'Unit tests' }, { href: '/algebra2-study-plans', label: 'Study plans' }, { href: '/algebra2-daily-question', label: 'Daily question' }, { href: '/algebra2-score-predictor', label: 'Score predictor' }],
  },
  'ap-african-american-studies-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-african-american-studies'],
    links: [{ href: '/ap-african-american-studies-practice', label: 'Practice questions' }, { href: '/ap-african-american-studies-study-plans', label: 'Study plans' }, { href: '/ap-african-american-studies-daily-question', label: 'Daily question' }, { href: '/ap-african-american-studies-score-predictor', label: 'Score predictor' }],
  },
  'ap-bio-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-biology'],
    links: [{ href: '/ap-bio-practice', label: 'Practice questions' }, { href: '/ap-bio-unit-tests', label: 'Unit tests' }, { href: '/ap-bio-study-plans', label: 'Study plans' }, { href: '/ap-bio-daily-question', label: 'Daily question' }, { href: '/ap-bio-score-predictor', label: 'Score predictor' }],
  },
  'ap-chem-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-chemistry'],
    links: [{ href: '/ap-chem-practice', label: 'Practice questions' }, { href: '/ap-chem-unit-tests', label: 'Unit tests' }, { href: '/ap-chem-study-plans', label: 'Study plans' }, { href: '/ap-chem-daily-question', label: 'Daily question' }, { href: '/ap-chem-score-predictor', label: 'Score predictor' }],
  },
  'ap-csa-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-computer-science-a'],
    links: [{ href: '/ap-csa-practice', label: 'Practice questions' }, { href: '/ap-csa-unit-tests', label: 'Unit tests' }, { href: '/ap-csa-study-plans', label: 'Study plans' }, { href: '/ap-csa-daily-question', label: 'Daily question' }, { href: '/ap-csa-score-predictor', label: 'Score predictor' }],
  },
  'ap-csp-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-computer-science-principles'],
    links: [{ href: '/ap-csp-practice', label: 'Practice questions' }, { href: '/ap-csp-unit-tests', label: 'Unit tests' }, { href: '/ap-csp-study-plans', label: 'Study plans' }, { href: '/ap-csp-daily-question', label: 'Daily question' }, { href: '/ap-csp-score-predictor', label: 'Score predictor' }],
  },
  'ap-english-lang-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-english-language'],
    links: [{ href: '/ap-english-lang-practice', label: 'Practice questions' }, { href: '/ap-english-lang-unit-tests', label: 'Unit tests' }, { href: '/ap-english-lang-study-plans', label: 'Study plans' }, { href: '/ap-english-lang-daily-question', label: 'Daily question' }, { href: '/ap-english-lang-score-predictor', label: 'Score predictor' }],
  },
  'ap-english-lit-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-english-literature'],
    links: [{ href: '/ap-english-lit-practice', label: 'Practice questions' }, { href: '/ap-english-lit-unit-tests', label: 'Unit tests' }, { href: '/ap-english-lit-study-plans', label: 'Study plans' }, { href: '/ap-english-lit-daily-question', label: 'Daily question' }, { href: '/ap-english-lit-score-predictor', label: 'Score predictor' }],
  },
  'ap-enviro-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-environmental-science'],
    links: [{ href: '/ap-enviro-practice', label: 'Practice questions' }, { href: '/ap-enviro-unit-tests', label: 'Unit tests' }, { href: '/ap-enviro-study-plans', label: 'Study plans' }, { href: '/ap-enviro-daily-question', label: 'Daily question' }, { href: '/ap-enviro-score-predictor', label: 'Score predictor' }],
  },
  'ap-human-geo-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-human-geography'],
    links: [{ href: '/ap-human-geo-practice', label: 'Practice questions' }, { href: '/ap-human-geo-unit-tests', label: 'Unit tests' }, { href: '/ap-human-geo-study-plans', label: 'Study plans' }, { href: '/ap-human-geo-daily-question', label: 'Daily question' }, { href: '/ap-human-geo-score-predictor', label: 'Score predictor' }],
  },
  'ap-macro-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-macroeconomics'],
    links: [{ href: '/ap-macro-practice', label: 'Practice questions' }, { href: '/ap-macro-unit-tests', label: 'Unit tests' }, { href: '/ap-macro-study-plans', label: 'Study plans' }, { href: '/ap-macro-daily-question', label: 'Daily question' }, { href: '/ap-macro-score-predictor', label: 'Score predictor' }],
  },
  'ap-micro-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-microeconomics'],
    links: [{ href: '/ap-micro-practice', label: 'Practice questions' }, { href: '/ap-micro-unit-tests', label: 'Unit tests' }, { href: '/ap-micro-study-plans', label: 'Study plans' }, { href: '/ap-micro-daily-question', label: 'Daily question' }, { href: '/ap-micro-score-predictor', label: 'Score predictor' }],
  },
  'ap-physics-c-em-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-physics-c-em'],
    links: [{ href: '/ap-physics-c-em-practice', label: 'Practice questions' }, { href: '/ap-physics-c-em-unit-tests', label: 'Unit tests' }, { href: '/ap-physics-c-em-study-plans', label: 'Study plans' }, { href: '/ap-physics-c-em-daily-question', label: 'Daily question' }, { href: '/ap-physics-c-em-score-predictor', label: 'Score predictor' }],
  },
  'ap-physics-c-mech-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-physics-c-mechanics'],
    links: [{ href: '/ap-physics-c-mech-practice', label: 'Practice questions' }, { href: '/ap-physics-c-mech-unit-tests', label: 'Unit tests' }, { href: '/ap-physics-c-mech-study-plans', label: 'Study plans' }, { href: '/ap-physics-c-mech-daily-question', label: 'Daily question' }, { href: '/ap-physics-c-mech-score-predictor', label: 'Score predictor' }],
  },
  'ap-physics1-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-physics-1'],
    links: [{ href: '/ap-physics1-practice', label: 'Practice questions' }, { href: '/ap-physics1-unit-tests', label: 'Unit tests' }, { href: '/ap-physics1-study-plans', label: 'Study plans' }, { href: '/ap-physics1-daily-question', label: 'Daily question' }, { href: '/ap-physics1-score-predictor', label: 'Score predictor' }],
  },
  'ap-physics2-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-physics-2'],
    links: [{ href: '/ap-physics2-practice', label: 'Practice questions' }, { href: '/ap-physics2-unit-tests', label: 'Unit tests' }, { href: '/ap-physics2-study-plans', label: 'Study plans' }, { href: '/ap-physics2-daily-question', label: 'Daily question' }, { href: '/ap-physics2-score-predictor', label: 'Score predictor' }],
  },
  'ap-precalculus-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-precalculus'],
    links: [{ href: '/ap-precalc-practice', label: 'Practice questions' }, { href: '/ap-precalc-unit-tests', label: 'Unit tests' }, { href: '/ap-precalc-study-plans', label: 'Study plans' }, { href: '/ap-precalculus-daily-question', label: 'Daily question' }, { href: '/ap-precalculus-score-predictor', label: 'Score predictor' }],
  },
  'ap-psych-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-psychology'],
    links: [{ href: '/ap-psych-practice', label: 'Practice questions' }, { href: '/ap-psych-unit-tests', label: 'Unit tests' }, { href: '/ap-psych-study-plans', label: 'Study plans' }, { href: '/ap-psych-daily-question', label: 'Daily question' }, { href: '/ap-psych-score-predictor', label: 'Score predictor' }],
  },
  'ap-stats-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-statistics'],
    links: [{ href: '/ap-stats-practice', label: 'Practice questions' }, { href: '/ap-stats-unit-tests', label: 'Unit tests' }, { href: '/ap-stats-study-plans', label: 'Study plans' }, { href: '/ap-stats-daily-question', label: 'Daily question' }, { href: '/ap-stats-score-predictor', label: 'Score predictor' }],
  },
  'ap-us-gov-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-us-government'],
    links: [{ href: '/ap-us-gov-practice', label: 'Practice questions' }, { href: '/ap-us-gov-unit-tests', label: 'Unit tests' }, { href: '/ap-us-gov-study-plans', label: 'Study plans' }, { href: '/ap-us-gov-daily-question', label: 'Daily question' }, { href: '/ap-us-gov-score-predictor', label: 'Score predictor' }],
  },
  'ap-us-history-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-us-history'],
    links: [{ href: '/ap-us-history-practice', label: 'Practice questions' }, { href: '/ap-us-history-unit-tests', label: 'Unit tests' }, { href: '/ap-us-history-study-plans', label: 'Study plans' }, { href: '/ap-us-history-daily-question', label: 'Daily question' }, { href: '/ap-us-history-score-predictor', label: 'Score predictor' }],
  },
  'ap-world-history-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-world-history'],
    links: [{ href: '/ap-world-history-practice', label: 'Practice questions' }, { href: '/ap-world-history-unit-tests', label: 'Unit tests' }, { href: '/ap-world-history-study-plans', label: 'Study plans' }, { href: '/ap-world-history-daily-question', label: 'Daily question' }, { href: '/ap-world-history-score-predictor', label: 'Score predictor' }],
  },
  'calcab-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-calculus-ab'],
    links: [{ href: '/ap-calcab-practice', label: 'Practice questions' }, { href: '/ap-calcab-unit-tests', label: 'Unit tests' }, { href: '/ap-calcab-study-plans', label: 'Study plans' }, { href: '/ap-calcab-daily-question', label: 'Daily question' }, { href: '/ap-calcab-score-predictor', label: 'Score predictor' }],
  },
  'calcbc-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['ap-calculus-bc'],
    links: [{ href: '/ap-calcbc-practice', label: 'Practice questions' }, { href: '/ap-calcbc-unit-tests', label: 'Unit tests' }, { href: '/ap-calcbc-study-plans', label: 'Study plans' }, { href: '/ap-calcbc-daily-question', label: 'Daily question' }, { href: '/ap-calcbc-score-predictor', label: 'Score predictor' }],
  },
  'geometry-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['geometry'],
    links: [{ href: '/geometry-practice', label: 'Practice questions' }, { href: '/geometry-unit-tests', label: 'Unit tests' }, { href: '/geometry-study-plans', label: 'Study plans' }, { href: '/geometry-daily-question', label: 'Daily question' }, { href: '/geometry-score-predictor', label: 'Score predictor' }],
  },
  'grade8-math-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['grade-8-math'],
    links: [{ href: '/grade8-math-practice', label: 'Practice questions' }, { href: '/grade8-math-unit-tests', label: 'Unit tests' }, { href: '/grade8-math-study-plans', label: 'Study plans' }, { href: '/grade8-math-daily-question', label: 'Daily question' }, { href: '/grade8-math-score-predictor', label: 'Score predictor' }],
  },
  'mcat-diagnostic': {
    displayName: 'MCAT',
    courseSlugs: ['mcat-prep'],
    links: [{ href: '/mcat-practice', label: 'Practice questions' }, { href: '/mcat-unit-tests', label: 'Unit tests' }, { href: '/mcat-study-plans', label: 'Study plans' }, { href: '/mcat-daily-question', label: 'Daily question' }, { href: '/mcat-score-predictor', label: 'Score predictor' }],
  },
  'ochem-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['organic-chemistry-1', 'organic-chemistry-2'],
    displayName: 'Organic Chemistry',
    links: [{ href: '/ochem1-practice', label: 'Practice questions' }, { href: '/ochem1-unit-tests', label: 'Unit tests' }, { href: '/ochem1-study-plans', label: 'Study plans' }, { href: '/ochem-daily-question', label: 'Daily question' }, { href: '/ochem-score-predictor', label: 'Score predictor' }],
  },
  'prealgebra-diagnostic': {
    rotatesForms: true,
    courseSlugs: ['pre-algebra'],
    links: [{ href: '/prealgebra-practice', label: 'Practice questions' }, { href: '/prealgebra-unit-tests', label: 'Unit tests' }, { href: '/prealgebra-study-plans', label: 'Study plans' }, { href: '/prealgebra-daily-question', label: 'Daily question' }, { href: '/prealgebra-score-predictor', label: 'Score predictor' }],
  },
  'sat-diagnostic': {
    displayName: 'SAT',
    courseSlugs: ['sat-prep'],
    links: [{ href: '/sat-practice', label: 'Practice questions' }, { href: '/sat-unit-tests', label: 'Unit tests' }, { href: '/sat-study-plans', label: 'Study plans' }, { href: '/sat-daily-question', label: 'Daily question' }, { href: '/sat-score-predictor', label: 'Score predictor' }],
  },
}
