/**
 * The ap-precalculus diagnostic v2 bank: every stimulus and item file in this
 * folder, registered here. One file per assessed CED unit (Unit 4 is not on
 * the exam). Add a new file's STIMULI and ITEMS to `files` below (authoring
 * rules: ap-phase1-pipeline/AP-DIAG-V2-BRIEF.md and precalc-final/ASSESSMENTS.md
 * §3; validate with `npx tsx scripts/check-ap-diagnostic-v2.ts ap-precalculus`).
 */
import type { ApDiagV2Bank } from '@/lib/ap-diagnostic-v2/types'
import * as unit1 from './unit-1'
import * as unit2 from './unit-2'
import * as unit3 from './unit-3'

const files = [unit1, unit2, unit3]

export const bank: ApDiagV2Bank = {
  course: 'ap-precalculus',
  stimuli: files.flatMap((f) => f.STIMULI),
  items: files.flatMap((f) => f.ITEMS),
}
