export const apStatsHypothesisPart5Data = {
  topicSlug: 'hypothesis-testing-apstats',
  sections: [
    {
      id: 'apstats-hypothesis-testing-p5-intro',
      type: 'text' as const,
      content: `# 🧮 One-Sample t-Test

**Part 5 of 7 — The Complete Procedure**

---

### When to Use a One-Sample t-Test

Use a one-sample $t$-test when:
- You have **one quantitative variable**
- You want to test a claim about the **population mean** $\\mu$
- The population standard deviation $\\sigma$ is **unknown** (use $s$ instead)

---

### Conditions (CHECK EVERY TIME)

| Condition | What to Check | How to Verify |
|-----------|--------------|---------------|
| **Random** | Data from a random sample or randomized experiment | Stated in problem |
| **Independence** | $n < 10\\%$ of the population (10% condition) | $N \\geq 10n$ |
| **Normal/Large Sample** | Population is approximately normal OR $n \\geq 30$ | Check dotplot/histogram for skew; if $n \\geq 30$, CLT applies |

> ⚠️ **AP Tip:** You MUST state and verify all three conditions to earn full credit on the free response.

---

### The Four-Step Process

**Step 1 — STATE:**
- Define the parameter: "Let $\\mu$ = the true mean ..."
- Write hypotheses: $H_0: \\mu = \\mu_0$ vs $H_a$

**Step 2 — PLAN:**
- Name the test: "One-sample $t$-test"
- Check all three conditions

**Step 3 — DO:**

$$t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}, \\quad df = n - 1$$

- Find P-value using $t$-distribution with $df = n-1$

**Step 4 — CONCLUDE:**
- Compare P-value to $\\alpha$
- State conclusion in context

---

### Worked Example

**A manufacturer claims their batteries last 500 hours. A random sample of 25 batteries gives $\\bar{x} = 490$, $s = 20$. Test at $\\alpha = 0.05$.**

**STATE:**
- $\\mu$ = true mean battery life (hours)
- $H_0: \\mu = 500$, $H_a: \\mu < 500$ (left-tailed — suspect batteries last LESS)

**PLAN:**
- One-sample $t$-test
- ✅ Random: stated "random sample"
- ✅ Independent: 25 < 10% of all batteries produced
- ✅ Normal: $n = 25$ (borderline); assume no strong skew mentioned

**DO:**
$$SE = \\frac{s}{\\sqrt{n}} = \\frac{20}{\\sqrt{25}} = \\frac{20}{5} = 4$$
$$t = \\frac{490 - 500}{4} = \\frac{-10}{4} = -2.5$$
$$df = 25 - 1 = 24$$
$$P = \\text{tcdf}(-10^{99}, -2.5, 24) \\approx 0.0098$$

**CONCLUDE:**
Since $P = 0.0098 < \\alpha = 0.05$, we reject $H_0$. There is convincing evidence that the true mean battery life is less than 500 hours.

---

### t-Test vs z-Test

| Feature | z-Test | t-Test |
|---------|:------:|:------:|
| $\\sigma$ known? | Yes | No (use $s$) |
| Distribution | Standard normal | $t$ with $df = n-1$ |
| AP Exam usage | Rare (proportions only) | Very common (means) |`
    },
    {
      id: 'apstats-hypothesis-testing-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**t-Test Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The degrees of freedom for a one-sample $t$-test with $n = 36$ is:',
            options: ['34', '35', '36', '37'],
            correctAnswer: 1,
            explanation: '$df = n - 1 = 36 - 1 = 35$.'
          },
          {
            question: 'We use a $t$-test instead of a $z$-test when:',
            options: ['$n$ is large', '$\\sigma$ is unknown', 'The data is categorical', '$\\alpha = 0.01$'],
            correctAnswer: 1,
            explanation: 'When $\\sigma$ is unknown, we estimate it with $s$ and use the $t$-distribution.'
          },
          {
            question: 'The three conditions for a $t$-test are:',
            options: ['Mean, Median, Mode', 'Random, Independent, Normal/Large', 'Type I, Type II, Power', '$H_0$, $H_a$, $\\alpha$'],
            correctAnswer: 1,
            explanation: 'Always check: Random sample, Independence (10% condition), Normal/Large sample.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p5-input',
      type: 'input-boxes' as const,
      content: `
**Computing a t-Test** 🧮

**$n = 36$, $\\bar{x} = 52$, $s = 6$, $\\mu_0 = 50$:**

**1)** $SE = s/\\sqrt{n} = $ ?

**2)** $t = (\\bar{x} - \\mu_0)/SE = $ ?

**3)** $df = $ ?
      `,
      exercise: {
        inputs: [
          {
            label: 'SE',
            correctAnswer: '1',
            explanation: '$SE = 6/\\sqrt{36} = 6/6 = 1$.'
          },
          {
            label: 't-statistic',
            correctAnswer: '2',
            explanation: '$t = (52 - 50)/1 = 2$.'
          },
          {
            label: 'df',
            correctAnswer: '35',
            explanation: '$df = n - 1 = 36 - 1 = 35$.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**t-Test Procedure** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ht5-dd1',
            label: 'The 10% condition checks:',
            options: ['Randomness', 'Independence', 'Normality', 'Significance'],
            correctIndex: 1,
            explanation: 'The 10% condition ($n < 10\\%$ of $N$) ensures observations are approximately independent.'
          },
          {
            id: 'ht5-dd2',
            label: 'When $n \\geq 30$, the sampling distribution is approximately normal due to the:',
            options: ['Law of Large Numbers', 'Central Limit Theorem', 'Empirical Rule', 'Multiplication Rule'],
            correctIndex: 1,
            explanation: 'The CLT says the sampling distribution of $\\bar{x}$ is approximately normal for large $n$.'
          },
          {
            id: 'ht5-dd3',
            label: 'The AP four-step process is:',
            options: ['State, Plan, Do, Conclude', 'Guess, Check, Verify, Report', 'Hypothesize, Test, Accept, Reject', 'Sample, Graph, Calculate, Decide'],
            correctIndex: 0,
            explanation: 'State (hypotheses), Plan (name test + conditions), Do (calculate), Conclude (in context).'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — One-Sample t-Test** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$n = 16$, $\\bar{x} = 84$, $s = 8$, $\\mu_0 = 80$. The SE is:',
            options: ['0.5', '2', '4', '8'],
            correctAnswer: 1,
            explanation: '$SE = 8/\\sqrt{16} = 8/4 = 2$.'
          },
          {
            question: 'Using the values above, the $t$-statistic is:',
            options: ['0.5', '1', '2', '4'],
            correctAnswer: 2,
            explanation: '$t = (84 - 80)/2 = 4/2 = 2$.'
          },
          {
            question: 'The degrees of freedom in the problem above are:',
            options: ['14', '15', '16', '17'],
            correctAnswer: 1,
            explanation: '$df = n - 1 = 16 - 1 = 15$.'
          },
          {
            question: 'Which is NOT one of the three conditions?',
            options: ['Random sample', 'Independence (10% condition)', 'Sample size > 100', 'Normal/Large sample'],
            correctAnswer: 2,
            explanation: 'The condition is Normal/Large sample ($n \\geq 30$ or approximately normal), not $n > 100$.'
          },
          {
            question: 'If $n = 10$ and the data are heavily skewed, you should:',
            options: ['Proceed with the $t$-test', 'Not use a $t$-test (normality condition fails)', 'Use $\\alpha = 0.01$', 'Ignore the conditions'],
            correctAnswer: 1,
            explanation: 'With small $n$ and heavy skew, the normality condition is not met. The $t$-test is inappropriate.'
          },
          {
            question: 'An AP free-response conclusion should always:',
            options: ['State "$H_0$ is true"', 'Include context about the specific situation', 'Prove the alternative', 'Give the exact population mean'],
            correctAnswer: 1,
            explanation: 'Conclusions must be in context: "There is (not) convincing evidence that [context]."'
          },
          {
            question: '$n = 49$, $\\bar{x} = 100$, $s = 21$, $\\mu_0 = 95$. The $t$-statistic is:',
            options: ['$0.24$', '$1.67$', '$2.38$', '$5.0$'],
            correctAnswer: 1,
            explanation: '$SE = 21/\\sqrt{49} = 21/7 = 3$. Then $t = (100-95)/3 = 5/3 \\approx 1.67$.'
          },
          {
            question: 'If $t = 2.0$, $df = 35$, right-tailed test: $P \\approx 0.027$. At $\\alpha = 0.05$:',
            options: ['Fail to reject $H_0$', 'Reject $H_0$', 'Accept $H_0$', 'Need more information'],
            correctAnswer: 1,
            explanation: '$P = 0.027 < 0.05 = \\alpha$, so reject $H_0$.'
          },
          {
            question: 'A sample of 200 is drawn from a city of 50,000. The 10% condition is:',
            options: ['Violated: $200 > 10\\%$ of 50,000', 'Met: $200 < 10\\%$ of 50,000', 'Not applicable', 'Impossible to check'],
            correctAnswer: 1,
            explanation: '$10\\%$ of 50,000 = 5,000. Since $200 < 5,000$, the condition is met.'
          },
          {
            question: 'The $t$-distribution has heavier tails than the normal distribution because:',
            options: ['$\\sigma$ is known', 'Estimating $\\sigma$ with $s$ adds extra uncertainty', 'The sample is large', 'We use $\\alpha = 0.05$'],
            correctAnswer: 1,
            explanation: 'Using $s$ instead of $\\sigma$ introduces extra variability, making the tails heavier.'
          }
        ]
      }
    }
  ]
};
