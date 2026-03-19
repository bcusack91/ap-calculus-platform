/**
 * Entrance Quiz — Least-Squares Regression (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Regression Line Equation
  {
    id: 'lsr-ent-1a',
    question: 'The equation of the least-squares regression line (LSRL) is ŷ = a + bx. How is the slope b calculated?',
    options: [
      'b = r(sₓ/s_y)',
      'b = r(s_y/sₓ)',
      'b = (ȳ − x̄) / r',
      'b = Σ(x − x̄)(y − ȳ) / n'
    ],
    correctIndex: 1,
    explanation: 'The slope of the LSRL is b = r(s_y/sₓ), where r is the correlation, s_y is the standard deviation of y, and sₓ is the standard deviation of x.',
    partNumber: 1,
    partTitle: 'Regression Line Equation'
  },
  {
    id: 'lsr-ent-1b',
    question: 'What does the least-squares regression line minimize?',
    options: [
      'The sum of the horizontal distances from the points to the line',
      'The sum of the absolute residuals',
      'The sum of the squared residuals (vertical distances)',
      'The correlation coefficient r'
    ],
    correctIndex: 2,
    explanation: 'The LSRL minimizes the sum of the squared residuals — the squared vertical distances between each observed y and the predicted ŷ.',
    partNumber: 1,
    partTitle: 'Regression Line Equation'
  },
  // Part 2: Slope & Intercept
  {
    id: 'lsr-ent-2a',
    question: 'In the equation ŷ = 12.5 + 3.2x, how do you interpret the slope 3.2?',
    options: [
      'When x = 0, ŷ = 3.2',
      'For each 1-unit increase in x, ŷ increases by 3.2 units on average',
      'The correlation between x and y is 3.2',
      'y is always 3.2 times larger than x'
    ],
    correctIndex: 1,
    explanation: 'The slope b = 3.2 means that for each 1-unit increase in x, the predicted value of y (ŷ) increases by 3.2 units, on average.',
    partNumber: 2,
    partTitle: 'Slope & Intercept'
  },
  {
    id: 'lsr-ent-2b',
    question: 'In the equation ŷ = 12.5 + 3.2x, what does the y-intercept 12.5 represent?',
    options: [
      'The predicted value of y when x = 1',
      'The slope of the line',
      'The predicted value of y when x = 0 (may not have practical meaning)',
      'The average value of y in the dataset'
    ],
    correctIndex: 2,
    explanation: 'The y-intercept a = 12.5 is the predicted ŷ when x = 0. In many contexts, x = 0 is outside the range of the data, so the intercept may not have practical meaning.',
    partNumber: 2,
    partTitle: 'Slope & Intercept'
  },
  // Part 3: Making Predictions
  {
    id: 'lsr-ent-3a',
    question: 'A regression model is based on data where x ranges from 10 to 50. Using the model to predict y when x = 45 is an example of:',
    options: [
      'Extrapolation',
      'Interpolation',
      'Residual analysis',
      'Hypothesis testing'
    ],
    correctIndex: 1,
    explanation: 'Interpolation is predicting within the range of the data (10 to 50). Since x = 45 is within this range, the prediction is reasonable.',
    partNumber: 3,
    partTitle: 'Making Predictions'
  },
  {
    id: 'lsr-ent-3b',
    question: 'Why is extrapolation risky when using a regression model?',
    options: [
      'The correlation always decreases outside the data range',
      'The residuals become negative outside the data range',
      'The pattern observed in the data may not continue beyond the range, giving unreasonable predictions',
      'Extrapolation violates the Central Limit Theorem'
    ],
    correctIndex: 2,
    explanation: 'Extrapolation is risky because the linear pattern may not hold outside the range of the observed data. Predictions beyond the data can be unreliable or nonsensical.',
    partNumber: 3,
    partTitle: 'Making Predictions'
  },
  // Part 4: Residuals
  {
    id: 'lsr-ent-4a',
    question: 'A residual is defined as:',
    options: [
      'ŷ − y (predicted minus observed)',
      'y − ŷ (observed minus predicted)',
      'y − x (response minus explanatory)',
      'x − x̄ (deviation from the mean of x)'
    ],
    correctIndex: 1,
    explanation: 'Residual = observed − predicted = y − ŷ. A positive residual means the point is above the regression line; a negative residual means it is below.',
    partNumber: 4,
    partTitle: 'Residuals'
  },
  {
    id: 'lsr-ent-4b',
    question: 'What is always true about the mean of the residuals for a least-squares regression line?',
    options: [
      'It equals the slope b',
      'It equals r²',
      'It equals 0',
      'It equals the standard deviation of y'
    ],
    correctIndex: 2,
    explanation: 'By a property of the LSRL, the mean of the residuals is always exactly 0. The positives and negatives balance out perfectly.',
    partNumber: 4,
    partTitle: 'Residuals'
  },
  // Part 5: Regression in Context
  {
    id: 'lsr-ent-5a',
    question: 'A regression of test score (y) on hours studied (x) gives ŷ = 40 + 5.8x. Which is the correct contextual interpretation of the slope?',
    options: [
      '"The average test score is 5.8."',
      '"For each additional hour studied, the predicted test score increases by 5.8 points."',
      '"5.8% of the variability in test scores is explained by hours studied."',
      '"Students who study score 5.8 points."'
    ],
    correctIndex: 1,
    explanation: 'Interpret slope in context: "For each additional hour studied [x], the predicted test score [y] increases by 5.8 points [b]."',
    partNumber: 5,
    partTitle: 'Regression in Context'
  },
  {
    id: 'lsr-ent-5b',
    question: 'If r² = 0.64 for a model predicting weight from height, which interpretation is correct?',
    options: [
      '"The correlation between height and weight is 0.64."',
      '"64% of the weights are correctly predicted."',
      '"Approximately 64% of the variability in weight is explained by the linear model with height."',
      '"Height causes 64% of weight gain."'
    ],
    correctIndex: 2,
    explanation: 'r² in context: "Approximately 64% of the variability in weight [y] is explained by the linear model with height [x]." It measures how well the model accounts for variation.',
    partNumber: 5,
    partTitle: 'Regression in Context'
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'lsr-ent-6a',
    question: 'The LSRL always passes through which special point?',
    options: [
      'The origin (0, 0)',
      'The point (x̄, ȳ)',
      'The point (median x, median y)',
      'The point (1, b)'
    ],
    correctIndex: 1,
    explanation: 'The LSRL always passes through the point (x̄, ȳ) — the means of x and y. This is a mathematical property of least-squares regression.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'lsr-ent-6b',
    question: 'An influential point in regression is typically:',
    options: [
      'A point near the center of the scatterplot',
      'A point with a residual of exactly 0',
      'An outlier in the x-direction that has a large effect on the regression line',
      'A point that lies on the regression line'
    ],
    correctIndex: 2,
    explanation: 'An influential point has a large effect on the position of the regression line. These are typically outliers in the x-direction (high leverage points).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  // Part 7: AP Review & Applications
  {
    id: 'lsr-ent-7a',
    question: 'On the AP exam, when interpreting a regression, which values must you interpret in context using variable names and units?',
    options: [
      'Only the y-intercept',
      'Only the correlation r',
      'The slope and r²',
      'Only the residuals'
    ],
    correctIndex: 2,
    explanation: 'On the AP exam, you must interpret both the slope and r² in context, using the actual variable names and units of measurement.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'lsr-ent-7b',
    question: 'From computer regression output, which quantities should you be able to identify?',
    options: [
      'Only the equation of the line',
      'Slope, intercept, r², s (standard deviation of residuals), and p-value',
      'Only the p-value and conclusion',
      'Only the residuals and fitted values'
    ],
    correctIndex: 1,
    explanation: 'From computer output, identify: slope (coefficient of x), intercept (constant), r² (coefficient of determination), s (standard deviation of residuals), and the p-value for the slope.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Regression Line Equation' },
    { partNumber: 2, partTitle: 'Slope & Intercept' },
    { partNumber: 3, partTitle: 'Making Predictions' },
    { partNumber: 4, partTitle: 'Residuals' },
    { partNumber: 5, partTitle: 'Regression in Context' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
