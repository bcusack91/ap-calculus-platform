export const physics2ThermoLawsPart3Data = {
  topicSlug: 'laws-of-thermodynamics',
  sections: [
    {
      id: 'tl3-intro',
      type: 'text' as const,
      content: `
# 📊 PV Diagrams Deep Dive

**Part 3 of 7 — Reading Work from Graphs**

PV diagrams are the essential tool for analyzing thermodynamic processes. The area under the curve tells you the work, and the direction of the cycle tells you whether you have an engine or a refrigerator.
      `
    },
    {
      id: 'tl3-area-work',
      type: 'text' as const,
      content: `
## Work = Area Under the Curve

On a PV diagram, work done by the gas during any process equals the **area under the path** from $V_i$ to $V_f$:

$$W = \\int_{V_i}^{V_f} P\\,dV = \\text{area under curve}$$

### Different Processes on PV Diagrams

| Process | PV Shape | Work |
|---------|----------|------|
| **Isobaric** ($P$ = const) | Horizontal line | $W = P\\Delta V$ (rectangle) |
| **Isochoric** ($V$ = const) | Vertical line | $W = 0$ (no area) |
| **Isothermal** ($T$ = const) | Curved (hyperbola: $PV = nRT$) | Area under curve |
| **Adiabatic** ($Q = 0$) | Steeper curve than isothermal | Area under curve |

### The Adiabatic Curve

An adiabat is **steeper** than an isotherm passing through the same point because $PV^\\gamma = \\text{const}$ (where $\\gamma > 1$) drops off faster than $PV = \\text{const}$.
      `
    },
    {
      id: 'tl3-cycles',
      type: 'text' as const,
      content: `
## Thermodynamic Cycles

A **cycle** returns the gas to its original state, so $\\Delta U_{\\text{cycle}} = 0$.

From the First Law for a complete cycle:

$$Q_{\\text{net}} = W_{\\text{net}}$$

### Net Work = Enclosed Area

The **net work** done in a cycle equals the **area enclosed** by the cycle on a PV diagram.

### Direction Matters!

| Direction | Name | Net Work | Energy Flow |
|-----------|------|----------|-------------|
| **Clockwise** | Heat engine | $W_{\\text{net}} > 0$ (work OUT) | Converts heat to work |
| **Counterclockwise** | Refrigerator/heat pump | $W_{\\text{net}} < 0$ (work IN) | Uses work to move heat |

### How to Calculate Net Work for a Cycle

1. Find the area enclosed by the cycle
2. If clockwise → $W > 0$
3. If counterclockwise → $W < 0$

For rectangular cycles: $W_{\\text{net}} = \\Delta P \\times \\Delta V$
      `
    },
    {
      id: 'tl3-direction-quiz',
      type: 'multiple-choice' as const,
      content: `
**Cycle Direction Quiz** 🔄
      `,
      exercise: {
        questions: [
          {
            question: 'A gas completes a clockwise cycle on a PV diagram. Over the full cycle:',
            options: [
              '$\\Delta U > 0$ and $W_{\\text{net}} > 0$',
              '$\\Delta U = 0$ and $W_{\\text{net}} > 0$',
              '$\\Delta U = 0$ and $W_{\\text{net}} < 0$',
              '$\\Delta U > 0$ and $W_{\\text{net}} = 0$'
            ],
            correctAnswer: 1,
            explanation: 'A complete cycle returns to the starting state, so $\\Delta U = 0$. Clockwise means net work is positive (the gas does net work on its surroundings). This is a heat engine.'
          },
          {
            question: 'A counterclockwise cycle on a PV diagram represents a:',
            options: [
              'Heat engine that converts heat to work',
              'Refrigerator/heat pump that uses work to move heat',
              'Process with zero net work',
              'Process where internal energy increases each cycle'
            ],
            correctAnswer: 1,
            explanation: 'Counterclockwise cycles have $W_{\\text{net}} < 0$, meaning net work is done ON the gas. This is a refrigerator or heat pump — it uses work input to transfer heat from cold to hot.'
          }
        ]
      }
    },
    {
      id: 'tl3-reading-quiz',
      type: 'multiple-choice' as const,
      content: `
**PV Diagram Reading** 📈
      `,
      exercise: {
        questions: [
          {
            question: 'A gas undergoes an isochoric process where pressure increases from 100 kPa to 300 kPa. The work done by the gas is:',
            options: [
              'Positive (pressure increased)',
              'Negative (pressure increased)',
              'Zero (volume is constant)',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: 'Isochoric means constant volume ($\\Delta V = 0$). On a PV diagram this is a vertical line. There is no area under a vertical line (in the $V$-direction), so $W = 0$.'
          },
          {
            question: 'A rectangular cycle on a PV diagram has corners at (2 L, 100 kPa), (6 L, 100 kPa), (6 L, 300 kPa), and (2 L, 300 kPa), traced clockwise. The net work is:',
            options: [
              '400 J',
              '600 J',
              '800 J',
              '1200 J'
            ],
            correctAnswer: 2,
            explanation: 'Enclosed area $= \\Delta P \\times \\Delta V = (300 - 100) \\times 10^3 \\times (6 - 2) \\times 10^{-3} = 200{,}000 \\times 0.004 = 800$ J. Clockwise → positive net work.'
          }
        ]
      }
    },
    {
      id: 'tl3-pv-drill',
      type: 'input-boxes' as const,
      content: `
**PV Diagram Calculation Drill** 📊

1) An isobaric expansion at $P = 150$ kPa from $V = 2.0$ L to $V = 6.0$ L. Work done by gas (in J)?

2) A rectangular clockwise cycle with $\\Delta P = 100$ kPa and $\\Delta V = 5.0$ L. Net work per cycle (in J)?

3) A gas completes a clockwise cycle with net work = 400 J. If $Q_H = 1000$ J of heat is absorbed from the hot reservoir, how much heat $Q_C$ is rejected to the cold reservoir (in J)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['600', '500', '600'],
        hint1: '$W = P\\Delta V = (150{,}000)(0.004) = 600$ J.',
        hint2: '$W_{\\text{net}} = \\Delta P \\times \\Delta V = (100{,}000)(0.005) = 500$ J.',
        hint3: 'For a cycle: $\\Delta U = 0$, so $Q_{\\text{net}} = W_{\\text{net}}$. $Q_H - Q_C = W$. $Q_C = Q_H - W = 1000 - 400 = 600$ J.',
        explanation: 'For isobaric work use $W = P\\Delta V$. For cycles, net work equals enclosed area, and $Q_H - Q_C = W_{\\text{net}}$.'
      }
    },
    {
      id: 'tl3-process-match',
      type: 'dropdown-select' as const,
      content: `
**Match the Process to Its PV Shape** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Isobaric process on a PV diagram',
            options: ['Vertical line', 'Horizontal line', 'Hyperbola', 'Steep curve']
          },
          {
            label: 'Isochoric process on a PV diagram',
            options: ['Vertical line', 'Horizontal line', 'Hyperbola', 'Steep curve']
          },
          {
            label: 'Isothermal process on a PV diagram',
            options: ['Vertical line', 'Horizontal line', 'Hyperbola', 'Steep curve']
          },
          {
            label: 'Adiabatic process on a PV diagram',
            options: ['Vertical line', 'Horizontal line', 'Hyperbola', 'Steeper curve than isothermal']
          }
        ],
        correctAnswers: ['Horizontal line', 'Vertical line', 'Hyperbola', 'Steeper curve than isothermal'],
        hint1: 'Constant pressure = constant height on the P axis.',
        hint2: 'Constant volume = constant position on the V axis.',
        hint3: '$PV = nRT = \\text{const}$ is a hyperbola. $PV^\\gamma = \\text{const}$ with $\\gamma > 1$ is steeper.',
        explanation: 'Each process has a characteristic shape: isobaric (horizontal), isochoric (vertical), isothermal (hyperbola), adiabatic (steeper curve).'
      }
    }
  ]
}
