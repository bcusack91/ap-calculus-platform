/**
 * Structural and quality checks for an AP diagnostic v2 bank. Shared by
 * scripts/check-ap-diagnostic-v2.ts (authors) and the guard tests, so both
 * apply the same rules. Pure: callers pass the production topic list and the
 * stems that must not overlap (exit pools, the v1 inline pools).
 */
import { svgProblems } from '@/lib/safe-svg'
import { AP_DIAG_V2_BLUEPRINTS } from './blueprints'
import { AP_DIAG_V2_DIFFICULTIES, type ApDiagV2Bank } from './types'

export interface BankReport {
  errors: string[]
  warnings: string[]
  stats: {
    items: number
    stimuli: number
    setItems: number
    keyLongestPct: number
    keyShortestPct: number
    byUnit: Record<string, { items: number; easy: number; medium: number; hard: number; sets: number }>
  }
}

/** Normalized stem for overlap checks (same rule as diagnosticItemKey). */
export const normalizeStem = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase()

/** Wording that only works with a fixed option order (options are shuffled) or that gives the answer away. */
const FORMAT_TELLS: [RegExp, string][] = [
  // Letters are matched case-sensitively so "a choice a student makes" is not flagged.
  [/\b(?:[Oo]ptions?|[Cc]hoices?)\s+\(?[A-D]\)?(?![A-Za-z])/, 'refers to an option by letter (options are shuffled)'],
  [/\([A-D]\)\s+(?:and|or|nor)\s+\([A-D]\)/, 'combines options by letter (options are shuffled)'],
  [/\b(?:all|none) of the above\b/i, '"all/none of the above" breaks under shuffling'],
]

/** Share of items whose key is strictly the longest / strictly the shortest option. */
export function lengthTell(items: { options: string[]; correctIndex: number }[]): { longest: number; shortest: number } {
  let longest = 0
  let shortest = 0
  for (const it of items) {
    const lens = it.options.map((o) => o.length)
    const k = lens[it.correctIndex]
    const others = lens.filter((_, i) => i !== it.correctIndex)
    if (others.every((l) => k > l)) longest++
    if (others.every((l) => k < l)) shortest++
  }
  const n = items.length || 1
  return { longest: Math.round((longest / n) * 100), shortest: Math.round((shortest / n) * 100) }
}

export const LENGTH_BAND = { min: 18, max: 32 } as const
/** Below this many items the length band is advisory (a sample bank cannot balance). */
export const LENGTH_BAND_MIN_ITEMS = 40

export function validateBank(
  bank: ApDiagV2Bank,
  opts: { productionTopics: Set<string>; forbiddenStems?: Set<string> },
): BankReport {
  const bp = AP_DIAG_V2_BLUEPRINTS[bank.course]
  const errors: string[] = []
  const warnings: string[] = []
  const unitIds = new Set(bp.units.map((u) => u.id))
  const stimIds = new Map(bank.stimuli.map((s) => [s.id, s]))

  // Ids
  const seenIds = new Set<string>()
  for (const id of [...bank.stimuli.map((s) => s.id), ...bank.items.map((i) => i.id)]) {
    if (!/^[a-z0-9][a-z0-9-]*$/.test(id)) errors.push(`${id}: ids are lower-case letters, digits and hyphens`)
    if (seenIds.has(id)) errors.push(`${id}: duplicate id`)
    seenIds.add(id)
  }

  // Items
  const stems = new Map<string, string>()
  for (const it of bank.items) {
    const at = it.id
    if (!it.stem?.trim()) errors.push(`${at}: empty stem`)
    if (!Array.isArray(it.options) || it.options.length !== 4) errors.push(`${at}: needs exactly 4 options`)
    else {
      if (it.options.some((o) => !o?.trim())) errors.push(`${at}: empty option`)
      if (new Set(it.options.map(normalizeStem)).size !== it.options.length) errors.push(`${at}: duplicate options`)
    }
    if (!Number.isInteger(it.correctIndex) || it.correctIndex < 0 || it.correctIndex >= (it.options?.length ?? 0)) errors.push(`${at}: correctIndex out of range`)
    if ((it.explanation ?? '').trim().length < 40) errors.push(`${at}: explanation missing or too short`)
    if (!unitIds.has(it.unit)) errors.push(`${at}: unknown unit ${it.unit}`)
    if (!AP_DIAG_V2_DIFFICULTIES.includes(it.difficulty)) errors.push(`${at}: difficulty must be easy | medium | hard`)
    if (!opts.productionTopics.has(it.topicSlug)) errors.push(`${at}: topicSlug ${it.topicSlug} is not a production topic`)
    else if (!bp.units.find((u) => u.id === it.unit)?.topicSlugs.includes(it.topicSlug)) {
      warnings.push(`${at}: topic ${it.topicSlug} is not listed under ${it.unit} in the blueprint`)
    }
    for (const text of [it.stem, ...(it.options ?? [])]) {
      for (const [re, why] of FORMAT_TELLS) if (re.test(text ?? '')) errors.push(`${at}: ${why}`)
    }
    const stimText = it.stimulusId ? stimIds.get(it.stimulusId)?.content ?? '' : ''
    const key = normalizeStem(it.stimulusId ? `${stimText}|${it.stem}` : it.stem)
    if (stems.has(key)) errors.push(`${at}: same stem as ${stems.get(key)}`)
    stems.set(key, at)
    if (opts.forbiddenStems?.has(normalizeStem(it.stem))) errors.push(`${at}: stem also appears in an exit pool / v1 pool (the bank must be disjoint)`)
    if (it.stimulusId && !stimIds.has(it.stimulusId)) errors.push(`${at}: stimulusId ${it.stimulusId} does not exist`)
  }

  // Stimulus sets
  for (const s of bank.stimuli) {
    const items = bank.items.filter((i) => i.stimulusId === s.id)
    if (!s.title?.trim()) errors.push(`${s.id}: stimulus needs a title`)
    if ((s.content ?? '').trim().length < 40) errors.push(`${s.id}: stimulus content must describe the setup in words`)
    if (items.length === 0) errors.push(`${s.id}: no item uses this stimulus`)
    else if (items.length < 2) errors.push(`${s.id}: a set needs at least 2 items (one item belongs inline in its stem)`)
    if (items.length > 5) errors.push(`${s.id}: a set has at most 5 items`)
    if (new Set(items.map((i) => i.unit)).size > 1) errors.push(`${s.id}: all items of a set must share one unit`)
    items.forEach((it, k) => {
      if (it.id !== `${s.id}-q${k + 1}`) errors.push(`${it.id}: set items are named ${s.id}-q1, -q2, … in bank order (expected ${s.id}-q${k + 1})`)
    })
    // Consecutive in the bank, so authored order is unambiguous.
    const positions = items.map((i) => bank.items.indexOf(i))
    if (positions.some((p, k) => k > 0 && p !== positions[k - 1] + 1)) errors.push(`${s.id}: keep a set's items consecutive in the bank`)
    switch (s.kind) {
      case 'graph': {
        const c = s.chart
        if (!c) errors.push(`${s.id}: a graph stimulus needs \`chart\``)
        else {
          if (!c.xValues?.length || c.xValues.length !== c.yValues?.length) errors.push(`${s.id}: chart xValues and yValues must have equal, non-zero length`)
          for (const cs of c.comparisonSeries ?? []) if (cs.yValues.length !== c.xValues.length) errors.push(`${s.id}: comparison series "${cs.label}" length differs from xValues`)
          if (!c.xLabel || !c.yLabel) errors.push(`${s.id}: chart needs axis labels`)
        }
        break
      }
      case 'table': {
        const pipe = /\n\s*\|?\s*[-:]+[-:| ]+\s*\n/.test(`\n${s.content}\n`)
        if (!s.dataTable && !pipe) errors.push(`${s.id}: a table stimulus needs \`dataTable\` or a markdown pipe table in content`)
        if (s.dataTable && s.dataTable.xValues.length !== s.dataTable.yValues.length) errors.push(`${s.id}: dataTable columns differ in length`)
        break
      }
      case 'figure':
        if (!s.svg) errors.push(`${s.id}: a figure stimulus needs \`svg\``)
        else for (const p of svgProblems(s.svg)) errors.push(`${s.id}: svg ${p}`)
        if (s.svg && !s.svg.includes('currentColor')) warnings.push(`${s.id}: draw the svg with currentColor so it reads in dark mode`)
        break
      case 'passage':
        if ((s.content ?? '').trim().length < 150) warnings.push(`${s.id}: passage is very short for a set`)
        break
      default:
        errors.push(`${s.id}: kind must be table | graph | passage | figure`)
    }
  }

  // Length balance
  const valid = bank.items.filter((i) => Array.isArray(i.options) && i.options.length === 4)
  const tell = lengthTell(valid)
  const bandMsg = `key strictly longest ${tell.longest}%, strictly shortest ${tell.shortest}% (target ${LENGTH_BAND.min}–${LENGTH_BAND.max}% each)`
  const outOfBand = [tell.longest, tell.shortest].some((v) => v < LENGTH_BAND.min || v > LENGTH_BAND.max)
  if (outOfBand) (valid.length >= LENGTH_BAND_MIN_ITEMS ? errors : warnings).push(`length balance: ${bandMsg}`)

  const byUnit: BankReport['stats']['byUnit'] = {}
  for (const u of bp.units) {
    const items = bank.items.filter((i) => i.unit === u.id)
    byUnit[u.id] = {
      items: items.length,
      easy: items.filter((i) => i.difficulty === 'easy').length,
      medium: items.filter((i) => i.difficulty === 'medium').length,
      hard: items.filter((i) => i.difficulty === 'hard').length,
      sets: new Set(items.map((i) => i.stimulusId).filter(Boolean)).size,
    }
  }

  return {
    errors: [...new Set(errors)],
    warnings: [...new Set(warnings)],
    stats: {
      items: bank.items.length,
      stimuli: bank.stimuli.length,
      setItems: bank.items.filter((i) => i.stimulusId).length,
      keyLongestPct: tell.longest,
      keyShortestPct: tell.shortest,
      byUnit,
    },
  }
}
