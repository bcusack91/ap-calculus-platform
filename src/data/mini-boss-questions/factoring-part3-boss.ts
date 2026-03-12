// Mini-Boss Questions for Factoring Part 3
// Cumulative: GCF, Difference of Squares, Simple Trinomials

import { 
  MiniBossQuestion,
  gcfIdentifyQuestions,
  gcfFactorQuestions,
  simpleDiffSquaresQuestions
} from './factoring-part2-boss'

// Category: Simple Trinomials (10 questions)
export const simpleTrinomialQuestions: MiniBossQuestion[] = [
  {
    id: 'simple-tri-1',
    type: 'simple-trinomials',
    question: 'x^2 + 7x + 12',
    correctAnswer: '(x + 3)(x + 4)',
    options: [
      { label: 'A', value: '(x + 3)(x + 4)', isCorrect: true },
      { label: 'B', value: '(x + 2)(x + 6)', isCorrect: false, explanation: '2 + 6 = 8, not 7' },
      { label: 'C', value: '(x + 1)(x + 12)', isCorrect: false, explanation: '1 + 12 = 13, not 7' },
      { label: 'D', value: '(x - 3)(x - 4)', isCorrect: false, explanation: 'Signs wrong - middle term would be negative' }
    ]
  },
  {
    id: 'simple-tri-2',
    type: 'simple-trinomials',
    question: 'x^2 - 5x + 6',
    correctAnswer: '(x - 2)(x - 3)',
    options: [
      { label: 'A', value: '(x - 2)(x - 3)', isCorrect: true },
      { label: 'B', value: '(x + 2)(x + 3)', isCorrect: false, explanation: 'Signs wrong - middle term should be negative' },
      { label: 'C', value: '(x - 1)(x - 6)', isCorrect: false, explanation: '-1 + (-6) = -7, not -5' },
      { label: 'D', value: '(x + 2)(x - 3)', isCorrect: false, explanation: 'This gives x² - x - 6' }
    ]
  },
  {
    id: 'simple-tri-3',
    type: 'simple-trinomials',
    question: 'x^2 + 2x - 15',
    correctAnswer: '(x + 5)(x - 3)',
    options: [
      { label: 'A', value: '(x + 5)(x - 3)', isCorrect: true },
      { label: 'B', value: '(x - 5)(x + 3)', isCorrect: false, explanation: 'This gives x² - 2x - 15' },
      { label: 'C', value: '(x + 15)(x - 1)', isCorrect: false, explanation: '15 + (-1) = 14, not 2' },
      { label: 'D', value: '(x + 3)(x - 5)', isCorrect: false, explanation: '3 + (-5) = -2, not 2' }
    ]
  },
  {
    id: 'simple-tri-4',
    type: 'simple-trinomials',
    question: 'x^2 - 8x + 15',
    correctAnswer: '(x - 3)(x - 5)',
    options: [
      { label: 'A', value: '(x - 3)(x - 5)', isCorrect: true },
      { label: 'B', value: '(x + 3)(x + 5)', isCorrect: false, explanation: 'Signs wrong - middle term should be negative' },
      { label: 'C', value: '(x - 1)(x - 15)', isCorrect: false, explanation: '-1 + (-15) = -16, not -8' },
      { label: 'D', value: '(x + 3)(x - 5)', isCorrect: false, explanation: 'This gives x² - 2x - 15' }
    ]
  },
  {
    id: 'simple-tri-5',
    type: 'simple-trinomials',
    question: 'x^2 + 9x + 20',
    correctAnswer: '(x + 4)(x + 5)',
    options: [
      { label: 'A', value: '(x + 4)(x + 5)', isCorrect: true },
      { label: 'B', value: '(x + 2)(x + 10)', isCorrect: false, explanation: '2 + 10 = 12, not 9' },
      { label: 'C', value: '(x - 4)(x - 5)', isCorrect: false, explanation: 'Signs wrong - middle term should be positive' },
      { label: 'D', value: '(x + 1)(x + 20)', isCorrect: false, explanation: '1 + 20 = 21, not 9' }
    ]
  },
  {
    id: 'simple-tri-6',
    type: 'simple-trinomials',
    question: 'x^2 - 3x - 18',
    correctAnswer: '(x - 6)(x + 3)',
    options: [
      { label: 'A', value: '(x - 6)(x + 3)', isCorrect: true },
      { label: 'B', value: '(x + 6)(x - 3)', isCorrect: false, explanation: 'This gives x² + 3x - 18' },
      { label: 'C', value: '(x - 9)(x + 2)', isCorrect: false, explanation: '-9 + 2 = -7, not -3' },
      { label: 'D', value: '(x - 2)(x + 9)', isCorrect: false, explanation: '-2 + 9 = 7, not -3' }
    ]
  },
  {
    id: 'simple-tri-7',
    type: 'simple-trinomials',
    question: 'x^2 + 10x + 24',
    correctAnswer: '(x + 4)(x + 6)',
    options: [
      { label: 'A', value: '(x + 4)(x + 6)', isCorrect: true },
      { label: 'B', value: '(x + 3)(x + 8)', isCorrect: false, explanation: '3 + 8 = 11, not 10' },
      { label: 'C', value: '(x + 2)(x + 12)', isCorrect: false, explanation: '2 + 12 = 14, not 10' },
      { label: 'D', value: '(x - 4)(x - 6)', isCorrect: false, explanation: 'Signs wrong - middle term should be positive' }
    ]
  },
  {
    id: 'simple-tri-8',
    type: 'simple-trinomials',
    question: 'x^2 - 7x + 10',
    correctAnswer: '(x - 2)(x - 5)',
    options: [
      { label: 'A', value: '(x - 2)(x - 5)', isCorrect: true },
      { label: 'B', value: '(x + 2)(x + 5)', isCorrect: false, explanation: 'Signs wrong - middle term should be negative' },
      { label: 'C', value: '(x - 1)(x - 10)', isCorrect: false, explanation: '-1 + (-10) = -11, not -7' },
      { label: 'D', value: '(x + 2)(x - 5)', isCorrect: false, explanation: 'This gives x² - 3x - 10' }
    ]
  },
  {
    id: 'simple-tri-9',
    type: 'simple-trinomials',
    question: 'x^2 + 4x - 21',
    correctAnswer: '(x + 7)(x - 3)',
    options: [
      { label: 'A', value: '(x + 7)(x - 3)', isCorrect: true },
      { label: 'B', value: '(x - 7)(x + 3)', isCorrect: false, explanation: 'This gives x² - 4x - 21' },
      { label: 'C', value: '(x + 21)(x - 1)', isCorrect: false, explanation: '21 + (-1) = 20, not 4' },
      { label: 'D', value: '(x - 21)(x + 1)', isCorrect: false, explanation: 'This gives x² - 20x - 21' }
    ]
  },
  {
    id: 'simple-tri-10',
    type: 'simple-trinomials',
    question: 'x^2 - 6x + 8',
    correctAnswer: '(x - 2)(x - 4)',
    options: [
      { label: 'A', value: '(x - 2)(x - 4)', isCorrect: true },
      { label: 'B', value: '(x + 2)(x + 4)', isCorrect: false, explanation: 'Signs wrong - middle term should be negative' },
      { label: 'C', value: '(x - 1)(x - 8)', isCorrect: false, explanation: '-1 + (-8) = -9, not -6' },
      { label: 'D', value: '(x + 2)(x - 4)', isCorrect: false, explanation: 'This gives x² - 2x - 8' }
    ]
  }
]

// Category: Combined (10 questions)
// These require GCF factoring first, then simple trinomial factoring
export const combinedQuestions: MiniBossQuestion[] = [
  {
    id: 'combined-tri-1',
    type: 'combined',
    question: '2x^2 + 14x + 24',
    correctAnswer: '2(x + 3)(x + 4)',
    options: [
      { label: 'A', value: '2(x + 3)(x + 4)', isCorrect: true },
      { label: 'B', value: '(2x + 6)(x + 4)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'C', value: '2(x + 2)(x + 6)', isCorrect: false, explanation: 'Incorrect trinomial factoring' },
      { label: 'D', value: '(x + 3)(x + 4)', isCorrect: false, explanation: 'Forgot to factor out GCF of 2' }
    ]
  },
  {
    id: 'combined-tri-2',
    type: 'combined',
    question: '3x^2 - 15x + 18',
    correctAnswer: '3(x - 2)(x - 3)',
    options: [
      { label: 'A', value: '3(x - 2)(x - 3)', isCorrect: true },
      { label: 'B', value: '(3x - 6)(x - 3)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'C', value: '3(x - 1)(x - 6)', isCorrect: false, explanation: 'Incorrect trinomial factoring' },
      { label: 'D', value: '(x - 2)(x - 3)', isCorrect: false, explanation: 'Forgot to factor out GCF of 3' }
    ]
  },
  {
    id: 'combined-tri-3',
    type: 'combined',
    question: '4x^2 + 8x - 60',
    correctAnswer: '4(x + 5)(x - 3)',
    options: [
      { label: 'A', value: '4(x + 5)(x - 3)', isCorrect: true },
      { label: 'B', value: '4(x - 5)(x + 3)', isCorrect: false, explanation: 'Sign error in trinomial factoring' },
      { label: 'C', value: '(4x + 20)(x - 3)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(x + 5)(x - 3)', isCorrect: false, explanation: 'Forgot to factor out GCF of 4' }
    ]
  },
  {
    id: 'combined-tri-4',
    type: 'combined',
    question: '5x^2 + 45x + 100',
    correctAnswer: '5(x + 4)(x + 5)',
    options: [
      { label: 'A', value: '5(x + 4)(x + 5)', isCorrect: true },
      { label: 'B', value: '5(x + 2)(x + 10)', isCorrect: false, explanation: 'Incorrect trinomial factoring' },
      { label: 'C', value: '(5x + 20)(x + 5)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(x + 4)(x + 5)', isCorrect: false, explanation: 'Forgot to factor out GCF of 5' }
    ]
  },
  {
    id: 'combined-tri-5',
    type: 'combined',
    question: '6x^2 - 18x - 24',
    correctAnswer: '6(x - 4)(x + 1)',
    options: [
      { label: 'A', value: '6(x - 4)(x + 1)', isCorrect: true },
      { label: 'B', value: '6(x + 4)(x - 1)', isCorrect: false, explanation: 'Sign error in trinomial factoring' },
      { label: 'C', value: '6(x - 2)(x + 2)', isCorrect: false, explanation: 'Incorrect trinomial factoring' },
      { label: 'D', value: '(x - 4)(x + 1)', isCorrect: false, explanation: 'Forgot to factor out GCF of 6' }
    ]
  },
  {
    id: 'combined-tri-6',
    type: 'combined',
    question: '2x^2 + 16x + 30',
    correctAnswer: '2(x + 3)(x + 5)',
    options: [
      { label: 'A', value: '2(x + 3)(x + 5)', isCorrect: true },
      { label: 'B', value: '2(x + 2)(x + 15)', isCorrect: false, explanation: 'Incorrect trinomial factoring' },
      { label: 'C', value: '(2x + 6)(x + 5)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(x + 3)(x + 5)', isCorrect: false, explanation: 'Forgot to factor out GCF of 2' }
    ]
  },
  {
    id: 'combined-tri-7',
    type: 'combined',
    question: '3x^2 - 12x + 9',
    correctAnswer: '3(x - 1)(x - 3)',
    options: [
      { label: 'A', value: '3(x - 1)(x - 3)', isCorrect: true },
      { label: 'B', value: '3(x + 1)(x + 3)', isCorrect: false, explanation: 'Sign error in trinomial factoring' },
      { label: 'C', value: '(3x - 3)(x - 3)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(x - 1)(x - 3)', isCorrect: false, explanation: 'Forgot to factor out GCF of 3' }
    ]
  },
  {
    id: 'combined-tri-8',
    type: 'combined',
    question: '4x^2 + 12x - 16',
    correctAnswer: '4(x + 4)(x - 1)',
    options: [
      { label: 'A', value: '4(x + 4)(x - 1)', isCorrect: true },
      { label: 'B', value: '4(x - 4)(x + 1)', isCorrect: false, explanation: 'Sign error in trinomial factoring' },
      { label: 'C', value: '4(x + 2)(x - 2)', isCorrect: false, explanation: 'Incorrect trinomial factoring' },
      { label: 'D', value: '(x + 4)(x - 1)', isCorrect: false, explanation: 'Forgot to factor out GCF of 4' }
    ]
  },
  {
    id: 'combined-tri-9',
    type: 'combined',
    question: '5x^2 - 10x - 15',
    correctAnswer: '5(x - 3)(x + 1)',
    options: [
      { label: 'A', value: '5(x - 3)(x + 1)', isCorrect: true },
      { label: 'B', value: '5(x + 3)(x - 1)', isCorrect: false, explanation: 'Sign error in trinomial factoring' },
      { label: 'C', value: '(5x - 15)(x + 1)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(x - 3)(x + 1)', isCorrect: false, explanation: 'Forgot to factor out GCF of 5' }
    ]
  },
  {
    id: 'combined-tri-10',
    type: 'combined',
    question: '2x^2 + 10x + 12',
    correctAnswer: '2(x + 2)(x + 3)',
    options: [
      { label: 'A', value: '2(x + 2)(x + 3)', isCorrect: true },
      { label: 'B', value: '2(x + 1)(x + 6)', isCorrect: false, explanation: 'Incorrect trinomial factoring' },
      { label: 'C', value: '(2x + 4)(x + 3)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(x + 2)(x + 3)', isCorrect: false, explanation: 'Forgot to factor out GCF of 2' }
    ]
  }
]

// Export all questions for Part 3 (cumulative)
export const allMiniBossQuestions = {
  'gcf-identify': gcfIdentifyQuestions,
  'gcf-factor': gcfFactorQuestions,
  'simple-diff-squares': simpleDiffSquaresQuestions,
  'simple-trinomials': simpleTrinomialQuestions,
  'combined': combinedQuestions
}

// Get random question by type
export function getRandomMiniBossQuestion(
  type: 'gcf-identify' | 'gcf-factor' | 'simple-diff-squares' | 'simple-trinomials' | 'combined',
  excludeIds: string[] = []
): MiniBossQuestion {
  const questions = allMiniBossQuestions[type].filter(q => !excludeIds.includes(q.id))
  return questions[Math.floor(Math.random() * questions.length)]
}

// Re-export the MiniBossQuestion type
export type { MiniBossQuestion }
