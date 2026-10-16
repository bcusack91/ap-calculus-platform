/**
 * Entrance Quiz — Integration by Parts — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Formula
  {
    id: 'ibp-ent-1a',
    question: 'What is $\\int x\\sin(2x)\\,dx$?',
    options: [
      '$-\\frac{x}{2}\\cos 2x+\\frac{1}{4}\\sin 2x+C$',
      '$-\\frac{x}{2}\\cos 2x+C$',
      '$-2x\\cos 2x+4\\sin 2x+C$',
      '$\\frac{x}{2}\\cos 2x+\\frac{1}{4}\\sin 2x+C$',
    ],
    correctIndex: 0,
    explanation: 'With $u = x$ and $dv = \\sin 2x\\,dx$, $v = -\\frac{1}{2}\\cos 2x$, so the integral is $-\\frac{x}{2}\\cos 2x + \\frac{1}{2}\\int \\cos 2x\\,dx = -\\frac{x}{2}\\cos 2x + \\frac{1}{4}\\sin 2x + C$. Stopping after $uv$ drops the $\\int v\\,du$ term, and multiplying by 2 instead of dividing differentiates $\\sin 2x$.',
    partNumber: 1,
    partTitle: 'The Formula',
  },
  {
    id: 'ibp-ent-1b',
    question: 'A student applies integration by parts to $\\int xe^x\\,dx$ with $u = e^x$ and $dv = x\\,dx$. What happens?',
    options: [
      'It gives the final answer $\\frac{x^2}{2}e^x + C$ in one step',
      'The remaining integral is $\\int e^x\\,dx$, so it finishes quickly',
      'It follows the standard priority order, so it is the fastest route',
      'The new integral, $\\int \\frac{x^2}{2}e^x\\,dx$, is harder',
    ],
    correctIndex: 3,
    explanation: 'With $v = \\frac{x^2}{2}$ and $du = e^x\\,dx$, the formula leaves $\\int \\frac{x^2}{2}e^x\\,dx$, which has a higher power of $x$ than the original. LIATE puts the algebraic factor $x$ ahead of $e^x$, so $u = x$ is the choice that simplifies.',
    partNumber: 1,
    partTitle: 'The Formula',
  },

  // Part 2 — Tabular Method
  {
    id: 'ibp-ent-2a',
    question: 'What is $\\int x^2\\cos x\\,dx$?',
    options: [
      '$x^2\\sin x-2x\\cos x-2\\sin x+C$',
      '$x^2\\sin x+2x\\cos x-2\\sin x+C$',
      '$x^2\\sin x+2x\\cos x+2\\sin x+C$',
      '$x^2\\sin x+2x\\cos x+C$',
    ],
    correctIndex: 1,
    explanation: 'The table pairs $x^2, 2x, 2$ with $\\sin x, -\\cos x, -\\sin x$ and signs $+, -, +$: $x^2\\sin x + 2x\\cos x - 2\\sin x + C$. The other options lose a sign or the row for the constant $2$.',
    partNumber: 2,
    partTitle: 'Tabular Method',
  },
  {
    id: 'ibp-ent-2b',
    question: 'What is $\\int (x^2 + 1)e^{-x}\\,dx$?',
    options: [
      '$e^{-x}(x^2+2x+3)+C$',
      '$-e^{-x}(x^2-2x+3)+C$',
      '$-e^{-x}(x^2+2x+3)+C$',
      '$-(x^2+1)e^{-x}+C$',
    ],
    correctIndex: 2,
    explanation: 'The table pairs $x^2 + 1, 2x, 2$ with $-e^{-x}, e^{-x}, -e^{-x}$ and signs $+, -, +$, giving $-e^{-x}(x^2 + 1) - 2xe^{-x} - 2e^{-x} = -e^{-x}(x^2 + 2x + 3) + C$. Each antiderivative of $e^{-x}$ flips the sign, which is where the other options go wrong.',
    partNumber: 2,
    partTitle: 'Tabular Method',
  },

  // Part 3 — Cycling (Boomerang) Problems
  {
    id: 'ibp-ent-3a',
    question: 'What is $\\int_0^{\\pi} e^x\\sin x\\,dx$?',
    options: ['$-\\frac{e^{\\pi}+1}{2}$', '$e^{\\pi}+1$', '$\\frac{e^{\\pi}}{2}$', '$\\frac{e^{\\pi}+1}{2}$'],
    correctIndex: 3,
    explanation: 'Two rounds of parts give the antiderivative $\\frac{e^x(\\sin x - \\cos x)}{2}$, which is $\\frac{e^{\\pi}}{2}$ at $\\pi$ and $-\\frac{1}{2}$ at $0$, so the value is $\\frac{e^{\\pi} + 1}{2}$. Forgetting to divide by 2 after solving for $I$ gives $e^{\\pi} + 1$, and dropping the lower limit gives $\\frac{e^{\\pi}}{2}$.',
    partNumber: 3,
    partTitle: 'Cycling (Boomerang) Problems',
  },
  {
    id: 'ibp-ent-3b',
    question: 'For $I = \\int e^x\\cos 2x\\,dx$, a first round of parts with $u = \\cos 2x$ gives $I = e^x\\cos 2x + 2\\int e^x\\sin 2x\\,dx$. If the second round uses $u = e^x$ and $dv = \\sin 2x\\,dx$, what happens?',
    options: [
      'The original integral returns with a new coefficient to solve for',
      'Every integral cancels and the answer appears with no work left',
      'It undoes the first step, leaving $I = I$',
      'The integral becomes $\\int e^x\\,dx$, which finishes the problem',
    ],
    correctIndex: 2,
    explanation: 'Switching the role of $e^x$ reverses the first step: $2\\int e^x\\sin 2x\\,dx = -e^x\\cos 2x + I$, so the equation collapses to $I = I$. In a cycling problem the same type of factor must be $u$ both times (here the trig factor) so that $I$ returns with a coefficient you can solve for.',
    partNumber: 3,
    partTitle: 'Cycling (Boomerang) Problems',
  },

  // Part 4 — Definite Integrals with IBP
  {
    id: 'ibp-ent-4a',
    question: 'What is $\\int_0^1 xe^{2x}\\,dx$?',
    options: ['$\\frac{e^2-1}{4}$', '$\\frac{e^2}{4}$', '$\\frac{e^2+1}{4}$', '$\\frac{3e^2-1}{4}$'],
    correctIndex: 2,
    explanation: 'An antiderivative is $\\frac{x}{2}e^{2x} - \\frac{1}{4}e^{2x}$; at $1$ it is $\\frac{e^2}{4}$ and at $0$ it is $-\\frac{1}{4}$, so the value is $\\frac{e^2 + 1}{4}$. Dropping the lower-limit term gives $\\frac{e^2}{4}$, and adding the second term instead of subtracting gives $\\frac{3e^2 - 1}{4}$.',
    partNumber: 4,
    partTitle: 'Definite Integrals with IBP',
  },
  {
    id: 'ibp-ent-4b',
    question: 'What is $\\int_1^e \\frac{\\ln x}{x^2}\\,dx$?',
    options: ['$1-\\frac{1}{e}$', '$1-\\frac{2}{e}$', '$\\frac{2}{e}-1$', '$-\\frac{1}{e}$'],
    correctIndex: 1,
    explanation: 'With $u = \\ln x$ and $v = -\\frac{1}{x}$, an antiderivative is $-\\frac{\\ln x}{x} - \\frac{1}{x}$: $\\left(-\\frac{2}{e}\\right) - (-1) = 1 - \\frac{2}{e}$. The value $-\\frac{1}{e}$ is the $[uv]$ term alone, and $1 - \\frac{1}{e}$ is the remaining integral alone.',
    partNumber: 4,
    partTitle: 'Definite Integrals with IBP',
  },

  // Part 5 — Special Cases
  {
    id: 'ibp-ent-5a',
    question: 'What is $\\int \\ln(3x)\\,dx$?',
    options: ['$x\\ln(3x)-x+C$', '$x\\ln(3x)-3x+C$', '$3x\\ln(3x)-3x+C$', '$\\frac{1}{3}x\\ln(3x)-x+C$'],
    correctIndex: 0,
    explanation: 'With $u = \\ln(3x)$ and $dv = dx$, $du = \\frac{1}{x}\\,dx$ and $v = x$, so the integral is $x\\ln(3x) - \\int 1\\,dx = x\\ln(3x) - x + C$. The chain factor $3$ cancels in $du$, so no extra 3 or $\\frac{1}{3}$ appears.',
    partNumber: 5,
    partTitle: 'Special Cases',
  },
  {
    id: 'ibp-ent-5b',
    question: 'What is $\\int_0^{1/2} \\arcsin x\\,dx$?',
    options: [
      '$\\frac{\\pi}{12}+\\frac{\\sqrt{3}}{2}$',
      '$\\frac{\\pi}{12}-\\frac{\\sqrt{3}}{2}$',
      '$\\frac{\\pi}{6}+\\frac{\\sqrt{3}}{2}-1$',
      '$\\frac{\\pi}{12}+\\frac{\\sqrt{3}}{2}-1$',
    ],
    correctIndex: 3,
    explanation: 'An antiderivative is $x\\arcsin x + \\sqrt{1 - x^2}$; at $\\frac{1}{2}$ it is $\\frac{\\pi}{12} + \\frac{\\sqrt{3}}{2}$ and at $0$ it is $1$. Forgetting the lower limit drops the $-1$, and $\\frac{\\pi}{6}$ leaves out the factor $x = \\frac{1}{2}$.',
    partNumber: 5,
    partTitle: 'Special Cases',
  },

  // Part 6 — Practice Workshop
  {
    id: 'ibp-ent-6a',
    question: 'Which integral is best done by a substitution alone, without integration by parts?',
    options: ['$\\int x^2 e^{x}\\,dx$', '$\\int x e^{x^2}\\,dx$', '$\\int x\\ln x\\,dx$', '$\\int e^x\\sin x\\,dx$'],
    correctIndex: 1,
    explanation: 'In $\\int xe^{x^2}\\,dx$ the factor $x$ is half the derivative of $x^2$, so $u = x^2$ gives $\\frac{1}{2}e^{x^2} + C$. The other three are products with no matching derivative and need parts (tabular, standard, and cycling).',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'ibp-ent-6b',
    question: 'What is $\\int x^3 e^{x^2}\\,dx$?',
    options: [
      '$e^{x^2}(x^2-1)+C$',
      '$\\frac{1}{2}x^2e^{x^2}+C$',
      '$\\frac{1}{2}e^{x^2}(x^2-1)+C$',
      '$\\frac{x^4}{4}e^{x^2}+C$',
    ],
    correctIndex: 2,
    explanation: 'Substitute $t = x^2$, $dt = 2x\\,dx$, to get $\\frac{1}{2}\\int te^t\\,dt = \\frac{1}{2}(t - 1)e^t + C = \\frac{1}{2}e^{x^2}(x^2 - 1) + C$. Leaving out the $\\frac{1}{2}$ or the $\\int v\\,du$ term are the usual slips.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },

  // Part 7 — Final Assessment
  {
    id: 'ibp-ent-7a',
    question: 'Which statement about $\\int e^x\\sin x\\,dx$ is correct?',
    options: [
      'The tabular method ends after two rows because $\\sin x$ repeats',
      'One round of parts with $u = \\sin x$ gives the final answer',
      'Parts cannot be used, so a substitution is required instead',
      'Two rounds of parts bring back the original integral',
    ],
    correctIndex: 3,
    explanation: 'Neither factor ever differentiates to zero, so after two rounds the original integral reappears and you solve for it algebraically. The tabular method never terminates here, and one round leaves another product to integrate.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'ibp-ent-7b',
    question: 'What is $\\int_0^{\\pi/2} x\\sin x\\,dx$?',
    options: ['$1$', '$\\frac{\\pi}{2}$', '$\\frac{\\pi}{2}-1$', '$\\frac{\\pi}{2}+1$'],
    correctIndex: 0,
    explanation: 'An antiderivative is $-x\\cos x + \\sin x$, which is $1$ at $\\frac{\\pi}{2}$ and $0$ at $0$, so the value is $1$. The value $\\frac{\\pi}{2} - 1$ is $\\int_0^{\\pi/2} x\\cos x\\,dx$ instead.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Formula' },
    { partNumber: 2, partTitle: 'Tabular Method' },
    { partNumber: 3, partTitle: 'Cycling (Boomerang) Problems' },
    { partNumber: 4, partTitle: 'Definite Integrals with IBP' },
    { partNumber: 5, partTitle: 'Special Cases' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
