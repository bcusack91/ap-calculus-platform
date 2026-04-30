/**
 * Entrance Quiz — Inference for Chi-Square (AP Statistics)
 * 8 questions · 4 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Categorical vs Quantitative Data
  {
    id: 'inchi-ent-1a',
    question: 'Which is an example of categorical data?',
    options: [
      'Student heights in inches',
      'Test scores from 0 to 100',
      'Eye color: blue, brown, green',
      'Temperature readings in Celsius'
    ],
    correctIndex: 2,
    explanation: 'Categorical data represents categories or groups (eye color, gender, region). Quantitative data is numerical (height, score, temperature).',
    partNumber: 1,
    partTitle: 'Categorical vs Quantitative Data'
  },
  {
    id: 'inchi-ent-1b',
    question: 'Chi-square tests are used with:',
    options: [
      'Only quantitative variables',
      'Only categorical variables',
      'Only paired data',
      'Any type of data'
    ],
    correctIndex: 1,
    explanation: 'Chi-square tests (goodness-of-fit, independence, homogeneity) analyze categorical data in frequency tables.',
    partNumber: 1,
    partTitle: 'Categorical vs Quantitative Data'
  },

  // Part 2: Expected vs Observed Counts
  {
    id: 'inchi-ent-2a',
    question: 'What is an "observed count" in a chi-square test?',
    options: [
      'The number of observations predicted by the model',
      'The actual count of observations in each category from the data',
      'The difference between two frequencies',
      'The proportion of the sample'
    ],
    correctIndex: 1,
    explanation: 'The observed count (O) is the actual frequency in each cell, directly from the sample data. The expected count (E) is calculated from the null hypothesis.',
    partNumber: 2,
    partTitle: 'Expected vs Observed Counts'
  },
  {
    id: 'inchi-ent-2b',
    question: 'In a chi-square test, the expected count is based on:',
    options: [
      'The sample data only',
      'The population proportion before the experiment',
      'Assuming H₀ is true',
      'The difference from zero'
    ],
    correctIndex: 2,
    explanation: 'Expected counts are calculated assuming H₀ (the hypothesized relationship or independence) is true. They show what we would see if H₀ held.',
    partNumber: 2,
    partTitle: 'Expected vs Observed Counts'
  },

  // Part 3: Chi-Square Statistic and Concept
  {
    id: 'inchi-ent-3a',
    question: 'The chi-square test statistic is calculated as:',
    options: [
      'χ² = Σ(E − O)² / O',
      'χ² = Σ(O − E)² / E',
      'χ² = (O − E) / E',
      'χ² = Σ(O − E)'
    ],
    correctIndex: 1,
    explanation: 'χ² = Σ[(O − E)² / E]. This compares observed and expected counts, with larger differences contributing more to the statistic.',
    partNumber: 3,
    partTitle: 'Chi-Square Statistic and Concept'
  },
  {
    id: 'inchi-ent-3b',
    question: 'A large chi-square statistic suggests:',
    options: [
      'The data match the hypothesized distribution well',
      'The observed and expected counts are very different, providing evidence against H₀',
      'The sample size is too small',
      'All expected counts are too low'
    ],
    correctIndex: 1,
    explanation: 'A large χ² means observed counts deviate greatly from expected. This is evidence against H₀. A small χ² means observed and expected are similar.',
    partNumber: 3,
    partTitle: 'Chi-Square Statistic and Concept'
  },

  // Part 4: Degrees of Freedom and Test Types
  {
    id: 'inchi-ent-4a',
    question: 'For a goodness-of-fit test with 6 categories, what are the degrees of freedom?',
    options: [
      'df = 6',
      'df = 5',
      'df = 7',
      'df = 12'
    ],
    correctIndex: 1,
    explanation: 'For goodness-of-fit, df = number of categories − 1. With 6 categories, df = 6 − 1 = 5.',
    partNumber: 4,
    partTitle: 'Degrees of Freedom and Test Types'
  },
  {
    id: 'inchi-ent-4b',
    question: 'When should each expected count be at least 5?',
    options: [
      'As a sample size requirement before collecting data',
      'As a condition for the chi-square approximation to be valid',
      'As a threshold for rejecting H₀',
      'Only in goodness-of-fit tests, not independence tests'
    ],
    correctIndex: 1,
    explanation: 'All expected counts should be at least 5 for the chi-square distribution to approximate the true distribution. If violated, combine categories.',
    partNumber: 4,
    partTitle: 'Degrees of Freedom and Test Types'
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Categorical vs Quantitative Data' },
    { partNumber: 2, partTitle: 'Expected vs Observed Counts' },
    { partNumber: 3, partTitle: 'Chi-Square Statistic and Concept' },
    { partNumber: 4, partTitle: 'Degrees of Freedom and Test Types' },
  ]
}
