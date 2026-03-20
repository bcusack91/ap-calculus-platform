/**
 * Entrance Quiz — Stoichiometry (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'mgst-ent-1a', question: "Avogadro's number ($6.022 \\times 10^{23}$) represents the number of entities in:", options: ['1 gram of any substance', '1 mole of any substance', '1 liter of any gas at STP', '1 equivalent of any acid'], correctIndex: 1, explanation: "One mole of any substance contains $6.022 \\times 10^{23}$ particles (atoms, molecules, ions, etc.) — this is Avogadro's number.", partNumber: 1, partTitle: 'Mole Concept' },
  { id: 'mgst-ent-1b', question: 'How many molecules are in 2.0 moles of glucose?', options: ['$3.01 \\times 10^{23}$', '$6.02 \\times 10^{23}$', '$1.20 \\times 10^{24}$', '$1.80 \\times 10^{24}$'], correctIndex: 2, explanation: '$2.0 \\text{ mol} \\times 6.022 \\times 10^{23} \\text{ molecules/mol} = 1.204 \\times 10^{24}$ molecules.', partNumber: 1, partTitle: 'Mole Concept' },
  { id: 'mgst-ent-2a', question: 'What is the molar mass of $CaCO_3$ (Ca = 40, C = 12, O = 16)?', options: ['68 g/mol', '84 g/mol', '100 g/mol', '116 g/mol'], correctIndex: 2, explanation: 'MW($CaCO_3$) = 40 + 12 + 3(16) = 40 + 12 + 48 = 100 g/mol.', partNumber: 2, partTitle: 'Molecular Weights' },
  { id: 'mgst-ent-2b', question: 'How many moles are in 44 g of $CO_2$ (MW = 44 g/mol)?', options: ['0.5 mol', '1.0 mol', '2.0 mol', '44 mol'], correctIndex: 1, explanation: 'Moles = mass / molar mass = 44 g / 44 g/mol = 1.0 mol.', partNumber: 2, partTitle: 'Molecular Weights' },
  { id: 'mgst-ent-3a', question: 'In the reaction $N_2 + 3H_2 \\to 2NH_3$, 1 mol $N_2$ reacts with 2 mol $H_2$ (limiting). How many moles of $NH_3$ are produced?', options: ['2/3 mol', '4/3 mol', '2 mol', '3 mol'], correctIndex: 1, explanation: '2 mol $H_2$ × (2 mol $NH_3$ / 3 mol $H_2$) = 4/3 mol $NH_3 \\approx 1.33$ mol.', partNumber: 3, partTitle: 'Limiting Reagents' },
  { id: 'mgst-ent-3b', question: 'A reaction uses 4 g $H_2$ (MW = 2) and 32 g $O_2$ (MW = 32) to form water. Which is the limiting reagent?', options: ['$H_2$', '$O_2$', 'Neither; they are stoichiometric', 'Cannot be determined'], correctIndex: 1, explanation: 'Moles: $H_2$ = 4/2 = 2 mol; $O_2$ = 32/32 = 1 mol. $2H_2 + O_2 \\to 2H_2O$ requires 2:1 ratio. We have 2:1 exactly — stoichiometric (neither is limiting). But if only 1 mol $O_2$ available for 2 mol $H_2$, $O_2$ would run out first in an excess scenario.', partNumber: 3, partTitle: 'Limiting Reagents' },
  { id: 'mgst-ent-4a', question: 'A reaction theoretically produces 50 g of product but only 40 g is obtained. The percent yield is:', options: ['40%', '60%', '80%', '125%'], correctIndex: 2, explanation: 'Percent yield = (actual yield / theoretical yield) × 100 = (40/50) × 100 = 80%.', partNumber: 4, partTitle: 'Percent Yield' },
  { id: 'mgst-ent-4b', question: 'Which factor does NOT affect percent yield?', options: ['Side reactions consuming product', 'Incomplete reactions', 'The molar mass of the limiting reagent', 'Mechanical losses during transfer'], correctIndex: 2, explanation: 'Molar mass of the limiting reagent is used to calculate theoretical yield, not to change actual yield. Losses, side reactions, and incomplete reactions directly reduce percent yield.', partNumber: 4, partTitle: 'Percent Yield' },
  { id: 'mgst-ent-5a', question: 'The molarity of a solution prepared by dissolving 0.5 mol NaCl in enough water to make 250 mL of solution is:', options: ['0.125 M', '0.5 M', '2.0 M', '5.0 M'], correctIndex: 2, explanation: 'Molarity = moles / liters = 0.5 mol / 0.250 L = 2.0 M.', partNumber: 5, partTitle: 'Solution Concentrations' },
  { id: 'mgst-ent-5b', question: 'You dilute 100 mL of a 6.0 M HCl solution to 300 mL total. The new concentration is:', options: ['1.0 M', '2.0 M', '3.0 M', '18 M'], correctIndex: 1, explanation: '$M_1V_1 = M_2V_2$: $(6.0)(100) = M_2(300)$; $M_2 = 600/300 = 2.0$ M.', partNumber: 5, partTitle: 'Solution Concentrations' },
  { id: 'mgst-ent-6a', question: 'How many grams of $NaOH$ (MW = 40 g/mol) are needed to make 500 mL of a 0.4 M solution?', options: ['2 g', '4 g', '8 g', '16 g'], correctIndex: 2, explanation: 'Moles needed = 0.4 M × 0.500 L = 0.2 mol. Mass = 0.2 mol × 40 g/mol = 8 g.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgst-ent-6b', question: 'The empirical formula of a compound with 40% C, 6.7% H, and 53.3% O (by mass) is:', options: ['$CH_2O$', '$C_2H_4O$', '$C_3H_6O_3$', '$CH_4O$'], correctIndex: 0, explanation: 'Moles: C = 40/12 = 3.33; H = 6.7/1 = 6.7; O = 53.3/16 = 3.33. Ratio 1:2:1 → empirical formula $CH_2O$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgst-ent-7a', question: 'Which of the following pairs has the same empirical formula?', options: ['$CH_4$ and $C_2H_8$', '$C_6H_{12}O_6$ (glucose) and $CH_2O$ (formaldehyde)', '$H_2O$ and $H_2O_2$', '$CO$ and $CO_2$'], correctIndex: 1, explanation: 'Glucose $C_6H_{12}O_6$ simplifies to $CH_2O$ (divide by 6), the same as formaldehyde\'s molecular formula (which is already its empirical formula).', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'mgst-ent-7b', question: 'What is the mass percent of nitrogen in $NH_3$ (MW = 17 g/mol)?', options: ['5.9%', '17.6%', '82.4%', '94.1%'], correctIndex: 2, explanation: 'Mass of N = 14 g/mol; mass percent N = (14/17) × 100 = 82.4%. Hydrogen accounts for the remaining 17.6%.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Mole Concept' },
    { partNumber: 2, partTitle: 'Molecular Weights' },
    { partNumber: 3, partTitle: 'Limiting Reagents' },
    { partNumber: 4, partTitle: 'Percent Yield' },
    { partNumber: 5, partTitle: 'Solution Concentrations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
