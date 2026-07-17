/**
 * Entrance Quiz — Central Limit Theorem (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Statement of CLT
  {
    id: 'clt-ent-1a',
    question: 'What does the Central Limit Theorem state about the sampling distribution of x̄?',
    options: [
      'It is always exactly normal',
      'For large n, it is approximately normal regardless of the population shape',
      'It has the same shape as the population',
      'It is only normal if the population is normal'
    ],
    correctIndex: 1,
    explanation: 'The CLT states that for large n, the sampling distribution of x̄ is approximately normal regardless of the population shape.',
    partNumber: 1,
    partTitle: 'Statement of CLT'
  },
  {
    id: 'clt-ent-1b',
    question: 'The Central Limit Theorem applies to the distribution of:',
    options: [
      'Individual observations from the population',
      'The population itself',
      'Sample means (x̄)',
      'The standard deviation'
    ],
    correctIndex: 2,
    explanation: 'The CLT applies to the distribution of sample means, not to individual observations.',
    partNumber: 1,
    partTitle: 'Statement of CLT'
  },

  // Part 2: Conditions for CLT
  {
    id: 'clt-ent-2a',
    question: 'Which conditions are needed for the CLT to apply?',
    options: [
      'The population must be normal',
      'The sample should be random and observations independent',
      'The sample must be at least half the population',
      'The population standard deviation must be known exactly'
    ],
    correctIndex: 1,
    explanation: 'For the CLT to apply, the sample should be random and the observations independent.',
    partNumber: 2,
    partTitle: 'Conditions for CLT'
  },
  {
    id: 'clt-ent-2b',
    question: 'The common rule of thumb for the CLT to provide a good approximation is:',
    options: [
      'n ≥ 5',
      'n ≥ 10',
      'n ≥ 30',
      'n ≥ 100'
    ],
    correctIndex: 2,
    explanation: 'n ≥ 30 is generally sufficient for the CLT to apply, unless the population is extremely skewed.',
    partNumber: 2,
    partTitle: 'Conditions for CLT'
  },

  // Part 3: Sample Size Effects
  {
    id: 'clt-ent-3a',
    question: 'If the population itself is normal, what can be said about the sampling distribution of x̄?',
    options: [
      'It is normal only for n ≥ 30',
      'It is approximately normal for large n',
      'It is exactly normal for any sample size',
      'It depends on the population standard deviation'
    ],
    correctIndex: 2,
    explanation: 'If the population is normal, the sampling distribution of x̄ is normal for ANY sample size, not just large ones.',
    partNumber: 3,
    partTitle: 'Sample Size Effects'
  },
  {
    id: 'clt-ent-3b',
    question: 'For a strongly skewed population, what happens to the sampling distribution of x̄ as n increases?',
    options: [
      'It remains skewed regardless of n',
      'It becomes more skewed',
      'It becomes approximately normal for large enough n',
      'It becomes uniform'
    ],
    correctIndex: 2,
    explanation: 'For skewed populations, larger n is needed, but the sampling distribution does become approximately normal as n gets large enough.',
    partNumber: 3,
    partTitle: 'Sample Size Effects'
  },

  // Part 4: Normal Approximation
  {
    id: 'clt-ent-4a',
    question: 'Under the CLT, the sampling distribution of x̄ is approximately:',
    options: [
      'Normal(0, 1)',
      'Normal(μ, σ)',
      'Normal(μ, $\\sigma /\\sqrt{n}$)',
      'Normal(x̄, $s/\\sqrt{n}$)'
    ],
    correctIndex: 2,
    explanation: 'Under the CLT, x̄ ~ Normal(μ, $\\sigma /\\sqrt{n}$) approximately, for large n.',
    partNumber: 4,
    partTitle: 'Normal Approximation'
  },
  {
    id: 'clt-ent-4b',
    question: 'Using the CLT, the z-score for a sample mean x̄ is calculated as:',
    options: [
      'z = (x − μ) / σ',
      'z = (x̄ − μ) / σ',
      'z = (x̄ − μ) / $(\\sigma /\\sqrt{n})$',
      'z = (x̄ − x) / s'
    ],
    correctIndex: 2,
    explanation: 'The z-score for inference about means is z = (x̄ − μ) / $(\\sigma /\\sqrt{n})$, standardizing x̄ using its standard error.',
    partNumber: 4,
    partTitle: 'Normal Approximation'
  },

  // Part 5: Practical Applications
  {
    id: 'clt-ent-5a',
    question: 'A quality control manager measures the mean weight of 50 randomly selected packages. The CLT ensures that:',
    options: [
      'Each package has a normal weight',
      'The sample mean x̄ is approximately normally distributed',
      'The population of package weights is normal',
      'The sample standard deviation equals the population standard deviation'
    ],
    correctIndex: 1,
    explanation: 'With n = 50, the CLT ensures the sampling distribution of x̄ is approximately normal, even if individual package weights are not.',
    partNumber: 5,
    partTitle: 'Practical Applications'
  },
  {
    id: 'clt-ent-5b',
    question: 'The CLT is the foundation for which of the following inference procedures?',
    options: [
      'Only chi-square tests',
      'Only ANOVA',
      'Confidence intervals and significance tests about means',
      'Only non-parametric tests'
    ],
    correctIndex: 2,
    explanation: 'The CLT is the foundation for confidence intervals and significance tests about means.',
    partNumber: 5,
    partTitle: 'Practical Applications'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'clt-ent-6a',
    question: 'A population is strongly right-skewed. For which sample size is the sampling distribution of x̄ approximately normal?',
    options: [
      'n = 2',
      'n = 5',
      'n = 50',
      'None — skewed populations never produce normal sampling distributions'
    ],
    correctIndex: 2,
    explanation: 'For n = 5, x̄ is not approximately normal with a strongly skewed population. For n = 50, the CLT ensures approximate normality.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'clt-ent-6b',
    question: 'The CLT also applies to sample proportions. For large n, p̂ is approximately normal with mean ___ and standard deviation ___.',
    options: [
      'p̂; √[p̂(1−p̂)/n]',
      'p; √[p(1−p)/n]',
      'p; p(1−p)/n',
      'np; √[np(1−p)]'
    ],
    correctIndex: 1,
    explanation: 'For large n, p̂ is approximately normal with mean p and SD √[p(1−p)/n].',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: AP Review & Applications
  {
    id: 'clt-ent-7a',
    question: 'Why is the Central Limit Theorem considered one of the most important results in statistics?',
    options: [
      'It proves all populations are normal',
      'It eliminates the need for random sampling',
      'It justifies using normal-based inference procedures even for non-normal populations',
      'It shows sample size does not matter'
    ],
    correctIndex: 2,
    explanation: 'The CLT is one of the most important theorems because it justifies using normal-based inference procedures even when the population is not normal.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'clt-ent-7b',
    question: 'On the AP exam, before using normal procedures for inference about means, you should:',
    options: [
      'Just use the formula without checking conditions',
      'State the CLT and verify conditions: random, independent, large n',
      'Only check that the sample mean is positive',
      'Verify that all data points are equal'
    ],
    correctIndex: 1,
    explanation: 'On the AP exam, always state the CLT and verify conditions (random, independent, large n) before using normal procedures.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Statement of CLT' },
    { partNumber: 2, partTitle: 'Conditions for CLT' },
    { partNumber: 3, partTitle: 'Sample Size Effects' },
    { partNumber: 4, partTitle: 'Normal Approximation' },
    { partNumber: 5, partTitle: 'Practical Applications' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
