/**
 * Entrance Quiz — Galvanic Cells & Standard Potentials
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 * Also serves the galvanic-cells-thermo-applications topic, which renders this lesson.
 *
 * Part mapping:
 *  1 — Introduction to Galvanic Cells (half-reactions; anode = oxidation)
 *  2 — Salt Bridges, Electron Flow & Ion Flow
 *  3 — Standard Reduction Potentials (E°cell = E°cathode − E°anode; intensive)
 *  4 — Reading Cell Diagrams & Observations (inert electrodes, gases, mass changes)
 *  5 — Spontaneity & ΔG° (ΔG° = −nFE°; sign links to K)
 *  6 — Problem-Solving Workshop (n, E°cell and ΔG° together)
 *  7 — Synthesis & AP Review (K from E°; intensive E°)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction to Galvanic Cells
  {
    id: 'gcp-ent-1a',
    question: 'A galvanic cell runs the reaction $\\text{Cl}_2(g) + 2\\text{Br}^-(aq) \\rightarrow 2\\text{Cl}^-(aq) + \\text{Br}_2(l)$. Which half-reaction occurs at the anode?',
    options: [
      '$\\text{Cl}_2 + 2e^- \\rightarrow 2\\text{Cl}^-$',
      '$2\\text{Br}^- \\rightarrow \\text{Br}_2 + 2e^-$',
      '$\\text{Br}_2 + 2e^- \\rightarrow 2\\text{Br}^-$',
      '$2\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2e^-$',
    ],
    correctIndex: 1,
    explanation: 'Bromide goes from −1 to 0, losing electrons, and oxidation always happens at the anode. Chlorine being reduced is the cathode half-reaction, and the other two run the reaction backward.',
    partNumber: 1,
    partTitle: 'Introduction to Galvanic Cells',
  },
  {
    id: 'gcp-ent-1b',
    question: 'How many electrons are transferred in the balanced cell reaction $\\text{Cr}(s) + 3\\text{Ag}^+(aq) \\rightarrow \\text{Cr}^{3+}(aq) + 3\\text{Ag}(s)$?',
    options: ['1', '4', '3', '6'],
    correctIndex: 2,
    explanation: 'One chromium atom loses 3 electrons, and three silver ions gain 1 each, so 3 electrons move. One is the per-silver change, and 6 counts electrons lost and gained separately.',
    partNumber: 1,
    partTitle: 'Introduction to Galvanic Cells',
  },

  // Part 2: Salt Bridges, Electron Flow & Ion Flow
  {
    id: 'gcp-ent-2a',
    question: 'A galvanic cell has a cadmium anode in $\\text{Cd(NO}_3)_2$ and a copper cathode in $\\text{Cu(NO}_3)_2$, joined by a $\\text{NaNO}_3$ salt bridge. How do ions move through the salt bridge?',
    options: [
      '$\\text{NO}_3^-$ moves to the cadmium side; $\\text{Na}^+$ moves to the copper side',
      '$\\text{Na}^+$ moves to the cadmium side; $\\text{NO}_3^-$ moves to the copper side',
      'Electrons move through the bridge from the cadmium side to the copper side',
      '$\\text{Cd}^{2+}$ ions move through the bridge to plate onto the copper',
    ],
    correctIndex: 0,
    explanation: 'Oxidation adds $\\text{Cd}^{2+}$ to the anode compartment, so anions flow there; reduction removes $\\text{Cu}^{2+}$ from the cathode compartment, so cations flow there. Electrons travel only through the wire, and the bridge carries its own ions.',
    partNumber: 2,
    partTitle: 'Salt Bridges, Electron Flow & Ion Flow',
  },
  {
    id: 'gcp-ent-2b',
    question: 'In the cadmium–copper cell described above, how do the electrode masses change as the cell operates?',
    options: [
      'Cadmium gains mass, and copper loses mass',
      'Both electrodes keep the same mass',
      'Cadmium loses mass, and copper gains mass',
      'Both electrodes lose mass as they dissolve',
    ],
    correctIndex: 2,
    explanation: 'Cadmium metal is oxidized to $\\text{Cd}^{2+}$ and dissolves, while $\\text{Cu}^{2+}$ is reduced and plates out as copper metal on the cathode. Only the anode dissolves.',
    partNumber: 2,
    partTitle: 'Salt Bridges, Electron Flow & Ion Flow',
  },

  // Part 3: Standard Reduction Potentials
  {
    id: 'gcp-ent-3a',
    question: 'Using $E^\\circ(\\text{Cr}^{3+}/\\text{Cr}) = -0.74$ V and $E^\\circ(\\text{Pb}^{2+}/\\text{Pb}) = -0.13$ V, what is $E^\\circ_{\\text{cell}}$ for the galvanic cell $2\\text{Cr} + 3\\text{Pb}^{2+} \\rightarrow 2\\text{Cr}^{3+} + 3\\text{Pb}$?',
    options: ['−0.61 V', '+0.87 V', '+1.09 V', '+0.61 V'],
    correctIndex: 3,
    explanation: 'Lead(II) has the higher potential and is reduced: $E^\\circ_{\\text{cell}} = -0.13 - (-0.74) = +0.61$ V. Potentials are intensive, so multiplying by the coefficients (giving 1.09 V) is wrong; 0.87 V adds the magnitudes, and $-0.61$ V subtracts in the wrong order.',
    partNumber: 3,
    partTitle: 'Standard Reduction Potentials',
  },
  {
    id: 'gcp-ent-3b',
    question: 'Which metal dissolves in 1 M $\\text{H}^+$ under standard conditions, releasing $\\text{H}_2$ gas? ($E^\\circ$ for $2\\text{H}^+/\\text{H}_2 = 0.00$ V)',
    options: [
      'Nickel ($E^\\circ = -0.26$ V)',
      'Copper ($E^\\circ = +0.34$ V)',
      'Silver ($E^\\circ = +0.80$ V)',
      'Gold ($E^\\circ = +1.50$ V)',
    ],
    correctIndex: 0,
    explanation: 'For the metal to be oxidized while $\\text{H}^+$ is reduced, $E^\\circ_{\\text{cell}} = 0.00 - E^\\circ_{\\text{metal}}$ must be positive, which happens only for a negative metal potential such as nickel\'s. Copper, silver, and gold give negative cell potentials.',
    partNumber: 3,
    partTitle: 'Standard Reduction Potentials',
  },

  // Part 4: Reading Cell Diagrams & Observations
  {
    id: 'gcp-ent-4a',
    question: 'One half-cell has a platinum wire in a solution 1 M in both $\\text{Fe}^{3+}$ and $\\text{Fe}^{2+}$ ($E^\\circ = +0.77$ V); the other has a copper strip in 1 M $\\text{Cu}^{2+}$ ($E^\\circ = +0.34$ V). What is observed as the cell runs?',
    options: [
      'The copper strip gains mass; the platinum is unchanged',
      'The platinum dissolves; the copper strip gains mass',
      'The copper strip and platinum wire both keep their mass',
      'The copper strip loses mass; the platinum is unchanged',
    ],
    correctIndex: 3,
    explanation: '$\\text{Fe}^{3+}$ has the higher potential, so it is reduced to $\\text{Fe}^{2+}$ at the inert platinum, whose mass does not change. Copper is oxidized at the anode, so the strip dissolves and loses mass.',
    partNumber: 4,
    partTitle: 'Reading Cell Diagrams & Observations',
  },
  {
    id: 'gcp-ent-4b',
    question: 'A cell pairs a zinc strip in 1 M $\\text{Zn}^{2+}$ ($E^\\circ = -0.76$ V) with a platinum electrode in 1 M HCl ($E^\\circ$ for $2\\text{H}^+/\\text{H}_2 = 0.00$ V). Gas bubbles appear at the platinum. Which half-reaction occurs there?',
    options: [
      '$\\text{H}_2(g) \\rightarrow 2\\text{H}^+(aq) + 2e^-$',
      '$\\text{Zn}^{2+}(aq) + 2e^- \\rightarrow \\text{Zn}(s)$',
      '$2\\text{H}^+(aq) + 2e^- \\rightarrow \\text{H}_2(g)$',
      '$\\text{Pt}(s) \\rightarrow \\text{Pt}^{2+}(aq) + 2e^-$',
    ],
    correctIndex: 2,
    explanation: 'The hydrogen couple has the higher potential, so $\\text{H}^+$ is reduced at the platinum cathode and the bubbles are hydrogen. Platinum is inert, zinc ions are not reduced in this cell, and oxidizing $\\text{H}_2$ would consume gas rather than form it.',
    partNumber: 4,
    partTitle: 'Reading Cell Diagrams & Observations',
  },

  // Part 5: Spontaneity & ΔG°
  {
    id: 'gcp-ent-5a',
    question: 'The cell $\\text{Ni}(s) + 2\\text{Ag}^+(aq) \\rightarrow \\text{Ni}^{2+}(aq) + 2\\text{Ag}(s)$ has $E^\\circ = +1.06$ V. What is $\\Delta G^\\circ$? ($F = 96{,}485$ C/mol)',
    options: ['−102 kJ', '−205 kJ', '+205 kJ', '−409 kJ'],
    correctIndex: 1,
    explanation: 'Two electrons are transferred, so $\\Delta G^\\circ = -(2)(96{,}485)(1.06) = -2.05 \\times 10^5$ J $= -205$ kJ. Using $n = 1$ gives $-102$ kJ, dropping the minus sign gives +205 kJ, and doubling $n$ again gives $-409$ kJ.',
    partNumber: 5,
    partTitle: 'Spontaneity & ΔG°',
  },
  {
    id: 'gcp-ent-5b',
    question: 'A two-electron cell reaction has $\\Delta G^\\circ = +38.6$ kJ. What are $E^\\circ_{\\text{cell}}$ and the size of $K$? ($F = 96{,}485$ C/mol)',
    options: [
      '$E^\\circ = -0.200$ V, and $K < 1$',
      '$E^\\circ = +0.200$ V, and $K > 1$',
      '$E^\\circ = -0.400$ V, and $K < 1$',
      '$E^\\circ = +0.200$ V, and $K < 1$',
    ],
    correctIndex: 0,
    explanation: '$E^\\circ = -\\Delta G^\\circ/(nF) = -38{,}600/(2 \\times 96{,}485) = -0.200$ V, and a positive $\\Delta G^\\circ$ means $K < 1$. Using $n = 1$ gives $-0.400$ V, and a positive $E^\\circ$ always pairs with $K > 1$, never $K < 1$.',
    partNumber: 5,
    partTitle: 'Spontaneity & ΔG°',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'gcp-ent-6a',
    question: 'A galvanic cell is built from Al|$\\text{Al}^{3+}$ ($E^\\circ = -1.66$ V) and Cu|$\\text{Cu}^{2+}$ ($E^\\circ = +0.34$ V). For the balanced reaction, what are $n$ and $\\Delta G^\\circ$? ($F = 96{,}485$ C/mol)',
    options: [
      '$n = 3$ and $\\Delta G^\\circ = -579$ kJ',
      '$n = 6$ and $\\Delta G^\\circ = -1158$ kJ',
      '$n = 2$ and $\\Delta G^\\circ = -386$ kJ',
      '$n = 6$ and $\\Delta G^\\circ = -2512$ kJ',
    ],
    correctIndex: 1,
    explanation: '$2\\text{Al} + 3\\text{Cu}^{2+} \\rightarrow 2\\text{Al}^{3+} + 3\\text{Cu}$ transfers 6 electrons, and $E^\\circ = 0.34 - (-1.66) = 2.00$ V, so $\\Delta G^\\circ = -(6)(96{,}485)(2.00) = -1158$ kJ. Multiplying the potentials by the coefficients gives the $-2512$ kJ value, and $n = 3$ or $n = 2$ counts only one half-reaction.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'gcp-ent-6b',
    question: 'Can $\\text{Fe}^{2+}$ ($E^\\circ = -0.44$ V) spontaneously oxidize zinc metal ($E^\\circ$ for $\\text{Zn}^{2+}/\\text{Zn} = -0.76$ V) under standard conditions?',
    options: [
      'No, because $E^\\circ_{\\text{cell}} = -0.32$ V',
      'Yes, because $E^\\circ_{\\text{cell}} = +1.20$ V',
      'No, because both potentials are negative',
      'Yes, because $E^\\circ_{\\text{cell}} = +0.32$ V',
    ],
    correctIndex: 3,
    explanation: 'With iron(II) reduced and zinc oxidized, $E^\\circ_{\\text{cell}} = -0.44 - (-0.76) = +0.32$ V, which is positive, so the reaction is favored. Only the difference matters, not whether each potential is negative, and 1.20 V adds the magnitudes.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'gcp-ent-7a',
    question: 'A two-electron galvanic cell has $E^\\circ = +0.46$ V at 298 K. What is the approximate value of $K$? ($F = 96{,}485$ C/mol; $R = 8.314$ J/(mol·K))',
    options: [
      '$K \\approx 1.6$',
      '$K \\approx 6 \\times 10^{7}$',
      '$K \\approx 4 \\times 10^{15}$',
      '$K \\approx 3 \\times 10^{-16}$',
    ],
    correctIndex: 2,
    explanation: 'Combining $\\Delta G^\\circ = -nFE^\\circ$ with $\\Delta G^\\circ = -RT\\ln K$ gives $\\ln K = nFE^\\circ/RT = (2)(96{,}485)(0.46)/2478 = 35.8$, so $K \\approx 4 \\times 10^{15}$. Using $n = 1$ gives about $6 \\times 10^7$, a sign error gives a tiny $K$, and $e^{0.46}$ leaves out $nF/RT$ entirely.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'gcp-ent-7b',
    question: 'A Zn–Cu cell at standard conditions is rebuilt with a zinc electrode twice as large and twice the volume of each solution. What happens to $E^\\circ_{\\text{cell}}$?',
    options: [
      'It doubles',
      'It stays the same',
      'It halves',
      'It changes sign',
    ],
    correctIndex: 1,
    explanation: 'Cell potential is an intensive property: it depends on which half-reactions occur and on concentrations, not on how much material is present. A larger cell can deliver more total charge, but its voltage is unchanged.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the galvanic-cells-potentials topic.
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
    { partNumber: 1, partTitle: 'Introduction to Galvanic Cells' },
    { partNumber: 2, partTitle: 'Salt Bridges, Electron Flow & Ion Flow' },
    { partNumber: 3, partTitle: 'Standard Reduction Potentials' },
    { partNumber: 4, partTitle: 'Reading Cell Diagrams & Observations' },
    { partNumber: 5, partTitle: 'Spontaneity & ΔG°' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
