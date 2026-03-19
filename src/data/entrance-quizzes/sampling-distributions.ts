/**
 * Entrance Quiz — Sampling Distributions (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Population vs Sample Statistics
  {
    id: 'sd-ent-1a',
    question: 'Which of the following correctly pairs a parameter with a statistic?',
    options: [
      'μ is a statistic; x̄ is a parameter',
      'μ is a parameter; x̄ is a statistic',
      'Both μ and x̄ are parameters',
      'Both μ and x̄ are statistics'
    ],
    correctIndex: 1,
    explanation: 'A parameter describes a population (μ, p); a statistic describes a sample (x̄, p̂).',
    partNumber: 1,
    partTitle: 'Population vs Sample Statistics'
  },
  {
    id: 'sd-ent-1b',
    question: 'What is the term for the fact that statistics vary from sample to sample?',
    options: [
      'Bias',
      'Sampling variability',
      'Confounding',
      'Measurement error'
    ],
    correctIndex: 1,
    explanation: 'Statistics vary from sample to sample — this natural variability is called sampling variability.',
    partNumber: 1,
    partTitle: 'Population vs Sample Statistics'
  },

  // Part 2: Distribution of Sample Means
  {
    id: 'sd-ent-2a',
    question: 'The sampling distribution of x̄ shows:',
    options: [
      'The distribution of individual observations in the population',
      'All possible values of x̄ from all possible samples of size n',
      'The distribution of a single sample',
      'The shape of the population'
    ],
    correctIndex: 1,
    explanation: 'The sampling distribution of x̄ shows all possible values of x̄ from all possible samples of size n from the population.',
    partNumber: 2,
    partTitle: 'Distribution of Sample Means'
  },
  {
    id: 'sd-ent-2b',
    question: 'The sampling distribution of x̄ is centered at:',
    options: [
      'x̄ from the first sample',
      'σ',
      'μ (the population mean)',
      '0'
    ],
    correctIndex: 2,
    explanation: 'The sampling distribution of x̄ is centered at μ because x̄ is an unbiased estimator of the population mean.',
    partNumber: 2,
    partTitle: 'Distribution of Sample Means'
  },

  // Part 3: Standard Error
  {
    id: 'sd-ent-3a',
    question: 'What is the standard error of the sample mean x̄?',
    options: [
      'σ',
      'σ/n',
      'σ/√n',
      'σ²/n'
    ],
    correctIndex: 2,
    explanation: 'Standard error of x̄ = σ/√n; it decreases as sample size n increases.',
    partNumber: 3,
    partTitle: 'Standard Error'
  },
  {
    id: 'sd-ent-3b',
    question: 'What does the standard error measure?',
    options: [
      'The spread of individual observations',
      'The bias of the estimator',
      'The typical deviation of a statistic from the parameter',
      'The range of the population'
    ],
    correctIndex: 2,
    explanation: 'Standard error measures the typical deviation of a statistic from the parameter it estimates.',
    partNumber: 3,
    partTitle: 'Standard Error'
  },

  // Part 4: Center & Spread of Distributions
  {
    id: 'sd-ent-4a',
    question: 'For the sampling distribution of x̄, the center is ___ and the spread is ___.',
    options: [
      'x̄; σ',
      'μ; σ/√n',
      'μ; σ',
      'x̄; σ/√n'
    ],
    correctIndex: 1,
    explanation: 'The center of the sampling distribution of x̄ is μ; the spread is σ/√n.',
    partNumber: 4,
    partTitle: 'Center & Spread of Distributions'
  },
  {
    id: 'sd-ent-4b',
    question: 'For the sampling distribution of p̂, the spread (standard deviation) is:',
    options: [
      'p/n',
      'p(1−p)',
      '√[p(1−p)/n]',
      '√[p̂(1−p̂)]'
    ],
    correctIndex: 2,
    explanation: 'The center of the sampling distribution of p̂ is p; the spread is √[p(1−p)/n].',
    partNumber: 4,
    partTitle: 'Center & Spread of Distributions'
  },

  // Part 5: Simulation & Patterns
  {
    id: 'sd-ent-5a',
    question: 'To simulate a sampling distribution, you should:',
    options: [
      'Take one large sample and compute its histogram',
      'Take many random samples, compute the statistic for each, and plot the distribution',
      'Compute the population parameter directly',
      'Take one sample and resample from it with replacement'
    ],
    correctIndex: 1,
    explanation: 'Simulation involves taking many random samples, computing the statistic for each, and plotting the distribution of those statistics.',
    partNumber: 5,
    partTitle: 'Simulation & Patterns'
  },
  {
    id: 'sd-ent-5b',
    question: 'As the sample size n increases, what happens to the sampling distribution of x̄?',
    options: [
      'It becomes more spread out and more skewed',
      'It stays the same regardless of n',
      'It becomes more normal and less spread out',
      'It shifts to the right'
    ],
    correctIndex: 2,
    explanation: 'As n increases, the sampling distribution becomes more normal (by the CLT) and less spread out (standard error decreases).',
    partNumber: 5,
    partTitle: 'Simulation & Patterns'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'sd-ent-6a',
    question: 'If σ = 20 and n = 100, what is the standard error of x̄?',
    options: [
      '0.2',
      '2',
      '20',
      '200'
    ],
    correctIndex: 1,
    explanation: 'Standard error = σ/√n = 20/√100 = 20/10 = 2.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'sd-ent-6b',
    question: 'If you quadruple the sample size, what happens to the standard error?',
    options: [
      'It is quartered',
      'It is halved',
      'It stays the same',
      'It doubles'
    ],
    correctIndex: 1,
    explanation: 'Quadrupling the sample size cuts the standard error in half because √4 = 2, so σ/√(4n) = (σ/√n)/2.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: AP Review & Applications
  {
    id: 'sd-ent-7a',
    question: 'An unbiased estimator has which key property?',
    options: [
      'Its value never changes from sample to sample',
      'Its sampling distribution is centered at the true parameter value',
      'It always equals the population parameter',
      'It has zero standard error'
    ],
    correctIndex: 1,
    explanation: 'An unbiased estimator has a sampling distribution centered at the true parameter value.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'sd-ent-7b',
    question: 'On the AP exam, why is it important to distinguish between variability of individual observations and variability of statistics?',
    options: [
      'They use the same formula',
      'Individual variability is measured by σ while the variability of a statistic is measured by its standard error, which is smaller',
      'Only individual variability matters for inference',
      'They are the same concept with different names'
    ],
    correctIndex: 1,
    explanation: 'Individual observations have variability σ, while statistics have variability measured by standard error (e.g., σ/√n), which is smaller. The AP exam requires this distinction.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Population vs Sample Statistics' },
    { partNumber: 2, partTitle: 'Distribution of Sample Means' },
    { partNumber: 3, partTitle: 'Standard Error' },
    { partNumber: 4, partTitle: 'Center & Spread of Distributions' },
    { partNumber: 5, partTitle: 'Simulation & Patterns' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
