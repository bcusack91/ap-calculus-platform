/**
 * Exit-quiz topics sampled by the AP Chemistry full-length exam's multiple-
 * choice section. Every entry must be a slug `generateExitQuiz` resolves: the
 * page skips a topic that throws without saying so, so a bad slug quietly
 * shrinks the exam (and a list of bad slugs empties it). Guarded by
 * tests/lib/ap-chem-full-exam-topics.test.ts.
 */
export const AP_CHEM_EXAM_TOPICS = [
  // Unit 1: Atomic structure and properties
  'moles-molar-mass', 'electron-configuration', 'periodic-trends', 'photoelectron-spectroscopy',
  // Unit 2: Molecular and ionic compound structure
  'types-of-chemical-bonds', 'lewis-structures-formal-charge', 'vsepr-molecular-geometry',
  'hybridization-sigma-pi-bonds',
  // Unit 3: Intermolecular forces and properties
  'types-intermolecular-forces', 'properties-states-matter', 'solutions-solubility', 'ideal-gas-law',
  'mixtures-separations',
  // Unit 4: Chemical reactions
  'reaction-types', 'stoichiometry-limiting-reactants', 'net-ionic-equations', 'oxidation-reduction-reactions',
  // Unit 5: Kinetics
  'reaction-rates-and-rate-laws', 'integrated-rate-laws', 'activation-energy-arrhenius', 'reaction-mechanisms',
  // Unit 6: Thermodynamics
  'enthalpy-calorimetry',
  // Unit 7: Equilibrium
  'intro-equilibrium', 'equilibrium-constants-expressions', 'reaction-quotient-le-chatelier',
  'le-chatelier-equilibrium-shifts', 'ice-tables-calculations', 'solubility-ksp',
  // Unit 8: Acids and bases
  'acid-base-theories-ph', 'weak-acids-bases-ka-kb', 'buffer-solutions-henderson-hasselbalch',
  'acid-base-titrations',
  // Unit 9: Applications of thermodynamics
  'entropy-second-law', 'gibbs-free-energy', 'spontaneity-free-energy-applications',
  'galvanic-cells-potentials', 'nernst-equation-concentration', 'electrolytic-cells-faraday',
  'galvanic-cells-thermo-applications',
] as const
