/**
 * SAT superscore: the best Reading & Writing score and the best Math score
 * from ANY sittings, added together — how most colleges that superscore read
 * an applicant's SAT history. Pure; src/lib/superscore-server.ts gathers the
 * attempts (StudyMondo practice tests + College Board scores the student
 * entered).
 */

export type SatScoreSource = 'studymondo' | 'college-board'

export interface SatSitting {
  /** Stable id of the row the scores came from. */
  id: string
  /** ISO date of the sitting. */
  date: string
  rw: number
  math: number
  source: SatScoreSource
  /** Human label, e.g. 'Practice Test 3' or 'Bluebook Practice 4'. */
  label: string
}

export interface SuperscorePart {
  score: number
  from: SatSitting
}

export interface Superscore {
  total: number
  rw: SuperscorePart
  math: SuperscorePart
  /** Best single-sitting total, for comparison. */
  bestSingle: { total: number; from: SatSitting }
  /** True when the superscore beats every single sitting (sections came from different days). */
  combined: boolean
  sittings: number
}

const SECTION_MIN = 200
const SECTION_MAX = 800

function validSection(v: unknown): v is number {
  return typeof v === 'number' && Number.isInteger(v) && v >= SECTION_MIN && v <= SECTION_MAX
}

/** Higher score wins; a tie goes to the more recent sitting. */
function better(a: SatSitting, b: SatSitting, key: 'rw' | 'math'): SatSitting {
  if (a[key] !== b[key]) return a[key] > b[key] ? a : b
  return a.date >= b.date ? a : b
}

/**
 * Superscore across sittings, or null with no usable sitting. Sittings with a
 * section outside 200–800 are skipped (an incomplete entry can't contribute).
 */
export function computeSuperscore(sittings: SatSitting[]): Superscore | null {
  const usable = sittings.filter((s) => validSection(s.rw) && validSection(s.math))
  if (usable.length === 0) return null
  let rw = usable[0]
  let math = usable[0]
  let single = usable[0]
  for (const s of usable.slice(1)) {
    rw = better(rw, s, 'rw')
    math = better(math, s, 'math')
    const t = s.rw + s.math
    const st = single.rw + single.math
    if (t > st || (t === st && s.date >= single.date)) single = s
  }
  const total = rw.rw + math.math
  const bestSingle = single.rw + single.math
  return {
    total,
    rw: { score: rw.rw, from: rw },
    math: { score: math.math, from: math },
    bestSingle: { total: bestSingle, from: single },
    combined: total > bestSingle,
    sittings: usable.length,
  }
}
