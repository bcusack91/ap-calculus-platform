/**
 * Entrance Quiz — u-Substitution (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Basic u-Substitution
  {
    id: 'usb-ent-1a',
    question: 'Evaluate $\\displaystyle\\int 6x^2(x^3 + 1)^4\\,dx$.',
    options: ['$\\frac{2(x^3 + 1)^5}{5} + C$', '$\\frac{(x^3 + 1)^5}{5} + C$', '$\\frac{(x^3 + 1)^5}{3} + C$', '$6(x^3 + 1)^5 + C$'],
    correctIndex: 0,
    explanation: 'Let $u = x^3 + 1$, so $du = 3x^2\\,dx$ and $6x^2\\,dx = 2\\,du$. Then $\\int 2u^4\\,du = \\frac{2u^5}{5} + C = \\frac{2(x^3 + 1)^5}{5} + C$.',
    partNumber: 1,
    partTitle: 'Basic u-Substitution',
  },
  {
    id: 'usb-ent-1b',
    question: 'Evaluate $\\displaystyle\\int \\sin x\\, e^{\\cos x}\\,dx$.',
    options: ['$e^{\\cos x} + C$', '$-e^{\\cos x} + C$', '$-e^{\\cos x}\\sin x + C$', '$e^{\\sin x} + C$'],
    correctIndex: 1,
    explanation: 'Let $u = \\cos x$, so $du = -\\sin x\\,dx$. The integral becomes $-\\int e^u\\,du = -e^{\\cos x} + C$. Dropping the negative from $du$ gives $e^{\\cos x}$.',
    partNumber: 1,
    partTitle: 'Basic u-Substitution',
  },
  // Part 2 — Adjusting for Constants
  {
    id: 'usb-ent-2a',
    question: 'Evaluate $\\displaystyle\\int x^3\\sec^2(x^4)\\,dx$.',
    options: ['$\\tan(x^4) + C$', '$4\\tan(x^4) + C$', '$\\frac{1}{4}\\tan(x^4) + C$', '$x^3\\tan(x^4) + C$'],
    correctIndex: 2,
    explanation: 'With $u = x^4$, $du = 4x^3\\,dx$, so $x^3\\,dx = \\frac{1}{4}du$ and the integral is $\\frac{1}{4}\\int \\sec^2 u\\,du = \\frac{1}{4}\\tan(x^4) + C$. A variable like $x^3$ cannot be moved outside the integral.',
    partNumber: 2,
    partTitle: 'Adjusting for Constants',
  },
  {
    id: 'usb-ent-2b',
    question: 'Evaluate $\\displaystyle\\int \\frac{2x + 3}{x^2 + 3x + 1}\\,dx$.',
    options: ['$\\frac{1}{2}\\ln|x^2 + 3x + 1| + C$', '$(2x + 3)\\ln|x^2 + 3x + 1| + C$', '$-\\frac{2x + 3}{(x^2 + 3x + 1)^2} + C$', '$\\ln|x^2 + 3x + 1| + C$'],
    correctIndex: 3,
    explanation: 'The numerator is exactly the derivative of the denominator, so with $u = x^2 + 3x + 1$ the integral is $\\int \\frac{du}{u} = \\ln|x^2 + 3x + 1| + C$. No constant adjustment is needed.',
    partNumber: 2,
    partTitle: 'Adjusting for Constants',
  },
  // Part 3 — Definite Integrals with u-Sub
  {
    id: 'usb-ent-3a',
    question: 'Evaluate $\\displaystyle\\int_0^2 x e^{x^2}\\,dx$.',
    options: ['$\\frac{e^4 - 1}{2}$', '$e^4 - 1$', '$2e^4 - 2$', '$\\frac{e^4}{2}$'],
    correctIndex: 0,
    explanation: 'With $u = x^2$, $x\\,dx = \\frac{1}{2}du$ and the limits become 0 and 4: $\\frac{1}{2}\\int_0^4 e^u\\,du = \\frac{e^4 - 1}{2}$. Forgetting that $e^0 = 1$ gives $\\frac{e^4}{2}$.',
    partNumber: 3,
    partTitle: 'Definite Integrals with u-Sub',
  },
  {
    id: 'usb-ent-3b',
    question: 'Using $u = \\cos x$, which integral equals $\\displaystyle\\int_0^{\\pi/3} \\sin x\\cos^2 x\\,dx$?',
    options: ['$\\int_0^{\\pi/3} u^2\\,du$', '$\\int_{1/2}^{1} u^2\\,du$', '$\\int_1^{1/2} u^2\\,du$', '$-\\int_{1/2}^{1} u^2\\,du$'],
    correctIndex: 1,
    explanation: 'Here $du = -\\sin x\\,dx$, and the limits change from $x = 0, \\frac{\\pi}{3}$ to $u = 1, \\frac{1}{2}$. So the integral is $-\\int_1^{1/2} u^2\\,du = \\int_{1/2}^{1} u^2\\,du$. Keeping the $x$-limits is a common error.',
    partNumber: 3,
    partTitle: 'Definite Integrals with u-Sub',
  },
  // Part 4 — Trickier Substitutions
  {
    id: 'usb-ent-4a',
    question: 'Evaluate $\\displaystyle\\int x\\sqrt{x - 3}\\,dx$.',
    options: ['$\\frac{2}{3}x(x - 3)^{3/2} + C$', '$\\frac{2}{5}(x - 3)^{5/2} + C$', '$\\frac{2}{5}(x - 3)^{5/2} + 2(x - 3)^{3/2} + C$', '$\\frac{x^2}{3}(x - 3)^{3/2} + C$'],
    correctIndex: 2,
    explanation: 'Let $u = x - 3$, so $x = u + 3$ and $dx = du$: $\\int (u + 3)u^{1/2}\\,du = \\frac{2}{5}u^{5/2} + 2u^{3/2} + C$. Treating the outside $x$ as a constant gives the first option, which does not differentiate back correctly.',
    partNumber: 4,
    partTitle: 'Trickier Substitutions',
  },
  {
    id: 'usb-ent-4b',
    question: 'Evaluate $\\displaystyle\\int_e^{e^2} \\frac{dx}{x\\ln x}$.',
    options: ['$\\frac{3}{2}$', '$e^2 - e$', '$\\ln(e^2 - e)$', '$\\ln 2$'],
    correctIndex: 3,
    explanation: 'Let $u = \\ln x$, so $du = \\frac{dx}{x}$ and the limits become 1 and 2: $\\int_1^2 \\frac{du}{u} = \\ln 2$. Integrating as if it were $\\int \\frac{\\ln x}{x}\\,dx$ gives $\\frac{3}{2}$.',
    partNumber: 4,
    partTitle: 'Trickier Substitutions',
  },
  // Part 5 — Long Division and Completing the Square
  {
    id: 'usb-ent-5a',
    question: 'Evaluate $\\displaystyle\\int \\frac{x^2 + 2x}{x + 1}\\,dx$.',
    options: ['$\\frac{x^2}{2} + x - \\ln|x + 1| + C$', '$\\frac{x^2}{2} + x + \\ln|x + 1| + C$', '$x^2 + x - \\ln|x + 1| + C$', '$\\frac{x^3/3 + x^2}{x^2/2 + x} + C$'],
    correctIndex: 0,
    explanation: 'Long division gives $\\frac{x^2 + 2x}{x + 1} = x + 1 - \\frac{1}{x + 1}$, which integrates to $\\frac{x^2}{2} + x - \\ln|x + 1| + C$. Integrating the top and bottom separately is not valid.',
    partNumber: 5,
    partTitle: 'Long Division and Completing the Square',
  },
  {
    id: 'usb-ent-5b',
    question: 'Evaluate $\\displaystyle\\int \\frac{dx}{\\sqrt{8 + 2x - x^2}}$.',
    options: ['$\\arcsin\\left(\\frac{x + 1}{3}\\right) + C$', '$\\arcsin\\left(\\frac{x - 1}{3}\\right) + C$', '$\\frac{1}{3}\\arctan\\left(\\frac{x - 1}{3}\\right) + C$', '$\\arcsin(x - 1) + C$'],
    correctIndex: 1,
    explanation: 'Complete the square: $8 + 2x - x^2 = 9 - (x - 1)^2$. This is the arcsine form with $a = 3$ and $u = x - 1$, giving $\\arcsin\\frac{x - 1}{3} + C$.',
    partNumber: 5,
    partTitle: 'Long Division and Completing the Square',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'usb-ent-6a',
    question: 'Evaluate $\\displaystyle\\int \\frac{4x + 1}{x^2 + 1}\\,dx$.',
    options: ['$4\\ln(x^2 + 1) + \\arctan x + C$', '$2\\ln(x^2 + 1) + C$', '$2\\ln(x^2 + 1) + \\arctan x + C$', '$2\\arctan x + \\ln(x^2 + 1) + C$'],
    correctIndex: 2,
    explanation: 'Split: $\\int \\frac{4x}{x^2 + 1}\\,dx = 2\\ln(x^2 + 1)$ (with $u = x^2 + 1$, $du = 2x\\,dx$) and $\\int \\frac{1}{x^2 + 1}\\,dx = \\arctan x$. Together: $2\\ln(x^2 + 1) + \\arctan x + C$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'usb-ent-6b',
    question: 'Evaluate $\\displaystyle\\int_{-1}^{1} x e^{x^2}\\,dx$.',
    options: ['$e - 1$', '$2(e - 1)$', '$\\frac{e - 1}{2}$', '$0$'],
    correctIndex: 3,
    explanation: 'The integrand is odd, since $(-x)e^{(-x)^2} = -xe^{x^2}$, so its integral over $[-1, 1]$ is 0. Equivalently, $u = x^2$ sends both limits to $u = 1$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Comprehensive Assessment
  {
    id: 'usb-ent-7a',
    question: 'Given $\\int_1^4 f(u)\\,du = 12$, evaluate $\\displaystyle\\int_1^2 f(3x - 2)\\,dx$.',
    options: ['$4$', '$12$', '$36$', '$\\frac{4}{3}$'],
    correctIndex: 0,
    explanation: 'Let $u = 3x - 2$, so $dx = \\frac{1}{3}du$ and the limits $x = 1, 2$ become $u = 1, 4$. The integral is $\\frac{1}{3}\\int_1^4 f(u)\\,du = 4$. Multiplying by 3 instead gives 36.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
  {
    id: 'usb-ent-7b',
    question: 'A particle has velocity $v(t) = \\dfrac{2t}{t^2 + 1}$. What is its displacement from $t = 0$ to $t = 3$?',
    options: ['$\\frac{1}{2}\\ln 10$', '$\\ln 10$', '$2\\ln 10$', '$\\frac{3}{5}$'],
    correctIndex: 1,
    explanation: 'With $u = t^2 + 1$, $du = 2t\\,dt$ matches the numerator exactly, so the displacement is $\\int_1^{10} \\frac{du}{u} = \\ln 10$. Adding an unneeded factor $\\frac{1}{2}$ gives $\\frac{1}{2}\\ln 10$, and $\\frac{3}{5}$ is just $v(3)$.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Basic u-Substitution' },
    { partNumber: 2, partTitle: 'Adjusting for Constants' },
    { partNumber: 3, partTitle: 'Definite Integrals with u-Sub' },
    { partNumber: 4, partTitle: 'Trickier Substitutions' },
    { partNumber: 5, partTitle: 'Long Division and Completing the Square' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Comprehensive Assessment' },
  ]
}
