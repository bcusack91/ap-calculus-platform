/**
 * Entrance Quiz — ACT Science: Data Interpretation (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'asd-ent-1a', question: 'What is the primary purpose of a data table in a scientific experiment?', options: ['To organize numerical information in rows and columns', 'To make the report longer', 'To replace graphs entirely', 'To list the scientists involved'], correctIndex: 0, explanation: 'Data tables organize numerical information in rows and columns so it can be read and compared efficiently.', partNumber: 1, partTitle: 'Reading Data Tables' },
  { id: 'asd-ent-1b', question: 'In a data table, the independent variable is:', options: ['What is measured as a result', 'What the scientist keeps constant', 'The title of the table', 'What the scientist deliberately changes'], correctIndex: 3, explanation: 'The independent variable is what the scientist changes; the dependent variable is what is measured in response.', partNumber: 1, partTitle: 'Reading Data Tables' },
  { id: 'asd-ent-2a', question: 'Which type of graph is best for showing how a value changes over time?', options: ['Pie chart', 'Bar graph', 'Line graph', 'Scatter plot with no trend line'], correctIndex: 2, explanation: 'Line graphs show trends over time, while bar graphs are better for comparing categories.', partNumber: 2, partTitle: 'Interpreting Graphs' },
  { id: 'asd-ent-2b', question: 'Before interpreting any graph, you should first identify:', options: ['The color scheme used', 'Whether the graph is hand-drawn', 'The author of the study', 'The axes labels and units'], correctIndex: 3, explanation: 'When reading a graph, identify axes labels and units before interpreting data to understand what is being measured.', partNumber: 2, partTitle: 'Interpreting Graphs' },
  { id: 'asd-ent-3a', question: 'If y increases as x increases, the data shows:', options: ['A positive trend', 'An inverse trend', 'No trend', 'A random pattern'], correctIndex: 0, explanation: 'A positive trend means as x increases, y increases. A negative trend means as x increases, y decreases.', partNumber: 3, partTitle: 'Identifying Trends' },
  { id: 'asd-ent-3b', question: 'If y = k/x, the relationship between x and y is called:', options: ['Direct proportionality', 'Inverse proportionality', 'Exponential growth', 'No relationship'], correctIndex: 1, explanation: 'Direct proportionality is y = kx (straight line through origin). Inverse proportionality is y = k/x.', partNumber: 3, partTitle: 'Identifying Trends' },
  { id: 'asd-ent-4a', question: 'When comparing two data sets, the first thing to look for is:', options: ['Which set has more data points', 'Which scientist is more famous', 'Common variables and how results differ', 'Whether the data was collected recently'], correctIndex: 2, explanation: 'When comparing data sets, look for common variables and how results differ between them.', partNumber: 4, partTitle: 'Comparing Data Sets' },
  { id: 'asd-ent-4b', question: 'Two experiments using the same control group can be:', options: ['Never compared', 'Combined into one experiment', 'Ignored in analysis', 'Compared on the same scale'], correctIndex: 3, explanation: 'Different experiments with the same control group can be compared on the same scale because they share a common baseline.', partNumber: 4, partTitle: 'Comparing Data Sets' },
  { id: 'asd-ent-5a', question: 'Extending a trend line beyond the collected data range is called:', options: ['Interpolation', 'Extrapolation', 'Calibration', 'Normalization'], correctIndex: 1, explanation: 'Extrapolation extends a trend beyond the data range and is less reliable than interpolation.', partNumber: 5, partTitle: 'Making Predictions' },
  { id: 'asd-ent-5b', question: 'Estimating a value within the existing data range is called:', options: ['Interpolation', 'Hypothesis testing', 'Extrapolation', 'Random sampling'], correctIndex: 0, explanation: 'Interpolation estimates within the data range and is more reliable because it follows existing trends.', partNumber: 5, partTitle: 'Making Predictions' },
  { id: 'asd-ent-6a', question: 'If temperature doubles from 20°C to 40°C and reaction rate triples, what can you conclude?', options: ['Temperature has no effect', 'Reaction rate decreases with temperature', 'The experiment failed', 'Reaction rate increases with temperature'], correctIndex: 3, explanation: 'When temperature increases and reaction rate also increases, you can identify that rate increases with temperature.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'asd-ent-6b', question: 'Which pattern shows an inverse relationship?', options: ['Both variables increase together', 'Both variables remain constant', 'One variable doubles while the other halves', 'Variables change randomly'], correctIndex: 2, explanation: 'An inverse relationship is shown when one variable doubles and the other halves — as one goes up, the other goes down.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'asd-ent-7a', question: 'How much time should you spend per passage on the ACT Science section?', options: ['About 10 minutes', 'About 5 minutes', 'About 2 minutes', 'As long as needed'], correctIndex: 1, explanation: 'ACT Science is ~35 minutes for 40 questions — about 5 minutes per passage.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'asd-ent-7b', question: 'Most ACT Science questions can be answered by:', options: ['Memorizing science textbooks', 'Guessing based on prior knowledge', 'Skipping the passage entirely', 'Reading data carefully from the passages'], correctIndex: 3, explanation: 'Most ACT Science questions can be answered by reading data carefully; deep science knowledge is not required.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Reading Data Tables' },
    { partNumber: 2, partTitle: 'Interpreting Graphs' },
    { partNumber: 3, partTitle: 'Identifying Trends' },
    { partNumber: 4, partTitle: 'Comparing Data Sets' },
    { partNumber: 5, partTitle: 'Making Predictions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
