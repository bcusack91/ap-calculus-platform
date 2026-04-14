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
      id: 'ds3-text2',
      type: 'text' as const,
      content: `### Worked Example 1 — Interpreting Slope in Context

**Regression: $\\hat{y} = 0.85x + 12$, where $x$ = hours practiced per week and $y$ = free-throw percentage.**

| Component | Value | Interpretation |
|-----------|-------|---------------|
| Slope | 0.85 | For each additional hour of practice, free-throw % is predicted to increase by 0.85 points |
| y-intercept | 12 | A player who practices 0 hours is predicted to have a 12% free-throw rate |

**SAT phrasing:** "The slope means that for each additional hour of weekly practice, the predicted free-throw percentage increases by 0.85 percentage points."

### Worked Example 2 — Residual Analysis

**A student studies 8 hours and scores 92. The regression line predicts $\\hat{y} = 3(8) + 65 = 89$.**

| Step | Work |
|------|------|
| Residual | $92 - 89 = 3$ |
| Meaning | Student scored 3 points above prediction |
| On graph | Point is 3 units above the line |

### Correlation vs. Causation

| Statement | Valid? |
|-----------|--------|
| "Hours of study is correlated with higher grades" | ✅ (describes relationship) |
| "Studying more hours causes higher grades" | ⚠️ Only valid if from a controlled experiment |
| "The data proves studying improves grades" | ❌ "Proves" is too strong for any study |

### Choosing a Model

If a residual plot shows a clear curve, a linear model is NOT the best fit — try quadratic or exponential.`
    },
    {
      id: 'ds3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Scatterplot Interpretation** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\hat{y} = -1.2x + 100$, where $x$ = absences and $y$ = final grade. What does the slope mean?',
            options: ['Each additional absence predicts a 1.2 point decrease in final grade', 'Each additional absence causes a 1.2 point drop', 'The final grade starts at 1.2', 'Absences and grades are unrelated'],
            correctAnswer: 0,
            explanation: 'Negative slope: as absences increase, grade decreases. Each additional absence → predicted decrease of 1.2 points. Use "predicts," not "causes."'
          },
          {
            question: 'A residual plot shows a U-shape (curved pattern). This suggests:',
            options: ['A non-linear model would fit better', 'The linear model is excellent', 'The data has no pattern', 'The slope should be negative'],
            correctAnswer: 0,
            explanation: 'A pattern in the residual plot (like a curve) means the linear model is missing something — a quadratic or other non-linear model would fit better.'
          },
          {
            question: 'The correlation coefficient $r = -0.92$. This indicates:',
            options: ['Strong negative linear relationship', 'Weak negative relationship', 'Strong positive relationship', 'No relationship'],
            correctAnswer: 0,
            explanation: '$r$ close to $-1$ means strong negative correlation. The points closely follow a downward line.'
          }
        ]
      }
    },
    {
      id: 'ds3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Interpret the Regression** 🔍\n\nFor the equation $\\hat{y} = 2.5x + 40$ where $x$ = study hours and $y$ = test score:',
      exercise: {
        dropdowns: [
          { label: 'The slope (2.5) means:', options: ['Each additional study hour predicts a 2.5 point increase', 'The test score is always 2.5', 'Studying 2.5 hours is the minimum', '2.5% of students passed'] },
          { label: 'The y-intercept (40) represents:', options: ['Predicted score with 0 study hours', 'The minimum possible score', 'The average score', 'The number of students'] },
          { label: 'A student who studies 12 hours, predicted score:', options: ['70', '52.5', '40', '30'] },
          { label: 'If actual score at $x=12$ is 75, the residual is:', options: ['5', '−5', '75', '70'] }
        ],
        correctAnswers: ['Each additional study hour predicts a 2.5 point increase', 'Predicted score with 0 study hours', '70', '5'],
        hint1: 'Slope = change in $y$ per unit change in $x$.',
        hint2: 'y-intercept is the value when $x = 0$.',
        hint3: 'Predicted at $x = 12$: $2.5(12) + 40 = 30 + 40 = 70$. Residual = actual − predicted.',
        explanation: 'Slope: +2.5 points per hour. y-intercept: predicted score at 0 hours = 40. At $x=12$: $2.5(12)+40=70$. Residual: $75-70=5$ (above the line).'
      }
    },
    {
      id: 'ds3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Concept | Key Rule |
|---------|----------|
| Slope | Predicted change in $y$ per 1-unit increase in $x$ |
| y-intercept | Predicted $y$ when $x = 0$ |
| Residual | Actual − Predicted |
| Positive residual | Point above the line |
| Negative residual | Point below the line |
| $r$ close to ±1 | Strong linear correlation |
| $r$ close to 0 | Weak or no linear correlation |

| SAT Wording | Correct Response |
|-------------|-----------------|
| "What does the slope represent?" | "For each additional [x-unit], [y] is predicted to change by [slope]" |
| "Does this prove causation?" | Only if randomized experiment |
| "Is the linear model appropriate?" | Check the residual plot for patterns |`
    }
  ]
};
