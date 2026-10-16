/**
 * Entrance Quiz — Area Between Curves (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Area Between Two Curves
  {
    id: 'abc-ent-1a',
    question: 'Find the area of the region enclosed by $y = 8 - x^2$ and $y = x^2$.',
    options: ['$\\frac{32}{3}$', '$-\\frac{64}{3}$', '$\\frac{64}{3}$', '$\\frac{80}{3}$'],
    correctIndex: 2,
    explanation: 'The curves meet where $8 - x^2 = x^2$, at $x = \\pm 2$, and $8 - x^2$ is on top. The area is $\\int_{-2}^{2} (8 - 2x^2)\\,dx = 2\\left(16 - \\frac{16}{3}\\right) = \\frac{64}{3}$. Subtracting in the wrong order gives a negative value.',
    partNumber: 1,
    partTitle: 'Area Between Two Curves',
  },
  {
    id: 'abc-ent-1b',
    question: 'Which integral gives the area between $y = e^x$ and $y = x + 1$ for $0 \\le x \\le 2$?',
    options: ['$\\int_0^2 (e^x - x)\\,dx$', '$\\int_0^2 (e^x - x - 1)\\,dx$', '$\\int_0^2 (x + 1)\\,dx$', '$\\int_0^2 e^x\\,dx$'],
    correctIndex: 1,
    explanation: 'On $[0, 2]$, $e^x \\ge x + 1$, so the area is $\\int_0^2 [e^x - (x + 1)]\\,dx$. The whole bottom function must be subtracted; the single-curve integrals give areas down to the $x$-axis.',
    partNumber: 1,
    partTitle: 'Area Between Two Curves',
  },
  // Part 2 — When Curves Switch Position
  {
    id: 'abc-ent-2a',
    question: 'What is the total area between the graph of $y = x^2 - 2x$ and the $x$-axis on $[0, 3]$?',
    options: ['$0$', '$-\\frac{4}{3}$', '$\\frac{8}{3}$', '$\\frac{4}{3}$'],
    correctIndex: 2,
    explanation: 'The curve is below the axis on $(0, 2)$ and above it on $(2, 3)$. The pieces have areas $\\int_0^2 (2x - x^2)\\,dx = \\frac{4}{3}$ and $\\int_2^3 (x^2 - 2x)\\,dx = \\frac{4}{3}$, for a total of $\\frac{8}{3}$. Integrating without splitting gives 0.',
    partNumber: 2,
    partTitle: 'When Curves Switch Position',
  },
  {
    id: 'abc-ent-2b',
    question: 'Find the total area between $y = x^3$ and $y = 4x$ on $[0, 3]$.',
    options: ['$\\frac{9}{4}$', '$4$', '$\\frac{25}{4}$', '$\\frac{41}{4}$'],
    correctIndex: 3,
    explanation: 'The curves cross at $x = 2$. On $[0, 2]$, $4x$ is on top: $\\int_0^2 (4x - x^3)\\,dx = 4$. On $[2, 3]$, $x^3$ is on top: $\\int_2^3 (x^3 - 4x)\\,dx = \\frac{25}{4}$. The total is $\\frac{41}{4}$; a single unsplit integral has absolute value $\\frac{9}{4}$.',
    partNumber: 2,
    partTitle: 'When Curves Switch Position',
  },
  // Part 3 — Integrating with Respect to y
  {
    id: 'abc-ent-3a',
    question: 'Find the area of the region enclosed by $x = y^2 - 4$ and $x = 2 - y$.',
    options: ['$\\frac{125}{6}$', '$-\\frac{125}{6}$', '$\\frac{22}{3}$', '$\\frac{27}{2}$'],
    correctIndex: 0,
    explanation: 'Set $y^2 - 4 = 2 - y$: $y = -3$ and $y = 2$. The right curve is $x = 2 - y$, so the area is $\\int_{-3}^{2} (6 - y - y^2)\\,dy = \\frac{125}{6}$. Using only $y \\ge 0$ or only $y \\le 0$ gives $\\frac{22}{3}$ or $\\frac{27}{2}$.',
    partNumber: 3,
    partTitle: 'Integrating with Respect to y',
  },
  {
    id: 'abc-ent-3b',
    question: 'The region is bounded by $y = \\sqrt{x}$, $y = 0$ and $x = 9$. Which integral with respect to $y$ gives its area?',
    options: ['$\\int_0^9 (9 - \\sqrt{y})\\,dy$', '$\\int_0^3 (9 - y^2)\\,dy$', '$\\int_0^9 (3 - \\sqrt{x})\\,dx$', '$\\int_0^3 (9 - \\sqrt{y})\\,dy$'],
    correctIndex: 1,
    explanation: 'Solve $y = \\sqrt{x}$ for $x = y^2$ (the left boundary); the right boundary is $x = 9$, and $y$ runs from 0 to 3. Area $= \\int_0^3 (9 - y^2)\\,dy$. The $dx$ integral shown measures the region above the curve instead.',
    partNumber: 3,
    partTitle: 'Integrating with Respect to y',
  },
  // Part 4 — Multiple Regions
  {
    id: 'abc-ent-4a',
    question: 'Find the area of the region bounded by $y = \\sqrt{x}$, $y = x - 2$ and $y = 0$.',
    options: ['$\\frac{16}{3}$', '$\\frac{22}{3}$', '$\\frac{10}{3}$', '$\\frac{8}{3}$'],
    correctIndex: 2,
    explanation: 'In $y$: the left boundary is $x = y^2$, the right is $x = y + 2$, and they meet at $y = 2$. Area $= \\int_0^2 (y + 2 - y^2)\\,dy = 2 + 4 - \\frac{8}{3} = \\frac{10}{3}$. Ignoring the line gives $\\int_0^4 \\sqrt{x}\\,dx = \\frac{16}{3}$.',
    partNumber: 4,
    partTitle: 'Multiple Regions',
  },
  {
    id: 'abc-ent-4b',
    question: 'A triangle is bounded by $y = 2x$, $y = 6 - x$ and $y = 0$. Which expression gives its area using integrals in $x$?',
    options: ['$\\int_0^2 (6 - 3x)\\,dx + \\int_2^6 (6 - x)\\,dx$', '$\\int_0^4 2x\\,dx + \\int_4^6 (6 - x)\\,dx$', '$\\int_0^2 (6 - x)\\,dx + \\int_2^6 2x\\,dx$', '$\\int_0^2 2x\\,dx + \\int_2^6 (6 - x)\\,dx$'],
    correctIndex: 3,
    explanation: 'The top boundary changes at the vertex $(2, 4)$: it is $y = 2x$ on $[0, 2]$ and $y = 6 - x$ on $[2, 6]$, with $y = 0$ below. So the area is the sum of two integrals, which equals 12. Splitting at the height 4 instead of at $x = 2$, swapping the two boundaries, or subtracting the lines on $[0, 2]$ all describe the wrong region.',
    partNumber: 4,
    partTitle: 'Multiple Regions',
  },
  // Part 5 — Area with Absolute Value
  {
    id: 'abc-ent-5a',
    question: 'For $f(x) = x^2 - 1$ on $[0, 2]$, what are the signed area $\\int_0^2 f(x)\\,dx$ and the total area $\\int_0^2 |f(x)|\\,dx$?',
    options: ['Signed $\\frac{2}{3}$, total $2$', 'Both equal $\\frac{2}{3}$', 'Both equal $2$', 'Signed $0$, total $2$'],
    correctIndex: 0,
    explanation: 'Signed: $\\left[\\frac{x^3}{3} - x\\right]_0^2 = \\frac{2}{3}$. Total: split at $x = 1$, giving $\\frac{2}{3}$ below the axis and $\\frac{4}{3}$ above, for $2$. The below-axis part cancels in the signed area but adds in the total.',
    partNumber: 5,
    partTitle: 'Area with Absolute Value',
  },
  {
    id: 'abc-ent-5b',
    question: 'For a continuous $f$, $\\int_a^b f(x)\\,dx = -5$, and the region between $f$ and the $x$-axis that lies below the axis has area 7. What is the total area between $f$ and the axis on $[a, b]$?',
    options: ['$12$', '$9$', '$-5$', '$-12$'],
    correctIndex: 1,
    explanation: 'If $A$ is the area above the axis, then $A - 7 = -5$, so $A = 2$. The total area is $2 + 7 = 9$. Adding 5 and 7 mixes signed and unsigned quantities.',
    partNumber: 5,
    partTitle: 'Area with Absolute Value',
  },
  // Part 6 — AP-Style Workshop
  {
    id: 'abc-ent-6a',
    question: 'Region $R$ is bounded by $y = e^x$, the line $y = e$, and the $y$-axis. What is the area of $R$?',
    options: ['$e - 1$', '$e - 2$', '$1$', '$2e - 1$'],
    correctIndex: 2,
    explanation: 'The curves meet at $x = 1$, and $y = e$ is on top on $[0, 1]$: $\\int_0^1 (e - e^x)\\,dx = e - (e - 1) = 1$. The value $e - 1$ is the area under $y = e^x$, not between the curves.',
    partNumber: 6,
    partTitle: 'AP-Style Workshop',
  },
  {
    id: 'abc-ent-6b',
    question: 'Find the area of the region enclosed by $y = \\dfrac{3}{x}$ and $y = 4 - x$.',
    options: ['$4$', '$4 - \\ln 3$', '$3\\ln 3$', '$4 - 3\\ln 3$'],
    correctIndex: 3,
    explanation: 'The curves meet where $x^2 - 4x + 3 = 0$, at $x = 1$ and $x = 3$, with the line on top. Area $= \\int_1^3 \\left(4 - x - \\frac{3}{x}\\right) dx = 4 - 3\\ln 3$. Dropping the coefficient 3 on the logarithm gives $4 - \\ln 3$.',
    partNumber: 6,
    partTitle: 'AP-Style Workshop',
  },
  // Part 7 — Comprehensive Assessment
  {
    id: 'abc-ent-7a',
    question: 'Find the area of the region enclosed by $y = x^2$ and $y = 4x$.',
    options: ['$\\frac{32}{3}$', '$-\\frac{32}{3}$', '$\\frac{160}{3}$', '$32$'],
    correctIndex: 0,
    explanation: 'The curves meet at $x = 0$ and $x = 4$, with $4x$ on top: $\\int_0^4 (4x - x^2)\\,dx = 32 - \\frac{64}{3} = \\frac{32}{3}$. Adding the functions instead of subtracting gives $\\frac{160}{3}$.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
  {
    id: 'abc-ent-7b',
    question: 'What is the total area between $y = \\sin x$ and the $x$-axis on $\\left[0, \\frac{3\\pi}{2}\\right]$?',
    options: ['$1$', '$3$', '$2$', '$\\frac{3\\pi}{2}$'],
    correctIndex: 1,
    explanation: 'On $[0, \\pi]$ the area is 2, and on $\\left[\\pi, \\frac{3\\pi}{2}\\right]$ the curve is below the axis with area 1. The total is 3, while the signed integral would be $2 - 1 = 1$.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Area Between Two Curves' },
    { partNumber: 2, partTitle: 'When Curves Switch Position' },
    { partNumber: 3, partTitle: 'Integrating with Respect to y' },
    { partNumber: 4, partTitle: 'Multiple Regions' },
    { partNumber: 5, partTitle: 'Area with Absolute Value' },
    { partNumber: 6, partTitle: 'AP-Style Workshop' },
    { partNumber: 7, partTitle: 'Comprehensive Assessment' },
  ]
}
