export const satDataStatsPart3Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds3-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 3 of 7 — Scatterplots & Line of Best Fit**

### Scatterplots

Each point represents two measurements for one individual/item.

### Correlation

- **Positive**: as $x$ increases, $y$ increases
- **Negative**: as $x$ increases, $y$ decreases
- **No correlation**: no clear pattern
- **Strength**: how closely points follow a line (strong vs. weak)

### Line of Best Fit (Regression Line)

$y = ax + b$ where:
- $a$ (slope) = predicted change in $y$ for each 1-unit increase in $x$
- $b$ (y-intercept) = predicted $y$ when $x = 0$

### Residuals

$$\\text{Residual} = \\text{Actual} - \\text{Predicted}$$

- Positive residual: point is **above** the line
- Negative residual: point is **below** the line

### SAT Strategy

"According to the line of best fit..." → plug into the equation and calculate.

"The slope of the line means..." → interpret as "for each additional [x-unit], the [y-quantity] increases/decreases by [slope]."`
    },
    {
      id: 'ds3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Scatterplots** 🎯',
      exercise: {
        questions: [
          {
            question: 'A line of best fit is $y = 2.3x + 10$. For a data point at $x = 5$ with actual $y = 25$, the residual is:',
            options: ['$3.5$', '$-3.5$', '$21.5$', '$25$'],
            correctAnswer: 0,
            explanation: 'Predicted: $2.3(5) + 10 = 21.5$. Residual = actual $-$ predicted $= 25 - 21.5 = 3.5$.'
          },
          {
            question: 'A scatterplot of study hours vs. exam score has a line of best fit with slope 8.5. This means:',
            options: ['Each additional hour of study predicts an 8.5 point increase in exam score', 'Each 8.5 hours of study guarantees a 1 point increase', 'The average exam score is 8.5', 'There is a weak positive correlation'],
            correctAnswer: 0,
            explanation: 'The slope represents the predicted change in $y$ (score) per unit change in $x$ (hours). Each additional hour → predicted 8.5 point increase.'
          },
          {
            question: 'If most residuals in a residual plot are positive, this suggests:',
            options: ['The line of best fit underestimates the data', 'The line of best fit overestimates the data', 'The model is perfect', 'There is no correlation'],
            correctAnswer: 0,
            explanation: 'Positive residuals mean actual > predicted, so the line is below most points — it underestimates.'
          }
        ]
      }
    },
    {
      id: 'ds3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Slope = predicted $y$-change per unit $x$-change
- Residual = actual − predicted (positive = above line, negative = below)
- Correlation ≠ causation (the SAT tests this!)
- Interpret slope in context: "for each additional ___, the ___ is predicted to ___"`
    }
  ]
};
