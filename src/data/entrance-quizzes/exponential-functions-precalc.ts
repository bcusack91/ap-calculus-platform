/**
 * Entrance Quiz — Exponential Functions — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Exponential Functions — Core Form & Growth vs Decay
  {
    id: 'exf-ent-1a',
    question: 'A function is evaluated at $x = 0, 1, 2, 3$. Which list of outputs could come from an exponential function?',
    options: ['$48, 36, 27, 20.25$', '$48, 36, 27, 21$', '$48, 24, 0, -24$', '$48, 36, 24, 12$'],
    correctIndex: 0,
    explanation: 'Each output of $48, 36, 27, 20.25$ is $0.75$ times the previous one, a constant ratio. The list $48, 36, 24, 12$ has a constant difference (linear), and $48, 36, 27, 21$ has neither.',
    partNumber: 1,
    partTitle: 'Exponential Functions — Core Form & Growth vs Decay',
  },
  {
    id: 'exf-ent-1b',
    question: 'An exponential function $f(x) = a \\cdot b^x$ with $b > 0$ has $f(1) = 18$ and $f(3) = 8$. What is $b$?',
    options: ['$\\tfrac{4}{9}$', '$\\tfrac{2}{3}$', '$\\tfrac{3}{2}$', '$-5$'],
    correctIndex: 1,
    explanation: 'Two steps multiply the output by $b^2 = \\tfrac{8}{18} = \\tfrac{4}{9}$, so $b = \\tfrac{2}{3}$. The value $\\tfrac{4}{9}$ is the two-step factor, and $-5$ is a constant difference per step, which a base cannot be.',
    partNumber: 1,
    partTitle: 'Exponential Functions — Core Form & Growth vs Decay',
  },
  // Part 2 — Transformations of Exponential Graphs
  {
    id: 'exf-ent-2a',
    question: 'What is the $y$-intercept of $g(x) = -3 \\cdot 2^{x - 1} + 6$?',
    options: ['$3$', '$0$', '$4.5$', '$7.5$'],
    correctIndex: 2,
    explanation: '$g(0) = -3 \\cdot 2^{-1} + 6 = -1.5 + 6 = 4.5$. The value $3$ ignores the horizontal shift, and $0$ uses $2^{1}$ instead of $2^{-1}$.',
    partNumber: 2,
    partTitle: 'Transformations of Exponential Graphs',
  },
  {
    id: 'exf-ent-2b',
    question: 'Which change to $f(x) = 3^x$ moves its horizontal asymptote?',
    options: ['Replacing $x$ with $-x$ in the input', 'Multiplying every output by $4$', 'Replacing $x$ with $x - 4$', 'Adding $4$ to every output'],
    correctIndex: 3,
    explanation: 'Adding 4 to every output shifts the graph up 4, so the asymptote moves from $y = 0$ to $y = 4$. Stretching, horizontal shifts, and reflecting across the $y$-axis all leave $y = 0$ in place.',
    partNumber: 2,
    partTitle: 'Transformations of Exponential Graphs',
  },
  // Part 3 — Compound Interest & Continuous Growth
  {
    id: 'exf-ent-3a',
    question: '\\$3,000 is invested at $6\\%$ annual interest compounded monthly. Which expression gives the balance after $5$ years?',
    options: ['$3000(1.06)^{60}$', '$3000(1.005)^{60}$', '$3000(1.005)^{5}$', '$3000(1.06)^{5}$'],
    correctIndex: 1,
    explanation: 'Monthly compounding uses the rate per month, $\\tfrac{0.06}{12} = 0.005$, over $12 \\cdot 5 = 60$ months. The expression $3000(1.06)^{60}$ applies the full annual rate every month.',
    partNumber: 3,
    partTitle: 'Compound Interest & Continuous Growth',
  },
  {
    id: 'exf-ent-3b',
    question: 'Which expression is equivalent to $500(1.08)^t$ written with base $e$?',
    options: ['$500e^{0.08t}$', '$500e^{1.08t}$', '$500e^{t\\ln 1.08}$', '$500(\\ln 1.08)^t$'],
    correctIndex: 2,
    explanation: 'Since $1.08 = e^{\\ln 1.08}$, $500(1.08)^t = 500e^{t \\ln 1.08}$, about $500e^{0.077t}$. The form $500e^{0.08t}$ uses the percent rate, which grows slightly faster than $8\\%$ per year.',
    partNumber: 3,
    partTitle: 'Compound Interest & Continuous Growth',
  },
  // Part 4 — Half-Life & Exponential Decay
  {
    id: 'exf-ent-4a',
    question: 'A medicine has a half-life of $6$ hours. A patient takes $320$ mg. How much remains after $18$ hours?',
    options: ['$160$ mg', '$80$ mg', '$106.7$ mg', '$40$ mg'],
    correctIndex: 3,
    explanation: 'Eighteen hours is three half-lives, so the amount is halved three times: $320 \\cdot \\left(\\tfrac{1}{2}\\right)^3 = 40$ mg. Dividing by 3 treats the decay as splitting into thirds.',
    partNumber: 4,
    partTitle: 'Half-Life & Exponential Decay',
  },
  {
    id: 'exf-ent-4b',
    question: 'A sample decays according to $A(t) = 900e^{-0.035t}$, with $t$ in years. What is its half-life?',
    options: ['$\\dfrac{\\ln 2}{0.035}$ years', '$\\dfrac{\\ln 450}{0.035}$ years', '$\\dfrac{1}{2(0.035)}$ years', '$\\dfrac{0.035}{\\ln 2}$ years'],
    correctIndex: 0,
    explanation: 'Set $e^{-0.035t} = \\tfrac{1}{2}$: $-0.035t = -\\ln 2$, so $t = \\tfrac{\\ln 2}{0.035}$ years. The initial amount does not affect the half-life, so $\\ln 450$ does not belong.',
    partNumber: 4,
    partTitle: 'Half-Life & Exponential Decay',
  },
  // Part 5 — Solving Exponential Equations with Logarithms
  {
    id: 'exf-ent-5a',
    question: 'Solve $9^{x + 1} = 27^{x}$.',
    options: ['$x = -2$', '$x = \\tfrac{1}{2}$', '$x = 2$', '$x = 4$'],
    correctIndex: 2,
    explanation: 'Rewrite both sides with base 3: $3^{2x + 2} = 3^{3x}$, so $2x + 2 = 3x$ and $x = 2$. Check: $9^3 = 729 = 27^2$.',
    partNumber: 5,
    partTitle: 'Solving Exponential Equations with Logarithms',
  },
  {
    id: 'exf-ent-5b',
    question: 'Solve $4 \\cdot 3^{2x} = 100$.',
    options: ['$x = \\dfrac{\\ln 25}{\\ln 3}$', '$x = \\dfrac{\\ln 100}{2\\ln 12}$', '$x = \\dfrac{\\ln 25}{2\\ln 9}$', '$x = \\dfrac{\\ln 5}{\\ln 3}$'],
    correctIndex: 3,
    explanation: 'Divide by 4 first: $3^{2x} = 25$, so $2x = \\tfrac{\\ln 25}{\\ln 3}$ and $x = \\tfrac{\\ln 25}{2\\ln 3} = \\tfrac{\\ln 5}{\\ln 3}$. Combining $4 \\cdot 3$ into $12$ ignores the order of operations.',
    partNumber: 5,
    partTitle: 'Solving Exponential Equations with Logarithms',
  },
  // Part 6 — Data Fitting & Exponential Regression
  {
    id: 'exf-ent-6a',
    question: 'Which exponential function passes through $(2, 18)$ and $(5, 486)$?',
    options: ['$y = 2 \\cdot 3^x$', '$y = 2 \\cdot 27^x$', '$y = 6 \\cdot 3^x$', '$y = 18 \\cdot 3^x$'],
    correctIndex: 0,
    explanation: 'Three steps multiply the output by $\\tfrac{486}{18} = 27$, so $b^3 = 27$ and $b = 3$; then $a = \\tfrac{18}{3^2} = 2$. The base 27 is the three-step factor.',
    partNumber: 6,
    partTitle: 'Data Fitting & Exponential Regression',
  },
  {
    id: 'exf-ent-6b',
    question: 'A plot of $\\ln y$ against $x$ is a line with slope $-0.2$ and vertical intercept $3$. Which model fits the original data?',
    options: ['$y = 3 \\cdot e^{-0.2x}$', '$y = e^{3} \\cdot e^{-0.2x}$', '$y = e^{3} \\cdot (-0.2)^x$', '$y = -0.2 \\cdot e^{3x}$'],
    correctIndex: 1,
    explanation: 'From $\\ln y = 3 - 0.2x$, exponentiate: $y = e^{3} \\cdot e^{-0.2x}$, about $20.1(0.819)^x$. The intercept of the log plot is $\\ln a$, not $a$, so $3e^{-0.2x}$ is wrong.',
    partNumber: 6,
    partTitle: 'Data Fitting & Exponential Regression',
  },
  // Part 7 — Exponential Functions — Full Synthesis
  {
    id: 'exf-ent-7a',
    question: 'A drug\\\'s concentration decays exponentially from $200$ mg/L at $t = 0$ to $50$ mg/L at $t = 4$ hours. What is its half-life?',
    options: ['$4$ hours', '$8$ hours', '$2.67$ hours', '$2$ hours'],
    correctIndex: 3,
    explanation: 'Falling from 200 to 50 is two halvings (200 to 100 to 50) in 4 hours, so each half-life is 2 hours. The value $2.67$ hours assumes a linear drop.',
    partNumber: 7,
    partTitle: 'Exponential Functions — Full Synthesis',
  },
  {
    id: 'exf-ent-7b',
    question: 'A bacteria culture grows exponentially from $500$ to $4{,}500$ in $6$ hours. Which function gives the population $t$ hours after it was $500$?',
    options: ['$N(t) = 500 \\cdot 3^{t/3}$', '$N(t) = 500 \\cdot 9^{t}$', '$N(t) = 500 \\cdot 9^{6t}$', '$N(t) = 500 \\cdot 1.5^{t}$'],
    correctIndex: 0,
    explanation: 'The population is multiplied by 9 every 6 hours, so $N(t) = 500 \\cdot 9^{t/6} = 500 \\cdot 3^{t/3}$. The form $500 \\cdot 9^t$ multiplies by 9 every hour, and $1.5^t$ divides the 6-hour factor by 6 instead of taking a sixth root.',
    partNumber: 7,
    partTitle: 'Exponential Functions — Full Synthesis',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Exponential Functions — Core Form & Growth vs Decay' },
    { partNumber: 2, partTitle: 'Transformations of Exponential Graphs' },
    { partNumber: 3, partTitle: 'Compound Interest & Continuous Growth' },
    { partNumber: 4, partTitle: 'Half-Life & Exponential Decay' },
    { partNumber: 5, partTitle: 'Solving Exponential Equations with Logarithms' },
    { partNumber: 6, partTitle: 'Data Fitting & Exponential Regression' },
    { partNumber: 7, partTitle: 'Exponential Functions — Full Synthesis' },
  ]
}
