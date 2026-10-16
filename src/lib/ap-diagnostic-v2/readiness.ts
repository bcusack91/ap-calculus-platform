/**
 * When a course's v2 bank may replace the v1 forms.
 *
 * A course serves v2 only when BOTH hold:
 *  1. it is switched on here (`AP_DIAG_V2_LIVE`) — an explicit decision, made
 *     after the bank has been blind-solved, never automatic; and
 *  2. its bank meets the minimum (`bankReadiness`): at least `minItems`
 *     items, every unit stocked for `minSittingsPerUnit` no-repeat sittings
 *     and at least its weighted share of `minItems`, every unit able to fill
 *     its easy / medium / hard targets, and enough stimulus sets.
 * tests/lib/ap-diagnostic-v2.test.ts fails if a live course is below the
 * minimum, so a switch can never ship ahead of the content. Until then the
 * course keeps serving its v1 forms; `?diagV2=1` previews v2 outside
 * production (or with NEXT_PUBLIC_AP_DIAG_V2_QA=1) for QA.
 */
import { AP_DIAG_V2_BLUEPRINTS, difficultyTargets, unitQuotas } from './blueprints'
import { stimulusSets } from './generator'
import type { ApDiagV2Bank, ApDiagV2Course } from './types'

export const AP_DIAG_V2_LIVE: Record<ApDiagV2Course, boolean> = {
  'ap-chemistry': false,
  'ap-biology': false,
  'ap-physics-1': false,
  'ap-calculus-ab': false,
}

export const AP_DIAG_V2_SWITCH_RULES = {
  /** Total bank size before a course may switch. */
  minItems: 120,
  /** Every unit must hold at least quota × this many items. */
  minSittingsPerUnit: 3,
  /** Stimulus sets in the bank, as a multiple of setsPerSitting. */
  minSetSittings: 3,
  /** Authoring target per course (the brief asks for 150–200). */
  targetItems: 180,
}

export interface UnitRequirement {
  unit: string
  quota: number
  /** Items this unit needs before the course may switch. */
  minimum: number
  /** Items to aim for at targetItems. */
  target: number
  have: number
  byDifficulty: Record<'easy' | 'medium' | 'hard', { need: number; have: number }>
}

export function unitRequirements(bank: ApDiagV2Bank, rules = AP_DIAG_V2_SWITCH_RULES): UnitRequirement[] {
  const bp = AP_DIAG_V2_BLUEPRINTS[bank.course]
  const quotas = unitQuotas(bp)
  return bp.units.map((u) => {
    const q = quotas[u.id]
    const items = bank.items.filter((i) => i.unit === u.id)
    const t = difficultyTargets(q)
    return {
      unit: u.id,
      quota: q,
      minimum: Math.max(q * rules.minSittingsPerUnit, Math.ceil((rules.minItems * q) / bp.length)),
      target: Math.ceil((rules.targetItems * q) / bp.length),
      have: items.length,
      byDifficulty: {
        easy: { need: t.easy, have: items.filter((i) => i.difficulty === 'easy').length },
        medium: { need: t.medium, have: items.filter((i) => i.difficulty === 'medium').length },
        hard: { need: t.hard, have: items.filter((i) => i.difficulty === 'hard').length },
      },
    }
  })
}

export function bankReadiness(bank: ApDiagV2Bank, rules = AP_DIAG_V2_SWITCH_RULES): { ready: boolean; problems: string[] } {
  const bp = AP_DIAG_V2_BLUEPRINTS[bank.course]
  const problems: string[] = []
  if (bank.items.length < rules.minItems) problems.push(`${bank.items.length} items; the switch needs ${rules.minItems}`)
  for (const r of unitRequirements(bank, rules)) {
    if (r.have < r.minimum) problems.push(`${r.unit}: ${r.have} items; needs ${r.minimum}`)
    for (const [d, v] of Object.entries(r.byDifficulty)) {
      if (v.have < v.need * rules.minSittingsPerUnit) problems.push(`${r.unit}: ${v.have} ${d}; needs ${v.need * rules.minSittingsPerUnit}`)
    }
  }
  const sets = stimulusSets(bank).length
  const needSets = bp.setsPerSitting * rules.minSetSittings
  if (sets < needSets) problems.push(`${sets} stimulus sets; needs ${needSets}`)
  return { ready: problems.length === 0, problems }
}
