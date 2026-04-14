export const apStatsComparingPart7Data = {
  topicSlug: 'comparing-populations-apstats',
  sections: [
    {
      id: 'apstats-comparingpopulations-p7-intro',
      type: 'text' as const,
      content: `# 📊 Review & Applications

**Part 7 of 7 — Comprehensive Review**

---

## Complete Formula Reference

### Two-Sample T-Test for Means

| Component | Formula |
|-----------|---------|
| Standard Error | $SE = \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}$ |
| Test Statistic | $t = \\frac{(\\bar{x}_1 - \\bar{x}_2) - (\\mu_1 - \\mu_2)_0}{SE}$ |
| Confidence Interval | $(\\bar{x}_1 - \\bar{x}_2) \\pm t^* \\cdot SE$ |
| Degrees of Freedom | Use technology (Welch\'s approximation) |

### Paired T-Test

| Component | Formula |
|-----------|---------|
| Mean Difference | $\\bar{x}_d = \\frac{\\sum d_i}{n}$ |
| Standard Error | $SE = \\frac{s_d}{\\sqrt{n}}$ |
| Test Statistic | $t = \\frac{\\bar{x}_d - \\mu_{d_0}}{SE}$ |
| Confidence Interval | $\\bar{x}_d \\pm t^* \\cdot \\frac{s_d}{\\sqrt{n}}$ |
| Degrees of Freedom | $df = n - 1$ |

---

## Decision Guide: Paired vs. Two-Sample

| Question | Paired | Two-Sample |
|----------|:------:|:----------:|
| Same subjects measured twice? | ✅ | ❌ |
| Before/after design? | ✅ | ❌ |
| Matched pairs (twins, siblings)? | ✅ | ❌ |
| Two independent groups? | ❌ | ✅ |
| Random assignment to groups? | ❌ | ✅ |
| Check conditions on... | Differences $d_i$ | Each sample |
| $df = $ | $n - 1$ | Technology |

---

## Conditions Summary

### Two-Sample Tests/CIs
1. **Random:** Both samples from random processes (or random assignment)
2. **Normal:** $n_1 \\geq 30$ and $n_2 \\geq 30$, or no strong skewness/outliers
3. **Independent:** Samples independent of each other; each $< 10\\%$ of its population

### Paired Tests/CIs
1. **Random:** Random sample of pairs (or randomly determine order)
2. **Normal:** $n \\geq 30$ differences, or differences show no strong skewness/outliers
3. **Independent:** Individual pairs are independent; $n < 10\\%$ of all pairs in population

---

## Interpretation Templates

### Hypothesis Test Conclusion
> "Since $P$-value = ___ is [less/greater] than $\\alpha = $ ___, we [reject/fail to reject] $H_0$. There [is/is not] convincing evidence that [context: what the alternative hypothesis claims]."

### Confidence Interval Interpretation
> "We are ___% confident that the true difference in means [context: $\\mu_1 - \\mu_2$ in words] is between ___ and ___."

### Confidence Interval and Significance
- If 0 is **NOT** in the CI → Reject $H_0$ (at the corresponding $\\alpha$)
- If 0 **IS** in the CI → Fail to reject $H_0$

---

## Key Concepts from Every Part

| Part | Topic | Key Idea |
|:---:|-------|----------|
| 1 | Introduction | Two-sample vs. paired designs |
| 2 | Two-Sample T-Test | Tests for differences between independent groups |
| 3 | Paired T-Test | Tests for differences within matched pairs |
| 4 | Confidence Intervals | Estimate the true difference with a range |
| 5 | Power & Sample Size | Power = $1 - \\beta$; larger $n$ → more power |
| 6 | Problem-Solving | Complete 4-step process with real data |

---

## Power Quick Review

$$\\text{Power} = 1 - \\beta = P(\\text{reject } H_0 \\mid H_0 \\text{ is false})$$

Power increases when: $n \\uparrow$, $\\alpha \\uparrow$, effect size $\\uparrow$, $\\sigma \\downarrow$

> 🔑 **Final Tip:** The AP exam tests your ability to (1) choose the right test, (2) check conditions, (3) calculate correctly, and (4) interpret in context. Practice the full 4-step process until it becomes automatic.`
    },
    {
      id: 'apstats-comparingpopulations-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A paired t-test is appropriate when:',
            options: ['Two independent random samples are collected', 'Each subject is measured under two conditions', 'Sample sizes are equal', 'The population is normal'],
            correctAnswer: 1,
            explanation: 'Paired tests are used when each subject provides two measurements or when subjects are naturally matched.'
          },
          {
            question: 'A 95% CI for $\\mu_1 - \\mu_2$ is $(1.3, 5.8)$. At $\\alpha = 0.05$, we should:',
            options: ['Fail to reject $H_0$', 'Reject $H_0$', 'Cannot determine', 'Accept $H_0$'],
            correctAnswer: 1,
            explanation: 'The interval does not contain 0, so there IS a significant difference at $\\alpha = 0.05$.'
          },
          {
            question: 'For all hypothesis tests, the conclusion must include:',
            options: ['The exact p-value to 10 decimal places', 'Context relating to the problem situation', 'A proof that $H_0$ is false', 'The population standard deviation'],
            correctAnswer: 1,
            explanation: 'AP scoring rubrics always require context — your conclusion must reference the specific variables and setting.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p7-input',
      type: 'input-boxes' as const,
      content: `
**Formula Application** 🧮

**1)** Two-sample data: $\\bar{x}_1 = 78$, $\\bar{x}_2 = 72$, $SE = 2.5$. Calculate $t$ (round to 1 decimal place).

**2)** Paired data: $\\bar{x}_d = -4.5$, $s_d = 6$, $n = 36$. Calculate $SE$ (round to 1 decimal place).

**3)** Using the values from #2, what is $df$?
      `,
      exercise: {
        inputs: [
          {
            label: 't-statistic',
            correctAnswer: '2.4',
            explanation: '$t = \\frac{78 - 72}{2.5} = \\frac{6}{2.5} = 2.4$.'
          },
          {
            label: 'SE',
            correctAnswer: '1.0',
            explanation: '$SE = \\frac{s_d}{\\sqrt{n}} = \\frac{6}{\\sqrt{36}} = \\frac{6}{6} = 1.0$.'
          },
          {
            label: 'df',
            correctAnswer: '35',
            explanation: 'For a paired test, $df = n - 1 = 36 - 1 = 35$.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Connections** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'cp7-dd1',
            label: 'If 0 is inside a 95% CI for $\\mu_1 - \\mu_2$, the two-sided test at $\\alpha = 0.05$ will ___',
            options: ['reject $H_0$', 'fail to reject $H_0$'],
            correctIndex: 1,
            explanation: '0 in the CI means the data is consistent with no difference → fail to reject.'
          },
          {
            id: 'cp7-dd2',
            label: 'A study with $n = 500$ per group finds $P = 0.03$ but the difference is 0.2 points on a 100-point scale. The result is statistically significant but ___',
            options: ['practically important', 'not practically meaningful', 'invalid'],
            correctIndex: 1,
            explanation: 'A 0.2-point difference on a 100-point scale is trivially small despite being "significant" with a large sample.'
          },
          {
            id: 'cp7-dd3',
            label: 'Conditions for inference include randomness, normality, and ___',
            options: ['equal variances', 'independence', 'large population', 'known $\\sigma$'],
            correctIndex: 1,
            explanation: 'The three conditions: Random, Normal, Independent (10% condition).'
          },
          {
            id: 'cp7-dd4',
            label: 'In a paired design, increasing the number of pairs will ___ the standard error',
            options: ['increase', 'decrease', 'not change'],
            correctIndex: 1,
            explanation: '$SE = s_d / \\sqrt{n}$. Larger $n$ → smaller SE.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exam — Comparing Populations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The SE for a two-sample t-test is:',
            options: ['$\\frac{s_1 + s_2}{n_1 + n_2}$', '$\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}$', '$\\frac{s_d}{\\sqrt{n}}$', '$\\frac{\\bar{x}_1 - \\bar{x}_2}{t}$'],
            correctAnswer: 1,
            explanation: 'The two-sample SE combines the variability from both samples: $\\sqrt{s_1^2/n_1 + s_2^2/n_2}$.'
          },
          {
            question: 'The SE for a paired t-test is:',
            options: ['$\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}$', '$\\frac{s_d}{\\sqrt{n}}$', '$\\frac{s}{\\sqrt{2n}}$', '$s_d \\cdot \\sqrt{n}$'],
            correctAnswer: 1,
            explanation: 'For paired data, SE is calculated from the differences: $s_d / \\sqrt{n}$.'
          },
          {
            question: 'A 90% CI for $\\mu_A - \\mu_B$ is $(-3.1, 0.8)$. What can we say?',
            options: ['$\\mu_A > \\mu_B$', '$\\mu_A < \\mu_B$', 'We cannot conclude a significant difference at $\\alpha = 0.10$', 'The test is invalid'],
            correctAnswer: 2,
            explanation: 'The interval contains 0, so we cannot conclude there is a difference at $\\alpha = 0.10$.'
          },
          {
            question: '20 students take a pre-test and post-test. The appropriate analysis uses:',
            options: ['Two-sample t-test', 'Paired t-test with $df = 19$', 'Paired t-test with $df = 39$', 'Z-test'],
            correctAnswer: 1,
            explanation: 'Same students tested twice → paired data. $df = n - 1 = 20 - 1 = 19$.'
          },
          {
            question: 'Power increases when:',
            options: ['$\\alpha$ decreases', 'Sample size increases', 'Effect size decreases', 'Variability increases'],
            correctAnswer: 1,
            explanation: 'Larger samples → smaller SE → easier to detect real differences → higher power.'
          },
          {
            question: 'A researcher fails to reject $H_0$. This means:',
            options: ['$H_0$ is true', '$H_a$ is false', 'There is not sufficient evidence against $H_0$', 'The test was done incorrectly'],
            correctAnswer: 2,
            explanation: 'Failing to reject means insufficient evidence; it does NOT prove $H_0$ is true.'
          },
          {
            question: 'Which conditions apply to the DIFFERENCES in a paired test?',
            options: ['Random, Normal, Independent', 'Only Normal', 'Only Independence', 'None — conditions are not needed for paired tests'],
            correctAnswer: 0,
            explanation: 'All three standard conditions (Random, Normal, Independent) must be checked for the differences.'
          },
          {
            question: 'A two-sample t-test yields $t = 2.15$ with $P = 0.037$. At $\\alpha = 0.05$:',
            options: ['Fail to reject $H_0$', 'Reject $H_0$ — there is convincing evidence of a difference', 'The result is inconclusive', 'We need a larger sample'],
            correctAnswer: 1,
            explanation: '$P = 0.037 < 0.05 = \\alpha$ → reject $H_0$.'
          },
          {
            question: '$\\beta = 0.25$. What is the power?',
            options: ['0.25', '0.75', '0.50', '0.05'],
            correctAnswer: 1,
            explanation: 'Power $= 1 - \\beta = 1 - 0.25 = 0.75$.'
          },
          {
            question: 'The most common error on AP free-response comparing populations questions is:',
            options: ['Using the wrong formula', 'Failing to state a conclusion in context and not checking conditions', 'Getting the wrong $P$-value', 'Using a calculator'],
            correctAnswer: 1,
            explanation: 'The most frequent deductions are for missing context in conclusions and not verifying conditions.'
          }
        ]
      }
    }
  ]
};
