/**
 * Entrance Quiz — Conservation of Momentum — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — System Momentum
  {
    id: 'com-ent-1a',
    question: 'A ball falls toward the ground after being dropped (ignore air resistance). For which choice of system is the total momentum constant during the fall?',
    options: [
      'The ball alone, since gravity acts on it',
      'Ball and Earth taken together',
      'Earth alone, since it barely moves',
      'Neither, since gravity changes momentum',
    ],
    correctIndex: 1,
    explanation: 'For the ball alone, gravity is an external force, so the ball\'s momentum grows downward. Including Earth makes gravity an internal pair of forces, so the total momentum of ball plus Earth stays constant (Earth gains an equal upward momentum).',
    partNumber: 1,
    partTitle: 'System Momentum',
  },
  {
    id: 'com-ent-1b',
    question: 'A 60 kg person stands at rest on a 90 kg canoe floating at rest on still water. The person walks toward the front at 1.5 m/s relative to the water. What is the canoe\'s speed relative to the water?',
    options: [
      '1.5 m/s',
      '2.3 m/s',
      '1.0 m/s',
      '0.60 m/s',
    ],
    correctIndex: 2,
    explanation: 'The total momentum stays zero, so $60(1.5) = 90\\,v_c$ and $v_c = 1.0$ m/s, toward the back. Swapping the masses gives 2.3 m/s.',
    partNumber: 1,
    partTitle: 'System Momentum',
  },
  // Part 2 — Two-Object 1D Momentum Problems
  {
    id: 'com-ent-2a',
    question: 'A 4.0 kg cart moving at $+5.0$ m/s collides head-on with a 2.0 kg cart moving at $-3.0$ m/s. Afterward the 4.0 kg cart moves at $+1.0$ m/s. What is the velocity of the 2.0 kg cart afterward?',
    options: [
      '$-5.0$ m/s',
      '$+8.0$ m/s',
      '$+11$ m/s',
      '$+5.0$ m/s',
    ],
    correctIndex: 3,
    explanation: 'Initial momentum is $4.0(5.0) + 2.0(-3.0) = 14$ kg·m/s. Afterward $14 = 4.0(1.0) + 2.0v$, so $v = +5.0$ m/s. Treating the $-3.0$ m/s as positive gives $+11$ m/s.',
    partNumber: 2,
    partTitle: 'Two-Object 1D Momentum Problems',
  },
  {
    id: 'com-ent-2b',
    question: 'A 2.0 kg cart moving at 6.0 m/s collides with a 4.0 kg cart at rest, and they stick together. What fraction of the original kinetic energy is lost?',
    options: [
      '$\\tfrac{2}{3}$',
      '$\\tfrac{1}{3}$',
      '$0$',
      '$\\tfrac{1}{2}$',
    ],
    correctIndex: 0,
    explanation: 'Momentum gives $v_f = 12/6.0 = 2.0$ m/s. The kinetic energy falls from 36 J to $\\tfrac{1}{2}(6.0)(2.0)^2 = 12$ J, so $24/36 = \\tfrac{2}{3}$ is lost, although momentum is fully conserved.',
    partNumber: 2,
    partTitle: 'Two-Object 1D Momentum Problems',
  },
  // Part 3 — Recoil Problems (Explosion Type)
  {
    id: 'com-ent-3a',
    question: 'A 4.0 kg rifle fires a 0.015 kg bullet at 800 m/s. What is the rifle\'s recoil speed?',
    options: [
      '12 m/s',
      '3.0 m/s',
      '0.33 m/s',
      '6.0 m/s',
    ],
    correctIndex: 1,
    explanation: 'Starting from rest, $0 = 0.015(800) + 4.0\\,v_r$, so $v_r = -12/4.0 = -3.0$ m/s: 3.0 m/s backward. The 12 value is the bullet\'s momentum in kg·m/s.',
    partNumber: 3,
    partTitle: 'Recoil Problems (Explosion Type)',
  },
  {
    id: 'com-ent-3b',
    question: 'Two carts at rest on a level track are pushed apart by a compressed spring between them. Which statement about the two-cart system is correct?',
    options: [
      'Total momentum and kinetic energy both remain zero throughout',
      'Total momentum increases, because the spring pushes on both carts',
      'Total momentum stays zero, and the spring\'s energy becomes kinetic energy',
      'The heavier cart ends up with more momentum than the lighter one',
    ],
    correctIndex: 2,
    explanation: 'The spring forces are internal, so the momentum stays zero: the carts get equal and opposite momenta. Kinetic energy is not conserved here; it comes from the spring\'s stored elastic energy.',
    partNumber: 3,
    partTitle: 'Recoil Problems (Explosion Type)',
  },
  // Part 4 — 2D Momentum Conservation
  {
    id: 'com-ent-4a',
    question: 'A 3.0 kg puck moving east at 4.0 m/s collides on frictionless ice with a 2.0 kg puck moving north at 3.0 m/s, and they stick together. What is their speed afterward?',
    options: [
      '3.6 m/s',
      '3.5 m/s',
      '1.2 m/s',
      '2.7 m/s',
    ],
    correctIndex: 3,
    explanation: 'Conserve each component: $p_x = 12$ and $p_y = 6.0$ kg·m/s, so $v_x = 2.4$ and $v_y = 1.2$ m/s, giving $\\sqrt{2.4^2 + 1.2^2} = 2.7$ m/s. Adding the momentum magnitudes (18) gives 3.6 m/s.',
    partNumber: 4,
    partTitle: '2D Momentum Conservation',
  },
  {
    id: 'com-ent-4b',
    question: 'On frictionless ice, a puck moving east strikes an identical puck at rest. Afterward the first puck moves northeast. Which describes the second puck\'s velocity afterward?',
    options: [
      'Eastward and southward components',
      'A northward component, like the first puck\'s',
      'A westward component, against the original motion',
      'Motion only along the original east direction',
    ],
    correctIndex: 0,
    explanation: 'The total north-south momentum was zero before, so it must still be zero: the second puck needs a southward component to cancel the first puck\'s northward one. Its east-west momentum must make the total eastward momentum unchanged, so it also moves east.',
    partNumber: 4,
    partTitle: '2D Momentum Conservation',
  },
  // Part 5 — When Is Momentum NOT Conserved?
  {
    id: 'com-ent-5a',
    question: 'Two carts collide on a track with friction. Why is the total momentum just before the collision nearly equal to the total just after it?',
    options: [
      'Friction counts as an internal force for the pair of carts',
      'The collision is so brief that friction\'s impulse during it is tiny',
      'Friction does no work on the carts during a collision',
      'Momentum is conserved whatever external forces act',
    ],
    correctIndex: 1,
    explanation: 'Friction is external and does change the momentum, but its impulse $F\\Delta t$ is small when the collision lasts milliseconds. Over longer times friction does change the total momentum.',
    partNumber: 5,
    partTitle: 'When Is Momentum NOT Conserved?',
  },
  {
    id: 'com-ent-5b',
    question: 'A 3.0 kg ball is thrown horizontally at 8.0 m/s off a cliff. What are its momentum components 1.5 s later? Use $g = 10\\text{ m/s}^2$ and ignore air resistance.',
    options: [
      '24 kg·m/s across, 15 kg·m/s down',
      '24 kg·m/s across, 0 kg·m/s down',
      '24 kg·m/s across, 45 kg·m/s down',
      '45 kg·m/s across, 24 kg·m/s down',
    ],
    correctIndex: 2,
    explanation: 'With no horizontal external force, $p_x = 3.0(8.0) = 24$ kg·m/s stays constant. Gravity\'s impulse $mg\\Delta t = 30(1.5) = 45$ kg·m/s adds downward momentum. Using the vertical speed without the mass gives 15.',
    partNumber: 5,
    partTitle: 'When Is Momentum NOT Conserved?',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'com-ent-6a',
    question: 'A 0.020 kg bullet embeds in a 1.98 kg block hanging from a string, and the block and bullet swing up to a height of 0.45 m. What was the bullet\'s speed? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '30 m/s',
      '150 m/s',
      '3.0 m/s',
      '300 m/s',
    ],
    correctIndex: 3,
    explanation: 'After the collision, energy conservation gives $v = \\sqrt{2(10)(0.45)} = 3.0$ m/s for the 2.0 kg block-bullet. Momentum is conserved in the collision, so $0.020\\,v_b = 2.0(3.0)$ and $v_b = 300$ m/s. Using energy conservation for the collision itself gives 30 m/s.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'com-ent-6b',
    question: 'A 1200 kg car moving east at 15 m/s collides head-on with an 1800 kg car moving west at 10 m/s, and they lock together. What is their velocity just after the collision?',
    options: [
      '0 m/s',
      '6.0 m/s east',
      '3.0 m/s west',
      '12 m/s east',
    ],
    correctIndex: 0,
    explanation: 'The momenta are $1200(15) = 18000$ kg·m/s east and $1800(10) = 18000$ kg·m/s west, so the total is zero and the wreck is momentarily at rest. Adding the momenta without signs gives 12 m/s.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'com-ent-7a',
    question: 'A 3.0 kg cart moving at 6.0 m/s overtakes and sticks to a 1.0 kg cart moving at 2.0 m/s in the same direction. What is their common speed afterward?',
    options: [
      '4.0 m/s',
      '5.0 m/s',
      '4.5 m/s',
      '3.0 m/s',
    ],
    correctIndex: 1,
    explanation: '$3.0(6.0) + 1.0(2.0) = 20$ kg·m/s shared by 4.0 kg gives 5.0 m/s. Ignoring the second cart\'s initial motion gives 4.5 m/s.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'com-ent-7b',
    question: 'A person jumps from a small boat, initially at rest, onto a dock. What happens to the boat (ignore water resistance)?',
    options: [
      'It moves toward the dock, following the person\'s motion',
      'It stays put, as the boat is much heavier than the person',
      'It moves away from the dock, so the total momentum stays zero',
      'It moves away, because the dock pushes on the boat',
    ],
    correctIndex: 2,
    explanation: 'Person plus boat starts with zero momentum and has no horizontal external force while she jumps, so the boat gains momentum equal and opposite to hers. The dock touches only the person, after the jump.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'System Momentum' },
    { partNumber: 2, partTitle: 'Two-Object 1D Momentum Problems' },
    { partNumber: 3, partTitle: 'Recoil Problems (Explosion Type)' },
    { partNumber: 4, partTitle: '2D Momentum Conservation' },
    { partNumber: 5, partTitle: 'When Is Momentum NOT Conserved?' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
