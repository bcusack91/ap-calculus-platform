/**
 * Entrance Quiz — SAT Problem Solving & Data Analysis (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ── Part 1: Ratios & Proportions ──────────────────
  {
    id: 'spsd-ent-1a',
    question:
      'A map uses a scale of 1 inch : 25 miles. If two cities are 3.5 inches apart on the map, what is the actual distance between them?',
    options: [
      '71.5 miles',
      '82.5 miles',
      '87.5 miles',
      '75.0 miles',
    ],
    correctIndex: 2,
    explanation:
      'Set up the proportion: 1/25 = 3.5/x → x = 3.5 × 25 = 87.5 miles. Proportional reasoning: multiply the map distance by the scale factor.',
    partNumber: 1,
    partTitle: 'Ratios & Proportions',
  },
  {
    id: 'spsd-ent-1b',
    question:
      'In a class, the ratio of boys to girls is 3:5. If there are 40 students total, how many are girls?',
    options: [
      '15',
      '20',
      '25',
      '30',
    ],
    correctIndex: 2,
    explanation:
      'Total ratio parts = 3 + 5 = 8. Girls = (5/8) × 40 = 25. Boys = (3/8) × 40 = 15. Check: 15 + 25 = 40 ✓.',
    partNumber: 1,
    partTitle: 'Ratios & Proportions',
  },

  // ── Part 2: Percentages & Change ──────────────────
  {
    id: 'spsd-ent-2a',
    question:
      'A jacket originally costs $80. It is marked down 25%, then marked down an additional 10% off the sale price. What is the final price?',
    options: [
      '$50.00',
      '$52.00',
      '$54.00',
      '$56.00',
    ],
    correctIndex: 2,
    explanation:
      'After first markdown: $\\$80$ × 0.75 = $\\$60$. After second markdown: $\\$60$ × 0.90 = $\\$54$. Note that a 25% + 10% discount does NOT equal a 35% discount—each percentage is applied to the running total.',
    partNumber: 2,
    partTitle: 'Percentages & Change',
  },
  {
    id: 'spsd-ent-2b',
    question:
      'A town\'s population was 12,000 in 2010 and 15,600 in 2020. What was the percentage increase?',
    options: [
      '23%',
      '25%',
      '30%',
      '36%',
    ],
    correctIndex: 2,
    explanation:
      'Percentage increase = [(New − Old)/Old] × 100 = [(15,600 − 12,000)/12,000] × 100 = (3,600/12,000) × 100 = 30%.',
    partNumber: 2,
    partTitle: 'Percentages & Change',
  },

  // ── Part 3: Data Tables ───────────────────────────
  {
    id: 'spsd-ent-3a',
    question:
      'A table shows survey results: 60 students prefer math, 40 prefer English, and 20 prefer science. What percentage of students prefer English?',
    options: [
      '25%',
      '33.3%',
      '40%',
      '50%',
    ],
    correctIndex: 1,
    explanation:
      'Total students = 60 + 40 + 20 = 120. Percentage preferring English = (40/120) × 100 = 33.3%.',
    partNumber: 3,
    partTitle: 'Data Tables',
  },
  {
    id: 'spsd-ent-3b',
    question:
      'A two-way table shows 200 surveyed people. Of 120 women, 80 exercise regularly. Of 80 men, 40 exercise regularly. What fraction of all surveyed people exercise regularly?',
    options: [
      '1/2',
      '2/5',
      '3/5',
      '3/4',
    ],
    correctIndex: 2,
    explanation:
      'Total who exercise regularly: 80 (women) + 40 (men) = 120 out of 200 total. Fraction = 120/200 = 3/5.',
    partNumber: 3,
    partTitle: 'Data Tables',
  },

  // ── Part 4: Graphs & Models ───────────────────────
  {
    id: 'spsd-ent-4a',
    question:
      'A scatter plot shows a strong positive correlation between hours studied and test scores. Which statement best describes this relationship?',
    options: [
      'More hours studied causes higher test scores.',
      'As hours studied increase, test scores tend to increase.',
      'Every additional hour of studying adds exactly 5 points to the test score.',
      'Students who study more are more intelligent.',
    ],
    correctIndex: 1,
    explanation:
      'Correlation describes a tendency, not a guaranteed causal relationship. Option B correctly states that scores "tend to increase"—the language of correlation. Option A implies causation (not established by correlation), and Option C implies a perfectly linear relationship the scatter plot may not show.',
    partNumber: 4,
    partTitle: 'Graphs & Models',
  },
  {
    id: 'spsd-ent-4b',
    question:
      'A line of best fit for a data set has the equation y = 2.5x + 10, where x is years since 2010 and y is sales (in thousands). What does the y-intercept represent?',
    options: [
      'Sales increase by $10,000 each year.',
      'Sales in 2010 were approximately $10,000.',
      'Sales will reach $10,000 in 2.5 years.',
      'Each additional year increases sales by $10,000.',
    ],
    correctIndex: 1,
    explanation:
      'The y-intercept (10) is the value of y when x = 0. Since x = 0 corresponds to 2010, the y-intercept represents sales of 10 (thousands) = $\\$10{,}000$ in 2010. The slope (2.5) represents the annual increase of $\\$2{,}500$.',
    partNumber: 4,
    partTitle: 'Graphs & Models',
  },

  // ── Part 5: Statistical Measures ──────────────────
  {
    id: 'spsd-ent-5a',
    question:
      'The data set {4, 7, 7, 9, 13} has which of the following: mean, median, and mode?',
    options: [
      'Mean = 8, Median = 7, Mode = 7',
      'Mean = 7, Median = 8, Mode = 9',
      'Mean = 8, Median = 9, Mode = 7',
      'Mean = 9, Median = 7, Mode = 8',
    ],
    correctIndex: 0,
    explanation:
      'Mean = (4 + 7 + 7 + 9 + 13)/5 = 40/5 = 8. Median (middle value of ordered set): 7. Mode (most frequent): 7 (appears twice). All three values match option A.',
    partNumber: 5,
    partTitle: 'Statistical Measures',
  },
  {
    id: 'spsd-ent-5b',
    question:
      'A data set has a mean of 50 and a standard deviation of 5. A second data set has a mean of 50 and a standard deviation of 15. What does this tell us?',
    options: [
      'The second data set has higher average values.',
      'The first data set is more spread out around its mean.',
      'The second data set is more spread out around its mean.',
      'Both data sets have the same spread because they have the same mean.',
    ],
    correctIndex: 2,
    explanation:
      'Standard deviation measures spread (variability) around the mean. A higher standard deviation means more spread. The second data set (SD = 15) is more spread out than the first (SD = 5), even though both have the same mean of 50.',
    partNumber: 5,
    partTitle: 'Statistical Measures',
  },

  // ── Part 6: Problem-Solving Workshop ─────────────
  {
    id: 'spsd-ent-6a',
    question:
      'A study finds that people who eat breakfast score higher on cognitive tests. A journalist writes: "Eating breakfast makes you smarter." What error does the journalist make?',
    options: [
      'Confusing median with mean.',
      'Inferring causation from correlation.',
      'Ignoring the standard deviation of the data.',
      'Using a biased sample.',
    ],
    correctIndex: 1,
    explanation:
      'The study shows an association (correlation) between breakfast eating and test scores, but cannot establish that breakfast causes higher scores—other factors (e.g., overall health habits, socioeconomic status) could explain the relationship. Claiming causation from correlation is a classic data analysis error.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'spsd-ent-6b',
    question:
      'The prices of 5 houses in a neighborhood are: $\\$200$K, $\\$210$K, $\\$220$K, $\\$215$K, and $\\$1{,}200$K. Which measure of center best represents the typical home price?',
    options: [
      'Mean, because it uses all data points.',
      'Mode, because it is the most common value.',
      'Median, because the outlier ($1,200K) skews the mean.',
      'Range, because it captures the full spread of prices.',
    ],
    correctIndex: 2,
    explanation:
      'The $\\$1{,}200$K outlier dramatically inflates the mean (≈$\\$409$K), making it unrepresentative of the typical home. The median ($\\$215$K) is resistant to outliers and better represents the center of this skewed data set. Range is a measure of spread, not center.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ── Part 7: Review & Applications ────────────────
  {
    id: 'spsd-ent-7a',
    question:
      'A poll of 500 randomly selected voters finds that 55% plan to vote for Candidate A, with a margin of error of ±3%. What can you conclude?',
    options: [
      'Candidate A will definitely win.',
      'Exactly 55% of all voters prefer Candidate A.',
      'Between 52% and 58% of all voters likely prefer Candidate A.',
      'At least 500 voters prefer Candidate A.',
    ],
    correctIndex: 2,
    explanation:
      'A margin of error of ±3% means we are confident (at the given confidence level) that the true population percentage falls within 55% ± 3%, i.e., between 52% and 58%. This does not guarantee any specific outcome.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'spsd-ent-7b',
    question:
      'Which type of study design can establish a cause-and-effect relationship between variables?',
    options: [
      'Observational study',
      'Survey',
      'Randomized controlled experiment',
      'Case study',
    ],
    correctIndex: 2,
    explanation:
      'A randomized controlled experiment—where subjects are randomly assigned to treatment and control groups—is the only study design that can establish causation. Observational studies, surveys, and case studies can identify correlations but cannot control for confounding variables.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Ratios & Proportions' },
    { partNumber: 2, partTitle: 'Percentages & Change' },
    { partNumber: 3, partTitle: 'Data Tables' },
    { partNumber: 4, partTitle: 'Graphs & Models' },
    { partNumber: 5, partTitle: 'Statistical Measures' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
