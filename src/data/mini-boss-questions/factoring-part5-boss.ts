// Mini-Boss Questions for Factoring Part 5
// Cumulative: GCF, Difference of Squares, Simple Trinomials, Complex Trinomials, Perfect Squares

import { 
  MiniBossQuestion,
  gcfIdentifyQuestions,
  gcfFactorQuestions,
  simpleDiffSquaresQuestions
} from './factoring-part2-boss'
import { simpleTrinomialQuestions } from './factoring-part3-boss'
import { complexTrinomialQuestions } from './factoring-part4-boss'

// Category: Combined (10 questions)
// These require recognizing the best method and applying it
export const combinedQuestions: MiniBossQuestion[] = [
  {
    id: 'combined-ps-1',
    type: 'combined',
    question: '$2x^{2}$ + 8x + 8',
    correctAnswer: '$2(x + 2)^{2}$',
    options: [
      { label: 'A', value: '$2(x + 2)^{2}$', isCorrect: true },
      { label: 'B', value: '$(2x + 4)^{2}$', isCorrect: false, explanation: 'Must factor out GCF first; also this expands incorrectly' },
      { label: 'C', value: '$2(x^{2} + 4x + 4)$', isCorrect: false, explanation: 'Not fully factored - can factor the trinomial' },
      { label: 'D', value: '$(x + 2)^{2}$', isCorrect: false, explanation: 'Forgot to factor out GCF of 2' }
    ]
  },
  {
    id: 'combined-ps-2',
    type: 'combined',
    question: '$3x^{2}$ - 12',
    correctAnswer: '3(x - 2)(x + 2)',
    options: [
      { label: 'A', value: '3(x - 2)(x + 2)', isCorrect: true },
      { label: 'B', value: '(3x - 6)(x + 2)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'C', value: '$3(x^{2} - 4)$', isCorrect: false, explanation: 'Not fully factored - difference of squares' },
      { label: 'D', value: '(x - 2)(x + 2)', isCorrect: false, explanation: 'Forgot to factor out GCF of 3' }
    ]
  },
  {
    id: 'combined-ps-3',
    type: 'combined',
    question: '$5x^{2}$ - 20x + 20',
    correctAnswer: '$5(x - 2)^{2}$',
    options: [
      { label: 'A', value: '$5(x - 2)^{2}$', isCorrect: true },
      { label: 'B', value: '5(x - 4)(x - 1)', isCorrect: false, explanation: 'Incorrect factoring of the trinomial' },
      { label: 'C', value: '$(5x - 10)^{2}$', isCorrect: false, explanation: 'Must factor out GCF first; also this is incorrect' },
      { label: 'D', value: '$(x - 2)^{2}$', isCorrect: false, explanation: 'Forgot to factor out GCF of 5' }
    ]
  },
  {
    id: 'combined-ps-4',
    type: 'combined',
    question: '$4x^{2}$ + 16x + 16',
    correctAnswer: '$4(x + 2)^{2}$',
    options: [
      { label: 'A', value: '$4(x + 2)^{2}$', isCorrect: true },
      { label: 'B', value: '$(2x + 4)^{2}$', isCorrect: false, explanation: 'This expands to $4x^{2}$ + 16x + 16, but 2x + 4 has GCF of 2' },
      { label: 'C', value: '4(x + 4)(x + 1)', isCorrect: false, explanation: 'Incorrect factoring of the trinomial' },
      { label: 'D', value: '$(x + 2)^{2}$', isCorrect: false, explanation: 'Forgot to factor out GCF of 4' }
    ]
  },
  {
    id: 'combined-ps-5',
    type: 'combined',
    question: '$6x^{2}$ - 54',
    correctAnswer: '6(x - 3)(x + 3)',
    options: [
      { label: 'A', value: '6(x - 3)(x + 3)', isCorrect: true },
      { label: 'B', value: '(6x - 18)(x + 3)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'C', value: '$6(x^{2} - 9)$', isCorrect: false, explanation: 'Not fully factored - difference of squares' },
      { label: 'D', value: '(x - 3)(x + 3)', isCorrect: false, explanation: 'Forgot to factor out GCF of 6' }
    ]
  },
  {
    id: 'combined-ps-6',
    type: 'combined',
    question: '$8x^{2}$ - 24x + 18',
    correctAnswer: '$2(2x - 3)^{2}$',
    options: [
      { label: 'A', value: '$2(2x - 3)^{2}$', isCorrect: true },
      { label: 'B', value: '2(4x - 6)(x - 3)', isCorrect: false, explanation: '4x - 6 has GCF of 2 - not fully factored' },
      { label: 'C', value: '$8(x - 3)^{2}$', isCorrect: false, explanation: 'Incorrect GCF and factoring' },
      { label: 'D', value: '$(2x - 3)^{2}$', isCorrect: false, explanation: 'Forgot to factor out GCF of 2' }
    ]
  },
  {
    id: 'combined-ps-7',
    type: 'combined',
    question: '$10x^{2}$ + 40x + 40',
    correctAnswer: '$10(x + 2)^{2}$',
    options: [
      { label: 'A', value: '$10(x + 2)^{2}$', isCorrect: true },
      { label: 'B', value: '10(x + 4)(x + 1)', isCorrect: false, explanation: 'Incorrect factoring of the trinomial' },
      { label: 'C', value: '$2(5x + 10)^{2}$', isCorrect: false, explanation: '5x + 10 has GCF of 5 - not fully factored' },
      { label: 'D', value: '$(x + 2)^{2}$', isCorrect: false, explanation: 'Forgot to factor out GCF of 10' }
    ]
  },
  {
    id: 'combined-ps-8',
    type: 'combined',
    question: '$7x^{2}$ - 63',
    correctAnswer: '7(x - 3)(x + 3)',
    options: [
      { label: 'A', value: '7(x - 3)(x + 3)', isCorrect: true },
      { label: 'B', value: '(7x - 21)(x + 3)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'C', value: '$7(x^{2} - 9)$', isCorrect: false, explanation: 'Not fully factored - difference of squares' },
      { label: 'D', value: '(x - 3)(x + 3)', isCorrect: false, explanation: 'Forgot to factor out GCF of 7' }
    ]
  },
  {
    id: 'combined-ps-9',
    type: 'combined',
    question: '$18x^{2}$ - 48x + 32',
    correctAnswer: '$2(3x - 4)^{2}$',
    options: [
      { label: 'A', value: '$2(3x - 4)^{2}$', isCorrect: true },
      { label: 'B', value: '2(9x - 16)(x - 2)', isCorrect: false, explanation: 'Incorrect factoring' },
      { label: 'C', value: '$(3x - 4)^{2}$', isCorrect: false, explanation: 'Forgot to factor out GCF of 2' },
      { label: 'D', value: '2(6x - 8)(x - 2)', isCorrect: false, explanation: '6x - 8 has GCF of 2 - not fully factored' }
    ]
  },
  {
    id: 'combined-ps-10',
    type: 'combined',
    question: '$12x^{2}$ - 27',
    correctAnswer: '3(2x - 3)(2x + 3)',
    options: [
      { label: 'A', value: '3(2x - 3)(2x + 3)', isCorrect: true },
      { label: 'B', value: '(12x - 27)(x + 1)', isCorrect: false, explanation: 'Incorrect factoring; must factor GCF first' },
      { label: 'C', value: '$3(4x^{2} - 9)$', isCorrect: false, explanation: 'Not fully factored - difference of squares' },
      { label: 'D', value: '(2x - 3)(2x + 3)', isCorrect: false, explanation: 'Forgot to factor out GCF of 3' }
    ]
  }
]

// Export all questions for Part 5 (cumulative)
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
