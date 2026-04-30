/**
 * Entrance Quiz — Two-Variable Data (AP Statistics)
 * 8 questions · 4 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Explanatory and Response Variables
  {
    id: 'tvd-ent-1a',
    question: 'In a study examining how study time affects test scores, which is the explanatory variable?',
    options: [
      'Test scores',
      'Study time',
      'The number of students',
      'Both equally'
    ],
    correctIndex: 1,
    explanation: 'The explanatory (independent) variable is what we believe explains or influences the outcome. Study time explains test scores.',
    partNumber: 1,
    partTitle: 'Explanatory and Response Variables'
  },
  {
    id: 'tvd-ent-1b',
    question: 'The response variable is:',
    options: [
      'Always plotted on the x-axis',
      'The variable we think explains the other',
      'The variable we want to predict or understand',
      'Only used in experiments, not observational studies'
    ],
    correctIndex: 2,
    explanation: 'The response (dependent) variable is what we measure as an outcome. It is plotted on the y-axis and is the variable we are trying to predict.',
    partNumber: 1,
    partTitle: 'Explanatory and Response Variables'
  },

  // Part 2: Scatterplot Characteristics
  {
    id: 'tvd-ent-2a',
    question: 'In describing the relationship between two variables in a scatterplot, "form" refers to:',
    options: [
      'Whether the points spread out or stay close together',
      'The shape of the relationship (linear, curved, clustered)',
      'How strong the relationship is',
      'The number of data points plotted'
    ],
    correctIndex: 1,
    explanation: 'Form describes the overall shape: linear (points follow a line), curved, or no clear pattern. Direction is positive/negative. Strength is strong/weak.',
    partNumber: 2,
    partTitle: 'Scatterplot Characteristics'
  },
  {
    id: 'tvd-ent-2b',
    question: 'A scatterplot showing points that increase from lower-left to upper-right has:',
    options: [
      'A negative association',
      'A positive association',
      'No association',
      'A curved association'
    ],
    correctIndex: 1,
    explanation: 'Points rising from lower-left to upper-right show a positive association: as x increases, y tends to increase.',
    partNumber: 2,
    partTitle: 'Scatterplot Characteristics'
  },

  // Part 3: Correlation Coefficient
  {
    id: 'tvd-ent-3a',
    question: 'The correlation coefficient r ranges from:',
    options: [
      '0 to 1 only',
      '−1 to 1',
      '−∞ to +∞',
      'Any negative value'
    ],
    correctIndex: 1,
    explanation: 'The correlation coefficient r is always between −1 and 1. r = −1 is perfect negative, r = 0 is no correlation, r = 1 is perfect positive.',
    partNumber: 3,
    partTitle: 'Correlation Coefficient'
  },
  {
    id: 'tvd-ent-3b',
    question: 'What does a correlation of r = 0.92 indicate?',
    options: [
      'A weak positive relationship',
      'A strong positive linear relationship',
      'A negative relationship',
      '92% of variation is explained by x'
    ],
    correctIndex: 1,
    explanation: 'r = 0.92 is close to 1, indicating a strong positive linear association. Note: r² (not r) gives the percent of variation explained.',
    partNumber: 3,
    partTitle: 'Correlation Coefficient'
  },

  // Part 4: Correlation vs Causation
  {
    id: 'tvd-ent-4a',
    question: 'If two variables have a strong positive correlation, what can we conclude?',
    options: [
      'One variable causes changes in the other',
      'There is a strong linear relationship, but causation is not established',
      'There must be a confounding variable',
      'The variables are independent'
    ],
    correctIndex: 1,
    explanation: 'Correlation shows association, not causation. A third variable (lurking variable) might explain both. We need careful study design to claim causation.',
    partNumber: 4,
    partTitle: 'Correlation vs Causation'
  },
  {
    id: 'tvd-ent-4b',
    question: 'Ice cream sales and drowning deaths are positively correlated. Does ice cream cause drowning?',
    options: [
      'Yes, because they are correlated',
      'No; both are associated with a third variable like warm weather',
      'Only if there is a large correlation',
      'Correlation is causation in this case'
    ],
    correctIndex: 1,
    explanation: 'Warm weather is the lurking variable explaining both. This illustrates that correlation does not imply causation.',
    partNumber: 4,
    partTitle: 'Correlation vs Causation'
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Explanatory and Response Variables' },
    { partNumber: 2, partTitle: 'Scatterplot Characteristics' },
    { partNumber: 3, partTitle: 'Correlation Coefficient' },
    { partNumber: 4, partTitle: 'Correlation vs Causation' },
  ]
}
