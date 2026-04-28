/**
 * Entrance Quiz — Rationalizing Technique for Limits
 * 8 questions, 2 per part. Strictly the conjugate technique.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'rt-ent-1a',
    question: 'Rationalizing (multiplying by a conjugate) is the right tool when direct substitution gives $0/0$ AND:',
    options: ['The expression has only polynomials', 'A square root is part of the expression causing the zero', 'The function is trigonometric', 'The denominator is a constant'],
    correctIndex: 1,
    explanation: '$\\sqrt{}$ + $0/0$ = use the conjugate. Polynomial-only $0/0$ uses factoring instead.',
    partNumber: 1,
    partTitle: 'When to Use the Conjugate',
  },
  {
    id: 'rt-ent-1b',
    question: 'The conjugate of $\\sqrt{x + 3} - 4$ is:',
    options: ['$\\sqrt{x + 3} + 4$', '$\\sqrt{x - 3} + 4$', '$-\\sqrt{x + 3} - 4$', '$4 - \\sqrt{x + 3}$'],
    correctIndex: 0,
    explanation: 'Flip the sign between the two terms: $\\sqrt{x + 3} + 4$.',
    partNumber: 1,
    partTitle: 'When to Use the Conjugate',
  },

  // Part 2
  {
    id: 'rt-ent-2a',
    question: 'Compute $\\lim_{x \\to 9} \\dfrac{\\sqrt{x} - 3}{x - 9}$.',
    options: ['$1/3$', '$1/6$', '$1/9$', '$0$'],
    correctIndex: 1,
    explanation: 'Conjugate $\\sqrt{x} + 3$: $\\dfrac{x - 9}{(x - 9)(\\sqrt{x} + 3)} \\to \\dfrac{1}{6}$.',
    partNumber: 2,
    partTitle: 'Multiplying by the Conjugate',
  },
  {
    id: 'rt-ent-2b',
    question: 'After multiplying $\\dfrac{\\sqrt{x} - 2}{x - 4}$ by $\\dfrac{\\sqrt{x} + 2}{\\sqrt{x} + 2}$, the new numerator is:',
    options: ['$x - 4$', '$\\sqrt{x} - 4$', '$x + 4$', '$2\\sqrt{x} - 4$'],
    correctIndex: 0,
    explanation: '$(\\sqrt{x})^2 - 2^2 = x - 4$ via difference of squares.',
    partNumber: 2,
    partTitle: 'Multiplying by the Conjugate',
  },

  // Part 3
  {
    id: 'rt-ent-3a',
    question: 'Compute $\\lim_{x \\to 0} \\dfrac{\\sqrt{x + 4} - 2}{x}$.',
    options: ['$1/4$', '$1/2$', '$2$', '$0$'],
    correctIndex: 0,
    explanation: 'Conjugate gives $\\dfrac{1}{\\sqrt{x+4}+2} \\to \\dfrac{1}{4}$.',
    partNumber: 3,
    partTitle: 'Worked Examples',
  },
  {
    id: 'rt-ent-3b',
    question: 'Compute $\\lim_{x \\to 5} \\dfrac{\\sqrt{x + 4} - 3}{x - 5}$.',
    options: ['$1/9$', '$1/6$', '$1/3$', '$1/2$'],
    correctIndex: 1,
    explanation: 'Conjugate: $\\dfrac{(x+4) - 9}{(x-5)(\\sqrt{x+4}+3)} \\to \\dfrac{1}{6}$.',
    partNumber: 3,
    partTitle: 'Worked Examples',
  },

  // Part 4
  {
    id: 'rt-ent-4a',
    question: 'Compute $\\lim_{x \\to 0} \\dfrac{x}{\\sqrt{x + 9} - 3}$.',
    options: ['$0$', '$3$', '$6$', 'DNE'],
    correctIndex: 2,
    explanation: 'Multiply by $\\dfrac{\\sqrt{x+9}+3}{\\sqrt{x+9}+3}$: $\\dfrac{x(\\sqrt{x+9}+3)}{x} = \\sqrt{x+9}+3 \\to 6$.',
    partNumber: 4,
    partTitle: 'Conjugates in the Denominator',
  },
  {
    id: 'rt-ent-4b',
    question: 'Why is multiplying by $\\dfrac{\\text{conjugate}}{\\text{conjugate}}$ legal inside a limit?',
    options: ['It evaluates to 1, so the function value is unchanged', 'Limits ignore multiplication', 'It changes only the numerator', 'It eliminates the variable'],
    correctIndex: 0,
    explanation: 'Any nonzero expression divided by itself is 1; multiplying by 1 doesn\'t change the value.',
    partNumber: 4,
    partTitle: 'Conjugates in the Denominator',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'When to Use the Conjugate' },
    { partNumber: 2, partTitle: 'Multiplying by the Conjugate' },
    { partNumber: 3, partTitle: 'Worked Examples' },
    { partNumber: 4, partTitle: 'Conjugates in the Denominator' },
  ]
}
