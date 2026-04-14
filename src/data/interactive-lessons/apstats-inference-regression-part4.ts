export const apStatsInfRegPart4Data = {
  topicSlug: 'inference-regression-apstats',
  sections: [
    {
      id: 'apstats-inferenceregression-p4-intro',
      type: 'text' as const,
      content: `# 📊 Computer Output Interpretation

**Part 4 of 7 — Reading Regression Output Like a Pro**

---

### Topics in This Part

| Section |
|---------|
| 📋 Standard Regression Table Layout |
| 🔍 Identifying $b$, $\\text{SE}_b$, $t$, and $P$ |
| 📐 Reading $S$, $R^2$, and $R^2(\\text{adj})$ |
| 🧮 Building Tests and CIs from Output |

> 🔑 **Key Concept:** The AP exam always provides computer output. You must know where to find each number and what it means.

---

### Standard Computer Output Table

| Predictor | Coef | SE Coef | T | P |
|-----------|------|---------|---|---|
| Constant | $a$ | $\\text{SE}_a$ | $t_a$ | $P_a$ |
| $x$-variable | $b$ | $\\text{SE}_b$ | $t_b$ | $P_b$ |

Below the table:
$$S = s_e \\quad R\\text{-}sq = r^2 \\quad R\\text{-}sq(\\text{adj}) = r^2_{\\text{adj}}$$

---

### What Each Value Means

| Symbol | Location | Meaning |
|--------|----------|---------|
| **Coef** (Constant row) | $a$ | $y$-intercept of LSRL |
| **Coef** ($x$ row) | $b$ | Slope of LSRL |
| **SE Coef** ($x$ row) | $\\text{SE}_b$ | Standard error of the slope |
| **T** ($x$ row) | $t$ | $t$-statistic $= b / \\text{SE}_b$ |
| **P** ($x$ row) | $P$ | $P$-value for $H_0: \\beta = 0$ (two-sided) |
| **S** | $s_e$ | Standard deviation of residuals (typical prediction error) |
| **R-sq** | $r^2$ | Proportion of variability explained |

> ⚠️ **Important:** The $P$-value in the table tests $H_0: \\beta = 0$ vs. $H_a: \\beta \\neq 0$ (two-sided). For a one-sided test, divide by 2.

---

### Worked Example — Reading Output

| Predictor | Coef | SE Coef | T | P |
|-----------|------|---------|---|---|
| Constant | $15.8$ | $3.2$ | $4.94$ | $0.000$ |
| StudyHours | $2.45$ | $0.38$ | $6.45$ | $0.000$ |

$S = 4.12 \\quad R\\text{-}sq = 76.3\\% \\quad R\\text{-}sq(\\text{adj}) = 74.8\\%$

**From this output:**
- LSRL: $\\hat{y} = 15.8 + 2.45x$
- Slope: For each additional study hour, predicted score increases by 2.45 points
- $t = 2.45 / 0.38 = 6.45$ ✓ (matches output)
- $P < 0.001$ → reject $H_0: \\beta = 0$ (strong evidence of a linear relationship)
- $R^2 = 76.3\\%$ → 76.3% of variability in scores is explained by study hours
- $S = 4.12$ → typical prediction error is about 4.12 points

---

### Building a CI from Output

Using the same output with $n = 22$:
- df $= 22 - 2 = 20$, $t^* = 2.086$ (95%)
- CI: $2.45 \\pm 2.086(0.38) = 2.45 \\pm 0.793 = (1.657, 3.243)$

> 🔑 **AP Tip:** Verify: the $P$-value in the table is for the two-sided test. The CI and test should agree — if 0 is not in the CI, the $P$-value should be $< \\alpha$.

---

### Common Mistakes

| Mistake | Correction |
|---------|------------|
| Using the SE Coef from the Constant row for the slope test | Use the SE Coef from the $x$-variable row |
| Confusing $S$ with SE Coef | $S$ = residual SD; SE Coef = SD of the slope estimate |
| Not checking if the $P$-value is one- or two-sided | Default output is two-sided; halve it for a one-sided test |`
    },
    {
      id: 'apstats-inferenceregression-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Reading Output** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In computer output, the slope of the LSRL is found in:',
            options: ['The $S$ value', 'The "Coef" column of the $x$-variable row', 'The "T" column', 'The "P" column'],
            correctAnswer: 1,
            explanation: 'The slope $b$ is the "Coef" (coefficient) in the row for the explanatory variable.'
          },
          {
            question: '$S = 3.5$ in regression output means:',
            options: ['The slope is 3.5', 'The typical residual is about 3.5 units', '$r = 3.5$', 'The sample size is 3.5'],
            correctAnswer: 1,
            explanation: '$S$ is the standard deviation of the residuals — the typical size of prediction errors.'
          },
          {
            question: 'The $P$-value in the table for the $x$-variable row tests:',
            options: ['$H_0: a = 0$', '$H_0: \\beta = 0$ (two-sided)', '$H_0: r^2 = 1$', '$H_0: S = 0$'],
            correctAnswer: 1,
            explanation: 'The $P$-value tests whether the true slope $\\beta$ equals 0 (two-sided by default).'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p4-input',
      type: 'input-boxes' as const,
      content: `
**Extracting Values from Output** 🧮

| Predictor | Coef | SE Coef | T | P |
|-----------|------|---------|---|---|
| Constant | $8.2$ | $2.1$ | $3.90$ | $0.001$ |
| Rainfall | $1.75$ | $0.25$ | $?$ | $0.000$ |

$S = 2.80 \\quad R\\text{-}sq = 83.0\\%$, $n = 20$

**1)** What is the $t$-statistic for the slope?

**2)** What is the LSRL equation? (Write the slope value only)

**3)** Degrees of freedom $=$
      `,
      exercise: {
        inputs: [
          {
            label: 't-statistic',
            correctAnswer: '7',
            explanation: '$t = b / \\text{SE}_b = 1.75 / 0.25 = 7$.'
          },
          {
            label: 'Slope',
            correctAnswer: '1.75',
            explanation: 'The slope is the Coef value in the Rainfall row: $b = 1.75$.'
          },
          {
            label: 'Degrees of freedom',
            correctAnswer: '18',
            explanation: 'df $= n - 2 = 20 - 2 = 18$.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Output Interpretation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ir4-dd1',
            label: '$R\\text{-}sq = 83.0\\%$ means ___',
            options: ['The correlation is 0.83', '83% of variability in $y$ is explained by the linear model', '83% of points are on the line', 'The slope is 0.83'],
            correctIndex: 1,
            explanation: '$R^2 = 0.83$ means 83% of the variability in $y$ is explained by the linear relationship with $x$.'
          },
          {
            id: 'ir4-dd2',
            label: 'The SE Coef for the slope is used to ___',
            options: ['calculate $r^2$', 'build CIs and compute $t$-statistics for the slope', 'interpret the intercept', 'find the residual'],
            correctIndex: 1,
            explanation: '$\\text{SE}_b$ is the denominator of $t = b/\\text{SE}_b$ and appears in the CI: $b \\pm t^* \\cdot \\text{SE}_b$.'
          },
          {
            id: 'ir4-dd3',
            label: 'The $P$-value in the output is $0.000$. For a one-sided $H_a: \\beta > 0$, the $P$-value is ___',
            options: ['$0.000$ (same)', 'approximately $0.000 / 2 \\approx 0$', 'approximately $2 \\times 0.000 \\approx 0$', 'cannot be determined'],
            correctIndex: 1,
            explanation: 'The table gives a two-sided $P$-value. For a one-sided test in the direction of $b$, halve it (still essentially 0 here).'
          },
          {
            id: 'ir4-dd4',
            label: 'If $T = 1.2$ and $P = 0.245$ for the slope, we ___ $H_0$ at $\\alpha = 0.05$',
            options: ['reject', 'fail to reject'],
            correctIndex: 1,
            explanation: '$P = 0.245 > 0.05$. We fail to reject $H_0$. There is not convincing evidence of a linear relationship.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Computer Output** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The LSRL equation is built from which two values in the output?',
            options: ['$T$ and $P$', 'Coef (Constant) and Coef ($x$-variable)', '$S$ and $R^2$', 'SE Coef and $T$'],
            correctAnswer: 1,
            explanation: '$\\hat{y} = a + bx$ where $a$ is the Constant Coef and $b$ is the $x$-variable Coef.'
          },
          {
            question: 'SE Coef for the Constant row tells you:',
            options: ['The standard error of the slope', 'The standard error of the intercept', 'The residual standard deviation', 'The margin of error'],
            correctAnswer: 1,
            explanation: 'Each row has its own SE Coef. The Constant row gives $\\text{SE}_a$; the $x$ row gives $\\text{SE}_b$.'
          },
          {
            question: '$R\\text{-}sq(\\text{adj})$ is typically:',
            options: ['Larger than $R\\text{-}sq$', 'Smaller than or equal to $R\\text{-}sq$', 'Equal to $r$', 'Always 1'],
            correctAnswer: 1,
            explanation: 'Adjusted $R^2$ penalizes for adding predictors and is typically slightly less than $R^2$.'
          },
          {
            question: 'To verify the $t$-statistic in the output, compute:',
            options: ['Coef $\\times$ SE Coef', 'Coef $\\div$ SE Coef', 'SE Coef $\\div$ Coef', '$S \\div$ Coef'],
            correctAnswer: 1,
            explanation: '$t = \\text{Coef} / \\text{SE Coef} = b / \\text{SE}_b$.'
          },
          {
            question: 'A small $S$ value indicates:',
            options: ['A weak relationship', 'Small prediction errors (good fit)', 'A negative slope', 'Large sample size'],
            correctAnswer: 1,
            explanation: '$S$ is the typical size of residuals. Smaller $S$ means predictions are more accurate.'
          },
          {
            question: 'Output shows $P = 0.018$ for slope. At $\\alpha = 0.01$, two-sided test:',
            options: ['Reject $H_0$', 'Fail to reject $H_0$', 'Need to halve the $P$-value', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$P = 0.018 > 0.01 = \\alpha$. We fail to reject $H_0$ at the 1% level (but we would reject at 5%).'
          },
          {
            question: 'Output shows $P = 0.018$ for slope (two-sided). For a one-sided $H_a: \\beta > 0$ with $b > 0$, $P =$',
            options: ['$0.018$', '$0.009$', '$0.036$', '$0.982$'],
            correctAnswer: 1,
            explanation: 'For a one-sided test in the same direction as $b$, halve the two-sided $P$: $0.018/2 = 0.009$.'
          },
          {
            question: 'Which output value is NOT needed for a $t$-test for the slope?',
            options: ['Coef ($x$ row)', 'SE Coef ($x$ row)', '$R\\text{-}sq(\\text{adj})$', '$P$ ($x$ row)'],
            correctAnswer: 2,
            explanation: '$R^2(\\text{adj})$ is useful information but is not part of the $t$-test procedure for the slope.'
          },
          {
            question: 'If two different regression outputs have the same $b$ but different $\\text{SE}_b$ values, the one with the smaller $\\text{SE}_b$:',
            options: ['Has a smaller $t$-statistic', 'Has a larger $t$-statistic', 'Has the same $t$-statistic', 'Has a larger $P$-value'],
            correctAnswer: 1,
            explanation: 'Smaller $\\text{SE}_b$ → larger $t = b/\\text{SE}_b$ → smaller $P$-value → stronger evidence.'
          },
          {
            question: 'On the AP exam, you are expected to:',
            options: ['Memorize all computer output formats', 'Know how to read standard regression output for $b$, SE, $t$, $P$, $S$, and $R^2$', 'Write your own regression software', 'Only use $r$ values'],
            correctAnswer: 1,
            explanation: 'The AP exam provides computer output; you must identify and interpret the key values in context.'
          }
        ]
      }
    }
  ]
};
