/**
 * Entrance Quiz — Series & Parallel Circuits (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Series Circuits'
const P2 = 'Parallel Circuits'
const P3 = 'Combination Circuits'
const P4 = 'Voltage & Current Dividers'
const P5 = 'Power in Circuits'
const P6 = 'Capacitors in Circuits'
const P7 = 'Synthesis & AP Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Series Circuits
  {
    id: 'spc-ent-1a',
    question: 'A 6.0 Ω resistor and an unknown resistor are connected in series to a 12 V battery. A voltmeter across the 6.0 Ω resistor reads 4.0 V. What is the unknown resistance?',
    options: ['3.0 Ω', '18 Ω', '12 Ω', '6.0 Ω'],
    correctIndex: 2,
    explanation: 'The current is $4.0/6.0 = 0.67$ A, and the unknown resistor takes the remaining $12 - 4.0 = 8.0$ V, so $R = 8.0/0.67 = 12$ Ω. Dividing the full 12 V by the current gives 18 Ω, the total resistance.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'spc-ent-1b',
    question: 'A 10 Ω resistor and a 20 Ω resistor are in series with a battery. The 20 Ω resistor is replaced by a 40 Ω resistor. What happens to the current and to the potential difference across the 10 Ω resistor?',
    options: [
      'Current decreases; its voltage increases',
      'Both decrease',
      'Current is unchanged; its voltage decreases',
      'Both stay the same',
    ],
    correctIndex: 1,
    explanation: 'The total resistance rises from 30 Ω to 50 Ω, so the current falls. The 10 Ω resistor\'s potential difference is $IR$ with a smaller $I$, so it falls too; the 40 Ω resistor takes a larger share.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Parallel Circuits
  {
    id: 'spc-ent-2a',
    question: 'Resistors of 6.0 Ω, 12 Ω and 12 Ω are connected in parallel across a 12 V battery. What current does the battery supply?',
    options: ['0.40 A', '2.0 A', '1.0 A', '4.0 A'],
    correctIndex: 3,
    explanation: 'Each branch has the full 12 V, so the branch currents are 2.0 A, 1.0 A and 1.0 A, for a total of 4.0 A (an equivalent resistance of 3.0 Ω). Adding the resistances as if in series gives 0.40 A.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'spc-ent-2b',
    question: 'Three identical bulbs are connected in parallel across an ideal battery. One bulb is unscrewed. What happens to the other two bulbs and to the battery current?',
    options: [
      'They get brighter; the battery current is unchanged',
      'They get dimmer; the battery current falls by one-third',
      'They stay as bright; the battery current is unchanged',
      'They keep their brightness; the battery current falls by one-third',
    ],
    correctIndex: 3,
    explanation: 'Each remaining bulb still has the full battery potential difference across it, so its current and brightness do not change. The battery no longer supplies the third branch, so its current drops to two-thirds of its old value.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Combination Circuits
  {
    id: 'spc-ent-3a',
    question: 'A 4.0 Ω resistor is in series with a parallel pair of 6.0 Ω and 3.0 Ω resistors, all connected to an 18 V battery. What is the current through the 3.0 Ω resistor?',
    options: ['2.0 A', '3.0 A', '1.0 A', '6.0 A'],
    correctIndex: 0,
    explanation: 'The pair is equivalent to 2.0 Ω, so the total is 6.0 Ω and the battery current is 3.0 A. The pair has $(3.0)(2.0) = 6.0$ V across it, so the 3.0 Ω branch carries 2.0 A. The full 3.0 A goes through the 4.0 Ω resistor only.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'spc-ent-3b',
    question: 'Four identical resistors, each $R$: two are in series, that pair is in parallel with a third, and the whole group is in series with the fourth. What is the equivalent resistance?',
    options: ['$4R$', '$3R$', '$R/4$', '$5R/3$'],
    correctIndex: 3,
    explanation: 'The series pair is $2R$; in parallel with $R$ it gives $\\frac{(2R)(R)}{3R} = \\frac{2R}{3}$; adding the fourth resistor gives $\\frac{5R}{3}$. Putting all four in series gives $4R$, and ignoring the parallel branch gives $3R$.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Voltage & Current Dividers
  {
    id: 'spc-ent-4a',
    question: 'A current of 9.0 A splits between a 3.0 Ω resistor and a 6.0 Ω resistor connected in parallel. What is the current in the 6.0 Ω resistor?',
    options: ['6.0 A', '3.0 A', '4.5 A', '1.5 A'],
    correctIndex: 1,
    explanation: 'The current splits in inverse proportion to resistance: $I_6 = 9.0 \\times \\frac{3.0}{3.0 + 6.0} = 3.0$ A, and the 3.0 Ω resistor takes the other 6.0 A. Giving the larger resistor the larger share flips the rule.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'spc-ent-4b',
    question: 'A fixed resistor and a variable resistor are in series with a battery, and the output is the potential difference across the variable resistor. The variable resistance is increased. What happens?',
    options: [
      'The current falls, and the output rises',
      'The current falls, and the output falls with it',
      'The current rises, and the output rises with it',
      'The current rises, and the output drops off',
    ],
    correctIndex: 0,
    explanation: 'More total resistance means less current. The variable resistor now takes a larger fraction of the battery\'s potential difference, $\\frac{R_{\\text{var}}}{R_{\\text{fixed}} + R_{\\text{var}}}$, so the output rises even though the current falls.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Power in Circuits
  {
    id: 'spc-ent-5a',
    question: 'A 4.0 Ω resistor and a 12 Ω resistor are connected in series to a 24 V battery. What power does the 12 Ω resistor dissipate?',
    options: ['48 W', '9.0 W', '36 W', '27 W'],
    correctIndex: 3,
    explanation: 'The current is $\\frac{24}{16} = 1.5$ A, so the 12 Ω resistor dissipates $(1.5)^2(12) = 27$ W. Using the full 24 V across it gives 48 W, and 36 W is the total from the battery.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'spc-ent-5b',
    question: 'Identical bulbs are connected to an ideal battery: bulb A alone on one branch, and bulbs B and C in series on a second branch in parallel with the first. How do their brightnesses compare?',
    options: [
      'B and C are equal; A is dimmer',
      'All three are equally bright',
      'A is brightest; B and C are equal',
      'A is brightest, then B, then C',
    ],
    correctIndex: 2,
    explanation: 'A has the full battery potential difference, while B and C split it, so each has half of A\'s potential difference and one-quarter of its power. B and C carry the same current, so they are equally bright.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: Capacitors in Circuits
  {
    id: 'spc-ent-6a',
    question: 'A 3.0 μF capacitor and a 6.0 μF capacitor are connected in series to a 12 V battery. What are the charge on and the potential difference across the 3.0 μF capacitor?',
    options: ['36 μC and 12 V', '24 μC and 8.0 V', '24 μC and 4.0 V', '108 μC and 12 V'],
    correctIndex: 1,
    explanation: 'In series, $C = \\frac{(3.0)(6.0)}{9.0} = 2.0$ μF and each capacitor holds $Q = (2.0)(12) = 24$ μC. Then $V = Q/C = 24/3.0 = 8.0$ V; the smaller capacitor takes the larger share, the reverse of series resistors.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'spc-ent-6b',
    question: 'A 2.0 μF and a 4.0 μF capacitor are connected in parallel, and that pair is in series with a 3.0 μF capacitor across a 9.0 V battery. How much energy does the network store?',
    options: ['162 μJ', '365 μJ', '81 μJ', '37 μJ'],
    correctIndex: 2,
    explanation: 'The parallel pair adds to 6.0 μF, and 6.0 μF in series with 3.0 μF gives 2.0 μF. The energy is $\\frac{1}{2}CV^2 = \\frac{1}{2}(2.0 \\times 10^{-6})(9.0)^2 = 81$ μJ; leaving out the $\\frac{1}{2}$ gives 162 μJ.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'spc-ent-7a',
    question: 'A 36 V battery is connected to a 6.0 Ω resistor in series with two 12 Ω resistors in parallel. One of the 12 Ω resistors is then removed. How does the power dissipated in the 6.0 Ω resistor change?',
    options: [
      'It falls from 54 W to 24 W',
      'It stays at 54 W',
      'It rises from 24 W to 54 W',
      'It falls from 54 W to 36 W',
    ],
    correctIndex: 0,
    explanation: 'Before, the total is $6.0 + 6.0 = 12$ Ω, so $I = 3.0$ A and $P = (3.0)^2(6.0) = 54$ W. After, the total is 18 Ω, so $I = 2.0$ A and $P = 24$ W: raising the total resistance cuts the current through the series resistor.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'spc-ent-7b',
    question: 'A 12 V battery is connected to a 2.0 Ω resistor in series with a parallel pair of 3.0 Ω and 6.0 Ω resistors. What are the total power and the power in the 6.0 Ω resistor?',
    options: ['36 W; 24 W', '36 W; 6.0 W', '13 W; 24 W', '36 W; 12 W'],
    correctIndex: 1,
    explanation: 'The pair is 2.0 Ω, so the total is 4.0 Ω, $I = 3.0$ A and $P_{\\text{total}} = (3.0)(12) = 36$ W. The pair has $(3.0)(2.0) = 6.0$ V across it, so the 6.0 Ω resistor dissipates $\\frac{6.0^2}{6.0} = 6.0$ W.',
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
