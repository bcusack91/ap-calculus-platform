/**
 * The ap-calculus-bc diagnostic v2 bank: the whole AP Calculus AB v2 bank
 * (Units 1–8, served at BC weights) plus the BC-only items in this folder
 * (6.11–6.13, 7.5, 7.9, 8.13 and Units 9–10). The AB items are imported, not
 * copied, so a fix to an AB item reaches both courses. Add a new BC file's
 * STIMULI and ITEMS to `files` below (authoring rules:
 * ap-phase1-pipeline/AP-DIAG-V2-BRIEF.md; validate with
 * `npx tsx scripts/check-ap-diagnostic-v2.ts ap-calculus-bc`).
 */
import type { ApDiagV2Bank } from '@/lib/ap-diagnostic-v2/types'
import { bank as calculusAb } from '../ap-calculus-ab'
import * as unit6 from './unit-6'
import * as unit7 from './unit-7'
import * as unit8 from './unit-8'
import * as unit9 from './unit-9'
import * as unit10 from './unit-10'

const files = [unit6, unit7, unit8, unit9, unit10]

/** The BC-only part of the bank (what the BC blind solve covers). */
export const BC_ONLY = {
  stimuli: files.flatMap((f) => f.STIMULI),
  items: files.flatMap((f) => f.ITEMS),
}

export const bank: ApDiagV2Bank = {
  course: 'ap-calculus-bc',
  stimuli: [...calculusAb.stimuli, ...BC_ONLY.stimuli],
  items: [...calculusAb.items, ...BC_ONLY.items],
}
