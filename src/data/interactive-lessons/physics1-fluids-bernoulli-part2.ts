export const physics1FluidsBernoulliPart2Data = {
  topicSlug: 'fluids-bernoulli',
  sections: [
    {
      id: 'fbe2-intro',
      type: 'text' as const,
      content: `
# ⚡ Conservation of Energy in Fluids

**Part 2 of 7 — Fluids: Bernoulli's Equation**

Bernoulli's equation is just **energy conservation**, repackaged. Each term is an energy density. Understanding the link to mechanical energy makes Bernoulli intuitive — it's $\\tfrac{1}{2}mv^2 + mgy$ from kinematics, divided by volume, plus a pressure-work term.

**In this lesson you will learn:**
- The derivation: work-energy theorem applied to a fluid parcel
- Why pressure × volume is "flow work"
- How each term maps to a familiar mechanics concept
- A units check
      `
    },
    {
      id: 'fbe2-derivation',
      type: 'text' as const,
      content: `
## Derivation Sketch

Consider a fluid parcel of volume $V$ moving from point 1 to point 2 along a streamline.

The work-energy theorem says:

$$W_{net} = \\Delta KE + \\Delta PE \\quad \\text{(for each unit volume)}$$

Forces doing work on the parcel:
- Pressure forces from neighboring fluid: $W_{pressure} = (P_1 - P_2) V$
- Gravity: appears in $\\Delta PE$

KE change per unit volume: $\\tfrac{1}{2}\\rho v_2^2 - \\tfrac{1}{2}\\rho v_1^2$.
PE change per unit volume: $\\rho g y_2 - \\rho g y_1$.

Combining:

$$(P_1 - P_2) = (\\tfrac{1}{2}\\rho v_2^2 - \\tfrac{1}{2}\\rho v_1^2) + (\\rho g y_2 - \\rho g y_1)$$

Rearranging:

$$P_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g y_1 = P_2 + \\tfrac{1}{2}\\rho v_2^2 + \\rho g y_2$$

### Mapping to Mechanics

| Mechanics | Bernoulli (per unit volume) |
|-----------|------------------------------|
| KE = $\\tfrac{1}{2}mv^2$ | $\\tfrac{1}{2}\\rho v^2$ |
| PE = $mgy$ | $\\rho g y$ |
| Work by external force | $P V$ → in Bernoulli, $P$ is energy density |

### Quick Sanity Check (Units)

- $[P] = \\text{Pa} = \\text{N/m}^2 = \\text{N·m/m}^3 = \\text{J/m}^3$
- $[\\tfrac{1}{2}\\rho v^2] = (\\text{kg/m}^3)(\\text{m/s})^2 = \\text{kg·m}^{-1}\\text{s}^{-2} = \\text{J/m}^3 ✓$
- $[\\rho g y] = (\\text{kg/m}^3)(\\text{m/s}^2)(\\text{m}) = \\text{J/m}^3 ✓$
      `
    },
    {
      id: 'fbe2-mc',
      type: 'multiple-choice' as const,
      content: `
**Energy Conservation Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Bernoulli\'s equation, multiplied through by volume, gives:',
            options: [
              'Conservation of momentum',
              'Conservation of mechanical energy for a fluid parcel',
              'Conservation of mass',
              'Pascal\'s Principle'
            ],
            correctAnswer: 1,
            explanation: 'Each term × $V$ → $PV$ (flow work) + $\\tfrac{1}{2}mv^2$ (KE) + $mgy$ (PE). Total energy conserved.'
          },
          {
            question: 'The "$P$" in Bernoulli\'s equation represents:',
            options: [
              'Pressure-work per unit volume',
              'Density',
              'Velocity squared',
              'Temperature'
            ],
            correctAnswer: 0,
            explanation: 'Pressure × volume = work done by neighboring fluid as the parcel flows. Per unit volume, that\'s just $P$.'
          },
          {
            question: 'If a fluid speeds up at the same elevation, by Bernoulli, the pressure must:',
            options: [
              'Increase',
              'Decrease',
              'Stay the same',
              'Drop to zero'
            ],
            correctAnswer: 1,
            explanation: 'Constant total energy → if KE term goes UP, $P$ must go DOWN to compensate.'
          }
        ]
      }
    },
    {
      id: 'fbe2-input',
      type: 'input-boxes' as const,
      content: `
**Energy-Density Calculations** 🧮 (g = 10, $\\rho_w = 1000$)

1) Compute kinetic energy per unit volume of water moving at 5 m/s (Pa).

2) Compute gravitational PE per unit volume of water at $y = 8$ m (Pa).

3) The total $P + \\tfrac{1}{2}\\rho v^2 + \\rho g y$ at a point with $P = 90$ kPa, $v = 2$ m/s, $y = 4$ m (Pa)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12500', '80000', '132000'],
        hint1: '$\\tfrac{1}{2}\\rho v^2$.',
        hint2: '$\\rho g y$.',
        hint3: 'Add three terms.',
        explanation: '1) $\\tfrac{1}{2}(1000)(25) = 12{,}500$ Pa. 2) $1000(10)(8) = 80{,}000$ Pa. 3) $90{,}000 + 2000 + 40{,}000 = 132{,}000$ Pa.'
      }
    },
    {
      id: 'fbe2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Energy in Bernoulli Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In Bernoulli, the analog of mechanical KE is:',
            options: ['$\\rho g y$', '$\\tfrac{1}{2}\\rho v^2$', '$P$', 'Constant'],
            correctIndex: 1,
            explanation: '$\\tfrac{1}{2}\\rho v^2$ is KE/V — same form as $\\tfrac{1}{2}mv^2$ divided by $V$.'
          },
          {
            label: 'For a fluid moving HORIZONTALLY along a streamline, Bernoulli simplifies to:',
            options: ['$P_1 = P_2$ always', '$P_1 + \\tfrac{1}{2}\\rho v_1^2 = P_2 + \\tfrac{1}{2}\\rho v_2^2$', '$P_1 = \\rho g h$', '$v_1 = v_2$'],
            correctIndex: 1,
            explanation: 'No height change → drop the $\\rho g y$ terms.'
          },
          {
            label: 'A fluid in a pipe gains height. To preserve energy, the speed-pressure combination must:',
            options: ['Both increase', 'Stay the same', 'At least one decreases', 'Both go to zero'],
            correctIndex: 2,
            explanation: 'Since $\\rho g y$ grows, $P + \\tfrac{1}{2}\\rho v^2$ must decrease.'
          },
          {
            label: 'Each Bernoulli term has units of:',
            options: ['m/s', 'kg/m³', 'J/m³ (= Pa)', 'N/s'],
            correctIndex: 2,
            explanation: 'Energy per unit volume — confirmed by dimensional analysis.'
          }
        ]
      }
    },
    {
      id: 'fbe2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Energy in Fluids** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A pipe is HORIZONTAL. At point 1: $P_1 = 200$ kPa, $v_1 = 2$ m/s. At point 2 (narrower): $v_2 = 6$ m/s. $P_2$? ($\\rho_w = 1000$)',
            options: [
              '$184$ kPa',
              '$192$ kPa',
              '$208$ kPa',
              '$216$ kPa'
            ],
            correctAnswer: 0,
            explanation: '$P_2 = P_1 + \\tfrac{1}{2}\\rho(v_1^2 - v_2^2) = 200{,}000 + \\tfrac{1}{2}(1000)(4 - 36) = 200{,}000 - 16{,}000 = 184$ kPa.'
          },
          {
            question: 'The TOTAL Bernoulli "head" $P + \\tfrac{1}{2}\\rho v^2 + \\rho g y$ along a streamline of an ideal fluid is:',
            options: [
              'Increasing',
              'Decreasing',
              'Constant',
              'Zero'
            ],
            correctAnswer: 2,
            explanation: 'Energy conservation along a streamline ⇒ sum constant.'
          }
        ]
      }
    }
  ]
}
