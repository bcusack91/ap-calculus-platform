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

We have a sample proportion $\\hat{p}$ and want to make inferences about the population proportion $p$.

### Conditions for Inference

1. **Random:** Data from a random sample or experiment
2. **Normal:** $np \\geq 10$ and $n(1-p) \\geq 10$ (use $\\hat{p}$ for CIs)
3. **Independent:** Sample $< 10\\%$ of population (10% condition)

---

### Standard Error

$$SE(\\hat{p}) = \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$

### Key Distinction

| Purpose | Formula for SD |
|---------|---------------|
| **Confidence interval** | $SE = \\sqrt{\\hat{p}(1-\\hat{p})/n}$ |
| **Hypothesis test** | $SE = \\sqrt{p_0(1-p_0)/n}$ (use $H_0$ value) |`
    },    {
      id: 'propinference-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The $10\\%$ condition ensures:',
            options: ['The sample size is large enough for normality', 'Observations are approximately independent', 'The sampling distribution is approximately normal', 'At least 10% of the population is sampled'],
            correctAnswer: 1,
            explanation: 'Sampling without replacement from no more than 10% of the population keeps observations approximately independent. Normality is the job of the large-counts condition, and sampling MORE than 10% is exactly what the condition rules out.'
          },
          {
            question: 'For a confidence interval, the standard error uses:',
            options: ['The null value $p_0$ from $H_0$', 'The statistic $\\hat{p}$', 'The population proportion $p$', 'The value 0.5 in every case'],
            correctAnswer: 1,
            explanation: 'A confidence interval uses $\\hat{p}$ because $p$ is unknown (it is what we are estimating) and there is no null value. 0.5 is used only for planning a sample size when no estimate exists.'
          },
          {
            question: 'The Normal condition for proportions requires:',
            options: ['$n \\geq 30$ observations', '$np \\geq 10$ and $n(1-p) \\geq 10$', '$np \\geq 5$ or $n(1-p) \\geq 5$', '$\\sigma$ is known'],
            correctAnswer: 1,
            explanation: 'We need at least 10 expected successes AND 10 expected failures. $n \\geq 30$ is the guideline for means, and $\\sigma$ plays no role for proportions.'
          }
        ]
      }
    },    {
      id: 'propinference-p1-input',
      type: 'input-boxes' as const,
      content: `
**Conditions Check** 🧮

In a random sample of 200 voters, 120 support a candidate. $\\hat{p} = 0.60$.

**1)** $n\\hat{p} = ?$

**2)** $n(1-\\hat{p}) = ?$

**3)** Is the Normal condition met? (yes/no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['120', '80', 'yes'],
        hint1: '$200 \\times 0.60$',
        hint2: '$200 \\times 0.40$',
        hint3: 'Both $\\geq 10$?',
        explanation: '1) $200 \\times 0.60 = 120$. 2) $200 \\times 0.40 = 80$. 3) Yes — both $120 \\geq 10$ and $80 \\geq 10$.'
      }
    }
  ]
};
