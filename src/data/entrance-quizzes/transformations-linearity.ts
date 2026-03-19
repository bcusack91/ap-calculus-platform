/**
 * Entrance Quiz — Transformations to Achieve Linearity (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'tl-ent-1a', question: 'Which of the following is true about relationships between variables?', options: ['All relationships are linear', 'Non-linear relationships do not exist in real data', 'Exponential, power, and logarithmic models are common alternatives to linear models', 'Only linear models are tested on the AP exam'], correctIndex: 2, explanation: 'Not all relationships are linear — exponential, power, and logarithmic models are common alternatives.', partNumber: 1, partTitle: 'Non-Linear Relationships' },
  { id: 'tl-ent-1b', question: 'What signals that a transformation may be needed?', options: ['A perfectly straight scatterplot', 'A residual plot with no pattern', 'A curved scatterplot or patterned residual plot', 'A correlation of exactly 1'], correctIndex: 2, explanation: 'A curved scatterplot or patterned residual plot signals the need for a transformation to achieve linearity.', partNumber: 1, partTitle: 'Non-Linear Relationships' },
  { id: 'tl-ent-2a', question: 'If the relationship between y and x is exponential, which transformation should produce a linear plot?', options: ['Plot y² vs x', 'Plot ln(y) vs x', 'Plot y vs x²', 'Plot 1/y vs 1/x'], correctIndex: 1, explanation: 'If y vs x is exponential, plotting ln(y) vs x should produce a linear relationship.', partNumber: 2, partTitle: 'Logarithmic Transformations' },
  { id: 'tl-ent-2b', question: 'The equation ln(y) = a + bx represents which type of model when back-transformed?', options: ['Linear model', 'Quadratic model', 'Exponential growth model: y = eᵃ · eᵇˣ', 'Power model'], correctIndex: 2, explanation: 'ln(y) = a + bx → y = eᵃ · eᵇˣ, which is an exponential growth model.', partNumber: 2, partTitle: 'Logarithmic Transformations' },
  { id: 'tl-ent-3a', question: 'To linearize a power model y = a · xᵇ, you should plot:', options: ['y vs ln(x)', 'ln(y) vs x', 'ln(y) vs ln(x)', 'y² vs x²'], correctIndex: 2, explanation: 'Power model: y = a · xᵇ → linearize by plotting ln(y) vs ln(x).', partNumber: 3, partTitle: 'Power Transformations' },
  { id: 'tl-ent-3b', question: 'In the linearized form ln(y) = ln(a) + b·ln(x), the slope of the line represents:', options: ['The base of the exponent', 'The power b in the original model', 'The y-intercept of the original model', 'The correlation coefficient'], correctIndex: 1, explanation: 'In ln(y) = ln(a) + b·ln(x), the slope of the line is the power b from the original power model.', partNumber: 3, partTitle: 'Power Transformations' },
  { id: 'tl-ent-4a', question: 'What does "linearizing" data mean?', options: ['Removing outliers until the data looks linear', 'Transforming the data so a linear model fits, then checking the residual plot', 'Forcing a straight line through all data points', 'Ignoring non-linear patterns'], correctIndex: 1, explanation: 'Linearizing means transforming data so a linear model fits; then you check the residual plot of the transformed data.', partNumber: 4, partTitle: 'Linearizing Data' },
  { id: 'tl-ent-4b', question: 'Which of these is NOT a common transformation used to linearize data?', options: ['log(y)', '√y', '1/y', 'y + x'], correctIndex: 3, explanation: 'Common transformations include log(y), √y, 1/y, and log(x). Simply adding y + x is not a standard linearizing transformation.', partNumber: 4, partTitle: 'Linearizing Data' },
  { id: 'tl-ent-5a', question: 'After fitting a linear model to transformed data, what must you do to make predictions on the original scale?', options: ['Use the transformed prediction directly', 'Back-transform the predicted value to the original scale', 'Ignore the transformation', 'Multiply by the sample size'], correctIndex: 1, explanation: 'After fitting a linear model to transformed data, you must back-transform to make predictions on the original scale.', partNumber: 5, partTitle: 'Inverse Transformations' },
  { id: 'tl-ent-5b', question: 'If you modeled ln(y) and obtained a predicted ln(ŷ) = 3.2, how do you find ŷ on the original scale?', options: ['ŷ = 3.2', 'ŷ = ln(3.2)', 'ŷ = e³·²', 'ŷ = 3.2²'], correctIndex: 2, explanation: 'Predictions in the ln(y) scale must be exponentiated: ŷ = e³·² to get the prediction on the original scale.', partNumber: 5, partTitle: 'Inverse Transformations' },
  { id: 'tl-ent-6a', question: 'A dataset follows y = 3·x². When you plot ln(y) vs ln(x), the slope is approximately:', options: ['3', '0.5', '2', '1'], correctIndex: 2, explanation: 'y = 3·x² → ln(y) = ln(3) + 2·ln(x), so the slope is 2, confirming a power model with exponent 2.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'tl-ent-6b', question: 'How do you confirm that a transformation improved the model?', options: ['Check if R² decreased', 'Compare residual plots before and after transformation', 'Only look at the scatterplot of original data', 'Ignore residual plots'], correctIndex: 1, explanation: 'Always compare residual plots before and after transformation to confirm that the transformation improved the model.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'tl-ent-7a', question: 'On the AP exam, you may need to:', options: ['Only use linear models', 'Identify the correct transformation from context or residual plots', 'Avoid all transformations', 'Use transformations only for categorical data'], correctIndex: 1, explanation: 'On the AP exam, you may need to identify the correct transformation from context or residual plots.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'tl-ent-7b', question: 'How do you distinguish an exponential model from a power model using transformations?', options: ['They use the same transformation', 'Exponential: ln(y) vs x is linear; Power: ln(y) vs ln(x) is linear', 'Exponential: y vs ln(x); Power: y vs x²', 'You cannot distinguish them'], correctIndex: 1, explanation: 'Exponential → ln(y) vs x is linear; Power → ln(y) vs ln(x) is linear. This is how you distinguish them.', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Non-Linear Relationships' },
    { partNumber: 2, partTitle: 'Logarithmic Transformations' },
    { partNumber: 3, partTitle: 'Power Transformations' },
    { partNumber: 4, partTitle: 'Linearizing Data' },
    { partNumber: 5, partTitle: 'Inverse Transformations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
