export const apStatsDiscreteRVPart3Data = {
  topicSlug: 'discrete-random-variables-apstats',
  sections: [
    {
      id: 'discreterandomvariables-p3-intro',
      type: 'text' as const,
      content: `# 📊 Variance & Standard Deviation of a Random Variable

**Part 3 of 7 — Spread of a Distribution**

---

### Variance

$$\\\\text{Var}(X) = \\\\sigma_X^2 = \\\\sum (x_i - \\\\mu_X)^2 \\\\cdot P(x_i)$$

### Standard Deviation

$$\\\\sigma_X = \\\\sqrt{\\\\text{Var}(X)}$$

---

### Worked Example

Using our distribution: $\\\\mu_X = 1.7$

| $x$ | $x - \\\\mu$ | $(x - \\\\mu)^2$ | $P(x)$ | $(x-\\\\mu)^2 \\\\cdot P(x)$ |
|-----|-------------|-----------------|---------|---------------------------|
| 0 | -1.7 | 2.89 | 0.1 | 0.289 |
| 1 | -0.7 | 0.49 | 0.3 | 0.147 |
| 2 | 0.3 | 0.09 | 0.4 | 0.036 |
| 3 | 1.3 | 1.69 | 0.2 | 0.338 |

$$\\\\sigma^2 = 0.289 + 0.147 + 0.036 + 0.338 = 0.81$$
$$\\\\sigma = \\\\sqrt{0.81} = 0.9$$

> 🔑 Standard deviation measures the **typical distance** of outcomes from the mean.`
    },    {
      id: 'discreterandomvariables-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Variance is calculated by:',
            options: ['$\\\\sum (x - \\\\mu)^2 \\\\cdot P(x)$', '$\\\\sum x \\\\cdot P(x)$', '$\\\\sum |x - \\\\mu|$', '$\\\\sum P(x)$'],
            correctAnswer: 0,
            explanation: 'Variance = weighted average of squared deviations from the mean.'
          },
          {
            question: 'If $\\\\sigma^2 = 4$, then $\\\\sigma$ equals:',
            options: ['2', '4', '16', '0.5'],
            correctAnswer: 0,
            explanation: '$\\\\sigma = \\\\sqrt{4} = 2$.'
          },
          {
            question: 'A larger standard deviation means:',
            options: ['Outcomes are closer to the mean', 'Outcomes are more spread out', 'The mean is larger', 'The distribution is symmetric'],
            correctAnswer: 1,
            explanation: 'Larger $\\\\sigma$ = more variability in outcomes.'
          }
        ]
      }
    },    {
      id: 'discreterandomvariables-p3-input',
      type: 'input-boxes' as const,
      content: `
**Variance Drill** 🧮

A random variable $X$ has: $\\\\mu = 3$, and outcomes $X = 1, 3, 5$ each with probability $1/3$.

**1)** $(1 - 3)^2 \\\\cdot (1/3) = ?$ (first term of variance calculation)

**2)** $(3 - 3)^2 \\\\cdot (1/3) = ?$

**3)** $\\\\sigma^2 = ?$ (total variance, as a fraction like a/b)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4/3', '0', '8/3'],
        hint1: '$(1-3)^2 = 4$, times $1/3$',
        hint2: '$(3-3)^2 = 0$',
        hint3: 'Add all three terms: $4/3 + 0 + 4/3$',
        explanation: '1) $4 \\\\cdot 1/3 = 4/3$. 2) $0 \\\\cdot 1/3 = 0$. 3) $4/3 + 0 + 4/3 = 8/3 \\\\approx 2.67$.'
      }
    }
  ]
};
