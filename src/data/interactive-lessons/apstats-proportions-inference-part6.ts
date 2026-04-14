export const apStatsPropInfPart6Data = {
  topicSlug: 'proportions-inference-apstats',
  sections: [
    {
      id: 'propinference-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### AP FRQ Template for Inference

1. **State:** Name the procedure and define parameters
2. **Plan:** Check conditions (Random, Normal, Independent)
3. **Do:** Show calculations
4. **Conclude:** Interpret in context

---

### Common Mistakes to Avoid

- Using $\\\\hat{p}$ in the test statistic SE (should use $p_0$)
- Using $p_0$ in the CI SE (should use $\\\\hat{p}$)
- Saying “accept $H_0$” instead of “fail to reject $H_0$”
- Forgetting to check conditions
- Not interpreting in context`
    },    {
      id: 'propinference-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'In the AP “4-step process,” the correct order is:',
            options: ['Do, State, Plan, Conclude', 'State, Plan, Do, Conclude', 'Plan, Do, Conclude, State', 'State, Do, Plan, Conclude'],
            correctAnswer: 1,
            explanation: 'State → Plan → Do → Conclude. Remember this for every inference problem.'
          },
          {
            question: 'When checking the Normal condition for a CI, use:',
            options: ['$p_0$', '$\\\\hat{p}$', '$0.5$', 'Either $p_0$ or $\\\\hat{p}$'],
            correctAnswer: 1,
            explanation: 'For CIs, use $\\\\hat{p}$ to check $n\\\\hat{p} \\\\geq 10$ and $n(1-\\\\hat{p}) \\\\geq 10$.'
          },
          {
            question: 'You should NEVER say:',
            options: ['“Reject $H_0$”', '“Fail to reject $H_0$”', '“Accept $H_0$”', '“There is evidence against $H_0$”'],
            correctAnswer: 2,
            explanation: 'We never “accept” $H_0$ — we can only fail to reject it (absence of evidence is not evidence of absence).'
          }
        ]
      }
    },    {
      id: 'propinference-p6-input',
      type: 'input-boxes' as const,
      content: `
**AP Practice** 🧮

A poll finds 52% of 1000 voters favor a candidate. Test $H_0: p = 0.50$ vs. $H_a: p > 0.50$ at $\\\\alpha = 0.05$.

**1)** $z = (0.52 - 0.50)/\\\\sqrt{0.25/1000}$ = ? (round to 2 places)

**2)** p-value $\\\\approx P(Z > z) \\\\approx ?$ (round to 3 places)

**3)** Decision at $\\\\alpha = 0.05$? (reject/fail to reject)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.26', '0.104', 'fail to reject'],
        hint1: '$0.02/\\\\sqrt{0.00025} = 0.02/0.01581$',
        hint2: '$P(Z > 1.26) \\\\approx 1 - 0.8962$',
        hint3: 'Is $0.104 \\\\leq 0.05$?',
        explanation: '1) $z \\\\approx 1.26$. 2) $P(Z > 1.26) \\\\approx 0.104$. 3) Fail to reject $H_0$ ($0.104 > 0.05$).'
      }
    }
  ]
};
