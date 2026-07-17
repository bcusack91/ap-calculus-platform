/**
 * Entrance Quiz — Measures of Spread (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'mos-ent-1a', question: 'The range of a data set is calculated as:', options: ['Q3 − Q1', 'Mean − median', 'Max − min', 'Standard deviation × 2'], correctIndex: 2, explanation: 'Range = maximum value − minimum value. It is the simplest measure of spread but is sensitive to outliers since it uses only two values.', partNumber: 1, partTitle: 'Range & IQR' },
  { id: 'mos-ent-1b', question: 'The IQR (Interquartile Range) measures the spread of:', options: ['All values in the data set', 'The middle 50% of the data', 'The top 25% of the data', 'Values beyond the outlier boundaries'], correctIndex: 1, explanation: 'IQR = Q3 − Q1, which captures the range of the middle 50% of the data. It is resistant to outliers.', partNumber: 1, partTitle: 'Range & IQR' },
  { id: 'mos-ent-2a', question: 'The five-number summary consists of:', options: ['Mean, median, mode, range, SD', 'Min, Q1, median, Q3, max', 'Mean, Q1, Q2, Q3, variance', 'Min, mean, median, mode, max'], correctIndex: 1, explanation: 'The five-number summary is min, Q1, median (Q2), Q3, and max — exactly the values displayed by a box plot.', partNumber: 2, partTitle: 'Box Plot Summaries' },
  { id: 'mos-ent-2b', question: 'In a modified box plot, the whiskers extend to:', options: ['The minimum and maximum values always', 'The largest and smallest non-outlier values', 'Exactly 1.5 × IQR in both directions', 'The mean ± 1 standard deviation'], correctIndex: 1, explanation: 'Modified box plots draw whiskers to the most extreme non-outlier values. Points beyond 1.5 × IQR from Q1 or Q3 are plotted individually as outliers.', partNumber: 2, partTitle: 'Box Plot Summaries' },
  { id: 'mos-ent-3a', question: 'In the formula for sample standard deviation, we divide by (n − 1) instead of n because:', options: ['It makes the calculation simpler', 'It corrects for bias when estimating the population SD (Bessel\'s correction)', 'It always produces a smaller value', 'The AP formula sheet requires it'], correctIndex: 1, explanation: 'Dividing by (n − 1) is Bessel\'s correction, which provides an unbiased estimate of the population variance when using a sample.', partNumber: 3, partTitle: 'Standard Deviation' },
  { id: 'mos-ent-3b', question: 'The standard deviation of a data set can never be:', options: ['Zero', 'Negative', 'Greater than the range', 'Equal to the variance'], correctIndex: 1, explanation: 'Standard deviation is the square root of the average squared deviations, so it is always ≥ 0. It equals 0 only when all values are identical.', partNumber: 3, partTitle: 'Standard Deviation' },
  { id: 'mos-ent-4a', question: 'Variance is related to standard deviation by:', options: ['Variance = SD / 2', 'Variance = $SD^{2}$', 'Variance = $\\sqrt{SD}$', 'Variance = SD + mean'], correctIndex: 1, explanation: 'Variance $(s^{2})$ is the square of the standard deviation (s). Because variance is in squared units, SD is more interpretable.', partNumber: 4, partTitle: 'Variance' },
  { id: 'mos-ent-4b', question: 'Why is standard deviation preferred over variance for describing spread?', options: ['Variance is always larger', 'Standard deviation is in the same units as the original data', 'Variance cannot be calculated for samples', 'Standard deviation is always smaller than 1'], correctIndex: 1, explanation: 'Variance is in squared units, making it hard to interpret directly. Standard deviation returns to the original units of measurement.', partNumber: 4, partTitle: 'Variance' },
  { id: 'mos-ent-5a', question: 'For a skewed data set, which pair of summary statistics is most appropriate?', options: ['Mean and standard deviation', 'Median and IQR', 'Mode and range', 'Mean and range'], correctIndex: 1, explanation: 'Median and IQR are both resistant to outliers and skewness, making them the preferred summaries for non-symmetric distributions.', partNumber: 5, partTitle: 'Comparing Spread Measures' },
  { id: 'mos-ent-5b', question: 'Two data sets can have the same mean but different standard deviations. This means:', options: ['They must have the same shape', 'Their values are spread differently around the center', 'One must have outliers', 'The data sets are identical'], correctIndex: 1, explanation: 'Same center does not imply same spread. Standard deviation captures how tightly or loosely values cluster around the mean.', partNumber: 5, partTitle: 'Comparing Spread Measures' },
  { id: 'mos-ent-6a', question: 'If you add 10 to every value in a data set, the standard deviation:', options: ['Increases by 10', 'Decreases by 10', 'Stays the same', 'Is multiplied by 10'], correctIndex: 2, explanation: 'Adding a constant shifts all values equally without changing the distances between them, so standard deviation remains unchanged.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mos-ent-6b', question: 'A data set of {5, 5, 5, 5} has a standard deviation of:', options: ['5', '1', '0', '20'], correctIndex: 2, explanation: 'When all values are identical, every deviation from the mean is 0, so the standard deviation is 0. There is no variability.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mos-ent-7a', question: 'Using the 1.5 × IQR rule, a value is a potential outlier if it is:', options: ['More than 1 SD from the mean', 'Below Q1 − 1.5(IQR) or above Q3 + 1.5(IQR)', 'Below the median', 'More than 2 SDs from the mean'], correctIndex: 1, explanation: 'The 1.5 × IQR rule defines potential outliers as values below Q1 − 1.5(IQR) or above Q3 + 1.5(IQR).', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'mos-ent-7b', question: 'On the AP exam, when interpreting standard deviation you should say:', options: ['"The SD is 4.2"', '"The typical deviation from the mean [variable] is about 4.2 [units]"', '"The variance is 17.64"', '"Most values are within 4.2 of each other"'], correctIndex: 1, explanation: 'AP rubrics require interpretation in context: state what the SD measures (typical deviation from the mean) with the variable name and units.', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Range & IQR' },
    { partNumber: 2, partTitle: 'Box Plot Summaries' },
    { partNumber: 3, partTitle: 'Standard Deviation' },
    { partNumber: 4, partTitle: 'Variance' },
    { partNumber: 5, partTitle: 'Comparing Spread Measures' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
