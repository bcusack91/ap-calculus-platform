/**
 * Entrance Quiz — Scatterplots & Correlation (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Creating Scatterplots
  {
    id: 'sc-ent-1a',
    question: 'When creating a scatterplot, which variable goes on the x-axis?',
    options: [
      'The response variable',
      'The explanatory (independent) variable',
      'The variable with the larger range',
      'Either variable — it does not matter'
    ],
    correctIndex: 1,
    explanation: 'In a scatterplot, the explanatory variable is placed on the x-axis and the response variable on the y-axis. The scatterplot displays the relationship between two quantitative variables.',
    partNumber: 1,
    partTitle: 'Creating Scatterplots'
  },
  {
    id: 'sc-ent-1b',
    question: 'Each point on a scatterplot represents:',
    options: [
      'The mean of one variable',
      'One observation\'s pair of values for the two variables',
      'The difference between two observations',
      'A category of data'
    ],
    correctIndex: 1,
    explanation: 'Each point on a scatterplot represents a single observation\'s pair of values — one value for the explanatory variable and one for the response variable.',
    partNumber: 1,
    partTitle: 'Creating Scatterplots'
  },
  // Part 2: Interpreting Patterns
  {
    id: 'sc-ent-2a',
    question: 'When describing a scatterplot, which characteristics should you address?',
    options: [
      'Mean, median, mode, and range',
      'Direction, form, strength, and unusual features',
      'Slope, intercept, and r²',
      'Hypotheses and p-value'
    ],
    correctIndex: 1,
    explanation: 'Describe a scatterplot using direction (positive/negative), form (linear/curved), strength (strong/moderate/weak), and any unusual features (outliers, clusters).',
    partNumber: 2,
    partTitle: 'Interpreting Patterns'
  },
  {
    id: 'sc-ent-2b',
    question: 'A scatterplot shows that as the number of hours studied increases, test scores tend to increase. This is an example of:',
    options: [
      'Negative association',
      'No association',
      'Positive association',
      'A lurking variable'
    ],
    correctIndex: 2,
    explanation: 'Positive association means that as x increases, y tends to increase. Here, more hours studied is associated with higher test scores.',
    partNumber: 2,
    partTitle: 'Interpreting Patterns'
  },
  // Part 3: Correlation Coefficient r
  {
    id: 'sc-ent-3a',
    question: 'The correlation coefficient r measures:',
    options: [
      'The slope of the best-fit line',
      'The strength and direction of a linear relationship between two quantitative variables',
      'Whether one variable causes the other',
      'The percentage of data that falls on the line'
    ],
    correctIndex: 1,
    explanation: 'r measures the strength and direction of a LINEAR relationship. Its value ranges from −1 to 1, where values near ±1 indicate strong linear relationships.',
    partNumber: 3,
    partTitle: 'Correlation Coefficient r'
  },
  {
    id: 'sc-ent-3b',
    question: 'If r = −1, what does the scatterplot look like?',
    options: [
      'Points scattered randomly with no pattern',
      'All points fall exactly on a line with negative slope',
      'All points fall exactly on a line with positive slope',
      'A strong curved pattern'
    ],
    correctIndex: 1,
    explanation: 'r = −1 indicates a perfect negative linear relationship — all points fall exactly on a straight line with a negative (downward) slope.',
    partNumber: 3,
    partTitle: 'Correlation Coefficient r'
  },
  // Part 4: Properties of r
  {
    id: 'sc-ent-4a',
    question: 'Which statement about the correlation coefficient r is TRUE?',
    options: [
      'r has the same units as the variables',
      'r changes if you switch which variable is x and which is y',
      'r has no units and is not affected by changes in units of measurement',
      'r is always positive for real-world data'
    ],
    correctIndex: 2,
    explanation: 'r is unitless and is not affected by adding, multiplying, or swapping x and y. It is a purely numerical measure of linear association.',
    partNumber: 4,
    partTitle: 'Properties of r'
  },
  {
    id: 'sc-ent-4b',
    question: 'Data follow a perfect parabolic (U-shaped) curve. The correlation r is closest to:',
    options: [
      'r = 1',
      'r = −1',
      'r ≈ 0',
      'r = 0.5'
    ],
    correctIndex: 2,
    explanation: 'r only measures LINEAR association. A strong curved (parabolic) relationship can have r ≈ 0 because the positive and negative portions of the curve cancel out.',
    partNumber: 4,
    partTitle: 'Properties of r'
  },
  // Part 5: Correlation ≠ Causation
  {
    id: 'sc-ent-5a',
    question: 'A study finds r = 0.92 between ice cream sales and drowning deaths. Can we conclude that ice cream causes drowning?',
    options: [
      'Yes — r is very strong, so causation is established',
      'Yes — the positive association proves a causal link',
      'No — correlation does not imply causation; a lurking variable (temperature) likely explains both',
      'No — we can only conclude causation if r = 1.0'
    ],
    correctIndex: 2,
    explanation: 'Correlation does NOT imply causation. Lurking variables (like hot weather) or coincidence may explain the association. Only controlled experiments can establish causation.',
    partNumber: 5,
    partTitle: 'Correlation ≠ Causation'
  },
  {
    id: 'sc-ent-5b',
    question: 'Even if r = 0.95 between two variables, what is required to prove causation?',
    options: [
      'A larger sample size',
      'A well-designed controlled experiment',
      'A regression analysis with r² > 0.90',
      'Replication of the correlation study'
    ],
    correctIndex: 1,
    explanation: 'Even a very high correlation does not prove x causes y. Establishing causation requires a well-designed controlled experiment, not just an observational study.',
    partNumber: 5,
    partTitle: 'Correlation ≠ Causation'
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'sc-ent-6a',
    question: 'A dataset has r = 0.85, but one point is far from the rest of the data. If that point is removed, r jumps to 0.96. What does this illustrate?',
    options: [
      'Outliers have no effect on r',
      'Outliers can drastically affect r — always look at the scatterplot before interpreting r',
      'The outlier should always be removed',
      'r = 0.85 is more accurate than r = 0.96'
    ],
    correctIndex: 1,
    explanation: 'Outliers can substantially change the value of r. Always examine the scatterplot before interpreting correlation to identify influential points.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'sc-ent-6b',
    question: 'If r² = 0.81, how do you interpret this value?',
    options: [
      '81% of the data points fall on the regression line',
      'The correlation is 0.81',
      'Approximately 81% of the variability in y is explained by the linear relationship with x',
      'The slope of the regression line is 0.81'
    ],
    correctIndex: 2,
    explanation: 'r² = 0.81 means approximately 81% of the variability in the response variable y is accounted for by the linear relationship with the explanatory variable x.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  // Part 7: AP Review & Applications
  {
    id: 'sc-ent-7a',
    question: 'On the AP exam, what acronym helps you remember how to describe a scatterplot?',
    options: [
      'SOCS (Shape, Outliers, Center, Spread)',
      'DFSU (Direction, Form, Strength, Unusual features)',
      'ANOVA (Analysis of Variance)',
      'CLT (Central Limit Theorem)'
    ],
    correctIndex: 1,
    explanation: 'Use DFSU to describe scatterplots: Direction (positive/negative), Form (linear/curved), Strength (strong/moderate/weak), and Unusual features (outliers/clusters).',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'sc-ent-7b',
    question: 'Which is the best interpretation of r = −0.73 in context?',
    options: [
      '"73% of the variability is explained by x."',
      '"There is a strong negative linear relationship between hours of TV watched and GPA."',
      '"Watching TV causes lower GPA."',
      '"The slope of the regression line is −0.73."'
    ],
    correctIndex: 1,
    explanation: 'Always interpret r in context: "There is a [strong/moderate/weak] [positive/negative] linear relationship between [x variable] and [y variable]."',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Creating Scatterplots' },
    { partNumber: 2, partTitle: 'Interpreting Patterns' },
    { partNumber: 3, partTitle: 'Correlation Coefficient r' },
    { partNumber: 4, partTitle: 'Properties of r' },
    { partNumber: 5, partTitle: 'Correlation ≠ Causation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
