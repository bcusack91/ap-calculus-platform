/**
 * Entrance Quiz — Interpreting Confidence Intervals (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Correct Interpretation
  {
    id: 'ici-ent-1a',
    question: 'Which is the correct interpretation of a 90% confidence interval (12.3, 15.7) for a population mean μ?',
    options: [
      '90% of the sample data falls between 12.3 and 15.7',
      'There is a 90% probability that μ is between 12.3 and 15.7',
      'We are 90% confident that the true population mean μ is between 12.3 and 15.7',
      'The population mean μ is 14.0 with 90% accuracy'
    ],
    correctIndex: 2,
    explanation: 'The correct interpretation is: "We are 90% confident that the true population mean μ is between 12.3 and 15.7." This reflects the confidence in the method, not a probability statement about μ.',
    partNumber: 1,
    partTitle: 'Correct Interpretation'
  },
  {
    id: 'ici-ent-1b',
    question: 'A confidence interval for a population proportion p is (0.42, 0.58). This interval is about:',
    options: [
      'The proportion of the sample that has the characteristic',
      'The range of individual data values in the population',
      'The true population parameter p',
      'The probability of selecting a particular individual'
    ],
    correctIndex: 2,
    explanation: 'A confidence interval is about the PARAMETER (the true population proportion p), not about individual observations or sample statistics.',
    partNumber: 1,
    partTitle: 'Correct Interpretation'
  },

  // Part 2: Confidence Level Definition
  {
    id: 'ici-ent-2a',
    question: 'What does "95% confidence" mean in the context of confidence intervals?',
    options: [
      'There is a 95% chance that μ is in this particular interval',
      'If we repeated the sampling process many times, about 95% of the resulting intervals would contain the true parameter',
      '95% of all sample means fall within the interval',
      'The sample was collected with 95% precision'
    ],
    correctIndex: 1,
    explanation: '95% confidence means that if we repeated the sampling process many times, about 95% of the resulting intervals would contain the true parameter. It describes the long-run success rate of the method.',
    partNumber: 2,
    partTitle: 'Confidence Level Definition'
  },
  {
    id: 'ici-ent-2b',
    question: 'The confidence level describes:',
    options: [
      'The probability that a specific interval contains the parameter',
      'The percentage of data within the interval',
      'The long-run success rate of the method used to construct the interval',
      'The precision of the point estimate'
    ],
    correctIndex: 2,
    explanation: 'The confidence level describes the long-run success rate of the METHOD. Over many repetitions of the sampling and interval construction process, that percentage of intervals will capture the true parameter.',
    partNumber: 2,
    partTitle: 'Confidence Level Definition'
  },

  // Part 3: Margin of Error
  {
    id: 'ici-ent-3a',
    question: 'The margin of error of a confidence interval is calculated as:',
    options: [
      'Sample mean minus population mean',
      'Critical value × standard error',
      'Standard deviation ÷ sample size',
      'Upper bound minus lower bound'
    ],
    correctIndex: 1,
    explanation: 'Margin of error = (critical value) × (standard error). It determines the width of the confidence interval — the interval extends one margin of error above and below the point estimate.',
    partNumber: 3,
    partTitle: 'Margin of Error'
  },
  {
    id: 'ici-ent-3b',
    question: 'Which of the following will DECREASE the margin of error?',
    options: [
      'Increasing the confidence level from 90% to 99%',
      'Decreasing the sample size',
      'Increasing the sample size',
      'Increasing the population standard deviation'
    ],
    correctIndex: 2,
    explanation: 'The margin of error decreases with larger n (since SE = s/√n gets smaller), lower confidence level (smaller critical value), or smaller variability.',
    partNumber: 3,
    partTitle: 'Margin of Error'
  },

  // Part 4: What CIs Tell Us
  {
    id: 'ici-ent-4a',
    question: 'A 95% confidence interval for μ is (40, 60). Which statement is correct?',
    options: [
      'The population mean μ is definitely 50',
      'Values between 40 and 60 are plausible values of μ, while values outside are not well supported',
      '95% of the population falls between 40 and 60',
      'The next sample mean will be between 40 and 60'
    ],
    correctIndex: 1,
    explanation: 'If a 95% CI for μ is (40, 60), then values within the interval (like 50) are plausible values of μ, but values outside the interval are not well supported by the data at that confidence level.',
    partNumber: 4,
    partTitle: 'What CIs Tell Us'
  },
  {
    id: 'ici-ent-4b',
    question: 'A 95% confidence interval for (μ₁ − μ₂) is (2.1, 8.5). What can we conclude?',
    options: [
      'There is no significant difference between the two means',
      'The interval suggests μ₁ > μ₂ at the 95% confidence level because the entire interval is above 0',
      'μ₁ is exactly 5.3 larger than μ₂',
      'We need a larger sample to draw any conclusion'
    ],
    correctIndex: 1,
    explanation: 'A CI for (μ₁ − μ₂) that is entirely above 0 suggests μ₁ > μ₂ at that confidence level. Since 0 is not in the interval, a difference of 0 (no difference) is not a plausible value.',
    partNumber: 4,
    partTitle: 'What CIs Tell Us'
  },

  // Part 5: Common Misinterpretations
  {
    id: 'ici-ent-5a',
    question: 'A student says: "There is a 95% probability that μ is in this interval." Why is this WRONG?',
    options: [
      'The probability should be 90%, not 95%',
      'The parameter μ is fixed — it is either in the interval or not; the 95% refers to the method, not this interval',
      'We can never make probability statements about intervals',
      'The correct probability depends on the sample size'
    ],
    correctIndex: 1,
    explanation: 'The parameter μ is a fixed value — it is either in the interval or it is not. The 95% describes the long-run capture rate of the method, not the probability for any single interval.',
    partNumber: 5,
    partTitle: 'Common Misinterpretations'
  },
  {
    id: 'ici-ent-5b',
    question: 'Which statement is a common MISINTERPRETATION of a confidence interval?',
    options: [
      '"We are 95% confident that the true mean is between 10 and 20"',
      '"If we repeated this process many times, about 95% of intervals would contain μ"',
      '"95% of the data falls within this interval"',
      '"The interval provides a range of plausible values for the population mean"'
    ],
    correctIndex: 2,
    explanation: '"95% of the data falls within this interval" is WRONG. Confidence intervals are about the PARAMETER (population mean or proportion), not about individual data values.',
    partNumber: 5,
    partTitle: 'Common Misinterpretations'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'ici-ent-6a',
    question: 'A researcher constructs a 99% CI and a 95% CI from the same data. Which interval is wider?',
    options: [
      'The 95% CI',
      'The 99% CI',
      'They are the same width',
      'It depends on the sample size'
    ],
    correctIndex: 1,
    explanation: 'A 99% CI is wider than a 95% CI for the same data because higher confidence requires casting a wider net to be more certain of capturing the true parameter.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'ici-ent-6b',
    question: 'Two researchers use the same data but construct intervals at different confidence levels. What do they have in common?',
    options: [
      'The same width',
      'The same margin of error',
      'The same point estimate (center of the interval)',
      'The same critical value'
    ],
    correctIndex: 2,
    explanation: 'With the same data, both researchers get the same point estimate (x̄ or p̂) — the center of the interval. However, different confidence levels produce different critical values and therefore different widths.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: AP Review & Applications
  {
    id: 'ici-ent-7a',
    question: 'On the AP Statistics exam, which aspect of CI interpretation is most critical to get right?',
    options: [
      'Calculating the exact numerical value',
      'Using the exact wording template: "We are C% confident that the true [parameter] is between ___ and ___"',
      'Showing all calculator steps',
      'Converting to a hypothesis test'
    ],
    correctIndex: 1,
    explanation: 'On the AP exam, the exact wording of the interpretation is critical. Practice the template: "We are C% confident that the true [parameter in context] is between ___ and ___."',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'ici-ent-7b',
    question: 'A CI for (μ₁ − μ₂) is (−3.2, 1.8). Does this provide convincing evidence that the two means differ?',
    options: [
      'Yes, because the interval contains negative values',
      'Yes, because the interval is wide',
      'No, because 0 is contained in the interval, so no difference is a plausible value',
      'No, because both endpoints are small numbers'
    ],
    correctIndex: 2,
    explanation: 'Since 0 is inside the interval (−3.2, 1.8), a difference of 0 (no difference) is a plausible value. The CI does not provide convincing evidence that the means differ.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Correct Interpretation' },
    { partNumber: 2, partTitle: 'Confidence Level Definition' },
    { partNumber: 3, partTitle: 'Margin of Error' },
    { partNumber: 4, partTitle: 'What CIs Tell Us' },
    { partNumber: 5, partTitle: 'Common Misinterpretations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
