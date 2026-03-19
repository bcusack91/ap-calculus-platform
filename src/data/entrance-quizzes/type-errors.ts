/**
 * Entrance Quiz — Type I & Type II Errors and Power (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Type I Errors
  {
    id: 'te-ent-1a',
    question: 'A Type I error is:',
    options: [
      'Failing to reject a false H₀',
      'Rejecting a true H₀ (false alarm)',
      'Correctly rejecting a false H₀',
      'Correctly failing to reject a true H₀'
    ],
    correctIndex: 1,
    explanation: 'A Type I error is rejecting H₀ when it is actually true — a false alarm or false positive. The probability of a Type I error equals α, the significance level.',
    partNumber: 1,
    partTitle: 'Type I Errors'
  },
  {
    id: 'te-ent-1b',
    question: 'A pharmaceutical company concludes a new drug is effective when it actually is not. This is an example of:',
    options: [
      'A Type II error',
      'A correct decision',
      'A Type I error',
      'Insufficient power'
    ],
    correctIndex: 2,
    explanation: 'Concluding a drug works (rejecting H₀: drug has no effect) when it actually doesn\'t work (H₀ is true) is a Type I error — a false positive.',
    partNumber: 1,
    partTitle: 'Type I Errors'
  },

  // Part 2: Type II Errors
  {
    id: 'te-ent-2a',
    question: 'A Type II error is:',
    options: [
      'Rejecting H₀ when it is true',
      'Failing to reject H₀ when Hₐ is actually true (missed detection)',
      'Choosing the wrong significance level',
      'Using a one-tailed test when a two-tailed test is needed'
    ],
    correctIndex: 1,
    explanation: 'A Type II error is failing to reject H₀ when Hₐ is actually true — a missed detection or false negative. The probability of a Type II error is denoted β.',
    partNumber: 2,
    partTitle: 'Type II Errors'
  },
  {
    id: 'te-ent-2b',
    question: 'A clinical trial fails to detect that a new drug is effective when it actually is. This is an example of:',
    options: [
      'A Type I error',
      'A correct decision',
      'A Type II error',
      'Statistical significance'
    ],
    correctIndex: 2,
    explanation: 'Concluding a drug doesn\'t work (failing to reject H₀) when it actually does work (Hₐ is true) is a Type II error — a false negative.',
    partNumber: 2,
    partTitle: 'Type II Errors'
  },

  // Part 3: Power of a Test
  {
    id: 'te-ent-3a',
    question: 'The power of a test is defined as:',
    options: [
      'The probability of making a Type I error',
      '1 − β, the probability of correctly rejecting a false H₀',
      'The significance level α',
      'The probability that H₀ is true'
    ],
    correctIndex: 1,
    explanation: 'Power = 1 − β = P(correctly rejecting a false H₀). Higher power means the test is better at detecting a real effect when one exists.',
    partNumber: 3,
    partTitle: 'Power of a Test'
  },
  {
    id: 'te-ent-3b',
    question: 'Which of the following increases the power of a hypothesis test?',
    options: [
      'Decreasing the sample size',
      'Decreasing the significance level α',
      'Increasing the sample size, effect size, or α, or decreasing variability',
      'Using a two-tailed test instead of a one-tailed test'
    ],
    correctIndex: 2,
    explanation: 'Power increases with: larger sample size, larger effect size, larger α, or smaller variability (σ). These all make it easier to detect a real effect.',
    partNumber: 3,
    partTitle: 'Power of a Test'
  },

  // Part 4: Significance Level α
  {
    id: 'te-ent-4a',
    question: 'If α = 0.05, this means:',
    options: [
      'We accept a 5% chance of a Type II error',
      'We accept a 5% chance of a Type I error (rejecting a true H₀)',
      'The test has 5% power',
      '5% of the data is significant'
    ],
    correctIndex: 1,
    explanation: 'α = 0.05 means we accept a 5% risk of committing a Type I error — rejecting H₀ when it is actually true.',
    partNumber: 4,
    partTitle: 'Significance Level α'
  },
  {
    id: 'te-ent-4b',
    question: 'The choice of significance level α should be based on:',
    options: [
      'The sample size only',
      'The p-value obtained from the data',
      'Balancing the consequences of Type I and Type II errors in the given context',
      'The number of variables in the study'
    ],
    correctIndex: 2,
    explanation: 'Choosing α involves balancing the consequences of Type I vs. Type II errors. In contexts where false positives are very costly, we use a smaller α (e.g., 0.01).',
    partNumber: 4,
    partTitle: 'Significance Level α'
  },

  // Part 5: Trade-offs & Consequences
  {
    id: 'te-ent-5a',
    question: 'What happens when you decrease α (e.g., from 0.05 to 0.01)?',
    options: [
      'Both Type I and Type II error rates decrease',
      'Type I error risk decreases, but Type II error risk increases (power decreases)',
      'Type II error risk decreases, but Type I error risk increases',
      'Neither error rate changes'
    ],
    correctIndex: 1,
    explanation: 'Decreasing α reduces the risk of Type I error but increases the risk of Type II error (and decreases power). There is always a trade-off between the two error types for a fixed sample size.',
    partNumber: 5,
    partTitle: 'Trade-offs & Consequences'
  },
  {
    id: 'te-ent-5b',
    question: 'In medical screening for a dangerous disease, which type of error is typically more costly?',
    options: [
      'Type I error (false positive: telling a healthy person they\'re sick)',
      'Type II error (false negative: telling a sick person they\'re healthy)',
      'Both are equally costly',
      'Neither matters in medical testing'
    ],
    correctIndex: 1,
    explanation: 'In medical testing for dangerous diseases, Type II errors (missing a disease) may be more costly because a sick person goes untreated. However, in screening contexts, false positives also have costs. The question highlights that Type II is often more dangerous, so a larger α is used to reduce β.',
    partNumber: 5,
    partTitle: 'Trade-offs & Consequences'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'te-ent-6a',
    question: 'Consider a pregnancy test that ALWAYS returns "positive." What can be said about this test?',
    options: [
      'It has 0% power and low Type I error rate',
      'It has 100% power but an unacceptably high Type I error rate',
      'It has perfect accuracy',
      'It has a 50% Type I error rate'
    ],
    correctIndex: 1,
    explanation: 'A test that always says "positive" will correctly detect every true pregnancy (100% power, β = 0), but it will also incorrectly say every non-pregnant person is pregnant (very high Type I error rate).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'te-ent-6b',
    question: 'What is the best way to increase power without changing α?',
    options: [
      'Use a different test statistic',
      'Increase the sample size',
      'Change from two-tailed to one-tailed (only if justified)',
      'Both B and C can increase power without changing α'
    ],
    correctIndex: 3,
    explanation: 'Increasing sample size is the most common way to increase power without changing α. Switching to a one-tailed test (if scientifically justified) also increases power for that direction.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: AP Review & Applications
  {
    id: 'te-ent-7a',
    question: 'On the AP exam, how should Type I and Type II errors be described?',
    options: [
      'Using only the generic definitions',
      'In CONTEXT of the specific situation being tested',
      'Using only mathematical notation',
      'By stating the probability without context'
    ],
    correctIndex: 1,
    explanation: 'On the AP exam, always describe Type I and Type II errors in CONTEXT. For example: "A Type I error would mean concluding the new medication lowers blood pressure when it actually does not."',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'te-ent-7b',
    question: 'Why is the phrase "accept H₀" considered incorrect in statistics?',
    options: [
      'Because we should say "prove H₀" instead',
      'Because failing to reject H₀ does not prove H₀ is true — we simply lack sufficient evidence against it',
      'Because H₀ is always false',
      'Because "accept" is only used for Hₐ'
    ],
    correctIndex: 1,
    explanation: '"Fail to reject H₀" ≠ "accept H₀." We never prove H₀ is true — we simply lack sufficient evidence to reject it. The absence of evidence is not evidence of absence.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Type I Errors' },
    { partNumber: 2, partTitle: 'Type II Errors' },
    { partNumber: 3, partTitle: 'Power of a Test' },
    { partNumber: 4, partTitle: 'Significance Level α' },
    { partNumber: 5, partTitle: 'Trade-offs & Consequences' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
