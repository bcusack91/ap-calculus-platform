export const physics1FluidsContinuityPart6Data = {
  topicSlug: 'fluids-continuity',
  sections: [
    {
      id: 'fc6-intro',
      type: 'text' as const,
      content: `
# 🛠 Continuity Problem-Solving Workshop

**Part 6 of 7 — Fluids: Continuity**

This workshop combines volume flow rate, pipe narrowing, branching, and mass flow rate. AP problems often require translating words ("the diameter is halved" or "the river widens") into the right ratio.

**Workshop Strategy:**
1. Write down what's given: $A$ or $r$ or $d$? Speed or volume rate?
2. Use $A = \\pi r^2$ for circular pipes (or $A = \\pi d^2/4$).
3. Apply $A_1 v_1 = A_2 v_2$ (or junction sums).
4. For mass flow questions, multiply by $\\rho$.
      `
    },
    {
      id: 'fc6-summary',
      type: 'text' as const,
      content: `
## Workshop Quick Reference

| Quantity | Equation |
|---------|----------|
| Volume flow rate | $Q = Av$ |
| Continuity (incompressible) | $A_1 v_1 = A_2 v_2$ |
| Mass flow rate | $\\dot m = \\rho A v$ |
| Junction (in = out) | $\\sum Q_{in} = \\sum Q_{out}$ |
| Circular area | $A = \\pi r^2 = \\pi d^2/4$ |
| Speed ratio (circular) | $v_2/v_1 = (r_1/r_2)^2$ |

### Strategy Tips

- "Diameter halved" or "radius halved": speed × 4.
- "Pipe doubles in diameter": speed × 1/4.
- "Splits into N equal branches with same cross-section as the main": speed in each branch = $v_{main}/N$.
- "Splits into N equal branches with same TOTAL cross-section": speed in each branch = $v_{main}$.
      `
    },
    {
      id: 'fc6-mc',
      type: 'multiple-choice' as const,
      content: `
**Workshop MC** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A pipe of diameter 4 cm carries water at 3 m/s. Speed in a section where the diameter is 2 cm?',
            options: [
              '1.5 m/s',
              '6 m/s',
              '12 m/s',
              '24 m/s'
            ],
            correctAnswer: 2,
            explanation: 'Diameter ÷ 2 → area ÷ 4 → speed × 4 = 12 m/s.'
          },
          {
            question: 'A river enters a narrow gorge. Width: 60 m → 20 m. Depth: 4 m → 6 m. Speed in the wide part is 1.0 m/s. Speed in the gorge?',
            options: [
              '0.5 m/s',
              '1.0 m/s',
              '2.0 m/s',
              '4.0 m/s'
            ],
            correctAnswer: 2,
            explanation: '$A_1 = 240$ $m^{2}$, $A_2 = 120$ $m^{2}$. $v_2 = v_1 (A_1/A_2) = 1.0 \\times 2 = 2.0$ m/s.'
          }
        ]
      }
    },
    {
      id: 'fc6-input',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮 ($\\rho_w = 1000$)

1) A circular pipe of radius 0.020 m carries water at 2.0 m/s. Volume flow rate $(m^{3}/s)$?

2) Same pipe narrows to radius 0.010 m. New speed (m/s)?

3) Pipe area $0.0050$ $m^{2}$, $v = 4.0$ m/s. Mass flow rate of water (kg/s)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.00251', '8', '20'],
        hint1: '$Q = \\pi r^2 v$.',
        hint2: 'Speed × $(r_1/r_2)^2$.',
        hint3: '$\\dot m = \\rho A v$.',
        explanation: '1) $Q = \\pi (0.020)^2 (2.0) ≈ 0.00251$ $m^{3}/s$. 2) $v_2 = 2.0 \\times 4 = 8.0$ m/s. 3) $\\dot m = 1000(0.0050)(4.0) = 20$ kg/s.'
      }
    },
    {
      id: 'fc6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Workshop Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Splitting one main pipe into 4 equal branches each with $A = A_{main}/4$. Speed in each branch (vs main):',
            options: ['Same as main', '× 4 main', '÷ 4 main', '÷ 16 main'],
            correctIndex: 0,
            explanation: 'Each branch carries 1/4 of $Q$. Each branch area is also 1/4 → $v_{branch} = (Q/4)/(A/4) = Q/A = v_{main}$.'
          },
          {
            label: 'Splitting one main pipe into 4 equal branches each with $A = A_{main}$. Speed in each branch:',
            options: ['Same as main', '× 4 main', '÷ 4 main', '÷ 16 main'],
            correctIndex: 2,
            explanation: '$v_{branch} = (Q/4)/A_{main} = v_{main}/4$.'
          },
          {
            label: 'Mass flow rate of water in a pipe is 5 kg/s. Volume flow rate $(m^{3}/s)$:',
            options: ['0.005', '0.05', '0.5', '5'],
            correctIndex: 0,
            explanation: '$Q = \\dot m / \\rho = 5/1000 = 0.005$ $m^{3}/s$.'
          },
          {
            label: 'A river slows down where it widens. The cross-sectional area:',
            options: ['Decreases', 'Stays the same', 'Increases', 'Becomes zero'],
            correctIndex: 2,
            explanation: 'Continuity: lower speed ⇒ larger area to keep $Q$ constant.'
          }
        ]
      }
    },
    {
      id: 'fc6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 4 cm diameter horizontal pipe carries water at 3.0 m/s. It splits into TWO equal-area branches, each of 4 cm diameter. Speed in each branch?',
            options: [
              '0.75 m/s',
              '1.5 m/s',
              '3.0 m/s',
              '6.0 m/s'
            ],
            correctAnswer: 1,
            explanation: '$Q_{main} = A_{main} v_{main}$. Each branch: $Q_{main}/2 = A_{branch} v_{branch}$. Same $A$, so $v_{branch} = v_{main}/2 = 1.5$ m/s.'
          },
          {
            question: 'A pipe of radius 5.0 cm carries water at speed $v$. The mass flow rate is 31.4 kg/s. Find $v$.',
            options: [
              '0.4 m/s',
              '4 m/s',
              '40 m/s',
              '400 m/s'
            ],
            correctAnswer: 1,
            explanation: '$A = \\pi (0.05)^2 ≈ 7.85\\times10^{-3}$ $m^{2}$. $v = \\dot m/(\\rho A) = 31.4/(1000 \\times 7.85\\times10^{-3}) = 4.0$ m/s.'
          }
        ]
      }
    }
  ]
}
