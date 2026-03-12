// SAT Math question bank for competitive mode

export interface SatMathQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: SatMathQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'If $3x + 5 = 20$, what is $x$?',
    options: ['$5$', '$4$', '$6$', '$3$'],
    correctAnswer: 0,
    explanation: '$3x = 15$, so $x = 5$.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What is the slope of the line $y = 3x - 7$?',
    options: ['$3$', '$-7$', '$-3$', '$7$'],
    correctAnswer: 0,
    explanation: 'In slope-intercept form $y = mx + b$, the slope $m = 3$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is $15\\%$ of $200$?',
    options: ['$30$', '$15$', '$45$', '$20$'],
    correctAnswer: 0,
    explanation: '$0.15 \\times 200 = 30$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'If a triangle has angles measuring $40°$ and $60°$, what is the third angle?',
    options: ['$80°$', '$100°$', '$90°$', '$70°$'],
    correctAnswer: 0,
    explanation: 'Angles in a triangle sum to $180°$: $180 - 40 - 60 = 80°$.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'Simplify: $\\frac{x^6}{x^2}$',
    options: ['$x^4$', '$x^3$', '$x^8$', '$x^{12}$'],
    correctAnswer: 0,
    explanation: 'When dividing same bases, subtract exponents: $x^{6-2} = x^4$.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is the median of: $3, 7, 1, 9, 5$?',
    options: ['$5$', '$7$', '$3$', '$25$'],
    correctAnswer: 0,
    explanation: 'Ordered: $1, 3, 5, 7, 9$. The middle value is $5$.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'What is the area of a circle with radius $4$?',
    options: ['$16\\pi$', '$8\\pi$', '$4\\pi$', '$64\\pi$'],
    correctAnswer: 0,
    explanation: '$A = \\pi r^2 = \\pi(4)^2 = 16\\pi$.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'If $f(x) = 2x + 1$, what is $f(3)$?',
    options: ['$7$', '$5$', '$9$', '$6$'],
    correctAnswer: 0,
    explanation: '$f(3) = 2(3) + 1 = 7$.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 9,
    question: 'What is the vertex of $y = (x - 3)^2 + 5$?',
    options: ['$(3, 5)$', '$(-3, 5)$', '$(3, -5)$', '$(-3, -5)$'],
    correctAnswer: 0,
    explanation: 'In vertex form $y = (x - h)^2 + k$, the vertex is $(h, k) = (3, 5)$.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'If the ratio of boys to girls in a class is $3:5$ and there are $40$ students, how many boys are there?',
    options: ['$15$', '$25$', '$20$', '$24$'],
    correctAnswer: 0,
    explanation: 'Total parts = $3 + 5 = 8$. Boys = $(3/8)(40) = 15$.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'What are the solutions of $x^2 - 5x + 6 = 0$?',
    options: ['$x = 2$ and $x = 3$', '$x = -2$ and $x = -3$', '$x = 1$ and $x = 6$', '$x = 2$ and $x = -3$'],
    correctAnswer: 0,
    explanation: 'Factor: $(x - 2)(x - 3) = 0$, so $x = 2$ or $x = 3$.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'A line passes through $(2, 3)$ and $(6, 11)$. What is its slope?',
    options: ['$2$', '$4$', '$\\frac{1}{2}$', '$8$'],
    correctAnswer: 0,
    explanation: '$m = (11 - 3)/(6 - 2) = 8/4 = 2$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'If $2^x = 32$, what is $x$?',
    options: ['$5$', '$4$', '$6$', '$3$'],
    correctAnswer: 0,
    explanation: '$32 = 2^5$, so $x = 5$.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'What is the distance between $(1, 2)$ and $(4, 6)$?',
    options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'],
    correctAnswer: 0,
    explanation: '$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'In a right triangle, if one leg is $5$ and the hypotenuse is $13$, what is the other leg?',
    options: ['$12$', '$8$', '$\\sqrt{194}$', '$10$'],
    correctAnswer: 0,
    explanation: '$b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'What is the sum of the interior angles of a hexagon?',
    options: ['$720°$', '$540°$', '$1080°$', '$360°$'],
    correctAnswer: 0,
    explanation: 'Sum = $(n - 2) \\times 180° = (6 - 2) \\times 180° = 720°$.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 17,
    question: 'If $f(x) = x^2 - 4x + 3$ and $g(x) = x + 1$, what is $f(g(2))$?',
    options: ['$0$', '$3$', '$-1$', '$8$'],
    correctAnswer: 0,
    explanation: '$g(2) = 3$, then $f(3) = 9 - 12 + 3 = 0$.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'What is the equation of a circle centered at $(2, -3)$ with radius $5$?',
    options: ['$(x-2)^2 + (y+3)^2 = 25$', '$(x+2)^2 + (y-3)^2 = 25$', '$(x-2)^2 + (y-3)^2 = 5$', '$(x+2)^2 + (y+3)^2 = 25$'],
    correctAnswer: 0,
    explanation: 'Circle equation: $(x - h)^2 + (y - k)^2 = r^2$, with center $(2, -3)$ and $r = 5$.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'A system of equations has no solution. The lines are:',
    options: ['Parallel (same slope, different intercepts)', 'Intersecting', 'Identical', 'Perpendicular'],
    correctAnswer: 0,
    explanation: 'No solution means the lines never intersect — they are parallel (same slope, different $y$-intercepts).',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'The function $f(x) = \\frac{x+2}{x^2-4}$ has a hole at:',
    options: ['$x = -2$', '$x = 2$', '$x = 0$', '$x = 4$'],
    correctAnswer: 0,
    explanation: '$x^2 - 4 = (x+2)(x-2)$. The $(x+2)$ cancels, creating a hole at $x = -2$.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'If $\\log_2(x) + \\log_2(x - 2) = 3$, what is $x$?',
    options: ['$4$', '$8$', '$2$', '$6$'],
    correctAnswer: 0,
    explanation: '$\\log_2(x(x-2)) = 3 \\Rightarrow x^2 - 2x = 8 \\Rightarrow x^2 - 2x - 8 = 0 \\Rightarrow (x-4)(x+2) = 0$. Since $x > 2$, $x = 4$.',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'A ball is thrown upward with $h(t) = -16t^2 + 64t + 80$. What is the maximum height?',
    options: ['$144$ feet', '$80$ feet', '$64$ feet', '$128$ feet'],
    correctAnswer: 0,
    explanation: 'Max at $t = -b/(2a) = -64/(-32) = 2$. Then $h(2) = -64 + 128 + 80 = 144$.',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'What is the period of $y = 3\\sin(2x)$?',
    options: ['$\\pi$', '$2\\pi$', '$\\pi/2$', '$4\\pi$'],
    correctAnswer: 0,
    explanation: 'Period $= 2\\pi / |B| = 2\\pi / 2 = \\pi$.',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'How many ways can $5$ people be arranged in a line?',
    options: ['$120$', '$25$', '$60$', '$720$'],
    correctAnswer: 0,
    explanation: '$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'If $i = \\sqrt{-1}$, what is $(3 + 2i)(1 - i)$?',
    options: ['$5 - i$', '$1 + 5i$', '$5 + i$', '$1 - i$'],
    correctAnswer: 0,
    explanation: '$(3 + 2i)(1 - i) = 3 - 3i + 2i - 2i^2 = 3 - i + 2 = 5 - i$.',
    difficulty: 'hard',
  },
]

export function getSatMathQuestions(count: number = 10): SatMathQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
