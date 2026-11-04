/**
 * Entrance Quiz — Stoichiometry: Moles & Reactions (MCAT)
 * 6 questions · 2 parts (3 / 3)
 * Part titles match the interactive lesson's "Part N of 2" lines.
 * Solutions, colligative properties, gas laws and electrolysis moved to
 * mcat-general-chemistry-solutions-gases-mcat when the topic was split (Nov 2026).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = "Moles, Molar Mass & Avogadro's Number"
const P2 = 'Limiting Reagent, Percent Yield & Reaction Types'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Moles, Molar Mass & Avogadro's Number
  { id: 'mgst-ent-1a', question: 'How many moles are in 36 g of water (molar mass ≈ 18 g/mol)?', options: ['0.5 mol', '1 mol', '2 mol', '4 mol'], correctIndex: 2, explanation: '$n = m/M = 36/18 = 2$ mol. Half a mole comes from dividing the molar mass by the mass, the wrong way round.', partNumber: 1, partTitle: P1 },
  { id: 'mgst-ent-1b', question: 'At STP, which gas has the greatest density?', options: ['$\\text{CO}_2$', '$\\text{O}_2$', '$\\text{Ne}$', '$\\text{CH}_4$'], correctIndex: 0, explanation: 'One mole of any ideal gas fills 22.4 L at STP, so a gas\'s density is $M/22.4$ and the heaviest molecule is the densest: $\\text{CO}_2$ (44 g/mol, about 1.96 g/L) beats $\\text{O}_2$ (32), Ne (20) and $\\text{CH}_4$ (16).', partNumber: 1, partTitle: P1 },
  { id: 'mgst-ent-1c', question: 'What is the percent oxygen by mass in carbon dioxide, $\\text{CO}_2$? (C = 12.0, O = 16.0)', options: ['27.3%', '36.4%', '57.1%', '72.7%'], correctIndex: 3, explanation: '$\\text{CO}_2$ has a molar mass of $12.0 + 2(16.0) = 44.0$ g/mol and holds two O atoms: $32.0/44.0 \\times 100 = 72.7\\%$. Counting only one O gives 36.4%, 27.3% is the carbon share, and 57.1% is the oxygen share of CO.', partNumber: 1, partTitle: P1 },

  // Part 2 — Limiting Reagent, Percent Yield & Reaction Types
  { id: 'mgst-ent-2a', question: 'For $2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$, a flask starts with 4 mol $\\text{H}_2$ and 1 mol $\\text{O}_2$. Which is the limiting reagent, and what is the theoretical yield of water?', options: ['$\\text{H}_2$; 4 mol $\\text{H}_2\\text{O}$', '$\\text{O}_2$; 2 mol $\\text{H}_2\\text{O}$', '$\\text{H}_2$; 2 mol $\\text{H}_2\\text{O}$', '$\\text{O}_2$; 1 mol $\\text{H}_2\\text{O}$'], correctIndex: 1, explanation: 'Divide each amount by its coefficient: $\\text{H}_2$ gives $4/2 = 2$ and $\\text{O}_2$ gives $1/1 = 1$, so $\\text{O}_2$ runs out first. One mole of $\\text{O}_2$ makes 2 mol of water and uses only 2 of the 4 mol $\\text{H}_2$; four moles of water would need 2 mol $\\text{O}_2$.', partNumber: 2, partTitle: P2 },
  { id: 'mgst-ent-2b', question: '$\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\to \\text{AgCl}(s) + \\text{NaNO}_3(aq)$ is best classified as:', options: ['A combustion reaction', 'An acid-base neutralization', 'A double-displacement reaction', 'A single-displacement reaction'], correctIndex: 2, explanation: 'Two soluble salts swap partners and the insoluble AgCl precipitates: $AB + CD \\to AD + CB$, a double displacement. No element replaces another on its own (single displacement), no hydrocarbon burns, and no $\\text{H}^+$ meets $\\text{OH}^-$.', partNumber: 2, partTitle: P2 },
  { id: 'mgst-ent-2c', question: 'A chemist needs 30.0 g of product from a reaction that reliably gives a 75.0% yield. What theoretical yield must the limiting reagent support?', options: ['52.5 g', '40.0 g', '30.0 g', '22.5 g'], correctIndex: 1, explanation: 'Percent yield = actual/theoretical × 100, so theoretical = $30.0/0.750 = 40.0$ g. Multiplying instead ($30.0 \\times 0.750 = 22.5$ g) treats the needed mass as the theoretical yield, and 52.5 g adds 75% of 30.0 g on top rather than dividing.', partNumber: 2, partTitle: P2 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
  ]
}
