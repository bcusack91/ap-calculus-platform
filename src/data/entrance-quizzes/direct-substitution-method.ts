/**
 * Entrance Quiz — Direct Substitution Method — 8 questions (2 per lesson part, 4 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Idea of Direct Substitution
  {
    id: 'dsm-ent-1a',
    question: 'Evaluate $\\lim_{x \\to -2} (x^3 + 2x^2 - 5x + 1)$.',
    options: ['$11$', '$-9$', '$27$', '$-5$'],
    correctIndex: 0,
    explanation: 'A polynomial is continuous, so substitute: $(-2)^3 + 2(4) - 5(-2) + 1 = -8 + 8 + 10 + 1 = 11$. Treating $-5(-2)$ as $-10$ gives $-9$.',
    partNumber: 1,
    partTitle: 'The Idea of Direct Substitution',
  },
  {
    id: 'dsm-ent-1b',
    question: 'Let $f(x) = \\dfrac{x^2 - 4}{x - 2}$ for $x \\ne 2$ and $f(2) = 7$. A student writes $\\lim_{x \\to 2} f(x) = f(2) = 7$ "by direct substitution." What is wrong?',
    options: ['Nothing, since $f(2)$ is defined and equals 7', 'Substitution requires $f(2) = 0$, which fails here', 'Substitution requires continuity at 2, which fails here', 'Nothing, since every rational function is continuous'],
    correctIndex: 2,
    explanation: 'Direct substitution gives the limit only when $f$ is continuous at the point. Near 2, $f(x) = x + 2 \\to 4$, which differs from $f(2) = 7$, so $f$ is not continuous there and the substitution is invalid.',
    partNumber: 1,
    partTitle: 'The Idea of Direct Substitution',
  },
  // Part 2 — When Direct Substitution Works
  {
    id: 'dsm-ent-2a',
    question: 'For $f(x) = \\dfrac{\\sqrt{x}}{x^2 - 9}$, at which value of $a$ does direct substitution give $\\lim_{x \\to a} f(x)$?',
    options: ['$a = 3$', '$a = -1$', '$a = -3$', '$a = 1$'],
    correctIndex: 3,
    explanation: 'The function is continuous where $\\sqrt{x}$ is defined ($x \\ge 0$) and the denominator is nonzero ($x \\ne \\pm 3$). Only $a = 1$ meets both conditions, giving $\\frac{1}{-8}$.',
    partNumber: 2,
    partTitle: 'When Direct Substitution Works',
  },
  {
    id: 'dsm-ent-2b',
    question: 'Evaluate $\\lim_{x \\to \\pi} \\dfrac{x + \\sin x}{2 + \\cos x}$.',
    options: ['$\\pi$', '$\\frac{\\pi}{3}$', '$\\pi + 1$', '$\\frac{\\pi}{2}$'],
    correctIndex: 0,
    explanation: 'Sine, cosine and $x$ are continuous and the denominator $2 + \\cos \\pi = 1$ is nonzero, so substitute: $\\frac{\\pi + 0}{2 - 1} = \\pi$. Using $\\cos \\pi = 1$ instead of $-1$ gives $\\frac{\\pi}{3}$.',
    partNumber: 2,
    partTitle: 'When Direct Substitution Works',
  },
  // Part 3 — Limit Laws
  {
    id: 'dsm-ent-3a',
    question: 'Suppose $\\lim_{x \\to a} f(x) = -2$ and $\\lim_{x \\to a} g(x) = 3$. Evaluate $\\lim_{x \\to a} \\dfrac{[f(x)]^2 - g(x)}{f(x) + 4g(x)}$.',
    options: ['$-\\frac{7}{10}$', '$-\\frac{1}{10}$', '$\\frac{1}{2}$', '$\\frac{1}{10}$'],
    correctIndex: 3,
    explanation: 'By the power, sum, constant multiple and quotient laws: $\\frac{(-2)^2 - 3}{-2 + 4(3)} = \\frac{1}{10}$. The denominator limit is nonzero, so the quotient law applies; treating $(-2)^2$ as $-4$ gives $-\\frac{7}{10}$.',
    partNumber: 3,
    partTitle: 'Limit Laws',
  },
  {
    id: 'dsm-ent-3b',
    question: 'Suppose $\\lim_{x \\to 3} g(x) = 2$, and $h$ is continuous everywhere with $h(2) = 5$ and $h(3) = 7$. What is $\\lim_{x \\to 3} h(g(x))$?',
    options: ['$5$', '$7$', '$10$', '$14$'],
    correctIndex: 0,
    explanation: 'Because $h$ is continuous at 2, the limit can move inside: $\\lim_{x \\to 3} h(g(x)) = h\\left(\\lim_{x \\to 3} g(x)\\right) = h(2) = 5$. The value $h(3)$ would be used only if the inside approached 3.',
    partNumber: 3,
    partTitle: 'Limit Laws',
  },
  // Part 4 — When Direct Substitution Fails
  {
    id: 'dsm-ent-4a',
    question: 'Which limit produces an indeterminate form when you substitute directly?',
    options: ['$\\lim_{x \\to 0} \\frac{x}{\\cos x}$', '$\\lim_{x \\to 2} \\frac{x + 2}{x - 2}$', '$\\lim_{x \\to 0} \\frac{e^x}{x + 1}$', '$\\lim_{x \\to 1} \\frac{\\ln x}{x - 1}$'],
    correctIndex: 3,
    explanation: 'At $x = 1$, $\\frac{\\ln 1}{1 - 1} = \\frac{0}{0}$, which is indeterminate. The others give $\\frac{0}{1} = 0$, $\\frac{4}{0}$ (nonzero over zero, not indeterminate), and $\\frac{1}{1} = 1$.',
    partNumber: 4,
    partTitle: 'When Direct Substitution Fails',
  },
  {
    id: 'dsm-ent-4b',
    question: 'Direct substitution into $\\lim_{x \\to 0^+} \\left(\\dfrac{1}{x} - \\dfrac{1}{x^2}\\right)$ gives $\\infty - \\infty$. After combining into one fraction, what is the limit?',
    options: ['$0$', '$-1$', '$-\\infty$', '$1$'],
    correctIndex: 2,
    explanation: 'Combine: $\\frac{1}{x} - \\frac{1}{x^2} = \\frac{x - 1}{x^2}$. As $x \\to 0^+$ the numerator approaches $-1$ and the denominator is a tiny positive number, so the limit is $-\\infty$; $\\infty - \\infty$ is not automatically 0.',
    partNumber: 4,
    partTitle: 'When Direct Substitution Fails',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Idea of Direct Substitution' },
    { partNumber: 2, partTitle: 'When Direct Substitution Works' },
    { partNumber: 3, partTitle: 'Limit Laws' },
    { partNumber: 4, partTitle: 'When Direct Substitution Fails' },
  ]
}
