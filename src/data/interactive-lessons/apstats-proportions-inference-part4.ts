export const apStatsPropInfPart4Data = {
  topicSlug: 'proportions-inference-apstats',
  sections: [
    {
      id: 'propinference-p4-intro',
      type: 'text' as const,
      content: `# 📊 Two-Proportion Inference

**Part 4 of 7 — Comparing Two Proportions**

---

### Confidence Interval for $p_1 - p_2$

$$(\\\\hat{p}_1 - \\\\hat{p}_2) \\\\pm z^* \\\\sqrt{\\\\frac{\\\\hat{p}_1(1-\\\\hat{p}_1)}{n_1} + \\\\frac{\\\\hat{p}_2(1-\\\\hat{p}_2)}{n_2}}$$

### Hypothesis Test for $p_1 - p_2$

$H_0: p_1 = p_2$ (or $p_1 - p_2 = 0$)

Use the **pooled proportion:**
$$\\\\hat{p}_c = \\\\frac{x_1 + x_2}{n_1 + n_2}$$

$$z = \\\\frac{(\\\\hat{p}_1 - \\\\hat{p}_2) - 0}{\\\\sqrt{\\\\hat{p}_c(1-\\\\hat{p}_c)\\\\left(\\\\frac{1}{n_1} + \\\\frac{1}{n_2}\\\\right)}}$$

---

### Key Difference

- **CI:** Use individual $\\\\hat{p}_1$ and $\\\\hat{p}_2$ in the SE
- **Test:** Use the pooled $\\\\hat{p}_c$ (assuming $H_0: p_1 = p_2$ is true)`
    },    {
      id: 'propinference-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'When testing $H_0: p_1 = p_2$, you should use:',
            options: ['Individual sample proportions', 'The pooled proportion', 'The population proportions', 'The difference $\\\\hat{p}_1 - \\\\hat{p}_2$'],
            correctAnswer: 1,
            explanation: 'Under $H_0$, we assume $p_1 = p_2$, so we pool the data to get a single estimate $\\\\hat{p}_c$.'
          },
          {
            question: 'A 95% CI for $p_1 - p_2$ is $(-0.05, 0.12)$. Can we conclude the proportions differ?',
            options: ['Yes, because the interval is wide', 'No, because 0 is in the interval', 'Yes, because both endpoints are close to 0', 'No, because we need a larger sample'],
            correctAnswer: 1,
            explanation: 'Since 0 is included in the interval, we cannot conclude the proportions are significantly different.'
          },
          {
            question: 'The pooled proportion $\\\\hat{p}_c$ is calculated as:',
            options: ['$(\\\\hat{p}_1 + \\\\hat{p}_2)/2$', '$(x_1 + x_2)/(n_1 + n_2)$', '$\\\\hat{p}_1 \\\\times \\\\hat{p}_2$', '$(n_1\\\\hat{p}_1 + n_2\\\\hat{p}_2)/(n_1n_2)$'],
            correctAnswer: 1,
            explanation: 'Pool the raw counts: total successes over total sample size.'
          }
        ]
      }
    },    {
      id: 'propinference-p4-input',
      type: 'input-boxes' as const,
      content: `
**Two-Proportion Test** 🧮

Group 1: $x_1 = 45$, $n_1 = 100$. Group 2: $x_2 = 30$, $n_2 = 100$.

**1)** $\\\\hat{p}_1 = ?$

**2)** Pooled $\\\\hat{p}_c = (45 + 30)/(100 + 100) = ?$

**3)** $\\\\hat{p}_1 - \\\\hat{p}_2 = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.45', '0.375', '0.15'],
        hint1: '$45/100$',
        hint2: '$75/200$',
        hint3: '$0.45 - 0.30$',
        explanation: '1) $\\\\hat{p}_1 = 45/100 = 0.45$. 2) $\\\\hat{p}_c = 75/200 = 0.375$. 3) $0.45 - 0.30 = 0.15$.'
      }
    }
  ]
};
