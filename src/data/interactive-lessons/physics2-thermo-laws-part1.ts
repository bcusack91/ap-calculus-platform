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
## Work Done on a Gas

The AP Physics 2 equation sheet uses $W$ for the work done **on** the gas by its surroundings.

When a gas expands, it pushes on its surroundings: the gas does positive work, so the work done **on** the gas is **negative**. When a gas is compressed, the surroundings push on it and the work done on the gas is **positive**.

### Isobaric Process (Constant Pressure)

$$W = -P \\Delta V$$

where $\\Delta V = V_f - V_i$. The work done **by** the gas is $P\\Delta V$, which is always the opposite of $W$.

> 📝 **Convention note**: Many chemistry and engineering texts define $W$ as the work done BY the gas ($W = P\\Delta V$). The physics is the same; the AP Physics 2 equation sheet uses $W$ done ON the gas.

### Sign Conventions

| Situation | $\\Delta V$ | $W$ (on gas) | Meaning |
|-----------|-----------|-----|---------|
| Gas **expands** | $> 0$ | $< 0$ | Gas does work ON surroundings |
| Gas **compresses** | $< 0$ | $> 0$ | Surroundings do work ON gas |
| Volume constant | $= 0$ | $= 0$ | No work done |

### PV Diagram Preview

On a **Pressure vs. Volume** (PV) diagram, the **magnitude of the work equals the area under the curve** between the initial and final states.

- Moving **right** on the PV diagram → expansion → $W < 0$ (the gas does positive work)
- Moving **left** → compression → $W > 0$ (work is done on the gas)
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
            question: 'A gas expands from 2.0 L to 5.0 L at a constant pressure of 200 kPa. The work done by the gas is:',
            options: [
              '−600 J',
              '600 J',
              '1000 J',
              '−1000 J'
            ],
            correctAnswer: 1,
            explanation: 'Work done by the gas $= P\\Delta V = (200{,}000)(5.0 - 2.0) \\times 10^{-3} = (200{,}000)(0.003) = 600$ J, positive because the gas expanded. The work done on the gas is the opposite: $W = -P\\Delta V = -600$ J.'
          },
          {
            question: 'A gas is compressed at constant pressure. Taking $W$ as the work done on the gas (the AP convention), which statement is correct?',
            options: [
              '$W < 0$ because the volume of the gas decreases during compression',
              '$W > 0$ because the surroundings do positive work on the gas',
              '$W = 0$ because compression involves no energy change',
              '$W < 0$ because the gas pressure is always positive'
            ],
            correctAnswer: 1,
            explanation: 'During compression $\\Delta V < 0$, so $W = -P\\Delta V$ is positive: the surroundings do positive work on the gas. The work done by the gas, $P\\Delta V$, is negative. Same physics, seen from the other side.'
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
            explanation: 'The work done by the gas is $\\int P\\,dV$, which is the area under the P vs. V curve between the initial and final volumes. The work done on the gas, $W$, has the same magnitude and the opposite sign.'
          },
          {
            question: 'A gas undergoes a process that moves left on a PV diagram. This means:',
            options: [
              'The gas expands and does positive work',
              'The gas is at constant volume',
              'The gas is compressed and work is done on it',
              'The temperature must increase'
            ],
            correctAnswer: 2,
            explanation: 'Moving left on a PV diagram means volume decreases (compression). The surroundings do positive work on the gas ($W > 0$); equivalently, the gas does negative work.'
          }
        ]
      }
    },
    {
      id: 'tl1-work-drill',
      type: 'input-boxes' as const,
      content: `
**Work Calculation Drill** 🔧

All processes are isobaric (constant pressure). $W$ is the work done on the gas (AP convention). Give magnitude and correct sign.

1) $P = 100$ kPa, gas expands from 3.0 L to 8.0 L. Work done on the gas, $W$ (in J)?

2) $P = 250$ kPa, gas compresses from 10.0 L to 4.0 L. Work done on the gas, $W$ (in J)?

3) A gas at 150 kPa does 450 J of work while expanding. What is $\\Delta V$ (in L)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-500', '1500', '3'],
        hint1: '$W = -P\\Delta V = -(100{,}000)(0.005) = -500$ J. Negative because the gas expands.',
        hint2: '$W = -P\\Delta V = -(250{,}000)(0.004 - 0.010) = -(250{,}000)(-0.006) = 1500$ J. Positive because the gas is compressed.',
        hint3: 'The gas does 450 J, so $P\\Delta V = 450$ J and $\\Delta V = 450/150{,}000 = 0.003$ $m^{3}$ $= 3$ L.',
        explanation: 'Use $W = -P\\Delta V$ with volumes in $m^{3}$ (1 L = 0.001 $m^{3}$). $W$ (on the gas) is negative when the gas expands and positive when it is compressed; the work done by the gas is the opposite sign.'
      }
    }
  ]
}
