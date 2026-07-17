/**
 * Entrance Quiz — Water Properties & Biochemistry (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'wpb-ent-1a', question: 'Why is water considered a polar molecule?', options: ['Oxygen is more electronegative than hydrogen, creating partial charges', 'Water contains ionic bonds between O and H', 'Hydrogen atoms repel each other within the molecule', 'Water molecules are linear in shape'], correctIndex: 0, explanation: 'Oxygen is more electronegative than hydrogen, so it pulls shared electrons closer, giving oxygen a partial negative charge (δ−) and each hydrogen a partial positive charge (δ+). This unequal sharing makes water polar.', partNumber: 1, partTitle: 'Water Properties' },
  { id: 'wpb-ent-1b', question: 'What accounts for the bent shape of a water molecule?', options: ['The two hydrogen atoms repel each other', 'The molecule has 4 bonding pairs and no lone pairs', 'Oxygen has 2 bonding pairs and 2 lone pairs of electrons', 'Water has $sp^{3}d$ hybridization'], correctIndex: 2, explanation: 'Oxygen in water has 2 bonding pairs (shared with H) and 2 lone pairs. The lone pairs push the bonding pairs closer together, producing a bent molecular geometry (~104.5°).', partNumber: 1, partTitle: 'Water Properties' },
  // Part 2
  { id: 'wpb-ent-2a', question: 'How do hydrogen bonds form between water molecules?', options: ['Between the δ+ hydrogen of one molecule and the δ− oxygen of another', 'Between two oxygen atoms of adjacent molecules', 'By sharing electrons between two hydrogen atoms', 'Through ionic interactions between $H^{+}$ and $OH^{-}$'], correctIndex: 0, explanation: 'Hydrogen bonds form when the partially positive hydrogen (δ+) of one water molecule is attracted to the partially negative oxygen (δ−) of a neighboring water molecule.', partNumber: 2, partTitle: 'Hydrogen Bonding' },
  { id: 'wpb-ent-2b', question: 'Which statement best describes hydrogen bonds in water?', options: ['Each hydrogen bond is stronger than a covalent bond', 'Individual hydrogen bonds are weak, but collectively they give water its unique properties', 'Hydrogen bonds only form when water is in solid form', 'Hydrogen bonds involve the transfer of protons between molecules'], correctIndex: 1, explanation: 'A single hydrogen bond is relatively weak (~5% the strength of a covalent bond), but because water molecules can form multiple H-bonds simultaneously, the collective effect produces water\'s high boiling point, surface tension, and other key properties.', partNumber: 2, partTitle: 'Hydrogen Bonding' },
  // Part 3
  { id: 'wpb-ent-3a', question: 'What is cohesion in the context of water?', options: ['Water molecules sticking to other substances', 'Water molecules being attracted to each other', 'The tendency of water to resist temperature changes', 'The ability of water to dissolve ionic compounds'], correctIndex: 1, explanation: 'Cohesion is the attraction of water molecules to other water molecules, primarily through hydrogen bonding. This property is responsible for surface tension and helps pull water upward in plants.', partNumber: 3, partTitle: 'Cohesion & Adhesion' },
  { id: 'wpb-ent-3b', question: 'How does adhesion contribute to water transport in plants?', options: ['It causes water to evaporate from leaf surfaces', 'It allows water to stick to the walls of xylem vessels, aiding upward movement', 'It breaks hydrogen bonds so water can move freely', 'It pushes water from roots to leaves by positive pressure'], correctIndex: 1, explanation: 'Adhesion is the attraction of water molecules to other surfaces. In xylem, water adheres to the hydrophilic cell walls, which works together with cohesion and transpiration pull to move water upward against gravity.', partNumber: 3, partTitle: 'Cohesion & Adhesion' },
  // Part 4
  { id: 'wpb-ent-4a', question: 'Why does water have a high specific heat capacity?', options: ['Water molecules are very small and light', 'Hydrogen bonds must absorb significant energy before molecular motion increases', 'Water contains oxygen, which stores thermal energy efficiently', 'Covalent bonds in water vibrate at high frequencies'], correctIndex: 1, explanation: 'Water\'s extensive hydrogen bonding network absorbs a large amount of heat energy before the molecules speed up and temperature rises. This gives water a high specific heat (4.184 J/g·°C) and helps organisms and environments resist temperature fluctuations.', partNumber: 4, partTitle: 'Thermal Properties' },
  { id: 'wpb-ent-4b', question: 'Why does evaporative cooling occur?', options: ['Cold water molecules evaporate first, leaving warm ones behind', 'The highest-energy molecules escape as gas, lowering the average kinetic energy of the remaining liquid', 'Evaporation adds hydrogen bonds, releasing heat', 'Water vapor is heavier than liquid water'], correctIndex: 1, explanation: 'During evaporation, the molecules with the most kinetic energy escape into the gas phase. This removes the most energetic molecules, lowering the average kinetic energy (temperature) of the remaining liquid — the basis of sweating and transpiration cooling.', partNumber: 4, partTitle: 'Thermal Properties' },
  // Part 5
  { id: 'wpb-ent-5a', question: 'A solution has a pH of 3 and another has a pH of 6. How much greater is the $H^{+}$ concentration in the pH 3 solution?', options: ['3 times greater', '10 times greater', '100 times greater', '1,000 times greater'], correctIndex: 3, explanation: 'pH = −log[$H^{+}$], and the scale is logarithmic. Each pH unit represents a 10-fold change in [$H^{+}$]. A difference of 3 pH units means $10^{3}$ = 1,000 times more $H^{+}$ ions in the pH 3 solution.', partNumber: 5, partTitle: 'pH & Buffers' },
  { id: 'wpb-ent-5b', question: 'How do buffers maintain relatively stable pH in biological systems?', options: ['They remove all $H^{+}$ and $OH^{-}$ ions from solution', 'They accept $H^{+}$ when levels rise and donate $H^{+}$ when levels fall', 'They prevent any chemical reactions from occurring', 'They convert acids into bases irreversibly'], correctIndex: 1, explanation: 'Buffers are weak acid–base pairs that resist pH changes. When $H^{+}$ increases, the buffer\'s base component accepts $H^{+}$; when $H^{+}$ decreases, the acid component donates $H^{+}$. This maintains pH within a narrow, life-compatible range.', partNumber: 5, partTitle: 'pH & Buffers' },
  // Part 6
  { id: 'wpb-ent-6a', question: 'If a solution has a pH of 2, what is the hydrogen ion concentration [$H^{+}$]?', options: ['0.2 M', '0.001 M', '0.01 M', '2.0 M'], correctIndex: 2, explanation: 'pH = −log[$H^{+}$], so [$H^{+}$] = $10^{-pH}$ = $10^{-2}$ = 0.01 M.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'wpb-ent-6b', question: 'Water has a specific heat of 4.184 J/g·°C. How much energy is needed to raise the temperature of 100 g of water by 10°C?', options: ['418.4 J', '4,184 J', '41,840 J', '100 J'], correctIndex: 1, explanation: 'q = m × c × ΔT = 100 g × 4.184 J/g·°C × 10°C = 4,184 J. Water\'s high specific heat means it takes substantial energy to change its temperature.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7
  { id: 'wpb-ent-7a', question: 'Which properties of water are most directly responsible for the transpiration pull that moves water up through xylem?', options: ['High specific heat and pH buffering', 'Cohesion and adhesion', 'Evaporative cooling and density', 'Polarity and universal solvent ability'], correctIndex: 1, explanation: 'Transpiration pull relies on cohesion (water molecules pulling each other via H-bonds to form an unbroken column) and adhesion (water clinging to xylem walls). Together, these create the tension that draws water upward from roots to leaves.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'wpb-ent-7b', question: 'Why does ice float on liquid water?', options: ['Ice has more hydrogen bonds that weigh it down selectively', 'The hydrogen bond lattice in ice spaces molecules farther apart, making it less dense than liquid water', 'Frozen water loses its polarity and becomes lighter', 'Ice molecules vibrate faster, expanding the volume'], correctIndex: 1, explanation: 'When water freezes, hydrogen bonds lock molecules into a crystalline lattice with open spaces, making ice ~9% less dense than liquid water. This is why ice floats — a critical property that insulates aquatic ecosystems in winter.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Water Properties' },
    { partNumber: 2, partTitle: 'Hydrogen Bonding' },
    { partNumber: 3, partTitle: 'Cohesion & Adhesion' },
    { partNumber: 4, partTitle: 'Thermal Properties' },
    { partNumber: 5, partTitle: 'pH & Buffers' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
