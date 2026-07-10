/**
 * Entrance Quiz — AP Exam Review (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Limits & Continuity Review
  {
    id: 'ar-ent-1a',
    question: '$\\lim_{x \\to 0} \\frac{\\sin x}{x} =$',
    options: ['$0$', '$1$', '$\\infty$', '$-1$'],
    correctIndex: 1,
    explanation: 'This fundamental limit equals 1.',
    partNumber: 1,
    partTitle: 'Limits & Continuity Review',
  },
  {
    id: 'ar-ent-1b',
    question: 'A function is continuous at $x = a$ if:',
    options: ['$f(a)$ exists', '$\\lim_{x \\to a} f(x)$ exists', '$f(a) = \\lim_{x \\to a} f(x)$ and both exist', '$f\'(a)$ exists'],
    correctIndex: 2,
    explanation: 'Continuity requires: $f(a)$ exists, the limit exists, and they are equal.',
    partNumber: 1,
    partTitle: 'Limits & Continuity Review',
  },
  // Part 2: Differentiation Review
  {
    id: 'ar-ent-2a',
    question: '$\\frac{d}{dx}[\\sin(x^2)] =$',
    options: ['$\\cos(x^2)$', '$2x\\cos(x^2)$', '$-\\sin(x^2) \\cdot 2x$', '$2x\\sin(x^2)$'],
    correctIndex: 1,
    explanation: 'Chain rule: $\\cos(x^2) \\cdot 2x$.',
    partNumber: 2,
    partTitle: 'Differentiation Review',
  },
  {
    id: 'ar-ent-2b',
    question: 'If $xy + y^2 = 1$, find $\\frac{dy}{dx}$:',
    options: ['$\\frac{-y}{x+2y}$', '$\\frac{y}{x+2y}$', '$\\frac{-x}{2y}$', '$\\frac{1-x}{y}$'],
    correctIndex: 0,
    explanation: 'Implicit diff: $y + xy\' + 2yy\' = 0$. $y\'(x+2y) = -y$. $y\' = \\frac{-y}{x+2y}$.',
    partNumber: 2,
    partTitle: 'Differentiation Review',
  },
  // Part 3: Applications of Derivatives Review
  {
    id: 'ar-ent-3a',
    question: 'Related rates problems require:',
    options: ['Only algebra', 'Implicit differentiation with respect to time', 'Explicit differentiation', 'Integration'],
    correctIndex: 1,
    explanation: 'Differentiate the relationship with respect to $t$.',
    partNumber: 3,
    partTitle: 'Applications of Derivatives Review',
  },
  {
    id: 'ar-ent-3b',
    question: 'The second derivative test: if $f\'(c) = 0$ and $f\'\'(c) > 0$, then $c$ is a:',
    options: ['Local max', 'Local min', 'Inflection point', 'Saddle point'],
    correctIndex: 1,
    explanation: '$f\'\'(c) > 0$: concave up at $c$, so local minimum.',
    partNumber: 3,
    partTitle: 'Applications of Derivatives Review',
  },
  // Part 4: Integration Review
  {
    id: 'ar-ent-4a',
    question: '$\\int_0^4 |2x - 4|\\,dx =$',
    options: ['$4$', '$8$', '$0$', '$16$'],
    correctIndex: 1,
    explanation: 'Split at $x = 2$: $\\int_0^2(4-2x)\\,dx + \\int_2^4(2x-4)\\,dx = 4 + 4 = 8$.',
    partNumber: 4,
    partTitle: 'Integration Review',
  },
  {
    id: 'ar-ent-4b',
    question: '$\\int \\frac{2x}{x^2+1}\\,dx =$',
    options: ['$\\ln(x^2+1) + C$', '$\\frac{1}{x^2+1} + C$', '$\\arctan x + C$', '$x\\ln(x^2+1) + C$'],
    correctIndex: 0,
    explanation: '$u = x^2+1$, $du = 2x\\,dx$. $\\int \\frac{du}{u} = \\ln|u| + C$.',
    partNumber: 4,
    partTitle: 'Integration Review',
  },
  // Part 5: Applications of Integration Review
  {
    id: 'ar-ent-5a',
    question: 'The average value of $f(x) = x^2$ on $[0,3]$ is:',
    options: ['$3$', '$9$', '$4.5$', '$\\frac{9}{4}$'],
    correctIndex: 0,
    explanation: '$\\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3}(9) = 3$.',
    partNumber: 5,
    partTitle: 'Applications of Integration Review',
  },
  {
    id: 'ar-ent-5b',
    question: 'Volume by washers about $x$-axis between $y = x$ and $y = x^2$ from $0$ to $1$:',
    options: ['$\\frac{2\\pi}{15}$', '$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{30}$'],
    correctIndex: 0,
    explanation: '$\\pi\\int_0^1(x^2 - x^4)\\,dx = \\pi[\\frac{x^3}{3}-\\frac{x^5}{5}]_0^1 = \\pi(\\frac{1}{3}-\\frac{1}{5}) = \\frac{2\\pi}{15}$.',
    partNumber: 5,
    partTitle: 'Applications of Integration Review',
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'ar-ent-6a',
    question: 'Solve $\\frac{dy}{dx} = 2xy$, $y(0) = 1$:',
    options: ['$y = e^{x^2}$', '$y = e^{2x}$', '$y = 2xe^x$', '$y = x^2 + 1$'],
    correctIndex: 0,
    explanation: 'Separate: $\\frac{dy}{y} = 2x\\,dx$. $\\ln|y| = x^2 + C$. $y = e^{x^2}$ (since $y(0) = 1$).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'ar-ent-6b',
    question: 'If $F(x) = \\int_1^x \\frac{1}{t}\\,dt$, then $F(x) =$',
    options: ['$\\ln x$', '$\\ln|x|$', '$\\frac{1}{x}$', '$x - 1$'],
    correctIndex: 0,
    explanation: '$\\int_1^x \\frac{1}{t}\\,dt = \\ln x$ for $x > 0$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: Comprehensive Review
  {
    id: 'ar-ent-7a',
    question: 'The AP Calculus AB exam tests which core ideas?',
    options: ['Only limits', 'Limits, derivatives, integrals, and their applications', 'Only integration', 'Only derivatives'],
    correctIndex: 1,
    explanation: 'The exam covers the full calculus toolkit: limits, derivatives, and integrals.',
    partNumber: 7,
    partTitle: 'Comprehensive Review',
  },
  {
    id: 'ar-ent-7b',
    question: 'The relationship $\\int_a^b f\'(x)\\,dx = f(b) - f(a)$ is called:',
    options: ['The chain rule', 'The Fundamental Theorem of Calculus', 'The product rule', 'L\'Hôpital\'s Rule'],
    correctIndex: 1,
    explanation: 'FTC Part 2 connects differentiation and integration.',
    partNumber: 7,
    partTitle: 'Comprehensive Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Limits & Continuity Review' },
    { partNumber: 2, partTitle: 'Differentiation Review' },
    { partNumber: 3, partTitle: 'Applications of Derivatives Review' },
    { partNumber: 4, partTitle: 'Integration Review' },
    { partNumber: 5, partTitle: 'Applications of Integration Review' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Comprehensive Review' },
  ]
}
