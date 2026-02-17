// Algebra 2 question bank for competitive mode

export interface Algebra2Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: Algebra2Question[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'Factor completely: $x^3 - 8$',
    options: ['$(x-2)(x^2+2x+4)$', '$(x-2)(x^2-2x+4)$', '$(x+2)(x^2-2x+4)$', '$(x-2)^3$'],
    correctAnswer: 0,
    explanation: 'Difference of cubes: $a^3 - b^3 = (a-b)(a^2+ab+b^2)$. Here $a=x, b=2$.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Simplify: $(2x^3)(3x^2)$',
    options: ['$6x^5$', '$5x^5$', '$6x^6$', '$5x^6$'],
    correctAnswer: 0,
    explanation: 'Multiply coefficients and add exponents: $2 \\cdot 3 = 6$ and $x^{3+2} = x^5$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is the degree of the polynomial $4x^5 - 3x^3 + 2x - 7$?',
    options: ['$5$', '$4$', '$3$', '$7$'],
    correctAnswer: 0,
    explanation: 'The degree is the highest power of $x$, which is $5$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Simplify: $\\frac{x^2 - 9}{x^2 - 6x + 9}$',
    options: ['$\\frac{x+3}{x-3}$', '$\\frac{x-3}{x+3}$', '$\\frac{x+3}{x+3}$', '$1$'],
    correctAnswer: 0,
    explanation: 'Factor: $\\frac{(x+3)(x-3)}{(x-3)^2} = \\frac{x+3}{x-3}$ for $x \\neq 3$.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'Evaluate: $27^{2/3}$',
    options: ['$9$', '$18$', '$3$', '$81$'],
    correctAnswer: 0,
    explanation: '$27^{2/3} = (27^{1/3})^2 = 3^2 = 9$.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is $i^2$?',
    options: ['$-1$', '$1$', '$i$', '$-i$'],
    correctAnswer: 0,
    explanation: 'By definition, $i = \\sqrt{-1}$, so $i^2 = -1$.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'Expand: $(x+3)^3$',
    options: ['$x^3 + 9x^2 + 27x + 27$', '$x^3 + 3x^2 + 9x + 27$', '$x^3 + 27$', '$x^3 + 6x^2 + 9x + 27$'],
    correctAnswer: 0,
    explanation: '$(x+3)^3 = x^3 + 3(x^2)(3) + 3(x)(9) + 27 = x^3 + 9x^2 + 27x + 27$.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 8,
    question: 'Divide using synthetic division: $(x^3 - 2x^2 - 5x + 6) \\div (x - 3)$',
    options: ['$x^2 + x - 2$', '$x^2 - x + 2$', '$x^2 + x + 2$', '$x^2 - 5x + 6$'],
    correctAnswer: 0,
    explanation: 'Synthetic division with $3$: coefficients $1, -2, -5, 6 \\to 1, 1, -2, 0$. Result: $x^2 + x - 2$.',
    difficulty: 'medium',
  },
  {
    id: 9,
    question: 'Solve: $x^4 - 5x^2 + 4 = 0$',
    options: ['$x = \\pm 1, \\pm 2$', '$x = \\pm 1, \\pm 4$', '$x = \\pm 2, \\pm 3$', '$x = 1, 4$'],
    correctAnswer: 0,
    explanation: 'Let $u = x^2$: $u^2 - 5u + 4 = 0 \\Rightarrow (u-1)(u-4) = 0$. So $x^2 = 1$ or $x^2 = 4$.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'Simplify: $\\frac{2}{x+1} + \\frac{3}{x-1}$',
    options: ['$\\frac{5x+1}{(x+1)(x-1)}$', '$\\frac{5x-1}{(x+1)(x-1)}$', '$\\frac{5}{x^2-1}$', '$\\frac{5x}{x^2-1}$'],
    correctAnswer: 0,
    explanation: 'Common denominator: $\\frac{2(x-1)+3(x+1)}{(x+1)(x-1)} = \\frac{2x-2+3x+3}{x^2-1} = \\frac{5x+1}{x^2-1}$.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'Solve: $\\log_3(x) + \\log_3(x-2) = 1$',
    options: ['$x = 3$', '$x = -1$', '$x = 9$', '$x = 2$'],
    correctAnswer: 0,
    explanation: '$\\log_3(x(x-2)) = 1 \\Rightarrow x^2 - 2x = 3 \\Rightarrow x^2 - 2x - 3 = 0 \\Rightarrow (x-3)(x+1) = 0$. Since $x > 2$, $x = 3$.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'What are the zeros of $f(x) = x^3 - 4x^2 + x + 6$?',
    options: ['$x = -1, 2, 3$', '$x = 1, -2, 3$', '$x = -1, -2, 3$', '$x = 1, 2, -3$'],
    correctAnswer: 0,
    explanation: 'By the Rational Root Theorem, test $x = -1$: $-1 -4 -1 + 6 = 0$. Factor out $(x+1)$ to get $(x+1)(x^2-5x+6) = (x+1)(x-2)(x-3)$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'Simplify: $(3+2i)(1-4i)$',
    options: ['$11 - 10i$', '$3 - 8i$', '$11 + 10i$', '$3 - 10i$'],
    correctAnswer: 0,
    explanation: '$(3+2i)(1-4i) = 3 - 12i + 2i - 8i^2 = 3 - 10i + 8 = 11 - 10i$.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'Find the horizontal asymptote of $f(x) = \\frac{3x^2 + 1}{x^2 - 4}$',
    options: ['$y = 3$', '$y = 0$', '$y = -4$', 'No horizontal asymptote'],
    correctAnswer: 0,
    explanation: 'When degrees are equal, the horizontal asymptote is the ratio of leading coefficients: $y = 3/1 = 3$.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 15,
    question: 'Use the Remainder Theorem: What is the remainder when $f(x) = 2x^3 - 3x^2 + x - 5$ is divided by $(x - 2)$?',
    options: ['$1$', '$-1$', '$3$', '$5$'],
    correctAnswer: 0,
    explanation: '$f(2) = 2(8) - 3(4) + 2 - 5 = 16 - 12 + 2 - 5 = 1$.',
    difficulty: 'hard',
  },
  {
    id: 16,
    question: 'Solve: $\\frac{x}{x-2} - \\frac{3}{x+1} = \\frac{5}{x^2 - x - 2}$',
    options: ['$x = 1$', '$x = 2$', '$x = -1$', '$x = 5$'],
    correctAnswer: 0,
    explanation: 'Note $x^2 - x -2 = (x-2)(x+1)$. Multiply through: $x(x+1) - 3(x-2) = 5 \\Rightarrow x^2 + x - 3x + 6 = 5 \\Rightarrow x^2 - 2x + 1 = 0 \\Rightarrow (x-1)^2 = 0$. So $x = 1$.',
    difficulty: 'hard',
  },
  {
    id: 17,
    question: 'How many complex (non-real) solutions does $x^4 + x^2 - 2 = 0$ have?',
    options: ['$2$', '$0$', '$4$', '$1$'],
    correctAnswer: 0,
    explanation: 'Let $u = x^2$: $u^2 + u - 2 = 0 \\Rightarrow (u+2)(u-1) = 0$. So $u = 1$ gives $x = \\pm 1$ (real), and $u = -2$ gives $x = \\pm i\\sqrt{2}$ (complex). Two non-real solutions.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'Solve for $x$: $e^{2x} - 5e^x + 6 = 0$',
    options: ['$x = \\ln 2$ or $x = \\ln 3$', '$x = 2$ or $x = 3$', '$x = \\ln 5$ or $x = \\ln 6$', '$x = e^2$ or $x = e^3$'],
    correctAnswer: 0,
    explanation: 'Let $u = e^x$: $u^2 - 5u + 6 = 0 \\Rightarrow (u-2)(u-3) = 0$. So $e^x = 2 \\Rightarrow x = \\ln 2$ or $e^x = 3 \\Rightarrow x = \\ln 3$.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'Find all vertical asymptotes of $g(x) = \\frac{x^2 - 1}{x^3 - x}$',
    options: ['$x = 0$ only', '$x = 0, x = 1, x = -1$', '$x = 1$ and $x = -1$', 'None'],
    correctAnswer: 0,
    explanation: 'Factor: $\\frac{(x-1)(x+1)}{x(x-1)(x+1)} = \\frac{1}{x}$ for $x \\neq \\pm 1$. The only vertical asymptote is $x = 0$; $x = \\pm 1$ are holes.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'What is the sum of all solutions to $|x^2 - 4x| = 3$?',
    options: ['$8$', '$4$', '$0$', '$6$'],
    correctAnswer: 0,
    explanation: 'Case 1: $x^2 - 4x = 3 \\Rightarrow x^2 - 4x - 3 = 0 \\Rightarrow x = 2 \\pm \\sqrt{7}$. Case 2: $x^2 - 4x = -3 \\Rightarrow x^2 - 4x + 3 = 0 \\Rightarrow x = 1, 3$. Sum $= (2+\\sqrt{7}) + (2-\\sqrt{7}) + 1 + 3 = 8$.',
    difficulty: 'hard',
  },
]

export function getAlgebra2Questions(count: number = 10): Algebra2Question[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
