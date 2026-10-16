/**
 * Entrance Quiz — Accumulation Functions (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Accumulation Concept
  {
    id: 'acc-ent-1a',
    question: 'Let $G(x) = \\displaystyle\\int_5^x f(t)\\,dt$, where $f$ is continuous. Which statement must be true?',
    options: ['$G(5) = f(5)$', '$G\'(x) = f(x) - f(5)$', '$G(5) = 0$', '$G\'(5) = 0$'],
    correctIndex: 2,
    explanation: 'An accumulation function starts at zero at its lower limit: $G(5) = \\int_5^5 f(t)\\,dt = 0$. By FTC Part 1, $G\'(x) = f(x)$, with nothing subtracted, so $G\'(5) = f(5)$, which need not be 0.',
    partNumber: 1,
    partTitle: 'The Accumulation Concept',
  },
  {
    id: 'acc-ent-1b',
    question: 'Let $F(x) = \\displaystyle\\int_0^x (4 - t^2)\\,dt$ for $x > 0$. Which statement is true at $x = 2$?',
    options: ['$F$ has a local minimum at $x = 2$', '$F$ has a local maximum at $x = 2$', '$F$ has an inflection point at $x = 2$', '$F$ has a local maximum at $x = 0$'],
    correctIndex: 1,
    explanation: '$F\'(x) = 4 - x^2$, which changes from positive to negative at $x = 2$, so $F$ rises and then falls: a local maximum. An inflection point of $F$ would require $F\'\' = -2x$ to change sign, which happens at 0, not 2.',
    partNumber: 1,
    partTitle: 'The Accumulation Concept',
  },
  // Part 2 — Reading Graphs of f to Analyze F
  {
    id: 'acc-ent-2a',
    question: 'The graph of $f$ is made of segments joining $(0, -2)$, $(2, 2)$, $(6, 2)$ and $(8, -2)$. Let $g(x) = \\int_0^x f(t)\\,dt$. What is the maximum value of $g$ on $[0, 8]$, and where does it occur?',
    options: ['$8$, at $x = 8$', '$8$, at $x = 6$', '$9$, at $x = 7$', '$12$, at $x = 8$'],
    correctIndex: 2,
    explanation: '$g$ increases while $f > 0$, which lasts until $f$ crosses zero at $x = 7$. The signed areas give $g(2) = 0$, $g(6) = 8$ and $g(7) = 8 + 1 = 9$; after that the area is negative, so $g(8) = 8$.',
    partNumber: 2,
    partTitle: 'Reading Graphs of f to Analyze F',
  },
  {
    id: 'acc-ent-2b',
    question: 'Let $g(x) = \\displaystyle\\int_0^x (t - 1)(t - 4)\\,dt$. On what part of $(0, 5)$ is the graph of $g$ concave up?',
    options: ['$(4, 5)$', '$(1, 4)$', '$\\left(0, \\frac{5}{2}\\right)$', '$\\left(\\frac{5}{2}, 5\\right)$'],
    correctIndex: 3,
    explanation: '$g\'\'(x)$ is the derivative of the integrand: $\\frac{d}{dx}(x^2 - 5x + 4) = 2x - 5$, which is positive for $x > \\frac{5}{2}$. The intervals from the zeros 1 and 4 describe where $g$ increases or decreases.',
    partNumber: 2,
    partTitle: 'Reading Graphs of f to Analyze F',
  },
  // Part 3 — FTC Part 1 with Chain Rule Review
  {
    id: 'acc-ent-3a',
    question: 'Find $\\dfrac{d}{dx}\\displaystyle\\int_1^{\\sqrt{x}} e^{t^2}\\,dt$ for $x > 0$.',
    options: ['$\\frac{e^x}{2\\sqrt{x}}$', '$e^x$', '$\\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$', '$2\\sqrt{x}\\,e^x$'],
    correctIndex: 0,
    explanation: 'Substitute the upper limit into the integrand, $e^{(\\sqrt{x})^2} = e^x$, then multiply by its derivative $\\frac{1}{2\\sqrt{x}}$. Leaving out the chain factor gives $e^x$.',
    partNumber: 3,
    partTitle: 'FTC Part 1 with Chain Rule Review',
  },
  {
    id: 'acc-ent-3b',
    question: 'Let $g(x) = \\displaystyle\\int_x^{2x} \\ln t\\,dt$ for $x > 0$. Find $g\'(x)$.',
    options: ['$2\\ln(2x) + \\ln x$', '$\\ln(4x)$', '$\\ln(2x) - \\ln x$', '$\\frac{1}{x}$'],
    correctIndex: 1,
    explanation: 'Upper limit minus lower limit, each with its chain factor: $g\'(x) = 2\\ln(2x) - \\ln x = 2\\ln 2 + \\ln x = \\ln(4x)$. Without the factor 2 the result would be $\\ln(2x) - \\ln x = \\ln 2$.',
    partNumber: 3,
    partTitle: 'FTC Part 1 with Chain Rule Review',
  },
  // Part 4 — Net Change Applications
  {
    id: 'acc-ent-4a',
    question: 'A tank holds $40$ gallons at $t = 0$. Water enters at $6$ gal/min and leaves at $3\\sqrt{t}$ gal/min. How much water is in the tank at $t = 4$ minutes?',
    options: ['$64$ gal', '$8$ gal', '$48$ gal', '$40$ gal'],
    correctIndex: 2,
    explanation: 'Amount $= 40 + \\int_0^4 (6 - 3\\sqrt{t})\\,dt = 40 + 24 - 2(4)^{3/2} = 40 + 24 - 16 = 48$ gallons. Leaving out the initial 40 gallons gives 8.',
    partNumber: 4,
    partTitle: 'Net Change Applications',
  },
  {
    id: 'acc-ent-4b',
    question: 'For $0 \\le t \\le 8$ minutes, water enters a tank at $10$ gal/min and drains at $2t + 1$ gal/min. At what time is the amount of water in the tank greatest?',
    options: ['$t = 5$', '$t = 8$', '$t = 0$', '$t = 4.5$'],
    correctIndex: 3,
    explanation: 'The amount increases while inflow exceeds outflow, $10 > 2t + 1$, that is, for $t < 4.5$, and decreases afterward. So the maximum occurs at $t = 4.5$.',
    partNumber: 4,
    partTitle: 'Net Change Applications',
  },
  // Part 5 — Average Value of a Function
  {
    id: 'acc-ent-5a',
    question: 'What is the average value of $f(x) = \\dfrac{1}{x}$ on $[1, e^2]$?',
    options: ['$\\frac{2}{e^2 - 1}$', '$2$', '$1 - \\frac{1}{e^2}$', '$\\frac{1}{2}$'],
    correctIndex: 0,
    explanation: '$\\frac{1}{e^2 - 1}\\int_1^{e^2} \\frac{dx}{x} = \\frac{\\ln(e^2) - \\ln 1}{e^2 - 1} = \\frac{2}{e^2 - 1}$. Forgetting to divide by the interval length gives 2, and $1 - \\frac{1}{e^2}$ is the change in $f$, not its average.',
    partNumber: 5,
    partTitle: 'Average Value of a Function',
  },
  {
    id: 'acc-ent-5b',
    question: 'For $f(x) = 4 - x^2$ on $[0, 2]$, find the value of $c$ guaranteed by the Mean Value Theorem for Integrals.',
    options: ['$\\frac{8}{3}$', '$\\frac{2}{\\sqrt{3}}$', '$1$', '$\\frac{4}{3}$'],
    correctIndex: 1,
    explanation: 'The average value is $\\frac{1}{2}\\int_0^2 (4 - x^2)\\,dx = \\frac{1}{2}\\cdot\\frac{16}{3} = \\frac{8}{3}$. Solving $4 - c^2 = \\frac{8}{3}$ gives $c^2 = \\frac{4}{3}$, so $c = \\frac{2}{\\sqrt{3}}$. The value $\\frac{8}{3}$ is the average, not $c$.',
    partNumber: 5,
    partTitle: 'Average Value of a Function',
  },
  // Part 6 — Practice Workshop
  {
    id: 'acc-ent-6a',
    question: 'Let $g(x) = \\displaystyle\\int_{-1}^x (3t^2 - 12)\\,dt$. What is the absolute maximum value of $g$ on $[-1, 3]$?',
    options: ['$-20$', '$-27$', '$0$', '$-9$'],
    correctIndex: 2,
    explanation: '$g\'(x) = 3x^2 - 12 < 0$ on $(-1, 2)$ and $> 0$ on $(2, 3)$, so the candidates are $g(-1) = 0$, $g(2) = -27$ (the minimum) and $g(3) = -20$. The maximum is 0, at the left endpoint.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'acc-ent-6b',
    question: 'A particle has velocity $v(t) = t - 2$ on $0 \\le t \\le 4$. What are its average velocity and its average speed on this interval?',
    options: ['Velocity $0$, speed $0$', 'Velocity $1$, speed $1$', 'Velocity $-2$, speed $2$', 'Velocity $0$, speed $1$'],
    correctIndex: 3,
    explanation: 'Average velocity is $\\frac{1}{4}\\int_0^4 (t - 2)\\,dt = 0$, since the negative and positive areas cancel. Average speed uses $|v|$: $\\frac{1}{4}(2 + 2) = 1$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  // Part 7 — Comprehensive Assessment
  {
    id: 'acc-ent-7a',
    question: 'Let $g(x) = \\displaystyle\\int_x^{x^2} \\sqrt{t}\\,dt$. Find $g\'(4)$.',
    options: ['$30$', '$34$', '$2$', '$32$'],
    correctIndex: 0,
    explanation: '$g\'(x) = \\sqrt{x^2}\\cdot 2x - \\sqrt{x}$, so $g\'(4) = 4 \\cdot 8 - 2 = 30$. Adding the lower-limit term gives 34, and dropping the chain factor $2x$ gives 2.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
  {
    id: 'acc-ent-7b',
    question: 'A drug enters the bloodstream at a rate of $r(t) = 20e^{-0.5t}$ milligrams per hour. How many milligrams enter during the first 2 hours?',
    options: ['$\\frac{40}{e}$', '$40 - \\frac{40}{e}$', '$\\frac{20}{e}$', '$20 - \\frac{20}{e}$'],
    correctIndex: 1,
    explanation: '$\\int_0^2 20e^{-0.5t}\\,dt = \\left[-40e^{-0.5t}\\right]_0^2 = 40 - \\frac{40}{e}$. The value $\\frac{20}{e}$ is the rate at $t = 2$, not an amount, and $20 - \\frac{20}{e}$ forgets the factor 2 that comes from dividing by 0.5.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Accumulation Concept' },
    { partNumber: 2, partTitle: 'Reading Graphs of f to Analyze F' },
    { partNumber: 3, partTitle: 'FTC Part 1 with Chain Rule Review' },
    { partNumber: 4, partTitle: 'Net Change Applications' },
    { partNumber: 5, partTitle: 'Average Value of a Function' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Comprehensive Assessment' },
  ]
}
