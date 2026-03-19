import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Electric Charge
  {
    id: 'ecf-ent-1a',
    question: 'The fundamental unit of electric charge is:',
    options: ['$1$ C', '$1.6 \\times 10^{-19}$ C', '$9 \\times 10^9$ C', '$6.02 \\times 10^{23}$ C'],
    correctIndex: 1,
    explanation: 'The elementary charge $e = 1.6 \\times 10^{-19}$ C. All observable charges are integer multiples of $e$.',
    partNumber: 1,
    partTitle: 'Electric Charge',
  },
  {
    id: 'ecf-ent-1b',
    question: 'Like charges:',
    options: ['Attract', 'Repel', 'Have no interaction', 'Cancel out'],
    correctIndex: 1,
    explanation: 'Like charges repel each other; opposite charges attract. This is a fundamental property of electric charge.',
    partNumber: 1,
    partTitle: 'Electric Charge',
  },

  // Part 2: Coulomb's Law
  {
    id: 'ecf-ent-2a',
    question: "Coulomb's law states that the force between two charges is:",
    options: ['$F = kq_1q_2/r$', '$F = kq_1q_2/r^2$', '$F = kq_1q_2 r^2$', '$F = kq_1q_2 r$'],
    correctIndex: 1,
    explanation: '$F = k|q_1 q_2|/r^2$, where $k = 8.99 \\times 10^9$ N·m²/C². Force is inversely proportional to $r^2$.',
    partNumber: 2,
    partTitle: "Coulomb's Law",
  },
  {
    id: 'ecf-ent-2b',
    question: 'If the distance between two charges is tripled, the electric force:',
    options: ['Triples', 'Is reduced to $1/3$', 'Is reduced to $1/9$', 'Is reduced to $1/6$'],
    correctIndex: 2,
    explanation: '$F \\propto 1/r^2$. Tripling $r$ gives $F \\to F/9$.',
    partNumber: 2,
    partTitle: "Coulomb's Law",
  },

  // Part 3: Conservation & Quantization of Charge
  {
    id: 'ecf-ent-3a',
    question: 'The law of conservation of charge states:',
    options: [
      'Charge can be created or destroyed',
      'The net charge of an isolated system remains constant',
      'Charge only exists in whole units',
      'All objects are electrically neutral',
    ],
    correctIndex: 1,
    explanation: 'Charge is conserved: it can be transferred but never created or destroyed. The total charge of an isolated system stays constant.',
    partNumber: 3,
    partTitle: 'Conservation & Quantization',
  },
  {
    id: 'ecf-ent-3b',
    question: 'A charge of $-3.2 \\times 10^{-19}$ C corresponds to:',
    options: ['$1$ extra electron', '$2$ extra electrons', '$3$ extra electrons', '$4$ extra electrons'],
    correctIndex: 1,
    explanation: '$q = ne \\Rightarrow n = q/e = 3.2 \\times 10^{-19} / 1.6 \\times 10^{-19} = 2$ electrons.',
    partNumber: 3,
    partTitle: 'Conservation & Quantization',
  },

  // Part 4: Conductors & Insulators
  {
    id: 'ecf-ent-4a',
    question: 'In a conductor, electric charges:',
    options: ['Are fixed in place', 'Move freely', 'Are always balanced', 'Do not exist'],
    correctIndex: 1,
    explanation: 'Conductors have free charges (typically electrons) that can move easily through the material.',
    partNumber: 4,
    partTitle: 'Conductors & Insulators',
  },
  {
    id: 'ecf-ent-4b',
    question: 'When a charged rod is brought near a neutral conductor, the near side becomes:',
    options: [
      'Positively charged if the rod is positive',
      'Oppositely charged to the rod (charge induction)',
      'Neutral',
      'The same charge as the rod',
    ],
    correctIndex: 1,
    explanation: 'Free charges in the conductor redistribute: opposite charges are attracted to the near side (induction), same charges are repelled to the far side.',
    partNumber: 4,
    partTitle: 'Conductors & Insulators',
  },

  // Part 5: Charging Methods
  {
    id: 'ecf-ent-5a',
    question: 'Charging by induction results in the object having:',
    options: ['The same charge as the inducing object', 'The opposite charge', 'No charge', 'Double the charge'],
    correctIndex: 1,
    explanation: 'In charging by induction, the induced object acquires a charge opposite to the inducing charge.',
    partNumber: 5,
    partTitle: 'Charging Methods',
  },
  {
    id: 'ecf-ent-5b',
    question: 'When two identical conducting spheres touch, their charges:',
    options: ['Cancel completely', 'Are shared equally between them', 'Double', 'Transfer entirely to one sphere'],
    correctIndex: 1,
    explanation: 'Identical conductors in contact share the total charge equally: each ends up with $q_{total}/2$.',
    partNumber: 5,
    partTitle: 'Charging Methods',
  },

  // Part 6: Superposition of Forces
  {
    id: 'ecf-ent-6a',
    question: 'The principle of superposition for electric forces states that the net force on a charge is:',
    options: [
      'The force from the nearest charge only',
      'The vector sum of individual forces from all other charges',
      'The average of all forces',
      'The product of all forces',
    ],
    correctIndex: 1,
    explanation: 'The net electric force on a charge is the vector sum of the forces from each individual charge (superposition).',
    partNumber: 6,
    partTitle: 'Superposition of Forces',
  },
  {
    id: 'ecf-ent-6b',
    question: 'Three charges are in a line: $+q$ at $x=0$, $-q$ at $x=d$, $+q$ at $x=2d$. The force on the middle charge is:',
    options: ['Zero (forces cancel)', 'Toward $x=0$', 'Toward $x=2d$', 'Away from both outer charges'],
    correctIndex: 0,
    explanation: 'The middle charge ($-q$) is attracted equally toward both $+q$ charges (same magnitude, opposite directions). The net force is zero by symmetry.',
    partNumber: 6,
    partTitle: 'Superposition of Forces',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ecf-ent-7a',
    question: 'Two charges $+2q$ and $-q$ are separated by distance $d$. The point where the net electric force on a test charge is zero is:',
    options: ['Between the charges', 'To the left of $+2q$ (outside)', 'To the right of $-q$ (outside)', 'There is no such point'],
    correctIndex: 2,
    explanation: 'The zero-force point must be on the side of the smaller magnitude charge (outside the pair). At the right distance from $-q$, the forces balance.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ecf-ent-7b',
    question: "Coulomb's law and Newton's law of gravitation are similar because both:",
    options: [
      'Are always attractive',
      'Follow an inverse-square law with distance',
      'Involve mass',
      'Have the same constant',
    ],
    correctIndex: 1,
    explanation: 'Both are inverse-square laws: $F \\propto 1/r^2$. The key difference is gravity is always attractive, while electric force can be attractive or repulsive.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Electric Charge' },
    { partNumber: 2, partTitle: "Coulomb's Law" },
    { partNumber: 3, partTitle: 'Conservation & Quantization' },
    { partNumber: 4, partTitle: 'Conductors & Insulators' },
    { partNumber: 5, partTitle: 'Charging Methods' },
    { partNumber: 6, partTitle: 'Superposition of Forces' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
