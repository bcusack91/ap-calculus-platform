export const apStatsChiSquarePart3Data = {
  topicSlug: 'chi-square-tests-apstats',
  sections: [
    {
      id: 'apstats-chisquaretests-p3-intro',
      type: 'text' as const,
      content: `# 📊 Chi-Square Test for Homogeneity

**Part 3 of 7 — Comparing Distributions Across Populations**

---

### Topics in This Part

| Section |
|---------|
| 📐 Independence vs. Homogeneity |
| 📊 Setting Up the Test |
| 🧮 Worked Example |
| 📝 AP Exam Distinction |

> 🔑 **Key Concept:** The test for homogeneity uses data from **two or more independent samples** (or treatment groups) to determine whether the distribution of a single categorical variable is the same across all populations.

---

### Independence vs. Homogeneity

| Feature | Independence | Homogeneity |
|---------|-------------|-------------|
| Samples | **One** sample | **Two or more** independent samples |
| Variables | Two categorical variables | One categorical variable across groups |
| $H_0$ | Variables are independent | Distribution is the same across populations |
| Calculation | Identical formula: $\\chi^2 = \\sum (O-E)^2/E$ | Same formula |
| $df$ | $(r-1)(c-1)$ | $(r-1)(c-1)$ |

> ⚠️ **AP Exam:** The math is identical. The difference is in the **hypotheses and context**. Read the problem carefully to determine which test is appropriate.

---

### Hypotheses for Homogeneity

$$H_0: \\text{The distribution of [variable] is the same for all [groups].}$$
$$H_a: \\text{The distribution of [variable] is NOT the same for all [groups].}$$

---

### Worked Example

**Problem:** Two schools were surveyed about favorite subject. Is the distribution of preferences the same?

| | Math | English | Science | Total |
|---|---:|---:|---:|---:|
| School A | 45 | 30 | 25 | 100 |
| School B | 35 | 40 | 25 | 100 |
| Total | 80 | 70 | 50 | 200 |

**$H_0$:** The distribution of favorite subject is the same for School A and School B.

**Expected counts:** (each row total = 100, grand total = 200)

| | Math | English | Science |
|---|---:|---:|---:|
| School A | $\\frac{100 \\times 80}{200} = 40$ | $\\frac{100 \\times 70}{200} = 35$ | $\\frac{100 \\times 50}{200} = 25$ |
| School B | $40$ | $35$ | $25$ |

**$\\chi^2$:**

$$\\chi^2 = \\frac{(45-40)^2}{40} + \\frac{(30-35)^2}{35} + \\frac{(25-25)^2}{25} + \\frac{(35-40)^2}{40} + \\frac{(40-35)^2}{35} + \\frac{(25-25)^2}{25}$$

$$= 0.625 + 0.714 + 0 + 0.625 + 0.714 + 0 = 2.678$$

**$df = (2-1)(3-1) = 2$**

Using a $\\chi^2$ table with $df = 2$: $p \\approx 0.262$

**Conclusion:** Since $p = 0.262 > 0.05$, we fail to reject $H_0$. There is not convincing evidence that the distribution of favorite subject differs between the two schools.`
    },
    {
      id: 'apstats-chisquaretests-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Homogeneity Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The test for homogeneity uses:',
            options: ['One sample, two variables', 'Two or more independent samples, one variable', 'Paired data', 'Quantitative data'],
            correctAnswer: 1,
            explanation: 'Homogeneity tests whether the distribution of ONE categorical variable is the same across TWO or MORE independent groups.'
          },
          {
            question: 'The calculation for the homogeneity test is:',
            options: ['Different from the independence test', 'Identical to the independence test', 'Uses a $t$-statistic', 'Uses a $z$-statistic'],
            correctAnswer: 1,
            explanation: 'Both use $\\chi^2 = \\sum (O-E)^2/E$ with $df = (r-1)(c-1)$. The difference is in the hypotheses and study design.'
          },
          {
            question: '$H_0$ for homogeneity states:',
            options: ['The variables are independent', 'The distribution is the same across all groups', 'The means are equal', 'The proportions are equal for each category'],
            correctAnswer: 1,
            explanation: 'Homogeneity: "$H_0$: The distribution of [variable] is the same for all [groups]."'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Independence or Homogeneity?** 🔍

Identify the correct test for each scenario.
      `,
      exercise: {
        dropdowns: [
          {
            id: 'chi3-dd1',
            label: 'Survey 500 students: record gender and political party →',
            options: ['Independence', 'Homogeneity'],
            correctIndex: 0,
            explanation: 'ONE sample, TWO variables (gender and party) → test for independence.'
          },
          {
            id: 'chi3-dd2',
            label: 'Compare candy color distribution in three different factories →',
            options: ['Independence', 'Homogeneity'],
            correctIndex: 1,
            explanation: 'THREE independent groups (factories), ONE variable (color) → test for homogeneity.'
          },
          {
            id: 'chi3-dd3',
            label: 'Sample 200 patients: record treatment group and outcome →',
            options: ['Independence', 'Homogeneity'],
            correctIndex: 1,
            explanation: 'Patients were assigned to treatment groups (two independent groups), and one outcome variable is recorded → homogeneity.'
          },
          {
            id: 'chi3-dd4',
            label: 'Sample 1000 voters: record age bracket and whether they voted →',
            options: ['Independence', 'Homogeneity'],
            correctIndex: 0,
            explanation: 'ONE sample of voters, TWO variables (age bracket and voting status) → independence.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p3-input',
      type: 'input-boxes' as const,
      content: `
**Homogeneity Calculation** 🧮

Three brands of cereal are compared on sugar level (Low, Medium, High). Samples: Brand A: 50, Brand B: 60, Brand C: 40. Grand total: 150. Column totals: Low = 60, Medium = 50, High = 40.

**1)** Expected count for Brand A, Low sugar?

**2)** Expected count for Brand C, High sugar?

**3)** $df$ for this $3 \\times 3$ table?
      `,
      exercise: {
        inputs: [
          {
            label: 'E(A, Low)',
            correctAnswer: '20',
            explanation: '$E = (50 \\times 60)/150 = 3000/150 = 20$.'
          },
          {
            label: 'E(C, High)',
            correctAnswer: '10.67',
            explanation: '$E = (40 \\times 40)/150 = 1600/150 = 10.\\overline{6} \\approx 10.67$.'
          },
          {
            label: 'df',
            correctAnswer: '4',
            explanation: '$df = (3-1)(3-1) = 2 \\times 2 = 4$.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Test for Homogeneity** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Homogeneity tests whether:',
            options: ['Two variables are associated', 'One categorical variable has the same distribution across groups', 'The means of groups are equal', 'A distribution fits a model'],
            correctAnswer: 1,
            explanation: 'Homogeneity: does one categorical variable have the same distribution across two or more independent groups?'
          },
          {
            question: 'The key difference between independence and homogeneity is:',
            options: ['The formula', 'The degrees of freedom', 'The study design and hypotheses', 'The expected count formula'],
            correctAnswer: 2,
            explanation: 'The math is identical. The difference is: one sample with two variables (independence) vs. multiple samples with one variable (homogeneity).'
          },
          {
            question: 'A $2 \\times 4$ table has $df =$',
            options: ['$8$', '$7$', '$3$', '$6$'],
            correctAnswer: 2,
            explanation: '$df = (2-1)(4-1) = 1 \\times 3 = 3$.'
          },
          {
            question: 'In a homogeneity test, the row variable typically represents:',
            options: ['The response variable', 'The group/population', 'The expected counts', 'The p-value'],
            correctAnswer: 1,
            explanation: 'Rows usually represent the different groups or populations being compared.'
          },
          {
            question: 'If $p = 0.41$, we conclude:',
            options: ['The distributions are different', 'There is not convincing evidence the distributions differ', 'The distributions are identical', 'The test is invalid'],
            correctAnswer: 1,
            explanation: '$p = 0.41 > 0.05$: fail to reject $H_0$. We do not have evidence that the distributions differ.'
          },
          {
            question: 'On the AP exam, a student uses "independence" when "homogeneity" is correct. This:',
            options: ['Is fine — the AP does not distinguish', 'May lose points — the hypotheses should match the design', 'Automatically fails the problem', 'Is correct if the calculation is right'],
            correctAnswer: 1,
            explanation: 'The AP distinguishes between the two tests. Using the wrong name/hypotheses for the study design can cost points.'
          },
          {
            question: 'Expected counts under the null of homogeneity assume:',
            options: ['The distributions are different', 'The distributions are the same across groups', 'The total sample is 100', 'Each cell has equal counts'],
            correctAnswer: 1,
            explanation: 'Under $H_0$, the distribution is the same for all groups — expected counts reflect this assumption.'
          },
          {
            question: 'A homogeneity test with $\\chi^2 = 15.3$ and $df = 4$ has $p < 0.005$. At $\\alpha = 0.01$:',
            options: ['Fail to reject $H_0$', 'Reject $H_0$ — distributions differ', 'Need more data', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$p < 0.005 < 0.01 = \\alpha$. Reject $H_0$: convincing evidence the distributions differ.'
          },
          {
            question: 'After rejecting $H_0$ in a homogeneity test, you should:',
            options: ['Stop — the test is complete', 'Examine which cells have the largest $(O-E)^2/E$ to see where distributions differ', 'Conclude causation', 'Run a $t$-test'],
            correctAnswer: 1,
            explanation: 'After rejecting, look at individual cell contributions to $\\chi^2$ to identify which categories drive the difference.'
          },
          {
            question: 'The $\\chi^2$ statistic can never be:',
            options: ['Greater than 100', 'Equal to 0', 'Negative', 'Greater than $df$'],
            correctAnswer: 2,
            explanation: '$\\chi^2 = \\sum (O-E)^2/E$. Since every term involves a squared difference divided by a positive number, $\\chi^2 \\geq 0$ always.'
          }
        ]
      }
    }
  ]
};
