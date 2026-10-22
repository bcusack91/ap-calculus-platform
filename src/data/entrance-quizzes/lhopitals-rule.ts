/**
 * Entrance Quiz — L'Hospital's Rule (AP Calculus AB, CED 4.7) — 10 questions (2 per lesson part, 5 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Indeterminate Forms and the Rule
  {
    id: 'lhr-ent-1a',
    question: 'For which limit does direct substitution give an indeterminate form?',
    options: ['$\\lim_{x \\to 0} \\frac{\\sin x}{e^x - 1}$', '$\\lim_{x \\to 0} \\frac{\\cos x}{x^2 + 1}$', '$\\lim_{x \\to 1} \\frac{x^2 - 1}{x}$', '$\\lim_{x \\to 0} \\frac{e^x}{\\cos x}$'],
    correctIndex: 0,
    explanation: 'At $x = 0$, $\\sin 0 = 0$ and $e^0 - 1 = 0$: the form $\\frac{0}{0}$. The others substitute to $\\frac{1}{1}$, $\\frac{0}{1}$ and $\\frac{1}{1}$, ordinary numbers.',
    partNumber: 1,
    partTitle: 'Indeterminate Forms and the Rule',
  },
  {
    id: 'lhr-ent-1b',
    question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin(4x)}{3x}$.',
    options: ['$\\frac{4}{3}$', '$\\frac{3}{4}$', '$1$', '$0$'],
    correctIndex: 0,
    explanation: 'The form is $\\frac{0}{0}$, and the rule gives $\\frac{4\\cos(4x)}{3} \\to \\frac{4}{3}$. Flipping gives $\\frac{3}{4}$, and dropping the chain-rule factor gives $\\frac{1}{3}$, not listed.',
    partNumber: 1,
    partTitle: 'Indeterminate Forms and the Rule',
  },
  // Part 2 — 0/0 Limits and Repeated Use
  {
    id: 'lhr-ent-2a',
    question: 'Evaluate $\\lim_{x \\to 1} \\frac{x^4 - 1}{x - 1}$.',
    options: ['$4$', '$0$', '$1$', '$3$'],
    correctIndex: 0,
    explanation: 'The form is $\\frac{0}{0}$. The rule gives $\\frac{4x^3}{1} \\to 4$, the same as factoring $x^4 - 1 = (x - 1)(x^3 + x^2 + x + 1)$.',
    partNumber: 2,
    partTitle: '0/0 Limits and Repeated Use',
  },
  {
    id: 'lhr-ent-2b',
    question: 'Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos(3x)}{x^2}$.',
    options: ['$\\frac{9}{2}$', '$\\frac{3}{2}$', '$9$', '$\\frac{1}{2}$'],
    correctIndex: 0,
    explanation: 'Once: $\\frac{3\\sin(3x)}{2x}$, still $\\frac{0}{0}$. Twice: $\\frac{9\\cos(3x)}{2} \\to \\frac{9}{2}$. Using only one chain-rule factor gives $\\frac{3}{2}$, and dropping the chain-rule factors entirely gives $\\frac{1}{2}$.',
    partNumber: 2,
    partTitle: '0/0 Limits and Repeated Use',
  },
  // Part 3 — ∞/∞ Limits and Growth Rates
  {
    id: 'lhr-ent-3a',
    question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{x^3}{e^x}$.',
    options: ['$0$', '$\\infty$', '$6$', '$1$'],
    correctIndex: 0,
    explanation: 'Three applications give $\\frac{6}{e^x} \\to 0$: exponentials outgrow every power. The value $6$ forgets that $e^x$ is still in the denominator.',
    partNumber: 3,
    partTitle: '∞/∞ Limits and Growth Rates',
  },
  {
    id: 'lhr-ent-3b',
    question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{\\ln x}{x^{1/3}}$.',
    options: ['$0$', '$3$', '$\\infty$', '$\\frac{1}{3}$'],
    correctIndex: 0,
    explanation: 'The form is $\\frac{\\infty}{\\infty}$. The rule gives $\\frac{1/x}{\\frac{1}{3}x^{-2/3}} = \\frac{3}{x^{1/3}} \\to 0$. A logarithm grows more slowly than any positive power of $x$.',
    partNumber: 3,
    partTitle: '∞/∞ Limits and Growth Rates',
  },
  // Part 4 — Tables, Graphs and Justification
  {
    id: 'lhr-ent-4a',
    question: '$f$ and $g$ have continuous derivatives, with $f(2) = 0$, $g(2) = 0$, $f\'(2) = 6$ and $g\'(2) = -3$. What is $\\lim_{x \\to 2} \\frac{f(x)}{g(x)}$?',
    options: ['$-2$', '$-\\frac{1}{2}$', '$2$', 'Does not exist'],
    correctIndex: 0,
    explanation: 'Both limits are $0$, so the rule gives $\\frac{f\'(2)}{g\'(2)} = \\frac{6}{-3} = -2$. Flipping gives $-\\frac{1}{2}$.',
    partNumber: 4,
    partTitle: 'Tables, Graphs and Justification',
  },
  {
    id: 'lhr-ent-4b',
    question: '$f$ is differentiable and $f(3) = 0$. Which statement justifies using L\'Hospital\'s Rule for $\\lim_{x \\to 3} \\frac{f(x)}{x - 3}$?',
    options: ['$\\lim_{x \\to 3} f(x) = 0$ and $\\lim_{x \\to 3} (x - 3) = 0$', '$f(3) = 0$, so the quotient is undefined at $3$', '$f\'(3)$ exists, so $f\'$ can replace $f$', 'The denominator is $0$, so the limit is infinite'],
    correctIndex: 0,
    explanation: 'The rule needs the form $\\frac{0}{0}$, so name both limits: $f$ is continuous, so $f(x) \\to f(3) = 0$, and $x - 3 \\to 0$. An undefined quotient or a zero denominator alone does not establish the form.',
    partNumber: 4,
    partTitle: 'Tables, Graphs and Justification',
  },
  // Part 5 — Traps and Final Assessment
  {
    id: 'lhr-ent-5a',
    question: 'What is $\\lim_{x \\to 0} \\frac{2 + \\sin x}{1 + x}$?',
    options: ['$2$', '$1$', '$0$', '$3$'],
    correctIndex: 0,
    explanation: 'Substitution gives $\\frac{2}{1} = 2$, which is the limit. Applying L\'Hospital\'s Rule here is not allowed and would give $\\frac{\\cos x}{1} \\to 1$.',
    partNumber: 5,
    partTitle: 'Traps and Final Assessment',
  },
  {
    id: 'lhr-ent-5b',
    question: 'What is $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2 + 2x}$?',
    options: ['$0$', '$\\frac{1}{2}$', '$\\frac{1}{4}$', 'Does not exist'],
    correctIndex: 0,
    explanation: 'One application gives $\\frac{\\sin x}{2x + 2} \\to \\frac{0}{2} = 0$. The form is gone, so a second application (which would give $\\frac{1}{2}$) is not allowed.',
    partNumber: 5,
    partTitle: 'Traps and Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Indeterminate Forms and the Rule' },
    { partNumber: 2, partTitle: '0/0 Limits and Repeated Use' },
    { partNumber: 3, partTitle: '∞/∞ Limits and Growth Rates' },
    { partNumber: 4, partTitle: 'Tables, Graphs and Justification' },
    { partNumber: 5, partTitle: 'Traps and Final Assessment' },
  ]
}
