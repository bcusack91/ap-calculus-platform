/**
 * Entrance Quiz — Derivatives of Exponential & Logarithmic Functions (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Natural Exponential Function
  {
    id: 'del-ent-1a',
    question: 'Find $\\dfrac{d}{dx}\\left(e^{2x}\\right)^3$.',
    options: ['$6e^{6x}$', '$3(e^{2x})^2$', '$6(e^{2x})^2$', '$18e^{6x}$'],
    correctIndex: 0,
    explanation: 'Simplify first: $(e^{2x})^3 = e^{6x}$, whose derivative is $6e^{6x}$. The power rule alone gives $3(e^{2x})^2$, which forgets the inner derivative $2e^{2x}$.',
    partNumber: 1,
    partTitle: 'The Natural Exponential Function',
  },
  {
    id: 'del-ent-1b',
    question: 'Which describes the graph of $g(x) = 5 - 3e^{-x}$ for all $x$?',
    options: ['It is increasing and concave up', 'It is decreasing and concave up', 'It is decreasing and concave down', 'It is increasing and concave down'],
    correctIndex: 3,
    explanation: '$g\'(x) = 3e^{-x} > 0$, so $g$ is increasing, and $g\'\'(x) = -3e^{-x} < 0$, so it is concave down. Missing the chain-rule sign from $e^{-x}$ flips both conclusions.',
    partNumber: 1,
    partTitle: 'The Natural Exponential Function',
  },
  // Part 2 — Natural Logarithm Derivatives
  {
    id: 'del-ent-2a',
    question: 'Let $f(x) = \\ln\\left(x^2 e^x\\right)$ for $x > 0$. Find $f\'(1)$.',
    options: ['$\\frac{1}{e}$', '$2 + e$', '$3$', '$\\frac{3}{e}$'],
    correctIndex: 2,
    explanation: 'Use log properties: $f(x) = 2\\ln x + x$, so $f\'(x) = \\frac{2}{x} + 1$ and $f\'(1) = 3$. Writing the derivative of $\\ln u$ as $\\frac{1}{u}$ without $u\'$ gives $\\frac{1}{e}$.',
    partNumber: 2,
    partTitle: 'Natural Logarithm Derivatives',
  },
  {
    id: 'del-ent-2b',
    question: 'Let $f(x) = \\ln|x|$. Find $f\'(-4)$.',
    options: ['$\\frac{1}{4}$', 'Undefined', '$-4$', '$-\\frac{1}{4}$'],
    correctIndex: 3,
    explanation: 'For every $x \\ne 0$, $\\frac{d}{dx}\\ln|x| = \\frac{1}{x}$, so $f\'(-4) = -\\frac{1}{4}$. The absolute value makes the function defined at $-4$, and the derivative keeps the sign of $x$.',
    partNumber: 2,
    partTitle: 'Natural Logarithm Derivatives',
  },
  // Part 3 — Combining with Product, Quotient, Chain Rules
  {
    id: 'del-ent-3a',
    question: 'Where are the critical points of $f(x) = x^3 e^{-x}$?',
    options: ['$x = 0$ and $x = 3$', '$x = -3$ and $x = 0$', '$x = 3$', '$x = 0$'],
    correctIndex: 0,
    explanation: '$f\'(x) = 3x^2e^{-x} - x^3e^{-x} = x^2e^{-x}(3 - x)$. Since $e^{-x}$ is never 0, $f\' = 0$ at $x = 0$ and $x = 3$. Dropping the negative from the chain rule gives $x = -3$.',
    partNumber: 3,
    partTitle: 'Combining with Product, Quotient, Chain Rules',
  },
  {
    id: 'del-ent-3b',
    question: 'At what $x > 0$ does $f(x) = \\dfrac{\\ln x}{x^2}$ have a horizontal tangent?',
    options: ['$x = e$', '$x = \\sqrt{e}$', '$x = e^2$', '$x = 1$'],
    correctIndex: 1,
    explanation: 'Quotient rule: $f\'(x) = \\frac{x - 2x\\ln x}{x^4} = \\frac{1 - 2\\ln x}{x^3}$. This is 0 when $\\ln x = \\frac{1}{2}$, so $x = \\sqrt{e}$. The value $x = e$ is the answer for $\\frac{\\ln x}{x}$.',
    partNumber: 3,
    partTitle: 'Combining with Product, Quotient, Chain Rules',
  },
  // Part 4 — Growth, Decay & Applications
  {
    id: 'del-ent-4a',
    question: 'A population satisfies $\\dfrac{dP}{dt} = 0.02P$ with $P(0) = 3000$, where $t$ is in years. How fast, in people per year, is it growing when $P = 4500$?',
    options: ['$60$', '$1.5$', '$90$', '$4500$'],
    correctIndex: 2,
    explanation: 'The rate is proportional to the current size: $\\frac{dP}{dt} = 0.02(4500) = 90$ people per year. Using the initial population gives 60.',
    partNumber: 4,
    partTitle: 'Growth, Decay & Applications',
  },
  {
    id: 'del-ent-4b',
    question: 'The temperature of a cup of coffee is $T(t) = 72 + 128e^{-0.1t}$ degrees Fahrenheit after $t$ minutes. What is $T\'(0)$, in degrees per minute?',
    options: ['$12.8$', '$-20$', '$-0.1$', '$-12.8$'],
    correctIndex: 3,
    explanation: '$T\'(t) = 128(-0.1)e^{-0.1t} = -12.8e^{-0.1t}$, so $T\'(0) = -12.8$. Multiplying $-0.1$ by the full starting temperature 200, instead of the difference 128, gives $-20$.',
    partNumber: 4,
    partTitle: 'Growth, Decay & Applications',
  },
  // Part 5 — Inverse Function Theorem
  {
    id: 'del-ent-5a',
    question: 'Let $f(x) = 2x + e^x$. Find $(f^{-1})\'(1)$.',
    options: ['$\\frac{1}{3}$', '$3$', '$\\frac{1}{2 + e}$', '$\\frac{1}{2}$'],
    correctIndex: 0,
    explanation: 'Since $f(0) = 1$, $(f^{-1})\'(1) = \\frac{1}{f\'(0)}$. With $f\'(x) = 2 + e^x$, $f\'(0) = 3$, so the answer is $\\frac{1}{3}$. Using $f\'(1) = 2 + e$ is the common error.',
    partNumber: 5,
    partTitle: 'Inverse Function Theorem',
  },
  {
    id: 'del-ent-5b',
    question: 'Use $g(x) = \\ln x$ as the inverse of $f(x) = e^x$ and the inverse function theorem to find $g\'(e^2)$.',
    options: ['$e^2$', '$\\frac{1}{e^2}$', '$\\frac{1}{2}$', '$\\frac{1}{e}$'],
    correctIndex: 1,
    explanation: 'Since $f(2) = e^2$, $g\'(e^2) = \\frac{1}{f\'(2)} = \\frac{1}{e^2}$. This matches $g\'(x) = \\frac{1}{x}$ at $x = e^2$.',
    partNumber: 5,
    partTitle: 'Inverse Function Theorem',
  },
  // Part 6 — Graphing & Analysis
  {
    id: 'del-ent-6a',
    question: 'What is the maximum value of $f(x) = xe^{-2x}$?',
    options: ['$\\frac{1}{e}$', '$\\frac{1}{2}$', '$\\frac{1}{2e}$', '$\\frac{1}{e^2}$'],
    correctIndex: 2,
    explanation: '$f\'(x) = e^{-2x}(1 - 2x)$ changes from positive to negative at $x = \\frac{1}{2}$, so the maximum is $f\\left(\\frac{1}{2}\\right) = \\frac{1}{2}e^{-1} = \\frac{1}{2e}$. The value $\\frac{1}{2}$ is the location, not the value.',
    partNumber: 6,
    partTitle: 'Graphing & Analysis',
  },
  {
    id: 'del-ent-6b',
    question: 'What is the minimum value of $f(x) = x - 2\\ln x$ for $x > 0$?',
    options: ['$1$', '$e - 2$', '$2 + 2\\ln 2$', '$2 - 2\\ln 2$'],
    correctIndex: 3,
    explanation: '$f\'(x) = 1 - \\frac{2}{x} = 0$ at $x = 2$, and $f\'\'(x) = \\frac{2}{x^2} > 0$, so this is the minimum. Its value is $f(2) = 2 - 2\\ln 2$; the value at $x = e$ is $e - 2$, which is larger.',
    partNumber: 6,
    partTitle: 'Graphing & Analysis',
  },
  // Part 7 — AP Exam Review & Comprehensive Practice
  {
    id: 'del-ent-7a',
    question: 'Find $\\dfrac{d}{dx}\\left(5^{\\cos x}\\right)$.',
    options: ['$-5^{\\cos x}\\sin x\\ln 5$', '$5^{\\cos x}\\ln 5$', '$-5^{\\cos x}\\sin x$', '$\\cos x \\cdot 5^{\\cos x - 1}$'],
    correctIndex: 0,
    explanation: 'For a constant base, $\\frac{d}{dx}a^u = a^u\\ln a \\cdot u\'$. With $u = \\cos x$, $u\' = -\\sin x$, giving $-5^{\\cos x}\\sin x\\ln 5$. Treating it like a power function gives $\\cos x \\cdot 5^{\\cos x - 1}$, which is wrong.',
    partNumber: 7,
    partTitle: 'AP Exam Review & Comprehensive Practice',
  },
  {
    id: 'del-ent-7b',
    question: 'A quantity satisfies $\\dfrac{dy}{dt} = -0.5y$ and $y(2) = 10$. What is $y(4)$?',
    options: ['$10e$', '$\\frac{10}{e}$', '$5$', '$10e^{-2}$'],
    correctIndex: 1,
    explanation: 'Solutions are $y = Ce^{-0.5t}$, so over 2 units of time $y$ is multiplied by $e^{-0.5(2)} = e^{-1}$: $y(4) = \\frac{10}{e}$. Using all 4 units of time from $y = 10$ gives $10e^{-2}$.',
    partNumber: 7,
    partTitle: 'AP Exam Review & Comprehensive Practice',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Natural Exponential Function' },
    { partNumber: 2, partTitle: 'Natural Logarithm Derivatives' },
    { partNumber: 3, partTitle: 'Combining with Product, Quotient, Chain Rules' },
    { partNumber: 4, partTitle: 'Growth, Decay & Applications' },
    { partNumber: 5, partTitle: 'Inverse Function Theorem' },
    { partNumber: 6, partTitle: 'Graphing & Analysis' },
    { partNumber: 7, partTitle: 'AP Exam Review & Comprehensive Practice' },
  ]
}
