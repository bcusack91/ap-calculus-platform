/**
 * Entrance Quiz — Logarithmic Functions — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Logs as the Inverse of Exponentials
  {
    id: 'lgf-ent-1a',
    question: 'Which equation is equivalent to $5^x = 40$?',
    options: ['$x = \\log_{40} 5$', '$x = \\log_5 40$', '$40 = \\log_5 x$', '$x = 40^{1/5}$'],
    correctIndex: 1,
    explanation: '$b^y = c$ means $y = \\log_b c$, so $x = \\log_5 40$. The form $40^{1/5}$ undoes a fifth power, which is a different equation, $x^5 = 40$.',
    partNumber: 1,
    partTitle: 'Logs as the Inverse of Exponentials',
  },
  {
    id: 'lgf-ent-1b',
    question: 'The point $(2, 9)$ lies on the graph of $y = b^x$. Which point lies on the graph of $y = \\log_b x$?',
    options: ['$(-2, 9)$', '$(2, \\log 9)$', '$(9, 2)$', '$(9, \\tfrac{1}{2})$'],
    correctIndex: 2,
    explanation: 'The logarithm is the inverse of $b^x$, so its graph swaps the coordinates: $(9, 2)$. Here $b = 3$, and $\\log_3 9 = 2$.',
    partNumber: 1,
    partTitle: 'Logs as the Inverse of Exponentials',
  },
  // Part 2 — The Graph, Domain & Asymptote
  {
    id: 'lgf-ent-2a',
    question: 'What is the domain of $f(x) = \\log(6 - 2x)$?',
    options: ['$x > 3$', '$x > -3$', '$x \\le 3$', '$x < 3$'],
    correctIndex: 3,
    explanation: 'The argument must be positive: $6 - 2x > 0$ gives $x < 3$. The argument cannot equal 0, so $x \\le 3$ is wrong.',
    partNumber: 2,
    partTitle: 'The Graph, Domain & Asymptote',
  },
  {
    id: 'lgf-ent-2b',
    question: 'Which describes the end behavior of $y = \\log_3 x$?',
    options: ['As $x \\to 0^+$, $y \\to -\\infty$; as $x \\to \\infty$, $y \\to \\infty$', 'As $x \\to 0^+$, $y \\to -\\infty$; as $x \\to \\infty$, $y \\to 3$', 'As $x \\to 0^+$, $y \\to 0$; as $x \\to \\infty$, $y \\to \\infty$', 'As $x \\to 0^+$, $y \\to \\infty$; as $x \\to \\infty$, $y \\to 0$'],
    correctIndex: 0,
    explanation: 'The graph falls without bound next to its vertical asymptote $x = 0$ and rises without bound, though slowly, as $x$ grows. It never levels off or approaches a horizontal asymptote.',
    partNumber: 2,
    partTitle: 'The Graph, Domain & Asymptote',
  },
  // Part 3 — The Three Log Properties
  {
    id: 'lgf-ent-3a',
    question: 'Which expression equals $\\ln\\left(\\dfrac{e^3 x^2}{y + 1}\\right)$ for $x, y > 0$?',
    options: ['$3 + 2\\ln x - \\ln y - 1$', '$3 + 2\\ln x - \\ln y - \\ln 1$', '$3 + 2\\ln x - \\ln(y + 1)$', '$3 + \\ln 2x - \\ln(y + 1)$'],
    correctIndex: 2,
    explanation: 'Quotient, product, and power rules give $\\ln e^3 + 2\\ln x - \\ln(y + 1) = 3 + 2\\ln x - \\ln(y + 1)$. There is no rule that splits the logarithm of a sum, so $\\ln(y + 1)$ stays whole.',
    partNumber: 3,
    partTitle: 'The Three Log Properties',
  },
  {
    id: 'lgf-ent-3b',
    question: 'Which single logarithm equals $\\tfrac{1}{2}\\log x + 3\\log y - \\log 4$?',
    options: ['$\\log \\dfrac{3y\\sqrt{x}}{4}$', '$\\log(y^3\\sqrt{x} - 4)$', '$\\log \\dfrac{y^3 x^2}{4}$', '$\\log \\dfrac{y^3\\sqrt{x}}{4}$'],
    correctIndex: 3,
    explanation: 'Coefficients become exponents ($\\sqrt{x}$ and $y^3$), the sum becomes a product, and subtracting $\\log 4$ divides by 4. The form $3y\\sqrt{x}$ keeps the 3 as a factor instead of an exponent.',
    partNumber: 3,
    partTitle: 'The Three Log Properties',
  },
  // Part 4 — Change of Base
  {
    id: 'lgf-ent-4a',
    question: 'What is the exact value of $\\log_{16} 8$?',
    options: ['$\\tfrac{3}{4}$', '$\\tfrac{4}{3}$', '$\\tfrac{1}{2}$', '$2$'],
    correctIndex: 0,
    explanation: 'With base 2: $\\log_{16} 8 = \\tfrac{\\log_2 8}{\\log_2 16} = \\tfrac{3}{4}$. The value $\\tfrac{4}{3}$ is $\\log_8 16$.',
    partNumber: 4,
    partTitle: 'Change of Base',
  },
  {
    id: 'lgf-ent-4b',
    question: 'A calculator gives $\\log 7 \\approx 0.845$ and $\\log 2 \\approx 0.301$. Which is the best estimate of $\\log_2 7$?',
    options: ['$0.544$', '$2.807$', '$0.356$', '$0.254$'],
    correctIndex: 1,
    explanation: 'Change of base: $\\log_2 7 = \\tfrac{\\log 7}{\\log 2} \\approx \\tfrac{0.845}{0.301} \\approx 2.807$, which fits $2^2 < 7 < 2^3$. Subtracting the logs computes $\\log \\tfrac{7}{2}$ instead.',
    partNumber: 4,
    partTitle: 'Change of Base',
  },
  // Part 5 — Solving Exponential & Logarithmic Equations
  {
    id: 'lgf-ent-5a',
    question: 'Solve $2^x = 3^{x - 1}$.',
    options: ['$x = \\dfrac{\\ln 2}{\\ln 3 - \\ln 2}$', '$x = \\dfrac{\\ln 3}{\\ln 2}$', '$x = \\dfrac{\\ln 3}{\\ln 2 - \\ln 3}$', '$x = \\dfrac{\\ln 3}{\\ln 3 - \\ln 2}$'],
    correctIndex: 3,
    explanation: 'Take $\\ln$: $x\\ln 2 = (x - 1)\\ln 3$, so $x(\\ln 3 - \\ln 2) = \\ln 3$ and $x = \\tfrac{\\ln 3}{\\ln 3 - \\ln 2}$. The form with $\\ln 2 - \\ln 3$ in the denominator has the sign flipped.',
    partNumber: 5,
    partTitle: 'Solving Exponential & Logarithmic Equations',
  },
  {
    id: 'lgf-ent-5b',
    question: 'Solve $\\log_4(x + 3) + \\log_4(x - 3) = 2$.',
    options: ['$x = 5$', '$x = \\sqrt{17}$', '$x = -5$ and $x = 5$', '$x = -5$'],
    correctIndex: 0,
    explanation: 'Condense: $(x + 3)(x - 3) = 4^2 = 16$, so $x^2 = 25$ and $x = \\pm 5$. The candidate $-5$ makes both arguments negative, so only $x = 5$ works.',
    partNumber: 5,
    partTitle: 'Solving Exponential & Logarithmic Equations',
  },
  // Part 6 — Logarithmic Models & Semi-Log Plots
  {
    id: 'lgf-ent-6a',
    question: 'A semi-log plot of $\\log y$ against $x$ is a line through $(0, 1.5)$ and $(4, 2.3)$. Which model fits the original data?',
    options: ['$y = 1.5 \\cdot (0.2)^x$', '$y = 10^{1.5} \\cdot \\left(10^{0.2}\\right)^x$', '$y = 1.5 \\cdot 10^{0.2x}$', '$y = 0.2x + 1.5$'],
    correctIndex: 1,
    explanation: 'The line is $\\log y = 0.2x + 1.5$, so $y = 10^{1.5} \\cdot 10^{0.2x} = 10^{1.5}\\left(10^{0.2}\\right)^x$, about $31.6(1.585)^x$. The intercept on the plot is $\\log a$, not $a$.',
    partNumber: 6,
    partTitle: 'Logarithmic Models & Semi-Log Plots',
  },
  {
    id: 'lgf-ent-6b',
    question: 'For a solution, $\\text{pH} = -\\log[H^+]$. What is the pH when $[H^+] = 4 \\times 10^{-6}$?',
    options: ['$6 + \\log 4$', '$\\log 4 - 6$', '$6 - \\log 4$', '$-6\\log 4$'],
    correctIndex: 2,
    explanation: '$-\\log(4 \\times 10^{-6}) = -(\\log 4 - 6) = 6 - \\log 4 \\approx 5.4$. The value $\\log 4 - 6$ forgets the negative sign in the definition.',
    partNumber: 6,
    partTitle: 'Logarithmic Models & Semi-Log Plots',
  },
  // Part 7 — Mixed Mastery & Exit Quiz
  {
    id: 'lgf-ent-7a',
    question: 'Solve $3e^{2x} - 5 = 7$.',
    options: ['$\\ln 2$', '$\\dfrac{\\ln 12}{2}$', '$2\\ln 4$', '$\\dfrac{\\ln 7}{6}$'],
    correctIndex: 0,
    explanation: 'Isolate the exponential: $e^{2x} = 4$, so $2x = \\ln 4$ and $x = \\tfrac{\\ln 4}{2} = \\ln 2$. Taking the log before dividing by 3 leads to $\\tfrac{\\ln 12}{2}$.',
    partNumber: 7,
    partTitle: 'Mixed Mastery & Exit Quiz',
  },
  {
    id: 'lgf-ent-7b',
    question: 'Let $f(x) = a + \\log_3 x$ with $f(9) = 5$. What is $f\\left(\\tfrac{1}{3}\\right)$?',
    options: ['$4$', '$2$', '$-1$', '$\\tfrac{5}{27}$'],
    correctIndex: 1,
    explanation: '$f(9) = a + 2 = 5$ gives $a = 3$, and $\\log_3 \\tfrac{1}{3} = -1$, so $f\\left(\\tfrac{1}{3}\\right) = 2$. The value $4$ treats $\\log_3 \\tfrac{1}{3}$ as $+1$.',
    partNumber: 7,
    partTitle: 'Mixed Mastery & Exit Quiz',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Logs as the Inverse of Exponentials' },
    { partNumber: 2, partTitle: 'The Graph, Domain & Asymptote' },
    { partNumber: 3, partTitle: 'The Three Log Properties' },
    { partNumber: 4, partTitle: 'Change of Base' },
    { partNumber: 5, partTitle: 'Solving Exponential & Logarithmic Equations' },
    { partNumber: 6, partTitle: 'Logarithmic Models & Semi-Log Plots' },
    { partNumber: 7, partTitle: 'Mixed Mastery & Exit Quiz' },
  ]
}
