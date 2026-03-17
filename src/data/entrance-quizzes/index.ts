/**
 * Entrance Quiz Registry
 *
 * Maps topic slugs to their entrance quiz loaders.
 * Uses dynamic imports for code splitting.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
export type { EntranceQuizQuestion }

type EntranceQuizLoader = () => Promise<{
  generateEntranceQuiz: () => EntranceQuizQuestion[]
  getEntranceQuizParts: () => { partNumber: number; partTitle: string }[]
}>

const entranceQuizLoaders: Record<string, EntranceQuizLoader> = {
  'moles-molar-mass': () => import('./moles-molar-mass'),
  'electron-configuration': () => import('./electron-configuration'),
  'periodic-trends': () => import('./periodic-trends'),
  'photoelectron-spectroscopy': () => import('./photoelectron-spectroscopy'),
  'types-of-chemical-bonds': () => import('./types-of-chemical-bonds'),
  'lewis-structures-formal-charge': () => import('./lewis-structures-formal-charge'),
  'vsepr-molecular-geometry': () => import('./vsepr-molecular-geometry'),
  'hybridization-sigma-pi-bonds': () => import('./hybridization-sigma-pi-bonds'),
  'types-intermolecular-forces': () => import('./types-intermolecular-forces'),
  'properties-states-matter': () => import('./properties-states-matter'),
  'solutions-solubility': () => import('./solutions-solubility'),
  'ideal-gas-law': () => import('./ideal-gas-law'),
  'mixtures-separations': () => import('./mixtures-separations'),
  'reaction-types': () => import('./reaction-types'),
  'stoichiometry-limiting-reactants': () => import('./stoichiometry-limiting-reactants'),
  'net-ionic-equations': () => import('./net-ionic-equations'),
  'oxidation-reduction-reactions': () => import('./oxidation-reduction-reactions'),
  'reaction-rates-and-rate-laws': () => import('./reaction-rates-and-rate-laws'),
  'integrated-rate-laws': () => import('./integrated-rate-laws'),
  'activation-energy-arrhenius': () => import('./activation-energy-arrhenius'),
  'reaction-mechanisms': () => import('./reaction-mechanisms'),
  'enthalpy-calorimetry': () => import('./enthalpy-calorimetry'),
  'entropy-second-law': () => import('./entropy-second-law'),
  'gibbs-free-energy': () => import('./gibbs-free-energy'),
  'intro-equilibrium': () => import('./intro-equilibrium'),
  'reaction-quotient-le-chatelier': () => import('./reaction-quotient-le-chatelier'),
  'ice-tables-calculations': () => import('./ice-tables-calculations'),
  'solubility-ksp': () => import('./solubility-ksp'),
  'acid-base-theories-ph': () => import('./acid-base-theories-ph'),
  'weak-acids-bases-ka-kb': () => import('./weak-acids-bases-ka-kb'),
  'buffer-solutions-henderson-hasselbalch': () => import('./buffer-solutions-henderson-hasselbalch'),
  'acid-base-titrations': () => import('./acid-base-titrations'),
  'galvanic-cells-potentials': () => import('./galvanic-cells-potentials'),
  'nernst-equation-concentration': () => import('./nernst-equation-concentration'),
  'electrolytic-cells-faraday': () => import('./electrolytic-cells-faraday'),
  'equilibrium-constants-expressions': () => import('./equilibrium-constants-expressions'),
  'le-chatelier-equilibrium-shifts': () => import('./le-chatelier-equilibrium-shifts'),
  'spontaneity-free-energy-applications': () => import('./spontaneity-free-energy-applications'),
  'galvanic-cells-thermo-applications': () => import('./galvanic-cells-thermo-applications'),
}

/**
 * Check if a topic has an entrance quiz available.
 */
export function hasEntranceQuiz(topicSlug: string): boolean {
  return topicSlug in entranceQuizLoaders
}

/**
 * Load and generate entrance quiz questions for a topic.
 * Returns null if no entrance quiz exists for the topic.
 */
export async function loadEntranceQuiz(topicSlug: string): Promise<{
  questions: EntranceQuizQuestion[]
  parts: { partNumber: number; partTitle: string }[]
} | null> {
  const loader = entranceQuizLoaders[topicSlug]
  if (!loader) return null
  const mod = await loader()
  return {
    questions: mod.generateEntranceQuiz(),
    parts: mod.getEntranceQuizParts(),
  }
}
