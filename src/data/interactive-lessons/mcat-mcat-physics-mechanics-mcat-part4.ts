export const mcatPhysMechPart4Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm4-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 4 of 7 — Momentum & Collisions**

### Linear Momentum

$\\vec{p} = m\\vec{v}$ — a vector quantity (units: $\\text{kg}\\cdot\\text{m/s}$)

### Impulse-Momentum Theorem

$\\vec{J} = \\vec{F}\\Delta t = \\Delta\\vec{p}$ — a force applied over time changes momentum

### Conservation of Momentum

$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$

Total momentum is always conserved in the absence of external forces.

### Collision Types

| Type | Momentum | Kinetic Energy |
|------|----------|---------------|
| Elastic | Conserved | Conserved |
| Inelastic | Conserved | NOT conserved (some lost to heat/deformation) |
| Perfectly inelastic | Conserved | Maximum KE loss (objects stick together) |

For a perfectly inelastic collision: $m_1 v_1 + m_2 v_2 = (m_1 + m_2)v_f$

### Why Increasing Collision Time Matters

From $J = F\\Delta t = \\Delta p$, for a fixed momentum change, increasing $\\Delta t$ lowers the average force. This principle explains airbags, padded helmets, and crumple zones.`
    },
    {
      id: 'pm4-worked',
      type: 'text' as const,
      content: `### Worked Example — Impulse Reduces Force

A $0.15\\;\\text{kg}$ baseball arrives at $40\\;\\text{m/s}$ and is caught, coming to rest. Compare the average force on the hand if the catch takes $0.01\\;\\text{s}$ (rigid hand) versus $0.10\\;\\text{s}$ (giving with the ball).

**Step 1 — Find the momentum change (same for both).**

$\\Delta p = m\\Delta v = (0.15)(0 - 40) = -6\\;\\text{kg}\\cdot\\text{m/s}$ (magnitude $6$).

**Step 2 — Rigid catch ($\\Delta t = 0.01\\;\\text{s}$).**

$F = \\frac{\\Delta p}{\\Delta t} = \\frac{6}{0.01} = 600\\;\\text{N}$

**Step 3 — Soft catch ($\\Delta t = 0.10\\;\\text{s}$).**

$F = \\frac{6}{0.10} = 60\\;\\text{N}$

Extending the contact time tenfold cuts the average force to one-tenth. This is exactly why you pull your hands back when catching a fast ball — and why airbags save lives.`
    },
    {
      id: 'pm4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Momentum** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 1000 kg car at 20 m/s collides with a stationary 2000 kg truck. They stick together. The final velocity is:`,
            options: [`6.67 m/s`, `10 m/s`, `20 m/s`, `3.33 m/s`],
            correctAnswer: 0,
            explanation: `Perfectly inelastic: $m_1 v_1 = (m_1 + m_2)v_f$, so $1000(20) = 3000\\,v_f \\Rightarrow v_f = 20000/3000 \\approx 6.67$ m/s.`
          },
          {
            question: `In an isolated elastic collision, which quantity is conserved for the system?`,
            options: [`Momentum only`, `Kinetic energy only`, `Both momentum and kinetic energy`, `Neither momentum nor kinetic energy`],
            correctAnswer: 2,
            explanation: `Elastic collisions conserve both total momentum and total kinetic energy.`
          },
          {
            question: `If the same change in momentum occurs over a longer time interval, the average force is:`,
            options: [`Greater`, `Smaller`, `Unchanged`, `Zero`],
            correctAnswer: 1,
            explanation: `Since $F_{avg} = \\Delta p/\\Delta t$, increasing $\\Delta t$ decreases the average force for a fixed $\\Delta p$.`
          },
          {
            question: `A $0.5\\;\\text{kg}$ ball moving at $4\\;\\text{m/s}$ has momentum:`,
            options: [`$2\\;\\text{kg}\\cdot\\text{m/s}$`, `$8\\;\\text{kg}\\cdot\\text{m/s}$`, `$0.125\\;\\text{kg}\\cdot\\text{m/s}$`, `$4.5\\;\\text{kg}\\cdot\\text{m/s}$`],
            correctAnswer: 0,
            explanation: `$p = mv = (0.5)(4) = 2\\;\\text{kg}\\cdot\\text{m/s}$.`
          },
          {
            question: `A $1\\;\\text{kg}$ cart at $3\\;\\text{m/s}$ strikes and sticks to an identical $1\\;\\text{kg}$ cart at rest. The combined speed afterward is:`,
            options: [`1.5 m/s`, `3 m/s`, `6 m/s`, `0.75 m/s`],
            correctAnswer: 0,
            explanation: `$m_1 v_1 = (m_1 + m_2)v_f \\Rightarrow (1)(3) = (2)v_f \\Rightarrow v_f = 1.5\\;\\text{m/s}$. Note kinetic energy is NOT conserved here.`
          },
          {
            question: `A constant $20\\;\\text{N}$ force acts on a cart for $3\\;\\text{s}$. The impulse delivered is:`,
            options: [`$60\\;\\text{N}\\cdot\\text{s}$`, `$6.7\\;\\text{N}\\cdot\\text{s}$`, `$23\\;\\text{N}\\cdot\\text{s}$`, `$17\\;\\text{N}\\cdot\\text{s}$`],
            correctAnswer: 0,
            explanation: `$J = F\\Delta t = (20)(3) = 60\\;\\text{N}\\cdot\\text{s}$, which equals the cart's change in momentum.`
          }
        ]
      }
    },
    {
      id: 'pm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Momentum is ALWAYS conserved in collisions (absent external forces)
- KE is ONLY conserved in elastic collisions
- Perfectly inelastic = objects stick together = maximum KE loss
- Impulse $J = F\\Delta t = \\Delta p$ — extending contact time lowers the force (airbags, padding)`
    }
  ]
};
