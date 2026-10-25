/**
 * Entrance Quiz — Moles & Molar Mass
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Introduction to the Mole
 *  2 — Molar Mass
 *  3 — Mole-Mass Conversions
 *  4 — Percent Composition
 *  5 — Empirical & Molecular Formulas
 *  6 — Problem-Solving Workshop
 *  7 — Synthesis & AP Review
 */

import { shuffleArray } from '@/lib/shuffle-options'

export interface EntranceQuizQuestion {
  id: string
  question: string          // may contain $LaTeX$
  options: string[]
  correctIndex: number      // 0-based index in options
  explanation: string
  partNumber: number        // which lesson part (1-7) this tests
  partTitle: string         // human-readable part name
  /** Optional picture above the question: one isSafeSvg inline SVG (see AsvabExitQuestion.figure). */
  figure?: string
  /** Text alternative for `figure`. */
  figureAlt?: string
}

const questions: EntranceQuizQuestion[] = [
  // ═══════════════════════════════════════════════════
  // Part 1: Introduction to the Mole
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-1a',
    question: 'How many total atoms are in 0.200 mol of ammonia, $NH_3$?',
    options: [
      '$1.20 \\times 10^{23}$',
      '$3.61 \\times 10^{23}$',
      '$4.82 \\times 10^{23}$',
      '$2.41 \\times 10^{24}$',
    ],
    correctIndex: 2,
    explanation: 'Each $NH_3$ molecule has 4 atoms, so 0.200 mol of molecules holds 0.800 mol of atoms: $0.800 \\times 6.022 \\times 10^{23} = 4.82 \\times 10^{23}$. $1.20 \\times 10^{23}$ counts only molecules, $3.61 \\times 10^{23}$ counts only H atoms, and $2.41 \\times 10^{24}$ drops the 0.200 mol.',
    partNumber: 1,
    partTitle: 'Introduction to the Mole',
  },
  {
    id: 'mm-ent-1b',
    question: 'Which sample contains the same number of oxygen atoms as 1.00 mol of $CO_2$?',
    options: [
      '$0.500 \\text{ mol } H_2SO_4$',
      '$2.00 \\text{ mol } O_2$',
      '$1.00 \\text{ mol } O_3$',
      '$0.500 \\text{ mol } SO_3$',
    ],
    correctIndex: 0,
    explanation: '1.00 mol of $CO_2$ contains 2.00 mol of O atoms, and 0.500 mol of $H_2SO_4$ also contains $0.500 \\times 4 = 2.00$ mol of O atoms. 2.00 mol of $O_2$ has 4.00 mol of O atoms, 1.00 mol of $O_3$ has 3.00 mol, and 0.500 mol of $SO_3$ has 1.50 mol.',
    partNumber: 1,
    partTitle: 'Introduction to the Mole',
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Molar Mass
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-2a',
    question: 'What is the molar mass of magnesium nitrate, $Mg(NO_3)_2$? (Mg = 24.31, N = 14.01, O = 16.00 g/mol)',
    options: ['86.32 g/mol', '100.33 g/mol', '134.32 g/mol', '148.33 g/mol'],
    correctIndex: 3,
    explanation: 'The subscript 2 multiplies everything in the parentheses, giving 2 N and 6 O: $24.31 + 2(14.01) + 6(16.00) = 148.33$ g/mol. Ignoring the 2 gives 86.32, applying it only to N gives 100.33, and applying it only to O gives 134.32.',
    partNumber: 2,
    partTitle: 'Molar Mass',
  },
  {
    id: 'mm-ent-2b',
    question: 'Which compound has the greatest molar mass? (Ca = 40.08, Fe = 55.85, Cu = 63.55, Na = 22.99, S = 32.07, N = 14.01, O = 16.00, H = 1.008 g/mol)',
    options: ['$Fe_2O_3$', '$Ca(NO_3)_2$', '$Na_2SO_4$', '$Cu(OH)_2$'],
    correctIndex: 1,
    explanation: '$Ca(NO_3)_2$ is $40.08 + 2(14.01) + 6(16.00) = 164.10$ g/mol, ahead of $Fe_2O_3$ (159.70), $Na_2SO_4$ (142.05) and $Cu(OH)_2$ (97.57). Forgetting that the 2 multiplies the whole nitrate group gives only 102.09 g/mol, which makes $Fe_2O_3$ look largest.',
    partNumber: 2,
    partTitle: 'Molar Mass',
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Mole-Mass Conversions
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-3a',
    question: 'How many molecules are in 4.00 g of methane, $CH_4$ ($M = 16.04$ g/mol)?',
    options: [
      '$1.50 \\times 10^{23}$',
      '$2.41 \\times 10^{24}$',
      '$3.86 \\times 10^{25}$',
      '$7.51 \\times 10^{23}$',
    ],
    correctIndex: 0,
    explanation: 'Grams to moles first: $4.00 / 16.04 = 0.249$ mol, then $0.249 \\times 6.022 \\times 10^{23} = 1.50 \\times 10^{23}$ molecules. $2.41 \\times 10^{24}$ skips the molar mass, $3.86 \\times 10^{25}$ multiplies by it, and $7.51 \\times 10^{23}$ counts all five atoms per molecule.',
    partNumber: 3,
    partTitle: 'Mole-Mass Conversions',
  },
  {
    id: 'mm-ent-3b',
    question: 'What is the mass of $9.03 \\times 10^{22}$ atoms of copper (Cu, $M = 63.55$ g/mol)?',
    options: ['0.150 g', '424 g', '9.53 g', '0.00236 g'],
    correctIndex: 2,
    explanation: 'Atoms to moles: $9.03 \\times 10^{22} / 6.022 \\times 10^{23} = 0.150$ mol; moles to grams: $0.150 \\times 63.55 = 9.53$ g. Stopping at 0.150 forgets the second step, while 424 g and 0.00236 g come from dividing by or into the molar mass instead of multiplying.',
    partNumber: 3,
    partTitle: 'Mole-Mass Conversions',
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Percent Composition
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-4a',
    question: 'What is the percent by mass of oxygen in calcium phosphate, $Ca_3(PO_4)_2$ ($M = 310.18$ g/mol; O = 16.00)?',
    options: ['20.63%', '41.27%', '29.74%', '38.76%'],
    correctIndex: 1,
    explanation: 'The formula has $2 \\times 4 = 8$ O atoms, so %O $= 8(16.00)/310.18 \\times 100\\% = 41.27\\%$. Counting only 4 O gives 20.63%, dropping the 2 from both the O count and the molar mass gives 29.74%, and 38.76% is the calcium percent.',
    partNumber: 4,
    partTitle: 'Percent Composition',
  },
  {
    id: 'mm-ent-4b',
    question: 'Which iron compound has the greatest percent iron by mass? (Fe = 55.85, C = 12.01, O = 16.00)',
    options: ['$Fe_2O_3$', '$Fe_3O_4$', '$FeCO_3$', '$FeO$'],
    correctIndex: 3,
    explanation: 'Percent iron depends on how much non-iron mass accompanies each Fe atom, not on how many Fe atoms the formula shows. $FeO$ has one O per Fe (77.7% Fe), versus 1.33 O per Fe in $Fe_3O_4$ (72.4%), 1.5 O per Fe in $Fe_2O_3$ (69.9%) and a whole carbonate per Fe in $FeCO_3$ (48.2%).',
    partNumber: 4,
    partTitle: 'Percent Composition',
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Empirical & Molecular Formulas
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-5a',
    question: 'A sample of a nitrogen oxide contains 1.40 g of N and 4.00 g of O. What is its empirical formula? (N = 14.01, O = 16.00)',
    options: ['$NO_2$', '$NO_3$', '$N_2O_5$', '$N_5O_2$'],
    correctIndex: 2,
    explanation: 'N: $1.40/14.01 = 0.0999$ mol and O: $4.00/16.00 = 0.250$ mol, a ratio of 1 : 2.50. Multiplying by 2 gives $N_2O_5$; rounding 2.50 down or up gives $NO_2$ or $NO_3$, and $N_5O_2$ inverts the ratio.',
    partNumber: 5,
    partTitle: 'Empirical & Molecular Formulas',
  },
  {
    id: 'mm-ent-5b',
    question: 'A hydrocarbon has the empirical formula $C_3H_4$ and a molar mass of 120.2 g/mol. What is its molecular formula? (C = 12.01, H = 1.008)',
    options: ['$C_9H_{12}$', '$C_3H_4$', '$C_6H_8$', '$C_9H_4$'],
    correctIndex: 0,
    explanation: 'The empirical formula mass is $3(12.01) + 4(1.008) = 40.06$ g/mol, so $n = 120.2/40.06 = 3$ and every subscript triples, giving $C_9H_{12}$. $C_3H_4$ stops at the empirical formula, $C_6H_8$ uses $n = 2$, and $C_9H_4$ multiplies only the carbon.',
    partNumber: 5,
    partTitle: 'Empirical & Molecular Formulas',
  },

  // ═══════════════════════════════════════════════════
  // Part 6: Problem-Solving Workshop
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-6a',
    question: 'How many grams of chlorine are in 33.3 g of calcium chloride, $CaCl_2$ ($M = 110.98$ g/mol; Ca = 40.08, Cl = 35.45)?',
    options: ['10.6 g', '21.3 g', '12.0 g', '42.5 g'],
    correctIndex: 1,
    explanation: 'Moles of $CaCl_2 = 33.3/110.98 = 0.300$ mol, which holds 0.600 mol of Cl, and $0.600 \\times 35.45 = 21.3$ g. Using one Cl per formula unit gives 10.6 g, 12.0 g is the calcium, and 42.5 g counts each Cl atom as a $Cl_2$ molecule.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'mm-ent-6b',
    question: 'Which 10.0 g sample contains the greatest number of hydrogen atoms? (Molar masses: $CH_4$ 16.04, $C_2H_6$ 30.07, $C_3H_8$ 44.10, $C_4H_{10}$ 58.12 g/mol)',
    options: ['$C_4H_{10}$', '$C_2H_6$', '$C_3H_8$', '$CH_4$'],
    correctIndex: 3,
    explanation: 'Moles of H = (10.0 / M) × H per molecule: 2.49 mol for $CH_4$, 2.00 for $C_2H_6$, 1.81 for $C_3H_8$ and 1.72 for $C_4H_{10}$. Picking $C_4H_{10}$ looks only at H per molecule and ignores that a fixed mass of it contains far fewer molecules.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis & AP Review
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-7a',
    question: 'Equal masses of $SO_2$ ($M = 64.07$ g/mol) and $SO_3$ ($M = 80.07$ g/mol) are compared. Which statement is correct?',
    options: [
      'More O atoms in the $SO_3$ sample',
      'Equal numbers of O atoms in both samples',
      'More O atoms and more molecules in $SO_3$',
      'More O atoms in the $SO_2$ sample, since it has more molecules',
    ],
    correctIndex: 0,
    explanation: 'Per gram, $SO_2$ gives $2/64.07 = 0.0312$ mol of O and $SO_3$ gives $3/80.07 = 0.0375$ mol of O, so the $SO_3$ sample has more O atoms. The $SO_2$ sample does have more molecules, but its smaller O count per molecule loses out, so the $SO_3$ sample cannot have more molecules too.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'mm-ent-7b',
    question: 'A compound is 54.5% C, 9.1% H and 36.4% O by mass, and 0.0300 mol of it has a mass of 2.64 g. What is its molecular formula? (C = 12.01, H = 1.008, O = 16.00)',
    options: ['$C_2H_4O$', '$C_4H_8O$', '$C_4H_8O_2$', '$C_6H_{12}O_3$'],
    correctIndex: 2,
    explanation: 'Per 100 g: 4.54 mol C, 9.03 mol H and 2.28 mol O, a 2 : 4 : 1 ratio, so the empirical formula is $C_2H_4O$ (44.05 g/mol). The molar mass is $2.64/0.0300 = 88.0$ g/mol, so $n = 2$ and the molecular formula is $C_4H_8O_2$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the moles-molar-mass topic.
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
    { partNumber: 1, partTitle: 'Introduction to the Mole' },
    { partNumber: 2, partTitle: 'Molar Mass' },
    { partNumber: 3, partTitle: 'Mole-Mass Conversions' },
    { partNumber: 4, partTitle: 'Percent Composition' },
    { partNumber: 5, partTitle: 'Empirical & Molecular Formulas' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
