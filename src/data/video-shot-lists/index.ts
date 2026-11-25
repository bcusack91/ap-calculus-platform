import type { ShotList } from './types'

/**
 * Recording plans ("shot lists") for video lessons, keyed by topic slug:
 * the clips an instructor should record, what each must cover, and drafted
 * checkpoint questions. The authoring tool shows the plan beside the lesson
 * editor and offers its questions as suggestions. Loaded lazily per topic.
 */
const SHOT_LISTS: Record<string, () => Promise<ShotList>> = {
  'types-of-chemical-bonds': () => import('./ap-chemistry/types-of-chemical-bonds').then((m) => m.shotList),
  'mcat-physics-electricity-dc-circuits-mcat': () => import('./mcat-prep/mcat-physics-electricity-dc-circuits-mcat').then((m) => m.shotList),
  'mcat-physics-electricity-kirchhoff-power-mcat': () => import('./mcat-prep/mcat-physics-electricity-kirchhoff-power-mcat').then((m) => m.shotList),
  'mcat-physics-electricity-emf-capacitors-mcat': () => import('./mcat-prep/mcat-physics-electricity-emf-capacitors-mcat').then((m) => m.shotList),
  'mcat-physics-electricity-rc-circuits-mcat': () => import('./mcat-prep/mcat-physics-electricity-rc-circuits-mcat').then((m) => m.shotList),
  'mcat-physics-mechanics-fluids-mcat': () => import('./mcat-prep/fluids-part1-density-pressure').then((m) => m.shotList),
  'mcat-physics-mechanics-buoyancy-mcat': () => import('./mcat-prep/fluids-part2-buoyancy-surface-tension').then((m) => m.shotList),
  'mcat-physics-mechanics-fluid-dynamics-mcat': () => import('./mcat-prep/fluids-part3-continuity-bernoulli').then((m) => m.shotList),
  'mcat-physics-mechanics-viscosity-mcat': () => import('./mcat-prep/fluids-part4-viscosity-blood-flow').then((m) => m.shotList),
  'mcat-physics-electricity-electrostatics-mcat': () => import('./mcat-prep/electrostatics-part1-charge-coulomb').then((m) => m.shotList),
  'mcat-physics-electricity-electric-fields-mcat': () => import('./mcat-prep/electrostatics-part2-electric-fields').then((m) => m.shotList),
  'mcat-physics-electricity-electric-potential-mcat': () => import('./mcat-prep/electrostatics-part3-electric-potential').then((m) => m.shotList),
  'current-resistance-ohms-law': () => import('./ap-physics-2/circuits').then((m) => m.currentResistance),
  'series-parallel-circuits': () => import('./ap-physics-2/circuits').then((m) => m.seriesParallel),
  'kirchhoffs-laws': () => import('./ap-physics-2/circuits').then((m) => m.kirchhoff),
}

export function hasShotList(topicSlug: string): boolean {
  return topicSlug in SHOT_LISTS
}

export async function getShotList(topicSlug: string): Promise<ShotList | null> {
  const load = SHOT_LISTS[topicSlug]
  return load ? load() : null
}
