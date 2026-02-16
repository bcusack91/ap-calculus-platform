// Integrals question bank for competitive mode

export interface IntegralQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: IntegralQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What is $\\int x^2 \\, dx$?',
    options: ['$x^3/3 + C$', '$2x + C$', '$x^3 + C$', '$3x^2 + C$'],
    correctAnswer: 0,
    explanation: 'Power rule for integration: $\\int x^n dx = x^{n+1}/(n+1) + C$.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What is $\\int 5 \\, dx$?',
    options: ['$5x + C$', '$5$', '$0$', '$5x^2/2 + C$'],
    correctAnswer: 0,
    explanation: 'The integral of a constant $k$ is $kx + C$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is $\\int \\cos x \\, dx$?',
    options: ['$\\sin x + C$', '$-\\sin x + C$', '$\\cos x + C$', '$\\tan x + C$'],
    correctAnswer: 0,
    explanation: 'The antiderivative of $\\cos x$ is $\\sin x + C$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'What is $\\int e^x \\, dx$?',
    options: ['$e^x + C$', '$xe^x + C$', '$e^{x+1} + C$', '$e^x/x + C$'],
    correctAnswer: 0,
    explanation: '$e^x$ is its own antiderivative.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'What is $\\int 1/x \\, dx$?',
    options: ['$\\ln|x| + C$', '$-1/x^2 + C$', '$x^0 + C$', '$\\ln(x^2) + C$'],
    correctAnswer: 0,
    explanation: 'The antiderivative of $1/x$ is $\\ln|x| + C$.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is $\\int \\sin x \\, dx$?',
    options: ['$-\\cos x + C$', '$\\cos x + C$', '$-\\sin x + C$', '$\\sin x + C$'],
    correctAnswer: 0,
    explanation: 'The antiderivative of $\\sin x$ is $-\\cos x + C$.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'What is $\\int_0^1 2x \\, dx$?',
    options: ['$1$', '$2$', '$0$', '$1/2$'],
    correctAnswer: 0,
    explanation: '$\\int_0^1 2x\\,dx = [x^2]_0^1 = 1 - 0 = 1$.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 8,
    question: 'What is $\\int x e^x \\, dx$?',
    options: ['$(x-1)e^x + C$', '$xe^x + C$', '$e^x/x + C$', '$x^2 e^x/2 + C$'],
    correctAnswer: 0,
    explanation: 'Integration by parts: $u=x, dv=e^x dx$. Result is $xe^x - e^x + C = (x-1)e^x + C$.',
    difficulty: 'medium',
  },
  {
    id: 9,
    question: 'What is $\\int \\sec^2 x \\, dx$?',
    options: ['$\\tan x + C$', '$\\sec x + C$', '$\\sin x/\\cos^2 x + C$', '$2\\sec x \\tan x + C$'],
    correctAnswer: 0,
    explanation: 'The antiderivative of $\\sec^2 x$ is $\\tan x + C$.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'What is $\\int \\frac{2x}{x^2+1} \\, dx$?',
    options: ['$\\ln(x^2+1) + C$', '$\\arctan x + C$', '$1/(x^2+1) + C$', '$2\\ln(x^2+1) + C$'],
    correctAnswer: 0,
    explanation: 'Let $u = x^2+1$, $du = 2x\\,dx$. Then $\\int du/u = \\ln|u| + C$.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'What is $\\int_0^{\\pi} \\sin x \\, dx$?',
    options: ['$2$', '$0$', '$1$', '$\\pi$'],
    correctAnswer: 0,
    explanation: '$[-\\cos x]_0^\\pi = -\\cos\\pi + \\cos 0 = 1 + 1 = 2$.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'What is $\\int e^{3x} \\, dx$?',
    options: ['$e^{3x}/3 + C$', '$3e^{3x} + C$', '$e^{3x} + C$', '$e^{3x}/x + C$'],
    correctAnswer: 0,
    explanation: '$u$-substitution with $u=3x$: $\\int e^u \\cdot (du/3) = e^{3x}/3 + C$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is $\\int \\frac{1}{1+x^2} \\, dx$?',
    options: ['$\\arctan x + C$', '$\\ln(1+x^2) + C$', '$\\arcsin x + C$', '$1/x + C$'],
    correctAnswer: 0,
    explanation: 'This is a standard integral: $\\int 1/(1+x^2) dx = \\arctan x + C$.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'What is $\\int x \\cos x \\, dx$?',
    options: ['$x\\sin x + \\cos x + C$', '$x\\sin x + C$', '$-x\\sin x + \\cos x + C$', '$x^2\\sin x/2 + C$'],
    correctAnswer: 0,
    explanation: 'Integration by parts: $u=x$, $dv=\\cos x\\,dx$. Get $x\\sin x - \\int \\sin x\\,dx = x\\sin x + \\cos x + C$.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 15,
    question: 'What is $\\int \\ln x \\, dx$?',
    options: ['$x\\ln x - x + C$', '$1/x + C$', '$x\\ln x + C$', '$\\ln x / x + C$'],
    correctAnswer: 0,
    explanation: 'Integration by parts: $u=\\ln x$, $dv=dx$. Get $x\\ln x - \\int 1\\,dx = x\\ln x - x + C$.',
    difficulty: 'hard',
  },
  {
    id: 16,
    question: 'What is $\\int \\frac{1}{\\sqrt{1-x^2}} \\, dx$?',
    options: ['$\\arcsin x + C$', '$\\arccos x + C$', '$\\arctan x + C$', '$\\ln|\\sqrt{1-x^2}| + C$'],
    correctAnswer: 0,
    explanation: 'Standard integral: $\\int 1/\\sqrt{1-x^2}\\,dx = \\arcsin x + C$.',
    difficulty: 'hard',
  },
  {
    id: 17,
    question: 'What is $\\int_0^1 x^2 e^x \\, dx$ (to 3 decimal places)?',
    options: ['$e - 2 \\approx 0.718$', '$1$', '$e \\approx 2.718$', '$0.5$'],
    correctAnswer: 0,
    explanation: 'Using integration by parts twice: $[x^2 e^x - 2xe^x + 2e^x]_0^1 = e - 2e + 2e - 2 = e - 2$.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'What is $\\int \\frac{x}{\\sqrt{x^2+1}} \\, dx$?',
    options: ['$\\sqrt{x^2+1} + C$', '$\\ln(x^2+1) + C$', '$\\arctan x + C$', '$x\\sqrt{x^2+1} + C$'],
    correctAnswer: 0,
    explanation: 'Let $u = x^2+1$. Then $du = 2x\\,dx$, so $\\int u^{-1/2} \\cdot du/2 = \\sqrt{u} + C$.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'What is $\\int \\sec x \\, dx$?',
    options: ['$\\ln|\\sec x + \\tan x| + C$', '$\\tan x + C$', '$\\sec x \\tan x + C$', '$\\ln|\\cos x| + C$'],
    correctAnswer: 0,
    explanation: 'Multiply top and bottom by $(\\sec x + \\tan x)$ and use substitution.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'Evaluate $\\int_0^{\\infty} e^{-x} \\, dx$.',
    options: ['$1$', '$0$', '$\\infty$', 'Diverges'],
    correctAnswer: 0,
    explanation: '$\\lim_{b \\to \\infty} [-e^{-x}]_0^b = 0 - (-1) = 1$.',
    difficulty: 'hard',
  },
]

export function getIntegralQuestions(count: number = 10): IntegralQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
