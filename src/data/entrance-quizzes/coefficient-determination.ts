/**
 * Entrance Quiz — Coefficient of Determination (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'cod-ent-1a', question: 'What does R² represent?', options: ['The slope of the regression line', 'The proportion of variability in y explained by the linear relationship with x', 'The y-intercept of the model', 'The number of data points'], correctIndex: 1, explanation: 'R² is the proportion of variability in y that is explained by the linear relationship with x.', partNumber: 1, partTitle: 'R-Squared Definition' },
  { id: 'cod-ent-1b', question: 'How is R² related to the correlation coefficient r?', options: ['R² = r', 'R² = 2r', 'R² = r²', 'R² = √r'], correctIndex: 2, explanation: 'R² equals the square of the correlation coefficient: R² = r².', partNumber: 1, partTitle: 'R-Squared Definition' },
  { id: 'cod-ent-2a', question: 'If r = 0.9, what is R²?', options: ['0.9', '0.81', '0.09', '0.45'], correctIndex: 1, explanation: 'R² = r² = (0.9)² = 0.81, so 81% of the variability in y is explained by the model.', partNumber: 2, partTitle: 'Calculating R²' },
  { id: 'cod-ent-2b', question: 'Which formula correctly defines R²?', options: ['R² = SSresidual / SStotal', 'R² = 1 − (SSresidual / SStotal)', 'R² = SStotal − 1', 'R² = n / (n − 2)'], correctIndex: 1, explanation: 'R² = 1 − (SSresidual / SStotal); it compares the residual variation to the total variation around the mean.', partNumber: 2, partTitle: 'Calculating R²' },
  { id: 'cod-ent-3a', question: 'Which is the correct interpretation of R² = 0.72?', options: ['72% of the data points lie on the regression line', 'The correlation is 0.72', 'Approximately 72% of the variability in the response variable is explained by the linear model', 'The slope of the line is 0.72'], correctIndex: 2, explanation: 'Interpretation: "Approximately 72% of the variability in [y variable] is explained by the linear model with [x variable]."', partNumber: 3, partTitle: 'Interpreting R²' },
  { id: 'cod-ent-3b', question: 'If R² = 0.64, what percentage of variability in y remains unexplained?', options: ['64%', '36%', '8%', '100%'], correctIndex: 1, explanation: 'R² = 0.64 means 64% of variability is explained, so 100% − 64% = 36% remains unexplained.', partNumber: 3, partTitle: 'Interpreting R²' },
  { id: 'cod-ent-4a', question: 'R² close to 1 indicates:', options: ['A weak linear relationship', 'No relationship at all', 'A strong linear relationship', 'A non-linear relationship'], correctIndex: 2, explanation: 'R² close to 1 indicates a strong linear relationship; R² close to 0 indicates a weak one.', partNumber: 4, partTitle: 'Strength of Relationship' },
  { id: 'cod-ent-4b', question: 'If R² = 0, what does this mean?', options: ['x perfectly predicts y', 'x provides no help in predicting y', 'The slope is very large', 'All residuals are zero'], correctIndex: 1, explanation: 'R² = 0 means x provides no help in predicting y; the model explains none of the variability.', partNumber: 4, partTitle: 'Strength of Relationship' },
  { id: 'cod-ent-5a', question: 'A high R² value can be misleading because:', options: ['It always proves causation', 'It can be inflated by an outlier or a lurking variable', 'It must be above 0.9 to be meaningful', 'It eliminates all prediction error'], correctIndex: 1, explanation: 'R² can be high due to an outlier or a lurking variable — always check the scatterplot and context.', partNumber: 5, partTitle: 'Limitations of R²' },
  { id: 'cod-ent-5b', question: 'A large R² value proves that x causes changes in y.', options: ['True — high R² always means causation', 'True — but only when R² > 0.95', 'False — R² does not prove causation', 'False — R² only applies to non-linear models'], correctIndex: 2, explanation: 'R² does not prove causation, no matter how large it is. Correlation and explained variability do not establish cause-and-effect.', partNumber: 5, partTitle: 'Limitations of R²' },
  { id: 'cod-ent-6a', question: 'Adding a second explanatory variable increases R² by only 0.01. What should you conclude?', options: ['The new variable dramatically improves the model', 'The new variable may not improve the model meaningfully', 'R² cannot increase when variables are added', 'The original model was wrong'], correctIndex: 1, explanation: 'If adding a variable increases R² only slightly, it may not improve the model meaningfully.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'cod-ent-6b', question: 'A regression has R² = 0.25. Does this mean the relationship is not real?', options: ['Yes — R² must exceed 0.5 for a real relationship', 'Yes — 25% is too low to be meaningful', 'No — a low R² means other factors also influence y, but the relationship can still be real', 'No — R² = 0.25 is considered very strong'], correctIndex: 2, explanation: 'A low R² does not mean the relationship is not real — it means other factors also influence y.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'cod-ent-7a', question: 'On the AP exam, when interpreting R², you should always:', options: ['Just report the numerical value', 'Interpret R² in context with variable names', 'Convert R² to a percentage and stop', 'Skip the interpretation if R² > 0.5'], correctIndex: 1, explanation: 'On the AP exam, always interpret R² in context using the names of the variables involved.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'cod-ent-7b', question: 'How does range restriction affect R²?', options: ['It has no effect on R²', 'A narrow range of x values often yields a lower R²', 'A narrow range of x values always increases R²', 'Range restriction only affects the intercept'], correctIndex: 1, explanation: 'R² is affected by range restriction — a narrow range of x values often yields a lower R² than the full range would.', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'R-Squared Definition' },
    { partNumber: 2, partTitle: 'Calculating R²' },
    { partNumber: 3, partTitle: 'Interpreting R²' },
    { partNumber: 4, partTitle: 'Strength of Relationship' },
    { partNumber: 5, partTitle: 'Limitations of R²' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
