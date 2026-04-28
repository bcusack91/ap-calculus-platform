/**
 * Entrance Quiz — Factoring Method for Limits
 * 8 questions, 2 per part. Strictly factoring/cancellation technique.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'fml-ent-1a',
    question: 'You plug $x = 5$ into $\\dfrac{x^2 - 25}{x - 5}$ and get $0/0$. What does this guarantee?',
    options: ['Limit is 0', 'Limit DNE', 'Both numerator and denominator have $(x - 5)$ as a factor — try cancelling', 'Function blows up'],
    correctIndex: 2,
    explanation: '$0/0$ via factor theorem means $(x - 5) \\mid$ both. Factor and cancel.',
    partNumber: 1,
    partTitle: 'The $0/0$ Trigger',
  },
  {
    id: 'fml-ent-1b',
    question: 'Compute $\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$.',
    options: ['$0$', '$2$', '$4$', 'DNE'],
    correctIndex: 2,
    explanation: '$\\dfrac{(x-2)(x+2)}{x-2} \\to x + 2 \\to 4$.',
    partNumber: 1,
    partTitle: 'The $0/0$ Trigger',
  },

  // Part 2
  {
    id: 'fml-ent-2a',
    question: 'Factor $x^2 - 8x + 15$.',
    options: ['$(x - 3)(x - 5)$', '$(x + 3)(x + 5)$', '$(x - 1)(x - 15)$', '$(x - 8)(x + 15)$'],
    correctIndex: 0,
    explanation: 'Two numbers with product 15 and sum $-8$: $-3$ and $-5$.',
    partNumber: 2,
    partTitle: 'The Factoring Toolbox',
  },
  {
    id: 'fml-ent-2b',
    question: 'Compute $\\lim_{x \\to 5} \\dfrac{x^2 - 8x + 15}{x - 5}$.',
    options: ['$0$', '$2$', '$3$', '$-3$'],
    correctIndex: 1,
    explanation: '$\\dfrac{(x-3)(x-5)}{x-5} \\to x - 3 \\to 2$.',
    partNumber: 2,
    partTitle: 'The Factoring Toolbox',
  },

  // Part 3
  {
    id: 'fml-ent-3a',
    question: 'Compute $\\lim_{x \\to -2} \\dfrac{x^2 + 5x + 6}{x + 2}$.',
    options: ['$0$', '$1$', '$2$', 'DNE'],
    correctIndex: 1,
    explanation: '$\\dfrac{(x+2)(x+3)}{x+2} \\to x + 3 \\to 1$.',
    partNumber: 3,
    partTitle: 'Worked Examples — Workflow',
  },
  {
    id: 'fml-ent-3b',
    question: 'Compute $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x^2 - 5x + 6}$.',
    options: ['$0$', '$3$', '$6$', 'DNE'],
    correctIndex: 2,
    explanation: 'Top: $(x-3)(x+3)$. Bottom: $(x-3)(x-2)$. Cancel: $\\dfrac{x+3}{x-2} \\to 6/1 = 6$.',
    partNumber: 3,
    partTitle: 'Worked Examples — Workflow',
  },

  // Part 4
  {
    id: 'fml-ent-4a',
    question: 'Compute $\\lim_{x \\to 2} \\dfrac{x^3 - 8}{x - 2}$.',
    options: ['$0$', '$8$', '$12$', '$24$'],
    correctIndex: 2,
    explanation: '$x^3 - 8 = (x-2)(x^2 + 2x + 4)$; substitute: $4 + 4 + 4 = 12$.',
    partNumber: 4,
    partTitle: 'Beyond Quadratics',
  },
  {
    id: 'fml-ent-4b',
    question: 'You factor and cancel a $(x - a)$, but plugging in still gives $0/0$. What\'s the next step?',
    options: ['Limit is 0', 'Limit DNE', 'There is a REPEATED $(x - a)$ — cancel again', 'Switch to a numerical table'],
    correctIndex: 2,
    explanation: 'Repeated common factor → cancel a second time. Continue until substitution gives a clean answer.',
    partNumber: 4,
    partTitle: 'Beyond Quadratics',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The $0/0$ Trigger' },
    { partNumber: 2, partTitle: 'The Factoring Toolbox' },
    { partNumber: 3, partTitle: 'Worked Examples — Workflow' },
    { partNumber: 4, partTitle: 'Beyond Quadratics' },
  ]
}
