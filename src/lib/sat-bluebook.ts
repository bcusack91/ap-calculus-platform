/**
 * Bluebook companion (/sat/bluebook): a student logs a College Board Bluebook
 * practice test (or an official SAT) and gets a plan for their weakest
 * content domains. Pure — validation, the stored shape, and domain selection —
 * so the page, the API route and the tests share one definition.
 *
 * STORAGE. Entries are ordinary ExternalExamScore rows (course 'sat'), so they
 * count as a full-length (the readiness bar resets), join the superscore and
 * feed the score goal exactly like the generic outside-score form. Everything
 * extra lives inside sectionScores next to the rw/math numbers existing
 * readers use (superscore-server, exam-goal-server, the readiness replay):
 *
 *   sectionScores = {
 *     rw: 650, math: 700,                 // read by every existing reader
 *     companion: 1,                       // written by the Bluebook companion (shape version)
 *     domains?: { algebra: 4, ... },      // Knowledge and Skills bands, 1–7
 *     // StudyMondo's own prediction just BEFORE saving (flat, like the ACT
 *     // entries' `predicted` in /api/exam-scores, so one query reads both):
 *     predicted?: 1290,                   // predicted total
 *     predictedRw?: 640, predictedMath?: 650,
 *     predictedConfidence?: 'low' | 'medium' | 'high',
 *     predictedEvidence?: { practiceTests, diagnostics, quizzes },
 *   }
 *
 * CALIBRATION DATA. predicted next to totalScore is the "our estimate vs the
 * real College Board score" pair the score curves need (src/lib/sat-scoring.ts).
 * The prediction comes from computeSatPrediction
 * (src/lib/sat-prediction-server.ts), which never reads outside scores, so it
 * is an independent estimate. Query it later with, e.g.:
 *
 *   SELECT "userId", source, "takenAt", "totalScore",
 *          ("sectionScores"->>'predicted')::int AS predicted,
 *          ("sectionScores"->>'rw')::int AS rw, ("sectionScores"->>'predictedRw')::int AS predicted_rw,
 *          ("sectionScores"->>'math')::int AS math, ("sectionScores"->>'predictedMath')::int AS predicted_math,
 *          "sectionScores"->>'predictedConfidence' AS confidence
 *   FROM "ExternalExamScore"
 *   WHERE course = 'sat' AND "sectionScores" ? 'predicted'
 *   ORDER BY "takenAt";
 *
 * predicted is omitted when the student had no StudyMondo evidence at all
 * (the predictor would only return its default midpoint).
 */

import { SAT_DOMAINS, isSatDomainKey, satDomain, type SatDomainKey, type SatScoreSection } from '@/lib/sat-domains'

export const BLUEBOOK_TEST_COUNT = 10
export const OFFICIAL_SAT_SOURCE = 'Official SAT'

/** Sources the companion accepts: 'Bluebook Practice 1' … 'Bluebook Practice 10', 'Official SAT'. */
export const BLUEBOOK_SOURCES: readonly string[] = [
  ...Array.from({ length: BLUEBOOK_TEST_COUNT }, (_, i) => `Bluebook Practice ${i + 1}`),
  OFFICIAL_SAT_SOURCE,
]

export const DOMAIN_BAND_MIN = 1
export const DOMAIN_BAND_MAX = 7
export const COMPANION_VERSION = 1

export type DomainBands = Partial<Record<SatDomainKey, number>>

export interface SatPredictionSnapshot {
  total: number
  rw: number
  math: number
  confidence: 'low' | 'medium' | 'high'
  evidence: { practiceTests: number; diagnostics: number; quizzes: number }
}

export interface BluebookEntry {
  source: string
  /** YYYY-MM-DD, the student's local day. */
  takenAt: string
  total: number
  rw: number
  math: number
  domains: DomainBands
}

export type ValidationResult = { ok: true; value: BluebookEntry } | { ok: false; error: string; field?: string }

const isInt = (v: unknown): v is number => typeof v === 'number' && Number.isInteger(v)

function toNumber(v: unknown): number | null {
  if (typeof v === 'number') return Number.isFinite(v) ? v : null
  if (typeof v === 'string' && /^\s*\d+\s*$/.test(v)) return Number(v)
  return null
}

/** Is a section score a real SAT section score: 200–800 in steps of 10? */
export function isSectionScore(v: unknown): v is number {
  return isInt(v) && v >= 200 && v <= 800 && v % 10 === 0
}

/** Is a total a real SAT total: 400–1600 in steps of 10? */
export function isTotalScore(v: unknown): v is number {
  return isInt(v) && v >= 400 && v <= 1600 && v % 10 === 0
}

function localTodayIso(now: Date): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

/**
 * Validate a submitted entry (form values may be strings). `now` decides what
 * "today" is; a day of slack covers students ahead of the server's zone.
 */
export function validateBluebookEntry(input: unknown, now: Date = new Date()): ValidationResult {
  if (!input || typeof input !== 'object') return { ok: false, error: 'Fill in your scores.' }
  const o = input as Record<string, unknown>

  const source = typeof o.source === 'string' ? o.source.trim() : ''
  if (!BLUEBOOK_SOURCES.includes(source)) return { ok: false, error: 'Pick which test you took.', field: 'source' }

  const takenAt = typeof o.takenAt === 'string' ? o.takenAt.trim() : ''
  if (!/^\d{4}-\d{2}-\d{2}$/.test(takenAt) || Number.isNaN(new Date(`${takenAt}T12:00:00`).getTime())) {
    return { ok: false, error: 'Enter the date you took the test.', field: 'takenAt' }
  }
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  if (takenAt > localTodayIso(tomorrow)) return { ok: false, error: 'The test date must be today or earlier.', field: 'takenAt' }
  if (takenAt < '2023-01-01') return { ok: false, error: 'Enter a date from the digital SAT era (2023 or later).', field: 'takenAt' }

  const rw = toNumber(o.rw)
  if (!isSectionScore(rw)) return { ok: false, error: 'Reading and Writing runs 200–800 in steps of 10.', field: 'rw' }
  const math = toNumber(o.math)
  if (!isSectionScore(math)) return { ok: false, error: 'Math runs 200–800 in steps of 10.', field: 'math' }
  const total = toNumber(o.total)
  if (!isTotalScore(total)) return { ok: false, error: 'Total runs 400–1600 in steps of 10.', field: 'total' }
  if (total !== rw + math) {
    return { ok: false, error: `Your total should be Reading and Writing + Math (${rw + math}). Check the numbers on your score report.`, field: 'total' }
  }

  const domains: DomainBands = {}
  if (o.domains !== undefined && o.domains !== null) {
    if (typeof o.domains !== 'object' || Array.isArray(o.domains)) return { ok: false, error: 'Check your Knowledge and Skills bands.', field: 'domains' }
    for (const [k, raw] of Object.entries(o.domains as Record<string, unknown>)) {
      if (raw === '' || raw === null || raw === undefined) continue
      if (!isSatDomainKey(k)) return { ok: false, error: 'Unknown content domain.', field: 'domains' }
      const v = toNumber(raw)
      if (!isInt(v) || v < DOMAIN_BAND_MIN || v > DOMAIN_BAND_MAX) {
        return { ok: false, error: `${satDomain(k).label} bands run ${DOMAIN_BAND_MIN}–${DOMAIN_BAND_MAX}.`, field: 'domains' }
      }
      domains[k] = v
    }
  }

  return { ok: true, value: { source, takenAt, total, rw, math, domains } }
}

/** The sectionScores JSON stored for an entry (see the header for the shape). */
export function bluebookSectionScores(entry: Pick<BluebookEntry, 'rw' | 'math' | 'domains'>, predicted: SatPredictionSnapshot | null) {
  const out: {
    rw: number
    math: number
    companion: number
    domains?: DomainBands
    predicted?: number
    predictedRw?: number
    predictedMath?: number
    predictedConfidence?: SatPredictionSnapshot['confidence']
    predictedEvidence?: SatPredictionSnapshot['evidence']
  } = { rw: entry.rw, math: entry.math, companion: COMPANION_VERSION }
  if (Object.keys(entry.domains).length) out.domains = { ...entry.domains }
  if (predicted) {
    out.predicted = predicted.total
    out.predictedRw = predicted.rw
    out.predictedMath = predicted.math
    out.predictedConfidence = predicted.confidence
    out.predictedEvidence = { ...predicted.evidence }
  }
  return out
}

/** Read a stored sectionScores value back (tolerates rows from the generic form or none at all). */
export function readBluebookSectionScores(raw: unknown): {
  rw: number | null
  math: number | null
  domains: DomainBands
  predicted: SatPredictionSnapshot | null
  companion: boolean
} {
  const o = raw && typeof raw === 'object' && !Array.isArray(raw) ? (raw as Record<string, unknown>) : {}
  const domains: DomainBands = {}
  const d = o.domains
  if (d && typeof d === 'object' && !Array.isArray(d)) {
    for (const [k, v] of Object.entries(d as Record<string, unknown>)) {
      if (isSatDomainKey(k) && isInt(v) && v >= DOMAIN_BAND_MIN && v <= DOMAIN_BAND_MAX) domains[k] = v
    }
  }
  const ev = o.predictedEvidence && typeof o.predictedEvidence === 'object' ? (o.predictedEvidence as Record<string, unknown>) : {}
  const conf = o.predictedConfidence
  const predicted: SatPredictionSnapshot | null =
    isInt(o.predicted) && isInt(o.predictedRw) && isInt(o.predictedMath)
      ? {
          total: o.predicted,
          rw: o.predictedRw,
          math: o.predictedMath,
          confidence: conf === 'low' || conf === 'high' ? conf : 'medium',
          evidence: {
            practiceTests: isInt(ev.practiceTests) ? ev.practiceTests : 0,
            diagnostics: isInt(ev.diagnostics) ? ev.diagnostics : 0,
            quizzes: isInt(ev.quizzes) ? ev.quizzes : 0,
          },
        }
      : null
  return {
    rw: isInt(o.rw) ? o.rw : null,
    math: isInt(o.math) ? o.math : null,
    domains,
    predicted,
    companion: o.companion === COMPANION_VERSION,
  }
}

export interface PlanDomain {
  key: SatDomainKey
  label: string
  section: SatScoreSection
  band: number | null
  sectionScore: number
  /** Why it made the plan, in one short phrase. */
  reason: string
}

/**
 * The 2–3 domains to work on first.
 *
 * With Knowledge and Skills bands: lowest band first; ties go to the domain in
 * the weaker section (lower section score), then to the domain worth more of
 * its section on the real test. Three are kept unless the third is clearly
 * stronger (band 6+, or two or more bands above the second), and a domain at the top band (7)
 * is only used to make up the minimum of two.
 *
 * Without bands: the weaker section leads. If it trails by 60+ points all
 * three come from it; otherwise two from it and one from the other section.
 * Within a section the heaviest-weighted domains come first.
 */
export function selectPlanDomains(entry: Pick<BluebookEntry, 'rw' | 'math' | 'domains'>): PlanDomain[] {
  const sectionScore = (s: SatScoreSection) => (s === 'rw' ? entry.rw : entry.math)
  const banded = SAT_DOMAINS.filter((d) => entry.domains[d.key] !== undefined)

  if (banded.length >= 2) {
    const ranked = [...banded].sort(
      (a, b) =>
        entry.domains[a.key]! - entry.domains[b.key]! ||
        sectionScore(a.section) - sectionScore(b.section) ||
        b.share - a.share,
    )
    const below7 = ranked.filter((d) => entry.domains[d.key]! < DOMAIN_BAND_MAX)
    let picked = below7.slice(0, 3)
    const third = picked.length === 3 ? entry.domains[picked[2].key]! : null
    if (third !== null && (third >= 6 || third - entry.domains[picked[1].key]! >= 2)) picked = picked.slice(0, 2)
    if (picked.length < 2) {
      for (const d of ranked) {
        if (picked.length >= 2) break
        if (!picked.includes(d)) picked.push(d)
      }
    }
    return picked.map((d) => {
      const band = entry.domains[d.key]!
      return {
        key: d.key,
        label: d.label,
        section: d.section,
        band,
        sectionScore: sectionScore(d.section),
        reason: band === DOMAIN_BAND_MAX ? `Band ${band} of 7 — already strong; keep it sharp` : `Band ${band} of 7 on your score report`,
      }
    })
  }

  const weaker: SatScoreSection = entry.math < entry.rw ? 'math' : entry.rw < entry.math ? 'rw' : 'rw'
  const stronger: SatScoreSection = weaker === 'rw' ? 'math' : 'rw'
  const gap = Math.abs(entry.rw - entry.math)
  const bySection = (s: SatScoreSection) =>
    SAT_DOMAINS.filter((d) => d.section === s).sort((a, b) => b.share - a.share || SAT_DOMAINS.indexOf(a) - SAT_DOMAINS.indexOf(b))
  const picked = gap >= 60 ? bySection(weaker).slice(0, 3) : [...bySection(weaker).slice(0, 2), bySection(stronger)[0]]
  const sectionName = (s: SatScoreSection) => (s === 'rw' ? 'Reading and Writing' : 'Math')
  return picked.map((d) => ({
    key: d.key,
    label: d.label,
    section: d.section,
    band: null,
    sectionScore: sectionScore(d.section),
    reason:
      d.section === weaker && gap > 0
        ? `Your lower section (${sectionName(d.section)} ${sectionScore(d.section)}); about ${Math.round(d.share * 100)}% of it`
        : `About ${Math.round(d.share * 100)}% of ${sectionName(d.section)}`,
  }))
}

/** The plan was built from score-report bands (true) or section scores only (false). */
export function planUsesBands(domains: DomainBands): boolean {
  return Object.keys(domains).length >= 2
}
