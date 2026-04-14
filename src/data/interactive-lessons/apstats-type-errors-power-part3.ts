export const apStatsErrorsPart3Data = {
  topicSlug: 'type-errors-power-apstats',
  sections: [
    {
      id: 'typeerrorspower-p3-intro',
      type: 'text' as const,
      content: `# 💪 Power of a Test

**Part 3 of 7 — Detecting Real Effects**

---

### What Is Power?

$$\\\\text{Power} = 1 - \\\\beta = P(\\\\text{reject } H_0 \\\\mid H_0 \\\\text{ is false})$$

Power is the probability of correctly detecting a real effect.

---

### Desirable Power

- Power of 0.80 (80%) or higher is considered adequate
- Power of 0.90 (90%) is preferred in many studies

### What Affects Power?

| Factor | Effect on Power |
|--------|----------------|
| Increase $n$ | Power increases |
| Increase $\\\\alpha$ | Power increases |
| Larger true effect | Power increases |
| Decrease $\\\\sigma$ | Power increases |
| One-tailed vs two-tailed | One-tailed has more power |

### Visual Interpretation

Power relates to the overlap between the null distribution and the true distribution. Less overlap → more power.`
    },    {
      id: 'typeerrorspower-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Power equals:',
            options: ['$\\\\alpha$', '$\\\\beta$', '$1 - \\\\beta$', '$1 - \\\\alpha$'],
            correctAnswer: 2,
            explanation: 'Power = $1 - \\\\beta$ = probability of correctly rejecting a false $H_0$.'
          },
          {
            question: 'A test with power 0.85 has:',
            options: ['85% chance of a Type I error', '15% chance of failing to detect a real effect', '85% chance of accepting $H_0$', '15% chance of rejecting $H_0$'],
            correctAnswer: 1,
            explanation: 'Power = 0.85 means $\\\\beta = 0.15$ — 15% chance of a Type II error.'
          },
          {
            question: 'Which does NOT increase power?',
            options: ['Larger sample size', 'Larger significance level', 'Larger population standard deviation', 'Larger true effect size'],
            correctAnswer: 2,
            explanation: 'Larger $\\\\sigma$ makes it harder to detect effects — power DECREASES.'
          }
        ]
      }
    },    {
      id: 'typeerrorspower-p3-input',
      type: 'input-boxes' as const,
      content: `
**Power Calculations** 🧮

A test has $\\\\beta = 0.25$.

**1)** What is the power of this test?

**2)** Is this power considered adequate by the 80% standard? (yes/no)

**3)** Name one way to increase power without changing $\\\\alpha$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.75', 'no', 'increase sample size'],
        hint1: 'Power = $1 - \\\\beta$',
        hint2: 'Is $0.75 \\\\geq 0.80$?',
        hint3: 'More data means...',
        explanation: '1) Power = $1 - 0.25 = 0.75$. 2) No, $0.75 < 0.80$. 3) Increase sample size (or reduce $\\\\sigma$, or increase effect size).'
      }
    }
  ]
};
