export const apStatsInfRegPart7Data = {
  topicSlug: 'inference-regression-apstats',
  sections: [
    {
      id: 'apstats-inferenceregression-p7-intro',
      type: 'text' as const,
      content: `# 📊 Review & Applications

**Part 7 of 7 — Comprehensive Inference for Regression Review**

---

### Complete Formula Reference

| Concept | Formula |
|---------|---------|
| **Population model** | $y = \\alpha + \\beta x + \\varepsilon$, $\\varepsilon \\sim N(0, \\sigma)$ |
| **$t$-test for slope** | $t = b / \\text{SE}_b$, df $= n - 2$ |
| **CI for slope** | $b \\pm t^* \\cdot \\text{SE}_b$, df $= n - 2$ |
| **Standard error** | $\\text{SE}_b$ from computer output |
| **$S$ (residual SD)** | $S = \\sqrt{\\dfrac{\\sum(y_i - \\hat{y}_i)^2}{n - 2}}$ |

---

### LINE Conditions Summary

| Condition | Check With | Look For |
|-----------|-----------|----------|
| **L**inear | Scatterplot & residual plot | No curves |
| **I**ndependent | Study design | Random sample; $n < 10\\%$ of population |
| **N**ormal | Histogram/QQ of residuals | Approximate symmetry |
| **E**qual variance | Residual plot | Constant spread (no fan) |

---

### Interpretation Templates (AP Exam Ready)

**$t$-Test Conclusion (Reject):**
"Since $P = [\\text{value}] < \\alpha = [\\text{level}]$, we reject $H_0$. There is convincing evidence of a linear relationship between [x in context] and [y in context]."

**$t$-Test Conclusion (Fail to Reject):**
"Since $P = [\\text{value}] > \\alpha = [\\text{level}]$, we fail to reject $H_0$. There is not convincing evidence of a linear relationship between [x in context] and [y in context]."

**CI for Slope:**
"We are [C]% confident that the true slope is between [lower] and [upper]. For each additional [unit of x], [y in context] changes by between [lower] and [upper] [units of y]."

---

### Key Concept Connections

| Topic | Connection |
|-------|-----------|
| $t$-test and CI | Both use $b$, $\\text{SE}_b$, df $= n - 2$, and LINE conditions |
| CI contains 0 ↔ test result | CI contains 0 = fail to reject; CI excludes 0 = reject |
| One-sided vs. two-sided | Two-sided $P$ from output; halve for one-sided (same direction as $b$) |
| $r$, $r^2$, and $t$ | Testing $\\beta = 0$ is equivalent to testing $\\rho = 0$; same $t$ and $P$ |
| Prediction intervals | Wider than CI for mean because of individual scatter |
| Computer output | All needed values ($b$, SE, $t$, $P$, $S$, $R^2$) come from the output table |

---

### Decision Flowchart

$$\\text{Read computer output} \\to \\text{Identify } b, \\text{SE}_b, t, P, S, R^2$$
$$\\downarrow$$
$$\\text{State } H_0: \\beta = 0 \\text{ and } H_a$$
$$\\downarrow$$
$$\\text{Check LINE conditions}$$
$$\\downarrow$$
$$\\text{Report } t = b/\\text{SE}_b, \\text{df} = n-2, P\\text{-value}$$
$$\\downarrow$$
$$\\text{Compare } P \\text{ to } \\alpha \\to \\text{Reject or Fail to Reject}$$
$$\\downarrow$$
$$\\text{State conclusion in context}$$

> 🔑 **AP Exam Strategy:** Inference for regression appears on the AP exam nearly every year, often as a full free-response question. The 4-step process is your blueprint for full credit.`
    },
    {
      id: 'apstats-inferenceregression-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The population regression model is $y = \\alpha + \\beta x + \\varepsilon$. The parameter we test is:',
            options: ['$\\alpha$', '$\\beta$', '$\\varepsilon$', '$b$'],
            correctAnswer: 1,
            explanation: 'We test $H_0: \\beta = 0$ — whether the population slope is zero.'
          },
          {
            question: 'Which value from computer output do you NOT need for a $t$-test for slope?',
            options: ['Coef ($x$ row)', 'SE Coef ($x$ row)', '$R^2(\\text{adj})$', '$P$ ($x$ row)'],
            correctAnswer: 2,
            explanation: '$R^2(\\text{adj})$ is informational but not part of the $t$-test procedure.'
          },
          {
            question: 'The conditions LINE must be checked:',
            options: ['Only for the $t$-test', 'Only for the CI', 'For both the $t$-test and CI for slope', 'Never on the AP exam'],
            correctAnswer: 2,
            explanation: 'Both the $t$-test and CI for the slope require the same LINE conditions.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Review Calculations** 🧮

| Predictor | Coef | SE Coef | T | P |
|-----------|------|---------|---|---|
| Constant | $50.0$ | $8.0$ | $6.25$ | $0.000$ |
| Hours | $-2.5$ | $0.5$ | $?$ | $?$ |

$n = 27$, $R\\text{-}sq = 48.0\\%$

**1)** $t$-statistic for the slope $=$

**2)** df $=$

**3)** 95% CI lower bound if $t^* = 2.060$: $b - t^* \\cdot \\text{SE}_b =$
      `,
      exercise: {
        inputs: [
          {
            label: 't-statistic',
            correctAnswer: '-5',
            explanation: '$t = -2.5/0.5 = -5$.'
          },
          {
            label: 'Degrees of freedom',
            correctAnswer: '25',
            explanation: 'df $= 27 - 2 = 25$.'
          },
          {
            label: 'CI lower bound',
            correctAnswer: '-3.53',
            explanation: 'Lower $= -2.5 - 2.060(0.5) = -2.5 - 1.03 = -3.53$.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Connections** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ir7-dd1',
            label: 'Testing $H_0: \\beta = 0$ is equivalent to testing ___',
            options: ['$H_0: r^2 = 1$', '$H_0: \\rho = 0$', '$H_0: a = 0$', '$H_0: S = 0$'],
            correctIndex: 1,
            explanation: 'Testing $\\beta = 0$ is mathematically equivalent to testing $\\rho = 0$ (population correlation).'
          },
          {
            id: 'ir7-dd2',
            label: 'A prediction interval is wider than a CI for the mean because ___',
            options: ['it uses more degrees of freedom', 'it includes individual scatter around the line', 'it uses a different $t^*$', 'the slope is larger'],
            correctIndex: 1,
            explanation: 'Individual observations scatter around the mean response, adding extra variability.'
          },
          {
            id: 'ir7-dd3',
            label: '$R^2 = 48\\%$ in the example above means ___',
            options: ['48% of the data points lie on the line', '48% of variability in the response is explained by the linear model', 'The correlation is 0.48', 'The slope is 0.48'],
            correctIndex: 1,
            explanation: '$R^2$ is the proportion of variability explained by the linear relationship.'
          },
          {
            id: 'ir7-dd4',
            label: 'If both the CI for $\\beta$ and the $t$-test are performed correctly, they ___',
            options: ['may give contradictory results', 'always give consistent results', 'are unrelated procedures'],
            correctIndex: 1,
            explanation: 'If 0 is in the CI, the test fails to reject (and vice versa). They always agree at the same confidence/significance level.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exam — Inference for Regression** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The 4 steps of inference are:',
            options: ['Plot, fit, predict, conclude', 'Hypotheses, conditions, mechanics (test stat + $P$), conclusion', 'Collect, analyze, interpret, report', 'Define, design, collect, compute'],
            correctAnswer: 1,
            explanation: 'The AP 4-step process: state hypotheses, check conditions, compute test statistic and $P$-value, conclude in context.'
          },
          {
            question: '$H_0: \\beta = 0$ tests whether:',
            options: ['The sample slope equals 0', 'There is no linear relationship in the population', 'The residuals are 0', '$r^2 = 1$'],
            correctAnswer: 1,
            explanation: '$\\beta = 0$ means no linear relationship between $x$ and $y$ in the population.'
          },
          {
            question: 'The $P$-value from computer output is typically:',
            options: ['One-sided', 'Two-sided', 'Not provided', 'Equal to $\\alpha$'],
            correctAnswer: 1,
            explanation: 'Standard computer output gives the two-sided $P$-value by default.'
          },
          {
            question: '$b = 1.5$, $\\text{SE}_b = 0.3$. The 95% CI (with $t^* = 2.0$) is:',
            options: ['$(0.9, 2.1)$', '$(1.2, 1.8)$', '$(0, 3.0)$', '$(1.0, 2.0)$'],
            correctAnswer: 0,
            explanation: '$1.5 \\pm 2.0(0.3) = 1.5 \\pm 0.6 = (0.9, 2.1)$.'
          },
          {
            question: 'A fan-shaped residual plot means:',
            options: ['The Normal condition is violated', 'The Equal variance condition is violated', 'The Linear condition is violated', 'The Independent condition is violated'],
            correctAnswer: 1,
            explanation: 'Increasing spread in residuals = non-constant variance, violating the E condition.'
          },
          {
            question: 'A student checks only the Linear condition and skips I, N, E. On the AP exam, this:',
            options: ['Is sufficient', 'Loses points — all four conditions should be addressed', 'Is fine if the data look linear', 'Is not penalized'],
            correctAnswer: 1,
            explanation: 'AP rubrics expect all four LINE conditions to be checked for full credit.'
          },
          {
            question: '$t = -4.2$, df $= 28$, two-sided $P < 0.001$. Which CI would NOT contain 0?',
            options: ['90% CI', '95% CI', '99% CI', 'All of the above'],
            correctAnswer: 3,
            explanation: '$P < 0.001$ means we reject at all common $\\alpha$ levels (0.10, 0.05, 0.01), so no CI at those levels contains 0.'
          },
          {
            question: 'For a one-sided test $H_a: \\beta < 0$ with $b < 0$ and two-sided $P = 0.04$:',
            options: ['One-sided $P = 0.04$', 'One-sided $P = 0.02$', 'One-sided $P = 0.08$', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'One-sided $P$ in the direction of $b$ is half the two-sided $P$: $0.04/2 = 0.02$.'
          },
          {
            question: '"We are 95% confident the true slope is between 0.5 and 2.3" means:',
            options: ['95% of samples have slopes in this range', 'If we repeated this process many times, about 95% of CIs would contain the true $\\beta$', '$\\beta$ is definitely in this range', '95% of data points follow this trend'],
            correctAnswer: 1,
            explanation: '95% confidence refers to the reliability of the method, not a probability about this specific interval.'
          },
          {
            question: 'Which best summarizes inference for regression?',
            options: ['Finding the best-fit line', 'Using sample data to draw conclusions about the population linear relationship', 'Calculating $r^2$', 'Making predictions'],
            correctAnswer: 1,
            explanation: 'Inference for regression uses sample data ($b$, $\\text{SE}_b$) to make conclusions about the population slope $\\beta$.'
          }
        ]
      }
    }
  ]
};
