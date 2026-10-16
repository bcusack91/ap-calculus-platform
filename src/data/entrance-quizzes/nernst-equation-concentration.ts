/**
 * Entrance Quiz — Cell Potential Under Nonstandard Conditions
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 * The Nernst equation is used qualitatively (CED 9.10.A.4).
 *
 * Part mapping:
 *  1 — Non-Standard Conditions (Q vs. 1; potential as a driving force)
 *  2 — How Concentration Changes Shift E (additions, dilutions, gases, exponents)
 *  3 — Concentration Cells
 *  4 — Cell Potential & Equilibrium (E°, ΔG° and K)
 *  5 — A Galvanic Cell Over Its Lifetime (running down; recharging)
 *  6 — Problem-Solving Workshop (full justifications; concentration-cell details)
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Non-Standard Conditions
  {
    id: 'necc-ent-1a',
    question: 'The cell $\\text{Mg}(s) + \\text{Ni}^{2+}(aq) \\rightarrow \\text{Mg}^{2+}(aq) + \\text{Ni}(s)$ has $E^\\circ = +2.11$ V. It is built with $[\\text{Mg}^{2+}] = 1.0$ M and $[\\text{Ni}^{2+}] = 0.10$ M. How does the measured potential compare with $E^\\circ$?',
    options: [
      'It is greater than $E^\\circ$, because $Q < 1$',
      'It is less than $E^\\circ$, because $Q > 1$',
      'It equals $E^\\circ$, because both electrodes are pure metals',
      'It is zero, because $[\\text{Ni}^{2+}]$ is below 1 M',
    ],
    correctIndex: 1,
    explanation: '$Q = [\\text{Mg}^{2+}]/[\\text{Ni}^{2+}] = 1.0/0.10 = 10$, which is greater than 1, so $E$ is below $E^\\circ$. Pure-metal electrodes do not make a cell standard, and a lower reactant concentration moves the cell toward equilibrium without reaching it.',
    partNumber: 1,
    partTitle: 'Non-Standard Conditions',
  },
  {
    id: 'necc-ent-1b',
    question: 'A working galvanic cell has $Q = 2 \\times 10^{-4}$, while its $K = 5 \\times 10^{12}$. Which statement describes its potential?',
    options: [
      'It is zero, because Q has not yet reached 1',
      'It is negative, because Q is less than K',
      'It is large and positive, because the cell is far from equilibrium',
      'It equals E° exactly, because Q is smaller than K',
    ],
    correctIndex: 2,
    explanation: 'Cell potential is a driving force toward equilibrium: the farther $Q$ is from $K$, the larger the magnitude of $E$, and with $Q < K$ the forward reaction is favored, so $E$ is positive. $E = 0$ only when $Q = K$.',
    partNumber: 1,
    partTitle: 'Non-Standard Conditions',
  },

  // Part 2: How Concentration Changes Shift E
  {
    id: 'necc-ent-2a',
    question: 'A cell runs $\\text{Zn}(s) + 2\\text{Fe}^{3+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + 2\\text{Fe}^{2+}(aq)$, starting with every ion at 1.0 M. Both half-cells are then diluted so every ion is 0.10 M. How does $E$ change?',
    options: [
      'It decreases, because Q rises to above 1',
      'It stays the same, because every ion was diluted equally',
      'It falls to zero, because the solutions are now dilute',
      'It increases, because Q falls below 1',
    ],
    correctIndex: 3,
    explanation: '$Q = [\\text{Zn}^{2+}][\\text{Fe}^{2+}]^2/[\\text{Fe}^{3+}]^2 = (0.10)(0.10)^2/(0.10)^2 = 0.10$. The products carry more total concentration factors than the reactants, so dilution lowers $Q$ below 1 and raises $E$. Equal dilution leaves $E$ unchanged only when the exponents balance.',
    partNumber: 2,
    partTitle: 'How Concentration Changes Shift E',
  },
  {
    id: 'necc-ent-2b',
    question: 'For the cell $\\text{Zn}(s) + 2\\text{H}^+(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{H}_2(g)$, which change raises the cell potential?',
    options: [
      'Lowering the pH of the hydrogen half-cell',
      'Raising the pressure of the $\\text{H}_2$ gas',
      'Dissolving more $\\text{Zn(NO}_3)_2$ in the zinc half-cell',
      'Replacing the zinc strip with a larger one',
    ],
    correctIndex: 0,
    explanation: 'A lower pH means more $\\text{H}^+$, which sits squared in the denominator of $Q = [\\text{Zn}^{2+}]P_{\\text{H}_2}/[\\text{H}^+]^2$, so $Q$ falls and $E$ rises. More hydrogen gas or more zinc ions raise $Q$, and solid zinc does not appear in $Q$.',
    partNumber: 2,
    partTitle: 'How Concentration Changes Shift E',
  },

  // Part 3: Concentration Cells
  {
    id: 'necc-ent-3a',
    question: 'A concentration cell has a nickel electrode in 0.050 M $\\text{Ni}^{2+}$ (beaker A) and another in 2.0 M $\\text{Ni}^{2+}$ (beaker B). Which describes the operating cell?',
    options: [
      'B is the anode, and electrons flow from B to A',
      'A is the anode, and electrons flow from A to B',
      'A is the cathode, and electrons flow from B to A',
      'No current flows, because $E^\\circ = 0$',
    ],
    correctIndex: 1,
    explanation: 'Each side changes so the concentrations become more alike: nickel is oxidized in dilute A, raising its $[\\text{Ni}^{2+}]$, so A is the anode and electrons travel through the wire from A to B. $E^\\circ = 0$, but $Q \\neq 1$, so the cell still produces a voltage.',
    partNumber: 3,
    partTitle: 'Concentration Cells',
  },
  {
    id: 'necc-ent-3b',
    question: 'Which copper concentration cell has the smallest initial cell potential?',
    options: [
      '0.010 M $\\text{Cu}^{2+}$ paired with 1.0 M $\\text{Cu}^{2+}$',
      '0.0010 M $\\text{Cu}^{2+}$ paired with 0.10 M $\\text{Cu}^{2+}$',
      '0.10 M $\\text{Cu}^{2+}$ paired with 0.20 M $\\text{Cu}^{2+}$',
      '0.050 M $\\text{Cu}^{2+}$ paired with 2.0 M $\\text{Cu}^{2+}$',
    ],
    correctIndex: 2,
    explanation: 'The potential depends on how far apart the two concentrations are as a ratio. A 1 : 2 ratio is closest to equal, so that cell is nearest equilibrium and has the smallest potential; the others have ratios of 1 : 100 or 1 : 40.',
    partNumber: 3,
    partTitle: 'Concentration Cells',
  },

  // Part 4: Cell Potential & Equilibrium
  {
    id: 'necc-ent-4a',
    question: 'A cell reaction transfers 3 mol of electrons and has $E^\\circ = +0.20$ V. What is $\\Delta G^\\circ$? ($F = 96{,}485$ C/mol)',
    options: ['−19.3 kJ/mol', '−38.6 kJ/mol', '+57.9 kJ/mol', '−57.9 kJ/mol'],
    correctIndex: 3,
    explanation: '$\\Delta G^\\circ = -nFE^\\circ = -(3)(96{,}485)(0.20) = -57{,}900$ J $= -57.9$ kJ/mol. Using $n = 1$ or $n = 2$ gives $-19.3$ or $-38.6$ kJ/mol, and a positive value drops the minus sign.',
    partNumber: 4,
    partTitle: 'Cell Potential & Equilibrium',
  },
  {
    id: 'necc-ent-4b',
    question: 'A redox reaction has $E^\\circ = 0$. Which statement about it is correct?',
    options: [
      '$\\Delta G^\\circ = 0$ and $K = 1$',
      '$\\Delta G^\\circ = 0$ and $K = 0$',
      '$\\Delta G^\\circ > 0$ and $K < 1$',
      '$\\Delta G^\\circ < 0$ and $K > 1$',
    ],
    correctIndex: 0,
    explanation: 'From $\\Delta G^\\circ = -nFE^\\circ$, a zero $E^\\circ$ gives $\\Delta G^\\circ = 0$, and $\\Delta G^\\circ = -RT\\ln K$ then requires $\\ln K = 0$, so $K = 1$. A concentration cell is the classic example: $E^\\circ = 0$, yet it produces a voltage while its concentrations differ.',
    partNumber: 4,
    partTitle: 'Cell Potential & Equilibrium',
  },

  // Part 5: A Galvanic Cell Over Its Lifetime
  {
    id: 'necc-ent-5a',
    question: 'A graph of potential versus time for a galvanic cell shows a long, nearly flat stretch and then a steep drop to zero. What causes the steep drop?',
    options: [
      'E° falls suddenly once the electrodes become thin',
      'The salt bridge runs out of ions all at once',
      'The limiting reactant ion runs low, so Q climbs quickly toward K',
      'The product ions precipitate, so Q falls back toward 1',
    ],
    correctIndex: 2,
    explanation: 'While the reactant ion is plentiful, $Q$ stays far below a large $K$ and $E$ barely changes; once that ion is nearly used up, $Q$ rises steeply toward $K$ and $E$ plunges to zero. $E^\\circ$ is a fixed property of the reaction.',
    partNumber: 5,
    partTitle: 'A Galvanic Cell Over Its Lifetime',
  },
  {
    id: 'necc-ent-5b',
    question: 'A dead Zn/$\\text{Cu}^{2+}$ cell is recharged by an external power supply that restores the original concentrations. What happens at the copper electrode during recharging?',
    options: [
      'Copper is oxidized, and the electrode loses mass',
      'Copper(II) ions are reduced, and the electrode gains mass',
      'Nothing happens, because only the zinc electrode reacts',
      'Copper ions pass through the salt bridge to the zinc',
    ],
    correctIndex: 0,
    explanation: 'Recharging runs the reaction in reverse, so copper metal is oxidized back to $\\text{Cu}^{2+}$ and the electrode dissolves; it is now the anode. The reverse reaction has $\\Delta G^\\circ > 0$, which is why an outside energy source is required.',
    partNumber: 5,
    partTitle: 'A Galvanic Cell Over Its Lifetime',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'necc-ent-6a',
    question: 'For $\\text{Cu}(s) + 2\\text{Ag}^+(aq) \\rightarrow \\text{Cu}^{2+}(aq) + 2\\text{Ag}(s)$, $E^\\circ = +0.46$ V. A student keeps $[\\text{Cu}^{2+}] = 1.0$ M but raises $[\\text{Ag}^+]$ to 3.0 M. Which is a complete, correct justification?',
    options: [
      'Q = 3, so the cell is closer to equilibrium and E < 0.46 V',
      'Q = 9, so the cell is closer to equilibrium and E < 0.46 V',
      'Adding Ag⁺ shifts the reaction right by Le Châtelier, so E > 0.46 V',
      'Q = 1/9, so the cell is farther from equilibrium and E > 0.46 V',
    ],
    correctIndex: 3,
    explanation: '$Q = [\\text{Cu}^{2+}]/[\\text{Ag}^+]^2 = 1.0/(3.0)^2 = 1/9$, less than 1, so the cell is farther from equilibrium and its potential exceeds $E^\\circ$. A working cell is not at equilibrium, so a Le Châtelier argument is not a valid justification even when the direction is right.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'necc-ent-6b',
    question: 'A silver concentration cell has 0.010 M $\\text{Ag}^+$ in beaker A and 1.0 M $\\text{Ag}^+$ in beaker B, with a $\\text{KNO}_3$ salt bridge. Which ions flow into beaker A, and how does $[\\text{Ag}^+]$ in A change?',
    options: [
      '$\\text{K}^+$ flows in, and $[\\text{Ag}^+]$ in A decreases',
      '$\\text{NO}_3^-$ flows in, and $[\\text{Ag}^+]$ in A increases',
      '$\\text{NO}_3^-$ flows in, and $[\\text{Ag}^+]$ in A decreases',
      '$\\text{K}^+$ flows in, and $[\\text{Ag}^+]$ in A increases',
    ],
    correctIndex: 1,
    explanation: 'Dilute beaker A is the anode: silver is oxidized there, so $[\\text{Ag}^+]$ rises, and nitrate ions flow in to balance the new positive charge. Potassium ions flow toward beaker B, where $\\text{Ag}^+$ is removed.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'necc-ent-7a',
    question: 'A Pb/$\\text{Cu}^{2+}$ cell ($E^\\circ = +0.47$ V) is built with $[\\text{Pb}^{2+}] = 0.0010$ M and $[\\text{Cu}^{2+}] = 1.0$ M and then run for a long time. Which describes its potential?',
    options: [
      'Below 0.47 V at first, then rising toward E° as it runs',
      'Equal to 0.47 V at first, then unchanged as it runs',
      'Above 0.47 V at first, then falling toward zero as it runs',
      'Above 0.47 V at first, and still above it at the end',
    ],
    correctIndex: 2,
    explanation: 'Initially $Q = 0.0010/1.0 = 0.0010 < 1$, so $E > E^\\circ$. As the cell runs, $\\text{Pb}^{2+}$ builds up and $\\text{Cu}^{2+}$ is consumed, so $Q$ rises toward $K$ and $E$ falls, reaching zero at equilibrium.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'necc-ent-7b',
    question: 'A two-electron cell reaction has $E^\\circ = +0.30$ V at 298 K. What is the approximate value of $K$? ($F = 96{,}485$ C/mol; $R = 8.314$ J/(mol·K))',
    options: [
      '$K \\approx 1.4 \\times 10^{10}$',
      '$K \\approx 1.2 \\times 10^{5}$',
      '$K \\approx 7.1 \\times 10^{-11}$',
      '$K \\approx 1.35$',
    ],
    correctIndex: 0,
    explanation: 'Setting $-nFE^\\circ = -RT\\ln K$ gives $\\ln K = (2)(96{,}485)(0.30)/2478 = 23.4$, so $K \\approx 1.4 \\times 10^{10}$. Using $n = 1$ gives about $10^5$, a sign error gives a tiny $K$, and $e^{0.30}$ leaves out $nF/RT$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the nernst-equation-concentration topic.
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
    { partNumber: 1, partTitle: 'Non-Standard Conditions' },
    { partNumber: 2, partTitle: 'How Concentration Changes Shift E' },
    { partNumber: 3, partTitle: 'Concentration Cells' },
    { partNumber: 4, partTitle: 'Cell Potential & Equilibrium' },
    { partNumber: 5, partTitle: 'A Galvanic Cell Over Its Lifetime' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
