export const apStatsComparingPart4Data = {
  topicSlug: 'comparing-populations-apstats',
  sections: [
    {
      id: 'apstats-comparingpopulations-p4-intro',
      type: 'text' as const,
      content: `# 📊 Confidence Intervals for Differences

**Part 4 of 7 — Estimating How Much Two Groups Differ**

---

### Topics in This Part

| Section |
|---------|
| 📐 Two-Sample CI for $\\mu_1 - \\mu_2$ |
| 🔗 Paired CI for $\\mu_d$ |
| 📝 Interpretation Templates |
| 🧮 Connection to Hypothesis Tests |

> 🔑 **Key Concept:** A CI for the difference gives a range of plausible values for how much two population means (or the mean difference) differ.

---

### Two-Sample CI for $\\mu_1 - \\mu_2$

$$\\boxed{(\\bar{x}_1 - \\bar{x}_2) \\pm t^* \\cdot \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}$$

- Same conditions as the two-sample $t$-test (Random, Independent, Normal/Large, 10%)
- df: use calculator (Welch) or conservative $\\min(n_1 - 1, n_2 - 1)$

---

### Paired CI for $\\mu_d$

$$\\boxed{\\bar{d} \\pm t^* \\cdot \\frac{s_d}{\\sqrt{n}}}$$

- Same conditions as the paired $t$-test (Random, Independent pairs, Normal differences)
- df $= n - 1$ (where $n$ = number of pairs)

---

### Interpretation Templates

**Two-Sample:**
"We are [C]% confident that the true difference in mean [context] between [group 1] and [group 2] is between [lower] and [upper] [units]."

**Paired:**
"We are [C]% confident that the true mean difference in [context] is between [lower] and [upper] [units]."

---

### CI ↔ Test Connection

| CI contains 0? | Test conclusion at $\\alpha = 1 - C$ |
|:-:|:-:|
| **Yes** | Fail to reject $H_0: \\mu_1 = \\mu_2$ (or $\\mu_d = 0$) |
| **No** | Reject $H_0$ |

---

### Worked Example — Two-Sample CI

Group A (old drug): $n_1 = 40$, $\\bar{x}_1 = 82$, $s_1 = 12$
Group B (new drug): $n_2 = 45$, $\\bar{x}_2 = 88$, $s_2 = 10$

95% CI for $\\mu_B - \\mu_A$:
- $\\bar{x}_B - \\bar{x}_A = 88 - 82 = 6$
- SE $= \\sqrt{10^2/45 + 12^2/40} = \\sqrt{2.222 + 3.6} = \\sqrt{5.822} = 2.413$
- Conservative df $= \\min(39, 44) = 39$, $t^* \\approx 2.023$
- $6 \\pm 2.023(2.413) = 6 \\pm 4.881 = (1.119, 10.881)$

**Interpretation:** "We are 95% confident that the true difference in mean recovery scores (new $-$ old) is between 1.1 and 10.9 points. Since 0 is not in the interval, there is evidence the new drug produces higher mean scores."

---

### Worked Example — Paired CI

15 patients measured before and after treatment.
$\\bar{d} = 8.3$ (After $-$ Before), $s_d = 6.2$

95% CI for $\\mu_d$: df $= 14$, $t^* = 2.145$
$$8.3 \\pm 2.145 \\cdot \\frac{6.2}{\\sqrt{15}} = 8.3 \\pm 2.145(1.601) = 8.3 \\pm 3.434$$
$$(4.866, 11.734)$$

**Interpretation:** "We are 95% confident that the true mean change in [outcome] after treatment is between 4.9 and 11.7 units."

> ⚠️ **AP Tip:** Always define $d$ (e.g., After $-$ Before) and include context and units.`
    },
    {
      id: 'apstats-comparingpopulations-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**CI for Differences Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 95% CI for $\\mu_1 - \\mu_2$ is $(-3, 7)$. At $\\alpha = 0.05$, the two-sided test would:',
            options: ['Reject $H_0$', 'Fail to reject $H_0$', 'Need more information', 'Be one-sided only'],
            correctAnswer: 1,
            explanation: '0 is inside $(-3, 7)$, so $\\mu_1 = \\mu_2$ is plausible. We fail to reject $H_0$.'
          },
          {
            question: 'A 95% CI for $\\mu_d$ is $(2.1, 8.5)$. This means:',
            options: ['The treatment has no effect', 'We are 95% confident the true mean difference is between 2.1 and 8.5', 'The treatment increases scores by exactly 5.3', '95% of differences are between 2.1 and 8.5'],
            correctAnswer: 1,
            explanation: 'The CI gives a range of plausible values for $\\mu_d$. Since it excludes 0, there is evidence of a real difference.'
          },
          {
            question: 'Increasing the confidence level makes the CI:',
            options: ['Narrower', 'Wider', 'Unchanged', 'Shift to the right'],
            correctAnswer: 1,
            explanation: 'Higher confidence requires a larger $t^*$, producing a wider interval.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p4-input',
      type: 'input-boxes' as const,
      content: `
**Building CIs** 🧮

**Two-Sample:** $\\bar{x}_1 - \\bar{x}_2 = 10$, SE $= 4$, $t^* = 2.0$

**1)** Margin of error $=$

**2)** Lower bound $=$

**Paired:** $\\bar{d} = -3$, $s_d = 6$, $n = 36$, $t^* = 2.030$

**3)** SE of $\\bar{d}$ $=$
      `,
      exercise: {
        inputs: [
          {
            label: 'Margin of error',
            correctAnswer: '8',
            explanation: 'ME $= t^* \\cdot \\text{SE} = 2.0 \\cdot 4 = 8$.'
          },
          {
            label: 'Lower bound',
            correctAnswer: '2',
            explanation: 'Lower $= 10 - 8 = 2$.'
          },
          {
            label: 'SE of d-bar',
            correctAnswer: '1',
            explanation: '$\\text{SE} = s_d/\\sqrt{n} = 6/\\sqrt{36} = 6/6 = 1$.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Interpretation Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'cp4-dd1',
            label: '90% CI for $\\mu_1 - \\mu_2$: $(0.5, 4.3)$. At $\\alpha = 0.10$, we ___ $H_0$',
            options: ['reject', 'fail to reject'],
            correctIndex: 0,
            explanation: '0 is not in $(0.5, 4.3)$, so we reject $H_0$ at $\\alpha = 0.10$.'
          },
          {
            id: 'cp4-dd2',
            label: 'A wider CI means ___ precision in estimating the difference',
            options: ['more', 'less'],
            correctIndex: 1,
            explanation: 'A wider interval means less certainty about the exact value of the difference.'
          },
          {
            id: 'cp4-dd3',
            label: 'To narrow a CI, you can ___',
            options: ['increase the confidence level', 'increase the sample size', 'decrease the sample size'],
            correctIndex: 1,
            explanation: 'Larger samples reduce SE, narrowing the interval.'
          },
          {
            id: 'cp4-dd4',
            label: 'A paired CI for $\\mu_d$ with $\\bar{d} = 5$, ME $= 3$ gives the interval ___',
            options: ['$(2, 8)$', '$(3, 5)$', '$(5, 8)$', '$(-3, 3)$'],
            correctIndex: 0,
            explanation: '$\\bar{d} \\pm \\text{ME} = 5 \\pm 3 = (2, 8)$.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — CIs for Differences** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The center of a two-sample CI for $\\mu_1 - \\mu_2$ is:',
            options: ['$\\bar{x}_1$', '$\\bar{x}_2$', '$\\bar{x}_1 - \\bar{x}_2$', '$0$'],
            correctAnswer: 2,
            explanation: 'The CI is centered at the point estimate $\\bar{x}_1 - \\bar{x}_2$.'
          },
          {
            question: 'The center of a paired CI for $\\mu_d$ is:',
            options: ['$0$', '$\\bar{d}$', '$s_d$', '$n$'],
            correctAnswer: 1,
            explanation: 'The paired CI is centered at $\\bar{d}$, the sample mean of the differences.'
          },
          {
            question: '95% CI for $\\mu_1 - \\mu_2$: $(5, 15)$. The point estimate is:',
            options: ['$5$', '$15$', '$10$', '$20$'],
            correctAnswer: 2,
            explanation: 'Point estimate $= (5 + 15)/2 = 10$.'
          },
          {
            question: 'If both endpoints of the CI are positive, the CI suggests:',
            options: ['$\\mu_1 > \\mu_2$ (or $\\mu_d > 0$)', '$\\mu_1 < \\mu_2$ (or $\\mu_d < 0$)', 'No difference', 'Cannot tell'],
            correctAnswer: 0,
            explanation: 'Both endpoints positive means the entire interval is above 0 — group 1 (or after) is higher.'
          },
          {
            question: 'A CI for the difference: $(-2, 12)$. Is there a significant difference at the matching $\\alpha$?',
            options: ['Yes', 'No — 0 is in the interval', 'Only if $P < 0.01$', 'Only if $n > 30$'],
            correctAnswer: 1,
            explanation: '0 is inside $(-2, 12)$, so the difference is not significant at the corresponding $\\alpha$.'
          },
          {
            question: 'Doubling both sample sizes approximately ___ the margin of error.',
            options: ['doubles', 'halves', 'divides by $\\sqrt{2}$', 'has no effect'],
            correctAnswer: 2,
            explanation: 'SE involves $\\sqrt{n}$ in the denominator, so doubling $n$ divides SE by $\\sqrt{2}$.'
          },
          {
            question: '95% CI for $\\mu_d$: $(-8.1, -1.3)$ where $d$ = After $-$ Before. This suggests:',
            options: ['After values are higher', 'Before values are higher', 'No change', 'The test is invalid'],
            correctAnswer: 1,
            explanation: 'The entire CI is negative: After $-$ Before $< 0$, meaning After values are lower (Before is higher).'
          },
          {
            question: 'The two-sample CI formula uses the same SE as the two-sample $t$-test:',
            options: ['No — different formulas', 'Yes — $\\sqrt{s_1^2/n_1 + s_2^2/n_2}$', 'Only if $n_1 = n_2$', 'Only for paired data'],
            correctAnswer: 1,
            explanation: 'Both the CI and the test use the same SE: $\\sqrt{s_1^2/n_1 + s_2^2/n_2}$.'
          },
          {
            question: 'A student reports: "We are 95% confident the mean difference is 10." What is missing?',
            options: ['The margin of error / interval', 'The $P$-value', 'The sample size', 'The $t$-statistic'],
            correctAnswer: 0,
            explanation: 'A CI report must include endpoints (or ME): "between [lower] and [upper]," not just the point estimate.'
          },
          {
            question: 'Which increases the width of a CI for $\\mu_1 - \\mu_2$?',
            options: ['Larger sample sizes', 'Smaller $s_1$ and $s_2$', 'Higher confidence level', 'Smaller $t^*$'],
            correctAnswer: 2,
            explanation: 'Higher confidence → larger $t^*$ → larger ME → wider CI.'
          }
        ]
      }
    }
  ]
};
