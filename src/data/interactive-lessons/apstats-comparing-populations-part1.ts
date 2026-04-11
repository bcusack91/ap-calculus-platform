export const apStatsComparingPart1Data = {
  topicSlug: 'comparing-populations-apstats',
  sections: [
    {
      id: 'apstats-comparingpopulations-p1-intro',
      type: 'text' as const,
      content: `# ⚖️ Comparing Two Populations

**Part 1 of 7 — Two-Sample Z-Test for Proportions**

---

### When to Compare Two Proportions

Use when you have two independent groups and want to test whether their population proportions differ.

**Example:** Is the proportion of smartphone users higher among teens than adults?

---

### Hypotheses

$$H_0: p_1 - p_2 = 0 \\quad (\\text{no difference})$$
$$H_a: p_1 - p_2 \\neq 0 \\quad (\\text{or } > 0 \\text{ or } < 0)$$

---

### Test Statistic

$$z = \\frac{(\\hat{p}_1 - \\hat{p}_2) - 0}{\\sqrt{\\hat{p}(1-\\hat{p})\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}$$

where $\\hat{p} = \\frac{x_1 + x_2}{n_1 + n_2}$ is the **pooled proportion**.

---

### Conditions

1. **Random** samples from both populations
2. **Independent** groups (and $n < 10\\%$ of population for each)
3. **Large counts**: $n_1\\hat{p}, n_1(1-\\hat{p}), n_2\\hat{p}, n_2(1-\\hat{p}) \\geq 10$

> 🔑 Under $H_0$, we assume $p_1 = p_2$, so we use the **pooled proportion** $\\hat{p}$ for the standard error.`
    },
    {
      id: 'apstats-comparingpopulations-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Two-Proportion Test** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why do we use a pooled proportion $\\hat{p}$ in a two-proportion z-test?',
            options: ['Because samples must be equal size', 'Because we assume $p_1 = p_2$ under $H_0$', 'Because it makes calculations easier', 'Because the populations are the same'],
            correctAnswer: 1,
            explanation: 'Under $H_0$, we assume the two population proportions are equal, so we pool the data to estimate the common proportion.'
          },
          {
            question: 'Group 1: 40/100 successes. Group 2: 60/200 successes. The pooled $\\hat{p} =$',
            options: ['$0.50$', '$0.33$', '$0.40$', '$0.30$'],
            correctAnswer: 1,
            explanation: '$\\hat{p} = (40 + 60)/(100 + 200) = 100/300 = 0.333$.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p1-input',
      type: 'input-boxes' as const,
      content: `
**Two-Proportion Calculations** 🧮

Treatment group: 45 successes out of 150. Control group: 30 successes out of 150.

**1)** $\\hat{p}_1 = 45/150 = $? (Express as a decimal)

**2)** $\\hat{p}_2 = 30/150 = $?

**3)** Pooled $\\hat{p} = (45+30)/(150+150) = $?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.30', '0.20', '0.25'],
        hint1: '$45/150 = 0.30$.',
        hint2: '$30/150 = 0.20$.',
        hint3: '$75/300 = 0.25$.',
        explanation: '1) $\\hat{p}_1 = 0.30$. 2) $\\hat{p}_2 = 0.20$. 3) Pooled $\\hat{p} = 0.25$.'
      }
    }
  ]
};
