/**
 * The ap-chemistry diagnostic v2 bank: every stimulus and item file in this folder,
 * registered here. Add a new file's STIMULI and ITEMS to the arrays below
 * (authoring rules: ap-phase1-pipeline/AP-DIAG-V2-BRIEF.md; validate with
 * `npx tsx scripts/check-ap-diagnostic-v2.ts ap-chemistry`). The figure
 * stimuli's SVG drawings live in ./figures.ts.
 */
import type { ApDiagV2Bank } from '@/lib/ap-diagnostic-v2/types'
import * as sample from './sample'
import * as unit1 from './unit-1'
import * as unit2 from './unit-2'
import * as unit3 from './unit-3'
import * as unit4 from './unit-4'
import * as unit5 from './unit-5'
import * as unit6 from './unit-6'
import * as unit7 from './unit-7'
import * as unit8 from './unit-8'
import * as unit9 from './unit-9'

const files = [sample, unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9]

export const bank: ApDiagV2Bank = {
  course: 'ap-chemistry',
  stimuli: files.flatMap((f) => f.STIMULI),
  items: files.flatMap((f) => f.ITEMS),
}
