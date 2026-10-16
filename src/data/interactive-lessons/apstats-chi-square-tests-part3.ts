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
            options: ['One random sample, two categorical variables', 'Two or more independent samples, one categorical variable', 'One sample measured twice on the same variable', 'Two or more samples, one quantitative variable'],
            correctAnswer: 1,
            explanation: 'Homogeneity compares the distribution of ONE categorical variable across TWO or MORE independent samples or treatment groups. One sample with two variables is the independence design, repeated measurements are paired data, and a quantitative variable calls for procedures on means.'
          },
          {
            question: 'The calculation for the homogeneity test is:',
            options: ['Different from the independence test', 'Identical to the independence test', 'Based on a two-sample $t$ statistic', 'Based on a two-proportion $z$ statistic'],
            correctAnswer: 1,
            explanation: 'Both tests use $\\chi^2 = \\sum (O-E)^2/E$ with $df = (r-1)(c-1)$ and the same expected counts. The difference is in the hypotheses and the study design, and neither test uses a $t$ or $z$ statistic.'
          },
          {
            question: '$H_0$ for homogeneity states:',
            options: ['The two variables are independent of each other', 'The distribution is the same across all groups', 'The group means are all equal to one another', 'Each group splits evenly across the categories'],
            correctAnswer: 1,
            explanation: 'Homogeneity: "$H_0$: the distribution of [variable] is the same for all [groups]." Independence is the null for the other chi-square test, means belong to quantitative data, and the null does not claim that every category is equally common.'
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
            options: ['Independence', 'Homogeneity', 'Two-sample $t$ test', 'Two-proportion $z$ test'],
            correctIndex: 0,
            explanation: 'ONE sample, TWO categorical variables (gender and party) → chi-square test for independence. Neither variable is quantitative, and party has more than two categories, so $t$ and two-proportion $z$ procedures do not fit.'
          },
          {
            id: 'chi3-dd2',
            label: 'Compare candy color distribution in three different factories →',
            options: ['Independence', 'Homogeneity', 'Two-sample $t$ test', 'Two-proportion $z$ test'],
            correctIndex: 1,
            explanation: 'THREE independent groups (factories) compared on ONE categorical variable (color) → chi-square test for homogeneity. Color has several categories and there are three groups, so a two-proportion $z$ test does not fit.'
          },
          {
            id: 'chi3-dd3',
            label: 'Randomly assign 200 patients to two treatments; record whether each improves, stays the same or worsens →',
            options: ['Independence', 'Homogeneity', 'Two-sample $t$ test', 'Two-proportion $z$ test'],
            correctIndex: 1,
            explanation: 'Random assignment creates two treatment groups, and ONE categorical outcome with three levels is compared across them → chi-square test for homogeneity. The outcome is not quantitative and has more than two categories.'
          },
          {
            id: 'chi3-dd4',
            label: 'Sample 1000 voters: record age bracket and whether they voted →',
            options: ['Independence', 'Homogeneity', 'Two-sample $t$ test', 'Two-proportion $z$ test'],
            correctIndex: 0,
            explanation: 'ONE sample of voters, TWO categorical variables (age bracket and voting status) → chi-square test for independence. Age bracket has several categories, so this is not a comparison of two proportions.'
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
            options: ['Two categorical variables are associated in one population', 'One categorical variable has the same distribution across groups', 'The mean of a quantitative variable is equal across groups', 'One proportion matches a value claimed for the population'],
            correctAnswer: 1,
            explanation: 'Homogeneity asks whether one categorical variable has the same distribution across two or more independent groups. Association in one population is the independence question, equal means need a $t$ procedure, and a single claimed proportion needs a one-proportion $z$ test.'
          },
          {
            question: 'The key difference between independence and homogeneity is:',
            options: ['The formula used for the statistic', 'The way degrees of freedom are found', 'The study design and the hypotheses', 'The formula used for expected counts'],
            correctAnswer: 2,
            explanation: 'The math is identical: same statistic, same expected counts, same $df$. The difference is the design (one sample with two variables vs. several samples with one variable) and therefore the hypotheses.'
          },
          {
            question: 'A $2 \\times 4$ table has $df =$',
            options: ['$8$', '$7$', '$3$', '$6$'],
            correctAnswer: 2,
            explanation: '$df = (2-1)(4-1) = 1 \\times 3 = 3$.'
          },
          {
            question: 'In a homogeneity test, the row variable typically represents:',
            options: ['The categorical response variable', 'The populations or treatment groups', 'The expected count for each cell', 'The p-value for each comparison'],
            correctAnswer: 1,
            explanation: 'In a homogeneity table, the rows usually list the populations or treatment groups being compared and the columns list the categories of the response. Expected counts and p-values are computed from the table, not shown as a variable.'
          },
          {
            question: 'If $p = 0.41$, we conclude:',
            options: ['Convincing evidence that the distributions differ', 'Not convincing evidence that the distributions differ', 'Convincing evidence that the distributions are identical', 'The test is invalid because the p-value is so large'],
            correctAnswer: 1,
            explanation: '$p = 0.41 > 0.05$, so we fail to reject $H_0$: the data do not give convincing evidence that the distributions differ. A large p-value never shows the distributions are identical, and it does not make the test invalid.'
          },
          {
            question: 'On the AP exam, a student uses "independence" when "homogeneity" is correct. This:',
            options: ['Costs nothing, since the two tests use identical math', 'Can lose credit, since the hypotheses must fit the design', 'Earns no credit at all for the entire problem', 'Is fine as long as the chi-square value is correct'],
            correctAnswer: 1,
            explanation: 'Scoring guidelines expect the test named and the hypotheses written to match the study design, so the wrong name can cost credit even though the arithmetic is the same. It does not wipe out credit for the rest of a correct solution.'
          },
          {
            question: 'Expected counts under the null of homogeneity assume:',
            options: ['The distributions differ from group to group', 'The distribution is the same in every group', 'Each group contains exactly the same number of individuals', 'Each cell in the table has an equal count'],
            correctAnswer: 1,
            explanation: 'Under $H_0$ the distribution is the same for all groups, so each group is expected to split across categories like the combined table. Groups may have different sizes, and cells are not expected to be equal.'
          },
          {
            question: 'A homogeneity test with $\\chi^2 = 15.3$ and $df = 4$ has $p < 0.005$. At $\\alpha = 0.01$:',
            options: ['Fail to reject $H_0$; no evidence that distributions differ', 'Reject $H_0$; convincing evidence the distributions differ', 'Reject $H_0$; the distributions are proven to be identical', 'No decision is possible without an exact p-value'],
            correctAnswer: 1,
            explanation: '$p < 0.005 < 0.01 = \\alpha$, so we reject $H_0$: convincing evidence the distributions differ. Rejecting never proves the distributions identical, and a bound on the p-value is enough to compare it with $\\alpha$.'
          },
          {
            question: 'After rejecting $H_0$ in a homogeneity test, you should:',
            options: ['Run a two-sample $t$ test for each pair of categories', 'Look at the cells that contribute the most to $\\chi^2$', 'Conclude that every category differs across the groups', 'Recompute the expected counts using the $H_a$ model'],
            correctAnswer: 1,
            explanation: 'After rejecting, the cells with the largest contributions to $\\chi^2$ show which categories drive the difference. The variable is categorical, so $t$ tests do not apply; rejecting does not mean every category differs; and expected counts always come from $H_0$.'
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
