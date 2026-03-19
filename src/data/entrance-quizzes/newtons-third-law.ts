import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Action-Reaction Pairs
  {
    id: 'n3-ent-1a',
    question: 'Newton\'s third law states that when object A exerts a force on object B, object B exerts a force on A that is:',
    options: ['Equal in magnitude and same direction', 'Equal in magnitude and opposite direction', 'Greater in magnitude and opposite direction', 'Dependent on the masses of A and B'],
    correctIndex: 1,
    explanation: 'Newton\'s third law: For every action there is an equal and opposite reaction. The forces are equal in magnitude but opposite in direction.',
    partNumber: 1,
    partTitle: 'Action-Reaction Pairs',
  },
  {
    id: 'n3-ent-1b',
    question: 'A person pushes on a wall with $50$ N. The wall pushes back on the person with:',
    options: ['$0$ N', '$25$ N', '$50$ N', '$100$ N'],
    correctIndex: 2,
    explanation: 'By Newton\'s third law, the wall exerts an equal and opposite force of $50$ N on the person.',
    partNumber: 1,
    partTitle: 'Action-Reaction Pairs',
  },

  // Part 2: Identifying Third-Law Pairs
  {
    id: 'n3-ent-2a',
    question: 'A book rests on a table. Which is the third-law pair to the weight of the book (Earth pulling book down)?',
    options: [
      'The normal force from the table on the book',
      'The book pulling Earth upward',
      'The friction from the table',
      'The weight of the table',
    ],
    correctIndex: 1,
    explanation: 'The third-law pair to Earth pulling the book down is the book pulling Earth up. These act on different objects (book and Earth). The normal force is NOT the pair — it balances gravity by Newton\'s second law.',
    partNumber: 2,
    partTitle: 'Identifying Third-Law Pairs',
  },
  {
    id: 'n3-ent-2b',
    question: 'Which of the following is a valid Newton\'s third-law pair?',
    options: [
      'Gravity on a ball and the normal force from the floor',
      'A bat hitting a ball and the ball hitting the bat',
      'Tension and weight of a hanging object',
      'Friction and applied force on a sliding box',
    ],
    correctIndex: 1,
    explanation: 'Third-law pairs involve the SAME type of force between TWO different objects. The bat exerts a force on the ball, and the ball exerts an equal, opposite force on the bat.',
    partNumber: 2,
    partTitle: 'Identifying Third-Law Pairs',
  },

  // Part 3: Third Law & Different Masses
  {
    id: 'n3-ent-3a',
    question: 'A truck and a small car collide. How do the forces they exert on each other compare?',
    options: [
      'The truck exerts a greater force on the car',
      'The car exerts a greater force on the truck',
      'The forces are equal in magnitude',
      'It depends on which one was moving faster',
    ],
    correctIndex: 2,
    explanation: 'By Newton\'s third law, the forces are always equal in magnitude regardless of mass difference. The car experiences greater acceleration because of its smaller mass ($a = F/m$).',
    partNumber: 3,
    partTitle: 'Third Law & Different Masses',
  },
  {
    id: 'n3-ent-3b',
    question: 'If the forces are equal, why does the smaller object accelerate more in a collision?',
    options: [
      'The force on the smaller object is actually larger',
      'Smaller mass means greater acceleration for the same force',
      'Energy is not conserved',
      'The larger object absorbs the force',
    ],
    correctIndex: 1,
    explanation: 'From $F = ma$, the same force applied to a smaller mass produces a larger acceleration. The forces are equal, but the effects differ because of different masses.',
    partNumber: 3,
    partTitle: 'Third Law & Different Masses',
  },

  // Part 4: Tension & Third Law
  {
    id: 'n3-ent-4a',
    question: 'Two people pull on opposite ends of a rope. Person A pulls with $100$ N and person B pulls with $100$ N. What is the tension in the rope?',
    options: ['$0$ N', '$50$ N', '$100$ N', '$200$ N'],
    correctIndex: 2,
    explanation: 'Tension in a rope equals the force applied to either end ($100$ N), not the sum. Each person pulls with $100$ N and the rope pulls back with $100$ N by Newton\'s third law.',
    partNumber: 4,
    partTitle: 'Tension & Third Law',
  },
  {
    id: 'n3-ent-4b',
    question: 'A person pulls a rope attached to a wall with $200$ N. The wall is Newton\'s third-law partner to the:',
    options: [
      'Person\'s weight',
      'Rope\'s tension pulling the person',
      'Rope\'s tension pulling the wall',
      'Ground\'s friction on the person',
    ],
    correctIndex: 2,
    explanation: 'The rope pulls the wall with $200$ N. By Newton\'s third law, the wall pulls the rope with $200$ N in the opposite direction. These are the third-law pair.',
    partNumber: 4,
    partTitle: 'Tension & Third Law',
  },

  // Part 5: Contact Forces & the Third Law
  {
    id: 'n3-ent-5a',
    question: 'You push a box across the floor. The third-law reaction to your push on the box is:',
    options: [
      'Friction from the floor on the box',
      'The box pushing back on your hand',
      'Gravity pulling the box down',
      'The normal force on the box',
    ],
    correctIndex: 1,
    explanation: 'Your hand pushes the box forward; the box pushes your hand backward with equal force. These act on different objects (your hand and the box).',
    partNumber: 5,
    partTitle: 'Contact Forces & the Third Law',
  },
  {
    id: 'n3-ent-5b',
    question: 'A horse pulls a cart forward. The cart pulls the horse backward with equal force. How can the horse-cart system accelerate?',
    options: [
      'The horse\'s force is actually larger',
      'The ground pushes the horse forward with a force greater than the cart\'s pull',
      'Newton\'s third law doesn\'t apply here',
      'The cart\'s force is delayed',
    ],
    correctIndex: 1,
    explanation: 'The third-law pair acts on different objects. To analyze motion, look at forces on the horse: the ground\'s friction on the horse\'s hooves exceeds the cart\'s backward pull, giving a net forward force.',
    partNumber: 5,
    partTitle: 'Contact Forces & the Third Law',
  },

  // Part 6: Systems of Objects
  {
    id: 'n3-ent-6a',
    question: 'Block A ($2$ kg) is pushed against block B ($3$ kg) on a frictionless surface with a $10$ N force. What force does A exert on B?',
    options: ['$4$ N', '$6$ N', '$10$ N', '$5$ N'],
    correctIndex: 1,
    explanation: 'System acceleration: $a = 10/(2+3) = 2$ m/s². Force of A on B: $F = m_B \\times a = 3 \\times 2 = 6$ N.',
    partNumber: 6,
    partTitle: 'Systems of Objects',
  },
  {
    id: 'n3-ent-6b',
    question: 'In the same system (A pushes B), the force of B on A is:',
    options: ['$0$ N', '$4$ N', '$6$ N', '$10$ N'],
    correctIndex: 2,
    explanation: 'By Newton\'s third law, if A pushes B with $6$ N, then B pushes A with $6$ N in the opposite direction.',
    partNumber: 6,
    partTitle: 'Systems of Objects',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'n3-ent-7a',
    question: 'Which statement about Newton\'s third-law pairs is always true?',
    options: [
      'They act on the same object',
      'They are the same type of force',
      'They always cancel out to produce zero net force',
      'One force is always greater than the other',
    ],
    correctIndex: 1,
    explanation: 'Third-law pairs are always the same type of force (both gravitational, both contact, etc.), act on different objects, and are equal in magnitude but opposite in direction.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'n3-ent-7b',
    question: 'An apple falls from a tree. Earth pulls the apple with $1$ N. The apple pulls Earth with:',
    options: ['$0$ N', 'Much less than $1$ N', '$1$ N', 'Much more than $1$ N'],
    correctIndex: 2,
    explanation: 'By Newton\'s third law, the apple pulls Earth with exactly $1$ N. Earth barely accelerates because of its enormous mass.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Action-Reaction Pairs' },
    { partNumber: 2, partTitle: 'Identifying Third-Law Pairs' },
    { partNumber: 3, partTitle: 'Third Law & Different Masses' },
    { partNumber: 4, partTitle: 'Tension & Third Law' },
    { partNumber: 5, partTitle: 'Contact Forces & the Third Law' },
    { partNumber: 6, partTitle: 'Systems of Objects' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
