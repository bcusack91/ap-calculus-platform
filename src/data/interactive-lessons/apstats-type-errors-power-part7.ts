export const apStatsErrorsPart7Data = {
  topicSlug: 'type-errors-power-apstats',
  sections: [
    {
      id: 'typeerrorspower-p7-intro',
      type: 'text' as const,
      content: `# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Complete Summary

| Concept | Formula/Value |
|---------|--------------|
| P(Type I) | $\\alpha$ |
| P(Type II) | $\\beta$ |
| Power | $1 - \\beta$ |
| $\\alpha \\downarrow$ | $\\beta \\uparrow$, Power $\\downarrow$ |
| $n \\uparrow$ | $\\beta \\downarrow$, Power $\\uparrow$ |
| Effect $\\uparrow$ | $\\beta \\downarrow$, Power $\\uparrow$ |
| $\\sigma \\downarrow$ | $\\beta \\downarrow$, Power $\\uparrow$ |

### AP Exam Checklist

- [ ] Define both error types in context
- [ ] State consequences of each error
- [ ] Identify which error is more serious
- [ ] Know factors that affect power
- [ ] Understand the $\\alpha$/$\\beta$ tradeoff`
    },    {
      id: 'typeerrorspower-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Power = 0.90 means $\\beta = $:',
            options: ['0.90', '0.10', '0.05', '0.01'],
            correctAnswer: 1,
            explanation: '$\\beta = 1 - \\text{Power} = 1 - 0.90 = 0.10$.'
          },
          {
            question: 'Which change lowers $\\beta$ without changing $\\alpha$?',
            options: ['Lowering the significance level', 'Taking a larger sample', 'Raising the significance level', 'Taking a smaller random sample'],
            correctAnswer: 1,
            explanation: 'A larger sample shrinks the SE and raises power, lowering $\\beta$, while $\\alpha$ stays whatever the researcher set. Changing the significance level changes $\\alpha$ itself, and a smaller sample raises $\\beta$.'
          },
          {
            question: 'Increasing sample size from 50 to 200 will:',
            options: ['Only decrease $\\alpha$', 'Only decrease $\\beta$', 'Decrease both $\\alpha$ and $\\beta$', 'Decrease $\\beta$ but not change $\\alpha$'],
            correctAnswer: 3,
            explanation: '$\\alpha$ is set by the researcher. Increasing $n$ decreases $\\beta$ (increases power) but $\\alpha$ stays fixed.'
          }
        ]
      }
    },    {
      id: 'typeerrorspower-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

**1)** $\\alpha = 0.05$, Power = 0.80. What is $\\beta$?

**2)** True or False: Increasing $n$ always increases $\\alpha$.

**3)** A test with $\\alpha = 0.05$ incorrectly rejects $H_0$ about ___% of the time when $H_0$ is true.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.20', 'false', '5'],
        hint1: '$\\beta = 1 - \\text{Power}$',
        hint2: '$\\alpha$ is chosen by the researcher',
        hint3: '$\\alpha$ as a percentage',
        explanation: '1) $\\beta = 1 - 0.80 = 0.20$. 2) False — $\\alpha$ is fixed by the researcher, not the sample size. 3) 5% of the time.'
      }
    }
  ]
};
