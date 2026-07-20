// Mini-Boss Questions for Factoring Part 6 - ULTIMATE BOSS
// Cumulative: All factoring techniques with extra challenging combined questions

import { 
  MiniBossQuestion,
  gcfIdentifyQuestions,
  gcfFactorQuestions,
  simpleDiffSquaresQuestions
} from './factoring-part2-boss'
import { simpleTrinomialQuestions } from './factoring-part3-boss'
import { complexTrinomialQuestions } from './factoring-part4-boss'

// Category: Combined - Ultimate Challenge (10 questions)
// These are the most challenging - multi-step factoring requiring multiple techniques
export const combinedQuestions: MiniBossQuestion[] = [
  {
    id: 'ultimate-1',
    type: 'combined',
    question: '$3x^{3}$ - 75x',
    correctAnswer: '3x(x - 5)(x + 5)',
    options: [
      { label: 'A', value: '3x(x - 5)(x + 5)', isCorrect: true },
      { label: 'B', value: '$3x(x^{2} - 25)$', isCorrect: false, explanation: 'Not fully factored - $x^{2}$ - 25 is difference of squares' },
      { label: 'C', value: '(3x - 15)(x + 5)', isCorrect: false, explanation: 'Must factor out GCF first' },
      { label: 'D', value: 'x(x - 5)(x + 5)', isCorrect: false, explanation: 'Forgot to factor out coefficient of 3' }
    ]
  },
  {
    id: 'ultimate-2',
    type: 'combined',
    question: '$2x^{3}$ + $12x^{2}$ + 18x',
    correctAnswer: '$2x(x + 3)^{2}$',
    options: [
      { label: 'A', value: '$2x(x + 3)^{2}$', isCorrect: true },
      { label: 'B', value: '$2x(x^{2} + 6x + 9)$', isCorrect: false, explanation: 'Not fully factored - this is a perfect square trinomial' },
      { label: 'C', value: '$x(2x + 6)^{2}$', isCorrect: false, explanation: '2x + 6 has GCF of 2 - not fully factored' },
      { label: 'D', value: '$(x + 3)^{2}$', isCorrect: false, explanation: 'Forgot to factor out GCF of 2x' }
    ]
  },
  {
    id: 'ultimate-3',
    type: 'combined',
    question: '$5x^{2}$ - 45',
    correctAnswer: '5(x - 3)(x + 3)',
    options: [
      { label: 'A', value: '5(x - 3)(x + 3)', isCorrect: true },
      { label: 'B', value: '$5(x^{2} - 9)$', isCorrect: false, explanation: 'Not fully factored - difference of squares' },
      { label: 'C', value: '5(x + 9)(x - 9)', isCorrect: false, explanation: '$\\sqrt{9}$ = 3, so the factors use 3, not 9' },
      { label: 'D', value: '(x - 3)(x + 3)', isCorrect: false, explanation: 'Forgot to factor out GCF of 5' }
    ]
  },
  {
    id: 'ultimate-4',
    type: 'combined',
    question: '$4x^{3}$ + $24x^{2}$ + 32x',
    correctAnswer: '4x(x + 2)(x + 4)',
    options: [
      { label: 'A', value: '4x(x + 2)(x + 4)', isCorrect: true },
      { label: 'B', value: '$4x(x^{2} + 6x + 8)$', isCorrect: false, explanation: 'Not fully factored - trinomial can be factored' },
      { label: 'C', value: '4x(x + 6)(x + 8)', isCorrect: false, explanation: 'Find factors of 8 that add to 6: 2 and 4, not 6 and 8' },
      { label: 'D', value: '(x + 2)(x + 4)', isCorrect: false, explanation: 'Forgot to factor out GCF of 4x' }
    ]
  },
  {
    id: 'ultimate-5',
    type: 'combined',
    question: '$6x^{3}$ - 24x',
    correctAnswer: '6x(x - 2)(x + 2)',
    options: [
      { label: 'A', value: '6x(x - 2)(x + 2)', isCorrect: true },
      { label: 'B', value: '$6x(x^{2} - 4)$', isCorrect: false, explanation: 'Not fully factored - difference of squares' },
      { label: 'C', value: '2x(3x - 12)', isCorrect: false, explanation: 'Incomplete factoring; 3x - 12 has GCF of 3' },
      { label: 'D', value: 'x(x - 2)(x + 2)', isCorrect: false, explanation: 'Forgot to factor out coefficient of 6' }
    ]
  },
  {
    id: 'ultimate-6',
    type: 'combined',
    question: '$8x^{2}$ - 32x + 32',
    correctAnswer: '$8(x - 2)^{2}$',
    options: [
      { label: 'A', value: '$8(x - 2)^{2}$', isCorrect: true },
      { label: 'B', value: '$8(x^{2} - 4x + 4)$', isCorrect: false, explanation: 'Not fully factored - perfect square trinomial' },
      { label: 'C', value: '$(4x - 8)^{2}$', isCorrect: false, explanation: 'Must factor out GCF first; also 4x - 8 has GCF of 4' },
      { label: 'D', value: '$(x - 2)^{2}$', isCorrect: false, explanation: 'Forgot to factor out GCF of 8' }
    ]
  },
  {
    id: 'ultimate-7',
    type: 'combined',
    question: '$10x^{3}$ + $40x^{2}$ + 40x',
    correctAnswer: '$10x(x + 2)^{2}$',
    options: [
      { label: 'A', value: '$10x(x + 2)^{2}$', isCorrect: true },
      { label: 'B', value: '$10x(x^{2} + 4x + 4)$', isCorrect: false, explanation: 'Not fully factored - perfect square trinomial' },
      { label: 'C', value: '$2x(5x + 10)^{2}$', isCorrect: false, explanation: '5x + 10 has GCF of 5 - not fully factored' },
      { label: 'D', value: '$x(x + 2)^{2}$', isCorrect: false, explanation: 'Forgot to factor out coefficient of 10' }
    ]
  },
  {
    id: 'ultimate-8',
    type: 'combined',
    question: '$7x^{2}$ - 28',
    correctAnswer: '7(x - 2)(x + 2)',
    options: [
      { label: 'A', value: '7(x - 2)(x + 2)', isCorrect: true },
      { label: 'B', value: '$7(x^{2} - 4)$', isCorrect: false, explanation: 'Not fully factored - difference of squares' },
      { label: 'C', value: '7(x + 4)(x - 4)', isCorrect: false, explanation: '$\\sqrt{4}$ = 2, so the factors use 2, not 4' },
      { label: 'D', value: '(x - 2)(x + 2)', isCorrect: false, explanation: 'Forgot to factor out GCF of 7' }
    ]
  },
  {
    id: 'ultimate-9',
    type: 'combined',
    question: '$9x^{3}$ - $36x^{2}$ + 27x',
    correctAnswer: '9x(x - 1)(x - 3)',
    options: [
      { label: 'A', value: '9x(x - 1)(x - 3)', isCorrect: true },
      { label: 'B', value: '$9x(x^{2} - 4x + 3)$', isCorrect: false, explanation: 'Not fully factored - trinomial can be factored' },
      { label: 'C', value: '9x(x + 1)(x + 3)', isCorrect: false, explanation: 'Middle term is -4x, so both factors need negative signs' },
      { label: 'D', value: 'x(x - 1)(x - 3)', isCorrect: false, explanation: 'Forgot to factor out coefficient of 9' }
    ]
  },
  {
    id: 'ultimate-10',
    type: 'combined',
    question: '$12x^{3}$ - 48x',
    correctAnswer: '12x(x - 2)(x + 2)',
    options: [
      { label: 'A', value: '12x(x - 2)(x + 2)', isCorrect: true },
      { label: 'B', value: '$12x(x^{2} - 4)$', isCorrect: false, explanation: 'Not fully factored - difference of squares' },
      { label: 'C', value: '4x(3x - 12)', isCorrect: false, explanation: 'Incomplete; 3x - 12 has GCF of 3 and isn\'t fully factored' },
      { label: 'D', value: 'x(x - 2)(x + 2)', isCorrect: false, explanation: 'Forgot to factor out coefficient of 12' }
    ]
  }
]

// Export all questions for Part 6 (cumulative)
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
