export const apStatsInfRegPart1Data = {
  topicSlug: 'inference-regression-apstats',
  sections: [
    {
      id: 'apstats-inferenceregression-p1-intro',
      type: 'text' as const,
      content: `# 📐 Inference for Linear Regression

**Part 1 of 7 — Regression Model Assumptions**

---

### The Population Regression Model

$$y = \\beta_0 + \\beta_1 x + \\epsilon$$

where $\\epsilon \\sim N(0, \\sigma)$ — errors are normally distributed with constant spread.

| Symbol | Meaning |
|--------|---------|
| $\\beta_0$ | Population $y$-intercept |
| $\\beta_1$ | Population slope |
| $b_0$ | Sample $y$-intercept (estimate of $\\beta_0$) |
| $b_1$ | Sample slope (estimate of $\\beta_1$) |

---

### Conditions for Inference (LINE)

| Condition | Check |
|-----------|-------|
| **L**inear | Scatterplot and residual plot show no pattern |
| **I**ndependent | Observations are independent ($n < 10\\%$ of population) |
| **N**ormal | Residuals are approximately normal (histogram or Q-Q plot) |
| **E**qual variance | Residual plot shows constant spread (no fanning) |

> 🔑 **The residual plot is the most important diagnostic tool.** Look for random scatter around zero.`
    },
    {
      id: 'apstats-inferenceregression-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Regression Assumptions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the regression model $y = \\beta_0 + \\beta_1 x + \\epsilon$, the condition of equal variance means:',
            options: ['All $x$ values are equal', 'The spread of residuals is constant across all $x$', 'The mean of $y$ is constant', '$\\beta_1 = 0$'],
            correctAnswer: 1,
            explanation: 'Equal variance (homoscedasticity) means the residuals have the same spread regardless of the $x$ value.'
          },
          {
            question: 'A residual plot showing a curved pattern suggests:',
            options: ['The relationship is linear', 'The model needs a transformation', 'Equal variance is met', 'The data is normal'],
            correctAnswer: 1,
            explanation: 'A curved residual plot indicates the linear model is inappropriate — a transformation or polynomial model may be needed.'
          },
          {
            question: '$b_1$ is an estimate of:',
            options: ['The sample mean', 'The population slope $\\beta_1$', 'The correlation $r$', 'The residual'],
            correctAnswer: 1,
            explanation: '$b_1$ is the sample slope — our best estimate of the true population slope $\\beta_1$.'
          }
        ]
      }
    }
  ]
};
