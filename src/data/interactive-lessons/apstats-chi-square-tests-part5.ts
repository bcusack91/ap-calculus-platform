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
            options: ['Fail to reject $H_0$, since $12.3 > 9.488$ means $p > 0.05$', 'Reject $H_0$, since $12.3 > 9.488$ means $p < 0.05$', 'Fail to reject $H_0$, since $df = 4$ is too small', 'Reject $H_0$, since $12.3 > 9.488$ means $p > 0.05$'],
            correctAnswer: 1,
            explanation: '$12.3 > 9.488$ puts the statistic beyond the 0.05 cutoff, so the right-tail area is less than 0.05 and we reject $H_0$. A statistic past the cutoff means a SMALLER p-value, not a larger one, and $df$ is not a reason to withhold a decision.'
          },
          {
            question: 'After a significant $\\chi^2$ test, a good follow-up is:',
            options: ['Report the decision without any further detail', 'Examine the cells that contributed most to $\\chi^2$', 'Run a $t$ test on the counts in each column', 'Remove the cells with the largest counts and retest'],
            correctAnswer: 1,
            explanation: 'Looking at individual cell contributions shows where the observed counts depart most from expected, which categories drive the result. $t$ tests do not apply to categorical counts, and deleting cells to retest would distort the analysis.'
          },
          {
            question: '"We fail to reject $H_0$" means:',
            options: ['The data prove that $H_0$ is true', 'We accept $H_0$ as the correct model', 'The data are not convincing evidence against $H_0$', 'The test was invalid for these data'],
            correctAnswer: 2,
            explanation: 'Failing to reject means the data do not provide convincing evidence against $H_0$. It does NOT prove or accept $H_0$, and it says nothing about whether the conditions for the test were met.'
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
            options: ['Correct wording', 'Incorrect wording', 'Correct only when $p > 0.50$', 'Correct only in a test for homogeneity'],
            correctIndex: 1,
            explanation: 'Never say "accept $H_0$," whatever the p-value or test. The correct phrasing is "fail to reject $H_0$," because a large p-value only means the data are consistent with $H_0$.'
          },
          {
            id: 'chi5-dd2',
            label: 'After rejecting $H_0$ in an independence test (observational study), we can conclude',
            options: ['Causation', 'Association', 'Independence', 'Equal distributions'],
            correctIndex: 1,
            explanation: 'In an observational study a significant chi-square test shows association, not causation. Independence is what was rejected, and "equal distributions" is the null of a homogeneity test.'
          },
          {
            id: 'chi5-dd3',
            label: 'A cell with $O = 30$ and $E = 15$ contributes ___ to $\\chi^2$ than a cell with $O = 20$ and $E = 15$',
            options: ['More', 'Less', 'The same', 'Cannot tell'],
            correctIndex: 0,
            explanation: '$(30-15)^2/15 = 15$ vs. $(20-15)^2/15 = 1.67$. Both cells expect 15, so the larger gap gives the much larger contribution.'
          },
          {
            id: 'chi5-dd4',
            label: '$p = 0.03$, $\\alpha = 0.05$. The conclusion is to ___',
            options: ['reject $H_0$', 'fail to reject $H_0$', 'accept $H_0$', 'prove $H_0$ false'],
            correctIndex: 0,
            explanation: '$p = 0.03 < 0.05 = \\alpha$, so we reject $H_0$. A test never accepts $H_0$, and rejecting gives convincing evidence rather than proof.'
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
            options: ['Strong evidence that the variables are associated', 'Observed counts are close to expected counts', 'The expected counts condition has been violated', 'The sample was too small to detect any difference'],
            correctAnswer: 1,
            explanation: '$\\chi^2 \\approx 0$ means $O \\approx E$ in every cell, so the data fit the null model well. A small statistic is not evidence of association, does not show a condition failed, and need not come from a small sample.'
          },
          {
            question: '$\\chi^2 = 3.5$, $df = 1$. From the table ($\\alpha = 0.10$: 2.706, $\\alpha = 0.05$: 3.841):',
            options: ['$p < 0.05$', '$0.05 < p < 0.10$', '$0.10 < p < 0.25$', '$0.025 < p < 0.05$'],
            correctAnswer: 1,
            explanation: '$2.706 < 3.5 < 3.841$, so the right-tail area is between the 0.10 and 0.05 columns: $0.05 < p < 0.10$. A statistic below 3.841 cannot give $p < 0.05$, and one above 2.706 cannot give $p > 0.10$.'
          },
          {
            question: 'The proper AP conclusion when $p = 0.08$ and $\\alpha = 0.05$:',
            options: ['Reject $H_0$; the result is close enough to 0.05', 'Fail to reject $H_0$; the evidence is not convincing', 'Accept $H_0$; the distributions are shown to match', 'Reject $H_0$; the result is significant at 0.10'],
            correctAnswer: 1,
            explanation: '$p = 0.08 > 0.05$, so we fail to reject $H_0$; "close" does not count as significant. We never accept $H_0$, and the decision must use the stated $\\alpha = 0.05$, not a different level chosen after seeing the data.'
          },
          {
            question: 'Which cell contributes most to $\\chi^2$ if $O$ values are 25, 10, 18 and $E$ values are 20, 20, 13?',
            options: ['Cell 1: $(25-20)^2/20 = 1.25$', 'Cell 2: $(10-20)^2/20 = 5.0$', 'Cell 3: $(18-13)^2/13 = 1.92$', 'All cells contribute equally'],
            correctAnswer: 1,
            explanation: 'Cell 2 has the largest contribution: $(10-20)^2/20 = 100/20 = 5.0$. Cells 1 and 3 both have gaps of 5, giving only 1.25 and 1.92.'
          },
          {
            question: 'After failing to reject $H_0$, you should say:',
            options: ['The variables have been shown to be independent', 'There is not convincing evidence of an association', 'The null hypothesis has been proven to be true', 'There is convincing evidence of no association'],
            correctAnswer: 1,
            explanation: 'The correct statement is "not convincing evidence" of an association. Failing to reject never shows independence, proves $H_0$, or provides evidence FOR the null.'
          },
          {
            question: 'If every count in a two-way table is doubled while all proportions stay the same, $\\chi^2$:',
            options: ['Is cut in half', 'Is multiplied by 2', 'Stays the same', 'Is multiplied by 4'],
            correctAnswer: 1,
            explanation: 'Each term becomes $(2O - 2E)^2/(2E) = 2(O-E)^2/E$, so $\\chi^2$ doubles. The squared gap grows by 4 but the expected count in the denominator grows by 2, so it neither stays the same nor quadruples; larger samples with the same proportions give stronger evidence.'
          },
          {
            question: 'The p-value is the probability of:',
            options: ['$H_0$ being true, given the observed $\\chi^2$', 'A $\\chi^2$ this large or larger, if $H_0$ is true', '$H_a$ being true, given the observed $\\chi^2$', 'Making an error when we reject $H_0$'],
            correctAnswer: 1,
            explanation: 'The p-value is $P(\\chi^2 \\geq \\text{observed} \\mid H_0 \\text{ true})$, computed by assuming $H_0$. It is not the probability that either hypothesis is true, and the chance of a Type I error is $\\alpha$, chosen in advance.'
          },
          {
            question: 'For $df = 3$, $\\alpha = 0.01$: the critical value from the table is $11.345$. Your $\\chi^2 = 14.2$. Decision:',
            options: ['Fail to reject $H_0$, since $p > 0.01$', 'Reject $H_0$, since $p < 0.01$', 'Fail to reject $H_0$, since $p < 0.01$', 'No decision without the exact p-value'],
            correctAnswer: 1,
            explanation: '$14.2 > 11.345$, so the right-tail area is less than 0.01 and we reject $H_0$ at $\\alpha = 0.01$. A p-value below $\\alpha$ never leads to failing to reject, and the bound from the table is enough to decide.'
          },
          {
            question: 'If $O > E$ in a cell, that category has:',
            options: ['Fewer observations than expected', 'More observations than expected', 'Exactly the number that was expected', 'No contribution at all to $\\chi^2$'],
            correctAnswer: 1,
            explanation: '$O > E$ means the observed count exceeds what the null model predicts for that category. Any gap between $O$ and $E$, in either direction, adds a positive amount to $\\chi^2$.'
          },
          {
            question: 'An independence test gives $\\chi^2 = 0.5$ with $df = 4$. The p-value is approximately:',
            options: ['$p < 0.01$', '$p \\approx 0.05$', '$p > 0.90$', '$p \\approx 0.50$'],
            correctAnswer: 2,
            explanation: '$\\chi^2 = 0.5$ is far below even the $\\alpha = 0.10$ cutoff of 7.779 for $df = 4$, and the curve with $df = 4$ has almost all its area above 0.5, so the p-value is about 0.97. Values near 0.05 or 0.01 would need a statistic near 9.5 or 13.3.'
          }
        ]
      }
    }
  ]
};
