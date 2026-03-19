/**
 * Entrance Quiz — Confidence Intervals for Means (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Estimating Population Means
  {
    id: 'cim-ent-1a',
    question: 'What does x̄ represent in the context of estimating a population mean?',
    options: [
      'A point estimate of the population mean μ',
      'The exact value of the population mean μ',
      'The margin of error for the confidence interval',
      'The standard deviation of the population'
    ],
    correctIndex: 0,
    explanation: 'x̄ (the sample mean) is a point estimate of the population mean μ. We build a confidence interval around x̄ to capture μ with a given confidence level.',
    partNumber: 1,
    partTitle: 'Estimating Population Means'
  },
  {
    id: 'cim-ent-1b',
    question: 'Why do we use t-procedures instead of z-procedures when constructing a confidence interval for a population mean?',
    options: [
      'Because the sample size is always small',
      'Because the population standard deviation σ is unknown and must be estimated by s',
      'Because the population is always non-normal',
      'Because z-procedures only work for proportions'
    ],
    correctIndex: 1,
    explanation: 'We use t-procedures when σ is unknown, which is almost always in practice. The sample standard deviation s is used in place of σ, introducing extra variability accounted for by the t-distribution.',
    partNumber: 1,
    partTitle: 'Estimating Population Means'
  },

  // Part 2: t-Distribution
  {
    id: 'cim-ent-2a',
    question: 'Which of the following best describes the t-distribution?',
    options: [
      'Skewed right with light tails',
      'Symmetric and bell-shaped with heavier tails than the standard normal',
      'Uniform across all values',
      'Identical to the standard normal regardless of sample size'
    ],
    correctIndex: 1,
    explanation: 'The t-distribution is symmetric and bell-shaped like the normal distribution but has heavier tails, reflecting the extra uncertainty from estimating σ with s. Its shape depends on degrees of freedom (df = n − 1).',
    partNumber: 2,
    partTitle: 't-Distribution'
  },
  {
    id: 'cim-ent-2b',
    question: 'What happens to the t-distribution as the degrees of freedom increase?',
    options: [
      'It becomes more skewed',
      'Its tails become heavier',
      'It approaches the standard normal (z) distribution',
      'It becomes a uniform distribution'
    ],
    correctIndex: 2,
    explanation: 'As degrees of freedom increase, the t-distribution approaches the standard normal (z) distribution because the estimate s becomes more precise with larger samples.',
    partNumber: 2,
    partTitle: 't-Distribution'
  },

  // Part 3: One-Sample t-Interval
  {
    id: 'cim-ent-3a',
    question: 'The formula for a one-sample t-interval for a population mean is:',
    options: [
      'x̄ ± z* · (σ/√n)',
      'x̄ ± t* · (s/√n)',
      'p̂ ± z* · √[p̂(1−p̂)/n]',
      's ± t* · (x̄/√n)'
    ],
    correctIndex: 1,
    explanation: 'The one-sample t-interval is x̄ ± t* · (s/√n). Conditions required: random sample, independence (10% condition), and approximately normal population or large n.',
    partNumber: 3,
    partTitle: 'One-Sample t-Interval'
  },
  {
    id: 'cim-ent-3b',
    question: 'Which is the correct interpretation of a 95% confidence interval (42, 58) for μ?',
    options: [
      '95% of all data values fall between 42 and 58',
      'There is a 95% probability that μ is between 42 and 58',
      'We are 95% confident that the true population mean is between 42 and 58',
      'The sample mean is 95% likely to be 50'
    ],
    correctIndex: 2,
    explanation: 'The correct interpretation is: "We are 95% confident that the true mean is between 42 and 58." The interval is about the parameter μ, not about individual data values or probability statements about μ.',
    partNumber: 3,
    partTitle: 'One-Sample t-Interval'
  },

  // Part 4: Two-Sample t-Interval
  {
    id: 'cim-ent-4a',
    question: 'The two-sample t-interval for (μ₁ − μ₂) is:',
    options: [
      'x̄₁ ± t* · (s₁/√n₁)',
      '(x̄₁ − x̄₂) ± t* · √(s₁²/n₁ + s₂²/n₂)',
      '(x̄₁ + x̄₂) ± z* · √(s₁²/n₁ + s₂²/n₂)',
      'x̄₁ − x̄₂ ± t* · (s_pooled/√n)'
    ],
    correctIndex: 1,
    explanation: 'The two-sample t-interval is (x̄₁ − x̄₂) ± t* · √(s₁²/n₁ + s₂²/n₂). This estimates the difference between two population means.',
    partNumber: 4,
    partTitle: 'Two-Sample t-Interval'
  },
  {
    id: 'cim-ent-4b',
    question: 'When should you use a two-sample t-interval rather than a paired t-interval?',
    options: [
      'When data come from the same subjects measured twice',
      'When comparing means of two independent groups',
      'When the population standard deviation is known',
      'When the sample sizes must be equal'
    ],
    correctIndex: 1,
    explanation: 'A two-sample t-interval is appropriate when comparing means of two independent groups. A paired design is used when observations are naturally matched (e.g., before/after on the same subjects).',
    partNumber: 4,
    partTitle: 'Two-Sample t-Interval'
  },

  // Part 5: Paired t-Interval
  {
    id: 'cim-ent-5a',
    question: 'In a paired t-interval, what is the first step in the analysis?',
    options: [
      'Pool the two sample standard deviations',
      'Compute differences d = x₁ − x₂ for each pair, then perform a one-sample t-procedure on the differences',
      'Calculate separate confidence intervals for each sample',
      'Use a z-procedure because paired data are always normal'
    ],
    correctIndex: 1,
    explanation: 'For a paired t-interval, compute the differences d = x₁ − x₂ for each pair, then treat them as a single sample and apply a one-sample t-procedure to the differences.',
    partNumber: 5,
    partTitle: 'Paired t-Interval'
  },
  {
    id: 'cim-ent-5b',
    question: 'Why are paired designs often preferred over independent two-sample designs?',
    options: [
      'Paired designs always use larger samples',
      'Paired designs reduce variability by controlling for individual differences',
      'Paired designs do not require checking conditions',
      'Paired designs always produce narrower confidence intervals regardless of context'
    ],
    correctIndex: 1,
    explanation: 'Paired designs reduce variability by controlling for individual differences — each subject serves as their own control, removing subject-to-subject variation from the comparison.',
    partNumber: 5,
    partTitle: 'Paired t-Interval'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'cim-ent-6a',
    question: 'A random sample of 25 students has x̄ = 72 and s = 10. What is the 95% t-interval for the population mean? (t* = 2.064 for df = 24)',
    options: [
      '(68.00, 76.00)',
      '(67.87, 76.13)',
      '(70.00, 74.00)',
      '(62.00, 82.00)'
    ],
    correctIndex: 1,
    explanation: '72 ± 2.064 × (10/√25) = 72 ± 2.064 × 2 = 72 ± 4.128 = (67.87, 76.13).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'cim-ent-6b',
    question: 'Why is the t* critical value for 95% confidence with df = 24 larger than z* = 1.96?',
    options: [
      'Because the sample mean is biased',
      'Because df = 24 gives a narrower distribution',
      'Because the t-distribution has heavier tails than the standard normal, requiring a larger critical value',
      'Because the confidence level is actually higher than 95%'
    ],
    correctIndex: 2,
    explanation: 'The t-distribution has heavier tails than the standard normal, so a larger critical value is needed to capture the same central area (95%). As df increases, t* approaches z*.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: AP Review & Applications
  {
    id: 'cim-ent-7a',
    question: 'On the AP exam, which conditions must be verified before constructing a t-interval for a mean?',
    options: [
      'Large population and known σ',
      'Random sample, independence (10% condition), and approximately normal population or large sample',
      'Equal sample sizes and equal variances',
      'Simple random sample and σ known'
    ],
    correctIndex: 1,
    explanation: 'Always check: (1) random sample, (2) independent observations (10% condition: n < 10% of population), and (3) approximately normal population or large sample size (n ≥ 30).',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'cim-ent-7b',
    question: 'The t-procedure is described as "robust." What does this mean?',
    options: [
      'It always gives exact results',
      'It works reasonably well even for non-normal populations when the sample size is large',
      'It can be used without checking any conditions',
      'It is unaffected by outliers regardless of sample size'
    ],
    correctIndex: 1,
    explanation: 'Robust means the t-procedure gives reasonably accurate results even when the population is not perfectly normal, especially with larger sample sizes. However, strong skewness or outliers with small n can be problematic.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Estimating Population Means' },
    { partNumber: 2, partTitle: 't-Distribution' },
    { partNumber: 3, partTitle: 'One-Sample t-Interval' },
    { partNumber: 4, partTitle: 'Two-Sample t-Interval' },
    { partNumber: 5, partTitle: 'Paired t-Interval' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
