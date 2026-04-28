/**
 * Entrance Quiz — Direct Substitution Method
 * 8 questions, 2 per part. Strictly: substitution idea + continuity catalog
 * + limit laws + recognizing indeterminate-form triggers. Does NOT teach
 * factoring/rationalizing — those are sibling topics.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'dsm-ent-1a',
    question: 'Direct substitution gives the limit $\\lim_{x \\to a} f(x)$ when:',
    options: ['Always', '$f$ is continuous at $a$', '$f$ equals 0 at $a$', '$f$ is constant'],
    correctIndex: 1,
    explanation: 'Continuity at $a$ means $\\lim_{x \\to a} f = f(a)$ — exactly direct substitution.',
    partNumber: 1,
    partTitle: 'The Idea of Direct Substitution',
  },
  {
    id: 'dsm-ent-1b',
    question: 'Compute $\\lim_{x \\to 4} (x^2 - 3x + 2)$.',
    options: ['$2$', '$6$', '$10$', '$22$'],
    correctIndex: 1,
    explanation: 'Polynomial → substitute: $16 - 12 + 2 = 6$.',
    partNumber: 1,
    partTitle: 'The Idea of Direct Substitution',
  },

  // Part 2
  {
    id: 'dsm-ent-2a',
    question: 'For which $a$ does direct substitution FAIL on $f(x) = \\dfrac{x + 1}{x - 5}$?',
    options: ['$a = 0$', '$a = -1$', '$a = 5$', '$a = 1$'],
    correctIndex: 2,
    explanation: 'Denominator vanishes at $a = 5$. Numerator is $6 \\ne 0$, so it\'s a vertical asymptote.',
    partNumber: 2,
    partTitle: 'When Direct Substitution Works',
  },
  {
    id: 'dsm-ent-2b',
    question: 'Compute $\\lim_{x \\to 0} (e^x + \\cos x)$.',
    options: ['$0$', '$1$', '$2$', 'DNE'],
    correctIndex: 2,
    explanation: 'Both $e^x$ and $\\cos x$ continuous at 0; substitute: $1 + 1 = 2$.',
    partNumber: 2,
    partTitle: 'When Direct Substitution Works',
  },

  // Part 3
  {
    id: 'dsm-ent-3a',
    question: 'If $\\lim_{x \\to a} f = 4$ and $\\lim_{x \\to a} g = -3$, find $\\lim_{x \\to a} (2f + g)$.',
    options: ['$1$', '$5$', '$11$', '$-2$'],
    correctIndex: 1,
    explanation: 'Sum + constant multiple laws: $2(4) + (-3) = 5$.',
    partNumber: 3,
    partTitle: 'Limit Laws',
  },
  {
    id: 'dsm-ent-3b',
    question: 'Compute $\\lim_{x \\to 2} \\sqrt{x^2 + 5}$.',
    options: ['$3$', '$5$', '$7$', '$9$'],
    correctIndex: 0,
    explanation: 'Inside $\\to 9$; $\\sqrt{}$ continuous at 9; $\\sqrt{9} = 3$.',
    partNumber: 3,
    partTitle: 'Limit Laws',
  },

  // Part 4
  {
    id: 'dsm-ent-4a',
    question: 'You plug $x = 4$ into $\\dfrac{x^2 - 16}{x - 4}$ and get $0/0$. What does this mean?',
    options: ['Limit is 0', 'Limit DNE', 'Indeterminate — try a different method (factoring)', 'Limit is $\\infty$'],
    correctIndex: 2,
    explanation: '$0/0$ is indeterminate, not an answer. Factor: $\\dfrac{(x-4)(x+4)}{x-4} \\to x + 4 \\to 8$.',
    partNumber: 4,
    partTitle: 'When Direct Substitution Fails',
  },
  {
    id: 'dsm-ent-4b',
    question: 'You plug $x = 0$ into $\\dfrac{3}{x^2}$ and get $3/0$. What does this signal?',
    options: ['Indeterminate — try factoring', 'Limit equals 3', 'Vertical asymptote — limit fails to exist as a finite value (both sides $\\to +\\infty$)', 'The function oscillates'],
    correctIndex: 2,
    explanation: 'Nonzero/zero = vertical asymptote. Both sides go to $+\\infty$ here (squared denominator), so the limit fails as a finite value but can be described as $+\\infty$.',
    partNumber: 4,
    partTitle: 'When Direct Substitution Fails',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Idea of Direct Substitution' },
    { partNumber: 2, partTitle: 'When Direct Substitution Works' },
    { partNumber: 3, partTitle: 'Limit Laws' },
    { partNumber: 4, partTitle: 'When Direct Substitution Fails' },
  ]
}
