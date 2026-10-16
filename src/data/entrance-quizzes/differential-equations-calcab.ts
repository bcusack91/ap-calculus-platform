/**
 * Entrance Quiz — Differential Equations — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Introduction to Differential Equations
  {
    id: 'de-ent-1a',
    question: 'A function satisfies $f\'\'(x) = 12x^2$, $f\'(1) = 3$, and $f(0) = 2$. What is $f(1)$?',
    options: ['$2$', '$3$', '$6$', '$0$'],
    correctIndex: 0,
    explanation: 'First $f\'(x) = 4x^3 + C_1$ with $4 + C_1 = 3$, so $C_1 = -1$; then $f(x) = x^4 - x + C_2$ with $C_2 = 2$, so $f(1) = 1 - 1 + 2 = 2$. Skipping $C_1$ gives $3$, using $C_1 = 3$ gives $6$, and skipping $C_2$ gives $0$.',
    partNumber: 1,
    partTitle: 'Introduction to Differential Equations',
  },
  {
    id: 'de-ent-1b',
    question: 'The graph of a solution of $\\frac{dy}{dx} = 3x^2 - 4$ passes through the point $(2, 5)$. Which is this particular solution?',
    options: ['$y = x^3-4x$', '$y = 6x-7$', '$y = x^3-3$', '$y = x^3-4x+5$'],
    correctIndex: 3,
    explanation: 'Integrating gives the general solution $y = x^3 - 4x + C$, and $5 = 8 - 8 + C$ gives $C = 5$. Leaving off $C$ is not a particular solution through $(2, 5)$, $6x - 7$ comes from differentiating instead of integrating, and $x^3 - 3$ drops the antiderivative of $-4$.',
    partNumber: 1,
    partTitle: 'Introduction to Differential Equations',
  },

  // Part 2 — Separation of Variables
  {
    id: 'de-ent-2a',
    question: 'What is the solution of $\\frac{dy}{dx} = y\\cos x$ with $y(0) = 2$?',
    options: ['$y = 2e^{\\sin x}$', '$y = e^{\\sin x}+1$', '$y = 2e^{1-\\cos x}$', '$y = e^{2+\\sin x}$'],
    correctIndex: 0,
    explanation: 'Separating gives $\\frac{dy}{y} = \\cos x\\,dx$, so $\\ln|y| = \\sin x + C$ and $y = Ae^{\\sin x}$; $y(0) = A = 2$. The constant multiplies the exponential rather than adding to it, and $\\cos x$ integrates to $\\sin x$, not $-\\cos x$.',
    partNumber: 2,
    partTitle: 'Separation of Variables',
  },
  {
    id: 'de-ent-2b',
    question: 'What is the particular solution of $\\frac{dy}{dx} = \\frac{x + 1}{y}$ with $y(0) = -2$?',
    options: ['$y = \\sqrt{x^2+2x+4}$', '$y = -\\sqrt{x^2+x+4}$', '$y = -(x^2+2x+4)$', '$y = -\\sqrt{x^2+2x+4}$'],
    correctIndex: 3,
    explanation: 'Separating gives $\\frac{y^2}{2} = \\frac{x^2}{2} + x + C$, and $y(0) = -2$ gives $C = 2$, so $y^2 = x^2 + 2x + 4$. Because $y(0)$ is negative, the solution takes the negative square root.',
    partNumber: 2,
    partTitle: 'Separation of Variables',
  },

  // Part 3 — Slope Fields
  {
    id: 'de-ent-3a',
    question: 'In a slope field, every segment on the line $y = 2$ is horizontal, segments at the same height are parallel, segments above $y = 2$ have positive slope, and segments below $y = 2$ have negative slope. Which equation fits?',
    options: ['$\\frac{dy}{dx} = x-2$', '$\\frac{dy}{dx} = y-2$', '$\\frac{dy}{dx} = 2-y$', '$\\frac{dy}{dx} = (y-2)^2$'],
    correctIndex: 1,
    explanation: 'Equal slopes at equal heights means $\\frac{dy}{dx}$ depends only on $y$, and $y - 2$ is zero on $y = 2$, positive above and negative below. $2 - y$ has the signs reversed, $(y - 2)^2$ is positive below too, and $x - 2$ depends on $x$.',
    partNumber: 3,
    partTitle: 'Slope Fields',
  },
  {
    id: 'de-ent-3b',
    question: 'For $\\frac{dy}{dx} = y^2 - 2y$, how does the solution with $y(0) = 3$ behave for $x > 0$?',
    options: [
      'It increases, moving away from $y = 2$',
      'It decreases and levels off toward $y = 2$',
      'It decreases and levels off toward $y = 0$',
      'It stays at its starting value $y = 3$ forever',
    ],
    correctIndex: 0,
    explanation: 'At $y = 3$ the slope is $9 - 6 = 3 > 0$, so the solution rises, and above the equilibrium $y = 2$ the slope stays positive, so it keeps moving away. It is not constant because $y = 3$ is not a zero of $y^2 - 2y$.',
    partNumber: 3,
    partTitle: 'Slope Fields',
  },

  // Part 4 — Exponential Growth and Decay
  {
    id: 'de-ent-4a',
    question: 'A bacteria culture grows at a rate proportional to its size. It has 200 cells at $t = 0$ and 600 cells at $t = 3$ hours. How many cells are there at $t = 6$ hours?',
    options: ['$1000$', '$1200$', '$5400$', '$1800$'],
    correctIndex: 3,
    explanation: 'Proportional growth means $y = 200e^{kt}$, and the size triples every 3 hours, so at $t = 6$ it is $200 \\cdot 3^2 = 1800$. Adding 400 per 3 hours treats growth as linear ($1000$), and $1200$ doubles instead of tripling.',
    partNumber: 4,
    partTitle: 'Exponential Growth and Decay',
  },
  {
    id: 'de-ent-4b',
    question: 'An object cools according to $\\frac{dT}{dt} = -k(T - 20)$, with $T$ in degrees Celsius and $t$ in minutes. When $T = 100$, $\\frac{dT}{dt} = -4$. What is $\\frac{dT}{dt}$ when $T = 60$?',
    options: ['$-2.4$', '$-4$', '$-2$', '$-0.05$'],
    correctIndex: 2,
    explanation: 'At $T = 100$, $-k(80) = -4$, so $k = 0.05$; at $T = 60$, $\\frac{dT}{dt} = -0.05(40) = -2$. The rate is proportional to the difference from the room temperature, not to $T$ itself (which would give $-2.4$), and $0.05$ is the constant $k$, not the rate.',
    partNumber: 4,
    partTitle: 'Exponential Growth and Decay',
  },

  // Part 5 — More Separation of Variables Practice
  {
    id: 'de-ent-5a',
    question: 'What is the solution of $\\frac{dy}{dx} = \\frac{y^2}{x^2}$ with $y(1) = \\frac{1}{2}$?',
    options: ['$y = \\frac{x}{x+1}$', '$y = \\frac{x}{3x-1}$', '$y = \\frac{1}{x+1}$', '$y = \\frac{x^2}{x+1}$'],
    correctIndex: 0,
    explanation: 'Separating gives $-\\frac{1}{y} = -\\frac{1}{x} + C$; $y(1) = \\frac{1}{2}$ gives $-2 = -1 + C$, so $C = -1$ and $\\frac{1}{y} = \\frac{1}{x} + 1 = \\frac{x + 1}{x}$. A sign slip in either antiderivative gives $\\frac{x}{3x - 1}$.',
    partNumber: 5,
    partTitle: 'More Separation of Variables Practice',
  },
  {
    id: 'de-ent-5b',
    question: 'The particular solution of $\\frac{dy}{dx} = xy^2$ with $y(0) = \\frac{1}{2}$ is defined on which interval?',
    options: ['$x\\neq\\pm 2$', '$-2\\le x\\le 2$', 'All real numbers', '$-2<x<2$'],
    correctIndex: 3,
    explanation: 'Separating gives $-\\frac{1}{y} = \\frac{x^2}{2} - 2$, so $y = \\frac{2}{4 - x^2}$, which is undefined at $x = \\pm 2$. The solution must be continuous on an interval containing $x = 0$, so it is $-2 < x < 2$; the endpoints are excluded.',
    partNumber: 5,
    partTitle: 'More Separation of Variables Practice',
  },

  // Part 6 — AP-Style Workshop
  {
    id: 'de-ent-6a',
    question: 'Let $y = f(x)$ be the solution of $\\frac{dy}{dx} = 2x - y$ with $f(1) = 3$. What is the tangent-line approximation of $f(1.2)$?',
    options: ['$3.2$', '$2.8$', '$2.4$', '$2.0$'],
    correctIndex: 1,
    explanation: 'The slope at $(1, 3)$ is $2(1) - 3 = -1$, so $f(1.2) \\approx 3 + (-1)(0.2) = 2.8$. A sign slip gives $3.2$, using a slope of $-3$ gives $2.4$, and $2.0$ uses a step of $1$ instead of $0.2$.',
    partNumber: 6,
    partTitle: 'AP-Style Workshop',
  },
  {
    id: 'de-ent-6b',
    question: 'Let $y = f(x)$ be the solution of $\\frac{dy}{dx} = 2x - y$ with $f(1) = 3$. Is the tangent line at $x = 1$ an overestimate or an underestimate of $f$ for $x$ near $1$, and why?',
    options: [
      'Underestimate, since $\\frac{d^2y}{dx^2} = 3$ there',
      'Overestimate, since $\\frac{d^2y}{dx^2} = 3$ there',
      'Overestimate, since $\\frac{dy}{dx} = -1$ there',
      'Underestimate, since $f(1) = 3 > 0$',
    ],
    correctIndex: 0,
    explanation: 'Differentiating the equation gives $\\frac{d^2y}{dx^2} = 2 - \\frac{dy}{dx} = 2 - (2x - y)$, which is $3 > 0$ at $(1, 3)$, so $f$ is concave up and the tangent line lies below it. A negative slope only says $f$ is decreasing, and the sign of $f$ says nothing about concavity.',
    partNumber: 6,
    partTitle: 'AP-Style Workshop',
  },

  // Part 7 — Comprehensive Assessment
  {
    id: 'de-ent-7a',
    question: 'A drug leaves the bloodstream at a rate proportional to the amount present. There are 50 mg at $t = 0$ and 20 mg at $t = 4$ hours. How many milligrams remain at $t = 8$ hours?',
    options: ['$-10$', '$10$', '$16$', '$8$'],
    correctIndex: 3,
    explanation: 'Proportional decay keeps the same ratio over equal times: each 4 hours multiplies the amount by $\\frac{20}{50} = 0.4$, so $20 \\cdot 0.4 = 8$ mg. A linear loss of 30 mg per 4 hours gives $-10$, and halving $20$ assumes a half-life of 4 hours.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
  {
    id: 'de-ent-7b',
    question: 'A quantity satisfies $\\frac{dW}{dt} = -0.5(W - 40)$ with $W(0) = 100$. Which describes $W$ for $t > 0$?',
    options: [
      '$W$ increases and is concave down',
      '$W$ increases and is concave up',
      '$W$ decreases and is concave up',
      '$W$ decreases and is concave down',
    ],
    correctIndex: 2,
    explanation: 'Since $W > 40$, $\\frac{dW}{dt} < 0$, so $W$ decreases toward $40$. Also $\\frac{d^2W}{dt^2} = -0.5\\frac{dW}{dt} = 0.25(W - 40) > 0$, so the graph is concave up.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction to Differential Equations' },
    { partNumber: 2, partTitle: 'Separation of Variables' },
    { partNumber: 3, partTitle: 'Slope Fields' },
    { partNumber: 4, partTitle: 'Exponential Growth and Decay' },
    { partNumber: 5, partTitle: 'More Separation of Variables Practice' },
    { partNumber: 6, partTitle: 'AP-Style Workshop' },
    { partNumber: 7, partTitle: 'Comprehensive Assessment' },
  ]
}
