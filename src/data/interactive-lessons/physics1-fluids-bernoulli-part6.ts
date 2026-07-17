export const physics1FluidsBernoulliPart6Data = {
  topicSlug: 'fluids-bernoulli',
  sections: [
    {
      id: 'fbe6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Combined Continuity + Bernoulli

**Part 6 of 7 — Fluids: Bernoulli's Equation**

The hardest AP fluids problems combine BOTH governing equations: continuity to find unknown speeds from geometry, then Bernoulli to find unknown pressures (or vice versa). This part is the workshop where you put them together.

**Key combination workflow:**
1. **Identify** two points on the same streamline.
2. **Continuity:** $A_1 v_1 = A_2 v_2$ → solve for the unknown speed.
3. **Bernoulli:** $P_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g y_1 = P_2 + \\tfrac{1}{2}\\rho v_2^2 + \\rho g y_2$ → solve for the unknown pressure.
      `
    },
    {
      id: 'fbe6-strategy',
      type: 'text' as const,
      content: `
## Strategy Cheat Sheet

| Given | Use |
|-------|-----|
| Areas + one $v$ | Continuity for unknown $v$ |
| Speeds + one $P$ | Bernoulli for unknown $P$ |
| Manometer reading | $\\Delta P = \\rho_{man} g h$ then Bernoulli |
| Tank with hole | Torricelli (special-case Bernoulli) |
| Pitot tube | $P_{stag} = P_{static} + \\tfrac{1}{2}\\rho v^2$ |

### Worked Venturi

A horizontal Venturi: wide section $A_1 = 0.10$ $m^{2}$ has $v_1 = 2$ m/s, $P_1 = 200$ kPa; narrow throat $A_2 = 0.025$ $m^{2}$. Find $P_2$.

**Step 1 — Continuity:** $v_2 = v_1 (A_1/A_2) = 2 \\times 4 = 8$ m/s.

**Step 2 — Bernoulli (horizontal):**
$$P_2 = P_1 + \\tfrac{1}{2}\\rho(v_1^2 - v_2^2) = 200{,}000 + \\tfrac{1}{2}(1000)(4 - 64) = 170{,}000 \\text{ Pa}$$

So $P_2 = 170$ kPa. The throat pressure dropped by 30 kPa.

### Combined Pipe with Elevation Change

A pipe carries water from $A_1 = 0.04$ $m^{2}$, $v_1 = 1$ m/s, $y_1 = 0$, $P_1 = 300$ kPa upward to $A_2 = 0.01$ $m^{2}$, $y_2 = 5$ m. Find $P_2$.

- $v_2 = 4$ m/s by continuity.
- Bernoulli: $P_2 = 300{,}000 + \\tfrac{1}{2}(1000)(1 - 16) + 1000(10)(0 - 5) = 300{,}000 - 7500 - 50{,}000 = 242{,}500$ Pa.
      `
    },
    {
      id: 'fbe6-mc',
      type: 'multiple-choice' as const,
      content: `
**Combined Application Quick MC** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a horizontal Venturi tube, the pressure drop from the wide section to the narrow throat depends MOST directly on:',
            options: [
              'The fluid density and the difference in $v^2$',
              'The pipe length',
              'The fluid temperature',
              'Atmospheric pressure'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta P = \\tfrac{1}{2}\\rho(v_2^2 - v_1^2)$.'
          },
          {
            question: 'Continuity tells us about which variable, given pipe geometry?',
            options: [
              'Pressure',
              'Speed',
              'Temperature',
              'Density'
            ],
            correctAnswer: 1,
            explanation: 'Continuity gives unknown speed from area ratios.'
          },
          {
            question: 'For a pipe with both area and elevation changes, you must apply:',
            options: [
              'Only Bernoulli',
              'Only Continuity',
              'Both — Continuity first, then Bernoulli',
              'Newton\'s 2nd law'
            ],
            correctAnswer: 2,
            explanation: 'Use continuity for unknown speed, then Bernoulli for pressure.'
          }
        ]
      }
    },
    {
      id: 'fbe6-input',
      type: 'input-boxes' as const,
      content: `
**Combined Workshop** 🧮 ($\\rho_w = 1000$, g = 10)

1) Horizontal Venturi: $A_1 = 0.020$ $m^{2}$, $v_1 = 3$ m/s, $P_1 = 250$ kPa; $A_2 = 0.010$ $m^{2}$. Find $P_2$ (kPa).

2) A vertical pipe: $A_1 = 0.005$ $m^{2}$, $v_1 = 4$ m/s, $y_1 = 0$, $P_1 = 400$ kPa. Upper end: $A_2 = 0.005$ $m^{2}$ (same area), $y_2 = 10$ m. Find $P_2$ (kPa).

3) Same pipe, but upper end narrows to $A_2 = 0.0025$ $m^{2}$. Find $P_2$ (kPa).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['236.5', '300', '276'],
        hint1: 'Continuity, then Bernoulli horizontal.',
        hint2: 'Same area ⇒ same speed; only $\\rho g h$ matters.',
        hint3: 'Now both speed and height change.',
        explanation: '1) $v_2 = 6$ m/s. $P_2 = 250{,}000 + \\tfrac{1}{2}(1000)(9 - 36) = 250{,}000 - 13{,}500 = 236{,}500$ Pa = 236.5 kPa. 2) $v_1 = v_2$. $P_2 = 400{,}000 - 1000(10)(10) = 300{,}000$ Pa = 300 kPa. 3) $v_2 = 8$ m/s. $P_2 = 400{,}000 + \\tfrac{1}{2}(1000)(16-64) + 1000(10)(0-10) = 400{,}000 - 24{,}000 - 100{,}000 = 276{,}000$ Pa = 276 kPa.'
      }
    },
    {
      id: 'fbe6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Combined-Reasoning Drill** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For a horizontal pipe that narrows from $A$ to $A/2$, applying continuity then Bernoulli, the pressure at the narrow end:',
            options: ['Increases by $\\tfrac{1}{2}\\rho v^2$', 'Decreases by $\\tfrac{3}{2}\\rho v^2$', 'Stays the same', 'Doubles'],
            correctIndex: 1,
            explanation: '$v_2 = 2v_1$. $\\Delta P = \\tfrac{1}{2}\\rho(v_1^2 - 4v_1^2) = -\\tfrac{3}{2}\\rho v_1^2$.'
          },
          {
            label: 'A pipe of the same area carries water UP a height $h$. Bernoulli gives the pressure decrease:',
            options: ['$\\tfrac{1}{2}\\rho v^2$', '$\\rho g h$', '$P_{atm}$', 'Zero'],
            correctIndex: 1,
            explanation: 'Same area ⇒ no KE change; only $\\rho g h$ from elevation gain.'
          },
          {
            label: 'In a Venturi flow meter, the manometer height difference depends primarily on:',
            options: ['Pipe length', 'Flow rate squared', 'Atmospheric pressure', 'Fluid temperature'],
            correctIndex: 1,
            explanation: 'Pressure drop ∝ $v^2$ ∝ $Q^2$ for given geometry.'
          },
          {
            label: 'When solving combined problems, the FIRST equation you usually apply is:',
            options: ['Bernoulli', 'Continuity (to get the unknown speed)', 'Newton\'s 2nd law', 'Pascal\'s Principle'],
            correctIndex: 1,
            explanation: 'Find the unknown speed from continuity first, then plug into Bernoulli.'
          }
        ]
      }
    },
    {
      id: 'fbe6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Combined Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A horizontal pipe goes from $A_1 = 0.10$ $m^{2}$ ($v_1 = 1$ m/s, $P_1 = 300$ kPa) to $A_2 = 0.025$ $m^{2}$. The pressure $P_2$ is:',
            options: [
              '$292.5$ kPa',
              '$300$ kPa',
              '$307.5$ kPa',
              '$312$ kPa'
            ],
            correctAnswer: 0,
            explanation: '$v_2 = 4$ m/s. $\\Delta P = \\tfrac{1}{2}(1000)(1-16) = -7500$ Pa. $P_2 = 292.5$ kPa.'
          },
          {
            question: 'A pipe of constant cross-section ($A_1 = A_2$) goes from ground level ($P_1 = 500$ kPa) up to height $y_2 = 20$ m. The pressure at the top?',
            options: [
              '$300$ kPa',
              '$500$ kPa',
              '$700$ kPa',
              '$200$ kPa'
            ],
            correctAnswer: 0,
            explanation: 'Same area ⇒ same speed. $P_2 = P_1 - \\rho g h = 500 - 200 = 300$ kPa.'
          }
        ]
      }
    }
  ]
}
