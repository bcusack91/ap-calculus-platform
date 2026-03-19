import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Mean Value Theorem
  {
    id: 'ta-ent-1a',
    question: 'The Mean Value Theorem guarantees a point $c$ where:',
    options: [
      '$f(c) = 0$',
      '$f\'(c) = \\frac{f(b)-f(a)}{b-a}$',
      '$f\'\'(c) = 0$',
      '$f(c) = f\'(c)$'
    ],
    correctIndex: 1,
    explanation: 'MVT: there exists $c$ in $(a,b)$ with instantaneous rate equal to average rate.',
    partNumber: 1,
    partTitle: 'Mean Value Theorem'
  },
  {
    id: 'ta-ent-1b',
    question: 'What conditions must $f$ satisfy for MVT on $[a,b]$?',
    options: [
      'Continuous on $[a,b]$ and differentiable on $(a,b)$',
      'Differentiable everywhere',
      'Continuous everywhere',
      '$f(a) = f(b)$'
    ],
    correctIndex: 0,
    explanation: 'MVT requires continuity on the closed interval and differentiability on the open interval.',
    partNumber: 1,
    partTitle: 'Mean Value Theorem'
  },

  // Part 2: Rolle's Theorem
  {
    id: 'ta-ent-2a',
    question: 'Rolle\'s Theorem is a special case of MVT when:',
    options: [
      '$f\'(c) = 1$',
      '$f(a) = f(b)$',
      '$a = b$',
      '$f\'(a) = f\'(b)$'
    ],
    correctIndex: 1,
    explanation: 'When $f(a)=f(b)$, MVT guarantees $f\'(c)=0$ for some $c$ in $(a,b)$.',
    partNumber: 2,
    partTitle: 'Rolle\'s Theorem'
  },
  {
    id: 'ta-ent-2b',
    question: 'For $f(x) = x^2 - 4x$ on $[0,4]$, Rolle\'s Theorem guarantees $f\'(c) = 0$ at $c =$:',
    options: [
      '$1$',
      '$2$',
      '$3$',
      '$4$'
    ],
    correctIndex: 1,
    explanation: '$f(0) = 0 = f(4)$. $f\'(x) = 2x - 4 = 0$ gives $c = 2$.',
    partNumber: 2,
    partTitle: 'Rolle\'s Theorem'
  },

  // Part 3: Intermediate Value Theorem
  {
    id: 'ta-ent-3a',
    question: 'The Intermediate Value Theorem states that if $f$ is continuous on $[a,b]$ and $N$ is between $f(a)$ and $f(b)$, then:',
    options: [
      '$f\'(c) = N$',
      '$f(c) = N$ for some $c$ in $(a,b)$',
      '$f$ is differentiable',
      '$f$ has a maximum'
    ],
    correctIndex: 1,
    explanation: 'IVT guarantees the function takes every value between $f(a)$ and $f(b)$.',
    partNumber: 3,
    partTitle: 'Intermediate Value Theorem'
  },
  {
    id: 'ta-ent-3b',
    question: 'IVT is commonly used to show that an equation has a:',
    options: [
      'Maximum',
      'Minimum',
      'Root (solution)',
      'Derivative'
    ],
    correctIndex: 2,
    explanation: 'If $f(a) < 0$ and $f(b) > 0$, IVT guarantees a root in $(a,b)$.',
    partNumber: 3,
    partTitle: 'Intermediate Value Theorem'
  },

  // Part 4: Extreme Value Theorem
  {
    id: 'ta-ent-4a',
    question: 'The Extreme Value Theorem guarantees that a continuous function on $[a,b]$:',
    options: [
      'Has a derivative everywhere',
      'Attains an absolute max and min',
      'Is differentiable',
      'Has no critical points'
    ],
    correctIndex: 1,
    explanation: 'EVT: a continuous function on a closed interval attains both an absolute max and min.',
    partNumber: 4,
    partTitle: 'Extreme Value Theorem'
  },
  {
    id: 'ta-ent-4b',
    question: 'EVT requires the interval to be:',
    options: [
      'Open',
      'Closed and bounded',
      'Unbounded',
      'Semi-open'
    ],
    correctIndex: 1,
    explanation: 'The interval must be closed and bounded: $[a,b]$.',
    partNumber: 4,
    partTitle: 'Extreme Value Theorem'
  },

  // Part 5: L'Hôpital's Rule
  {
    id: 'ta-ent-5a',
    question: 'L\'Hôpital\'s Rule applies to limits of the form:',
    options: [
      '$\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$',
      '$\\frac{1}{0}$',
      '$0 \\cdot \\infty$',
      'Any fraction'
    ],
    correctIndex: 0,
    explanation: 'L\'Hôpital\'s Rule requires an indeterminate form $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$.',
    partNumber: 5,
    partTitle: 'L\'Hôpital\'s Rule'
  },
  {
    id: 'ta-ent-5b',
    question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ using L\'Hôpital\'s Rule:',
    options: [
      '$0$',
      '$1$',
      '$\\infty$',
      '$-1$'
    ],
    correctIndex: 1,
    explanation: '$\\frac{0}{0}$ form. $\\lim \\frac{\\cos x}{1} = 1$.',
    partNumber: 5,
    partTitle: 'L\'Hôpital\'s Rule'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'ta-ent-6a',
    question: 'If $f(1)=3$ and $f(4)=15$ and $f$ is differentiable, MVT guarantees $f\'(c) =$ for some $c$:',
    options: [
      '$3$',
      '$4$',
      '$5$',
      '$12$'
    ],
    correctIndex: 1,
    explanation: '$f\'(c) = \\frac{15-3}{4-1} = 4$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'ta-ent-6b',
    question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{3x^2+1}{5x^2-2}$:',
    options: [
      '$0$',
      '$\\frac{3}{5}$',
      '$1$',
      '$\\infty$'
    ],
    correctIndex: 1,
    explanation: 'Divide by $x^2$: $\\frac{3+1/x^2}{5-2/x^2} \\to \\frac{3}{5}$. (Or L\'Hôpital twice.)',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'ta-ent-7a',
    question: 'Which theorem is used to guarantee a root of $f$ in an interval?',
    options: [
      'MVT',
      'IVT',
      'EVT',
      'Rolle\'s'
    ],
    correctIndex: 1,
    explanation: 'IVT: if $f$ changes sign and is continuous, there is a root.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications'
  },
  {
    id: 'ta-ent-7b',
    question: 'If a function is continuous on $[a,b]$ but not differentiable at some point in $(a,b)$, which theorem still applies?',
    options: [
      'MVT',
      'Rolle\'s Theorem',
      'IVT and EVT',
      'None'
    ],
    correctIndex: 2,
    explanation: 'IVT and EVT only require continuity, not differentiability.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Mean Value Theorem' },
    { partNumber: 2, partTitle: 'Rolle\'s Theorem' },
    { partNumber: 3, partTitle: 'Intermediate Value Theorem' },
    { partNumber: 4, partTitle: 'Extreme Value Theorem' },
    { partNumber: 5, partTitle: 'L\'Hôpital\'s Rule' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' }
  ]
}
