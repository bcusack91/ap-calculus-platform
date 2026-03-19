/**
 * Entrance Quiz — Continuous Random Variables (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Probability Density Functions
  {
    id: 'crv-ent-1a',
    question: 'How is probability determined for a continuous random variable using a probability density function (PDF)?',
    options: [
      'By reading the height of the curve at a single point',
      'By finding the area under the curve over an interval',
      'By summing the probabilities at each integer value',
      'By multiplying the height by the number of outcomes'
    ],
    correctIndex: 1,
    explanation: 'A PDF defines probabilities for continuous random variables; the area under the curve in an interval equals the probability for that interval.',
    partNumber: 1,
    partTitle: 'Probability Density Functions'
  },
  {
    id: 'crv-ent-1b',
    question: 'For a continuous random variable X, what is P(X = 3.7)?',
    options: [
      'It depends on the distribution',
      'It equals the height of the density curve at 3.7',
      '0',
      '1/n where n is the sample size'
    ],
    correctIndex: 2,
    explanation: 'P(X = exactly one value) = 0 for continuous variables; probability is always defined over an interval, not at a single point.',
    partNumber: 1,
    partTitle: 'Probability Density Functions'
  },

  // Part 2: Normal Distributions (continuous)
  {
    id: 'crv-ent-2a',
    question: 'A normal distribution is fully described by which two parameters?',
    options: [
      'n and p',
      'μ (mean) and σ (standard deviation)',
      'a and b (minimum and maximum)',
      'Median and IQR'
    ],
    correctIndex: 1,
    explanation: 'The normal distribution is the most important continuous distribution and is completely described by its mean μ and standard deviation σ.',
    partNumber: 2,
    partTitle: 'Normal Distributions (continuous)'
  },
  {
    id: 'crv-ent-2b',
    question: 'According to the empirical rule (68-95-99.7 rule), approximately what percentage of data falls within 2 standard deviations of the mean in a normal distribution?',
    options: [
      '68%',
      '90%',
      '95%',
      '99.7%'
    ],
    correctIndex: 2,
    explanation: 'Approximately 68% of data falls within 1σ of the mean, ~95% within 2σ, and ~99.7% within 3σ.',
    partNumber: 2,
    partTitle: 'Normal Distributions (continuous)'
  },

  // Part 3: Uniform Distributions
  {
    id: 'crv-ent-3a',
    question: 'What is the height of the density curve for a uniform distribution on [a, b]?',
    options: [
      '1',
      'b − a',
      '1/(b − a)',
      '(a + b)/2'
    ],
    correctIndex: 2,
    explanation: 'A uniform distribution on [a, b] has constant height = 1/(b−a). All intervals of equal length have equal probability.',
    partNumber: 3,
    partTitle: 'Uniform Distributions'
  },
  {
    id: 'crv-ent-3b',
    question: 'For a uniform distribution on [0, 10], what is P(3 < X < 7)?',
    options: [
      '0.3',
      '0.4',
      '0.7',
      '0.04'
    ],
    correctIndex: 1,
    explanation: 'For uniform on [0, 10], P(3 < X < 7) = (7−3)/(10−0) = 4/10 = 0.4.',
    partNumber: 3,
    partTitle: 'Uniform Distributions'
  },

  // Part 4: Expected Value (continuous)
  {
    id: 'crv-ent-4a',
    question: 'How is the expected value E(X) interpreted on a density curve?',
    options: [
      'The highest point of the curve',
      'The balance point of the density curve',
      'The equal-areas point of the curve',
      'The point where the curve crosses the x-axis'
    ],
    correctIndex: 1,
    explanation: 'E(X) for continuous distributions is the "balance point" of the density curve — the point at which the curve would balance if made of solid material.',
    partNumber: 4,
    partTitle: 'Expected Value (continuous)'
  },
  {
    id: 'crv-ent-4b',
    question: 'What is the expected value of a uniform distribution on [2, 8]?',
    options: [
      '3',
      '4',
      '5',
      '6'
    ],
    correctIndex: 2,
    explanation: 'For a uniform distribution on [a, b], E(X) = (a+b)/2 = (2+8)/2 = 5.',
    partNumber: 4,
    partTitle: 'Expected Value (continuous)'
  },

  // Part 5: Applications
  {
    id: 'crv-ent-5a',
    question: 'A bus arrives every 15 minutes. If you arrive at a random time, your waiting time follows which distribution?',
    options: [
      'Normal distribution with μ = 7.5',
      'Geometric distribution with p = 1/15',
      'Uniform distribution on [0, 15]',
      'Binomial distribution with n = 15'
    ],
    correctIndex: 2,
    explanation: 'Waiting time for a bus that arrives every 15 minutes follows a uniform distribution on [0, 15], since any wait time in that interval is equally likely.',
    partNumber: 5,
    partTitle: 'Applications'
  },
  {
    id: 'crv-ent-5b',
    question: 'Which of the following is commonly modeled by a continuous distribution?',
    options: [
      'Number of students in a class',
      'Number of heads in 10 coin flips',
      'Heights of adult women',
      'Number of defective items in a shipment'
    ],
    correctIndex: 2,
    explanation: 'Heights, weights, and test scores are commonly modeled by continuous distributions because they can take any value within a range.',
    partNumber: 5,
    partTitle: 'Applications'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'crv-ent-6a',
    question: 'What must the total area under any valid probability density curve equal?',
    options: [
      '0',
      '0.5',
      '1',
      'It depends on the distribution'
    ],
    correctIndex: 2,
    explanation: 'For a density curve, total area under the curve always equals 1 — this is a fundamental property of all probability distributions.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'crv-ent-6b',
    question: 'How do the median and mean relate to a density curve?',
    options: [
      'Both are at the highest point of the curve',
      'The median is the equal-areas point; the mean is the balance point',
      'The mean is always greater than the median',
      'They are always equal for any density curve'
    ],
    correctIndex: 1,
    explanation: 'The median of a density curve is the equal-areas point (50% of area on each side); the mean is the balance point.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: AP Review & Applications
  {
    id: 'crv-ent-7a',
    question: 'On the AP exam, what tools should you use for normal distribution calculations?',
    options: [
      'Only the empirical rule',
      'A binomial probability table',
      'Z-scores and normal tables or a calculator',
      'The geometric probability formula'
    ],
    correctIndex: 2,
    explanation: 'On the AP exam, use z-scores and the standard normal table or a calculator (normalcdf/invNorm) for normal distribution calculations.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'crv-ent-7b',
    question: 'For a continuous random variable X, which statement is true?',
    options: [
      'P(a < X < b) is always greater than P(a ≤ X ≤ b)',
      'P(a < X < b) is always less than P(a ≤ X ≤ b)',
      'P(a < X < b) = P(a ≤ X ≤ b)',
      'The relationship depends on the specific distribution'
    ],
    correctIndex: 2,
    explanation: 'For continuous distributions, P(a < X < b) = P(a ≤ X ≤ b) since P(X = any single value) = 0.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Probability Density Functions' },
    { partNumber: 2, partTitle: 'Normal Distributions (continuous)' },
    { partNumber: 3, partTitle: 'Uniform Distributions' },
    { partNumber: 4, partTitle: 'Expected Value (continuous)' },
    { partNumber: 5, partTitle: 'Applications' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
