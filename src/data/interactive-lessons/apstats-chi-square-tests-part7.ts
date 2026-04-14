export const apStatsChiSquarePart7Data = {
  topicSlug: 'chi-square-tests-apstats',
  sections: [
    {
      id: 'apstats-chisquaretests-p7-intro',
      type: 'text' as const,
      content: `# 📊 Review & Applications

**Part 7 of 7 — Comprehensive Chi-Square Review**

---

### Topics in This Part

| Section |
|---------|
| 📋 All Three Tests Side-by-Side |
| 📐 Formula & Condition Summary |
| 📝 Mixed Practice |

> 🔑 **Key Concept:** This review covers all three chi-square tests. Know when to use each, how to check conditions, and how to write full AP-quality solutions.

---

### Three Chi-Square Tests Compared

| Feature | Goodness of Fit | Independence | Homogeneity |
|---------|:-----------:|:-----------:|:-----------:|
| Samples | One | One | Two or more |
| Variables | One categorical | Two categorical | One categorical |
| $H_0$ | Distribution matches model | Variables are independent | Same distribution across groups |
| Data Format | One-way table | Two-way table | Two-way table |
| $df$ | $k - 1$ | $(r-1)(c-1)$ | $(r-1)(c-1)$ |

---

### Universal Formula

$$\\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}$$

### Universal Conditions

| Condition | Requirement |
|-----------|-------------|
| Random | Random sample or randomized experiment |
| 10% | $n < 10\\%$ of population |
| Large Counts | All expected counts $\\geq 5$ |

### Expected Counts

| Test | How to Calculate $E$ |
|------|---------------------|
| GoF | $E_i = n \\times p_i$ (hypothesized proportion) |
| Independence/Homogeneity | $E = \\frac{\\text{row total} \\times \\text{column total}}{\\text{grand total}}$ |

---

### Decision Guide: Which Test?

| Question | Answer |
|----------|--------|
| Does the data fit a specific model? | **GoF** |
| Are two variables related (one sample)? | **Independence** |
| Same distribution across groups (multiple samples)? | **Homogeneity** |

---

### Key AP Reminders

- $\\chi^2$ is always $\\geq 0$ and always right-tailed
- Large Counts uses **expected** counts, not observed
- Never say "accept $H_0$"
- Association ≠ causation (unless randomized experiment)
- Show the formula with substitution on FRQs
- State $df$ explicitly`
    },
    {
      id: 'apstats-chisquaretests-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'All three chi-square tests share which formula?',
            options: ['$\\bar{x} \\pm t^* s/\\sqrt{n}$', '$\\chi^2 = \\sum (O-E)^2/E$', '$z = (\\hat{p} - p_0)/\\sqrt{p_0(1-p_0)/n}$', '$t = (\\bar{x} - \\mu_0)/(s/\\sqrt{n})$'],
            correctAnswer: 1,
            explanation: 'All three chi-square tests use $\\chi^2 = \\sum (O_i - E_i)^2/E_i$.'
          },
          {
            question: 'The key difference between independence and homogeneity is:',
            options: ['The formula', 'The conditions', 'The study design (one sample vs. multiple)', 'The critical value'],
            correctAnswer: 2,
            explanation: 'Independence: one sample, two variables. Homogeneity: two+ independent samples, one variable. The math is identical.'
          },
          {
            question: 'For GoF, $df$ equals:',
            options: ['$n - 1$', '$k - 1$', '$(r-1)(c-1)$', '$n - k$'],
            correctAnswer: 1,
            explanation: 'GoF: $df = k - 1$ where $k$ is the number of categories.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

**1)** GoF test, 4 categories, $n = 100$, equal proportions. Expected count per category?

**2)** Independence test, $3 \\times 5$ table. $df =$

**3)** $\\chi^2 = 7.5$, $df = 2$. From the table ($\\alpha = 0.05$: 5.991; $\\alpha = 0.025$: 7.378). Is $p$ less than 0.025? Enter "yes" or "no".
      `,
      exercise: {
        inputs: [
          {
            label: 'E per category',
            correctAnswer: '25',
            explanation: 'Equal proportions: $E = 100/4 = 25$.'
          },
          {
            label: 'df',
            correctAnswer: '8',
            explanation: '$df = (3-1)(5-1) = 2 \\times 4 = 8$.'
          },
          {
            label: 'p < 0.025?',
            correctAnswer: 'yes',
            explanation: '$\\chi^2 = 7.5 > 7.378$ (the $\\alpha = 0.025$ cutoff for $df = 2$). So $p < 0.025$.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quick Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'chi7-dd1',
            label: 'Testing whether a spinner lands equally on 5 sections →',
            options: ['GoF', 'Independence', 'Homogeneity'],
            correctIndex: 0,
            explanation: 'One variable (section), testing against a model (equal proportions) → GoF.'
          },
          {
            id: 'chi7-dd2',
            label: 'One survey: record age group AND party preference →',
            options: ['GoF', 'Independence', 'Homogeneity'],
            correctIndex: 1,
            explanation: 'One sample, two categorical variables → Independence.'
          },
          {
            id: 'chi7-dd3',
            label: 'Compare blood type distribution of 3 different countries →',
            options: ['GoF', 'Independence', 'Homogeneity'],
            correctIndex: 2,
            explanation: 'Three independent groups, one categorical variable (blood type) → Homogeneity.'
          },
          {
            id: 'chi7-dd4',
            label: '$\\chi^2 = 2.1$, $df = 3$. At $\\alpha = 0.05$ (cutoff 7.815):',
            options: ['Reject $H_0$', 'Fail to reject $H_0$'],
            correctIndex: 1,
            explanation: '$2.1 < 7.815$, so $p > 0.05$. Fail to reject $H_0$.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exam — Chi-Square Unit** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Expected counts for GoF are calculated as:',
            options: ['Observed / $n$', '$n \\times p_i$ (hypothesized proportion)', 'Row total $\\times$ column total / grand total', 'Category total $-$ grand total'],
            correctAnswer: 1,
            explanation: 'GoF: $E_i = n \\times p_i$ where $p_i$ is the hypothesized proportion for category $i$.'
          },
          {
            question: 'Expected counts for independence/homogeneity are:',
            options: ['Observed / $n$', '$n \\times p_i$', 'Row total $\\times$ column total / grand total', 'All equal'],
            correctAnswer: 2,
            explanation: 'For two-way tables: $E = (\\text{row total})(\\text{column total}) / (\\text{grand total})$.'
          },
          {
            question: 'A GoF test with $\\chi^2 = 12$ and $df = 5$. Using $\\alpha = 0.05$ cutoff $= 11.070$:',
            options: ['Fail to reject', 'Reject $H_0$', 'Inconclusive', 'Need the $t$-table'],
            correctAnswer: 1,
            explanation: '$12 > 11.070$, so $p < 0.05$. Reject $H_0$.'
          },
          {
            question: 'A two-way table for independence has all expected counts of exactly 2. Should you proceed?',
            options: ['Yes — observed counts matter', 'No — Large Counts condition fails', 'Yes — if the sample is random', 'Only if $df > 5$'],
            correctAnswer: 1,
            explanation: 'All expected counts must be $\\geq 5$. With $E = 2$, the condition fails.'
          },
          {
            question: 'After a significant homogeneity test, the follow-up is:',
            options: ['Nothing — the test is done', 'Examine which cells have the largest $(O-E)^2/E$', 'Run a GoF test', 'Compute a confidence interval'],
            correctAnswer: 1,
            explanation: 'Looking at individual contributions identifies which categories differ most across groups.'
          },
          {
            question: 'The $\\chi^2$ test is always:',
            options: ['Left-tailed', 'Right-tailed', 'Two-tailed', 'Depends on $H_a$'],
            correctAnswer: 1,
            explanation: 'Squared deviations are always positive, so large $\\chi^2$ (right tail) indicates evidence against $H_0$.'
          },
          {
            question: 'A $2 \\times 2$ table: $df =$',
            options: ['$4$', '$3$', '$2$', '$1$'],
            correctAnswer: 3,
            explanation: '$df = (2-1)(2-1) = 1$.'
          },
          {
            question: 'If $p = 0.001$ and $\\alpha = 0.05$:',
            options: ['Fail to reject — not significant', 'Reject — very strong evidence against $H_0$', 'Reject — but barely', 'Cannot tell'],
            correctAnswer: 1,
            explanation: '$p = 0.001 \\ll 0.05$. Strong evidence against $H_0$.'
          },
          {
            question: 'Which statement is CORRECT after failing to reject $H_0$ in a GoF test?',
            options: ['The model is correct', 'The data prove the model', 'There is not convincing evidence the distribution differs from the model', 'The test was invalid'],
            correctAnswer: 2,
            explanation: 'Failing to reject does not prove $H_0$ true — only that we lack evidence to reject it.'
          },
          {
            question: 'On the AP exam, a complete $\\chi^2$ solution requires:',
            options: ['Hypotheses, Conditions, Calculate ($\\chi^2$, $df$, p-value), Conclude in context', 'Just the $\\chi^2$ value', 'Hypotheses and conclusion only', 'A confidence interval'],
            correctAnswer: 0,
            explanation: 'Full credit requires all four steps: Hypotheses in context, Conditions checked, Calculation shown, Conclusion with p-value comparison.'
          }
        ]
      }
    }
  ]
};
