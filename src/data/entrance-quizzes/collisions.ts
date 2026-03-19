import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Types of Collisions
  {
    id: 'col-ent-1a',
    question: 'In a perfectly inelastic collision, the two objects:',
    options: ['Bounce off each other', 'Stick together', 'Both stop', 'Pass through each other'],
    correctIndex: 1,
    explanation: 'A perfectly inelastic collision is one where the objects stick together and move as a single unit after colliding. Maximum KE is lost.',
    partNumber: 1,
    partTitle: 'Types of Collisions',
  },
  {
    id: 'col-ent-1b',
    question: 'Which quantity is conserved in ALL collisions (elastic and inelastic)?',
    options: ['Kinetic energy', 'Momentum', 'Speed', 'Velocity'],
    correctIndex: 1,
    explanation: 'Momentum is always conserved in collisions (assuming no external net force). Kinetic energy is only conserved in elastic collisions.',
    partNumber: 1,
    partTitle: 'Types of Collisions',
  },

  // Part 2: Elastic Collisions
  {
    id: 'col-ent-2a',
    question: 'In an elastic collision, which TWO quantities are conserved?',
    options: [
      'Momentum and potential energy',
      'Momentum and kinetic energy',
      'Kinetic energy and force',
      'Momentum and thermal energy',
    ],
    correctIndex: 1,
    explanation: 'An elastic collision conserves both momentum and kinetic energy. No energy is lost to deformation, heat, or sound.',
    partNumber: 2,
    partTitle: 'Elastic Collisions',
  },
  {
    id: 'col-ent-2b',
    question: 'A $1$ kg ball at $4$ m/s elastically collides head-on with an identical $1$ kg ball at rest. After the collision:',
    options: [
      'Both move at $2$ m/s',
      'The first stops and the second moves at $4$ m/s',
      'Both move at $4$ m/s',
      'They both stop',
    ],
    correctIndex: 1,
    explanation: 'In a head-on elastic collision between equal masses, the moving object stops and the target moves at the initial speed of the projectile.',
    partNumber: 2,
    partTitle: 'Elastic Collisions',
  },

  // Part 3: Inelastic Collisions
  {
    id: 'col-ent-3a',
    question: 'A $4$ kg cart at $6$ m/s collides with a $2$ kg cart at rest and they stick together. What is the final speed?',
    options: ['$2$ m/s', '$3$ m/s', '$4$ m/s', '$6$ m/s'],
    correctIndex: 2,
    explanation: '$4(6) = (4+2)v_f$. $24 = 6v_f$. $v_f = 4$ m/s.',
    partNumber: 3,
    partTitle: 'Inelastic Collisions',
  },
  {
    id: 'col-ent-3b',
    question: 'How much kinetic energy is lost in the above collision?',
    options: ['$24$ J', '$48$ J', '$72$ J', '$0$ J'],
    correctIndex: 0,
    explanation: '$KE_i = \\frac{1}{2}(4)(36) = 72$ J. $KE_f = \\frac{1}{2}(6)(16) = 48$ J. Lost = $72 - 48 = 24$ J.',
    partNumber: 3,
    partTitle: 'Inelastic Collisions',
  },

  // Part 4: Coefficient of Restitution
  {
    id: 'col-ent-4a',
    question: 'The coefficient of restitution ($e$) for a perfectly elastic collision is:',
    options: ['$0$', '$0.5$', '$1$', 'Greater than $1$'],
    correctIndex: 2,
    explanation: 'For a perfectly elastic collision, $e = 1$ (relative speed of separation equals relative speed of approach). For perfectly inelastic, $e = 0$.',
    partNumber: 4,
    partTitle: 'Coefficient of Restitution',
  },
  {
    id: 'col-ent-4b',
    question: 'A ball dropped from height $h$ bounces to height $0.64h$. What is the coefficient of restitution?',
    options: ['$0.64$', '$0.8$', '$0.32$', '$1$'],
    correctIndex: 1,
    explanation: '$e = \\sqrt{h_f/h_i} = \\sqrt{0.64} = 0.8$.',
    partNumber: 4,
    partTitle: 'Coefficient of Restitution',
  },

  // Part 5: Kinetic Energy in Collisions
  {
    id: 'col-ent-5a',
    question: 'In a perfectly inelastic collision, the fraction of kinetic energy lost depends on:',
    options: ['Only the speeds', 'Only the masses', 'The mass ratio and relative speed', 'It is always $50\\%$'],
    correctIndex: 2,
    explanation: 'The fraction of KE lost depends on the mass ratio. For a projectile of mass $m$ hitting a stationary target of mass $M$, the fraction lost is $M/(m+M)$.',
    partNumber: 5,
    partTitle: 'Kinetic Energy in Collisions',
  },
  {
    id: 'col-ent-5b',
    question: 'Two objects of equal mass collide perfectly inelastically (one initially at rest). What fraction of kinetic energy is lost?',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'],
    correctIndex: 2,
    explanation: '$KE_i = \\frac{1}{2}mv^2$. $v_f = v/2$. $KE_f = \\frac{1}{2}(2m)(v/2)^2 = \\frac{1}{4}mv^2$. Fraction lost = $1 - \\frac{1}{2} = \\frac{1}{2}$.',
    partNumber: 5,
    partTitle: 'Kinetic Energy in Collisions',
  },

  // Part 6: Collision Problems
  {
    id: 'col-ent-6a',
    question: 'A $3$ kg ball at $8$ m/s east hits a $5$ kg ball at $2$ m/s west. They stick together. What is the final velocity?',
    options: ['$1.75$ m/s east', '$2.25$ m/s west', '$5$ m/s east', '$3$ m/s east'],
    correctIndex: 0,
    explanation: '$3(8) + 5(-2) = (3+5)v_f$. $24 - 10 = 8v_f$. $v_f = 14/8 = 1.75$ m/s east.',
    partNumber: 6,
    partTitle: 'Collision Problems',
  },
  {
    id: 'col-ent-6b',
    question: 'A $1$ kg ball at $10$ m/s has a head-on elastic collision with a $3$ kg ball at rest. What is the velocity of the $1$ kg ball after the collision?',
    options: ['$-5$ m/s', '$0$ m/s', '$2.5$ m/s', '$5$ m/s'],
    correctIndex: 0,
    explanation: 'For elastic collision: $v_1 = \\frac{m_1 - m_2}{m_1 + m_2}v_0 = \\frac{1-3}{4}(10) = -5$ m/s. The ball bounces back.',
    partNumber: 6,
    partTitle: 'Collision Problems',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'col-ent-7a',
    question: 'Is it possible for kinetic energy to increase in a collision?',
    options: [
      'No, KE always decreases or stays the same',
      'Yes, in a superelastic collision (e.g., an explosion)',
      'Yes, in all elastic collisions',
      'Only if an external force acts',
    ],
    correctIndex: 1,
    explanation: 'In a superelastic collision (like an explosion), internal energy (chemical, stored spring) converts to KE, increasing the total. In normal collisions, KE decreases or stays the same.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'col-ent-7b',
    question: 'A bullet embeds in a block (ballistic pendulum). To find the bullet\'s initial speed, which principles are used?',
    options: [
      'Only conservation of energy',
      'Only conservation of momentum',
      'Conservation of momentum for the collision, then conservation of energy for the swing',
      'Newton\'s third law only',
    ],
    correctIndex: 2,
    explanation: 'The bullet-block collision is perfectly inelastic (use momentum conservation). The block-bullet then swings upward (use energy conservation to relate speed to height).',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Types of Collisions' },
    { partNumber: 2, partTitle: 'Elastic Collisions' },
    { partNumber: 3, partTitle: 'Inelastic Collisions' },
    { partNumber: 4, partTitle: 'Coefficient of Restitution' },
    { partNumber: 5, partTitle: 'Kinetic Energy in Collisions' },
    { partNumber: 6, partTitle: 'Collision Problems' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
