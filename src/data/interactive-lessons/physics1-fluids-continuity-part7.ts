export const physics1FluidsContinuityPart7Data = {
  topicSlug: 'fluids-continuity',
  sections: [
    {
      id: 'fc7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review — Continuity

**Part 7 of 7 — Fluids: Continuity**

You've mastered volume flow rate, single-pipe continuity, branching, and mass flow rate. AP loves multi-step continuity questions that lead into Bernoulli (Topic 4), so this synthesis solidifies the foundation.

**Big Ideas Recap:**
- $Q = Av$ defines volume flow rate $(m^{3}/s)$
- Incompressible continuity: $A_1 v_1 = A_2 v_2$
- Junctions: $\\sum Q_{in} = \\sum Q_{out}$
- Mass flow rate: $\\dot m = \\rho Av$
      `
    },
    {
      id: 'fc7-summary',
      type: 'text' as const,
      content: `
## AP Continuity Cheat Sheet

| Quantity | Equation |
|---------|----------|
| Volume flow rate | $Q = Av$ |
| Continuity (single pipe) | $A_1 v_1 = A_2 v_2$ |
| Speed ratio (circular pipe) | $v_2/v_1 = (r_1/r_2)^2$ |
| Junction conservation | $\\sum Q_{in} = \\sum Q_{out}$ |
| Mass flow rate | $\\dot m = \\rho Q = \\rho A v$ |
| Compressible continuity | $\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$ |

### Common AP Question Stems

1. **"Speed in a constriction"** → $v_2 = v_1 (A_1/A_2)$.
2. **"Total flow rate at a junction"** → $Q_{out} = Q_{in,1} + Q_{in,2}$.
3. **"Hose with thumb partially covering the end"** → small $A$, large $v$.
4. **"Blood flows slowest in capillaries because..."** → huge total cross-section.
5. **"Stream of falling water narrows because..."** → gravity speeds it up; continuity shrinks $A$.
      `
    },
    {
      id: 'fc7-mc',
      type: 'multiple-choice' as const,
      content: `
**AP Synthesis MC** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A pipe of radius $r$ widens to a section of radius $3r$. The fluid speed in the wider section is what fraction of the original?',
            options: [
              '1/9',
              '1/3',
              '3',
              '9'
            ],
            correctAnswer: 0,
            explanation: 'Area × 9 → speed × 1/9.'
          },
          {
            question: 'For incompressible flow, which combination is conserved at every cross-section of a single pipe?',
            options: [
              'Pressure',
              'Speed alone',
              '$A v$',
              '$A + v$'
            ],
            correctAnswer: 2,
            explanation: 'Continuity: $Q = Av$ is constant.'
          },
          {
            question: 'A pipe has volume flow rate 0.020 $m^{3}/s$. In a section of area 0.010 $m^{2}$, the speed is:',
            options: [
              '0.0002 m/s',
              '0.5 m/s',
              '2 m/s',
              '50 m/s'
            ],
            correctAnswer: 2,
            explanation: '$v = Q/A = 0.020/0.010 = 2$ m/s.'
          }
        ]
      }
    },
    {
      id: 'fc7-input',
      type: 'input-boxes' as const,
      content: `
**AP Synthesis Calculations** 🧮 ($\\rho_w = 1000$)

1) A pipe of inner diameter 8 cm carries water at 1.5 m/s. Volume flow rate ($m^{3}/s$, 4 sig figs)?

2) Same flow enters a section of diameter 4 cm. New speed (m/s)?

3) Two pipes ($A_1 = 0.005$ $m^{2}$, $v_1 = 4$ m/s and $A_2 = 0.003$ $m^{2}$, $v_2 = 5$ m/s) merge into a pipe of area $0.010$ $m^{2}$. Outlet speed (m/s)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.007540', '6', '3.5'],
        hint1: '$Q = \\pi r^2 v$.',
        hint2: 'Diameter halved → speed × 4.',
        hint3: '$v_3 = (Q_1+Q_2)/A_3$.',
        explanation: '1) $A = \\pi (0.04)^2 ≈ 5.027\\times10^{-3}$ $m^{2}$. $Q = 5.027\\times10^{-3} \\times 1.5 ≈ 7.540\\times10^{-3}$ $m^{3}/s$. 2) $v_2 = 1.5 \\times 4 = 6$ m/s. 3) $Q_{tot} = 0.005(4)+0.003(5) = 0.035$ $m^{3}/s$. $v_3 = 0.035/0.010 = 3.5$ m/s.'
      }
    },
    {
      id: 'fc7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**AP Concept Synthesis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A garden hose has flow rate $Q$. You squeeze the end so the area shrinks to 1/3. The water exits at speed:',
            options: ['$v/3$', '$v$', '$3v$', '$9v$'],
            correctIndex: 2,
            explanation: 'Constant $Q = Av$ — area ÷ 3 means speed × 3.'
          },
          {
            label: 'In a venturi tube (a constriction in a horizontal pipe), the water moves FASTEST in the:',
            options: ['Wide section', 'Narrow section', 'Middle of the wide section only', 'Outside the pipe'],
            correctIndex: 1,
            explanation: 'Continuity: smallest area ⇒ fastest speed.'
          },
          {
            label: 'A river flowing at constant $Q$ slows down where it deepens. This is consistent with:',
            options: ['Newton\'s 2nd law', 'Pascal\'s Principle', 'Continuity', 'Buoyancy'],
            correctIndex: 2,
            explanation: 'Larger cross-section ⇒ slower flow at constant $Q$.'
          },
          {
            label: 'For incompressible flow, $\\dot m$ and $Q$ differ by a factor of:',
            options: ['$g$', '$\\rho$', '$\\mu$', '$P$'],
            correctIndex: 1,
            explanation: '$\\dot m = \\rho Q$.'
          }
        ]
      }
    },
    {
      id: 'fc7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — AP Synthesis** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Water flowing in a horizontal pipe goes from a section of area $A$ at speed $v$ to a section of area $0.25 A$. The speed in the smaller section is:',
            options: [
              '$v/4$',
              '$v$',
              '$2v$',
              '$4v$'
            ],
            correctAnswer: 3,
            explanation: 'Area ratio = 4 → speed × 4.'
          },
          {
            question: 'A water main of diameter 30 cm carries water at 2 m/s. It feeds a building through 5 equal pipes of diameter 6 cm each. Speed in each smaller pipe?',
            options: [
              '2 m/s',
              '5 m/s',
              '10 m/s',
              '20 m/s'
            ],
            correctAnswer: 2,
            explanation: '$Q_{main} = \\pi (0.15)^2 (2) ≈ 0.1414$ $m^{3}/s$. Each pipe: $Q_{main}/5 ≈ 0.0283$ $m^{3}/s$. $A_{small} = \\pi(0.03)^2 ≈ 2.83\\times10^{-3}$ $m^{2}$. $v = 0.0283/2.83\\times10^{-3} = 10$ m/s.'
          }
        ]
      }
    }
  ]
}
