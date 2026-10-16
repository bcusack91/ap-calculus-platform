/**
 * Entrance Quiz — Piecewise Functions — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Anatomy & Notation
  {
    id: 'pwf-ent-1a',
    question: 'A piecewise function with two pieces must be defined for every real number. Which pair of conditions can its two pieces use?',
    options: ['$x < 2$ and $x \\ge 2$', '$x \\le 2$ and $x \\ge 2$', '$x < 2$ and $x > 2$', '$x \\le 2$ and $x \\ge 3$'],
    correctIndex: 0,
    explanation: 'The conditions $x < 2$ and $x \\ge 2$ cover every real number with no overlap, so each input gets exactly one rule. The pair $x \\le 2$ and $x \\ge 2$ both claim $x = 2$, and the other two pairs leave inputs uncovered.',
    partNumber: 1,
    partTitle: 'Anatomy & Notation',
  },
  {
    id: 'pwf-ent-1b',
    question: 'For $f(x) = \\begin{cases} x^2 & x < -1 \\\\ 4 & -1 \\le x \\le 2 \\\\ 1 - x & x > 2 \\end{cases}$, which inputs are sent to the constant rule $4$?',
    options: ['$-1 < x < 2$', '$-1 \\le x \\le 2$', '$x \\le 2$', '$x \\ge -1$'],
    correctIndex: 1,
    explanation: 'The middle condition reads $-1 \\le x \\le 2$, so both endpoints are included. Inputs below $-1$ use $x^2$ and inputs above $2$ use $1 - x$.',
    partNumber: 1,
    partTitle: 'Anatomy & Notation',
  },
  // Part 2 — Evaluating Piecewise Functions
  {
    id: 'pwf-ent-2a',
    question: 'Let $g(x) = \\begin{cases} 2x + 1 & x < 2 \\\\ x^2 - 1 & 2 \\le x < 4 \\\\ 3x & x \\ge 4 \\end{cases}$. What is $g(2) + g(4)$?',
    options: ['$17$', '$18$', '$15$', '$20$'],
    correctIndex: 2,
    explanation: 'At $x = 2$ the condition $2 \\le x < 4$ applies, so $g(2) = 3$; at $x = 4$ the condition $x \\ge 4$ applies, so $g(4) = 12$. The sum is $15$; the other totals use a neighboring rule at one or both boundaries.',
    partNumber: 2,
    partTitle: 'Evaluating Piecewise Functions',
  },
  {
    id: 'pwf-ent-2b',
    question: 'Let $f(x) = \\begin{cases} x^2 - 4 & x \\le 1 \\\\ 3x - 1 & x > 1 \\end{cases}$. For which values of $x$ is $f(x) = 5$?',
    options: ['$x = 3$ and $x = 2$', '$x = -3$ only', '$x = 2$ only', '$x = -3$ and $x = 2$'],
    correctIndex: 3,
    explanation: 'From $x^2 - 4 = 5$, $x = \\pm 3$, but only $x = -3$ satisfies $x \\le 1$; from $3x - 1 = 5$, $x = 2$, which satisfies $x > 1$. Each solution must be checked against its piece\\\'s condition.',
    partNumber: 2,
    partTitle: 'Evaluating Piecewise Functions',
  },
  // Part 3 — Graphing & Open/Closed Dots
  {
    id: 'pwf-ent-3a',
    question: 'Let $h(x) = \\begin{cases} x + 1 & x < 2 \\\\ 5 - 2x & x \\ge 2 \\end{cases}$. How is the graph of $h$ drawn at $x = 2$?',
    options: ['Closed dot at $(2, 3)$, open dot at $(2, 1)$', 'Open dot at $(2, 3)$, closed dot at $(2, 1)$', 'Open dots at both $(2, 3)$ and $(2, 1)$', 'Closed dots at both $(2, 3)$ and $(2, 1)$'],
    correctIndex: 1,
    explanation: 'The left piece stops at height $2 + 1 = 3$ but excludes $x = 2$, so that end is open; the right piece includes $x = 2$ and gives $5 - 4 = 1$, a closed dot. The graph jumps there.',
    partNumber: 3,
    partTitle: 'Graphing & Open/Closed Dots',
  },
  {
    id: 'pwf-ent-3b',
    question: 'The graph of $f$ has two pieces: a segment from a closed dot at $(-2, 1)$ to an open dot at $(1, 4)$, and a horizontal ray that starts at a closed dot at $(1, 2)$ and extends to the right. What is $f(1)$?',
    options: ['$3$', '$4$', '$2$', '$1$'],
    correctIndex: 2,
    explanation: 'The function value is the closed dot, $(1, 2)$, so $f(1) = 2$. The open dot at $(1, 4)$ only marks where the segment stops.',
    partNumber: 3,
    partTitle: 'Graphing & Open/Closed Dots',
  },
  // Part 4 — Building Piecewise Models
  {
    id: 'pwf-ent-4a',
    question: 'A phone plan costs \\$30 per month for up to $5$ GB of data, plus \\$12 for each GB beyond $5$. Which function gives the monthly cost for $g$ GB?',
    options: ['$C(g) = 30$ for $g \\le 5$; $30 + 12g$ for $g > 5$', '$C(g) = 30$ for $g < 5$; $30 + 12g$ for $g \\ge 5$', '$C(g) = 30$ for $g \\le 5$; $12(g - 5)$ for $g > 5$', '$C(g) = 30$ for $g \\le 5$; $30 + 12(g - 5)$ for $g > 5$'],
    correctIndex: 3,
    explanation: '"Up to $5$" includes $5$, and the \\$12 charge applies only to the $g - 5$ GB past $5$, on top of the \\$30 base. The rule $30 + 12g$ also charges for the first $5$ GB, and $12(g - 5)$ drops the base.',
    partNumber: 4,
    partTitle: 'Building Piecewise Models',
  },
  {
    id: 'pwf-ent-4b',
    question: 'A tank\'s water volume $W$ (liters) is recorded every 4 minutes.\n\n| $t$ (min) | 0 | 4 | 8 | 12 | 16 |\n|---|---|---|---|---|---|\n| $W(t)$ | 10 | 22 | 34 | 30 | 26 |\n\nThe data are linear on $0 \\le t \\le 8$ and linear on $8 \\le t \\le 16$. Which expression models $W$ for $8 \\le t \\le 16$?',
    options: ['$42 - t$', '$34 - t$', '$34 - 4(t - 8)$', '$10 + 3t$'],
    correctIndex: 0,
    explanation: 'After $t = 8$ the volume drops $4$ liters every $4$ minutes, a rate of $-1$ per minute starting from $34$: $34 - (t - 8) = 42 - t$. The form $34 - t$ forgets that the piece starts at $t = 8$, and $34 - 4(t - 8)$ uses the change per row as the rate.',
    partNumber: 4,
    partTitle: 'Building Piecewise Models',
  },
  // Part 5 — Domain & Range
  {
    id: 'pwf-ent-5a',
    question: 'What is the range of $f(x) = \\begin{cases} x^2 & -2 \\le x < 1 \\\\ 4 - x & 1 \\le x \\le 3 \\end{cases}$?',
    options: ['$[0, 1) \\cup [1, 3]$', '$[-2, 3]$', '$[0, 4]$', '$(1, 4] \\cup [1, 3]$'],
    correctIndex: 2,
    explanation: 'On $[-2, 1)$, $x^2$ takes every value from $0$ (at $x = 0$) up to $4$ (at $x = -2$); on $[1, 3]$, $4 - x$ gives $[1, 3]$. The union is $[0, 4]$; $[-2, 3]$ is the domain.',
    partNumber: 5,
    partTitle: 'Domain & Range',
  },
  {
    id: 'pwf-ent-5b',
    question: 'What is the domain of $f(x) = \\begin{cases} \\sqrt{x} & 0 \\le x \\le 4 \\\\ 6 - x & x > 5 \\end{cases}$?',
    options: ['$[0, 4] \\cup [5, \\infty)$', '$(0, 4) \\cup (5, \\infty)$', '$[0, \\infty)$', '$[0, 4] \\cup (5, \\infty)$'],
    correctIndex: 3,
    explanation: 'The domain is the union of the condition intervals: $[0, 4]$ and $(5, \\infty)$. Inputs between $4$ and $5$, including $5$, belong to neither piece, and $0$ and $4$ are included because the condition $0 \\le x \\le 4$ uses $\\le$ at both ends.',
    partNumber: 5,
    partTitle: 'Domain & Range',
  },
  // Part 6 — Absolute Value & Step Functions
  {
    id: 'pwf-ent-6a',
    question: 'Written as a piecewise function, $g(x) = \\lvert 2x - 6 \\rvert + 1$ follows which rule when $x < 3$?',
    options: ['$7 - 2x$', '$-2x - 5$', '$5 - 2x$', '$2x - 5$'],
    correctIndex: 0,
    explanation: 'For $x < 3$ the inside $2x - 6$ is negative, so $\\lvert 2x - 6 \\rvert = -(2x - 6) = 6 - 2x$, and adding $1$ gives $7 - 2x$. The rule $2x - 5$ applies when $x \\ge 3$.',
    partNumber: 6,
    partTitle: 'Absolute Value & Step Functions',
  },
  {
    id: 'pwf-ent-6b',
    question: 'Which function is equal to $\\begin{cases} x + 5 & x \\ge -5 \\\\ -x - 5 & x < -5 \\end{cases}$?',
    options: ['$\\lvert x - 5 \\rvert$', '$\\lvert x + 5 \\rvert$', '$\\lvert x \\rvert + 5$', '$-\\lvert x + 5 \\rvert$'],
    correctIndex: 1,
    explanation: 'When $x + 5 \\ge 0$ the function returns $x + 5$, and when $x + 5 < 0$ it returns $-(x + 5)$: that is $\\lvert x + 5 \\rvert$, with its corner at $x = -5$.',
    partNumber: 6,
    partTitle: 'Absolute Value & Step Functions',
  },
  // Part 7 — Modeling, Mixed Practice & Exit Quiz
  {
    id: 'pwf-ent-7a',
    question: 'Electricity costs \\$0.12 per kWh for the first $500$ kWh used in a month and \\$0.18 per kWh for each kWh above $500$. What is the bill for $800$ kWh?',
    options: ['\\$144', '\\$96', '\\$54', '\\$114'],
    correctIndex: 3,
    explanation: 'The first $500$ kWh cost $0.12(500) = 60$ dollars and the next $300$ cost $0.18(300) = 54$ dollars, for \\$114. Charging every kWh at \\$0.18 gives \\$144.',
    partNumber: 7,
    partTitle: 'Modeling, Mixed Practice & Exit Quiz',
  },
  {
    id: 'pwf-ent-7b',
    question: 'Let $f(x) = \\begin{cases} 2^x & x < 1 \\\\ x^2 + 1 & x \\ge 1 \\end{cases}$. For which values of $x$ is $f(x) = 10$?',
    options: ['$x = 3$', '$x = -3$ and $x = 3$', '$x = 3$ and $x = \\log_2 10$', '$x = \\log_2 10$'],
    correctIndex: 0,
    explanation: 'From $x^2 + 1 = 10$, $x = \\pm 3$, and only $x = 3$ meets $x \\ge 1$. From $2^x = 10$, $x = \\log_2 10 \\approx 3.32$, which fails $x < 1$, so $x = 3$ is the only solution.',
    partNumber: 7,
    partTitle: 'Modeling, Mixed Practice & Exit Quiz',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Anatomy & Notation' },
    { partNumber: 2, partTitle: 'Evaluating Piecewise Functions' },
    { partNumber: 3, partTitle: 'Graphing & Open/Closed Dots' },
    { partNumber: 4, partTitle: 'Building Piecewise Models' },
    { partNumber: 5, partTitle: 'Domain & Range' },
    { partNumber: 6, partTitle: 'Absolute Value & Step Functions' },
    { partNumber: 7, partTitle: 'Modeling, Mixed Practice & Exit Quiz' },
  ]
}
