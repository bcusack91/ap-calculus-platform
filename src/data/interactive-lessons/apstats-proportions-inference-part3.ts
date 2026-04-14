export const apStatsPropInfPart3Data = {
  topicSlug: 'proportions-inference-apstats',
  sections: [
    {
      id: 'propinference-p3-intro',
      type: 'text' as const,
      content: `# ⚖️ Hypothesis Tests for Proportions

**Part 3 of 7 — One-Sample Z Test**

---

### Steps

1. **State** hypotheses: $H_0: p = p_0$ vs. $H_a: p \\\\neq p_0$ (or $<$ or $>$)
2. **Check** conditions (Random, Normal, Independent)
3. **Calculate** the test statistic:

$$z = \\\\frac{\\\\hat{p} - p_0}{\\\\sqrt{p_0(1-p_0)/n}}$$

4. **Find** the p-value
5. **Conclude** in context

---

### P-Value Decision Rules

| If p-value | Decision |
|-----------|----------|
| $\\\\leq \\\\alpha$ | Reject $H_0$ |
| $> \\\\alpha$ | Fail to reject $H_0$ |

### Example

Claim: $p = 0.5$. Sample: $\\\\hat{p} = 0.56$, $n = 200$.

$$z = \\\\frac{0.56 - 0.50}{\\\\sqrt{0.50 \\\\times 0.50 / 200}} = \\\\frac{0.06}{0.0354} = 1.70$$`
    },    {
      id: 'propinference-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'In a hypothesis test for a proportion, the standard error uses:',
            options: ['$\\\\hat{p}$', '$p_0$ from the null hypothesis', 'The sample size only', 'The confidence level'],
            correctAnswer: 1,
            explanation: 'For hypothesis tests, use the null hypothesis value $p_0$ in the SE formula.'
          },
          {
            question: 'A p-value of 0.03 with $\\\\alpha = 0.05$ means:',
            options: ['Fail to reject $H_0$', 'Reject $H_0$', 'Accept $H_0$', 'The test is inconclusive'],
            correctAnswer: 1,
            explanation: '$0.03 < 0.05$, so we reject $H_0$ at the $\\\\alpha = 0.05$ significance level.'
          },
          {
            question: 'The alternative hypothesis $H_a: p > 0.5$ calls for a:',
            options: ['Two-tailed test', 'Left-tailed test', 'Right-tailed test', 'No test needed'],
            correctAnswer: 2,
            explanation: '$p > p_0$ is a right-tailed (upper-tail) test.'
          }
        ]
      }
    },    {
      id: 'propinference-p3-input',
      type: 'input-boxes' as const,
      content: `
**Hypothesis Test** 🧮

$H_0: p = 0.30$, $H_a: p > 0.30$. $n = 150$, $\\\\hat{p} = 0.36$.

**1)** $SE = \\\\sqrt{0.30 \\\\times 0.70 / 150}$ = ? (round to 4 places)

**2)** $z = (0.36 - 0.30) / SE$ = ? (round to 2 places)

**3)** Is this a one-tailed or two-tailed test?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.0374', '1.60', 'one-tailed'],
        hint1: '$\\\\sqrt{0.21/150}$',
        hint2: '$0.06/0.0374$',
        hint3: '$H_a$ uses $>$',
        explanation: '1) $\\\\sqrt{0.0014} \\\\approx 0.0374$. 2) $0.06/0.0374 \\\\approx 1.60$. 3) One-tailed (right) because $H_a: p > 0.30$.'
      }
    }
  ]
};
