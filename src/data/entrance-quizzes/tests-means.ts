/**
 * Entrance Quiz — Tests for Means (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Hypotheses for Means
  {
    id: 'tm-ent-1a',
    question: 'A researcher believes the average commute time in a city exceeds 30 minutes. Which hypotheses should she test?',
    options: [
      'H₀: x̄ = 30; Hₐ: x̄ > 30',
      'H₀: μ = 30; Hₐ: μ > 30',
      'H₀: μ > 30; Hₐ: μ = 30',
      'H₀: μ = 30; Hₐ: μ ≠ 30'
    ],
    correctIndex: 1,
    explanation: 'Hypotheses are written about the population mean μ, not the sample mean x̄. Since she believes the mean exceeds 30, the alternative is μ > 30.',
    partNumber: 1,
    partTitle: 'Hypotheses for Means'
  },
  {
    id: 'tm-ent-1b',
    question: 'In a hypothesis test for a population mean, the null and alternative hypotheses are statements about which quantity?',
    options: [
      'The sample mean x̄',
      'The sample standard deviation s',
      'The population mean μ',
      'The test statistic t'
    ],
    correctIndex: 2,
    explanation: 'Hypotheses are always about the population parameter μ, not the sample statistic x̄. We use sample data to draw conclusions about the population.',
    partNumber: 1,
    partTitle: 'Hypotheses for Means'
  },
  // Part 2: One-Sample t-Test
  {
    id: 'tm-ent-2a',
    question: 'What is the formula for the one-sample t-test statistic?',
    options: [
      't = (x̄ − μ₀) / (σ/√n)',
      't = (x̄ − μ₀) / (s/√n)',
      't = (μ₀ − x̄) / (s/√n)',
      't = (x̄ − μ₀) / s'
    ],
    correctIndex: 1,
    explanation: 'The one-sample t-test statistic is t = (x̄ − μ₀) / (s/√n), with degrees of freedom df = n − 1. We use s (not σ) because the population standard deviation is unknown.',
    partNumber: 2,
    partTitle: 'One-Sample t-Test'
  },
  {
    id: 'tm-ent-2b',
    question: 'Why do we use a t-distribution instead of a z-distribution in a one-sample t-test?',
    options: [
      'Because the sample size is always small',
      'Because we are testing a proportion',
      'Because the population standard deviation σ is unknown and estimated by s',
      'Because the data must be normally distributed'
    ],
    correctIndex: 2,
    explanation: 'We use the t-distribution because σ is unknown and must be estimated by the sample standard deviation s. This added uncertainty makes the t-distribution wider than the z-distribution.',
    partNumber: 2,
    partTitle: 'One-Sample t-Test'
  },
  // Part 3: Two-Sample t-Test
  {
    id: 'tm-ent-3a',
    question: 'Which formula gives the test statistic for a two-sample t-test?',
    options: [
      't = (x̄₁ − x̄₂) / √(s₁²/n₁ + s₂²/n₂)',
      't = (x̄₁ + x̄₂) / √(s₁²/n₁ + s₂²/n₂)',
      't = (x̄₁ − x̄₂) / (s_pooled/√n)',
      't = (x̄₁ − x̄₂) / (s₁ + s₂)'
    ],
    correctIndex: 0,
    explanation: 'The two-sample t-test statistic is t = (x̄₁ − x̄₂) / √(s₁²/n₁ + s₂²/n₂). This compares the difference in sample means to its estimated standard error.',
    partNumber: 3,
    partTitle: 'Two-Sample t-Test'
  },
  {
    id: 'tm-ent-3b',
    question: 'When should you use a two-sample t-test instead of a paired t-test?',
    options: [
      'When subjects are measured before and after treatment',
      'When comparing means of two INDEPENDENT groups',
      'When the two samples have the same size',
      'When the population standard deviation is known'
    ],
    correctIndex: 1,
    explanation: 'Use a two-sample t-test when comparing means of two independent groups — that is, when there is no natural pairing between observations in the two samples.',
    partNumber: 3,
    partTitle: 'Two-Sample t-Test'
  },
  // Part 4: Confidence Intervals & Tests
  {
    id: 'tm-ent-4a',
    question: 'A two-sided test at α = 0.05 rejects H₀: μ = 50. What can you conclude about a 95% confidence interval for μ from the same data?',
    options: [
      'The interval contains 50',
      'The interval does not contain 50',
      'The interval is centered at 50',
      'Nothing — intervals and tests are unrelated'
    ],
    correctIndex: 1,
    explanation: 'A test at significance level α and the corresponding confidence interval at level (1 − α) give consistent results. If the test rejects at α = 0.05, then 50 is NOT in the 95% CI.',
    partNumber: 4,
    partTitle: 'Confidence Intervals & Tests'
  },
  {
    id: 'tm-ent-4b',
    question: 'A 95% confidence interval for μ is (72, 88). If you test H₀: μ = 70 vs Hₐ: μ ≠ 70 at α = 0.05, what is the result?',
    options: [
      'Fail to reject H₀ because 70 is below the interval',
      'Reject H₀ because 70 is NOT in the 95% CI',
      'Fail to reject H₀ because the interval is wide',
      'Cannot determine without the p-value'
    ],
    correctIndex: 1,
    explanation: 'If the hypothesized value (70) is not contained in the 95% confidence interval (72, 88), the two-sided test rejects H₀ at α = 0.05.',
    partNumber: 4,
    partTitle: 'Confidence Intervals & Tests'
  },
  // Part 5: Conditions & Robustness
  {
    id: 'tm-ent-5a',
    question: 'Which set of conditions must be checked before performing a one-sample t-test?',
    options: [
      'Random sample, Normal population only, σ known',
      'Random sample, independence (10% condition), Normal/Large sample (n ≥ 30)',
      'Large sample only, equal variances, no outliers',
      'Random sample, paired observations, σ unknown'
    ],
    correctIndex: 1,
    explanation: 'The three conditions are: (1) random sample, (2) independence — often checked via the 10% condition, and (3) Normal/Large sample — the population is approximately normal or n ≥ 30.',
    partNumber: 5,
    partTitle: 'Conditions & Robustness'
  },
  {
    id: 'tm-ent-5b',
    question: 'What does it mean to say that t-procedures are "robust"?',
    options: [
      'They always give exact p-values',
      'They require perfectly normal populations',
      'They work well for non-normal populations when n is large',
      'They are only valid for small samples'
    ],
    correctIndex: 2,
    explanation: 'Robustness means t-procedures still give approximately valid results even when the population distribution is not normal, especially when the sample size is large.',
    partNumber: 5,
    partTitle: 'Conditions & Robustness'
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'tm-ent-6a',
    question: 'A sample of n = 36 has x̄ = 105 and s = 12. Testing H₀: μ = 100 vs Hₐ: μ > 100, what is the t-statistic?',
    options: [
      't = 1.5',
      't = 2.0',
      't = 2.5',
      't = 3.0'
    ],
    correctIndex: 2,
    explanation: 't = (x̄ − μ₀) / (s/√n) = (105 − 100) / (12/√36) = 5 / 2 = 2.5. With df = 35, the p-value is approximately 0.009, providing strong evidence against H₀.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'tm-ent-6b',
    question: 'A population is extremely right-skewed. You have a sample of n = 40. What additional step should you take before performing a t-test?',
    options: [
      'Proceed with the t-test since n ≥ 30 guarantees validity',
      'Use a z-test instead',
      'Check a dotplot or boxplot of the data for extreme skewness or outliers',
      'Increase the significance level to α = 0.10'
    ],
    correctIndex: 2,
    explanation: 'When the population is extremely skewed, even a large n may not be sufficient. You should examine dotplots or boxplots to check whether the skewness or outliers are too extreme for the t-procedure.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  // Part 7: AP Review & Applications
  {
    id: 'tm-ent-7a',
    question: 'Which is the correct format for stating a conclusion to a significance test on the AP exam?',
    options: [
      '"We accept H₀ because p > α."',
      '"Because the p-value (_) is less than α = _, we reject H₀."',
      '"The null hypothesis is true."',
      '"We prove that μ ≠ μ₀."'
    ],
    correctIndex: 1,
    explanation: 'The proper conclusion states: "Because p-value (___) [is/is not] less than α = ___, we [reject/fail to reject] H₀." Never say "accept H₀" or "prove."',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'tm-ent-7b',
    question: 'After rejecting H₀: μ = 200 in a test about average daily calories burned, which interpretation is best?',
    options: [
      '"We proved that the mean calories burned is not 200."',
      '"There is convincing evidence that the mean daily calories burned differs from 200."',
      '"The sample mean is not 200."',
      '"All individuals burn a different number of calories than 200."'
    ],
    correctIndex: 1,
    explanation: 'Always interpret in context: "There is convincing evidence that the mean daily calories burned differs from 200." Avoid saying "prove" and make sure to reference the variable in context.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Hypotheses for Means' },
    { partNumber: 2, partTitle: 'One-Sample t-Test' },
    { partNumber: 3, partTitle: 'Two-Sample t-Test' },
    { partNumber: 4, partTitle: 'Confidence Intervals & Tests' },
    { partNumber: 5, partTitle: 'Conditions & Robustness' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
