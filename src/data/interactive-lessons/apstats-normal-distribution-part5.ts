export const apStatsNormalDistPart5Data = {
  topicSlug: 'normal-distribution-apstats',
  sections: [
    {
      id: 'apstats-normaldistribution-p5-intro',
      type: 'text' as const,
      content: `# ➕ Combining Normal Random Variables

**Part 5 of 7 — Sums, Differences, and Linear Transformations**

---

### Linear Transformations

If $X \\sim N(\\mu, \\sigma)$ and $Y = a + bX$, then:

$$Y \\sim N(a + b\\mu, |b|\\sigma)$$

**Example:** Temperature in Celsius is $C \\sim N(20, 5)$. In Fahrenheit: $F = 32 + 1.8C$
$$F \\sim N(32 + 1.8(20),\; 1.8(5)) = N(68, 9)$$

---

### Sum of Independent Normal RVs

If $X \\sim N(\mu_X, \sigma_X)$ and $Y \\sim N(\mu_Y, \sigma_Y)$ are **independent**:

$$X + Y \\sim N(\mu_X + \mu_Y, \\sqrt{\sigma_X^2 + \sigma_Y^2})$$

$$X - Y \\sim N(\mu_X - \mu_Y, \\sqrt{\sigma_X^2 + \sigma_Y^2})$$

> ⚠️ **Variances add** for both sums AND differences. Standard deviations do NOT add directly.

**Example:** Coffee fill $X \\sim N(12, 0.3)$ oz, cream $Y \\sim N(1, 0.1)$ oz.
$$X + Y \\sim N(13, \\sqrt{0.09 + 0.01}) = N(13, \\sqrt{0.10}) \\approx N(13, 0.316)$$`
    },
    {
      id: 'apstats-normaldistribution-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Combining RVs** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $X \\sim N(100, 10)$ and $Y \\sim N(50, 8)$ are independent, $\\text{SD}(X-Y) =$',
            options: ['$2$', '$\\sqrt{164}$', '$18$', '$\\sqrt{36}$'],
            correctAnswer: 1,
            explanation: '$\\text{SD}(X-Y) = \\sqrt{10^2 + 8^2} = \\sqrt{100+64} = \\sqrt{164} \\approx 12.81$. Variances ADD even for differences.'
          },
          {
            question: 'Adding a constant $c$ to every value in a dataset changes:',
            options: ['The mean only', 'The standard deviation only', 'Both mean and SD', 'Neither mean nor SD'],
            correctAnswer: 0,
            explanation: 'Adding a constant shifts all values by $c$, changing the mean by $c$ but leaving spread (SD) unchanged.'
          }
        ]
      }
    },
    {
      id: 'apstats-normaldistribution-p5-input',
      type: 'input-boxes' as const,
      content: `
**Combining Normal Variables** 🧮

Package weights: $X \\sim N(50, 4)$ lbs. Packing material: $Y \\sim N(2, 0.5)$ lbs (independent).

**1)** Mean total weight $E(X+Y) = $?

**2)** Variance of total weight $\\text{Var}(X+Y) = \sigma_X^2 + \sigma_Y^2 = $?

**3)** SD of total weight = $\\sqrt{\\text{Var}(X+Y)}$, rounded to 2 decimal places.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['52', '16.25', '4.03'],
        hint1: '$E(X+Y) = 50 + 2 = 52$.',
        hint2: '$4^2 + 0.5^2 = 16 + 0.25 = 16.25$.',
        hint3: '$\\sqrt{16.25} \\approx 4.03$.',
        explanation: '1) 52 lbs. 2) 16.25 $lbs^{2}$. 3) 4.03 lbs.'
      }
    }
  ]
};
