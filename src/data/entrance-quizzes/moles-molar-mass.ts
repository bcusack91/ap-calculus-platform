/**
 * Entrance Quiz — Moles & Molar Mass
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Introduction to the Mole (Avogadro's Number & Counting by Weighing)
 *  2 — Molar Mass (The Mass of One Mole)
 *  3 — Mole-Mass Conversions (Grams, Moles, and Particles)
 *  4 — Percent Composition
 *  5 — Empirical & Molecular Formulas
 *  6 — Problem-Solving Workshop (Multi-Step Conversions)
 *  7 — Synthesis & AP Review
 */

export interface EntranceQuizQuestion {
  id: string
  question: string          // may contain $LaTeX$
  options: string[]
  correctIndex: number      // 0-based index in options
  explanation: string
  partNumber: number        // which lesson part (1-7) this tests
  partTitle: string         // human-readable part name
}

const questions: EntranceQuizQuestion[] = [
  // ═══════════════════════════════════════════════════
  // Part 1: Introduction to the Mole
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-1a',
    question: 'Avogadro\'s number ($6.022 \\times 10^{23}$) represents the number of particles in:',
    options: ['1 gram of any substance', '1 mole of any substance', '1 liter of any gas', '1 kilogram of any element'],
    correctIndex: 1,
    explanation: 'Avogadro\'s number defines 1 mole — it is the number of representative particles (atoms, molecules, ions, etc.) in exactly one mole of a substance.',
    partNumber: 1,
    partTitle: 'Introduction to the Mole',
  },
  {
    id: 'mm-ent-1b',
    question: 'How many molecules are in 2.0 moles of $H_2O$?',
    options: [
      '$6.022 \\times 10^{23}$',
      '$1.204 \\times 10^{24}$',
      '$3.011 \\times 10^{23}$',
      '$1.806 \\times 10^{24}$',
    ],
    correctIndex: 1,
    explanation: '$2.0 \\text{ mol} \\times 6.022 \\times 10^{23} \\text{ molecules/mol} = 1.204 \\times 10^{24}$ molecules.',
    partNumber: 1,
    partTitle: 'Introduction to the Mole',
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Molar Mass
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-2a',
    question: 'What is the molar mass of $NaCl$? (Na = 22.99 g/mol, Cl = 35.45 g/mol)',
    options: ['22.99 g/mol', '35.45 g/mol', '58.44 g/mol', '116.88 g/mol'],
    correctIndex: 2,
    explanation: 'Molar mass of NaCl = 22.99 + 35.45 = 58.44 g/mol. Add the atomic masses of each element in the formula.',
    partNumber: 2,
    partTitle: 'Molar Mass',
  },
  {
    id: 'mm-ent-2b',
    question: 'What is the molar mass of $CaCO_3$? (Ca = 40.08, C = 12.01, O = 16.00 g/mol)',
    options: ['68.09 g/mol', '84.01 g/mol', '100.09 g/mol', '120.09 g/mol'],
    correctIndex: 2,
    explanation: 'Molar mass of $CaCO_3$ = 40.08 + 12.01 + 3(16.00) = 40.08 + 12.01 + 48.00 = 100.09 g/mol.',
    partNumber: 2,
    partTitle: 'Molar Mass',
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Mole-Mass Conversions
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-3a',
    question: 'How many moles are in 180 g of glucose ($C_6H_{12}O_6$, molar mass = 180 g/mol)?',
    options: ['0.5 mol', '1.0 mol', '2.0 mol', '180 mol'],
    correctIndex: 1,
    explanation: 'Moles = mass ÷ molar mass = 180 g ÷ 180 g/mol = 1.0 mol.',
    partNumber: 3,
    partTitle: 'Mole-Mass Conversions',
  },
  {
    id: 'mm-ent-3b',
    question: 'What is the mass of 0.50 mol of $NaOH$? (Molar mass = 40.00 g/mol)',
    options: ['10.0 g', '20.0 g', '40.0 g', '80.0 g'],
    correctIndex: 1,
    explanation: 'Mass = moles × molar mass = 0.50 mol × 40.00 g/mol = 20.0 g.',
    partNumber: 3,
    partTitle: 'Mole-Mass Conversions',
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Percent Composition
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-4a',
    question: 'What is the percent by mass of oxygen in $H_2O$? (H = 1.01, O = 16.00 g/mol)',
    options: ['11.2%', '33.3%', '66.7%', '88.8%'],
    correctIndex: 3,
    explanation: 'Molar mass of $H_2O$ = 2(1.01) + 16.00 = 18.02 g/mol. % O = (16.00 / 18.02) × 100 = 88.8%.',
    partNumber: 4,
    partTitle: 'Percent Composition',
  },
  {
    id: 'mm-ent-4b',
    question: 'A compound is 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. What is the ratio of C : H : O moles in a 100 g sample?',
    options: ['1 : 2 : 1', '3 : 6 : 3', '1 : 1 : 1', '2 : 4 : 2'],
    correctIndex: 0,
    explanation: 'In 100 g: C = 40.0/12.01 ≈ 3.33 mol, H = 6.7/1.01 ≈ 6.63 mol, O = 53.3/16.00 ≈ 3.33 mol. Dividing by 3.33 gives C:H:O = 1:2:1.',
    partNumber: 4,
    partTitle: 'Percent Composition',
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Empirical & Molecular Formulas
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-5a',
    question: 'A compound has the empirical formula $CH_2O$ and a molar mass of 180 g/mol. What is its molecular formula?',
    options: ['$CH_2O$', '$C_2H_4O_2$', '$C_4H_8O_4$', '$C_6H_{12}O_6$'],
    correctIndex: 3,
    explanation: 'Empirical formula mass of $CH_2O$ = 12 + 2(1) + 16 = 30 g/mol. n = 180 / 30 = 6. Molecular formula = $C_6H_{12}O_6$.',
    partNumber: 5,
    partTitle: 'Empirical & Molecular Formulas',
  },
  {
    id: 'mm-ent-5b',
    question: 'Which of the following is an empirical formula?',
    options: ['$C_6H_{12}O_6$', '$C_2H_6$', '$CH_2O$', '$H_2O_2$'],
    correctIndex: 2,
    explanation: '$CH_2O$ is an empirical formula because it represents the simplest whole-number ratio of atoms (1:2:1). The others can all be reduced further ($C_2H_6 \\to CH_3$, $H_2O_2 \\to HO$) or are molecular formulas.',
    partNumber: 5,
    partTitle: 'Empirical & Molecular Formulas',
  },

  // ═══════════════════════════════════════════════════
  // Part 6: Problem-Solving Workshop
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-6a',
    question: 'How many atoms of oxygen are in 44.0 g of $CO_2$? (C = 12.01, O = 16.00 g/mol)',
    options: [
      '$6.022 \\times 10^{23}$',
      '$1.204 \\times 10^{24}$',
      '$3.011 \\times 10^{23}$',
      '$2.408 \\times 10^{24}$',
    ],
    correctIndex: 1,
    explanation: 'Molar mass of $CO_2$ = 44.01 g/mol. 44.0 g ÷ 44.01 ≈ 1.0 mol $CO_2$. Each molecule has 2 O atoms, so 1.0 mol × 2 × $6.022 \\times 10^{23}$ = $1.204 \\times 10^{24}$ O atoms.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'mm-ent-6b',
    question: 'A student has 25.0 g of $CaCO_3$ (molar mass = 100.09 g/mol). How many moles of oxygen atoms does this contain?',
    options: ['0.250 mol', '0.500 mol', '0.750 mol', '1.00 mol'],
    correctIndex: 2,
    explanation: 'Moles of $CaCO_3$ = 25.0 / 100.09 ≈ 0.250 mol. Each formula unit has 3 O atoms, so moles of O = 0.250 × 3 = 0.750 mol.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis & AP Review
  // ═══════════════════════════════════════════════════
  {
    id: 'mm-ent-7a',
    question: 'A compound is found to be 52.2% carbon, 13.0% hydrogen, and 34.8% oxygen. Its molar mass is 46 g/mol. What is the molecular formula?',
    options: ['$CH_3O$', '$C_2H_6O$', '$C_2H_4O_2$', '$CH_4O$'],
    correctIndex: 1,
    explanation: 'In 100 g: C = 52.2/12 = 4.35 mol, H = 13.0/1 = 13.0 mol, O = 34.8/16 = 2.175 mol. Ratio = 2:6:1 → empirical formula $C_2H_6O$ (mass = 46). Since empirical mass = molar mass, molecular formula = $C_2H_6O$ (ethanol).',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'mm-ent-7b',
    question: 'Which conversion requires using BOTH molar mass AND Avogadro\'s number?',
    options: ['Grams to moles', 'Moles to particles', 'Grams to number of atoms', 'Moles to grams'],
    correctIndex: 2,
    explanation: 'Converting grams to number of atoms is a two-step conversion: grams → moles (using molar mass) → atoms (using Avogadro\'s number). The other options each require only one conversion factor.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the moles-molar-mass topic.
 * Returns all 14 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
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
