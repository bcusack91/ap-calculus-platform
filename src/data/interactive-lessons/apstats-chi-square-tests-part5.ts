export const apStatsChiSquarePart5Data = {
  topicSlug: 'chi-square-tests-apstats',
  sections: [
    {
      id: 'apstats-chisquaretests-p5-intro',
      type: 'text' as const,
      content: `# 📊 Interpreting Results

**Part 5 of 7 — Reading $\\chi^2$ Output and Drawing Conclusions**

---

### Topics in This Part

| Section |
|---------|
| 📐 Interpreting the $\\chi^2$ Statistic |
| 📊 Using the $\\chi^2$ Table |
| 📝 Writing AP Conclusions |
| 🔍 Follow-Up Analysis |

> 🔑 **Key Concept:** A large $\\chi^2$ value means the observed data differ substantially from what is expected under $H_0$. The p-value tells you how surprising your $\\chi^2$ would be if $H_0$ were true.

---

### What the $\\chi^2$ Value Tells You

| $\\chi^2$ Value | Interpretation |
|----------------|---------------|
| Near 0 | Observed counts closely match expected → little evidence against $H_0$ |
| Moderate | Some discrepancy → may or may not be significant |
| Large | Big differences → strong evidence against $H_0$ |

The p-value makes this precise: it gives the probability of getting a $\\chi^2$ as large or larger than yours, assuming $H_0$ is true.

---

### Reading the $\\chi^2$ Table

The table gives **right-tail areas** for the $\\chi^2$ distribution:

| $df$ | $\\alpha = 0.10$ | $\\alpha = 0.05$ | $\\alpha = 0.025$ | $\\alpha = 0.01$ |
|-----|:---------:|:---------:|:----------:|:---------:|
| 1 | 2.706 | 3.841 | 5.024 | 6.635 |
| 2 | 4.605 | 5.991 | 7.378 | 9.210 |
| 3 | 6.251 | 7.815 | 9.348 | 11.345 |
| 4 | 7.779 | 9.488 | 11.143 | 13.277 |
| 5 | 9.236 | 11.070 | 12.833 | 15.086 |

**How to use:** If $\\chi^2 = 8.5$ with $df = 3$: $7.815 < 8.5 < 9.348$, so $0.025 < p < 0.05$.

---

### AP Conclusion Template

**If $p \\leq \\alpha$:**
"Since the p-value ($p = \\text{value}$) is less than $\\alpha = 0.05$, we reject $H_0$. There is convincing evidence that [state $H_a$ in context]."

**If $p > \\alpha$:**
"Since the p-value ($p = \\text{value}$) is greater than $\\alpha = 0.05$, we fail to reject $H_0$. There is not convincing evidence that [state $H_a$ in context]."

> ⚠️ **Never say "accept $H_0$"** — say "fail to reject $H_0$."

---

### Follow-Up: Which Cells Drive the Result?

After rejecting $H_0$, examine individual cell contributions $(O_i - E_i)^2/E_i$:

| Contribution | Interpretation |
|-------------|---------------|
| Large | This category/cell is a major source of the discrepancy |
| Small | This category/cell fits the model well |

Also note the **direction**: Is $O > E$ (more than expected) or $O < E$ (fewer than expected)?`
    },
    {
      id: 'apstats-chisquaretests-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Interpretation Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\chi^2 = 12.3$ with $df = 4$. Using the table ($\\alpha = 0.05$ cutoff $= 9.488$), we:',
            options: ['Fail to reject — $12.3 < 9.488$', 'Reject — $12.3 > 9.488$', 'Need more information', 'Compare to $z^*$ instead'],
            correctAnswer: 1,
            explanation: '$12.3 > 9.488$ so $p < 0.05$. We reject $H_0$.'
          },
          {
            question: 'After a significant $\\chi^2$ test, a good follow-up is:',
            options: ['Stop — the answer is clear', 'Examine which cells contributed most to $\\chi^2$', 'Run a $t$-test', 'Remove outliers and retest'],
            correctAnswer: 1,
            explanation: 'Looking at individual cell contributions helps identify where the model breaks down — which categories are different from expected.'
          },
          {
            question: '"We fail to reject $H_0$" means:',
            options: ['$H_0$ is true', 'We accept $H_0$', 'We do not have enough evidence to reject $H_0$', 'The test was invalid'],
            correctAnswer: 2,
            explanation: 'Failing to reject means the data do not provide convincing evidence against $H_0$. It does NOT prove $H_0$ true.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p5-input',
      type: 'input-boxes' as const,
      content: `
**Using the $\\chi^2$ Table** 🧮

Use the partial table above.

**1)** $\\chi^2 = 6.0$, $df = 2$. Is $p$ less than or greater than 0.05? Enter "less" or "greater".

**2)** $\\chi^2 = 10.5$, $df = 5$. The p-value is between which two table values? Enter the larger $\\alpha$ boundary (e.g., "0.10").

**3)** For $df = 1$, what $\\chi^2$ value gives $p = 0.05$?
      `,
      exercise: {
        inputs: [
          {
            label: 'p vs 0.05',
            correctAnswer: 'less',
            explanation: '$df = 2$: the $\\alpha = 0.05$ cutoff is 5.991. Since $6.0 > 5.991$, $p < 0.05$.'
          },
          {
            label: 'Larger alpha boundary',
            correctAnswer: '0.10',
            explanation: '$df = 5$: $\\chi^2 = 10.5$ falls between $9.236$ ($\\alpha = 0.10$) and $11.070$ ($\\alpha = 0.05$). So $0.05 < p < 0.10$.'
          },
          {
            label: 'Critical chi-square',
            correctAnswer: '3.841',
            explanation: 'From the table: $df = 1$, $\\alpha = 0.05$ → $\\chi^2 = 3.841$.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Conclusion Writing** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'chi5-dd1',
            label: '"We accept $H_0$" is ___ on the AP exam',
            options: ['Correct language', 'Incorrect — say "fail to reject $H_0$"'],
            correctIndex: 1,
            explanation: 'Never say "accept $H_0$." The correct phrasing is "fail to reject $H_0$."'
          },
          {
            id: 'chi5-dd2',
            label: 'After rejecting $H_0$ in an independence test (observational study), we can conclude',
            options: ['Causation', 'Association but not causation'],
            correctIndex: 1,
            explanation: 'Chi-square tests show association, not causation (unless the data come from a randomized experiment).'
          },
          {
            id: 'chi5-dd3',
            label: 'A cell with $O = 30$ and $E = 15$ contributes ___ to $\\chi^2$ than a cell with $O = 20$ and $E = 15$',
            options: ['More', 'Less', 'The same'],
            correctIndex: 0,
            explanation: '$(30-15)^2/15 = 15$ vs. $(20-15)^2/15 = 1.67$. The first cell contributes much more.'
          },
          {
            id: 'chi5-dd4',
            label: '$p = 0.03$, $\\alpha = 0.05$. The conclusion is to ___',
            options: ['reject $H_0$', 'fail to reject $H_0$'],
            correctIndex: 0,
            explanation: '$p = 0.03 < 0.05 = \\alpha$. Reject $H_0$.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Interpreting Results** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A $\\chi^2$ value near 0 suggests:',
            options: ['Strong evidence against $H_0$', 'Observed counts match expected counts closely', 'The test is invalid', 'The sample was too small'],
            correctAnswer: 1,
            explanation: '$\\chi^2 \\approx 0$ means $O \\approx E$ for all cells — data fit the null model well.'
          },
          {
            question: '$\\chi^2 = 3.5$, $df = 1$. From the table ($\\alpha = 0.10$: 2.706, $\\alpha = 0.05$: 3.841):',
            options: ['$p < 0.05$', '$0.05 < p < 0.10$', '$p > 0.10$', '$p = 0.05$'],
            correctAnswer: 1,
            explanation: '$2.706 < 3.5 < 3.841$, so $0.05 < p < 0.10$.'
          },
          {
            question: 'The proper AP conclusion when $p = 0.08$ and $\\alpha = 0.05$:',
            options: ['Reject $H_0$ — close to significant', 'Fail to reject $H_0$ — not convincing evidence', 'Accept $H_0$', 'The result is significant'],
            correctAnswer: 1,
            explanation: '$p = 0.08 > 0.05$: fail to reject $H_0$. "Close" does not count as significant.'
          },
          {
            question: 'Which cell contributes most to $\\chi^2$ if $O$ values are 25, 10, 18 and $E$ values are 20, 20, 13?',
            options: ['Cell 1: $(25-20)^2/20 = 1.25$', 'Cell 2: $(10-20)^2/20 = 5.0$', 'Cell 3: $(18-13)^2/13 = 1.92$', 'All equal'],
            correctAnswer: 1,
            explanation: 'Cell 2 has the largest contribution: $(10-20)^2/20 = 100/20 = 5.0$.'
          },
          {
            question: 'After failing to reject $H_0$, you should say:',
            options: ['The variables are independent', 'There is not convincing evidence of an association', '$H_0$ is true', 'The sample was too small'],
            correctAnswer: 1,
            explanation: 'Correct: "not convincing evidence." We never say $H_0$ is proven true.'
          },
          {
            question: 'A larger sample size generally:',
            options: ['Decreases $\\chi^2$', 'Increases $\\chi^2$ for the same proportional discrepancy', 'Has no effect', 'Decreases $df$'],
            correctAnswer: 1,
            explanation: 'With larger $n$, the same proportional difference produces larger absolute differences, increasing $\\chi^2$.'
          },
          {
            question: 'The p-value is the probability of:',
            options: ['$H_0$ being true', 'Getting $\\chi^2$ this large or larger if $H_0$ is true', 'The data being correct', 'Rejecting $H_0$'],
            correctAnswer: 1,
            explanation: 'The p-value is $P(\\chi^2 \\geq \\text{observed} \\mid H_0 \\text{ true})$.'
          },
          {
            question: 'For $df = 3$, $\\alpha = 0.01$: the critical value from the table is $11.345$. Your $\\chi^2 = 14.2$. Decision:',
            options: ['Fail to reject', 'Reject $H_0$ at $\\alpha = 0.01$', 'Need $\\alpha = 0.05$ table', 'Inconclusive'],
            correctAnswer: 1,
            explanation: '$14.2 > 11.345$, so $p < 0.01$. Reject $H_0$ at $\\alpha = 0.01$.'
          },
          {
            question: 'If $O > E$ in a cell, that category has:',
            options: ['Fewer observations than expected', 'More observations than expected', 'Exactly the expected number', 'No contribution to $\\chi^2$'],
            correctAnswer: 1,
            explanation: '$O > E$ means the observed count exceeds what the null model predicts for that category.'
          },
          {
            question: 'A GoF test with $\\chi^2 = 0.5$ and $df = 4$ has p-value approximately:',
            options: ['$p < 0.01$', '$p \\approx 0.05$', '$p > 0.90$', 'Cannot determine'],
            correctAnswer: 2,
            explanation: '$\\chi^2 = 0.5$ is far below the $\\alpha = 0.10$ cutoff of 7.779 for $df = 4$. The p-value is very large, well above 0.90.'
          }
        ]
      }
    }
  ]
};
