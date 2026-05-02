/**
 * Entrance Quiz — Stoichiometry (MCAT)
 * 10 questions · 5 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Moles, Molar Mass & Empirical Formulas
  { id: 'mgst-ent-1a', question: 'How many moles are in 36 g of water (molar mass ≈ 18 g/mol)?', options: ['0.5 mol', '1 mol', '2 mol', '4 mol'], correctIndex: 2, explanation: 'n = m / M = 36 / 18 = 2 mol.', partNumber: 1, partTitle: 'Moles, Molar Mass & Empirical Formulas' },
  { id: 'mgst-ent-1b', question: 'A compound contains 40% C, 6.7% H, and 53.3% O by mass. Its empirical formula is:', options: ['CHO', 'CH₂O', 'C₂H₄O₂', 'C₂H₆O'], correctIndex: 1, explanation: 'Mole ratio: 40/12 ≈ 3.33, 6.7/1 ≈ 6.7, 53.3/16 ≈ 3.33. Divide by 3.33 → 1 : 2 : 1 → CH₂O.', partNumber: 1, partTitle: 'Moles, Molar Mass & Empirical Formulas' },

  // Part 2 — Limiting Reagent & Reaction Types
  { id: 'mgst-ent-2a', question: 'For 2 H₂ + O₂ → 2 H₂O, you start with 4 mol H₂ and 1 mol O₂. The limiting reagent and theoretical yield of H₂O are:', options: ['H₂; 4 mol H₂O', 'O₂; 2 mol H₂O', 'H₂; 2 mol H₂O', 'O₂; 1 mol H₂O'], correctIndex: 1, explanation: 'O₂ requires 2× its moles of H₂. 1 mol O₂ needs 2 mol H₂ (have 4, plenty). O₂ is limiting → 2 mol H₂O.', partNumber: 2, partTitle: 'Limiting Reagent & Reaction Types' },
  { id: 'mgst-ent-2b', question: 'AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq) is best classified as a:', options: ['Combustion reaction', 'Acid-base neutralization', 'Precipitation (double-displacement) reaction', 'Single-displacement reaction'], correctIndex: 2, explanation: 'Two soluble salts swap partners; the insoluble AgCl precipitates out — a classic double-displacement / precipitation reaction.', partNumber: 2, partTitle: 'Limiting Reagent & Reaction Types' },

  // Part 3 — Solutions, Molarity & Colligative Properties
  { id: 'mgst-ent-3a', question: 'What is the molarity of a solution containing 0.50 mol of NaCl in 250 mL of solution?', options: ['0.5 M', '1.0 M', '2.0 M', '4.0 M'], correctIndex: 2, explanation: 'M = mol / L = 0.50 / 0.250 = 2.0 M.', partNumber: 3, partTitle: 'Solutions, Molarity & Colligative Properties' },
  { id: 'mgst-ent-3b', question: 'Which 1 m aqueous solution will have the lowest freezing point?', options: ['Glucose (non-electrolyte)', 'NaCl', 'CaCl₂', 'Sucrose (non-electrolyte)'], correctIndex: 2, explanation: 'ΔTf depends on van\'t Hoff factor i. CaCl₂ → 3 ions (i ≈ 3); NaCl → 2 (i ≈ 2); glucose & sucrose → 1. Highest i → lowest freezing point.', partNumber: 3, partTitle: 'Solutions, Molarity & Colligative Properties' },

  // Part 4 — Gas Laws & Electrochemistry
  { id: 'mgst-ent-4a', question: 'At constant temperature, doubling the pressure on an ideal gas:', options: ['Doubles its volume', 'Halves its volume', 'Has no effect on volume', 'Quadruples its volume'], correctIndex: 1, explanation: "Boyle's Law: P₁V₁ = P₂V₂. If P doubles, V is halved (inverse relationship at constant T and n).", partNumber: 4, partTitle: 'Gas Laws & Electrochemistry' },
  { id: 'mgst-ent-4b', question: 'In a galvanic (voltaic) cell, oxidation occurs at the:', options: ['Cathode, which is positive', 'Anode, which is negative', 'Anode, which is positive', 'Cathode, which is negative'], correctIndex: 1, explanation: 'In a galvanic cell, the anode is where oxidation happens and is the negative terminal (releases electrons to the external circuit).', partNumber: 4, partTitle: 'Gas Laws & Electrochemistry' },

  // Part 5 — Mixed MCAT Review
  { id: 'mgst-ent-5a', question: 'How many grams of NaOH (40 g/mol) are needed to make 500 mL of a 0.20 M solution?', options: ['2.0 g', '4.0 g', '8.0 g', '20 g'], correctIndex: 1, explanation: 'mol = M × V = 0.20 × 0.500 = 0.10 mol. Mass = 0.10 × 40 = 4.0 g.', partNumber: 5, partTitle: 'Mixed MCAT Review' },
  { id: 'mgst-ent-5b', question: 'For C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O, how many moles of CO₂ are produced from 2 mol C₃H₈ (excess O₂)?', options: ['2 mol', '3 mol', '5 mol', '6 mol'], correctIndex: 3, explanation: 'Stoichiometric ratio 1 : 3 (propane : CO₂). 2 mol × 3 = 6 mol CO₂.', partNumber: 5, partTitle: 'Mixed MCAT Review' },
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
