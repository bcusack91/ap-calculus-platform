/**
 * Full-length readiness: how close an MCAT, SAT or AP student is to their
 * next full-length exam, as an experience bar (levels 1–10) over complete
 * study cycles. A cycle = a diagnostic, its recommended lessons cleared, and
 * (MCAT) the cycle's unit test passed. MCAT students do 4 cycles between
 * full-lengths, SAT and AP students 2. Taking a full-length — on StudyMondo or
 * an outside one whose score they enter — starts the count over.
 *
 * AP (Oct 2026): every AP class-plan course has a StudyMondo practice exam
 * (src/lib/ap-practice-exams.ts), so every AP course gets the bar. The
 * full-length is any form of that exam (DiagnosticTest category
 * 'ap-practice-exam:<key>'); the outside score is a released College Board
 * practice exam or the real AP score (1–5). The AP cycle test is recommended,
 * not required, as for the SAT.
 *
 * Pure here (client-safe); src/lib/full-length-progress-server.ts replays the
 * student's history to feed it.
 */
import { classPlanCourse } from '@/lib/class-plan-config'
import { AP_UNIT_TEST_COURSES, type ApUnitTestCourse } from '@/lib/unit-test-courses'

/** MCAT, SAT, or an AP course by its class-plan key ('ap-chem', 'calcab', …). */
export type FullLengthCourse = 'mcat' | 'sat' | ApUnitTestCourse

export interface FullLengthCourseConfig {
  label: string
  cyclesRequired: number
  /** The cycle's unit test must be passed for the cycle to count (MCAT). */
  unitTestRequired: boolean
  fullLengthHref: string
  fullLengthLabel: string
  /** What an outside score is called on the entry form. */
  externalLabel: string
  externalSources: string[]
  total: { min: number; max: number }
  sections: { key: string; label: string; min: number; max: number }[]
  /** DiagnosticTest.category prefix of the course's cycle diagnostic. */
  diagnosticCategoryPrefix: string
  /** The course's hub page. */
  coursePage: string
  /** AP only: the AP_PRACTICE_EXAMS key whose attempts are the full-lengths. */
  apPracticeKey?: string
}

/**
 * AP practice-exam keys that differ from the class-plan key (the registry
 * keys follow the exam pages: /ap-calcab-practice, /ap-precalc-practice, …).
 * Guarded against AP_PRACTICE_EXAMS by tests/lib/ap-full-length-readiness.test.ts.
 */
const AP_PRACTICE_KEY_OVERRIDES: Partial<Record<ApUnitTestCourse, string>> = {
  calcab: 'ap-calcab',
  calcbc: 'ap-calcbc',
  'ap-precalculus': 'ap-precalc',
  'ap-aas': 'ap-african-american-studies',
}

/** Hub pages that are not /<Course.slug>. */
const AP_COURSE_PAGE_OVERRIDES: Partial<Record<ApUnitTestCourse, string>> = {
  'ap-csp': '/ap-cs-principles',
}

/** The AP practice-exam key (AP_PRACTICE_EXAMS) for an AP class-plan key. */
export function apPracticeKeyFor(course: ApUnitTestCourse): string {
  return AP_PRACTICE_KEY_OVERRIDES[course] ?? course
}

/** Released College Board exams and the real score count; both are 1–5. */
export const AP_EXTERNAL_SOURCES = ['Official AP Exam', 'AP Classroom practice exam', 'Released College Board exam', 'Other practice exam']

/** AP: the SAT's 2 cycles, since an AP practice exam is a 3-hour sitting and most courses have one to three forms. */
export const AP_CYCLES_REQUIRED = 2

function apConfig(course: ApUnitTestCourse): FullLengthCourseConfig {
  const c = classPlanCourse(course)
  if (!c?.courseSlug) throw new Error(`full-length-progress: ${course} is not an AP class-plan course`)
  const practiceKey = apPracticeKeyFor(course)
  return {
    label: c.label,
    cyclesRequired: AP_CYCLES_REQUIRED,
    unitTestRequired: false,
    fullLengthHref: `/${practiceKey}-practice`,
    fullLengthLabel: `${c.label} practice exam`,
    externalLabel: 'AP exam or released practice exam',
    externalSources: AP_EXTERNAL_SOURCES,
    total: { min: 1, max: 5 },
    sections: [],
    diagnosticCategoryPrefix: c.categoryPrefix,
    coursePage: AP_COURSE_PAGE_OVERRIDES[course] ?? `/${c.courseSlug}`,
    apPracticeKey: practiceKey,
  }
}

export const FULL_LENGTH_COURSES: Record<FullLengthCourse, FullLengthCourseConfig> = {
  mcat: {
    label: 'MCAT',
    cyclesRequired: 4,
    unitTestRequired: true,
    fullLengthHref: '/mcat-full-length',
    fullLengthLabel: 'MCAT full-length',
    externalLabel: 'AAMC full-length',
    externalSources: ['AAMC Sample Test', 'AAMC Full Length 1', 'AAMC Full Length 2', 'AAMC Full Length 3', 'AAMC Full Length 4', 'AAMC Full Length 5', 'Other full-length'],
    total: { min: 472, max: 528 },
    sections: [
      { key: 'chem-phys', label: 'Chem/Phys', min: 118, max: 132 },
      { key: 'cars', label: 'CARS', min: 118, max: 132 },
      { key: 'bio-biochem', label: 'Bio/Biochem', min: 118, max: 132 },
      { key: 'psych-soc', label: 'Psych/Soc', min: 118, max: 132 },
    ],
    diagnosticCategoryPrefix: 'mcat-full-diagnostic',
    coursePage: '/mcat',
  },
  sat: {
    label: 'SAT',
    cyclesRequired: 2,
    unitTestRequired: false,
    fullLengthHref: '/sat-practice',
    fullLengthLabel: 'SAT practice test',
    externalLabel: 'College Board / Bluebook practice test',
    // Same labels as the Bluebook companion (BLUEBOOK_SOURCES in src/lib/sat-bluebook.ts).
    externalSources: [...Array.from({ length: 10 }, (_, i) => `Bluebook Practice ${i + 1}`), 'PSAT/NMSQT', 'Official SAT', 'Other practice test'],
    total: { min: 400, max: 1600 },
    sections: [
      { key: 'rw', label: 'Reading & Writing', min: 200, max: 800 },
      { key: 'math', label: 'Math', min: 200, max: 800 },
    ],
    diagnosticCategoryPrefix: 'sat-full-diagnostic',
    coursePage: '/sat',
  },
  ...(Object.fromEntries(AP_UNIT_TEST_COURSES.map((k) => [k, apConfig(k)])) as Record<ApUnitTestCourse, FullLengthCourseConfig>),
}

/** Every readiness course: MCAT, SAT, then the AP courses in class-plan order. */
export const FULL_LENGTH_COURSE_KEYS = Object.keys(FULL_LENGTH_COURSES) as FullLengthCourse[]

export function isFullLengthCourse(key: unknown): key is FullLengthCourse {
  return typeof key === 'string' && Object.prototype.hasOwnProperty.call(FULL_LENGTH_COURSES, key)
}

/** An AP readiness course (its full-length is an AP practice exam). */
export function isApFullLengthCourse(key: unknown): key is ApUnitTestCourse {
  return isFullLengthCourse(key) && key !== 'mcat' && key !== 'sat'
}

/**
 * 'a' or 'an' before a label: "an AAMC full-length", "an MCAT full-length",
 * "a College Board …", "an AP Chemistry practice exam". Initialisms go by the
 * sound of their first letter; words by their first letter.
 */
export function aOrAn(label: string): 'a' | 'an' {
  const first = label.trim().split(/[\s/-]/)[0] ?? ''
  if (/^[A-Z]{2,}$/.test(first)) return /^[AEFHILMNORSX]/.test(first) ? 'an' : 'a'
  return /^[aeiou]/i.test(first) ? 'an' : 'a'
}

export const READINESS_LEVELS = 10
/** XP per complete cycle; the bar's total is cyclesRequired × this. */
export const XP_PER_CYCLE = 1000
/**
 * How the levels stretch: the XP needed to reach level L is
 * (L−1 / 9)^LEVEL_CURVE of the total, so the first levels come fast and the
 * last ones take longer — level 2 after ~5% of the work, level 9 at ~84%.
 */
export const LEVEL_CURVE = 1.4

/** Fraction of total XP needed to reach each level, index 0 = level 1 (0) … index 9 = level 10 (1). */
export function levelThresholds(levels = READINESS_LEVELS, curve = LEVEL_CURVE): number[] {
  return Array.from({ length: levels }, (_, i) => Math.pow(i / (levels - 1), curve))
}

export interface CycleProgressInput {
  topicsCleared: number
  topicsTotal: number
  unitTestPassed: boolean
  unitTestRequired: boolean
}

/** Weights inside one cycle: taking the diagnostic, clearing its lessons, passing its unit test. */
const DIAGNOSTIC_WEIGHT = 0.1
const UNIT_TEST_WEIGHT = 0.2

/** 0–1 share of one cycle that is done. The diagnostic itself is the first 10%. */
export function cycleFraction(c: CycleProgressInput): number {
  const lessonsWeight = 1 - DIAGNOSTIC_WEIGHT - (c.unitTestRequired ? UNIT_TEST_WEIGHT : 0)
  const lessons = c.topicsTotal > 0 ? Math.min(1, c.topicsCleared / c.topicsTotal) : 1
  let f = DIAGNOSTIC_WEIGHT + lessonsWeight * lessons
  if (c.unitTestRequired && c.unitTestPassed) f += UNIT_TEST_WEIGHT
  return Math.min(1, f)
}

export function cycleComplete(c: CycleProgressInput): boolean {
  return (c.topicsTotal === 0 || c.topicsCleared >= c.topicsTotal) && (!c.unitTestRequired || c.unitTestPassed)
}

export interface ReadinessBar {
  /** 0–1 of the work needed before the next full-length. */
  fraction: number
  xp: number
  xpTotal: number
  level: number
  levels: number
  /** 0–1 progress inside the current level (1 at the top level). */
  levelFraction: number
  /** XP at the start and end of the current level. */
  xpLevelFloor: number
  xpLevelCeil: number
  ready: boolean
}

/** The bar for a set of cycle fractions (in-progress cycles count partially). */
export function readinessBar(cycleFractions: number[], cyclesRequired: number): ReadinessBar {
  const xpTotal = cyclesRequired * XP_PER_CYCLE
  const done = cycleFractions.reduce((sum, f) => sum + Math.max(0, Math.min(1, f)), 0)
  const xp = Math.min(xpTotal, Math.round(done * XP_PER_CYCLE))
  const fraction = xpTotal > 0 ? xp / xpTotal : 1
  const thresholds = levelThresholds()
  let level = 1
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (fraction >= thresholds[i] - 1e-9) {
      level = i + 1
      break
    }
  }
  const floor = thresholds[level - 1] * xpTotal
  const ceil = level < READINESS_LEVELS ? thresholds[level] * xpTotal : xpTotal
  const levelFraction = level >= READINESS_LEVELS ? 1 : ceil > floor ? Math.min(1, (xp - floor) / (ceil - floor)) : 1
  return {
    fraction,
    xp,
    xpTotal,
    level,
    levels: READINESS_LEVELS,
    levelFraction,
    xpLevelFloor: Math.round(floor),
    xpLevelCeil: Math.round(ceil),
    ready: level >= READINESS_LEVELS,
  }
}

export interface CycleSummary {
  diagnosticId: string
  startedAt: string
  topicsCleared: number
  topicsTotal: number
  unitTestPassed: boolean
  unitTestRequired: boolean
  complete: boolean
  fraction: number
}

export interface FullLengthEvent {
  at: string
  kind: 'studymondo' | 'external'
  score: number | null
  source: string | null
  /** Permanent review page for a StudyMondo full-length (/review/...). */
  href?: string | null
}

export interface FullLengthReadiness extends ReadinessBar {
  course: FullLengthCourse
  label: string
  cyclesRequired: number
  cyclesComplete: number
  /** Cycles counting toward the next full-length, oldest first. */
  cycles: CycleSummary[]
  /** The cycle the student is in now, or null between cycles / before any diagnostic. */
  currentCycle: CycleSummary | null
  fullLengthHref: string
  fullLengthLabel: string
  externalLabel: string
  lastFullLength: FullLengthEvent | null
  fullLengthsTaken: number
}

/** One line of plain truth under the bar: where the student actually is. */
export function describeReadiness(r: FullLengthReadiness): string {
  const cycleWord = (n: number) => `${n} cycle${n === 1 ? '' : 's'}`
  if (r.ready) {
    return `${cycleWord(r.cyclesComplete)} complete — time for your next ${r.fullLengthLabel}.`
  }
  const c = r.currentCycle
  if (!c) {
    return r.cyclesComplete === 0
      ? `Take the ${r.label} diagnostic to start cycle 1 of ${r.cyclesRequired}.`
      : `${r.cyclesComplete} of ${cycleWord(r.cyclesRequired)} complete — take the next diagnostic to start cycle ${r.cyclesComplete + 1}.`
  }
  const cycleNumber = Math.min(r.cyclesRequired, r.cyclesComplete + 1)
  const lessons = c.topicsTotal > 0 ? `${c.topicsCleared} of ${c.topicsTotal} lessons cleared` : 'no lessons to clear'
  if (c.topicsCleared >= c.topicsTotal && c.unitTestRequired && !c.unitTestPassed) {
    return `Cycle ${cycleNumber} of ${r.cyclesRequired} · ${lessons} · unit test next.`
  }
  return `Cycle ${cycleNumber} of ${r.cyclesRequired} · ${lessons}.`
}
