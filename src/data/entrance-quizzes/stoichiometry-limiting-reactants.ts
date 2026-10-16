/**
 * Entrance Quiz — Stoichiometry & Limiting Reactants
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Mole Ratios (mole-to-mole conversions from coefficients)
 *  2 — Mass-to-Mass Stoichiometry (grams → moles → moles → grams)
 *  3 — Limiting Reactant (product comparison; excess remaining)
 *  4 — Theoretical, Actual, and Percent Yield
 *  5 — Solution Stoichiometry (n = MV; titration and precipitate amounts)
 *  6 — Problem-Solving Workshop (limiting reactant + yield chains)
 *  7 — Synthesis & AP Review (mixed-solution limiting reactant; justifying claims)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Mole Ratios
  {
    id: 'slr-ent-1a',
    question: 'For $4\\text{NH}_3 + 5\\text{O}_2 \\rightarrow 4\\text{NO} + 6\\text{H}_2\\text{O}$, how many moles of $\\text{O}_2$ are needed to react completely with 2.4 mol of $\\text{NH}_3$?',
    options: ['1.9 mol', '2.4 mol', '3.0 mol', '3.6 mol'],
    correctIndex: 2,
    explanation: '$2.4 \\times \\frac{5}{4} = 3.0$ mol $\\text{O}_2$. Flipping the ratio gives 1.9 mol, a 1:1 ratio gives 2.4 mol, and using the water coefficient instead of oxygen\'s gives 3.6 mol.',
    partNumber: 1,
    partTitle: 'Mole Ratios',
  },
  {
    id: 'slr-ent-1b',
    question: 'For $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$, a sample produces 0.60 mol of $\\text{CO}_2$. How many moles of $\\text{O}_2$ were consumed?',
    options: ['1.0 mol', '0.36 mol', '0.60 mol', '0.20 mol'],
    correctIndex: 0,
    explanation: '$0.60 \\times \\frac{5}{3} = 1.0$ mol $\\text{O}_2$. Inverting the ratio gives 0.36 mol, treating the two gases as 1:1 gives 0.60 mol, and 0.20 mol is the propane consumed, not the oxygen.',
    partNumber: 1,
    partTitle: 'Mole Ratios',
  },

  // Part 2: Mass-to-Mass Stoichiometry
  {
    id: 'slr-ent-2a',
    question: 'For $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$, what mass of $\\text{NH}_3$ ($M = 17.03$ g/mol) forms from 6.05 g of $\\text{H}_2$ ($M = 2.016$ g/mol) with excess $\\text{N}_2$?',
    options: ['6.05 g', '34.1 g', '51.1 g', '76.7 g'],
    correctIndex: 1,
    explanation: '$6.05 / 2.016 = 3.00$ mol $\\text{H}_2$, times $\\frac{2}{3}$ gives 2.00 mol $\\text{NH}_3$, which is 34.1 g. A 1:1 ratio gives 51.1 g, the inverted ratio gives 76.7 g, and 6.05 g wrongly assumes the hydrogen mass carries straight over.',
    partNumber: 2,
    partTitle: 'Mass-to-Mass Stoichiometry',
  },
  {
    id: 'slr-ent-2b',
    question: 'For $2\\text{C}_2\\text{H}_6 + 7\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 6\\text{H}_2\\text{O}$, what mass of $\\text{O}_2$ ($M = 32.00$ g/mol) is needed to burn 15.0 g of $\\text{C}_2\\text{H}_6$ ($M = 30.07$ g/mol)?',
    options: ['4.56 g', '16.0 g', '112 g', '55.9 g'],
    correctIndex: 3,
    explanation: '$15.0 / 30.07 = 0.499$ mol ethane, times $\\frac{7}{2}$ gives 1.75 mol $\\text{O}_2$, which is 55.9 g. A 1:1 ratio gives 16.0 g, the inverted ratio gives 4.56 g, and multiplying by 7 without dividing by 2 gives 112 g.',
    partNumber: 2,
    partTitle: 'Mass-to-Mass Stoichiometry',
  },

  // Part 3: Limiting Reactant
  {
    id: 'slr-ent-3a',
    question: 'For $2\\text{Al} + 3\\text{Br}_2 \\rightarrow 2\\text{AlBr}_3$, a mixture contains 0.50 mol Al and 0.60 mol $\\text{Br}_2$. Which reactant is limiting, and how much $\\text{AlBr}_3$ can form?',
    options: [
      '$\\text{Br}_2$ is limiting; 0.40 mol forms',
      'Al is limiting; 0.50 mol forms',
      '$\\text{Br}_2$ is limiting; 0.60 mol forms',
      'Al is limiting; 0.33 mol forms',
    ],
    correctIndex: 0,
    explanation: 'Aluminum could make 0.50 mol of product, but bromine could make only $0.60 \\times \\frac{2}{3} = 0.40$ mol, so bromine runs out first. Having fewer moles does not make aluminum limiting, because bromine is consumed 1.5 times as fast.',
    partNumber: 3,
    partTitle: 'Limiting Reactant',
  },
  {
    id: 'slr-ent-3b',
    question: 'For $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$, 3.0 mol $\\text{N}_2$ and 6.0 mol $\\text{H}_2$ react until one runs out. What remains of the excess reactant?',
    options: [
      '2.0 mol of $\\text{N}_2$',
      '3.0 mol of $\\text{H}_2$',
      '1.0 mol of $\\text{N}_2$',
      '1.0 mol of $\\text{H}_2$',
    ],
    correctIndex: 2,
    explanation: 'Hydrogen is limiting (6.0 mol needs only 2.0 mol $\\text{N}_2$), so 2.0 mol of nitrogen is consumed and $3.0 - 2.0 = 1.0$ mol remains. The 2.0 mol is the amount used, not left, and subtracting the starting moles directly treats the ratio as 1:1.',
    partNumber: 3,
    partTitle: 'Limiting Reactant',
  },

  // Part 4: Theoretical, Actual, and Percent Yield
  {
    id: 'slr-ent-4a',
    question: 'A student reacts 5.00 g of $\\text{CaCO}_3$ ($M = 100.09$ g/mol) with excess HCl: $\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$. She collects 1.98 g of $\\text{CO}_2$ ($M = 44.01$ g/mol). What is the percent yield?',
    options: ['39.6%', '45.0%', '90.1%', '111%'],
    correctIndex: 2,
    explanation: 'The theoretical yield is $0.04996 \\text{ mol} \\times 44.01 = 2.20$ g, so the yield is $1.98 / 2.20 \\times 100 = 90.1\\%$. Dividing by the reactant mass gives 39.6%, inverting gives 111%, and borrowing the 2 from HCl doubles the theoretical yield to give 45.0%.',
    partNumber: 4,
    partTitle: 'Theoretical, Actual, and Percent Yield',
  },
  {
    id: 'slr-ent-4b',
    question: 'A two-step synthesis has yields of 75% and 80%. To end with 12.0 g of final product, what theoretical yield must the starting materials be able to give?',
    options: ['7.20 g', '15.0 g', '16.0 g', '20.0 g'],
    correctIndex: 3,
    explanation: 'The overall yield is $0.75 \\times 0.80 = 0.60$, so the target is $12.0 / 0.60 = 20.0$ g. Multiplying instead of dividing gives 7.20 g, and correcting for only one step gives 15.0 g or 16.0 g.',
    partNumber: 4,
    partTitle: 'Theoretical, Actual, and Percent Yield',
  },

  // Part 5: Solution Stoichiometry
  {
    id: 'slr-ent-5a',
    question: 'What volume of 0.150 M $\\text{H}_2\\text{SO}_4$ exactly neutralizes 30.0 mL of 0.200 M NaOH? ($\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$)',
    options: ['20.0 mL', '40.0 mL', '22.5 mL', '10.0 mL'],
    correctIndex: 0,
    explanation: 'NaOH is $0.200 \\times 0.0300 = 0.00600$ mol, which needs 0.00300 mol of acid, and $0.00300 / 0.150 = 0.0200$ L $= 20.0$ mL. Ignoring the 1:2 ratio gives 40.0 mL, and $M_1V_1 = M_2V_2$ with the molarities swapped gives 22.5 mL.',
    partNumber: 5,
    partTitle: 'Solution Stoichiometry',
  },
  {
    id: 'slr-ent-5b',
    question: 'Excess NaCl solution is added to 40.0 mL of 0.250 M $\\text{AgNO}_3$. What mass of AgCl ($M = 143.32$ g/mol) precipitates?',
    options: ['0.717 g', '1.43 g', '2.87 g', '14.3 g'],
    correctIndex: 1,
    explanation: '$0.250 \\times 0.0400 = 0.0100$ mol $\\text{Ag}^+$ gives 0.0100 mol AgCl, or 1.43 g. Writing 40.0 mL as 0.400 L gives 14.3 g, and halving or doubling the 1:1 ratio gives 0.717 g or 2.87 g.',
    partNumber: 5,
    partTitle: 'Solution Stoichiometry',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'slr-ent-6a',
    question: 'For $\\text{Zn} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2$, 6.54 g of Zn ($M = 65.38$ g/mol) is added to 100.0 mL of 1.50 M HCl. What is the theoretical yield of $\\text{ZnCl}_2$ ($M = 136.29$ g/mol)?',
    options: ['6.81 g', '10.2 g', '13.6 g', '20.4 g'],
    correctIndex: 1,
    explanation: 'Zinc is 0.100 mol and could make 0.100 mol of product, but HCl is 0.150 mol and could make only 0.0750 mol, so HCl is limiting: $0.0750 \\times 136.29 = 10.2$ g. Zinc as the limiting reactant gives 13.6 g, a 1:1 ratio for HCl gives 20.4 g, and subtracting the two mole amounts gives 6.81 g.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'slr-ent-6b',
    question: 'For $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$, 32.0 g of $\\text{Fe}_2\\text{O}_3$ ($M = 159.7$ g/mol) reacts with 14.0 g of CO ($M = 28.01$ g/mol), and the percent yield is 85.0%. What mass of Fe ($M = 55.85$ g/mol) is collected?',
    options: ['18.6 g', '19.0 g', '21.9 g', '15.8 g'],
    correctIndex: 3,
    explanation: 'CO (0.500 mol) can make only 0.333 mol Fe, less than the 0.401 mol from the oxide, so CO is limiting: 18.6 g theoretical, and $18.6 \\times 0.850 = 15.8$ g. The value 18.6 g skips the yield, 19.0 g uses the oxide as limiting, and 21.9 g divides by the yield.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'slr-ent-7a',
    question: 'A student mixes 50.0 mL of 0.200 M $\\text{BaCl}_2$ with 30.0 mL of 0.250 M $\\text{Na}_2\\text{SO}_4$, and $\\text{BaSO}_4$ ($M = 233.4$ g/mol) precipitates. What is the maximum mass of precipitate?',
    options: ['0.875 g', '2.33 g', '1.75 g', '4.08 g'],
    correctIndex: 2,
    explanation: 'Barium is 0.0100 mol and sulfate is 0.00750 mol; they combine 1:1, so sulfate is limiting and $0.00750 \\times 233.4 = 1.75$ g. Using barium gives 2.33 g, and adding the two mole amounts gives 4.08 g.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'slr-ent-7b',
    question: 'For $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$, a student starts with 1.5 mol $\\text{H}_2$ and 1.0 mol $\\text{O}_2$ and claims that oxygen is limiting because there is less of it. Which evaluation is correct?',
    options: [
      'Correct; the reactant with fewer moles always runs out first',
      'Correct; oxygen can form only half as much water as hydrogen',
      'Incorrect; neither is limiting since both run out together',
      'Incorrect; hydrogen is limiting because it can form less water',
    ],
    correctIndex: 3,
    explanation: 'Hydrogen can form 1.5 mol of water, while oxygen can form 2.0 mol, so hydrogen runs out first and 0.25 mol of oxygen is left over. Comparing starting moles ignores the 2:1 ratio in the balanced equation.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the stoichiometry-limiting-reactants topic.
 * Returns all 14 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Mole Ratios' },
    { partNumber: 2, partTitle: 'Mass-to-Mass Stoichiometry' },
    { partNumber: 3, partTitle: 'Limiting Reactant' },
    { partNumber: 4, partTitle: 'Theoretical, Actual, and Percent Yield' },
    { partNumber: 5, partTitle: 'Solution Stoichiometry' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
