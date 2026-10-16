/**
 * The ap-physics-1 diagnostic v2 bank: every stimulus and item file in this folder,
 * registered here. Add a new file's STIMULI and ITEMS to the arrays below
 * (authoring rules: ap-phase1-pipeline/AP-DIAG-V2-BRIEF.md; validate with
 * `npx tsx scripts/check-ap-diagnostic-v2.ts ap-physics-1`).
 */
import type { ApDiagV2Bank } from '@/lib/ap-diagnostic-v2/types'
import * as sample from './sample'
import * as u1 from './unit-1'
import * as u2 from './unit-2'
import * as u3 from './unit-3'
import * as u4 from './unit-4'
import * as u5 from './unit-5'
import * as u6 from './unit-6'
import * as u7 from './unit-7'
import * as u8 from './unit-8'

const FILES = [sample, u1, u2, u3, u4, u5, u6, u7, u8]

export const bank: ApDiagV2Bank = {
  course: 'ap-physics-1',
  stimuli: FILES.flatMap((f) => f.STIMULI),
  items: FILES.flatMap((f) => f.ITEMS),
}
