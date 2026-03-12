// Mini-Boss Questions for Factoring Part 4
// Cumulative: GCF, Difference of Squares, Simple Trinomials, Complex Trinomials

import { 
  MiniBossQuestion,
  gcfIdentifyQuestions,
  gcfFactorQuestions,
  simpleDiffSquaresQuestions
} from './factoring-part2-boss'
import { simpleTrinomialQuestions } from './factoring-part3-boss'

// Category: Complex Trinomials (10 questions)
// These use the AC method where a ≠ 1
export const complexTrinomialQuestions: MiniBossQuestion[] = [
  {
    id: 'complex-tri-1',
    type: 'complex-trinomials',
    question: '2x^2 + 7x + 3',
    correctAnswer: '(2x + 1)(x + 3)',
    options: [
      { label: 'A', value: '(2x + 1)(x + 3)', isCorrect: true },
      { label: 'B', value: '(2x + 3)(x + 1)', isCorrect: false, explanation: 'This gives 2x² + 5x + 3' },
      { label: 'C', value: '(x + 1)(x + 3)', isCorrect: false, explanation: 'Forgot the leading coefficient of 2' },
      { label: 'D', value: '2(x + 1)(x + 3)', isCorrect: false, explanation: 'This gives 2x² + 8x + 6' }
    ]
  },
  {
    id: 'complex-tri-2',
    type: 'complex-trinomials',
    question: '3x^2 - 10x + 8',
    correctAnswer: '(3x - 4)(x - 2)',
    options: [
      { label: 'A', value: '(3x - 4)(x - 2)', isCorrect: true },
      { label: 'B', value: '(3x - 2)(x - 4)', isCorrect: false, explanation: 'This gives 3x² - 14x + 8' },
      { label: 'C', value: '(3x + 4)(x + 2)', isCorrect: false, explanation: 'Sign error - all terms should be negative' },
      { label: 'D', value: '(x - 4)(x - 2)', isCorrect: false, explanation: 'Forgot the leading coefficient of 3' }
    ]
  },
  {
    id: 'complex-tri-3',
    type: 'complex-trinomials',
    question: '2x^2 + 5x - 12',
    correctAnswer: '(2x - 3)(x + 4)',
    options: [
      { label: 'A', value: '(2x - 3)(x + 4)', isCorrect: true },
      { label: 'B', value: '(2x + 3)(x - 4)', isCorrect: false, explanation: 'This gives 2x² - 5x - 12' },
      { label: 'C', value: '(2x + 4)(x - 3)', isCorrect: false, explanation: 'This gives 2x² - 2x - 12' },
      { label: 'D', value: '(x - 3)(x + 4)', isCorrect: false, explanation: 'Forgot the leading coefficient of 2' }
    ]
  },
  {
    id: 'complex-tri-4',
    type: 'complex-trinomials',
    question: '3x^2 + 11x + 6',
    correctAnswer: '(3x + 2)(x + 3)',
    options: [
      { label: 'A', value: '(3x + 2)(x + 3)', isCorrect: true },
      { label: 'B', value: '(3x + 3)(x + 2)', isCorrect: false, explanation: 'This gives 3x² + 9x + 6' },
      { label: 'C', value: '(3x + 6)(x + 1)', isCorrect: false, explanation: '3x + 6 has GCF of 3 - not fully factored' },
      { label: 'D', value: '(x + 2)(x + 3)', isCorrect: false, explanation: 'Forgot the leading coefficient of 3' }
    ]
  },
  {
    id: 'complex-tri-5',
    type: 'complex-trinomials',
    question: '5x^2 - 13x - 6',
    correctAnswer: '(5x + 2)(x - 3)',
    options: [
      { label: 'A', value: '(5x + 2)(x - 3)', isCorrect: true },
      { label: 'B', value: '(5x - 2)(x + 3)', isCorrect: false, explanation: 'This gives 5x² + 13x - 6' },
      { label: 'C', value: '(5x - 3)(x + 2)', isCorrect: false, explanation: 'This gives 5x² + 7x - 6' },
      { label: 'D', value: '(5x + 6)(x - 1)', isCorrect: false, explanation: 'This gives 5x² + x - 6' }
    ]
  },
  {
    id: 'complex-tri-6',
    type: 'complex-trinomials',
    question: '4x^2 + 8x + 3',
    correctAnswer: '(2x + 1)(2x + 3)',
    options: [
      { label: 'A', value: '(2x + 1)(2x + 3)', isCorrect: true },
      { label: 'B', value: '(4x + 1)(x + 3)', isCorrect: false, explanation: 'This gives 4x² + 13x + 3' },
      { label: 'C', value: '(4x + 3)(x + 1)', isCorrect: false, explanation: 'This gives 4x² + 7x + 3' },
      { label: 'D', value: '(x + 1)(x + 3)', isCorrect: false, explanation: 'Forgot the leading coefficient of 4' }
    ]
  },
  {
    id: 'complex-tri-7',
    type: 'complex-trinomials',
    question: '6x^2 - 7x - 3',
    correctAnswer: '(2x - 3)(3x + 1)',
    options: [
      { label: 'A', value: '(2x - 3)(3x + 1)', isCorrect: true },
      { label: 'B', value: '(2x + 3)(3x - 1)', isCorrect: false, explanation: 'This gives 6x² + 7x - 3' },
      { label: 'C', value: '(6x - 3)(x + 1)', isCorrect: false, explanation: '6x - 3 has GCF of 3 - not fully factored' },
      { label: 'D', value: '(6x + 1)(x - 3)', isCorrect: false, explanation: 'This gives 6x² - 17x - 3' }
    ]
  },
  {
    id: 'complex-tri-8',
    type: 'complex-trinomials',
    question: '2x^2 - 9x + 10',
    correctAnswer: '(2x - 5)(x - 2)',
    options: [
      { label: 'A', value: '(2x - 5)(x - 2)', isCorrect: true },
      { label: 'B', value: '(2x - 2)(x - 5)', isCorrect: false, explanation: '2x - 2 has GCF of 2 - not fully factored' },
      { label: 'C', value: '(2x + 5)(x + 2)', isCorrect: false, explanation: 'Sign error - should be negative' },
      { label: 'D', value: '(x - 5)(x - 2)', isCorrect: false, explanation: 'Forgot the leading coefficient of 2' }
    ]
  },
  {
    id: 'complex-tri-9',
    type: 'complex-trinomials',
    question: '3x^2 + 7x - 6',
    correctAnswer: '(3x - 2)(x + 3)',
    options: [
      { label: 'A', value: '(3x - 2)(x + 3)', isCorrect: true },
      { label: 'B', value: '(3x + 2)(x - 3)', isCorrect: false, explanation: 'This gives 3x² - 7x - 6' },
      { label: 'C', value: '(3x - 6)(x + 1)', isCorrect: false, explanation: '3x - 6 has GCF of 3 - not fully factored' },
      { label: 'D', value: '(3x + 3)(x - 2)', isCorrect: false, explanation: '3x + 3 has GCF of 3 - not fully factored' }
    ]
  },
  {
    id: 'complex-tri-10',
    type: 'complex-trinomials',
    question: '4x^2 - 4x - 15',
    correctAnswer: '(2x - 5)(2x + 3)',
    options: [
      { label: 'A', value: '(2x - 5)(2x + 3)', isCorrect: true },
      { label: 'B', value: '(2x + 5)(2x - 3)', isCorrect: false, explanation: 'This gives 4x² + 4x - 15' },
      { label: 'C', value: '(4x - 5)(x + 3)', isCorrect: false, explanation: 'This gives 4x² + 7x - 15' },
      { label: 'D', value: '(4x + 3)(x - 5)', isCorrect: false, explanation: 'This gives 4x² - 17x - 15' }
    ]
  }
]

// Category: Combined (10 questions)
// These require GCF first, then complex trinomial factoring
export const combinedQuestions: MiniBossQuestion[] = [
  {
    id: 'combined-complex-1',
    type: 'combined',
    question: '4x^2 + 14x + 6',
    correctAnswer: '2(2x + 1)(x + 3)',
    options: [
      { label: 'A', value: '2(2x + 1)(x + 3)', isCorrect: true },
      { label: 'B', value: '(4x + 2)(x + 3)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'C', value: '2(2x + 3)(x + 1)', isCorrect: false, explanation: 'Incorrect trinomial factoring' },
      { label: 'D', value: '(2x + 1)(x + 3)', isCorrect: false, explanation: 'Forgot to factor out GCF of 2' }
    ]
  },
  {
    id: 'combined-complex-2',
    type: 'combined',
    question: '6x^2 - 20x + 16',
    correctAnswer: '2(3x - 4)(x - 2)',
    options: [
      { label: 'A', value: '2(3x - 4)(x - 2)', isCorrect: true },
      { label: 'B', value: '2(3x - 2)(x - 4)', isCorrect: false, explanation: 'Incorrect trinomial factoring' },
      { label: 'C', value: '(6x - 8)(x - 2)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(3x - 4)(x - 2)', isCorrect: false, explanation: 'Forgot to factor out GCF of 2' }
    ]
  },
  {
    id: 'combined-complex-3',
    type: 'combined',
    question: '9x^2 + 15x - 6',
    correctAnswer: '3(3x - 1)(x + 2)',
    options: [
      { label: 'A', value: '3(3x - 1)(x + 2)', isCorrect: true },
      { label: 'B', value: '3(3x + 1)(x - 2)', isCorrect: false, explanation: 'Sign error in trinomial factoring' },
      { label: 'C', value: '(9x - 3)(x + 2)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(3x - 1)(x + 2)', isCorrect: false, explanation: 'Forgot to factor out GCF of 3' }
    ]
  },
  {
    id: 'combined-complex-4',
    type: 'combined',
    question: '10x^2 + 26x + 12',
    correctAnswer: '2(5x + 2)(x + 3)',
    options: [
      { label: 'A', value: '2(5x + 2)(x + 3)', isCorrect: true },
      { label: 'B', value: '2(5x + 3)(x + 2)', isCorrect: false, explanation: 'Incorrect trinomial factoring' },
      { label: 'C', value: '(10x + 4)(x + 3)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(5x + 2)(x + 3)', isCorrect: false, explanation: 'Forgot to factor out GCF of 2' }
    ]
  },
  {
    id: 'combined-complex-5',
    type: 'combined',
    question: '12x^2 - 14x - 6',
    correctAnswer: '2(2x - 3)(3x + 1)',
    options: [
      { label: 'A', value: '2(2x - 3)(3x + 1)', isCorrect: true },
      { label: 'B', value: '2(2x + 3)(3x - 1)', isCorrect: false, explanation: 'Sign error in trinomial factoring' },
      { label: 'C', value: '(12x - 6)(x + 1)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(2x - 3)(3x + 1)', isCorrect: false, explanation: 'Forgot to factor out GCF of 2' }
    ]
  },
  {
    id: 'combined-complex-6',
    type: 'combined',
    question: '8x^2 + 16x + 6',
    correctAnswer: '2(2x + 1)(2x + 3)',
    options: [
      { label: 'A', value: '2(2x + 1)(2x + 3)', isCorrect: true },
      { label: 'B', value: '2(4x + 1)(x + 3)', isCorrect: false, explanation: 'Incorrect trinomial factoring' },
      { label: 'C', value: '(8x + 2)(x + 3)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(2x + 1)(2x + 3)', isCorrect: false, explanation: 'Forgot to factor out GCF of 2' }
    ]
  },
  {
    id: 'combined-complex-7',
    type: 'combined',
    question: '15x^2 - 10x - 25',
    correctAnswer: '5(3x - 5)(x + 1)',
    options: [
      { label: 'A', value: '5(3x - 5)(x + 1)', isCorrect: true },
      { label: 'B', value: '5(3x + 5)(x - 1)', isCorrect: false, explanation: 'Sign error in trinomial factoring' },
      { label: 'C', value: '(15x - 25)(x + 1)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(3x - 5)(x + 1)', isCorrect: false, explanation: 'Forgot to factor out GCF of 5' }
    ]
  },
  {
    id: 'combined-complex-8',
    type: 'combined',
    question: '6x^2 - 18x + 12',
    correctAnswer: '6(x - 1)(x - 2)',
    options: [
      { label: 'A', value: '6(x - 1)(x - 2)', isCorrect: true },
      { label: 'B', value: '6(x + 1)(x + 2)', isCorrect: false, explanation: 'Sign error - should be negative' },
      { label: 'C', value: '(6x - 6)(x - 2)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(x - 1)(x - 2)', isCorrect: false, explanation: 'Forgot to factor out GCF of 6' }
    ]
  },
  {
    id: 'combined-complex-9',
    type: 'combined',
    question: '14x^2 + 21x - 14',
    correctAnswer: '7(2x - 1)(x + 2)',
    options: [
      { label: 'A', value: '7(2x - 1)(x + 2)', isCorrect: true },
      { label: 'B', value: '7(2x + 1)(x - 2)', isCorrect: false, explanation: 'Sign error in trinomial factoring' },
      { label: 'C', value: '(14x - 7)(x + 2)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(2x - 1)(x + 2)', isCorrect: false, explanation: 'Forgot to factor out GCF of 7' }
    ]
  },
  {
    id: 'combined-complex-10',
    type: 'combined',
    question: '12x^2 - 8x - 60',
    correctAnswer: '4(3x + 5)(x - 3)',
    options: [
      { label: 'A', value: '4(3x + 5)(x - 3)', isCorrect: true },
      { label: 'B', value: '4(3x - 5)(x + 3)', isCorrect: false, explanation: 'Sign error in trinomial factoring' },
      { label: 'C', value: '(12x + 20)(x - 3)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: '(3x + 5)(x - 3)', isCorrect: false, explanation: 'Forgot to factor out GCF of 4' }
    ]
  }
]

// Export all questions for Part 4 (cumulative)
export const allMiniBossQuestions = {
  'gcf-identify': gcfIdentifyQuestions,
  'gcf-factor': gcfFactorQuestions,
  'simple-diff-squares': simpleDiffSquaresQuestions,
  'simple-trinomials': simpleTrinomialQuestions,
  'complex-trinomials': complexTrinomialQuestions,
  'combined': combinedQuestions
}

// Get random question by type
export function getRandomMiniBossQuestion(
  type: 'gcf-identify' | 'gcf-factor' | 'simple-diff-squares' | 'simple-trinomials' | 'complex-trinomials' | 'combined',
  excludeIds: string[] = []
): MiniBossQuestion {
  const questions = allMiniBossQuestions[type].filter(q => !excludeIds.includes(q.id))
  return questions[Math.floor(Math.random() * questions.length)]
}

// Re-export the MiniBossQuestion type
export type { MiniBossQuestion }
