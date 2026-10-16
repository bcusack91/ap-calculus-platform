/**
 * Entrance Quiz — Kirchhoff's Laws (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered. Every multi-loop circuit has a
 * single battery (CED 11.5 boundary).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Junction Rule (KCL)'
const P2 = 'Loop Rule (KVL)'
const P3 = 'Single-Loop Circuits'
const P4 = 'Multi-Loop Circuits (One Battery)'
const P5 = 'Potential at Points in a Circuit'
const P6 = 'RC Circuits'
const P7 = 'Synthesis & AP Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Junction Rule (KCL)
  {
    id: 'kir-ent-1a',
    question: 'Three wires meet at junction P. Wire 1 carries 2.0 A into P and wire 2 carries 5.0 A out of P. What is the current in wire 3?',
    options: ['3.0 A out of P', '3.0 A into P', '7.0 A out of P', '5.0 A out of P'],
    correctIndex: 1,
    explanation: 'Charge in per second must equal charge out per second. Only 2.0 A arrives through wire 1 while 5.0 A leaves, so wire 3 must bring the other 3.0 A into P.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'kir-ent-1b',
    question: 'A battery sends 3.0 A into three parallel branches. Branch 1 carries 1.2 A and branch 2 carries 0.5 A. What is the current in branch 3, and how much current returns to the battery?',
    options: [
      '1.3 A, and none returns to the battery',
      '1.7 A, and 3.0 A returns to the battery',
      '4.7 A, and 4.7 A returns to the battery',
      '1.3 A, and all 3.0 A returns to the battery',
    ],
    correctIndex: 3,
    explanation: 'The junction rule gives $3.0 = 1.2 + 0.5 + I_3$, so $I_3 = 1.3$ A. The branches rejoin, and charge is not used up, so the full 3.0 A returns to the battery.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Loop Rule (KVL)
  {
    id: 'kir-ent-2a',
    question: 'Walking clockwise around a loop, you cross a 6.0 V battery from its + terminal to its − terminal, and then a 2.0 Ω resistor against a 1.5 A current. What is the total change in potential across these two elements?',
    options: ['$-3.0$ V', '$-9.0$ V', '$+3.0$ V', '$+9.0$ V'],
    correctIndex: 0,
    explanation: 'Crossing a battery from + to − is a drop of 6.0 V, and crossing a resistor against the current is a rise of $IR = 3.0$ V, so the total is $-6.0 + 3.0 = -3.0$ V. Treating the resistor as a drop gives $-9.0$ V.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'kir-ent-2b',
    question: 'Two resistors with different resistances are connected in parallel across a battery. Which principle explains why they have the same potential difference across them?',
    options: [
      'The same current must pass through each of them',
      'Charge is conserved where the two branches split',
      'Each resistor uses up half of the battery\'s energy',
      'A loop through just the two resistors must have zero net change',
    ],
    correctIndex: 3,
    explanation: 'The two resistors form a closed loop with no battery in it. The loop rule (conservation of energy) requires the drop across one to equal the drop across the other. Their currents differ, and the junction rule concerns currents, not potential differences.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Single-Loop Circuits
  {
    id: 'kir-ent-3a',
    question: 'A single loop contains an 18 V battery and a 6.0 V battery facing in opposite directions, plus a 2.0 Ω and a 4.0 Ω resistor. What are the current and the potential difference across the 4.0 Ω resistor?',
    options: ['4.0 A and 16 V', '3.0 A and 12 V', '2.0 A and 8.0 V', '2.0 A and 4.0 V'],
    correctIndex: 2,
    explanation: 'Opposing emfs give a net $18 - 6.0 = 12$ V, so $I = 12/6.0 = 2.0$ A and the 4.0 Ω resistor has $(2.0)(4.0) = 8.0$ V. Adding the emfs gives 4.0 A, and ignoring the 6.0 V battery gives 3.0 A.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'kir-ent-3b',
    question: 'A single loop has a 12 V battery, a second battery of unknown emf and a total resistance of 4.0 Ω. The current is 0.50 A, in the direction opposite to the one the 12 V battery would drive. What is the second battery\'s emf?',
    options: [
      '10 V, also opposing the 12 V battery',
      '14 V, pushing the same way as the 12 V battery',
      '2.0 V, pushing the same way as the 12 V battery',
      '14 V, opposing the 12 V battery',
    ],
    correctIndex: 3,
    explanation: 'The second battery must win, so it opposes the 12 V battery with a larger emf: $\\varepsilon - 12 = (0.50)(4.0) = 2.0$ V, giving 14 V. A 10 V opposing battery would let the 12 V battery set the direction.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Multi-Loop Circuits (One Battery)
  {
    id: 'kir-ent-4a',
    question: 'A 20 V battery is in series with a 2.0 Ω resistor, and the current then splits between a 4.0 Ω and a 12 Ω resistor in parallel. What is the current in the 12 Ω resistor?',
    options: ['3.0 A', '4.0 A', '1.7 A', '1.0 A'],
    correctIndex: 3,
    explanation: 'The parallel pair is 3.0 Ω, so $R_{\\text{eq}} = 5.0$ Ω and the battery current is 4.0 A. The loop through the battery, the 2.0 Ω and the 12 Ω resistor gives $20 - (4.0)(2.0) - 12I = 0$, so $I = 1.0$ A. Using the full 20 V across 12 Ω gives 1.7 A.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'kir-ent-4b',
    question: 'A battery of emf $\\varepsilon$ is in series with $R_1$, and the current then splits into $I_2$ through $R_2$ and $I_3$ through $R_3$, in parallel. Which equation describes the loop through $R_2$ and $R_3$ only, going along $I_2$ and then back against $I_3$?',
    options: [
      '$\\varepsilon - I_2R_2 - I_3R_3 = 0$',
      '$-I_2R_2 + I_3R_3 = 0$',
      '$-I_2R_2 - I_3R_3 = 0$',
      '$\\varepsilon - I_1R_1 - I_2R_2 = 0$',
    ],
    correctIndex: 1,
    explanation: 'This loop contains no battery: crossing $R_2$ along its current is a drop and crossing $R_3$ against its current is a rise, so $-I_2R_2 + I_3R_3 = 0$. The equation with $\\varepsilon$ and $R_1$ is valid, but it describes a different loop.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Potential at Points in a Circuit
  {
    id: 'kir-ent-5a',
    question: 'An ideal 24 V battery is connected across two parallel branches. The left branch has 4.0 Ω on top and 8.0 Ω below, with point X between them; the right branch has 8.0 Ω on top and 4.0 Ω below, with point Y between them. What does an ideal voltmeter between X and Y read?',
    options: ['16 V', '0 V', '8.0 V', '24 V'],
    correctIndex: 2,
    explanation: 'Each branch has 24 V across 12 Ω, so each carries 2.0 A. Taking the negative terminal as 0 V, X is at $24 - 8.0 = 16$ V and Y is at $24 - 16 = 8.0$ V, so the meter reads 8.0 V. 16 V is the potential of X, not the difference.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'kir-ent-5b',
    question: 'A battery, $R_1$ and $R_2$ form a series circuit. A student mistakenly connects an ammeter, which has nearly zero resistance, in parallel with $R_2$. What happens?',
    options: [
      'Current bypasses $R_2$, and the battery current rises',
      'The ammeter reads the current in $R_2$ and changes nothing',
      'The current everywhere in the circuit drops nearly to zero',
      'The current in $R_2$ doubles while the battery current is unchanged',
    ],
    correctIndex: 0,
    explanation: 'The ammeter is a near-zero-resistance path around $R_2$, so nearly all of the current goes through the meter. The circuit\'s resistance drops to about $R_1$, so the battery current increases. A voltmeter placed in series would be the one that nearly stops the current.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: RC Circuits
  {
    id: 'kir-ent-6a',
    question: 'A 12 V battery is in series with a 4.0 Ω resistor, and the current then splits between an 8.0 Ω resistor and a branch with a 4.0 Ω resistor in series with an uncharged capacitor. What is the battery current just after the switch closes and after a long time?',
    options: [
      '1.0 A, then 1.8 A',
      '1.8 A, then 1.0 A',
      '3.0 A, then 1.0 A',
      '1.8 A, then 0 A',
    ],
    correctIndex: 1,
    explanation: 'At first the capacitor acts like a wire: 8.0 Ω in parallel with 4.0 Ω is 2.67 Ω, so $I = 12/6.67 = 1.8$ A. After a long time its branch carries no current, so $I = 12/(4.0 + 8.0) = 1.0$ A. The current does not stop, because the 8.0 Ω branch still conducts.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'kir-ent-6b',
    question: 'A 10 V battery charges an initially uncharged 150 μF capacitor through a 20 kΩ resistor. What are the time constant and the charge on the capacitor after one time constant?',
    options: ['3.0 s; 0.55 mC', '3.0 s; 0.95 mC', '0.0030 s; 0.95 mC', '3.0 s; 1.5 mC'],
    correctIndex: 1,
    explanation: '$\\tau = RC = (20 \\times 10^3)(150 \\times 10^{-6}) = 3.0$ s. The final charge is $C\\varepsilon = 1.5$ mC, and after one time constant a charging capacitor has about 63% of it, 0.95 mC. The value 0.55 mC uses the 37% discharging figure.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'kir-ent-7a',
    question: 'A 12 V battery is in series with a 4.0 Ω resistor, and the current then splits between an 8.0 Ω resistor and a branch with a 4.0 Ω resistor in series with a 50 μF capacitor. After a long time, how much energy does the capacitor store?',
    options: ['3.6 mJ', '3.2 mJ', '1.6 mJ', '0.40 mJ'],
    correctIndex: 2,
    explanation: 'In steady state the capacitor branch carries no current, so $I = 12/12 = 1.0$ A and the capacitor has the same 8.0 V as the 8.0 Ω resistor. $U = \\frac{1}{2}CV^2 = \\frac{1}{2}(50 \\times 10^{-6})(8.0)^2 = 1.6$ mJ. Using the full 12 V gives 3.6 mJ.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'kir-ent-7b',
    question: 'A single loop contains a 12 V battery with internal resistance 0.50 Ω, a 3.5 Ω resistor and an ideal 4.0 V battery that opposes the 12 V battery. What is the terminal voltage of the 12 V battery?',
    options: ['11 V', '12 V', '7.0 V', '8.0 V'],
    correctIndex: 0,
    explanation: 'The net emf is $12 - 4.0 = 8.0$ V across $3.5 + 0.50 = 4.0$ Ω, so $I = 2.0$ A. The terminal voltage is $\\varepsilon - Ir = 12 - (2.0)(0.50) = 11$ V; 7.0 V is the drop across the 3.5 Ω resistor, and 8.0 V is the net emf.',
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
