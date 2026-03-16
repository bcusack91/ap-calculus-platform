/**
 * Entrance Quiz — Types of Intermolecular Forces
 * 14 questions (2 per part)
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'imf-ent-1a', question: 'London dispersion forces are present in:', options: ['Only polar molecules', 'Only nonpolar molecules', 'All molecules and atoms', 'Only ionic compounds'], correctIndex: 2, explanation: 'London dispersion forces (LDFs) arise from temporary dipoles and exist in ALL molecules and atoms, though they are the only IMF in nonpolar substances.', partNumber: 1, partTitle: 'London Dispersion Forces' },
  { id: 'imf-ent-1b', question: 'London dispersion forces increase with:', options: ['Decreasing molar mass', 'Increasing polarizability (size/electron count)', 'Increasing bond strength', 'Decreasing molecular size'], correctIndex: 1, explanation: 'Larger atoms/molecules have more electrons and are more polarizable, creating stronger temporary dipoles and stronger London dispersion forces.', partNumber: 1, partTitle: 'London Dispersion Forces' },

  { id: 'imf-ent-2a', question: 'Dipole-dipole forces occur between molecules that are:', options: ['Nonpolar', 'Polar (have permanent dipoles)', 'Ionic', 'Metallic'], correctIndex: 1, explanation: 'Dipole-dipole forces are attractions between the positive end of one polar molecule and the negative end of another polar molecule.', partNumber: 2, partTitle: 'Dipole-Dipole Forces' },
  { id: 'imf-ent-2b', question: 'Which of these molecules experiences dipole-dipole forces?', options: ['$CH_4$', '$CO_2$', '$HCl$', '$N_2$'], correctIndex: 2, explanation: 'HCl is a polar molecule (Cl is more electronegative), so it experiences dipole-dipole forces. The others are nonpolar.', partNumber: 2, partTitle: 'Dipole-Dipole Forces' },

  { id: 'imf-ent-3a', question: 'Hydrogen bonding occurs when hydrogen is bonded to which elements?', options: ['Any nonmetal', 'C, Si, or Ge', 'F, O, or N', 'Any halogen'], correctIndex: 2, explanation: 'Hydrogen bonds form when H is covalently bonded to F, O, or N — small, highly electronegative atoms with lone pairs.', partNumber: 3, partTitle: 'Hydrogen Bonding' },
  { id: 'imf-ent-3b', question: 'Water has an unusually high boiling point for its molar mass because of:', options: ['Strong covalent bonds', 'London dispersion forces', 'Strong hydrogen bonding', 'Ionic interactions'], correctIndex: 2, explanation: 'Water forms extensive hydrogen bonding networks (each molecule can form up to 4 H-bonds), requiring significant energy to break, raising the boiling point.', partNumber: 3, partTitle: 'Hydrogen Bonding' },

  { id: 'imf-ent-4a', question: 'Ion-dipole forces occur between:', options: ['Two ions', 'An ion and a polar molecule', 'Two polar molecules', 'An ion and a nonpolar molecule'], correctIndex: 1, explanation: 'Ion-dipole forces are attractions between an ion (cation or anion) and the partial charge on a polar molecule. They are crucial for dissolving ionic compounds in water.', partNumber: 4, partTitle: 'Ion-Dipole Interactions' },
  { id: 'imf-ent-4b', question: 'When NaCl dissolves in water, the primary force between $Na^+$ and water molecules is:', options: ['Hydrogen bonding', 'London dispersion', 'Ion-dipole', 'Covalent bonding'], correctIndex: 2, explanation: 'The $Na^+$ cation is attracted to the partial negative charge (oxygen end) of water molecules through ion-dipole forces.$', partNumber: 4, partTitle: 'Ion-Dipole Interactions' },

  { id: 'imf-ent-5a', question: 'Rank these IMFs from weakest to strongest:', options: ['London dispersion < dipole-dipole < hydrogen bonding < ion-dipole', 'Hydrogen bonding < dipole-dipole < London dispersion < ion-dipole', 'Ion-dipole < hydrogen bonding < dipole-dipole < London dispersion', 'Dipole-dipole < London dispersion < ion-dipole < hydrogen bonding'], correctIndex: 0, explanation: 'Generally: London dispersion (weakest) < dipole-dipole < hydrogen bonding < ion-dipole (strongest). Note: LDFs can be very strong for large molecules.', partNumber: 5, partTitle: 'Comparing IMF Strengths' },
  { id: 'imf-ent-5b', question: 'Which substance has the highest boiling point?', options: ['$CH_4$ (16 g/mol)', '$CH_3OH$ (32 g/mol)', '$CH_3CH_3$ (30 g/mol)', '$CH_3F$ (34 g/mol)'], correctIndex: 1, explanation: '$CH_3OH$ (methanol) can form hydrogen bonds (O–H group), which are much stronger than the LDFs or dipole-dipole forces in the other molecules, giving it the highest boiling point.', partNumber: 5, partTitle: 'Comparing IMF Strengths' },

  { id: 'imf-ent-6a', question: 'Explain why $HF$ has a lower boiling point than $H_2O$ despite F being more electronegative:', options: ['HF has weaker covalent bonds', 'Water can form more hydrogen bonds per molecule (4 vs 2 for HF)', 'HF is lighter', 'Fluorine is larger than oxygen'], correctIndex: 1, explanation: 'Water has 2 O–H bonds and 2 lone pairs, allowing up to 4 hydrogen bonds per molecule. HF has only 1 H–F bond, limiting its networking despite F\'s high electronegativity.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'imf-ent-6b', question: 'Which pair of liquids is miscible (fully soluble in each other)?', options: ['Hexane and water', 'Ethanol and water', 'Oil and water', 'CCl₄ and water'], correctIndex: 1, explanation: 'Ethanol and water are miscible because both can form hydrogen bonds ("like dissolves like"). The nonpolar substances (hexane, oil, CCl₄) cannot form H-bonds with water.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  { id: 'imf-ent-7a', question: 'Among the noble gases, boiling point increases from He to Xe because:', options: ['Xe has stronger covalent bonds', 'Larger atoms have stronger London dispersion forces', 'Xe forms hydrogen bonds', 'He has more electrons'], correctIndex: 1, explanation: 'Noble gases only have London dispersion forces. From He to Xe, atomic size and number of electrons increase, making the atoms more polarizable and increasing LDF strength.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'imf-ent-7b', question: 'Which property is NOT directly related to the strength of intermolecular forces?', options: ['Boiling point', 'Viscosity', 'Bond energy (intramolecular)', 'Surface tension'], correctIndex: 2, explanation: 'Bond energy is an intramolecular property (strength within a molecule). Boiling point, viscosity, and surface tension all depend on intermolecular forces between molecules.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'London Dispersion Forces' },
    { partNumber: 2, partTitle: 'Dipole-Dipole Forces' },
    { partNumber: 3, partTitle: 'Hydrogen Bonding' },
    { partNumber: 4, partTitle: 'Ion-Dipole Interactions' },
    { partNumber: 5, partTitle: 'Comparing IMF Strengths' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
