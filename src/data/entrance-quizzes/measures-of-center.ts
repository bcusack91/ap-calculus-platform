/**
 * Entrance Quiz — Measures of Center (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'moc-ent-1a', question: 'The sample mean is denoted by which symbol?', options: ['μ', 'x̄', 'σ', 's'], correctIndex: 1, explanation: 'x̄ (x-bar) denotes the sample mean. μ (mu) is the population mean, σ is population standard deviation, and s is sample standard deviation.', partNumber: 1, partTitle: 'Mean (Average)' },
  { id: 'moc-ent-1b', question: 'The mean can be thought of as the:', options: ['Most common value', 'Middle value of ordered data', 'Balancing point of a distribution', 'Value with the highest frequency'], correctIndex: 2, explanation: 'The mean is the "balancing point" — if you placed the distribution on a fulcrum at the mean, it would balance perfectly.', partNumber: 1, partTitle: 'Mean (Average)' },
  { id: 'moc-ent-2a', question: 'To find the median of a data set, you must first:', options: ['Calculate the mean', 'Arrange the values in order', 'Remove all outliers', 'Find the mode'], correctIndex: 1, explanation: 'The median is the middle value of ordered data. You must sort the values from smallest to largest before identifying the median.', partNumber: 2, partTitle: 'Median' },
  { id: 'moc-ent-2b', question: 'For a data set with an even number of observations, the median is:', options: ['The smaller of the two middle values', 'The larger of the two middle values', 'The average of the two middle values', 'Undefined'], correctIndex: 2, explanation: 'When n is even, the median is the average (mean) of the two middle values in the ordered data set.', partNumber: 2, partTitle: 'Median' },
  { id: 'moc-ent-3a', question: 'A distribution with two peaks is called:', options: ['Uniform', 'Unimodal', 'Bimodal', 'Skewed'], correctIndex: 2, explanation: 'A bimodal distribution has two distinct peaks (modes). Each peak represents a commonly occurring value or cluster of values.', partNumber: 3, partTitle: 'Mode' },
  { id: 'moc-ent-3b', question: 'Which measure of center can be used with categorical data?', options: ['Mean', 'Median', 'Mode', 'Standard deviation'], correctIndex: 2, explanation: 'The mode (most frequently occurring category) is the only measure of center that applies to categorical data. Mean and median require numerical values.', partNumber: 3, partTitle: 'Mode' },
  { id: 'moc-ent-4a', question: 'When a data set is strongly skewed or contains outliers, the best measure of center is usually the:', options: ['Mean', 'Median', 'Mode', 'Range'], correctIndex: 1, explanation: 'The median is resistant to extreme values and is a better summary of the "typical" value when data is skewed or has outliers.', partNumber: 4, partTitle: 'Choosing the Best Measure' },
  { id: 'moc-ent-4b', question: 'The mean is preferred over the median when:', options: ['The data is strongly skewed', 'There are extreme outliers', 'The distribution is roughly symmetric with no outliers', 'You are analyzing categorical data'], correctIndex: 2, explanation: 'For symmetric distributions without outliers, the mean is preferred because it uses all data values and has useful mathematical properties.', partNumber: 4, partTitle: 'Choosing the Best Measure' },
  { id: 'moc-ent-5a', question: 'If you add a constant c to every value in a data set, what happens to the mean and median?', options: ['Both increase by c', 'Both stay the same', 'Mean increases by c but median stays the same', 'Both decrease by c'], correctIndex: 0, explanation: 'Adding a constant shifts every data value—and therefore the mean and median—by that constant. Measures of spread remain unchanged.', partNumber: 5, partTitle: 'Effects of Transformations' },
  { id: 'moc-ent-5b', question: 'If every value in a data set is multiplied by 3, the standard deviation is:', options: ['Unchanged', 'Multiplied by 3', 'Multiplied by 9', 'Divided by 3'], correctIndex: 1, explanation: 'Multiplying all values by a constant c multiplies the mean, median, range, IQR, and standard deviation by |c|.', partNumber: 5, partTitle: 'Effects of Transformations' },
  { id: 'moc-ent-6a', question: 'Given the data set {2, 3, 5, 7, 83}, which is a better measure of the typical value?', options: ['Mean (20)', 'Median (5)', 'Mode (no mode)', 'Range (81)'], correctIndex: 1, explanation: 'The value 83 is an extreme outlier that pulls the mean up to 20. The median of 5 better represents the typical value.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'moc-ent-6b', question: 'A trimmed mean is calculated by:', options: ['Removing the largest value only', 'Removing a percentage of extreme values from both ends before averaging', 'Using only the middle value', 'Dividing the sum by n + 1'], correctIndex: 1, explanation: 'A trimmed mean removes a specified percentage of the highest and lowest values before computing the average, reducing the influence of outliers.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'moc-ent-7a', question: 'On the AP Statistics exam, when reporting a measure of center you should:', options: ['Just state the numerical value', 'Report it in context with appropriate units', 'Always use the mean regardless of distribution shape', 'Only report the median'], correctIndex: 1, explanation: 'AP scoring guidelines require that statistical summaries be communicated in context—include the variable name and units.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'moc-ent-7b', question: 'Changing a single value in a data set from 10 to 100:', options: ['Always changes the mean but may not change the median', 'Always changes both the mean and median', 'Never changes either the mean or median', 'Only changes the mode'], correctIndex: 0, explanation: 'The mean uses every value in its calculation, so any change affects it. The median depends only on position, so it may remain unchanged.', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Mean (Average)' },
    { partNumber: 2, partTitle: 'Median' },
    { partNumber: 3, partTitle: 'Mode' },
    { partNumber: 4, partTitle: 'Choosing the Best Measure' },
    { partNumber: 5, partTitle: 'Effects of Transformations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
