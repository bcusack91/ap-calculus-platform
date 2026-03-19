/**
 * Entrance Quiz — Confidence Intervals for Proportions (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Estimating Population Proportions
  {
    id: 'cip-ent-1a',
    question: 'The point estimate p̂ = x/n estimates:',
    options: [
      'The sample size',
      'The population mean μ',
      'The unknown population proportion p',
      'The standard deviation σ'
    ],
    correctIndex: 2,
    explanation: 'A point estimate p̂ = x/n (successes divided by sample size) estimates the unknown population proportion p.',
    partNumber: 1,
    partTitle: 'Estimating Population Proportions'
  },
  {
    id: 'cip-ent-1b',
    question: 'Why is p̂ called an "unbiased estimator" of p?',
    options: [
      'It always equals p exactly',
      'The center of the sampling distribution of p̂ is p',
      'It never varies from sample to sample',
      'It has the smallest possible standard error'
    ],
    correctIndex: 1,
    explanation: 'p̂ is an unbiased estimator of p because the center of the sampling distribution of p̂ is p.',
    partNumber: 1,
    partTitle: 'Estimating Population Proportions'
  },

  // Part 2: Confidence Level & Margin of Error
  {
    id: 'cip-ent-2a',
    question: 'A 95% confidence level means:',
    options: [
      'There is a 95% probability that p is in this specific interval',
      '95% of the data falls within the interval',
      '95% of intervals from repeated sampling would capture the true parameter',
      'The sample proportion is within 95% of the true value'
    ],
    correctIndex: 2,
    explanation: 'Confidence level (e.g., 95%): the percentage of intervals from repeated sampling that would capture the true parameter.',
    partNumber: 2,
    partTitle: 'Confidence Level & Margin of Error'
  },
  {
    id: 'cip-ent-2b',
    question: 'The margin of error for a proportion depends on:',
    options: [
      'Only the sample size',
      'Only the confidence level',
      'The confidence level, p̂, and n',
      'Only the population size'
    ],
    correctIndex: 2,
    explanation: 'Margin of error = z* × √[p̂(1−p̂)/n]; it depends on the confidence level (through z*), p̂, and n.',
    partNumber: 2,
    partTitle: 'Confidence Level & Margin of Error'
  },

  // Part 3: One-Sample z-Interval
  {
    id: 'cip-ent-3a',
    question: 'The formula for a one-proportion z-interval is:',
    options: [
      'x̄ ± z*(σ/√n)',
      'p̂ ± z*√[p̂(1−p̂)/n]',
      'p ± z*√[p(1−p)/n]',
      'p̂ ± t*(s/√n)'
    ],
    correctIndex: 1,
    explanation: 'One-proportion z-interval: p̂ ± z*√[p̂(1−p̂)/n]. Conditions: random sample, 10% condition, np̂ ≥ 10 and n(1−p̂) ≥ 10.',
    partNumber: 3,
    partTitle: 'One-Sample z-Interval'
  },
  {
    id: 'cip-ent-3b',
    question: 'Which is a correct interpretation of a 95% confidence interval (0.42, 0.58) for a population proportion?',
    options: [
      'There is a 95% probability that p is between 0.42 and 0.58',
      '95% of the sample data is between 0.42 and 0.58',
      'We are 95% confident that the true population proportion is between 0.42 and 0.58',
      'The sample proportion is 95% accurate'
    ],
    correctIndex: 2,
    explanation: '"We are 95% confident that the true proportion is between 0.42 and 0.58" is the correct interpretation.',
    partNumber: 3,
    partTitle: 'One-Sample z-Interval'
  },

  // Part 4: Two-Sample z-Interval
  {
    id: 'cip-ent-4a',
    question: 'The two-proportion z-interval estimates:',
    options: [
      'The common proportion of two groups',
      'The difference p₁ − p₂ between two population proportions',
      'The ratio p₁/p₂',
      'The sum p₁ + p₂'
    ],
    correctIndex: 1,
    explanation: 'The two-proportion z-interval: (p̂₁ − p̂₂) ± z*√[p̂₁(1−p̂₁)/n₁ + p̂₂(1−p̂₂)/n₂] estimates the difference p₁ − p₂.',
    partNumber: 4,
    partTitle: 'Two-Sample z-Interval'
  },
  {
    id: 'cip-ent-4b',
    question: 'If a 95% confidence interval for (p₁ − p₂) is (−0.05, 0.12), what can you conclude?',
    options: [
      'p₁ is definitely greater than p₂',
      'p₂ is definitely greater than p₁',
      'There is no convincing evidence of a difference because the interval contains 0',
      'The confidence level is too low to draw conclusions'
    ],
    correctIndex: 2,
    explanation: 'If the CI for (p₁ − p₂) contains 0, there is no convincing evidence of a difference between the two proportions.',
    partNumber: 4,
    partTitle: 'Two-Sample z-Interval'
  },

  // Part 5: Sample Size Calculations
  {
    id: 'cip-ent-5a',
    question: 'To determine the sample size needed for a desired margin of error ME, you use n = (z*/ME)² · p*(1−p*). What value of p* gives the largest (most conservative) sample size?',
    options: [
      'p* = 0',
      'p* = 0.1',
      'p* = 0.5',
      'p* = 1'
    ],
    correctIndex: 2,
    explanation: 'Using p* = 0.5 maximizes p*(1−p*) = 0.25, giving the worst case (largest) required sample size.',
    partNumber: 5,
    partTitle: 'Sample Size Calculations'
  },
  {
    id: 'cip-ent-5b',
    question: 'To halve the margin of error of a confidence interval for a proportion, you need to:',
    options: [
      'Double the sample size',
      'Triple the sample size',
      'Quadruple the sample size',
      'Use a higher confidence level'
    ],
    correctIndex: 2,
    explanation: 'Since ME ∝ 1/√n, to halve the margin of error you need to quadruple the sample size (√4 = 2).',
    partNumber: 5,
    partTitle: 'Sample Size Calculations'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'cip-ent-6a',
    question: 'A survey of 400 people finds 220 in favor of a proposal. What is the approximate 95% confidence interval for the true proportion?',
    options: [
      '(0.45, 0.65)',
      '(0.501, 0.599)',
      '(0.52, 0.58)',
      '(0.40, 0.70)'
    ],
    correctIndex: 1,
    explanation: 'p̂ = 220/400 = 0.55. 95% CI: 0.55 ± 1.96√(0.55 × 0.45/400) ≈ 0.55 ± 0.049 ≈ (0.501, 0.599).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'cip-ent-6b',
    question: 'A student says: "There is a 95% probability that p is in this interval." Why is this interpretation incorrect?',
    options: [
      'It should say 95% chance, not probability',
      'The probability should be higher',
      'The interval either contains p or it doesn\'t — 95% refers to the method, not this specific interval',
      'The statement is actually correct'
    ],
    correctIndex: 2,
    explanation: '"There is a 95% probability that p is in this interval" is wrong. The interval either contains p or it doesn\'t. The 95% refers to the long-run success rate of the method.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: AP Review & Applications
  {
    id: 'cip-ent-7a',
    question: 'On the AP exam, what four steps should you follow when constructing a confidence interval?',
    options: [
      'Guess, compute, check, report',
      'State conditions, show formula, calculate, and interpret in context',
      'Choose a test, find the p-value, reject or fail to reject, conclude',
      'Define variables, draw a graph, find the mean, report the standard deviation'
    ],
    correctIndex: 1,
    explanation: 'On the AP exam, always: state conditions, show the formula, calculate the interval, and interpret in context.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'cip-ent-7b',
    question: 'What is the effect of increasing the confidence level on the width of a confidence interval?',
    options: [
      'The interval gets narrower',
      'The interval gets wider',
      'The interval width stays the same',
      'It depends on the sample proportion'
    ],
    correctIndex: 1,
    explanation: 'Increasing the confidence level widens the interval (higher z*); increasing the sample size narrows it.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Estimating Population Proportions' },
    { partNumber: 2, partTitle: 'Confidence Level & Margin of Error' },
    { partNumber: 3, partTitle: 'One-Sample z-Interval' },
    { partNumber: 4, partTitle: 'Two-Sample z-Interval' },
    { partNumber: 5, partTitle: 'Sample Size Calculations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
