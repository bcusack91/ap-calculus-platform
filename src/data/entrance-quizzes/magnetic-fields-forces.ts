/**
 * Entrance Quiz — Magnetic Fields & Forces (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Magnetic Fields'
const P2 = 'Force on Moving Charges'
const P3 = 'Circular Motion in B Fields'
const P4 = 'Force on Current-Carrying Wires'
const P5 = 'Fields Made by Currents'
const P6 = 'Magnetic Materials & the Hall Effect'
const P7 = 'Synthesis & AP Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Magnetic Fields
  {
    id: 'mff-ent-1a',
    question: 'A bar magnet lies on a table with its north end pointing east. A small compass is held just above the middle of the magnet. Which way does the north end of the compass needle point?',
    options: [
      'East, toward the magnet\'s north end',
      'West, toward the magnet\'s south end',
      'Straight down, into the magnet',
      'Straight up, away from the magnet',
    ],
    correctIndex: 1,
    explanation: 'Outside a magnet the field runs from its north pole around to its south pole, so above the middle it points from the east end toward the west end. A compass needle aligns with the field, so its north end points west.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'mff-ent-1b',
    question: 'Which of these produces no magnetic field at a nearby point P?',
    options: [
      'A proton moving past P at a steady speed',
      'A steady current in a wire near P',
      'A charged sphere at rest near P',
      'A magnetized iron bar lying near P',
    ],
    correctIndex: 2,
    explanation: 'Magnetic fields come from moving charges: a moving proton, the drifting charges of a current, and the aligned electron motion inside a magnetized bar all qualify. A charge at rest makes only an electric field.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Force on Moving Charges
  {
    id: 'mff-ent-2a',
    question: 'An electron moves toward the top of the page through a uniform magnetic field that points into the page. Which way is the magnetic force on the electron?',
    options: [
      'Toward the left side of the page',
      'Toward the right side of the page',
      'Out of the page',
      'Toward the top of the page',
    ],
    correctIndex: 1,
    explanation: 'For a positive charge, fingers up the page curled into the page leave the thumb pointing left. The electron\'s negative charge reverses that, so the force points to the right. The force is perpendicular to both $\\vec{v}$ and $\\vec{B}$, so it cannot point along either.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'mff-ent-2b',
    question: 'An alpha particle (charge $+3.2 \\times 10^{-19}$ C) moves at $2.0 \\times 10^6$ m/s perpendicular to a 0.40 T magnetic field. What is the magnitude of the magnetic force on it?',
    options: [
      '$1.3 \\times 10^{-13}$ N',
      '$6.4 \\times 10^{-13}$ N',
      '$1.6 \\times 10^{-12}$ N',
      '$2.6 \\times 10^{-13}$ N',
    ],
    correctIndex: 3,
    explanation: '$F = qvB = (3.2 \\times 10^{-19})(2.0 \\times 10^6)(0.40) \\approx 2.6 \\times 10^{-13}$ N. Using the proton charge gives half that, and leaving out $B$ gives $6.4 \\times 10^{-13}$ N.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Circular Motion in B Fields
  {
    id: 'mff-ent-3a',
    question: 'A proton and an electron enter the same uniform magnetic field with the same speed, both moving perpendicular to the field. How do their circular paths compare?',
    options: [
      'The proton\'s circle is larger; they curve oppositely',
      'The proton\'s circle is larger; they curve the same way',
      'The proton\'s circle is smaller; they curve oppositely',
      'Both circles are the same size; they curve oppositely',
    ],
    correctIndex: 0,
    explanation: 'With equal speed, charge magnitude and field, $r = \\frac{mv}{qB}$ is proportional to mass, so the much heavier proton makes a far larger circle. Opposite charges feel opposite forces, so they curve in opposite senses.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'mff-ent-3b',
    question: 'Singly charged ions pass undeflected through crossed fields with $E = 2.0 \\times 10^4$ V/m and $B = 0.10$ T, then enter a region with only $B = 0.10$ T. What is the radius of the path for an ion of mass $3.2 \\times 10^{-26}$ kg?',
    options: ['0.80 m', '0.20 m', '0.0040 m', '0.40 m'],
    correctIndex: 3,
    explanation: 'Undeflected ions have $v = E/B = 2.0 \\times 10^5$ m/s, so $r = \\frac{mv}{qB} = \\frac{(3.2 \\times 10^{-26})(2.0 \\times 10^5)}{(1.6 \\times 10^{-19})(0.10)} = 0.40$ m. The value 0.80 m is the diameter, and 0.0040 m comes from $v = EB$.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Force on Current-Carrying Wires
  {
    id: 'mff-ent-4a',
    question: 'A horizontal wire 0.25 m long carries 4.0 A toward the east in a uniform 0.60 T magnetic field pointing north. What is the magnetic force on the wire?',
    options: [
      '0.60 N, downward',
      '2.4 N, pointing upward',
      '0.60 N, upward',
      '0.60 N, toward the west',
    ],
    correctIndex: 2,
    explanation: '$F = BIL = (0.60)(4.0)(0.25) = 0.60$ N. With fingers pointing east and curled toward north, the thumb points up. Leaving out the length gives 2.4 N, and the force cannot point west because it must be perpendicular to the current.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'mff-ent-4b',
    question: 'Two long parallel wires 2.0 cm apart carry 10 A and 5.0 A in the same direction. What is the magnetic force per meter on the 5.0 A wire? Use $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A.',
    options: [
      '$5.0 \\times 10^{-4}$ N/m, away from the other wire',
      '$1.0 \\times 10^{-3}$ N/m, toward the other wire',
      '$5.0 \\times 10^{-4}$ N/m, toward the other wire',
      '$2.5 \\times 10^{-4}$ N/m, toward the other wire',
    ],
    correctIndex: 2,
    explanation: '$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} = \\frac{(2 \\times 10^{-7})(10)(5.0)}{0.020} = 5.0 \\times 10^{-4}$ N/m. Currents in the same direction attract, and by Newton\'s third law each wire feels the same size force.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Fields Made by Currents
  {
    id: 'mff-ent-5a',
    question: 'A long straight wire carries 8.0 A. What is the magnetic field 4.0 cm from the wire? Use $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A.',
    options: [
      '$1.0 \\times 10^{-3}$ T',
      '$4.0 \\times 10^{-5}$ T',
      '$4.0 \\times 10^{-7}$ T',
      '$2.5 \\times 10^{-4}$ T',
    ],
    correctIndex: 1,
    explanation: '$B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{(2 \\times 10^{-7})(8.0)}{0.040} = 4.0 \\times 10^{-5}$ T. Using $r^2$ gives $1.0 \\times 10^{-3}$ T, and leaving $r$ in centimeters gives $4.0 \\times 10^{-7}$ T.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'mff-ent-5b',
    question: 'Wire A carries 6.0 A out of the page and wire B, 8.0 cm to its right, carries 2.0 A into the page. Where on the line through the wires is the net magnetic field zero?',
    options: [
      '6.0 cm from A, between the wires',
      '4.0 cm beyond B, on the side away from A',
      '2.0 cm from B, between the wires',
      '4.0 cm beyond A, on the far side',
    ],
    correctIndex: 1,
    explanation: 'With opposite currents the two fields add between the wires, so the zero lies outside, nearer the smaller current: $\\frac{6.0}{x + 8.0} = \\frac{2.0}{x}$ gives $x = 4.0$ cm beyond B. The point 6.0 cm from A is the answer for same-direction currents.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: Magnetic Materials & the Hall Effect
  {
    id: 'mff-ent-6a',
    question: 'A flat strip in the plane of the page carries current to the right in a magnetic field pointing out of the page. The top edge of the strip is measured to be at a lower potential than the bottom edge. What are the charge carriers?',
    options: [
      'Positive carriers, which collect at the bottom',
      'Negative carriers, which collect on the bottom edge',
      'Negative carriers, which collect on the top edge',
      'Either sign, since the Hall voltage does not depend on it',
    ],
    correctIndex: 0,
    explanation: 'Positive carriers move right, and right crossed with out of the page points down, so they gather at the bottom and make it the higher-potential edge, as measured. Electrons moving left would also be pushed down, but would make the bottom the lower-potential edge.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'mff-ent-6b',
    question: 'An iron nail and an aluminum rod are each held in a strong magnetic field, and then the field is removed. Which description fits?',
    options: [
      'Both are strongly attracted, and both stay magnetized afterward',
      'Iron is repelled; aluminum is weakly attracted and stays magnetized',
      'Iron is strongly attracted and may stay magnetized; aluminum barely responds',
      'Aluminum is strongly attracted and stays magnetized; iron is weakly repelled',
    ],
    correctIndex: 2,
    explanation: 'Iron is ferromagnetic: its domains align strongly and can stay aligned. Aluminum is paramagnetic: its dipoles align weakly, and thermal motion scrambles them once the field is gone.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'mff-ent-7a',
    question: 'A proton moving to the right enters a region where a uniform magnetic field points into the page. How does it move once inside the field?',
    options: [
      'It curves toward the top of the page at constant speed',
      'It curves toward the bottom at constant speed',
      'It curves toward the top while speeding up',
      'It keeps moving straight but gradually slows down',
    ],
    correctIndex: 0,
    explanation: 'Fingers pointing right, curled into the page, leave the thumb pointing up the page, so the proton curves upward. The magnetic force is always perpendicular to the velocity, so it does no work and the speed stays constant.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'mff-ent-7b',
    question: 'A proton and an alpha particle (charge $2e$, mass $4m_p$) have the same kinetic energy and move perpendicular to the same uniform magnetic field. Compared with the proton\'s circle, the alpha particle\'s circle has:',
    options: ['Twice the radius', 'One-half the radius', 'Four times the radius', 'The same radius'],
    correctIndex: 3,
    explanation: 'Equal kinetic energy means $v \\propto 1/\\sqrt{m}$, so the alpha particle moves at half the proton\'s speed. Then $r = \\frac{mv}{qB}$ scales as $\\frac{4 \\times \\frac{1}{2}}{2} = 1$: the radii are equal. Twice the radius would be the answer for equal speeds.',
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
