export const physics2ThermoLawsPart1Data = {
  topicSlug: 'laws-of-thermodynamics',
  sections: [
    {
      id: 'tl1-intro',
      type: 'text' as const,
      content: `
# 🔥 Internal Energy & Work Done by a Gas

**Part 1 of 7 — The Energy of Molecules**

Thermodynamics connects heat, work, and internal energy. Before we state the laws, we need to understand what these quantities mean and how gases do work.
      `
    },
    {
      id: 'tl1-internal-energy',
      type: 'text' as const,
      content: `
## Internal Energy ($U$)

The **internal energy** of an ideal gas is the total kinetic energy of all its molecules:

$$U = \\frac{3}{2} n R T \\quad \\text{(monatomic ideal gas)}$$

Key facts:
- $U$ depends **only on temperature** for an ideal gas
- If $T$ increases → $U$ increases
- If $T$ stays constant → $\\Delta U = 0$
- $U$ is a **state variable** — it depends only on the current state, not on how the gas got there

### Change in Internal Energy

$$\\Delta U = \\frac{3}{2} n R \\Delta T$$

For any process where $T$ doesn't change (isothermal): $\\Delta U = 0$.

For any process where $T$ rises: $\\Delta U > 0$.
      `
    },
    {
      id: 'tl1-work',
      type: 'text' as const,
      content: `
## Work Done by a Gas

When a gas expands, it pushes on its surroundings and does **positive work**. When a gas is compressed, work is done **on** the gas (negative work by gas).

### Isobaric Process (Constant Pressure)

$$W = P \\Delta V$$

where $\\Delta V = V_f - V_i$.

### Sign Conventions

| Situation | $\\Delta V$ | $W$ | Meaning |
|-----------|-----------|-----|---------|
| Gas **expands** | $> 0$ | $> 0$ | Gas does work ON surroundings |
| Gas **compresses** | $< 0$ | $< 0$ | Surroundings do work ON gas |
| Volume constant | $= 0$ | $= 0$ | No work done |

### PV Diagram Preview

On a **Pressure vs. Volume** (PV) diagram, the **work equals the area under the curve** between the initial and final states.

- Moving **right** on the PV diagram → expansion → $W > 0$
- Moving **left** → compression → $W < 0$
      `
    },
    {
      id: 'tl1-sign-quiz',
      type: 'multiple-choice' as const,
      content: `
**Sign Convention Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A gas expands from 2.0 L to 5.0 L at a constant pressure of 200 kPa. The work done BY the gas is:',
            options: [
              '−600 J',
              '600 J',
              '1000 J',
              '−1000 J'
            ],
            correctAnswer: 1,
            explanation: '$W = P\\Delta V = (200{,}000)(5.0 - 2.0) \\times 10^{-3} = (200{,}000)(0.003) = 600$ J. Positive because the gas expanded.'
          },
          {
            question: 'A gas is compressed at constant pressure. Which statement is correct?',
            options: [
              '$W > 0$ because work is being done',
              '$W < 0$ because the gas does negative work (surroundings do work on the gas)',
              '$W = 0$ because compression involves no energy change',
              '$W > 0$ because pressure is always positive'
            ],
            correctAnswer: 1,
            explanation: 'During compression $\\Delta V < 0$, so $W = P\\Delta V < 0$. The gas does negative work, meaning the surroundings do work on the gas.'
          }
        ]
      }
    },
    {
      id: 'tl1-pv-concepts',
      type: 'multiple-choice' as const,
      content: `
**PV Diagram Concepts** 📊
      `,
      exercise: {
        questions: [
          {
            question: 'On a PV diagram, the work done by a gas during a process equals:',
            options: [
              'The slope of the curve',
              'The area under the curve',
              'The height of the curve',
              'The length of the curve'
            ],
            correctAnswer: 1,
            explanation: 'Work is $W = \\int P\\,dV$, which is the area under the P vs. V curve between the initial and final volumes.'
          },
          {
            question: 'A gas undergoes a process that moves LEFT on a PV diagram. This means:',
            options: [
              'The gas expands and does positive work',
              'The gas is at constant volume',
              'The gas is compressed and work is done on it',
              'The temperature must increase'
            ],
            correctAnswer: 2,
            explanation: 'Moving left on a PV diagram means volume decreases (compression). The gas does negative work — equivalently, the surroundings do positive work on the gas.'
          }
        ]
      }
    },
    {
      id: 'tl1-work-drill',
      type: 'input-boxes' as const,
      content: `
**Work Calculation Drill** 🔧

All processes are isobaric (constant pressure). Give magnitude and correct sign.

1) $P = 100$ kPa, gas expands from 3.0 L to 8.0 L. Work by gas (in J)?

2) $P = 250$ kPa, gas compresses from 10.0 L to 4.0 L. Work by gas (in J)?

3) A gas at 150 kPa does 450 J of work while expanding. What is $\\Delta V$ (in L)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['500', '-1500', '3'],
        hint1: '$W = P\\Delta V = (100{,}000)(0.005) = 500$ J.',
        hint2: '$W = P\\Delta V = (250{,}000)(0.004 - 0.010) = (250{,}000)(-0.006) = -1500$ J. Negative because compression.',
        hint3: '$\\Delta V = W/P = 450/150{,}000 = 0.003$ $m^{3}$ $= 3$ L.',
        explanation: 'Use $W = P\\Delta V$ with volumes in $m^{3}$ (1 L = 0.001 $m^{3}$). Sign follows from whether the gas expands (+) or compresses (−).'
      }
    }
  ]
}
