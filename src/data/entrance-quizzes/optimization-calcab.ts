import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Setting Up Optimization Problems
  {
    id: 'opt-ent-1a',
    question: 'In an optimization problem, the first step is usually to:',
    options: [
      'Take the derivative',
      'Identify the quantity to maximize or minimize',
      'Set the derivative to zero',
      'Graph the function'
    ],
    correctIndex: 1,
    explanation: 'You must first identify what you are optimizing before writing equations.',
    partNumber: 1,
    partTitle: 'Setting Up Optimization Problems'
  },
  {
    id: 'opt-ent-1b',
    question: 'A constraint equation in optimization relates:',
    options: [
      'The derivative to zero',
      'Two or more variables in the problem',
      'The answer to the question',
      'The domain to the range'
    ],
    correctIndex: 1,
    explanation: 'Constraints express relationships between variables, reducing the problem to one variable.',
    partNumber: 1,
    partTitle: 'Setting Up Optimization Problems'
  },

  // Part 2: Critical Points in Context
  {
    id: 'opt-ent-2a',
    question: 'To find where a maximum or minimum of $f(x)$ occurs, you set:',
    options: [
      '$f(x) = 0$',
      '$f\'(x) = 0$',
      '$f\'\'(x) = 0$',
      '$f(x) = f\'(x)$'
    ],
    correctIndex: 1,
    explanation: 'Candidates for extrema occur where $f\'(x) = 0$ or is undefined.',
    partNumber: 2,
    partTitle: 'Critical Points in Context'
  },
  {
    id: 'opt-ent-2b',
    question: 'How do you confirm a critical point is a maximum?',
    options: [
      '$f\'(c) > 0$',
      '$f\'\'(c) < 0$',
      '$f(c) > 0$',
      '$f\'\'(c) > 0$'
    ],
    correctIndex: 1,
    explanation: 'If $f\'\'(c) < 0$, the function is concave down at $c$, confirming a local maximum.',
    partNumber: 2,
    partTitle: 'Critical Points in Context'
  },

  // Part 3: Maximizing Area & Volume
  {
    id: 'opt-ent-3a',
    question: 'A farmer has 200 ft of fencing for a rectangular area. If one side is $x$, the area $A = x(100-x)$. What $x$ maximizes area?',
    options: [
      '$25$',
      '$50$',
      '$100$',
      '$200$'
    ],
    correctIndex: 1,
    explanation: '$A\'(x)=100-2x=0 \\Rightarrow x=50$.',
    partNumber: 3,
    partTitle: 'Maximizing Area & Volume'
  },
  {
    id: 'opt-ent-3b',
    question: 'An open-top box is cut from a 12×12 sheet by removing squares of side $x$. The volume is:',
    options: [
      '$x(12-x)^2$',
      '$x(12-2x)^2$',
      '$(12-x)^2$',
      '$12x^2$'
    ],
    correctIndex: 1,
    explanation: 'Folding up gives dimensions $(12-2x) \\times (12-2x) \\times x$.',
    partNumber: 3,
    partTitle: 'Maximizing Area & Volume'
  },

  // Part 4: Revenue & Cost Applications
  {
    id: 'opt-ent-4a',
    question: 'Revenue is maximized when:',
    options: [
      'Price is highest',
      'Marginal revenue equals zero',
      'Cost equals zero',
      'Demand is unlimited'
    ],
    correctIndex: 1,
    explanation: 'Set $R\'(x)=0$ to find the quantity that maximizes revenue.',
    partNumber: 4,
    partTitle: 'Revenue & Cost Applications'
  },
  {
    id: 'opt-ent-4b',
    question: 'If $C(x)=0.01x^2+5x+100$, the marginal cost at $x=50$ is:',
    options: [
      '$6$',
      '$5$',
      '$7$',
      '$50$'
    ],
    correctIndex: 0,
    explanation: '$C\'(x)=0.02x+5$. At $x=50$: $C\'(50)=1+5=6$.',
    partNumber: 4,
    partTitle: 'Revenue & Cost Applications'
  },

  // Part 5: Constraint Equations
  {
    id: 'opt-ent-5a',
    question: 'Eliminating a variable using a constraint is done by:',
    options: [
      'Integration',
      'Substitution',
      'Differentiation',
      'Factoring'
    ],
    correctIndex: 1,
    explanation: 'Use the constraint to substitute one variable in terms of another.',
    partNumber: 5,
    partTitle: 'Constraint Equations'
  },
  {
    id: 'opt-ent-5b',
    question: 'If $x + y = 20$ and you maximize $P = xy$, substitution gives:',
    options: [
      '$P = x(20-x)$',
      '$P = 20x$',
      '$P = x^2 - 20$',
      '$P = 20/x$'
    ],
    correctIndex: 0,
    explanation: '$y = 20 - x$, so $P = x(20 - x)$.',
    partNumber: 5,
    partTitle: 'Constraint Equations'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'opt-ent-6a',
    question: 'On a closed interval, absolute extrema can occur at:',
    options: [
      'Only critical points',
      'Only endpoints',
      'Critical points and endpoints',
      'Only where $f\'\' = 0$'
    ],
    correctIndex: 2,
    explanation: 'On a closed interval, you must check both critical points and endpoints.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'opt-ent-6b',
    question: 'A wire of length 40 cm is bent into a circle and a square. To minimize total area, what fraction goes to the circle?',
    options: [
      'All of it',
      'None of it',
      '$\\frac{40\\pi}{4+\\pi}$',
      '$\\frac{40}{4+\\pi}$'
    ],
    correctIndex: 3,
    explanation: 'Minimize $A = \\frac{x^2}{4\\pi}+\\frac{(40-x)^2}{16}$; set $A\'=0$ and solve.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'opt-ent-7a',
    question: 'A cylindrical can must hold 1000 cm³. The radius minimizing surface area satisfies $r =$:',
    options: [
      '$\\sqrt[3]{\\frac{500}{\\pi}}$',
      '$10$',
      '$\\frac{1000}{\\pi}$',
      '$5$'
    ],
    correctIndex: 0,
    explanation: '$S\'(r)=0$ yields $r = \\sqrt[3]{\\frac{V}{2\\pi}} = \\sqrt[3]{\\frac{500}{\\pi}}$.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications'
  },
  {
    id: 'opt-ent-7b',
    question: 'After finding a critical point in an optimization problem on the AP exam, you should:',
    options: [
      'Stop — the critical point is the answer',
      'Justify it is a max or min using a derivative test',
      'Check if $f\'\' = 0$',
      'Graph the function'
    ],
    correctIndex: 1,
    explanation: 'You must always justify that a critical point gives the desired extremum.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Setting Up Optimization Problems' },
    { partNumber: 2, partTitle: 'Critical Points in Context' },
    { partNumber: 3, partTitle: 'Maximizing Area & Volume' },
    { partNumber: 4, partTitle: 'Revenue & Cost Applications' },
    { partNumber: 5, partTitle: 'Constraint Equations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' }
  ]
}
