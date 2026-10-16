/**
 * Entrance Quiz — Current, Resistance & Ohm's Law (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Electric Current'
const P2 = 'Resistance & Resistivity'
const P3 = "Ohm's Law & Power"
const P4 = 'Measuring Resistance & Resistivity'
const P5 = 'Energy Transfer in Circuit Elements'
const P6 = 'EMF & Internal Resistance'
const P7 = 'Synthesis & AP Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Electric Current
  {
    id: 'cro-ent-1a',
    question: 'The current in a wire is 3.0 A for 4.0 s and then falls steadily to zero over the next 2.0 s. How much charge passes a point in the wire during the 6.0 s?',
    options: ['18 C', '12 C', '15 C', '3.0 C'],
    correctIndex: 2,
    explanation: 'Charge is the area under the current-time graph: a rectangle of $(3.0)(4.0) = 12$ C plus a triangle of $\\frac{1}{2}(3.0)(2.0) = 3.0$ C, for 15 C. Treating the current as 3.0 A for all 6.0 s gives 18 C.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'cro-ent-1b',
    question: 'A wire carries a steady 0.40 A. How long does it take $5.0 \\times 10^{20}$ electrons to pass a point in the wire?',
    options: ['32 s', '0.0050 s', '200 s', '$1.3 \\times 10^{21}$ s'],
    correctIndex: 2,
    explanation: 'The electrons carry $Q = (5.0 \\times 10^{20})(1.6 \\times 10^{-19}) = 80$ C, so $t = Q/I = 80/0.40 = 200$ s. Multiplying 80 C by 0.40 A gives 32 s, and skipping the conversion to coulombs gives $1.3 \\times 10^{21}$ s.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Resistance & Resistivity
  {
    id: 'cro-ent-2a',
    question: 'A wire with a resistance of 8.0 Ω is melted down and redrawn into a uniform wire three times as long, using all of the same metal. What is its new resistance?',
    options: ['24 Ω', '8.0 Ω', '2.7 Ω', '72 Ω'],
    correctIndex: 3,
    explanation: 'With the volume fixed, tripling $L$ cuts $A$ to one-third, so $R = \\rho L/A$ grows by $3 \\times 3 = 9$, to 72 Ω. Accounting only for the length gives 24 Ω.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'cro-ent-2b',
    question: 'An aluminum wire ($\\rho = 2.65 \\times 10^{-8}$ Ω·m) is 50 m long with a diameter of 2.0 mm. What is its resistance?',
    options: ['0.11 Ω', '0.42 Ω', '1.3 Ω', '1.7 Ω'],
    correctIndex: 1,
    explanation: 'The radius is 1.0 mm, so $A = \\pi(1.0 \\times 10^{-3})^2 = 3.14 \\times 10^{-6} \\text{ m}^2$ and $R = \\frac{(2.65 \\times 10^{-8})(50)}{3.14 \\times 10^{-6}} \\approx 0.42$ Ω. Using the diameter as the radius gives 0.11 Ω.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Ohm's Law & Power
  {
    id: 'cro-ent-3a',
    question: 'A bulb rated 60 W at 120 V is connected to a 60 V source. Treating the bulb as ohmic, what power does it dissipate?',
    options: ['30 W', '60 W', '120 W', '15 W'],
    correctIndex: 3,
    explanation: 'The bulb\'s resistance is $R = V^2/P = 120^2/60 = 240$ Ω, so at 60 V it dissipates $60^2/240 = 15$ W. Halving the potential difference quarters the power, not halves it.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'cro-ent-3b',
    question: 'A resistor dissipates 2.0 W while carrying a current of 0.25 A. What is its resistance?',
    options: ['8.0 Ω', '32 Ω', '0.50 Ω', '0.031 Ω'],
    correctIndex: 1,
    explanation: 'From $P = I^2R$, $R = \\frac{2.0}{(0.25)^2} = 32$ Ω. Dividing the power by the current only once gives 8.0 Ω, which is the potential difference in volts.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Measuring Resistance & Resistivity
  {
    id: 'cro-ent-4a',
    question: 'For a wire with cross-sectional area $2.0 \\times 10^{-7} \\text{ m}^2$, a graph of resistance (vertical) versus length (horizontal) is a straight line with slope 0.55 Ω/m. What is the resistivity of the wire?',
    options: [
      '$2.8 \\times 10^{6}$ Ω·m',
      '$3.6 \\times 10^{-7}$ Ω·m',
      '$1.1 \\times 10^{-7}$ Ω·m',
      '$5.5 \\times 10^{-1}$ Ω·m',
    ],
    correctIndex: 2,
    explanation: 'Since $R = \\frac{\\rho}{A}L$, the slope is $\\rho/A$, so $\\rho = (0.55)(2.0 \\times 10^{-7}) = 1.1 \\times 10^{-7}$ Ω·m. Dividing the slope by the area gives $2.8 \\times 10^{6}$.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'cro-ent-4b',
    question: 'A student measures a circuit element at three settings: 2.0 V gives 0.20 A, 4.0 V gives 0.36 A and 6.0 V gives 0.48 A. Which conclusion do the data support?',
    options: [
      'Non-ohmic: its resistance rises from 10 Ω to 12.5 Ω',
      'Non-ohmic: its resistance declines from 12.5 Ω to 10 Ω',
      'Ohmic: its resistance stays near 10 Ω at every setting',
      'Non-ohmic: its current falls as the voltage increases',
    ],
    correctIndex: 0,
    explanation: 'The ratio $V/I$ is 10 Ω, 11.1 Ω and 12.5 Ω, so the resistance grows with potential difference and the $I$-$V$ graph bends toward the $V$ axis. An ohmic element would keep that ratio constant, and the current here still rises with voltage.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Energy Transfer in Circuit Elements
  {
    id: 'cro-ent-5a',
    question: 'A 9.0 V battery drives a steady 0.40 A through a small motor for 15 minutes. How much energy does the battery transfer to the motor?',
    options: ['54 J', '216 J', '0.90 J', '3,240 J'],
    correctIndex: 3,
    explanation: 'The power is $P = I\\Delta V = (0.40)(9.0) = 3.6$ W, and over $15 \\times 60 = 900$ s the energy is $(3.6)(900) = 3{,}240$ J. Using 15 s instead of 900 s gives 54 J, and using 0.25 h gives 0.90 J.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'cro-ent-5b',
    question: 'Identical bulbs are wired to an ideal battery: bulb A in series with a parallel pair, B and C. A fourth identical bulb, D, is then added in parallel with B and C. What happens to the brightness of A and of B?',
    options: [
      'A gets dimmer; B is unchanged',
      'A gets brighter; B gets dimmer',
      'A and B both get brighter',
      'A is unchanged; B gets dimmer',
    ],
    correctIndex: 1,
    explanation: 'Adding D lowers the equivalent resistance from $1.5R$ to $\\frac{4}{3}R$, so the battery current through A rises and A brightens. A now takes a larger share of the emf, so the parallel group\'s potential difference falls from $\\varepsilon/3$ to $\\varepsilon/4$ and B dims.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: EMF & Internal Resistance
  {
    id: 'cro-ent-6a',
    question: 'A battery\'s terminal voltage is 11.4 V when it supplies 1.5 A and 10.8 V when it supplies 3.0 A. What are its emf and internal resistance?',
    options: [
      '11.4 V and 0.40 Ω',
      '12.0 V and 7.6 Ω',
      '10.2 V and 0.40 Ω',
      '12.0 V and 0.40 Ω',
    ],
    correctIndex: 3,
    explanation: 'The terminal voltage drops 0.6 V for 1.5 A more current, so $r = 0.40$ Ω, and $\\varepsilon = 11.4 + (1.5)(0.40) = 12.0$ V. Dividing 11.4 V by 1.5 A gives the external resistance, 7.6 Ω, not $r$.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'cro-ent-6b',
    question: 'A battery with $\\varepsilon = 9.0$ V and $r = 1.0$ Ω is connected to an external resistor. What external resistance makes the terminal voltage 7.5 V?',
    options: ['5.0 Ω', '6.0 Ω', '4.0 Ω', '7.5 Ω'],
    correctIndex: 0,
    explanation: 'The internal drop is $9.0 - 7.5 = 1.5$ V, so $I = 1.5$ A and $R = 7.5/1.5 = 5.0$ Ω. Dividing the emf by the current gives 6.0 Ω, which is the total resistance including $r$.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'cro-ent-7a',
    question: 'A battery with $\\varepsilon = 12$ V and $r = 0.50$ Ω powers a heater wire of 5.5 Ω. At what rates is thermal energy produced in the wire and inside the battery?',
    options: ['26 W and 0 W', '22 W and 2.0 W', '24 W and 2.0 W', '22 W and 1.0 W'],
    correctIndex: 1,
    explanation: 'The current is $\\frac{12}{5.5 + 0.50} = 2.0$ A, so the wire gets $(2.0)^2(5.5) = 22$ W and the battery wastes $(2.0)^2(0.50) = 2.0$ W, which together equal $\\varepsilon I = 24$ W. Ignoring $r$ gives 26 W.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'cro-ent-7b',
    question: 'Wires X and Y are made of the same metal and have the same length, but X has twice the diameter of Y. They are connected in parallel across a battery. How do their power outputs compare?',
    options: [
      'X uses four times the power of Y',
      'X uses twice the power that Y uses',
      'Y uses four times the power that X uses',
      'Both use the same power, since they share a voltage',
    ],
    correctIndex: 0,
    explanation: 'Twice the diameter means four times the area, so $R_X = R_Y/4$. In parallel both share the same potential difference, and $P = (\\Delta V)^2/R$ makes X dissipate four times as much.',
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
