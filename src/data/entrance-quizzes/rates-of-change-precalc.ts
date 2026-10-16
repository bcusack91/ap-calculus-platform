/**
 * Entrance Quiz — Rates of Change — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Average Rate of Change
  {
    id: 'rcp-ent-1a',
    question: 'What is the average rate of change of $f(x) = 2x^2 + x$ on the interval $[1, 3]$?',
    options: [
      '$9$',
      '$18$',
      '$8$',
      '$4.5$',
    ],
    correctIndex: 0,
    explanation: '$f(3) = 18 + 3 = 21$ and $f(1) = 2 + 1 = 3$, so the average rate of change is $\\frac{21 - 3}{3 - 1} = \\frac{18}{2} = 9$. Forgetting to divide by the interval length gives $18$.',
    partNumber: 1,
    partTitle: 'Average Rate of Change',
  },
  {
    id: 'rcp-ent-1b',
    question: 'A function $f$ has $f(-2) = 7$ and $f(4) = -5$. Which statement must be true?',
    options: [
      '$f$ is decreasing at every single point of the interval $[-2, 4]$',
      'The average rate of change of $f$ on $[-2, 4]$ is $-12$',
      'The average rate of change of $f$ on $[-2, 4]$ is $-2$',
      'The average rate of change of $f$ on $[-2, 4]$ is $-\\frac{1}{2}$',
    ],
    correctIndex: 2,
    explanation: 'The average rate of change is $\\frac{f(4) - f(-2)}{4 - (-2)} = \\frac{-12}{6} = -2$. The value $-12$ is the total change, not the rate, and two endpoint values say nothing about every point in between.',
    partNumber: 1,
    partTitle: 'Average Rate of Change',
  },

  // Part 2 — Secant Lines
  {
    id: 'rcp-ent-2a',
    question: 'A tank holds $V(t)$ liters at time $t$ minutes, with $V(1) = 150$ and $V(5) = 90$. Which is the secant line of $V$ on $[1, 5]$?',
    options: [
      '$y = -15t + 165$',
      '$y = -15t + 150$',
      '$y = 15t + 135$',
      '$y = -60t + 210$',
    ],
    correctIndex: 0,
    explanation: 'The slope is $\\frac{90 - 150}{5 - 1} = -15$, and the line passes through $(1, 150)$: $y = 150 - 15(t - 1) = -15t + 165$. Check: at $t = 5$ it gives $90$. Using $150$ as the $y$-intercept ignores that the point is at $t = 1$.',
    partNumber: 2,
    partTitle: 'Secant Lines',
  },
  {
    id: 'rcp-ent-2b',
    question: 'The secant line of $g$ on $[2, 6]$ has slope $4.5$, and $g(2) = -3$. What is $g(6)$?',
    options: ['$-21$', '$1.5$', '$18$', '$15$'],
    correctIndex: 3,
    explanation: 'The secant slope is the average rate of change, so the total change is $4.5 \\cdot (6 - 2) = 18$. Then $g(6) = -3 + 18 = 15$. Reporting $18$ forgets the starting value.',
    partNumber: 2,
    partTitle: 'Secant Lines',
  },

  // Part 3 — Rate of Change at a Point
  {
    id: 'rcp-ent-3a',
    question: 'A function has $f(1.9) = 7.22$, $f(2) = 8$ and $f(2.1) = 8.82$. Using the interval $[1.9, 2.1]$, what is the best estimate of the rate of change of $f$ at $x = 2$?',
    options: ['$1.6$', '$7.8$', '$8.2$', '$8$'],
    correctIndex: 3,
    explanation: '$\\frac{8.82 - 7.22}{2.1 - 1.9} = \\frac{1.6}{0.2} = 8$. The value $1.6$ forgets to divide by the interval width, and $7.8$ and $8.2$ use only one side of $x = 2$.',
    partNumber: 3,
    partTitle: 'Rate of Change at a Point',
  },
  {
    id: 'rcp-ent-3b',
    question: 'The depth $D$ of a lake, in feet, has a rate of change of about $-0.4$ feet per day at $t = 10$ days. Which is the best interpretation?',
    options: [
      'On day $10$, the lake is about $0.4$ feet deep',
      'Around day $10$, the depth is decreasing by about $0.4$ feet per day',
      'From day $0$ to day $10$, the depth fell a total of $0.4$ feet',
      'Around day $10$, the depth rises about $0.4$ feet per day',
    ],
    correctIndex: 1,
    explanation: 'A rate at a point describes how fast the output is changing right then; the negative sign means the depth is going down. It is not a depth, and it does not describe the total change since day $0$.',
    partNumber: 3,
    partTitle: 'Rate of Change at a Point',
  },

  // Part 4 — Concavity and Changing Rates
  {
    id: 'rcp-ent-4a',
    question: 'A function $g$ has values $3, 4, 7, 12, 19$ at $x = 0, 1, 2, 3, 4$. Which description fits $g$ on $[0, 4]$?',
    options: [
      'Linear, since every output is larger than the last',
      'Concave down, since the rates rise by $2$',
      'Quadratic and concave up, since the rates rise by $2$',
      'Exponential, since the rates double',
    ],
    correctIndex: 2,
    explanation: 'The unit-interval average rates are $1, 3, 5, 7$. They change by the same amount ($2$) each time, which is the quadratic pattern, and because they increase the graph is concave up.',
    partNumber: 4,
    partTitle: 'Concavity and Changing Rates',
  },
  {
    id: 'rcp-ent-4b',
    question: 'A cooling cup of coffee has average rates of change of $-6$, $-4$, $-3$ and $-2.5$ degrees per minute over four successive minutes. Which describes the temperature graph over that time?',
    options: [
      'Decreasing and concave down',
      'Increasing and concave down',
      'Decreasing and linear throughout',
      'Decreasing and concave up',
    ],
    correctIndex: 3,
    explanation: 'The rates are negative, so the temperature decreases. As signed numbers the rates increase ($-6 < -4 < -3 < -2.5$), so the graph is concave up: the temperature is dropping more and more slowly.',
    partNumber: 4,
    partTitle: 'Concavity and Changing Rates',
  },

  // Part 5 — Applications
  {
    id: 'rcp-ent-5a',
    question: 'A ball\'s height is $s(t) = -16t^2 + 80t + 6$ feet at $t$ seconds. What is its average velocity on $[1, 3]$?',
    options: ['$32$ ft/s', '$16$ ft/s', '$-16$ ft/s', '$34$ ft/s'],
    correctIndex: 1,
    explanation: '$s(1) = 70$ and $s(3) = 102$, so the average velocity is $\\frac{102 - 70}{3 - 1} = 16$ ft/s. Forgetting to divide by $2$ seconds gives $32$.',
    partNumber: 5,
    partTitle: 'Applications',
  },
  {
    id: 'rcp-ent-5b',
    question: '$C(x)$ is the cost, in dollars, of producing $x$ shirts. The average rate of change of $C$ on $[100, 300]$ is $4.25$. Which is the best interpretation?',
    options: [
      'Producing $300$ shirts costs \\$4.25 more than producing $100$ shirts',
      'Each shirt between the $100$th and $300$th costs exactly \\$4.25 to make',
      'From $100$ to $300$ shirts the cost rose by \\$4.25 per additional shirt on average',
      'The average cost per shirt is \\$4.25 when $200$ shirts are made',
    ],
    correctIndex: 2,
    explanation: 'An average rate of change is the change in output per unit of input over the interval: dollars per shirt from $100$ to $300$ shirts. The total increase is $4.25 \\cdot 200 = \\$850$, and the rate does not promise the same cost for every shirt.',
    partNumber: 5,
    partTitle: 'Applications',
  },

  // Part 6 — Extrema & Inflection Points
  {
    id: 'rcp-ent-6a',
    question: 'A polynomial $p$ has values $4, 9, 10, 8, 5, 3, 4$ at $x = 0, 1, 2, 3, 4, 5, 6$. Near which $x$-value does the graph have a point of inflection?',
    options: ['$x = 2$', '$x = 5$', '$x = 3.5$', '$x = 1$'],
    correctIndex: 2,
    explanation: 'The unit-interval rates are $5, 1, -2, -3, -2, 1$. They decrease until the interval $[3, 4]$ and increase after it, so the concavity switches from down to up near $x = 3.5$. The values $x = 2$ and $x = 5$ are near the local maximum and minimum.',
    partNumber: 6,
    partTitle: 'Extrema & Inflection Points',
  },
  {
    id: 'rcp-ent-6b',
    question: 'On the restricted domain $[0, 4]$, what are the global maximum and global minimum of $f(x) = -x^2 + 6x - 5$?',
    options: [
      'Maximum $4$ at $x = 3$; minimum $-5$ at $x = 0$',
      'Maximum $4$ at $x = 3$; minimum $3$ at $x = 4$',
      'Maximum $4$ at $x = 3$; no minimum',
      'Maximum $3$ at $x = 4$; minimum $-5$ at $x = 0$',
    ],
    correctIndex: 0,
    explanation: 'The vertex is at $x = 3$, giving the global maximum $f(3) = 4$. The global minimum must be at an included endpoint: $f(0) = -5$ and $f(4) = 3$, so the minimum is $-5$ at $x = 0$.',
    partNumber: 6,
    partTitle: 'Extrema & Inflection Points',
  },

  // Part 7 — Review & Applications
  {
    id: 'rcp-ent-7a',
    question: 'A quantity $Q$ is modeled by a quadratic function of time $t$ in hours. Its average rates of change on $[0, 2]$, $[2, 4]$ and $[4, 6]$ are $14$, $10$ and $6$ units per hour. If $Q(6) = 50$, what is $Q(8)$?',
    options: ['$54$', '$52$', '$46$', '$62$'],
    correctIndex: 0,
    explanation: 'For a quadratic, average rates over equal-length intervals change by a constant amount, here $-4$, so the rate on $[6, 8]$ is $2$ units per hour. Over 2 hours that adds $4$: $Q(8) = 54$. Adding the rate once gives $52$.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'rcp-ent-7b',
    question: 'A plant\'s height $h$ (cm) is $1, 4, 9, 13, 15$ at $t = 0, 1, 2, 3, 4$ weeks. Which describes $h$ on $[0, 4]$?',
    options: [
      'Increasing throughout; concave down then concave up',
      'Increasing throughout; concave up then concave down',
      'Increasing until $t = 2$, then decreasing',
      'Increasing throughout; concave up on all of $[0, 4]$',
    ],
    correctIndex: 1,
    explanation: 'The weekly rates are $3, 5, 4, 2$: all positive, so $h$ always increases. The rates first increase and then decrease, so the graph is concave up and then concave down, with a point of inflection near $t = 1.5$.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Average Rate of Change' },
    { partNumber: 2, partTitle: 'Secant Lines' },
    { partNumber: 3, partTitle: 'Rate of Change at a Point' },
    { partNumber: 4, partTitle: 'Concavity and Changing Rates' },
    { partNumber: 5, partTitle: 'Applications' },
    { partNumber: 6, partTitle: 'Extrema & Inflection Points' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
