export const chemNernstEquationConcentrationPart2Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne2-intro',
      type: 'text' as const,
      content: `
# 🔢 Simplified Nernst at 25°C

**Part 2 of 7 — E = E° − (0.0592/n) log Q**

At 25°C (298 K), the Nernst equation simplifies to a convenient form using base-10 logarithms. This is the version most commonly used on the AP exam.
      `
    },
    {
      id: 'ne2-simplification',
      type: 'text' as const,
      content: `
## The Simplified Form

Starting from: $E = E° - \\frac{RT}{nF}\\ln Q$

At $T = 298$ K:

$$\\frac{RT}{F} = \\frac{(8.314)(298)}{96{,}485} = 0.02569 \\text{ V}$$

Converting $\\ln$ to $\\log$: $\\ln Q = 2.303 \\log Q$

$$E = E° - \\frac{(0.02569)(2.303)}{n}\\log Q$$

$$\\boxed{E = E° - \\frac{0.0592}{n}\\log Q} \\quad \\text{(at 25°C)}$$

### Why This Form Is Useful

- $\\log$ (base 10) is easier to compute mentally than $\\ln$
- The constant $0.0592$ is easy to remember
- Most AP problems are at 25°C

### Example

> **Problem:** For a 2-electron cell with $E° = 1.10$ V and $Q = 100$:

**Solution:**

$$E = 1.10 - \\frac{0.0592}{2}\\log(100) = 1.10 - (0.0296)(2) = 1.10 - 0.059 = 1.04 \\text{ V}$$
      `
    },
    {
      id: 'ne2-applications',
      type: 'text' as const,
      content: `
## Applications of the Simplified Nernst

### Effect of 10-Fold Concentration Change

For each 10-fold change in $Q$:

$$\\Delta E = \\frac{0.0592}{n} \\cdot 1 = \\frac{0.0592}{n} \\text{ V per decade}$$

For a 2-electron process: each 10× change in $Q$ shifts $E$ by $0.0296$ V

### Common Q Expressions

Remember: solids and pure liquids are excluded from Q!

| Reaction Type | $Q$ Expression |
|--------------|---------------|
| $\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$ | $Q = [\\text{Zn}^{2+}]/[\\text{Cu}^{2+}]$ |
| $\\text{2Ag}^+ + \\text{Cu} \\rightarrow 2\\text{Ag} + \\text{Cu}^{2+}$ | $Q = [\\text{Cu}^{2+}]/[\\text{Ag}^+]^2$ |
| $\\text{Fe}^{2+} + \\text{Ag}^+ \\rightarrow \\text{Fe}^{3+} + \\text{Ag}$ | $Q = [\\text{Fe}^{3+}]/([\\text{Fe}^{2+}][\\text{Ag}^+])$ |
      `
    },
    {
      id: 'ne2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Simplified Nernst Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The constant 0.0592 V in the simplified Nernst equation applies at:',
            options: [
              'Any temperature',
              '0°C only',
              '25°C (298 K) only',
              '100°C only'
            ],
            correctAnswer: 2,
            explanation: '0.0592 V comes from $RT/F \\times 2.303$ evaluated at $T = 298$ K. At other temperatures, you must use the full Nernst equation with the actual $T$.'
          },
          {
            question: 'For a 1-electron cell (n = 1), increasing Q by a factor of 10 changes E by:',
            options: [
              '+0.0592 V',
              '−0.0592 V',
              '−0.0296 V',
              '+0.0296 V'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta E = -0.0592/n \\times \\log(10) = -0.0592/1 \\times 1 = -0.0592$ V. Increasing Q decreases E.'
          },
          {
            question: 'If Q = 10⁶ for a 2-electron cell with E° = 1.00 V at 25°C, E equals:',
            options: [
              '0.822 V',
              '1.178 V',
              '0.644 V',
              '1.000 V'
            ],
            correctAnswer: 0,
            explanation: '$E = 1.00 - (0.0592/2)\\log(10^6) = 1.00 - (0.0296)(6) = 1.00 - 0.178 = 0.822$ V.'
          }
        ]
      }
    },
    {
      id: 'ne2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Simplified Nernst Calculations** 🧮

All at 25°C. Use $E = E° - (0.0592/n)\\log Q$.

**1)** $E° = 0.46$ V, $n = 2$, $Q = 0.01$. Calculate $E$. (to 3 significant figures)

**2)** $E° = 1.10$ V, $n = 2$, $Q = 10^4$. Calculate $E$. (to 3 significant figures)

**3)** $E° = 0.80$ V, $n = 1$, $Q = 10^{-3}$. Calculate $E$. (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.519', '0.982', '0.978'],
        hint1: '$E = 0.46 - (0.0296)\\log(0.01) = 0.46 - (0.0296)(-2)$',
        hint2: '$E = 1.10 - (0.0296)(4)$',
        hint3: '$E = 0.80 - (0.0592)(-3)$',
        explanation: '1) $E = 0.46 - (0.0296)(-2) = 0.46 + 0.059 = 0.519$ V. 2) $E = 1.10 - (0.0296)(4) = 1.10 - 0.118 = 0.982$ V. 3) $E = 0.80 - (0.0592)(-3) = 0.80 + 0.178 = 0.978$ V.'
      }
    },
    {
      id: 'ne2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Nernst at 25°C Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The simplified Nernst equation uses log (base 10) instead of ln because',
            options: ['it is more accurate', 'the conversion factor 2.303 is absorbed into 0.0592', 'base 10 applies to all temperatures', 'AP Chemistry requires it']
          },
          {
            label: 'For a 2-electron process, each 10× increase in Q decreases E by',
            options: ['0.0592 V', '0.0296 V', '0.1184 V', '0.0148 V']
          },
          {
            label: 'If Q < 1 (excess reactants), then E is',
            options: ['less than E°', 'equal to E°', 'greater than E°', 'zero']
          },
          {
            label: 'Solids and pure liquids are excluded from Q because',
            options: ['they have zero concentration', 'their activities are defined as 1', 'they don\'t participate', 'they are at standard state']
          }
        ],
        correctAnswers: ['the conversion factor 2.303 is absorbed into 0.0592', '0.0296 V', 'greater than E°', 'their activities are defined as 1'],
        hint1: '$0.0592 = 0.02569 \\times 2.303$.',
        hint2: '$0.0592/2 = 0.0296$ V per decade for $n = 2$.',
        hint3: '$Q < 1 \\Rightarrow \\log Q < 0$, so the subtracted term is negative → E increases.',
        explanation: '0.0592 V combines RT/F and the ln-to-log conversion. For n = 2: 0.0592/2 = 0.0296 V per decade. Q < 1 → E > E° (more driving force). Solids/liquids have activity = 1.'
      }
    },
    {
      id: 'ne2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Simplified Nernst** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A cell with E° = 0.50 V and n = 2 has [products] = 10 M and [reactants] = 0.001 M, so Q = 10000. E at 25°C is:',
            options: [
              '0.382 V',
              '0.618 V',
              '0.500 V',
              '0.264 V'
            ],
            correctAnswer: 0,
            explanation: '$E = 0.50 - (0.0592/2)\\log(10^4) = 0.50 - (0.0296)(4) = 0.50 - 0.118 = 0.382$ V.'
          },
          {
            question: 'At 50°C (323 K), can you use E = E° − (0.0592/n) log Q?',
            options: [
              'Yes — the formula works at all temperatures',
              'No — you must use E = E° − (RT/nF) ln Q with T = 323 K',
              'Yes — but divide 0.0592 by 2',
              'No — the Nernst equation only applies at 25°C'
            ],
            correctAnswer: 1,
            explanation: '0.0592 V is specific to 298 K. At 323 K, use the full Nernst equation: $E = E° - (RT/nF)\\ln Q = E° - (8.314 \\times 323)/(nF) \\times \\ln Q$.'
          }
        ]
      }
    }
  ]
}
