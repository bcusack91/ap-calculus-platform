/**
 * Entrance Quiz — Electromagnetic Induction (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Magnetic Flux'
const P2 = "Faraday's Law"
const P3 = "Lenz's Law"
const P4 = 'Motional EMF'
const P5 = 'Loops Entering & Leaving a Field'
const P6 = 'Changing Fields & Magnetic Braking'
const P7 = 'Synthesis & AP Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Magnetic Flux
  {
    id: 'emi-ent-1a',
    question: 'A flat loop of area $0.040 \\text{ m}^2$ sits in a uniform 0.50 T field that makes a 30° angle with the plane of the loop. What is the magnetic flux through the loop?',
    options: ['0.010 Wb', '0.017 Wb', '0.020 Wb', '0 Wb'],
    correctIndex: 0,
    explanation: 'The angle in $\\Phi = BA\\cos\\theta$ is measured from the normal to the loop, which is $90° - 30° = 60°$, so $\\Phi = (0.50)(0.040)(0.50) = 0.010$ Wb. Using 30° directly gives 0.017 Wb.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'emi-ent-1b',
    question: 'A loop of area $A$ lies perpendicular to a uniform field $B$. It is flipped over, rotating 180° about a diameter. By how much does the flux through the loop change?',
    options: [
      'By $BA$, since the flux passes through zero on the way',
      'By $2BA$, since the flux reverses sign',
      'By zero, since the final flux is again $BA$ in size',
      'By $BA/2$, the average over the rotation',
    ],
    correctIndex: 1,
    explanation: 'Measured against a normal fixed to the loop, the flux goes from $+BA$ to $-BA$ because the field now enters the opposite face, a change of $2BA$. Equal magnitudes do not mean equal fluxes, since flux has a sign.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Faraday's Law
  {
    id: 'emi-ent-2a',
    question: 'A 150-turn coil with area $4.0 \\times 10^{-3} \\text{ m}^2$ sits in a perpendicular field that rises steadily from 0.20 T to 0.80 T in 0.030 s. What is the magnitude of the induced EMF?',
    options: ['0.080 V', '16 V', '20 V', '12 V'],
    correctIndex: 3,
    explanation: 'Each turn\'s flux changes by $(0.60)(4.0 \\times 10^{-3}) = 2.4 \\times 10^{-3}$ Wb, so $|\\varepsilon| = N\\frac{\\Delta\\Phi}{\\Delta t} = 150 \\times \\frac{2.4 \\times 10^{-3}}{0.030} = 12$ V. Leaving out the 150 turns gives 0.080 V, and using 0.80 T instead of the 0.60 T change gives 16 V.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'emi-ent-2b',
    question: 'The flux through a coil rises steadily from 0 to 0.60 Wb between 0 and 2.0 s, stays at 0.60 Wb until 5.0 s, then falls steadily to 0 by 6.0 s. How do the EMF magnitudes compare?',
    options: [
      'The first and last intervals have the same EMF',
      'The first interval has twice the EMF of the last',
      'The last interval has twice the EMF of the first',
      'The middle interval has the largest EMF of all',
    ],
    correctIndex: 2,
    explanation: 'The EMF is the rate of change of flux: 0.30 V for the first 2.0 s, zero while the flux is steady, and 0.60 V during the last 1.0 s. The same flux change in half the time gives twice the EMF.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Lenz's Law
  {
    id: 'emi-ent-3a',
    question: 'A bar magnet, south pole down, falls toward a horizontal conducting loop. Viewed from above, which way does the induced current circulate while the magnet approaches?',
    options: [
      'Counterclockwise',
      'Clockwise',
      'None until the magnet enters the loop',
      'It keeps reversing while the magnet falls',
    ],
    correctIndex: 1,
    explanation: 'Field lines point into a south pole, so at the loop the field points up, and the upward flux grows as the magnet approaches. The induced current makes a downward field to oppose that increase, which is clockwise viewed from above.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'emi-ent-3b',
    question: 'A metal ring rests around the top of an iron-core coil. When the coil\'s switch is closed, the ring jumps upward. Which explanation is correct?',
    options: [
      'The iron core magnetizes the ring, which is attracted to it',
      'The steady current pushes the ring up for as long as it flows',
      'The ring is repelled whenever any current flows in the coil',
      'The growing field induces a current in the ring that opposes the change, so it is repelled',
    ],
    correctIndex: 3,
    explanation: 'While the coil\'s current and field are growing, the flux through the ring increases, and the induced current makes the ring act like a magnet facing the coil with a like pole, so it is pushed away. Once the current is steady, the flux stops changing and the push ends.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Motional EMF
  {
    id: 'emi-ent-4a',
    question: 'A 0.50 m rod slides at a constant 6.0 m/s along rails joined by a 3.0 Ω resistor, in a 0.40 T field perpendicular to the rails. What external force keeps the rod moving at constant speed?',
    options: ['0.16 N', '0.080 N', '0.48 N', '0.40 N'],
    correctIndex: 1,
    explanation: 'The EMF is $BLv = (0.40)(0.50)(6.0) = 1.2$ V, so $I = 0.40$ A and the braking force is $BIL = (0.40)(0.40)(0.50) = 0.080$ N; the external force must match it. Leaving out $L$ gives 0.16 N, and 0.48 is the power in watts.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'emi-ent-4b',
    question: 'A conducting rod is given a push and then released on frictionless horizontal rails that are joined by a resistor, in a uniform perpendicular magnetic field. What happens to the rod?',
    options: [
      'It keeps a constant speed, since the field does no work',
      'It speeds up, since the induced EMF drives it forward',
      'It stops at once, since the current opposes any motion',
      'It slows down as its kinetic energy is converted to thermal energy',
    ],
    correctIndex: 3,
    explanation: 'The moving rod has an induced current, and the force on that current opposes the motion (Lenz\'s law), so the rod slows. Its kinetic energy is dissipated as thermal energy in the resistor; the braking force shrinks with speed, so it does not stop instantly.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Loops Entering & Leaving a Field
  {
    id: 'emi-ent-5a',
    question: 'A square loop 0.20 m on a side, with resistance 0.40 Ω, moves to the right at 3.0 m/s into a region of 0.50 T field pointing into the page. What is the current while the loop is entering?',
    options: [
      '0.75 A, clockwise',
      '0.15 A, counterclockwise',
      '0.75 A, counterclockwise',
      '3.0 A, counterclockwise',
    ],
    correctIndex: 2,
    explanation: 'The leading edge gives $\\varepsilon = Bsv = (0.50)(0.20)(3.0) = 0.30$ V, so $I = 0.30/0.40 = 0.75$ A. The into-page flux is increasing, so the induced field points out of the page: counterclockwise. Using the area instead of the side length gives 0.15 A.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'emi-ent-5b',
    question: 'A square loop of side $s$ moves at constant speed through a field region of width $w$ that is narrower than the loop ($w < s$). Which description is correct?',
    options: [
      'The flux peaks at $Bs^2$, and the EMF is zero while the loop is inside',
      'The flux stays zero, since the loop is never fully inside the field',
      'The flux peaks at $Bws$, and the EMF never drops to zero during the trip',
      'The flux peaks at $Bws$, and the EMF is zero while the loop straddles the field',
    ],
    correctIndex: 3,
    explanation: 'At most an area $ws$ of the loop is in the field, so the flux levels off at $Bws$. While the region sits entirely within the loop, the flux is constant and the EMF is zero; the loop cannot be fully inside a region narrower than itself.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: Changing Fields & Magnetic Braking
  {
    id: 'emi-ent-6a',
    question: 'A stationary loop of area $0.060 \\text{ m}^2$ lies in the page. The field through it changes steadily from 0.40 T into the page to 0.20 T out of the page in 0.30 s. What are the average EMF and the direction of the induced current?',
    options: [
      '0.040 V, clockwise',
      '0.12 V, counterclockwise',
      '0.12 V, clockwise',
      '0.040 V, counterclockwise',
    ],
    correctIndex: 2,
    explanation: 'The field changes by $0.40 + 0.20 = 0.60$ T, so $|\\varepsilon| = \\frac{(0.060)(0.60)}{0.30} = 0.12$ V. Shrinking into-page flux and growing out-of-page flux both call for an induced field into the page, which is clockwise throughout.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'emi-ent-6b',
    question: 'A bar magnet is dropped, north pole down, through a horizontal copper ring. How does the magnet\'s acceleration compare with $g$ as it approaches the ring and as it leaves the ring below?',
    options: [
      'Less than $g$ in both cases',
      'Less than $g$ approaching, greater than $g$ leaving',
      'Greater than $g$ approaching, less than $g$ leaving',
      'Equal to $g$, since copper is not magnetic',
    ],
    correctIndex: 0,
    explanation: 'Approaching, the induced current repels the magnet; leaving, it attracts the magnet back. Both forces point up, opposing the relative motion, so the acceleration is less than $g$ both times. Induced currents act on the moving magnet even though copper is not attracted to a magnet at rest.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'emi-ent-7a',
    question: 'A rod 0.40 m long on rails joined by a 2.0 Ω resistor sits in a 0.50 T perpendicular field. A constant 0.10 N force pulls the rod. What steady speed does it reach?',
    options: ['1.0 m/s', '2.5 m/s', '5.0 m/s', '0.20 m/s'],
    correctIndex: 2,
    explanation: 'The speed stops changing when the braking force $\\frac{B^2L^2v}{R}$ equals 0.10 N: $v = \\frac{(0.10)(2.0)}{(0.50)^2(0.40)^2} = 5.0$ m/s. Dropping the squares gives 1.0 m/s.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'emi-ent-7b',
    question: 'A 100-turn coil of area $0.010 \\text{ m}^2$ and resistance 5.0 Ω sits in a perpendicular field that reverses steadily from 0.30 T one way to 0.30 T the other way in 0.20 s. What are the average current and the charge that flows?',
    options: ['0.60 A; 0.12 C', '0.30 A; 0.060 C', '0.60 A; 3.0 C', '3.0 A; 0.60 C'],
    correctIndex: 0,
    explanation: 'The field changes by 0.60 T, so $|\\varepsilon| = \\frac{(100)(0.010)(0.60)}{0.20} = 3.0$ V and $I = 3.0/5.0 = 0.60$ A. The charge is $I\\Delta t = (0.60)(0.20) = 0.12$ C. Ignoring the reversal halves both values.',
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
