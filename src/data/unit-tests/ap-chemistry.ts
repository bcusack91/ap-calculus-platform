import { apChemQuestionPool } from '@/data/exit-quizzes/ap-chemistry'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_CHEMISTRY_UNITS: UnitDef[] = [
  { id: 'atomic-structure', unitNumber: 1, name: 'Unit 1: Atomic Structure & Properties', shortName: 'Atomic Structure', description: 'Moles, mass spectrometry, electron configuration, periodic trends.', topicSlugs: ['atomic-structure'], exam_weight: '7–9%', color: 'from-blue-500 to-indigo-500', icon: '⚛️' },
  { id: 'bonding', unitNumber: 2, name: 'Unit 2: Compound Structure & Bonding', shortName: 'Bonding', description: 'Ionic, covalent, and metallic bonding; Lewis diagrams; VSEPR; hybridization.', topicSlugs: ['bonding'], exam_weight: '7–9%', color: 'from-indigo-500 to-purple-500', icon: '🔗' },
  { id: 'imf', unitNumber: 3, name: 'Unit 3: Properties of Substances & Mixtures', shortName: 'IMFs & Solutions', description: 'Intermolecular forces, gases, solids, liquids, solutions, and chromatography.', topicSlugs: ['imf'], exam_weight: '18–22%', color: 'from-purple-500 to-pink-500', icon: '💧' },
  { id: 'reactions', unitNumber: 4, name: 'Unit 4: Chemical Reactions', shortName: 'Reactions', description: 'Balancing reactions, stoichiometry, types of reactions, and titrations.', topicSlugs: ['reactions'], exam_weight: '7–9%', color: 'from-emerald-500 to-teal-500', icon: '⚗️' },
  { id: 'kinetics', unitNumber: 5, name: 'Unit 5: Kinetics', shortName: 'Kinetics', description: 'Rate laws, reaction mechanisms, catalysts, and the Arrhenius equation.', topicSlugs: ['kinetics'], exam_weight: '7–9%', color: 'from-amber-500 to-orange-500', icon: '⏱️' },
  { id: 'thermodynamics', unitNumber: 6, name: 'Unit 6: Thermodynamics', shortName: 'Thermodynamics', description: 'Heat, enthalpy, calorimetry, Hess\u2019s law, and entropy.', topicSlugs: ['thermodynamics'], exam_weight: '7–9%', color: 'from-orange-500 to-red-500', icon: '🔥' },
  { id: 'equilibrium', unitNumber: 7, name: 'Unit 7: Equilibrium', shortName: 'Equilibrium', description: 'Reaction quotient, Kc and Kp, Le Chatelier, ICE tables, and Ksp.', topicSlugs: ['equilibrium'], exam_weight: '7–9%', color: 'from-red-500 to-rose-500', icon: '⚖️' },
  { id: 'acids-bases', unitNumber: 8, name: 'Unit 8: Acids & Bases', shortName: 'Acids & Bases', description: 'pH, Ka and Kb, buffers, titration curves, and polyprotic acids.', topicSlugs: ['acids-bases'], exam_weight: '11–15%', color: 'from-rose-500 to-pink-500', icon: '🧪' },
  { id: 'electrochemistry', unitNumber: 9, name: 'Unit 9: Applications of Thermodynamics & Electrochemistry', shortName: 'Electrochemistry', description: 'Spontaneity, Gibbs free energy, galvanic & electrolytic cells, and electrolysis.', topicSlugs: ['electrochemistry'], exam_weight: '7–9%', color: 'from-fuchsia-500 to-violet-500', icon: '🔋' },
]

export const AP_CHEMISTRY_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-chemistry',
  courseHubHref: '/ap-chemistry',
  courseTitle: 'AP Chemistry',
  unitTestRoute: '/ap-chem-unit-tests',
  units: AP_CHEMISTRY_UNITS,
  pool: apChemQuestionPool,
}
