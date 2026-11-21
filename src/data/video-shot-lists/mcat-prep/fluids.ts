import type { ShotList } from '../types'
import { shotList as part1 } from './fluids-part1-density-pressure'
import { shotList as part2 } from './fluids-part2-buoyancy-surface-tension'
import { shotList as part3 } from './fluids-part3-continuity-bernoulli'
import { shotList as part4 } from './fluids-part4-viscosity-blood-flow'

/**
 * The fluids videos are made as FOUR parts of eight clips (each a concept clip
 * and its worked examples), and the site has two fluids topics, so each topic's
 * shot list is two parts back to back: clips 1–8 are the first part, 9–16 the
 * second. Short links (video-short-links.ts) count clips in this order.
 *
 * Sections marked `mcatOnly` are left out when the same recordings build the
 * AP Physics 1 fluids lessons; Part 4 and the Surface Tension pair are
 * MCAT-only as a whole.
 */
export const fluidsAtRest: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-mechanics-fluids-mcat',
  title: 'Fluids at Rest',
  overview:
    'Sixteen animated clips in eight pairs (a concept clip, then its worked examples). Part 1, Density & Pressure: density and specific gravity, pressure and depth, gauge and absolute pressure, and Pascal’s principle. Part 2, Buoyancy & Surface Tension: Archimedes’ principle, floating, sinking and apparent weight, and surface tension.',
  clips: [...part1.clips, ...part2.clips],
}

export const fluidsInMotion: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat',
  title: 'Fluids in Motion',
  overview:
    'Sixteen animated clips in eight pairs (a concept clip, then its worked examples). Part 3, Continuity & Bernoulli: flow rate and continuity, Bernoulli’s equation, Torricelli’s theorem, and Venturi and pitot tubes. Part 4, Viscosity & Blood Flow: viscosity and real fluids, Poiseuille’s law, blood flow as a circuit, and stenosis.',
  clips: [...part3.clips, ...part4.clips],
}
