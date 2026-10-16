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
| 📋 Both Tests Side-by-Side |
| 📐 Formula & Condition Summary |
| 📝 Mixed Practice |

> 🔑 **Key Concept:** This review covers the two chi-square tests on the AP exam. Know when to use each, how to check conditions, and how to write full AP-quality solutions.

---

### The Two Chi-Square Tests Compared

| Feature | Homogeneity | Independence |
|---------|:-----------:|:-----------:|
| Samples | Two or more independent samples, or treatment groups | One sample |
| Variables | One categorical variable | Two categorical variables |
| $H_0$ | No difference in the distribution across populations or treatments | No association between the variables in the population |
| Data format | Two-way table | Two-way table |
| $df$ | $(r-1)(c-1)$ | $(r-1)(c-1)$ |

---

### Universal Formula

$$\\chi^2 = \\sum \\frac{(\\text{observed} - \\text{expected})^2}{\\text{expected}}$$

### Universal Conditions

| Condition | Requirement |
|-----------|-------------|
| Random | Random sample (independence); independent random samples or randomized experiment (homogeneity) |
| 10% | $n \\leq 10\\%$ of the population when sampling without replacement |
| Expected Counts | All expected counts greater than 5 |

### Expected Counts

$$E = \\frac{\\text{row total} \\times \\text{column total}}{\\text{table total}}$$

---

### Decision Guide: Which Test?

| Question | Answer |
|----------|--------|
| Are two categorical variables related in one population (one sample)? | **Independence** |
| Is one categorical variable distributed the same way across several groups? | **Homogeneity** |
| One proportion against a claimed value? | **One-proportion $z$ test** (not chi-square) |
| Two groups, a yes/no variable? | **Two-proportion $z$ test** (a $2 \\times 2$ homogeneity test gives the same conclusion) |

---

### Key AP Reminders

- $\\chi^2$ is always $\\geq 0$ and the p-value is always a right-tail area
- The count condition uses **expected** counts, not observed
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
            question: 'Both chi-square tests on the AP exam share which formula?',
            options: ['$\\bar{x} \\pm t^* s/\\sqrt{n}$', '$\\chi^2 = \\sum (O-E)^2/E$', '$z = (\\hat{p} - p_0)/\\sqrt{p_0(1-p_0)/n}$', '$t = (\\bar{x} - \\mu_0)/(s/\\sqrt{n})$'],
            correctAnswer: 1,
            explanation: 'Both chi-square tests use $\\chi^2 = \\sum (O-E)^2/E$ over the cells of a two-way table. The other formulas are a $t$ interval, a one-proportion $z$ statistic and a one-sample $t$ statistic.'
          },
          {
            question: 'The key difference between independence and homogeneity is:',
            options: ['The formula for $\\chi^2$', 'The conditions to check', 'The study design', 'The way $df$ is found'],
            correctAnswer: 2,
            explanation: 'Independence: one sample, two variables. Homogeneity: two or more independent samples or groups, one variable. The formula, conditions and $df$ are the same.'
          },
          {
            question: 'For a $4 \\times 2$ two-way table, $df$ equals:',
            options: ['$8$', '$3$', '$7$', '$4$'],
            correctAnswer: 1,
            explanation: '$df = (4-1)(2-1) = 3$. The number of cells is 8, one less is 7, and 4 uses the number of rows without subtracting 1.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

**1)** A two-way table has row total 50, column total 40 and table total 200. Expected count for that cell?

**2)** Independence test, $3 \\times 5$ table. $df =$

**3)** $\\chi^2 = 7.5$, $df = 2$. From the table ($\\alpha = 0.05$: 5.991; $\\alpha = 0.025$: 7.378). Is $p$ less than 0.025? Enter "yes" or "no".
      `,
      exercise: {
        inputs: [
          {
            label: 'Expected count',
            correctAnswer: '10',
            explanation: '$E = (50)(40)/200 = 2000/200 = 10$.'
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
            label: 'Random samples from three hospitals: compare the distribution of patient wait-time categories →',
            options: ['Independence', 'Homogeneity', 'Two-sample $t$', 'One-proportion $z$'],
            correctIndex: 1,
            explanation: 'Three independent samples compared on one categorical variable (wait-time category) → homogeneity.'
          },
          {
            id: 'chi7-dd2',
            label: 'One survey: record age group AND party preference →',
            options: ['Independence', 'Homogeneity', 'Two-sample $t$', 'One-proportion $z$'],
            correctIndex: 0,
            explanation: 'One sample, two categorical variables → independence.'
          },
          {
            id: 'chi7-dd3',
            label: 'Compare blood type distribution of 3 different countries →',
            options: ['Independence', 'Homogeneity', 'Two-sample $t$', 'One-proportion $z$'],
            correctIndex: 1,
            explanation: 'Three independent groups, one categorical variable (blood type) → homogeneity.'
          },
          {
            id: 'chi7-dd4',
            label: '$\\chi^2 = 2.1$, $df = 3$. At $\\alpha = 0.05$ (cutoff 7.815):',
            options: ['Reject $H_0$', 'Fail to reject $H_0$', 'Accept $H_0$', 'Prove $H_0$ false'],
            correctIndex: 1,
            explanation: '$2.1 < 7.815$, so $p > 0.05$ and we fail to reject $H_0$. A test never accepts $H_0$ or proves it false.'
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
            question: 'A researcher wants to know whether the distribution of preferred study time (morning, afternoon, night) differs among random samples of freshmen, sophomores and juniors. The appropriate test is:',
            options: ['A chi-square test for independence', 'A chi-square test for homogeneity', 'A two-proportion $z$ test', 'A two-sample $t$ test'],
            correctAnswer: 1,
            explanation: 'Separate random samples from three populations compared on one categorical variable → homogeneity. Independence needs one sample with two variables, and the $z$ and $t$ procedures compare only two groups on a proportion or mean.'
          },
          {
            question: 'Expected counts for independence/homogeneity are:',
            options: ['Observed count $\\div$ table total', 'Table total $\\div$ number of cells', 'Row total $\\times$ column total $\\div$ table total', 'Row total $\\div$ number of columns'],
            correctAnswer: 2,
            explanation: 'For a two-way table, $E = (\\text{row total})(\\text{column total}) / (\\text{table total})$. Expected counts never use the observed count, and splitting a total evenly ignores one of the margins.'
          },
          {
            question: 'A homogeneity test on a $2 \\times 6$ table gives $\\chi^2 = 12$. Using the $\\alpha = 0.05$ cutoff of $11.070$ for $df = 5$:',
            options: ['Fail to reject $H_0$', 'Reject $H_0$', 'Accept $H_0$', 'Use the $t$-table'],
            correctAnswer: 1,
            explanation: '$df = (2-1)(6-1) = 5$ and $12 > 11.070$, so $p < 0.05$ and we reject $H_0$. $H_0$ is never accepted, and a chi-square statistic is compared with a chi-square distribution, not a $t$ distribution.'
          },
          {
            question: 'A two-way table for independence has all expected counts of exactly 2. Should you proceed?',
            options: ['Yes, since only observed counts are checked', 'No, since the count condition is not met', 'Yes, as long as the sample was random', 'Yes, if the expected counts are all equal'],
            correctAnswer: 1,
            explanation: 'All expected counts must be greater than 5. With every $E = 2$, the condition fails and the chi-square p-value would not be trustworthy, regardless of randomness or $df$.'
          },
          {
            question: 'After a significant homogeneity test, the follow-up is:',
            options: ['Nothing, since the test is finished', 'Examine which cells contribute most to $\\chi^2$', 'Run a separate $t$ test on each column', 'Compute a confidence interval for $\\chi^2$'],
            correctAnswer: 1,
            explanation: 'Looking at individual contributions identifies which categories differ most across groups. $t$ tests do not apply to categorical counts, and there is no confidence interval for the chi-square statistic.'
          },
          {
            question: 'The $\\chi^2$ test is always:',
            options: ['Left-tailed', 'Right-tailed', 'Two-tailed', 'Set by $H_a$'],
            correctAnswer: 1,
            explanation: 'Squared deviations are never negative, so only a large $\\chi^2$ (the right tail) indicates evidence against $H_0$, whatever the wording of $H_a$.'
          },
          {
            question: 'A $2 \\times 2$ table: $df =$',
            options: ['$4$', '$3$', '$2$', '$1$'],
            correctAnswer: 3,
            explanation: '$df = (2-1)(2-1) = 1$. Four is the number of cells, 3 is one less than that, and 2 is the number of rows.'
          },
          {
            question: 'If $p = 0.001$ and $\\alpha = 0.05$:',
            options: ['Fail to reject; the result is not significant', 'Reject; very strong evidence against $H_0$', 'Reject; but the evidence is only borderline', 'No decision without knowing $df$'],
            correctAnswer: 1,
            explanation: '$p = 0.001$ is far below 0.05, so we reject $H_0$ with very strong evidence. The p-value already accounts for $df$, so no further information is needed.'
          },
          {
            question: 'Which statement is CORRECT after failing to reject $H_0$ in a homogeneity test?',
            options: ['The distributions are the same in every population', 'The data prove that the distributions are the same', 'There is not convincing evidence the distributions differ', 'The test was invalid because $p$ was large'],
            correctAnswer: 2,
            explanation: 'Failing to reject does not prove $H_0$ true; it only means the data are not convincing evidence of a difference. A large p-value does not make the test invalid.'
          },
          {
            question: 'On the AP exam, a complete $\\chi^2$ solution requires:',
            options: ['Hypotheses, conditions, the calculation and a conclusion in context', 'The $\\chi^2$ value, $df$ and p-value, without any hypotheses stated', 'Hypotheses and a conclusion, without the calculation of $\\chi^2$', 'A confidence interval for the difference in each pair of proportions'],
            correctAnswer: 0,
            explanation: 'Full credit requires all four steps: hypotheses in context, conditions checked, the calculation shown, and a conclusion that compares the p-value with $\\alpha$ in context. Leaving out steps loses credit, and a chi-square test does not call for confidence intervals.'
          }
        ]
      }
    }
  ]
};
