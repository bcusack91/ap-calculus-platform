export const physics2FluidDynamicsPart7Data = {
  topicSlug: 'fluid-dynamics-continuity',
  sections: [
    {
      id: 'fd7-intro',
      type: 'text' as const,
      content: `
# 🎯 Fluid Dynamics Synthesis & AP Review

**Part 7 of 7 — Complete Review**

Let's consolidate everything from fluid dynamics and continuity before moving on to Bernoulli's equation.
      `
    },
    {
      id: 'fd7-concept-map',
      type: 'text' as const,
      content: `
## Complete Concept Map

### The Ideal Fluid Model
- Incompressible ($\\rho = $ const)
- Non-viscous (no internal friction)
- Steady flow (pattern doesn't change)
- Irrotational (no swirling)

### Key Equations

$$Q = Av \\quad \\text{(Volume flow rate)}$$

$$A_1 v_1 = A_2 v_2 \\quad \\text{(Continuity equation)}$$

$$\\dot{m} = \\rho A v \\quad \\text{(Mass flow rate)}$$

### Decision Tree for Problems

1. **Single pipe, two sections:** Direct $A_1 v_1 = A_2 v_2$
2. **Branching pipe:** $Q_{\\text{in}} = Q_1 + Q_2 + ...$
3. **Merging pipes:** $Q_1 + Q_2 + ... = Q_{\\text{out}}$
4. **Filling/draining:** $Q = A_{\\text{container}} \\times (dh/dt)$

### Top 5 Mistakes

| # | Mistake | Correction |
|:---:|:---:|:---:|
| 1 | Forgetting area uses $r^2$ (not $d^2$) | $A = \\pi r^2 = \\pi d^2/4$ |
| 2 | Mixing up radius and diameter | Always convert to radius first |
| 3 | Unit errors (cm vs. m) | Convert everything to SI before calculating |
| 4 | "Wider pipe → faster flow" | Wider pipe → SLOWER flow (by continuity) |
| 5 | Ignoring total area for branching | Add areas of ALL branches, not just one |
      `
    },
    {
      id: 'fd7-mixed-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mixed Concept Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Water flows at 4 m/s through a pipe of area 10 cm². The pipe widens to area 40 cm² and then narrows to area 5 cm². The speed at the narrowest point is:',
            options: [
              '2 m/s',
              '4 m/s',
              '8 m/s',
              '16 m/s'
            ],
            correctAnswer: 2,
            explanation: '$Q = (10)(4) = 40$ cm² · m/s. At the narrowest: $v = Q/A = 40/5 = 8$ m/s. The speed doubles because the area halved compared to the original section.'
          },
          {
            question: 'Streamlines around an airplane wing are closer together above the wing than below. This means:',
            options: [
              'Air moves slower above the wing',
              'Air moves faster above the wing',
              'Pressure is higher above the wing',
              'The wing is generating drag'
            ],
            correctAnswer: 1,
            explanation: 'Closely spaced streamlines → higher velocity. This faster-moving air above the wing creates lower pressure (by Bernoulli — which we\'ll study next!), generating lift.'
          },
          {
            question: 'A pipe system has water entering at the left at 3 m/s through area 20 cm². It exits through two pipes: one with area 10 cm² at 2 m/s, and one with area 15 cm². The speed in the second exit is:',
            options: [
              '2.0 m/s',
              '2.67 m/s',
              '4.0 m/s',
              '1.33 m/s'
            ],
            correctAnswer: 1,
            explanation: '$Q_{\\text{in}} = Q_1 + Q_2$. $(20)(3) = (10)(2) + (15)(v_2)$. $60 = 20 + 15v_2$. $v_2 = 40/15 = 2.67$ m/s.'
          }
        ]
      }
    },
    {
      id: 'fd7-comprehensive-drill',
      type: 'input-boxes' as const,
      content: `
**Comprehensive Drill** (use $\\pi \\approx 3.14$)

A water tower supplies water through a pipe of diameter 10 cm at 2.0 m/s. The pipe splits into two branches: Branch A (diameter 6.0 cm) and Branch B (diameter 8.0 cm), with equal flow rates.

1) Total flow rate from the tower (in L/s)
2) Speed in Branch A (in m/s)
3) Speed in Branch B (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15.7', '2.78', '1.56'],
        hint1: '$Q = \\pi(0.05)^2(2.0)$. Convert to L/s.',
        hint2: 'Equal flow: $Q_A = Q/2$. $v_A = Q_A/(\\pi r_A^2) = Q_A/(\\pi(0.03)^2)$.',
        hint3: '$Q_B = Q/2$. $v_B = Q_B/(\\pi(0.04)^2)$.',
        explanation: '$Q = \\pi(0.05)^2(2.0) = 1.57 \\times 10^{-2}$ m³/s = 15.7 L/s. $Q_A = Q_B = 7.85 \\times 10^{-3}$ m³/s. $v_A = 7.85 \\times 10^{-3}/(\\pi(0.03)^2) = 2.78$ m/s. $v_B = 7.85 \\times 10^{-3}/(\\pi(0.04)^2) = 1.56$ m/s.'
      }
    },
    {
      id: 'fd7-ap-frq',
      type: 'text' as const,
      content: `
## AP-Style FRQ Preview

### Typical Exam Setup

*A horizontal pipe has a cross-sectional area that varies along its length. At point 1, the area is $A_1 = 40$ cm² and the water speed is $v_1 = 2.5$ m/s. At point 2, the area is $A_2 = 10$ cm².*

**(a)** Find the water speed at point 2.

$v_2 = A_1 v_1 / A_2 = (40)(2.5)/(10) = 10$ m/s ✓

**(b)** Is the pressure at point 2 higher or lower than at point 1? Explain.

The pressure at point 2 is **lower**. By Bernoulli's equation (energy conservation), faster-moving fluid has lower pressure. This is the Venturi effect — we'll derive it in the next topic!

**(c)** If the pipe then rises vertically 5 m while maintaining area $A_2$, does the speed change?

**No!** By continuity, same area → same speed, regardless of height. The speed only depends on cross-sectional area.

*This bridges perfectly into our next topic: Bernoulli's Equation!*
      `
    },
    {
      id: 'fd7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about fluid dynamics is FALSE?',
            options: [
              'Volume flow rate is constant along a pipe for incompressible flow',
              'Fluid speeds up when a pipe narrows',
              'Streamlines can cross in steady flow',
              'Mass flow rate is constant along a pipe'
            ],
            correctAnswer: 2,
            explanation: 'Streamlines NEVER cross in steady flow. If they did, a fluid particle at the crossing would have two different velocities — which is impossible for steady flow. All other statements are true.'
          },
          {
            question: 'A garden hose has a nozzle that reduces the exit area to 1/10 of the hose area. Assuming the flow rate stays the same, the exit speed from the nozzle is approximately:',
            options: [
              '10× the hose speed',
              '5× the hose speed',
              '100× the hose speed',
              'The same as the hose speed'
            ],
            correctAnswer: 0,
            explanation: '$A_1 v_1 = A_2 v_2$. $A_2 = A_1/10$, so $v_2 = 10 v_1$. This is why nozzles make water shoot farther — same flow rate, smaller area, much higher speed.'
          }
        ]
      }
    }
  ]
}
