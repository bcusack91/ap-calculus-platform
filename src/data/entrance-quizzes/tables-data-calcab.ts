/**
 * Entrance Quiz — Tables & Data (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Reading Tables of Values
  {
    id: 'td-ent-1a',
    question: 'When given a table of values for $f(x)$, you can determine:',
    options: ['The exact formula for $f$', 'Approximate values and rates', 'The second derivative exactly', 'The integral exactly'],
    correctIndex: 1,
    explanation: 'Tables provide discrete data for approximation, not exact formulas.',
    partNumber: 1,
    partTitle: 'Reading Tables of Values',
  },
  {
    id: 'td-ent-1b',
    question: 'A table gives $f(2) = 5$ and $f(4) = 11$. The average rate of change on $[2,4]$ is:',
    options: ['$3$', '$6$', '$8$', '$16$'],
    correctIndex: 0,
    explanation: '$\\frac{f(4)-f(2)}{4-2} = \\frac{11-5}{2} = 3$.',
    partNumber: 1,
    partTitle: 'Reading Tables of Values',
  },
  // Part 2: Estimating Derivatives from Tables
  {
    id: 'td-ent-2a',
    question: 'To estimate $f\'(3)$ from a table with $f(2)=4$ and $f(4)=10$:',
    options: ['$\\frac{10-4}{4-2} = 3$', '$\\frac{10+4}{2} = 7$', '$10-4 = 6$', '$\\frac{4-10}{4-2} = -3$'],
    correctIndex: 0,
    explanation: 'Use the symmetric difference quotient or nearest points.',
    partNumber: 2,
    partTitle: 'Estimating Derivatives from Tables',
  },
  {
    id: 'td-ent-2b',
    question: 'The best estimate of $f\'(a)$ uses points:',
    options: ['Far from $a$', 'Closest to $a$ on both sides', 'Only to the right of $a$', 'At the endpoints of the table'],
    correctIndex: 1,
    explanation: 'Points nearest to $a$ give the best approximation of the derivative.',
    partNumber: 2,
    partTitle: 'Estimating Derivatives from Tables',
  },
  // Part 3: Riemann Sums from Tables
  {
    id: 'td-ent-3a',
    question: 'A left Riemann sum with $n$ subintervals uses the function value at:',
    options: ['The right endpoint of each subinterval', 'The left endpoint of each subinterval', 'The midpoint', 'Any point'],
    correctIndex: 1,
    explanation: 'Left Riemann sum: use $f(x_{i-1})$ for each subinterval.',
    partNumber: 3,
    partTitle: 'Riemann Sums from Tables',
  },
  {
    id: 'td-ent-3b',
    question: 'Given $f(0)=2, f(2)=5, f(4)=3$ with $\\Delta x = 2$, the left Riemann sum is:',
    options: ['$14$', '$16$', '$10$', '$7$'],
    correctIndex: 0,
    explanation: 'Left sum $= f(0) \\cdot 2 + f(2) \\cdot 2 = 2(2) + 5(2) = 14$.',
    partNumber: 3,
    partTitle: 'Riemann Sums from Tables',
  },
  // Part 4: Trapezoidal Approximation
  {
    id: 'td-ent-4a',
    question: 'The trapezoidal rule approximates the integral using:',
    options: ['Rectangles', 'Trapezoids', 'Circles', 'Triangles'],
    correctIndex: 1,
    explanation: 'Trapezoids give a better approximation than rectangles.',
    partNumber: 4,
    partTitle: 'Trapezoidal Approximation',
  },
  {
    id: 'td-ent-4b',
    question: 'Trapezoidal approximation with data $f(0)=1, f(2)=3, f(4)=2$, $\\Delta x = 2$:',
    options: ['$\\frac{1+3}{2}(2) + \\frac{3+2}{2}(2) = 9$', '$12$', '$10$', '$6$'],
    correctIndex: 0,
    explanation: 'Trap = $\\frac{\\Delta x}{2}[f(x_0) + 2f(x_1) + f(x_2)] = \\frac{2}{2}(1+6+2) = 9$.',
    partNumber: 4,
    partTitle: 'Trapezoidal Approximation',
  },
  // Part 5: Average Rate of Change
  {
    id: 'td-ent-5a',
    question: 'Average rate of change of $f$ on $[a,b]$ equals:',
    options: ['$f\'\\left(\\frac{a+b}{2}\\right)$', '$\\frac{f(b)-f(a)}{b-a}$', '$\\frac{f(a)+f(b)}{2}$', '$f(b) \\cdot f(a)$'],
    correctIndex: 1,
    explanation: 'AROC = slope of the secant line = $\\frac{\\Delta f}{\\Delta x}$.',
    partNumber: 5,
    partTitle: 'Average Rate of Change',
  },
  {
    id: 'td-ent-5b',
    question: 'If the average rate of change equals the instantaneous rate at some $c$, this is guaranteed by:',
    options: ['IVT', 'MVT', 'EVT', 'FTC'],
    correctIndex: 1,
    explanation: 'MVT guarantees $f\'(c) = \\frac{f(b)-f(a)}{b-a}$ for some $c$ in $(a,b)$.',
    partNumber: 5,
    partTitle: 'Average Rate of Change',
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'td-ent-6a',
    question: '<table style="border-collapse:collapse;margin:8px auto;text-align:center"><tr><th style="border:1px solid #888;padding:4px 12px"><i>t</i></th><td style="border:1px solid #888;padding:4px 12px">0</td><td style="border:1px solid #888;padding:4px 12px">3</td><td style="border:1px solid #888;padding:4px 12px">7</td><td style="border:1px solid #888;padding:4px 12px">10</td></tr><tr><th style="border:1px solid #888;padding:4px 12px"><i>v</i>(<i>t</i>)</th><td style="border:1px solid #888;padding:4px 12px">0</td><td style="border:1px solid #888;padding:4px 12px">4</td><td style="border:1px solid #888;padding:4px 12px">6</td><td style="border:1px solid #888;padding:4px 12px">5</td></tr></table>Estimate $\\int_0^{10} v(t)\\,dt$ using trapezoids:',
    options: ['$42.5$', '$45$', '$38$', '$50$'],
    correctIndex: 0,
    explanation: 'Trap = $\\frac{3}{2}(0+4) + \\frac{4}{2}(4+6) + \\frac{3}{2}(6+5) = 6 + 20 + 16.5 = 42.5$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'td-ent-6b',
    question: 'An overestimate of the integral occurs when $f$ is:',
    options: ['Concave up (with trapezoidal)', 'Concave down', 'Linear', 'Constant'],
    correctIndex: 0,
    explanation: 'Trapezoids overestimate when the curve is concave up.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: Review & AP Exam Applications
  {
    id: 'td-ent-7a',
    question: 'With unequal subintervals in a table, you must:',
    options: ['Use equal $\\Delta x$ anyway', 'Use each subinterval\'s own width', 'Average all widths', 'Skip narrow subintervals'],
    correctIndex: 1,
    explanation: 'AP tables often have unequal spacing — use each $\\Delta x_i$ separately.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'td-ent-7b',
    question: 'When a table problem asks \'is there a time when $f\'(c) = 0$?\', apply:',
    options: ['FTC', 'MVT or IVT with justification', 'Just say yes', 'The derivative'],
    correctIndex: 1,
    explanation: 'Use MVT on appropriate subintervals or IVT on $f\'$ values.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Reading Tables of Values' },
    { partNumber: 2, partTitle: 'Estimating Derivatives from Tables' },
    { partNumber: 3, partTitle: 'Riemann Sums from Tables' },
    { partNumber: 4, partTitle: 'Trapezoidal Approximation' },
    { partNumber: 5, partTitle: 'Average Rate of Change' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
