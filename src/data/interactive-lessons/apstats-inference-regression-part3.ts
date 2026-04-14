export const apStatsInfRegPart3Data = {
  topicSlug: 'inference-regression-apstats',
  sections: [
    {
      id: 'apstats-inferenceregression-p3-intro',
      type: 'text' as const,
      content: `# 📊 Confidence Interval for Slope

**Part 3 of 7 — Estimating the True Slope**

---

### Topics in This Part

| Section |
|---------|
| 📐 CI Formula for $\\beta$ |
| 📝 Interpreting the CI |
| 🔗 Connection to the $t$-Test |
| 🧮 Worked Example |

> 🔑 **Key Concept:** A confidence interval for $\\beta$ gives a range of plausible values for the true population slope.

---

### The Formula

$$\\boxed{b \\pm t^* \\cdot \\text{SE}_b}$$

where:
- $b$ = sample slope
- $t^*$ = critical value from a $t$-distribution with df $= n - 2$
- $\\text{SE}_b$ = standard error of the slope (from computer output)

---

### Interpretation Template

$$\\text{"We are [C]\\% confident that the true slope of the linear relationship}$$
$$\\text{between [x context] and [y context] is between [lower] and [upper]."}$$

**Example:** 95% CI for $\\beta$: $(1.52, 3.18)$, $x$ = diameter (in), $y$ = height (ft).

✅ "We are 95% confident that the true increase in height per additional inch of diameter is between 1.52 and 3.18 feet."

---

### Connection to Hypothesis Testing

| CI contains 0? | Conclusion at $\\alpha = 1 - C$ |
|:-:|:-:|
| **Yes** | Fail to reject $H_0: \\beta = 0$ |
| **No** | Reject $H_0: \\beta = 0$ |

If the confidence interval does not contain 0, there is evidence of a linear relationship.

---

### Conditions

Same LINE conditions as the $t$-test:
- **L**inear relationship
- **I**ndependent observations
- **N**ormal residuals
- **E**qual variance of residuals

---

### Worked Example

Study: $n = 15$ students. $x$ = hours using phone/day, $y$ = GPA.

Computer output: $b = -0.12$, $\\text{SE}_b = 0.04$

Build a 95% CI: df $= 15 - 2 = 13$, so $t^* = 2.160$.

$$-0.12 \\pm 2.160(0.04) = -0.12 \\pm 0.0864$$

$$(-0.2064, -0.0336)$$

**Interpretation:** "We are 95% confident that the true slope of the relationship between daily phone use and GPA is between $-0.206$ and $-0.034$. For each additional hour of daily phone use, GPA is predicted to decrease by between 0.034 and 0.206 points."

**Connection to test:** Since 0 is NOT in the interval, we would reject $H_0: \\beta = 0$ at $\\alpha = 0.05$.

> ⚠️ **AP Tip:** You can read $b$ and $\\text{SE}_b$ directly from computer output. The AP formula sheet provides the CI formula.`
    },
    {
      id: 'apstats-inferenceregression-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**CI for Slope Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 95% CI for $\\beta$ is $(0.5, 2.3)$. At $\\alpha = 0.05$, the two-sided test would:',
            options: ['Fail to reject $H_0: \\beta = 0$', 'Reject $H_0: \\beta = 0$', 'Need more information', 'Be one-sided only'],
            correctAnswer: 1,
            explanation: '0 is not in the interval $(0.5, 2.3)$, so we reject $H_0: \\beta = 0$ at $\\alpha = 0.05$.'
          },
          {
            question: 'The CI formula $b \\pm t^* \\cdot \\text{SE}_b$ uses df $=$',
            options: ['$n$', '$n - 1$', '$n - 2$', '$n - 3$'],
            correctAnswer: 2,
            explanation: 'df $= n - 2$ because we estimate two parameters (intercept and slope).'
          },
          {
            question: 'A wider CI for the slope means:',
            options: ['More certainty about $\\beta$', 'Less certainty about the exact value of $\\beta$', 'The slope is larger', 'The $P$-value is small'],
            correctAnswer: 1,
            explanation: 'A wider interval means more uncertainty — we have a larger range of plausible values for $\\beta$.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p3-input',
      type: 'input-boxes' as const,
      content: `
**Building a CI** 🧮

$b = 4.5$, $\\text{SE}_b = 1.5$, $t^* = 2.101$ (95%, df $= 18$)

**1)** Margin of error $= t^* \\times \\text{SE}_b =$

**2)** Lower bound of the CI $=$

**3)** Upper bound of the CI $=$
      `,
      exercise: {
        inputs: [
          {
            label: 'Margin of error',
            correctAnswer: '3.1515',
            explanation: 'ME $= 2.101 \\times 1.5 = 3.1515$.'
          },
          {
            label: 'Lower bound',
            correctAnswer: '1.3485',
            explanation: 'Lower $= b - \\text{ME} = 4.5 - 3.1515 = 1.3485$.'
          },
          {
            label: 'Upper bound',
            correctAnswer: '7.6515',
            explanation: 'Upper $= b + \\text{ME} = 4.5 + 3.1515 = 7.6515$.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Interpretation Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ir3-dd1',
            label: '95% CI for $\\beta$: $(-1.2, 0.4)$. Does this suggest $\\beta = 0$ is plausible?',
            options: ['Yes — 0 is in the interval', 'No — 0 is not in the interval'],
            correctIndex: 0,
            explanation: '0 falls within $(-1.2, 0.4)$, so $\\beta = 0$ is a plausible value. We would fail to reject $H_0$.'
          },
          {
            id: 'ir3-dd2',
            label: 'Increasing confidence level from 95% to 99% makes the CI ___',
            options: ['narrower', 'wider', 'the same width'],
            correctIndex: 1,
            explanation: 'Higher confidence requires a larger $t^*$, making the interval wider.'
          },
          {
            id: 'ir3-dd3',
            label: 'Increasing sample size generally makes the CI ___',
            options: ['narrower', 'wider', 'the same width'],
            correctIndex: 0,
            explanation: 'Larger $n$ decreases $\\text{SE}_b$ and decreases $t^*$ (slightly), both narrowing the interval.'
          },
          {
            id: 'ir3-dd4',
            label: '"We are 95% confident that $\\beta$ is between 2.1 and 5.7" means ___',
            options: ['95% of samples have slopes between 2.1 and 5.7', 'If we repeated sampling many times, about 95% of the resulting CIs would contain the true $\\beta$', 'The true slope is definitely between 2.1 and 5.7'],
            correctIndex: 1,
            explanation: 'Confidence refers to the method: 95% of intervals constructed this way capture the true $\\beta$.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — CI for Slope** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The CI for slope reads $b \\pm t^* \\cdot \\text{SE}_b$. Where do you find $\\text{SE}_b$?',
            options: ['You must calculate it by hand', 'From the computer regression output', 'From the $t$-table', 'It equals $r^2$'],
            correctAnswer: 1,
            explanation: '$\\text{SE}_b$ is provided in the "SE Coef" column of computer regression output.'
          },
          {
            question: 'A 90% CI for $\\beta$ is $(1.0, 3.0)$. A 95% CI from the same data would:',
            options: ['Be narrower', 'Be wider', 'Be $(1.0, 3.0)$ as well', 'Contain only negative values'],
            correctAnswer: 1,
            explanation: 'Higher confidence → larger $t^*$ → wider interval. It would extend beyond $(1.0, 3.0)$.'
          },
          {
            question: 'CI for $\\beta$: $(0.8, 4.2)$. A suitable interpretation is:',
            options: ['"$\\beta$ is definitely between 0.8 and 4.2"', '"We are confident $\\beta$ is between 0.8 and 4.2"', '"We are [C]% confident that the true slope is between 0.8 and 4.2 [in context]"', '"80% of slopes are between 0.8 and 4.2"'],
            correctAnswer: 2,
            explanation: 'Include the confidence level, "true slope," bounds, and context of the variables.'
          },
          {
            question: 'If 0 is IN the CI for $\\beta$:',
            options: ['$\\beta$ must be 0', 'We reject $H_0: \\beta = 0$', 'We fail to reject $H_0: \\beta = 0$', 'The model is useless'],
            correctAnswer: 2,
            explanation: 'If 0 is a plausible value for $\\beta$, we cannot reject the null hypothesis that $\\beta = 0$.'
          },
          {
            question: '$b = 2.0$, $\\text{SE}_b = 0.5$, $t^* = 2.0$. The CI is:',
            options: ['$(1.0, 3.0)$', '$(1.5, 2.5)$', '$(0, 4.0)$', '$(2.0, 3.0)$'],
            correctAnswer: 0,
            explanation: '$2.0 \\pm 2.0(0.5) = 2.0 \\pm 1.0 = (1.0, 3.0)$.'
          },
          {
            question: 'The margin of error in a CI for slope depends on:',
            options: ['Only $b$', 'Only $n$', '$t^*$ and $\\text{SE}_b$', 'Only $r^2$'],
            correctAnswer: 2,
            explanation: 'ME $= t^* \\cdot \\text{SE}_b$. It depends on the critical value (which depends on df and confidence level) and the standard error.'
          },
          {
            question: 'A 95% CI for $\\beta$ is $(-5.2, -1.8)$. The slope is:',
            options: ['Positive', 'Negative', 'Zero', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'The entire interval is negative, indicating the true slope is negative (with 95% confidence).'
          },
          {
            question: 'Which makes a CI for $\\beta$ narrower?',
            options: ['Smaller $n$', 'Higher confidence level', 'Larger $n$', 'More spread in $y$-values'],
            correctAnswer: 2,
            explanation: 'Larger $n$ reduces $\\text{SE}_b$ and $t^*$, narrowing the interval.'
          },
          {
            question: 'A CI for the slope and a $t$-test for the slope use the same:',
            options: ['Null hypothesis', 'Decision rule', 'Conditions and df', 'Formula'],
            correctAnswer: 2,
            explanation: 'Both require LINE conditions and use df $= n - 2$. They are two sides of the same inference.'
          },
          {
            question: 'A student writes: "95% of all slopes are in the interval." This is:',
            options: ['Correct', 'Incorrect — should say "We are 95% confident the true slope is in the interval"', 'Incorrect — should say "95% of data points"', 'Correct but informal'],
            correctAnswer: 1,
            explanation: 'The CI is about the single true $\\beta$, not about "all slopes." The 95% refers to the method\'s reliability.'
          }
        ]
      }
    }
  ]
};
