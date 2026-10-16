/**
 * Entrance Quiz — Laws of Thermodynamics (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered. W is the work done ON the gas
 * (AP equation sheet: ΔU = Q + W).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Internal Energy & Work'
const P2 = 'First Law of Thermodynamics'
const P3 = 'PV Diagrams'
const P4 = 'Energy Accounting Around a Cycle'
const P5 = 'Second Law & Entropy'
const P6 = 'Same Endpoints, Different Paths'
const P7 = 'Synthesis & AP Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Internal Energy & Work
  {
    id: 'lot-ent-1a',
    question: 'Two moles of a monatomic ideal gas cool from 400 K to 250 K. What is the change in its internal energy? Use $R = 8.31$ J/(mol·K).',
    options: ['$+3{,}740$ J', '$-3{,}740$ J', '$-2{,}490$ J', '$-7{,}480$ J'],
    correctIndex: 1,
    explanation: '$\\Delta U = \\frac{3}{2}nR\\Delta T = \\frac{3}{2}(2)(8.31)(-150) \\approx -3{,}740$ J. Leaving out the factor $\\frac{3}{2}$ gives $-2{,}490$ J, and the positive value ignores that the gas cooled.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'lot-ent-1b',
    question: 'A gas is compressed from 6.0 L to 2.0 L at a constant pressure of 150 kPa. What are the work done on the gas, $W$, and the work done by the gas?',
    options: [
      '$W = -600$ J; by the gas, $+600$ J',
      '$W = +600$ J; by the gas, $+600$ J',
      '$W = +1{,}200$ J; by the gas, $-1{,}200$ J',
      '$W = +600$ J; by the gas, $-600$ J',
    ],
    correctIndex: 3,
    explanation: '$W = -P\\Delta V = -(150 \\times 10^3)(-4.0 \\times 10^{-3}) = +600$ J, positive because the surroundings compress the gas. The work done by the gas is always the opposite, $-600$ J.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: First Law of Thermodynamics
  {
    id: 'lot-ent-2a',
    question: 'A gas is compressed, with 400 J of work done on it, while it loses 250 J of energy by heating. What is the change in its internal energy?',
    options: ['$+150$ J', '$-650$ J', '$+650$ J', '$-150$ J'],
    correctIndex: 0,
    explanation: 'With $Q = -250$ J and $W = +400$ J, $\\Delta U = Q + W = +150$ J. Treating the work as negative gives $-650$ J, and ignoring the sign of $Q$ gives $+650$ J.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'lot-ent-2b',
    question: 'Identical samples of an ideal gas each receive 500 J by heating, one at constant volume and one at constant pressure. Which sample has the larger temperature rise?',
    options: [
      'Constant pressure, since the volume is free to grow as it warms',
      'Constant volume, since no energy leaves as work',
      'Neither, since both receive the same energy by heating',
      'Constant pressure, since the expanding gas gains energy by work',
    ],
    correctIndex: 1,
    explanation: 'At constant volume $W = 0$, so all 500 J becomes internal energy. At constant pressure the expanding gas does work, so $W < 0$ and only part of the 500 J raises $U$ and $T$.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: PV Diagrams
  {
    id: 'lot-ent-3a',
    question: 'A gas goes around a triangular cycle A → B → C → A with A = (1.0 L, 100 kPa), B = (4.0 L, 100 kPa) and C = (1.0 L, 400 kPa). What is the net work done on the gas per cycle?',
    options: ['$-450$ J', '$+900$ J', '$+450$ J', '$-900$ J'],
    correctIndex: 2,
    explanation: 'The enclosed triangle has area $\\frac{1}{2}(3.0 \\text{ L})(300 \\text{ kPa}) = 450$ J. Going right along the bottom, up to the top left and back down is counterclockwise, so net work is done on the gas: $W_{\\text{net}} = +450$ J.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'lot-ent-3b',
    question: 'A gas expands from 2.0 L to 5.0 L along a straight line on a PV diagram while its pressure drops from 300 kPa to 100 kPa. How much work does the gas do?',
    options: ['900 J', '300 J', '−600 J', '600 J'],
    correctIndex: 3,
    explanation: 'The area under the line is a trapezoid: average pressure 200 kPa times 3.0 L gives 600 J, positive because the gas expands. Using only 300 kPa or only 100 kPa gives 900 J or 300 J.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Energy Accounting Around a Cycle
  {
    id: 'lot-ent-4a',
    question: 'One step of a cycle compresses a monatomic ideal gas at a constant 200 kPa from 5.0 L to 2.0 L. How much energy is transferred to the gas by heating during this step?',
    options: ['$-300$ J', '$-1{,}500$ J', '$+1{,}500$ J', '$-900$ J'],
    correctIndex: 1,
    explanation: '$W = -P\\Delta V = +600$ J and $\\Delta U = \\frac{3}{2}\\Delta(PV) = \\frac{3}{2}(400 - 1{,}000) = -900$ J, so $Q = \\Delta U - W = -1{,}500$ J. Adding $W$ to $\\Delta U$ instead gives $-300$ J.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'lot-ent-4b',
    question: 'A fixed sample of ideal gas visits four states: A (2.0 L, 300 kPa), B (5.0 L, 150 kPa), C (5.0 L, 100 kPa) and D (1.0 L, 500 kPa). Which states are hottest and coldest?',
    options: [
      'D is hottest; A is coldest',
      'A is hottest; C is coldest',
      'B is hottest; C and D are coldest',
      'B is hottest; A is coldest',
    ],
    correctIndex: 2,
    explanation: 'For a fixed amount of ideal gas $T \\propto PV$. The products are 600 J, 750 J, 500 J and 500 J, so B is hottest and C and D tie for coldest, even though D has the highest pressure.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Second Law & Entropy
  {
    id: 'lot-ent-5a',
    question: 'An ideal gas fills one half of an insulated box. A partition is removed, and the gas spreads into the empty other half. What happens to the gas?',
    options: [
      'Entropy is unchanged; temperature falls',
      'Entropy increases; temperature falls',
      'Entropy increases; temperature rises',
      'Entropy increases; temperature is unchanged',
    ],
    correctIndex: 3,
    explanation: 'The gas pushes on nothing and no heating occurs, so $W = 0$, $Q = 0$ and $\\Delta U = 0$: the temperature of the ideal gas stays the same. Spreading into more space is irreversible, so the entropy of this isolated gas increases.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'lot-ent-5b',
    question: 'A refrigerator moves energy out of its cold interior and into the warmer kitchen. Which statement is consistent with the second law?',
    options: [
      'The food\'s entropy can decrease if the kitchen\'s entropy rises by at least as much',
      'The total entropy of food and kitchen falls, since the cold interior gets colder',
      'The process breaks the second law but is allowed, since energy is conserved',
      'Entropy stays constant, since the refrigerant flows around a closed loop',
    ],
    correctIndex: 0,
    explanation: 'A system that loses energy can lose entropy, but only if its surroundings gain at least as much. The compressor\'s work makes the cold-to-hot transfer possible, and the total entropy does not decrease.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: Same Endpoints, Different Paths
  {
    id: 'lot-ent-6a',
    question: 'A gas goes from A (2.0 L, 200 kPa) to B (4.0 L, 100 kPa). Path 1 expands at 200 kPa and then cools at constant volume; path 2 cools at constant volume and then expands at 100 kPa. How much energy is added by heating along path 1 and along path 2?',
    options: ['200 J and 400 J', '400 J and 400 J', '400 J and 200 J', '0 J and 0 J'],
    correctIndex: 2,
    explanation: 'Both states have $PV = 400$ J, so $\\Delta U = 0$ on either path. Path 1 has $W = -(200)(2.0) = -400$ J and path 2 has $W = -(100)(2.0) = -200$ J, so $Q = -W$ gives 400 J and 200 J.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'lot-ent-6b',
    question: 'A cylinder of gas sits in an ice bath and is compressed slowly enough that its temperature stays constant. Which description of the energy transfers is correct?',
    options: [
      'Work is done on it, and its internal energy rises by that amount',
      'Work is done on it, and it gives that energy to the bath',
      'It does work on the piston, and it takes in energy from the bath',
      'Work is done on it, and it also takes in energy from the bath',
    ],
    correctIndex: 1,
    explanation: 'Compression makes the work done on the gas positive. Constant temperature means $\\Delta U = 0$, so $Q = -W < 0$: the gas gives the energy from the work to the ice bath.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'lot-ent-7a',
    question: 'One mole of a monatomic ideal gas is warmed at constant pressure from 300 K to 400 K. How much energy is transferred to it by heating? Use $R = 8.31$ J/(mol·K).',
    options: ['1,250 J', '831 J', '416 J', '2,080 J'],
    correctIndex: 3,
    explanation: '$\\Delta U = \\frac{3}{2}nR\\Delta T \\approx 1{,}250$ J, and at constant pressure $W = -P\\Delta V = -nR\\Delta T \\approx -831$ J. Then $Q = \\Delta U - W \\approx 2{,}080$ J; 1,250 J counts only the warming.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'lot-ent-7b',
    question: 'During one trip around a cycle, a gas gains 1,400 J by heating on some steps and loses 900 J by heating on others. What are the net work done on the gas and its change in internal energy for the cycle?',
    options: [
      '$W_{\\text{net}} = -500$ J; $\\Delta U = 0$',
      '$W_{\\text{net}} = +500$ J; $\\Delta U = 0$',
      '$W_{\\text{net}} = 0$; $\\Delta U = +500$ J',
      '$W_{\\text{net}} = -2{,}300$ J; $\\Delta U = 0$',
    ],
    correctIndex: 0,
    explanation: 'Returning to the starting state makes $\\Delta U = 0$. The net heating is $1{,}400 - 900 = +500$ J, so $W_{\\text{net}} = -Q_{\\text{net}} = -500$ J: the gas does 500 J of net work.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
