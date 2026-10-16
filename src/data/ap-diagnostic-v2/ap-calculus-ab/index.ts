/**
 * The ap-calculus-ab diagnostic v2 bank: every stimulus and item file in this folder,
 * registered here. Add a new file's STIMULI and ITEMS to the arrays below
 * (authoring rules: ap-phase1-pipeline/AP-DIAG-V2-BRIEF.md; validate with
 * `npx tsx scripts/check-ap-diagnostic-v2.ts ap-calculus-ab`).
 */
import type { ApDiagV2Bank } from '@/lib/ap-diagnostic-v2/types'
import * as unit1 from './unit-1'
import * as unit2 from './unit-2'
import * as unit3 from './unit-3'
import * as unit4 from './unit-4'
import * as unit5 from './unit-5'
import * as unit6 from './unit-6'
import * as unit7 from './unit-7'
import * as unit8 from './unit-8'

const files = [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8]

export const bank: ApDiagV2Bank = {
  course: 'ap-calculus-ab',
  stimuli: files.flatMap((f) => f.STIMULI),
  items: files.flatMap((f) => f.ITEMS),
}
