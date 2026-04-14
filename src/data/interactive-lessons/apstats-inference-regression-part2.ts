export const apStatsInfRegPart2Data = {
  topicSlug: 'inference-regression-apstats',
  sections: [
    {
      id: 'apstats-inferenceregression-p2-intro',
      type: 'text' as const,
      content: `# 📊 T-Test for Slope

**Part 2 of 7 — Is There a Linear Relationship?**

---

### Topics in This Part

| Section |
|---------|
| 🎯 Hypotheses for the Slope |
| 📐 The $t$-Statistic for $b$ |
| ✅ Conditions for Inference |
| 📝 Worked Example |

> 🔑 **Key Concept:** The $t$-test for slope tests whether the true population slope $\\beta$ is zero (no linear relationship) or nonzero.

---

### The Linear Regression Model

The population model is:

$$y = \\alpha + \\beta x + \\varepsilon$$

where $\\varepsilon \\sim N(0, \\sigma)$ (errors are independent and Normally distributed with constant variance).

- $\\beta$ = true population slope
- $b$ = sample slope (our estimate of $\\beta$)
- $\\text{SE}_b$ = standard error of the slope

---

### Hypotheses

$$H_0: \\beta = 0 \\quad \\text{(no linear relationship)}$$
$$H_a: \\beta \\neq 0 \\quad \\text{(or } \\beta > 0 \\text{ or } \\beta < 0\\text{)}$$

> ⚠️ **AP Tip:** Most AP problems use the two-sided alternative $\\beta \\neq 0$. One-sided tests are less common but do appear.

---

### The Test Statistic

$$\\boxed{t = \\frac{b - 0}{\\text{SE}_b} = \\frac{b}{\\text{SE}_b}}$$

with $\\text{df} = n - 2$ (two parameters estimated: $a$ and $b$).

---

### Conditions (LINE)

| Letter | Condition | How to Check |
|--------|-----------|-------------|
| **L** | **Linear** relationship | Scatterplot and residual plot show no curve |
| **I** | **Independent** observations | Random sample or $n < 10\\%$ of population |
| **N** | **Normal** errors | Residual plot approximately symmetric, no strong skew; histogram/QQ plot of residuals |
| **E** | **Equal** variance | Residual plot shows constant spread (no fan shape) |

---

### Worked Example

A researcher studies 20 pine trees. $x$ = diameter (inches), $y$ = height (feet).

Computer output:

| Predictor | Coef | SE Coef | T | P |
|-----------|------|---------|---|---|
| Constant | $24.0$ | $5.1$ | $4.71$ | $< 0.001$ |
| Diameter | $2.35$ | $0.42$ | $5.60$ | $< 0.001$ |

**Step 1 — Hypotheses:**
$H_0: \\beta = 0$ (no linear relationship between diameter and height)
$H_a: \\beta \\neq 0$ (there is a linear relationship)

**Step 2 — Conditions:**
- **L:** Residual plot shows random scatter ✓
- **I:** Trees randomly selected; $20 < 10\\%$ of all pine trees ✓
- **N:** Histogram of residuals approximately Normal ✓
- **E:** No fan shape in residual plot ✓

**Step 3 — Test statistic:**
$t = b / \\text{SE}_b = 2.35 / 0.42 = 5.60$, df $= 20 - 2 = 18$

**Step 4 — P-value:** $P < 0.001$ (from the table or computer output)

**Step 5 — Conclusion:**
"Since $P < 0.001 < \\alpha = 0.05$, we reject $H_0$. There is convincing evidence of a linear relationship between tree diameter and tree height."

> 🔑 **AP Tip:** Always state "convincing evidence" (not "proof") and reference the context.`
    },
    {
      id: 'apstats-inferenceregression-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**T-Test for Slope Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The null hypothesis for a $t$-test for slope is:',
            options: ['$H_0: b = 0$', '$H_0: \\beta = 0$', '$H_0: r = 0$', '$H_0: \\mu = 0$'],
            correctAnswer: 1,
            explanation: 'We test the population slope $\\beta$, not the sample slope $b$. $H_0: \\beta = 0$ means no linear relationship in the population.'
          },
          {
            question: 'The degrees of freedom for a $t$-test for the slope of a regression with $n = 25$ observations is:',
            options: ['$25$', '$24$', '$23$', '$22$'],
            correctAnswer: 2,
            explanation: 'df $= n - 2 = 25 - 2 = 23$. We subtract 2 because we estimate two parameters ($a$ and $b$).'
          },
          {
            question: 'The "E" in LINE stands for:',
            options: ['Error term', 'Equal variance of residuals', 'Extreme values', 'Expected value'],
            correctAnswer: 1,
            explanation: 'E = Equal variance. The spread of residuals should be roughly constant across all $x$-values (no fan shape).'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p2-input',
      type: 'input-boxes' as const,
      content: `
**Calculating the $t$-Statistic** 🧮

**1)** $b = 3.6$, $\\text{SE}_b = 1.2$. What is $t$?

**2)** $n = 30$ data points. What are the degrees of freedom?

**3)** $b = -0.45$, $\\text{SE}_b = 0.15$. What is $|t|$?
      `,
      exercise: {
        inputs: [
          {
            label: 't-statistic',
            correctAnswer: '3',
            explanation: '$t = b / \\text{SE}_b = 3.6 / 1.2 = 3$.'
          },
          {
            label: 'Degrees of freedom',
            correctAnswer: '28',
            explanation: 'df $= n - 2 = 30 - 2 = 28$.'
          },
          {
            label: '|t| value',
            correctAnswer: '3',
            explanation: '$t = -0.45 / 0.15 = -3$, so $|t| = 3$.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Conditions and Conclusions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ir2-dd1',
            label: 'A curved residual plot violates the ___ condition',
            options: ['Linear', 'Independent', 'Normal', 'Equal variance'],
            correctIndex: 0,
            explanation: 'A curved pattern means the relationship is not linear — the L condition is violated.'
          },
          {
            id: 'ir2-dd2',
            label: '$t = 4.2$, df $= 18$, $P < 0.001$. At $\\alpha = 0.05$, we ___',
            options: ['fail to reject $H_0$', 'reject $H_0$'],
            correctIndex: 1,
            explanation: '$P < 0.001 < 0.05 = \\alpha$, so we reject $H_0$. There is convincing evidence of a linear relationship.'
          },
          {
            id: 'ir2-dd3',
            label: 'A fan-shaped residual plot violates the ___ condition',
            options: ['Linear', 'Independent', 'Normal', 'Equal variance'],
            correctIndex: 3,
            explanation: 'Increasing/decreasing spread in residuals means non-constant variance — the E condition is violated.'
          },
          {
            id: 'ir2-dd4',
            label: 'If $P = 0.23$ at $\\alpha = 0.05$, we conclude ___',
            options: ['There is convincing evidence of a linear relationship', 'There is not convincing evidence of a linear relationship'],
            correctIndex: 1,
            explanation: '$P = 0.23 > 0.05$. We fail to reject $H_0$. There is not convincing evidence of a linear relationship.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — $t$-Test for Slope** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'What does $H_0: \\beta = 0$ mean in context?',
            options: ['The sample slope is 0', 'There is no linear relationship between $x$ and $y$ in the population', 'The correlation is 1', 'All residuals are 0'],
            correctAnswer: 1,
            explanation: '$\\beta = 0$ means no linear relationship exists in the population between $x$ and $y$.'
          },
          {
            question: 'The formula $t = b / \\text{SE}_b$ has what in the numerator?',
            options: ['The population slope', 'The sample slope', 'The correlation', 'The residual'],
            correctAnswer: 1,
            explanation: '$b$ is the sample slope. Under $H_0: \\beta = 0$, the numerator is $b - 0 = b$.'
          },
          {
            question: 'Why do we use $n - 2$ degrees of freedom?',
            options: ['Two variables', 'Two estimated parameters ($a$ and $b$)', 'Two conditions', 'Two-sided test'],
            correctAnswer: 1,
            explanation: 'We estimate the intercept $a$ and slope $b$, losing 2 degrees of freedom.'
          },
          {
            question: 'Which is NOT a condition for the $t$-test for slope?',
            options: ['Linear relationship', 'Equal sample sizes of $x$ and $y$', 'Normal residuals', 'Equal variance of residuals'],
            correctAnswer: 1,
            explanation: 'The four conditions are LINE. There is no "equal sample sizes" condition — we have paired $(x, y)$ data.'
          },
          {
            question: 'Computer output shows $P = 0.032$ for the slope. At $\\alpha = 0.05$:',
            options: ['Fail to reject $H_0$', 'Reject $H_0$', 'Need more information', 'The test is invalid'],
            correctAnswer: 1,
            explanation: '$P = 0.032 < 0.05 = \\alpha$, so we reject $H_0$.'
          },
          {
            question: 'A small $P$-value for the slope test indicates:',
            options: ['The slope is large', 'The slope is precisely estimated', 'Strong evidence that $\\beta \\neq 0$', 'The model is perfect'],
            correctAnswer: 2,
            explanation: 'A small $P$-value means the observed slope is unlikely if $\\beta = 0$, providing evidence that $\\beta \\neq 0$.'
          },
          {
            question: 'The $t$-test for slope and the test for $\\rho = 0$ (the population correlation) give:',
            options: ['Different conclusions', 'The same $t$-statistic and $P$-value', 'Different $P$-values', 'Opposite conclusions'],
            correctAnswer: 1,
            explanation: 'Testing $\\beta = 0$ is mathematically equivalent to testing $\\rho = 0$. They produce identical $t$ and $P$ values.'
          },
          {
            question: 'A researcher has $n = 8$. The residual histogram is highly skewed. She should:',
            options: ['Proceed with the $t$-test anyway', 'Note that the Normal condition may not be satisfied', 'Use a larger $\\alpha$', 'Delete the skewed points'],
            correctAnswer: 1,
            explanation: 'With small $n$, the Normal condition is harder to verify. Skewed residuals cast doubt on the validity of the $t$-test.'
          },
          {
            question: '"We reject $H_0$. There is convincing evidence that tree diameter is linearly related to tree height." This conclusion is:',
            options: ['Missing context', 'Correct — it states the decision and context', 'Too vague', 'Incorrect — should say "causes"'],
            correctAnswer: 1,
            explanation: 'The conclusion states the decision (reject $H_0$), direction (linearly related), and context (diameter, height).'
          },
          {
            question: 'If the true $\\beta = 0$, we expect the $t$-statistic to be:',
            options: ['Large', 'Close to 0', 'Exactly 1', 'Negative'],
            correctAnswer: 1,
            explanation: 'If $\\beta = 0$, the sample slope $b$ should be near 0, making $t = b/\\text{SE}_b$ close to 0.'
          }
        ]
      }
    }
  ]
};
