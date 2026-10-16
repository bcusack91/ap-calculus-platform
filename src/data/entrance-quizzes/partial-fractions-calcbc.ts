/**
 * Entrance Quiz — Partial Fractions — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Concept
  {
    id: 'pf-ent-1a',
    question: 'Which is the partial fraction decomposition of $\\frac{3x + 13}{x^2 + 2x - 3}$?',
    options: [
      '$\\frac{4}{x-1}+\\frac{1}{x+3}$',
      '$\\frac{4}{x-1}-\\frac{1}{x+3}$',
      '$\\frac{1}{x-1}-\\frac{4}{x+3}$',
      '$\\frac{4}{x+3}-\\frac{1}{x-1}$',
    ],
    correctIndex: 1,
    explanation: 'The denominator is $(x - 1)(x + 3)$. Covering $x - 1$ and setting $x = 1$ gives $\\frac{16}{4} = 4$; covering $x + 3$ and setting $x = -3$ gives $\\frac{4}{-4} = -1$. The other options lose the sign or attach the constants to the wrong factors.',
    partNumber: 1,
    partTitle: 'The Concept',
  },
  {
    id: 'pf-ent-1b',
    question: 'Which rational function can be split into partial fractions directly, as tested on the BC exam, with no long division first?',
    options: [
      '$\\frac{x^2+5}{x^2-x-2}$',
      '$\\frac{x+5}{x^2+2x+5}$',
      '$\\frac{x+5}{x^2-x-2}$',
      '$\\frac{x+5}{x^2-4x+4}$',
    ],
    correctIndex: 2,
    explanation: '$\\frac{x+5}{x^2-x-2}$ is proper and its denominator is $(x - 2)(x + 1)$, two distinct linear factors. The first option is improper (equal degrees), $x^2 + 2x + 5$ does not factor, and $x^2 - 4x + 4 = (x - 2)^2$ is a repeated factor.',
    partNumber: 1,
    partTitle: 'The Concept',
  },

  // Part 2 — Cover-Up, Definite Integrals, and Log Answers
  {
    id: 'pf-ent-2a',
    question: 'What is $\\int_2^4 \\frac{3}{(x - 1)(x + 2)}\\,dx$?',
    options: ['$\\ln 2$', '$\\frac{1}{3}\\ln 2$', '$-\\ln 2$', '$3\\ln 2$'],
    correctIndex: 0,
    explanation: 'Cover-up gives $\\frac{1}{x-1} - \\frac{1}{x+2}$, so an antiderivative is $\\ln\\left|\\frac{x-1}{x+2}\\right|$: $\\ln\\frac{1}{2} - \\ln\\frac{1}{4} = \\ln 2$. Decomposing $\\frac{1}{(x-1)(x+2)}$ and dropping the factor $3$ gives $\\frac{1}{3}\\ln 2$, and $3\\ln 2$ forgets to divide by the other factor in the cover-up.',
    partNumber: 2,
    partTitle: 'Cover-Up, Definite Integrals, and Log Answers',
  },
  {
    id: 'pf-ent-2b',
    question: 'In $\\frac{4x^2 - 2}{x(x - 1)(x + 1)} = \\frac{A}{x} + \\frac{B}{x - 1} + \\frac{C}{x + 1}$, what is $C$?',
    options: ['$-1$', '$-2$', '$\\frac{1}{2}$', '$1$'],
    correctIndex: 3,
    explanation: 'Cover $x + 1$ and set $x = -1$: $C = \\frac{4 - 2}{(-1)(-2)} = 1$. Check: $A = 2$ and $B = 1$, and $A + B + C = 4$ matches the $x^2$ coefficient. Leaving out the factor $x - 1$ gives $-2$.',
    partNumber: 2,
    partTitle: 'Cover-Up, Definite Integrals, and Log Answers',
  },

  // Part 3 — Choosing the Right Tool
  {
    id: 'pf-ent-3a',
    question: 'What is $\\int \\frac{1}{x^2 - 6x + 13}\\,dx$?',
    options: [
      '$\\arctan\\frac{x-3}{2}+C$',
      '$\\ln|x^2-6x+13|+C$',
      '$\\frac{1}{2}\\arctan\\frac{x-3}{2}+C$',
      '$\\frac{1}{2}\\arctan(x-3)+C$',
    ],
    correctIndex: 2,
    explanation: 'The denominator does not factor, so complete the square: $(x - 3)^2 + 4$. Then $\\int \\frac{du}{u^2 + 2^2} = \\frac{1}{2}\\arctan\\frac{u}{2} + C$ with $u = x - 3$. A logarithm would need the derivative $2x - 6$ in the numerator.',
    partNumber: 3,
    partTitle: 'Choosing the Right Tool',
  },
  {
    id: 'pf-ent-3b',
    question: 'Which integral is best done with a $u$-substitution rather than partial fractions?',
    options: [
      '$\\int \\frac{2x-4}{x^2-4x+3}\\,dx$',
      '$\\int \\frac{2}{x^2-4x+3}\\,dx$',
      '$\\int \\frac{x}{x^2-4x+3}\\,dx$',
      '$\\int \\frac{2x}{x^2-4x+3}\\,dx$',
    ],
    correctIndex: 0,
    explanation: 'The numerator $2x - 4$ is exactly the derivative of $x^2 - 4x + 3$, so $u = x^2 - 4x + 3$ gives $\\ln|x^2 - 4x + 3| + C$ at once. The other numerators are not multiples of $2x - 4$, so those integrals need the decomposition over $(x - 1)(x - 3)$.',
    partNumber: 3,
    partTitle: 'Choosing the Right Tool',
  },

  // Part 4 — Integration with Partial Fractions
  {
    id: 'pf-ent-4a',
    question: 'What is $\\int \\frac{x + 7}{(x - 1)(x + 3)}\\,dx$?',
    options: [
      '$2\\ln|x-1|+\\ln|x+3|+C$',
      '$\\ln|x-1|-\\ln|x+3|+C$',
      '$\\ln|x^2+2x-3|+C$',
      '$2\\ln|x-1|-\\ln|x+3|+C$',
    ],
    correctIndex: 3,
    explanation: 'Cover-up gives $A = \\frac{8}{4} = 2$ over $x - 1$ and $B = \\frac{4}{-4} = -1$ over $x + 3$, and each piece integrates to a logarithm. A single logarithm of the denominator would need the numerator $2x + 2$.',
    partNumber: 4,
    partTitle: 'Integration with Partial Fractions',
  },
  {
    id: 'pf-ent-4b',
    question: 'What is $\\int_3^5 \\frac{2}{(x - 1)(x - 2)}\\,dx$?',
    options: ['$\\ln\\frac{3}{2}$', '$2\\ln\\frac{3}{2}$', '$2\\ln\\frac{2}{3}$', '$2\\ln\\frac{3}{4}$'],
    correctIndex: 1,
    explanation: 'Cover-up gives $\\frac{2}{x-2} - \\frac{2}{x-1}$, so an antiderivative is $2\\ln\\left|\\frac{x-2}{x-1}\\right|$: $2\\ln\\frac{3}{4} - 2\\ln\\frac{1}{2} = 2\\ln\\frac{3}{2}$. Reversing the signs gives $2\\ln\\frac{2}{3}$, and $2\\ln\\frac{3}{4}$ uses only the upper limit.',
    partNumber: 4,
    partTitle: 'Integration with Partial Fractions',
  },

  // Part 5 — Long Division First
  {
    id: 'pf-ent-5a',
    question: 'What is $\\int \\frac{x^3}{x^2 - 4}\\,dx$?',
    options: [
      '$\\frac{x^2}{2}+2\\ln|x^2-4|+C$',
      '$\\frac{x^2}{2}+4\\ln|x^2-4|+C$',
      '$\\frac{x^2}{2}+C$',
      '$\\frac{x^4}{4}\\cdot\\ln|x^2-4|+C$',
    ],
    correctIndex: 0,
    explanation: 'The fraction is improper, so divide: $\\frac{x^3}{x^2-4} = x + \\frac{4x}{x^2-4}$. Then $\\int \\frac{4x}{x^2-4}\\,dx = 2\\ln|x^2 - 4|$ (or $2\\ln|x-2| + 2\\ln|x+2|$ by partial fractions). Using $4$ as the coefficient forgets the $\\frac{1}{2}$ from $du = 2x\\,dx$, and dropping the remainder loses the logarithm.',
    partNumber: 5,
    partTitle: 'Long Division First',
  },
  {
    id: 'pf-ent-5b',
    question: 'Which expression equals $\\frac{2x^2 + 3x}{x + 2}$?',
    options: [
      '$2x+7+\\frac{14}{x+2}$',
      '$2x-1-\\frac{2}{x+2}$',
      '$2x-1+\\frac{2}{x+2}$',
      '$2x+\\frac{3x}{x+2}$',
    ],
    correctIndex: 2,
    explanation: 'Since $(x + 2)(2x - 1) = 2x^2 + 3x - 2$, the remainder is $2$: the quotient is $2x - 1$ plus $\\frac{2}{x+2}$. Dividing with $+2$ instead of $-2$ in synthetic division gives $2x + 7 + \\frac{14}{x+2}$.',
    partNumber: 5,
    partTitle: 'Long Division First',
  },

  // Part 6 — Practice Workshop
  {
    id: 'pf-ent-6a',
    question: 'What is $\\int \\frac{5x}{x^2 - x - 6}\\,dx$?',
    options: [
      '$2\\ln|x-3|+3\\ln|x+2|+C$',
      '$3\\ln|x-3|+2\\ln|x+2|+C$',
      '$3\\ln|x-3|-2\\ln|x+2|+C$',
      '$\\frac{5}{2}\\ln|x^2-x-6|+C$',
    ],
    correctIndex: 1,
    explanation: 'The denominator is $(x - 3)(x + 2)$. Cover-up gives $\\frac{15}{5} = 3$ over $x - 3$ and $\\frac{-10}{-5} = 2$ over $x + 2$. The numerator $5x$ is not a multiple of $2x - 1$, so a single logarithm does not work.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'pf-ent-6b',
    question: 'What is $\\int_2^3 \\frac{x^2}{x^2 - 1}\\,dx$?',
    options: [
      '$\\frac{1}{2}\\ln\\frac{3}{2}$',
      '$1+\\ln\\frac{3}{2}$',
      '$1+2\\ln\\frac{3}{2}$',
      '$1+\\frac{1}{2}\\ln\\frac{3}{2}$',
    ],
    correctIndex: 3,
    explanation: 'Divide first: $\\frac{x^2}{x^2-1} = 1 + \\frac{1}{x^2-1} = 1 + \\frac{1/2}{x-1} - \\frac{1/2}{x+1}$. The integral is $1 + \\frac{1}{2}\\left(\\ln\\frac{2}{4} - \\ln\\frac{1}{3}\\right) = 1 + \\frac{1}{2}\\ln\\frac{3}{2}$. Skipping the division loses the $1$, and the cover-up constants are $\\pm\\frac{1}{2}$, not $\\pm 1$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },

  // Part 7 — Final Assessment
  {
    id: 'pf-ent-7a',
    question: 'To integrate $\\frac{x^2 + 3}{(x - 1)(x + 1)}$, a student immediately writes $\\frac{A}{x-1} + \\frac{B}{x+1}$. What is wrong?',
    options: [
      'The denominator has to be treated as a repeated factor',
      'An arctangent form is needed because of the $+3$',
      'It is improper, so divide first',
      'Nothing is wrong, since cover-up works for any numerator',
    ],
    correctIndex: 2,
    explanation: 'The numerator and denominator both have degree 2, so the decomposition template does not fit: long division gives $1 + \\frac{4}{(x-1)(x+1)}$, and only that proper remainder is decomposed. The factors are distinct and linear, so there is no repeated factor or arctangent.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'pf-ent-7b',
    question: 'What is $\\int \\frac{6}{x^3 + x^2 - 2x}\\,dx$?',
    options: [
      '$-3\\ln|x|+2\\ln|x-1|+\\ln|x+2|+C$',
      '$3\\ln|x|+2\\ln|x-1|+\\ln|x+2|+C$',
      '$-3\\ln|x|+2\\ln|x-1|-\\ln|x+2|+C$',
      '$-3\\ln|x|-2\\ln|x-1|+\\ln|x+2|+C$',
    ],
    correctIndex: 0,
    explanation: 'Factor: $x^3 + x^2 - 2x = x(x - 1)(x + 2)$. Cover-up gives $\\frac{6}{(-1)(2)} = -3$ over $x$, $\\frac{6}{(1)(3)} = 2$ over $x - 1$, and $\\frac{6}{(-2)(-3)} = 1$ over $x + 2$. Each other option has one sign slip.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Concept' },
    { partNumber: 2, partTitle: 'Cover-Up, Definite Integrals, and Log Answers' },
    { partNumber: 3, partTitle: 'Choosing the Right Tool' },
    { partNumber: 4, partTitle: 'Integration with Partial Fractions' },
    { partNumber: 5, partTitle: 'Long Division First' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
