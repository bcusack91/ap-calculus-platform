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
| 📐 Degrees of Freedom for Each Test |
| ⚠️ What to Do When Conditions Fail |
| 📝 AP Exam Condition-Checking |

> 🔑 **Key Concept:** All three chi-square tests (GoF, Independence, Homogeneity) require the same three conditions: Random, 10%, and Large Counts.

---

### The Three Conditions

| Condition | Requirement | AP Language |
|-----------|-------------|-------------|
| **Random** | Data from random sample or randomized experiment | "The problem states..." or "We are told..." |
| **10%** | $n < 10\\%$ of the population (if sampling without replacement) | "$n$ is less than 10% of all [population]" |
| **Large Counts** | **All expected counts $\\geq 5$** | "All expected counts are at least 5" ✓ |

> ⚠️ **Critical AP Detail:** For chi-square, the Large Counts condition uses **expected** counts, NOT observed counts. This is different from the Large Counts condition for proportions ($n\\hat{p} \\geq 10$).

---

### Degrees of Freedom Summary

| Test | $df$ Formula | Example |
|------|-------------|---------|
| Goodness of Fit | $k - 1$ (where $k$ = number of categories) | 6 sides of a die → $df = 5$ |
| Independence | $(r-1)(c-1)$ | $3 \\times 4$ table → $df = 6$ |
| Homogeneity | $(r-1)(c-1)$ | $2 \\times 3$ table → $df = 2$ |

---

### Why Degrees of Freedom Matter

The $\\chi^2$ distribution changes shape with $df$:

| $df$ | Shape |
|------|-------|
| $1$ | Strongly right-skewed |
| $5$ | Moderately right-skewed |
| $15+$ | More symmetric |

Higher $df$ shifts the distribution to the right and increases the mean ($\\mu = df$).

---

### What If Conditions Fail?

| Condition | If It Fails |
|-----------|-------------|
| Random | Results may not generalize — state the limitation |
| 10% | Standard errors may be wrong — results are questionable |
| Large Counts | Combine categories or use Fisher exact test (not on AP exam) |

> 🔑 **AP Tip:** On the AP exam, if an expected count is below 5, you should note this but may still be asked to proceed with the test. State the concern and continue.`
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
            question: 'The Large Counts condition for chi-square requires all ___ counts to be at least 5.',
            options: ['Observed', 'Expected', 'Total', 'Row'],
            correctAnswer: 1,
            explanation: 'The condition checks EXPECTED counts, not observed counts. All $E_i \\geq 5$.'
          },
          {
            question: 'A GoF test with 5 categories has $df =$',
            options: ['$5$', '$4$', '$6$', '$10$'],
            correctAnswer: 1,
            explanation: 'GoF: $df = k - 1 = 5 - 1 = 4$.'
          },
          {
            question: 'The mean of the $\\chi^2$ distribution equals:',
            options: ['$0$', '$1$', '$df$', '$2 \\times df$'],
            correctAnswer: 2,
            explanation: 'The $\\chi^2$ distribution has mean $= df$ and variance $= 2 \\times df$.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p4-input',
      type: 'input-boxes' as const,
      content: `
**Degrees of Freedom Practice** 🧮

**1)** GoF test with 8 categories: $df =$

**2)** Independence test with a $5 \\times 3$ table: $df =$

**3)** Homogeneity test comparing 4 groups on a categorical variable with 3 levels: Table is $4 \\times 3$. $df =$
      `,
      exercise: {
        inputs: [
          {
            label: 'df (GoF)',
            correctAnswer: '7',
            explanation: 'GoF: $df = k - 1 = 8 - 1 = 7$.'
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
            label: 'Expected count of 3.2 → Large Counts condition is',
            options: ['Met', 'Not met — expected count < 5'],
            correctIndex: 1,
            explanation: 'All expected counts must be $\\geq 5$. Since $3.2 < 5$, the condition fails.'
          },
          {
            id: 'chi4-dd2',
            label: 'All expected counts are 12 or higher → Large Counts is',
            options: ['Met', 'Not met'],
            correctIndex: 0,
            explanation: 'All expected counts $\\geq 5$ (in fact $\\geq 12$). The condition is satisfied.'
          },
          {
            id: 'chi4-dd3',
            label: 'A $\\chi^2$ distribution with $df = 1$ is',
            options: ['Symmetric', 'Strongly right-skewed', 'Left-skewed', 'Uniform'],
            correctIndex: 1,
            explanation: 'The $\\chi^2$ distribution with $df = 1$ is heavily right-skewed with a spike near 0.'
          },
          {
            id: 'chi4-dd4',
            label: 'The 10% condition applies when',
            options: ['Always', 'Only when sampling without replacement', 'Only for GoF tests', 'Never for chi-square'],
            correctIndex: 1,
            explanation: 'The 10% condition ensures independence when sampling without replacement from a finite population.'
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
            question: 'Which is NOT a condition for the $\\chi^2$ test?',
            options: ['Random', '10%', 'All expected counts $\\geq 5$', 'All observed counts $\\geq 10$'],
            correctAnswer: 3,
            explanation: 'The condition involves EXPECTED counts $\\geq 5$, not observed counts $\\geq 10$.'
          },
          {
            question: 'A GoF test with 4 categories: $df =$',
            options: ['$3$', '$4$', '$8$', '$16$'],
            correctAnswer: 0,
            explanation: '$df = k - 1 = 4 - 1 = 3$.'
          },
          {
            question: 'An independence test has a $2 \\times 5$ table. $df =$',
            options: ['$10$', '$4$', '$9$', '$5$'],
            correctAnswer: 1,
            explanation: '$df = (2-1)(5-1) = 1 \\times 4 = 4$.'
          },
          {
            question: 'If one expected count is 4.8 and all others exceed 10, the Large Counts condition:',
            options: ['Is met — most counts are fine', 'Is not met — ALL must be $\\geq 5$', 'Is met — 4.8 rounds to 5', 'Does not apply'],
            correctAnswer: 1,
            explanation: 'ALL expected counts must be at least 5. Even one count below 5 means the condition is not satisfied.'
          },
          {
            question: 'The $\\chi^2$ distribution with $df = 10$ has mean:',
            options: ['$0$', '$5$', '$10$', '$20$'],
            correctAnswer: 2,
            explanation: 'Mean of $\\chi^2 = df = 10$.'
          },
          {
            question: 'On the AP exam, checking conditions for a $\\chi^2$ test is worth:',
            options: ['0 points', '1 point typically', '1–2 points', 'All the points'],
            correctAnswer: 2,
            explanation: 'The AP rubric typically allocates 1–2 points for correctly checking all three conditions.'
          },
          {
            question: 'If the Large Counts condition fails, a common fix is:',
            options: ['Use a $t$-test instead', 'Combine small categories', 'Ignore it — the test is robust', 'Double the sample size'],
            correctAnswer: 1,
            explanation: 'Combining adjacent or related categories can increase expected counts above 5.'
          },
          {
            question: 'For a $\\chi^2$ GoF test, $k = 6$ and $n = 120$ with equal expected proportions. Each $E_i =$',
            options: ['$6$', '$20$', '$120$', '$24$'],
            correctAnswer: 1,
            explanation: 'With equal proportions: $E_i = 120/6 = 20$ for each category.'
          },
          {
            question: 'As $df$ increases, the $\\chi^2$ distribution:',
            options: ['Becomes more right-skewed', 'Becomes more symmetric and shifts right', 'Becomes narrower', 'Does not change'],
            correctAnswer: 1,
            explanation: 'Higher $df$ makes the $\\chi^2$ distribution more symmetric with a higher mean ($= df$).'
          },
          {
            question: 'The $\\chi^2$ test is always:',
            options: ['Two-tailed', 'Left-tailed', 'Right-tailed', 'Depends on $H_a$'],
            correctAnswer: 2,
            explanation: 'Since $(O-E)^2$ is always $\\geq 0$, $\\chi^2 \\geq 0$. Large values (right tail) indicate poor fit / association.'
          }
        ]
      }
    }
  ]
};
