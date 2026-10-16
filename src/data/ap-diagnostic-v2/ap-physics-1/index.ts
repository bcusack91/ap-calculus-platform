/**
 * The ap-physics-1 diagnostic v2 bank: every stimulus and item file in this folder,
 * registered here. Add a new file's STIMULI and ITEMS to the arrays below
 * (authoring rules: ap-phase1-pipeline/AP-DIAG-V2-BRIEF.md; validate with
 * `npx tsx scripts/check-ap-diagnostic-v2.ts ap-physics-1`).
 */
import type { ApDiagV2Bank } from '@/lib/ap-diagnostic-v2/types'
import * as sample from './sample'

export const bank: ApDiagV2Bank = {
  course: 'ap-physics-1',
  stimuli: [...sample.STIMULI],
  items: [...sample.ITEMS],
}
