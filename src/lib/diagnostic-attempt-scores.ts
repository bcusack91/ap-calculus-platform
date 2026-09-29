import { projectionRange as mcatRange, sectionScaledScore as mcatSectionScaled } from '@/lib/mcat-scoring'
import { diagnosticScreenRange as satRange, satSectionScaled } from '@/lib/sat-scoring'
import { projectionRange as actRange, actSectionScaled } from '@/lib/act-scoring'

/**
 * The scores a student sees for a PAST diagnostic attempt: the estimated
 * overall score (with its ± range where the course has one) and the estimated
 * score for each section — the same numbers the results screen showed when
 * the attempt was finished.
 *
 * Stored values always win. SAT and MCAT curves were recalibrated on
 * 2026-09-07, so re-scoring an older attempt with today's curve would change
 * the number the student saw; a piece is only derived when it was never
 * stored (ranges before 2026-09-07, or a section score missing from an
 * unusually old row — derived from the stored per-section domain tallies).
 */

export type DiagnosticFamily = 'mcat' | 'sat' | 'act' | 'calcbc' | 'ap' | 'level' | 'ochem' | 'other'

export type AttemptScoreSummary = {
  family: DiagnosticFamily
  overall: { label: string; value: string; detail?: string } | null
  sections: { key: string; label: string; value: number; outOf: number }[]
  /** Unit/domain breakdown (the only per-area detail AP and math-level diagnostics have). */
  domains: { name: string; correct: number; total: number; percentage: number }[]
}

const LEVEL_COURSES = ['algebra1', 'algebra2', 'geometry', 'grade8-math', 'prealgebra', 'precalc']

export function diagnosticFamily(category: string): DiagnosticFamily {
  const c = category.toLowerCase()
  if (c.startsWith('mcat')) return 'mcat'
  if (c.startsWith('sat')) return 'sat'
  if (c.startsWith('act')) return 'act'
  if (c.startsWith('calcbc') || c.startsWith('ap-calcbc')) return 'calcbc'
  if (c.startsWith('ochem')) return 'ochem'
  if (LEVEL_COURSES.some((p) => c.startsWith(`${p}-diagnostic`))) return 'level'
  if (c.startsWith('ap-') || c.startsWith('calcab')) return 'ap'
  return 'other'
}

/** The page where a student retakes this diagnostic. */
export function diagnosticPathForCategory(category: string): string {
  const family = diagnosticFamily(category)
  if (family === 'sat') return '/sat-diagnostic' // sat-full-diagnostic, sat-hard-module-N, …
  if (family === 'mcat') return '/mcat-diagnostic' // mcat-full-diagnostic
  const slug = category.replace(/-\d+$/, '') // strip trailing -<form>
  if (slug === 'ap-aas-diagnostic') return '/ap-african-american-studies-diagnostic'
  return `/${slug}`
}

const num = (v: unknown): number | null => (typeof v === 'number' && Number.isFinite(v) ? v : null)
const rec = (v: unknown): Record<string, unknown> => (v && typeof v === 'object' ? (v as Record<string, unknown>) : {})

function storedRange(v: unknown, lo: number, hi: number): { low: number; high: number } | null {
  const r = rec(v)
  const low = num(r.low)
  const high = num(r.high)
  return low != null && high != null && low >= lo && high <= hi && low <= high ? { low, high } : null
}

function domainsOf(results: Record<string, unknown>) {
  const raw = Array.isArray(results.domains) ? results.domains : []
  return raw.flatMap((d) => {
    const o = rec(d)
    const correct = num(o.correct)
    const total = num(o.total)
    if (correct == null || total == null || total <= 0) return []
    const name = String(o.domainName ?? o.name ?? o.domainId ?? o.domain ?? '').trim()
    if (!name) return []
    return [{ name, correct, total, percentage: num(o.percentage) ?? Math.round((correct / total) * 100), section: typeof o.section === 'string' ? o.section : '' }]
  })
}

/** Section score derived from the stored domain tallies of one section. */
function sectionFromDomains(domains: ReturnType<typeof domainsOf>, section: string, scale: (f: number) => number): number | null {
  const inSection = domains.filter((d) => d.section === section)
  const total = inSection.reduce((n, d) => n + d.total, 0)
  if (!total) return null
  return scale(inSection.reduce((n, d) => n + d.correct, 0) / total)
}

const SECTION_SPECS: Record<'mcat' | 'sat' | 'act', { key: string; label: string; field: string; section: string }[]> = {
  mcat: [
    { key: 'C/P', label: 'Chem/Phys', field: 'chemPhysScore', section: 'chem-phys' },
    { key: 'CARS', label: 'CARS', field: 'carsScore', section: 'cars' },
    { key: 'B/B', label: 'Bio/Biochem', field: 'bioBiochemScore', section: 'bio-biochem' },
    { key: 'P/S', label: 'Psych/Soc', field: 'psychSocScore', section: 'psych-soc' },
  ],
  sat: [
    { key: 'RW', label: 'Reading & Writing', field: 'rwScore', section: 'reading-writing' },
    { key: 'Math', label: 'Math', field: 'mathScore', section: 'math' },
  ],
  act: [
    { key: 'English', label: 'English', field: 'englishScore', section: 'english' },
    { key: 'Math', label: 'Math', field: 'mathScore', section: 'math' },
    { key: 'Reading', label: 'Reading', field: 'readingScore', section: 'reading' },
    { key: 'Science', label: 'Science', field: 'scienceScore', section: 'science' },
  ],
}

const SCALES = {
  mcat: { lo: 118, hi: 132, total: [472, 528] as const, scale: mcatSectionScaled },
  sat: { lo: 200, hi: 800, total: [400, 1600] as const, scale: satSectionScaled },
  act: { lo: 1, hi: 36, total: [1, 36] as const, scale: actSectionScaled },
}

export function summarizeAttemptScores(category: string, rawResults: unknown): AttemptScoreSummary {
  const family = diagnosticFamily(category)
  let parsed = rawResults
  if (typeof parsed === 'string') {
    try {
      parsed = JSON.parse(parsed)
    } catch {
      parsed = {}
    }
  }
  const results = rec(parsed)
  const allDomains = domainsOf(results)
  const domains = allDomains.map(({ name, correct, total, percentage }) => ({ name, correct, total, percentage }))

  if (family === 'mcat' || family === 'sat' || family === 'act') {
    const s = SCALES[family]
    const estimate = num(family === 'act' ? results.estimatedComposite : results.estimatedScore)
    const validEstimate = estimate != null && estimate >= s.total[0] && estimate <= s.total[1] ? Math.round(estimate) : null
    const range =
      storedRange(family === 'act' ? results.compositeRange : results.scoreRange, s.total[0], s.total[1]) ??
      (validEstimate == null
        ? null
        : family === 'mcat'
          ? mcatRange(validEstimate, 'medium')
          : family === 'sat'
            ? satRange(validEstimate)
            : actRange(validEstimate, 'medium'))
    const sections = SECTION_SPECS[family].flatMap((spec) => {
      const stored = num(results[spec.field])
      const value = stored != null && stored >= s.lo && stored <= s.hi ? stored : sectionFromDomains(allDomains, spec.section, s.scale)
      return value == null ? [] : [{ key: spec.key, label: spec.label, value: Math.round(value), outOf: s.hi }]
    })
    const outOf = s.total[1]
    return {
      family,
      overall:
        validEstimate == null
          ? null
          : {
              label: family === 'act' ? 'Estimated composite' : 'Estimated score',
              value: range && range.low !== range.high ? `${range.low}–${range.high}` : String(validEstimate),
              detail: range && range.low !== range.high ? `midpoint ${validEstimate} · out of ${outOf}` : `out of ${outOf}`,
            },
      sections,
      domains,
    }
  }

  if (family === 'calcbc' || family === 'ap' || family === 'ochem') {
    const score = num(family === 'ochem' ? results.estimatedScore : results.estimatedAPScore)
    const sections: AttemptScoreSummary['sections'] = []
    if (family === 'calcbc') {
      const ab = num(results.abSubscore)
      if (ab != null && ab >= 1 && ab <= 5) sections.push({ key: 'AB', label: 'AB subscore', value: ab, outOf: 5 })
    }
    return {
      family,
      overall: score != null && score >= 1 && score <= 5
        ? { label: family === 'ochem' ? 'Estimated score' : family === 'calcbc' ? 'Estimated AP score (BC)' : 'Estimated AP score', value: `${score}/5` }
        : null,
      sections,
      domains,
    }
  }

  const level = typeof results.estimatedLevel === 'string' ? results.estimatedLevel : null
  return { family, overall: level ? { label: 'Estimated level', value: level } : null, sections: [], domains }
}

/** One-line version for attempt lists, e.g. "497–509 · C/P 126 · CARS 125 · B/B 127 · P/S 125". */
export function attemptScoreLine(category: string, results: unknown): string {
  const s = summarizeAttemptScores(category, results)
  const parts = [s.overall?.value, ...s.sections.map((x) => `${x.key} ${x.value}`)].filter(Boolean)
  return parts.join(' · ')
}
