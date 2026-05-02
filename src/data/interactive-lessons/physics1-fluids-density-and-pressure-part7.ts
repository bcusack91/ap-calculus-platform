export const physics1FluidsDensityPressurePart7Data = {
  topicSlug: 'fluids-density-and-pressure',
  sections: [
    {
      id: 'fdp7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review — Density & Pressure

**Part 7 of 7 — Fluids: Density & Pressure**

You've worked through density, pressure definitions, hydrostatic depth dependence, gauge vs absolute, and Pascal's Principle. This final part synthesizes them in AP-style multi-step questions.

**Big Ideas Recap:**
- $\\rho = m/V$ (intensive property — independent of size)
- $P = F/A$ — pressure is force per unit perpendicular area
- $P = \\rho g h$ — depth pressure depends only on $\\rho$ and $h$
- Pascal: $P_1 = P_2$ throughout a confined fluid; force scales with area
      `
    },
    {
      id: 'fdp7-summary',
      type: 'text' as const,
      content: `
## AP Equation Sheet (Fluids — Pressure)

| Concept | Equation |
|---------|----------|
| Density | $\\rho = m/V$ |
| Pressure | $P = F/A$ |
| Hydrostatic gauge | $P = \\rho g h$ |
| Hydrostatic absolute | $P_{abs} = P_0 + \\rho g h$ |
| Pascal (hydraulic) | $F_1/A_1 = F_2/A_2$ |
| Volume conservation | $A_1 d_1 = A_2 d_2$ |

### AP-Style Question Patterns

1. **"Pressure at depth"** → $\\rho g h$ (gauge) or $P_0 + \\rho g h$ (absolute).
2. **"Force on a flat submerged surface"** → use $P_{avg} = \\rho g h_{centroid}$, then $F = P_{avg} A$.
3. **"Compare two open containers"** → same $\\rho$ + same depth ⇒ same pressure (regardless of width or volume).
4. **"Hydraulic lift force/distance"** → equal pressure ⇒ $F$ scales with $A$, $d$ scales with $1/A$.
5. **"Why doesn't a tall thin tube exert more pressure?"** → because $P$ depends only on $\\rho$, $g$, $h$.
      `
    },
    {
      id: 'fdp7-mc',
      type: 'multiple-choice' as const,
      content: `
**AP Synthesis MC** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two containers with identical fluid heights but different bottom areas — which has greater bottom pressure?',
            options: [
              'The one with greater bottom area',
              'The one with smaller bottom area',
              'They are equal',
              'Cannot tell without volume'
            ],
            correctAnswer: 2,
            explanation: '$P = \\rho g h$ — pressure depends only on depth and density, not on bottom area or volume.'
          },
          {
            question: 'Two fluids of densities $\\rho$ and $2\\rho$ in identical open containers, both filled to depth $h$. The bottom pressure ratio (denser : less dense) is:',
            options: [
              '1:1',
              '2:1',
              '4:1',
              'Cannot tell without atmospheric'
            ],
            correctAnswer: 1,
            explanation: 'Gauge pressure ratio = $\\rho_2 / \\rho_1 = 2:1$. (Including $P_{atm}$ both gain the same constant.)'
          },
          {
            question: 'A hydraulic press with output area 25× the input area and a 200 N input force lifts:',
            options: [
              '8 N',
              '200 N',
              '5000 N',
              '125 kN'
            ],
            correctAnswer: 2,
            explanation: '$F_2 = F_1 \\times (A_2/A_1) = 200 \\times 25 = 5000$ N.'
          }
        ]
      }
    },
    {
      id: 'fdp7-input',
      type: 'input-boxes' as const,
      content: `
**AP Synthesis Calculations** 🧮 (g = 10, $\\rho_w = 1000$, $P_{atm} = 1.0\\times10^{5}$)

1) A 0.50 m³ block of metal has mass 1350 kg. Density (kg/m³)?

2) Diver at 20 m below sea surface (ρ ≈ 1000). Absolute pressure (Pa)?

3) Hydraulic lift: input $A_1 = 0.0010$ m², output $A_2 = 0.040$ m². To lift 4000 N, input force needed (N)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2700', '300000', '100'],
        hint1: '$\\rho = m/V$.',
        hint2: '$P_{abs} = P_{atm} + \\rho g h$.',
        hint3: '$F_1 = F_2 (A_1/A_2)$.',
        explanation: '1) $\\rho = 1350/0.50 = 2700$ kg/m³ (aluminum). 2) $P_{abs} = 10^{5} + 1000(10)(20) = 3.0\\times10^{5}$ Pa = 3 atm. 3) $F_1 = 4000 \\times (0.0010/0.040) = 4000/40 = 100$ N.'
      }
    },
    {
      id: 'fdp7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**AP Concept Synthesis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Which property of a fluid is INTENSIVE (does not depend on amount)?',
            options: ['Mass', 'Volume', 'Density', 'Weight'],
            correctIndex: 2,
            explanation: 'Density is mass per unit volume — independent of how much you have.'
          },
          {
            label: 'A water tank with vertical sides — pressure on the side wall increases:',
            options: ['Stays constant', 'Linearly with depth', 'Quadratically with depth', 'Decreases with depth'],
            correctIndex: 1,
            explanation: '$P = \\rho g h$ — strictly linear in $h$.'
          },
          {
            label: 'Which assumption underlies $P = \\rho g h$?',
            options: ['Compressible fluid', 'Constant density and uniform $g$', 'Moving fluid', 'High temperature'],
            correctIndex: 1,
            explanation: 'Hydrostatic pressure assumes incompressible fluid (constant $\\rho$) and uniform gravity.'
          },
          {
            label: 'A hydraulic system trades:',
            options: ['Energy for force', 'Distance for force', 'Pressure for energy', 'Mass for volume'],
            correctIndex: 1,
            explanation: 'You move the input piston a long distance with a small force; output moves a small distance with a large force. Energy is conserved.'
          }
        ]
      }
    },
    {
      id: 'fdp7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — AP Synthesis** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Three open containers (cylinder, cone, hourglass) all hold water filled to height $h = 1.0$ m. The pressure at the bottom of each is:',
            options: [
              'Different in each',
              'Same in all (depends only on $h$ and $\\rho$)',
              'Greater in the wider container',
              'Greater in the narrower container'
            ],
            correctAnswer: 1,
            explanation: 'Hydrostatic paradox: gauge pressure depends only on depth, not shape or amount.'
          },
          {
            question: 'A 5 kg metal cube of side 0.10 m is placed on a table. The pressure under the cube on the table (g = 10) is:',
            options: [
              '5 Pa',
              '50 Pa',
              '500 Pa',
              '5000 Pa'
            ],
            correctAnswer: 3,
            explanation: '$F = mg = 50$ N. $A = 0.10^2 = 0.01$ m². $P = 50/0.01 = 5000$ Pa.'
          }
        ]
      }
    }
  ]
}
