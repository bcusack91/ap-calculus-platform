/**
 * Entrance Quiz — Accumulation Functions (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Accumulation Function Concept
  {
    id: 'af-ent-1a',
    question: 'An accumulation function $F(x) = \\int_a^x f(t)\\,dt$ represents:',
    options: ['The derivative of $f$', 'The net area under $f$ from $a$ to $x$', 'The antiderivative formula', 'The average of $f$'],
    correctIndex: 1,
    explanation: '$F(x)$ accumulates the net signed area under $f$ from $a$ to $x$.',
    partNumber: 1,
    partTitle: 'Accumulation Function Concept',
  },
  {
    id: 'af-ent-1b',
    question: 'If $f(t) \\geq 0$ on $[a,x]$, then $F(x) = \\int_a^x f(t)\\,dt$ is:',
    options: ['Negative', 'Zero', 'Nonnegative', 'Undefined'],
    correctIndex: 2,
    explanation: 'When $f \\geq 0$, the accumulated area is nonnegative.',
    partNumber: 1,
    partTitle: 'Accumulation Function Concept',
  },

  // Part 2: Graphical Interpretation
  {
    id: 'af-ent-2a',
    question: 'On a graph of $f$, $F(x) = \\int_0^x f(t)\\,dt$ at $x = 3$ equals:',
    options: ['The $y$-value of $f$ at $x = 3$', 'The area under $f$ from $0$ to $3$', 'The slope of $f$ at $x = 3$', '$f(3) - f(0)$'],
    correctIndex: 1,
    explanation: '$F(3)$ is the net area under the $f$ curve from 0 to 3.',
    partNumber: 2,
    partTitle: 'Graphical Interpretation',
  },
  {
    id: 'af-ent-2b',
    question: 'If the graph of $f$ is below the $x$-axis on $[2,5]$, then $\\int_2^5 f(t)\\,dt$ is:',
    options: ['Positive', 'Zero', 'Negative', 'Undefined'],
    correctIndex: 2,
    explanation: 'Area below the $x$-axis counts as negative in a definite integral.',
    partNumber: 2,
    partTitle: 'Graphical Interpretation',
  },

  // Part 3: FTC Part 1 with Variable Bounds
  {
    id: 'af-ent-3a',
    question: 'By FTC Part 1, $\\frac{d}{dx}\\int_a^x f(t)\\,dt =$',
    options: ['$f(x)$', '$F(x)$', '$f\'(x)$', '$f(a)$'],
    correctIndex: 0,
    explanation: 'FTC Part 1 states the derivative of the integral is the integrand evaluated at $x$.',
    partNumber: 3,
    partTitle: 'FTC Part 1 with Variable Bounds',
  },
  {
    id: 'af-ent-3b',
    question: '$\\frac{d}{dx}\\int_2^x \\sqrt{t^3+1}\\,dt =$',
    options: ['$\\sqrt{x^3+1}$', '$\\frac{3x^2}{2\\sqrt{x^3+1}}$', '$\\int \\sqrt{t^3+1}\\,dt$', '$\\sqrt{8+1}$'],
    correctIndex: 0,
    explanation: 'By FTC Part 1, the answer is $\\sqrt{x^3+1}$.',
    partNumber: 3,
    partTitle: 'FTC Part 1 with Variable Bounds',
  },

  // Part 4: Chain Rule with Integrals
  {
    id: 'af-ent-4a',
    question: '$\\frac{d}{dx}\\int_0^{x^2} f(t)\\,dt =$',
    options: ['$f(x^2)$', '$f(x^2) \\cdot 2x$', '$2x f(x)$', '$f\'(x^2)$'],
    correctIndex: 1,
    explanation: 'Chain rule with FTC: $f(x^2) \\cdot \\frac{d}{dx}(x^2) = 2x f(x^2)$.',
    partNumber: 4,
    partTitle: 'Chain Rule with Integrals',
  },
  {
    id: 'af-ent-4b',
    question: '$\\frac{d}{dx}\\int_x^0 f(t)\\,dt =$',
    options: ['$f(x)$', '$-f(x)$', '$f(0)$', '$0$'],
    correctIndex: 1,
    explanation: '$\\int_x^0 = -\\int_0^x$, so the derivative is $-f(x)$.',
    partNumber: 4,
    partTitle: 'Chain Rule with Integrals',
  },

  // Part 5: Connecting f and F Graphs
  {
    id: 'af-ent-5a',
    question: '$F(x) = \\int_0^x f(t)\\,dt$ has a local max when:',
    options: ['$f$ changes from positive to negative', '$f$ changes from negative to positive', '$f$ has a maximum', '$f = 0$'],
    correctIndex: 0,
    explanation: '$F\'(x) = f(x)$. $F$ has a local max when $f$ changes from + to −.',
    partNumber: 5,
    partTitle: 'Connecting $f$ and $F$ Graphs',
  },
  {
    id: 'af-ent-5b',
    question: '$F$ is concave up when:',
    options: ['$f$ is positive', '$f$ is increasing', '$f$ is decreasing', '$f$ is negative'],
    correctIndex: 1,
    explanation: '$F\'\' = f\'$. $F$ is concave up when $f\' > 0$, i.e., $f$ is increasing.',
    partNumber: 5,
    partTitle: 'Connecting $f$ and $F$ Graphs',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'af-ent-6a',
    question: 'Given the graph of $f$ with area 4 above the $x$-axis on $[0,3]$ and area 2 below on $[3,5]$, $F(5) =$',
    options: ['$6$', '$2$', '$4$', '$-2$'],
    correctIndex: 1,
    explanation: '$F(5) = 4 + (-2) = 2$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'af-ent-6b',
    question: 'If $F(x) = \\int_1^x (t^2-4)\\,dt$, find where $F$ has critical points:',
    options: ['$t = 0$', '$x = 2$ and $x = -2$', '$x = 2$ only (for $x > 0$)', '$x = 4$'],
    correctIndex: 1,
    explanation: '$F\'(x) = x^2 - 4 = 0$ at $x = \\pm 2$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'af-ent-7a',
    question: '$\\frac{d}{dx}\\int_{\\sin x}^{x^3} f(t)\\,dt =$',
    options: ['$f(x^3) - f(\\sin x)$', '$3x^2 f(x^3) - \\cos x \\cdot f(\\sin x)$', '$f(x^3) \\cdot 3x^2$', '$f(\\sin x) \\cdot \\cos x$'],
    correctIndex: 1,
    explanation: 'Split at a constant and apply chain rule to each bound.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'af-ent-7b',
    question: 'If $F(x) = \\int_0^x f(t)\\,dt$ and $F(3) = 7$, $F(5) = 4$, then $\\int_3^5 f(t)\\,dt =$',
    options: ['$3$', '$-3$', '$11$', '$7$'],
    correctIndex: 1,
    explanation: '$\\int_3^5 f(t)\\,dt = F(5) - F(3) = 4 - 7 = -3$.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Accumulation Function Concept' },
    { partNumber: 2, partTitle: 'Graphical Interpretation' },
    { partNumber: 3, partTitle: 'FTC Part 1 with Variable Bounds' },
    { partNumber: 4, partTitle: 'Chain Rule with Integrals' },
    { partNumber: 5, partTitle: 'Connecting $f$ and $F$ Graphs' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
