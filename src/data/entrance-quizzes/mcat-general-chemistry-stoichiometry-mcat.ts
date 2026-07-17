/**
 * Entrance Quiz — Stoichiometry (MCAT)
 * 10 questions · 5 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Moles, Molar Mass & Empirical Formulas
  { id: 'mgst-ent-1a', question: 'How many moles are in 36 g of water (molar mass ≈ 18 g/mol)?', options: ['0.5 mol', '1 mol', '2 mol', '4 mol'], correctIndex: 2, explanation: 'n = m / M = 36 / 18 = 2 mol.', partNumber: 1, partTitle: 'Moles, Molar Mass & Empirical Formulas' },
  { id: 'mgst-ent-1b', question: 'A compound contains 40% C, 6.7% H, and 53.3% O by mass. Its empirical formula is:', options: ['CHO', '$CH_{2}O$', '$C_{2}H_{4}O_{2}$', '$C_{2}H_{6}O$'], correctIndex: 1, explanation: 'Mole ratio: 40/12 ≈ 3.33, 6.7/1 ≈ 6.7, 53.3/16 ≈ 3.33. Divide by 3.33 → 1 : 2 : 1 → $CH_{2}O$.', partNumber: 1, partTitle: 'Moles, Molar Mass & Empirical Formulas' },

  // Part 2 — Limiting Reagent & Reaction Types
  { id: 'mgst-ent-2a', question: 'For 2 $H_{2}$ + $O_{2}$ → 2 $H_{2}O$, you start with 4 mol $H_{2}$ and 1 mol $O_{2}$. The limiting reagent and theoretical yield of $H_{2}O$ are:', options: ['$H_{2}$; 4 mol $H_{2}O$', '$O_{2}$; 2 mol $H_{2}O$', '$H_{2}$; 2 mol $H_{2}O$', '$O_{2}$; 1 mol $H_{2}O$'], correctIndex: 1, explanation: '$O_{2}$ requires 2× its moles of $H_{2}$. 1 mol $O_{2}$ needs 2 mol $H_{2}$ (have 4, plenty). $O_{2}$ is limiting → 2 mol $H_{2}O$.', partNumber: 2, partTitle: 'Limiting Reagent & Reaction Types' },
  { id: 'mgst-ent-2b', question: '$AgNO_{3}(aq)$ + NaCl(aq) → AgCl(s) + $NaNO_{3}(aq)$ is best classified as a:', options: ['Combustion reaction', 'Acid-base neutralization', 'Precipitation (double-displacement) reaction', 'Single-displacement reaction'], correctIndex: 2, explanation: 'Two soluble salts swap partners; the insoluble AgCl precipitates out — a classic double-displacement / precipitation reaction.', partNumber: 2, partTitle: 'Limiting Reagent & Reaction Types' },

  // Part 3 — Solutions, Molarity & Colligative Properties
  { id: 'mgst-ent-3a', question: 'What is the molarity of a solution containing 0.50 mol of NaCl in 250 mL of solution?', options: ['0.5 M', '1.0 M', '2.0 M', '4.0 M'], correctIndex: 2, explanation: 'M = mol / L = 0.50 / 0.250 = 2.0 M.', partNumber: 3, partTitle: 'Solutions, Molarity & Colligative Properties' },
  { id: 'mgst-ent-3b', question: 'Which 1 m aqueous solution will have the lowest freezing point?', options: ['Glucose (non-electrolyte)', 'NaCl', '$CaCl_{2}$', 'Sucrose (non-electrolyte)'], correctIndex: 2, explanation: 'ΔTf depends on van\'t Hoff factor i. $CaCl_{2}$ → 3 ions (i ≈ 3); NaCl → 2 (i ≈ 2); glucose & sucrose → 1. Highest i → lowest freezing point.', partNumber: 3, partTitle: 'Solutions, Molarity & Colligative Properties' },

  // Part 4 — Gas Laws & Electrochemistry
  { id: 'mgst-ent-4a', question: 'At constant temperature, doubling the pressure on an ideal gas:', options: ['Doubles its volume', 'Halves its volume', 'Has no effect on volume', 'Quadruples its volume'], correctIndex: 1, explanation: "Boyle's Law: $P_{1}V_{1}$ = $P_{2}V_{2}$. If P doubles, V is halved (inverse relationship at constant T and n).", partNumber: 4, partTitle: 'Gas Laws & Electrochemistry' },
  { id: 'mgst-ent-4b', question: 'In a galvanic (voltaic) cell, oxidation occurs at the:', options: ['Cathode, which is positive', 'Anode, which is negative', 'Anode, which is positive', 'Cathode, which is negative'], correctIndex: 1, explanation: 'In a galvanic cell, the anode is where oxidation happens and is the negative terminal (releases electrons to the external circuit).', partNumber: 4, partTitle: 'Gas Laws & Electrochemistry' },

  // Part 5 — Mixed MCAT Review
  { id: 'mgst-ent-5a', question: 'How many grams of NaOH (40 g/mol) are needed to make 500 mL of a 0.20 M solution?', options: ['2.0 g', '4.0 g', '8.0 g', '20 g'], correctIndex: 1, explanation: 'mol = M × V = 0.20 × 0.500 = 0.10 mol. Mass = 0.10 × 40 = 4.0 g.', partNumber: 5, partTitle: 'Mixed MCAT Review' },
  { id: 'mgst-ent-5b', question: 'For $C_{3}H_{8}$ + 5 $O_{2}$ → 3 $CO_{2}$ + 4 $H_{2}O$, how many moles of $CO_{2}$ are produced from 2 mol $C_{3}H_{8}$ $(excess O_{2})$?', options: ['2 mol', '3 mol', '5 mol', '6 mol'], correctIndex: 3, explanation: 'Stoichiometric ratio 1 : 3 (propane : $CO_{2}$). 2 mol × 3 = 6 mol $CO_{2}$.', partNumber: 5, partTitle: 'Mixed MCAT Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Moles, Molar Mass & Empirical Formulas' },
    { partNumber: 2, partTitle: 'Limiting Reagent & Reaction Types' },
    { partNumber: 3, partTitle: 'Solutions, Molarity & Colligative Properties' },
    { partNumber: 4, partTitle: 'Gas Laws & Electrochemistry' },
    { partNumber: 5, partTitle: 'Mixed MCAT Review' },
  ]
}
