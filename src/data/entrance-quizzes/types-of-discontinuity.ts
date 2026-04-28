/**
 * Entrance Quiz — Types of Discontinuity
 * 8 questions, 2 per part.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — removable
  {
    id: 'td-ent-1a',
    question: 'A discontinuity is "removable" when:',
    options: [
      'The two-sided limit is $\\pm\\infty$',
      'Left and right limits exist finitely but disagree',
      'The two-sided limit exists finitely (but $f(a)$ doesn\'t match it or is undefined)',
      'The function is undefined on an interval',
    ],
    correctIndex: 2,
    explanation: 'Removable = limit exists finitely; the gap can be patched by redefining one point.',
    partNumber: 1,
    partTitle: 'Removable Discontinuities',
  },
  {
    id: 'td-ent-1b',
    question: 'For $f(x) = \\dfrac{x^2 - 16}{x - 4}$, the height of the hole at $x = 4$ is:',
    options: ['$0$', '$4$', '$8$', '$16$'],
    correctIndex: 2,
    explanation: '$\\dfrac{(x-4)(x+4)}{x-4} = x + 4$. At $x = 4$: $8$.',
    partNumber: 1,
    partTitle: 'Removable Discontinuities',
  },

  // Part 2 — jump
  {
    id: 'td-ent-2a',
    question: 'A jump discontinuity occurs when:',
    options: [
      'The two-sided limit is $\\infty$',
      'Both one-sided limits exist finitely but are unequal',
      'The function has a hole',
      'The function is continuous',
    ],
    correctIndex: 1,
    explanation: 'Jump = both finite, but disagree.',
    partNumber: 2,
    partTitle: 'Jump Discontinuities',
  },
  {
    id: 'td-ent-2b',
    question: 'For $f(x) = \\begin{cases} 2x, & x < 3 \\\\ x + 7, & x \\ge 3 \\end{cases}$, jump size at $x = 3$?',
    options: ['$0$', '$2$', '$4$', '$6$'],
    correctIndex: 2,
    explanation: 'Left: $6$, right: $10$. $|10 - 6| = 4$.',
    partNumber: 2,
    partTitle: 'Jump Discontinuities',
  },

  // Part 3 — infinite
  {
    id: 'td-ent-3a',
    question: 'An infinite discontinuity occurs when:',
    options: [
      'A one-sided limit is $\\pm\\infty$ (vertical asymptote)',
      'The function has a hole',
      'Both one-sided limits agree',
      'The function is continuous',
    ],
    correctIndex: 0,
    explanation: 'Infinite (essential) discontinuity = at least one one-sided limit is unbounded.',
    partNumber: 3,
    partTitle: 'Infinite Discontinuities',
  },
  {
    id: 'td-ent-3b',
    question: 'For $f(x) = \\dfrac{x + 1}{(x - 5)^2}$, the discontinuity at $x = 5$ is:',
    options: ['Removable', 'Jump', 'Infinite', 'No discontinuity'],
    correctIndex: 2,
    explanation: 'Numerator $\\to 6 \\ne 0$, denom $\\to 0$ (positive) → both sides $\\to +\\infty$. Infinite discontinuity.',
    partNumber: 3,
    partTitle: 'Infinite Discontinuities',
  },

  // Part 4 — mixed
  {
    id: 'td-ent-4a',
    question: 'For $f(x) = \\begin{cases} \\dfrac{\\sin x}{x}, & x \\ne 0 \\\\ 5, & x = 0 \\end{cases}$, the discontinuity at $x = 0$ is:',
    options: ['Removable (limit is 1, but $f(0) = 5$)', 'Jump', 'Infinite', 'None — continuous'],
    correctIndex: 0,
    explanation: '$\\lim_{x \\to 0} \\sin x / x = 1$, $f(0) = 5 \\ne 1$. Removable.',
    partNumber: 4,
    partTitle: 'Mixed Practice',
  },
  {
    id: 'td-ent-4b',
    question: 'For $f(x) = \\dfrac{x^2 - 4}{x^2 - x - 2}$, classify the discontinuities. (Note: $x^2 - x - 2 = (x-2)(x+1)$.)',
    options: [
      'Hole at $x = 2$, asymptote at $x = -1$',
      'Asymptotes at $x = 2$ and $x = -1$',
      'Holes at both',
      'No discontinuities',
    ],
    correctIndex: 0,
    explanation: '$\\dfrac{(x-2)(x+2)}{(x-2)(x+1)} = \\dfrac{x+2}{x+1}$ for $x \\ne 2$. Hole at $x=2$, asymptote at $x=-1$.',
    partNumber: 4,
    partTitle: 'Mixed Practice',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Removable Discontinuities' },
    { partNumber: 2, partTitle: 'Jump Discontinuities' },
    { partNumber: 3, partTitle: 'Infinite Discontinuities' },
    { partNumber: 4, partTitle: 'Mixed Practice' },
  ]
}
