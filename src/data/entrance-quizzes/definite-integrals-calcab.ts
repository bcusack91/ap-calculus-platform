/**
 * Entrance Quiz — Definite Integrals (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Riemann Sums
  {
    id: 'din-ent-1a',
    question: 'A table gives $f(0) = 2$, $f(1) = 5$, $f(4) = 3$ and $f(6) = 7$. Use a trapezoidal sum with these three subintervals to approximate $\\int_0^6 f(x)\\,dx$.',
    options: ['$28$', '$23$', '$25.5$', '$51$'],
    correctIndex: 2,
    explanation: 'With unequal widths: $\\frac{1}{2}(2 + 5) + \\frac{3}{2}(5 + 3) + \\frac{2}{2}(3 + 7) = 3.5 + 12 + 10 = 25.5$. The left and right sums are 23 and 28, and forgetting the $\\frac{1}{2}$ doubles the answer to 51.',
    partNumber: 1,
    partTitle: 'Riemann Sums',
  },
  {
    id: 'din-ent-1b',
    question: 'A function $f$ is positive, decreasing and concave up on $[a, b]$. Which approximation of $\\int_a^b f(x)\\,dx$ must be an underestimate?',
    options: ['The left Riemann sum', 'The right Riemann sum', 'The trapezoidal sum', 'The left and trapezoidal sums'],
    correctIndex: 1,
    explanation: 'For a decreasing function, each right-endpoint rectangle uses the lowest height on its subinterval, so the right sum is too small. The left sum is too large, and with concave up the trapezoids lie above the curve, so the trapezoidal sum is too large.',
    partNumber: 1,
    partTitle: 'Riemann Sums',
  },
  // Part 2 — Definite Integral Definition
  {
    id: 'din-ent-2a',
    question: 'Evaluate $\\displaystyle\\int_{-2}^{2} \\left(\\sqrt{4 - x^2} + x^3\\right) dx$.',
    options: ['$2\\pi + 8$', '$4\\pi + 8$', '$2\\pi$', '$\\frac{\\pi}{2}$'],
    correctIndex: 2,
    explanation: 'The first term is the area of a semicircle of radius 2, which is $2\\pi$. The term $x^3$ is odd, so its integral over $[-2, 2]$ is 0. The total is $2\\pi$.',
    partNumber: 2,
    partTitle: 'Definite Integral Definition',
  },
  {
    id: 'din-ent-2b',
    question: 'On $[0, 2]$ the graph of $f$ lies above the $x$-axis and encloses area 7; on $[2, 3]$ it lies below the axis and encloses area 2. Which pair is correct?',
    options: ['$\\int_0^3 f = 9$ and $\\int_0^3 |f| = 5$', '$\\int_0^3 f = 5$ and $\\int_0^3 |f| = 5$', '$\\int_0^3 f = 9$ and $\\int_0^3 |f| = 9$', '$\\int_0^3 f = 5$ and $\\int_0^3 |f| = 9$'],
    correctIndex: 3,
    explanation: 'The definite integral counts area below the axis as negative: $7 - 2 = 5$. The integral of $|f|$ counts all area as positive: $7 + 2 = 9$.',
    partNumber: 2,
    partTitle: 'Definite Integral Definition',
  },
  // Part 3 — Properties of Integrals
  {
    id: 'din-ent-3a',
    question: 'Given $\\int_1^6 f(x)\\,dx = 8$ and $\\int_1^4 f(x)\\,dx = 11$, evaluate $\\displaystyle\\int_6^4 \\left(2f(x) + 1\\right) dx$.',
    options: ['$4$', '$-4$', '$6$', '$5$'],
    correctIndex: 0,
    explanation: 'First $\\int_4^6 f = 8 - 11 = -3$, so $\\int_4^6 (2f + 1)\\,dx = -6 + 2 = -4$. Reversing the limits flips the sign: $\\int_6^4 (2f + 1)\\,dx = 4$.',
    partNumber: 3,
    partTitle: 'Properties of Integrals',
  },
  {
    id: 'din-ent-3b',
    question: 'What is the average value of $f(x) = 3\\sqrt{x}$ on $[1, 4]$?',
    options: ['$14$', '$\\frac{14}{3}$', '$\\frac{9}{2}$', '$\\frac{7}{3}$'],
    correctIndex: 1,
    explanation: '$\\frac{1}{4 - 1}\\int_1^4 3x^{1/2}\\,dx = \\frac{1}{3}\\left[2x^{3/2}\\right]_1^4 = \\frac{1}{3}(16 - 2) = \\frac{14}{3}$. Averaging the endpoint values 3 and 6 gives $\\frac{9}{2}$, which is not the average value.',
    partNumber: 3,
    partTitle: 'Properties of Integrals',
  },
  // Part 4 — Fundamental Theorem of Calculus — Part 1
  {
    id: 'din-ent-4a',
    question: 'Find $\\dfrac{d}{dx}\\displaystyle\\int_{x^2}^{3x} \\sin t\\,dt$.',
    options: ['$\\sin(3x) - \\sin(x^2)$', '$2x\\sin(x^2) - 3\\sin(3x)$', '$3\\sin(3x) - 2x\\sin(x^2)$', '$-3\\cos(3x) + 2x\\cos(x^2)$'],
    correctIndex: 2,
    explanation: 'Differentiate the upper limit term minus the lower limit term, each with its chain factor: $\\sin(3x) \\cdot 3 - \\sin(x^2) \\cdot 2x$. Omitting the chain factors gives $\\sin(3x) - \\sin(x^2)$.',
    partNumber: 4,
    partTitle: 'Fundamental Theorem of Calculus — Part 1',
  },
  {
    id: 'din-ent-4b',
    question: 'Let $F(x) = \\displaystyle\\int_1^x \\sqrt{t^3 + 1}\\,dt$. Find $F\'(2)$.',
    options: ['$3 - \\sqrt{2}$', '$\\sqrt{2}$', '$6$', '$3$'],
    correctIndex: 3,
    explanation: 'By FTC Part 1, $F\'(x) = \\sqrt{x^3 + 1}$, so $F\'(2) = \\sqrt{9} = 3$. Subtracting the integrand at the lower limit, as in $3 - \\sqrt{2}$, confuses this with evaluating an antiderivative.',
    partNumber: 4,
    partTitle: 'Fundamental Theorem of Calculus — Part 1',
  },
  // Part 5 — Fundamental Theorem of Calculus — Part 2
  {
    id: 'din-ent-5a',
    question: 'Evaluate $\\displaystyle\\int_0^2 (3x^2 - 2x + 1)\\,dx$.',
    options: ['$6$', '$14$', '$-6$', '$18$'],
    correctIndex: 0,
    explanation: 'An antiderivative is $x^3 - x^2 + x$, so the integral is $(8 - 4 + 2) - 0 = 6$. A sign slip on the $x^2$ term gives 14.',
    partNumber: 5,
    partTitle: 'Fundamental Theorem of Calculus — Part 2',
  },
  {
    id: 'din-ent-5b',
    question: 'A tank holds $20$ gallons at $t = 0$. Water flows in at $R(t) = 4\\sqrt{t}$ gallons per minute. How much water is in the tank at $t = 9$ minutes?',
    options: ['$72$ gal', '$92$ gal', '$32$ gal', '$128$ gal'],
    correctIndex: 1,
    explanation: 'By the Net Change Theorem, the amount is $20 + \\int_0^9 4t^{1/2}\\,dt = 20 + \\frac{8}{3}(27) = 20 + 72 = 92$ gallons. The 72 gallons is only the amount added.',
    partNumber: 5,
    partTitle: 'Fundamental Theorem of Calculus — Part 2',
  },
  // Part 6 — Mixed Integration Problems
  {
    id: 'din-ent-6a',
    question: 'Evaluate $\\displaystyle\\int_0^3 |x^2 - 1|\\,dx$.',
    options: ['$6$', '$\\frac{20}{3}$', '$\\frac{22}{3}$', '$\\frac{16}{3}$'],
    correctIndex: 2,
    explanation: 'Split at $x = 1$: $\\int_0^1 (1 - x^2)\\,dx = \\frac{2}{3}$ and $\\int_1^3 (x^2 - 1)\\,dx = \\frac{20}{3}$, for a total of $\\frac{22}{3}$. Ignoring the absolute value gives $\\int_0^3 (x^2 - 1)\\,dx = 6$.',
    partNumber: 6,
    partTitle: 'Mixed Integration Problems',
  },
  {
    id: 'din-ent-6b',
    question: 'Given $\\int_0^4 f(x)\\,dx = 6$ and $\\int_0^4 g(x)\\,dx = -2$, evaluate $\\displaystyle\\int_0^4 \\left(5f(x) - 3g(x) + 2\\right) dx$.',
    options: ['$38$', '$32$', '$36$', '$44$'],
    correctIndex: 3,
    explanation: 'By linearity: $5(6) - 3(-2) + \\int_0^4 2\\,dx = 30 + 6 + 8 = 44$. Treating the constant term as 2 instead of $2 \\cdot 4$ gives 38.',
    partNumber: 6,
    partTitle: 'Mixed Integration Problems',
  },
  // Part 7 — Comprehensive Review
  {
    id: 'din-ent-7a',
    question: 'Let $g(x) = \\displaystyle\\int_0^x (t^2 - 9)\\,dt$. At what $x > 0$ does $g$ have a local minimum?',
    options: ['$x = 3$', '$x = 9$', '$x = 0$', '$x = 3\\sqrt{3}$'],
    correctIndex: 0,
    explanation: '$g\'(x) = x^2 - 9$, which changes from negative to positive at $x = 3$. The value $3\\sqrt{3}$ is where $g(x) = 0$, not where $g$ is smallest, and $9$ comes from dropping the square in $x^2 - 9$.',
    partNumber: 7,
    partTitle: 'Comprehensive Review',
  },
  {
    id: 'din-ent-7b',
    question: 'Oil leaks from a tank at a rate of $r(t)$ liters per hour, with $t$ in hours. What does $\\int_2^5 r(t)\\,dt = 14$ mean?',
    options: ['The leak rate was 14 liters per hour at $t = 5$', '14 liters leaked from $t = 2$ to $t = 5$', 'The leak rate rose by 14 liters per hour', '14 liters had leaked in total by hour 5'],
    correctIndex: 1,
    explanation: 'Integrating a rate over $[2, 5]$ gives the net amount that accumulated during that interval: 14 liters leaked from $t = 2$ to $t = 5$. It is not a rate, and it does not include leakage before $t = 2$.',
    partNumber: 7,
    partTitle: 'Comprehensive Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Riemann Sums' },
    { partNumber: 2, partTitle: 'Definite Integral Definition' },
    { partNumber: 3, partTitle: 'Properties of Integrals' },
    { partNumber: 4, partTitle: 'Fundamental Theorem of Calculus — Part 1' },
    { partNumber: 5, partTitle: 'Fundamental Theorem of Calculus — Part 2' },
    { partNumber: 6, partTitle: 'Mixed Integration Problems' },
    { partNumber: 7, partTitle: 'Comprehensive Review' },
  ]
}
