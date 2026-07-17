export const physics1FluidsBernoulliPart7Data = {
  topicSlug: 'fluids-bernoulli',
  sections: [
    {
      id: 'fbe7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review — Bernoulli

**Part 7 of 7 — Fluids: Bernoulli's Equation**

You've completed the full AP Physics 1 fluids progression: density, pressure, buoyancy, continuity, and Bernoulli. This synthesis ties Bernoulli together with continuity into the integrated mental model AP expects — fast questions, big-picture reasoning, and confident calculations.

**Big Ideas Recap:**
- $P_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g y_1 = P_2 + \\tfrac{1}{2}\\rho v_2^2 + \\rho g y_2$
- Faster fluid = lower pressure (at same height)
- Torricelli: $v = \\sqrt{2gh}$
- Pitot: $P_{stag} - P_{static} = \\tfrac{1}{2}\\rho v^2$
- Combined Continuity + Bernoulli unlocks Venturi-type problems
      `
    },
    {
      id: 'fbe7-cheat',
      type: 'text' as const,
      content: `
## Bernoulli AP Cheat Sheet

| Concept | Equation |
|---------|----------|
| Bernoulli (general) | $P + \\tfrac{1}{2}\\rho v^2 + \\rho g y = $ const |
| Horizontal pipe | $P_1 + \\tfrac{1}{2}\\rho v_1^2 = P_2 + \\tfrac{1}{2}\\rho v_2^2$ |
| Constant area pipe | $P_1 + \\rho g y_1 = P_2 + \\rho g y_2$ (just hydrostatic) |
| Torricelli | $v = \\sqrt{2gh}$ |
| Pitot tube | $v = \\sqrt{2(P_{stag} - P_{static})/\\rho}$ |
| Lift (rough) | $F_{lift} \\approx \\tfrac{1}{2}\\rho_{air}(v_t^2 - v_b^2) A$ |
| Continuity (incompressible) | $A_1 v_1 = A_2 v_2$ |

### AP Reasoning Patterns

1. **"Pressure drops where fluid speeds up"** — Bernoulli at same height.
2. **"Tank drains faster when..."** — Torricelli, larger $h$ ⇒ larger $v$.
3. **"Wing lift comes from..."** — pressure difference from speed difference.
4. **"Two parallel boats drift together"** — Bernoulli ⇒ low $P$ between them.
5. **"Combined speed + pressure problem"** — apply continuity, then Bernoulli.

### Common Pitfalls
- ❌ Forgetting that ALL Bernoulli terms are per unit volume (Pa).
- ❌ Confusing $\\rho_{fluid}$ with $\\rho_{air}$ in lift problems.
- ❌ Applying Bernoulli to viscous or turbulent flow (e.g., long thin pipes with friction).
- ❌ Forgetting to use continuity FIRST when speeds aren't given directly.

### Final Mental Model

> Bernoulli = "energy conservation per unit volume along a streamline." Find your two points, identify $P$, $v$, $y$ at each, and let energy do the rest.
      `
    },
    {
      id: 'fbe7-mc',
      type: 'multiple-choice' as const,
      content: `
**AP Synthesis MC** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A horizontal pipe narrows. Compared to the wide section, the narrow section has:',
            options: [
              'Higher speed and higher pressure',
              'Higher speed and lower pressure',
              'Lower speed and lower pressure',
              'Lower speed and higher pressure'
            ],
            correctAnswer: 1,
            explanation: 'Continuity ⇒ faster; Bernoulli (same $y$) ⇒ lower $P$.'
          },
          {
            question: 'Torricelli\'s Theorem $v = \\sqrt{2gh}$ depends on which assumption?',
            options: [
              'Tank cross-section ≫ hole cross-section',
              'Fluid is compressible',
              'Hole is at the top of the tank',
              'External pressure differs at surface vs. hole'
            ],
            correctAnswer: 0,
            explanation: 'Required so that surface speed $\\approx 0$.'
          },
          {
            question: 'Bernoulli\'s equation conserves which quantity along a streamline?',
            options: [
              'Mass',
              'Energy per unit volume',
              'Momentum',
              'Pressure alone'
            ],
            correctAnswer: 1,
            explanation: 'Bernoulli is energy density conservation.'
          }
        ]
      }
    },
    {
      id: 'fbe7-input',
      type: 'input-boxes' as const,
      content: `
**AP Synthesis Calculations** 🧮 ($\\rho_w = 1000$, $\\rho_{air} = 1.2$, g = 10)

1) A large open tank's water surface is 10 m above a small hole. Exit speed (m/s)?

2) Horizontal pipe: $A_1 = 0.04$ $m^{2}$, $v_1 = 1$ m/s, $P_1 = 200$ kPa; $A_2 = 0.01$ $m^{2}$. Find $P_2$ (kPa).

3) A Pitot tube on a small drone reads $\\Delta P = 24$ Pa ($\\rho_{air} = 1.2$). Airspeed (m/s)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['14.14', '192.5', '6.32'],
        hint1: '$v = \\sqrt{2gh}$.',
        hint2: 'Continuity then Bernoulli horizontal.',
        hint3: '$v = \\sqrt{2\\Delta P/\\rho}$.',
        explanation: '1) $v = \\sqrt{2(10)(10)} = \\sqrt{200} ≈ 14.14$ m/s. 2) $v_2 = 4$ m/s. $\\Delta P = \\tfrac{1}{2}(1000)(1-16) = -7500$ Pa. $P_2 = 192.5$ kPa. 3) $v = \\sqrt{2(24)/1.2} = \\sqrt{40} ≈ 6.32$ m/s.'
      }
    },
    {
      id: 'fbe7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**AP Concept Synthesis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bernoulli\'s equation does NOT apply when:',
            options: ['Flow is steady', 'Fluid is incompressible', 'Flow is highly viscous and turbulent', 'Two points are on the same streamline'],
            correctIndex: 2,
            explanation: 'Bernoulli requires non-viscous, steady, incompressible flow.'
          },
          {
            label: 'A water tower 20 m tall feeds a horizontal pipe at ground level. Static pressure at the pipe (with $v$ small) is approximately ($\\rho_w g h$):',
            options: ['$2$ kPa', '$20$ kPa', '$200$ kPa', '$2000$ kPa'],
            correctIndex: 2,
            explanation: '$\\rho g h = 1000(10)(20) = 200$ kPa.'
          },
          {
            label: 'A rooftop air-conditioner exhaust faces the wind (windward). On a windy day, the airflow at the exhaust port has $\\tfrac{1}{2}\\rho v^2$ ≈:',
            options: ['$0$', 'A small Pa value (~10s of Pa for moderate wind)', 'Comparable to atmospheric pressure', 'Negative'],
            correctIndex: 1,
            explanation: 'Even 10 m/s wind gives $\\tfrac{1}{2}(1.2)(100) = 60$ Pa, much smaller than $P_{atm}$ but enough to matter.'
          },
          {
            label: 'For most AP fluids problems involving moving fluids in pipes, the strategy is:',
            options: ['Continuity → Bernoulli', 'Bernoulli only', 'Pascal only', 'Buoyancy + Newton\'s 2nd Law'],
            correctIndex: 0,
            explanation: 'Use continuity to find unknown speeds, then Bernoulli for pressures.'
          }
        ]
      }
    },
    {
      id: 'fbe7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Bernoulli Synthesis** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A large open tank has water 1.25 m above a small hole; the hole is 0.45 m above the floor. The horizontal range $R$ where the jet hits the floor (g = 10)?',
            options: [
              '$0.5$ m',
              '$1.0$ m',
              '$1.5$ m',
              '$2.0$ m'
            ],
            correctAnswer: 2,
            explanation: '$R = 2\\sqrt{hH} = 2\\sqrt{1.25 \\times 0.45} = 2\\sqrt{0.5625} = 2(0.75) = 1.5$ m.'
          },
          {
            question: 'Water flows in a horizontal pipe from $A_1 = 0.04$ $m^{2}$ to $A_2 = 0.01$ $m^{2}$. If $v_1 = 2$ m/s and $P_1 = 250$ kPa, the pressure $P_2$ at the narrow end is:',
            options: [
              '$220$ kPa',
              '$280$ kPa',
              '$310$ kPa',
              '$190$ kPa'
            ],
            correctAnswer: 0,
            explanation: '$v_2 = 8$ m/s. $\\Delta P = \\tfrac{1}{2}(1000)(4 - 64) = -30$ kPa. $P_2 = 220$ kPa.'
          }
        ]
      }
    }
  ]
}
