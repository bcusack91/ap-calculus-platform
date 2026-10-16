/**
 * Entrance Quiz — Oxidation-Reduction Reactions
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Oxidation States (sum rule; hydride and peroxide exceptions)
 *  2 — Identifying Redox Reactions (species oxidized/reduced; electrons transferred)
 *  3 — The Half-Reaction Method (acidic solution)
 *  4 — Balancing Redox in Basic Solution (converting H+ with OH−)
 *  5 — Redox Stoichiometry & Titrations (mole ratios from the balanced equation)
 *  6 — Problem-Solving Workshop (mixed balancing in acid and base)
 *  7 — Synthesis & AP Review (redox in galvanic cells; predicting observations)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Oxidation States
  {
    id: 'orr-ent-1a',
    question: 'What is the oxidation state of sulfur in the thiosulfate ion, $\\text{S}_2\\text{O}_3^{2-}$?',
    options: ['+4', '+2', '+6', '−2'],
    correctIndex: 1,
    explanation: 'Oxygen is −2, so $2\\text{S} + 3(-2) = -2$, giving $2\\text{S} = +4$ and S = +2. The value +4 forgets to divide by the two sulfur atoms, and +6 is sulfur in sulfate.',
    partNumber: 1,
    partTitle: 'Oxidation States',
  },
  {
    id: 'orr-ent-1b',
    question: 'In which compound does hydrogen have an oxidation state of −1?',
    options: ['$\\text{NH}_3$', '$\\text{H}_2\\text{O}_2$', 'HF', '$\\text{CaH}_2$'],
    correctIndex: 3,
    explanation: 'In a metal hydride such as calcium hydride, calcium is +2, so each hydrogen must be −1. In ammonia, hydrogen peroxide, and hydrogen fluoride, hydrogen is bonded to a nonmetal and is +1.',
    partNumber: 1,
    partTitle: 'Oxidation States',
  },

  // Part 2: Identifying Redox Reactions
  {
    id: 'orr-ent-2a',
    question: 'For $2\\text{MnO}_4^- + 5\\text{SO}_3^{2-} + 6\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 5\\text{SO}_4^{2-} + 3\\text{H}_2\\text{O}$, which statement is correct?',
    options: [
      'Sulfite is reduced, and permanganate is oxidized',
      'Sulfite is oxidized, and permanganate is reduced',
      'Hydrogen ion is reduced, and sulfite is oxidized',
      'Oxygen is oxidized, and manganese is reduced',
    ],
    correctIndex: 1,
    explanation: 'Sulfur rises from +4 in sulfite to +6 in sulfate, so sulfite is oxidized, and manganese falls from +7 to +2, so permanganate is reduced. Hydrogen stays +1 and oxygen stays −2 throughout.',
    partNumber: 2,
    partTitle: 'Identifying Redox Reactions',
  },
  {
    id: 'orr-ent-2b',
    question: 'How many electrons are transferred in total in the balanced reaction $\\text{Ni}(s) + 2\\text{Ag}^+(aq) \\rightarrow \\text{Ni}^{2+}(aq) + 2\\text{Ag}(s)$?',
    options: ['2', '1', '3', '4'],
    correctIndex: 0,
    explanation: 'Nickel loses 2 electrons, and the two silver ions gain 1 each, so 2 electrons move in total. One electron is the change per silver ion, and 4 counts the electrons lost and gained separately.',
    partNumber: 2,
    partTitle: 'Identifying Redox Reactions',
  },

  // Part 3: The Half-Reaction Method
  {
    id: 'orr-ent-3a',
    question: 'The half-reaction $\\text{ClO}_3^- \\rightarrow \\text{Cl}^-$ is balanced in acidic solution. How many electrons does it need, and on which side?',
    options: [
      '6 electrons on the product side',
      '5 electrons on the reactant side',
      '4 electrons on the reactant side',
      '6 electrons on the reactant side',
    ],
    correctIndex: 3,
    explanation: '$\\text{ClO}_3^- + 6\\text{H}^+ + 6e^- \\rightarrow \\text{Cl}^- + 3\\text{H}_2\\text{O}$: the left side carries +5 before electrons and the right side −1, so six electrons are gained, which matches chlorine going from +5 to −1. A reduction always has its electrons on the reactant side.',
    partNumber: 3,
    partTitle: 'The Half-Reaction Method',
  },
  {
    id: 'orr-ent-3b',
    question: 'Balance in acidic solution: $\\text{MnO}_4^- + \\text{H}_2\\text{O}_2 \\rightarrow \\text{Mn}^{2+} + \\text{O}_2$. What is the coefficient of $\\text{H}^+$ in the balanced equation?',
    options: ['6', '8', '10', '16'],
    correctIndex: 0,
    explanation: 'Doubling $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ and multiplying $\\text{H}_2\\text{O}_2 \\rightarrow \\text{O}_2 + 2\\text{H}^+ + 2e^-$ by 5, then canceling 10 $\\text{H}^+$, gives $2\\text{MnO}_4^- + 5\\text{H}_2\\text{O}_2 + 6\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 5\\text{O}_2 + 8\\text{H}_2\\text{O}$. Forgetting the protons released by the peroxide gives 16, and 10 is the electron count.',
    partNumber: 3,
    partTitle: 'The Half-Reaction Method',
  },

  // Part 4: Balancing Redox in Basic Solution
  {
    id: 'orr-ent-4a',
    question: 'In acid, a reaction balances as $2\\text{MnO}_4^- + 3\\text{SO}_3^{2-} + 2\\text{H}^+ \\rightarrow 2\\text{MnO}_2 + 3\\text{SO}_4^{2-} + \\text{H}_2\\text{O}$. After converting it to basic solution, which species appear besides the manganese and sulfur ions?',
    options: [
      '$2\\text{OH}^-$ on the left and $\\text{H}_2\\text{O}$ on the right',
      '$\\text{H}_2\\text{O}$ on the left and $2\\text{OH}^-$ on the right',
      '$2\\text{H}^+$ on the left and $2\\text{OH}^-$ on the right',
      '$3\\text{H}_2\\text{O}$ on the left and $2\\text{OH}^-$ on the right',
    ],
    correctIndex: 1,
    explanation: 'Adding $2\\text{OH}^-$ to both sides turns the $2\\text{H}^+$ into 2 water molecules on the left; canceling one water from each side leaves one $\\text{H}_2\\text{O}$ on the left and $2\\text{OH}^-$ on the right. A basic equation can contain no $\\text{H}^+$.',
    partNumber: 4,
    partTitle: 'Balancing Redox in Basic Solution',
  },
  {
    id: 'orr-ent-4b',
    question: 'The half-reaction $\\text{CrO}_4^{2-} \\rightarrow \\text{Cr(OH)}_3$ is balanced in basic solution. How many hydroxide ions appear, and on which side?',
    options: [
      '5 on the reactant side',
      '4 on the product side',
      '5 on the product side',
      '3 on the product side',
    ],
    correctIndex: 2,
    explanation: 'In acid it is $\\text{CrO}_4^{2-} + 5\\text{H}^+ + 3e^- \\rightarrow \\text{Cr(OH)}_3 + \\text{H}_2\\text{O}$; adding 5 $\\text{OH}^-$ to both sides and canceling water gives $\\text{CrO}_4^{2-} + 4\\text{H}_2\\text{O} + 3e^- \\rightarrow \\text{Cr(OH)}_3 + 5\\text{OH}^-$. The hydroxide ends up opposite the side where the $\\text{H}^+$ was.',
    partNumber: 4,
    partTitle: 'Balancing Redox in Basic Solution',
  },

  // Part 5: Redox Stoichiometry & Titrations
  {
    id: 'orr-ent-5a',
    question: 'A 10.00 mL sample of hydrogen peroxide is titrated with 0.0200 M $\\text{KMnO}_4$: $2\\text{MnO}_4^- + 5\\text{H}_2\\text{O}_2 + 6\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 5\\text{O}_2 + 8\\text{H}_2\\text{O}$. The faint pink endpoint appears at 16.00 mL. What is $[\\text{H}_2\\text{O}_2]$?',
    options: ['0.0128 M', '0.0320 M', '0.0800 M', '0.160 M'],
    correctIndex: 2,
    explanation: 'Permanganate is $0.0200 \\times 0.01600 = 3.20 \\times 10^{-4}$ mol, times $\\frac{5}{2}$ gives $8.00 \\times 10^{-4}$ mol peroxide in 0.01000 L, or 0.0800 M. Inverting the ratio gives 0.0128 M, a 1:1 ratio gives 0.0320 M, and multiplying by 5 without dividing by 2 gives 0.160 M.',
    partNumber: 5,
    partTitle: 'Redox Stoichiometry & Titrations',
  },
  {
    id: 'orr-ent-5b',
    question: 'An iron ore sample is dissolved so all its iron is $\\text{Fe}^{2+}$, then titrated with 22.0 mL of 0.0150 M $\\text{KMnO}_4$ ($\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$). What mass of iron ($M = 55.85$ g/mol) was in the sample?',
    options: ['0.00369 g', '0.0184 g', '0.461 g', '0.0922 g'],
    correctIndex: 3,
    explanation: 'Permanganate is $3.30 \\times 10^{-4}$ mol, so iron is $5 \\times 3.30 \\times 10^{-4} = 1.65 \\times 10^{-3}$ mol, or 0.0922 g. A 1:1 ratio gives 0.0184 g, dividing by 5 gives 0.00369 g, and applying the factor of 5 twice gives 0.461 g.',
    partNumber: 5,
    partTitle: 'Redox Stoichiometry & Titrations',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'orr-ent-6a',
    question: 'Balance in acidic solution: $\\text{Cu} + \\text{NO}_3^- \\rightarrow \\text{Cu}^{2+} + \\text{NO}_2$. What is the coefficient of $\\text{H}^+$?',
    options: ['2', '4', '6', '8'],
    correctIndex: 1,
    explanation: 'Each nitrate gains one electron ($\\text{NO}_3^- + 2\\text{H}^+ + e^- \\rightarrow \\text{NO}_2 + \\text{H}_2\\text{O}$), so two nitrates balance the two electrons copper loses: $\\text{Cu} + 2\\text{NO}_3^- + 4\\text{H}^+ \\rightarrow \\text{Cu}^{2+} + 2\\text{NO}_2 + 2\\text{H}_2\\text{O}$. The value 8 belongs to the reaction that makes NO instead of $\\text{NO}_2$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'orr-ent-6b',
    question: 'In basic solution, hypochlorite oxidizes chromium: $\\text{ClO}^- + \\text{Cr(OH)}_4^- \\rightarrow \\text{Cl}^- + \\text{CrO}_4^{2-}$. In the balanced equation, what is the mole ratio of $\\text{ClO}^-$ to $\\text{Cr(OH)}_4^-$?',
    options: ['3 : 2', '2 : 3', '1 : 1', '3 : 1'],
    correctIndex: 0,
    explanation: 'Chlorine goes from +1 to −1, gaining 2 electrons, and chromium goes from +3 to +6, losing 3. Six electrons balance with 3 hypochlorite ions and 2 chromium species, a 3 : 2 ratio; the 2 : 3 ratio pairs the electron counts the wrong way round.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'orr-ent-7a',
    question: 'A galvanic cell is built from Ni|$\\text{Ni}^{2+}$ ($E^\\circ = -0.26$ V) and Ag|$\\text{Ag}^+$ ($E^\\circ = +0.80$ V) half-cells. Which statement is correct?',
    options: [
      'Silver is the anode, and $E^\\circ_{\\text{cell}} = +1.06$ V',
      'Nickel is the anode, and $E^\\circ_{\\text{cell}} = +0.54$ V',
      'Nickel is the anode, and $E^\\circ_{\\text{cell}} = +1.86$ V',
      'Nickel is the anode, and $E^\\circ_{\\text{cell}} = +1.06$ V',
    ],
    correctIndex: 3,
    explanation: 'Nickel has the lower reduction potential, so it is oxidized at the anode, and $E^\\circ_{\\text{cell}} = 0.80 - (-0.26) = +1.06$ V. Doubling the silver potential for the coefficient 2 gives 1.86 V, and simply adding the two values gives 0.54 V.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'orr-ent-7b',
    question: 'An iron nail is placed in blue $\\text{CuSO}_4$ solution. ($\\text{Cu}^{2+}/\\text{Cu}$: $E^\\circ = +0.34$ V; $\\text{Fe}^{2+}/\\text{Fe}$: $E^\\circ = -0.45$ V.) What is observed?',
    options: [
      'Nothing happens, because the cell potential is negative',
      'Hydrogen bubbles form while the nail stays clean',
      'Copper coats the nail and the blue color fades',
      'Iron dissolves and the solution turns deeper blue',
    ],
    correctIndex: 2,
    explanation: 'Copper(II) has the higher reduction potential, so $\\text{Fe} + \\text{Cu}^{2+} \\rightarrow \\text{Fe}^{2+} + \\text{Cu}$ runs with $E^\\circ = +0.79$ V: copper metal plates onto the nail and the blue copper(II) ions are used up. No hydrogen ions are being reduced here.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the oxidation-reduction-reactions topic.
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
    { partNumber: 1, partTitle: 'Oxidation States' },
    { partNumber: 2, partTitle: 'Identifying Redox Reactions' },
    { partNumber: 3, partTitle: 'The Half-Reaction Method' },
    { partNumber: 4, partTitle: 'Balancing Redox in Basic Solution' },
    { partNumber: 5, partTitle: 'Redox Stoichiometry & Titrations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
