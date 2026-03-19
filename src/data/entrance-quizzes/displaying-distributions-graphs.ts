/**
 * Entrance Quiz — Displaying Distributions & Graphs (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'ddg-ent-1a', question: 'A histogram displays data by:', options: ['Plotting individual data points on a number line', 'Grouping data into bins and showing the frequency of each bin', 'Connecting data points with a line', 'Showing the five-number summary'], correctIndex: 1, explanation: 'A histogram groups quantitative data into bins (intervals) and uses bars to show the frequency or relative frequency of each bin.', partNumber: 1, partTitle: 'Dot Plots & Histograms' },
  { id: 'ddg-ent-1b', question: 'Dot plots are most appropriate for:', options: ['Large data sets with many categories', 'Small data sets where individual values are visible', 'Displaying proportions of a whole', 'Showing five-number summaries'], correctIndex: 1, explanation: 'Dot plots place a dot for each observation and work best for small data sets where individual values can be clearly seen.', partNumber: 1, partTitle: 'Dot Plots & Histograms' },
  { id: 'ddg-ent-2a', question: 'What is a key advantage of a stem-and-leaf plot over a histogram?', options: ['It can display larger data sets', 'It preserves the individual data values', 'It shows proportions of a whole', 'It is always more visually appealing'], correctIndex: 1, explanation: 'Unlike histograms, stem-and-leaf plots preserve the actual data values while still showing the overall shape of the distribution.', partNumber: 2, partTitle: 'Stem-and-Leaf Plots' },
  { id: 'ddg-ent-2b', question: 'A back-to-back stem-and-leaf plot is used to:', options: ['Display three or more distributions simultaneously', 'Compare two distributions using a shared stem', 'Show cumulative frequencies', 'Replace box plots for large data sets'], correctIndex: 1, explanation: 'Back-to-back stem-and-leaf plots use a shared stem column with leaves extending in both directions to compare two distributions.', partNumber: 2, partTitle: 'Stem-and-Leaf Plots' },
  { id: 'ddg-ent-3a', question: 'A box plot displays which summary of the data?', options: ['Mean and standard deviation', 'The five-number summary: min, Q1, median, Q3, max', 'Individual data values', 'Frequency counts for each category'], correctIndex: 1, explanation: 'A box plot (box-and-whisker plot) visually represents the five-number summary: minimum, first quartile, median, third quartile, and maximum.', partNumber: 3, partTitle: 'Box Plots' },
  { id: 'ddg-ent-3b', question: 'In a modified box plot, outliers are typically defined as values beyond:', options: ['1 standard deviation from the mean', '2 standard deviations from the mean', '1.5 × IQR from Q1 or Q3', '3 × IQR from the median'], correctIndex: 2, explanation: 'The 1.5 × IQR rule identifies outliers as values below Q1 − 1.5(IQR) or above Q3 + 1.5(IQR).', partNumber: 3, partTitle: 'Box Plots' },
  { id: 'ddg-ent-4a', question: 'Why do the bars in a bar graph not touch?', options: ['To make the graph easier to read', 'Because the categories are distinct and not continuous', 'Because the data is quantitative', 'Bar graphs always have touching bars'], correctIndex: 1, explanation: 'Bar graphs display categorical data. The gaps between bars emphasize that the categories are distinct, unlike the continuous intervals in a histogram.', partNumber: 4, partTitle: 'Bar Graphs & Pie Charts' },
  { id: 'ddg-ent-4b', question: 'Pie charts are most effective when:', options: ['Comparing distributions across multiple groups', 'Categories sum to 100% and there are few categories', 'Displaying quantitative data', 'The data set is very large'], correctIndex: 1, explanation: 'Pie charts show parts of a whole and work best when categories represent all parts that sum to 100% and there are relatively few categories.', partNumber: 4, partTitle: 'Bar Graphs & Pie Charts' },
  { id: 'ddg-ent-5a', question: 'Which type of graph is most appropriate for displaying the distribution of a quantitative variable?', options: ['Pie chart', 'Bar graph', 'Histogram', 'Two-way table'], correctIndex: 2, explanation: 'Histograms (and dot plots) are designed for quantitative data. Pie charts and bar graphs are for categorical data.', partNumber: 5, partTitle: 'Choosing Appropriate Displays' },
  { id: 'ddg-ent-5b', question: 'A time-series plot is used to:', options: ['Compare categorical variables', 'Show quantitative data measured over time to reveal trends', 'Display the five-number summary', 'Show the proportion of each category'], correctIndex: 1, explanation: 'Time-series plots display quantitative data over time, helping reveal trends, seasonal patterns, and cycles.', partNumber: 5, partTitle: 'Choosing Appropriate Displays' },
  { id: 'ddg-ent-6a', question: 'A distribution is skewed right if:', options: ['The left tail is longer than the right tail', 'The right tail extends toward larger values and mean > median', 'The distribution is symmetric', 'The median is greater than the mean'], correctIndex: 1, explanation: 'In a right-skewed distribution, the tail extends toward larger values, pulling the mean above the median.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ddg-ent-6b', question: 'When comparing two distributions, you should always address:', options: ['Only the means', 'Only the shape', 'Shape, center, spread, and unusual features (SOCS)', 'The sample sizes'], correctIndex: 2, explanation: 'A complete comparison requires discussing Shape, Outliers/unusual features, Center, and Spread (SOCS), using comparative language.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ddg-ent-7a', question: 'On the AP Statistics exam, when describing a distribution you should mention:', options: ['Only the center', 'Shape, outliers, center, and spread', 'Only whether it is normal', 'The sampling method used'], correctIndex: 1, explanation: 'The AP exam expects you to describe distributions using Shape, Outliers, Center, and Spread (SOCS), all in context.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'ddg-ent-7b', question: 'A cumulative relative frequency plot (ogive) shows:', options: ['The frequency of each individual value', 'The percentage of data values that fall below each value', 'The five-number summary', 'The mode of the distribution'], correctIndex: 1, explanation: 'An ogive plots cumulative relative frequencies, showing the percentage of observations at or below each value on the x-axis.', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Dot Plots & Histograms' },
    { partNumber: 2, partTitle: 'Stem-and-Leaf Plots' },
    { partNumber: 3, partTitle: 'Box Plots' },
    { partNumber: 4, partTitle: 'Bar Graphs & Pie Charts' },
    { partNumber: 5, partTitle: 'Choosing Appropriate Displays' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
