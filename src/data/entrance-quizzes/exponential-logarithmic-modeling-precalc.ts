/**
 * Entrance Quiz — Exponential and Logarithmic Data Modeling and Semi-log Plots (AP Precalculus, CED 2.5–2.6, 2.14–2.15)
 * 14 questions (2 per lesson part, 7 parts). Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Item 6a is ported from the retired `logarithmic-functions` entrance quiz (lgf-ent-6a).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Exponential Models from Two Points and Ratios
  {
    id: 'elm-ent-1a',
    question: 'Which exponential function passes through $(0, 6)$ and $(3, 48)$?',
    options: ['$y = 6 \\cdot 2^x$', '$y = 6 \\cdot 8^x$', '$y = 6 + 14x$', '$y = 48 \\cdot 2^{x}$'],
    correctIndex: 0,
    explanation: '$b^3 = \\frac{48}{6} = 8$, so $b = 2$, and $a = 6$ because the point $(0, 6)$ gives the initial value. The ratio $8$ covers three steps, so it is $b^3$, not $b$.',
    partNumber: 1,
    partTitle: 'Exponential Models from Two Points and Ratios',
  },
  {
    id: 'elm-ent-1b',
    question: 'A quantity is $200$ at $t = 0$ and $162$ at $t = 2$, and it changes exponentially. Which model fits?',
    options: ['$Q(t) = 200(0.81)^t$', '$Q(t) = 200 - 19t$', '$Q(t) = 200(0.9)^t$', '$Q(t) = 200(0.19)^{t}$'],
    correctIndex: 2,
    explanation: '$b^2 = \\frac{162}{200} = 0.81$, so $b = 0.9$: a $10\\%$ decrease per unit of $t$. Using $0.81$ as the base forgets the square root, and $200 - 19t$ is linear.',
    partNumber: 1,
    partTitle: 'Exponential Models from Two Points and Ratios',
  },
  // Part 2 — Exponential Regression on the Calculator
  {
    id: 'elm-ent-2a',
    question: 'Exponential regression gives $a = 3.5$ and $b = 1.26$. Which is the model\'s prediction when $x = 3$?',
    options: ['About $13.2$', 'About $7.0$', 'About $4.4$', 'About $10.5$'],
    correctIndex: 1,
    explanation: '$3.5(1.26)^3 \\approx 3.5(2.000) \\approx 7.0$. Multiplying $3.5 \\cdot 1.26 \\cdot 3$ treats the growth as linear and gives $13.2$; $4.4$ is $3.5(1.26)$, one step only.',
    partNumber: 2,
    partTitle: 'Exponential Regression on the Calculator',
  },
  {
    id: 'elm-ent-2b',
    question: 'A regression model $y = ab^x$ has $b = 0.93$. Each unit increase in the input multiplies the output by $0.93$, which is a decrease of',
    options: ['$7\\%$', '$93\\%$', '$0.93\\%$', '$0.07$ units'],
    correctIndex: 0,
    explanation: 'Keeping $93\\%$ of the output means losing $7\\%$ per unit of input. The change is a percent of the current value, not a fixed number of units.',
    partNumber: 2,
    partTitle: 'Exponential Regression on the Calculator',
  },
  // Part 3 — Residuals and Residual Plots
  {
    id: 'elm-ent-3a',
    question: 'At $x = 2$ a model predicts $12.5$ and the actual data value is $14$. What is the residual, and what does it tell you?',
    options: ['$-1.5$; the model overestimates', '$1.12$; the model is $12\\%$ too low', '$26.5$; the model and data combine', '$1.5$; the model underestimates'],
    correctIndex: 3,
    explanation: 'Residual $=$ actual $-$ predicted $= 14 - 12.5 = 1.5$. A positive residual means the data point lies above the model, so the model underestimates there.',
    partNumber: 3,
    partTitle: 'Residuals and Residual Plots',
  },
  {
    id: 'elm-ent-3b',
    question: 'Which residual plot supports the choice of a model?',
    options: ['Points scattered with no pattern about the horizontal axis', 'Points forming a U-shape', 'Points rising steadily from left to right', 'Points all above the horizontal axis'],
    correctIndex: 0,
    explanation: 'Random scatter means the model captures the trend and only noise remains. A U-shape, a steady rise, or one-sided residuals each reveal structure the model missed.',
    partNumber: 3,
    partTitle: 'Residuals and Residual Plots',
  },
  // Part 4 — Choosing and Validating a Model
  {
    id: 'elm-ent-4a',
    question: 'The outputs $4, 12, 36, 108$ at inputs $0, 1, 2, 3$ are best modeled by',
    options: ['A linear function, because the differences are $8, 24, 72$', 'An exponential function, because the ratios are constant', 'A quadratic function, because the second differences are $16, 48$', 'A logarithmic function, because the outputs grow quickly'],
    correctIndex: 1,
    explanation: 'Each output is $3$ times the previous one over equal input steps, the exponential pattern: $y = 4 \\cdot 3^x$. Neither the differences nor the second differences are constant.',
    partNumber: 4,
    partTitle: 'Choosing and Validating a Model',
  },
  {
    id: 'elm-ent-4b',
    question: 'A linear model fit to a data set has residuals that are positive at both ends of the data and negative in the middle. Which is the best conclusion?',
    options: ['The data curve, so a model with curvature (exponential or quadratic) should be considered', 'The linear model is appropriate because the residuals have both signs', 'The linear model is appropriate because the residuals sum to about zero', 'The data cannot be modeled'],
    correctIndex: 0,
    explanation: 'Positive residuals at the ends and negative in the middle form a U-shape: the data bend away from the line, so a nonlinear model should be tried and checked with its own residual plot.',
    partNumber: 4,
    partTitle: 'Choosing and Validating a Model',
  },
  // Part 5 — Logarithmic Functions in Context
  {
    id: 'elm-ent-5a',
    question: 'For the model $y = 3 + 4\\log x$, what is $y$ when $x = 100$?',
    options: ['$403$', '$7$', '$11$', '$203$'],
    correctIndex: 2,
    explanation: '$\\log 100 = 2$, so $y = 3 + 4(2) = 11$. The value $403$ multiplies $x$ instead of taking its logarithm, and $7$ uses $\\log 100 = 1$.',
    partNumber: 5,
    partTitle: 'Logarithmic Functions in Context',
  },
  {
    id: 'elm-ent-5b',
    question: 'Which table is modeled by a logarithmic function?',
    options: ['$x = 1, 5, 25, 125$ with $y = 2, 4, 6, 8$', '$x = 1, 2, 3, 4$ with $y = 2, 4, 6, 8$', '$x = 1, 2, 3, 4$ with $y = 2, 4, 8, 16$', '$x = 1, 5, 25, 125$ with $y = 2, 10, 50, 250$'],
    correctIndex: 0,
    explanation: 'In the first table each multiplication of $x$ by $5$ adds $2$ to $y$: $y = 2 + 2\\log_5 x$. Equal input steps with equal output steps is linear, equal input steps with a constant output ratio is exponential, and $y = 2x$ is linear.',
    partNumber: 5,
    partTitle: 'Logarithmic Functions in Context',
  },
  // Part 6 — Semi-log Plots
  {
    id: 'elm-ent-6a',
    question: 'A semi-log plot of $\\log y$ against $x$ is a line through $(0, 1.5)$ and $(4, 2.3)$. Which model fits the original data?',
    options: ['$y = 1.5 \\cdot (0.2)^x$', '$y = 10^{1.5} \\cdot \\left(10^{0.2}\\right)^x$', '$y = 1.5 \\cdot 10^{0.2x}$', '$y = 0.2x + 1.5$'],
    correctIndex: 1,
    explanation: 'The line is $\\log y = 0.2x + 1.5$, so $y = 10^{1.5} \\cdot 10^{0.2x} = 10^{1.5}\\left(10^{0.2}\\right)^x$, about $31.6(1.585)^x$. The intercept on the plot is $\\log a$, not $a$.',
    partNumber: 6,
    partTitle: 'Semi-log Plots',
  },
  {
    id: 'elm-ent-6b',
    question: 'Data that lie on a straight line on a semi-log plot ($\\log y$ against $x$) are best modeled by which type of function?',
    options: ['Linear', 'Logarithmic', 'Quadratic', 'Exponential'],
    correctIndex: 3,
    explanation: 'Taking logs of $y = ab^x$ gives $\\log y = (\\log b)x + \\log a$, a line, so a straight semi-log plot is the signature of exponential data. Linear data would curve on a semi-log plot.',
    partNumber: 6,
    partTitle: 'Semi-log Plots',
  },
  // Part 7 — Modeling Synthesis (FRQ Question 2 Skills)
  {
    id: 'elm-ent-7a',
    question: 'The model $N(t) = 80(1.15)^t$ was built from data collected for $0 \\le t \\le 5$. Which prediction is an extrapolation?',
    options: ['$N(9)$', '$N(2.5)$', '$N(0)$', '$N(4.5)$'],
    correctIndex: 0,
    explanation: 'An input of $9$ lies outside the data range $[0, 5]$, so predicting $N(9)$ extrapolates and assumes the $15\\%$ growth continues. The other inputs lie inside the range (interpolation).',
    partNumber: 7,
    partTitle: 'Modeling Synthesis (FRQ Question 2 Skills)',
  },
  {
    id: 'elm-ent-7b',
    question: 'Using $N(t) = 80(1.15)^t$, what is the average rate of change of $N$ from $t = 0$ to $t = 2$?',
    options: ['$12$ per unit of $t$', '$25.8$ per unit of $t$', '$12.9$ per unit of $t$', '$1.15$ per unit of $t$'],
    correctIndex: 2,
    explanation: '$N(2) = 80(1.15)^2 = 105.8$, so the average rate of change is $\\frac{105.8 - 80}{2 - 0} = 12.9$ per unit of $t$. The value $25.8$ is the total change, not the rate, and $12$ is $15\\%$ of $80$, the change in the first unit only.',
    partNumber: 7,
    partTitle: 'Modeling Synthesis (FRQ Question 2 Skills)',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Exponential Models from Two Points and Ratios' },
    { partNumber: 2, partTitle: 'Exponential Regression on the Calculator' },
    { partNumber: 3, partTitle: 'Residuals and Residual Plots' },
    { partNumber: 4, partTitle: 'Choosing and Validating a Model' },
    { partNumber: 5, partTitle: 'Logarithmic Functions in Context' },
    { partNumber: 6, partTitle: 'Semi-log Plots' },
    { partNumber: 7, partTitle: 'Modeling Synthesis (FRQ Question 2 Skills)' },
  ]
}
