export const apStatsChiSquarePart6Data = {
  topicSlug: 'chi-square-tests-apstats',
  sections: [
    {
      id: 'apstats-chisquaretests-p6-intro',
      type: 'text' as const,
      content: `# 📊 Problem-Solving Workshop

**Part 6 of 7 — Full AP Free-Response Practice**

---

### Topics in This Part

| Section |
|---------|
| 📝 Homogeneity Worked Example |
| 📝 Independence Worked Example |
| ⚠️ Common AP Mistakes |

> 🔑 **Key Concept:** Chi-square FRQs follow the same 4-step framework: Hypotheses, Conditions, Calculate, Conclude. Practice writing each step clearly.

---

### Worked Example 1: Test for Homogeneity

**Problem:** 150 volunteers were randomly assigned to one of three study methods (50 each) and then took the same exam:

| | Pass | Fail | Total |
|---|---:|---:|---:|
| Flashcards | 32 | 18 | 50 |
| Practice tests | 40 | 10 | 50 |
| Rereading | 27 | 23 | 50 |
| Total | 99 | 51 | 150 |

**Step 1 — Hypotheses:**
$H_0$: There is no difference in the distribution of exam results (pass/fail) across the three study methods.
$H_a$: There is a difference in the distribution of exam results across the three study methods.

**Step 2 — Conditions:**
- **Random:** Volunteers were randomly assigned to methods ✓
- **10%:** Not needed, because the data come from a randomized experiment ✓
- **Expected Counts:** Each row expects $\\frac{50 \\times 99}{150} = 33$ passes and $\\frac{50 \\times 51}{150} = 17$ failures. All expected counts are greater than 5 ✓

**Step 3 — Calculate:**
$$\\chi^2 = \\frac{(32-33)^2}{33} + \\frac{(18-17)^2}{17} + \\frac{(40-33)^2}{33} + \\frac{(10-17)^2}{17} + \\frac{(27-33)^2}{33} + \\frac{(23-17)^2}{17}$$

$$= 0.030 + 0.059 + 1.485 + 2.882 + 1.091 + 2.118 = 7.665, \\quad df = (3-1)(2-1) = 2$$

From the table: $7.378 < 7.665 < 9.210$, so $0.01 < p < 0.025$ (technology: $p \\approx 0.022$).

**Step 4 — Conclude:**
Since the p-value is less than $\\alpha = 0.05$, we reject $H_0$. There is convincing evidence that the distribution of exam results differs across the three study methods. Because the methods were randomly assigned, we can conclude that the method affects the pass/fail distribution for volunteers like these.

> 🔍 **Follow-up:** The Practice tests / Fail cell had the largest contribution (2.882): far fewer failures than expected.

---

### Worked Example 2: Test for Independence

**Problem:** A random sample of 400 adults records education level and exercise frequency:

| | ≤ 3 days/week | > 3 days/week | Total |
|---|---:|---:|---:|
| No degree | 120 | 80 | 200 |
| College degree | 70 | 130 | 200 |
| Total | 190 | 210 | 400 |

**Step 1 — Hypotheses:**
$H_0$: Education level and exercise frequency are independent among adults.
$H_a$: Education level and exercise frequency are associated among adults.

**Step 2 — Conditions:**
- **Random:** Random sample stated ✓
- **10%:** $400 < 10\\%$ of all adults ✓
- **Expected Counts:** $E_{11} = \\frac{200 \\times 190}{400} = 95$, $E_{12} = 105$, $E_{21} = 95$, $E_{22} = 105$. All greater than 5 ✓

**Step 3 — Calculate:**
$$\\chi^2 = \\frac{(120-95)^2}{95} + \\frac{(80-105)^2}{105} + \\frac{(70-95)^2}{95} + \\frac{(130-105)^2}{105}$$

$$= \\frac{625}{95} + \\frac{625}{105} + \\frac{625}{95} + \\frac{625}{105} = 6.579 + 5.952 + 6.579 + 5.952 = 25.06$$

$df = (2-1)(2-1) = 1$. From the table: $\\chi^2 = 25.06 > 6.635$ so $p < 0.01$.

**Step 4 — Conclude:**
Since the p-value is less than $\\alpha = 0.05$ (in fact less than 0.01), we reject $H_0$. There is convincing evidence of an association between education level and exercise frequency among adults. This is an observational study, so it does not show that education causes more exercise.`
    },
    {
      id: 'apstats-chisquaretests-p6-mistakes',
      type: 'text' as const,
      content: `## ⚠️ Common AP Mistakes on Chi-Square FRQs

| Mistake | Fix |
|---------|-----|
| Using observed counts for the expected counts check | Must use **expected** counts, all greater than 5 |
| Forgetting $df$ | Always state $df$ with the formula |
| Not stating hypotheses in context | Name the variable(s) and the population(s), not just "$H_0$: independent" |
| Saying "accept $H_0$" | Say "fail to reject $H_0$" |
| Confusing independence and homogeneity | One sample with two variables → independence; several samples or groups with one variable → homogeneity |
| Not showing the $\\chi^2$ formula with substitution | Show $\\sum (O-E)^2/E$ with at least some terms |
| Claiming causation from an independence test | Association ≠ causation (unless randomized experiment) |`
    },
    {
      id: 'apstats-chisquaretests-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Workshop Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the study-method experiment, the Practice tests / Fail cell contributed most to $\\chi^2$ because:',
            options: ['It had the smallest observed count anywhere in the whole table', 'Its count was far from expected, relative to expected', 'It had the smallest expected count of any cell in the table', 'Practice tests produced the largest number of passes overall'],
            correctAnswer: 1,
            explanation: '$(10-17)^2/17 = 2.882$ was the largest contribution: the gap of 7 is large compared with an expected count of 17. The other Fail cells share the same expected count, and a small observed count or many passes elsewhere does not by itself decide the contribution.'
          },
          {
            question: 'What can the study-method experiment conclude about cause and effect?',
            options: ['Nothing, since chi-square tests never support a causal claim', 'The method affects results, since methods were randomly assigned', 'Methods affect results, since the p-value was below 0.05', 'Nothing, since the exam was taken by only 150 volunteers'],
            correctAnswer: 1,
            explanation: 'Random assignment to treatments is what allows a cause-and-effect conclusion for the volunteers studied. A small p-value alone does not justify causation, chi-square tests from experiments can support it, and the sample size does not rule it out.'
          },
          {
            question: 'In the education/exercise example, the study design indicates a test for:',
            options: ['Two-sample $t$ test', 'Homogeneity', 'Independence', 'Linear regression'],
            correctAnswer: 2,
            explanation: 'One random sample of adults with two categorical variables (education and exercise) measured on each → chi-square test for independence. Homogeneity would need separate samples or groups, and $t$ tests and regression need quantitative data.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p6-input',
      type: 'input-boxes' as const,
      content: `
**Quick Calculations** 🧮

A random sample of 120 adults is classified by age group (row totals: under 40 = 70, 40 and over = 50) and favorite drink (column totals: coffee = 60, tea = 36, neither = 24). The observed count for under 40 / coffee is 42.

**1)** Expected count for under 40 / coffee?

**2)** Contribution of that cell, $(O-E)^2/E$?

**3)** $df$ for this table?
      `,
      exercise: {
        inputs: [
          {
            label: 'Expected count',
            correctAnswer: '35',
            explanation: '$E = (70)(60)/120 = 4200/120 = 35$.'
          },
          {
            label: 'Contribution',
            correctAnswer: '1.4',
            explanation: '$(42-35)^2/35 = 49/35 = 1.4$.'
          },
          {
            label: 'df',
            correctAnswer: '2',
            explanation: '$df = (2-1)(3-1) = 2$.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Which Test?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'chi6-dd1',
            label: 'A company claims 24% of its candies are blue. You sample 100 candies to check the claim →',
            options: ['One-proportion $z$ test', 'Chi-square independence', 'Chi-square homogeneity', 'Two-sample $t$ test'],
            correctIndex: 0,
            explanation: 'One sample, one proportion (blue or not) compared with a claimed value → one-proportion $z$ test. There is no two-way table here.'
          },
          {
            id: 'chi6-dd2',
            label: 'Survey students: record class year and study habits →',
            options: ['One-proportion $z$ test', 'Chi-square independence', 'Chi-square homogeneity', 'Two-sample $t$ test'],
            correctIndex: 1,
            explanation: 'One sample, two categorical variables → chi-square test for independence.'
          },
          {
            id: 'chi6-dd3',
            label: 'Compare grade distribution (A/B/C/D/F) across 3 different instructors →',
            options: ['One-proportion $z$ test', 'Chi-square independence', 'Chi-square homogeneity', 'Two-sample $t$ test'],
            correctIndex: 2,
            explanation: 'Three independent groups, one categorical variable (grade) → chi-square test for homogeneity.'
          },
          {
            id: 'chi6-dd4',
            label: 'Compare mean commute time for random samples of drivers in two cities →',
            options: ['One-proportion $z$ test', 'Chi-square independence', 'Chi-square homogeneity', 'Two-sample $t$ test'],
            correctIndex: 3,
            explanation: 'Commute time is quantitative and there are two independent samples, so the comparison of means calls for a two-sample $t$ test, not a chi-square test.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The first step in a $\\chi^2$ FRQ is to:',
            options: ['Calculate the statistic', 'State the hypotheses', 'Check the conditions', 'Write the conclusion'],
            correctAnswer: 1,
            explanation: 'Step 1 is to state $H_0$ and $H_a$ in context; conditions, calculations and the conclusion follow in that order.'
          },
          {
            question: 'Conditions for $\\chi^2$ use ___ counts for the count check.',
            options: ['Observed', 'Expected', 'Marginal', 'Combined'],
            correctAnswer: 1,
            explanation: 'All expected counts must be greater than 5. Observed counts and the marginal totals are not what the condition checks.'
          },
          {
            question: 'A student shows $\\chi^2 = 8.2$ but does not state $df$. On the AP exam:',
            options: ['Full credit, since the $\\chi^2$ value is enough', 'Less credit, since $df$ is needed for the p-value', 'No credit for any part of the solution', 'Full credit, since $df$ is never reported'],
            correctAnswer: 1,
            explanation: 'Without $df$, the reader cannot see how the p-value was found, so the calculation step is incomplete and can lose credit. The hypotheses, conditions and conclusion can still earn credit.'
          },
          {
            question: 'A homogeneity test compares 2 groups on a variable with 6 categories. $df =$',
            options: ['$5$', '$6$', '$12$', '$10$'],
            correctAnswer: 0,
            explanation: '$df = (2-1)(6-1) = 5$. Using the number of categories gives 6, the number of cells gives 12, and $2 \\times (6-1)$ forgets to subtract 1 from the number of rows.'
          },
          {
            question: 'An independence test on a $3 \\times 3$ table: $df =$',
            options: ['$9$', '$8$', '$4$', '$6$'],
            correctAnswer: 2,
            explanation: '$df = (3-1)(3-1) = 4$. The number of cells is 9, one less is 8, and $3 \\times (3-1)$ gives 6.'
          },
          {
            question: 'Which contributes most to $\\chi^2$: $(15-10)^2/10$, $(22-20)^2/20$, or $(8-12)^2/12$?',
            options: ['$(15-10)^2/10 = 2.5$', '$(22-20)^2/20 = 0.2$', '$(8-12)^2/12 = 1.33$', 'All contribute equally'],
            correctAnswer: 0,
            explanation: '$2.5 > 1.33 > 0.2$. The first cell has the largest gap relative to its expected count, so it contributes most.'
          },
          {
            question: 'The AP conclusion must include:',
            options: ['The p-value alone, with no decision or context stated', 'A decision based on the p-value, in context', 'The $\\chi^2$ value and $df$, with no context given', 'A confidence interval for each cell of the table'],
            correctAnswer: 1,
            explanation: 'Full credit requires comparing the p-value with $\\alpha$, stating the decision, and explaining what it means in the context of the problem. Chi-square tests do not produce confidence intervals.'
          },
          {
            question: 'Rejecting $H_0$ in a homogeneity test means:',
            options: ['The distributions are proven to be identical', 'There is convincing evidence the distributions differ', 'The distributions are proven to be different', 'The samples must have been collected with bias'],
            correctAnswer: 1,
            explanation: 'Rejecting gives convincing evidence that the distribution of the variable differs across the populations or treatments. A test never proves either hypothesis, and a significant result is not a sign of bias.'
          },
          {
            question: 'If ALL expected counts are exactly equal to observed counts, $\\chi^2 =$',
            options: ['Very large', '$df$', '$0$', '$1$'],
            correctAnswer: 2,
            explanation: 'If $O = E$ for every cell, every term is $0^2/E = 0$, so $\\chi^2 = 0$.'
          },
          {
            question: 'After a significant independence test from an observational study, we conclude:',
            options: ['One variable causes changes in the other', 'An association, not causation', 'No relationship between them at all', 'The two variables are independent'],
            correctAnswer: 1,
            explanation: 'Observational data support a conclusion of association only; causation requires a randomized experiment. A significant result is evidence against independence, not for it.'
          }
        ]
      }
    }
  ]
};
