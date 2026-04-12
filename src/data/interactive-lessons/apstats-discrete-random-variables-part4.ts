export const apStatsDiscreteRVPart4Data = {
  topicSlug: 'discrete-random-variables-apstats',
  sections: [
    {
      id: 'discreterandomvariables-p4-intro',
      type: 'text' as const,
      content: `# ⚖️ Transforming Random Variables

**Part 4 of 7 — Linear Transformations**

---

### Rules for $Y = a + bX$

| Property | Rule |
|----------|------|
| **Mean** | $\\\\mu_Y = a + b\\\\mu_X$ |
| **Variance** | $\\\\sigma_Y^2 = b^2 \\\\sigma_X^2$ |
| **Standard Deviation** | $\\\\sigma_Y = |b| \\\\sigma_X$ |

> 🔑 **Adding** a constant shifts the center but does NOT change spread. **Multiplying** by a constant scales both center and spread.

---

### Example: Temperature Conversion

If $X$ is temperature in Celsius with $\\\\mu_X = 20$ and $\\\\sigma_X = 5$:

$Y = 32 + 1.8X$ (Fahrenheit)

- $\\\\mu_Y = 32 + 1.8(20) = 68$°F
- $\\\\sigma_Y = 1.8(5) = 9$°F

The mean shifts AND scales; the standard deviation only scales (adding 32 has no effect on spread).`
    },    {
      id: 'discreterandomvariables-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'If $Y = 3X + 5$ and $\\\\mu_X = 10$, then $\\\\mu_Y$ equals:',
            options: ['15', '35', '30', '50'],
            correctAnswer: 1,
            explanation: '$\\\\mu_Y = 3(10) + 5 = 35$.'
          },
          {
            question: 'Adding a constant to every value of $X$:',
            options: ['Changes the mean and standard deviation', 'Changes only the mean', 'Changes only the standard deviation', 'Changes neither'],
            correctAnswer: 1,
            explanation: 'Adding shifts the center but not the spread.'
          },
          {
            question: 'If $\\\\sigma_X = 4$ and $Y = 2X + 1$, then $\\\\sigma_Y$ equals:',
            options: ['4', '5', '8', '9'],
            correctAnswer: 2,
            explanation: '$\\\\sigma_Y = |2| \\\\cdot 4 = 8$. The constant 1 has no effect on spread.'
          }
        ]
      }
    },    {
      id: 'discreterandomvariables-p4-input',
      type: 'input-boxes' as const,
      content: `
**Transformation Practice** 🧮

$X$ has $\\\\mu_X = 50$ and $\\\\sigma_X = 10$. Let $Y = 2X - 30$.

**1)** $\\\\mu_Y = ?$

**2)** $\\\\sigma_Y = ?$

**3)** $\\\\sigma_Y^2 = ?$ (variance of $Y$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['70', '20', '400'],
        hint1: '$\\\\mu_Y = 2(50) - 30$',
        hint2: '$\\\\sigma_Y = 2 \\\\cdot 10$',
        hint3: '$\\\\sigma_Y^2 = (20)^2$',
        explanation: '1) $2(50) - 30 = 70$. 2) $2(10) = 20$. 3) $20^2 = 400$.'
      }
    }
  ]
};
