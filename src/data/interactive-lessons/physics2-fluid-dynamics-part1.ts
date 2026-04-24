export const physics2FluidDynamicsPart1Data = {
  topicSlug: 'fluid-dynamics-continuity',
  sections: [
    {
      id: 'fd1-intro',
      type: 'text' as const,
      content: `
# 🌊 Fluid Dynamics & Continuity

**Part 1 of 7 — Fluids in Motion**

So far we've studied fluids at rest (hydrostatics). Now we analyze **moving** fluids — how they flow, what speeds them up, and why a garden hose squirts faster when you put your thumb over the end.
      `
    },
    {
      id: 'fd1-ideal-fluid',
      type: 'text' as const,
      content: `
## The Ideal Fluid Model

To make fluid dynamics manageable, AP Physics 2 uses the **ideal fluid** approximation:

| Property | Meaning |
|:---:|:---:|
| **Incompressible** | Density is constant ($\\rho$ doesn't change) |
| **Non-viscous** | No internal friction (no "thickness") |
| **Steady flow** | Flow pattern doesn't change with time |
| **Irrotational** | No swirling/turbulence — fluid elements don't spin |

### What This Means in Practice

- Water flowing smoothly through pipes ✅
- Honey oozing slowly ❌ (viscous)
- Supersonic air ❌ (compressible)
- Whirlpools ❌ (rotational, turbulent)

The ideal fluid model works surprisingly well for water in pipes, blood in arteries, and many other everyday situations.
      `
    },
    {
      id: 'fd1-streamlines',
      type: 'text' as const,
      content: `
## Streamlines and Flow

### Streamlines

A **streamline** is the path a fluid particle follows during steady flow. Key properties:

- Streamlines never cross (if they did, a particle at the crossing would have two velocities!)
- Fluid velocity is **tangent** to the streamline at every point
- Closely spaced streamlines → fast flow; widely spaced → slow flow

### Flow Tube

A **flow tube** (or stream tube) is a bundle of streamlines forming an imaginary tube. Think of it as a "pipe" made of flowing fluid.

In steady flow, fluid enters one end and exits the other — no fluid crosses the walls of the tube.

### Volume Flow Rate

The **volume flow rate** $Q$ measures how much fluid passes a point per unit time:

$$Q = A \\cdot v$$

Where:
- $Q$ = volume flow rate (m³/s)
- $A$ = cross-sectional area (m²)
- $v$ = fluid speed (m/s)

Units: 1 m³/s = 1000 liters/s. Typical garden hose: $Q \\approx 3 \\times 10^{-4}$ m³/s.
      `
    },
    {
      id: 'fd1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is NOT an assumption of the ideal fluid model?',
            options: [
              'The fluid is incompressible',
              'The fluid has no viscosity',
              'The flow is steady and irrotational',
              'The fluid has zero density'
            ],
            correctAnswer: 3,
            explanation: 'An ideal fluid has constant (nonzero) density, zero viscosity, steady flow, and irrotational flow. Zero density would mean no fluid at all!'
          },
          {
            question: 'If streamlines are packed closely together in one region of flow:',
            options: [
              'The fluid is moving slowly there',
              'The fluid is moving quickly there',
              'The pressure is high',
              'The fluid is turbulent'
            ],
            correctAnswer: 1,
            explanation: 'Closely spaced streamlines indicate high velocity — more fluid is passing through a smaller area. Think of water speeding up as a river narrows.'
          },
          {
            question: 'Water flows through a hose at 2 m/s. The hose has a circular cross-section with radius 1 cm. The volume flow rate is:',
            options: [
              '$6.28 \\times 10^{-4}$ m³/s',
              '$6.28 \\times 10^{-2}$ m³/s',
              '$2.0 \\times 10^{-4}$ m³/s',
              '$3.14 \\times 10^{-4}$ m³/s'
            ],
            correctAnswer: 0,
            explanation: '$Q = Av = \\pi r^2 v = \\pi (0.01)^2 (2) = 6.28 \\times 10^{-4}$ m³/s ≈ 0.63 liters per second.'
          }
        ]
      }
    },
    {
      id: 'fd1-flow-rate-drill',
      type: 'input-boxes' as const,
      content: `
**Flow Rate Drill** (use $\\pi \\approx 3.14$)

Water flows through a circular pipe of diameter 4.0 cm at a speed of 3.0 m/s.

1) Cross-sectional area of the pipe (in m², scientific notation: e.g., "1.26e-3")

2) Volume flow rate (in m³/s, use same format)

3) How many seconds to fill a 50-liter (0.050 m³) bucket?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.26e-3', '3.77e-3', '13.3'],
        hint1: '$A = \\pi r^2 = \\pi (0.02)^2$.',
        hint2: '$Q = Av = (1.26 \\times 10^{-3})(3.0)$.',
        hint3: '$t = V/Q = 0.050/Q$.',
        explanation: '$A = \\pi(0.02)^2 = 1.26 \\times 10^{-3}$ m². $Q = 1.26 \\times 10^{-3} \\times 3.0 = 3.77 \\times 10^{-3}$ m³/s. $t = 0.050/(3.77 \\times 10^{-3}) = 13.3$ s.'
      }
    },
    {
      id: 'fd1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Blood flows more slowly in capillaries than in arteries, even though capillaries are much narrower. This is because:',
            options: [
              'Blood is thicker in capillaries',
              'The total cross-sectional area of all capillaries combined is much larger than the artery',
              'Gravity slows the blood',
              'Capillaries have higher pressure'
            ],
            correctAnswer: 1,
            explanation: 'While each capillary is tiny, there are *billions* of them. The total combined area is enormous. Since $Q = Av$ is roughly constant, a huge $A$ means a small $v$. This slow flow gives blood time to exchange nutrients!'
          }
        ]
      }
    }
  ]
}
