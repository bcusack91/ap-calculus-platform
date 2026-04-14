export const apStatsHypothesisPart6Data = {
  topicSlug: 'hypothesis-testing-apstats',
  sections: [
    {
      id: 'apstats-hypothesis-testing-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Putting It All Together**

---

### Worked Example 1: Cereal Box Weights

**A cereal company advertises 16 oz boxes. A consumer group suspects the boxes are underfilled. They weigh a random sample of 40 boxes and find $\\bar{x} = 15.7$ oz, $s = 0.8$ oz. Test at $\\alpha = 0.05$.**

**STATE:**
- $\\mu$ = true mean weight of cereal boxes (oz)
- $H_0: \\mu = 16$ vs $H_a: \\mu < 16$ (left-tailed — suspect underfilling)

**PLAN:**
- One-sample $t$-test
- ✅ Random: "random sample" stated
- ✅ Independent: 40 boxes $< 10\\%$ of all boxes produced
- ✅ Normal/Large: $n = 40 \\geq 30$ → CLT applies

**DO:**
$$SE = \\frac{0.8}{\\sqrt{40}} = \\frac{0.8}{6.325} \\approx 0.1265$$

$$t = \\frac{15.7 - 16}{0.1265} = \\frac{-0.3}{0.1265} \\approx -2.372$$

$$df = 40 - 1 = 39$$

$$P = \\text{tcdf}(-10^{99}, -2.372, 39) \\approx 0.0114$$

**CONCLUDE:**
Since $P = 0.0114 < \\alpha = 0.05$, we reject $H_0$. There is convincing evidence that the true mean weight of cereal boxes is less than 16 oz. The consumer group\'s suspicion is supported.

---

### Worked Example 2: Study Hours

**A college claims students study an average of 15 hours per week. A professor surveys a random sample of 50 students and finds $\\bar{x} = 13.2$ hours, $s = 5.1$ hours. Test at $\\alpha = 0.05$ whether the true mean differs from 15.**

**STATE:**
- $\\mu$ = true mean weekly study hours for students at this college
- $H_0: \\mu = 15$ vs $H_a: \\mu \\neq 15$ (two-tailed — "differs from")

**PLAN:**
- One-sample $t$-test
- ✅ Random: "random sample" stated
- ✅ Independent: $50 < 10\\%$ of all college students
- ✅ Normal/Large: $n = 50 \\geq 30$ → CLT applies

**DO:**
$$SE = \\frac{5.1}{\\sqrt{50}} = \\frac{5.1}{7.071} \\approx 0.7212$$

$$t = \\frac{13.2 - 15}{0.7212} = \\frac{-1.8}{0.7212} \\approx -2.495$$

$$df = 49$$

$$P = 2 \\times \\text{tcdf}(-10^{99}, -2.495, 49) \\approx 2 \\times 0.0080 = 0.0160$$

**CONCLUDE:**
Since $P = 0.016 < \\alpha = 0.05$, we reject $H_0$. There is convincing evidence that the true mean weekly study hours for students at this college differs from 15 hours.

---

### Common AP Mistakes to Avoid

| Mistake | Correction |
|---------|-----------|
| Not stating hypotheses in terms of $\\mu$ | Always use population parameters |
| Skipping conditions | Must check all three explicitly |
| Saying "accept $H_0$" | Say "fail to reject $H_0$" |
| Conclusion without context | "There is (not) convincing evidence that [real-world statement]" |
| Using $\\bar{x}$ or $\\hat{p}$ in hypotheses | Always use $\\mu$ or $p$ |
| Forgetting to double P for two-tailed | Two-tailed: $P = 2 \\times \\text{one-tail area}$ |`
    },
    {
      id: 'apstats-hypothesis-testing-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Workshop Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the cereal example, the SE is approximately:',
            options: ['0.02', '0.1265', '0.80', '2.0'],
            correctAnswer: 1,
            explanation: '$SE = 0.8/\\sqrt{40} \\approx 0.8/6.325 \\approx 0.1265$.'
          },
          {
            question: 'The study hours test is two-tailed because the claim asks:',
            options: ['If students study more', 'If students study less', 'If the mean differs from 15', 'If the mean equals 15'],
            correctAnswer: 2,
            explanation: '"Differs from" = either direction = two-tailed ($H_a: \\mu \\neq 15$).'
          },
          {
            question: 'Which step should come FIRST in an AP hypothesis test?',
            options: ['Calculate the test statistic', 'Check conditions', 'State the hypotheses', 'Find the P-value'],
            correctAnswer: 2,
            explanation: 'The four-step process: State → Plan → Do → Conclude. Hypotheses come first.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p6-input',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮

**$n = 25$, $\\bar{x} = 84$, $s = 10$, $\\mu_0 = 80$:**

**1)** $SE = s/\\sqrt{n} = $ ?

**2)** $t = (\\bar{x} - \\mu_0)/SE = $ ?

**3)** $df = $ ?
      `,
      exercise: {
        inputs: [
          {
            label: 'SE',
            correctAnswer: '2',
            explanation: '$SE = 10/\\sqrt{25} = 10/5 = 2$.'
          },
          {
            label: 't-statistic',
            correctAnswer: '2',
            explanation: '$t = (84 - 80)/2 = 4/2 = 2$.'
          },
          {
            label: 'df',
            correctAnswer: '24',
            explanation: '$df = n - 1 = 25 - 1 = 24$.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**AP Process Steps** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ht6-dd1',
            label: 'The first step in a hypothesis test is:',
            options: ['Calculate the test statistic', 'State the hypotheses', 'Find the P-value', 'Check conditions'],
            correctIndex: 1,
            explanation: 'Always start by stating $H_0$ and $H_a$ with the parameter defined.'
          },
          {
            id: 'ht6-dd2',
            label: 'When we cannot reject $H_0$, we say:',
            options: ['Accept $H_0$', 'Prove $H_0$', 'Fail to reject $H_0$', 'Confirm $H_0$'],
            correctIndex: 2,
            explanation: 'Never say "accept" — say "fail to reject $H_0$" (we lack sufficient evidence).'
          },
          {
            id: 'ht6-dd3',
            label: 'The conclusion must reference:',
            options: ['Only the P-value', 'Only the test statistic', 'The real-world context', 'Only $\\alpha$'],
            correctIndex: 2,
            explanation: 'AP conclusions must reference the specific real-world situation, not just numbers.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A sample of $n = 64$ has $\\bar{x} = 102$, $s = 16$, $\\mu_0 = 100$. The SE is:',
            options: ['0.25', '2', '4', '16'],
            correctAnswer: 1,
            explanation: '$SE = 16/\\sqrt{64} = 16/8 = 2$.'
          },
          {
            question: 'Using the values above, $t =$',
            options: ['0.5', '1', '2', '4'],
            correctAnswer: 1,
            explanation: '$t = (102 - 100)/2 = 1$.'
          },
          {
            question: 'With $t = 1$ and $df = 63$, the two-tailed P-value is approximately:',
            options: ['0.16', '0.32', '0.05', '0.01'],
            correctAnswer: 1,
            explanation: 'One-tail area for $t=1$ with large $df \\approx 0.16$. Two-tailed: $P \\approx 0.32$.'
          },
          {
            question: 'Based on $P \\approx 0.32$ and $\\alpha = 0.05$:',
            options: ['Reject $H_0$', 'Fail to reject $H_0$', 'Accept $H_a$', 'The test is invalid'],
            correctAnswer: 1,
            explanation: '$P = 0.32 > 0.05$ → fail to reject $H_0$.'
          },
          {
            question: 'Which of these is a proper AP conclusion?',
            options: ['$H_0$ is true', 'We accept $H_0$', 'There is not convincing evidence that the true mean differs from 100', 'The data is wrong'],
            correctAnswer: 2,
            explanation: 'Proper wording: "There is (not) convincing evidence that [context]."'
          },
          {
            question: 'A two-tailed test requires you to:',
            options: ['Use only the right tail', 'Double the one-tail P-value', 'Halve the significance level', 'Ignore the sign of $t$'],
            correctAnswer: 1,
            explanation: 'Two-tailed: $P = 2 \\times P(t \\geq |t_{obs}|)$.'
          },
          {
            question: 'When checking the 10% condition with $n = 30$ from a school of 250 students:',
            options: ['Met (30 < 25)', 'Not met (30 > 25)', 'Always met', 'Not applicable'],
            correctAnswer: 1,
            explanation: '$10\\%$ of 250 = 25. Since $30 > 25$, the condition is NOT met.'
          },
          {
            question: 'Using $\\hat{p}$ in hypotheses instead of $p$ is:',
            options: ['Correct', 'An error — hypotheses use population parameters', 'Only wrong for means', 'Acceptable on the AP exam'],
            correctAnswer: 1,
            explanation: 'Hypotheses are always about population parameters ($\\mu$, $p$), never statistics ($\\bar{x}$, $\\hat{p}$).'
          },
          {
            question: '$n = 12$, data appears approximately symmetric with no outliers. Can we proceed with a $t$-test?',
            options: ['No — $n < 30$', 'Yes — approximately normal with no outliers satisfies the condition', 'Only if $\\alpha = 0.01$', 'Only with a $z$-test'],
            correctAnswer: 1,
            explanation: 'For small $n$, the Normal condition is met if the data appear approximately symmetric with no strong skew or outliers.'
          },
          {
            question: 'Which is the correct order of the four-step process?',
            options: ['Plan, State, Do, Conclude', 'Do, Plan, State, Conclude', 'State, Plan, Do, Conclude', 'Conclude, Do, Plan, State'],
            correctAnswer: 2,
            explanation: 'State (hypotheses) → Plan (test + conditions) → Do (calculate) → Conclude (in context).'
          }
        ]
      }
    }
  ]
};
