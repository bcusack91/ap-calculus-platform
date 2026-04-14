export const apStatsPropInfPart1Data = {
  topicSlug: 'proportions-inference-apstats',
  sections: [
    {
      id: 'propinference-p1-intro',
      type: 'text' as const,
      content: `# 📊 Inference for Proportions

**Part 1 of 7 — Inference for Proportions Basics**

---

### The Setting

We have a sample proportion $\\\\hat{p}$ and want to make inferences about the population proportion $p$.

### Conditions for Inference

1. **Random:** Data from a random sample or experiment
2. **Normal:** $np \\\\geq 10$ and $n(1-p) \\\\geq 10$ (use $\\\\hat{p}$ for CIs)
3. **Independent:** Sample $< 10\\\\%$ of population (10% condition)

---

### Standard Error

$$SE(\\\\hat{p}) = \\\\sqrt{\\\\frac{\\\\hat{p}(1-\\\\hat{p})}{n}}$$

### Key Distinction

| Purpose | Formula for SD |
|---------|---------------|
| **Confidence interval** | $SE = \\\\sqrt{\\\\hat{p}(1-\\\\hat{p})/n}$ |
| **Hypothesis test** | $SE = \\\\sqrt{p_0(1-p_0)/n}$ (use $H_0$ value) |`
    },    {
      id: 'propinference-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'The $10\\\\%$ condition ensures:',
            options: ['The sample is large enough', 'Observations are approximately independent', 'The distribution is Normal', '$p > 0.10$'],
            correctAnswer: 1,
            explanation: 'Sampling without replacement from $< 10\\\\%$ of the population keeps observations approximately independent.'
          },
          {
            question: 'For a confidence interval, the standard error uses:',
            options: ['The hypothesized $p_0$', 'The sample proportion $\\\\hat{p}$', 'The population proportion $p$', '$0.5$'],
            correctAnswer: 1,
            explanation: 'CIs use $\\\\hat{p}$ because we don’t know $p$ — that’s what we’re estimating.'
          },
          {
            question: 'The Normal condition for proportions requires:',
            options: ['$n \\\\geq 30$', '$np \\\\geq 10$ and $n(1-p) \\\\geq 10$', '$\\\\hat{p} = 0.5$', '$\\\\sigma$ is known'],
            correctAnswer: 1,
            explanation: 'We need at least 10 successes and 10 failures expected.'
          }
        ]
      }
    },    {
      id: 'propinference-p1-input',
      type: 'input-boxes' as const,
      content: `
**Conditions Check** 🧮

In a random sample of 200 voters, 120 support a candidate. $\\\\hat{p} = 0.60$.

**1)** $n\\\\hat{p} = ?$

**2)** $n(1-\\\\hat{p}) = ?$

**3)** Is the Normal condition met? (yes/no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['120', '80', 'yes'],
        hint1: '$200 \\\\times 0.60$',
        hint2: '$200 \\\\times 0.40$',
        hint3: 'Both $\\\\geq 10$?',
        explanation: '1) $200 \\\\times 0.60 = 120$. 2) $200 \\\\times 0.40 = 80$. 3) Yes — both $120 \\\\geq 10$ and $80 \\\\geq 10$.'
      }
    }
  ]
};
