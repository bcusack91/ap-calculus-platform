/**
 * Entrance Quiz — Gibbs Free Energy
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 * Each pair tests what that part's lesson file actually teaches.
 *
 * Part mapping (registry title — what the part teaches):
 *  1 — Introduction to Gibbs Free Energy (ΔG = ΔH − TΔS; crossover temperature)
 *  2 — ΔG = ΔH − TΔS (the four ΔH/ΔS sign cases)
 *  3 — Spontaneity & Temperature (ΔG° from ΔG°f tables)
 *  4 — Standard Free Energy of Formation (ΔG° = −RT ln K)
 *  5 — Free Energy, K & Coupled Reactions (coupling; Q vs. K)
 *  6 — Problem-Solving Workshop (multi-step ΔG and K problems)
 *  7 — Synthesis & AP Review (K across temperatures; driving unfavorable reactions)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction to Gibbs Free Energy
  {
    id: 'gfe-ent-1a',
    question: 'At 298 K, a reaction has $\\Delta H = -92.0$ kJ and $\\Delta S = -199$ J/K. What is $\\Delta G$?',
    options: ['−151.3 kJ', '−32.7 kJ', '+59,210 kJ', '+151.3 kJ'],
    correctIndex: 1,
    explanation: '$\\Delta G = -92.0 - (298)(-0.199) = -92.0 + 59.3 = -32.7$ kJ. Dropping the sign of $\\Delta S$ gives $-151.3$ kJ, leaving $\\Delta S$ in J/K gives 59,210 kJ, and +151.3 kJ reverses the sign of $\\Delta H$ as well.',
    partNumber: 1,
    partTitle: 'Introduction to Gibbs Free Energy',
  },
  {
    id: 'gfe-ent-1b',
    question: 'For benzene, $\\Delta H_{\\text{vap}} = +30.7$ kJ/mol and $\\Delta S_{\\text{vap}} = +87.0$ J/(mol·K). At what temperature are liquid and vapor at equilibrium at 1 atm?',
    options: ['0.353 K', '80 K', '353 K', '2670 K'],
    correctIndex: 2,
    explanation: 'At equilibrium $\\Delta G = 0$, so $T = \\Delta H / \\Delta S = 30{,}700 / 87.0 = 353$ K. Leaving $\\Delta H$ in kJ gives 0.353 K, 80 is the Celsius value written as kelvins, and 2670 multiplies instead of dividing.',
    partNumber: 1,
    partTitle: 'Introduction to Gibbs Free Energy',
  },

  // Part 2: ΔG = ΔH − TΔS (the four sign cases)
  {
    id: 'gfe-ent-2a',
    question: 'A reaction is thermodynamically favored only above 600 K. What are the signs of $\\Delta H$ and $\\Delta S$?',
    options: [
      '$\\Delta H < 0$ and $\\Delta S < 0$',
      '$\\Delta H > 0$ and $\\Delta S < 0$',
      '$\\Delta H < 0$ and $\\Delta S > 0$',
      '$\\Delta H > 0$ and $\\Delta S > 0$',
    ],
    correctIndex: 3,
    explanation: 'Being favored only at high temperature means the $-T\\Delta S$ term must eventually beat an unfavorable $\\Delta H$, so $\\Delta H > 0$ and $\\Delta S > 0$. Both negative gives a low-temperature reaction, and the mixed-sign cases are favored always or never.',
    partNumber: 2,
    partTitle: 'ΔG = ΔH − TΔS',
  },
  {
    id: 'gfe-ent-2b',
    question: 'For $2\\text{NO}_2(g) \\rightarrow \\text{N}_2\\text{O}_4(g)$, $\\Delta H^\\circ = -57.2$ kJ. How does its thermodynamic favorability depend on temperature?',
    options: [
      'It is favored only below some temperature',
      'It is favored only at high temperature',
      'It is favored at every temperature',
      'It is not favored at any temperature',
    ],
    correctIndex: 0,
    explanation: 'Two moles of gas become one, so $\\Delta S < 0$; with $\\Delta H < 0$ as well, the favorable enthalpy wins only when $T$ is small. Being exothermic is not enough to guarantee favorability at every temperature.',
    partNumber: 2,
    partTitle: 'ΔG = ΔH − TΔS',
  },

  // Part 3: Spontaneity & Temperature (ΔG° from formation values)
  {
    id: 'gfe-ent-3a',
    question: 'Using $\\Delta G^\\circ_f$ values $\\text{CO}_2(g) = -394.4$, $\\text{H}_2\\text{O}(l) = -237.1$, and $\\text{C}_2\\text{H}_5\\text{OH}(l) = -174.8$ kJ/mol, find $\\Delta G^\\circ$ for $\\text{C}_2\\text{H}_5\\text{OH}(l) + 3\\text{O}_2(g) \\rightarrow 2\\text{CO}_2(g) + 3\\text{H}_2\\text{O}(l)$.',
    options: ['+1325.3 kJ', '−1674.9 kJ', '−1325.3 kJ', '−456.7 kJ'],
    correctIndex: 2,
    explanation: 'Products: $2(-394.4) + 3(-237.1) = -1500.1$ kJ; reactants: $-174.8 + 0 = -174.8$ kJ; so $\\Delta G^\\circ = -1500.1 + 174.8 = -1325.3$ kJ. Reactants minus products gives the positive value, adding the ethanol term gives $-1674.9$ kJ, and ignoring the coefficients gives $-456.7$ kJ.',
    partNumber: 3,
    partTitle: 'Spontaneity & Temperature',
  },
  {
    id: 'gfe-ent-3b',
    question: 'The standard free energy of formation of NO(g) is +86.6 kJ/mol at 298 K. What does this value tell you?',
    options: [
      'NO forms on its own when nitrogen and oxygen are mixed',
      'NO is an element in its standard state at 298 K',
      'NO must break down rapidly at room temperature',
      'NO breaking down into $\\text{N}_2$ and $\\text{O}_2$ is thermodynamically favored',
    ],
    correctIndex: 3,
    explanation: 'Forming NO from its elements has $\\Delta G^\\circ > 0$, so the reverse, decomposition into $\\text{N}_2$ and $\\text{O}_2$, has $\\Delta G^\\circ < 0$ and is favored. Favorability says nothing about speed, and only elements in their standard states have $\\Delta G^\\circ_f = 0$.',
    partNumber: 3,
    partTitle: 'Spontaneity & Temperature',
  },

  // Part 4: Standard Free Energy of Formation (ΔG° = −RT ln K)
  {
    id: 'gfe-ent-4a',
    question: 'At 298 K, a reaction has $K = 4.5 \\times 10^3$. What is $\\Delta G^\\circ$? ($R = 8.314$ J/(mol·K))',
    options: ['−20.8 kJ/mol', '+20.8 kJ/mol', '−9.05 kJ/mol', '−20,800 kJ/mol'],
    correctIndex: 0,
    explanation: '$\\Delta G^\\circ = -RT\\ln K = -(8.314)(298)\\ln(4500) = -20{,}800$ J/mol $= -20.8$ kJ/mol, negative because $K > 1$. Dropping the minus sign gives +20.8, using $\\log$ instead of $\\ln$ gives $-9.05$, and reporting joules as kilojoules gives $-20{,}800$.',
    partNumber: 4,
    partTitle: 'Standard Free Energy of Formation',
  },
  {
    id: 'gfe-ent-4b',
    question: 'At 298 K, a reaction has $\\Delta G^\\circ = +8.0$ kJ/mol. What is $K$? ($R = 8.314$ J/(mol·K))',
    options: ['25', '0.040', '1.00', '−3.2'],
    correctIndex: 1,
    explanation: '$K = e^{-\\Delta G^\\circ/RT} = e^{-8000/2478} = e^{-3.23} = 0.040$, less than 1 because $\\Delta G^\\circ > 0$. Flipping the sign gives 25, leaving $\\Delta G^\\circ$ in kJ gives about 1.00, and $-3.2$ is $\\ln K$, not $K$.',
    partNumber: 4,
    partTitle: 'Standard Free Energy of Formation',
  },

  // Part 5: Free Energy, K & Coupled Reactions
  {
    id: 'gfe-ent-5a',
    question: 'Given $\\text{Fe}_2\\text{O}_3(s) \\rightarrow 2\\text{Fe}(s) + \\tfrac{3}{2}\\text{O}_2(g)$, $\\Delta G^\\circ = +742$ kJ, and $\\text{CO}(g) + \\tfrac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}_2(g)$, $\\Delta G^\\circ = -257$ kJ, what is $\\Delta G^\\circ$ for $\\text{Fe}_2\\text{O}_3(s) + 3\\text{CO}(g) \\rightarrow 2\\text{Fe}(s) + 3\\text{CO}_2(g)$?',
    options: ['+485 kJ', '+1513 kJ', '+999 kJ', '−29 kJ'],
    correctIndex: 3,
    explanation: 'Add the first reaction to three times the second so the oxygen cancels: $742 + 3(-257) = -29$ kJ, so coupling makes iron production favored. Forgetting the factor of 3 gives +485 kJ, and subtracting instead of adding gives +1513 kJ (or +999 kJ without the factor of 3).',
    partNumber: 5,
    partTitle: 'Free Energy, K & Coupled Reactions',
  },
  {
    id: 'gfe-ent-5b',
    question: 'A reaction has $\\Delta G^\\circ = -17$ kJ/mol at 298 K, so $K \\approx 10^3$. A mixture has $Q = 5 \\times 10^4$. What happens?',
    options: [
      'The net reaction runs in reverse, since Q > K',
      'The net reaction runs forward, since ΔG° < 0',
      'Nothing changes, since ΔG° sets direction',
      'The net reaction runs forward, since Q > 1',
    ],
    correctIndex: 0,
    explanation: 'The direction for a particular mixture comes from comparing $Q$ with $K$: here $Q$ is about 50 times $K$, so there is too much product and the net reaction runs in reverse. A negative $\\Delta G^\\circ$ only says that $K > 1$.',
    partNumber: 5,
    partTitle: 'Free Energy, K & Coupled Reactions',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'gfe-ent-6a',
    question: 'For $\\text{C}(s) + \\text{H}_2\\text{O}(g) \\rightarrow \\text{CO}(g) + \\text{H}_2(g)$, $\\Delta H^\\circ = +131$ kJ and $\\Delta S^\\circ = +134$ J/K. Assuming these do not change with temperature, what are $\\Delta G^\\circ$ and the size of $K$ at 1200 K?',
    options: [
      '$\\Delta G^\\circ = +29.8$ kJ; $K < 1$',
      '$\\Delta G^\\circ = +291.8$ kJ; $K < 1$',
      '$\\Delta G^\\circ = -29.8$ kJ; $K > 1$',
      '$\\Delta G^\\circ = -160{,}669$ kJ; $K > 1$',
    ],
    correctIndex: 2,
    explanation: '$\\Delta G^\\circ = 131 - (1200)(0.134) = 131 - 160.8 = -29.8$ kJ, and a negative $\\Delta G^\\circ$ means $K > 1$. Adding the $T\\Delta S$ term gives +291.8 kJ, and leaving $\\Delta S$ in J/K gives the absurd $-160{,}669$ kJ.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'gfe-ent-6b',
    question: 'A reaction has $\\Delta G^\\circ = -15.0$ kJ/mol at 350 K. What is $K$ at that temperature? ($R = 8.314$ J/(mol·K))',
    options: ['0.00577', '1.01', '173', '5.15'],
    correctIndex: 2,
    explanation: '$K = e^{15{,}000/(8.314 \\times 350)} = e^{5.15} = 173$. A sign error gives 0.00577, leaving $\\Delta G^\\circ$ in kJ gives 1.01, and 5.15 is $\\ln K$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'gfe-ent-7a',
    question: 'A reaction has $\\Delta H^\\circ = -45$ kJ and $\\Delta S^\\circ = -140$ J/K (assume both are constant). Which describes $K$ at 298 K and at 400 K?',
    options: [
      'K > 1 at 298 K, and K < 1 at 400 K',
      'K > 1 at both 298 K and 400 K',
      'K < 1 at 298 K, and K > 1 at 400 K',
      'K < 1 at both 298 K and 400 K',
    ],
    correctIndex: 0,
    explanation: 'At 298 K, $\\Delta G^\\circ = -45 + (298)(0.140) = -3.3$ kJ, so $K > 1$; at 400 K, $\\Delta G^\\circ = -45 + (400)(0.140) = +11$ kJ, so $K < 1$. With both signs negative, raising the temperature makes the reaction less favored.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'gfe-ent-7b',
    question: 'Splitting water into hydrogen and oxygen has $\\Delta G^\\circ = +237$ kJ/mol at 298 K. How can the reaction be made to produce significant amounts of hydrogen?',
    options: [
      'Add a catalyst so that $\\Delta G^\\circ$ becomes negative',
      'Supply electrical energy from an outside source',
      'Cool the water until the reaction is favored',
      'Wait long enough for products to build up',
    ],
    correctIndex: 1,
    explanation: 'An unfavorable process can be driven by an external energy source, here electricity in an electrolytic cell. A catalyst changes only the rate, never $\\Delta G^\\circ$, and with $K$ so tiny, waiting produces essentially no hydrogen.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the gibbs-free-energy topic.
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
    { partNumber: 1, partTitle: 'Introduction to Gibbs Free Energy' },
    { partNumber: 2, partTitle: 'ΔG = ΔH − TΔS' },
    { partNumber: 3, partTitle: 'Spontaneity & Temperature' },
    { partNumber: 4, partTitle: 'Standard Free Energy of Formation' },
    { partNumber: 5, partTitle: 'Free Energy, K & Coupled Reactions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
