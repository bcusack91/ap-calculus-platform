/**
 * Entrance Quiz — Rationalizing Technique for Limits — 8 questions (2 per lesson part, 4 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — When to Use the Conjugate
  {
    id: 'rtl-ent-1a',
    question: 'Which limit is best handled by multiplying by a conjugate?',
    options: ['$\\lim_{x \\to 2} \\frac{\\sqrt{x + 7} - 3}{x - 2}$', '$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$', '$\\lim_{x \\to 2} \\frac{\\sqrt{x + 7}}{x + 2}$', '$\\lim_{x \\to 2} \\frac{\\sqrt{x + 7} + 3}{x - 2}$'],
    correctIndex: 0,
    explanation: 'Rationalizing is for a $\\frac{0}{0}$ form caused by a square root: $\\frac{\\sqrt{9} - 3}{0} = \\frac{0}{0}$. The polynomial quotient is handled by factoring, the third substitutes directly, and the last gives $\\frac{6}{0}$, which is not indeterminate.',
    partNumber: 1,
    partTitle: 'When to Use the Conjugate',
  },
  {
    id: 'rtl-ent-1b',
    question: 'What is the product $\\left(\\sqrt{2x + 1} - 3\\right)\\left(\\sqrt{2x + 1} + 3\\right)$?',
    options: ['$2x + 10$', '$2x + 10 - 6\\sqrt{2x + 1}$', '$2x - 8$', '$(2x + 1)^2 - 9$'],
    correctIndex: 2,
    explanation: 'By $(a - b)(a + b) = a^2 - b^2$, the product is $(2x + 1) - 9 = 2x - 8$, with no radical left. Squaring a single binomial would instead leave a $-6\\sqrt{2x + 1}$ term.',
    partNumber: 1,
    partTitle: 'When to Use the Conjugate',
  },
  // Part 2 — Multiplying by the Conjugate
  {
    id: 'rtl-ent-2a',
    question: 'Evaluate $\\lim_{x \\to 2} \\dfrac{\\sqrt{3x + 10} - 4}{x - 2}$.',
    options: ['$\\frac{1}{8}$', '$\\frac{3}{8}$', '$\\frac{3}{4}$', '$0$'],
    correctIndex: 1,
    explanation: 'Multiply by $\\frac{\\sqrt{3x + 10} + 4}{\\sqrt{3x + 10} + 4}$: the numerator becomes $3x + 10 - 16 = 3(x - 2)$. Cancelling leaves $\\frac{3}{\\sqrt{3x + 10} + 4} \\to \\frac{3}{8}$; dropping the factor 3 gives $\\frac{1}{8}$.',
    partNumber: 2,
    partTitle: 'Multiplying by the Conjugate',
  },
  {
    id: 'rtl-ent-2b',
    question: 'For a constant $a > 0$, what is $\\lim_{x \\to a} \\dfrac{\\sqrt{x} - \\sqrt{a}}{x - a}$?',
    options: ['$\\frac{1}{\\sqrt{a}}$', '$2\\sqrt{a}$', '$\\frac{\\sqrt{a}}{2}$', '$\\frac{1}{2\\sqrt{a}}$'],
    correctIndex: 3,
    explanation: 'Multiplying by $\\frac{\\sqrt{x} + \\sqrt{a}}{\\sqrt{x} + \\sqrt{a}}$ turns the numerator into $x - a$, which cancels. What remains is $\\frac{1}{\\sqrt{x} + \\sqrt{a}} \\to \\frac{1}{2\\sqrt{a}}$.',
    partNumber: 2,
    partTitle: 'Multiplying by the Conjugate',
  },
  // Part 3 — Worked Examples
  {
    id: 'rtl-ent-3a',
    question: 'Evaluate $\\lim_{x \\to 3} \\dfrac{\\sqrt{2x} - \\sqrt{6}}{x - 3}$.',
    options: ['$\\frac{1}{\\sqrt{6}}$', '$\\frac{1}{2\\sqrt{6}}$', '$\\frac{2}{\\sqrt{6}}$', '$\\sqrt{6}$'],
    correctIndex: 0,
    explanation: 'Multiply by $\\sqrt{2x} + \\sqrt{6}$ over itself: the numerator becomes $2x - 6 = 2(x - 3)$. Cancelling leaves $\\frac{2}{\\sqrt{2x} + \\sqrt{6}} \\to \\frac{2}{2\\sqrt{6}} = \\frac{1}{\\sqrt{6}}$.',
    partNumber: 3,
    partTitle: 'Worked Examples',
  },
  {
    id: 'rtl-ent-3b',
    question: 'Evaluate $\\lim_{x \\to 0} \\dfrac{\\sqrt{4 + 12x} - 2}{x}$.',
    options: ['$\\frac{1}{4}$', '$12$', '$3$', '$\\frac{3}{2}$'],
    correctIndex: 2,
    explanation: 'The conjugate turns the numerator into $(4 + 12x) - 4 = 12x$. Cancelling $x$ leaves $\\frac{12}{\\sqrt{4 + 12x} + 2} \\to \\frac{12}{4} = 3$.',
    partNumber: 3,
    partTitle: 'Worked Examples',
  },
  // Part 4 — Conjugates in the Denominator
  {
    id: 'rtl-ent-4a',
    question: 'Evaluate $\\lim_{x \\to 2} \\dfrac{x^2 - 4}{\\sqrt{x + 7} - 3}$.',
    options: ['$\\frac{2}{3}$', '$24$', '$12$', '$\\frac{1}{24}$'],
    correctIndex: 1,
    explanation: 'Multiply top and bottom by $\\sqrt{x + 7} + 3$; the denominator becomes $x - 2$. The quotient is $\\frac{(x - 2)(x + 2)(\\sqrt{x + 7} + 3)}{x - 2} = (x + 2)(\\sqrt{x + 7} + 3) \\to 4 \\cdot 6 = 24$.',
    partNumber: 4,
    partTitle: 'Conjugates in the Denominator',
  },
  {
    id: 'rtl-ent-4b',
    question: 'Evaluate $\\lim_{x \\to 0} \\dfrac{\\sqrt{x + 9} - 3}{\\sqrt{x + 4} - 2}$.',
    options: ['$\\frac{3}{2}$', '$1$', '$\\frac{4}{9}$', '$\\frac{2}{3}$'],
    correctIndex: 3,
    explanation: 'Rationalize both: the numerator becomes $x$ times $\\frac{1}{\\sqrt{x + 9} + 3}$ and the denominator $x$ times $\\frac{1}{\\sqrt{x + 4} + 2}$. The quotient is $\\frac{\\sqrt{x + 4} + 2}{\\sqrt{x + 9} + 3} \\to \\frac{4}{6} = \\frac{2}{3}$.',
    partNumber: 4,
    partTitle: 'Conjugates in the Denominator',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'When to Use the Conjugate' },
    { partNumber: 2, partTitle: 'Multiplying by the Conjugate' },
    { partNumber: 3, partTitle: 'Worked Examples' },
    { partNumber: 4, partTitle: 'Conjugates in the Denominator' },
  ]
}
