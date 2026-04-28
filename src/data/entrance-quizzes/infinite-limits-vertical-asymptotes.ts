/**
 * Entrance Quiz — Infinite Limits & Vertical Asymptotes
 * 8 questions, 2 per part. Strictly the infinite-limit / VA topic.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'ilva-ent-1a',
    question: '"$\\lim_{x \\to a} f(x) = +\\infty$" means:',
    options: ['$f(a) = \\infty$', 'As $x \\to a$, the values of $f$ grow without bound positively', 'The function is bounded', 'The limit exists as a real number'],
    correctIndex: 1,
    explanation: 'Infinite limits describe unbounded growth, not literal infinity values.',
    partNumber: 1,
    partTitle: 'Notation and Meaning',
  },
  {
    id: 'ilva-ent-1b',
    question: 'For $f(x) = 1/x$: left- and right-limits at 0 go to opposite infinities. The two-sided limit:',
    options: ['Equals $+\\infty$', 'Equals $-\\infty$', 'DNE — sides disagree', 'Equals 0'],
    correctIndex: 2,
    explanation: 'Opposite-signed infinities → two-sided DNE.',
    partNumber: 1,
    partTitle: 'Notation and Meaning',
  },

  // Part 2
  {
    id: 'ilva-ent-2a',
    question: 'You plug $x = 3$ into $\\dfrac{x + 4}{x - 3}$ and get $7/0$. What does this signal?',
    options: ['Indeterminate', 'Limit is 7', 'Vertical asymptote at $x = 3$', 'Limit is 0'],
    correctIndex: 2,
    explanation: 'Nonzero/zero pattern → vertical asymptote.',
    partNumber: 2,
    partTitle: 'Diagnosing Infinite Limits',
  },
  {
    id: 'ilva-ent-2b',
    question: '$\\lim_{x \\to 2^+} \\dfrac{1}{x - 2}$ equals:',
    options: ['$0$', '$+\\infty$', '$-\\infty$', 'DNE'],
    correctIndex: 1,
    explanation: 'For $x$ slightly bigger than 2, $x - 2$ is small positive. $1/(\\text{small +}) = +\\infty$.',
    partNumber: 2,
    partTitle: 'Diagnosing Infinite Limits',
  },

  // Part 3
  {
    id: 'ilva-ent-3a',
    question: 'How many vertical asymptotes does $f(x) = \\dfrac{1}{x^2 - 4}$ have?',
    options: ['$0$', '$1$', '$2$', '$4$'],
    correctIndex: 2,
    explanation: 'Denominator zeros at $\\pm 2$, numerator nonzero → 2 asymptotes.',
    partNumber: 3,
    partTitle: 'Vertical Asymptotes',
  },
  {
    id: 'ilva-ent-3b',
    question: 'For $f(x) = \\dfrac{x - 3}{x^2 - 9}$, $x = 3$ is a:',
    options: ['Vertical asymptote', 'Hole (removable)', 'Horizontal asymptote', 'Critical point'],
    correctIndex: 1,
    explanation: '$\\dfrac{x-3}{(x-3)(x+3)} = \\dfrac{1}{x+3}$. The $(x-3)$ cancels exactly → hole at $x=3$.',
    partNumber: 3,
    partTitle: 'Vertical Asymptotes',
  },

  // Part 4
  {
    id: 'ilva-ent-4a',
    question: '$\\lim_{x \\to 0^+} \\ln x$ equals:',
    options: ['$0$', '$1$', '$+\\infty$', '$-\\infty$'],
    correctIndex: 3,
    explanation: 'Natural log goes to $-\\infty$ as its input approaches 0 from the right.',
    partNumber: 4,
    partTitle: 'Asymptotes Beyond Rationals',
  },
  {
    id: 'ilva-ent-4b',
    question: '$\\tan x$ has a vertical asymptote at:',
    options: ['$x = 0$', '$x = \\pi$', '$x = \\pi/2$', '$x = 2\\pi$'],
    correctIndex: 2,
    explanation: '$\\tan = \\sin/\\cos$; $\\cos(\\pi/2) = 0$ → vertical asymptote.',
    partNumber: 4,
    partTitle: 'Asymptotes Beyond Rationals',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Notation and Meaning' },
    { partNumber: 2, partTitle: 'Diagnosing Infinite Limits' },
    { partNumber: 3, partTitle: 'Vertical Asymptotes' },
    { partNumber: 4, partTitle: 'Asymptotes Beyond Rationals' },
  ]
}
