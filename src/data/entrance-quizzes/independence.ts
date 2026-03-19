/**
 * Entrance Quiz — Independence (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Independent Events
  {
    id: 'ind-ent-1a',
    question: 'Events are independent if:',
    options: [
      'They cannot occur at the same time',
      'The occurrence of one does not affect the probability of the other',
      'They always occur together',
      'Their probabilities sum to 1',
    ],
    correctIndex: 1,
    explanation: 'Independent events are those where the occurrence of one event does not change the probability of the other event occurring.',
    partNumber: 1,
    partTitle: 'Independent Events',
  },
  {
    id: 'ind-ent-1b',
    question: 'Which pair of events is independent?',
    options: [
      'Drawing two cards from a deck without replacement',
      'Selecting a student and then selecting their sibling',
      'Flipping a coin and rolling a die',
      'Choosing a sock and then choosing another from the same drawer',
    ],
    correctIndex: 2,
    explanation: 'Flipping a coin and rolling a die are independent — the outcome of one has no effect on the outcome of the other.',
    partNumber: 1,
    partTitle: 'Independent Events',
  },

  // Part 2: Dependent Events
  {
    id: 'ind-ent-2a',
    question: 'Dependent events are events where:',
    options: [
      'Both events always occur',
      'The outcome of one changes the probability of the other',
      'Neither event can occur',
      'Their probabilities multiply to 1',
    ],
    correctIndex: 1,
    explanation: 'Events are dependent when the occurrence of one event changes (affects) the probability of the other event.',
    partNumber: 2,
    partTitle: 'Dependent Events',
  },
  {
    id: 'ind-ent-2b',
    question: 'Why does drawing cards without replacement create dependent events?',
    options: [
      'The deck gets shuffled after each draw',
      'Each card drawn changes the composition of the remaining deck, altering probabilities',
      'The probability stays the same after each draw',
      'Cards are always drawn in order',
    ],
    correctIndex: 1,
    explanation: 'Without replacement, removing a card changes both the total number of cards and the composition of the deck, so subsequent probabilities change.',
    partNumber: 2,
    partTitle: 'Dependent Events',
  },

  // Part 3: Testing for Independence
  {
    id: 'ind-ent-3a',
    question: 'Which equation can be used to test whether events A and B are independent?',
    options: [
      'P(A and B) = P(A) + P(B)',
      'P(A|B) = P(B|A)',
      'P(A and B) = P(A) · P(B)',
      'P(A or B) = P(A) · P(B)',
    ],
    correctIndex: 2,
    explanation: 'Events A and B are independent if and only if P(A and B) = P(A) · P(B). Equivalently, P(A|B) = P(A).',
    partNumber: 3,
    partTitle: 'Testing for Independence',
  },
  {
    id: 'ind-ent-3b',
    question: 'Two events share a common cause and appear associated. They may be:',
    options: [
      'Mutually exclusive',
      'Conditionally independent given the common cause',
      'Always independent',
      'Impossible to analyze',
    ],
    correctIndex: 1,
    explanation: 'Events that appear associated due to a common cause (confounding variable) may actually be conditionally independent when you control for that cause.',
    partNumber: 3,
    partTitle: 'Testing for Independence',
  },

  // Part 4: Multiplication Rule for Independence
  {
    id: 'ind-ent-4a',
    question: 'For independent events A and B, P(A and B) equals:',
    options: [
      'P(A) + P(B)',
      'P(A) − P(B)',
      'P(A) / P(B)',
      'P(A) × P(B)',
    ],
    correctIndex: 3,
    explanation: 'The multiplication rule for independent events: P(A and B) = P(A) × P(B).',
    partNumber: 4,
    partTitle: 'Multiplication Rule for Independence',
  },
  {
    id: 'ind-ent-4b',
    question: 'If A, B, and C are three mutually independent events, P(A and B and C) equals:',
    options: [
      'P(A) + P(B) + P(C)',
      'P(A) × P(B) × P(C)',
      'P(A) × P(B) + P(C)',
      '[P(A) + P(B)] × P(C)',
    ],
    correctIndex: 1,
    explanation: 'For three mutually independent events, the multiplication rule extends to P(A and B and C) = P(A) × P(B) × P(C).',
    partNumber: 4,
    partTitle: 'Multiplication Rule for Independence',
  },

  // Part 5: Applications
  {
    id: 'ind-ent-5a',
    question: 'The 10% condition states that sampling without replacement can be treated as independent if:',
    options: [
      'The sample size is at least 10% of the population',
      'The sample size is less than 10% of the population',
      'At least 10% of subjects respond',
      'The population is less than 10 individuals',
    ],
    correctIndex: 1,
    explanation: 'When the sample is less than 10% of the population, the dependence caused by sampling without replacement is negligible, so we treat selections as approximately independent.',
    partNumber: 5,
    partTitle: 'Applications',
  },
  {
    id: 'ind-ent-5b',
    question: 'Why is independence important for statistical inference procedures?',
    options: [
      'It makes calculations impossible',
      'It is only important for descriptive statistics',
      'Observations must be independent for many inference formulas (e.g., standard error) to be valid',
      'Independence only matters for categorical data',
    ],
    correctIndex: 2,
    explanation: 'Many inference procedures (confidence intervals, hypothesis tests) require independent observations so that formulas for standard errors and sampling distributions are valid.',
    partNumber: 5,
    partTitle: 'Applications',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'ind-ent-6a',
    question: 'P(A) = 0.6, P(B) = 0.4, and P(A and B) = 0.24. Are A and B independent?',
    options: [
      'No, because 0.24 ≠ 0.6 + 0.4',
      'No, because 0.24 < 0.4',
      'Yes, because P(A) × P(B) = 0.6 × 0.4 = 0.24 = P(A and B)',
      'Cannot be determined',
    ],
    correctIndex: 2,
    explanation: 'Check: P(A) × P(B) = 0.6 × 0.4 = 0.24. Since this equals P(A and B), the events are independent.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'ind-ent-6b',
    question: 'Mutually exclusive events with nonzero probabilities are:',
    options: [
      'Always independent',
      'Sometimes independent',
      'Always dependent',
      'Neither dependent nor independent',
    ],
    correctIndex: 2,
    explanation: 'If A and B are mutually exclusive with nonzero probabilities, P(A and B) = 0, but P(A)·P(B) > 0, so they are always dependent.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review & Applications
  {
    id: 'ind-ent-7a',
    question: 'On the AP exam, how should you demonstrate that two events are independent?',
    options: [
      'Simply state they are independent without justification',
      'Show that P(A and B) = P(A) · P(B) or P(A|B) = P(A) using calculations',
      'Draw a Venn diagram only',
      'List all possible outcomes',
    ],
    correctIndex: 1,
    explanation: 'The AP exam requires you to verify independence with a calculation: show P(A and B) = P(A)·P(B) or P(A|B) = P(A).',
    partNumber: 7,
    partTitle: 'AP Review & Applications',
  },
  {
    id: 'ind-ent-7b',
    question: 'A common mistake on the AP exam regarding independence is:',
    options: [
      'Showing too much work',
      'Assuming events are independent without verifying with probability calculations',
      'Using tree diagrams',
      'Labeling events with letters',
    ],
    correctIndex: 1,
    explanation: 'A frequent error is assuming independence without checking. Always verify using P(A|B) = P(A) or P(A and B) = P(A)·P(B).',
    partNumber: 7,
    partTitle: 'AP Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Independent Events' },
    { partNumber: 2, partTitle: 'Dependent Events' },
    { partNumber: 3, partTitle: 'Testing for Independence' },
    { partNumber: 4, partTitle: 'Multiplication Rule for Independence' },
    { partNumber: 5, partTitle: 'Applications' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
