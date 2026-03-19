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

  // AP Physics 1
  'one-dimensional-motion': () => import('./one-dimensional-motion'),
  'motion-graphs': () => import('./motion-graphs'),
  'two-dimensional-motion': () => import('./two-dimensional-motion'),
  'projectile-motion': () => import('./projectile-motion'),
  'newtons-first-second-laws': () => import('./newtons-first-second-laws'),
  'newtons-third-law': () => import('./newtons-third-law'),
  'friction': () => import('./friction'),
  'inclined-planes': () => import('./inclined-planes'),
  'work-and-kinetic-energy': () => import('./work-and-kinetic-energy'),
  'gravitational-potential-energy': () => import('./gravitational-potential-energy'),
  'elastic-potential-energy': () => import('./elastic-potential-energy'),
  'conservation-of-energy': () => import('./conservation-of-energy'),
  'momentum-and-impulse': () => import('./momentum-and-impulse'),
  'conservation-of-momentum': () => import('./conservation-of-momentum'),
  'collisions': () => import('./collisions'),
  'uniform-circular-motion': () => import('./uniform-circular-motion'),
  'centripetal-force': () => import('./centripetal-force'),
  'universal-gravitation': () => import('./universal-gravitation'),
  'torque-and-equilibrium': () => import('./torque-and-equilibrium'),
  'rotational-kinematics': () => import('./rotational-kinematics'),
  'angular-momentum': () => import('./angular-momentum'),
  'introduction-to-shm': () => import('./introduction-to-shm'),
  'energy-in-shm': () => import('./energy-in-shm'),

  // AP Physics 2
  'fluid-pressure': () => import('./fluid-pressure'),
  'buoyancy': () => import('./buoyancy'),
  'fluid-dynamics': () => import('./fluid-dynamics'),
  'temperature-and-heat': () => import('./temperature-and-heat'),
  'kinetic-theory': () => import('./kinetic-theory'),
  'thermodynamic-laws': () => import('./thermodynamic-laws'),
  'electric-charge-and-force': () => import('./electric-charge-and-force'),
  'electric-fields': () => import('./electric-fields'),
  'electric-potential': () => import('./electric-potential'),
  'capacitance': () => import('./capacitance'),
  'dc-circuits': () => import('./dc-circuits'),
  'rc-circuits': () => import('./rc-circuits'),
  'magnetic-fields': () => import('./magnetic-fields'),
  'electromagnetic-induction': () => import('./electromagnetic-induction'),
  'geometric-optics': () => import('./geometric-optics'),
  'wave-optics': () => import('./wave-optics'),
  'quantum-mechanics': () => import('./quantum-mechanics'),
  'nuclear-physics': () => import('./nuclear-physics'),
  'atomic-structure': () => import('./atomic-structure'),

  // AP Calculus AB
  'limits-continuity-calcab': () => import('./limits-continuity-calcab'),
  'definition-of-derivative-calcab': () => import('./definition-of-derivative-calcab'),
  'basic-differentiation-rules-calcab': () => import('./basic-differentiation-rules-calcab'),
  'chain-rule-calcab': () => import('./chain-rule-calcab'),
  'inverse-functions-derivatives-calcab': () => import('./inverse-functions-derivatives-calcab'),
  'applications-of-derivatives-calcab': () => import('./applications-of-derivatives-calcab'),
  'optimization-calcab': () => import('./optimization-calcab'),
  'linearization-differentials-calcab': () => import('./linearization-differentials-calcab'),
  'theorem-applications-calcab': () => import('./theorem-applications-calcab'),
  'particle-motion-calcab': () => import('./particle-motion-calcab'),
  'definite-integrals-calcab': () => import('./definite-integrals-calcab'),
  'antiderivatives-indefinite-integrals-calcab': () => import('./antiderivatives-indefinite-integrals-calcab'),
  'u-substitution-calcab': () => import('./u-substitution-calcab'),
  'accumulation-functions-calcab': () => import('./accumulation-functions-calcab'),
  'area-between-curves-calcab': () => import('./area-between-curves-calcab'),
  'volumes-of-revolution-calcab': () => import('./volumes-of-revolution-calcab'),
  'integration-applications-calcab': () => import('./integration-applications-calcab'),
  'differential-equations-calcab': () => import('./differential-equations-calcab'),
  'exponential-models-calcab': () => import('./exponential-models-calcab'),
  'tables-data-calcab': () => import('./tables-data-calcab'),
  'free-response-strategies-calcab': () => import('./free-response-strategies-calcab'),
  'ap-exam-review-calcab': () => import('./ap-exam-review-calcab'),

  // AP Calculus BC
  'integration-by-parts-calcbc': () => import('./integration-by-parts-calcbc'),
  'partial-fractions-calcbc': () => import('./partial-fractions-calcbc'),
  'improper-integrals-calcbc': () => import('./improper-integrals-calcbc'),
  'advanced-integration-calcbc': () => import('./advanced-integration-calcbc'),
  'parametric-curves-calculus-calcbc': () => import('./parametric-curves-calculus-calcbc'),
  'polar-calculus-calcbc': () => import('./polar-calculus-calcbc'),
  'vector-valued-functions-calcbc': () => import('./vector-valued-functions-calcbc'),
  'arc-length-surface-area-calcbc': () => import('./arc-length-surface-area-calcbc'),
  'infinite-sequences-calcbc': () => import('./infinite-sequences-calcbc'),
  'infinite-series-calcbc': () => import('./infinite-series-calcbc'),
  'convergence-tests-summary-calcbc': () => import('./convergence-tests-summary-calcbc'),
  'alternating-series-calcbc': () => import('./alternating-series-calcbc'),
  'power-series-calcbc': () => import('./power-series-calcbc'),
  'taylor-maclaurin-series-calcbc': () => import('./taylor-maclaurin-series-calcbc'),
  'lagrange-error-bound-calcbc': () => import('./lagrange-error-bound-calcbc'),
  'series-applications-calcbc': () => import('./series-applications-calcbc'),
  'euler-method-advanced-calcbc': () => import('./euler-method-advanced-calcbc'),
  'logistic-models-calcbc': () => import('./logistic-models-calcbc'),
  'bc-exam-strategies-calcbc': () => import('./bc-exam-strategies-calcbc'),
  'review-connections-calcbc': () => import('./review-connections-calcbc'),

  // AP Biology
  'water-properties-biochemistry': () => import('./water-properties-biochemistry'),
  'biological-macromolecules': () => import('./biological-macromolecules'),
  'enzyme-structure-function': () => import('./enzyme-structure-function'),
  'cell-structure-organelles': () => import('./cell-structure-organelles'),
  'membrane-transport': () => import('./membrane-transport'),
  'cell-compartmentalization': () => import('./cell-compartmentalization'),
  'cellular-respiration': () => import('./cellular-respiration'),
  'photosynthesis': () => import('./photosynthesis'),
  'fitness-environment': () => import('./fitness-environment'),
  'cell-communication-signaling': () => import('./cell-communication-signaling'),
  'cell-cycle-mitosis': () => import('./cell-cycle-mitosis'),
  'feedback-mechanisms': () => import('./feedback-mechanisms'),
  'meiosis-genetic-diversity': () => import('./meiosis-genetic-diversity'),
  'mendelian-genetics': () => import('./mendelian-genetics'),
  'non-mendelian-genetics': () => import('./non-mendelian-genetics'),
  'dna-replication': () => import('./dna-replication'),
  'transcription-translation': () => import('./transcription-translation'),
  'gene-regulation': () => import('./gene-regulation'),
  'biotechnology': () => import('./biotechnology'),
  'evidence-evolution': () => import('./evidence-evolution'),
  'natural-selection-adaptation': () => import('./natural-selection-adaptation'),
  'speciation-macroevolution': () => import('./speciation-macroevolution'),
  'ecology-ecosystems': () => import('./ecology-ecosystems'),
  'energy-flow-nutrient-cycling': () => import('./energy-flow-nutrient-cycling'),
  'population-community-ecology': () => import('./population-community-ecology'),

  // AP Psychology
  'history-approaches-psychology': () => import('./history-approaches-psychology'),
  'biological-bases-brain': () => import('./biological-bases-brain'),
  'genetics-behavior': () => import('./genetics-behavior'),
  'sensation-sensory-processing': () => import('./sensation-sensory-processing'),
  'perception-attention': () => import('./perception-attention'),
  'classical-conditioning': () => import('./classical-conditioning'),
  'operant-conditioning': () => import('./operant-conditioning'),
  'observational-learning-cognition': () => import('./observational-learning-cognition'),
  'memory-encoding-storage': () => import('./memory-encoding-storage'),
  'retrieval-forgetting': () => import('./retrieval-forgetting'),
  'thinking-problem-solving': () => import('./thinking-problem-solving'),
  'language-intelligence': () => import('./language-intelligence'),
  'prenatal-childhood-development': () => import('./prenatal-childhood-development'),
  'adolescence-adulthood': () => import('./adolescence-adulthood'),
  'motivation-theories': () => import('./motivation-theories'),
  'emotion-stress': () => import('./emotion-stress'),
  'personality-theories': () => import('./personality-theories'),
  'psychological-disorders-overview': () => import('./psychological-disorders-overview'),
  'mood-psychotic-disorders': () => import('./mood-psychotic-disorders'),
  'treatment-therapy': () => import('./treatment-therapy'),
  'social-influence-conformity': () => import('./social-influence-conformity'),
  'attitudes-persuasion': () => import('./attitudes-persuasion'),
  'group-behavior-prejudice': () => import('./group-behavior-prejudice'),
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
