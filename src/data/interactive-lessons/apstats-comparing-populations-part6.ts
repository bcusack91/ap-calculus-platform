export const apStatsComparingPart6Data = {
  topicSlug: 'comparing-populations-apstats',
  sections: [
    {
      id: 'apstats-comparingpopulations-p6-intro',
      type: 'text' as const,
      content: `# 📊 Problem-Solving Workshop

**Part 6 of 7 — Complete Worked Examples**

---

## Worked Example 1: Two-Sample T-Test

### Problem
A fitness company wants to compare two training programs. 45 volunteers are randomly assigned: 22 to Program A, 23 to Program B. After 8 weeks, weight loss (in pounds) is recorded:

| | Program A | Program B |
|---|:---:|:---:|
| $n$ | 22 | 23 |
| $\\bar{x}$ | 12.4 | 9.7 |
| $s$ | 3.8 | 4.1 |

Test whether Program A produces greater average weight loss at $\\alpha = 0.05$.

---

### Step 1: State Hypotheses

$$H_0: \\mu_A - \\mu_B = 0$$
$$H_a: \\mu_A - \\mu_B > 0$$

Where $\\mu_A$ = true mean weight loss for Program A, $\\mu_B$ = true mean weight loss for Program B.

### Step 2: Check Conditions

✅ **Random:** Volunteers randomly assigned to groups (experiment)
✅ **Normal:** $n_A = 22 \\geq 10$ and $n_B = 23 \\geq 10$ (or no strong skewness mentioned)
✅ **Independent:** Groups are independent; each person in only one program. Both $< 10\\%$ of all potential participants.

### Step 3: Calculate

$$SE = \\sqrt{\\frac{s_A^2}{n_A} + \\frac{s_B^2}{n_B}} = \\sqrt{\\frac{3.8^2}{22} + \\frac{4.1^2}{23}} = \\sqrt{\\frac{14.44}{22} + \\frac{16.81}{23}}$$

$$= \\sqrt{0.6564 + 0.7309} = \\sqrt{1.3873} \\approx 1.178$$

$$t = \\frac{(\\bar{x}_A - \\bar{x}_B) - 0}{SE} = \\frac{12.4 - 9.7}{1.178} = \\frac{2.7}{1.178} \\approx 2.291$$

Using technology with $df \\approx 42$: $P$-value $\\approx 0.0136$

### Step 4: Conclude

Since $P = 0.0136 < 0.05 = \\alpha$, we reject $H_0$.

> **AP-Style Conclusion:** There is convincing evidence that the true mean weight loss for Program A is greater than the true mean weight loss for Program B.

---

## Worked Example 2: Paired T-Test

### Problem
A researcher tests whether a meditation app reduces stress. 30 participants rate their stress (1–100) before and after 4 weeks of daily use:

| | Before | After | Differences (Before − After) |
|---|:---:|:---:|:---:|
| $n$ | 30 | 30 | 30 |
| $\\bar{x}$ | 68.2 | 59.5 | $\\bar{x}_d = 8.7$ |
| $s$ | — | — | $s_d = 11.3$ |

Test whether the app reduces stress at $\\alpha = 0.05$.

### Step 1: State Hypotheses

$$H_0: \\mu_d = 0$$
$$H_a: \\mu_d > 0$$

Where $\\mu_d$ = true mean difference in stress scores (Before − After) for all users of this app.

### Step 2: Check Conditions

✅ **Random:** 30 participants randomly selected (or assume representative)
✅ **Normal:** $n = 30 \\geq 30$ (CLT applies for differences)
✅ **Independent:** Differences within each person are independent; $30 < 10\\%$ of all potential users

> ⚠️ **Key:** We check conditions on the DIFFERENCES, not the individual scores.

### Step 3: Calculate

$$SE = \\frac{s_d}{\\sqrt{n}} = \\frac{11.3}{\\sqrt{30}} = \\frac{11.3}{5.477} \\approx 2.063$$

$$t = \\frac{\\bar{x}_d - 0}{SE} = \\frac{8.7}{2.063} \\approx 4.217$$

$df = n - 1 = 29$, $P$-value $< 0.001$

### Step 4: Conclude

Since $P < 0.001 < 0.05 = \\alpha$, we reject $H_0$.

> **AP-Style Conclusion:** There is convincing evidence that the meditation app reduces mean stress scores.

---

### Common AP Mistakes

| Mistake | Why It Costs Points |
|---------|-------------------|
| Using two-sample test when data is paired | Wrong procedure → wrong test statistic → wrong conclusion |
| Not defining $\\mu_d$ clearly | "Mean difference" must include direction (A − B) and context |
| Skipping conditions | Automatic deduction on free-response |
| No context in conclusion | Must reference the specific variables and setting |
| Saying "accept $H_0$" | Always say "fail to reject $H_0$" |
| Not identifying data as paired | Look for: same subjects, before/after, matched pairs |`
    },
    {
      id: 'apstats-comparingpopulations-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Workshop Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Worked Example 1 (weight loss), why is a two-sample test appropriate instead of a paired test?',
            options: ['Because the sample sizes are different', 'Because the participants are different people in each group', 'Because the data is not normal', 'Because we used $\\alpha = 0.05$'],
            correctAnswer: 1,
            explanation: 'The volunteers are randomly assigned to two separate groups — different people in each, so the data is independent, not paired.'
          },
          {
            question: 'In Worked Example 2 (meditation), what would happen if we incorrectly used a two-sample test?',
            options: ['The result would be more significant', 'The variability between subjects would inflate the SE, reducing power', 'The conclusion would be the same', 'We would get a negative t-value'],
            correctAnswer: 1,
            explanation: 'A two-sample test ignores the pairing and treats between-subject variability as noise, inflating SE and reducing the chance of detecting the real effect.'
          },
          {
            question: 'A study measures reaction time with the dominant hand and non-dominant hand for 40 participants. This is:',
            options: ['A two-sample design', 'A paired design', 'A chi-square design', 'An observational study'],
            correctAnswer: 1,
            explanation: 'Each participant provides two measurements (dominant and non-dominant) — the data is naturally paired by participant.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p6-input',
      type: 'input-boxes' as const,
      content: `
**Computation Practice** 🧮

**1)** Two groups: $\\bar{x}_1 = 45$, $s_1 = 6$, $n_1 = 36$; $\\bar{x}_2 = 41$, $s_2 = 8$, $n_2 = 36$. Calculate SE (round to 2 decimal places).

**2)** Using the values above, calculate the t-statistic (round to 2 decimal places).

**3)** Paired data: $\\bar{x}_d = 3.2$, $s_d = 5.0$, $n = 25$. Calculate the t-statistic (round to 2 decimal places).
      `,
      exercise: {
        inputs: [
          {
            label: 'SE',
            correctAnswer: '1.67',
            explanation: '$SE = \\sqrt{\\frac{6^2}{36} + \\frac{8^2}{36}} = \\sqrt{1 + 1.778} = \\sqrt{2.778} \\approx 1.67$.'
          },
          {
            label: 't-statistic (two-sample)',
            correctAnswer: '2.40',
            explanation: '$t = \\frac{45 - 41}{1.67} = \\frac{4}{1.67} \\approx 2.40$.'
          },
          {
            label: 't-statistic (paired)',
            correctAnswer: '3.20',
            explanation: '$SE = \\frac{5.0}{\\sqrt{25}} = 1.0$. $t = \\frac{3.2}{1.0} = 3.20$.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Procedure Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'cp6-dd1',
            label: 'Blood pressure measured before and after medication for 50 patients →',
            options: ['Two-sample t-test', 'Paired t-test', 'Chi-square test'],
            correctIndex: 1,
            explanation: 'Same patients measured twice (before/after) = paired data.'
          },
          {
            id: 'cp6-dd2',
            label: 'Average GPA compared between two different universities →',
            options: ['Two-sample t-test', 'Paired t-test', 'One-sample t-test'],
            correctIndex: 0,
            explanation: 'Different groups of students at different universities = independent samples.'
          },
          {
            id: 'cp6-dd3',
            label: 'Twins are separated and taught by different methods; test scores compared →',
            options: ['Two-sample t-test', 'Paired t-test', 'Z-test for proportions'],
            correctIndex: 1,
            explanation: 'Twins are naturally matched pairs — use a paired test.'
          },
          {
            id: 'cp6-dd4',
            label: 'In the conclusion, you should say "We ___ $H_0$" when $P > \\alpha$',
            options: ['accept', 'fail to reject', 'prove'],
            correctIndex: 1,
            explanation: 'Never say "accept." The correct phrasing is "fail to reject $H_0$."'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The first step in any hypothesis test is:',
            options: ['Calculate the test statistic', 'Check conditions', 'State hypotheses', 'Find the P-value'],
            correctAnswer: 2,
            explanation: 'The 4-step process: (1) State hypotheses, (2) Check conditions, (3) Calculate, (4) Conclude.'
          },
          {
            question: 'For a two-sample t-test, conditions are checked on:',
            options: ['The combined sample', 'Each sample separately', 'The differences', 'The population'],
            correctAnswer: 1,
            explanation: 'Each sample must independently satisfy randomness, normality, and independence.'
          },
          {
            question: 'For a paired t-test, conditions are checked on:',
            options: ['Each sample separately', 'The differences', 'The combined data', 'The original measurements'],
            correctAnswer: 1,
            explanation: 'In a paired test, we analyze the differences $d_i = x_{1i} - x_{2i}$, so conditions apply to the differences.'
          },
          {
            question: 'Which conclusion is best if $P = 0.03$ and $\\alpha = 0.05$?',
            options: ['Accept $H_a$', 'Reject $H_0$; there is convincing evidence... (in context)', 'The result is proven', '$H_0$ is false'],
            correctAnswer: 1,
            explanation: 'Reject $H_0$ and state there is convincing evidence in the context of the problem.'
          },
          {
            question: 'Which conclusion is best if $P = 0.18$ and $\\alpha = 0.05$?',
            options: ['Accept $H_0$', 'Fail to reject $H_0$; there is not convincing evidence... (in context)', 'The null is proven true', 'Reject $H_a$'],
            correctAnswer: 1,
            explanation: 'We fail to reject $H_0$ — we do not have convincing evidence to support $H_a$.'
          },
          {
            question: 'A study randomly assigns 60 runners to two shoe brands and records marathon times. The test statistic is $t = -1.84$ with $P = 0.071$. At $\\alpha = 0.05$:',
            options: ['Reject $H_0$', 'Fail to reject $H_0$', 'The test is invalid', 'Need more information'],
            correctAnswer: 1,
            explanation: '$P = 0.071 > 0.05 = \\alpha$, so we fail to reject $H_0$.'
          },
          {
            question: 'What is the degrees of freedom for a paired t-test with $n = 15$ pairs?',
            options: ['15', '14', '28', '30'],
            correctAnswer: 1,
            explanation: 'For paired data, $df = n - 1 = 15 - 1 = 14$ where $n$ is the number of pairs.'
          },
          {
            question: 'A result is "statistically significant" but the effect size is tiny. What should you conclude?',
            options: ['The result is important', 'The result is statistically detectable but may not be practically meaningful', 'The test was done wrong', 'We should ignore the result'],
            correctAnswer: 1,
            explanation: 'Statistical significance $\\neq$ practical importance. A large sample can detect tiny, meaningless differences.'
          },
          {
            question: 'When stating hypotheses for a paired test, $\\mu_d$ should be defined as:',
            options: ['The sample mean difference', 'The true mean difference for the population, specifying the direction of subtraction', 'The standard deviation of differences', 'The range of differences'],
            correctAnswer: 1,
            explanation: '$\\mu_d$ is the population parameter (true mean difference), and you must clearly state which direction is being subtracted.'
          },
          {
            question: 'Which of the following is NOT part of the 4-step inference process?',
            options: ['State hypotheses', 'Check conditions', 'Determine sample size', 'State conclusion in context'],
            correctAnswer: 2,
            explanation: 'The 4 steps are: State, Check conditions (Plan), Calculate (Do), Conclude. Sample size determination happens before data collection.'
          }
        ]
      }
    }
  ]
};
