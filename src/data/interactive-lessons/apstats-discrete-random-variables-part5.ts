export const apStatsDiscreteRVPart5Data = {
  topicSlug: 'discrete-random-variables-apstats',
  sections: [
    {
      id: 'discreterandomvariables-p5-intro',
      type: 'text' as const,
      content: `# 🔄 Combining Independent Random Variables

**Part 5 of 7 — Sums & Differences**

---

### Rules for Independent Random Variables

If $X$ and $Y$ are **independent**:

| Combination | Mean | Variance |
|------------|------|----------|
| $X + Y$ | $\\\\mu_X + \\\\mu_Y$ | $\\\\sigma_X^2 + \\\\sigma_Y^2$ |
| $X - Y$ | $\\\\mu_X - \\\\mu_Y$ | $\\\\sigma_X^2 + \\\\sigma_Y^2$ |

> ⚠️ **Critical:** Variances always **ADD**, even for differences! Standard deviations do NOT simply add or subtract.

---

### Why Variances Add for Differences

Think of it this way: whether you add or subtract, the **uncertainty** (variability) in each variable contributes to the total uncertainty. Subtracting doesn’t reduce uncertainty — it compounds it.

---

### Example

$X$: exam score, $\\\\mu_X = 75$, $\\\\sigma_X = 8$
$Y$: quiz score, $\\\\mu_Y = 85$, $\\\\sigma_Y = 6$

$X + Y$: $\\\\mu = 160$, $\\\\sigma^2 = 64 + 36 = 100$, $\\\\sigma = 10$
$X - Y$: $\\\\mu = -10$, $\\\\sigma^2 = 64 + 36 = 100$, $\\\\sigma = 10$`
    },    {
      id: 'discreterandomvariables-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'When finding $X - Y$ for independent variables, the variances are:',
            options: ['Subtracted', 'Added', 'Multiplied', 'Unchanged'],
            correctAnswer: 1,
            explanation: 'Variances always ADD for independent variables, regardless of + or -.'
          },
          {
            question: 'If $\\\\sigma_X = 3$ and $\\\\sigma_Y = 4$ (independent), then $\\\\sigma_{X+Y}$ equals:',
            options: ['5', '7', '1', '25'],
            correctAnswer: 0,
            explanation: '$\\\\sigma_{X+Y} = \\\\sqrt{9 + 16} = \\\\sqrt{25} = 5$.'
          },
          {
            question: '$E(X + Y) = E(X) + E(Y)$ is true:',
            options: ['Only for independent variables', 'Always', 'Only when variances are equal', 'Never'],
            correctAnswer: 1,
            explanation: 'Expected values always add, with or without independence.'
          }
        ]
      }
    },    {
      id: 'discreterandomvariables-p5-input',
      type: 'input-boxes' as const,
      content: `
**Combining Variables** 🧮

$X$: $\\\\mu_X = 100$, $\\\\sigma_X = 12$. $Y$: $\\\\mu_Y = 80$, $\\\\sigma_Y = 5$. Independent.

**1)** $E(X + Y) = ?$

**2)** $\\\\text{Var}(X - Y) = ?$

**3)** $\\\\sigma_{X+Y} = ?$ (round to 1 decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['180', '169', '13.0'],
        hint1: '$100 + 80$',
        hint2: '$12^2 + 5^2 = 144 + 25$',
        hint3: '$\\\\sqrt{169}$',
        explanation: '1) $100 + 80 = 180$. 2) $144 + 25 = 169$. 3) $\\\\sqrt{169} = 13.0$.'
      }
    }
  ]
};
