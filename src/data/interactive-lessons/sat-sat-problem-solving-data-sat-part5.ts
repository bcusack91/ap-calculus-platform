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
    },
    {
      id: 'psd5-text2',
      type: 'text' as const,
      content: `## Deep Dive: Scatterplot Analysis

### Worked Example 1: Interpreting Slope in Context

| Step | Work |
|---|---|
| **Model** | $y = 3.5x + 120$ where $x$ = years of experience, $y$ = weekly earnings (\\$) |
| **Slope meaning** | For each additional year of experience, weekly earnings increase by \\$3.50. |
| **y-intercept** | A worker with 0 years of experience earns \\$120/week. |
| **SAT phrasing** | "The estimated increase in weekly earnings for each additional year of experience" |

### Worked Example 2: Choosing the Best Model

| Data Pattern | Best Model | How to Tell |
|---|---|---|
| Straight upward trend | Linear ($y = mx + b$) | Residuals are random |
| Curve (increasing rate) | Exponential ($y = ab^x$) | Residuals show U-pattern for linear |
| Curve (decreasing rate) | Logarithmic or square root | Curve levels off |
| Ups and downs | Quadratic ($y = ax^2 + bx + c$) | Parabolic residual pattern |

### Correlation Coefficient ($r$)

| $r$ Value | Strength | Direction |
|---|---|---|
| $r = 1.0$ | Perfect | Positive |
| $0.7 < r < 1.0$ | Strong | Positive |
| $0.3 < r < 0.7$ | Moderate | Positive |
| $0 < r < 0.3$ | Weak | Positive |
| $r = 0$ | None | — |
| $r < 0$ | Same scale, opposite direction | Negative |

> **SAT key fact:** $r^2$ = proportion of variation in $y$ explained by $x$. If $r = 0.8$, then $r^2 = 0.64$, meaning 64% of the variation is explained.`
    },
    {
      id: 'psd5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Scatterplot Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A line of best fit is $y = -2.1x + 95$. What does the slope mean in context if $x$ = hours of TV and $y$ = test score?',
            options: ['For each additional hour of TV, the predicted test score decreases by 2.1 points', 'Students who watch TV score 2.1 points higher', 'The prediction is 95% accurate', 'Every student loses 2.1 points'],
            correctAnswer: 0,
            explanation: 'Slope $= -2.1$ means for each 1-unit increase in $x$ (hour of TV), $y$ (score) decreases by 2.1. It\'s a predicted/estimated change, not exact for every student.'
          },
          {
            question: 'A residual plot for a linear model shows a clear U-shaped curve. This suggests:',
            options: ['A nonlinear model (quadratic) would be a better fit', 'The linear model is excellent', 'There are too many outliers', 'The data has no correlation'],
            correctAnswer: 0,
            explanation: 'Patterned residuals (U-shape, curves) indicate the model type is wrong. A quadratic or other nonlinear model would better capture the pattern.'
          },
          {
            question: 'The correlation between hours studied and score is $r = 0.9$. What percent of the variation in scores is explained by hours studied?',
            options: ['$81\\%$', '$90\\%$', '$9\\%$', '$45\\%$'],
            correctAnswer: 0,
            explanation: '$r^2 = (0.9)^2 = 0.81 = 81\\%$. The coefficient of determination $r^2$ gives the proportion of variation explained.'
          }
        ]
      }
    },
    {
      id: 'psd5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Scatterplot Interpretation** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Positive residual means actual value is [above|below|on|unrelated to] the line',
          'Extrapolation predicts [outside|within|at the center of|exactly at] the data range',
          'Correlation $r = -0.85$ indicates a [strong negative|weak negative|strong positive|no] relationship',
          'Curved residual pattern suggests [wrong model type|good fit|no correlation|outliers]'
        ],
        correctAnswers: ['above', 'outside', 'strong negative', 'wrong model type'],
        hint1: 'Residual = actual − predicted. Positive means actual is higher.',
        hint2: 'Extrapolation goes beyond what the data covers.',
        hint3: '$|r|$ close to 1 = strong. Negative sign = negative direction.',
        explanation: 'Positive residual → above the line. Extrapolation → outside data range (unreliable). r = −0.85 → strong negative. Curved residuals → model doesn\'t capture the pattern.'
      }
    },
    {
      id: 'psd5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary: Scatterplots & Best Fit

| Concept | Key Fact |
|---|---|
| Slope | Rate of change in context |
| y-intercept | Predicted value when $x = 0$ |
| Residual | Actual − predicted |
| $r$ | Strength and direction of linear relationship |
| $r^2$ | Proportion of variation explained |
| Random residuals | Good model fit |
| Patterned residuals | Try different model type |
| Interpolation | Reliable (within data range) |
| Extrapolation | Unreliable (beyond data range) |

*Next: Probability and expected value →*`
    }
  ]
};
