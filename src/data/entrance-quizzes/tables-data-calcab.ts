/**
 * Entrance Quiz — Working with Tables & Data — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Approximating Derivatives from Tables
  {
    id: 'td-ent-1a',
    question: 'The volume $V(t)$ of water in a tank, in liters, is measured at $t = 0, 5, 9, 15$ minutes, giving $V = 20, 35, 47, 59$. Using the best estimate from the data, what is $V\'(9)$ in liters per minute?',
    options: ['$3$', '$2$', '$2.4$', '$24$'],
    correctIndex: 2,
    explanation: 'At an interior point use the nearest neighbors on both sides: $V\'(9) \\approx \\frac{59 - 35}{15 - 5} = 2.4$. The one-sided slopes are $3$ and $2$, and $24$ forgets to divide by the width.',
    partNumber: 1,
    partTitle: 'Approximating Derivatives from Tables',
  },
  {
    id: 'td-ent-1b',
    question: 'A differentiable function has $f(2) = 9$, $f(4) = 6$, $f(7) = 5$, and $f(10) = 11$, and no other values are known. What is the best estimate of $f\'(10)$?',
    options: ['$2$', '$\\frac{5}{6}$', '$\\frac{11}{10}$', '$\\frac{1}{4}$'],
    correctIndex: 0,
    explanation: 'At the right endpoint use the closest point to the left: $f\'(10) \\approx \\frac{11 - 5}{10 - 7} = 2$. Using $x = 4$ or $x = 2$ gives a wider, less accurate secant, and $\\frac{11}{10}$ divides a function value by $x$.',
    partNumber: 1,
    partTitle: 'Approximating Derivatives from Tables',
  },

  // Part 2 — Riemann Sums from Tables
  {
    id: 'td-ent-2a',
    question: 'Water is pumped at rate $P(t)$ gallons per hour. At $t = 0, 1, 3, 6, 8$ hours, $P = 12, 15, 10, 9, 16$. What is the right Riemann sum estimate of $\\int_0^8 P(t)\\,dt$ using these subintervals?',
    options: ['$90$', '$94$', '$100$', '$50$'],
    correctIndex: 1,
    explanation: 'The widths are $1, 2, 3, 2$, so the right sum is $15(1) + 10(2) + 9(3) + 16(2) = 94$ gallons. The left sum is $90$, assuming every width is $2$ gives $100$, and $50$ ignores the widths.',
    partNumber: 2,
    partTitle: 'Riemann Sums from Tables',
  },
  {
    id: 'td-ent-2b',
    question: '$A(t)$ is the rate at which visitors enter a museum, in people per hour, with $t$ in hours. A right Riemann sum for $\\int_9^{13} A(t)\\,dt$ gives $620$. What does $620$ estimate?',
    options: [
      'People inside the museum at exactly hour 13',
      'The average number of people entering per hour',
      'The rate people enter at hour 13, in people per hour',
      'People who entered from hour 9 to hour 13',
    ],
    correctIndex: 3,
    explanation: 'Integrating a rate gives the total accumulated over the interval, so $620$ estimates how many people came in from $t = 9$ to $t = 13$. The number inside would also depend on who arrived earlier and who left, and the average rate would divide by $4$.',
    partNumber: 2,
    partTitle: 'Riemann Sums from Tables',
  },

  // Part 3 — Trapezoidal Rule
  {
    id: 'td-ent-3a',
    question: 'A continuous function has $g(0) = 6$, $g(2) = 10$, $g(3) = 4$, and $g(7) = 8$. What is the trapezoidal estimate of $\\int_0^7 g(x)\\,dx$ using these three subintervals?',
    options: ['$49$', '$94$', '$47$', '$38$'],
    correctIndex: 2,
    explanation: 'Each trapezoid uses its own width: $\\frac{2}{2}(6 + 10) + \\frac{1}{2}(10 + 4) + \\frac{4}{2}(4 + 8) = 16 + 7 + 24 = 47$. Treating the widths as equal gives $49$, leaving out the $\\frac{1}{2}$ gives $94$, and $38$ is the left sum.',
    partNumber: 3,
    partTitle: 'Trapezoidal Rule',
  },
  {
    id: 'td-ent-3b',
    question: 'A function $f$ is increasing and concave down on $[0, 8]$. For the same partition, which statement about the estimates of $\\int_0^8 f(x)\\,dx$ is correct?',
    options: [
      'The trapezoidal sum is less than the integral but greater than the left sum',
      'The trapezoidal sum is greater than the integral and the right sum',
      'The left sum is greater than the integral',
      'The trapezoidal sum equals the integral',
    ],
    correctIndex: 0,
    explanation: 'Concave down puts each trapezoid\'s top below the curve, so the trapezoidal sum underestimates; it is the average of the left and right sums, and since $f$ increases the left sum is the smaller one. An increasing function makes the left sum an underestimate.',
    partNumber: 3,
    partTitle: 'Trapezoidal Rule',
  },

  // Part 4 — MVT & IVT with Tables
  {
    id: 'td-ent-4a',
    question: 'A continuous function has $f(0) = 2$, $f(3) = -1$, $f(5) = 4$, and $f(8) = 1$. How many solutions of $f(x) = 0$ on $(0, 8)$ does the Intermediate Value Theorem guarantee?',
    options: ['Exactly two', 'At least three', 'At least two', 'Exactly one'],
    correctIndex: 2,
    explanation: 'The sign changes from $2$ to $-1$ on $(0, 3)$ and from $-1$ to $4$ on $(3, 5)$, so the IVT gives a zero in each of those intervals; from $4$ to $1$ there is no sign change, so nothing is guaranteed there. The IVT gives existence only, so there could be more than two zeros.',
    partNumber: 4,
    partTitle: 'MVT & IVT with Tables',
  },
  {
    id: 'td-ent-4b',
    question: 'A table gives $h(2) = 3$ and $h(7) = 23$. To conclude that $h\'(c) = 4$ for some $c$ in $(2, 7)$, which condition must be stated?',
    options: [
      '$h$ is increasing on $[2,7]$ with $h(2) < h(7)$',
      '$h$ is continuous on $[2,7]$ and differentiable on $(2,7)$',
      '$h$ is continuous on $[2,7]$, with nothing more needed',
      '$h$ takes every value between $3$ and $23$',
    ],
    correctIndex: 1,
    explanation: 'The slope $\\frac{23 - 3}{7 - 2} = 4$ is a derivative value only through the Mean Value Theorem, whose hypotheses are continuity on the closed interval and differentiability on the open interval. Continuity alone gives the IVT, which guarantees values of $h$, not of $h\'$.',
    partNumber: 4,
    partTitle: 'MVT & IVT with Tables',
  },

  // Part 5 — Interpreting f' from Tables
  {
    id: 'td-ent-5a',
    question: 'A function has $g(0) = 30$, $g(1) = 26$, $g(2) = 20$, $g(3) = 12$, and $g(4) = 2$. Assuming the pattern in the data reflects $g$, how does $g$ behave on $[0, 4]$?',
    options: ['Decreasing and concave down', 'Decreasing and concave up', 'Increasing and concave up', 'Decreasing and linear'],
    correctIndex: 0,
    explanation: 'The differences $-4, -6, -8, -10$ are all negative, so $g$ decreases, and they are getting more negative, so the slope is decreasing and $g$ is concave down. Equal differences would mean linear.',
    partNumber: 5,
    partTitle: 'Interpreting f\' from Tables',
  },
  {
    id: 'td-ent-5b',
    question: 'The velocity of a particle, in meters per second, is $v(2) = 14$, $v(5) = 8$, $v(9) = 2$, and $v(12) = -1$, with $t$ in seconds. What is the best estimate of the acceleration at $t = 5$, in meters per second per second?',
    options: ['$-2$', '$-\\frac{3}{2}$', '$-\\frac{12}{7}$', '$\\frac{12}{7}$'],
    correctIndex: 2,
    explanation: 'Acceleration is $v\'$, and at an interior point the best estimate uses both neighbors: $\\frac{v(9) - v(2)}{9 - 2} = -\\frac{12}{7}$. The one-sided slopes are $-2$ and $-\\frac{3}{2}$, and the positive value reverses the subtraction.',
    partNumber: 5,
    partTitle: 'Interpreting f\' from Tables',
  },

  // Part 6 — Practice Workshop
  {
    id: 'td-ent-6a',
    question: 'Outdoor temperature $T(t)$, in degrees, is recorded at $t = 0, 2, 6, 12$ hours as $50, 56, 62, 52$. Using a trapezoidal sum, what is the estimated average temperature over $0 \\le t \\le 12$?',
    options: ['$684$', '$55$', '$114$', '$57$'],
    correctIndex: 3,
    explanation: 'The trapezoidal sum is $\\frac{2}{2}(106) + \\frac{4}{2}(118) + \\frac{6}{2}(114) = 684$, and the average value divides by the length $12$: $\\frac{684}{12} = 57$. The value $684$ is the integral itself, and $55$ averages the four readings while ignoring the unequal spacing.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'td-ent-6b',
    question: 'The volume $V(t)$ of water in a tank is a differentiable function with $V(0) = 40$, $V(5) = 70$, and $V(12) = 40$. Must there be a time in $(0, 12)$ at which $V\'(t) = 0$?',
    options: [
      'No, because the table never shows $V$ holding steady over time',
      'Yes, because $V(0) = V(12)$ and the MVT applies',
      'Yes, because $V(5) > V(0)$ means $V$ has its maximum at $t = 5$',
      'No, because $V\'$ is not given at any of the times in the table',
    ],
    correctIndex: 1,
    explanation: 'By the Mean Value Theorem on $[0, 12]$ (differentiable implies continuous), some $c$ has $V\'(c) = \\frac{40 - 40}{12} = 0$. The table does not show where the maximum occurs, and derivative values do not need to appear in the table.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },

  // Part 7 — Final Assessment
  {
    id: 'td-ent-7a',
    question: 'A function $f$ is twice differentiable, with $f\'(1) = 3$ and $f\'(4) = -2$. Must the graph of $f$ have a horizontal tangent line somewhere in $(1, 4)$?',
    options: [
      'Yes, by the IVT applied to the continuous derivative $f\'$',
      'Yes, by the MVT applied to $f$ on $[1, 4]$',
      'No, since $f$ might be increasing on all of $[1, 4]$',
      'No, since the data never show $f\'(c) = 0$',
    ],
    correctIndex: 0,
    explanation: 'Because $f$ is twice differentiable, $f\'$ is continuous, and $0$ lies between $3$ and $-2$, so the IVT gives $f\'(c) = 0$ for some $c$ in $(1, 4)$. The MVT would need values of $f$, and a negative $f\'(4)$ rules out $f$ increasing on the whole interval.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'td-ent-7b',
    question: 'Cars enter a garage at rate $E(t)$ cars per hour, and no cars leave. At $t = 0, 2, 3, 7$ hours, $E = 30, 50, 40, 10$, and 120 cars are inside at $t = 0$. Using a left Riemann sum, about how many cars are inside at $t = 7$?',
    options: ['$270$', '$300$', '$360$', '$390$'],
    correctIndex: 3,
    explanation: 'The left sum is $30(2) + 50(1) + 40(4) = 270$ cars entering, so the garage holds about $120 + 270 = 390$. Leaving out the starting 120 gives $270$, and the right sum would give $120 + 180 = 300$.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Approximating Derivatives from Tables' },
    { partNumber: 2, partTitle: 'Riemann Sums from Tables' },
    { partNumber: 3, partTitle: 'Trapezoidal Rule' },
    { partNumber: 4, partTitle: 'MVT & IVT with Tables' },
    { partNumber: 5, partTitle: 'Interpreting f\' from Tables' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
