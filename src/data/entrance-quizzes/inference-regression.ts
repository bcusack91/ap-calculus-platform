/**
 * Entrance Quiz — Inference for Regression (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'ir-ent-1a', question: 'What question does regression inference answer?', options: ['Is the sample mean significantly different from zero?', 'Is there a significant linear relationship between x and y in the population?', 'Is the data normally distributed?', 'Are two categorical variables independent?'], correctIndex: 1, explanation: 'Regression inference answers: "Is there a significant linear relationship between x and y in the population?"', partNumber: 1, partTitle: 'Regression Inference Overview' },
  { id: 'ir-ent-1b', question: 'The population regression line is written as:', options: ['ŷ = a + bx', 'μy = α + βx', 'y = mx + b', 'ȳ = $\\beta_{0}$ + $\\beta_{1}x$̄'], correctIndex: 1, explanation: 'The population regression line is μy = α + βx; we estimate it with the sample line ŷ = a + bx.', partNumber: 1, partTitle: 'Regression Inference Overview' },
  { id: 'ir-ent-2a', question: 'In a t-test for the slope of a regression line, what is the null hypothesis?', options: ['$H_{0}$: β = 1', '$H_{0}$: β = 0 (no linear relationship)', '$H_{0}$: α = 0', '$H_{0}$: r = 1'], correctIndex: 1, explanation: 'The null hypothesis is $H_{0}$: β = 0 (no linear relationship). The test statistic is t = b / SE_b with df = n − 2.', partNumber: 2, partTitle: 't-Test for Slope' },
  { id: 'ir-ent-2b', question: 'A regression t-test yields a very small p-value. What does this indicate?', options: ['The slope is exactly zero', 'There is no relationship between x and y', 'The slope is significantly different from zero — x is a useful predictor', 'The model has no residuals'], correctIndex: 2, explanation: 'A small p-value means the slope is significantly different from zero, indicating x is a useful predictor of y.', partNumber: 2, partTitle: 't-Test for Slope' },
  { id: 'ir-ent-3a', question: 'The confidence interval for the population slope β is:', options: ['b ± z* · SE_b', 'b ± t* · SE_b, with df = n − 2', 'a ± t* · SE_a', 'r ± t* · SE_r'], correctIndex: 1, explanation: 'The CI for the slope is b ± t* · SE_b, using df = n − 2.', partNumber: 3, partTitle: 'Confidence Interval for Slope' },
  { id: 'ir-ent-3b', question: 'If the 95% confidence interval for β is (−0.5, 1.2), what can you conclude?', options: ['There is strong evidence of a positive slope', 'The slope is definitely zero', 'There is no convincing evidence of a linear relationship at the 95% level because the interval contains 0', 'The model explains 95% of the variability'], correctIndex: 2, explanation: 'If the CI for β contains 0, there is no convincing evidence of a linear relationship at that confidence level.', partNumber: 3, partTitle: 'Confidence Interval for Slope' },
  { id: 'ir-ent-4a', question: 'The conditions for regression inference are summarized by the acronym LINE. What does LINE stand for?', options: ['Linear, Independent, Normal, Equal variance', 'Logarithmic, Independent, Negative, Exponential', 'Linear, Identical, Normal, Estimated', 'Large, Independent, Nonparametric, Even'], correctIndex: 0, explanation: 'LINE: Linear relationship, Independent observations, Normal residuals, Equal variance (constant spread).', partNumber: 4, partTitle: 'Conditions for Inference' },
  { id: 'ir-ent-4b', question: 'How do you check the conditions for regression inference?', options: ['Only calculate $R^{2}$', 'Scatterplot for linearity, residual plot for patterns and constant spread, histogram of residuals for normality', 'Run a chi-square test', 'Check if n > 30 only'], correctIndex: 1, explanation: 'Check the scatterplot for linearity, the residual plot for patterns and constant spread, and a histogram or normal probability plot of residuals for normality.', partNumber: 4, partTitle: 'Conditions for Inference' },
  { id: 'ir-ent-5a', question: 'How does a prediction interval compare to a confidence interval for the mean response?', options: ['They are the same width', 'A prediction interval is narrower', 'A prediction interval is wider', 'A prediction interval does not exist in regression'], correctIndex: 2, explanation: 'A prediction interval for an individual y-value is wider than a confidence interval for the mean response.', partNumber: 5, partTitle: 'Prediction Intervals' },
  { id: 'ir-ent-5b', question: 'Why is a prediction interval wider than a confidence interval for the mean?', options: ['Because the sample size is always smaller', 'Because there is more uncertainty in predicting an individual outcome than in estimating the average', 'Because the slope is larger for individuals', 'Because prediction intervals use z* instead of t*'], correctIndex: 1, explanation: 'There is more uncertainty in predicting individual outcomes than in estimating the average response at a given x.', partNumber: 5, partTitle: 'Prediction Intervals' },
  { id: 'ir-ent-6a', question: 'Computer output: b = 2.3, SE_b = 0.5, n = 22. What is the t-statistic and conclusion?', options: ['t = 0.5, fail to reject $H_{0}$', 't = 4.6, reject $H_{0}$ — significant linear relationship', 't = 2.3, inconclusive', 't = 22, reject $H_{0}$'], correctIndex: 1, explanation: 't = b / SE_b = 2.3 / 0.5 = 4.6 with df = 20. This gives p < 0.001, so we reject $H_{0}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ir-ent-6b', question: 'The value s (standard error of the regression) estimates:', options: ['The slope of the regression line', 'The proportion of variability explained', 'The typical residual size — smaller s means better predictions', 'The number of predictors in the model'], correctIndex: 2, explanation: 's estimates the typical residual size — the average distance that observed values fall from predicted values. Smaller s means better predictions.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ir-ent-7a', question: 'On the AP exam, when given computer regression output, you should be able to identify:', options: ['Only the $R^{2}$ value', 'b, SE_b, t, p, $R^{2}$, and s — and interpret each', 'Only the slope and intercept', 'The raw data values'], correctIndex: 1, explanation: 'On the AP exam, read computer output to find b, SE_b, t, p, $R^{2}$, and s, and interpret each in context.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'ir-ent-7b', question: 'Before performing inference on regression, you must:', options: ['Only check that n > 30', 'State the conditions and check them using plots', 'Assume all conditions are met', 'Transform the data first'], correctIndex: 1, explanation: 'Always state the conditions (LINE) and check them using scatterplots, residual plots, and normal probability plots before performing inference.', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Regression Inference Overview' },
    { partNumber: 2, partTitle: 't-Test for Slope' },
    { partNumber: 3, partTitle: 'Confidence Interval for Slope' },
    { partNumber: 4, partTitle: 'Conditions for Inference' },
    { partNumber: 5, partTitle: 'Prediction Intervals' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
