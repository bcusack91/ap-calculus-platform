/**
 * Full-length readiness: how close an MCAT or SAT student is to their next
 * full-length exam, as an experience bar (levels 1–10) over complete study
 * cycles. A cycle = a diagnostic, its recommended lessons cleared, and (MCAT)
 * the cycle's unit test passed. MCAT students do 4 cycles between
 * full-lengths, SAT students 2. Taking a full-length — on StudyMondo or an
 * outside one whose score they enter — starts the count over.
 *
 * Pure math here; src/lib/full-length-progress-server.ts replays the
 * student's history to feed it.
 */

export type FullLengthCourse = 'mcat' | 'sat'

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
  },
  sat: {
    label: 'SAT',
    cyclesRequired: 2,
    unitTestRequired: false,
    fullLengthHref: '/sat-practice',
    fullLengthLabel: 'SAT practice test',
    externalLabel: 'College Board / Bluebook practice test',
    externalSources: ['Bluebook Practice 1', 'Bluebook Practice 2', 'Bluebook Practice 3', 'Bluebook Practice 4', 'Bluebook Practice 5', 'Bluebook Practice 6', 'PSAT/NMSQT', 'Official SAT', 'Other practice test'],
    total: { min: 400, max: 1600 },
    sections: [
      { key: 'rw', label: 'Reading & Writing', min: 200, max: 800 },
      { key: 'math', label: 'Math', min: 200, max: 800 },
    ],
  },
}

export function isFullLengthCourse(key: unknown): key is FullLengthCourse {
  return key === 'mcat' || key === 'sat'
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
