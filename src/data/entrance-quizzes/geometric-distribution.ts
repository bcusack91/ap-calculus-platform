/**
 * Entrance Quiz — Geometric Distribution (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Geometric Setting
  {
    id: 'geo-ent-1a',
    question: 'Which of the following best describes the geometric setting?',
    options: [
      'A fixed number of trials with a count of successes',
      'Independent trials with constant probability p until the first success',
      'Sampling without replacement from a finite population',
      'Counting the number of successes in n dependent trials'
    ],
    correctIndex: 1,
    explanation: 'The geometric setting involves independent trials, each with the same probability of success p, performed until the first success occurs.',
    partNumber: 1,
    partTitle: 'Geometric Setting'
  },
  {
    id: 'geo-ent-1b',
    question: 'A geometric random variable X counts which of the following?',
    options: [
      'The number of successes in n trials',
      'The number of failures in n trials',
      'The number of trials needed to get the first success',
      'The total number of outcomes in an experiment'
    ],
    correctIndex: 2,
    explanation: 'The geometric random variable counts the number of trials needed to get the first success.',
    partNumber: 1,
    partTitle: 'Geometric Setting'
  },

  // Part 2: Geometric Probability
  {
    id: 'geo-ent-2a',
    question: 'What is the formula for the geometric probability P(X = k)?',
    options: [
      'p^k · (1−p)',
      '(1−p)^(k−1) · p',
      'C(n,k) · p^k · (1−p)^(n−k)',
      'p · (1−p)^k'
    ],
    correctIndex: 1,
    explanation: 'P(X = k) = (1−p)^(k−1) · p, where k = 1, 2, 3, ... This represents k−1 failures followed by a success.',
    partNumber: 2,
    partTitle: 'Geometric Probability'
  },
  {
    id: 'geo-ent-2b',
    question: 'What does P(X > k) = (1−p)^k represent in a geometric distribution?',
    options: [
      'The probability of exactly k successes',
      'The probability of at least k successes',
      'The probability that the first k trials are all failures',
      'The probability that success occurs on trial k'
    ],
    correctIndex: 2,
    explanation: 'P(X > k) = (1−p)^k gives the probability that the first k trials are all failures, meaning the first success has not yet occurred.',
    partNumber: 2,
    partTitle: 'Geometric Probability'
  },

  // Part 3: Expected Value
  {
    id: 'geo-ent-3a',
    question: 'What is the expected value E(X) of a geometric random variable with probability of success p?',
    options: [
      'p',
      'np',
      '1/p',
      '1/(1−p)'
    ],
    correctIndex: 2,
    explanation: 'E(X) = 1/p; on average, you wait 1/p trials for the first success.',
    partNumber: 3,
    partTitle: 'Expected Value'
  },
  {
    id: 'geo-ent-3b',
    question: 'If the probability of success on each trial is p = 0.2, what is the expected number of trials until the first success?',
    options: [
      '2',
      '0.2',
      '4',
      '5'
    ],
    correctIndex: 3,
    explanation: 'E(X) = 1/p = 1/0.2 = 5. On average, you expect to need 5 trials for the first success.',
    partNumber: 3,
    partTitle: 'Expected Value'
  },

  // Part 4: Applications to Waiting Times
  {
    id: 'geo-ent-4a',
    question: '"How many free throws until a player makes the first one?" is an example of which type of problem?',
    options: [
      'Binomial counting problem',
      'Normal distribution problem',
      'Geometric waiting time problem',
      'Poisson distribution problem'
    ],
    correctIndex: 2,
    explanation: '"How many attempts until the first success?" is a geometric waiting time problem — we count trials until the first success.',
    partNumber: 4,
    partTitle: 'Applications to Waiting Times'
  },
  {
    id: 'geo-ent-4b',
    question: 'Which of the following situations is best modeled by a geometric distribution?',
    options: [
      'The number of heads in 20 coin flips',
      'The number of flips until the first head appears',
      'The proportion of defective items in a batch of 100',
      'The average height of students in a class'
    ],
    correctIndex: 1,
    explanation: 'Geometric distributions model situations like the first defective item, first correct answer, or first heads — waiting for the first success.',
    partNumber: 4,
    partTitle: 'Applications to Waiting Times'
  },

  // Part 5: Comparisons with Binomial
  {
    id: 'geo-ent-5a',
    question: 'Which statement correctly distinguishes binomial from geometric distributions?',
    options: [
      'Binomial counts trials until first failure; geometric counts successes',
      'Binomial has a fixed number of trials and counts successes; geometric has variable trials and waits for the first success',
      'Both distributions have a fixed number of trials',
      'Geometric distributions require dependent trials'
    ],
    correctIndex: 1,
    explanation: 'Binomial: fixed number of trials, count successes. Geometric: variable number of trials, wait for first success.',
    partNumber: 5,
    partTitle: 'Comparisons with Binomial'
  },
  {
    id: 'geo-ent-5b',
    question: 'What is a key difference between the possible values of binomial and geometric random variables?',
    options: [
      'Both have the same range of values',
      'Binomial values range from 0 to n; geometric values have no upper limit',
      'Geometric values range from 0 to n; binomial has no upper limit',
      'Neither distribution has an upper limit'
    ],
    correctIndex: 1,
    explanation: 'A binomial random variable has a maximum value of n (the number of trials); a geometric random variable has no upper limit since the first success could take any number of trials.',
    partNumber: 5,
    partTitle: 'Comparisons with Binomial'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'geo-ent-6a',
    question: 'If p = 0.3, what is P(first success on the 4th attempt)?',
    options: [
      '0.0081',
      '0.1029',
      '0.2401',
      '0.3000'
    ],
    correctIndex: 1,
    explanation: 'P(X = 4) = (1−0.3)³ × 0.3 = (0.7)³ × 0.3 = 0.343 × 0.3 = 0.1029.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'geo-ent-6b',
    question: 'What is the shape of a geometric distribution?',
    options: [
      'Symmetric and bell-shaped',
      'Uniform',
      'Always right-skewed',
      'Always left-skewed'
    ],
    correctIndex: 2,
    explanation: 'The geometric distribution is always right-skewed because early successes (small values of X) are most likely.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: AP Review & Applications
  {
    id: 'geo-ent-7a',
    question: 'Which of the following is NOT a condition for the geometric setting?',
    options: [
      'Each trial has a binary outcome (success or failure)',
      'Trials are independent',
      'There is a fixed number of trials',
      'The probability of success p is the same for each trial'
    ],
    correctIndex: 2,
    explanation: 'The geometric setting does NOT have a fixed number of trials. The conditions are: binary outcome, independent trials, constant p, and counting until the first success.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'geo-ent-7b',
    question: 'On the AP Statistics exam, when should you use a geometric model instead of a binomial model?',
    options: [
      'When the sample size is large',
      'When trials are dependent',
      'When you are counting the number of trials until the first success',
      'When the probability changes from trial to trial'
    ],
    correctIndex: 2,
    explanation: 'On the AP exam, use geometric when counting trials until the first success, and clearly state which distribution applies and why.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Geometric Setting' },
    { partNumber: 2, partTitle: 'Geometric Probability' },
    { partNumber: 3, partTitle: 'Expected Value' },
    { partNumber: 4, partTitle: 'Applications to Waiting Times' },
    { partNumber: 5, partTitle: 'Comparisons with Binomial' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
