// Pre-Calculus question bank for competitive mode

export interface PreCalcQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: PreCalcQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What is $\\sin(30°)$?',
    options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$1$'],
    correctAnswer: 0,
    explanation: '$\\sin(30°) = 1/2$ from the 30-60-90 special triangle.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What is the domain of $f(x) = \\sqrt{x}$?',
    options: ['$x \\geq 0$', 'All real numbers', '$x > 0$', '$x \\neq 0$'],
    correctAnswer: 0,
    explanation: 'The square root function requires a non-negative radicand: $x \\geq 0$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is $\\log_{10}(1000)$?',
    options: ['$3$', '$10$', '$100$', '$30$'],
    correctAnswer: 0,
    explanation: '$10^3 = 1000$, so $\\log_{10}(1000) = 3$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'What is the period of $y = \\sin(x)$?',
    options: ['$2\\pi$', '$\\pi$', '$\\pi/2$', '$4\\pi$'],
    correctAnswer: 0,
    explanation: 'The sine function completes one full cycle every $2\\pi$ radians.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'If $f(x) = 3x - 2$, what is $f^{-1}(x)$?',
    options: ['$\\frac{x + 2}{3}$', '$\\frac{x - 2}{3}$', '$3x + 2$', '$\\frac{1}{3x - 2}$'],
    correctAnswer: 0,
    explanation: 'Swap $x$ and $y$: $x = 3y - 2 \\Rightarrow y = (x + 2)/3$.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is $\\cos(0)$?',
    options: ['$1$', '$0$', '$-1$', '$\\frac{1}{2}$'],
    correctAnswer: 0,
    explanation: '$\\cos(0) = 1$ — the cosine of 0 radians is 1.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'Which parent function has a vertical asymptote at $x = 0$?',
    options: ['$y = \\ln(x)$', '$y = x^2$', '$y = \\sin(x)$', '$y = e^x$'],
    correctAnswer: 0,
    explanation: 'The natural log function $\\ln(x)$ has a vertical asymptote at $x = 0$ (approaches $-\\infty$).',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'What is $e^0$?',
    options: ['$1$', '$0$', '$e$', '$\\infty$'],
    correctAnswer: 0,
    explanation: 'Any nonzero number raised to the power 0 equals 1: $e^0 = 1$.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 9,
    question: 'What is the exact value of $\\tan(45°)$?',
    options: ['$1$', '$0$', '$\\sqrt{2}$', '$\\frac{\\sqrt{3}}{3}$'],
    correctAnswer: 0,
    explanation: '$\\tan(45°) = \\sin(45°)/\\cos(45°) = (\\sqrt{2}/2)/(\\sqrt{2}/2) = 1$.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'What is the horizontal asymptote of $f(x) = \\frac{2x + 1}{x - 3}$?',
    options: ['$y = 2$', '$y = -3$', '$y = 1$', '$y = 0$'],
    correctAnswer: 0,
    explanation: 'When degrees are equal, the HA is the ratio of leading coefficients: $y = 2/1 = 2$.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'Convert $\\frac{5\\pi}{6}$ radians to degrees.',
    options: ['$150°$', '$210°$', '$120°$', '$300°$'],
    correctAnswer: 0,
    explanation: '$\\frac{5\\pi}{6} \\times \\frac{180°}{\\pi} = \\frac{5 \\times 180}{6} = 150°$.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'If $\\log_2(x) = 5$, what is $x$?',
    options: ['$32$', '$10$', '$25$', '$64$'],
    correctAnswer: 0,
    explanation: '$\\log_2(x) = 5 \\Rightarrow x = 2^5 = 32$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is the sum formula: $\\sin(A + B) = $?',
    options: ['$\\sin A \\cos B + \\cos A \\sin B$', '$\\sin A \\sin B + \\cos A \\cos B$', '$\\sin A \\cos B - \\cos A \\sin B$', '$\\cos A \\cos B - \\sin A \\sin B$'],
    correctAnswer: 0,
    explanation: 'The sine addition formula: $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'What are the zeros of $f(x) = x^3 - x$?',
    options: ['$x = -1, 0, 1$', '$x = 0, 1$', '$x = -1, 1$', '$x = 0$'],
    correctAnswer: 0,
    explanation: '$x^3 - x = x(x^2 - 1) = x(x-1)(x+1) = 0$, so $x = -1, 0, 1$.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'What is the range of $y = 2\\sin(x) + 3$?',
    options: ['$[1, 5]$', '$[-2, 2]$', '$[3, 5]$', '$[-1, 1]$'],
    correctAnswer: 0,
    explanation: '$\\sin(x)$ ranges from $-1$ to $1$. So $2\\sin(x) + 3$ ranges from $2(-1)+3=1$ to $2(1)+3=5$.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'What transformation does $f(x - 3)$ represent?',
    options: ['Shift right 3 units', 'Shift left 3 units', 'Shift up 3 units', 'Shift down 3 units'],
    correctAnswer: 0,
    explanation: '$f(x - h)$ shifts the graph $h$ units to the right. So $f(x - 3)$ shifts right 3.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 17,
    question: 'What is $\\cos(2\\theta)$ in terms of $\\cos\\theta$?',
    options: ['$2\\cos^2\\theta - 1$', '$\\cos^2\\theta - 1$', '$2\\cos\\theta$', '$1 - 2\\cos^2\\theta$'],
    correctAnswer: 0,
    explanation: 'The double angle formula: $\\cos(2\\theta) = 2\\cos^2\\theta - 1$ (or equivalently $1 - 2\\sin^2\\theta$).',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'The function $f(x) = \\frac{x^2 - 1}{x^2 - 4}$ has vertical asymptotes at:',
    options: ['$x = 2$ and $x = -2$', '$x = 1$ and $x = -1$', '$x = 4$ only', '$x = 0$'],
    correctAnswer: 0,
    explanation: 'Vertical asymptotes where denominator = 0: $x^2 - 4 = 0 \\Rightarrow x = \\pm 2$ (since numerator $\\neq 0$ there).',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'Solve: $2^{x+1} = 8^{x-1}$',
    options: ['$x = 2$', '$x = 3$', '$x = 1$', '$x = 4$'],
    correctAnswer: 0,
    explanation: '$2^{x+1} = (2^3)^{x-1} = 2^{3x-3}$. So $x + 1 = 3x - 3 \\Rightarrow 4 = 2x \\Rightarrow x = 2$.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'What is the limit of $\\frac{\\sin(x)}{x}$ as $x \\to 0$?',
    options: ['$1$', '$0$', '$\\infty$', 'Does not exist'],
    correctAnswer: 0,
    explanation: 'This is a fundamental limit: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'The polynomial $P(x) = x^4 - 5x^2 + 4$ factors as:',
    options: ['$(x^2 - 1)(x^2 - 4) = (x-1)(x+1)(x-2)(x+2)$', '$(x^2 - 2)(x^2 - 2)$', '$(x-1)^2(x-4)$', '$(x^2 + 1)(x^2 + 4)$'],
    correctAnswer: 0,
    explanation: 'Let $u = x^2$: $u^2 - 5u + 4 = (u-1)(u-4) = (x^2-1)(x^2-4)$, then factor differences of squares.',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'What is the polar form of the complex number $1 + i$?',
    options: ['$\\sqrt{2}(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4})$', '$2(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4})$', '$\\sqrt{2}(\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2})$', '$\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}$'],
    correctAnswer: 0,
    explanation: '$|1+i| = \\sqrt{2}$, $\\theta = \\arctan(1/1) = \\pi/4$. So $\\sqrt{2}\\text{cis}(\\pi/4)$.',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'What is $\\arctan(1)$?',
    options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$\\frac{\\pi}{3}$', '$\\pi$'],
    correctAnswer: 0,
    explanation: '$\\tan(\\pi/4) = 1$, so $\\arctan(1) = \\pi/4$.',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'How many solutions does $\\sin(x) = \\frac{1}{2}$ have on $[0, 2\\pi)$?',
    options: ['$2$', '$1$', '$3$', '$4$'],
    correctAnswer: 0,
    explanation: '$\\sin(x) = 1/2$ at $x = \\pi/6$ and $x = 5\\pi/6$ on $[0, 2\\pi)$.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'What is the formula for the $n$th term of a geometric sequence?',
    options: ['$a_n = a_1 \\cdot r^{n-1}$', '$a_n = a_1 + (n-1)d$', '$a_n = a_1 \\cdot n$', '$a_n = r^n$'],
    correctAnswer: 0,
    explanation: 'Geometric sequence: $a_n = a_1 r^{n-1}$ where $r$ is the common ratio.',
    difficulty: 'hard',
  },
]

export function getPreCalcQuestions(count: number = 10): PreCalcQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
