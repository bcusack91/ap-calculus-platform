export const apStatsChiSquarePart4Data = {
  topicSlug: 'chi-square-tests-apstats',
  sections: [
    {
      id: 'apstats-chisquaretests-p4-intro',
      type: 'text' as const,
      content: `# 📊 Conditions and Degrees of Freedom

**Part 4 of 7 — When Can You Use the $\\chi^2$ Test?**

---

### Topics in This Part

| Section |
|---------|
| ✅ Three Conditions |
| 📐 Degrees of Freedom |
| 📈 How $df$ Changes the Distribution |
| ⚠️ What to Do When a Condition Fails |

> 🔑 **Key Concept:** Both chi-square tests (homogeneity and independence) require the same three conditions: Random, 10%, and Expected Counts.

---

### The Three Conditions

| Condition | Requirement | AP Language |
|-----------|-------------|-------------|
| **Random** | Independence test: a random sample. Homogeneity test: independent random samples or a randomized experiment | "The problem states..." or "We are told..." |
| **10%** | When sampling without replacement, $n \\leq 10\\%$ of the population (not needed for a randomized experiment) | "$n$ is less than 10% of all [population]" |
| **Expected Counts** | **All expected counts are greater than 5** | "All expected counts are greater than 5" ✓ |

> ⚠️ **Critical AP Detail:** For chi-square, the expected counts condition uses **expected** counts, NOT observed counts. This is different from the Large Counts condition for proportions ($np \\geq 10$ and $n(1-p) \\geq 10$).

---

### Degrees of Freedom

Both tests use the same formula:

$$df = (\\text{number of rows} - 1)(\\text{number of columns} - 1)$$

| Table | $df$ |
|-------|------|
| $2 \\times 2$ | $1$ |
| $2 \\times 3$ | $2$ |
| $3 \\times 4$ | $6$ |

Count only the rows and columns of **categories**; the total row and total column are not part of the table's dimensions.

---

### Why Degrees of Freedom Matter

The $\\chi^2$ distribution changes shape with $df$:

| $df$ | Shape |
|------|-------|
| $1$ | Strongly right-skewed |
| $5$ | Moderately right-skewed |
| $15+$ | Much less skewed |

As $df$ increases, the skew becomes less pronounced and the curve spreads to the right, so the same $\\chi^2$ value gives a larger p-value when $df$ is larger.

---

### What If a Condition Fails?

| Condition | If It Fails |
|-----------|-------------|
| Random | Results may not generalize to the population; state the limitation |
| 10% | Observations are not independent enough; the p-value is questionable |
| Expected Counts | The chi-square distribution may not describe the statistic well, so the p-value may be inaccurate |

> 🔑 **AP Tip:** If an expected count is 5 or less, say that the condition is not met. If the problem asks you to proceed anyway, state the concern and continue with caution.`
    },
    {
      id: 'apstats-chisquaretests-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Conditions & df Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The chi-square condition about counts requires every ___ count to be greater than 5.',
            options: ['Observed', 'Expected', 'Marginal', 'Combined'],
            correctAnswer: 1,
            explanation: 'The condition checks EXPECTED counts, not observed counts: all expected counts must be greater than 5. Marginal totals are used to find the expected counts but are not what the condition checks.'
          },
          {
            question: 'A homogeneity test compares 3 treatment groups on an outcome with 4 categories. What is $df$?',
            options: ['$12$', '$6$', '$11$', '$5$'],
            correctAnswer: 1,
            explanation: '$df = (3-1)(4-1) = 2 \\times 3 = 6$. Multiplying 3 by 4 gives 12, subtracting 1 from that gives 11, and adding $(3-1) + (4-1)$ gives 5.'
          },
          {
            question: 'When is the 10% condition NOT needed for a chi-square test?',
            options: ['When the data come from a randomized experiment', 'When every expected count is greater than 5', 'When the sample contains at least 30 people', 'When the table has more than two rows'],
            correctAnswer: 0,
            explanation: 'The 10% condition protects independence when sampling without replacement from a population; it is unnecessary for a randomized experiment. Large expected counts, a sample of 30 or a bigger table do not replace it.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p4-input',
      type: 'input-boxes' as const,
      content: `
**Degrees of Freedom Practice** 🧮

**1)** A two-way table has 2 rows and 6 columns. $df =$

**2)** Independence test with a $5 \\times 3$ table: $df =$

**3)** Homogeneity test comparing 4 groups on a categorical variable with 3 levels: Table is $4 \\times 3$. $df =$
      `,
      exercise: {
        inputs: [
          {
            label: 'df (2 × 6)',
            correctAnswer: '5',
            explanation: '$df = (2-1)(6-1) = 1 \\times 5 = 5$.'
          },
          {
            label: 'df (Independence)',
            correctAnswer: '8',
            explanation: 'Independence: $df = (5-1)(3-1) = 4 \\times 2 = 8$.'
          },
          {
            label: 'df (Homogeneity)',
            correctAnswer: '6',
            explanation: 'Homogeneity: $df = (4-1)(3-1) = 3 \\times 2 = 6$.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Condition Checking** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'chi4-dd1',
            label: 'One expected count is 3.2 → the expected counts condition is',
            options: ['Met', 'Not met', 'Met if that observed count is above 5', 'Not needed when the sample is random'],
            correctIndex: 1,
            explanation: 'All expected counts must be greater than 5. Since $3.2 < 5$, the condition fails; a large observed count or a random sample does not fix a small expected count.'
          },
          {
            id: 'chi4-dd2',
            label: 'All expected counts are 12 or higher → the expected counts condition is',
            options: ['Met', 'Not met', 'Met only for a $2 \\times 2$ table', 'Not checked until after the test'],
            correctIndex: 0,
            explanation: 'Every expected count is greater than 5 (in fact at least 12), so the condition is satisfied for a table of any size. Conditions are checked before the test is carried out.'
          },
          {
            id: 'chi4-dd3',
            label: 'A $\\chi^2$ distribution with $df = 1$ is',
            options: ['Symmetric about its mean', 'Strongly right-skewed', 'Strongly left-skewed', 'Uniform from 0 to 1'],
            correctIndex: 1,
            explanation: 'The $\\chi^2$ distribution with $df = 1$ is heavily right-skewed, with most of its area piled up near 0. Chi-square distributions are never symmetric, left-skewed or uniform.'
          },
          {
            id: 'chi4-dd4',
            label: 'The 10% condition applies',
            options: ['Whenever the data come from any study', 'When sampling without replacement', 'Only when an expected count is below 5', 'Only when the data come from an experiment'],
            correctIndex: 1,
            explanation: 'The 10% condition protects independence when sampling without replacement from a finite population. It is not needed for a randomized experiment and has nothing to do with the size of the expected counts.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Conditions & Degrees of Freedom** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which is NOT a condition for a chi-square test for homogeneity or independence?',
            options: ['Data come from random sampling or random assignment', 'Sample is at most 10% of the population when sampling without replacement', 'All expected counts are greater than 5', 'All observed counts are at least 10'],
            correctAnswer: 3,
            explanation: 'The count condition is about EXPECTED counts being greater than 5, not observed counts being at least 10. Randomness and the 10% condition (when sampling without replacement) are both required.'
          },
          {
            question: 'A random sample of adults is classified by region (4 categories) and preferred news source (3 categories). What is $df$?',
            options: ['$12$', '$6$', '$5$', '$11$'],
            correctAnswer: 1,
            explanation: '$df = (4-1)(3-1) = 3 \\times 2 = 6$. The product of the numbers of categories gives 12, one less than that gives 11, and adding $(4-1) + (3-1)$ gives 5.'
          },
          {
            question: 'An independence test has a $2 \\times 5$ table. $df =$',
            options: ['$10$', '$4$', '$9$', '$5$'],
            correctAnswer: 1,
            explanation: '$df = (2-1)(5-1) = 1 \\times 4 = 4$. The values 10 and 9 use the cell count instead, and 5 forgets to subtract 1 from the number of columns.'
          },
          {
            question: 'If one expected count is 4.8 and all others exceed 10, the expected counts condition:',
            options: ['Is met, because most expected counts are large', 'Is not met, because every expected count must be above 5', 'Is met, because 4.8 rounds to 5', 'Does not apply when the sample is random'],
            correctAnswer: 1,
            explanation: 'ALL expected counts must be greater than 5, so a single count of 4.8 means the condition is not satisfied. Rounding does not rescue it, and random sampling is a separate condition.'
          },
          {
            question: 'Two chi-square distributions have $df = 2$ and $df = 12$. Compared with the $df = 2$ curve, the $df = 12$ curve is:',
            options: ['Less skewed and spread farther to the right', 'More skewed and piled up closer to 0', 'Symmetric and centered at 0', 'Identical in shape but shifted to the right'],
            correctAnswer: 0,
            explanation: 'Within the chi-square family, the right skew becomes less pronounced as $df$ grows, and the curve spreads to the right. It never becomes more skewed, symmetric about 0, or keeps the same shape.'
          },
          {
            question: 'For a chi-square test for homogeneity, the randomization condition requires:',
            options: ['One random sample with two variables recorded', 'Equal sample sizes in every group', 'Independent random samples or a randomized experiment', 'A sample of at least 30 from each group'],
            correctAnswer: 2,
            explanation: 'The homogeneity test needs independent random samples from the populations or random assignment to treatments. One sample with two variables is the independence design, and neither equal group sizes nor 30 per group is a chi-square condition.'
          },
          {
            question: 'Which change would most directly raise the smallest expected count in a two-way table?',
            options: ['Using a smaller significance level', 'Switching the rows and columns of the table', 'Using observed counts as the expected counts', 'Collecting a larger random sample'],
            correctAnswer: 3,
            explanation: 'Expected counts equal row total times column total divided by the table total, so they grow in proportion to the sample size. The significance level and the table orientation do not change them, and observed counts cannot stand in for expected counts.'
          },
          {
            question: 'A table has row totals 40 and 60 and column totals 30 and 70 (table total 100). What is the smallest expected count?',
            options: ['$18$', '$12$', '$28$', '$30$'],
            correctAnswer: 1,
            explanation: 'The smallest expected count pairs the smallest row and column totals: $(40)(30)/100 = 12$. The other cells are $(60)(30)/100 = 18$, $(40)(70)/100 = 28$ and $(60)(70)/100 = 42$; 30 is a column total, not an expected count.'
          },
          {
            question: 'As $df$ increases, the $\\chi^2$ distribution:',
            options: ['Becomes more strongly right-skewed', 'Becomes less skewed and shifts right', 'Becomes narrower and shifts left', 'Keeps the same shape and center'],
            correctAnswer: 1,
            explanation: 'Higher $df$ makes the right skew less pronounced and moves the bulk of the distribution to the right. It does not become more skewed, narrower or unchanged.'
          },
          {
            question: 'The $\\chi^2$ test is always:',
            options: ['Two-tailed', 'Left-tailed', 'Right-tailed', 'One- or two-tailed'],
            correctAnswer: 2,
            explanation: 'Since $(O-E)^2$ is always at least 0, $\\chi^2 \\geq 0$, and only large values (the right tail) indicate a difference in distributions or an association.'
          }
        ]
      }
    }
  ]
};
