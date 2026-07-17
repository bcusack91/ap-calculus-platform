/**
 * Entrance Quiz — Tests for Proportions (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Hypotheses for Proportions
  {
    id: 'tp-ent-1a',
    question: 'For a one-proportion z-test, the null hypothesis is written as:',
    options: [
      '$H_{0}$: p̂ = $p_{0}$',
      '$H_{0}$: p = $p_{0}$ (the population proportion equals a specified value)',
      '$H_{0}$: x̄ = $\\mu_{0}$',
      '$H_{0}$: p ≠ $p_{0}$'
    ],
    correctIndex: 1,
    explanation: 'The null hypothesis for a proportion test is $H_{0}$: p = $p_{0}$, where p is the population proportion and $p_{0}$ is the hypothesized value. The alternative can be p ≠ $p_{0}$, p > $p_{0}$, or p < $p_{0}$.',
    partNumber: 1,
    partTitle: 'Hypotheses for Proportions'
  },
  {
    id: 'tp-ent-1b',
    question: 'When should a two-sided alternative hypothesis ($H_{a}$: p ≠ $p_{0}$) be used?',
    options: [
      'When we expect the proportion to be greater than $p_{0}$',
      'When we expect the proportion to be less than $p_{0}$',
      'When we are looking for ANY difference from $p_{0}$, in either direction',
      'When the sample size is small'
    ],
    correctIndex: 2,
    explanation: 'A two-sided alternative $(p \\ne p_{0})$ is used when we are looking for any difference from $p_{0}$ — we have no prior directional expectation about whether p is above or below $p_{0}$.',
    partNumber: 1,
    partTitle: 'Hypotheses for Proportions'
  },

  // Part 2: One-Sample z-Test
  {
    id: 'tp-ent-2a',
    question: 'The test statistic for a one-proportion z-test is:',
    options: [
      'z = (x̄ − $\\mu_{0}$) / $(s/\\sqrt{n})$',
      'z = (p̂ − $p_{0}$) / √[$p_{0}(1-p_{0})/n$]',
      'z = (p̂$ {}_{1}$ − p̂$ {}_{2}$) / SE',
      'z = $p_{0}$ / $\\sqrt{n}$'
    ],
    correctIndex: 1,
    explanation: 'The one-proportion z-test statistic is z = (p̂ − $p_{0}$) / √[$p_{0}(1-p_{0})/n$]. The standard error uses $p_{0}$ (not p̂) because we calculate under the assumption that $H_{0}$ is true.',
    partNumber: 2,
    partTitle: 'One-Sample z-Test'
  },
  {
    id: 'tp-ent-2b',
    question: 'Which conditions must be verified for a one-proportion z-test?',
    options: [
      'Random sample, σ known, and normal population',
      'Random sample, 10% condition, and $np_{0}$ ≥ 10 and $n(1-p_{0})$ ≥ 10',
      'Paired observations and equal variances',
      'Large sample size only'
    ],
    correctIndex: 1,
    explanation: 'Conditions: (1) random sample, (2) 10% condition (n < 10% of population), and (3) $np_{0}$ ≥ 10 and $n(1-p_{0})$ ≥ 10 (success/failure condition checked using $p_{0}$ from $H_{0}$).',
    partNumber: 2,
    partTitle: 'One-Sample z-Test'
  },

  // Part 3: Two-Sample z-Test
  {
    id: 'tp-ent-3a',
    question: 'The two-proportion z-test statistic uses:',
    options: [
      'The individual sample proportions in the standard error',
      'The pooled proportion p̂c in the standard error: z = (p̂$ {}_{1}$ − p̂$ {}_{2}$) / √[p̂$c(1-p̂c)(1/n_{1} + 1/n_{2})$]',
      'The population proportions $p_{1}$ and $p_{2}$',
      'No standard error — only the difference in sample proportions'
    ],
    correctIndex: 1,
    explanation: 'The two-proportion z-test uses the pooled (combined) proportion p̂c = $(x_{1} + x_{2})/(n_{1} + n_{2})$ in the standard error: z = (p̂$ {}_{1}$ − p̂$ {}_{2}$) / √[p̂$c(1-p̂c)(1/n_{1} + 1/n_{2})$].',
    partNumber: 3,
    partTitle: 'Two-Sample z-Test'
  },
  {
    id: 'tp-ent-3b',
    question: 'Why is the pooled proportion p̂c used in a two-proportion z-test?',
    options: [
      'Because it gives a larger test statistic',
      'Because under $H_{0}$, both populations have the same proportion, so combining gives the best estimate',
      'Because individual sample proportions are always inaccurate',
      'Because the AP formula sheet requires it'
    ],
    correctIndex: 1,
    explanation: 'Under $H_{0}$: $p_{1}$ = $p_{2}$, both populations share the same proportion. The pooled proportion p̂c combines both samples to get the best single estimate of this common proportion.',
    partNumber: 3,
    partTitle: 'Two-Sample z-Test'
  },

  // Part 4: P-Values
  {
    id: 'tp-ent-4a',
    question: 'For a right-tailed test ($H_{a}$: p > $p_{0}$), the p-value is:',
    options: [
      'P(Z ≤ z_observed)',
      'P(Z ≥ z_observed)',
      '2 × P(Z ≥ |z_observed|)',
      '1 − α'
    ],
    correctIndex: 1,
    explanation: 'For a right-tailed test, the p-value = P(Z ≥ z_observed) — the probability of getting a test statistic as large or larger than the one observed, assuming $H_{0}$ is true.',
    partNumber: 4,
    partTitle: 'P-Values'
  },
  {
    id: 'tp-ent-4b',
    question: 'For a two-tailed test ($H_{a}$: p ≠ $p_{0}$), the p-value is:',
    options: [
      'P(Z ≥ z_observed)',
      'P(Z ≤ z_observed)',
      '2 × P(Z ≥ |z_observed|)',
      'P(Z = z_observed)'
    ],
    correctIndex: 2,
    explanation: 'For a two-tailed test, the p-value = 2 × P(Z ≥ |z_observed|). We double the one-tail probability because extreme values in either direction count as evidence against $H_{0}$.',
    partNumber: 4,
    partTitle: 'P-Values'
  },

  // Part 5: Conclusions & Decisions
  {
    id: 'tp-ent-5a',
    question: 'If the p-value is less than α, the correct conclusion is:',
    options: [
      '"We accept $H_{a}$ and prove $H_{0}$ is false"',
      '"We reject $H_{0}$. There is convincing evidence that [conclusion in context]"',
      '"We accept $H_{0}$. There is no evidence of a difference"',
      '"The test is inconclusive"'
    ],
    correctIndex: 1,
    explanation: 'When p-value < α: "We reject $H_{0}$. There is convincing evidence that [state the alternative in context]." Never use the word "prove" or "accept $H_{a}$."',
    partNumber: 5,
    partTitle: 'Conclusions & Decisions'
  },
  {
    id: 'tp-ent-5b',
    question: 'If the p-value is greater than or equal to α, the correct conclusion is:',
    options: [
      '"We accept $H_{0}$ and conclude it is true"',
      '"We reject $H_{a}$"',
      '"We fail to reject $H_{0}$. There is not convincing evidence that [conclusion in context]"',
      '"The alternative hypothesis is proven false"'
    ],
    correctIndex: 2,
    explanation: 'When p-value ≥ α: "We fail to reject $H_{0}$. There is not convincing evidence that [state the alternative in context]." We never "accept $H_{0}$" — we simply lack evidence to reject it.',
    partNumber: 5,
    partTitle: 'Conclusions & Decisions'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'tp-ent-6a',
    question: 'In a survey of 200 voters, 114 support a candidate. To test $H_{0}$: p = 0.5 vs $H_{a}$: p > 0.5, the test statistic is approximately:',
    options: [
      'z ≈ 0.57',
      'z ≈ 1.98',
      'z ≈ 2.83',
      'z ≈ 0.07'
    ],
    correctIndex: 1,
    explanation: 'p̂ = 114/200 = 0.57. z = (0.57 − 0.5) / $\\sqrt{0.5 \\times 0.5/200}$ = 0.07 / $\\sqrt{0.00125}$ = 0.07 / 0.03536 ≈ 1.98.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'tp-ent-6b',
    question: 'When should the significance level α be chosen?',
    options: [
      'After seeing the p-value, to ensure significance',
      'After collecting the data but before analysis',
      'BEFORE collecting data, to prevent bias in the decision',
      'It doesn\'t matter when α is chosen'
    ],
    correctIndex: 2,
    explanation: 'The significance level α must be chosen BEFORE collecting data. Choosing α after seeing the p-value would allow a researcher to manipulate the decision, undermining the integrity of the test.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: AP Review & Applications
  {
    id: 'tp-ent-7a',
    question: 'A large sample detects a difference of 0.001 in proportions as statistically significant. What should be considered?',
    options: [
      'The test must be wrong since the difference is so small',
      'Statistical significance does not imply practical significance — a large sample can detect trivially small differences',
      'The result proves the difference is important',
      'The p-value must be wrong'
    ],
    correctIndex: 1,
    explanation: 'Statistical significance doesn\'t imply practical significance. With a very large sample, even trivially small differences can produce small p-values. Always consider whether a statistically significant difference is meaningful in context.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'tp-ent-7b',
    question: 'A complete significance test on the AP exam must include:',
    options: [
      'Only the p-value and conclusion',
      'Hypotheses, conditions check, test statistic, p-value, and conclusion in context',
      'Only the test statistic and decision',
      'A confidence interval and a histogram'
    ],
    correctIndex: 1,
    explanation: 'A complete AP exam significance test requires: (1) state hypotheses, (2) check conditions, (3) name the test and calculate the test statistic, (4) find the p-value, and (5) state the conclusion in context.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Hypotheses for Proportions' },
    { partNumber: 2, partTitle: 'One-Sample z-Test' },
    { partNumber: 3, partTitle: 'Two-Sample z-Test' },
    { partNumber: 4, partTitle: 'P-Values' },
    { partNumber: 5, partTitle: 'Conclusions & Decisions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
