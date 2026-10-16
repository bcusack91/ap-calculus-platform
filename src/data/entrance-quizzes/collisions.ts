/**
 * Entrance Quiz — Collisions — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Elastic Collisions
  {
    id: 'col-ent-1a',
    question: 'A light ball moving at speed $v$ hits a much heavier ball at rest head-on in an elastic collision. What happens just afterward?',
    options: [
      'It stops dead while the heavy ball moves on',
      'Both balls move forward together at a slow speed',
      'It rebounds at nearly its original speed',
      'The heavy ball moves off at twice its speed',
    ],
    correctIndex: 2,
    explanation: 'The heavy ball barely moves, so to keep kinetic energy (nearly) all in the light ball, the light ball must leave at nearly speed $v$, reversed; the heavy ball takes up the momentum change of about $2mv$ while gaining very little speed. Moving together would be a perfectly inelastic collision.',
    partNumber: 1,
    partTitle: 'Elastic Collisions',
  },
  {
    id: 'col-ent-1b',
    question: 'A 2.0 kg cart moving at 3.0 m/s hits a 1.0 kg cart at rest. Afterward the 2.0 kg cart moves at 1.0 m/s and the 1.0 kg cart at 4.0 m/s, both forward. How should this collision be classified?',
    options: [
      'Impossible, since the kinetic energy increased',
      'Inelastic, since the 2.0 kg cart lost speed',
      'Perfectly inelastic, since momentum is shared',
      'Elastic, with 9 J of kinetic energy before and after',
    ],
    correctIndex: 3,
    explanation: 'Momentum checks ($6.0 = 2.0 + 4.0$ kg·m/s), and the kinetic energy is $\\tfrac{1}{2}(2.0)(3.0)^2 = 9$ J before and $1.0 + 8.0 = 9$ J after, so it is elastic. One cart slowing is expected; it is the total kinetic energy that matters.',
    partNumber: 1,
    partTitle: 'Elastic Collisions',
  },
  // Part 2 — Perfectly Inelastic Collisions
  {
    id: 'col-ent-2a',
    question: 'A 3.0 kg cart moving at $+4.0$ m/s collides head-on with a 1.0 kg cart moving at $-6.0$ m/s, and they stick together. What is their velocity afterward?',
    options: [
      '$+1.5$ m/s',
      '$+4.5$ m/s',
      '$-1.5$ m/s',
      '$+2.0$ m/s',
    ],
    correctIndex: 0,
    explanation: '$v_f = \\dfrac{3.0(4.0) + 1.0(-6.0)}{4.0} = \\dfrac{6.0}{4.0} = +1.5$ m/s. Treating the second velocity as positive gives $+4.5$ m/s.',
    partNumber: 2,
    partTitle: 'Perfectly Inelastic Collisions',
  },
  {
    id: 'col-ent-2b',
    question: 'A moving cart collides with a cart at rest and they stick together. In which case is the largest fraction of the original kinetic energy lost?',
    options: [
      'When the two carts have equal masses',
      'When the cart at rest is much heavier',
      'When the moving cart is the much heavier one',
      'The fraction lost is the same for any masses',
    ],
    correctIndex: 1,
    explanation: 'The fraction kept is $m_1/(m_1 + m_2)$, so the fraction lost, $m_2/(m_1 + m_2)$, approaches 1 when the target is much heavier. Equal masses lose exactly half.',
    partNumber: 2,
    partTitle: 'Perfectly Inelastic Collisions',
  },
  // Part 3 — Inelastic Collisions — Between the Extremes
  {
    id: 'col-ent-3a',
    question: 'A ball dropped from 2.5 m rebounds to a height of 1.6 m. What fraction of its kinetic energy was converted to other forms during the bounce?',
    options: [
      '20%',
      '64%',
      '36%',
      '80%',
    ],
    correctIndex: 2,
    explanation: 'Kinetic energy just before and after the bounce equals $mgh$ for the drop and rebound heights, so it keeps $1.6/2.5 = 64\\%$ and loses 36%. The 20% value compares speeds instead of energies.',
    partNumber: 3,
    partTitle: 'Inelastic Collisions — Between the Extremes',
  },
  {
    id: 'col-ent-3b',
    question: 'A 4.0 kg ball moving at $+6.0$ m/s hits a 2.0 kg ball at rest. Afterward the 4.0 kg ball moves at $+3.0$ m/s and the 2.0 kg ball at $+6.0$ m/s. How much kinetic energy was converted to other forms?',
    options: [
      '54 J',
      '36 J',
      '0 J',
      '18 J',
    ],
    correctIndex: 3,
    explanation: 'Momentum checks ($24 = 12 + 12$ kg·m/s). The kinetic energy falls from $\\tfrac{1}{2}(4.0)(36) = 72$ J to $18 + 36 = 54$ J, so 18 J became thermal energy and sound: an inelastic collision.',
    partNumber: 3,
    partTitle: 'Inelastic Collisions — Between the Extremes',
  },
  // Part 4 — Collisions Through the Center of Mass and Impulse Pairs
  {
    id: 'col-ent-4a',
    question: 'On a frictionless track, a 3.0 kg cart moving at $+4.0$ m/s approaches a 2.0 kg cart moving at $-1.0$ m/s. What is the velocity of the two-cart system\'s center of mass after they collide, whatever type of collision occurs?',
    options: [
      '$+2.0$ m/s',
      '$+1.5$ m/s',
      '$+2.8$ m/s',
      '$0$ m/s',
    ],
    correctIndex: 0,
    explanation: '$v_{cm} = \\dfrac{3.0(4.0) + 2.0(-1.0)}{5.0} = +2.0$ m/s, and with no external force it is the same before, during and after any collision. Averaging the two velocities gives 1.5 m/s, which ignores the masses.',
    partNumber: 4,
    partTitle: 'Collisions Through the Center of Mass and Impulse Pairs',
  },
  {
    id: 'col-ent-4b',
    question: 'A truck collides with a fly. How do the changes in the two objects\' momenta and velocities compare during the collision?',
    options: [
      'The truck\'s momentum change is far larger, as it is heavier',
      'Equal momentum changes, so the fly\'s velocity changes far more',
      'Equal velocity changes, so the truck\'s momentum changes far more',
      'The fly\'s momentum change is larger, as it is knocked away',
    ],
    correctIndex: 1,
    explanation: 'The forces are a third-law pair acting for the same time, so the impulses, and thus the momentum changes, are equal and opposite. Since $\\Delta v = \\Delta p/m$, the tiny fly\'s velocity changes enormously while the truck\'s barely changes.',
    partNumber: 4,
    partTitle: 'Collisions Through the Center of Mass and Impulse Pairs',
  },
  // Part 5 — 2D Collision Problems
  {
    id: 'col-ent-5a',
    question: 'On frictionless ice, a 2.0 kg puck moving at 3.0 m/s in the $+x$ direction strikes a 1.0 kg puck at rest. Afterward the 2.0 kg puck has an $x$-momentum of 4.2 kg·m/s. What is the 1.0 kg puck\'s $x$-momentum afterward?',
    options: [
      '$6.0$ kg·m/s',
      '$4.2$ kg·m/s',
      '$1.8$ kg·m/s',
      '$10.2$ kg·m/s',
    ],
    correctIndex: 2,
    explanation: 'The total $x$-momentum stays $2.0(3.0) = 6.0$ kg·m/s, so the second puck carries $6.0 - 4.2 = 1.8$ kg·m/s. Each component is conserved separately.',
    partNumber: 5,
    partTitle: '2D Collision Problems',
  },
  {
    id: 'col-ent-5b',
    question: 'On frictionless ice, a 2.0 kg puck moving east at 3.0 m/s collides with a 1.0 kg puck moving north at 3.0 m/s, and they stick together. In which direction does the pair move?',
    options: [
      'Due east, since that puck is heavier',
      'Closer to north than it is to east',
      'Closer to neither, exactly northeast',
      'Closer to east than to north',
    ],
    correctIndex: 3,
    explanation: 'The east momentum (6.0 kg·m/s) is twice the north momentum (3.0 kg·m/s), and the pair\'s momentum is their vector sum, so it points north of east but tilted toward east.',
    partNumber: 5,
    partTitle: '2D Collision Problems',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'col-ent-6a',
    question: 'A 2.0 kg block sliding at 6.0 m/s hits and sticks to a 1.0 kg block at rest, and the pair then slides across a floor with $\\mu_k = 0.20$. How far does the pair slide before stopping? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '4.0 m',
      '9.0 m',
      '8.0 m',
      '2.0 m',
    ],
    correctIndex: 0,
    explanation: 'Momentum gives $v = 12/3.0 = 4.0$ m/s just after the collision. Friction then decelerates the pair at $\\mu_k g = 2.0\\text{ m/s}^2$, so $d = 4.0^2/(2 \\times 2.0) = 4.0$ m. Using the 6.0 m/s speed from before the collision gives 9.0 m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'col-ent-6b',
    question: 'A 1.0 kg cart moving at 6.0 m/s hits a 3.0 kg cart at rest and rebounds at 3.0 m/s. What is the 3.0 kg cart\'s speed afterward, and what kind of collision is this?',
    options: [
      '1.0 m/s, and the collision is inelastic',
      '3.0 m/s, and the collision is elastic',
      '3.0 m/s, and the collision is inelastic',
      '2.0 m/s, and it is perfectly inelastic',
    ],
    correctIndex: 1,
    explanation: 'Momentum: $6.0 = 1.0(-3.0) + 3.0v$, so $v = 3.0$ m/s. Kinetic energy is 18 J before and $4.5 + 13.5 = 18$ J after, so it is elastic. Ignoring the rebound\'s sign gives 1.0 m/s.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'col-ent-7a',
    question: 'Which statement is true for every collision between two carts on a level, frictionless track?',
    options: [
      'Each cart\'s speed is unchanged',
      'Total kinetic energy is unchanged',
      'Total momentum is unchanged',
      'Each cart\'s momentum is unchanged',
    ],
    correctIndex: 2,
    explanation: 'With no net external force, the total momentum of the two-cart system is conserved in every collision. Kinetic energy is conserved only in elastic collisions, and the individual carts\' momenta change in equal and opposite amounts.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'col-ent-7b',
    question: 'A 3.0 kg cart moving at 4.0 m/s hits a 1.0 kg cart at rest. Afterward the 3.0 kg cart moves at 2.5 m/s and the 1.0 kg cart at 4.5 m/s, both forward. How much kinetic energy was lost?',
    options: [
      '0 J',
      '12 J',
      '20 J',
      '4.5 J',
    ],
    correctIndex: 3,
    explanation: 'Momentum checks ($12 = 7.5 + 4.5$). The kinetic energy drops from $\\tfrac{1}{2}(3.0)(16) = 24$ J to $9.4 + 10.1 = 19.5$ J, a loss of 4.5 J, so the collision is inelastic.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Elastic Collisions' },
    { partNumber: 2, partTitle: 'Perfectly Inelastic Collisions' },
    { partNumber: 3, partTitle: 'Inelastic Collisions — Between the Extremes' },
    { partNumber: 4, partTitle: 'Collisions Through the Center of Mass and Impulse Pairs' },
    { partNumber: 5, partTitle: '2D Collision Problems' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
