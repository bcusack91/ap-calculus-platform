export const physics2TemperaturePart3Data = {
  topicSlug: 'temperature-thermal-expansion',
  sections: [
    {
      id: 'te3-intro',
      type: 'text' as const,
      content: `
# 📏 Linear Thermal Expansion

**Part 3 of 7 — Why Bridges Have Gaps**

When you heat a solid, its atoms vibrate with greater amplitude around their equilibrium positions. This causes the material to **expand** in all directions. For long, thin objects, the most noticeable change is in **length** — this is linear thermal expansion.
      `
    },
    {
      id: 'te3-linear-expansion',
      type: 'text' as const,
      content: `
## The Linear Expansion Formula

$$\\Delta L = \\alpha L_0 \\Delta T$$

where:
- $\\Delta L$ = change in length (m)
- $\\alpha$ = **coefficient of linear expansion** (1/°C or 1/K)
- $L_0$ = original length at the initial temperature (m)
- $\\Delta T = T_f - T_i$ = change in temperature (°C or K)

The new length is:

$$L = L_0 + \\Delta L = L_0(1 + \\alpha \\Delta T)$$

### Coefficients of Linear Expansion

| Material | $\\alpha$ (× 10⁻⁶ /°C) |
|---|---|
| Aluminum | 23 |
| Brass | 19 |
| Copper | 17 |
| Steel/Iron | 12 |
| Glass (ordinary) | 9 |
| Glass (Pyrex) | 3.2 |
| Concrete | 12 |
| Invar (Ni-Fe alloy) | 0.9 |

> 🔑 **Invar** has an extremely low $\\alpha$, making it ideal for precision instruments, clock pendulums, and scientific equipment where dimensional stability matters.

### Important Notes
- $\\Delta T$ is the same whether in °C or K (same size degree)
- The formula is valid for moderate temperature changes
- $\\alpha$ is approximately constant over typical temperature ranges
- Expansion occurs in **all** directions, but for thin rods or rails, the length change dominates
      `
    },
    {
      id: 'te3-applications',
      type: 'text' as const,
      content: `
## Engineering Applications

### Expansion Joints in Bridges
Bridges have **gaps** (expansion joints) at regular intervals to allow the roadway to expand in summer and contract in winter without buckling or cracking.

**Example:** A 500 m steel bridge warms from 0°C to 40°C:

$$\\Delta L = (12 \\times 10^{-6})(500)(40) = 0.24 \\text{ m} = 24 \\text{ cm}$$

That's nearly a foot of expansion! Without joints, the bridge would buckle.

### Railroad Tracks
Old-style railroad tracks were laid with gaps between sections to allow expansion. Modern **continuously welded rail** is pre-stressed so that it can handle thermal expansion without buckling (up to about 60°C above the stress-free temperature).

### Bimetallic Strips
Two metals with **different** $\\alpha$ values are bonded together. When heated, the metal with the higher $\\alpha$ expands more, causing the strip to **bend** toward the lower-$\\alpha$ side.

**Applications:** thermostats, circuit breakers, oven thermometers

### Shrink Fitting
A metal ring is heated so its inner diameter expands. It's slipped over a shaft, then cooled. As it contracts, it grips the shaft with enormous force — no bolts or welds needed!
      `
    },
    {
      id: 'te3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Linear Expansion Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A steel rod and an aluminum rod have the same length and undergo the same temperature increase. Which rod expands more?',
            options: [
              'Steel (α = 12 × 10⁻⁶ /°C)',
              'Aluminum (α = 23 × 10⁻⁶ /°C)',
              'They expand equally',
              'It depends on the cross-sectional area'
            ],
            correctAnswer: 1,
            explanation: 'Since $\\Delta L = \\alpha L_0 \\Delta T$, and both rods have the same $L_0$ and $\\Delta T$, the rod with the larger $\\alpha$ expands more. Aluminum ($\\alpha = 23 \\times 10^{-6}$) > Steel ($\\alpha = 12 \\times 10^{-6}$).'
          },
          {
            question: 'A bimetallic strip is made of brass (α = 19 × 10⁻⁶ /°C) bonded to steel (α = 12 × 10⁻⁶ /°C). When heated, the strip bends:',
            options: [
              'Toward the brass side',
              'Toward the steel side',
              'It stays straight',
              'It depends on the thickness ratio'
            ],
            correctAnswer: 1,
            explanation: 'Brass has a larger $\\alpha$, so it expands more than steel. The brass side becomes longer, forcing the strip to curve with brass on the outside and steel on the inside — the strip bends toward the steel side.'
          },
          {
            question: 'If a metal rod with a hole in the middle is heated, the hole:',
            options: [
              'Gets smaller (metal expands inward)',
              'Gets larger (everything expands, including the hole)',
              'Stays the same size',
              'Gets smaller for metals, larger for non-metals'
            ],
            correctAnswer: 1,
            explanation: 'Thermal expansion scales the entire object uniformly. Think of a photocopy enlargement — everything gets proportionally bigger, including any holes. The hole expands as if it were filled with the same material.'
          }
        ]
      }
    },
    {
      id: 'te3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Linear Expansion Drill** 📏

Use $\\alpha_{\\text{steel}} = 12 \\times 10^{-6}$ /°C and $\\alpha_{\\text{Al}} = 23 \\times 10^{-6}$ /°C.

1) A steel bridge is 200 m long at 10°C. Find $\\Delta L$ in cm when it heats to 40°C.

2) An aluminum rod is 3.0 m at 20°C. Find $\\Delta L$ in mm when it heats to 120°C.

3) A steel rail is 25.0 m long at 15°C. What gap (in mm) must be left between rails to prevent buckling if temperature can reach 50°C?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7.2', '6.9', '10.5'],
        hint1: '$\\Delta L = \\alpha L_0 \\Delta T = (12 \\times 10^{-6})(200)(30)$. Convert m to cm.',
        hint2: '$\\Delta L = (23 \\times 10^{-6})(3.0)(100)$. Convert m to mm.',
        hint3: '$\\Delta L = (12 \\times 10^{-6})(25.0)(35)$. Convert m to mm.',
        explanation: '1) $\\Delta L = (12 \\times 10^{-6})(200)(30) = 0.072$ m $= 7.2$ cm. 2) $\\Delta L = (23 \\times 10^{-6})(3.0)(100) = 6.9 \\times 10^{-3}$ m $= 6.9$ mm. 3) $\\Delta L = (12 \\times 10^{-6})(25.0)(35) = 0.0105$ m $= 10.5$ mm.'
      }
    },
    {
      id: 'te3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Doubling the original length $L_0$ while keeping $\\alpha$ and $\\Delta T$ the same will:',
            options: [
              'Double the change in length $\\Delta L$',
              'Quadruple $\\Delta L$',
              'Not affect $\\Delta L$',
              'Halve $\\Delta L$'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta L = \\alpha L_0 \\Delta T$. Since $\\Delta L$ is directly proportional to $L_0$, doubling $L_0$ doubles $\\Delta L$.'
          },
          {
            question: 'Pyrex glass (α = 3.2 × 10⁻⁶ /°C) is preferred for laboratory glassware because:',
            options: [
              'It is cheaper than ordinary glass',
              'Its very low α means minimal expansion, reducing the risk of cracking from thermal stress',
              'It has a higher melting point',
              'It is more transparent'
            ],
            correctAnswer: 1,
            explanation: 'Pyrex has $\\alpha = 3.2 \\times 10^{-6}$ /°C vs. $9 \\times 10^{-6}$ /°C for ordinary glass. Less expansion means less thermal stress, so Pyrex is far less likely to crack when exposed to rapid temperature changes.'
          }
        ]
      }
    }
  ]
}
