/**
 * One row per AP diagnostic: what the shared results screen
 * (ApDiagnosticResults) and the course landing pages need to know about a
 * course's diagnostic without importing its question bank.
 *
 * `questionCount` / `timeLimitMinutes` are the v1 form's real size (every
 * form of a course is the same length) and are guarded against the data
 * files by tests/lib/ap-diagnostic-results.test.tsx, so the copy on the
 * landing pages ("33 questions · 40 min") can never drift from the test a
 * student actually sits. Once a flagship's v2 bank is live, apDiagnosticStats
 * reads the v2 blueprint instead (same lengths today).
 *
 * Theme strings are written out in full so Tailwind can see every class.
 */
import type { ApUnitTestCourse } from '@/lib/unit-test-courses'
import { AP_DIAG_V2_BLUEPRINTS, isApDiagV2Course } from '@/lib/ap-diagnostic-v2/blueprints'
import { AP_DIAG_V2_LIVE } from '@/lib/ap-diagnostic-v2/readiness'

export interface ApDiagnosticTheme {
  /** Page background gradient stops (light mode; dark is shared). */
  page: string
  /** Accent text (headings, links). */
  text: string
  /** The big score number. */
  score: string
  /** Numbered chip. */
  chip: string
  /** Primary filled button. */
  button: string
  /** Accent border. */
  border: string
  /** Accent surface. */
  soft: string
  /** Progress bar fill. */
  bar: string
}

export interface ApDiagnosticCourse {
  /** Course hub slug (`/courses/<courseSlug>`). */
  courseSlug: string
  /** Class-plan / cycle-test key (`/cycle-test/<key>`, plan-status courseKey). */
  key: ApUnitTestCourse
  label: string
  diagnosticPath: string
  scorePredictorPath: string
  dailyQuestionPath: string
  /** Questions in one v1 sitting. */
  questionCount: number
  timeLimitMinutes: number
  theme: ApDiagnosticTheme
}

export const AP_DIAGNOSTIC_COURSES: Record<string, ApDiagnosticCourse> = {
  'ap-chemistry': {
    courseSlug: 'ap-chemistry',
    key: 'ap-chem',
    label: 'AP Chemistry',
    diagnosticPath: '/ap-chem-diagnostic',
    scorePredictorPath: '/ap-chem-score-predictor',
    dailyQuestionPath: '/ap-chem-daily-question',
    questionCount: 33,
    timeLimitMinutes: 40,
    theme: {
      page: 'from-orange-50 via-white to-red-50',
      text: 'text-orange-700 dark:text-orange-300',
      score: 'text-orange-600 dark:text-orange-400',
      chip: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
      button: 'bg-orange-600 hover:bg-orange-700 focus-visible:ring-orange-500',
      border: 'border-orange-300 dark:border-orange-700',
      soft: 'bg-orange-50 dark:bg-orange-900/20',
      bar: 'bg-orange-500',
    },
  },
  'ap-biology': {
    courseSlug: 'ap-biology',
    key: 'ap-bio',
    label: 'AP Biology',
    diagnosticPath: '/ap-bio-diagnostic',
    scorePredictorPath: '/ap-bio-score-predictor',
    dailyQuestionPath: '/ap-bio-daily-question',
    questionCount: 33,
    timeLimitMinutes: 45,
    theme: {
      page: 'from-green-50 via-white to-emerald-50',
      text: 'text-emerald-700 dark:text-emerald-300',
      score: 'text-emerald-600 dark:text-emerald-400',
      chip: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
      button: 'bg-emerald-600 hover:bg-emerald-700 focus-visible:ring-emerald-500',
      border: 'border-emerald-300 dark:border-emerald-700',
      soft: 'bg-emerald-50 dark:bg-emerald-900/20',
      bar: 'bg-emerald-500',
    },
  },
  'ap-physics-1': {
    courseSlug: 'ap-physics-1',
    key: 'ap-physics1',
    label: 'AP Physics 1',
    diagnosticPath: '/ap-physics1-diagnostic',
    scorePredictorPath: '/ap-physics1-score-predictor',
    dailyQuestionPath: '/ap-physics1-daily-question',
    questionCount: 36,
    timeLimitMinutes: 45,
    theme: {
      page: 'from-blue-50 via-white to-cyan-50',
      text: 'text-blue-700 dark:text-blue-300',
      score: 'text-blue-600 dark:text-blue-400',
      chip: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
      button: 'bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500',
      border: 'border-blue-300 dark:border-blue-700',
      soft: 'bg-blue-50 dark:bg-blue-900/20',
      bar: 'bg-blue-500',
    },
  },
  'ap-calculus-ab': {
    courseSlug: 'ap-calculus-ab',
    key: 'calcab',
    label: 'AP Calculus AB',
    diagnosticPath: '/calcab-diagnostic',
    scorePredictorPath: '/ap-calcab-score-predictor',
    dailyQuestionPath: '/ap-calcab-daily-question',
    questionCount: 35,
    timeLimitMinutes: 45,
    theme: {
      page: 'from-purple-50 via-white to-violet-50',
      text: 'text-purple-700 dark:text-purple-300',
      score: 'text-purple-600 dark:text-purple-400',
      chip: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
      button: 'bg-purple-600 hover:bg-purple-700 focus-visible:ring-purple-500',
      border: 'border-purple-300 dark:border-purple-700',
      soft: 'bg-purple-50 dark:bg-purple-900/20',
      bar: 'bg-purple-500',
    },
  },
  'ap-calculus-bc': {
    courseSlug: 'ap-calculus-bc',
    key: 'calcbc',
    label: 'AP Calculus BC',
    diagnosticPath: '/calcbc-diagnostic',
    scorePredictorPath: '/ap-calcbc-score-predictor',
    dailyQuestionPath: '/ap-calcbc-daily-question',
    questionCount: 40,
    timeLimitMinutes: 55,
    theme: {
      page: 'from-violet-50 via-white to-purple-50',
      text: 'text-violet-700 dark:text-violet-300',
      score: 'text-violet-600 dark:text-violet-400',
      chip: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
      button: 'bg-violet-600 hover:bg-violet-700 focus-visible:ring-violet-500',
      border: 'border-violet-300 dark:border-violet-700',
      soft: 'bg-violet-50 dark:bg-violet-900/20',
      bar: 'bg-violet-500',
    },
  },
  'ap-precalculus': {
    courseSlug: 'ap-precalculus',
    key: 'ap-precalculus',
    label: 'AP Precalculus',
    diagnosticPath: '/ap-precalculus-diagnostic',
    scorePredictorPath: '/ap-precalculus-score-predictor',
    dailyQuestionPath: '/ap-precalculus-daily-question',
    questionCount: 30,
    timeLimitMinutes: 40,
    theme: {
      page: 'from-cyan-50 via-white to-blue-50',
      text: 'text-cyan-700 dark:text-cyan-300',
      score: 'text-cyan-600 dark:text-cyan-400',
      chip: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
      button: 'bg-cyan-600 hover:bg-cyan-700 focus-visible:ring-cyan-500',
      border: 'border-cyan-300 dark:border-cyan-700',
      soft: 'bg-cyan-50 dark:bg-cyan-900/20',
      bar: 'bg-cyan-500',
    },
  },
  'ap-statistics': {
    courseSlug: 'ap-statistics',
    key: 'ap-stats',
    label: 'AP Statistics',
    diagnosticPath: '/ap-stats-diagnostic',
    scorePredictorPath: '/ap-stats-score-predictor',
    dailyQuestionPath: '/ap-stats-daily-question',
    questionCount: 35,
    timeLimitMinutes: 45,
    theme: {
      page: 'from-indigo-50 via-white to-blue-50',
      text: 'text-indigo-700 dark:text-indigo-300',
      score: 'text-indigo-600 dark:text-indigo-400',
      chip: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
      button: 'bg-indigo-600 hover:bg-indigo-700 focus-visible:ring-indigo-500',
      border: 'border-indigo-300 dark:border-indigo-700',
      soft: 'bg-indigo-50 dark:bg-indigo-900/20',
      bar: 'bg-indigo-500',
    },
  },
  'ap-physics-2': {
    courseSlug: 'ap-physics-2',
    key: 'ap-physics2',
    label: 'AP Physics 2',
    diagnosticPath: '/ap-physics2-diagnostic',
    scorePredictorPath: '/ap-physics2-score-predictor',
    dailyQuestionPath: '/ap-physics2-daily-question',
    questionCount: 33,
    timeLimitMinutes: 45,
    theme: {
      page: 'from-violet-50 via-white to-purple-50',
      text: 'text-violet-700 dark:text-violet-300',
      score: 'text-violet-600 dark:text-violet-400',
      chip: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
      button: 'bg-violet-600 hover:bg-violet-700 focus-visible:ring-violet-500',
      border: 'border-violet-300 dark:border-violet-700',
      soft: 'bg-violet-50 dark:bg-violet-900/20',
      bar: 'bg-violet-500',
    },
  },
  'ap-physics-c-mechanics': {
    courseSlug: 'ap-physics-c-mechanics',
    key: 'ap-physics-c-mech',
    label: 'AP Physics C: Mechanics',
    diagnosticPath: '/ap-physics-c-mech-diagnostic',
    scorePredictorPath: '/ap-physics-c-mech-score-predictor',
    dailyQuestionPath: '/ap-physics-c-mech-daily-question',
    questionCount: 30,
    timeLimitMinutes: 40,
    theme: {
      page: 'from-slate-50 via-white to-blue-50',
      text: 'text-slate-700 dark:text-slate-300',
      score: 'text-slate-600 dark:text-slate-400',
      chip: 'bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300',
      button: 'bg-slate-600 hover:bg-slate-700 focus-visible:ring-slate-500',
      border: 'border-slate-300 dark:border-slate-700',
      soft: 'bg-slate-50 dark:bg-slate-900/20',
      bar: 'bg-slate-500',
    },
  },
  'ap-physics-c-em': {
    courseSlug: 'ap-physics-c-em',
    key: 'ap-physics-c-em',
    label: 'AP Physics C: E&M',
    diagnosticPath: '/ap-physics-c-em-diagnostic',
    scorePredictorPath: '/ap-physics-c-em-score-predictor',
    dailyQuestionPath: '/ap-physics-c-em-daily-question',
    questionCount: 30,
    timeLimitMinutes: 40,
    theme: {
      page: 'from-amber-50 via-white to-yellow-50',
      text: 'text-amber-700 dark:text-amber-300',
      score: 'text-amber-600 dark:text-amber-400',
      chip: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
      button: 'bg-amber-600 hover:bg-amber-700 focus-visible:ring-amber-500',
      border: 'border-amber-300 dark:border-amber-700',
      soft: 'bg-amber-50 dark:bg-amber-900/20',
      bar: 'bg-amber-500',
    },
  },
  'ap-environmental-science': {
    courseSlug: 'ap-environmental-science',
    key: 'ap-enviro',
    label: 'AP Environmental Science',
    diagnosticPath: '/ap-enviro-diagnostic',
    scorePredictorPath: '/ap-enviro-score-predictor',
    dailyQuestionPath: '/ap-enviro-daily-question',
    questionCount: 18,
    timeLimitMinutes: 35,
    theme: {
      page: 'from-lime-50 via-white to-green-50',
      text: 'text-lime-700 dark:text-lime-300',
      score: 'text-lime-600 dark:text-lime-400',
      chip: 'bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300',
      button: 'bg-lime-600 hover:bg-lime-700 focus-visible:ring-lime-500',
      border: 'border-lime-300 dark:border-lime-700',
      soft: 'bg-lime-50 dark:bg-lime-900/20',
      bar: 'bg-lime-500',
    },
  },
  'ap-computer-science-a': {
    courseSlug: 'ap-computer-science-a',
    key: 'ap-csa',
    label: 'AP Computer Science A',
    diagnosticPath: '/ap-csa-diagnostic',
    scorePredictorPath: '/ap-csa-score-predictor',
    dailyQuestionPath: '/ap-csa-daily-question',
    questionCount: 21,
    timeLimitMinutes: 35,
    theme: {
      page: 'from-gray-50 via-white to-slate-50',
      text: 'text-gray-700 dark:text-gray-300',
      score: 'text-gray-600 dark:text-gray-400',
      chip: 'bg-gray-100 text-gray-700 dark:bg-gray-900/40 dark:text-gray-300',
      button: 'bg-gray-600 hover:bg-gray-700 focus-visible:ring-gray-500',
      border: 'border-gray-300 dark:border-gray-700',
      soft: 'bg-gray-50 dark:bg-gray-900/20',
      bar: 'bg-gray-500',
    },
  },
  'ap-computer-science-principles': {
    courseSlug: 'ap-computer-science-principles',
    key: 'ap-csp',
    label: 'AP CS Principles',
    diagnosticPath: '/ap-csp-diagnostic',
    scorePredictorPath: '/ap-csp-score-predictor',
    dailyQuestionPath: '/ap-csp-daily-question',
    questionCount: 15,
    timeLimitMinutes: 35,
    theme: {
      page: 'from-cyan-50 via-white to-sky-50',
      text: 'text-cyan-700 dark:text-cyan-300',
      score: 'text-cyan-600 dark:text-cyan-400',
      chip: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
      button: 'bg-cyan-600 hover:bg-cyan-700 focus-visible:ring-cyan-500',
      border: 'border-cyan-300 dark:border-cyan-700',
      soft: 'bg-cyan-50 dark:bg-cyan-900/20',
      bar: 'bg-cyan-500',
    },
  },
  'ap-english-language': {
    courseSlug: 'ap-english-language',
    key: 'ap-english-lang',
    label: 'AP English Language',
    diagnosticPath: '/ap-english-lang-diagnostic',
    scorePredictorPath: '/ap-english-lang-score-predictor',
    dailyQuestionPath: '/ap-english-lang-daily-question',
    questionCount: 17,
    timeLimitMinutes: 35,
    theme: {
      page: 'from-indigo-50 via-white to-blue-50',
      text: 'text-indigo-700 dark:text-indigo-300',
      score: 'text-indigo-600 dark:text-indigo-400',
      chip: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
      button: 'bg-indigo-600 hover:bg-indigo-700 focus-visible:ring-indigo-500',
      border: 'border-indigo-300 dark:border-indigo-700',
      soft: 'bg-indigo-50 dark:bg-indigo-900/20',
      bar: 'bg-indigo-500',
    },
  },
  'ap-english-literature': {
    courseSlug: 'ap-english-literature',
    key: 'ap-english-lit',
    label: 'AP English Literature',
    diagnosticPath: '/ap-english-lit-diagnostic',
    scorePredictorPath: '/ap-english-lit-score-predictor',
    dailyQuestionPath: '/ap-english-lit-daily-question',
    questionCount: 18,
    timeLimitMinutes: 35,
    theme: {
      page: 'from-rose-50 via-white to-pink-50',
      text: 'text-rose-700 dark:text-rose-300',
      score: 'text-rose-600 dark:text-rose-400',
      chip: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
      button: 'bg-rose-600 hover:bg-rose-700 focus-visible:ring-rose-500',
      border: 'border-rose-300 dark:border-rose-700',
      soft: 'bg-rose-50 dark:bg-rose-900/20',
      bar: 'bg-rose-500',
    },
  },
  'ap-us-history': {
    courseSlug: 'ap-us-history',
    key: 'ap-us-history',
    label: 'AP US History',
    diagnosticPath: '/ap-us-history-diagnostic',
    scorePredictorPath: '/ap-us-history-score-predictor',
    dailyQuestionPath: '/ap-us-history-daily-question',
    questionCount: 28,
    timeLimitMinutes: 55,
    theme: {
      page: 'from-red-50 via-white to-rose-50',
      text: 'text-red-700 dark:text-red-300',
      score: 'text-red-600 dark:text-red-400',
      chip: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
      button: 'bg-red-600 hover:bg-red-700 focus-visible:ring-red-500',
      border: 'border-red-300 dark:border-red-700',
      soft: 'bg-red-50 dark:bg-red-900/20',
      bar: 'bg-red-500',
    },
  },
  'ap-world-history': {
    courseSlug: 'ap-world-history',
    key: 'ap-world-history',
    label: 'AP World History',
    diagnosticPath: '/ap-world-history-diagnostic',
    scorePredictorPath: '/ap-world-history-score-predictor',
    dailyQuestionPath: '/ap-world-history-daily-question',
    questionCount: 27,
    timeLimitMinutes: 55,
    theme: {
      page: 'from-amber-50 via-white to-orange-50',
      text: 'text-amber-700 dark:text-amber-300',
      score: 'text-amber-600 dark:text-amber-400',
      chip: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
      button: 'bg-amber-600 hover:bg-amber-700 focus-visible:ring-amber-500',
      border: 'border-amber-300 dark:border-amber-700',
      soft: 'bg-amber-50 dark:bg-amber-900/20',
      bar: 'bg-amber-500',
    },
  },
  'ap-us-government': {
    courseSlug: 'ap-us-government',
    key: 'ap-us-gov',
    label: 'AP US Government',
    diagnosticPath: '/ap-us-gov-diagnostic',
    scorePredictorPath: '/ap-us-gov-score-predictor',
    dailyQuestionPath: '/ap-us-gov-daily-question',
    questionCount: 25,
    timeLimitMinutes: 50,
    theme: {
      page: 'from-blue-50 via-white to-indigo-50',
      text: 'text-blue-700 dark:text-blue-300',
      score: 'text-blue-600 dark:text-blue-400',
      chip: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
      button: 'bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500',
      border: 'border-blue-300 dark:border-blue-700',
      soft: 'bg-blue-50 dark:bg-blue-900/20',
      bar: 'bg-blue-500',
    },
  },
  'ap-human-geography': {
    courseSlug: 'ap-human-geography',
    key: 'ap-human-geo',
    label: 'AP Human Geography',
    diagnosticPath: '/ap-human-geo-diagnostic',
    scorePredictorPath: '/ap-human-geo-score-predictor',
    dailyQuestionPath: '/ap-human-geo-daily-question',
    questionCount: 28,
    timeLimitMinutes: 55,
    theme: {
      page: 'from-emerald-50 via-white to-teal-50',
      text: 'text-emerald-700 dark:text-emerald-300',
      score: 'text-emerald-600 dark:text-emerald-400',
      chip: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
      button: 'bg-emerald-600 hover:bg-emerald-700 focus-visible:ring-emerald-500',
      border: 'border-emerald-300 dark:border-emerald-700',
      soft: 'bg-emerald-50 dark:bg-emerald-900/20',
      bar: 'bg-emerald-500',
    },
  },
  'ap-macroeconomics': {
    courseSlug: 'ap-macroeconomics',
    key: 'ap-macro',
    label: 'AP Macroeconomics',
    diagnosticPath: '/ap-macro-diagnostic',
    scorePredictorPath: '/ap-macro-score-predictor',
    dailyQuestionPath: '/ap-macro-daily-question',
    questionCount: 27,
    timeLimitMinutes: 55,
    theme: {
      page: 'from-green-50 via-white to-emerald-50',
      text: 'text-green-700 dark:text-green-300',
      score: 'text-green-600 dark:text-green-400',
      chip: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
      button: 'bg-green-600 hover:bg-green-700 focus-visible:ring-green-500',
      border: 'border-green-300 dark:border-green-700',
      soft: 'bg-green-50 dark:bg-green-900/20',
      bar: 'bg-green-500',
    },
  },
  'ap-microeconomics': {
    courseSlug: 'ap-microeconomics',
    key: 'ap-micro',
    label: 'AP Microeconomics',
    diagnosticPath: '/ap-micro-diagnostic',
    scorePredictorPath: '/ap-micro-score-predictor',
    dailyQuestionPath: '/ap-micro-daily-question',
    questionCount: 27,
    timeLimitMinutes: 55,
    theme: {
      page: 'from-teal-50 via-white to-cyan-50',
      text: 'text-teal-700 dark:text-teal-300',
      score: 'text-teal-600 dark:text-teal-400',
      chip: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
      button: 'bg-teal-600 hover:bg-teal-700 focus-visible:ring-teal-500',
      border: 'border-teal-300 dark:border-teal-700',
      soft: 'bg-teal-50 dark:bg-teal-900/20',
      bar: 'bg-teal-500',
    },
  },
  'ap-psychology': {
    courseSlug: 'ap-psychology',
    key: 'ap-psych',
    label: 'AP Psychology',
    diagnosticPath: '/ap-psych-diagnostic',
    scorePredictorPath: '/ap-psych-score-predictor',
    dailyQuestionPath: '/ap-psych-daily-question',
    questionCount: 33,
    timeLimitMinutes: 40,
    theme: {
      page: 'from-amber-50 via-white to-purple-50',
      text: 'text-purple-700 dark:text-purple-300',
      score: 'text-purple-600 dark:text-purple-400',
      chip: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
      button: 'bg-purple-600 hover:bg-purple-700 focus-visible:ring-purple-500',
      border: 'border-purple-300 dark:border-purple-700',
      soft: 'bg-purple-50 dark:bg-purple-900/20',
      bar: 'bg-purple-500',
    },
  },
  'ap-african-american-studies': {
    courseSlug: 'ap-african-american-studies',
    key: 'ap-aas',
    label: 'AP African American Studies',
    diagnosticPath: '/ap-african-american-studies-diagnostic',
    scorePredictorPath: '/ap-african-american-studies-score-predictor',
    dailyQuestionPath: '/ap-african-american-studies-daily-question',
    questionCount: 26,
    timeLimitMinutes: 50,
    theme: {
      page: 'from-purple-50 via-white to-violet-50',
      text: 'text-purple-700 dark:text-purple-300',
      score: 'text-purple-600 dark:text-purple-400',
      chip: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
      button: 'bg-purple-600 hover:bg-purple-700 focus-visible:ring-purple-500',
      border: 'border-purple-300 dark:border-purple-700',
      soft: 'bg-purple-50 dark:bg-purple-900/20',
      bar: 'bg-purple-500',
    },
  },
}

/** The config for a course hub slug; throws for a non-AP course so a typo fails at build/test time. */
export function apDiagnosticCourse(courseSlug: string): ApDiagnosticCourse {
  const c = AP_DIAGNOSTIC_COURSES[courseSlug]
  if (!c) throw new Error(`ap-diagnostic-courses: no AP diagnostic config for "${courseSlug}"`)
  return c
}

/** Every configured course, in table order. */
export const AP_DIAGNOSTIC_COURSE_SLUGS = Object.keys(AP_DIAGNOSTIC_COURSES)

/**
 * The diagnostic a student would sit today: the v2 blueprint once that
 * course's v2 is live, else the v1 form.
 */
export function apDiagnosticLength(courseSlug: string): { questionCount: number; timeLimitMinutes: number } {
  if (isApDiagV2Course(courseSlug) && AP_DIAG_V2_LIVE[courseSlug]) {
    const bp = AP_DIAG_V2_BLUEPRINTS[courseSlug]
    return { questionCount: bp.length, timeLimitMinutes: bp.timeLimitMinutes }
  }
  const c = apDiagnosticCourse(courseSlug)
  return { questionCount: c.questionCount, timeLimitMinutes: c.timeLimitMinutes }
}

/** "33 questions · 40 min" for a landing-page tool card. */
export function apDiagnosticStats(courseSlug: string): string {
  const { questionCount, timeLimitMinutes } = apDiagnosticLength(courseSlug)
  return `${questionCount} questions · ${timeLimitMinutes} min`
}
