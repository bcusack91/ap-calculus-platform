export const apStatsErrorsPart2Data = {
  topicSlug: 'type-errors-power-apstats',
  sections: [
    {
      id: 'typeerrorspower-p2-intro',
      type: 'text' as const,
      content: `# 📊 Significance Level and Errors

**Part 2 of 7 — The Tradeoff**

---

### The $\\\\alpha$/$\\\\beta$ Tradeoff

Decreasing $\\\\alpha$ (harder to reject $H_0$) → **increases** $\\\\beta$ (more likely to miss real effects).

$$\\\\alpha \\\\downarrow \\\\implies \\\\beta \\\\uparrow$$

You can’t minimize both simultaneously with a fixed sample size.

---

### Choosing $\\\\alpha$

| Situation | Typical $\\\\alpha$ | Why |
|-----------|-----------------|-----|
| Standard | 0.05 | Balance of Type I and II errors |
| Medical safety | 0.01 or 0.001 | Type I error is costly (false approval) |
| Exploratory | 0.10 | Want to detect more effects |

### Consequences Matter

Choose $\\\\alpha$ by considering which error is worse:
- If Type I is more serious → use smaller $\\\\alpha$
- If Type II is more serious → use larger $\\\\alpha$`
    },    {
      id: 'typeerrorspower-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Decreasing $\\\\alpha$ from 0.05 to 0.01:',
            options: ['Decreases the chance of Type II error', 'Increases the chance of Type II error', 'Has no effect on Type II error', 'Eliminates all errors'],
            correctAnswer: 1,
            explanation: 'Lower $\\\\alpha$ makes it harder to reject $H_0$, increasing the chance of missing a true effect (higher $\\\\beta$).'
          },
          {
            question: 'A drug company testing a new medication should use $\\\\alpha = 0.01$ because:',
            options: ['They want to find more effects', 'A Type I error (approving a bad drug) is very serious', 'A Type II error is more costly', 'It reduces the sample size needed'],
            correctAnswer: 1,
            explanation: 'Approving a harmful drug (Type I) is dangerous. A low $\\\\alpha$ provides stronger proof before approval.'
          },
          {
            question: 'The only way to lower BOTH $\\\\alpha$ and $\\\\beta$ is to:',
            options: ['Change the significance level', 'Increase the sample size', 'Use a one-tailed test', 'Change the alternative hypothesis'],
            correctAnswer: 1,
            explanation: 'Larger $n$ gives more power, allowing you to decrease both error probabilities.'
          }
        ]
      }
    },    {
      id: 'typeerrorspower-p2-input',
      type: 'input-boxes' as const,
      content: `
**Error Tradeoff** 🧮

**1)** If $\\\\alpha = 0.05$, what is the probability of a Type I error?

**2)** Lowering $\\\\alpha$ to 0.01 makes $\\\\beta$ go ___ (up/down).

**3)** What must increase to reduce BOTH types of errors simultaneously?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.05', 'up', 'sample size'],
        hint1: '$\\\\alpha$ IS the Type I probability',
        hint2: 'Harder to reject $H_0$ means missing more true effects',
        hint3: 'More data = more power',
        explanation: '1) $\\\\alpha = 0.05 = P(\\\\text{Type I})$. 2) $\\\\beta$ goes up. 3) Sample size $n$ must increase.'
      }
    }
  ]
};
