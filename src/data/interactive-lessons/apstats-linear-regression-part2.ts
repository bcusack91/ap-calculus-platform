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
- $b$ is the **slope** and $a$ is the **$y$-intercept**; both are calculated using technology (calculator or computer output)
- $\\hat{y}$ ("y-hat") is the **predicted** value of the response for a given $x$
- The line always passes through the point $(\\bar{x}, \\bar{y})$, so if you know $b$ and the two means you can find $a = \\bar{y} - b\\bar{x}$

---

### What LSRL Minimizes

$$\\text{LSRL minimizes } \\sum (y_i - \\hat{y}_i)^2 = \\sum (\\text{residual})^2$$

This is the sum of squared residuals — hence "least squares."

---

### Interpreting Slope

**Template:** "For each additional [1 unit of $x$], the predicted [y variable] changes by [$b$ units]."

**Example:** $\\hat{y} = 12 + 3.5x$ where $x$ = hours studied, $y$ = exam score.

✅ "For each additional hour studied, the predicted exam score increases by 3.5 points."

> ⚠️ **AP Tip:** Say "predicted" (or "on average"): the slope describes the model's prediction, not a guaranteed change for every individual.

---

### Interpreting Intercept

**Template:** "When $x = 0$, the predicted [y variable] is [$a$]."

**Example:** $a = 12$ in $\\hat{y} = 12 + 3.5x$.

✅ "When a student studies 0 hours, the predicted exam score is 12 points."

> ⚠️ **Caution:** The intercept sometimes has no reasonable interpretation: $x = 0$ may be far outside the data (extrapolation), or the predicted value may be impossible, such as a negative height.

---

### Predictions & Extrapolation

| Term | Definition |
|------|-----------|
| **Interpolation** | Predicting within the interval of $x$ values used to fit the line ✓ |
| **Extrapolation** | Predicting beyond that interval ⚠️ |

> ⚠️ **Extrapolation is less reliable the farther you go.** The linear relationship may not hold outside the data range.`
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
            options: ['The sum of the residuals', 'The sum of the squared residuals', 'The sum of absolute residuals', 'The largest single residual'],
            correctAnswer: 1,
            explanation: 'The LSRL minimizes $\\sum (y_i - \\hat{y}_i)^2$, the sum of squared residuals, which is where "least squares" comes from. Plain or absolute residuals and the single largest residual are different criteria.'
          },
          {
            question: 'The LSRL always passes through:',
            options: ['The origin $(0, 0)$', 'The point $(\\bar{x}, \\bar{y})$', 'The point $(0, \\bar{y})$', 'The first and last points'],
            correctAnswer: 1,
            explanation: 'The LSRL always passes through $(\\bar{x}, \\bar{y})$, the point of means. It passes through the origin or $(0, \\bar{y})$ only by coincidence, and it need not hit any data point.'
          },
          {
            question: '$\\hat{y} = 5 + 2x$. For each 1-unit increase in $x$, $\\hat{y}$:',
            options: ['Increases by 5', 'Increases by 2', 'Is multiplied by 2', 'Increases by 7'],
            correctAnswer: 1,
            explanation: 'The slope $b = 2$ means $\\hat{y}$ increases by 2 for each 1-unit increase in $x$. The 5 is the intercept, 7 is the prediction at $x = 1$, and a linear model adds a constant rather than multiplying.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p2-input',
      type: 'input-boxes' as const,
      content: `
**LSRL Calculations** 🧮

Technology gives the slope of the LSRL as $b = 1.7$. The means are $\\bar{x} = 10$ and $\\bar{y} = 25$.

**1)** What is the intercept $a$?

**2)** What is $\\hat{y}$ when $x = 12$?

**3)** An observed point is $(12, 30)$. What is its residual?
      `,
      exercise: {
        inputs: [
          {
            label: 'Intercept a',
            correctAnswer: '8',
            explanation: 'The line passes through $(\\bar{x}, \\bar{y})$: $a = \\bar{y} - b\\bar{x} = 25 - 1.7(10) = 25 - 17 = 8$.'
          },
          {
            label: 'Predicted y',
            correctAnswer: '28.4',
            explanation: '$\\hat{y} = 8 + 1.7(12) = 8 + 20.4 = 28.4$.'
          },
          {
            label: 'Residual',
            correctAnswer: '1.6',
            explanation: 'Residual $= y - \\hat{y} = 30 - 28.4 = 1.6$.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Interpretation Practice** 🔍

$\\hat{y} = 50 - 0.8x$ where $x$ = temperature (°F), $y$ = hot chocolate sales (cups). The data cover temperatures from 20°F to 70°F.
      `,
      exercise: {
        dropdowns: [
          {
            id: 'lr2-dd1',
            label: 'The slope tells us that for each 1°F increase, predicted sales ___',
            options: ['increase by 0.8 cups', 'decrease by 0.8 cups', 'decrease by 50 cups', 'increase by 49.2 cups'],
            correctIndex: 1,
            explanation: 'Slope $= -0.8$: for each 1°F increase, predicted sales decrease by 0.8 cups. 50 is the intercept, and 49.2 is the prediction at 1°F.'
          },
          {
            id: 'lr2-dd2',
            label: 'The intercept 50 means when temperature is 0°F, predicted sales are ___',
            options: ['0 cups', '50 cups', '-0.8 cups', '49.2 cups'],
            correctIndex: 1,
            explanation: 'When $x = 0$, $\\hat{y} = 50$. Here 0°F is below the data range (20°F to 70°F), so this prediction is an extrapolation.'
          },
          {
            id: 'lr2-dd3',
            label: 'Using this model to predict sales at 120°F would be ___',
            options: ['interpolation, so reliable', 'extrapolation, so unreliable', 'interpolation, but unreliable', 'extrapolation, but reliable'],
            correctIndex: 1,
            explanation: '120°F is far outside the 20°F–70°F range, so this is extrapolation, and the prediction (a negative number of cups) shows why it is unreliable.'
          },
          {
            id: 'lr2-dd4',
            label: 'The association between temperature and hot chocolate sales is ___',
            options: ['positive', 'negative', 'zero', 'causal'],
            correctIndex: 1,
            explanation: 'A negative slope ($-0.8$) means a negative association: higher temperatures go with lower predicted sales. A regression line alone cannot show the relationship is causal.'
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
            question: 'Technology gives an LSRL slope of $b = 1.2$. The means are $\\bar{x} = 4$ and $\\bar{y} = 15$. What is the intercept $a$?',
            options: ['$19.8$', '$13.8$', '$10.2$', '$11.0$'],
            correctAnswer: 2,
            explanation: 'The line passes through $(\\bar{x}, \\bar{y})$, so $a = 15 - 1.2(4) = 15 - 4.8 = 10.2$. Adding $b\\bar{x}$ gives 19.8, subtracting only $b$ gives 13.8, and subtracting $\\bar{x}$ gives 11.0.'
          },
          {
            question: 'The intercept $a$ can be found from the slope and the means by:',
            options: ['$a = \\bar{y} - b\\bar{x}$', '$a = b\\bar{x} + \\bar{y}$', '$a = \\bar{y}/\\bar{x}$', '$a = \\bar{x} - b\\bar{y}$'],
            correctAnswer: 0,
            explanation: 'Because the LSRL passes through $(\\bar{x}, \\bar{y})$, $\\bar{y} = a + b\\bar{x}$, so $a = \\bar{y} - b\\bar{x}$. The other expressions add instead of subtract, ignore the slope, or swap the roles of $x$ and $y$.'
          },
          {
            question: '"For each additional year of experience, the predicted salary increases by \\$2,500" interprets:',
            options: ['The intercept', 'The slope', 'The correlation', 'The residual'],
            correctAnswer: 1,
            explanation: 'A predicted change in $y$ per one-unit increase in $x$ is a slope interpretation. The intercept is a prediction at $x = 0$, and correlation and residuals are not rates of change.'
          },
          {
            question: 'Extrapolation is:',
            options: ['Predicting for an $x$ inside the range of the data', 'Predicting for an $x$ outside the range of the data', 'Predicting $x$ from a known value of $y$', 'Predicting $y$ for an $x$ equal to $\\bar{x}$'],
            correctAnswer: 1,
            explanation: 'Extrapolation uses the model for $x$ values beyond those used to fit the line, and it becomes less reliable the farther out you go. Predicting inside the range is interpolation.'
          },
          {
            question: '$\\hat{y}$ (y-hat) represents:',
            options: ['An observed value of $y$', 'A predicted value of $y$', 'The mean of the $y$ values', 'The residual for a point'],
            correctAnswer: 1,
            explanation: '$\\hat{y}$ is the value of $y$ predicted by the regression equation for a given $x$. Observed values are written $y$, and a residual is $y - \\hat{y}$.'
          },
          {
            question: 'If $r < 0$, the slope $b$ of the LSRL is:',
            options: ['Positive', 'Negative', 'Zero', 'Undefined'],
            correctAnswer: 1,
            explanation: 'The slope of the LSRL and the correlation always have the same sign, so a negative association gives a negative slope.'
          },
          {
            question: 'A student writes "the slope means $y$ increases by 3." What should be added?',
            options: ['The word "exactly" before the number 3', 'The word "predicted" and the context', 'The phrase "in the sample" and nothing else', 'The value of $r^2$ for the model'],
            correctAnswer: 1,
            explanation: 'A full interpretation says the PREDICTED $y$ (in context) increases by 3 for each one-unit increase in $x$. "Exactly" is wrong because individual points vary, and $r^2$ is a separate statistic.'
          },
          {
            question: 'The intercept may have no reasonable interpretation when:',
            options: ['The slope is very large', '$x = 0$ is outside the data range', '$r$ is very close to 1', 'The sample size is large'],
            correctAnswer: 1,
            explanation: 'If $x = 0$ is beyond the interval of $x$ values in the data, interpreting the intercept is an extrapolation. The size of the slope, $r$ or the sample has nothing to do with it.'
          },
          {
            question: 'A model predicts height (cm) of a plant from days since planting: $\\hat{y} = -4.0 + 1.5x$. Why does the intercept have no logical interpretation?',
            options: ['The slope is larger than the intercept', 'No plant can be shorter than 0 cm', 'Days since planting can equal zero', 'The intercept is not a whole number'],
            correctAnswer: 1,
            explanation: 'At $x = 0$ the model predicts a height of $-4.0$ cm, which is impossible for a response with no negative values. Comparing the slope with the intercept or the fact that $x = 0$ is possible does not explain it.'
          },
          {
            question: 'If $\\bar{x} = 5$, $\\bar{y} = 20$ and $b = 3$, then $a =$',
            options: ['$5$', '$15$', '$35$', '$-5$'],
            correctAnswer: 0,
            explanation: '$a = \\bar{y} - b\\bar{x} = 20 - 3(5) = 20 - 15 = 5$. 15 is $b\\bar{x}$, 35 adds instead of subtracts, and $-5$ reverses the subtraction.'
          }
        ]
      }
    }
  ]
};
