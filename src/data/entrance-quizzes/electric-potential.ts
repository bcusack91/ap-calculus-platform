import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Electric Potential Energy
  {
    id: 'ep-ent-1a',
    question: 'The electric potential energy of two point charges is:',
    options: ['$U = kq_1q_2/r^2$', '$U = kq_1q_2/r$', '$U = kq_1q_2 r$', '$U = q_1q_2/r^2$'],
    correctIndex: 1,
    explanation: '$U = kq_1q_2/r$. Positive for like charges (repulsion), negative for opposite charges (attraction).',
    partNumber: 1,
    partTitle: 'Electric Potential Energy',
  },
  {
    id: 'ep-ent-1b',
    question: 'The potential energy of two opposite charges as they move closer together:',
    options: ['Increases', 'Decreases (becomes more negative)', 'Stays the same', 'Becomes zero'],
    correctIndex: 1,
    explanation: 'For opposite charges ($q_1 q_2 < 0$): $U = kq_1q_2/r$ becomes more negative as $r$ decreases.',
    partNumber: 1,
    partTitle: 'Electric Potential Energy',
  },

  // Part 2: Electric Potential (Voltage)
  {
    id: 'ep-ent-2a',
    question: 'Electric potential $V$ at a point is defined as:',
    options: ['$V = kq/r^2$', '$V = kq/r$', '$V = F/q$', '$V = Ed$'],
    correctIndex: 1,
    explanation: '$V = kq/r$ for a point charge. In general, $V = U/q_0$ (potential energy per unit charge). Units: volts (J/C).',
    partNumber: 2,
    partTitle: 'Electric Potential',
  },
  {
    id: 'ep-ent-2b',
    question: 'A potential difference of $12$ V means:',
    options: ['$12$ N of force per coulomb', '$12$ J of energy per coulomb of charge moved', '$12$ C of charge', '$12$ m of distance'],
    correctIndex: 1,
    explanation: '$1$ V = $1$ J/C. A $12$ V difference means $12$ J of work per coulomb of charge transferred.',
    partNumber: 2,
    partTitle: 'Electric Potential',
  },

  // Part 3: Equipotential Surfaces
  {
    id: 'ep-ent-3a',
    question: 'Equipotential surfaces are always:',
    options: ['Parallel to electric field lines', 'Perpendicular to electric field lines', 'Random in orientation', 'At the same distance from charges'],
    correctIndex: 1,
    explanation: 'Equipotential surfaces are perpendicular to $\\vec{E}$. No work is done moving a charge along an equipotential.',
    partNumber: 3,
    partTitle: 'Equipotential Surfaces',
  },
  {
    id: 'ep-ent-3b',
    question: 'The work done in moving a charge along an equipotential surface is:',
    options: ['$W = qEd$', 'Maximum', 'Zero', 'Negative'],
    correctIndex: 2,
    explanation: 'On an equipotential: $\\Delta V = 0$, so $W = q\\Delta V = 0$. No work is done.',
    partNumber: 3,
    partTitle: 'Equipotential Surfaces',
  },

  // Part 4: Potential Difference & Work
  {
    id: 'ep-ent-4a',
    question: 'The work done by the electric field in moving charge $q$ through potential difference $\\Delta V$ is:',
    options: ['$W = q/\\Delta V$', '$W = -q\\Delta V$', '$W = q\\Delta V^2$', '$W = q\\Delta V$'],
    correctIndex: 1,
    explanation: '$W_{field} = -q\\Delta V = q(V_i - V_f)$. The field does positive work when positive charge moves to lower potential.',
    partNumber: 4,
    partTitle: 'Potential Difference & Work',
  },
  {
    id: 'ep-ent-4b',
    question: 'An electron accelerated through $100$ V gains kinetic energy of:',
    options: ['$100$ J', '$100$ eV', '$1.6 \\times 10^{-17}$ J', 'Both $100$ eV and $1.6 \\times 10^{-17}$ J'],
    correctIndex: 3,
    explanation: '$\\Delta KE = |q\\Delta V| = e(100) = 100$ eV $= 100 \\times 1.6 \\times 10^{-19} = 1.6 \\times 10^{-17}$ J.',
    partNumber: 4,
    partTitle: 'Potential Difference & Work',
  },

  // Part 5: Relationship Between E and V
  {
    id: 'ep-ent-5a',
    question: 'The relationship between electric field and potential in a uniform field is:',
    options: ['$E = V \\times d$', '$E = -\\Delta V / \\Delta x$', '$E = V^2/d$', '$E = \\Delta V \\times \\Delta x$'],
    correctIndex: 1,
    explanation: '$E = -\\Delta V/\\Delta x = -dV/dx$. The field points from high to low potential.',
    partNumber: 5,
    partTitle: 'E-V Relationship',
  },
  {
    id: 'ep-ent-5b',
    question: 'If $V$ is constant everywhere in a region, the electric field in that region is:',
    options: ['Very large', 'Undefined', 'Zero', 'Uniform but nonzero'],
    correctIndex: 2,
    explanation: '$E = -dV/dx$. If $V$ is constant, $dV/dx = 0$, so $E = 0$.',
    partNumber: 5,
    partTitle: 'E-V Relationship',
  },

  // Part 6: Potential Due to Multiple Charges
  {
    id: 'ep-ent-6a',
    question: 'The potential at a point due to multiple charges is found by:',
    options: ['Vector addition', 'Scalar (algebraic) addition', 'Multiplication', 'Only the nearest charge matters'],
    correctIndex: 1,
    explanation: 'Potential is a scalar: $V = V_1 + V_2 + \\ldots = k \\sum q_i/r_i$. No vector components needed.',
    partNumber: 6,
    partTitle: 'Potential from Multiple Charges',
  },
  {
    id: 'ep-ent-6b',
    question: 'At the midpoint of a $+q$ and $-q$ dipole, the potential is:',
    options: ['$2kq/r$', '$kq/r$', 'Zero', 'Undefined'],
    correctIndex: 2,
    explanation: '$V = kq/r + k(-q)/r = 0$. The contributions cancel because potential is a scalar and the distances are equal.',
    partNumber: 6,
    partTitle: 'Potential from Multiple Charges',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ep-ent-7a',
    question: 'A positive charge is released from rest in a uniform electric field. It moves toward:',
    options: ['Higher potential', 'Lower potential', 'An equipotential', 'The negative plate only if plates are present'],
    correctIndex: 1,
    explanation: 'A positive charge moves from high to low potential (in the direction of $\\vec{E}$), gaining kinetic energy as $U$ decreases.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ep-ent-7b',
    question: 'Two points near a positive charge have potentials $V_A = 100$ V and $V_B = 50$ V. Which is closer to the charge?',
    options: ['Point A', 'Point B', 'Both are equidistant', 'Cannot be determined'],
    correctIndex: 0,
    explanation: '$V = kq/r$ for a positive charge. Higher $V$ corresponds to smaller $r$. Point A ($100$ V) is closer.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Electric Potential Energy' },
    { partNumber: 2, partTitle: 'Electric Potential' },
    { partNumber: 3, partTitle: 'Equipotential Surfaces' },
    { partNumber: 4, partTitle: 'Potential Difference & Work' },
    { partNumber: 5, partTitle: 'E-V Relationship' },
    { partNumber: 6, partTitle: 'Potential from Multiple Charges' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
