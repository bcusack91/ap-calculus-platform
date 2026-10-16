/**
 * Entrance Quiz — Momentum and Impulse — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Linear Momentum
  {
    id: 'mi-ent-1a',
    question: 'Cart A (4.0 kg) moves at $+3.0$ m/s and cart B (6.0 kg) moves at $-2.5$ m/s along the same track. What is the total momentum of the two-cart system?',
    options: [
      '$-3.0$ kg·m/s',
      '$+3.0$ kg·m/s',
      '$+27$ kg·m/s',
      '$0$ kg·m/s',
    ],
    correctIndex: 0,
    explanation: 'Momentum is a vector, so add with signs: $(4.0)(3.0) + (6.0)(-2.5) = 12 - 15 = -3.0$ kg·m/s. Adding the magnitudes gives 27, which ignores the opposite directions.',
    partNumber: 1,
    partTitle: 'Linear Momentum',
  },
  {
    id: 'mi-ent-1b',
    question: 'Objects A and B have equal momenta, and A has four times the mass of B. How does A\'s kinetic energy compare with B\'s?',
    options: [
      'Equal to B\'s',
      'One-fourth of B\'s',
      'Four times B\'s',
      'Half of B\'s',
    ],
    correctIndex: 1,
    explanation: 'With $KE = p^2/(2m)$ and equal $p$, kinetic energy is inversely proportional to mass, so A has one-fourth of B\'s kinetic energy (A moves at one-fourth B\'s speed).',
    partNumber: 1,
    partTitle: 'Linear Momentum',
  },
  // Part 2 — Impulse
  {
    id: 'mi-ent-2a',
    question: 'A 0.060 kg tennis ball arrives at a racket at 25 m/s and leaves in the opposite direction at 35 m/s. What is the magnitude of the impulse on the ball?',
    options: [
      '0.60 N·s',
      '2.1 N·s',
      '3.6 N·s',
      '1.5 N·s',
    ],
    correctIndex: 2,
    explanation: 'Taking the incoming direction as positive, $\\Delta p = m(v_f - v_i) = 0.060(-35 - 25) = -3.6$ N·s. Subtracting the speeds (10 m/s) ignores the reversal and gives 0.60 N·s.',
    partNumber: 2,
    partTitle: 'Impulse',
  },
  {
    id: 'mi-ent-2b',
    question: 'Which needs the larger impulse: stopping a 3.0 kg cart moving at 4.0 m/s, or reversing a 2.0 kg cart from $+3.0$ m/s to $-3.0$ m/s?',
    options: [
      'Neither needs any impulse',
      'Stopping the 3.0 kg cart',
      'Reversing the 2.0 kg cart',
      'Each needs the same amount',
    ],
    correctIndex: 3,
    explanation: 'Impulse equals the change in momentum. Stopping the first cart changes $p$ by 12 kg·m/s; reversing the second changes it by $2.0(-3.0 - 3.0) = -12$ kg·m/s. Both have magnitude 12 N·s.',
    partNumber: 2,
    partTitle: 'Impulse',
  },
  // Part 3 — Impulse-Momentum Theorem
  {
    id: 'mi-ent-3a',
    question: 'A 0.50 kg ball hits the floor moving down at 6.0 m/s and rebounds upward at 4.0 m/s. The contact lasts 0.025 s. What is the magnitude of the average net force on the ball during the contact?',
    options: [
      '200 N',
      '40 N',
      '120 N',
      '80 N',
    ],
    correctIndex: 0,
    explanation: 'With up positive, $\\Delta p = 0.50(4.0 - (-6.0)) = 5.0$ kg·m/s, so $F_{\\text{avg}} = 5.0/0.025 = 200$ N. Using the 2.0 m/s difference in speeds gives 40 N.',
    partNumber: 3,
    partTitle: 'Impulse-Momentum Theorem',
  },
  {
    id: 'mi-ent-3b',
    question: 'An 80 kg skydiver falling at 50 m/s opens her parachute, which then exerts an average upward drag of 1200 N. How long does it take her to slow to 10 m/s? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '2.7 s',
      '8.0 s',
      '1.6 s',
      '4.0 s',
    ],
    correctIndex: 1,
    explanation: 'The net force is $1200 - 800 = 400$ N upward, and her momentum must change by $80(50 - 10) = 3200$ kg·m/s, so $\\Delta t = 3200/400 = 8.0$ s. Using the drag alone, without her weight, gives 2.7 s.',
    partNumber: 3,
    partTitle: 'Impulse-Momentum Theorem',
  },
  // Part 4 — Force-Time Graphs
  {
    id: 'mi-ent-4a',
    question: 'A 0.30 kg ball at rest is struck by a force that rises steadily from 0 to a peak of 900 N and falls steadily back to 0, the whole pulse lasting 0.020 s. What is the ball\'s speed afterward?',
    options: [
      '60 m/s',
      '15 m/s',
      '30 m/s',
      '5.4 m/s',
    ],
    correctIndex: 2,
    explanation: 'The impulse is the triangle\'s area, $\\tfrac{1}{2}(900)(0.020) = 9.0$ N·s, so $v = 9.0/0.30 = 30$ m/s. Using peak force times duration gives 60 m/s.',
    partNumber: 4,
    partTitle: 'Force-Time Graphs',
  },
  {
    id: 'mi-ent-4b',
    question: 'A 6.0 kg cart moving at $+2.0$ m/s feels a force of $+30$ N for 2.0 s and then $-20$ N for 3.0 s. What is its velocity afterward?',
    options: [
      '$0$ m/s',
      '$+22$ m/s',
      '$+12$ m/s',
      '$+2.0$ m/s',
    ],
    correctIndex: 3,
    explanation: 'The net impulse is the signed area: $(30)(2.0) + (-20)(3.0) = 0$, so the momentum, and the velocity, end where they started at $+2.0$ m/s. Stopping after the first interval gives $+12$ m/s.',
    partNumber: 4,
    partTitle: 'Force-Time Graphs',
  },
  // Part 5 — Applications of Impulse
  {
    id: 'mi-ent-5a',
    question: 'An egg dropped from a given height lands either on a pillow or on concrete and comes to rest. How does landing on the pillow change the collision?',
    options: [
      'Same impulse, delivered over a longer time with less force',
      'Smaller impulse, because the pillow is soft',
      'Same force, but spread over a longer time',
      'Larger impulse, because the contact lasts longer',
    ],
    correctIndex: 0,
    explanation: 'The egg\'s change in momentum, from its landing speed to zero, is the same either way, so the impulse is the same. The pillow stretches that impulse over a longer time, so $F_{\\text{avg}} = \\Delta p/\\Delta t$ is smaller.',
    partNumber: 5,
    partTitle: 'Applications of Impulse',
  },
  {
    id: 'mi-ent-5b',
    question: 'A 60 kg driver moving at 25 m/s is brought to rest by an airbag in 0.30 s. What average force does the airbag exert on the driver?',
    options: [
      '500 N',
      '5000 N',
      '1500 N',
      '50000 N',
    ],
    correctIndex: 1,
    explanation: '$F_{\\text{avg}} = \\Delta p/\\Delta t = 60(25)/0.30 = 5000$ N. The 1500 value is the driver\'s momentum in kg·m/s, not a force.',
    partNumber: 5,
    partTitle: 'Applications of Impulse',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'mi-ent-6a',
    question: 'A 1200 kg car moving at 20 m/s brakes with a constant 6000 N force. How long does it take to stop?',
    options: [
      '0.25 s',
      '8.0 s',
      '4.0 s',
      '2.0 s',
    ],
    correctIndex: 2,
    explanation: 'The braking impulse must cancel the momentum $1200(20) = 24000$ kg·m/s, so $\\Delta t = 24000/6000 = 4.0$ s. Inverting the ratio gives 0.25 s.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'mi-ent-6b',
    question: 'A 2.0 kg block starts at rest. A force of $+12$ N acts on it from $t = 0$ to 4.0 s, then a force of $-8.0$ N acts from 4.0 s to 7.0 s. What is the block\'s velocity at $t = 7.0$ s?',
    options: [
      '4.0 m/s',
      '24 m/s',
      '36 m/s',
      '12 m/s',
    ],
    correctIndex: 3,
    explanation: 'The net impulse is $48 - 24 = 24$ N·s, so $v = 24/2.0 = 12$ m/s. Adding both areas as positive gives 36 m/s, and stopping at 4.0 s gives 24 m/s.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'mi-ent-7a',
    question: 'A 0.50 kg ball is dropped from 1.8 m onto a hard floor and rebounds to a height of 0.80 m. What impulse does the floor give the ball? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '5.0 N·s upward',
      '1.0 N·s upward',
      '5.0 N·s downward',
      '3.0 N·s upward',
    ],
    correctIndex: 0,
    explanation: 'The ball lands at $\\sqrt{2(10)(1.8)} = 6.0$ m/s down and leaves at $\\sqrt{2(10)(0.80)} = 4.0$ m/s up, so with up positive $\\Delta p = 0.50(4.0 + 6.0) = 5.0$ N·s, upward. Subtracting the speeds gives 1.0 N·s.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'mi-ent-7b',
    question: 'A constant net force acts on a cart that starts from rest. If the force acted for twice as long, how would the cart\'s final momentum and kinetic energy change?',
    options: [
      'Momentum and kinetic energy both double as well',
      'Momentum doubles, kinetic energy quadruples',
      'Momentum quadruples while kinetic energy doubles',
      'Kinetic energy is unchanged while momentum doubles',
    ],
    correctIndex: 1,
    explanation: 'Doubling the time doubles the impulse $F\\Delta t$, so the momentum and the speed double. Kinetic energy depends on $v^2$, so it becomes four times as large.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Linear Momentum' },
    { partNumber: 2, partTitle: 'Impulse' },
    { partNumber: 3, partTitle: 'Impulse-Momentum Theorem' },
    { partNumber: 4, partTitle: 'Force-Time Graphs' },
    { partNumber: 5, partTitle: 'Applications of Impulse' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
