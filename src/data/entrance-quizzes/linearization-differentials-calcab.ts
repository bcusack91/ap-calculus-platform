import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Linear Approximation
  {
    id: 'ld-ent-1a',
    question: 'The linear approximation of $f$ near $x = a$ is:',
    options: [
      '$f(a) + f\'(a)(x-a)$',
      '$f(a) + f\'\'(a)(x-a)^2$',
      '$f\'(a)(x-a)$',
      '$f(a) \\cdot f\'(a)$'
    ],
    correctIndex: 0,
    explanation: '$L(x) = f(a) + f\'(a)(x-a)$ is the linearization.',
    partNumber: 1,
    partTitle: 'Linear Approximation'
  },
  {
    id: 'ld-ent-1b',
    question: 'Linearization works best when $x$ is:',
    options: [
      'Far from $a$',
      'Close to $a$',
      'At infinity',
      'At zero'
    ],
    correctIndex: 1,
    explanation: 'The tangent line approximation is most accurate near the point of tangency.',
    partNumber: 1,
    partTitle: 'Linear Approximation'
  },

  // Part 2: The Tangent Line as Approximation
  {
    id: 'ld-ent-2a',
    question: 'Use linearization to approximate $\\sqrt{4.1}$:',
    options: [
      '$2.025$',
      '$2.05$',
      '$2.1$',
      '$2.5$'
    ],
    correctIndex: 0,
    explanation: '$f(x)=\\sqrt{x}$, $a=4$. $L(4.1)=2+\\frac{1}{4}(0.1)=2.025$.',
    partNumber: 2,
    partTitle: 'The Tangent Line as Approximation'
  },
  {
    id: 'ld-ent-2b',
    question: 'The tangent line to $y = x^3$ at $x = 1$ is:',
    options: [
      '$y = 3x - 2$',
      '$y = 3x - 1$',
      '$y = x - 1$',
      '$y = 3(x-1)$'
    ],
    correctIndex: 0,
    explanation: '$f(1)=1$, $f\'(1)=3$. $y = 1 + 3(x-1) = 3x - 2$.',
    partNumber: 2,
    partTitle: 'The Tangent Line as Approximation'
  },

  // Part 3: Differentials
  {
    id: 'ld-ent-3a',
    question: 'The differential $dy$ equals:',
    options: [
      '$f\'(x)\\,dx$',
      '$\\frac{f(x)}{dx}$',
      '$f(x)\\,dx$',
      '$\\Delta y$'
    ],
    correctIndex: 0,
    explanation: '$dy = f\'(x)\\,dx$ is the differential.',
    partNumber: 3,
    partTitle: 'Differentials'
  },
  {
    id: 'ld-ent-3b',
    question: 'If $y = x^2$ and $dx = 0.1$ at $x = 3$, then $dy =$',
    options: [
      '$0.6$',
      '$0.3$',
      '$0.9$',
      '$6$'
    ],
    correctIndex: 0,
    explanation: '$dy = 2x\\,dx = 2(3)(0.1) = 0.6$.',
    partNumber: 3,
    partTitle: 'Differentials'
  },

  // Part 4: Error Estimation
  {
    id: 'ld-ent-4a',
    question: 'The actual change $\\Delta y$ vs. the differential $dy$: $dy$ is an:',
    options: [
      'Exact calculation',
      'Approximation of $\\Delta y$',
      'Integral',
      'Average'
    ],
    correctIndex: 1,
    explanation: '$dy \\approx \\Delta y$ — the differential approximates the actual change.',
    partNumber: 4,
    partTitle: 'Error Estimation'
  },
  {
    id: 'ld-ent-4b',
    question: 'Using differentials, estimate the max error in $V = \\frac{4}{3}\\pi r^3$ if $r = 5 \\pm 0.1$:',
    options: [
      '$10\\pi$',
      '$100\\pi$',
      '$\\pi$',
      '$50\\pi$'
    ],
    correctIndex: 0,
    explanation: '$dV = 4\\pi r^2\\,dr = 4\\pi(25)(0.1) = 10\\pi$.',
    partNumber: 4,
    partTitle: 'Error Estimation'
  },

  // Part 5: Applications of Linearization
  {
    id: 'ld-ent-5a',
    question: 'Newton\'s method uses linearization to:',
    options: [
      'Find integrals',
      'Approximate roots',
      'Find maxima',
      'Compute areas'
    ],
    correctIndex: 1,
    explanation: 'Newton\'s method uses tangent lines to iteratively approximate roots.',
    partNumber: 5,
    partTitle: 'Applications of Linearization'
  },
  {
    id: 'ld-ent-5b',
    question: 'If the linearization overestimates $f(x)$, then $f$ is:',
    options: [
      'Concave up',
      'Concave down',
      'Linear',
      'Constant'
    ],
    correctIndex: 1,
    explanation: 'If the tangent line lies above the curve, the function is concave down.',
    partNumber: 5,
    partTitle: 'Applications of Linearization'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'ld-ent-6a',
    question: 'Approximate $\\cos(0.1)$ using $L(x)$ for $\\cos x$ at $a = 0$:',
    options: [
      '$1$',
      '$0.995$',
      '$0.9$',
      '$0.1$'
    ],
    correctIndex: 0,
    explanation: '$L(x) = \\cos(0) - \\sin(0)(x-0) = 1$. The linear approximation gives 1.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'ld-ent-6b',
    question: 'For $f(x)=\\ln x$, the linearization at $a=1$ gives $L(1.05) \\approx$',
    options: [
      '$0.05$',
      '$1.05$',
      '$0.5$',
      '$0.048$'
    ],
    correctIndex: 0,
    explanation: '$L(x) = 0 + 1 \\cdot (x-1) = x-1$. $L(1.05) = 0.05$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'ld-ent-7a',
    question: 'Relative error is defined as:',
    options: [
      '$\\frac{dy}{y}$',
      '$dy \\cdot y$',
      '$\\Delta y - dy$',
      '$\\frac{dx}{x}$'
    ],
    correctIndex: 0,
    explanation: 'Relative error = $\\frac{dy}{y}$ = estimated error divided by actual value.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications'
  },
  {
    id: 'ld-ent-7b',
    question: 'Percent error is relative error multiplied by:',
    options: [
      '$2$',
      '$\\pi$',
      '$100$',
      '$10$'
    ],
    correctIndex: 2,
    explanation: 'Percent error = relative error × 100%.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Linear Approximation' },
    { partNumber: 2, partTitle: 'The Tangent Line as Approximation' },
    { partNumber: 3, partTitle: 'Differentials' },
    { partNumber: 4, partTitle: 'Error Estimation' },
    { partNumber: 5, partTitle: 'Applications of Linearization' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' }
  ]
}
