export const apStatsDiscreteRVPart7Data = {
  topicSlug: 'discrete-random-variables-apstats',
  sections: [
    {
      id: 'discreterandomvariables-p7-intro',
      type: 'text' as const,
      content: `# 📝 Review & Applications

**Part 7 of 7 — Comprehensive Review**

---

### Key Formulas Summary

| Concept | Formula |
|---------|---------|
| Expected Value | $E(X) = \\\\sum x_i P(x_i)$ |
| Variance | $\\\\text{Var}(X) = \\\\sum(x_i - \\\\mu)^2 P(x_i)$ |
| Linear Transform Mean | $E(aX + b) = aE(X) + b$ |
| Linear Transform Var | $\\\\text{Var}(aX + b) = a^2 \\\\text{Var}(X)$ |
| Sum of Independent | $\\\\text{Var}(X \\\\pm Y) = \\\\text{Var}(X) + \\\\text{Var}(Y)$ |

### Common Mistakes on the AP Exam
- Adding standard deviations instead of variances
- Subtracting variances for $X - Y$
- Forgetting that $E(X)$ doesn’t have to be a possible value
- Confusing “expected value” with “most likely value”`
    },    {
      id: 'discreterandomvariables-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: '$\\\\text{Var}(3X) = ?$ if $\\\\text{Var}(X) = 10$',
            options: ['30', '90', '100', '3'],
            correctAnswer: 1,
            explanation: '$\\\\text{Var}(3X) = 9 \\\\cdot 10 = 90$.'
          },
          {
            question: 'For independent $X, Y$: $\\\\text{Var}(X - Y) = \\\\text{Var}(X) + \\\\text{Var}(Y)$ because:',
            options: ['Subtraction reduces uncertainty', 'Variability compounds regardless of direction', 'It’s a special case', 'Standard deviations cancel'],
            correctAnswer: 1,
            explanation: 'Whether adding or subtracting, both sources of variability contribute to total uncertainty.'
          },
          {
            question: 'The AP exam asks you to “interpret the expected value.” You should say:',
            options: ['The most common outcome is...', 'If repeated many times, the average would be approximately...', 'The probability of the mean is...', 'Half the values are above and half below...'],
            correctAnswer: 1,
            explanation: 'Expected value = long-run average. Always phrase it this way on the exam.'
          }
        ]
      }
    },    {
      id: 'discreterandomvariables-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

$X$: $\\\\mu = 20$, $\\\\sigma = 3$. $Y$: $\\\\mu = 15$, $\\\\sigma = 4$. Independent.

**1)** $E(2X + Y) = ?$

**2)** $\\\\text{Var}(2X + Y) = ?$

**3)** $\\\\sigma_{2X+Y} = ?$ (round to 2 decimals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['55', '52', '7.21'],
        hint1: '$2(20) + 15$',
        hint2: '$4(9) + 16 = 36 + 16$',
        hint3: '$\\\\sqrt{52}$',
        explanation: '1) $40 + 15 = 55$. 2) $4 \\\\cdot 9 + 16 = 52$. 3) $\\\\sqrt{52} \\\\approx 7.21$.'
      }
    }
  ]
};
