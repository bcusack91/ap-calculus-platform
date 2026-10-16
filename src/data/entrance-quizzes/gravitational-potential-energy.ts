/**
 * Entrance Quiz — Gravitational Potential Energy — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Gravitational PE Near Earth
  {
    id: 'gpe-ent-1a',
    question: 'A 2.0 kg book rests on a shelf 1.5 m above the floor. A student chooses the top of a 0.75 m tall table as the reference level ($U_g = 0$). What gravitational potential energy does she assign to the book-Earth system? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '15 J',
      '30 J',
      '45 J',
      '0 J',
    ],
    correctIndex: 0,
    explanation: 'Height is measured from the chosen reference: $h = 1.5 - 0.75 = 0.75$ m, so $U_g = mgh = 2.0(10)(0.75) = 15$ J. Measuring from the floor gives 30 J.',
    partNumber: 1,
    partTitle: 'Gravitational PE Near Earth',
  },
  {
    id: 'gpe-ent-1b',
    question: 'Two students find the gravitational potential energy of a hanging lamp. One uses the floor as the reference level and gets 90 J; the other uses the ceiling. Which statement is correct?',
    options: [
      'Only the student using the floor as the reference is correct',
      'Their answers differ, yet both find the same change for any move of the lamp',
      'Their values must agree, since it is the same lamp at the same spot',
      'The student using the ceiling also gets a positive value for the lamp',
    ],
    correctIndex: 1,
    explanation: 'The value of $U_g$ depends on where $h = 0$ is placed; from the ceiling the lamp is below the reference, so its $U_g$ is negative. Changes in $U_g$, which are all that matter physically, are the same for both.',
    partNumber: 1,
    partTitle: 'Gravitational PE Near Earth',
  },
  // Part 2 — Conservative Forces & Path Independence
  {
    id: 'gpe-ent-2a',
    question: 'A 5.0 kg crate is raised from the floor to a loading dock 2.0 m higher, either by lifting it straight up or by pushing it along a 6.0 m rough ramp. How much work does gravity do on the crate in each case? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$-100$ J lifting it, less along the gentler ramp',
      '$-100$ J lifting it, $-300$ J along the ramp',
      '$-100$ J by each route',
      '$-300$ J along each route',
    ],
    correctIndex: 2,
    explanation: 'Gravity is conservative, so its work depends only on the change in height: $W_g = -mg\\Delta h = -5.0(10)(2.0) = -100$ J for any path. The ramp\'s length matters for friction, not for gravity.',
    partNumber: 2,
    partTitle: 'Conservative Forces & Path Independence',
  },
  {
    id: 'gpe-ent-2b',
    question: 'Which observation shows that kinetic friction is a nonconservative force?',
    options: [
      'The friction force on a sliding box has the same size at every speed',
      'Friction always acts parallel to the surface along which the box slides',
      'The friction force on a box at rest can take any value up to a maximum',
      'A box pushed out and back along the same path ends with negative friction work',
    ],
    correctIndex: 3,
    explanation: 'For a conservative force, the work around any closed path is zero. Friction does negative work on both the outward and return trips, so its total over the round trip is negative, and no potential energy can be defined for it.',
    partNumber: 2,
    partTitle: 'Conservative Forces & Path Independence',
  },
  // Part 3 — Work Done by Gravity
  {
    id: 'gpe-ent-3a',
    question: 'A 0.50 kg ball is thrown upward from 1.5 m above the ground and rises to a maximum height of 9.5 m. How much work does gravity do on the ball during the rise? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$-40$ J',
      '$+40$ J',
      '$-47.5$ J',
      '$-55$ J',
    ],
    correctIndex: 0,
    explanation: 'The ball rises $\\Delta h = 9.5 - 1.5 = 8.0$ m, so $W_g = -mg\\Delta h = -0.50(10)(8.0) = -40$ J. Gravity opposes the upward motion, and using the final height alone gives $-47.5$ J.',
    partNumber: 3,
    partTitle: 'Work Done by Gravity',
  },
  {
    id: 'gpe-ent-3b',
    question: 'A 60 kg skier descends a winding 300 m trail, ending 40 m lower than she started. How much work does gravity do on her? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$+1.8 \\times 10^5$ J',
      '$+2.4 \\times 10^4$ J',
      '$-2.4 \\times 10^4$ J',
      '$+2.4 \\times 10^3$ J',
    ],
    correctIndex: 1,
    explanation: 'Only the vertical drop matters: $W_g = mg(h_i - h_f) = 60(10)(40) = 2.4 \\times 10^4$ J, positive because she moves down. Using the 300 m trail length gives $1.8 \\times 10^5$ J.',
    partNumber: 3,
    partTitle: 'Work Done by Gravity',
  },
  // Part 4 — KE ↔ PE Conversions
  {
    id: 'gpe-ent-4a',
    question: 'A ball is thrown straight down at 6.0 m/s from a ledge 9.0 m above the ground. What is its speed just before it lands? Use $g = 10\\text{ m/s}^2$ and ignore air resistance.',
    options: [
      '19.4 m/s',
      '13.4 m/s',
      '14.7 m/s',
      '11.2 m/s',
    ],
    correctIndex: 2,
    explanation: 'Energy conservation gives $v^2 = v_0^2 + 2gh = 36 + 180 = 216$, so $v = 14.7$ m/s. Adding the 6.0 m/s to the 13.4 m/s a dropped ball would reach gives 19.4 m/s, which is not how energies combine.',
    partNumber: 4,
    partTitle: 'KE ↔ PE Conversions',
  },
  {
    id: 'gpe-ent-4b',
    question: 'A frictionless roller-coaster car starts from rest at the top of a 30 m hill. Later on the track is a 35 m hill. Can the car get over it?',
    options: [
      'Only if the second hill is less steep than the first one is',
      'Yes, if it moves fast enough at the bottom of the first hill',
      'Yes, because a heavier car carries more energy along the way',
      'No, because it would need more energy than the system ever had',
    ],
    correctIndex: 3,
    explanation: 'With no friction, the car\'s kinetic plus potential energy stays at $mg(30\\text{ m})$. Reaching 35 m would need more potential energy than that total, so the car stops short and rolls back, regardless of its mass or the hill\'s shape.',
    partNumber: 4,
    partTitle: 'KE ↔ PE Conversions',
  },
  // Part 5 — Energy Bar Charts
  {
    id: 'gpe-ent-5a',
    question: 'A 2.0 kg block starts from rest at the top of a rough ramp 3.0 m high and reaches the bottom at 6.0 m/s. How much thermal energy did friction produce? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '24 J',
      '60 J',
      '36 J',
      '96 J',
    ],
    correctIndex: 0,
    explanation: 'The system starts with $mgh = 60$ J of potential energy and ends with $\\tfrac{1}{2}(2.0)(6.0)^2 = 36$ J of kinetic energy. The missing $60 - 36 = 24$ J became thermal energy.',
    partNumber: 5,
    partTitle: 'Energy Bar Charts',
  },
  {
    id: 'gpe-ent-5b',
    question: 'A block slides up a frictionless ramp and slows down. Which describes the energy bar chart of the block-Earth system from the bottom to a point partway up?',
    options: [
      'Thermal energy rises by as much as the kinetic energy falls',
      'Kinetic energy falls and gravitational energy rises by the same amount',
      'Kinetic and gravitational energy both fall, so the total drops',
      'Gravitational energy rises while kinetic energy stays the same',
    ],
    correctIndex: 1,
    explanation: 'With no friction there is no thermal bar, and the system\'s total energy is constant. The kinetic energy lost going up appears as an equal gain in gravitational potential energy.',
    partNumber: 5,
    partTitle: 'Energy Bar Charts',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'gpe-ent-6a',
    question: 'A frictionless roller-coaster car passes the top of a 20 m hill at 5.0 m/s. What is its speed at the top of the next hill, which is 8.0 m high? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '15.5 m/s',
      '20.5 m/s',
      '16.3 m/s',
      '12.0 m/s',
    ],
    correctIndex: 2,
    explanation: '$\\tfrac{1}{2}v_f^2 = \\tfrac{1}{2}v_i^2 + g(h_i - h_f)$, so $v_f^2 = 25 + 2(10)(12) = 265$ and $v_f = 16.3$ m/s. Ignoring the initial speed gives 15.5 m/s.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'gpe-ent-6b',
    question: 'A 50 kg skier moving at 2.0 m/s at the top of a slope 30 m high reaches the bottom at 20 m/s. How much energy was dissipated by friction and air resistance? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '5000 J',
      '10000 J',
      '15000 J',
      '5100 J',
    ],
    correctIndex: 3,
    explanation: 'Initial energy is $mgh + \\tfrac{1}{2}mv_i^2 = 15000 + 100 = 15100$ J; final kinetic energy is $\\tfrac{1}{2}(50)(20)^2 = 10000$ J. The difference, 5100 J, was dissipated. Ignoring the initial kinetic energy gives 5000 J.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'gpe-ent-7a',
    question: 'Two identical balls are launched from the ground at the same speed, one at $30^\\circ$ and one at $60^\\circ$ above the horizontal. Ignoring air resistance, how do their speeds compare as each passes 2.0 m above the ground?',
    options: [
      'Equal in both cases',
      'Faster for the $60^\\circ$ ball',
      'Faster for the $30^\\circ$ ball',
      'Equal only while rising',
    ],
    correctIndex: 0,
    explanation: 'Both start with the same kinetic energy, and at 2.0 m each has gained the same potential energy $mgh$, so they have the same kinetic energy and speed. Direction does not enter the energy equation.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'gpe-ent-7b',
    question: 'A 2.0 kg block starts from rest and slides 5.0 m down a ramp inclined at $37^\\circ$ ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$) with $\\mu_k = 0.25$. What is its speed at the bottom? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '7.7 m/s',
      '6.3 m/s',
      '8.9 m/s',
      '4.5 m/s',
    ],
    correctIndex: 1,
    explanation: 'The drop is $5.0 \\sin 37^\\circ = 3.0$ m, releasing 60 J; friction, $0.25(20)(0.8) = 4.0$ N over 5.0 m, removes 20 J. The remaining 40 J of kinetic energy gives $v = \\sqrt{2(40)/2.0} = 6.3$ m/s. Ignoring friction gives 7.7 m/s.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Gravitational PE Near Earth' },
    { partNumber: 2, partTitle: 'Conservative Forces & Path Independence' },
    { partNumber: 3, partTitle: 'Work Done by Gravity' },
    { partNumber: 4, partTitle: 'KE ↔ PE Conversions' },
    { partNumber: 5, partTitle: 'Energy Bar Charts' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
