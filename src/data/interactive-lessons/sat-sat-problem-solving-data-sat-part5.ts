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
The line that follows the overall trend of the points as closely as possible. Key interpretations:
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
| Curve (decreasing rate) | Growth that slows, such as $y = a\\sqrt{x}$ | Curve levels off |
| Ups and downs | Quadratic ($y = ax^2 + bx + c$) | Parabolic residual pattern |

### Worked Example 3: Describing an Association in Words

The SAT describes an association in words: direction, form, and strength.

| What the scatterplot looks like | How to describe it |
|---|---|
| Points lie close to a rising line | Strong positive linear association |
| Points loosely follow a rising line, widely scattered | Weak positive linear association |
| Points lie close to a falling line | Strong negative linear association |
| Points follow a curve | Nonlinear association |
| Points form a cloud with no upward or downward trend | No clear association |

> **SAT key fact:** strength is how closely the points follow the trend, not how steep the trend is. A steep line with widely scattered points is a weak association; a gentle line that the points hug is a strong one.`
    },
    {
      id: 'psd5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Scatterplot Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A line of best fit is $y = -2.1x + 95$. What does the slope mean in context if $x$ = hours of TV and $y$ = test score?',
            options: ['For each additional hour of TV, the predicted test score decreases by 2.1 points', 'For each additional hour of TV, the predicted test score increases by 2.1 points', 'For each additional hour of TV, every student\'s score drops by exactly 2.1 points', 'For each additional point of test score, predicted TV time falls by 2.1 hours'],
            correctAnswer: 0,
            explanation: 'Slope $= -2.1$ means for each 1-unit increase in $x$ (hour of TV), $y$ (score) decreases by 2.1. It\'s a predicted/estimated change, not exact for every student.'
          },
          {
            question: 'A residual plot for a linear model shows a clear U-shaped curve. This suggests:',
            options: ['A nonlinear model would fit these data better', 'The linear model already fits the data well', 'The data set contains too many outliers', 'The two variables have no association'],
            correctAnswer: 0,
            explanation: 'Patterned residuals (U-shape, curves) indicate the model type is wrong. A quadratic or other nonlinear model would better capture the pattern.'
          },
          {
            question: 'In scatterplot A, the points lie very close to a line of best fit with slope $0.5$. In scatterplot B, the points are widely scattered around a line of best fit with slope $4$. Which statement is true?',
            options: ['The association in A is stronger than in B', 'The association in B is stronger than in A', 'The association in A is as strong as in B', 'Neither scatterplot shows any association'],
            correctAnswer: 0,
            explanation: 'Strength measures how closely the points follow the trend, not how steep the line is. The points in A hug their line, so A shows a strong association; the points in B are widely scattered, so B shows a weak one. Both lines have positive slopes, so both scatterplots show some positive association.'
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
          'Points lying close to a falling line show a [strong negative|weak negative|strong positive|no] association',
          'Curved residual pattern suggests [wrong model type|good fit|no association|outliers]'
        ],
        correctAnswers: ['above', 'outside', 'strong negative', 'wrong model type'],
        hint1: 'Residual = actual − predicted. Positive means actual is higher.',
        hint2: 'Extrapolation goes beyond what the data covers.',
        hint3: 'Close to the line = strong. Falling from left to right = negative.',
        explanation: 'Positive residual → above the line. Extrapolation → outside data range (unreliable). Points close to a falling line → strong negative. Curved residuals → model doesn\'t capture the pattern.'
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
| Direction | Positive (rising) or negative (falling) trend |
| Strength | How closely the points follow the trend |
| Random residuals | Good model fit |
| Patterned residuals | Try different model type |
| Interpolation | Reliable (within data range) |
| Extrapolation | Unreliable (beyond data range) |

*Next: Probability →*`
    }
  ]
};
