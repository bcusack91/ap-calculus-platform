import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Momentum Definition
  {
    id: 'mi-ent-1a',
    question: 'Momentum is defined as:',
    options: ['$p = ma$', '$p = mv$', '$p = Ft$', '$p = \\frac{1}{2}mv^2$'],
    correctIndex: 1,
    explanation: 'Momentum ($p$) is the product of mass and velocity: $p = mv$. It is a vector quantity.',
    partNumber: 1,
    partTitle: 'Momentum Definition',
  },
  {
    id: 'mi-ent-1b',
    question: 'A $3$ kg object moves at $4$ m/s east. Its momentum is:',
    options: ['$12$ kg·m/s east', '$7$ kg·m/s east', '$0.75$ kg·m/s east', '$12$ kg·m/s west'],
    correctIndex: 0,
    explanation: '$p = mv = 3 \\times 4 = 12$ kg·m/s. Direction is the same as velocity: east.',
    partNumber: 1,
    partTitle: 'Momentum Definition',
  },

  // Part 2: Impulse
  {
    id: 'mi-ent-2a',
    question: 'Impulse is defined as:',
    options: ['Force divided by time', 'Force times time', 'Mass times velocity', 'Mass times acceleration'],
    correctIndex: 1,
    explanation: 'Impulse $J = F\\Delta t$. It equals the change in momentum of the object.',
    partNumber: 2,
    partTitle: 'Impulse',
  },
  {
    id: 'mi-ent-2b',
    question: 'A $0.5$ kg ball moving at $6$ m/s is stopped by a catcher in $0.1$ s. What is the magnitude of the average force?',
    options: ['$3$ N', '$30$ N', '$0.3$ N', '$300$ N'],
    correctIndex: 1,
    explanation: '$J = \\Delta p = 0.5 \\times 6 = 3$ kg·m/s. $F = J/\\Delta t = 3/0.1 = 30$ N.',
    partNumber: 2,
    partTitle: 'Impulse',
  },

  // Part 3: Impulse-Momentum Theorem
  {
    id: 'mi-ent-3a',
    question: 'The impulse-momentum theorem states:',
    options: ['$F = ma$', '$J = \\Delta p$', '$p = mv$', '$W = \\Delta KE$'],
    correctIndex: 1,
    explanation: 'The impulse-momentum theorem: $J = F\\Delta t = \\Delta p = mv_f - mv_i$.',
    partNumber: 3,
    partTitle: 'Impulse-Momentum Theorem',
  },
  {
    id: 'mi-ent-3b',
    question: 'A $2$ kg object changes velocity from $3$ m/s to $7$ m/s. What impulse was applied?',
    options: ['$2$ kg·m/s', '$4$ kg·m/s', '$8$ kg·m/s', '$14$ kg·m/s'],
    correctIndex: 2,
    explanation: '$J = \\Delta p = m(v_f - v_i) = 2(7 - 3) = 8$ kg·m/s.',
    partNumber: 3,
    partTitle: 'Impulse-Momentum Theorem',
  },

  // Part 4: Force-Time Graphs
  {
    id: 'mi-ent-4a',
    question: 'The area under a force-time graph represents:',
    options: ['Work done', 'Impulse', 'Power', 'Acceleration'],
    correctIndex: 1,
    explanation: 'The area under an $F$-$t$ graph equals the impulse: $J = \\int F \\, dt$.',
    partNumber: 4,
    partTitle: 'Force-Time Graphs',
  },
  {
    id: 'mi-ent-4b',
    question: 'A force-time graph shows a triangular pulse with peak $100$ N lasting $0.04$ s. What is the impulse?',
    options: ['$4$ N·s', '$2$ N·s', '$100$ N·s', '$0.04$ N·s'],
    correctIndex: 1,
    explanation: 'Area of triangle = $\\frac{1}{2} \\times base \\times height = \\frac{1}{2}(0.04)(100) = 2$ N·s.',
    partNumber: 4,
    partTitle: 'Force-Time Graphs',
  },

  // Part 5: Reducing Impact Force
  {
    id: 'mi-ent-5a',
    question: 'Why do airbags reduce injury in car crashes?',
    options: [
      'They decrease the impulse',
      'They increase the stopping time, reducing average force',
      'They decrease the momentum change',
      'They increase the mass of the person',
    ],
    correctIndex: 1,
    explanation: 'The impulse (change in momentum) is the same with or without an airbag. By increasing $\\Delta t$, the average force $F = \\Delta p/\\Delta t$ is reduced.',
    partNumber: 5,
    partTitle: 'Reducing Impact Force',
  },
  {
    id: 'mi-ent-5b',
    question: 'A gymnast bends their knees when landing. This technique:',
    options: [
      'Decreases their momentum change',
      'Increases the time of impact, reducing force',
      'Increases their momentum',
      'Has no effect on force',
    ],
    correctIndex: 1,
    explanation: 'Bending knees extends the landing time. Since $\\Delta p$ is fixed, a longer $\\Delta t$ means smaller average force: $F = \\Delta p / \\Delta t$.',
    partNumber: 5,
    partTitle: 'Reducing Impact Force',
  },

  // Part 6: Momentum Calculations
  {
    id: 'mi-ent-6a',
    question: 'A $0.15$ kg baseball is pitched at $40$ m/s and hit back at $50$ m/s. What is the magnitude of the impulse delivered by the bat?',
    options: ['$1.5$ N·s', '$6.75$ N·s', '$13.5$ N·s', '$90$ N·s'],
    correctIndex: 2,
    explanation: 'Taking the pitching direction as positive: $\\Delta p = m(v_f - v_i) = 0.15(-50 - 40) = 0.15(-90) = -13.5$ kg·m/s. Magnitude = $13.5$ N·s.',
    partNumber: 6,
    partTitle: 'Momentum Calculations',
  },
  {
    id: 'mi-ent-6b',
    question: 'A $60$ kg person jumps from rest and leaves the ground at $3$ m/s. What impulse did the ground provide?',
    options: ['$20$ N·s', '$90$ N·s', '$180$ N·s', '$540$ N·s'],
    correctIndex: 2,
    explanation: '$J = \\Delta p = m(v_f - v_i) = 60(3 - 0) = 180$ kg·m/s upward.',
    partNumber: 6,
    partTitle: 'Momentum Calculations',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'mi-ent-7a',
    question: 'Two objects with the same kinetic energy but different masses have different momenta. Which has greater momentum?',
    options: ['The lighter object', 'The heavier object', 'They have equal momentum', 'Cannot be determined'],
    correctIndex: 1,
    explanation: 'If $KE = \\frac{p^2}{2m}$, then $p = \\sqrt{2mKE}$. For the same KE, larger mass gives larger momentum.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'mi-ent-7b',
    question: 'An object\'s momentum can be zero while its kinetic energy is:',
    options: ['Zero only', 'Any positive value', 'Negative', 'Equal to its PE'],
    correctIndex: 0,
    explanation: 'If $p = mv = 0$ and $m \\neq 0$, then $v = 0$, so $KE = \\frac{1}{2}mv^2 = 0$. Zero momentum implies zero KE.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Momentum Definition' },
    { partNumber: 2, partTitle: 'Impulse' },
    { partNumber: 3, partTitle: 'Impulse-Momentum Theorem' },
    { partNumber: 4, partTitle: 'Force-Time Graphs' },
    { partNumber: 5, partTitle: 'Reducing Impact Force' },
    { partNumber: 6, partTitle: 'Momentum Calculations' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
