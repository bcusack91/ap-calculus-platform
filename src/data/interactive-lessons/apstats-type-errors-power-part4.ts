export const apStatsErrorsPart4Data = {
  topicSlug: 'type-errors-power-apstats',
  sections: [
    {
      id: 'typeerrorspower-p4-intro',
      type: 'text' as const,
      content: `# 🔧 Factors Affecting Power

**Part 4 of 7 — Detailed Analysis**

---

### Sample Size and Power

A larger sample makes the standard error smaller ($SE = s/\\sqrt{n}$), so the sampling distribution of the statistic is narrower. A real difference between the true parameter and the null value then stands out more clearly, so **power increases**. The gain is not proportional: because SE depends on $\\sqrt{n}$, you need four times the sample to halve the SE.

### Size of the True Difference

The farther the true parameter is from the null value (for example, a true mean of 110 instead of 106 when $H_0: \\mu = 100$), the easier the difference is to detect, so **power is higher**. Less variability in the population ($\\sigma$ smaller) has the same effect.

> ℹ️ The AP exam asks how these factors change power; it does not ask you to calculate power.

---

### One-Tailed vs. Two-Tailed

A one-tailed test has more power than a two-tailed test at the same $\\alpha$, because all $\\alpha$ is concentrated in one tail.

$$\\text{Power}_{\\text{one-tail}} > \\text{Power}_{\\text{two-tail}}$$`
    },    {
      id: 'typeerrorspower-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Quadrupling the sample size (all else fixed):',
            options: ['Quadruples the power exactly', 'Halves the SE and raises power', 'Has no effect on power', 'Cuts the Type I error rate in half'],
            correctAnswer: 1,
            explanation: 'SE $= s/\\sqrt{n}$, so four times the sample halves the SE, which raises power. Power cannot simply quadruple (it is a probability, at most 1), and $\\alpha$ is set by the researcher.'
          },
          {
            question: 'With $H_0: \\mu = 100$ and everything else fixed, power is highest when the true mean is:',
            options: ['$\\mu = 100$', '$\\mu = 103$', '$\\mu = 106$', '$\\mu = 110$'],
            correctAnswer: 3,
            explanation: 'The farther the true mean is from the null value, the easier the difference is to detect, so $\\mu = 110$ gives the most power. If $\\mu = 100$, $H_0$ is true and there is nothing to detect.'
          },
          {
            question: 'Switching from a two-tailed to a one-tailed test (in the direction of the true effect):',
            options: ['Decreases power in that direction', 'Increases power', 'Has no effect on power at all', 'Changes the required sample size'],
            correctAnswer: 1,
            explanation: 'With the same $\\alpha$, a one-tailed test in the right direction rejects more easily (its p-value is half the two-sided one), so power increases.'
          }
        ]
      }
    },    {
      id: 'typeerrorspower-p4-input',
      type: 'input-boxes' as const,
      content: `
**Power Analysis** 🧮

$H_0: \\mu = 100$, $\\sigma = 15$, same $n$ and $\\alpha$. Compare two possible true means: $\\mu = 106$ and $\\mu = 110$.

**1)** How far is $\\mu = 106$ from the null value?

**2)** Which true mean gives the test more power? (106/110)

**3)** To increase power at $\\mu = 106$, should you increase or decrease $n$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '110', 'increase'],
        hint1: '$106 - 100$',
        hint2: 'Larger true differences are easier to detect',
        hint3: 'More data = smaller SE = more power',
        explanation: '1) $106 - 100 = 6$. 2) 110 is 10 units from the null, a larger difference, so power is higher. 3) Increase $n$ to shrink the SE.'
      }
    }
  ]
};
