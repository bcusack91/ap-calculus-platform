/**
 * Entrance Quiz — Definite Integrals (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Riemann Sums
  {
    id: 'di-ent-1a',
    question: 'A Riemann sum approximates:',
    options: ['A derivative', 'A definite integral', 'A limit', 'An infinite series'],
    correctIndex: 1,
    explanation: 'Riemann sums approximate the area under a curve, which equals the definite integral.',
    partNumber: 1,
    partTitle: 'Riemann Sums',
  },
  {
    id: 'di-ent-1b',
    question: 'As the number of rectangles $n \\to \\infty$, the Riemann sum approaches:',
    options: ['Zero', 'The definite integral', 'The derivative', 'Infinity'],
    correctIndex: 1,
    explanation: 'The limit of Riemann sums as $n \\to \\infty$ is the definite integral.',
    partNumber: 1,
    partTitle: 'Riemann Sums',
  },

  // Part 2: Properties of Definite Integrals
  {
    id: 'di-ent-2a',
    question: '$\\int_a^a f(x)\\,dx =$',
    options: ['$f(a)$', '$0$', '$1$', '$f\'(a)$'],
    correctIndex: 1,
    explanation: 'When upper and lower limits are equal, the integral is zero.',
    partNumber: 2,
    partTitle: 'Properties of Definite Integrals',
  },
  {
    id: 'di-ent-2b',
    question: '$\\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx =$',
    options: ['$\\int_a^c f(x)\\,dx$', '$\\int_a^b f(x)\\,dx$', '$0$', '$f(c) - f(a)$'],
    correctIndex: 0,
    explanation: 'The additive property of integrals: split or combine adjacent intervals.',
    partNumber: 2,
    partTitle: 'Properties of Definite Integrals',
  },

  // Part 3: Fundamental Theorem of Calculus Part 1
  {
    id: 'di-ent-3a',
    question: 'FTC Part 1: If $F(x) = \\int_a^x f(t)\\,dt$, then $F\'(x) =$',
    options: ['$f(x)$', '$F(x)$', '$\\int f(x)\\,dx$', '$f\'(x)$'],
    correctIndex: 0,
    explanation: 'The Fundamental Theorem Part 1: derivative of the integral equals the integrand.',
    partNumber: 3,
    partTitle: 'Fundamental Theorem of Calculus Part 1',
  },
  {
    id: 'di-ent-3b',
    question: 'If $G(x) = \\int_0^x \\cos t\\,dt$, then $G\'(x) =$',
    options: ['$\\sin x$', '$\\cos x$', '$-\\sin x$', '$-\\cos x$'],
    correctIndex: 1,
    explanation: 'FTC Part 1: $G\'(x) = \\cos x$.',
    partNumber: 3,
    partTitle: 'Fundamental Theorem of Calculus Part 1',
  },

  // Part 4: Fundamental Theorem of Calculus Part 2
  {
    id: 'di-ent-4a',
    question: 'FTC Part 2: $\\int_a^b f(x)\\,dx =$',
    options: ['$f(b) - f(a)$', '$F(b) - F(a)$', '$F\'(b) - F\'(a)$', '$f\'(b) - f\'(a)$'],
    correctIndex: 1,
    explanation: '$\\int_a^b f(x)\\,dx = F(b) - F(a)$ where $F$ is any antiderivative of $f$.',
    partNumber: 4,
    partTitle: 'Fundamental Theorem of Calculus Part 2',
  },
  {
    id: 'di-ent-4b',
    question: '$\\int_1^4 2x\\,dx =$',
    options: ['$8$', '$15$', '$16$', '$12$'],
    correctIndex: 1,
    explanation: '$[x^2]_1^4 = 16 - 1 = 15$.',
    partNumber: 4,
    partTitle: 'Fundamental Theorem of Calculus Part 2',
  },

  // Part 5: Evaluating Definite Integrals
  {
    id: 'di-ent-5a',
    question: '$\\int_0^{\\pi} \\sin x\\,dx =$',
    options: ['$0$', '$1$', '$2$', '$-2$'],
    correctIndex: 2,
    explanation: '$[-\\cos x]_0^{\\pi} = -(-1) - (-1) = 1 + 1 = 2$.',
    partNumber: 5,
    partTitle: 'Evaluating Definite Integrals',
  },
  {
    id: 'di-ent-5b',
    question: '$\\int_0^1 e^x\\,dx =$',
    options: ['$e$', '$e - 1$', '$1$', '$e + 1$'],
    correctIndex: 1,
    explanation: '$[e^x]_0^1 = e - 1$.',
    partNumber: 5,
    partTitle: 'Evaluating Definite Integrals',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'di-ent-6a',
    question: 'The average value of $f$ on $[a,b]$ is:',
    options: ['$\\frac{1}{b-a}\\int_a^b f(x)\\,dx$', '$\\frac{f(a)+f(b)}{2}$', '$\\int_a^b f(x)\\,dx$', '$f\\left(\\frac{a+b}{2}\\right)$'],
    correctIndex: 0,
    explanation: 'Average value $= \\frac{1}{b-a}\\int_a^b f(x)\\,dx$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'di-ent-6b',
    question: 'The average value of $f(x) = x^2$ on $[0,3]$ is:',
    options: ['$3$', '$9$', '$4.5$', '$\\frac{9}{2}$'],
    correctIndex: 0,
    explanation: '$\\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot 9 = 3$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'di-ent-7a',
    question: 'If $\\int_0^5 f(x)\\,dx = 8$ and $\\int_0^3 f(x)\\,dx = 5$, then $\\int_3^5 f(x)\\,dx =$',
    options: ['$3$', '$13$', '$-3$', '$8$'],
    correctIndex: 0,
    explanation: '$\\int_0^5 - \\int_0^3 = 8 - 5 = 3$.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'di-ent-7b',
    question: '$\\int_b^a f(x)\\,dx =$',
    options: ['$\\int_a^b f(x)\\,dx$', '$-\\int_a^b f(x)\\,dx$', '$0$', '$|\\int_a^b f(x)\\,dx|$'],
    correctIndex: 1,
    explanation: 'Reversing the limits changes the sign.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Riemann Sums' },
    { partNumber: 2, partTitle: 'Properties of Definite Integrals' },
    { partNumber: 3, partTitle: 'Fundamental Theorem of Calculus Part 1' },
    { partNumber: 4, partTitle: 'Fundamental Theorem of Calculus Part 2' },
    { partNumber: 5, partTitle: 'Evaluating Definite Integrals' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
