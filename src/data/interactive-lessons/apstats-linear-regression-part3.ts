export const apStatsLinRegPart3Data = {
  topicSlug: 'linear-regression-apstats',
  sections: [
    {
      id: 'apstats-linearregression-p3-intro',
      type: 'text' as const,
      content: `# 📊 Residuals and Residual Plots

**Part 3 of 7 — Assessing the Fit of a Linear Model**

---

### Topics in This Part

| Section |
|---------|
| 📐 What Is a Residual? |
| 📊 Residual Plots |
| ✅ Good vs. Bad Patterns |
| 📝 Worked Example |

> 🔑 **Key Concept:** A residual is the vertical distance from a data point to the regression line. Residual plots help us assess whether a linear model is appropriate.

---

### Residual Formula

$$\\boxed{\\text{residual} = y - \\hat{y} = \\text{observed} - \\text{predicted}}$$

| Sign | Meaning |
|------|---------|
| Residual $> 0$ | Point is **above** the line — the model **underpredicts** (underestimates) |
| Residual $< 0$ | Point is **below** the line — the model **overpredicts** (overestimates) |
| Residual $= 0$ | Point is exactly on the line |

The LSRL is the line that makes the sum of the **squared** residuals as small as possible.

---

### Residual Plots

A **residual plot** is a scatterplot of the residuals (vertical axis) versus the predicted values $\\hat{y}$ or the explanatory variable $x$ (horizontal axis).

### Reading Residual Plots

| Pattern | Interpretation |
|---------|---------------|
| Apparent randomness around residual $= 0$ | ✅ Confirms a linear form; the linear model is appropriate |
| Curvature (U or ∩ shape) | ❌ The relationship is not linear; a linear model is not the most appropriate model |
| A point far above or below 0 | ⚠️ A point that doesn't fit the pattern: the model predicts it poorly; investigate it |

> 🔑 **AP Tip:** A correlation close to $\\pm 1$ is not enough. Look at the residual plot before trusting a linear model.

---

### Worked Example

$\\hat{y} = 10 + 2x$. Data point: $(5, 23)$.

$$\\hat{y} = 10 + 2(5) = 20$$
$$\\text{residual} = 23 - 20 = 3$$

The residual is $+3$: the observed value is 3 units above the predicted value, so the model underpredicts this point by 3.`
    },
    {
      id: 'apstats-linearregression-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Residual Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A residual of $-5$ means:',
            options: ['The point is 5 above the line', 'The point is 5 units below the line', 'The slope of the line is $-5$', 'The prediction is 5 units too low'],
            correctAnswer: 1,
            explanation: 'Residual $= y - \\hat{y} = -5$, so the observed value is 5 units below the predicted value: the model overpredicts by 5. A negative residual is not a slope, and "prediction too low" describes a positive residual.'
          },
          {
            question: 'Curvature in the residual plot suggests:',
            options: ['The linear model fits the data well', 'A linear model is not the best model', 'The residuals were miscalculated', 'The correlation must be close to 0'],
            correctAnswer: 1,
            explanation: 'Curvature in a residual plot means the linear model misses a systematic pattern, so a linear model is not the most appropriate model. The correlation can still be large when the pattern is curved.'
          },
          {
            question: 'A residual plot for a linear model shows apparent random scatter around 0. This:',
            options: ['Shows that $x$ causes changes in $y$', 'Confirms that the form is linear', 'Shows that every residual is exactly 0', 'Means the linear correlation must equal 1'],
            correctAnswer: 1,
            explanation: 'Apparent randomness in the residual plot confirms the linear form, so the linear model is appropriate. It says nothing about causation, and residuals can be scattered without being 0 or giving $r = 1$.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p3-input',
      type: 'input-boxes' as const,
      content: `
**Residual Calculations** 🧮

LSRL: $\\hat{y} = 15 + 4x$

**1)** Point $(3, 30)$. Residual $=$

**2)** Point $(5, 33)$. Residual $=$

**3)** Point $(2, 20)$. The model ___ $y$ for this point (enter "overestimates" or "underestimates").
      `,
      exercise: {
        inputs: [
          {
            label: 'Residual at x=3',
            correctAnswer: '3',
            explanation: '$\\hat{y} = 15 + 4(3) = 27$. Residual $= 30 - 27 = 3$.'
          },
          {
            label: 'Residual at x=5',
            correctAnswer: '-2',
            explanation: '$\\hat{y} = 15 + 4(5) = 35$. Residual $= 33 - 35 = -2$.'
          },
          {
            label: 'Over or under',
            correctAnswer: 'overestimates',
            explanation: '$\\hat{y} = 15 + 4(2) = 23$, but $y = 20$. Residual $= 20 - 23 = -3 < 0$, so the model overestimates (overpredicts) $y$ for this point.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Residual Plot Patterns** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'lr3-dd1',
            label: 'Random scatter in the residual plot → the linear model is',
            options: ['appropriate', 'not appropriate', 'proven causal', 'a perfect fit'],
            correctIndex: 0,
            explanation: 'No pattern means the linear model captures the form of the relationship. Random scatter does not mean the fit is perfect or causal.'
          },
          {
            id: 'lr3-dd2',
            label: 'U-shaped curve in the residual plot → the relationship is',
            options: ['linear', 'not linear', 'strongly linear', 'perfect'],
            correctIndex: 1,
            explanation: 'Curvature in the residual plot reveals a nonlinear form that the linear model misses.'
          },
          {
            id: 'lr3-dd3',
            label: 'A residual plot graphs the residuals against',
            options: ['the observed $y$ values only', 'the predicted values or $x$', 'the sample means', 'the correlation $r$'],
            correctIndex: 1,
            explanation: 'A residual plot is a scatterplot of residuals versus the predicted values $\\hat{y}$ (or the explanatory variable $x$).'
          },
          {
            id: 'lr3-dd4',
            label: 'One point with a residual far from 0 is a point that ___',
            options: ['lies exactly on the line', 'does not fit the overall pattern', 'sets the slope to 0', 'has the smallest $x$'],
            correctIndex: 1,
            explanation: 'A large residual means the observed $y$ is far from the predicted value: the point does not fit the general pattern of the data.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Residuals** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Residual = observed $-$ predicted. If $y = 50$ and $\\hat{y} = 48$, then the residual is',
            options: ['$-2$', '$2$', '$48$', '$98$'],
            correctAnswer: 1,
            explanation: 'Residual $= 50 - 48 = 2$, so the point is 2 units above the line. $-2$ reverses the subtraction, and 48 and 98 are not differences.'
          },
          {
            question: 'The residual plot is used to:',
            options: ['Calculate the value of the correlation $r$', 'Check if a linear model is appropriate', 'Find the slope of the least-squares line', 'Predict the response $y$ for a new value of $x$'],
            correctAnswer: 1,
            explanation: 'A residual plot reveals patterns, such as curvature, that show whether the linear model is appropriate. $r$, the slope and predictions come from the regression itself.'
          },
          {
            question: 'If all residuals are close to 0, the model:',
            options: ['Is a poor fit for the data overall', 'Makes small prediction errors', 'Must have a slope that is negative', 'Must have a correlation close to 0'],
            correctAnswer: 1,
            explanation: 'Small residuals mean the predicted values are close to the observed values. The sign of the slope is unrelated, and a near-perfect fit goes with $|r|$ near 1, not 0.'
          },
          {
            question: 'A positive residual means the model:',
            options: ['Overestimates $y$', 'Underestimates $y$', 'Predicts $y$ exactly', 'Has a positive slope'],
            correctAnswer: 1,
            explanation: 'Residual $> 0$ means $y > \\hat{y}$: the observed value is above the prediction, so the model underestimates (underpredicts). The sign of a residual says nothing about the slope.'
          },
          {
            question: 'A residual plot shows residuals that are negative for small and large $x$ and positive in the middle. This means:',
            options: ['The linear model is appropriate', 'The relationship is curved', 'The residuals are miscalculated', 'The slope must be negative'],
            correctAnswer: 1,
            explanation: 'A ∩-shaped pattern is curvature, so the relationship is not linear and a linear model is not the most appropriate. Residual plots of a linear fit can show curvature whatever the sign of the slope.'
          },
          {
            question: '$\\hat{y} = 20 + 5x$. At $x = 4$, $y = 38$. The residual is:',
            options: ['$2$', '$-2$', '$40$', '$38$'],
            correctAnswer: 1,
            explanation: '$\\hat{y} = 20 + 5(4) = 40$. Residual $= 38 - 40 = -2$; $+2$ reverses the order of subtraction.'
          },
          {
            question: 'The LSRL minimizes:',
            options: ['$\\sum |y - \\hat{y}|$', '$\\sum (y - \\hat{y})$', '$\\sum (y - \\hat{y})^2$', '$\\max |y - \\hat{y}|$'],
            correctAnswer: 2,
            explanation: 'The LSRL minimizes the sum of squared residuals, $\\sum (y - \\hat{y})^2$. The other quantities define different, non-least-squares criteria.'
          },
          {
            question: 'Which residual plot pattern is IDEAL for a linear model?',
            options: ['A clear U-shape', 'Random scatter', 'A clear ∩-shape', 'A straight rising line'],
            correctAnswer: 1,
            explanation: 'Random scatter with no pattern indicates the linear model is appropriate. U, ∩ or linear trends in a residual plot all mean the model misses structure.'
          },
          {
            question: 'A model predicts a car is worth \\$14,200, but it sold for \\$12,900. The residual is:',
            options: ['\\$1,300', '-\\$1,300', '\\$27,100', '\\$12,900'],
            correctAnswer: 1,
            explanation: 'Residual $=$ observed $-$ predicted $= 12{,}900 - 14{,}200 = -1{,}300$ dollars, so the model overpredicted the price. A positive value reverses the subtraction.'
          },
          {
            question: 'If the residual plot shows a clear curved pattern, you should:',
            options: ['Use the linear model anyway', 'Conclude the linear model is not the best', 'Increase the sample size and refit', 'Remove the points with the largest $x$'],
            correctAnswer: 1,
            explanation: 'Curvature in the residual plot means a linear model is not the most appropriate model for the data. More data or deleting points does not remove a curved form.'
          }
        ]
      }
    }
  ]
};
