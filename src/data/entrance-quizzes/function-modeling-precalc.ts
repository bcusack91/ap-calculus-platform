/**
 * Entrance Quiz — Function Model Selection and Construction (AP Precalculus, CED 1.13–1.14) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Choosing a Function Model
  {
    id: 'fmp-ent-1a',
    question: 'A quantity is recorded at equally spaced times: $3, 8, 13, 18, 23$. Which type of function model is appropriate?',
    options: ['Linear', 'Quadratic', 'Cubic', 'Piecewise-defined'],
    correctIndex: 0,
    explanation: 'The first differences are $5, 5, 5, 5$: a constant rate of change, which is the signature of a linear model.',
    partNumber: 1,
    partTitle: 'Choosing a Function Model',
  },
  {
    id: 'fmp-ent-1b',
    question: 'Which situation is best modeled by a piecewise-defined function?',
    options: ['A shipping charge: a flat rate up to $5$ pounds, then a per-pound rate', 'The area of a square as a function of the length of its side', 'The distance traveled at a constant speed as a function of time', 'The height of a ball thrown straight upward as a function of the time since it was thrown'],
    correctIndex: 0,
    explanation: 'The rule for the charge changes at $5$ pounds, so two rules on two intervals are needed. The area is quadratic, constant-speed distance is linear, and the ball\'s height is quadratic.',
    partNumber: 1,
    partTitle: 'Choosing a Function Model',
  },
  // Part 2 — Linear and Quadratic Models from Data
  {
    id: 'fmp-ent-2a',
    question: 'A linear model passes through $(1, 9)$ and $(4, 21)$. Which equation is the model?',
    options: ['$y = 4x + 5$', '$y = 4x + 9$', '$y = 3x + 6$', '$y = 12x - 3$'],
    correctIndex: 0,
    explanation: 'The slope is $\\frac{21 - 9}{4 - 1} = 4$, and $9 = 4(1) + b$ gives $b = 5$. The intercept is not the first $y$-value, and the other two lines pass through $(1, 9)$ but not $(4, 21)$.',
    partNumber: 2,
    partTitle: 'Linear and Quadratic Models from Data',
  },
  {
    id: 'fmp-ent-2b',
    question: 'A linear regression gives $P(t) = 3.482t + 12.917$ for a city\'s population in thousands $t$ years after $2015$. What does $3.482$ represent?',
    options: ['The population grows by approximately $3.482$ thousand people per year', 'The population of the city, in thousands, in the year $2015$', 'The population of the city, in thousands, one year after $2015$', 'The number of years of population data used in the regression'],
    correctIndex: 0,
    explanation: 'The slope of a linear model is its rate of change, in output units per input unit: thousands of people per year. The $2015$ population is the intercept, $12.917$ thousand.',
    partNumber: 2,
    partTitle: 'Linear and Quadratic Models from Data',
  },
  // Part 3 — Polynomial Models in Context
  {
    id: 'fmp-ent-3a',
    question: 'An open box is formed from a $12$ cm by $10$ cm sheet by cutting squares of side $x$ cm from the corners, so $V(x) = x(12 - 2x)(10 - 2x)$. What is the domain of $V$ in context?',
    options: ['$0 < x < 5$', '$0 \\le x \\le 6$', '$0 < x < 12$', '$0 < x \\le 10$'],
    correctIndex: 0,
    explanation: 'Every dimension must be positive: $10 - 2x > 0$ gives $x < 5$, the tightest condition. $x \\le 6$ comes from the length alone, is too loose, and includes endpoints that give no box; $x \\le 10$ would make the width zero or negative.',
    partNumber: 3,
    partTitle: 'Polynomial Models in Context',
  },
  {
    id: 'fmp-ent-3b',
    question: 'A box with a square base of side $x$ cm has volume $V(x) = x^2(12 - x)$ cubic centimeters. What is the average rate of change of $V$ over $[1, 3]$?',
    options: ['$35$ cubic centimeters per centimeter', '$70$ cubic centimeters per centimeter', '$81$ cubic centimeters per centimeter', '$27$ cubic centimeters per centimeter'],
    correctIndex: 0,
    explanation: '$V(1) = 1 \\cdot 11 = 11$ and $V(3) = 9 \\cdot 9 = 81$, so $\\frac{81 - 11}{3 - 1} = \\frac{70}{2} = 35$. Forgetting to divide by the interval length gives $70$; $81$ is a value, not a rate.',
    partNumber: 3,
    partTitle: 'Polynomial Models in Context',
  },
  // Part 4 — Piecewise-Defined Functions: Notation and Evaluation
  {
    id: 'fmp-ent-4a',
    question: 'For $f(x) = \\begin{cases} x + 4 & x < 1 \\\\ 2x & x \\ge 1 \\end{cases}$, what is $f(1)$?',
    options: ['$2$', '$5$', 'Both $2$ and $5$', 'Undefined'],
    correctIndex: 0,
    explanation: 'The condition $x \\ge 1$ includes $1$, so $f(1) = 2(1) = 2$. The top rule applies only when $x < 1$ strictly; a function never has two outputs for one input.',
    partNumber: 4,
    partTitle: 'Piecewise-Defined Functions: Notation and Evaluation',
  },
  {
    id: 'fmp-ent-4b',
    question: 'For $f(x) = \\begin{cases} x + 4 & x < 1 \\\\ 2x & x \\ge 1 \\end{cases}$, what is $f(-3)$?',
    options: ['$1$', '$-6$', '$7$', '$-1$'],
    correctIndex: 0,
    explanation: 'Since $-3 < 1$, use the top rule: $-3 + 4 = 1$. Using $2x$ gives $-6$, the wrong piece.',
    partNumber: 4,
    partTitle: 'Piecewise-Defined Functions: Notation and Evaluation',
  },
  // Part 5 — Building Piecewise Models
  {
    id: 'fmp-ent-5a',
    question: 'The graph of $j(x) = \\begin{cases} x + 1 & x < 2 \\\\ x - 3 & x \\ge 2 \\end{cases}$ at $x = 2$ has:',
    options: ['An open dot at $(2, 3)$ and a closed dot at $(2, -1)$', 'A closed dot at $(2, 3)$, an open dot at $(2, -1)$', 'A single closed dot at $(2, 3)$ and nothing else', 'No dots at all, because the two pieces meet there'],
    correctIndex: 0,
    explanation: 'The left rule gives $2 + 1 = 3$ but excludes $x = 2$ (open dot); the right rule gives $2 - 3 = -1$ and includes $2$ (closed dot). The heights differ, so the graph jumps.',
    partNumber: 5,
    partTitle: 'Building Piecewise Models',
  },
  {
    id: 'fmp-ent-5b',
    question: 'A garage charges a flat $4$ dollars for the first hour and $2.50$ dollars for each additional hour, charged continuously. What is the cost of parking for $3$ hours?',
    options: ['$9$ dollars', '$11.50$ dollars', '$7.50$ dollars', '$6.50$ dollars'],
    correctIndex: 0,
    explanation: 'Beyond the first hour there are $2$ additional hours: $4 + 2.50(2) = 9$. Charging $2.50$ for all three hours gives $11.50$; $6.50$ counts only one extra hour.',
    partNumber: 5,
    partTitle: 'Building Piecewise Models',
  },
  // Part 6 — Assumptions, Limitations and Domain Restrictions
  {
    id: 'fmp-ent-6a',
    question: 'A candle $40$ cm long burns steadily, with length $L(t) = 40 - 2.5t$ centimeters after $t$ hours. Where does the domain of the model in context end?',
    options: ['$t = 16$', '$t = 40$', '$t = 2.5$', 'It has no end in context'],
    correctIndex: 0,
    explanation: 'The candle is gone when $40 - 2.5t = 0$, at $t = 16$ hours. After that the formula gives negative lengths, which have no meaning, so the domain in context is $0 \\le t \\le 16$.',
    partNumber: 6,
    partTitle: 'Assumptions, Limitations and Domain Restrictions',
  },
  {
    id: 'fmp-ent-6b',
    question: 'A linear regression built from data for $2000$ through $2020$ is used to predict a value in $2050$. Which statement is the most appropriate limitation?',
    options: ['The prediction assumes the constant rate continues $30$ years beyond the data, which may not hold', 'The prediction is impossible because the year $2050$ does not appear in the table of data', 'The prediction is wrong because a linear model can only be used for the years it was built from', 'The prediction is exact because regression lines give exact values for every input'],
    correctIndex: 0,
    explanation: 'A model is trusted on its observed domain. Extrapolating $30$ years assumes the same pattern persists; that assumption is the limitation to state.',
    partNumber: 6,
    partTitle: 'Assumptions, Limitations and Domain Restrictions',
  },
  // Part 7 — FRQ Workshop and Mastery Check
  {
    id: 'fmp-ent-7a',
    question: 'A model for monthly visitors, in thousands, gives $N(9) = 41.2763\\ldots$. Which is the best way to report this on a free-response question?',
    options: ['Approximately $41.276$ thousand visitors in month $9$', 'Exactly $41.2763$ thousand visitors will come in month $9$', 'Approximately $41.2763$ thousand visitors per month, every month', 'Approximately $41.276$ visitors per month in month $9$'],
    correctIndex: 0,
    explanation: 'Report a model value as approximate, rounded to three decimal places, with its units (thousands of visitors) and its input (month $9$). It is a predicted count, not a rate.',
    partNumber: 7,
    partTitle: 'FRQ Workshop and Mastery Check',
  },
  {
    id: 'fmp-ent-7b',
    question: 'A table shows $10.4$ thousand visitors in month $3$ and $22.0$ thousand in month $7$. Which statement correctly gives and interprets the average rate of change over $[3, 7]$?',
    options: ['$2.9$ thousand visitors per month: attendance rose by an average of $2{,}900$ visitors per month from month $3$ to month $7$', '$11.6$ thousand visitors per month: attendance rose by an average of $11{,}600$ visitors per month from month $3$ to month $7$', '$2.9$ thousand visitors: the museum gained a total of $2{,}900$ visitors between month $3$ and month $7$', '$5.5$ thousand visitors per month: the average monthly attendance between month $3$ and month $7$'],
    correctIndex: 0,
    explanation: '$\\frac{22.0 - 10.4}{7 - 3} = \\frac{11.6}{4} = 2.9$ thousand visitors per month. Not dividing by $4$ gives $11.6$, the total change; $2.9$ is a rate per month, not a total.',
    partNumber: 7,
    partTitle: 'FRQ Workshop and Mastery Check',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Choosing a Function Model' },
    { partNumber: 2, partTitle: 'Linear and Quadratic Models from Data' },
    { partNumber: 3, partTitle: 'Polynomial Models in Context' },
    { partNumber: 4, partTitle: 'Piecewise-Defined Functions: Notation and Evaluation' },
    { partNumber: 5, partTitle: 'Building Piecewise Models' },
    { partNumber: 6, partTitle: 'Assumptions, Limitations and Domain Restrictions' },
    { partNumber: 7, partTitle: 'FRQ Workshop and Mastery Check' },
  ]
}
