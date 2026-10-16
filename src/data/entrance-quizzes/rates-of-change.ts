/**
 * Entrance Quiz — Average and Instantaneous Rates of Change — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Average Rate of Change as a Secant Slope
  {
    id: 'roc-ent-1a',
    question: 'What is the average rate of change of $f(x) = x^3 - 2x$ on the interval $[-1, 2]$?',
    options: ['$1$', '$\\tfrac{7}{3}$', '$-1$', '$\\tfrac{1}{3}$'],
    correctIndex: 0,
    explanation: '$f(2) = 8 - 4 = 4$ and $f(-1) = -1 + 2 = 1$, so the rate is $\\tfrac{4 - 1}{2 - (-1)} = \\tfrac{3}{3} = 1$. The value $\\tfrac{7}{3}$ comes from evaluating $f(-1)$ as $-3$.',
    partNumber: 1,
    partTitle: 'Average Rate of Change as a Secant Slope',
  },
  {
    id: 'roc-ent-1b',
    question: 'The average rate of change of $g$ on $[2, 6]$ is $-3$, and $g(2) = 10$. What is $g(6)$?',
    options: ['$7$', '$-2$', '$22$', '$1$'],
    correctIndex: 1,
    explanation: 'The secant slope is $\\tfrac{g(6) - 10}{6 - 2} = -3$, so $g(6) - 10 = -12$ and $g(6) = -2$. The value $7$ applies the rate for only one unit of input, and $22$ reverses its sign.',
    partNumber: 1,
    partTitle: 'Average Rate of Change as a Secant Slope',
  },
  // Part 2 — Units, Signs & Interpretation
  {
    id: 'roc-ent-2a',
    question: '$C(n)$ is the cost, in dollars, of producing $n$ chairs. The average rate of change of $C$ on $[100, 150]$ is $42$. Which is the best interpretation?',
    options: ['Cost increases by a total of \\$42 as production goes from 100 to 150 chairs', 'Cost increases by an average of \\$42 for every 50 additional chairs from 100 to 150', 'Cost increases by an average of \\$42 for each additional chair from 100 to 150 chairs', 'Each chair from 100 to 150 costs an average of \\$42 less than the chair before'],
    correctIndex: 2,
    explanation: 'The units are dollars per chair, so the cost rises by \\$42 per additional chair on average over that interval. A total increase of \\$42 would make the rate $\\tfrac{42}{50}$ dollars per chair.',
    partNumber: 2,
    partTitle: 'Units, Signs & Interpretation',
  },
  {
    id: 'roc-ent-2b',
    question: 'What is the average rate of change of $f(x) = x^2 - 6x$ on $[1, 5]$, and what does it show?',
    options: ['$-1$, because $f$ is decreasing on $[1, 5]$', '$0$, because $f$ is constant on $[1, 5]$', '$-5$, because $f(1) = f(5) = -5$', '$0$, because $f(1) = f(5)$'],
    correctIndex: 3,
    explanation: '$f(5) = -5$ and $f(1) = -5$, so the rate is $\\tfrac{0}{4} = 0$: the endpoints have equal heights. The function is not constant; it dips to $-9$ at $x = 3$.',
    partNumber: 2,
    partTitle: 'Units, Signs & Interpretation',
  },
  // Part 3 — Rate at a Point from Shrinking Intervals
  {
    id: 'roc-ent-3a',
    question: 'Let $g(x) = 2x^2 - x$. Its average rate of change on $[2, 2.1]$ is $7.2$. Using smaller and smaller intervals that start at $x = 2$, which value best estimates the rate of change of $g$ at $x = 2$?',
    options: ['$7.2$', '$7$', '$6.72$', '$0.72$'],
    correctIndex: 1,
    explanation: 'On $[2, 2.01]$ the rate is $\\tfrac{6.0702 - 6}{0.01} = 7.02$, and the values settle toward $7$. The value $7.2$ is from the widest interval, and $0.72$ is a change in output, not a rate.',
    partNumber: 3,
    partTitle: 'Rate at a Point from Shrinking Intervals',
  },
  {
    id: 'roc-ent-3b',
    question: 'Which sequence of intervals could be used to estimate the rate of change of $f$ at $x = 4$?',
    options: ['$[3, 4]$, $[2, 4]$, $[1, 4]$', '$[4, 5]$, $[5, 6]$, $[6, 7]$', '$[4, 4.1]$, $[4, 4.01]$, $[4, 4.001]$', '$[3, 5]$, $[2, 6]$, $[1, 7]$'],
    correctIndex: 2,
    explanation: 'A rate at a point is estimated from intervals that contain the point and shrink toward zero width. The intervals $[3, 4]$, $[2, 4]$, $[1, 4]$ contain $4$ but get wider, as do $[3, 5]$, $[2, 6]$, $[1, 7]$, and $[4, 5]$, $[5, 6]$, $[6, 7]$ move away from $4$.',
    partNumber: 3,
    partTitle: 'Rate at a Point from Shrinking Intervals',
  },
  // Part 4 — Estimating the Rate at a Point from a Table
  {
    id: 'roc-ent-4a',
    question: 'A reaction\'s output $R$ is measured every 3 minutes.\n\n| $t$ (min) | 0 | 3 | 6 | 9 | 12 |\n|---|---|---|---|---|---|\n| $R(t)$ | 40 | 46 | 55 | 70 | 94 |\n\nWhat is the best estimate of the rate of change of $R$ at $t = 6$?',
    options: ['$5$', '$4.5$', '$3$', '$4$'],
    correctIndex: 3,
    explanation: 'With data on both sides, use the nearest bracketing points: $\\tfrac{R(9) - R(3)}{9 - 3} = \\tfrac{70 - 46}{6} = 4$. The forward and backward estimates, $5$ and $3$, use only one side.',
    partNumber: 4,
    partTitle: 'Estimating the Rate at a Point from a Table',
  },
  {
    id: 'roc-ent-4b',
    question: 'A reaction\'s output $R$ is measured every 3 minutes.\n\n| $t$ (min) | 0 | 3 | 6 | 9 | 12 |\n|---|---|---|---|---|---|\n| $R(t)$ | 40 | 46 | 55 | 70 | 94 |\n\nWhat is the best estimate of the rate of change of $R$ at $t = 12$?',
    options: ['$8$', '$6.5$', '$24$', '$4.5$'],
    correctIndex: 0,
    explanation: 'At the last data point only a backward difference is possible, using the nearest point: $\\tfrac{94 - 70}{12 - 9} = 8$. The value $24$ forgets to divide by the change in time, and $4.5$ averages over the whole table.',
    partNumber: 4,
    partTitle: 'Estimating the Rate at a Point from a Table',
  },
  // Part 5 — Comparing Rates at Two Points from a Graph
  {
    id: 'roc-ent-5a',
    question: 'The graph of $f$ passes through $(1.9, 3.62)$ and $(2.1, 4.42)$ near $x = 2$, and through $(4.9, 8.04)$ and $(5.1, 7.96)$ near $x = 5$. Which statement is true?',
    options: ['The rate at $x = 2$ is about $4$; the rate at $x = 5$ is about $0.4$', 'The rate at $x = 2$ is about $0.8$; the rate at $x = 5$ is about $-0.08$', 'The rate at $x = 2$ is about $4$; the rate at $x = 5$ is about $-0.4$', 'The rate at $x = 2$ is about $-4$; the rate at $x = 5$ is about $0.4$'],
    correctIndex: 2,
    explanation: 'Near $x = 2$: $\\tfrac{4.42 - 3.62}{0.2} = 4$. Near $x = 5$: $\\tfrac{7.96 - 8.04}{0.2} = -0.4$, so $f$ is falling slowly there. The values $0.8$ and $-0.08$ are changes in output, not rates.',
    partNumber: 5,
    partTitle: 'Comparing Rates at Two Points from a Graph',
  },
  {
    id: 'roc-ent-5b',
    question: 'On the graph of a function, point $P$ is at the bottom of a valley, point $Q$ is on a steep falling section, and point $R$ is on a gently rising section. Which lists the rates of change at these points from least to greatest?',
    options: ['$P$, $R$, $Q$', '$Q$, $R$, $P$', '$P$, $Q$, $R$', '$Q$, $P$, $R$'],
    correctIndex: 3,
    explanation: 'The steep fall at $Q$ gives a large negative rate, the valley bottom $P$ has a rate near $0$, and the gentle rise at $R$ has a small positive rate. So $Q$, $P$, $R$.',
    partNumber: 5,
    partTitle: 'Comparing Rates at Two Points from a Graph',
  },
  // Part 6 — When the Rate Itself Is Changing
  {
    id: 'roc-ent-6a',
    question: 'Consider the table.\n\n| $x$ | 0 | 2 | 4 | 6 | 8 |\n|---|---|---|---|---|---|\n| $h(x)$ | 50 | 42 | 36 | 32 | 30 |\n\nWhich description fits $h$ on $[0, 8]$?',
    options: ['Decreasing, and its graph is concave up', 'Increasing, and its graph is concave up', 'Decreasing, and its graph is linear', 'Decreasing, and its graph is concave down'],
    correctIndex: 0,
    explanation: 'The rates over successive intervals are $-4, -3, -2, -1$: all negative, so $h$ decreases, and they increase toward $0$, so the graph is concave up. Shrinking drops do not mean concave down.',
    partNumber: 6,
    partTitle: 'When the Rate Itself Is Changing',
  },
  {
    id: 'roc-ent-6b',
    question: 'Over consecutive equal intervals, the average rates of change of $g$ are $-2$, $-5$, $-9$, and $-14$. Which describes $g$ on these intervals?',
    options: ['Decreasing and concave up', 'Decreasing and concave down', 'Increasing and concave up', 'Decreasing and linear'],
    correctIndex: 1,
    explanation: 'Every rate is negative, so $g$ decreases, and the rates themselves keep decreasing ($-2$ to $-14$), so the graph bends downward: concave down.',
    partNumber: 6,
    partTitle: 'When the Rate Itself Is Changing',
  },
  // Part 7 — Mixed Applications & Mastery Check
  {
    id: 'roc-ent-7a',
    question: 'A particle\\\'s position is $s(t) = t^2 + 2t$ meters at $t$ seconds. Using the interval $[2.9, 3.1]$, what is the best estimate of its velocity at $t = 3$?',
    options: ['$1.6$ m/s', '$15$ m/s', '$16$ m/s', '$8$ m/s'],
    correctIndex: 3,
    explanation: '$s(3.1) = 15.81$ and $s(2.9) = 14.21$, so the rate is $\\tfrac{1.6}{0.2} = 8$ meters per second. The value $1.6$ is the change in position, and $15$ is the position $s(3)$.',
    partNumber: 7,
    partTitle: 'Mixed Applications & Mastery Check',
  },
  {
    id: 'roc-ent-7b',
    question: '$T(h)$ is the temperature in degrees Fahrenheit $h$ hours after noon. $T(0) = 60$ and $T(4) = 72$, and the rate of change of $T$ at $h = 4$ is about $-2$ degrees per hour. Which statement is true?',
    options: ['From noon to 4 p.m. it warmed 3 degrees per hour on average, but at 4 p.m. it was cooling', 'From noon to 4 p.m. it warmed 12 degrees per hour on average, and at 4 p.m. it was cooling', 'From noon to 4 p.m. it warmed 3 degrees per hour on average, and at 4 p.m. it was still warming', 'From noon to 4 p.m. it cooled 2 degrees per hour on average, and at 4 p.m. it was cooling'],
    correctIndex: 0,
    explanation: 'The average rate is $\\tfrac{72 - 60}{4} = 3$ degrees per hour, while the negative rate at $h = 4$ means the temperature was falling at that moment. An average over an interval and a rate at a point can have opposite signs.',
    partNumber: 7,
    partTitle: 'Mixed Applications & Mastery Check',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Average Rate of Change as a Secant Slope' },
    { partNumber: 2, partTitle: 'Units, Signs & Interpretation' },
    { partNumber: 3, partTitle: 'Rate at a Point from Shrinking Intervals' },
    { partNumber: 4, partTitle: 'Estimating the Rate at a Point from a Table' },
    { partNumber: 5, partTitle: 'Comparing Rates at Two Points from a Graph' },
    { partNumber: 6, partTitle: 'When the Rate Itself Is Changing' },
    { partNumber: 7, partTitle: 'Mixed Applications & Mastery Check' },
  ]
}
