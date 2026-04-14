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
| 📝 GoF Worked Example |
| 📝 Independence Worked Example |
| ⚠️ Common AP Mistakes |

> 🔑 **Key Concept:** Chi-square FRQs follow the same 4-step framework: Hypotheses, Conditions, Calculate, Conclude. Practice writing each step clearly.

---

### Worked Example 1: Goodness-of-Fit

**Problem:** A company claims its candy mix is 30% red, 20% blue, 20% green, 15% yellow, 15% orange. A random sample of 200 candies yields:

| Color | Red | Blue | Green | Yellow | Orange |
|-------|:---:|:----:|:-----:|:------:|:------:|
| Observed | 75 | 35 | 32 | 28 | 30 |
| Expected | 60 | 40 | 40 | 30 | 30 |

**Step 1 — Hypotheses:**
$H_0$: The distribution of colors matches the company claim.
$H_a$: The distribution of colors does not match the company claim.

**Step 2 — Conditions:**
- **Random:** Random sample stated ✓
- **10%:** $200 < 10\\%$ of all candies produced ✓
- **Large Counts:** All expected counts $\\geq 5$ (smallest is 30) ✓

**Step 3 — Calculate:**
$$\\chi^2 = \\frac{(75-60)^2}{60} + \\frac{(35-40)^2}{40} + \\frac{(32-40)^2}{40} + \\frac{(28-30)^2}{30} + \\frac{(30-30)^2}{30}$$

$$= \\frac{225}{60} + \\frac{25}{40} + \\frac{64}{40} + \\frac{4}{30} + 0 = 3.75 + 0.625 + 1.60 + 0.133 + 0$$

$$\\chi^2 = 6.108, \\quad df = 5-1 = 4$$

From the table: $p$ is between $0.10$ and $0.25$ (since $6.108 < 7.779$).

**Step 4 — Conclude:**
Since the p-value is greater than $\\alpha = 0.05$, we fail to reject $H_0$. There is not convincing evidence that the distribution of candy colors differs from the company claim.

> 🔍 **Follow-up:** The red category had the largest contribution (3.75), suggesting there may be more red candies than claimed.

---

### Worked Example 2: Test for Independence

**Problem:** A random sample of 400 adults records education level and exercise frequency:

| | ≤ 3 days/week | > 3 days/week | Total |
|---|---:|---:|---:|
| No degree | 120 | 80 | 200 |
| College degree | 70 | 130 | 200 |
| Total | 190 | 210 | 400 |

**Step 1 — Hypotheses:**
$H_0$: Education level and exercise frequency are independent.
$H_a$: Education level and exercise frequency are associated.

**Step 2 — Conditions:**
- **Random:** Random sample stated ✓
- **10%:** $400 < 10\\%$ of all adults ✓
- **Large Counts:** Expected counts: $E_{11} = \\frac{200 \\times 190}{400} = 95$, $E_{12} = 105$, $E_{21} = 95$, $E_{22} = 105$. All $\\geq 5$ ✓

**Step 3 — Calculate:**
$$\\chi^2 = \\frac{(120-95)^2}{95} + \\frac{(80-105)^2}{105} + \\frac{(70-95)^2}{95} + \\frac{(130-105)^2}{105}$$

$$= \\frac{625}{95} + \\frac{625}{105} + \\frac{625}{95} + \\frac{625}{105} = 6.579 + 5.952 + 6.579 + 5.952 = 25.06$$

$df = (2-1)(2-1) = 1$. From the table: $\\chi^2 = 25.06 > 6.635$ so $p < 0.01$.

**Step 4 — Conclude:**
Since the p-value is less than $\\alpha = 0.05$ (in fact less than 0.01), we reject $H_0$. There is convincing evidence of an association between education level and exercise frequency.`
    },
    {
      id: 'apstats-chisquaretests-p6-mistakes',
      type: 'text' as const,
      content: `## ⚠️ Common AP Mistakes on Chi-Square FRQs

| Mistake | Fix |
|---------|-----|
| Using observed counts for the Large Counts check | Must use **expected** counts |
| Forgetting $df$ | Always state $df$ with the formula |
| Not stating hypotheses in context | "$H_0$: Color distribution matches claim" not just "$H_0$: fit" |
| Saying "accept $H_0$" | Say "fail to reject $H_0$" |
| Confusing independence, homogeneity, and GoF | Read the study design carefully |
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
            question: 'In the candy example, the red category contributed most to $\\chi^2$ because:',
            options: ['Red was the most common color', 'The discrepancy $(O-E)^2/E$ was largest for red', 'Red was listed first', 'Red had the smallest expected count'],
            correctAnswer: 1,
            explanation: '$(75-60)^2/60 = 3.75$ was the largest individual contribution, indicating red had the biggest deviation from expected.'
          },
          {
            question: 'For a GoF test, $df$ equals:',
            options: ['$n - 1$', 'Number of categories $- 1$', '$(r-1)(c-1)$', 'Number of categories'],
            correctAnswer: 1,
            explanation: 'GoF: $df = k - 1$ where $k$ is the number of categories.'
          },
          {
            question: 'In the education/exercise example, the study design indicates a test for:',
            options: ['Goodness of fit', 'Homogeneity', 'Independence', 'Regression'],
            correctAnswer: 2,
            explanation: 'One sample of adults with two variables (education and exercise) measured on each → test for independence.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p6-input',
      type: 'input-boxes' as const,
      content: `
**Quick Calculations** 🧮

A GoF test: categories A, B, C with observed = 30, 25, 45 and expected = 33.3, 33.3, 33.3 (total = 100, equal proportions).

**1)** Contribution from category A: $(O-E)^2/E$ (round to 2 decimal places)

**2)** Contribution from category C: $(O-E)^2/E$ (round to 2 decimal places)

**3)** $df$ for this test?
      `,
      exercise: {
        inputs: [
          {
            label: 'Contribution A',
            correctAnswer: '0.33',
            explanation: '$(30-33.3)^2/33.3 = (-3.3)^2/33.3 = 10.89/33.3 = 0.327 \\approx 0.33$.'
          },
          {
            label: 'Contribution C',
            correctAnswer: '4.11',
            explanation: '$(45-33.3)^2/33.3 = (11.7)^2/33.3 = 136.89/33.3 = 4.111 \\approx 4.11$.'
          },
          {
            label: 'df',
            correctAnswer: '2',
            explanation: '$df = k - 1 = 3 - 1 = 2$.'
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
            label: 'Company claims M&Ms are 24% blue. You sample 100 and check →',
            options: ['Goodness of Fit', 'Independence', 'Homogeneity'],
            correctIndex: 0,
            explanation: 'Testing whether observed proportions match a claimed distribution → GoF.'
          },
          {
            id: 'chi6-dd2',
            label: 'Survey students: record class year and study habits →',
            options: ['Goodness of Fit', 'Independence', 'Homogeneity'],
            correctIndex: 1,
            explanation: 'One sample, two categorical variables → Independence.'
          },
          {
            id: 'chi6-dd3',
            label: 'Compare grade distribution (A/B/C/D/F) across 3 different instructors →',
            options: ['Goodness of Fit', 'Independence', 'Homogeneity'],
            correctIndex: 2,
            explanation: 'Three independent groups, one categorical variable (grade) → Homogeneity.'
          },
          {
            id: 'chi6-dd4',
            label: 'Check whether a die is fair based on 300 rolls →',
            options: ['Goodness of Fit', 'Independence', 'Homogeneity'],
            correctIndex: 0,
            explanation: 'Testing observed frequencies against a model (equal probabilities 1/6 each) → GoF.'
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
            question: 'The first step in a $\\chi^2$ FRQ is:',
            options: ['Calculate $\\chi^2$', 'State hypotheses', 'Check conditions', 'Draw a conclusion'],
            correctAnswer: 1,
            explanation: 'Step 1: State $H_0$ and $H_a$ in context.'
          },
          {
            question: 'Conditions for $\\chi^2$ use ___ counts for the Large Counts check.',
            options: ['Observed', 'Expected', 'Total', 'Marginal'],
            correctAnswer: 1,
            explanation: 'All expected counts must be $\\geq 5$.'
          },
          {
            question: 'A student shows $\\chi^2 = 8.2$ but does not state $df$. On the AP exam:',
            options: ['Full credit — $\\chi^2$ is enough', 'Partial credit — $df$ is needed to find the p-value', 'No credit', 'Extra credit for brevity'],
            correctAnswer: 1,
            explanation: 'Without $df$, you cannot determine the p-value or draw a conclusion. This costs points.'
          },
          {
            question: 'A GoF test with $k = 6$: $df =$',
            options: ['$5$', '$6$', '$12$', '$30$'],
            correctAnswer: 0,
            explanation: '$df = 6 - 1 = 5$.'
          },
          {
            question: 'An independence test on a $3 \\times 3$ table: $df =$',
            options: ['$9$', '$8$', '$4$', '$6$'],
            correctAnswer: 2,
            explanation: '$df = (3-1)(3-1) = 4$.'
          },
          {
            question: 'Which contributes most to $\\chi^2$: $(15-10)^2/10$, $(22-20)^2/20$, or $(8-12)^2/12$?',
            options: ['$(15-10)^2/10 = 2.5$', '$(22-20)^2/20 = 0.2$', '$(8-12)^2/12 = 1.33$', 'All equal'],
            correctAnswer: 0,
            explanation: '$2.5 > 1.33 > 0.2$. The first cell contributes most.'
          },
          {
            question: 'The AP conclusion must include:',
            options: ['Just the p-value', 'A decision (reject or fail to reject) and context', 'Only the $\\chi^2$ value', 'A confidence interval'],
            correctAnswer: 1,
            explanation: 'Full credit requires: compare p-value to $\\alpha$, state decision, explain in context of the problem.'
          },
          {
            question: 'Rejecting $H_0$ in a GoF test means:',
            options: ['The model fits perfectly', 'There is convincing evidence the distribution differs from the model', 'The model is proven wrong', 'The sample was biased'],
            correctAnswer: 1,
            explanation: 'Rejecting means convincing evidence that the distribution does not match the hypothesized model.'
          },
          {
            question: 'If ALL expected counts are exactly equal to observed counts, $\\chi^2 =$',
            options: ['Very large', '$df$', '$0$', '$1$'],
            correctAnswer: 2,
            explanation: 'If $O_i = E_i$ for every cell, every term is $(0)^2/E_i = 0$, so $\\chi^2 = 0$.'
          },
          {
            question: 'After a significant independence test from an observational study, we conclude:',
            options: ['Variable A causes variable B', 'Association, not causation', 'No relationship', 'The variables are independent'],
            correctAnswer: 1,
            explanation: 'Observational data → association only. Causation requires a randomized experiment.'
          }
        ]
      }
    }
  ]
};
