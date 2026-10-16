/**
 * Entrance Quiz — Entropy & the Second Law
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 * Built from the base (variant 1) lesson parts.
 *
 * Part mapping:
 *  1 — Introduction to Entropy (dispersal of matter and energy)
 *  2 — More Gas, More Entropy (predicting the sign of ΔS from moles of gas and phases)
 *  3 — Entropy & Thermodynamic Favorability (signs of ΔH and ΔS; favored is not fast)
 *  4 — Standard Entropy Changes (standard molar entropy patterns)
 *  5 — Calculating ΔS°rxn from Standard Entropies (ΔS° from tabulated S° values)
 *  6 — Problem-Solving Workshop (crossover temperature; ΔG with unit conversion)
 *  7 — Synthesis & AP Review (justifying favorability; full ΔS° calculation)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction to Entropy
  {
    id: 'esl-ent-1a',
    question: 'Which change decreases the entropy of the system?',
    options: [
      'Liquid water is warmed from 20°C to 60°C',
      'Helium is pumped into a smaller tank at constant temperature',
      'A sugar cube dissolves in a cup of tea',
      'Dry ice sublimes into carbon dioxide gas',
    ],
    correctIndex: 1,
    explanation: 'Squeezing the gas into less volume at constant temperature confines its atoms, so matter is less dispersed and entropy falls. Warming spreads energy over more motions, and dissolving and subliming spread matter out, so those three raise entropy.',
    partNumber: 1,
    partTitle: 'Introduction to Entropy',
  },
  {
    id: 'esl-ent-1b',
    question: 'A sealed, rigid flask of neon is heated from 300 K to 400 K. Why does the entropy of the gas increase?',
    options: [
      'The kinetic energies spread over a wider range',
      'The atoms spread into a larger volume',
      'The atoms break apart into smaller particles',
      'The atoms strike the walls less often',
    ],
    correctIndex: 0,
    explanation: 'At a higher temperature the distribution of kinetic energies broadens, so energy is more dispersed and entropy rises. The rigid flask keeps the volume fixed, neon atoms do not break apart, and hotter atoms hit the walls more often, not less.',
    partNumber: 1,
    partTitle: 'Introduction to Entropy',
  },

  // Part 2: More Gas, More Entropy
  {
    id: 'esl-ent-2a',
    question: 'For which reaction is $\\Delta S^\\circ$ expected to be the most positive?',
    options: [
      '$\\text{N}_2\\text{O}_4(g) \\rightarrow 2\\text{NO}_2(g)$',
      '$\\text{H}_2(g) + \\text{Cl}_2(g) \\rightarrow 2\\text{HCl}(g)$',
      '$2\\text{NaHCO}_3(s) \\rightarrow \\text{Na}_2\\text{CO}_3(s) + \\text{H}_2\\text{O}(g) + \\text{CO}_2(g)$',
      '$\\text{PCl}_3(g) + \\text{Cl}_2(g) \\rightarrow \\text{PCl}_5(g)$',
    ],
    correctIndex: 2,
    explanation: 'Decomposing the solid makes 2 mol of gas from none ($\\Delta n_{\\text{gas}} = +2$), the largest increase. Dinitrogen tetroxide splitting gains only 1 mol of gas, the hydrogen chloride reaction keeps the gas count the same, and forming $\\text{PCl}_5$ loses a mole of gas.',
    partNumber: 2,
    partTitle: 'More Gas, More Entropy',
  },
  {
    id: 'esl-ent-2b',
    question: 'Which process has a negative $\\Delta S$?',
    options: [
      '$\\text{NH}_4\\text{NO}_3(s) \\rightarrow \\text{NH}_4^+(aq) + \\text{NO}_3^-(aq)$',
      '$2\\text{H}_2\\text{O}_2(l) \\rightarrow 2\\text{H}_2\\text{O}(l) + \\text{O}_2(g)$',
      '$\\text{C}(s) + \\text{H}_2\\text{O}(g) \\rightarrow \\text{CO}(g) + \\text{H}_2(g)$',
      '$\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)$',
    ],
    correctIndex: 3,
    explanation: 'Dissolved ions locking into a solid lattice become far less dispersed, so entropy decreases. Dissolving a salt spreads its ions out, and the other two reactions produce more moles of gas than they consume.',
    partNumber: 2,
    partTitle: 'More Gas, More Entropy',
  },

  // Part 3: Entropy & Thermodynamic Favorability
  {
    id: 'esl-ent-3a',
    question: 'The reaction $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$ is exothermic. Which statement about its favorability is correct?',
    options: [
      'Favored at low T, because its ΔS < 0 opposes it',
      'Favored at high T, as its ΔS > 0 drives it',
      'Favored at all T, because it releases energy',
      'Never favored, because gas molecules are lost',
    ],
    correctIndex: 0,
    explanation: 'Four moles of gas become two, so $\\Delta S < 0$ while $\\Delta H < 0$: the two factors compete, and the enthalpy factor wins only when temperature is low. Being exothermic alone does not guarantee favorability at every temperature.',
    partNumber: 3,
    partTitle: 'Entropy & Thermodynamic Favorability',
  },
  {
    id: 'esl-ent-3b',
    question: 'A mixture of hydrogen and oxygen gas can sit for years without forming water, even though the reaction is thermodynamically favored. Why?',
    options: [
      'The reaction is actually unfavored at room temperature',
      'Favored reactions occur only while heat is supplied',
      'The activation energy is so high that the rate is negligible',
      'The gas mixture has already reached maximum entropy',
    ],
    correctIndex: 2,
    explanation: 'Favorability says whether products are favored, not how fast they form; a large activation energy keeps the rate near zero, so the system is under kinetic control. A spark supplies that energy once, and then the reaction continues on its own.',
    partNumber: 3,
    partTitle: 'Entropy & Thermodynamic Favorability',
  },

  // Part 4: Standard Entropy Changes
  {
    id: 'esl-ent-4a',
    question: 'Which substance has the greatest standard molar entropy at 298 K?',
    options: [
      '$\\text{C}_3\\text{H}_8(g)$',
      '$\\text{CH}_4(g)$',
      '$\\text{H}_2\\text{O}(l)$',
      '$\\text{C}(s,\\text{diamond})$',
    ],
    correctIndex: 0,
    explanation: 'Gases have far higher entropy than liquids or solids, and among gases a larger molecule with more atoms has more ways to vibrate and rotate, so propane beats methane. Rigid diamond has one of the lowest entropies of any substance.',
    partNumber: 4,
    partTitle: 'Standard Entropy Changes',
  },
  {
    id: 'esl-ent-4b',
    question: 'A solid is heated from near 0 K until it has become a hot gas. Where does its entropy increase the most sharply?',
    options: [
      'At the melting point, as the solid turns to liquid',
      'At the boiling point, as the liquid turns to gas',
      'Within the solid, as its vibrations grow stronger',
      'Within the gas, as its molecules speed up further',
    ],
    correctIndex: 1,
    explanation: 'Vaporization gives the molecules vastly more volume and freedom of motion, so the jump at the boiling point is much larger than the jump at melting. Within a single phase, entropy rises only gradually with temperature.',
    partNumber: 4,
    partTitle: 'Standard Entropy Changes',
  },

  // Part 5: Calculating ΔS°rxn from Standard Entropies (calculating ΔS°)
  {
    id: 'esl-ent-5a',
    question: 'Using $S^\\circ$ values CO(g) = 197.7, $\\text{O}_2(g)$ = 205.1, and $\\text{CO}_2(g)$ = 213.7 J/(mol·K), find $\\Delta S^\\circ$ for $2\\text{CO}(g) + \\text{O}_2(g) \\rightarrow 2\\text{CO}_2(g)$.',
    options: ['+173.1 J/K', '−173.1 J/K', '−189.1 J/K', '+32.0 J/K'],
    correctIndex: 1,
    explanation: '$\\Delta S^\\circ = 2(213.7) - [2(197.7) + 205.1] = 427.4 - 600.5 = -173.1$ J/K, negative as expected since 3 mol of gas become 2. Ignoring the coefficients gives $-189.1$, and treating the $S^\\circ$ of $\\text{O}_2$ as zero gives +32.0.',
    partNumber: 5,
    partTitle: 'Calculating ΔS°rxn from Standard Entropies',
  },
  {
    id: 'esl-ent-5b',
    question: 'Using $S^\\circ$ values $\\text{N}_2(g)$ = 191.6, $\\text{O}_2(g)$ = 205.1, and NO(g) = 210.8 J/(mol·K), find $\\Delta S^\\circ$ for $\\text{N}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{NO}(g)$.',
    options: ['−24.9 J/K', '−185.9 J/K', '+24.9 J/K', '+421.6 J/K'],
    correctIndex: 2,
    explanation: '$\\Delta S^\\circ = 2(210.8) - (191.6 + 205.1) = 421.6 - 396.7 = +24.9$ J/K, small because the moles of gas do not change. Dropping the coefficient on NO gives $-185.9$, and treating the elements as zero entropy gives +421.6.',
    partNumber: 5,
    partTitle: 'Calculating ΔS°rxn from Standard Entropies',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'esl-ent-6a',
    question: 'For vaporizing water, $\\Delta H^\\circ = +44.0$ kJ/mol and $\\Delta S^\\circ = +118.9$ J/(mol·K). Above what temperature is vaporization thermodynamically favored at standard pressure?',
    options: ['0.370 K', '370 K', '0.00270 K', '$5.23 \\times 10^6$ K'],
    correctIndex: 1,
    explanation: 'Setting $\\Delta G = 0$ gives $T = \\Delta H / \\Delta S = 44{,}000 / 118.9 = 370$ K. Leaving $\\Delta H$ in kJ gives 0.370 K, dividing the other way gives 0.00270 K, and multiplying gives $5.23 \\times 10^6$ K.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'esl-ent-6b',
    question: 'At 250 K, a reaction has $\\Delta H = -30.0$ kJ and $\\Delta S = -150$ J/K. What is $\\Delta G$, and is the reaction favored?',
    options: [
      '$\\Delta G = +7.5$ kJ; not favored',
      '$\\Delta G = -67.5$ kJ; favored',
      '$\\Delta G = +37{,}470$ kJ; not favored',
      '$\\Delta G = -7.5$ kJ; favored',
    ],
    correctIndex: 0,
    explanation: '$\\Delta G = -30.0 - (250)(-0.150) = -30.0 + 37.5 = +7.5$ kJ, so the entropy penalty wins and the reaction is not favored. Dropping the sign of $\\Delta S$ gives $-67.5$ kJ, mixing J and kJ gives 37,470 kJ, and subtracting in the wrong order gives $-7.5$ kJ.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'esl-ent-7a',
    question: 'Ammonium nitrate dissolves in water on its own at 25°C, and the solution gets cold. Which justification is correct?',
    options: [
      'Its ΔH is negative, since heat is given off to the water',
      'Its ΔS is negative, since water molecules order around the ions',
      'Its ΔG is positive, and the process is driven only by kinetics',
      'Its ΔS is positive and large enough that TΔS exceeds ΔH',
    ],
    correctIndex: 3,
    explanation: 'The cooling shows the process is endothermic, so the only way $\\Delta G = \\Delta H - T\\Delta S$ can be negative is a positive $\\Delta S$ large enough that $T\\Delta S > \\Delta H$; the ions dispersing through the water provide it. A process with positive $\\Delta G$ would not proceed on its own.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'esl-ent-7b',
    question: 'Using $S^\\circ$ values C(s, graphite) = 5.7, $\\text{H}_2(g)$ = 130.7, and $\\text{CH}_4(g)$ = 186.3 J/(mol·K), find $\\Delta S^\\circ$ for $\\text{C}(s) + 2\\text{H}_2(g) \\rightarrow \\text{CH}_4(g)$.',
    options: ['+180.6 J/K', '+49.9 J/K', '+80.8 J/K', '−80.8 J/K'],
    correctIndex: 3,
    explanation: '$\\Delta S^\\circ = 186.3 - [5.7 + 2(130.7)] = 186.3 - 267.1 = -80.8$ J/K, consistent with 2 mol of gas becoming 1. Treating $\\text{H}_2$ as zero entropy gives +180.6, and forgetting its coefficient gives +49.9.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the entropy-second-law topic.
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
    { partNumber: 1, partTitle: 'Introduction to Entropy' },
    { partNumber: 2, partTitle: 'More Gas, More Entropy' },
    { partNumber: 3, partTitle: 'Entropy & Thermodynamic Favorability' },
    { partNumber: 4, partTitle: 'Standard Entropy Changes' },
    { partNumber: 5, partTitle: 'Calculating ΔS°rxn from Standard Entropies' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
