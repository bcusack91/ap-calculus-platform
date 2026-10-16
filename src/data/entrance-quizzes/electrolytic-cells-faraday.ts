/**
 * Entrance Quiz — Electrolytic Cells & Faraday's Law
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Electrolysis Basics (external source; minimum voltage and ΔG°; naming electrodes)
 *  2 — Electrolytic vs Galvanic Cells (what changes, what stays; recharging)
 *  3 — Predicting Electrolysis Products (molten vs. aqueous; water competing)
 *  4 — Faraday's Law Calculations (mol = It/(nF); cells in series)
 *  5 — Electroplating & Working Backward (solving for time or ion charge)
 *  6 — Problem-Solving Workshop (products plus amounts; mass per charge)
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Electrolysis Basics
  {
    id: 'ecf-ent-1a',
    question: 'A redox reaction has $E^\\circ_{\\text{cell}} = -0.85$ V and transfers 2 mol of electrons. To run it in an electrolytic cell, what minimum voltage must be applied, and what is $\\Delta G^\\circ$? ($F = 96{,}485$ C/mol)',
    options: [
      '0.85 V, and $\\Delta G^\\circ = -164$ kJ',
      '1.70 V, and $\\Delta G^\\circ = +164$ kJ',
      '0.85 V, and $\\Delta G^\\circ = +164$ kJ',
      '0.85 V, and $\\Delta G^\\circ = +82.0$ kJ',
    ],
    correctIndex: 2,
    explanation: 'The source must supply at least $|E^\\circ| = 0.85$ V, and $\\Delta G^\\circ = -nFE^\\circ = -(2)(96{,}485)(-0.85) = +164$ kJ, the energy the source provides per mole of reaction. Potentials are not doubled for $n$, and using $n = 1$ gives 82.0 kJ.',
    partNumber: 1,
    partTitle: 'Electrolysis Basics',
  },
  {
    id: 'ecf-ent-1b',
    question: 'In an electrolysis cell, $2\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2e^-$ occurs at electrode X and $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$ occurs at electrode Y. Which statement is correct?',
    options: [
      'X is the anode, and electrons flow through the wire from X to Y',
      'X is the cathode, and electrons flow through the wire from Y to X',
      'Y is the anode, and electrons flow through the wire from Y to X',
      'X is the anode, and electrons flow through the wire from Y to X',
    ],
    correctIndex: 0,
    explanation: 'Oxidation of chloride makes X the anode, and the power source pulls those electrons out of X and pushes them through the wire into Y, the cathode, where copper(II) is reduced. Electrodes are named by their half-reactions in every type of cell.',
    partNumber: 1,
    partTitle: 'Electrolysis Basics',
  },

  // Part 2: Electrolytic vs Galvanic Cells
  {
    id: 'ecf-ent-2a',
    question: 'Which feature is different for a galvanic cell than for an electrolytic cell?',
    options: [
      'The electrode at which oxidation takes place',
      'The direction electrons move between anode and cathode',
      'The sign of $\\Delta G^\\circ$ for the reaction that occurs',
      'The electrode toward which cations migrate',
    ],
    correctIndex: 2,
    explanation: 'A galvanic cell runs a reaction with $\\Delta G^\\circ < 0$, while an electrolytic cell is driven to run one with $\\Delta G^\\circ > 0$. In both, oxidation is at the anode, electrons travel from anode to cathode, and cations move toward the cathode.',
    partNumber: 2,
    partTitle: 'Electrolytic vs Galvanic Cells',
  },
  {
    id: 'ecf-ent-2b',
    question: 'A galvanic cell runs $\\text{Ni}(s) + 2\\text{Ag}^+(aq) \\rightarrow \\text{Ni}^{2+}(aq) + 2\\text{Ag}(s)$. It is then recharged with an external power supply. Which statement is correct during recharging?',
    options: [
      'Nickel is oxidized, so nickel is the anode',
      'Silver ions are reduced, so silver is the cathode',
      'Nickel ions are oxidized, so nickel is the anode',
      'Silver is oxidized, so the silver electrode is the anode',
    ],
    correctIndex: 3,
    explanation: 'Recharging reverses the reaction: silver metal is oxidized back to $\\text{Ag}^+$ and $\\text{Ni}^{2+}$ is reduced to nickel, so the electrode names swap and silver becomes the anode. Nickel(II) ions gain electrons, so they are reduced, not oxidized.',
    partNumber: 2,
    partTitle: 'Electrolytic vs Galvanic Cells',
  },

  // Part 3: Predicting Electrolysis Products
  {
    id: 'ecf-ent-3a',
    question: 'Aqueous $\\text{MgBr}_2$ is electrolyzed with inert electrodes. ($E^\\circ$: $\\text{Mg}^{2+}/\\text{Mg} = -2.37$ V; water reduction $= -0.83$ V; $\\text{Br}_2/\\text{Br}^- = +1.07$ V; $\\text{O}_2/\\text{H}_2\\text{O} = +1.23$ V.) What forms at each electrode?',
    options: [
      'Cathode: Mg; anode: $\\text{Br}_2$',
      'Cathode: $\\text{H}_2$; anode: $\\text{O}_2$',
      'Cathode: Mg; anode: $\\text{O}_2$',
      'Cathode: $\\text{H}_2$; anode: $\\text{Br}_2$',
    ],
    correctIndex: 3,
    explanation: 'Water ($-0.83$ V) is far easier to reduce than $\\text{Mg}^{2+}$ ($-2.37$ V), so hydrogen forms at the cathode. The bromine couple lies below water\'s +1.23 V, so bromide is oxidized to $\\text{Br}_2$ at the anode.',
    partNumber: 3,
    partTitle: 'Predicting Electrolysis Products',
  },
  {
    id: 'ecf-ent-3b',
    question: 'Aqueous $\\text{Na}_2\\text{SO}_4$ is electrolyzed with inert electrodes. What forms at each electrode?',
    options: [
      'Cathode: $\\text{H}_2$; anode: $\\text{O}_2$',
      'Cathode: Na; anode: $\\text{O}_2$',
      'Cathode: $\\text{H}_2$; anode: $\\text{SO}_2$',
      'Cathode: Na; anode: $\\text{SO}_2$',
    ],
    correctIndex: 0,
    explanation: 'Sodium ions are far harder to reduce than water, so $\\text{H}_2$ forms at the cathode; sulfur in sulfate is already at its highest oxidation state, so water is oxidized to $\\text{O}_2$ at the anode. Sodium metal can only be made from the molten salt.',
    partNumber: 3,
    partTitle: 'Predicting Electrolysis Products',
  },

  // Part 4: Faraday's Law Calculations
  {
    id: 'ecf-ent-4a',
    question: 'A current of 2.50 A passes through $\\text{Ni(NO}_3)_2(aq)$ for 45.0 min. What mass of nickel ($M = 58.69$ g/mol) deposits? ($F = 96{,}485$ C/mol)',
    options: ['4.11 g', '2.05 g', '1.37 g', '0.0342 g'],
    correctIndex: 1,
    explanation: '$q = (2.50)(2700) = 6750$ C, or 0.0700 mol of electrons; $\\text{Ni}^{2+}$ needs 2 per atom, so 0.0350 mol Ni, or 2.05 g. Using $n = 1$ gives 4.11 g, $n = 3$ gives 1.37 g, and leaving the time as 45.0 s gives 0.0342 g.',
    partNumber: 4,
    partTitle: "Faraday's Law Calculations",
  },
  {
    id: 'ecf-ent-4b',
    question: 'Two electrolytic cells are connected in series. One deposits 0.635 g of Cu from $\\text{Cu}^{2+}$ ($M = 63.55$ g/mol). What mass of Ag ($M = 107.87$ g/mol) deposits from $\\text{Ag}^+$ in the other cell?',
    options: ['0.635 g', '1.08 g', '2.16 g', '4.31 g'],
    correctIndex: 2,
    explanation: 'The same charge passes through both cells: 0.00999 mol Cu used 0.0200 mol of electrons, which deposit 0.0200 mol Ag, or 2.16 g. Equal moles of metal gives 1.08 g, and equal masses ignores the different electron counts and molar masses.',
    partNumber: 4,
    partTitle: "Faraday's Law Calculations",
  },

  // Part 5: Electroplating & Working Backward
  {
    id: 'ecf-ent-5a',
    question: 'How many minutes must a 4.00 A current run to plate 2.00 g of copper ($\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$, $M = 63.55$ g/mol) onto an object? ($F = 96{,}485$ C/mol)',
    options: ['12.7 min', '25.3 min', '50.6 min', '1520 min'],
    correctIndex: 1,
    explanation: '2.00 g is 0.0315 mol Cu, needing 0.0629 mol of electrons, or 6070 C; $t = 6070 / 4.00 = 1520$ s $= 25.3$ min. Forgetting the factor of 2 gives 12.7 min, applying it twice gives 50.6 min, and 1520 is the time in seconds.',
    partNumber: 5,
    partTitle: 'Electroplating & Working Backward',
  },
  {
    id: 'ecf-ent-5b',
    question: 'A current of 0.500 A for 1930 s deposits 0.173 g of chromium ($M = 52.00$ g/mol) from a solution of a chromium salt. What is the charge on the chromium ion? ($F = 96{,}485$ C/mol)',
    options: ['+1', '+2', '+6', '+3'],
    correctIndex: 3,
    explanation: 'The charge passed is 965 C, or 0.0100 mol of electrons, and 0.173 g is 0.00333 mol Cr. The ratio $0.0100 / 0.00333 = 3.0$ electrons per chromium atom means the ion is $\\text{Cr}^{3+}$.',
    partNumber: 5,
    partTitle: 'Electroplating & Working Backward',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'ecf-ent-6a',
    question: 'Aqueous KI is electrolyzed with inert electrodes at 1.50 A for 10.0 min. Which product forms at the anode, and how many moles of it form? ($F = 96{,}485$ C/mol)',
    options: [
      '$\\text{I}_2$; $9.33 \\times 10^{-3}$ mol',
      '$\\text{O}_2$; $2.33 \\times 10^{-3}$ mol',
      '$\\text{H}_2$; $4.66 \\times 10^{-3}$ mol',
      '$\\text{I}_2$; $4.66 \\times 10^{-3}$ mol',
    ],
    correctIndex: 3,
    explanation: 'Iodide is oxidized more easily than water, and $2\\text{I}^- \\rightarrow \\text{I}_2 + 2e^-$ takes 2 electrons per $\\text{I}_2$: 900 C is 0.00933 mol of electrons, giving $4.66 \\times 10^{-3}$ mol $\\text{I}_2$. Hydrogen forms at the cathode, not the anode.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'ecf-ent-6b',
    question: 'The same charge passes through a cell plating silver from $\\text{Ag}^+$ ($M = 107.87$ g/mol) and a cell producing aluminum from molten $\\text{Al}_2\\text{O}_3$ ($M = 26.98$ g/mol). What is the ratio of the mass of silver to the mass of aluminum?',
    options: ['4.00', '12.0', '3.00', '0.0834'],
    correctIndex: 1,
    explanation: 'Mass per mole of electrons is $M/n$: 107.87 g for silver and $26.98/3 = 8.99$ g for aluminum, a ratio of 12.0. Comparing molar masses alone gives 4.00, and 0.0834 is the ratio inverted.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ecf-ent-7a',
    question: 'Aqueous $\\text{CuSO}_4$ is electrolyzed with inert electrodes. Which observations are expected?',
    options: [
      'Copper coats the cathode, and oxygen forms at the anode',
      'Hydrogen bubbles form at the cathode, and oxygen at the anode',
      'Copper coats the cathode, and sulfur dioxide forms at the anode',
      'Copper coats the anode, and hydrogen bubbles form at the cathode',
    ],
    correctIndex: 0,
    explanation: '$\\text{Cu}^{2+}$ (+0.34 V) is reduced far more easily than water ($-0.83$ V), so copper plates onto the cathode, and sulfate resists oxidation, so water is oxidized to oxygen at the anode. Metal deposits only at the cathode.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ecf-ent-7b',
    question: 'How long must a 50.0 A current run to produce 10.0 g of aluminum ($M = 26.98$ g/mol) from molten $\\text{Al}_2\\text{O}_3$? ($F = 96{,}485$ C/mol)',
    options: ['11.9 min', '23.8 min', '35.8 min', '2150 min'],
    correctIndex: 2,
    explanation: '10.0 g is 0.371 mol Al, which needs 3 electrons each: 1.11 mol of electrons, or $1.07 \\times 10^5$ C, so $t = 2150$ s $= 35.8$ min. Using $n = 1$ or $n = 2$ gives 11.9 or 23.8 min, and 2150 is the time in seconds.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the electrolytic-cells-faraday topic.
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
    { partNumber: 1, partTitle: 'Electrolysis Basics' },
    { partNumber: 2, partTitle: 'Electrolytic vs Galvanic Cells' },
    { partNumber: 3, partTitle: 'Predicting Electrolysis Products' },
    { partNumber: 4, partTitle: "Faraday's Law Calculations" },
    { partNumber: 5, partTitle: 'Electroplating & Working Backward' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
