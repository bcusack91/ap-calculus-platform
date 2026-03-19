/**
 * Entrance Quiz — Normal Distributions (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'nd-ent-1a', question: 'Which of the following best describes the shape and center of a normal curve?', options: ['Skewed right with the mean at the peak', 'Symmetric and bell-shaped with mean = median = mode at the center', 'Uniform with the mean at the left edge', 'Bimodal with two peaks at the mean and median'], correctIndex: 1, explanation: 'Normal curves are symmetric, bell-shaped, and the mean, median, and mode are all equal and located at the center of the distribution.', partNumber: 1, partTitle: 'Properties of Normal Curves' },
  { id: 'nd-ent-1b', question: 'What is the total area under a normal distribution curve?', options: ['0.5', '0.95', '1', 'It depends on the standard deviation'], correctIndex: 2, explanation: 'The total area under any normal distribution curve equals 1 (or 100%), representing all possible outcomes.', partNumber: 1, partTitle: 'Properties of Normal Curves' },
  { id: 'nd-ent-2a', question: 'How is a z-score calculated?', options: ['z = σ / (x − μ)', 'z = (x − μ) / σ', 'z = (μ − x) / σ', 'z = x · σ + μ'], correctIndex: 1, explanation: 'A z-score is calculated as z = (x − μ) / σ and tells how many standard deviations x is from the mean.', partNumber: 2, partTitle: 'Z-Scores' },
  { id: 'nd-ent-2b', question: 'A data value has a z-score of −1.4. What does this tell you?', options: ['The value is 1.4 standard deviations above the mean', 'The value is exactly at the mean', 'The value is 1.4 standard deviations below the mean', 'The value is in the top 14% of the distribution'], correctIndex: 2, explanation: 'A negative z-score means the value is below the mean. z = −1.4 means the value is 1.4 standard deviations below the mean. z = 0 would mean exactly at the mean.', partNumber: 2, partTitle: 'Z-Scores' },
  { id: 'nd-ent-3a', question: 'When using Table A (the standard normal table), the table entry for a given z-score gives:', options: ['The area to the right of z', 'The area between z and −z', 'The area to the left of z', 'The height of the curve at z'], correctIndex: 2, explanation: 'Table A (the standard normal table) gives the area to the LEFT of a given z-score.', partNumber: 3, partTitle: 'Standard Normal Table' },
  { id: 'nd-ent-3b', question: 'How do you find P(z > 1.25) using the standard normal table?', options: ['Look up 1.25 directly in the table', '1 − P(z < 1.25)', 'P(z < 1.25) + P(z < −1.25)', 'P(z < 1.25) × 2'], correctIndex: 1, explanation: 'P(z > a) = 1 − P(z < a). To find the area to the right, subtract the table value (left area) from 1. To find area between two z-scores, subtract the smaller area from the larger.', partNumber: 3, partTitle: 'Standard Normal Table' },
  { id: 'nd-ent-4a', question: 'According to the empirical rule, approximately what percent of data in a normal distribution falls within 2 standard deviations of the mean?', options: ['68%', '95%', '99.7%', '50%'], correctIndex: 1, explanation: 'The empirical rule states: ~68% within 1σ, ~95% within 2σ, and ~99.7% within 3σ of the mean.', partNumber: 4, partTitle: 'Empirical Rule' },
  { id: 'nd-ent-4b', question: 'In a normal distribution, approximately what percent of values lie above z = 2?', options: ['5%', '2.5%', '16%', '0.15%'], correctIndex: 1, explanation: 'About 95% of values fall within 2σ, so about 5% fall outside. Since the distribution is symmetric, about 2.5% lie above z = 2.', partNumber: 4, partTitle: 'Empirical Rule' },
  { id: 'nd-ent-5a', question: 'To find the data value corresponding to the 75th percentile, you should use:', options: ['z = (x − μ) / σ and solve for z', 'Inverse normal: x = μ + z · σ, where z is the z-score for the 75th percentile', 'x = σ − μ · z', 'The empirical rule only'], correctIndex: 1, explanation: 'To find the value corresponding to a given percentile, use inverse normal: x = μ + z · σ, where z is looked up from the table for that percentile.', partNumber: 5, partTitle: 'Normal Probability Calculations' },
  { id: 'nd-ent-5b', question: 'If a student scores at the 90th percentile on a test, what does that mean?', options: ['The student got 90% of the questions correct', '90% of test-takers scored higher than this student', '90% of values fall at or below this student\'s score', 'The student is in the bottom 10%'], correctIndex: 2, explanation: 'The 90th percentile means 90% of values fall at or below that value.', partNumber: 5, partTitle: 'Normal Probability Calculations' },
  { id: 'nd-ent-6a', question: 'A test has μ = 500 and σ = 100. A student scores 650. What is the approximate percentile?', options: ['About 84th percentile', 'About 93rd percentile', 'About 75th percentile', 'About 99th percentile'], correctIndex: 1, explanation: 'z = (650 − 500) / 100 = 1.5. Looking up z = 1.5 in the table gives approximately 0.9332, so the student is at about the 93rd percentile.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'nd-ent-6b', question: 'On a normal probability plot, data that is approximately normally distributed will show:', options: ['A U-shaped pattern', 'Points falling roughly along a straight line', 'A curved S-shape', 'Randomly scattered points with no pattern'], correctIndex: 1, explanation: 'On a normal probability plot, if points fall roughly along a straight line, the distribution is approximately normal.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'nd-ent-7a', question: 'Why is checking for normality important in AP Statistics?', options: ['It is never actually checked in practice', 'It is a condition required for many inference procedures', 'It guarantees the sample mean equals the population mean', 'It only matters for categorical data'], correctIndex: 1, explanation: 'Checking normality is a condition for many inference procedures in AP Statistics, such as confidence intervals and hypothesis tests.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'nd-ent-7b', question: 'A normal distribution is completely described by which two parameters?', options: ['Median and range', 'Mean (μ) and standard deviation (σ)', 'Mode and variance', 'Q1 and Q3'], correctIndex: 1, explanation: 'The normal distribution is fully described by just two parameters: the mean (μ) and the standard deviation (σ).', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Properties of Normal Curves' },
    { partNumber: 2, partTitle: 'Z-Scores' },
    { partNumber: 3, partTitle: 'Standard Normal Table' },
    { partNumber: 4, partTitle: 'Empirical Rule' },
    { partNumber: 5, partTitle: 'Normal Probability Calculations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
