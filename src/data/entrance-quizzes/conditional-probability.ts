/**
 * Entrance Quiz — Conditional Probability (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Conditional Probability Definition
  {
    id: 'cp-ent-1a',
    question: 'P(A|B) is read as "the probability of A given B" and equals:',
    options: [
      'P(A) + P(B)',
      'P(A and B) / P(B)',
      'P(A) × P(B)',
      'P(A or B) / P(A)',
    ],
    correctIndex: 1,
    explanation: 'By definition, P(A|B) = P(A and B) / P(B), where P(B) ≠ 0.',
    partNumber: 1,
    partTitle: 'Conditional Probability Definition',
  },
  {
    id: 'cp-ent-1b',
    question: 'Conditional probability tells us:',
    options: [
      'The probability that neither event occurs',
      'How knowing one event occurred changes the probability of another',
      'The probability that both events fail to occur',
      'The total number of outcomes in the sample space',
    ],
    correctIndex: 1,
    explanation: 'Conditional probability quantifies how the probability of one event is updated when we know another event has occurred.',
    partNumber: 1,
    partTitle: 'Conditional Probability Definition',
  },

  // Part 2: Two-Way Tables
  {
    id: 'cp-ent-2a',
    question: 'In a two-way table, which types of probabilities can be calculated?',
    options: [
      'Only marginal probabilities',
      'Only joint probabilities',
      'Joint, marginal, and conditional probabilities',
      'Only conditional probabilities',
    ],
    correctIndex: 2,
    explanation: 'Two-way tables organize data by two categorical variables and allow you to compute joint (cell), marginal (row/column totals), and conditional probabilities.',
    partNumber: 2,
    partTitle: 'Two-Way Tables',
  },
  {
    id: 'cp-ent-2b',
    question: 'To find a conditional probability from a two-way table, you should:',
    options: [
      'Divide the grand total by the row total',
      'Add all cells in the table',
      'Restrict to the row or column of the given condition, then find the proportion',
      'Multiply the row total by the column total',
    ],
    correctIndex: 2,
    explanation: 'For P(A|B), restrict to the row or column where B occurs, then divide the joint frequency by the total for that condition.',
    partNumber: 2,
    partTitle: 'Two-Way Tables',
  },

  // Part 3: Tree Diagrams
  {
    id: 'cp-ent-3a',
    question: 'In a tree diagram, how do you find the joint probability of a sequence of events?',
    options: [
      'Add the probabilities along the branches',
      'Multiply the probabilities along the branches',
      'Subtract the probabilities along the branches',
      'Take the average of the branch probabilities',
    ],
    correctIndex: 1,
    explanation: 'In a tree diagram, you multiply probabilities along a path of branches to find the joint probability of those sequential events.',
    partNumber: 3,
    partTitle: 'Tree Diagrams',
  },
  {
    id: 'cp-ent-3b',
    question: 'At any node in a tree diagram, the probabilities of all branches must:',
    options: [
      'Be equal to each other',
      'Each be greater than 0.5',
      'Sum to 1',
      'Multiply to 1',
    ],
    correctIndex: 2,
    explanation: 'The branches from any node represent all possible outcomes at that stage, so their probabilities must sum to 1.',
    partNumber: 3,
    partTitle: 'Tree Diagrams',
  },

  // Part 4: Bayes' Theorem
  {
    id: 'cp-ent-4a',
    question: 'Bayes\' theorem states that P(A|B) equals:',
    options: [
      'P(A) + P(B|A)',
      'P(B|A) · P(A) / P(B)',
      'P(A) × P(B)',
      'P(A and B) + P(A or B)',
    ],
    correctIndex: 1,
    explanation: 'Bayes\' theorem reverses the conditioning: P(A|B) = P(B|A) · P(A) / P(B).',
    partNumber: 4,
    partTitle: 'Bayes\' Theorem',
  },
  {
    id: 'cp-ent-4b',
    question: 'The law of total probability states that P(B) equals:',
    options: [
      'P(B|A) + P(B|$A^{c}$)',
      'P(B|A) · P(A) + P(B|$A^{c}$) · $P(A^{c})$',
      'P(A) · $P(A^{c})$',
      'P(B|A) × P(B|$A^{c}$)',
    ],
    correctIndex: 1,
    explanation: 'The law of total probability: P(B) = P(B|A)·P(A) + P(B|$A^{c}$)·P(Aᶜ), partitioning by whether A occurs or not.',
    partNumber: 4,
    partTitle: 'Bayes\' Theorem',
  },

  // Part 5: Applications
  {
    id: 'cp-ent-5a',
    question: 'In medical testing, sensitivity refers to:',
    options: [
      'P(disease | positive test)',
      'P(positive test | disease)',
      'P(negative test | no disease)',
      'P(no disease | negative test)',
    ],
    correctIndex: 1,
    explanation: 'Sensitivity is the probability of testing positive given that the person actually has the disease: P(positive | disease).',
    partNumber: 5,
    partTitle: 'Applications',
  },
  {
    id: 'cp-ent-5b',
    question: 'When a rare disease is screened in a large population, the false positive rate tends to be high. This is known as:',
    options: [
      'Simpson\'s paradox',
      'The base rate fallacy',
      'The central limit theorem',
      'Regression to the mean',
    ],
    correctIndex: 1,
    explanation: 'The base rate fallacy occurs because when prevalence is very low, even a highly specific test produces many false positives relative to true positives.',
    partNumber: 5,
    partTitle: 'Applications',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'cp-ent-6a',
    question: 'A two-way table shows 30 athletes: 20 pass a fitness test and 10 fail. What is P(pass | athlete)?',
    options: ['10/30', '20/30', '30/20', '20/10'],
    correctIndex: 1,
    explanation: 'Restrict to athletes (30 total). Of those, 20 pass. P(pass | athlete) = 20/30 = 2/3.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'cp-ent-6b',
    question: 'P(rain) = 0.4, P(umbrella | rain) = 0.9, P(umbrella | no rain) = 0.2. What is P(umbrella)?',
    options: ['0.36', '0.48', '0.56', '0.90'],
    correctIndex: 1,
    explanation: 'P(umbrella) = P(umbrella|rain)·P(rain) + P(umbrella|no rain)·P(no rain) = 0.9(0.4) + 0.2(0.6) = 0.36 + 0.12 = 0.48.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review & Applications
  {
    id: 'cp-ent-7a',
    question: 'On the AP Statistics exam, when solving conditional probability problems you should:',
    options: [
      'Only state the final answer',
      'Clearly label events and show conditional probability formulas with calculations',
      'Draw a Venn diagram without any calculations',
      'Use only words, no mathematical notation',
    ],
    correctIndex: 1,
    explanation: 'For full credit on the AP exam, clearly define events, state the conditional probability formula, and show all steps of your calculation.',
    partNumber: 7,
    partTitle: 'AP Review & Applications',
  },
  {
    id: 'cp-ent-7b',
    question: 'Which of the following is a valid way to check if events A and B are independent?',
    options: [
      'Check if P(A and B) = 0',
      'Check if P(A|B) = P(A)',
      'Check if P(A) + P(B) = 1',
      'Check if P(A or B) = 0',
    ],
    correctIndex: 1,
    explanation: 'A and B are independent if and only if P(A|B) = P(A), meaning knowing B doesn\'t change the probability of A.',
    partNumber: 7,
    partTitle: 'AP Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Conditional Probability Definition' },
    { partNumber: 2, partTitle: 'Two-Way Tables' },
    { partNumber: 3, partTitle: 'Tree Diagrams' },
    { partNumber: 4, partTitle: 'Bayes\' Theorem' },
    { partNumber: 5, partTitle: 'Applications' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
