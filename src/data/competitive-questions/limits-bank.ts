// Limits question bank for competitive mode

export interface LimitQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: LimitQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What is $\\lim_{x \\to 2} (3x + 1)$?',
    options: ['$7$', '$6$', '$5$', '$8$'],
    correctAnswer: 0,
    explanation: 'Direct substitution: $3(2) + 1 = 7$.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What is $\\lim_{x \\to 0} \\frac{\\sin x}{x}$?',
    options: ['$1$', '$0$', '$\\infty$', 'Does not exist'],
    correctAnswer: 0,
    explanation: 'This is a fundamental limit: $\\lim_{x \\to 0} \\sin x / x = 1$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is $\\lim_{x \\to \\infty} \\frac{1}{x}$?',
    options: ['$0$', '$1$', '$\\infty$', 'Does not exist'],
    correctAnswer: 0,
    explanation: 'As $x$ grows without bound, $1/x$ approaches $0$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'What is $\\lim_{x \\to 3} x^2$?',
    options: ['$9$', '$6$', '$3$', '$27$'],
    correctAnswer: 0,
    explanation: 'Direct substitution: $3^2 = 9$.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'What is $\\lim_{x \\to 0} e^x$?',
    options: ['$1$', '$0$', '$e$', '$\\infty$'],
    correctAnswer: 0,
    explanation: 'Direct substitution: $e^0 = 1$.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$?',
    options: ['$2$', '$0$', '$1$', 'Does not exist'],
    correctAnswer: 0,
    explanation: 'Factor: $(x^2-1)/(x-1) = (x+1)(x-1)/(x-1) = x+1$. At $x=1$: $2$.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'What is $\\lim_{x \\to 0} \\cos x$?',
    options: ['$1$', '$0$', '$-1$', '$\\pi$'],
    correctAnswer: 0,
    explanation: 'Direct substitution: $\\cos(0) = 1$.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 8,
    question: 'What is $\\lim_{x \\to \\infty} \\frac{3x^2 + 2}{x^2 - 1}$?',
    options: ['$3$', '$\\infty$', '$0$', '$-2$'],
    correctAnswer: 0,
    explanation: 'Same degree top/bottom: ratio of leading coefficients $= 3/1 = 3$.',
    difficulty: 'medium',
  },
  {
    id: 9,
    question: 'What is $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$?',
    options: ['$1/2$', '$1$', '$0$', 'Does not exist'],
    correctAnswer: 0,
    explanation: "By L'Hôpital's rule twice or Taylor expansion: this limit equals $1/2$.",
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'What is $\\lim_{x \\to \\infty} \\frac{5x}{x^2 + 1}$?',
    options: ['$0$', '$5$', '$\\infty$', '$1/5$'],
    correctAnswer: 0,
    explanation: 'Degree of denominator > numerator, so the limit is $0$.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'What is $\\lim_{x \\to 0^+} x \\ln x$?',
    options: ['$0$', '$-\\infty$', '$1$', 'Does not exist'],
    correctAnswer: 0,
    explanation: "Rewrite as $\\ln x / (1/x)$ and apply L'Hôpital's rule to get $0$.",
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'What is $\\lim_{x \\to 0} \\frac{\\tan x}{x}$?',
    options: ['$1$', '$0$', '$\\infty$', 'Does not exist'],
    correctAnswer: 0,
    explanation: '$\\tan x / x = (\\sin x / x) \\cdot (1/\\cos x) \\to 1 \\cdot 1 = 1$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is $\\lim_{x \\to \\infty} (1 + 1/x)^x$?',
    options: ['$e$', '$1$', '$\\infty$', '$0$'],
    correctAnswer: 0,
    explanation: 'This is the definition of $e$.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'What is $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$?',
    options: ['$1/4$', '$1/2$', '$0$', 'Does not exist'],
    correctAnswer: 0,
    explanation: 'Rationalize: multiply by $(\\sqrt{x}+2)/(\\sqrt{x}+2)$. Result is $1/(\\sqrt{x}+2) \\to 1/4$.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 15,
    question: 'What is $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$?',
    options: ['$1/2$', '$1$', '$0$', '$e$'],
    correctAnswer: 0,
    explanation: "Apply L'Hôpital's rule twice: $(e^x - 1)/(2x) \\to e^x/2 \\to 1/2$.",
    difficulty: 'hard',
  },
  {
    id: 16,
    question: 'What is $\\lim_{x \\to 0^+} x^x$?',
    options: ['$1$', '$0$', '$\\infty$', 'Does not exist'],
    correctAnswer: 0,
    explanation: '$x^x = e^{x\\ln x}$. Since $x\\ln x \\to 0$ as $x \\to 0^+$, we get $e^0 = 1$.',
    difficulty: 'hard',
  },
  {
    id: 17,
    question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{x}{e^x}$.',
    options: ['$0$', '$1$', '$\\infty$', '$e$'],
    correctAnswer: 0,
    explanation: "By L'Hôpital's rule: $1/e^x \\to 0$ as $x \\to \\infty$. Exponentials dominate polynomials.",
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'What is $\\lim_{x \\to 0} \\frac{\\sin(3x)}{\\sin(5x)}$?',
    options: ['$3/5$', '$5/3$', '$1$', '$0$'],
    correctAnswer: 0,
    explanation: '$\\sin(3x)/(3x) \\cdot (5x)/\\sin(5x) \\cdot (3x)/(5x) \\to 1 \\cdot 1 \\cdot 3/5 = 3/5$.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'What is $\\lim_{n \\to \\infty} \\left(1 + \\frac{3}{n}\\right)^n$?',
    options: ['$e^3$', '$3e$', '$e$', '$\\infty$'],
    correctAnswer: 0,
    explanation: 'Generalization of the $e$ definition: $(1 + k/n)^n \\to e^k$.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'What is $\\lim_{x \\to 0} \\frac{\\arcsin x}{x}$?',
    options: ['$1$', '$0$', '$\\pi/2$', 'Does not exist'],
    correctAnswer: 0,
    explanation: "Apply L'Hôpital's rule: $1/\\sqrt{1-x^2} \\to 1$, or note $\\arcsin x \\approx x$ near $0$.",
    difficulty: 'hard',
  },
]

export function getLimitQuestions(count: number = 10): LimitQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
