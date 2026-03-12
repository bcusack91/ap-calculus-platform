// Algebra question bank for competitive mode

export interface AlgebraQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: AlgebraQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'Solve for $x$: $2x + 5 = 11$',
    options: ['$x = 3$', '$x = 8$', '$x = 6$', '$x = -3$'],
    correctAnswer: 0,
    explanation: 'Subtract 5: $2x = 6$. Divide by 2: $x = 3$.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Simplify: $3(x + 4) - 2x$',
    options: ['$x + 12$', '$3x + 4$', '$x + 4$', '$5x + 12$'],
    correctAnswer: 0,
    explanation: 'Distribute: $3x + 12 - 2x = x + 12$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is the slope of the line $y = 3x - 7$?',
    options: ['$3$', '$-7$', '$7$', '$-3$'],
    correctAnswer: 0,
    explanation: 'In $y = mx + b$, the slope $m = 3$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Factor: $x^2 - 9$',
    options: ['$(x+3)(x-3)$', '$(x-9)(x+1)$', '$(x+9)(x-1)$', '$(x-3)^2$'],
    correctAnswer: 0,
    explanation: 'Difference of squares: $a^2 - b^2 = (a+b)(a-b)$.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'If $f(x) = 2x + 1$, what is $f(3)$?',
    options: ['$7$', '$6$', '$9$', '$5$'],
    correctAnswer: 0,
    explanation: '$f(3) = 2(3) + 1 = 7$.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'Solve: $x/4 = 5$',
    options: ['$x = 20$', '$x = 1.25$', '$x = 9$', '$x = 4/5$'],
    correctAnswer: 0,
    explanation: 'Multiply both sides by 4: $x = 20$.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'What is $(-3)^2$?',
    options: ['$9$', '$-9$', '$6$', '$-6$'],
    correctAnswer: 0,
    explanation: '$(-3)^2 = (-3)(-3) = 9$.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 8,
    question: 'Solve: $x^2 - 5x + 6 = 0$',
    options: ['$x = 2$ or $x = 3$', '$x = -2$ or $x = -3$', '$x = 1$ or $x = 6$', '$x = -1$ or $x = -6$'],
    correctAnswer: 0,
    explanation: 'Factor: $(x-2)(x-3) = 0$, so $x = 2$ or $x = 3$.',
    difficulty: 'medium',
  },
  {
    id: 9,
    question: 'What are the solutions of $x^2 + 4x + 4 = 0$?',
    options: ['$x = -2$ (double root)', '$x = 2$ (double root)', '$x = -4$ or $x = -1$', '$x = 4$'],
    correctAnswer: 0,
    explanation: '$(x+2)^2 = 0$ gives a repeated root $x = -2$.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'Simplify: $\\frac{x^2 - 4}{x + 2}$',
    options: ['$x - 2$', '$x + 2$', '$x^2 - 2$', '$(x-4)/(x+2)$'],
    correctAnswer: 0,
    explanation: 'Factor numerator: $(x+2)(x-2)/(x+2) = x-2$ (for $x \\neq -2$).',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'Solve the system: $x + y = 5$, $x - y = 1$',
    options: ['$(3, 2)$', '$(2, 3)$', '$(4, 1)$', '$(1, 4)$'],
    correctAnswer: 0,
    explanation: 'Add equations: $2x = 6 \\Rightarrow x = 3$. Then $y = 2$.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'What is the vertex of $y = (x-3)^2 + 5$?',
    options: ['$(3, 5)$', '$(-3, 5)$', '$(3, -5)$', '$(-3, -5)$'],
    correctAnswer: 0,
    explanation: 'Vertex form $y = a(x-h)^2 + k$ has vertex at $(h, k) = (3, 5)$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'If $\\log_2(x) = 5$, what is $x$?',
    options: ['$32$', '$10$', '$25$', '$64$'],
    correctAnswer: 0,
    explanation: '$\\log_2(x) = 5$ means $2^5 = x = 32$.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'Simplify: $\\sqrt{50}$',
    options: ['$5\\sqrt{2}$', '$25\\sqrt{2}$', '$\\sqrt{25} + \\sqrt{2}$', '$10\\sqrt{5}$'],
    correctAnswer: 0,
    explanation: '$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 15,
    question: 'Solve: $|2x - 3| = 7$',
    options: ['$x = 5$ or $x = -2$', '$x = 5$ or $x = 2$', '$x = -5$ or $x = 2$', '$x = 3.5$'],
    correctAnswer: 0,
    explanation: '$2x-3 = 7 \\Rightarrow x = 5$ or $2x-3 = -7 \\Rightarrow x = -2$.',
    difficulty: 'hard',
  },
  {
    id: 16,
    question: 'What is the discriminant of $3x^2 - 4x + 1 = 0$?',
    options: ['$4$', '$-4$', '$28$', '$0$'],
    correctAnswer: 0,
    explanation: '$\\Delta = b^2 - 4ac = 16 - 12 = 4$.',
    difficulty: 'hard',
  },
  {
    id: 17,
    question: 'Solve: $2^{x+1} = 8$',
    options: ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 1$'],
    correctAnswer: 0,
    explanation: '$2^{x+1} = 2^3$, so $x+1 = 3$, thus $x = 2$.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'Find the sum of the geometric series: $1 + 1/2 + 1/4 + 1/8 + \\ldots$',
    options: ['$2$', '$1$', '$\\infty$', '$1.5$'],
    correctAnswer: 0,
    explanation: 'Infinite geometric series: $S = a/(1-r) = 1/(1 - 1/2) = 2$.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'If $f(x) = x^2$ and $g(x) = 2x+1$, what is $(f \\circ g)(x)$?',
    options: ['$4x^2 + 4x + 1$', '$2x^2 + 1$', '$x^2 + 2x + 1$', '$2x^3 + x^2$'],
    correctAnswer: 0,
    explanation: '$(f \\circ g)(x) = f(g(x)) = (2x+1)^2 = 4x^2 + 4x + 1$.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'How many solutions does $x^2 + 2x + 5 = 0$ have in the reals?',
    options: ['$0$', '$1$', '$2$', 'Infinitely many'],
    correctAnswer: 0,
    explanation: 'Discriminant $= 4 - 20 = -16 < 0$. No real solutions.',
    difficulty: 'hard',
  },
]

export function getAlgebraQuestions(count: number = 10): AlgebraQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
