/**
 * Entrance Quiz — Discrete Random Variables (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Random Variables
  {
    id: 'drv-ent-1a',
    question: 'A random variable assigns:',
    options: [
      'A category to each outcome',
      'A numerical value to each outcome of a random process',
      'A letter grade to each trial',
      'A color to each event',
    ],
    correctIndex: 1,
    explanation: 'A random variable is a function that assigns a numerical value to each outcome in the sample space of a random process.',
    partNumber: 1,
    partTitle: 'Random Variables',
  },
  {
    id: 'drv-ent-1b',
    question: 'Which statement correctly distinguishes discrete from continuous random variables?',
    options: [
      'Discrete variables take any value in an interval; continuous take countable values',
      'Discrete variables take countable values; continuous take any value in an interval',
      'Both types take only integer values',
      'There is no difference between discrete and continuous random variables',
    ],
    correctIndex: 1,
    explanation: 'Discrete random variables take a countable number of values (e.g., 0, 1, 2, …), while continuous random variables can take any value within an interval.',
    partNumber: 1,
    partTitle: 'Random Variables',
  },

  // Part 2: Probability Distributions
  {
    id: 'drv-ent-2a',
    question: 'A probability distribution for a discrete random variable must satisfy which condition?',
    options: [
      'All probabilities are negative',
      'Probabilities sum to 0',
      'All probabilities are between 0 and 1, and they sum to 1',
      'At least one probability must be greater than 1',
    ],
    correctIndex: 2,
    explanation: 'A valid probability distribution requires every probability to be between 0 and 1 inclusive, and the sum of all probabilities must equal 1.',
    partNumber: 2,
    partTitle: 'Probability Distributions',
  },
  {
    id: 'drv-ent-2b',
    question: 'A random variable X has P(X=1) = 0.2, P(X=2) = 0.5, P(X=3) = 0.1, P(X=4) = 0.2. Is this a valid probability distribution?',
    options: [
      'No, because the probabilities don\'t sum to 1',
      'Yes, all probabilities are between 0 and 1 and they sum to 1.0',
      'No, because there are too many values',
      'No, because 0.1 is too small',
    ],
    correctIndex: 1,
    explanation: '0.2 + 0.5 + 0.1 + 0.2 = 1.0, and all values are between 0 and 1, so this is a valid probability distribution.',
    partNumber: 2,
    partTitle: 'Probability Distributions',
  },

  // Part 3: Expected Value
  {
    id: 'drv-ent-3a',
    question: 'The expected value E(X) of a discrete random variable is calculated as:',
    options: [
      'The largest possible value of X',
      'The median of all possible values',
      'Σ[xᵢ · P(xᵢ)] — the sum of each value times its probability',
      'The most frequently occurring value',
    ],
    correctIndex: 2,
    explanation: 'E(X) = Σ[xᵢ · P(xᵢ)]. It is the weighted average of all possible values, using probabilities as weights — the long-run average.',
    partNumber: 3,
    partTitle: 'Expected Value',
  },
  {
    id: 'drv-ent-3b',
    question: 'The expected value of a random variable:',
    options: [
      'Must be one of the possible outcomes',
      'Is always a whole number',
      'Does not have to be a possible outcome of the random variable',
      'Is always the largest possible value',
    ],
    correctIndex: 2,
    explanation: 'E(X) is a weighted average and may not equal any of the actual possible values. For example, E(X) for a fair die is 3.5, which is not a possible roll.',
    partNumber: 3,
    partTitle: 'Expected Value',
  },

  // Part 4: Variance of Random Variables
  {
    id: 'drv-ent-4a',
    question: 'The variance of a discrete random variable X is:',
    options: [
      'Σ[xᵢ · P(xᵢ)]',
      'Σ[(xᵢ − μ) · P(xᵢ)]',
      'Σ[(xᵢ − μ)$ {}^{2}$ · P(xᵢ)]',
      '√Σ[xᵢ · P(xᵢ)]',
    ],
    correctIndex: 2,
    explanation: 'Var(X) = Σ[(xᵢ − μ)$ {}^{2}$ · P(xᵢ)], which gives the average squared deviation from the mean. SD(X) = $\\sqrt{Var}(X)$.',
    partNumber: 4,
    partTitle: 'Variance of Random Variables',
  },
  {
    id: 'drv-ent-4b',
    question: 'Variance measures:',
    options: [
      'The center of the distribution',
      'The average squared deviation from the expected value',
      'The total probability of all outcomes',
      'The number of possible outcomes',
    ],
    correctIndex: 1,
    explanation: 'Variance quantifies spread by computing the expected (average) squared deviation from the mean μ = E(X).',
    partNumber: 4,
    partTitle: 'Variance of Random Variables',
  },

  // Part 5: Linear Combinations
  {
    id: 'drv-ent-5a',
    question: 'If Y = aX + b, then E(Y) equals:',
    options: [
      'a · E(X)',
      'E(X) + b',
      'a · E(X) + b',
      '$a^{2}$ · E(X) + b',
    ],
    correctIndex: 2,
    explanation: 'For a linear transformation Y = aX + b, the expected value transforms as E(Y) = a · E(X) + b.',
    partNumber: 5,
    partTitle: 'Linear Combinations',
  },
  {
    id: 'drv-ent-5b',
    question: 'If Y = aX + b, then Var(Y) equals:',
    options: [
      'a · Var(X) + b',
      '$a^{2}$ · Var(X) + $b^{2}$',
      '$a^{2}$ · Var(X)',
      'Var(X) + b',
    ],
    correctIndex: 2,
    explanation: 'Var(aX + b) = $a^{2}$ · Var(X). Adding a constant b shifts the distribution but does not change its spread, so b has no effect on variance.',
    partNumber: 5,
    partTitle: 'Linear Combinations',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'drv-ent-6a',
    question: 'A game pays $10 with probability 0.3 and $0 with probability 0.7. What is the expected value of winnings?',
    options: ['$7.00', '$10.00', '$3.00', '$0.30'],
    correctIndex: 2,
    explanation: 'E(winnings) = 10(0.3) + 0(0.7) = 3 + 0 = $3.00.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'drv-ent-6b',
    question: 'For independent random variables X and Y, Var(X − Y) equals:',
    options: [
      'Var(X) − Var(Y)',
      'Var(X) + Var(Y)',
      'Var(X) × Var(Y)',
      '|Var(X) − Var(Y)|',
    ],
    correctIndex: 1,
    explanation: 'For independent variables, Var(X ± Y) = Var(X) + Var(Y). Variances always add, whether combining by addition or subtraction.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review & Applications
  {
    id: 'drv-ent-7a',
    question: 'Expected value is the theoretical mean. With many trials, the sample mean:',
    options: [
      'Moves farther from E(X)',
      'Stays exactly equal to E(X) after each trial',
      'Approaches E(X) as the number of trials increases',
      'Has no relationship to E(X)',
    ],
    correctIndex: 2,
    explanation: 'By the law of large numbers, as the number of trials increases, the sample mean converges to the expected value E(X).',
    partNumber: 7,
    partTitle: 'AP Review & Applications',
  },
  {
    id: 'drv-ent-7b',
    question: 'On the AP exam, how should you interpret expected value in context?',
    options: [
      '"The exact outcome every time"',
      '"On average, we expect…" followed by the value in context',
      '"The maximum possible value"',
      '"The probability of success"',
    ],
    correctIndex: 1,
    explanation: 'Expected value should be interpreted as a long-run average in context: "On average, we expect [value] [units] per [trial]."',
    partNumber: 7,
    partTitle: 'AP Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Random Variables' },
    { partNumber: 2, partTitle: 'Probability Distributions' },
    { partNumber: 3, partTitle: 'Expected Value' },
    { partNumber: 4, partTitle: 'Variance of Random Variables' },
    { partNumber: 5, partTitle: 'Linear Combinations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
