export const apStatsChiSquarePart2Data = {
  topicSlug: 'chi-square-tests-apstats',
  sections: [
    {
      id: 'apstats-chisquaretests-p2-intro',
      type: 'text' as const,
      content: `# 📊 Chi-Square Test for Independence

**Part 2 of 7 — Are Two Categorical Variables Related?**

---

### Topics in This Part

| Section |
|---------|
| 📐 When to Use It |
| 📊 Two-Way Tables & Expected Counts |
| 🧮 The Test Statistic |
| 📝 Full Worked Example |

> 🔑 **Key Concept:** The chi-square test for independence uses data from **one sample** to determine whether two categorical variables are associated (related) or independent.

---

### When to Use the Test for Independence

| Feature | Detail |
|---------|--------|
| Data source | **One sample** or one group of subjects |
| Variables | **Two categorical** variables measured on each subject |
| $H_0$ | The two variables are independent (not associated) |
| $H_a$ | The two variables are associated (dependent) |

**Example:** Survey 300 students and record both **grade level** (freshman, sophomore, junior, senior) and **preferred lunch** (pizza, salad, sandwich). Is there an association between grade and lunch preference?

---

### Expected Counts

For each cell in a two-way table:

$$\\boxed{E = \\frac{\\text{row total} \\times \\text{column total}}{\\text{grand total}}}$$

This gives the count you would **expect** if the two variables were truly independent.

---

### Worked Example

**Data:** A random sample of 200 adults:

| | Favor | Oppose | Total |
|---|---:|---:|---:|
| Male | 60 | 40 | 100 |
| Female | 45 | 55 | 100 |
| Total | 105 | 95 | 200 |

**$H_0$:** Gender and opinion are independent.  
**$H_a$:** Gender and opinion are associated.

**Expected counts:**

| | Favor | Oppose |
|---|---:|---:|
| Male | $\\frac{100 \\times 105}{200} = 52.5$ | $\\frac{100 \\times 95}{200} = 47.5$ |
| Female | $\\frac{100 \\times 105}{200} = 52.5$ | $\\frac{100 \\times 95}{200} = 47.5$ |

**$\\chi^2$ calculation:**

$$\\chi^2 = \\frac{(60-52.5)^2}{52.5} + \\frac{(40-47.5)^2}{47.5} + \\frac{(45-52.5)^2}{52.5} + \\frac{(55-47.5)^2}{47.5}$$

$$= \\frac{56.25}{52.5} + \\frac{56.25}{47.5} + \\frac{56.25}{52.5} + \\frac{56.25}{47.5}$$

$$= 1.071 + 1.184 + 1.071 + 1.184 = 4.510$$

**$df = (r-1)(c-1) = (2-1)(2-1) = 1$**

Using a $\\chi^2$ table: $p \\approx 0.034$

**Conclusion:** Since $p = 0.034 < 0.05$, we reject $H_0$. There is convincing evidence of an association between gender and opinion on this issue.`
    },
    {
      id: 'apstats-chisquaretests-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Independence Test Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The chi-square test for independence uses data from:',
            options: ['Two or more independent samples, one variable each', 'One random sample, two categorical variables recorded', 'A single random sample, one categorical variable recorded', 'Paired measurements taken on the same individuals'],
            correctAnswer: 1,
            explanation: 'The independence test uses ONE sample in which TWO categorical variables are recorded for each individual. Several independent samples compared on one variable is the homogeneity design, one variable from one sample cannot show an association, and paired measurements belong to matched-pairs procedures for means.'
          },
          {
            question: 'The expected count formula is:',
            options: ['Observed count $\\times$ table total $\\div$ row total', 'Row total $\\times$ column total $\\div$ table total', 'Table total $\\div$ the number of cells in the table', 'Row total $\\times$ column total $\\div$ number of cells'],
            correctAnswer: 1,
            explanation: '$E = (\\text{row total} \\times \\text{column total}) / \\text{table total}$, the count expected in the cell if the variables are independent. Expected counts never use the observed count, and dividing the table total evenly among the cells ignores the margins.'
          },
          {
            question: 'The degrees of freedom for a $3 \\times 4$ table are:',
            options: ['$12$', '$11$', '$6$', '$7$'],
            correctAnswer: 2,
            explanation: '$df = (r-1)(c-1) = (3-1)(4-1) = 2 \\times 3 = 6$.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p2-input',
      type: 'input-boxes' as const,
      content: `
**Expected Count Practice** 🧮

A two-way table has row totals of 80 and 120, column totals of 90 and 110, and a grand total of 200.

**1)** Expected count for the top-left cell (row 1, column 1)?

**2)** Expected count for the bottom-right cell (row 2, column 2)?

**3)** Degrees of freedom for this $2 \\times 2$ table?
      `,
      exercise: {
        inputs: [
          {
            label: 'E (row 1, col 1)',
            correctAnswer: '36',
            explanation: '$E = (80 \\times 90)/200 = 7200/200 = 36$.'
          },
          {
            label: 'E (row 2, col 2)',
            correctAnswer: '66',
            explanation: '$E = (120 \\times 110)/200 = 13200/200 = 66$.'
          },
          {
            label: 'df',
            correctAnswer: '1',
            explanation: '$df = (2-1)(2-1) = 1$.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Independence Test Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'chi2-dd1',
            label: '$H_0$ for the independence test states that the two variables are ___',
            options: ['associated', 'independent', 'causally related', 'normally distributed'],
            correctIndex: 1,
            explanation: '$H_0$ always states that the two categorical variables are independent (not associated). Association is the alternative, and chi-square tests say nothing about causation or normality.'
          },
          {
            id: 'chi2-dd2',
            label: 'A large $\\chi^2$ value suggests the variables are ___',
            options: ['independent', 'associated', 'causally linked', 'normally distributed'],
            correctIndex: 1,
            explanation: 'A large $\\chi^2$ means observed counts differ substantially from the counts expected under independence, which is evidence of an association. It does not show causation or anything about normality.'
          },
          {
            id: 'chi2-dd3',
            label: 'The p-value for a chi-square test is the area ___ the observed $\\chi^2$ value',
            options: ['to the left of', 'on both sides of', 'to the right of', 'between 0 and'],
            correctIndex: 2,
            explanation: 'Only large values of $\\chi^2$ count as evidence against $H_0$, so the p-value is the right-tail area beyond the observed value. Left-tail or two-sided areas would treat small, well-fitting values as evidence.'
          },
          {
            id: 'chi2-dd4',
            label: 'If $p = 0.12$ and $\\alpha = 0.05$, we ___ $H_0$',
            options: ['reject', 'fail to reject', 'accept', 'confirm'],
            correctIndex: 1,
            explanation: '$p = 0.12 > 0.05 = \\alpha$, so we fail to reject $H_0$: there is not convincing evidence of an association. We never accept or confirm $H_0$; a large p-value only means the data are consistent with it.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Test for Independence** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The independence test examines:',
            options: ['Whether one variable causes changes in the other variable', 'Whether two categorical variables are associated', 'Whether two populations share the same distribution', 'Whether two population means are equal to each other'],
            correctAnswer: 1,
            explanation: 'The test for independence checks whether two categorical variables measured on the same individuals are associated. Comparing the distribution of one variable across populations is the homogeneity test, causation needs a randomized experiment, and means need a $t$ procedure.'
          },
          {
            question: 'For a $4 \\times 3$ table, $df =$',
            options: ['$12$', '$11$', '$6$', '$3$'],
            correctAnswer: 2,
            explanation: '$df = (4-1)(3-1) = 3 \\times 2 = 6$.'
          },
          {
            question: 'If $E = 52.5$ and $O = 60$, the contribution to $\\chi^2$ from this cell is:',
            options: ['$1.071$', '$7.5$', '$0.143$', '$56.25$'],
            correctAnswer: 0,
            explanation: '$(60-52.5)^2/52.5 = 56.25/52.5 = 1.071$.'
          },
          {
            question: 'The chi-square distribution is:',
            options: ['Symmetric and bell-shaped about 0', 'Right-skewed, positive values only', 'Left-skewed with a long tail toward 0', 'Uniform across all possible values'],
            correctAnswer: 1,
            explanation: 'Chi-square distributions take only positive values and are skewed right, with the skew becoming less pronounced as $df$ increases. They are never symmetric about 0, left-skewed or uniform.'
          },
          {
            question: 'The expected counts condition requires every expected count to be greater than ___.',
            options: ['$1$', '$5$', '$10$', '$30$'],
            correctAnswer: 1,
            explanation: 'The AP condition is that all expected counts are greater than 5. Observed counts are not checked, and the thresholds 10 and 30 belong to other procedures.'
          },
          {
            question: 'A $\\chi^2$ test for independence with $p = 0.002$ at $\\alpha = 0.05$ leads to:',
            options: ['Fail to reject $H_0$; there is no evidence of an association', 'Reject $H_0$; convincing evidence of an association', 'Accept $H_0$; the variables are shown to be independent', 'Reject $H_0$; one variable is shown to cause the other'],
            correctAnswer: 1,
            explanation: '$p = 0.002 < 0.05$, so we reject $H_0$ and conclude there is convincing evidence of an association. Failing to reject would require $p > \\alpha$, $H_0$ is never accepted, and an association found in a sample does not establish causation.'
          },
          {
            question: 'Which cell contributes most to $\\chi^2$?',
            options: ['The cell with the largest observed count', 'The cell with the largest value of $(O-E)^2/E$', 'The cell with the smallest expected count', 'The cell where $(O-E)$ is the largest'],
            correctAnswer: 1,
            explanation: 'Each cell adds $(O-E)^2/E$, so the cell with the largest value of that quantity contributes most. A large observed count, a small expected count or a large positive gap alone does not decide it, because the gap is squared and scaled by the expected count.'
          },
          {
            question: 'Rejecting $H_0$ in a $\\chi^2$ independence test means:',
            options: ['One variable causes changes in the other variable', 'The two variables are associated in the population', 'Knowing one variable tells nothing about the other', 'The expected counts were computed incorrectly'],
            correctAnswer: 1,
            explanation: 'Rejecting $H_0$ gives convincing evidence that the variables are associated in the population. Association is not causation in an observational study, independence is what we rejected, and the expected counts come from the margins, not from the conclusion.'
          },
          {
            question: 'The expected counts in a $\\chi^2$ independence test are computed assuming:',
            options: ['$H_a$ is true, so the variables are associated', '$H_0$ is true, so there is no association', 'Every cell holds the same number of individuals', 'Each cell count follows a normal distribution'],
            correctAnswer: 1,
            explanation: 'Expected counts are what we would see if $H_0$ (independence) were true; that is why they come from the row and column totals. They do not assume $H_a$, equal cell sizes or normality.'
          },
          {
            question: '"No association" is another way of saying:',
            options: ['The variables are dependent', 'The variables are independent', 'The $\\chi^2$ statistic is large', 'The p-value is close to zero'],
            correctAnswer: 1,
            explanation: 'Independence means no association: knowing one variable gives no information about the other. Dependence is the opposite, and a large $\\chi^2$ or a tiny p-value would be evidence of an association.'
          }
        ]
      }
    }
  ]
};
