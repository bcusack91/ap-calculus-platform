/**
 * Entrance Quiz — Chi-Square Tests (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Chi-Square Distribution
  {
    id: 'chi-ent-1a',
    question: 'Which describes the shape of the chi-square distribution?',
    options: [
      'Symmetric and bell-shaped for all degrees of freedom',
      'Right-skewed, non-negative, with shape depending on degrees of freedom',
      'Left-skewed and centered at zero',
      'Uniform between 0 and 1'
    ],
    correctIndex: 1,
    explanation: 'The chi-square distribution is always non-negative and right-skewed. Its exact shape depends on the degrees of freedom.',
    partNumber: 1,
    partTitle: 'Chi-Square Distribution'
  },
  {
    id: 'chi-ent-1b',
    question: 'What happens to the chi-square distribution as the degrees of freedom increase?',
    options: [
      'It becomes more right-skewed',
      'It shifts to the left',
      'It becomes more symmetric and approximately bell-shaped',
      'It becomes uniform'
    ],
    correctIndex: 2,
    explanation: 'As degrees of freedom increase, the chi-square distribution becomes more symmetric and approaches a bell shape, though it is always non-negative.',
    partNumber: 1,
    partTitle: 'Chi-Square Distribution'
  },
  // Part 2: Goodness of Fit Test
  {
    id: 'chi-ent-2a',
    question: 'A chi-square goodness of fit test is used to determine whether:',
    options: [
      'Two quantitative variables are linearly related',
      'A distribution of a categorical variable matches a hypothesized distribution',
      'Two population means are equal',
      'A regression model fits the data well'
    ],
    correctIndex: 1,
    explanation: 'The goodness of fit test checks whether the observed distribution of a single categorical variable matches a specified (hypothesized) distribution.',
    partNumber: 2,
    partTitle: 'Goodness of Fit Test'
  },
  {
    id: 'chi-ent-2b',
    question: 'In a goodness of fit test with 5 categories, what are the degrees of freedom?',
    options: [
      'df = 5',
      'df = 4',
      'df = 10',
      'df = 6'
    ],
    correctIndex: 1,
    explanation: 'For a goodness of fit test, df = number of categories − 1. With 5 categories, df = 5 − 1 = 4. The test statistic is $\\chi^{2}$ = Σ[$(O - E)^{2}$ / E].',
    partNumber: 2,
    partTitle: 'Goodness of Fit Test'
  },
  // Part 3: Test of Independence
  {
    id: 'chi-ent-3a',
    question: 'A chi-square test of independence tests whether:',
    options: [
      'The means of two groups are different',
      'Two categorical variables are associated in a two-way table',
      'A single proportion equals a hypothesized value',
      'The slope of a regression line is zero'
    ],
    correctIndex: 1,
    explanation: 'The test of independence examines whether two categorical variables are associated (not independent) using data displayed in a two-way table.',
    partNumber: 3,
    partTitle: 'Test of Independence'
  },
  {
    id: 'chi-ent-3b',
    question: 'In a chi-square test of independence, what are the hypotheses?',
    options: [
      '$H_{0}$: $\\mu_{1}$ = $\\mu_{2}$; $H_{a}$: $\\mu_{1}$ ≠ $\\mu_{2}$',
      '$H_{0}$: the two variables are independent; $H_{a}$: the two variables are NOT independent (associated)',
      '$H_{0}$: $p_{1}$ = $p_{2}$; $H_{a}$: $p_{1}$ ≠ $p_{2}$',
      '$H_{0}$: the distribution fits; $H_{a}$: the distribution does not fit'
    ],
    correctIndex: 1,
    explanation: 'The null hypothesis states the two categorical variables are independent (no association). The alternative states they are not independent — they are associated.',
    partNumber: 3,
    partTitle: 'Test of Independence'
  },
  // Part 4: Two-Way Tables
  {
    id: 'chi-ent-4a',
    question: 'A two-way table has 3 rows and 4 columns. What are the degrees of freedom for a chi-square test of independence?',
    options: [
      'df = 12',
      'df = 11',
      'df = 6',
      'df = 7'
    ],
    correctIndex: 2,
    explanation: 'For a test of independence, df = (rows − 1)(columns − 1) = (3 − 1)(4 − 1) = 2 × 3 = 6.',
    partNumber: 4,
    partTitle: 'Two-Way Tables'
  },
  {
    id: 'chi-ent-4b',
    question: 'In a two-way table, the row totals and column totals are called:',
    options: [
      'Joint frequencies',
      'Conditional frequencies',
      'Marginal frequencies',
      'Expected frequencies'
    ],
    correctIndex: 2,
    explanation: 'The row and column totals in a two-way table are marginal frequencies. The individual cell counts are joint frequencies, and expected frequencies are computed for the chi-square test.',
    partNumber: 4,
    partTitle: 'Two-Way Tables'
  },
  // Part 5: Expected Frequencies
  {
    id: 'chi-ent-5a',
    question: 'How is the expected count for a cell in a two-way table calculated?',
    options: [
      'Expected = row total + column total',
      'Expected = (row total × column total) / grand total',
      'Expected = grand total / number of cells',
      'Expected = observed count × 2'
    ],
    correctIndex: 1,
    explanation: 'The expected count for each cell is (row total × column total) / grand total. This is the count you would expect if the two variables were independent.',
    partNumber: 5,
    partTitle: 'Expected Frequencies'
  },
  {
    id: 'chi-ent-5b',
    question: 'What is the condition on expected counts for the chi-square test to be valid?',
    options: [
      'All observed counts must be at least 10',
      'All expected counts must be at least 5',
      'The total sample size must be at least 100',
      'Each cell must have at least 1 observation'
    ],
    correctIndex: 1,
    explanation: 'The chi-square approximation is valid when all expected counts are at least 5. If some expected counts are too small, consider combining categories.',
    partNumber: 5,
    partTitle: 'Expected Frequencies'
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'chi-ent-6a',
    question: 'You calculate $\\chi^{2}$ = 15.3 with df = 4. The critical value at α = 0.01 is 13.28. What do you conclude?',
    options: [
      'Fail to reject $H_{0}$ because $\\chi^{2}$ < critical value',
      'Reject $H_{0}$ because $\\chi^{2}$ = 15.3 > 13.28, providing evidence that the distribution differs from expected',
      'Reject $H_{0}$ only if using α = 0.05',
      'The test is invalid because $\\chi^{2}$ is too large'
    ],
    correctIndex: 1,
    explanation: 'A large $\\chi^{2}$ value (exceeding the critical value) means a small p-value, providing evidence that the observed distribution differs significantly from the expected distribution.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'chi-ent-6b',
    question: 'Why is the chi-square test always right-tailed?',
    options: [
      'Because negative $\\chi^{2}$ values are possible but rare',
      'Because larger $\\chi^{2}$ values indicate more departure from $H_{0}$, and $\\chi^{2}$ is always non-negative',
      'Because the alternative hypothesis is always one-sided',
      'Because left-tailed tests are used only for t-tests'
    ],
    correctIndex: 1,
    explanation: 'The chi-square statistic is a sum of squared terms, so it is always ≥ 0. Larger values indicate greater departure from what is expected under $H_{0}$, making the test always right-tailed.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  // Part 7: AP Review & Applications
  {
    id: 'chi-ent-7a',
    question: 'On the AP exam, which steps should you show when performing a chi-square test?',
    options: [
      'Only the p-value and conclusion',
      'Show the formula, calculate $\\chi^{2}$, state df, find the p-value, and conclude in context',
      'Only the hypotheses and conclusion',
      'Only the expected counts table'
    ],
    correctIndex: 1,
    explanation: 'For full credit on the AP exam, show the chi-square formula, compute the test statistic, state the degrees of freedom, report the p-value, and state a conclusion in context.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'chi-ent-7b',
    question: 'A chi-square test gives a significant result. What can you NOT conclude?',
    options: [
      'That the observed and expected distributions differ',
      'That the two variables are associated',
      'Exactly which categories or cells are responsible for the difference',
      'That the p-value is small'
    ],
    correctIndex: 2,
    explanation: 'Chi-square tests tell you that a difference exists but do NOT identify where the difference is. To explore which cells contribute most, examine the individual $(O - E)^{2}$ / E terms.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Chi-Square Distribution' },
    { partNumber: 2, partTitle: 'Goodness of Fit Test' },
    { partNumber: 3, partTitle: 'Test of Independence' },
    { partNumber: 4, partTitle: 'Two-Way Tables' },
    { partNumber: 5, partTitle: 'Expected Frequencies' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
