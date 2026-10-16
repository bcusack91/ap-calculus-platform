/**
 * Honest bands for AP diagnostic scores on teacher surfaces: one sitting's
 * 1–5 estimate as a range, and the change between two sittings as a range.
 *
 * Owner rule (see sat-scoring.ts / mcat-scoring.ts): never show a bare point
 * estimate. A 33-question AP diagnostic estimates percent correct to about
 * ±8.5 points, which spans a whole AP cutoff, so "4" is really "3–4"; and a
 * change from 3 to 4 between two such sittings is usually inside the noise.
 *
 * Pure: no prisma, no class-plan imports (class-plan-config imports this).
 */
import { apScoreRange, estimateApScore, type ApScore } from '@/lib/ap-scoring'

export interface ApSitting {
  /** The stored 1–5 estimate (what the student saw). */
  score: ApScore
  /** ± band on the estimate: stored results.scoreRange (diagnostic v2), else computed from the counts. */
  low: ApScore
  high: ApScore
  /** Percent correct and its binomial standard error, in percentage points (null without counts). */
  percent: number | null
  standardError: number | null
}

const num = (v: unknown): number | null => (typeof v === 'number' && Number.isFinite(v) ? v : null)
const asRec = (v: unknown): Record<string, unknown> | null =>
  v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : null

const toApScore = (n: number | null): ApScore | null =>
  n !== null && Number.isInteger(n) && n >= 1 && n <= 5 ? (n as ApScore) : null

/** Correct / total of a sitting: the totals AP diagnostic pages save, else the domain tallies. */
function countsOf(r: Record<string, unknown>): { correct: number; total: number } | null {
  const correct = num(r.totalCorrect)
  const total = num(r.totalQuestions)
  if (correct !== null && total !== null && total > 0 && correct >= 0 && correct <= total) return { correct, total }
  if (Array.isArray(r.domains)) {
    let c = 0
    let t = 0
    for (const d of r.domains) {
      const o = asRec(d)
      const dc = num(o?.correct)
      const dt = num(o?.total)
      if (dc === null || dt === null || dt <= 0) return null
      c += dc
      t += dt
    }
    if (t > 0 && c <= t) return { correct: c, total: t }
  }
  return null
}

/**
 * One AP diagnostic sitting's 1–5 estimate with its band, from stored results.
 * Null when the results carry no AP estimate (not an AP diagnostic).
 * Without question counts (very old rows) the band collapses to the point;
 * callers then show the point, which is all such a row can support.
 */
export function apSittingOf(results: unknown): ApSitting | null {
  let parsed = results
  if (typeof parsed === 'string') {
    try {
      parsed = JSON.parse(parsed)
    } catch {
      return null
    }
  }
  const r = asRec(parsed)
  if (!r) return null
  const score = toApScore(num(r.estimatedAPScore))
  if (!score) return null
  const counts = countsOf(r)
  const computed = counts ? apScoreRange(counts.correct, counts.total) : null
  const stored = asRec(r.scoreRange)
  const storedLow = toApScore(num(stored?.low))
  const storedHigh = toApScore(num(stored?.high))
  const storedOk = storedLow !== null && storedHigh !== null && storedLow <= score && score <= storedHigh
  return {
    score,
    low: storedOk ? storedLow : computed ? (Math.min(computed.low, score) as ApScore) : score,
    high: storedOk ? storedHigh : computed ? (Math.max(computed.high, score) as ApScore) : score,
    percent: counts ? (counts.correct / counts.total) * 100 : null,
    standardError: computed ? computed.standardError : null,
  }
}

/** "3–4/5", or "4/5" when the band is a single score. */
export function apBandLabel(s: Pick<ApSitting, 'score' | 'low' | 'high'>): string {
  return s.low === s.high ? `${s.score}/5` : `${s.low}–${s.high}/5`
}

export interface ApGrowthBand {
  /** Change in the 1–5 estimate, latest minus first (what the two results screens showed). */
  delta: number
  /** ±1 SE band on that change, in AP score points (low ≤ delta ≤ high). */
  low: number
  high: number
  /**
   * The change clears noise: the percent-correct change is at least 2 SE of a
   * difference (the same 2·sd·√2 rule the MCAT/SAT growth view uses). Inside
   * it, the UI must present the change as noise, never as progress.
   */
  meaningful: boolean
}

/**
 * Growth between two AP diagnostic sittings as a band, e.g. "up about 1,
 * range 0 to +2".
 *
 * Percent correct changes by Δ = p2 − p1 with standard error
 * √(se1² + se2²). The band maps Δ ± 1 SE onto the AP scale from the first
 * sitting's estimate: low = score(p2 − SE) − score1, high = score(p2 + SE) −
 * score1. Both sittings must carry question counts; otherwise there is no
 * honest band and this returns null.
 */
export function apGrowthBand(first: ApSitting, latest: ApSitting, z = 1): ApGrowthBand | null {
  if (first.percent === null || latest.percent === null || first.standardError === null || latest.standardError === null) return null
  const seD = Math.sqrt(first.standardError ** 2 + latest.standardError ** 2)
  const clamp = (p: number) => Math.min(100, Math.max(0, Math.round(p)))
  const delta = latest.score - first.score
  const low = Math.min(delta, estimateApScore(clamp(latest.percent - z * seD)) - first.score)
  const high = Math.max(delta, estimateApScore(clamp(latest.percent + z * seD)) - first.score)
  return { delta, low, high, meaningful: Math.abs(latest.percent - first.percent) >= 2 * seD }
}

const signed = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : '0')
const round1 = (n: number) => Math.round(n * 10) / 10

/** "up about 1, range 0 to +2" / "down about 1, range −2 to 0" / "about the same, range −1 to +1". */
export function formatApGrowth(b: Pick<ApGrowthBand, 'delta' | 'low' | 'high'>): string {
  const d = round1(b.delta)
  const head = d > 0 ? `up about ${d}` : d < 0 ? `down about ${Math.abs(d)}` : 'about the same'
  const lo = round1(b.low)
  const hi = round1(b.high)
  return lo === hi ? head : `${head}, range ${signed(lo)} to ${signed(hi)}`
}

/**
 * A class's average growth as a band: the mean change, ± the per-student
 * half-widths combined as standard errors of a mean (√Σh² / n). One decimal,
 * since a class average of 1–5 changes is rarely a whole number.
 */
export function apClassGrowthBand(bands: ApGrowthBand[]): (ApGrowthBand & { pairedCount: number }) | null {
  if (bands.length === 0) return null
  const n = bands.length
  const mean = bands.reduce((s, b) => s + b.delta, 0) / n
  const half = Math.sqrt(bands.reduce((s, b) => s + ((b.high - b.low) / 2) ** 2, 0)) / n
  const delta = round1(mean)
  return {
    pairedCount: n,
    delta,
    low: Math.min(delta, round1(mean - half)),
    high: Math.max(delta, round1(mean + half)),
    // The class mean clears noise when its band (2× wider for the 2-SE rule) excludes zero.
    meaningful: half > 0 ? Math.abs(mean) >= 2 * half : false,
  }
}
