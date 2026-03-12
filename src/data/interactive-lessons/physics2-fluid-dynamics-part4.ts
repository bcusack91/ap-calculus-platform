export const physics2FluidDynamicsPart4Data = {
  topicSlug: 'fluid-dynamics-continuity',
  sections: [
    {
      id: 'fd4-intro',
      type: 'text' as const,
      content: `
# 🔬 Types of Flow & Reynolds Number

**Part 4 of 7 — When Ideal Flow Breaks Down**

Not all fluid flow is smooth and orderly. Understanding when our ideal fluid model works — and when it fails — is key to applying it correctly.
      `
    },
    {
      id: 'fd4-laminar-turbulent',
      type: 'text' as const,
      content: `
## Laminar vs. Turbulent Flow

### Laminar Flow (Smooth)

- Fluid moves in parallel layers ("laminae")
- Each layer slides past adjacent layers without mixing
- Streamlines are smooth, parallel curves
- Low speeds, small pipes, viscous fluids
- Examples: honey flowing, slow river, blood in small vessels

### Turbulent Flow (Chaotic)

- Fluid moves in irregular, swirling patterns
- Rapid mixing between layers
- Streamlines are chaotic, unpredictable
- High speeds, large pipes, low-viscosity fluids
- Examples: white water rapids, smoke rising (after initial laminar region), jet engine exhaust

### The Transition

Flow transitions from laminar to turbulent as speed increases. The **Reynolds number** predicts when:

$$Re = \\frac{\\rho v D}{\\mu}$$

Where $\\mu$ is the fluid's viscosity and $D$ is the pipe diameter.

| Reynolds Number | Flow Type |
|:---:|:---:|
| $Re < 2000$ | Laminar |
| $2000 < Re < 4000$ | Transitional |
| $Re > 4000$ | Turbulent |

*Note: AP Physics 2 rarely asks for Reynolds number calculations, but understanding the concept is valuable.*
      `
    },
    {
      id: 'fd4-flow-quiz',
      type: 'multiple-choice' as const,
      content: `
**Flow Type Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Smoke rising from a candle initially rises in a smooth column, then becomes chaotic higher up. This is because:',
            options: [
              'The smoke cools down',
              'The flow transitions from laminar to turbulent as speed increases and the column widens',
              'Air currents only exist high up',
              'The smoke runs out of energy'
            ],
            correctAnswer: 1,
            explanation: 'Near the candle, the smoke moves slowly in a narrow column (low Reynolds number → laminar). As it rises, it speeds up and the column widens → Reynolds number increases → transition to turbulence.'
          },
          {
            question: 'Which change would be most likely to cause turbulent flow?',
            options: [
              'Using a more viscous fluid',
              'Reducing the pipe diameter',
              'Increasing the flow speed significantly',
              'Reducing the fluid density'
            ],
            correctAnswer: 2,
            explanation: '$Re = \\rho v D/\\mu$. Increasing speed increases $Re$, pushing flow toward turbulence. Higher viscosity, smaller diameter, and lower density all decrease $Re$ (favoring laminar flow).'
          }
        ]
      }
    },
    {
      id: 'fd4-viscosity',
      type: 'text' as const,
      content: `
## Viscosity: The "Thickness" of a Fluid

**Viscosity** ($\\mu$) is a fluid's resistance to flow — its internal friction.

| Fluid | Viscosity (Pa·s) | Description |
|:---:|:---:|:---:|
| Air | $1.8 \\times 10^{-5}$ | Almost none |
| Water (20°C) | $1.0 \\times 10^{-3}$ | Thin |
| Blood | $3-4 \\times 10^{-3}$ | Moderate |
| Olive oil | $0.08$ | Thick |
| Honey | $2-10$ | Very thick |
| Peanut butter | $\\sim 250$ | Extremely thick |

### Effects of Viscosity

In a viscous fluid flowing through a pipe:
- **Center of pipe:** Fastest flow
- **Near walls:** Slowest flow (zero at the wall — "no-slip condition")
- The velocity profile is **parabolic** (Poiseuille flow)

### Temperature Effects

- **Liquids:** Viscosity **decreases** with temperature (hot honey flows easily)
- **Gases:** Viscosity **increases** with temperature (opposite!)

### AP Physics 2 Approach

AP treats fluids as non-viscous (ideal). But understanding viscosity helps you know when the ideal model fails and why real fluids behave differently.
      `
    },
    {
      id: 'fd4-viscosity-quiz',
      type: 'multiple-choice' as const,
      content: `
**Viscosity Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'In a real (viscous) fluid flowing through a pipe, the velocity is fastest:',
            options: [
              'At the pipe walls',
              'At the center of the pipe',
              'Uniformly everywhere',
              'Just inside the walls'
            ],
            correctAnswer: 1,
            explanation: 'Viscosity creates a "no-slip" condition at the walls (velocity = 0). The fastest flow is at the center, with a parabolic velocity profile. This is called Poiseuille flow.'
          },
          {
            question: 'Motor oil works better when warm because:',
            options: [
              'It becomes more viscous and sticks better',
              'It becomes less viscous and flows more easily through the engine',
              'Its density increases',
              'It becomes compressible'
            ],
            correctAnswer: 1,
            explanation: 'Like all liquids, oil\'s viscosity *decreases* with temperature. Warm oil flows more easily through engine parts, providing better lubrication and circulation.'
          }
        ]
      }
    },
    {
      id: 'fd4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A doctor listens to blood flow in an artery with a stethoscope. If they hear a whooshing sound (instead of silence), it likely indicates:',
            options: [
              'Normal laminar flow',
              'The heart has stopped',
              'Turbulent flow, possibly from a narrowed artery',
              'The stethoscope is broken'
            ],
            correctAnswer: 2,
            explanation: 'Normal blood flow is laminar and nearly silent. A narrowed artery (stenosis) forces blood through a smaller opening at higher speed → turbulence → audible turbulence called a "bruit" or murmur. This is a real diagnostic technique!'
          },
          {
            question: 'The ideal fluid model used in AP Physics 2 would work BEST for:',
            options: [
              'Honey flowing down a spoon',
              'Water flowing smoothly through a garden hose',
              'Whitewater rapids',
              'Ketchup being squeezed from a bottle'
            ],
            correctAnswer: 1,
            explanation: 'Water has low viscosity, and smooth flow through a hose is laminar. The ideal fluid model (incompressible, non-viscous, steady, irrotational) fits well. Honey is too viscous, rapids are turbulent, and ketchup is a non-Newtonian fluid.'
          }
        ]
      }
    }
  ]
}
