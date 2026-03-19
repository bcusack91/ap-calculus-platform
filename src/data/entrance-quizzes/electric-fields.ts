import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Electric Field Concept
  {
    id: 'ef-ent-1a',
    question: 'The electric field at a point is defined as:',
    options: ['$E = F/q$', '$E = Fq$', '$E = kq$', '$E = V/d$'],
    correctIndex: 0,
    explanation: '$\\vec{E} = \\vec{F}/q_0$, the force per unit positive test charge. Units: N/C or V/m.',
    partNumber: 1,
    partTitle: 'Electric Field Concept',
  },
  {
    id: 'ef-ent-1b',
    question: 'The electric field points:',
    options: ['From negative to positive charges', 'From positive to negative charges', 'Perpendicular to charges', 'In random directions'],
    correctIndex: 1,
    explanation: 'Electric field lines point away from positive charges and toward negative charges (direction a positive test charge would move).',
    partNumber: 1,
    partTitle: 'Electric Field Concept',
  },

  // Part 2: Field of a Point Charge
  {
    id: 'ef-ent-2a',
    question: 'The electric field magnitude due to a point charge $q$ at distance $r$ is:',
    options: ['$E = kq/r$', '$E = kq/r^2$', '$E = kq^2/r^2$', '$E = kqr$'],
    correctIndex: 1,
    explanation: '$E = kq/r^2 = q/(4\\pi\\epsilon_0 r^2)$. Field strength decreases as the square of the distance.',
    partNumber: 2,
    partTitle: 'Field of a Point Charge',
  },
  {
    id: 'ef-ent-2b',
    question: 'At twice the distance from a point charge, the electric field strength is:',
    options: ['Half', 'One quarter', 'Double', 'One eighth'],
    correctIndex: 1,
    explanation: '$E \\propto 1/r^2$. Doubling $r$ gives $E \\to E/4$.',
    partNumber: 2,
    partTitle: 'Field of a Point Charge',
  },

  // Part 3: Electric Field Lines
  {
    id: 'ef-ent-3a',
    question: 'Electric field lines:',
    options: ['Can cross each other', 'Always form closed loops', 'Start on positive charges and end on negative charges', 'Point from low to high potential'],
    correctIndex: 2,
    explanation: 'Field lines start on positive charges, end on negative charges, never cross, and their density indicates field strength.',
    partNumber: 3,
    partTitle: 'Electric Field Lines',
  },
  {
    id: 'ef-ent-3b',
    question: 'Where field lines are closer together, the electric field is:',
    options: ['Weaker', 'Stronger', 'Zero', 'Uniform'],
    correctIndex: 1,
    explanation: 'The density of field lines represents field strength. Closer lines = stronger field.',
    partNumber: 3,
    partTitle: 'Electric Field Lines',
  },

  // Part 4: Uniform Electric Field
  {
    id: 'ef-ent-4a',
    question: 'A uniform electric field between parallel plates is given by:',
    options: ['$E = kq/r^2$', '$E = V/d$', '$E = qV$', '$E = \\sigma/\\epsilon_0$'],
    correctIndex: 1,
    explanation: 'Between parallel plates: $E = V/d = \\sigma/\\epsilon_0$ (uniform). $V$ is potential difference, $d$ is plate separation.',
    partNumber: 4,
    partTitle: 'Uniform Electric Field',
  },
  {
    id: 'ef-ent-4b',
    question: 'Parallel plates are separated by $0.02$ m with a potential difference of $100$ V. The electric field between them is:',
    options: ['$2000$ V/m', '$5000$ V/m', '$200$ V/m', '$50$ V/m'],
    correctIndex: 1,
    explanation: '$E = V/d = 100/0.02 = 5000$ V/m.',
    partNumber: 4,
    partTitle: 'Uniform Electric Field',
  },

  // Part 5: Superposition of Fields
  {
    id: 'ef-ent-5a',
    question: 'The net electric field due to multiple charges is found by:',
    options: ['Adding their magnitudes', 'Vector addition of individual fields', 'Multiplying fields together', 'Taking the largest field only'],
    correctIndex: 1,
    explanation: 'The principle of superposition: $\\vec{E}_{net} = \\vec{E}_1 + \\vec{E}_2 + \\ldots$. Fields are vectors and must be added as such.',
    partNumber: 5,
    partTitle: 'Superposition of Fields',
  },
  {
    id: 'ef-ent-5b',
    question: 'At the midpoint between two equal positive charges, the electric field is:',
    options: ['Maximum', 'Zero', 'Pointing toward one charge', 'Undefined'],
    correctIndex: 1,
    explanation: 'At the midpoint, the fields from the two equal charges point in opposite directions and have equal magnitudes, so they cancel: $\\vec{E}_{net} = 0$.',
    partNumber: 5,
    partTitle: 'Superposition of Fields',
  },

  // Part 6: Conductors in Electric Fields
  {
    id: 'ef-ent-6a',
    question: 'Inside a conductor in electrostatic equilibrium, the electric field is:',
    options: ['Maximum', 'Uniform', 'Zero', 'Infinite'],
    correctIndex: 2,
    explanation: 'Free charges in a conductor rearrange until the internal field is zero. If it were not zero, charges would continue to move.',
    partNumber: 6,
    partTitle: 'Conductors in Electric Fields',
  },
  {
    id: 'ef-ent-6b',
    question: 'On a charged conductor, the excess charge resides:',
    options: ['Throughout the volume', 'At the center', 'On the outer surface', 'Nowhere'],
    correctIndex: 2,
    explanation: 'Excess charge on a conductor distributes itself on the outer surface to minimize repulsion and maintain $E = 0$ inside.',
    partNumber: 6,
    partTitle: 'Conductors in Electric Fields',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ef-ent-7a',
    question: 'A proton and electron are placed in the same uniform electric field. Which experiences the greater force?',
    options: ['The proton', 'The electron', 'Both experience the same magnitude force', 'Neither experiences a force'],
    correctIndex: 2,
    explanation: '$F = qE$. Both have charge magnitude $e$, so $|F| = eE$ for both. (The directions are opposite.)',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ef-ent-7b',
    question: 'A proton and electron are released from rest in a uniform electric field. Which has the greater acceleration?',
    options: ['The proton', 'The electron', 'Both have equal acceleration', 'Neither accelerates'],
    correctIndex: 1,
    explanation: 'Same force on both ($F = eE$), but $a = F/m$. The electron has much smaller mass, so it has much greater acceleration.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Electric Field Concept' },
    { partNumber: 2, partTitle: 'Field of a Point Charge' },
    { partNumber: 3, partTitle: 'Electric Field Lines' },
    { partNumber: 4, partTitle: 'Uniform Electric Field' },
    { partNumber: 5, partTitle: 'Superposition of Fields' },
    { partNumber: 6, partTitle: 'Conductors in Electric Fields' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
