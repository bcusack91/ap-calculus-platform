import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Static vs. Kinetic Friction
  {
    id: 'fr-ent-1a',
    question: 'Which type of friction acts on an object that is at rest and prevents it from moving?',
    options: ['Kinetic friction', 'Static friction', 'Rolling friction', 'Fluid friction'],
    correctIndex: 1,
    explanation: 'Static friction acts on stationary objects and adjusts up to a maximum value to prevent motion.',
    partNumber: 1,
    partTitle: 'Static vs. Kinetic Friction',
  },
  {
    id: 'fr-ent-1b',
    question: 'The coefficient of static friction is typically ______ the coefficient of kinetic friction for the same surfaces.',
    options: ['Less than', 'Equal to', 'Greater than', 'Unrelated to'],
    correctIndex: 2,
    explanation: 'Static friction coefficient $\\mu_s$ is generally greater than kinetic friction coefficient $\\mu_k$. It takes more force to start motion than to maintain it.',
    partNumber: 1,
    partTitle: 'Static vs. Kinetic Friction',
  },

  // Part 2: Friction Force Formula
  {
    id: 'fr-ent-2a',
    question: 'A $20$ kg box sits on a surface with $\\mu_s = 0.5$. What is the maximum static friction force? (Use $g = 10$ m/s².)',
    options: ['$10$ N', '$50$ N', '$100$ N', '$200$ N'],
    correctIndex: 2,
    explanation: '$f_{s,max} = \\mu_s N = \\mu_s mg = 0.5 \\times 20 \\times 10 = 100$ N.',
    partNumber: 2,
    partTitle: 'Friction Force Formula',
  },
  {
    id: 'fr-ent-2b',
    question: 'A $10$ kg box slides on a surface with $\\mu_k = 0.3$. What is the kinetic friction force? (Use $g = 10$ m/s².)',
    options: ['$3$ N', '$10$ N', '$30$ N', '$100$ N'],
    correctIndex: 2,
    explanation: '$f_k = \\mu_k N = \\mu_k mg = 0.3 \\times 10 \\times 10 = 30$ N.',
    partNumber: 2,
    partTitle: 'Friction Force Formula',
  },

  // Part 3: Direction of Friction
  {
    id: 'fr-ent-3a',
    question: 'Kinetic friction always acts in a direction that is:',
    options: [
      'Perpendicular to the surface',
      'In the direction of motion',
      'Opposite to the direction of motion',
      'Toward the center of the surface',
    ],
    correctIndex: 2,
    explanation: 'Kinetic friction opposes the relative motion of the object, always acting opposite to the direction of sliding.',
    partNumber: 3,
    partTitle: 'Direction of Friction',
  },
  {
    id: 'fr-ent-3b',
    question: 'A person walks forward. In which direction does the friction from the ground act on their foot?',
    options: ['Backward', 'Forward', 'Downward', 'Upward'],
    correctIndex: 1,
    explanation: 'Static friction pushes the person forward. The foot pushes backward on the ground, and by Newton\'s third law, the ground pushes the foot forward.',
    partNumber: 3,
    partTitle: 'Direction of Friction',
  },

  // Part 4: Normal Force & Friction
  {
    id: 'fr-ent-4a',
    question: 'A box is pushed across a floor with a force angled $30°$ below horizontal. Compared to its weight, the normal force is:',
    options: ['Less than $mg$', 'Equal to $mg$', 'Greater than $mg$', 'Zero'],
    correctIndex: 2,
    explanation: 'The downward component of the push ($F\\sin 30°$) adds to gravity, so the normal force must be $N = mg + F\\sin 30° > mg$.',
    partNumber: 4,
    partTitle: 'Normal Force & Friction',
  },
  {
    id: 'fr-ent-4b',
    question: 'Adding mass to a box on a rough surface increases the friction force because:',
    options: [
      'The coefficient of friction increases',
      'The contact area increases',
      'The normal force increases',
      'The surface becomes rougher',
    ],
    correctIndex: 2,
    explanation: 'Friction = $\\mu N$. More mass means more weight, which increases the normal force $N$, thus increasing friction. The coefficient and surface properties stay the same.',
    partNumber: 4,
    partTitle: 'Normal Force & Friction',
  },

  // Part 5: Friction & Acceleration
  {
    id: 'fr-ent-5a',
    question: 'A $5$ kg block is pulled with $40$ N on a surface with $\\mu_k = 0.4$. What is the acceleration? (Use $g = 10$ m/s².)',
    options: ['$2$ m/s²', '$4$ m/s²', '$6$ m/s²', '$8$ m/s²'],
    correctIndex: 1,
    explanation: '$f_k = \\mu_k mg = 0.4 \\times 5 \\times 10 = 20$ N. $F_{net} = 40 - 20 = 20$ N. $a = 20/5 = 4$ m/s².',
    partNumber: 5,
    partTitle: 'Friction & Acceleration',
  },
  {
    id: 'fr-ent-5b',
    question: 'A block slides on a rough surface and decelerates at $3$ m/s². What is the coefficient of kinetic friction? (Use $g = 10$ m/s².)',
    options: ['$0.1$', '$0.2$', '$0.3$', '$0.5$'],
    correctIndex: 2,
    explanation: 'Only friction decelerates the block: $\\mu_k mg = ma$. So $\\mu_k = a/g = 3/10 = 0.3$.',
    partNumber: 5,
    partTitle: 'Friction & Acceleration',
  },

  // Part 6: Static Friction Threshold
  {
    id: 'fr-ent-6a',
    question: 'You push a $50$ kg crate with increasing force. It starts to move when you push with $200$ N. What is $\\mu_s$? (Use $g = 10$ m/s².)',
    options: ['$0.2$', '$0.3$', '$0.4$', '$0.5$'],
    correctIndex: 2,
    explanation: 'At the threshold: $F = \\mu_s mg$. $200 = \\mu_s \\times 50 \\times 10$, so $\\mu_s = 200/500 = 0.4$.',
    partNumber: 6,
    partTitle: 'Static Friction Threshold',
  },
  {
    id: 'fr-ent-6b',
    question: 'You push a stationary box with $30$ N but it doesn\'t move. The friction force on the box is:',
    options: ['$0$ N', '$30$ N', 'Greater than $30$ N', '$\\mu_s mg$'],
    correctIndex: 1,
    explanation: 'Static friction matches the applied force up to its maximum value. Since the box doesn\'t move, friction equals the applied force: $30$ N.',
    partNumber: 6,
    partTitle: 'Static Friction Threshold',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'fr-ent-7a',
    question: 'A block slides at constant velocity under an applied force of $15$ N. The kinetic friction force is:',
    options: ['$0$ N', '$7.5$ N', '$15$ N', '$30$ N'],
    correctIndex: 2,
    explanation: 'Constant velocity means zero acceleration, so net force is zero. Friction must equal the applied force: $15$ N.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'fr-ent-7b',
    question: 'Friction does NOT depend on which of the following?',
    options: ['Normal force', 'Surface roughness (coefficient)', 'Contact area', 'Mass of the object'],
    correctIndex: 2,
    explanation: 'Friction force $f = \\mu N$ depends on the coefficient of friction and the normal force, but is independent of the apparent contact area.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Static vs. Kinetic Friction' },
    { partNumber: 2, partTitle: 'Friction Force Formula' },
    { partNumber: 3, partTitle: 'Direction of Friction' },
    { partNumber: 4, partTitle: 'Normal Force & Friction' },
    { partNumber: 5, partTitle: 'Friction & Acceleration' },
    { partNumber: 6, partTitle: 'Static Friction Threshold' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
