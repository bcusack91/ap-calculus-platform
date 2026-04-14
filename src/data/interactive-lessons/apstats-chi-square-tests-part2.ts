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
            options: ['Two independent samples', 'One sample with two categorical variables measured', 'One sample with one categorical variable', 'Paired data'],
            correctAnswer: 1,
            explanation: 'The independence test uses ONE sample where TWO categorical variables are recorded for each subject.'
          },
          {
            question: 'The expected count formula is:',
            options: ['Observed $\\times$ total', '(row total $\\times$ column total) / grand total', 'Grand total / number of cells', 'Observed $-$ expected'],
            correctAnswer: 1,
            explanation: '$E = (\\text{row total} \\times \\text{column total}) / \\text{grand total}$. This gives the count expected under independence.'
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
            options: ['associated', 'independent', 'equal', 'normally distributed'],
            correctIndex: 1,
            explanation: '$H_0$ always states the two categorical variables are independent (no association).'
          },
          {
            id: 'chi2-dd2',
            label: 'A large $\\chi^2$ value suggests the variables are ___',
            options: ['independent', 'associated', 'normally distributed'],
            correctIndex: 1,
            explanation: 'Large $\\chi^2$ means observed counts differ substantially from expected counts, providing evidence of an association.'
          },
          {
            id: 'chi2-dd3',
            label: 'Chi-square tests are always ___-sided',
            options: ['one', 'two', 'neither — they are right-tail only'],
            correctIndex: 2,
            explanation: 'Chi-square tests are always right-tail only. Any deviation (positive or negative) from expected is squared, so $\\chi^2$ is always positive.'
          },
          {
            id: 'chi2-dd4',
            label: 'If $p = 0.12$ and $\\alpha = 0.05$, we ___ $H_0$',
            options: ['reject', 'fail to reject'],
            correctIndex: 1,
            explanation: '$p = 0.12 > 0.05 = \\alpha$, so we fail to reject $H_0$. There is not convincing evidence of an association.'
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
            options: ['Whether one variable causes another', 'Whether two categorical variables are associated', 'Whether two populations have the same distribution', 'Whether a distribution fits a model'],
            correctAnswer: 1,
            explanation: 'The test for independence checks whether two categorical variables measured on the same subjects are associated.'
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
            options: ['Symmetric and bell-shaped', 'Right-skewed, bounded below by 0', 'Left-skewed', 'Uniform'],
            correctAnswer: 1,
            explanation: 'The $\\chi^2$ distribution is always non-negative and right-skewed (though it becomes more symmetric as $df$ increases).'
          },
          {
            question: 'All expected counts must be at least ___ for the $\\chi^2$ test to be valid.',
            options: ['$1$', '$5$', '$10$', '$30$'],
            correctAnswer: 1,
            explanation: 'The expected count condition (also called "Large Counts") requires all $E_i \\geq 5$.'
          },
          {
            question: 'A $\\chi^2$ test for independence with $p = 0.002$ at $\\alpha = 0.05$ leads to:',
            options: ['Fail to reject $H_0$', 'Reject $H_0$ — evidence of association', 'Accept $H_0$', 'Inconclusive'],
            correctAnswer: 1,
            explanation: '$p = 0.002 < 0.05$. We reject $H_0$ and conclude there is convincing evidence of an association.'
          },
          {
            question: 'Which cell contributes most to $\\chi^2$?',
            options: ['The cell with the largest observed count', 'The cell where $(O-E)^2/E$ is largest', 'The cell with the smallest expected count', 'The total row'],
            correctAnswer: 1,
            explanation: 'Each cell contributes $(O_i - E_i)^2/E_i$. The largest contribution comes from the cell with the biggest squared deviation relative to its expected count.'
          },
          {
            question: 'Rejecting $H_0$ in a $\\chi^2$ independence test means:',
            options: ['Variable A causes variable B', 'The variables are associated — one predicts the other', 'The distributions are identical', 'The expected counts are wrong'],
            correctAnswer: 1,
            explanation: 'Association ≠ causation. Rejecting $H_0$ means the variables are associated, but we cannot conclude causation from an observational study.'
          },
          {
            question: 'The expected counts in a $\\chi^2$ independence test are computed assuming:',
            options: ['$H_a$ is true', '$H_0$ is true — the variables are independent', 'Equal sample sizes', 'Normal distribution'],
            correctAnswer: 1,
            explanation: 'Expected counts represent what we would expect if $H_0$ (independence) were true.'
          },
          {
            question: '"No association" is another way of saying:',
            options: ['The variables are dependent', 'The variables are independent', 'The $\\chi^2$ is large', 'The p-value is small'],
            correctAnswer: 1,
            explanation: 'Independence means no association — knowing one variable gives no information about the other.'
          }
        ]
      }
    }
  ]
};
