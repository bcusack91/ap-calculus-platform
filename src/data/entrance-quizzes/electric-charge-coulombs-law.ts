/**
 * Entrance Quiz — Electric Charge & Coulomb's Law (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Introduction & Charge'
const P2 = "Coulomb's Law"
const P3 = 'Problem Solving'
const P4 = 'Conductors & Charging'
const P5 = 'Conservation & Quantization'
const P6 = 'Superposition'
const P7 = 'Synthesis & AP Strategies'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction & Charge
  {
    id: 'ecc-ent-1a',
    question: 'Three small balls are all charged. Ball A repels ball B, ball B attracts ball C, and ball C is positive. What are the signs of A and B?',
    options: [
      'A positive, B negative',
      'A negative, B negative',
      'A positive, B positive',
      'A negative, B positive',
    ],
    correctIndex: 1,
    explanation: 'B attracts the positive ball C, so B is negative. A repels B, so A has the same sign as B: both are negative.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'ecc-ent-1b',
    question: 'After a glass rod is rubbed with silk, the rod has a charge of $+3.2 \\times 10^{-9}$ C. What happened during the rubbing?',
    options: [
      '$2.0 \\times 10^{10}$ protons moved from the silk to the rod',
      '$2.0 \\times 10^{10}$ electrons moved from the silk to the rod',
      '$5.0 \\times 10^{-11}$ electrons moved from the rod to the silk',
      '$2.0 \\times 10^{10}$ electrons moved from the rod onto the silk',
    ],
    correctIndex: 3,
    explanation: 'Only electrons move between solids. A positive rod lost electrons, and $n = \\frac{3.2 \\times 10^{-9}}{1.6 \\times 10^{-19}} = 2.0 \\times 10^{10}$ of them went to the silk, which ends with an equal negative charge.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Coulomb's Law
  {
    id: 'ecc-ent-2a',
    question: 'Two point charges exert a force $F$ on each other. One charge is tripled, the other is halved, and the distance between them is tripled. What is the new force?',
    options: ['$F/2$', '$F/6$', '$3F/2$', '$F/12$'],
    correctIndex: 1,
    explanation: 'Multiply the factors: $3 \\times \\frac{1}{2} \\times \\frac{1}{3^2} = \\frac{1}{6}$. Treating the force as proportional to $1/r$ gives $F/2$, ignoring the distance gives $3F/2$, and squaring the halved charge gives $F/12$.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'ecc-ent-2b',
    question: 'Two charges exert a 36 N force on each other when they are a distance $r$ apart. At what separation is the force 4 N?',
    options: ['$9r$', '$r/3$', '$r/9$', '$3r$'],
    correctIndex: 3,
    explanation: 'The force falls by a factor of 9, and $F \\propto 1/r^2$, so the distance must grow by $\\sqrt{9} = 3$. Using $F \\propto 1/r$ would give $9r$.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Problem Solving
  {
    id: 'ecc-ent-3a',
    question: 'A $+4.0\\ \\mu\\text{C}$ charge and a $-6.0\\ \\mu\\text{C}$ charge are 30 cm apart. What is the force between them? Use $k = 9.0 \\times 10^9$ N·m²/C².',
    options: [
      '2.4 N, repulsive',
      '0.72 N, attractive',
      '2.4 N, attractive',
      '$2.4 \\times 10^{-4}$ N, attractive',
    ],
    correctIndex: 2,
    explanation: '$F = \\frac{(9.0 \\times 10^9)(4.0 \\times 10^{-6})(6.0 \\times 10^{-6})}{(0.30)^2} = 2.4$ N, attractive because the signs are opposite. Forgetting to square $r$ gives 0.72 N, and leaving $r$ in centimeters gives $2.4 \\times 10^{-4}$ N.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'ecc-ent-3b',
    question: 'Two equal charges 5.0 cm apart repel each other with a force of 3.6 N. What is the magnitude of each charge? Use $k = 9.0 \\times 10^9$ N·m²/C².',
    options: [
      '$1.0 \\times 10^{-12}$ C',
      '$1.0 \\times 10^{-6}$ C',
      '$2.0 \\times 10^{-5}$ C',
      '$1.0 \\times 10^{-4}$ C',
    ],
    correctIndex: 1,
    explanation: '$q^2 = \\frac{Fr^2}{k} = \\frac{(3.6)(0.050)^2}{9.0 \\times 10^9} = 1.0 \\times 10^{-12} \\text{ C}^2$, so $q = 1.0 \\times 10^{-6}$ C. Stopping before the square root gives $10^{-12}$, and using 5.0 instead of 0.050 m gives $10^{-4}$ C.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Conductors & Charging
  {
    id: 'ecc-ent-4a',
    question: 'A negatively charged rod is held near, but not touching, a neutral metal sphere. A grounding wire touches the sphere and is removed, and then the rod is taken away. What charge does the sphere end with, and where is it?',
    options: [
      'Positive, on its outer surface',
      'Negative, spread over its outer surface',
      'Positive, concentrated at its center',
      'Neutral, since the rod never touched it',
    ],
    correctIndex: 0,
    explanation: 'The rod pushes electrons in the sphere down the ground wire, so the sphere is left positive (opposite to the rod). On a conductor, excess charge spreads over the outer surface.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'ecc-ent-4b',
    question: 'A light, neutral ball of aluminum foil hangs from a thread. A positively charged rod is brought near; the ball swings toward the rod, touches it, and then swings away. Which explanation is correct?',
    options: [
      'Polarization attracts it; contact gives it positive charge, so the rod then repels it',
      'The rod charges it positive; contact then makes it neutral, so it drops away',
      'Polarization attracts it; contact gives it negative charge, so it is repelled',
      'Polarization attracts it; contact removes its charge, so gravity pulls it away',
    ],
    correctIndex: 0,
    explanation: 'The neutral ball is polarized, and its nearer negative side is attracted more strongly than its farther positive side is repelled. On contact it shares the rod\'s positive charge, so like charges then repel.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Conservation & Quantization
  {
    id: 'ecc-ent-5a',
    question: 'Identical metal spheres A, B and C carry $+12\\ \\mu\\text{C}$, $-4\\ \\mu\\text{C}$ and 0. A touches B and they are separated; then B touches C and they are separated. What is the final charge on C?',
    options: ['$+4\\ \\mu\\text{C}$', '$+2.7\\ \\mu\\text{C}$', '$+6\\ \\mu\\text{C}$', '$+2\\ \\mu\\text{C}$'],
    correctIndex: 3,
    explanation: 'A and B share $+12 - 4 = +8\\ \\mu\\text{C}$, so each has $+4\\ \\mu\\text{C}$. B then shares its $+4\\ \\mu\\text{C}$ with neutral C, leaving $+2\\ \\mu\\text{C}$ on each.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'ecc-ent-5b',
    question: 'A small sphere\'s charge changes from $+3.2 \\times 10^{-15}$ C to $-1.6 \\times 10^{-15}$ C. How many electrons did it gain?',
    options: [
      '$1.0 \\times 10^{4}$',
      '$2.0 \\times 10^{4}$',
      '$3.0 \\times 10^{4}$',
      '$7.7 \\times 10^{-34}$',
    ],
    correctIndex: 2,
    explanation: 'The charge changed by $-4.8 \\times 10^{-15}$ C, and $n = \\frac{4.8 \\times 10^{-15}}{1.6 \\times 10^{-19}} = 3.0 \\times 10^{4}$ electrons. Subtracting the magnitudes, $3.2 - 1.6$, gives only $1.0 \\times 10^{4}$.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: Superposition
  {
    id: 'ecc-ent-6a',
    question: 'Charge $q_1 = +2.0\\ \\mu\\text{C}$ is at $x = 0$ and $q_2 = +8.0\\ \\mu\\text{C}$ is at $x = 0.60$ m. What is the net force on a $+1.0\\ \\mu\\text{C}$ charge at $x = 0.30$ m? Use $k = 9.0 \\times 10^9$ N·m²/C².',
    options: [
      '0.60 N toward $q_1$',
      '1.0 N toward $q_1$',
      '0.60 N toward $q_2$',
      '1.0 N toward $q_2$',
    ],
    correctIndex: 0,
    explanation: '$q_1$ pushes the test charge toward $+x$ with 0.20 N and $q_2$ pushes it toward $-x$ with 0.80 N, so the net force is 0.60 N toward $q_1$. Adding the magnitudes gives 1.0 N.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'ecc-ent-6b',
    question: 'A $+9\\ \\mu\\text{C}$ charge is at $x = 0$ and a $-1\\ \\mu\\text{C}$ charge is at $x = 2.0$ m. At what position would a small test charge feel zero net electric force?',
    options: ['$x = 1.5$ m', '$x = 3.0$ m', '$x = 2.25$ m', '$x = 1.8$ m'],
    correctIndex: 1,
    explanation: 'Between opposite charges both forces point the same way, so the point lies outside, beyond the smaller charge: $\\frac{9}{x^2} = \\frac{1}{(x - 2.0)^2}$ gives $x - 2.0 = x/3$, so $x = 3.0$ m. The value 1.5 m solves the equation but lies between the charges, where the forces add.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Synthesis & AP Strategies
  {
    id: 'ecc-ent-7a',
    question: 'Two identical metal spheres carrying $+10\\ \\mu\\text{C}$ and $-2\\ \\mu\\text{C}$ attract each other with force $F$. They are touched together and returned to the same separation. What is the new force?',
    options: ['$0.8F$, attractive', '$1.25F$, repulsive', '$0.8F$, repulsive', '$1.8F$, attractive'],
    correctIndex: 2,
    explanation: 'Each sphere ends with $\\frac{+10 - 2}{2} = +4\\ \\mu\\text{C}$, so the product of charges goes from 20 to 16 (in $\\mu\\text{C}^2$): $0.8F$, now repulsive since both are positive. Inverting the ratio gives $1.25F$.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'ecc-ent-7b',
    question: 'Charges $+q$ sit at $(-a, 0)$ and $(+a, 0)$. What is the net force on a third charge $+q$ placed at $(0, a)$?',
    options: [
      '$1.0\\,kq^2/a^2$, along $+y$',
      '$0.71\\,kq^2/a^2$, along $+x$',
      '$1.4\\,kq^2/a^2$, along $+y$',
      '$0.71\\,kq^2/a^2$, along $+y$',
    ],
    correctIndex: 3,
    explanation: 'Each charge is $\\sqrt{2}a$ away and pushes with $\\frac{kq^2}{2a^2}$ at 45°. The $x$-components cancel, and the $y$-components add to $2 \\cdot \\frac{kq^2}{2a^2} \\cdot \\frac{\\sqrt{2}}{2} \\approx 0.71\\,kq^2/a^2$ along $+y$. Adding the magnitudes gives $1.0\\,kq^2/a^2$.',
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
