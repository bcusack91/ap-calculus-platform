/**
 * Entrance Quiz — Residuals & Residual Plots (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'rrp-ent-1a', question: 'How is a residual calculated?', options: ['ŷ − y', 'y − ŷ', 'y − ȳ', 'ŷ − ȳ'], correctIndex: 1, explanation: 'A residual equals the observed value minus the predicted value: residual = y − ŷ.', partNumber: 1, partTitle: 'Definition of Residuals' },
  { id: 'rrp-ent-1b', question: 'A data point has a positive residual. What does this mean?', options: ['The predicted value is above the regression line', 'The actual value is below the regression line', 'The actual value is above the regression line', 'The point lies exactly on the regression line'], correctIndex: 2, explanation: 'A positive residual means the actual value is above the regression line (observed > predicted); a negative residual means below.', partNumber: 1, partTitle: 'Definition of Residuals' },
  { id: 'rrp-ent-2a', question: 'In a residual plot, what is plotted on the y-axis?', options: ['The observed y-values', 'The predicted ŷ-values', 'The residuals', 'The explanatory variable'], correctIndex: 2, explanation: 'A residual plot places the residuals on the y-axis against the explanatory variable (or predicted values) on the x-axis.', partNumber: 2, partTitle: 'Creating Residual Plots' },
  { id: 'rrp-ent-2b', question: 'When should you create a residual plot?', options: ['Before collecting data', 'Before fitting a regression line', 'After fitting a regression to check if the linear model is appropriate', 'Only when R² is below 0.5'], correctIndex: 2, explanation: 'Plot residuals AFTER fitting a regression to check whether the linear model is appropriate for the data.', partNumber: 2, partTitle: 'Creating Residual Plots' },
  { id: 'rrp-ent-3a', question: 'What does a good residual plot look like?', options: ['Points forming a clear curve', 'Points forming a fan shape', 'Randomly scattered points with no pattern', 'Points clustered in one corner'], correctIndex: 2, explanation: 'A good residual plot shows randomly scattered points with no discernible pattern, indicating the linear model is appropriate.', partNumber: 3, partTitle: 'Interpreting Residual Plots' },
  { id: 'rrp-ent-3b', question: 'A residual plot shows a curved pattern. What should you conclude?', options: ['The linear model fits well', 'The data has no outliers', 'The linear model is not appropriate — consider a transformation', 'The correlation is exactly zero'], correctIndex: 2, explanation: 'A curved pattern in a residual plot indicates the linear model is not appropriate; a non-linear model or transformation should be considered.', partNumber: 3, partTitle: 'Interpreting Residual Plots' },
  { id: 'rrp-ent-4a', question: 'A fan-shaped residual plot (spread increases from left to right) indicates which problem?', options: ['Perfect linearity', 'Non-constant variance (heteroscedasticity)', 'A negative correlation', 'Too few data points'], correctIndex: 1, explanation: 'A fan shape in residuals indicates non-constant variance (heteroscedasticity), violating an assumption of linear regression.', partNumber: 4, partTitle: 'Patterns & Violations' },
  { id: 'rrp-ent-4b', question: 'A U-shaped pattern in a residual plot most likely suggests what?', options: ['The linear model is perfect', 'A quadratic relationship — the linear model is too simple', 'The residuals have constant variance', 'The sample size is too large'], correctIndex: 1, explanation: 'A U-shaped pattern in residuals suggests a quadratic relationship, meaning the linear model is too simple for the data.', partNumber: 4, partTitle: 'Patterns & Violations' },
  { id: 'rrp-ent-5a', question: 'An outlier in regression is best described as a point that:', options: ['Has an x-value near the mean of x', 'Has a large residual (far from the line vertically)', 'Falls exactly on the regression line', 'Is the first data point collected'], correctIndex: 1, explanation: 'An outlier in regression has a large residual — it is far from the regression line in the vertical direction.', partNumber: 5, partTitle: 'Outliers & Influential Points' },
  { id: 'rrp-ent-5b', question: 'An influential point is one that:', options: ['Has the smallest residual', 'Changes the regression line substantially when removed', 'Is always located at the center of the data', 'Has no effect on the slope'], correctIndex: 1, explanation: 'An influential point changes the regression line substantially when removed and is usually extreme in the x-direction.', partNumber: 5, partTitle: 'Outliers & Influential Points' },
  { id: 'rrp-ent-6a', question: 'If a residual plot shows random scatter, what can you conclude about the LSRL?', options: ['It should not be used', 'It is a good model for the data', 'It overestimates every value', 'The slope must be zero'], correctIndex: 1, explanation: 'If the residual plot shows random scatter with no pattern, the LSRL is a good model for the data.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'rrp-ent-6b', question: 'The standard deviation of the residuals (s) measures:', options: ['The strength of the correlation', 'The proportion of variability explained', 'The typical size of prediction errors', 'The slope of the regression line'], correctIndex: 2, explanation: 'The standard deviation of the residuals (s) measures the typical prediction error — how far observed values typically fall from predicted values.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'rrp-ent-7a', question: 'On the AP exam, before concluding a linear model is appropriate, you should always:', options: ['Calculate the mean of x', 'Examine the residual plot', 'Report only the slope', 'Ignore the scatterplot'], correctIndex: 1, explanation: 'On the AP exam, always examine the residual plot before concluding that a linear model is appropriate for the data.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'rrp-ent-7b', question: 'The formula s = √[Σ(residuals²) / (n − 2)] gives:', options: ['The correlation coefficient', 'The coefficient of determination', 'The typical size of prediction errors', 'The y-intercept of the regression line'], correctIndex: 2, explanation: 's = √[Σ(residuals²) / (n − 2)] gives the typical size of prediction errors (standard deviation of residuals).', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Definition of Residuals' },
    { partNumber: 2, partTitle: 'Creating Residual Plots' },
    { partNumber: 3, partTitle: 'Interpreting Residual Plots' },
    { partNumber: 4, partTitle: 'Patterns & Violations' },
    { partNumber: 5, partTitle: 'Outliers & Influential Points' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
