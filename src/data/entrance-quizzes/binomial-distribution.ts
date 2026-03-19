/**
 * Entrance Quiz — Binomial Distribution (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Binomial Setting
  {
    id: 'bin-ent-1a',
    question: 'The acronym BINS for a binomial setting stands for:',
    options: [
      'Balanced, Identical, Normal, Standard',
      'Binary outcomes, Independent trials, Number of trials is fixed, Same probability of success',
      'Biased, Independent, Numerical, Symmetrical',
      'Binary, Increasing, Normal, Sequential',
    ],
    correctIndex: 1,
    explanation: 'BINS: Binary outcomes (success/failure), Independent trials, fixed Number of trials (n), and Same probability of success (p) on each trial.',
    partNumber: 1,
    partTitle: 'Binomial Setting',
  },
  {
    id: 'bin-ent-1b',
    question: 'Flipping a fair coin 10 times and counting heads is binomial with:',
    options: [
      'n = 10, p = 1',
      'n = 5, p = 0.5',
      'n = 10, p = 0.5',
      'n = 10, p = 0.1',
    ],
    correctIndex: 2,
    explanation: 'There are n = 10 fixed, independent trials (flips), each with binary outcome (heads/tails) and the same probability p = 0.5 of heads.',
    partNumber: 1,
    partTitle: 'Binomial Setting',
  },

  // Part 2: Binomial Probability Formula
  {
    id: 'bin-ent-2a',
    question: 'The binomial probability formula P(X = k) is:',
    options: [
      'n! / k!',
      'pᵏ · (1−p)ⁿ',
      'C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ',
      'n · p · (1−p)',
    ],
    correctIndex: 2,
    explanation: 'P(X = k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ, where C(n,k) counts the ways to choose which k trials are successes.',
    partNumber: 2,
    partTitle: 'Binomial Probability Formula',
  },
  {
    id: 'bin-ent-2b',
    question: 'C(n, k) = n! / [k!(n−k)!] is also known as:',
    options: [
      'n factorial',
      'n permute k',
      '"n choose k"',
      'The binomial mean',
    ],
    correctIndex: 2,
    explanation: 'C(n,k), read as "n choose k," counts the number of ways to select k items from n without regard to order.',
    partNumber: 2,
    partTitle: 'Binomial Probability Formula',
  },

  // Part 3: Binomial Mean & Variance
  {
    id: 'bin-ent-3a',
    question: 'For a binomial distribution, the mean μ and standard deviation σ are:',
    options: [
      'μ = n/p, σ = √(np)',
      'μ = np, σ = √[np(1−p)]',
      'μ = p/n, σ = np(1−p)',
      'μ = n(1−p), σ = np',
    ],
    correctIndex: 1,
    explanation: 'For X ~ Bin(n, p): μ = np and σ = √[np(1−p)].',
    partNumber: 3,
    partTitle: 'Binomial Mean & Variance',
  },
  {
    id: 'bin-ent-3b',
    question: 'If X ~ Bin(100, 0.3), what are the mean and standard deviation?',
    options: [
      'Mean = 30, SD ≈ 4.58',
      'Mean = 70, SD ≈ 4.58',
      'Mean = 30, SD = 21',
      'Mean = 0.3, SD = 100',
    ],
    correctIndex: 0,
    explanation: 'μ = np = 100(0.3) = 30. σ = √[np(1−p)] = √[100(0.3)(0.7)] = √21 ≈ 4.58.',
    partNumber: 3,
    partTitle: 'Binomial Mean & Variance',
  },

  // Part 4: Using Tables & Technology
  {
    id: 'bin-ent-4a',
    question: 'On a calculator, binompdf(n, p, k) gives:',
    options: [
      'P(X ≤ k)',
      'P(X ≥ k)',
      'P(X = k) — the probability of exactly k successes',
      'The mean of the binomial distribution',
    ],
    correctIndex: 2,
    explanation: 'binompdf(n, p, k) calculates the probability of exactly k successes: P(X = k).',
    partNumber: 4,
    partTitle: 'Using Tables & Technology',
  },
  {
    id: 'bin-ent-4b',
    question: 'To find P(X ≥ k) using binomcdf, you calculate:',
    options: [
      'binomcdf(n, p, k)',
      '1 − binomcdf(n, p, k)',
      '1 − binomcdf(n, p, k−1)',
      'binomcdf(n, p, k) − 1',
    ],
    correctIndex: 2,
    explanation: 'P(X ≥ k) = 1 − P(X ≤ k−1) = 1 − binomcdf(n, p, k−1).',
    partNumber: 4,
    partTitle: 'Using Tables & Technology',
  },

  // Part 5: Applications
  {
    id: 'bin-ent-5a',
    question: 'A factory has a 5% defect rate. To find the probability that exactly 2 of 20 items are defective, you should use:',
    options: [
      'Normal distribution with μ = 1 and σ = 0.05',
      'Geometric distribution with p = 0.05',
      'Binomial distribution with n = 20 and p = 0.05',
      'Poisson distribution with λ = 20',
    ],
    correctIndex: 2,
    explanation: 'This is a binomial setting: fixed n = 20, independent trials, binary outcome (defective/not), same p = 0.05 for each item.',
    partNumber: 5,
    partTitle: 'Applications',
  },
  {
    id: 'bin-ent-5b',
    question: 'The binomial distribution can be approximated by a normal distribution when:',
    options: [
      'n > 30 only',
      'np ≥ 10 and n(1−p) ≥ 10',
      'p = 0.5 only',
      'n < 10',
    ],
    correctIndex: 1,
    explanation: 'The normal approximation to the binomial is reasonable when both np ≥ 10 and n(1−p) ≥ 10, ensuring the distribution is roughly symmetric.',
    partNumber: 5,
    partTitle: 'Applications',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bin-ent-6a',
    question: 'A basketball player shoots 10 free throws with P(make) = 0.8. P(exactly 8 made) is approximately:',
    options: [
      '0.107',
      '0.201',
      '0.302',
      '0.410',
    ],
    correctIndex: 2,
    explanation: 'P(X = 8) = C(10,8)(0.8)⁸(0.2)² = 45 × 0.16777 × 0.04 ≈ 0.302.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bin-ent-6b',
    question: 'If X ~ Bin(20, 0.5), which value of X is most likely?',
    options: [
      'X = 0',
      'X = 5',
      'X = 10',
      'X = 20',
    ],
    correctIndex: 2,
    explanation: 'For a symmetric binomial distribution (p = 0.5), the most likely value is the mean: μ = np = 20(0.5) = 10.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review & Applications
  {
    id: 'bin-ent-7a',
    question: 'Before applying the binomial model on the AP exam, you must:',
    options: [
      'Verify the BINS conditions and state them explicitly',
      'Only calculate the mean',
      'Assume independence without checking',
      'Use a normal distribution instead',
    ],
    correctIndex: 0,
    explanation: 'The AP exam requires you to verify and state all four BINS conditions before using the binomial distribution.',
    partNumber: 7,
    partTitle: 'AP Review & Applications',
  },
  {
    id: 'bin-ent-7b',
    question: 'The binomial distribution is one of the most commonly tested topics on the AP Statistics exam because:',
    options: [
      'It only applies to coin flips',
      'It is the simplest distribution with no formulas',
      'It models many real-world scenarios with fixed trials, binary outcomes, and constant probability',
      'It is identical to the normal distribution',
    ],
    correctIndex: 2,
    explanation: 'The binomial distribution appears frequently because its conditions (fixed n, binary outcomes, independence, constant p) apply to many practical situations tested on the AP exam.',
    partNumber: 7,
    partTitle: 'AP Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Binomial Setting' },
    { partNumber: 2, partTitle: 'Binomial Probability Formula' },
    { partNumber: 3, partTitle: 'Binomial Mean & Variance' },
    { partNumber: 4, partTitle: 'Using Tables & Technology' },
    { partNumber: 5, partTitle: 'Applications' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
