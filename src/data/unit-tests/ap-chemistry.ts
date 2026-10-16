import { apChemQuestionPool } from '@/data/exit-quizzes/ap-chemistry'
import { AP_CHEMISTRY_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-chemistry-supplement'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * The 9 units of the AP Chemistry CED. The exit pool's `thermodynamics` domain
 * mixes Unit 6 (Thermochemistry: enthalpy and calorimetry) with Unit 9
 * (entropy and Gibbs free energy), so enthalpy goes to Unit 6 and the rest
 * joins electrochemistry in Unit 9. AP_CHEMISTRY_UNIT_SUPPLEMENT fills Unit 6,
 * where the pool has only one topic.
 */
export const AP_CHEMISTRY_UNIT_ASSIGNMENT: UnitAssignment = {
  domains: { thermodynamics: 'electrochemistry' },
  topics: { 'enthalpy-calorimetry': 'thermochemistry' },
  stems: {
    'How much heat is required to convert 36.0 g of liquid water at 100 °C': 'thermochemistry',
  },
}

export const AP_CHEMISTRY_UNITS: UnitDef[] = [
  { id: 'atomic-structure', unitNumber: 1, name: 'Unit 1: Atomic Structure and Properties', shortName: 'Atomic Structure', description: 'Moles, mass spectrometry, electron configuration, periodic trends.', topicSlugs: ['moles-molar-mass', 'electron-configuration', 'periodic-trends', 'photoelectron-spectroscopy', 'atomic-spectra'], exam_weight: '7–9%', color: 'from-blue-500 to-indigo-500', icon: '⚛️' },
  { id: 'bonding', unitNumber: 2, name: 'Unit 2: Compound Structure and Properties', shortName: 'Bonding', description: 'Ionic, covalent, and metallic bonding; Lewis diagrams; VSEPR; hybridization.', topicSlugs: ['types-of-chemical-bonds', 'lewis-structures-formal-charge', 'vsepr-molecular-geometry', 'hybridization-sigma-pi-bonds'], exam_weight: '7–9%', color: 'from-indigo-500 to-purple-500', icon: '🔗' },
  { id: 'imf', unitNumber: 3, name: 'Unit 3: Properties of Substances and Mixtures', shortName: 'IMFs & Solutions', description: 'Intermolecular forces, gases, solids, liquids, solutions, and chromatography.', topicSlugs: ['types-intermolecular-forces', 'properties-states-matter', 'ideal-gas-law', 'solutions-solubility', 'mixtures-separations'], exam_weight: '18–22%', color: 'from-purple-500 to-pink-500', icon: '💧' },
  { id: 'reactions', unitNumber: 4, name: 'Unit 4: Chemical Reactions', shortName: 'Reactions', description: 'Balancing reactions, stoichiometry, types of reactions, and titrations.', topicSlugs: ['reaction-types', 'stoichiometry-limiting-reactants', 'net-ionic-equations', 'oxidation-reduction-reactions'], exam_weight: '7–9%', color: 'from-emerald-500 to-teal-500', icon: '⚗️' },
  { id: 'kinetics', unitNumber: 5, name: 'Unit 5: Kinetics', shortName: 'Kinetics', description: 'Rate laws, reaction mechanisms, catalysts, and the Arrhenius equation.', topicSlugs: ['reaction-rates-and-rate-laws', 'integrated-rate-laws', 'activation-energy-arrhenius', 'reaction-mechanisms'], exam_weight: '7–9%', color: 'from-amber-500 to-orange-500', icon: '⏱️' },
  { id: 'thermochemistry', unitNumber: 6, name: 'Unit 6: Thermochemistry', shortName: 'Thermochemistry', description: 'Endothermic and exothermic processes, heat transfer, calorimetry, phase-change energy, bond enthalpies, and Hess\u2019s law.', topicSlugs: ['enthalpy-calorimetry'], exam_weight: '7–9%', color: 'from-orange-500 to-red-500', icon: '🔥' },
  { id: 'equilibrium', unitNumber: 7, name: 'Unit 7: Equilibrium', shortName: 'Equilibrium', description: 'Reaction quotient, Kc and Kp, Le Chatelier, ICE tables, and Ksp.', topicSlugs: ['intro-equilibrium', 'equilibrium-constants-expressions', 'ice-tables-calculations', 'le-chatelier-equilibrium-shifts', 'solubility-ksp'], exam_weight: '7–9%', color: 'from-red-500 to-rose-500', icon: '⚖️' },
  { id: 'acids-bases', unitNumber: 8, name: 'Unit 8: Acids and Bases', shortName: 'Acids & Bases', description: 'pH, Ka and Kb, buffers, titration curves, and polyprotic acids.', topicSlugs: ['acid-base-theories-ph', 'weak-acids-bases-ka-kb', 'buffer-solutions-henderson-hasselbalch', 'acid-base-titrations'], exam_weight: '11–15%', color: 'from-rose-500 to-pink-500', icon: '🧪' },
  { id: 'electrochemistry', unitNumber: 9, name: 'Unit 9: Thermodynamics and Electrochemistry', shortName: 'Thermo & Electrochem', description: 'Entropy, Gibbs free energy and K, thermodynamic favorability, galvanic and electrolytic cells, and the Nernst equation.', topicSlugs: ['entropy-second-law', 'gibbs-free-energy', 'spontaneity-free-energy-applications', 'galvanic-cells-potentials', 'nernst-equation-concentration', 'electrolytic-cells-faraday'], exam_weight: '7–9%', color: 'from-fuchsia-500 to-violet-500', icon: '🔋' },
]

export const AP_CHEMISTRY_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-chemistry',
  courseHubHref: '/ap-chemistry',
  courseTitle: 'AP Chemistry',
  unitTestRoute: '/ap-chem-unit-tests',
  units: AP_CHEMISTRY_UNITS,
  pool: [...assignUnits(apChemQuestionPool, AP_CHEMISTRY_UNIT_ASSIGNMENT), ...AP_CHEMISTRY_UNIT_SUPPLEMENT],
}
