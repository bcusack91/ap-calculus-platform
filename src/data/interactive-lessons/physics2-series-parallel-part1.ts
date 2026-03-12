export const physics2SeriesParallelPart1Data = {
  topicSlug: 'series-parallel-circuits',
  sections: [
    {
      id: 'sp1-intro',
      type: 'text' as const,
      content: `
# 🔗 Series Circuits

**Part 1 of 7 — One Path, Shared Current**

When resistors are connected end-to-end with only **one path** for current to flow, they form a **series circuit**. Understanding series circuits is the foundation for all circuit analysis.

In this part you'll learn:
- How to identify series connections
- Why current is the same through every series element
- How to calculate total resistance in series
- How voltage divides across series resistors
- What happens when one element breaks
      `
    },
    {
      id: 'sp1-series-defined',
      type: 'text' as const,
      content: `
## What Makes a Series Circuit?

Resistors are in **series** when they are connected end-to-end so that there is **only one path** for current to flow.

### Key Properties of Series Circuits

| Property | Rule |
|----------|------|
| **Current** | Same through every element: $I_1 = I_2 = I_3 = \\ldots = I$ |
| **Voltage** | Divides across elements: $V_{\\text{total}} = V_1 + V_2 + V_3 + \\ldots$ |
| **Resistance** | Adds directly: $R_{\\text{total}} = R_1 + R_2 + R_3 + \\ldots$ |

### Why Is the Current the Same?

Think of water flowing through a single pipe with narrow sections. The same volume of water per second must pass through every point — there's nowhere else for it to go!

Similarly, in a series circuit, **charge cannot accumulate** at any junction between resistors. The same current $I$ flows through every component.

### Total Resistance

Since each resistor opposes current flow, adding resistors in series makes it **harder** for current to flow:

$$R_{\\text{total}} = R_1 + R_2 + R_3 + \\cdots$$

The total resistance is always **greater than the largest individual resistance**.
      `
    },
    {
      id: 'sp1-series-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Series Circuit Concepts**
      `,
      exercise: {
        questions: [
          {
            question: 'Three resistors ($10 \\; \\Omega$, $20 \\; \\Omega$, $30 \\; \\Omega$) are connected in series to a battery. Which statement is TRUE?',
            options: [
              'The 30 Ω resistor carries the most current',
              'All three resistors carry the same current',
              'The 10 Ω resistor has the highest voltage across it',
              'The total resistance is less than 10 Ω'
            ],
            correctAnswer: 1,
            explanation: 'In a series circuit, there is only one path for current. The same current flows through every resistor, regardless of its resistance value.'
          },
          {
            question: 'If you add a fourth resistor in series to the circuit above, the total current will:',
            options: [
              'Increase, because there are more resistors',
              'Stay the same, because the battery hasn\'t changed',
              'Decrease, because total resistance increases',
              'Depend on where the new resistor is placed'
            ],
            correctAnswer: 2,
            explanation: 'Adding a resistor in series increases $R_{\\text{total}}$. By Ohm\'s law $I = V/R_{\\text{total}}$, more resistance means less current for the same battery voltage.'
          }
        ]
      }
    },
    {
      id: 'sp1-voltage-divider',
      type: 'text' as const,
      content: `
## Voltage Division in Series

Since the current is the same through every resistor, the voltage across each one is given by Ohm's law:

$$V_k = I \\cdot R_k$$

A larger resistor gets a **larger share** of the total voltage.

### Voltage Divider Rule

The voltage across resistor $R_k$ in a series circuit is:

$$V_k = V_{\\text{source}} \\cdot \\frac{R_k}{R_{\\text{total}}}$$

### Example

Three resistors in series: $R_1 = 10 \\; \\Omega$, $R_2 = 20 \\; \\Omega$, $R_3 = 30 \\; \\Omega$ connected to $V = 12$ V.

$$R_{\\text{total}} = 10 + 20 + 30 = 60 \\; \\Omega$$

$$I = \\frac{V}{R_{\\text{total}}} = \\frac{12}{60} = 0.2 \\text{ A}$$

| Resistor | Voltage |
|----------|---------|
| $R_1 = 10 \\; \\Omega$ | $V_1 = 0.2 \\times 10 = 2$ V |
| $R_2 = 20 \\; \\Omega$ | $V_2 = 0.2 \\times 20 = 4$ V |
| $R_3 = 30 \\; \\Omega$ | $V_3 = 0.2 \\times 30 = 6$ V |

**Check:** $2 + 4 + 6 = 12$ V ✓ — voltages add up to the source voltage.

### If One Breaks...

If **any** resistor in a series circuit burns out (open circuit), current drops to **zero** — the entire circuit stops. This is like old-fashioned Christmas lights: one bulb out, all out!
      `
    },
    {
      id: 'sp1-series-calc-drill',
      type: 'input-boxes' as const,
      content: `
**Series Circuit Calculation Drill**

A 24 V battery is connected to three resistors in series: $R_1 = 4 \\; \\Omega$, $R_2 = 8 \\; \\Omega$, $R_3 = 12 \\; \\Omega$.

1) Total resistance $R_{\\text{total}}$ (in $\\Omega$)
2) Current through the circuit (in A)
3) Voltage across $R_2$ (in V)
4) Voltage across $R_3$ (in V)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['24', '1', '8', '12'],
        hint1: '$R_{\\text{total}} = R_1 + R_2 + R_3 = 4 + 8 + 12$.',
        hint2: '$I = V / R_{\\text{total}} = 24 / 24$.',
        hint3: '$V_2 = I \\cdot R_2 = 1 \\times 8$. $V_3 = I \\cdot R_3 = 1 \\times 12$.',
        explanation: '$R_{\\text{total}} = 4 + 8 + 12 = 24 \\; \\Omega$. $I = 24/24 = 1$ A. $V_2 = 1 \\times 8 = 8$ V. $V_3 = 1 \\times 12 = 12$ V. Check: $V_1 + V_2 + V_3 = 4 + 8 + 12 = 24$ V ✓.'
      }
    },
    {
      id: 'sp1-advanced-drill',
      type: 'input-boxes' as const,
      content: `
**Advanced Series Drill**

Two resistors are connected in series to a 20 V battery. The voltage across the first resistor is 8 V, and the current through the circuit is 0.5 A.

1) Voltage across the second resistor (in V)
2) Resistance of the first resistor (in $\\Omega$)
3) Resistance of the second resistor (in $\\Omega$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '16', '24'],
        hint1: 'Voltages must sum to the battery voltage: $V_2 = 20 - 8$.',
        hint2: '$R_1 = V_1 / I = 8 / 0.5$.',
        hint3: '$R_2 = V_2 / I = 12 / 0.5$.',
        explanation: '$V_2 = 20 - 8 = 12$ V. $R_1 = 8 / 0.5 = 16 \\; \\Omega$. $R_2 = 12 / 0.5 = 24 \\; \\Omega$. Check: $R_{\\text{total}} = 16 + 24 = 40 \\; \\Omega$, $I = 20/40 = 0.5$ A ✓.'
      }
    },
    {
      id: 'sp1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Series Circuits**
      `,
      exercise: {
        questions: [
          {
            question: 'A 9 V battery is connected to two resistors in series: $R_1 = 3 \\; \\Omega$ and $R_2 = 6 \\; \\Omega$. The voltage across $R_1$ is:',
            options: [
              '9 V',
              '6 V',
              '3 V',
              '4.5 V'
            ],
            correctAnswer: 2,
            explanation: '$R_{\\text{total}} = 3 + 6 = 9 \\; \\Omega$. $V_1 = 9 \\times (3/9) = 3$ V. The smaller resistor gets the smaller share of the voltage.'
          },
          {
            question: 'Five identical resistors ($R$ each) are connected in series. The total resistance is:',
            options: [
              '$R/5$',
              '$R$',
              '$5R$',
              '$R^5$'
            ],
            correctAnswer: 2,
            explanation: 'In series, resistances add: $R_{\\text{total}} = R + R + R + R + R = 5R$.'
          }
        ]
      }
    }
  ]
}
