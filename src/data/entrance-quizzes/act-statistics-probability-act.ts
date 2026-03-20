/**
 * Entrance Quiz — Statistics & Probability (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'asp-ent-1a', question: 'For the data set {4, 8, 6, 8, 9}, what is the mean?', options: ['8', '6', '7', '9'], correctIndex: 2, explanation: 'Mean = sum/count = (4 + 8 + 6 + 8 + 9) / 5 = 35 / 5 = 7.', partNumber: 1, partTitle: 'Mean, Median, Mode' },
  { id: 'asp-ent-1b', question: 'A data set has values {2, 5, 7, 7, 100}. Which measure of center is LEAST affected by the outlier 100?', options: ['Mean', 'Range', 'Median', 'Sum'], correctIndex: 2, explanation: 'Adding an outlier increases the mean significantly but may not change the median, which depends only on the middle value.', partNumber: 1, partTitle: 'Mean, Median, Mode' },
  { id: 'asp-ent-2a', question: 'Which type of graph is best suited for displaying the frequency distribution of quantitative data?', options: ['Pie chart', 'Bar graph', 'Line plot', 'Histogram'], correctIndex: 3, explanation: 'Histograms show frequency distributions of quantitative data, while bar graphs are for categorical data.', partNumber: 2, partTitle: 'Data Displays' },
  { id: 'asp-ent-2b', question: 'What type of graph shows the relationship between two quantitative variables?', options: ['Bar graph', 'Scatter plot', 'Pie chart', 'Histogram'], correctIndex: 1, explanation: 'Scatter plots display the relationship between two quantitative variables by plotting data points on an x-y plane.', partNumber: 2, partTitle: 'Data Displays' },
  { id: 'asp-ent-3a', question: 'A restaurant offers 4 appetizers, 6 entrees, and 3 desserts. How many different three-course meals are possible?', options: ['13', '36', '72', '24'], correctIndex: 2, explanation: 'By the fundamental counting principle: 4 × 6 × 3 = 72 different meals.', partNumber: 3, partTitle: 'Counting Principles' },
  { id: 'asp-ent-3b', question: 'You have 3 shirts and 4 pairs of pants. How many different outfits can you make?', options: ['7', '12', '24', '1'], correctIndex: 1, explanation: 'By the fundamental counting principle: 3 × 4 = 12 outfits.', partNumber: 3, partTitle: 'Counting Principles' },
  { id: 'asp-ent-4a', question: 'A bag contains 3 red and 5 blue marbles. What is the probability of drawing a red marble?', options: ['5/8', '3/5', '3/8', '1/2'], correctIndex: 2, explanation: 'Probability = favorable outcomes / total outcomes = 3 / (3 + 5) = 3/8.', partNumber: 4, partTitle: 'Basic Probability' },
  { id: 'asp-ent-4b', question: 'If P(A) = 0.4, P(B) = 0.5, and P(A and B) = 0.2, what is P(A or B)?', options: ['0.9', '0.7', '0.5', '0.3'], correctIndex: 1, explanation: 'P(A or B) = P(A) + P(B) − P(A and B) = 0.4 + 0.5 − 0.2 = 0.7.', partNumber: 4, partTitle: 'Basic Probability' },
  { id: 'asp-ent-5a', question: 'How many ways can 4 people be arranged in a line? (Order matters.)', options: ['4', '12', '24', '16'], correctIndex: 2, explanation: 'Permutation: P(4,4) = 4! = 4 × 3 × 2 × 1 = 24.', partNumber: 5, partTitle: 'Combinations & Permutations' },
  { id: 'asp-ent-5b', question: 'How many ways can you choose 3 books from a shelf of 5 when order does NOT matter?', options: ['60', '10', '20', '15'], correctIndex: 1, explanation: 'Combination: C(5,3) = 5! / [3!(5−3)!] = 120 / (6 × 2) = 10.', partNumber: 5, partTitle: 'Combinations & Permutations' },
  { id: 'asp-ent-6a', question: 'How many ways can 5 books be arranged on a shelf?', options: ['25', '120', '60', '5'], correctIndex: 1, explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120 arrangements.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'asp-ent-6b', question: 'For the data set {3, 5, 7, 7, 8}, what is the mode?', options: ['3', '6', '7', '8'], correctIndex: 2, explanation: 'The mode is the most frequent value. 7 appears twice, more than any other value, so mode = 7.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'asp-ent-7a', question: 'On the ACT, which approach is best for probability questions?', options: ['Estimate using a graph', 'Set up the fraction: favorable outcomes / total outcomes', 'Always multiply probabilities together', 'Use the Pythagorean theorem'], correctIndex: 1, explanation: 'ACT probability questions are usually straightforward — carefully set up the fraction of favorable to total outcomes.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'asp-ent-7b', question: 'A student scores 80 on a test worth 40% and 90 on a test worth 60%. What is the weighted average?', options: ['85', '86', '84', '88'], correctIndex: 1, explanation: 'Weighted average = (80 × 0.40) + (90 × 0.60) = 32 + 54 = 86.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Mean, Median, Mode' },
    { partNumber: 2, partTitle: 'Data Displays' },
    { partNumber: 3, partTitle: 'Counting Principles' },
    { partNumber: 4, partTitle: 'Basic Probability' },
    { partNumber: 5, partTitle: 'Combinations & Permutations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
