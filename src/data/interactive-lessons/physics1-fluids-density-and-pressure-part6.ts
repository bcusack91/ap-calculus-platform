export const physics1FluidsDensityPressurePart6Data = {
  topicSlug: 'fluids-density-and-pressure',
  sections: [
    {
      id: 'fdp6-intro',
      type: 'text' as const,
      content: `
# 🛠 Problem-Solving Workshop

**Part 6 of 7 — Fluids: Density & Pressure**

Time to combine everything: density, hydrostatic pressure, gauge vs absolute, and Pascal's Principle. AP fluids problems often blend two or three of these — let's practice that integration.

**Workshop Strategy:**
1. Identify the fluid's $\\rho$ and the relevant depth $h$.
2. Decide gauge or absolute (does the problem care about $P_{atm}$?).
3. For hydraulic problems, set $P$ equal at both pistons.
4. Always check units: kg/m³, m, Pa, N.
      `
    },
    {
      id: 'fdp6-strategy',
      type: 'text' as const,
      content: `
## Workflow Cheat Sheet

| Quantity | Formula |
|---------|---------|
| Density | $\\rho = m/V$ |
| Pressure (definition) | $P = F/A$ |
| Hydrostatic gauge | $P = \\rho g h$ |
| Hydrostatic absolute | $P_{abs} = P_{atm} + \\rho g h$ |
| Force on submerged surface | $F = P A$ |
| Hydraulic equality | $F_1/A_1 = F_2/A_2$ |
| Volume conservation | $A_1 d_1 = A_2 d_2$ |

### Common AP Combination Problems
- "Find the force on the bottom of a tank" → $F = P_{gauge} A$
- "Find force on a side wall (varying depth)" → integrate or use average pressure $P_{avg} = \\rho g (h/2)$, then $F = P_{avg} A$
- "Hydraulic lift with depth" → include $\\rho g h$ correction if pistons aren't at the same height
      `
    },
    {
      id: 'fdp6-mc',
      type: 'multiple-choice' as const,
      content: `
**Workshop MC** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 2.0 m × 3.0 m tank bottom holds water 1.5 m deep. Force from water on the bottom (g = 10) is:',
            options: [
              '$9.0\\times10^{4}$ N',
              '$1.5\\times10^{4}$ N',
              '$3.0\\times10^{4}$ N',
              '$1.0\\times10^{5}$ N'
            ],
            correctAnswer: 0,
            explanation: '$P = \\rho g h = 15{,}000$ Pa. $F = PA = 15{,}000 \\times 6 = 9.0\\times10^{4}$ N.'
          },
          {
            question: 'A vertical dam wall of width 10 m holds back water 4 m deep. Average pressure on the wall is:',
            options: [
              '$\\rho g h = 4\\times10^{4}$ Pa',
              '$\\rho g h /2 = 2\\times10^{4}$ Pa',
              'Atmospheric only',
              'Zero (force balance)'
            ],
            correctAnswer: 1,
            explanation: 'Pressure varies linearly from 0 at top to $\\rho g h$ at bottom; average = $\\rho g h /2$.'
          }
        ]
      }
    },
    {
      id: 'fdp6-input',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮 (g = 10, $\\rho_{water} = 1000$, $P_{atm} = 1.0\\times10^{5}$ Pa)

1) A pool 4 m deep, bottom area 8 m². Force from gauge water pressure on the bottom (N)?

2) Hydraulic lift: input piston 0.005 m², output piston 0.10 m², input force 75 N. Output force (N)?

3) A vertical rectangular tank wall 2 m wide and 3 m tall (full to the top). Total horizontal force from water on the wall (N)? Use average-pressure method.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['320000', '1500', '90000'],
        hint1: '$P_{gauge} = \\rho g h$; $F = PA$.',
        hint2: '$F_2 = F_1 (A_2/A_1)$.',
        hint3: '$P_{avg} = \\rho g h / 2$. $F = P_{avg} \\cdot A_{wall}$.',
        explanation: '1) $P = 40{,}000$ Pa, $F = 40{,}000 \\times 8 = 3.2\\times10^{5}$ N. 2) $F_2 = 75 \\times 20 = 1500$ N. 3) $P_{avg} = 1000(10)(3)/2 = 15{,}000$ Pa; $A = 2 \\times 3 = 6$ m²; $F = 15{,}000 \\times 6 = 9.0\\times10^{4}$ N.'
      }
    },
    {
      id: 'fdp6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Workshop Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A submerged plate is moved deeper. The force on it from the water:',
            options: ['Decreases', 'Stays the same', 'Increases (more pressure with depth)', 'Becomes zero'],
            correctIndex: 2,
            explanation: '$F = P A = (\\rho g h) A$. Greater depth → greater force on the same plate.'
          },
          {
            label: 'A box completely submerged in water — atmospheric pressure on the surface:',
            options: ['Doubles the force on the bottom', 'Acts equally on all surfaces (cancels)', 'Pushes the box down', 'Makes water lighter'],
            correctIndex: 1,
            explanation: 'Atmospheric pressure transmits to all depths via the water and acts on every face of the box → net cancellation.'
          },
          {
            label: 'In a hydraulic system that lifts a 2000 N load with a 50 N input, the area ratio is:',
            options: ['1:40', '40:1', '1:50', '50:1'],
            correctIndex: 1,
            explanation: '$F_2/F_1 = A_2/A_1 = 40 \\Rightarrow A_2:A_1 = 40:1$.'
          },
          {
            label: 'Pressure at depth $h$ in two fluids of different densities — the denser fluid yields:',
            options: ['Less pressure', 'Same pressure', 'More pressure', 'No pressure'],
            correctIndex: 2,
            explanation: '$P = \\rho g h$ — denser fluid means greater pressure at the same depth.'
          }
        ]
      }
    },
    {
      id: 'fdp6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A square hatch (0.5 m × 0.5 m) is in the side of a tank, with its TOP edge 2.0 m below the surface and its BOTTOM 2.5 m below. Average force from water on the hatch (g = 10) is:',
            options: [
              '~5.6 kN',
              '~2.5 kN',
              '~12.5 kN',
              '~25 kN'
            ],
            correctAnswer: 0,
            explanation: '$P_{avg}$ at depth $(2.0+2.5)/2 = 2.25$ m: $P = 1000(10)(2.25) = 22{,}500$ Pa. $A = 0.25$ m². $F = 22{,}500 \\times 0.25 = 5625$ N ≈ 5.6 kN.'
          },
          {
            question: 'A hydraulic jack has small piston area $5\\times10^{-4}$ m² and large piston area $2.5\\times10^{-2}$ m². You push the small piston down 20 cm with 40 N. The work you do equals the work done lifting the load — the load rises:',
            options: [
              '20 cm',
              '4 cm',
              '0.4 cm',
              '5 cm'
            ],
            correctAnswer: 2,
            explanation: 'Area ratio = 50. Force multiplied by 50, distance divided by 50: $20/50 = 0.4$ cm. (Energy conservation in action.)'
          }
        ]
      }
    }
  ]
}
