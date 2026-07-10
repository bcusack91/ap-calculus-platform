/**
 * Entrance Quiz — Data & Statistics (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'sds-ent-1a', question: 'Find the mean of the data set: 4, 7, 9, 11, 14', options: ['8', '9', '10', '11'], correctIndex: 1, explanation: 'Mean = (4 + 7 + 9 + 11 + 14) / 5 = 45 / 5 = 9.', partNumber: 1, partTitle: 'Mean/Median/Mode' },
  { id: 'sds-ent-1b', question: 'Find the median of: 3, 7, 2, 9, 5', options: ['5', '6', '7', '9'], correctIndex: 0, explanation: 'Arrange in order: 2, 3, 5, 7, 9. The middle value (3rd of 5) is 5.', partNumber: 1, partTitle: 'Mean/Median/Mode' },
  { id: 'sds-ent-2a', question: 'Two data sets have the same mean. Set A has values close together; Set B has values spread far apart. Which set has a larger standard deviation?', options: ['Set A', 'Set B', 'They are equal', 'Cannot be determined'], correctIndex: 1, explanation: 'Standard deviation measures spread. Set B has values more spread out, so it has a larger standard deviation.', partNumber: 2, partTitle: 'Standard Deviation Concepts' },
  { id: 'sds-ent-2b', question: 'Which data set has a standard deviation closest to zero?', options: ['{1, 5, 9, 13}', '{3, 3, 3, 3}', '{2, 4, 6, 8}', '{0, 0, 10, 10}'], correctIndex: 1, explanation: 'Standard deviation is 0 when all values are identical. {3, 3, 3, 3} has zero deviation.', partNumber: 2, partTitle: 'Standard Deviation Concepts' },
  { id: 'sds-ent-3a', question: 'The survey table shows student subject preferences. What percent prefer math?\n\n| Subject | Students |\n| --- | --- |\n| Math | 60 |\n| English | 40 |', options: ['40%', '50%', '60%', '75%'], correctIndex: 2, explanation: 'Total = 100. Percent preferring math = 60/100 = 60%.', partNumber: 3, partTitle: 'Reading Tables' },
  { id: 'sds-ent-3b', question: 'The two-way table shows 200 students surveyed. What fraction of all students prefer science?\n\n|  | Science | Not Science | Total |\n| --- | --- | --- | --- |\n| Male | 50 | 40 | 90 |\n| Female | 60 | 50 | 110 |\n| Total | 110 | 90 | 200 |', options: ['1/2', '11/20', '9/20', '1/4'], correctIndex: 1, explanation: '50 + 60 = 110 students prefer science out of 200 total. 110/200 = 11/20. (9/20 is the fraction who do NOT prefer science.)', partNumber: 3, partTitle: 'Reading Tables' },
  { id: 'sds-ent-4a', question: 'A scatterplot shows a positive correlation between hours studied and test scores. Which statement is most accurate?', options: ['Studying causes higher scores', 'Higher scores cause more studying', 'There is a trend: more studying is associated with higher scores', 'The correlation is negative'], correctIndex: 2, explanation: 'Correlation does not imply causation. The correct statement is that more studying is associated with (not causes) higher scores.', partNumber: 4, partTitle: 'Scatterplots & Trends' },
  { id: 'sds-ent-4b', question: 'A line of best fit is drawn on a scatterplot with equation y = 2x + 3. Predict y when x = 10.', options: ['13', '20', '23', '30'], correctIndex: 2, explanation: 'y = 2(10) + 3 = 20 + 3 = 23.', partNumber: 4, partTitle: 'Scatterplots & Trends' },
  { id: 'sds-ent-5a', question: 'A bag contains 5 red and 3 blue marbles. What is the probability of drawing a red marble?', options: ['3/8', '5/8', '5/3', '1/2'], correctIndex: 1, explanation: 'P(red) = 5/(5+3) = 5/8.', partNumber: 5, partTitle: 'Probability Basics' },
  { id: 'sds-ent-5b', question: 'A six-sided die is rolled. What is the probability of rolling an even number?', options: ['1/6', '1/3', '1/2', '2/3'], correctIndex: 2, explanation: 'Even numbers on a die: 2, 4, 6 → 3 outcomes out of 6. P = 3/6 = 1/2.', partNumber: 5, partTitle: 'Probability Basics' },
  { id: 'sds-ent-6a', question: 'A data set has mean 50 and standard deviation 5. What percentage of data lies within one standard deviation of the mean in a normal distribution?', options: ['50%', '68%', '95%', '99.7%'], correctIndex: 1, explanation: 'In a normal distribution, approximately 68% of data falls within one standard deviation of the mean.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sds-ent-6b', question: 'The mean of 6 numbers is 10. Five of the numbers are 8, 9, 11, 12, and 7. What is the sixth number?', options: ['10', '11', '13', '15'], correctIndex: 2, explanation: 'Total sum = 6 × 10 = 60. Known sum = 8+9+11+12+7 = 47. Sixth number = 60 − 47 = 13.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sds-ent-7a', question: 'Which measure of center is most affected by an outlier?', options: ['Median', 'Mode', 'Mean', 'Range'], correctIndex: 2, explanation: 'The mean uses all values in its calculation, so a single extreme outlier will pull the mean significantly. The median is resistant to outliers.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'sds-ent-7b', question: 'A company surveys 500 randomly selected customers. 300 say they are satisfied. Which best estimates the percent of ALL customers who are satisfied?', options: ['40%', '60%', '50%', '30%'], correctIndex: 1, explanation: '300/500 = 60%. Since the sample is random, we can infer approximately 60% of all customers are satisfied.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Mean/Median/Mode' },
    { partNumber: 2, partTitle: 'Standard Deviation Concepts' },
    { partNumber: 3, partTitle: 'Reading Tables' },
    { partNumber: 4, partTitle: 'Scatterplots & Trends' },
    { partNumber: 5, partTitle: 'Probability Basics' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
