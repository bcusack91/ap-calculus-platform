import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Statement of the Law
  {
    id: 'com-ent-1a',
    question: 'The total momentum of a system is conserved when:',
    options: ['No forces act on the system', 'No external net force acts on the system', 'All objects are at rest', 'Energy is conserved'],
    correctIndex: 1,
    explanation: 'Momentum is conserved when the net external force on the system is zero. Internal forces (between objects in the system) do not change total momentum.',
    partNumber: 1,
    partTitle: 'Statement of the Law',
  },
  {
    id: 'com-ent-1b',
    question: 'Two ice skaters push off each other on frictionless ice. The total momentum of the two-skater system after the push is:',
    options: ['Positive', 'Negative', 'Zero', 'Doubled'],
    correctIndex: 2,
    explanation: 'Both start at rest (total $p = 0$). Since no external horizontal force acts, momentum is conserved: total $p$ stays $0$.',
    partNumber: 1,
    partTitle: 'Statement of the Law',
  },

  // Part 2: One-Dimensional Conservation
  {
    id: 'com-ent-2a',
    question: 'A $5$ kg cart moving at $4$ m/s collides with and sticks to a $3$ kg cart at rest. What is the final velocity?',
    options: ['$2$ m/s', '$2.5$ m/s', '$4$ m/s', '$6.7$ m/s'],
    correctIndex: 1,
    explanation: '$m_1v_1 = (m_1 + m_2)v_f$. $5(4) = 8v_f$. $v_f = 20/8 = 2.5$ m/s.',
    partNumber: 2,
    partTitle: 'One-Dimensional Conservation',
  },
  {
    id: 'com-ent-2b',
    question: 'A $2$ kg ball moving at $3$ m/s right collides with a $2$ kg ball moving at $1$ m/s left. If they stick together, the final velocity is:',
    options: ['$1$ m/s right', '$2$ m/s right', '$0$ m/s', '$4$ m/s right'],
    correctIndex: 0,
    explanation: '$p_i = 2(3) + 2(-1) = 6 - 2 = 4$ kg·m/s. $v_f = 4/(2+2) = 1$ m/s right.',
    partNumber: 2,
    partTitle: 'One-Dimensional Conservation',
  },

  // Part 3: Recoil & Explosions
  {
    id: 'com-ent-3a',
    question: 'A $50$ kg person on a $150$ kg boat throws a $2$ kg ball at $10$ m/s (all initially at rest). What is the recoil speed of the person-boat system?',
    options: ['$0.1$ m/s', '$0.5$ m/s', '$1$ m/s', '$5$ m/s'],
    correctIndex: 0,
    explanation: '$0 = (50+150)v + 2(10)$. $200v = -20$. $v = -0.1$ m/s (opposite to ball). Speed = $0.1$ m/s.',
    partNumber: 3,
    partTitle: 'Recoil & Explosions',
  },
  {
    id: 'com-ent-3b',
    question: 'A $4$ kg rifle fires a $0.01$ kg bullet at $400$ m/s. What is the recoil speed of the rifle?',
    options: ['$0.1$ m/s', '$1$ m/s', '$4$ m/s', '$10$ m/s'],
    correctIndex: 1,
    explanation: '$0 = 4v + 0.01(400)$. $4v = -4$. $v = -1$ m/s. The rifle recoils at $1$ m/s.',
    partNumber: 3,
    partTitle: 'Recoil & Explosions',
  },

  // Part 4: Two-Dimensional Momentum
  {
    id: 'com-ent-4a',
    question: 'In a 2D collision, which components of momentum are conserved?',
    options: ['Only the x-component', 'Only the y-component', 'Both x and y components independently', 'Only the magnitude of total momentum'],
    correctIndex: 2,
    explanation: 'Momentum is a vector. Both the x-component and y-component are independently conserved.',
    partNumber: 4,
    partTitle: 'Two-Dimensional Momentum',
  },
  {
    id: 'com-ent-4b',
    question: 'A ball moving east hits a stationary ball, and both move off at angles. Which must be true?',
    options: [
      'Both move east',
      'Their y-momenta are equal and opposite',
      'They have equal speeds',
      'The angles must be $45°$ each',
    ],
    correctIndex: 1,
    explanation: 'Initial y-momentum is zero. For conservation, the y-components of their final momenta must sum to zero, meaning they are equal and opposite.',
    partNumber: 4,
    partTitle: 'Two-Dimensional Momentum',
  },

  // Part 5: Systems & Internal Forces
  {
    id: 'com-ent-5a',
    question: 'During a collision between two objects, the internal forces between them are:',
    options: [
      'Always unequal',
      'Equal and opposite (Newton\'s third law)',
      'Always zero',
      'Greater on the lighter object',
    ],
    correctIndex: 1,
    explanation: 'By Newton\'s third law, the force of object A on B is equal in magnitude and opposite in direction to the force of B on A. These internal forces cancel when computing total system momentum.',
    partNumber: 5,
    partTitle: 'Systems & Internal Forces',
  },
  {
    id: 'com-ent-5b',
    question: 'Friction from the ground during a collision on a rough surface acts as:',
    options: ['An internal force', 'An external force that can change total momentum', 'A force that is always negligible', 'A conservative force'],
    correctIndex: 1,
    explanation: 'The ground is external to the two-object system. Friction from the ground is an external force that can change the total momentum. If friction is small compared to collision forces, momentum is approximately conserved.',
    partNumber: 5,
    partTitle: 'Systems & Internal Forces',
  },

  // Part 6: Problem-Solving Strategies
  {
    id: 'com-ent-6a',
    question: 'A $6$ kg object at $5$ m/s catches and holds a $4$ kg object at $2$ m/s (same direction). What is the final velocity?',
    options: ['$3.5$ m/s', '$3.8$ m/s', '$4.2$ m/s', '$7$ m/s'],
    correctIndex: 1,
    explanation: '$p_i = 6(5) + 4(2) = 30 + 8 = 38$ kg·m/s. $v_f = 38/(6+4) = 3.8$ m/s.',
    partNumber: 6,
    partTitle: 'Problem-Solving Strategies',
  },
  {
    id: 'com-ent-6b',
    question: 'A $3$ kg block at rest is hit by a $1$ kg ball at $12$ m/s. The ball bounces back at $6$ m/s. What is the block\'s velocity?',
    options: ['$2$ m/s', '$3$ m/s', '$6$ m/s', '$18$ m/s'],
    correctIndex: 2,
    explanation: '$1(12) + 3(0) = 1(-6) + 3v$. $12 = -6 + 3v$. $3v = 18$. $v = 6$ m/s.',
    partNumber: 6,
    partTitle: 'Problem-Solving Strategies',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'com-ent-7a',
    question: 'An astronaut in space throws a tool. The astronaut recoils. This demonstrates:',
    options: ['Conservation of energy only', 'Conservation of momentum', 'Newton\'s second law only', 'The law of inertia'],
    correctIndex: 1,
    explanation: 'In the zero-gravity, no-external-force environment of space, total momentum is conserved. The astronaut and tool move in opposite directions.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'com-ent-7b',
    question: 'Two objects collide and separate. Is it possible for both objects to be at rest after the collision?',
    options: ['Yes, always', 'Yes, if total initial momentum is zero', 'No, never', 'Only in perfectly elastic collisions'],
    correctIndex: 1,
    explanation: 'If total initial momentum is zero (e.g., two identical objects approach each other at equal speeds), both could end up at rest. Total momentum would remain zero.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Statement of the Law' },
    { partNumber: 2, partTitle: 'One-Dimensional Conservation' },
    { partNumber: 3, partTitle: 'Recoil & Explosions' },
    { partNumber: 4, partTitle: 'Two-Dimensional Momentum' },
    { partNumber: 5, partTitle: 'Systems & Internal Forces' },
    { partNumber: 6, partTitle: 'Problem-Solving Strategies' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
