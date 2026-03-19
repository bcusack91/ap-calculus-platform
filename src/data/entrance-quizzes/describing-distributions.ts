/**
 * Entrance Quiz — Describing Distributions (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'dd-ent-1a', question: 'Which of the following is NOT a term used to describe the shape of a distribution?', options: ['Symmetric', 'Skewed right', 'Bimodal', 'Resistant'], correctIndex: 3, explanation: '"Resistant" describes a statistic (like the median) that is not affected by extreme values. Shape is described as symmetric, skewed, bimodal, uniform, etc.', partNumber: 1, partTitle: 'Shape, Center, Spread' },
  { id: 'dd-ent-1b', question: 'The acronym SOCS stands for:', options: ['Standard, Outliers, Correlation, Slope', 'Shape, Outliers, Center, Spread', 'Sample, Observations, Confidence, Significance', 'Skew, Origin, Cluster, Symmetry'], correctIndex: 1, explanation: 'When describing a distribution on the AP exam, address Shape, Outliers, Center, and Spread (SOCS), all in context.', partNumber: 1, partTitle: 'Shape, Center, Spread' },
  { id: 'dd-ent-2a', question: 'Changing the bin width of a histogram can:', options: ['Change the shape appearance of the distribution', 'Change the actual data values', 'Have no effect on the graph', 'Only affect the center of the distribution'], correctIndex: 0, explanation: 'Bin width affects how data is grouped, which can change the apparent shape of the distribution without changing the underlying data.', partNumber: 2, partTitle: 'Histograms & Dotplots' },
  { id: 'dd-ent-2b', question: 'Dotplots are most useful when:', options: ['The data set is very large (n > 1000)', 'The data set is small with a limited range of values', 'You need to display categorical data', 'You want to show cumulative frequencies'], correctIndex: 1, explanation: 'Dotplots place a dot for each observation and work best for small data sets where the range is limited enough to see individual values.', partNumber: 2, partTitle: 'Histograms & Dotplots' },
  { id: 'dd-ent-3a', question: 'In a skewed right distribution, which relationship between mean and median is typically true?', options: ['Mean < median', 'Mean = median', 'Mean > median', 'There is no predictable relationship'], correctIndex: 2, explanation: 'In a right-skewed distribution, the tail of large values pulls the mean toward higher values, so mean > median.', partNumber: 3, partTitle: 'Mean vs Median' },
  { id: 'dd-ent-3b', question: 'The median is considered a resistant measure of center because:', options: ['It always equals the mean', 'It is not strongly affected by outliers or extreme values', 'It uses all data values equally', 'It can only be used with symmetric distributions'], correctIndex: 1, explanation: 'The median depends on the position of the middle value, not on the magnitude of extreme values, making it resistant to outliers.', partNumber: 3, partTitle: 'Mean vs Median' },
  { id: 'dd-ent-4a', question: 'Standard deviation measures:', options: ['The middle value of the data set', 'The range of the data set', 'The average distance of values from the mean', 'The most common value in the data set'], correctIndex: 2, explanation: 'Standard deviation quantifies how far, on average, data values deviate from the mean.', partNumber: 4, partTitle: 'Standard Deviation' },
  { id: 'dd-ent-4b', question: 'If you add 5 to every value in a data set, what happens to the standard deviation?', options: ['It increases by 5', 'It decreases by 5', 'It stays the same', 'It is multiplied by 5'], correctIndex: 2, explanation: 'Adding a constant shifts all values equally, so the distances between values (and from the mean) remain unchanged. SD stays the same.', partNumber: 4, partTitle: 'Standard Deviation' },
  { id: 'dd-ent-5a', question: 'Which statement is true about a normal distribution?', options: ['It is always skewed right', 'It is symmetric and bell-shaped with mean = median = mode', 'It has no standard deviation', 'It can only model discrete data'], correctIndex: 1, explanation: 'The normal distribution is symmetric and bell-shaped. Its mean, median, and mode are all equal and located at the center.', partNumber: 5, partTitle: 'Normal Distribution' },
  { id: 'dd-ent-5b', question: 'According to the empirical rule, approximately what percentage of data falls within 2 standard deviations of the mean in a normal distribution?', options: ['68%', '90%', '95%', '99.7%'], correctIndex: 2, explanation: 'The empirical (68-95-99.7) rule states that about 95% of data in a normal distribution lies within 2 standard deviations of the mean.', partNumber: 5, partTitle: 'Normal Distribution' },
  { id: 'dd-ent-6a', question: 'For a strongly skewed distribution, which measure of center is more appropriate?', options: ['Mean', 'Median', 'Mode', 'Standard deviation'], correctIndex: 1, explanation: 'The median is resistant to the pull of the skewed tail and extreme values, making it a better summary of center for skewed distributions.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'dd-ent-6b', question: 'Which measure of spread is resistant to outliers?', options: ['Range', 'Standard deviation', 'Variance', 'IQR (Interquartile Range)'], correctIndex: 3, explanation: 'The IQR measures the spread of the middle 50% of data and is not affected by extreme values, making it resistant to outliers.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'dd-ent-7a', question: 'When describing a distribution on the AP exam, you should always:', options: ['State only numerical summaries', 'Use context such as the variable name and units', 'Avoid mentioning outliers', 'Report every individual data value'], correctIndex: 1, explanation: 'AP scoring rubrics require responses in context — reference the variable, include units, and connect descriptions to the real-world situation.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'dd-ent-7b', question: 'When comparing two distributions, the best practice is to:', options: ['Describe each distribution separately without comparison', 'Make explicit comparative statements (e.g., "Group A has a higher center than Group B")', 'Only compare the means', 'Only compare the sample sizes'], correctIndex: 1, explanation: 'The AP exam rewards explicit comparisons using comparative language (higher, lower, more spread out) across shape, center, and spread.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Shape, Center, Spread' },
    { partNumber: 2, partTitle: 'Histograms & Dotplots' },
    { partNumber: 3, partTitle: 'Mean vs Median' },
    { partNumber: 4, partTitle: 'Standard Deviation' },
    { partNumber: 5, partTitle: 'Normal Distribution' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
