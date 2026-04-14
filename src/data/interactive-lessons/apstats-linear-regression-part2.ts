export const apStatsLinRegPart2Data = {
  topicSlug: 'linear-regression-apstats',
  sections: [
    {
      id: 'apstats-linearregression-p2-intro',
      type: 'text' as const,
      content: `# 📊 Least-Squares Regression Line

**Part 2 of 7 — The LSRL**

---

### Topics in This Part

| Section |
|---------|
| 📐 What the LSRL Minimizes |
| 🧮 The Equation & Slope/Intercept |
| 📝 Interpreting Slope and Intercept |
| 📊 Predictions & Extrapolation |

> 🔑 **Key Concept:** The least-squares regression line (LSRL) is the line that minimizes the sum of the squared residuals — the best-fit line through a scatterplot.

---

### The LSRL Equation

$$\\boxed{\\hat{y} = a + bx}$$

where:
- $b = r \\cdot \\frac{s_y}{s_x}$ (slope)
- $a = \\bar{y} - b\\bar{x}$ (intercept)
- The line always passes through the point $(\\bar{x}, \\bar{y})$

---

### What LSRL Minimizes

$$\\text{LSRL minimizes } \\sum (y_i - \\hat{y}_i)^2 = \\sum e_i^2$$

This is the sum of squared residuals — hence "least squares."

---

### Interpreting Slope

**Template:** "For each additional [1 unit of $x$], the predicted [y variable] changes by [$b$ units], on average."

**Example:** $\\hat{y} = 12 + 3.5x$ where $x$ = hours studied, $y$ = exam score.

✅ "For each additional hour studied, the predicted exam score increases by 3.5 points, on average."

> ⚠️ **AP Tip:** Include "predicted" and "on average" for full credit.

---

### Interpreting Intercept

**Template:** "When $x = 0$, the predicted [y variable] is [$a$]."

**Example:** $a = 12$ in $\\hat{y} = 12 + 3.5x$.

✅ "When a student studies 0 hours, the predicted exam score is 12 points."

> ⚠️ **Caution:** The intercept often has no practical meaning (e.g., studying 0 hours). State the interpretation but note if $x = 0$ is outside the data range.

---

### Predictions & Extrapolation

| Term | Definition |
|------|-----------|
| **Interpolation** | Predicting within the range of observed $x$ values ✓ |
| **Extrapolation** | Predicting outside the range of observed $x$ values ⚠️ |

> ⚠️ **Extrapolation is unreliable.** The linear relationship may not hold outside the data range.`
    },
    {
      id: 'apstats-linearregression-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**LSRL Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The LSRL minimizes:',
            options: ['The sum of residuals', 'The sum of squared residuals', 'The sum of absolute residuals', 'The correlation coefficient'],
            correctAnswer: 1,
            explanation: 'LSRL minimizes $\\sum (y_i - \\hat{y}_i)^2$ — the sum of squared residuals.'
          },
          {
            question: 'The LSRL always passes through:',
            options: ['The origin $(0, 0)$', '$(\\bar{x}, \\bar{y})$', '$(s_x, s_y)$', 'All data points'],
            correctAnswer: 1,
            explanation: 'The LSRL always passes through $(\\bar{x}, \\bar{y})$ — the point of averages.'
          },
          {
            question: '$\\hat{y} = 5 + 2x$. For each 1-unit increase in $x$, $\\hat{y}$:',
            options: ['Increases by 5', 'Increases by 2', 'Doubles', 'Increases by 7'],
            correctAnswer: 1,
            explanation: 'The slope $b = 2$ tells us $\\hat{y}$ increases by 2 for each 1-unit increase in $x$.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p2-input',
      type: 'input-boxes' as const,
      content: `
**LSRL Calculations** 🧮

Given: $\\bar{x} = 10$, $\\bar{y} = 25$, $s_x = 4$, $s_y = 8$, $r = 0.85$.

**1)** What is the slope $b$?

**2)** What is the intercept $a$?

**3)** What is $\\hat{y}$ when $x = 12$?
      `,
      exercise: {
        inputs: [
          {
            label: 'Slope b',
            correctAnswer: '1.7',
            explanation: '$b = r \\cdot s_y/s_x = 0.85 \\times 8/4 = 0.85 \\times 2 = 1.7$.'
          },
          {
            label: 'Intercept a',
            correctAnswer: '8',
            explanation: '$a = \\bar{y} - b\\bar{x} = 25 - 1.7(10) = 25 - 17 = 8$.'
          },
          {
            label: 'Predicted y',
            correctAnswer: '28.4',
            explanation: '$\\hat{y} = 8 + 1.7(12) = 8 + 20.4 = 28.4$.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Interpretation Practice** 🔍

$\\hat{y} = 50 - 0.8x$ where $x$ = temperature (°F), $y$ = hot chocolate sales.
      `,
      exercise: {
        dropdowns: [
          {
            id: 'lr2-dd1',
            label: 'The slope tells us that for each 1°F increase, predicted sales ___',
            options: ['increase by 0.8', 'decrease by 0.8', 'increase by 50', 'stay the same'],
            correctIndex: 1,
            explanation: 'Slope = $-0.8$. For each 1°F increase, predicted sales decrease by 0.8 units.'
          },
          {
            id: 'lr2-dd2',
            label: 'The intercept 50 means when temperature is 0°F, predicted sales are ___',
            options: ['0', '50', '-0.8', 'undefined'],
            correctIndex: 1,
            explanation: 'When $x = 0$, $\\hat{y} = 50$. Whether this is meaningful depends on whether 0°F is in the data range.'
          },
          {
            id: 'lr2-dd3',
            label: 'Using this model to predict sales at 120°F would be ___',
            options: ['interpolation — reliable', 'extrapolation — unreliable'],
            correctIndex: 1,
            explanation: '120°F is likely far outside the data range. Extrapolation is unreliable.'
          },
          {
            id: 'lr2-dd4',
            label: 'The relationship between temperature and hot chocolate sales is ___',
            options: ['positive', 'negative', 'zero', 'undefined'],
            correctIndex: 1,
            explanation: 'Negative slope ($-0.8$) means a negative linear relationship: higher temperature → lower sales.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — LSRL** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$b = r \\cdot s_y / s_x$. If $r = 0.6$, $s_y = 10$, $s_x = 5$, then $b =$',
            options: ['$0.6$', '$1.2$', '$3.0$', '$0.3$'],
            correctAnswer: 1,
            explanation: '$b = 0.6 \\times 10/5 = 0.6 \\times 2 = 1.2$.'
          },
          {
            question: 'The intercept $a$ is found by:',
            options: ['$a = \\bar{y} - b\\bar{x}$', '$a = b\\bar{x} + \\bar{y}$', '$a = r \\cdot s_x/s_y$', '$a = \\bar{x} - b\\bar{y}$'],
            correctAnswer: 0,
            explanation: '$a = \\bar{y} - b\\bar{x}$, ensuring the line passes through $(\\bar{x}, \\bar{y})$.'
          },
          {
            question: '"For each additional year, the predicted salary increases by $2{,}500$" interprets:',
            options: ['The intercept', 'The slope', 'The correlation', '$r^2$'],
            correctAnswer: 1,
            explanation: 'This is a slope interpretation: per-unit change in $x$ → predicted change in $y$.'
          },
          {
            question: 'Extrapolation is:',
            options: ['Always reliable', 'Predicting outside the $x$-range of the data', 'Predicting within the $x$-range', 'The same as interpolation'],
            correctAnswer: 1,
            explanation: 'Extrapolation uses the model beyond the observed data range and is unreliable because the pattern may change.'
          },
          {
            question: '$\\hat{y}$ (y-hat) represents:',
            options: ['An observed value', 'A predicted value from the LSRL', 'The mean of $y$', 'The residual'],
            correctAnswer: 1,
            explanation: '$\\hat{y}$ is the predicted (fitted) value for a given $x$ using the regression equation.'
          },
          {
            question: 'If $r$ is negative, the slope $b$ is:',
            options: ['Positive', 'Negative', 'Zero', 'Cannot tell'],
            correctAnswer: 1,
            explanation: '$b = r \\cdot s_y/s_x$. Since $s_y$ and $s_x$ are always positive, $b$ has the same sign as $r$.'
          },
          {
            question: 'A student writes "the slope means $y$ increases by 3." Missing words:',
            options: ['"on average" and "predicted"', '"exactly" and "always"', '"in the sample" only', 'Nothing — it is complete'],
            correctAnswer: 0,
            explanation: 'Full AP interpretation: "the predicted $y$ increases by 3, on average." Both qualifiers matter.'
          },
          {
            question: 'The intercept may have no practical meaning when:',
            options: ['The slope is large', '$x = 0$ is outside the data range', '$r$ is close to 1', 'The sample is large'],
            correctAnswer: 1,
            explanation: 'If $x = 0$ is not a plausible value (e.g., 0 square feet for house price), the intercept has no practical interpretation.'
          },
          {
            question: 'The sum of residuals from the LSRL is always:',
            options: ['Positive', 'Negative', 'Zero', 'Equal to $n$'],
            correctAnswer: 2,
            explanation: 'A mathematical property of the LSRL is that $\\sum e_i = \\sum (y_i - \\hat{y}_i) = 0$.'
          },
          {
            question: 'If $\\bar{x} = 5$ and $\\bar{y} = 20$, and $b = 3$, then $a =$',
            options: ['$5$', '$15$', '$35$', '$-5$'],
            correctAnswer: 0,
            explanation: '$a = \\bar{y} - b\\bar{x} = 20 - 3(5) = 20 - 15 = 5$.'
          }
        ]
      }
    }
  ]
};
