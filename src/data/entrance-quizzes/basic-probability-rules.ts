/**
 * Entrance Quiz — Basic Probability Rules (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Basic Probability
  {
    id: 'bpr-ent-1a',
    question: 'What is the range of possible values for the probability of any event?',
    options: ['−1 to 1', '0 to 1', '0 to 100', '0 to infinity'],
    correctIndex: 1,
    explanation: 'By definition, the probability of any event must be between 0 and 1 inclusive. P(sample space) = 1 and P(impossible event) = 0.',
    partNumber: 1,
    partTitle: 'Basic Probability',
  },
  {
    id: 'bpr-ent-1b',
    question: 'If P(A) = 0.65, what is P(Aᶜ)?',
    options: ['0.65', '0.35', '1.65', '−0.65'],
    correctIndex: 1,
    explanation: 'By the complement rule, P(Aᶜ) = 1 − P(A) = 1 − 0.65 = 0.35.',
    partNumber: 1,
    partTitle: 'Basic Probability',
  },

  // Part 2: Addition Rule
  {
    id: 'bpr-ent-2a',
    question: 'For any two events A and B, P(A or B) equals:',
    options: [
      'P(A) + P(B)',
      'P(A) × P(B)',
      'P(A) + P(B) − P(A and B)',
      'P(A) − P(B) + P(A and B)',
    ],
    correctIndex: 2,
    explanation: 'The general addition rule states P(A or B) = P(A) + P(B) − P(A and B) to avoid double-counting the overlap.',
    partNumber: 2,
    partTitle: 'Addition Rule',
  },
  {
    id: 'bpr-ent-2b',
    question: 'If A and B are mutually exclusive events, what is P(A and B)?',
    options: ['P(A) × P(B)', 'P(A) + P(B)', '1', '0'],
    correctIndex: 3,
    explanation: 'Mutually exclusive events cannot occur at the same time, so P(A and B) = 0. Therefore P(A or B) = P(A) + P(B).',
    partNumber: 2,
    partTitle: 'Addition Rule',
  },

  // Part 3: Multiplication Rule
  {
    id: 'bpr-ent-3a',
    question: 'The general multiplication rule states that P(A and B) equals:',
    options: [
      'P(A) + P(B|A)',
      'P(A) × P(B|A)',
      'P(A) × P(B) + P(A|B)',
      'P(A or B) × P(B)',
    ],
    correctIndex: 1,
    explanation: 'The general multiplication rule is P(A and B) = P(A) × P(B|A). This works for any two events, whether independent or not.',
    partNumber: 3,
    partTitle: 'Multiplication Rule',
  },
  {
    id: 'bpr-ent-3b',
    question: 'If A and B are independent, P(A and B) simplifies to:',
    options: [
      'P(A) + P(B)',
      'P(A) − P(B)',
      'P(A) × P(B)',
      'P(A) / P(B)',
    ],
    correctIndex: 2,
    explanation: 'When A and B are independent, P(B|A) = P(B), so the multiplication rule simplifies to P(A and B) = P(A) × P(B).',
    partNumber: 3,
    partTitle: 'Multiplication Rule',
  },

  // Part 4: Conditional Probability
  {
    id: 'bpr-ent-4a',
    question: 'Which formula correctly defines P(B|A)?',
    options: [
      'P(A) / P(B)',
      'P(A and B) / P(B)',
      'P(A and B) / P(A)',
      'P(A or B) / P(A)',
    ],
    correctIndex: 2,
    explanation: 'Conditional probability is defined as P(B|A) = P(A and B) / P(A), where P(A) ≠ 0.',
    partNumber: 4,
    partTitle: 'Conditional Probability',
  },
  {
    id: 'bpr-ent-4b',
    question: 'A two-way table shows 40 seniors who play sports and 60 seniors who do not, out of 200 total seniors. What is P(plays sports | senior)?',
    options: ['40/200 = 0.20', '40/100 = 0.40', '60/200 = 0.30', '40/60 = 0.67'],
    correctIndex: 1,
    explanation: 'P(plays sports | senior) restricts to the 100 seniors (40 + 60) and finds the proportion who play sports: 40/100 = 0.40.',
    partNumber: 4,
    partTitle: 'Conditional Probability',
  },

  // Part 5: Independence
  {
    id: 'bpr-ent-5a',
    question: 'Events A and B are independent if and only if:',
    options: [
      'P(A and B) = 0',
      'P(A|B) = P(A)',
      'P(A or B) = P(A) + P(B)',
      'P(A) + P(B) = 1',
    ],
    correctIndex: 1,
    explanation: 'Independence means knowing B occurred does not change the probability of A: P(A|B) = P(A). Equivalently, P(A and B) = P(A)·P(B).',
    partNumber: 5,
    partTitle: 'Independence',
  },
  {
    id: 'bpr-ent-5b',
    question: 'Which scenario involves independent events?',
    options: [
      'Drawing two cards without replacement from a standard deck',
      'Rolling a die and then flipping a coin',
      'Selecting two students from the same class without replacement',
      'Drawing marbles from a bag without replacement',
    ],
    correctIndex: 1,
    explanation: 'Rolling a die and flipping a coin are independent because the outcome of one does not affect the other. Drawing without replacement creates dependent events.',
    partNumber: 5,
    partTitle: 'Independence',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bpr-ent-6a',
    question: 'P(A) = 0.3 and P(B) = 0.5. If A and B are independent, what is P(A and B)?',
    options: ['0.80', '0.15', '0.50', '0.20'],
    correctIndex: 1,
    explanation: 'For independent events, P(A and B) = P(A) × P(B) = 0.3 × 0.5 = 0.15.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bpr-ent-6b',
    question: 'If two events are mutually exclusive (with nonzero probabilities), can they also be independent?',
    options: [
      'Yes, always',
      'Only if P(A) = P(B)',
      'No, never',
      'Only if P(A) + P(B) = 1',
    ],
    correctIndex: 2,
    explanation: 'If A and B are mutually exclusive and both have nonzero probability, then P(A and B) = 0 ≠ P(A)·P(B), so they cannot be independent.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Review & Applications
  {
    id: 'bpr-ent-7a',
    question: 'The law of large numbers states that as the number of trials increases:',
    options: [
      'The probability of each outcome increases',
      'The observed proportion approaches the true probability',
      'Every possible outcome will eventually occur',
      'The variance of the outcomes doubles',
    ],
    correctIndex: 1,
    explanation: 'The law of large numbers says that as the number of trials grows, the observed relative frequency of an event approaches its true probability.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'bpr-ent-7b',
    question: 'On the AP Statistics exam, when solving a probability problem you should:',
    options: [
      'Only write the final numerical answer',
      'Skip showing formulas if the answer is obvious',
      'Show probability rules, formulas, and calculations, not just the final answer',
      'Only define your events without calculating',
    ],
    correctIndex: 2,
    explanation: 'The AP exam requires you to show your work: define events, state rules/formulas used, and show calculations to earn full credit.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Basic Probability' },
    { partNumber: 2, partTitle: 'Addition Rule' },
    { partNumber: 3, partTitle: 'Multiplication Rule' },
    { partNumber: 4, partTitle: 'Conditional Probability' },
    { partNumber: 5, partTitle: 'Independence' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
