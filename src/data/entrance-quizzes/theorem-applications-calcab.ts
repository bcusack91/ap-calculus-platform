/**
 * Entrance Quiz — Theorem Applications (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Intermediate Value Theorem (IVT)
  {
    id: 'thm-ent-1a',
    question: 'A continuous function $g$ has $g(1) = 4$, $g(3) = -2$, $g(6) = 5$ and $g(8) = 1$. What does the IVT guarantee about the zeros of $g$ on $(1, 8)$?',
    options: ['At least two zeros', 'Exactly two zeros', 'At least three zeros', 'At least one zero'],
    correctIndex: 0,
    explanation: 'The values change sign on $[1, 3]$ and again on $[3, 6]$, so the IVT gives a zero in each of those intervals: at least two. It cannot rule out more, and $[6, 8]$ has no sign change.',
    partNumber: 1,
    partTitle: 'The Intermediate Value Theorem (IVT)',
  },
  {
    id: 'thm-ent-1b',
    question: 'Let $h(x) = \\dfrac{x^2 - 1}{x - 2}$, so $h(0) = \\frac{1}{2}$ and $h(3) = 8$. Does the IVT guarantee $h(c) = 4$ for some $c$ in $(0, 3)$?',
    options: ['Yes, because 4 lies between $h(0)$ and $h(3)$', 'No, because $h$ is discontinuous at $x = 2$, inside $[0, 3]$', 'Yes, by the Mean Value Theorem on $[0, 3]$', 'No, because $h$ is not differentiable at 0'],
    correctIndex: 1,
    explanation: 'The IVT requires continuity on the whole closed interval, and $h$ has a vertical asymptote at $x = 2$. So no conclusion follows; in fact $h$ never equals 4 on $(0, 3)$.',
    partNumber: 1,
    partTitle: 'The Intermediate Value Theorem (IVT)',
  },
  // Part 2 — The Mean Value Theorem (MVT)
  {
    id: 'thm-ent-2a',
    question: 'Find the value of $c$ guaranteed by the Mean Value Theorem for $f(x) = \\sqrt{x + 1}$ on $[0, 8]$.',
    options: ['$c = 4$', '$c = 1$', '$c = 3$', '$c = \\frac{7}{4}$'],
    correctIndex: 2,
    explanation: 'The average rate of change is $\\frac{3 - 1}{8} = \\frac{1}{4}$. Solve $f\'(c) = \\frac{1}{2\\sqrt{c + 1}} = \\frac{1}{4}$: $\\sqrt{c + 1} = 2$, so $c = 3$. Forgetting the $+1$ gives $c = 4$.',
    partNumber: 2,
    partTitle: 'The Mean Value Theorem (MVT)',
  },
  {
    id: 'thm-ent-2b',
    question: 'A function $f$ is continuous on $[0, 6]$, and its graph is smooth except for a sharp corner at $x = 3$, with $f(0) = 1$ and $f(6) = 13$. Does the MVT guarantee $f\'(c) = 2$ for some $c$ in $(0, 6)$?',
    options: ['Yes, since the average rate of change is 2', 'Yes, since $f$ is continuous on $[0, 6]$', 'No, since the average rate of change is 12', 'No, since $f$ is not differentiable at $x = 3$'],
    correctIndex: 3,
    explanation: 'The average rate is $\\frac{13 - 1}{6} = 2$, but the MVT also needs differentiability on all of $(0, 6)$. Since that fails at $x = 3$, the theorem guarantees nothing.',
    partNumber: 2,
    partTitle: 'The Mean Value Theorem (MVT)',
  },
  // Part 3 — The Extreme Value Theorem (EVT)
  {
    id: 'thm-ent-3a',
    question: 'Find the absolute maximum and minimum values of $f(x) = x^4 - 2x^2 + 3$ on $[-1, 2]$.',
    options: ['Max $11$, min $2$', 'Max $3$, min $2$', 'Max $11$, min $3$', 'Max $11$, min $0$'],
    correctIndex: 0,
    explanation: '$f\'(x) = 4x(x - 1)(x + 1)$ gives critical points $-1, 0, 1$. Candidates: $f(-1) = 2$, $f(0) = 3$, $f(1) = 2$, $f(2) = 11$. So the maximum is 11 (at the endpoint) and the minimum is 2.',
    partNumber: 3,
    partTitle: 'The Extreme Value Theorem (EVT)',
  },
  {
    id: 'thm-ent-3b',
    question: 'Which condition alone guarantees, by the Extreme Value Theorem, that $f$ has an absolute minimum?',
    options: ['$f$ differentiable on $(0, 5)$', '$f$ continuous on $[0, 5]$', '$f$ continuous on the open interval $(0, 5)$', '$f$ defined at every point of $[0, 5]$'],
    correctIndex: 1,
    explanation: 'The EVT requires continuity on a closed interval. Differentiability or continuity on an open interval is not enough (for example $\\frac{1}{x}$ on $(0, 5)$), and being defined does not prevent jumps.',
    partNumber: 3,
    partTitle: 'The Extreme Value Theorem (EVT)',
  },
  // Part 4 — Rolle's Theorem & MVT Applications
  {
    id: 'thm-ent-4a',
    question: 'For $f(x) = x^3 - 9x$ on $[-3, 3]$, find all values of $c$ guaranteed by Rolle\'s Theorem.',
    options: ['$c = 0$', '$c = \\pm 3$', '$c = \\pm\\sqrt{3}$', '$c = 3$'],
    correctIndex: 2,
    explanation: 'Since $f(-3) = f(3) = 0$ and $f$ is a polynomial, Rolle\'s Theorem applies. Solving $f\'(c) = 3c^2 - 9 = 0$ gives $c = \\pm\\sqrt{3}$, both inside $(-3, 3)$.',
    partNumber: 4,
    partTitle: 'Rolle\'s Theorem & MVT Applications',
  },
  {
    id: 'thm-ent-4b',
    question: 'A differentiable function has $f\'(x) > 0$ for all $x$, $f(0) = -1$ and $f(1) = 2$. What can be concluded about its zeros?',
    options: ['At least one, possibly several', 'No zeros, since $f\'$ is never 0', 'Exactly one zero, at $x = \\frac{1}{3}$', 'Exactly one zero, between 0 and 1'],
    correctIndex: 3,
    explanation: 'The IVT gives a zero in $(0, 1)$. A second zero would force $f\'(c) = 0$ somewhere between them by Rolle\'s Theorem, which is impossible since $f\' > 0$. Its exact location is not determined.',
    partNumber: 4,
    partTitle: 'Rolle\'s Theorem & MVT Applications',
  },
  // Part 5 — FTC and When to Use Each Theorem
  {
    id: 'thm-ent-5a',
    question: 'Let $G(x) = \\displaystyle\\int_x^3 \\sqrt{1 + t^2}\\, dt$. Find $G\'(x)$.',
    options: ['$-\\sqrt{1 + x^2}$', '$\\sqrt{1 + x^2}$', '$\\sqrt{10} - \\sqrt{1 + x^2}$', '$-\\frac{x}{\\sqrt{1 + x^2}}$'],
    correctIndex: 0,
    explanation: 'Flip the limits: $G(x) = -\\int_3^x \\sqrt{1 + t^2}\\, dt$, so by FTC Part 1, $G\'(x) = -\\sqrt{1 + x^2}$. Forgetting that $x$ is the lower limit drops the negative sign.',
    partNumber: 5,
    partTitle: 'FTC and When to Use Each Theorem',
  },
  {
    id: 'thm-ent-5b',
    question: 'A function $f$ is continuous on $[0, 10]$ with $f(0) = 3$ and $f(10) = 8$. Which statement must be true?',
    options: ['$f$ has its absolute maximum at $x = 10$', '$f(c) = 5$ for some $c$ in $(0, 10)$', '$f\'(c) = \\frac{1}{2}$ for some $c$ in $(0, 10)$', '$f(c) = 2$ for some $c$ in $(0, 10)$'],
    correctIndex: 1,
    explanation: 'By the IVT, every value between 3 and 8 is taken, including 5. The MVT conclusion needs differentiability, which is not given, and nothing forces the maximum to sit at an endpoint.',
    partNumber: 5,
    partTitle: 'FTC and When to Use Each Theorem',
  },
  // Part 6 — Practice Workshop
  {
    id: 'thm-ent-6a',
    question: 'A differentiable function has $f(0) = 6$, $f(2) = 1$, $f(5) = 1$ and $f(9) = 9$. Which statement is guaranteed by a theorem?',
    options: ['$f\'(c) = 2$ for some $c$ in $(0, 2)$', '$f(c) = 10$ for some $c$ in $(0, 9)$', '$f\'(c) = 2$ for some $c$ in $(5, 9)$', '$f\'(c) = 0$ for some $c$ in $(5, 9)$'],
    correctIndex: 2,
    explanation: 'On $[5, 9]$ the average rate of change is $\\frac{9 - 1}{4} = 2$, so the MVT gives $f\'(c) = 2$ there. On $[0, 2]$ the average rate is $-\\frac{5}{2}$, and 10 is outside every pair of table values.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'thm-ent-6b',
    question: 'On a free-response question, a student writes only: "$f\'(c) = 2$ for some $c$ in $(1, 4)$ by the Mean Value Theorem." What must be added to earn full credit?',
    options: ['A sketch showing the secant line and the parallel tangent line', 'The exact numerical value of $c$ found by solving $f\'(c) = 2$', 'A second theorem, such as the IVT, that confirms the result', 'A statement that $f$ is continuous and differentiable there'],
    correctIndex: 3,
    explanation: 'A theorem-based justification must show that the hypotheses hold: continuity on $[1, 4]$ and differentiability on $(1, 4)$ (along with the average rate computation). The value of $c$ is not required.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  // Part 7 — Final Assessment
  {
    id: 'thm-ent-7a',
    question: 'A car travels $45$ miles between 2:00 PM and 2:40 PM. What speed does the Mean Value Theorem guarantee the car had at some instant?',
    options: ['$67.5$ mph', '$45$ mph', '$112.5$ mph', '$30$ mph'],
    correctIndex: 0,
    explanation: 'The average speed is $\\frac{45 \\text{ mi}}{2/3 \\text{ h}} = 67.5$ mph, and the MVT says the instantaneous speed equals the average at some moment. Treating 40 minutes as 0.4 hours gives 112.5.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'thm-ent-7b',
    question: 'For $f(x) = \\dfrac{1}{x}$ on $[-1, 2]$, the average rate of change is $\\frac{1}{2}$, yet $f\'(x) = -\\frac{1}{x^2}$ is never positive. Why does this not contradict the Mean Value Theorem?',
    options: ['The average rate of change is negative', '$f$ is undefined at $x = 0$', '$f\'$ is negative, so the MVT never applies', 'The MVT only works on intervals of length 1'],
    correctIndex: 1,
    explanation: 'The MVT requires continuity on $[-1, 2]$, but $f$ is undefined (and discontinuous) at $x = 0$. With a hypothesis failing, the theorem makes no promise.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Intermediate Value Theorem (IVT)' },
    { partNumber: 2, partTitle: 'The Mean Value Theorem (MVT)' },
    { partNumber: 3, partTitle: 'The Extreme Value Theorem (EVT)' },
    { partNumber: 4, partTitle: 'Rolle\'s Theorem & MVT Applications' },
    { partNumber: 5, partTitle: 'FTC and When to Use Each Theorem' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
