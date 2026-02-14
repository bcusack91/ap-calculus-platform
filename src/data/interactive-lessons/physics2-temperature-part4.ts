export const physics2TemperaturePart4Data = {
  topicSlug: 'temperature-thermal-expansion',
  sections: [
    {
      id: 'te4-intro',
      type: 'text' as const,
      content: `
# 📦 Volume & Area Thermal Expansion

**Part 4 of 7 — Expansion in Two and Three Dimensions**

A solid expands in **all** directions when heated. For flat objects (plates, sheets), we care about **area expansion**. For bulk objects (tanks, spheres, liquids), we care about **volume expansion**.
      `
    },
    {
      id: 'te4-area-volume',
      type: 'text' as const,
      content: `
## Area Expansion

For a flat surface of original area $A_0$:

$$\\Delta A = 2\\alpha \\, A_0 \\, \\Delta T$$

$$A = A_0(1 + 2\\alpha \\, \\Delta T)$$

The factor of **2** arises because a surface has two linear dimensions, and each expands by factor $\\alpha$.

## Volume Expansion

For a solid or liquid of original volume $V_0$:

$$\\Delta V = \\beta \\, V_0 \\, \\Delta T$$

$$V = V_0(1 + \\beta \\, \\Delta T)$$

where $\\beta$ is the **coefficient of volume expansion**.

### The Key Relationship

For isotropic solids:

$$\\boxed{\\beta \\approx 3\\alpha}$$

This is because a volume has three linear dimensions. Each expands by $\\alpha$, giving:

$(1 + \\alpha \\Delta T)^3 \\approx 1 + 3\\alpha \\Delta T$ for small $\\alpha \\Delta T$.

### Volume Expansion Coefficients

| Material | $\\beta$ (× 10⁻⁶ /°C) |
|---|---|
| Aluminum | 69 |
| Steel | 36 |
| Glass (ordinary) | 27 |
| Mercury | 182 |
| Water (at 20°C) | 207 |
| Ethanol | 1{,}120 |
| Gasoline | 950 |

> 🔑 Liquids generally have much larger $\\beta$ values than solids. This is why a full gasoline tank can overflow on a hot day!
      `
    },
    {
      id: 'te4-water-anomaly',
      type: 'text' as const,
      content: `
## The Anomalous Expansion of Water 🌊

Water is one of the most unusual substances in nature. Most materials contract when cooled and expand when heated. Water does this **above 4°C**, but between **0°C and 4°C, water expands as it cools**.

### Key Facts
- Water has its **maximum density at 4°C** ($\\rho = 1{,}000.0$ kg/m³)
- From 4°C → 0°C, water **expands** (density decreases)
- Ice at 0°C is about **9% less dense** than liquid water at 0°C

### Why This Matters for Life on Earth

1. **Lakes freeze from the top down**: In winter, surface water cools below 4°C and becomes less dense, so it stays on top. The densest water (4°C) sinks to the bottom.

2. **Ice floats**: Since ice is less dense than liquid water, it forms an insulating layer on the surface, protecting aquatic life below.

3. **Deep lakes maintain ~4°C at the bottom**: Even when the surface freezes, the bottom stays at 4°C, allowing fish and other organisms to survive winter.

### Practical Consequence

If water behaved like a "normal" liquid (contracting all the way to freezing), lakes would freeze from the **bottom up**, likely killing all aquatic life in cold climates. Water's anomalous expansion is crucial for life on Earth!
      `
    },
    {
      id: 'te4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Volume Expansion Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'The coefficient of volume expansion $\\beta$ is related to the coefficient of linear expansion $\\alpha$ by:',
            options: [
              'β = α',
              'β = 2α',
              'β ≈ 3α',
              'β = α²'
            ],
            correctAnswer: 2,
            explanation: 'A volume has three linear dimensions. Each expands by factor $\\alpha$, so $\\beta \\approx 3\\alpha$. This comes from expanding $(1 + \\alpha \\Delta T)^3 \\approx 1 + 3\\alpha \\Delta T$.'
          },
          {
            question: 'Water has its maximum density at:',
            options: [
              '0°C',
              '4°C',
              '20°C',
              '100°C'
            ],
            correctAnswer: 1,
            explanation: 'Water reaches its maximum density of $1{,}000.0$ kg/m³ at 4°C. Below 4°C, water anomalously expands as it cools, making it less dense.'
          },
          {
            question: 'A steel tank is completely filled with gasoline at 15°C. On a hot day (40°C), the gasoline will:',
            options: [
              'Stay at the same level (both expand equally)',
              'Drop below the rim (tank expands more than gasoline)',
              'Overflow (gasoline expands much more than the steel tank)',
              'Compress itself to fit'
            ],
            correctAnswer: 2,
            explanation: 'Gasoline has $\\beta = 950 \\times 10^{-6}$ /°C while steel has $\\beta = 36 \\times 10^{-6}$ /°C. The gasoline expands about 26 times more than the tank, so it overflows.'
          }
        ]
      }
    },
    {
      id: 'te4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Volume Expansion Drill** 📦

1) A steel container holds 50.0 L of gasoline at 10°C. How much gasoline (in mL) overflows when heated to 35°C? Use $\\beta_{\\text{gas}} = 950 \\times 10^{-6}$ /°C and $\\beta_{\\text{steel}} = 36 \\times 10^{-6}$ /°C. (Answer = ΔV_gas − ΔV_tank)

2) A glass flask ($\\beta = 27 \\times 10^{-6}$ /°C) has a volume of 200.0 cm³ at 20°C. Find its volume increase $\\Delta V$ (in cm³) when heated to 120°C. Round to 3 significant figures.

3) An aluminum cube ($\\alpha = 23 \\times 10^{-6}$ /°C) has a side of 10.0 cm at 20°C. Find the increase in its volume $\\Delta V$ (in cm³) when heated to 220°C. Use $\\beta = 3\\alpha$. Round to 3 significant figures.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1143', '0.54', '13.8', '0.540', '13.80'],
        hint1: '$\\Delta V_{\\text{overflow}} = (\\beta_{\\text{gas}} - \\beta_{\\text{steel}}) V_0 \\Delta T = (950 - 36) \\times 10^{-6} \\times 50.0 \\times 25$. Convert L to mL.',
        hint2: '$\\Delta V = \\beta V_0 \\Delta T = (27 \\times 10^{-6})(200.0)(100)$.',
        hint3: '$V_0 = (10.0)^3 = 1000$ cm³. $\\beta = 3(23 \\times 10^{-6}) = 69 \\times 10^{-6}$. $\\Delta V = (69 \\times 10^{-6})(1000)(200)$.',
        explanation: '1) $\\Delta V = (914 \\times 10^{-6})(50.0)(25) = 1.1425$ L $= 1{,}143$ mL. 2) $\\Delta V = (27 \\times 10^{-6})(200.0)(100) = 0.54$ cm³. 3) $V_0 = 1{,}000$ cm³, $\\beta = 69 \\times 10^{-6}$ /°C, $\\Delta T = 200$°C. $\\Delta V = (69 \\times 10^{-6})(1{,}000)(200) = 13.8$ cm³.'
      }
    },
    {
      id: 'te4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Lakes freeze from the top down because:',
            options: [
              'Ice is a good thermal insulator',
              'Water below 4°C is less dense than water at 4°C, so cold water rises to the surface and freezes there',
              'Sunlight heats the bottom of the lake',
              'The wind cools only the surface'
            ],
            correctAnswer: 1,
            explanation: 'Water is densest at 4°C. As surface water cools below 4°C, it becomes less dense and stays on top, eventually freezing. The 4°C water sinks to the bottom, keeping it liquid and habitable for aquatic life.'
          },
          {
            question: 'A mercury thermometer works because mercury has a much larger $\\beta$ than glass. If $\\beta_{\\text{Hg}} = \\beta_{\\text{glass}}$, the thermometer would:',
            options: [
              'Work the same way',
              'Show no change in mercury level (both expand equally)',
              'Show twice the reading',
              'Break from thermal stress'
            ],
            correctAnswer: 1,
            explanation: 'A mercury thermometer shows the **difference** between mercury expansion and glass expansion. If both expanded at the same rate, the mercury level would not change relative to the glass tube, and the thermometer would be useless.'
          }
        ]
      }
    }
  ]
}
