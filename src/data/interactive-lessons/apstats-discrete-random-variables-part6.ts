export const apStatsDiscreteRVPart6Data = {
  topicSlug: 'discrete-random-variables-apstats',
  sections: [
    {
      id: 'discreterandomvariables-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Problems**

---

### Strategy for Random Variable Problems

1. **Identify** the random variable and its distribution
2. **Calculate** $E(X)$ using $\\\\sum x \\\\cdot P(x)$
3. **Apply** transformation rules if $Y = a + bX$
4. **Combine** using variance addition for independent variables
5. **Interpret** in context for full AP credit

---

### AP Exam Tip

When asked to **interpret** expected value:
“If [process] were repeated many times, the average [variable] would be approximately [value].”

When asked to **interpret** standard deviation:
“The [variable] typically varies by about [value] from the mean of [mean].”`
    },    {
      id: 'discreterandomvariables-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A fair die costs \\$2 to roll. You win $X$ dollars equal to 3 times the face. $E(\\\\text{profit}) = ?$',
            options: ['$8.50', '$10.50', '$3.50', '$5.50'],
            correctAnswer: 0,
            explanation: '$E(X) = 3 \\\\cdot 3.5 = 10.50$. Profit = \\$10.50 - \\$2 = \\$8.50.'
          },
          {
            question: 'Two independent measurements have $\\\\sigma_1 = 3$ and $\\\\sigma_2 = 4$. The $\\\\sigma$ of their difference is:',
            options: ['1', '5', '7', '25'],
            correctAnswer: 1,
            explanation: '$\\\\sigma = \\\\sqrt{9 + 16} = 5$. Variances add even for differences.'
          },
          {
            question: '$X$ has $\\\\mu = 10$, $\\\\sigma = 2$. For $Y = 5X - 3$: $\\\\sigma_Y = ?$',
            options: ['7', '10', '13', '50'],
            correctAnswer: 1,
            explanation: '$\\\\sigma_Y = 5 \\\\cdot 2 = 10$. Subtracting 3 does not affect spread.'
          }
        ]
      }
    },    {
      id: 'discreterandomvariables-p6-input',
      type: 'input-boxes' as const,
      content: `
**Insurance Problem** 🧮

An insurance company charges \\$300/year. Claims: \\$0 (prob 0.9), \\$1000 (prob 0.08), \\$5000 (prob 0.02).

**1)** Expected claim per customer?

**2)** Expected profit per customer?

**3)** Standard deviation of claims? (round to nearest dollar)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['180', '120', '693'],
        hint1: '$0(0.9) + 1000(0.08) + 5000(0.02)$',
        hint2: '$300 - E(\\\\text{claim})$',
        hint3: '$\\\\sqrt{\\\\sum(x - 180)^2 \\\\cdot P(x)}$',
        explanation: '1) $0 + 80 + 100 = 180$. 2) $300 - 180 = 120$. 3) $\\\\sqrt{(180)^2(0.9) + (820)^2(0.08) + (4820)^2(0.02)} \\\\approx 693$.'
      }
    }
  ]
};
