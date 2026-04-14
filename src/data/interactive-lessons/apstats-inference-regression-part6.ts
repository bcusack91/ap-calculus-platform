export const apStatsInfRegPart6Data = {
  topicSlug: 'inference-regression-apstats',
  sections: [
    {
      id: 'apstats-inferenceregression-p6-intro',
      type: 'text' as const,
      content: `# 📊 Problem-Solving Workshop

**Part 6 of 7 — Full Inference for Regression Problems**

---

### Workshop Goals

| Skill |
|-------|
| 📝 State hypotheses for slope tests |
| ✅ Check LINE conditions |
| 📐 Compute $t$-statistics from output |
| 📊 Build CIs for $\\beta$ from output |
| 🎯 Write AP-quality conclusions |

> 🔑 **AP Tip:** Inference for regression is one of the most commonly tested topics on the AP exam. Master the 4-step process: hypotheses → conditions → mechanics → conclusion.

---

### Worked Example 1 — Chirps and Temperature

A biology student records cricket chirps per minute ($x$) and outdoor temperature ($y$, °F) for 15 observations.

**Computer output:**

| Predictor | Coef | SE Coef | T | P |
|-----------|------|---------|---|---|
| Constant | $25.2$ | $10.3$ | $2.45$ | $0.030$ |
| Chirps | $3.29$ | $0.57$ | $5.77$ | $< 0.001$ |

$S = 3.83 \\quad R\\text{-}sq = 71.9\\%$

**Step 1 — Hypotheses:**
$H_0: \\beta = 0$ (no linear relationship between chirp rate and temperature)
$H_a: \\beta \\neq 0$ (there is a linear relationship)

**Step 2 — Conditions (LINE):**
- **L:** Scatterplot shows a linear pattern; residual plot shows random scatter ✓
- **I:** Observations taken on different days; 15 < 10% of all possible days ✓
- **N:** Histogram of residuals is approximately Normal ✓
- **E:** Residual plot shows constant spread ✓

**Step 3 — Mechanics:**
$t = b/\\text{SE}_b = 3.29/0.57 = 5.77$, df $= 15 - 2 = 13$
$P < 0.001$

**Step 4 — Conclusion:**
"Since $P < 0.001 < \\alpha = 0.05$, we reject $H_0$. There is convincing evidence of a linear relationship between cricket chirps per minute and outdoor temperature."

**95% CI for slope:** df $= 13$, $t^* = 2.160$
$$3.29 \\pm 2.160(0.57) = 3.29 \\pm 1.231 = (2.059, 4.521)$$
"We are 95% confident that for each additional chirp per minute, the true increase in temperature is between 2.06°F and 4.52°F."

---

### Worked Example 2 — Fertilizer and Yield

An agronomist tests 25 plots. $x$ = fertilizer (kg/hectare), $y$ = crop yield (tons/hectare).

| Predictor | Coef | SE Coef | T | P |
|-----------|------|---------|---|---|
| Constant | $2.1$ | $0.8$ | $2.63$ | $0.015$ |
| Fertilizer | $0.035$ | $0.019$ | $1.84$ | $0.078$ |

$S = 0.45 \\quad R\\text{-}sq = 12.8\\%$

**Analysis at $\\alpha = 0.05$:**
- $t = 0.035/0.019 = 1.84$, df $= 23$
- $P = 0.078 > 0.05$
- **Conclusion:** "We fail to reject $H_0$. There is not convincing evidence of a linear relationship between fertilizer amount and crop yield."
- $R^2 = 12.8\\%$ — fertilizer explains very little of the variability in yield

**95% CI:** $t^* = 2.069$ (df $= 23$)
$$0.035 \\pm 2.069(0.019) = 0.035 \\pm 0.039 = (-0.004, 0.074)$$
The interval contains 0, consistent with failing to reject $H_0$.

---

### Common AP Mistakes

| Mistake | Fix |
|---------|-----|
| Writing $H_0: b = 0$ | Use $\\beta$ (population slope), not $b$ (sample) |
| Skipping conditions | Must check all four LINE conditions |
| "We accept $H_0$" | Say "fail to reject $H_0$" |
| Using Constant SE to test slope | Use the SE Coef from the $x$-variable row |
| No context in conclusion | Name the variables — not just "reject $H_0$" |`
    },
    {
      id: 'apstats-inferenceregression-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Inference Workshop Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the chirps example, the $t$-statistic of 5.77 is computed as:',
            options: ['$25.2/10.3$', '$3.29/0.57$', '$25.2/0.57$', '$3.83/0.57$'],
            correctAnswer: 1,
            explanation: '$t = b/\\text{SE}_b = 3.29/0.57 = 5.77$. Use the slope row, not the constant row.'
          },
          {
            question: 'In the fertilizer example, failing to reject $H_0$ means:',
            options: ['Fertilizer has no effect', 'We lack sufficient evidence that there is a linear relationship', 'The experiment was badly designed', '$\\beta$ is exactly 0'],
            correctAnswer: 1,
            explanation: 'Failing to reject means we don\'t have convincing evidence — it does NOT prove $\\beta = 0$.'
          },
          {
            question: 'Both examples use df $= n - 2$. Why subtract 2?',
            options: ['Two variables', 'Two estimated parameters ($a$ and $b$)', 'Two conditions', 'Two hypotheses'],
            correctAnswer: 1,
            explanation: 'We estimate the intercept ($a$) and slope ($b$), using up 2 degrees of freedom.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p6-input',
      type: 'input-boxes' as const,
      content: `
**Practice from Output** 🧮

| Predictor | Coef | SE Coef | T | P |
|-----------|------|---------|---|---|
| Constant | $12.0$ | $4.0$ | $3.00$ | $0.007$ |
| Altitude | $-0.006$ | $0.002$ | $?$ | $?$ |

$n = 32$

**1)** What is $t$ for the slope?

**2)** What is df?

**3)** 95% CI margin of error if $t^* = 2.042$: $t^* \\times \\text{SE}_b =$
      `,
      exercise: {
        inputs: [
          {
            label: 't for slope',
            correctAnswer: '-3',
            explanation: '$t = -0.006/0.002 = -3$.'
          },
          {
            label: 'Degrees of freedom',
            correctAnswer: '30',
            explanation: 'df $= n - 2 = 32 - 2 = 30$.'
          },
          {
            label: 'Margin of error',
            correctAnswer: '0.004084',
            explanation: 'ME $= 2.042 \\times 0.002 = 0.004084$.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Decision Making** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ir6-dd1',
            label: 'The residual plot shows a clear curve. The $t$-test for slope ___',
            options: ['is still valid', 'may be invalid because the Linear condition is violated'],
            correctIndex: 1,
            explanation: 'If the relationship is not linear, the $t$-test for a linear slope is not appropriate.'
          },
          {
            id: 'ir6-dd2',
            label: '$P = 0.04$, $\\alpha = 0.05$. "We accept $H_0$" is ___',
            options: ['correct', 'incorrect — we should reject $H_0$ since $P < \\alpha$'],
            correctIndex: 1,
            explanation: '$P = 0.04 < 0.05$, so we reject $H_0$.'
          },
          {
            id: 'ir6-dd3',
            label: 'A one-sided $H_a: \\beta > 0$ with $b > 0$ and two-sided $P = 0.06$ gives one-sided $P =$',
            options: ['$0.06$', '$0.03$', '$0.12$'],
            correctIndex: 1,
            explanation: 'One-sided $P = 0.06/2 = 0.03$ when $b$ is in the direction of $H_a$.'
          },
          {
            id: 'ir6-dd4',
            label: '95% CI for $\\beta$: $(0.02, 0.07)$. At $\\alpha = 0.05$ we ___ $H_0: \\beta = 0$',
            options: ['reject', 'fail to reject'],
            correctIndex: 0,
            explanation: '0 is not in $(0.02, 0.07)$, so we reject $H_0$ at $\\alpha = 0.05$.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Inference Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The first step in inference for regression is:',
            options: ['Calculate the test statistic', 'State hypotheses about $\\beta$', 'Make a conclusion', 'Find $r^2$'],
            correctAnswer: 1,
            explanation: 'Always start by stating $H_0: \\beta = 0$ and $H_a$.'
          },
          {
            question: 'Which LINE condition is checked by looking at a histogram of residuals?',
            options: ['Linear', 'Independent', 'Normal', 'Equal variance'],
            correctAnswer: 2,
            explanation: 'A histogram (or QQ plot) of residuals checks the Normality condition.'
          },
          {
            question: '"Fail to reject $H_0$" is the same as:',
            options: ['"Accept $H_0$"', '"$\\beta = 0$ is proven"', '"We lack convincing evidence against $H_0$"', '"The test was wrong"'],
            correctAnswer: 2,
            explanation: 'We never "accept" $H_0$. We simply lack sufficient evidence to reject it.'
          },
          {
            question: 'Computer output shows $P = 0.002$. This means:',
            options: ['The slope is 0.002', 'If $\\beta = 0$, a slope as extreme as observed would occur about 0.2% of the time', 'There is a 0.2% chance $\\beta = 0$', '$r^2 = 0.002$'],
            correctAnswer: 1,
            explanation: 'The $P$-value is the probability of observing a slope as extreme as $b$ if $\\beta = 0$.'
          },
          {
            question: 'To build a 99% CI for $\\beta$ instead of 95%, you need a ___ $t^*$.',
            options: ['smaller', 'larger', 'the same', 'negative'],
            correctAnswer: 1,
            explanation: 'Higher confidence requires a larger critical value $t^*$, producing a wider interval.'
          },
          {
            question: 'If the $P$-value for a two-sided test is 0.03 and $b > 0$, what is the $P$-value for $H_a: \\beta > 0$?',
            options: ['$0.03$', '$0.015$', '$0.06$', '$0.97$'],
            correctAnswer: 1,
            explanation: 'One-sided $P = 0.03/2 = 0.015$ when $b$ is positive and $H_a$ is $\\beta > 0$.'
          },
          {
            question: 'A 95% CI for $\\beta$ is $(-0.5, 0.1)$. The best conclusion is:',
            options: ['Strong evidence $\\beta < 0$', 'We fail to reject $H_0: \\beta = 0$ because 0 is in the interval', 'The slope is exactly $-0.2$', 'The model is useless'],
            correctAnswer: 1,
            explanation: '0 is inside $(-0.5, 0.1)$, so $\\beta = 0$ is plausible. We fail to reject $H_0$.'
          },
          {
            question: '$n = 10$. Residuals show extreme right skew. You should:',
            options: ['Proceed with the $t$-test', 'Note that the Normal condition is questionable with small $n$ and skewed residuals', 'Remove the skewed points', 'Use df $= 10$'],
            correctAnswer: 1,
            explanation: 'With only 10 observations, skewness in residuals makes the Normal condition suspect. Report this concern.'
          },
          {
            question: 'An AP free-response question says "Do these data provide convincing evidence...?" You should:',
            options: ['Just say yes or no', 'Perform the full 4-step inference procedure', 'Only compute $r^2$', 'Just check conditions'],
            correctAnswer: 1,
            explanation: '"Convincing evidence" signals a hypothesis test. State hypotheses, check conditions, compute test statistic/$P$-value, and conclude in context.'
          },
          {
            question: '$t = 2.5$, df $= 20$. Compared to $t = 2.5$, df $= 5$:',
            options: ['$P$-value is larger with df $= 20$', '$P$-value is smaller with df $= 20$', '$P$-values are identical', '$t$ changes with df'],
            correctAnswer: 1,
            explanation: 'With more df, the $t$-distribution is narrower (closer to Normal), so the same $t = 2.5$ gives a smaller $P$-value.'
          }
        ]
      }
    }
  ]
};
