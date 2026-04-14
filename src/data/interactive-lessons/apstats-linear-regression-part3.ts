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

$$\\boxed{e_i = y_i - \\hat{y}_i = \\text{observed} - \\text{predicted}}$$

| Sign | Meaning |
|------|---------|
| $e > 0$ | Point is **above** the line — model underestimates |
| $e < 0$ | Point is **below** the line — model overestimates |
| $e = 0$ | Point is exactly on the line |

---

### Properties of Residuals

1. $\\sum e_i = 0$ (residuals always sum to zero)
2. The mean of residuals = 0
3. $\\sum e_i^2$ is minimized by the LSRL

---

### Residual Plots

A **residual plot** plots residuals ($e$) on the $y$-axis vs. the explanatory variable ($x$) or fitted values ($\\hat{y}$) on the $x$-axis.

### Reading Residual Plots

| Pattern | Interpretation |
|---------|---------------|
| Random scatter around $e = 0$ | ✅ Linear model is appropriate |
| Curved pattern (U or ∩) | ❌ Relationship is nonlinear — use a transformation |
| Fan shape (spread changes) | ❌ Non-constant variance — predictions are less reliable at some $x$ values |
| Outliers | ⚠️ Individual points far from $e = 0$ — investigate |

> 🔑 **AP Tip:** The residual plot is your most important diagnostic tool. ALWAYS examine it before trusting a regression.

---

### Worked Example

$\\hat{y} = 10 + 2x$. Data point: $(5, 23)$.

$$\\hat{y} = 10 + 2(5) = 20$$
$$e = 23 - 20 = 3$$

The residual is $+3$: the observed value is 3 units above the predicted value.`
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
            options: ['The point is 5 above the line', 'The point is 5 below the line', 'The slope is $-5$', 'The model is perfect'],
            correctAnswer: 1,
            explanation: '$e = y - \\hat{y} = -5$ means the observed value is 5 units below the predicted value.'
          },
          {
            question: 'A curved pattern in the residual plot suggests:',
            options: ['The linear model fits well', 'A nonlinear relationship', 'The residuals sum to zero', 'A strong correlation'],
            correctAnswer: 1,
            explanation: 'A curved residual plot indicates the relationship is not linear. Consider a nonlinear model or transformation.'
          },
          {
            question: 'The sum of all residuals from the LSRL is:',
            options: ['Positive', 'Negative', 'Zero', 'Equal to $n$'],
            correctAnswer: 2,
            explanation: 'A mathematical property: $\\sum e_i = 0$ for the LSRL.'
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

**1)** Point $(3, 30)$. Residual $e =$

**2)** Point $(5, 33)$. Residual $e =$

**3)** Point $(2, 23)$. The model ___ (enter "overestimates" or "underestimates").
      `,
      exercise: {
        inputs: [
          {
            label: 'Residual at x=3',
            correctAnswer: '3',
            explanation: '$\\hat{y} = 15 + 4(3) = 27$. $e = 30 - 27 = 3$.'
          },
          {
            label: 'Residual at x=5',
            correctAnswer: '-2',
            explanation: '$\\hat{y} = 15 + 4(5) = 35$. $e = 33 - 35 = -2$.'
          },
          {
            label: 'Over or under',
            correctAnswer: 'overestimates',
            explanation: '$\\hat{y} = 15 + 4(2) = 23 = y$. Actually $e = 0$ so neither. But the model predicts exactly 23, matching the observed value. If $y$ were slightly less, the model overestimates since $\\hat{y} \\geq y$.'
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
            label: 'Random scatter in the residual plot → linear model is',
            options: ['appropriate', 'not appropriate'],
            correctIndex: 0,
            explanation: 'No pattern = model fits well. Random scatter around $e = 0$ is what we want to see.'
          },
          {
            id: 'lr3-dd2',
            label: 'U-shaped curve in the residual plot → the relationship is',
            options: ['linear', 'nonlinear'],
            correctIndex: 1,
            explanation: 'A curved pattern reveals a nonlinear relationship that the linear model misses.'
          },
          {
            id: 'lr3-dd3',
            label: 'Fan-shaped residual plot (spread increasing) indicates',
            options: ['constant variance', 'non-constant variance'],
            correctIndex: 1,
            explanation: 'A fan shape means variance increases with $x$ (heteroscedasticity). Predictions become less reliable for larger $x$.'
          },
          {
            id: 'lr3-dd4',
            label: 'One point with a very large residual is called',
            options: ['influential', 'an outlier in the $y$-direction', 'the intercept'],
            correctIndex: 1,
            explanation: 'A large residual means the point is far from the regression line (outlier in the $y$-direction).'
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
            question: 'Residual = observed $-$ predicted. If $y = 50$ and $\\hat{y} = 48$, then $e =$',
            options: ['$-2$', '$2$', '$48$', '$50$'],
            correctAnswer: 1,
            explanation: '$e = 50 - 48 = 2$. The point is 2 units above the line.'
          },
          {
            question: 'The residual plot is used to:',
            options: ['Calculate $r$', 'Assess whether the linear model is appropriate', 'Find the slope', 'Predict $y$'],
            correctAnswer: 1,
            explanation: 'The residual plot checks for patterns that would indicate the linear model is not appropriate.'
          },
          {
            question: 'If all residuals are close to 0, the model:',
            options: ['Is a poor fit', 'Predicts well — small prediction errors', 'Has a negative slope', 'Has $r = 0$'],
            correctAnswer: 1,
            explanation: 'Small residuals mean the predictions are close to the observed values — good fit.'
          },
          {
            question: 'A positive residual means the model:',
            options: ['Overestimates', 'Underestimates', 'Is exact', 'Has a positive slope'],
            correctAnswer: 1,
            explanation: '$e > 0 \\Rightarrow y > \\hat{y}$. The observed is above the predicted — the model underestimates.'
          },
          {
            question: 'Non-constant variance in a residual plot is called:',
            options: ['Linearity', 'Heteroscedasticity', 'Normality', 'Independence'],
            correctAnswer: 1,
            explanation: 'Heteroscedasticity = unequal variance. It appears as a fan or trumpet shape in the residual plot.'
          },
          {
            question: '$\\hat{y} = 20 + 5x$. At $x = 4$, $y = 38$. The residual is:',
            options: ['$2$', '$-2$', '$40$', '$38$'],
            correctAnswer: 1,
            explanation: '$\\hat{y} = 20 + 5(4) = 40$. $e = 38 - 40 = -2$.'
          },
          {
            question: 'The LSRL minimizes:',
            options: ['$\\sum |e_i|$', '$\\sum e_i$', '$\\sum e_i^2$', '$\\max(e_i)$'],
            correctAnswer: 2,
            explanation: 'The LSRL minimizes the sum of squared residuals: $\\sum (y_i - \\hat{y}_i)^2$.'
          },
          {
            question: 'Which residual plot pattern is IDEAL?',
            options: ['Clear U-shape', 'Random scatter', 'Fan shape', 'Strong linear pattern'],
            correctAnswer: 1,
            explanation: 'Random scatter with no pattern indicates the linear model is appropriate.'
          },
          {
            question: 'The mean of all residuals from the LSRL equals:',
            options: ['$r$', '$\\bar{y}$', '$0$', '$1$'],
            correctAnswer: 2,
            explanation: 'Since $\\sum e_i = 0$, the mean residual $= 0/n = 0$.'
          },
          {
            question: 'If the residual plot shows a clear pattern, you should:',
            options: ['Use the model anyway', 'Consider a transformation or nonlinear model', 'Increase the sample size', 'Remove outliers'],
            correctAnswer: 1,
            explanation: 'A pattern in the residual plot means the linear model does not capture the true relationship. Try a transformation (e.g., log, square root).'
          }
        ]
      }
    }
  ]
};
