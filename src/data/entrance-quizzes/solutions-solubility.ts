/**
 * Entrance Quiz — Solutions & Solubility
 * 14 questions (2 per part)
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'sol-ent-1a', question: 'In a solution, the substance present in the largest amount is the:', options: ['Solute', 'Solvent', 'Precipitate', 'Catalyst'], correctIndex: 1, explanation: 'The solvent is the substance present in the greatest quantity. The solute is the substance dissolved in the solvent.', partNumber: 1, partTitle: 'Types of Solutions' },
  { id: 'sol-ent-1b', question: 'A saturated solution is one that:', options: ['Has very little solute', 'Contains the maximum amount of dissolved solute at a given temperature', 'Is always concentrated', 'Cannot dissolve any substance'], correctIndex: 1, explanation: 'A saturated solution contains the maximum amount of solute that can dissolve at that temperature. Any additional solute will remain undissolved.', partNumber: 1, partTitle: 'Types of Solutions' },

  { id: 'sol-ent-2a', question: 'According to solubility rules, which compound is soluble in water?', options: ['$AgCl$', '$BaSO_4$', '$NaNO_3$', '$PbS$'], correctIndex: 2, explanation: 'All sodium ($Na^+$) and nitrate ($NO_3^-$) salts are soluble. $NaNO_3$ meets both criteria. The others are common insoluble salts.', partNumber: 2, partTitle: 'Solubility Rules' },
  { id: 'sol-ent-2b', question: 'Which of the following is generally insoluble in water?', options: ['$KCl$', '$Na_2SO_4$', '$CaCO_3$', '$NH_4Br$'], correctIndex: 2, explanation: 'Most carbonates ($CO_3^{2-}$) are insoluble (except Group 1 and $NH_4^+$ carbonates). $CaCO_3$ (limestone) is insoluble.', partNumber: 2, partTitle: 'Solubility Rules' },

  { id: 'sol-ent-3a', question: 'Molarity (M) is defined as:', options: ['Moles of solute per kilogram of solvent', 'Moles of solute per liter of solution', 'Grams of solute per liter of solution', 'Moles of solute per mole of solvent'], correctIndex: 1, explanation: 'Molarity = moles of solute / liters of solution. It is the most commonly used concentration unit in chemistry.', partNumber: 3, partTitle: 'Concentration Units' },
  { id: 'sol-ent-3b', question: 'What is the molarity of a solution made by dissolving 0.50 mol NaCl in enough water to make 250 mL of solution?', options: ['0.50 M', '1.0 M', '2.0 M', '0.25 M'], correctIndex: 2, explanation: '$M = \\frac{0.50\\text{ mol}}{0.250\\text{ L}} = 2.0\\text{ M}$', partNumber: 3, partTitle: 'Concentration Units' },

  { id: 'sol-ent-4a', question: 'The dilution equation is:', options: ['$M_1 \\times V_1 = M_2 \\times V_2$', '$M_1 + V_1 = M_2 + V_2$', '$M_1 / V_1 = M_2 / V_2$', '$M_1 \\times M_2 = V_1 \\times V_2$'], correctIndex: 0, explanation: 'The dilution equation $M_1V_1 = M_2V_2$ works because the moles of solute stay constant when you add more solvent.', partNumber: 4, partTitle: 'Dilution Calculations' },
  { id: 'sol-ent-4b', question: 'How much water must be added to 100 mL of 6.0 M HCl to make 2.0 M HCl?', options: ['100 mL (total 200 mL)', '200 mL (total 300 mL)', '300 mL (total 400 mL)', '50 mL (total 150 mL)'], correctIndex: 1, explanation: '$M_1V_1 = M_2V_2$: $(6.0)(100) = (2.0)(V_2)$, so $V_2 = 300$ mL. Since we started with 100 mL, we add 200 mL of water.', partNumber: 4, partTitle: 'Dilution Calculations' },

  { id: 'sol-ent-5a', question: 'Boiling point elevation is a colligative property that depends on:', options: ['The identity of the solute', 'The number of solute particles in solution', 'The color of the solution', 'The density of the solute'], correctIndex: 1, explanation: 'Colligative properties depend only on the number (concentration) of solute particles, not their identity. More particles → greater boiling point elevation.', partNumber: 5, partTitle: 'Colligative Properties' },
  { id: 'sol-ent-5b', question: 'Which solution has the lowest freezing point?', options: ['0.1 m glucose ($C_6H_{12}O_6$)', '0.1 m NaCl', '0.1 m $CaCl_2$', '0.1 m urea ($CH_4N_2O$)'], correctIndex: 2, explanation: '$CaCl_2$ dissociates into 3 ions ($Ca^{2+} + 2Cl^-$), giving the most particles per formula unit. More particles → greater freezing point depression.', partNumber: 5, partTitle: 'Colligative Properties' },

  { id: 'sol-ent-6a', question: 'A student needs 500 mL of 0.200 M $NaOH$. How many grams of NaOH (M = 40.00 g/mol) should be dissolved?', options: ['2.00 g', '4.00 g', '8.00 g', '10.0 g'], correctIndex: 1, explanation: 'Moles needed = $0.200\\text{ M} \\times 0.500\\text{ L} = 0.100$ mol. Mass = $0.100 \\times 40.00 = 4.00$ g.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sol-ent-6b', question: '"Like dissolves like" means:', options: ['All liquids dissolve in each other', 'Polar solutes dissolve in polar solvents; nonpolar in nonpolar', 'Hot solvents dissolve everything', 'Only water can be a solvent'], correctIndex: 1, explanation: 'Substances with similar intermolecular forces dissolve in each other. Polar/ionic solutes dissolve in polar solvents (like water); nonpolar solutes in nonpolar solvents (like hexane).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  { id: 'sol-ent-7a', question: 'For most solid solutes, solubility in water ___ with increasing temperature, while gas solubility ___.', options: ['Increases; increases', 'Increases; decreases', 'Decreases; increases', 'Decreases; decreases'], correctIndex: 1, explanation: 'Most solids are more soluble in hotter water (dissolution is usually endothermic). Gases are less soluble in hotter water (kinetic energy lets them escape the liquid).', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'sol-ent-7b', question: 'A solution has a vapor pressure lower than the pure solvent. This is explained by:', options: ['Boyle\'s law', 'Raoult\'s law', 'Henry\'s law', 'Dalton\'s law'], correctIndex: 1, explanation: 'Raoult\'s law states that the vapor pressure of a solution is proportional to the mole fraction of the solvent: $P = X_{solvent} \\times P^\\circ$. Adding solute lowers $X_{solvent}$, decreasing vapor pressure.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Types of Solutions' },
    { partNumber: 2, partTitle: 'Solubility Rules' },
    { partNumber: 3, partTitle: 'Concentration Units' },
    { partNumber: 4, partTitle: 'Dilution Calculations' },
    { partNumber: 5, partTitle: 'Colligative Properties' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
