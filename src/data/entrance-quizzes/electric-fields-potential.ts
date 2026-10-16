/**
 * Entrance Quiz — Electric Fields & Potential (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'What Is an Electric Field?'
const P2 = 'Field Superposition'
const P3 = 'Field Lines & Visualization'
const P4 = 'Electric Potential (Voltage)'
const P5 = 'Potential Energy & Work'
const P6 = 'Equipotentials & E–V Relationship'
const P7 = 'Capacitors & Synthesis'

const questions: EntranceQuizQuestion[] = [
  // Part 1: What Is an Electric Field?
  {
    id: 'efp-ent-1a',
    question: 'A $-3.0\\ \\mu\\text{C}$ charge placed at point P feels a 0.060 N force directed north. What is the electric field at P?',
    options: [
      '$2.0 \\times 10^{4}$ N/C, north',
      '$2.0 \\times 10^{4}$ N/C, south',
      '$1.8 \\times 10^{-7}$ N/C, south',
      '$5.0 \\times 10^{-5}$ N/C, north',
    ],
    correctIndex: 1,
    explanation: '$E = F/|q| = 0.060 / (3.0 \\times 10^{-6}) = 2.0 \\times 10^{4}$ N/C. The field points the way a positive charge would be pushed, opposite the force on this negative charge, so it points south.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'efp-ent-1b',
    question: 'At 0.20 m from a point charge, the electric field is $4.5 \\times 10^{4}$ N/C and points toward the charge. What is the charge? Use $k = 9.0 \\times 10^9$ N·m²/C².',
    options: [
      '$+2.0 \\times 10^{-7}$ C',
      '$-1.0 \\times 10^{-6}$ C',
      '$-8.0 \\times 10^{-9}$ C',
      '$-2.0 \\times 10^{-7}$ C',
    ],
    correctIndex: 3,
    explanation: '$|q| = \\frac{Er^2}{k} = \\frac{(4.5 \\times 10^4)(0.20)^2}{9.0 \\times 10^9} = 2.0 \\times 10^{-7}$ C, and a field pointing toward the charge means the charge is negative. Forgetting to square $r$ gives $1.0 \\times 10^{-6}$ C.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Field Superposition
  {
    id: 'efp-ent-2a',
    question: 'A $+2.0\\ \\mu\\text{C}$ charge is at $x = 0$ and a $-2.0\\ \\mu\\text{C}$ charge is at $x = 0.40$ m. What is the electric field at $x = 0.20$ m? Use $k = 9.0 \\times 10^9$ N·m²/C².',
    options: [
      '$9.0 \\times 10^{5}$ N/C toward $+x$',
      '$4.5 \\times 10^{5}$ N/C toward $+x$',
      '$9.0 \\times 10^{5}$ N/C toward $-x$',
      '0 N/C, as the two fields cancel',
    ],
    correctIndex: 0,
    explanation: 'Each charge alone gives $\\frac{(9.0 \\times 10^9)(2.0 \\times 10^{-6})}{(0.20)^2} = 4.5 \\times 10^{5}$ N/C. The field points away from the positive charge and toward the negative one, so both point toward $+x$ and add to $9.0 \\times 10^{5}$ N/C.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'efp-ent-2b',
    question: 'A charge $+Q$ is at $x = 0$ and a charge $+9Q$ is at $x = d$. At what position on the line between them is the net electric field zero?',
    options: ['$x = d/10$', '$x = 3d/4$', '$x = d/2$', '$x = d/4$'],
    correctIndex: 3,
    explanation: 'Setting $\\frac{kQ}{x^2} = \\frac{9kQ}{(d - x)^2}$ gives $d - x = 3x$, so $x = d/4$, closer to the smaller charge. Using $1/r$ instead of $1/r^2$ gives $d/10$.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Field Lines & Visualization
  {
    id: 'efp-ent-3a',
    question: 'In a field-line drawing, 12 lines leave charge A, 4 of them end on charge B, and the other 8 run off to infinity. If A is $+6\\ \\mu\\text{C}$, what is B?',
    options: ['$+2\\ \\mu\\text{C}$', '$-6\\ \\mu\\text{C}$', '$-2\\ \\mu\\text{C}$', '$-4\\ \\mu\\text{C}$'],
    correctIndex: 2,
    explanation: 'The number of lines is proportional to the magnitude of the charge, and lines end on negative charge. Four lines are one-third of A\'s twelve, so B is $-2\\ \\mu\\text{C}$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'efp-ent-3b',
    question: 'In a region, the electric field lines are straight, point to the right and get closer together toward the right. A proton released from rest there will:',
    options: [
      'Move right with a steadily falling acceleration',
      'Move left with a steadily growing acceleration',
      'Move right with an acceleration that keeps growing',
      'Move right with a constant acceleration',
    ],
    correctIndex: 2,
    explanation: 'A positive charge accelerates along the field, to the right. Lines crowding together mean a stronger field, so the force and acceleration grow as the proton moves right.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Electric Potential (Voltage)
  {
    id: 'efp-ent-4a',
    question: 'A $+3.0$ nC charge is at $x = 0$ and a $-1.0$ nC charge is at $x = 0.40$ m. What is the electric potential at $x = 0.10$ m? Use $k = 9.0 \\times 10^9$ N·m²/C².',
    options: ['300 V', '240 V', '2,600 V', '270 V'],
    correctIndex: 1,
    explanation: 'Potentials add as signed scalars: $\\frac{(9.0 \\times 10^9)(3.0 \\times 10^{-9})}{0.10} + \\frac{(9.0 \\times 10^9)(-1.0 \\times 10^{-9})}{0.30} = 270 - 30 = 240$ V. Ignoring the negative sign gives 300 V, and using $r^2$ gives 2,600 V.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'efp-ent-4b',
    question: 'An electron moves from a point at $-50$ V to a point at $+250$ V, acted on only by the electric force. How does its kinetic energy change?',
    options: ['Loses 300 eV', 'Gains 200 eV', 'Gains 300 eV', 'Loses 200 eV'],
    correctIndex: 2,
    explanation: '$\\Delta V = +300$ V, so $\\Delta U = q\\Delta V = (-e)(+300 \\text{ V}) = -300$ eV. The potential energy it loses becomes kinetic energy: it gains 300 eV.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Potential Energy & Work
  {
    id: 'efp-ent-5a',
    question: 'How much work must an outside agent do to bring a $+2.0\\ \\mu\\text{C}$ charge from very far away to 0.30 m from a fixed $+5.0\\ \\mu\\text{C}$ charge, starting and ending at rest? Use $k = 9.0 \\times 10^9$ N·m²/C².',
    options: ['$+0.30$ J', '$-0.30$ J', '$+1.0$ J', '$+0.15$ J'],
    correctIndex: 0,
    explanation: 'The work equals the potential energy gained: $U = \\frac{kq_1q_2}{r} = \\frac{(9.0 \\times 10^9)(2.0 \\times 10^{-6})(5.0 \\times 10^{-6})}{0.30} = +0.30$ J, positive because like charges must be pushed together. Using $r^2$ gives 1.0 J.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'efp-ent-5b',
    question: 'A proton ($m = 1.67 \\times 10^{-27}$ kg) starts from rest and is accelerated through a potential difference of 500 V. What speed does it reach?',
    options: [
      '$2.2 \\times 10^{5}$ m/s',
      '$3.1 \\times 10^{5}$ m/s',
      '$9.6 \\times 10^{10}$ m/s',
      '$1.3 \\times 10^{7}$ m/s',
    ],
    correctIndex: 1,
    explanation: 'Energy conservation gives $qV = \\frac{1}{2}mv^2$, so $v = \\sqrt{\\frac{2(1.6 \\times 10^{-19})(500)}{1.67 \\times 10^{-27}}} \\approx 3.1 \\times 10^{5}$ m/s. Leaving out the 2 gives $2.2 \\times 10^{5}$ m/s, and skipping the square root gives $9.6 \\times 10^{10}$.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: Equipotentials & E–V Relationship
  {
    id: 'efp-ent-6a',
    question: 'Equipotential lines labeled 40 V, 30 V and 20 V run vertically, 2.0 cm apart, with the potential falling toward the right. What is the electric field in this region?',
    options: [
      '500 V/m, pointing right',
      '500 V/m, pointing left',
      '5.0 V/m, pointing right',
      '1,500 V/m, pointing right',
    ],
    correctIndex: 0,
    explanation: '$E = \\frac{|\\Delta V|}{d} = \\frac{10 \\text{ V}}{0.020 \\text{ m}} = 500$ V/m, directed from high to low potential, to the right and perpendicular to the equipotentials. Leaving $d$ in centimeters gives 5.0 V/m.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'efp-ent-6b',
    question: 'Two parallel plates are 5.0 mm apart. The bottom plate is at 0 V and the top plate at +400 V. What is the potential 1.0 mm above the bottom plate, and which way is the force on an electron there?',
    options: [
      '80 V; force toward the bottom plate',
      '320 V; force toward the top plate',
      '80 V; force toward the top plate',
      '320 V; force toward the bottom plate',
    ],
    correctIndex: 2,
    explanation: 'In a uniform field the potential rises linearly, 80 V per millimeter, so it is 80 V at 1.0 mm. The field points down, from high to low potential, so the force on a negative electron points up, toward the top plate.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Capacitors & Synthesis
  {
    id: 'efp-ent-7a',
    question: 'A parallel-plate capacitor stays connected to a battery while its plate separation is halved. What happens to the charge on the plates and to the field between them?',
    options: [
      '$Q$ doubles and $E$ is unchanged',
      '$Q$ is unchanged and $E$ doubles',
      '$Q$ halves and $E$ is unchanged',
      '$Q$ doubles and $E$ doubles',
    ],
    correctIndex: 3,
    explanation: 'The battery holds $V$ fixed. Halving $d$ doubles $C = \\varepsilon_0 A/d$, so $Q = CV$ doubles, and $E = V/d$ also doubles.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'efp-ent-7b',
    question: 'A 4.0 μF parallel-plate capacitor is charged to 50 V and disconnected from the battery. Its plate separation is then doubled. What are the new voltage and stored energy?',
    options: ['100 V; 0.010 J', '25 V; 0.0025 J', '100 V; 0.0050 J', '50 V; 0.0025 J'],
    correctIndex: 0,
    explanation: 'Isolated plates keep $Q = CV = 200\\ \\mu\\text{C}$, while $C$ halves to 2.0 μF, so $V = Q/C = 100$ V. The energy $\\frac{Q^2}{2C} = \\frac{(2.0 \\times 10^{-4})^2}{2(2.0 \\times 10^{-6})} = 0.010$ J, double the original 0.0050 J.',
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
