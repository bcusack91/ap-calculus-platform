export const satProbSolvDataPart5Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'psd5-intro',
      type: 'text' as const,
      content: `# Scatterplots & Line of Best Fit

**Part 5 of 7 — Interpreting Trends and Making Predictions**

### Reading Scatterplots
- **Positive association**: as x increases, y increases (upward trend)
- **Negative association**: as x increases, y decreases (downward trend)
- **No association**: no visible pattern

### Line/Curve of Best Fit
The line that minimizes the total distance from all points. Key interpretations:
- **Slope** = rate of change (For each 1-unit increase in x, y changes by [slope])
- **y-intercept** = predicted y-value when x = 0

### Making Predictions
Use the equation to predict values:
- If y = 2.3x + 15 models study hours vs. test score:
- 10 hours → predicted score: 2.3(10) + 15 = **38**

### Interpolation vs. Extrapolation
- **Interpolation** (within data range): reliable predictions
- **Extrapolation** (beyond data range): unreliable — the trend may not continue

### Residuals
Residual = actual – predicted
- **Positive residual**: actual is above the line
- **Negative residual**: actual is below the line
- Random residuals → good model
- Patterned residuals (curved) → wrong model type`
    },
    {
      id: 'psd5-q1',
      type: 'quiz' as const,
      question: 'A scatterplot shows hours studied (x) vs. test score (y) with line of best fit y = 5.2x + 42. A student who studied 8 hours scored 90. What is the residual?',
      options: [
        '6.4',
        '-6.4',
        '48',
        '83.6'
      ],
      correctAnswer: 0,
      explanation: 'Predicted score = 5.2(8) + 42 = 41.6 + 42 = 83.6. Actual score = 90. Residual = actual − predicted = 90 − 83.6 = 6.4. Positive residual means the student scored above the predicted value.'
    }
  ]
};
