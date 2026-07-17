/**
 * Entrance Quiz — Coefficient of Determination (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'cod-ent-1a', question: 'What does $R^{2}$ represent?', options: ['The slope of the regression line', 'The proportion of variability in y explained by the linear relationship with x', 'The y-intercept of the model', 'The number of data points'], correctIndex: 1, explanation: '$R^{2}$ is the proportion of variability in y that is explained by the linear relationship with x.', partNumber: 1, partTitle: 'R-Squared Definition' },
  { id: 'cod-ent-1b', question: 'How is $R^{2}$ related to the correlation coefficient r?', options: ['$R^{2}$ = r', '$R^{2}$ = 2r', '$R^{2}$ = $r^{2}$', '$R^{2}$ = $\\sqrt{r}$'], correctIndex: 2, explanation: '$R^{2}$ equals the square of the correlation coefficient: $R^{2}$ = $r^{2}$.', partNumber: 1, partTitle: 'R-Squared Definition' },
  { id: 'cod-ent-2a', question: 'If r = 0.9, what is $R^{2}$?', options: ['0.9', '0.81', '0.09', '0.45'], correctIndex: 1, explanation: '$R^{2}$ = $r^{2}$ = $(0.9)^{2}$ = 0.81, so 81% of the variability in y is explained by the model.', partNumber: 2, partTitle: 'Calculating $R^{2}$' },
  { id: 'cod-ent-2b', question: 'Which formula correctly defines $R^{2}$?', options: ['$R^{2}$ = SSresidual / SStotal', '$R^{2}$ = 1 − (SSresidual / SStotal)', '$R^{2}$ = SStotal − 1', '$R^{2}$ = n / (n − 2)'], correctIndex: 1, explanation: '$R^{2}$ = 1 − (SSresidual / SStotal); it compares the residual variation to the total variation around the mean.', partNumber: 2, partTitle: 'Calculating $R^{2}$' },
  { id: 'cod-ent-3a', question: 'Which is the correct interpretation of $R^{2}$ = 0.72?', options: ['72% of the data points lie on the regression line', 'The correlation is 0.72', 'Approximately 72% of the variability in the response variable is explained by the linear model', 'The slope of the line is 0.72'], correctIndex: 2, explanation: 'Interpretation: "Approximately 72% of the variability in [y variable] is explained by the linear model with [x variable]."', partNumber: 3, partTitle: 'Interpreting $R^{2}$' },
  { id: 'cod-ent-3b', question: 'If $R^{2}$ = 0.64, what percentage of variability in y remains unexplained?', options: ['64%', '36%', '8%', '100%'], correctIndex: 1, explanation: '$R^{2}$ = 0.64 means 64% of variability is explained, so 100% − 64% = 36% remains unexplained.', partNumber: 3, partTitle: 'Interpreting $R^{2}$' },
  { id: 'cod-ent-4a', question: '$R^{2}$ close to 1 indicates:', options: ['A weak linear relationship', 'No relationship at all', 'A strong linear relationship', 'A non-linear relationship'], correctIndex: 2, explanation: '$R^{2}$ close to 1 indicates a strong linear relationship; $R^{2}$ close to 0 indicates a weak one.', partNumber: 4, partTitle: 'Strength of Relationship' },
  { id: 'cod-ent-4b', question: 'If $R^{2}$ = 0, what does this mean?', options: ['x perfectly predicts y', 'x provides no help in predicting y', 'The slope is very large', 'All residuals are zero'], correctIndex: 1, explanation: '$R^{2}$ = 0 means x provides no help in predicting y; the model explains none of the variability.', partNumber: 4, partTitle: 'Strength of Relationship' },
  { id: 'cod-ent-5a', question: 'A high $R^{2}$ value can be misleading because:', options: ['It always proves causation', 'It can be inflated by an outlier or a lurking variable', 'It must be above 0.9 to be meaningful', 'It eliminates all prediction error'], correctIndex: 1, explanation: '$R^{2}$ can be high due to an outlier or a lurking variable — always check the scatterplot and context.', partNumber: 5, partTitle: 'Limitations of $R^{2}$' },
  { id: 'cod-ent-5b', question: 'A large $R^{2}$ value proves that x causes changes in y.', options: ['True — high $R^{2}$ always means causation', 'True — but only when $R^{2}$ > 0.95', 'False — $R^{2}$ does not prove causation', 'False — $R^{2}$ only applies to non-linear models'], correctIndex: 2, explanation: '$R^{2}$ does not prove causation, no matter how large it is. Correlation and explained variability do not establish cause-and-effect.', partNumber: 5, partTitle: 'Limitations of $R^{2}$' },
  { id: 'cod-ent-6a', question: 'Adding a second explanatory variable increases $R^{2}$ by only 0.01. What should you conclude?', options: ['The new variable dramatically improves the model', 'The new variable may not improve the model meaningfully', '$R^{2}$ cannot increase when variables are added', 'The original model was wrong'], correctIndex: 1, explanation: 'If adding a variable increases $R^{2}$ only slightly, it may not improve the model meaningfully.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'cod-ent-6b', question: 'A regression has $R^{2}$ = 0.25. Does this mean the relationship is not real?', options: ['Yes — $R^{2}$ must exceed 0.5 for a real relationship', 'Yes — 25% is too low to be meaningful', 'No — a low $R^{2}$ means other factors also influence y, but the relationship can still be real', 'No — $R^{2}$ = 0.25 is considered very strong'], correctIndex: 2, explanation: 'A low $R^{2}$ does not mean the relationship is not real — it means other factors also influence y.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'cod-ent-7a', question: 'On the AP exam, when interpreting $R^{2}$, you should always:', options: ['Just report the numerical value', 'Interpret $R^{2}$ in context with variable names', 'Convert $R^{2}$ to a percentage and stop', 'Skip the interpretation if $R^{2}$ > 0.5'], correctIndex: 1, explanation: 'On the AP exam, always interpret $R^{2}$ in context using the names of the variables involved.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'cod-ent-7b', question: 'How does range restriction affect $R^{2}$?', options: ['It has no effect on $R^{2}$', 'A narrow range of x values often yields a lower $R^{2}$', 'A narrow range of x values always increases $R^{2}$', 'Range restriction only affects the intercept'], correctIndex: 1, explanation: '$R^{2}$ is affected by range restriction — a narrow range of x values often yields a lower $R^{2}$ than the full range would.', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'R-Squared Definition' },
    { partNumber: 2, partTitle: 'Calculating $R^{2}$' },
    { partNumber: 3, partTitle: 'Interpreting $R^{2}$' },
    { partNumber: 4, partTitle: 'Strength of Relationship' },
    { partNumber: 5, partTitle: 'Limitations of $R^{2}$' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
