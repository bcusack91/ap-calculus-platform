// Derivatives question bank for competitive mode

export interface DerivativeQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number // index in options array
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: DerivativeQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What is the derivative of $f(x) = x^3$?',
    options: ['$3x^2$', '$x^2$', '$3x^3$', '$x^4/4$'],
    correctAnswer: 0,
    explanation: 'Using the power rule: $d/dx[x^n] = nx^{n-1}$',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What is $d/dx[5x]$?',
    options: ['$5$', '$5x$', '$x$', '$0$'],
    correctAnswer: 0,
    explanation: 'The derivative of $cx$ is $c$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is $d/dx[\\sin x]$?',
    options: ['$\\cos x$', '$-\\cos x$', '$\\sin x$', '$-\\sin x$'],
    correctAnswer: 0,
    explanation: 'The derivative of $\\sin x$ is $\\cos x$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'What is $d/dx[e^x]$?',
    options: ['$e^x$', '$xe^{x-1}$', '$e^{x+1}$', '$\\ln(x)$'],
    correctAnswer: 0,
    explanation: '$e^x$ is its own derivative.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'What is the derivative of a constant $f(x) = 7$?',
    options: ['$0$', '$7$', '$1$', '$7x$'],
    correctAnswer: 0,
    explanation: 'The derivative of any constant is $0$.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is $d/dx[x^{-1}]$?',
    options: ['$-x^{-2}$', '$x^{-2}$', '$-1$', '$\\ln x$'],
    correctAnswer: 0,
    explanation: 'Power rule: $d/dx[x^{-1}] = -1 \\cdot x^{-2} = -x^{-2}$.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'What is $d/dx[\\cos x]$?',
    options: ['$-\\sin x$', '$\\sin x$', '$-\\cos x$', '$\\cos x$'],
    correctAnswer: 0,
    explanation: 'The derivative of $\\cos x$ is $-\\sin x$.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'What is $d/dx[\\ln x]$?',
    options: ['$1/x$', '$x$', '$e^x$', '$\\ln(x)/x$'],
    correctAnswer: 0,
    explanation: 'The derivative of $\\ln x$ is $1/x$.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 9,
    question: 'What is $d/dx[x^2 \\sin x]$?',
    options: ['$2x\\sin x + x^2\\cos x$', '$2x\\cos x$', '$x^2\\cos x$', '$2x\\sin x - x^2\\cos x$'],
    correctAnswer: 0,
    explanation: 'Product rule: $(fg)\' = f\'g + fg\'$.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'What is $d/dx[\\tan x]$?',
    options: ['$\\sec^2 x$', '$\\csc^2 x$', '$\\cos^2 x$', '$-\\cot x$'],
    correctAnswer: 0,
    explanation: 'The derivative of $\\tan x$ is $\\sec^2 x$.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'If $f(x) = (3x+1)^5$, what is $f\'(x)$?',
    options: ['$15(3x+1)^4$', '$5(3x+1)^4$', '$3(3x+1)^4$', '$15x(3x+1)^4$'],
    correctAnswer: 0,
    explanation: 'Chain rule: $5(3x+1)^4 \\cdot 3 = 15(3x+1)^4$.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'What is $d/dx[e^{2x}]$?',
    options: ['$2e^{2x}$', '$e^{2x}$', '$2xe^{2x}$', '$e^{2x}/2$'],
    correctAnswer: 0,
    explanation: 'Chain rule: derivative of $e^{u}$ is $e^{u} \\cdot u\'$, so $e^{2x} \\cdot 2 = 2e^{2x}$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is $d/dx[\\ln(3x)]$?',
    options: ['$1/x$', '$3/x$', '$1/(3x)$', '$3\\ln x$'],
    correctAnswer: 0,
    explanation: '$\\ln(3x) = \\ln 3 + \\ln x$, so the derivative is $1/x$.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'What is $d/dx[x/\\sin x]$?',
    options: ['$(\\sin x - x\\cos x)/\\sin^2 x$', '$(\\cos x)/\\sin^2 x$', '$1/\\cos x$', '$x\\cos x$'],
    correctAnswer: 0,
    explanation: 'Quotient rule: $(f/g)\' = (f\'g - fg\')/g^2$.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'What is $d/dx[\\sqrt{x}]$?',
    options: ['$1/(2\\sqrt{x})$', '$2\\sqrt{x}$', '$1/\\sqrt{x}$', '$\\sqrt{x}/2$'],
    correctAnswer: 0,
    explanation: '$\\sqrt{x} = x^{1/2}$, so the derivative is $(1/2)x^{-1/2} = 1/(2\\sqrt{x})$.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 16,
    question: 'If $y = x^x$, what is $dy/dx$?',
    options: ['$x^x(\\ln x + 1)$', '$x \\cdot x^{x-1}$', '$x^x \\ln x$', '$x^{x+1}$'],
    correctAnswer: 0,
    explanation: 'Using logarithmic differentiation: $\\ln y = x\\ln x$, so $y\'/y = \\ln x + 1$.',
    difficulty: 'hard',
  },
  {
    id: 17,
    question: 'What is $d/dx[\\arctan x]$?',
    options: ['$1/(1+x^2)$', '$1/\\sqrt{1-x^2}$', '$\\sec^2 x$', '$-1/(1+x^2)$'],
    correctAnswer: 0,
    explanation: 'The derivative of $\\arctan x$ is $1/(1+x^2)$.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'What is $d/dx[\\sin^{-1}(2x)]$?',
    options: ['$2/\\sqrt{1-4x^2}$', '$1/\\sqrt{1-4x^2}$', '$2/\\sqrt{1-x^2}$', '$-2/\\sqrt{1-4x^2}$'],
    correctAnswer: 0,
    explanation: 'Chain rule with $\\arcsin$: $1/\\sqrt{1-(2x)^2} \\cdot 2$.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'If $f(x) = e^{\\sin x}$, what is $f\'(x)$?',
    options: ['$\\cos x \\cdot e^{\\sin x}$', '$\\sin x \\cdot e^{\\sin x}$', '$e^{\\cos x}$', '$e^{\\sin x}/\\cos x$'],
    correctAnswer: 0,
    explanation: 'Chain rule: $e^{\\sin x} \\cdot \\cos x$.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'What is the second derivative of $f(x) = \\ln(x^2)$?',
    options: ['$-2/x^2$', '$2/x$', '$2/x^2$', '$-2/x$'],
    correctAnswer: 0,
    explanation: '$f\'(x) = 2/x$, so $f\'\'(x) = -2/x^2$.',
    difficulty: 'hard',
  },
]

export function getDerivativeQuestions(count: number = 10): DerivativeQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
