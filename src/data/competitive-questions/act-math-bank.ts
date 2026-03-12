// ACT Math question bank for competitive mode

export interface ActMathQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: ActMathQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What is the greatest common factor of $24$ and $36$?',
    options: ['$12$', '$6$', '$4$', '$8$'],
    correctAnswer: 0,
    explanation: 'Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. GCF = $12$.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Solve: $2(x - 3) = 10$',
    options: ['$x = 8$', '$x = 5$', '$x = 6.5$', '$x = 4$'],
    correctAnswer: 0,
    explanation: '$2x - 6 = 10 \\Rightarrow 2x = 16 \\Rightarrow x = 8$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is the perimeter of a rectangle with length $8$ and width $5$?',
    options: ['$26$', '$40$', '$13$', '$80$'],
    correctAnswer: 0,
    explanation: '$P = 2(l + w) = 2(8 + 5) = 26$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'If $\\frac{3}{4}$ of a number is $15$, what is the number?',
    options: ['$20$', '$11.25$', '$12$', '$60$'],
    correctAnswer: 0,
    explanation: '$\\frac{3}{4}x = 15 \\Rightarrow x = 15 \\times \\frac{4}{3} = 20$.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'What is the value of $|-7|$?',
    options: ['$7$', '$-7$', '$0$', '$49$'],
    correctAnswer: 0,
    explanation: 'The absolute value of $-7$ is $7$ (distance from zero).',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is $3^4$?',
    options: ['$81$', '$12$', '$27$', '$64$'],
    correctAnswer: 0,
    explanation: '$3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'Which of the following is equivalent to $0.75$?',
    options: ['$\\frac{3}{4}$', '$\\frac{7}{5}$', '$\\frac{3}{5}$', '$\\frac{4}{3}$'],
    correctAnswer: 0,
    explanation: '$0.75 = 75/100 = 3/4$.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'A shirt costs \\$40 and is 25% off. What is the sale price?',
    options: ['\\$30', '\\$10', '\\$35', '\\$25'],
    correctAnswer: 0,
    explanation: 'Discount = $40 \\times 0.25 = \\$10$. Sale price = $40 - 10 = \\$30$.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 9,
    question: 'What is the area of a trapezoid with bases $6$ and $10$ and height $4$?',
    options: ['$32$', '$24$', '$40$', '$60$'],
    correctAnswer: 0,
    explanation: '$A = \\frac{1}{2}(b_1 + b_2)h = \\frac{1}{2}(6 + 10)(4) = 32$.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'If $\\sin \\theta = \\frac{3}{5}$, what is $\\cos \\theta$ (in the first quadrant)?',
    options: ['$\\frac{4}{5}$', '$\\frac{3}{4}$', '$\\frac{5}{3}$', '$\\frac{5}{4}$'],
    correctAnswer: 0,
    explanation: 'Using $\\sin^2\\theta + \\cos^2\\theta = 1$: $\\cos\\theta = \\sqrt{1 - 9/25} = \\sqrt{16/25} = 4/5$.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'What is the $x$-intercept of $3x + 2y = 12$?',
    options: ['$(4, 0)$', '$(0, 6)$', '$(6, 0)$', '$(0, 4)$'],
    correctAnswer: 0,
    explanation: 'Set $y = 0$: $3x = 12 \\Rightarrow x = 4$. The $x$-intercept is $(4, 0)$.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'Simplify: $\\sqrt{50}$',
    options: ['$5\\sqrt{2}$', '$25\\sqrt{2}$', '$2\\sqrt{5}$', '$10\\sqrt{5}$'],
    correctAnswer: 0,
    explanation: '$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is the probability of rolling an even number on a standard die?',
    options: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{2}{3}$'],
    correctAnswer: 0,
    explanation: 'Even numbers: 2, 4, 6. That is 3 out of 6 = $1/2$.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'If $f(x) = x^2 - 9$, for what values of $x$ is $f(x) = 0$?',
    options: ['$x = 3$ and $x = -3$', '$x = 9$ and $x = -9$', '$x = 3$ only', '$x = 0$'],
    correctAnswer: 0,
    explanation: '$x^2 - 9 = (x - 3)(x + 3) = 0$, so $x = 3$ or $x = -3$.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'A cylinder has radius $3$ and height $7$. What is its volume?',
    options: ['$63\\pi$', '$21\\pi$', '$42\\pi$', '$126\\pi$'],
    correctAnswer: 0,
    explanation: '$V = \\pi r^2 h = \\pi (9)(7) = 63\\pi$.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'What is the solution set of $|x - 4| < 3$?',
    options: ['$1 < x < 7$', '$x < 1$ or $x > 7$', '$-1 < x < 7$', '$x > 4$'],
    correctAnswer: 0,
    explanation: '$|x - 4| < 3 \\Rightarrow -3 < x - 4 < 3 \\Rightarrow 1 < x < 7$.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 17,
    question: 'What is the sum of an arithmetic series: $3 + 7 + 11 + ... + 43$?',
    options: ['$253$', '$230$', '$275$', '$220$'],
    correctAnswer: 0,
    explanation: 'Common difference $d = 4$, $a_1 = 3$, $a_n = 43$. $n = (43-3)/4 + 1 = 11$. $S = n(a_1 + a_n)/2 = 11(46)/2 = 253$.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'In the coordinate plane, what is the equation of the line perpendicular to $y = 2x + 1$ that passes through $(4, 3)$?',
    options: ['$y = -\\frac{1}{2}x + 5$', '$y = 2x - 5$', '$y = -2x + 11$', '$y = \\frac{1}{2}x + 1$'],
    correctAnswer: 0,
    explanation: 'Perpendicular slope = $-1/2$. Using point-slope: $y - 3 = -1/2(x - 4) \\Rightarrow y = -x/2 + 5$.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'A matrix $\\begin{bmatrix} 2 & 3 \\\\ 1 & 4 \\end{bmatrix}$ has what determinant?',
    options: ['$5$', '$11$', '$-5$', '$8$'],
    correctAnswer: 0,
    explanation: '$\\det = (2)(4) - (3)(1) = 8 - 3 = 5$.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'If $\\log_3 x = 4$, what is $x$?',
    options: ['$81$', '$12$', '$64$', '$27$'],
    correctAnswer: 0,
    explanation: '$\\log_3 x = 4 \\Rightarrow x = 3^4 = 81$.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'What is the 10th term of the geometric sequence $2, 6, 18, 54, ...$?',
    options: ['$2 \\cdot 3^9 = 39366$', '$2 \\cdot 3^{10} = 118098$', '$3^{10} = 59049$', '$2 \\cdot 10^3 = 2000$'],
    correctAnswer: 0,
    explanation: '$a_n = a_1 \\cdot r^{n-1} = 2 \\cdot 3^9 = 2 \\cdot 19683 = 39366$.',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'What is $\\cos(60°)$?',
    options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$0$'],
    correctAnswer: 0,
    explanation: '$\\cos(60°) = 1/2$ from the 30-60-90 triangle.',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'How many distinct diagonals does an octagon have?',
    options: ['$20$', '$8$', '$16$', '$40$'],
    correctAnswer: 0,
    explanation: 'Diagonals = $n(n-3)/2 = 8(5)/2 = 20$.',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'The seventh row of Pascal\'s Triangle (row 6) starts with $1, 6, ...$. What is the middle number?',
    options: ['$20$', '$15$', '$6$', '$35$'],
    correctAnswer: 0,
    explanation: 'Row 6: $1, 6, 15, 20, 15, 6, 1$. The middle value is $\\binom{6}{3} = 20$.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'What is the area of an equilateral triangle with side length $6$?',
    options: ['$9\\sqrt{3}$', '$18$', '$36\\sqrt{3}$', '$12\\sqrt{3}$'],
    correctAnswer: 0,
    explanation: '$A = \\frac{\\sqrt{3}}{4}s^2 = \\frac{\\sqrt{3}}{4}(36) = 9\\sqrt{3}$.',
    difficulty: 'hard',
  },
]

export function getActMathQuestions(count: number = 10): ActMathQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
