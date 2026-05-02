export const physics1FluidsContinuityPart5Data = {
  topicSlug: 'fluids-continuity',
  sections: [
    {
      id: 'fc5-intro',
      type: 'text' as const,
      content: `
# ⚖ Mass Flow Rate

**Part 5 of 7 — Fluids: Continuity**

Volume flow rate $Q = Av$ assumes incompressible flow. For gases or any case where density may vary, we use **mass flow rate** $\\dot m = \\rho A v$, which is conserved more generally.

**In this lesson you will learn:**
- The definition $\\dot m = \\rho A v$
- When to use mass vs volume flow rate
- The general continuity statement $\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$
- AP-style problems mixing density and area changes
      `
    },
    {
      id: 'fc5-mass',
      type: 'text' as const,
      content: `
## Mass Flow Rate

$$\\dot m = \\rho\\, A\\, v$$

- $\\dot m$: mass flow rate (kg/s)
- $\\rho$: fluid density (kg/m³)
- $A$: cross-sectional area (m²)
- $v$: speed (m/s)

### General Continuity (covers compressible flow too)

$$\\boxed{\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2}$$

For incompressible fluids ($\\rho_1 = \\rho_2$), $\\rho$ cancels and we recover $A_1 v_1 = A_2 v_2$.

### Why It Matters

- **Liquids** (water, oil, blood): nearly incompressible → use $Q = Av$.
- **Gases**: compressible → use $\\dot m = \\rho Av$ when density varies.
- **AP Physics 1**: usually focused on incompressible fluids; mass flow rate appears in conceptual or unit problems.

### Quick Conversions

$$Q (\\text{m}^3/\\text{s}) \\times \\rho (\\text{kg/m}^3) = \\dot m (\\text{kg/s})$$

For water ($\\rho = 1000$): $\\dot m = 1000\\, Q$.
      `
    },
    {
      id: 'fc5-mc',
      type: 'multiple-choice' as const,
      content: `
**Mass Flow Rate Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Mass flow rate $\\dot m$ has units of:',
            options: ['m³/s', 'kg/s', 'N/s', 'm/s'],
            correctAnswer: 1,
            explanation: '$\\dot m = \\rho A v$ → kg/m³ × m² × m/s = kg/s.'
          },
          {
            question: 'For an incompressible fluid, mass flow rate equals:',
            options: [
              '$\\rho Q$',
              '$Q / \\rho$',
              '$\\rho^2 Q$',
              '$\\rho + Q$'
            ],
            correctAnswer: 0,
            explanation: '$\\dot m = \\rho A v = \\rho Q$.'
          },
          {
            question: 'A pipe carries water at $Q = 0.020$ m³/s. The mass flow rate is:',
            options: [
              '0.020 kg/s',
              '20 kg/s',
              '200 kg/s',
              '2000 kg/s'
            ],
            correctAnswer: 1,
            explanation: '$\\dot m = 1000 \\times 0.020 = 20$ kg/s.'
          }
        ]
      }
    },
    {
      id: 'fc5-input',
      type: 'input-boxes' as const,
      content: `
**Mass Flow Calculations** 🧮 ($\\rho_w = 1000$, $\\rho_{oil} = 850$)

1) Pipe area $A = 0.0040$ m², $v = 5.0$ m/s carries water. $\\dot m$ (kg/s)?

2) Same pipe carrying oil instead. $\\dot m$ (kg/s)?

3) A 0.50 m² pipe with $v = 2.0$ m/s carries air ($\\rho = 1.2$). $\\dot m$ (kg/s)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '17', '1.2'],
        hint1: '$\\dot m = \\rho A v$.',
        hint2: 'Lower density.',
        hint3: '$\\dot m = \\rho A v$.',
        explanation: '1) $\\dot m = 1000(0.0040)(5.0) = 20$ kg/s. 2) $\\dot m = 850(0.0040)(5.0) = 17$ kg/s. 3) $\\dot m = 1.2(0.50)(2.0) = 1.2$ kg/s.'
      }
    },
    {
      id: 'fc5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Mass Flow Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For an incompressible fluid in a pipe with no leaks, mass flow rate $\\dot m$:',
            options: ['Decreases at constrictions', 'Increases at constrictions', 'Stays constant everywhere', 'Becomes zero in narrow parts'],
            correctIndex: 2,
            explanation: 'Volume conservation + constant density → mass flow rate is conserved everywhere.'
          },
          {
            label: 'A gas accelerates through a nozzle and its density DROPS by half. To keep $\\dot m$ constant with same area, $v$ must:',
            options: ['Halve', 'Stay same', 'Double', 'Quadruple'],
            correctIndex: 2,
            explanation: '$\\dot m = \\rho A v$ constant. $\\rho$ × ½ → $v$ × 2.'
          },
          {
            label: 'For water flowing in a pipe network, conservation of mass flow rate is equivalent to:',
            options: ['Conservation of volume flow rate (Q)', 'Conservation of pressure', 'Conservation of energy', 'Conservation of momentum'],
            correctIndex: 0,
            explanation: 'For incompressible fluids, $\\dot m$ and $Q$ conservation say the same thing (since $\\rho$ is constant).'
          },
          {
            label: 'A liquid pipeline delivers 50 kg/s of water. The volume flow rate (m³/s) is:',
            options: ['0.05', '0.5', '5', '50'],
            correctIndex: 0,
            explanation: '$Q = \\dot m/\\rho = 50/1000 = 0.05$ m³/s = 50 L/s.'
          }
        ]
      }
    },
    {
      id: 'fc5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Mass Flow Rate** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A pipe carries oil ($\\rho = 850$ kg/m³) at $v = 3.0$ m/s through cross-section $A = 0.020$ m². Mass flow rate?',
            options: [
              '5.1 kg/s',
              '17 kg/s',
              '51 kg/s',
              '170 kg/s'
            ],
            correctAnswer: 2,
            explanation: '$\\dot m = 850 \\times 0.020 \\times 3.0 = 51$ kg/s.'
          },
          {
            question: 'A fan moves air ($\\rho = 1.2$ kg/m³) through a 0.40 m² duct at 5 m/s. Mass flow rate?',
            options: [
              '0.24 kg/s',
              '2.4 kg/s',
              '24 kg/s',
              '240 kg/s'
            ],
            correctAnswer: 1,
            explanation: '$\\dot m = 1.2 \\times 0.40 \\times 5 = 2.4$ kg/s.'
          }
        ]
      }
    }
  ]
}
