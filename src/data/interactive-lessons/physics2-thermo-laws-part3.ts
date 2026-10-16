export const physics2ThermoLawsPart3Data = {
  topicSlug: 'laws-of-thermodynamics',
  sections: [
    {
      id: 'tl3-intro',
      type: 'text' as const,
      content: `
# 📊 PV Diagrams Deep Dive

**Part 3 of 7 — Reading Work from Graphs**

PV diagrams are the essential tool for analyzing thermodynamic processes. The area under the curve tells you the work, and the direction of a cycle tells you the sign of the net work done on the gas.
      `
    },
    {
      id: 'tl3-area-work',
      type: 'text' as const,
      content: `
## Work = Area Under the Curve

On a PV diagram, the work done **by** the gas during any process equals the **area under the path** from $V_i$ to $V_f$:

$$W_{\\text{by gas}} = \\text{area under the } P\\text{–}V \\text{ path}$$

The AP equation sheet's $W$ is the work done **on** the gas, which is the negative of this: $W = -W_{\\text{by gas}}$. So $|W|$ = area under the curve, and $W < 0$ whenever the gas expands.

### Different Processes on PV Diagrams

| Process | PV Shape | Work on gas, $W$ |
|---------|----------|------|
| **Isobaric** ($P$ = const) | Horizontal line | $W = -P\\Delta V$ (rectangle) |
| **Isochoric** ($V$ = const) | Vertical line | $W = 0$ (no area) |
| **Isothermal** ($T$ = const) | Curved (hyperbola: $PV = nRT$) | $|W|$ = area under curve |
| **Adiabatic** ($Q = 0$) | Steeper curve than isothermal | $|W|$ = area under curve |

### The Adiabatic Curve

An adiabat is **steeper** than an isotherm passing through the same point. Along an isotherm, only the growing volume lowers the pressure. In an adiabatic expansion the gas does work with no energy coming in by heating, so its internal energy and temperature also fall, and the pressure drops faster.
      `
    },
    {
      id: 'tl3-cycles',
      type: 'text' as const,
      content: `
## Thermodynamic Cycles

A **cycle** returns the gas to its original state, so $\\Delta U_{\\text{cycle}} = 0$.

From the First Law ($\\Delta U = Q + W$, with $W$ = work done on the gas) for a complete cycle:

$$Q_{\\text{net}} = -W_{\\text{net}}$$

In words: the net heat absorbed equals the net work done **by** the gas.

### Net Work = Enclosed Area

The **net work** done by the gas in a cycle equals the **area enclosed** by the cycle on a PV diagram. The net work done on the gas, $W_{\\text{net}}$, has the same magnitude and the opposite sign.

### Direction Matters!

| Direction | Name | Net Work on Gas | Energy Flow |
|-----------|------|----------|-------------|
| **Clockwise** | Engine-type cycle | $W_{\\text{net}} < 0$ (gas does net work on its surroundings) | Net energy enters the gas by heating ($Q_{\\text{net}} > 0$) |
| **Counterclockwise** | Refrigerator-type cycle | $W_{\\text{net}} > 0$ (surroundings do net work on the gas) | Net energy leaves the gas by heating ($Q_{\\text{net}} < 0$) |

### How to Calculate Net Work for a Cycle

1. Find the area enclosed by the cycle (this is the magnitude)
2. If clockwise → the gas does positive net work, so $W_{\\text{net}} < 0$
3. If counterclockwise → net work is done on the gas, so $W_{\\text{net}} > 0$

For rectangular cycles: $|W_{\\text{net}}| = \\Delta P \\times \\Delta V$
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
            question: 'A gas completes a clockwise cycle on a PV diagram. Taking $W_{\\text{net}}$ as the net work done on the gas, over the full cycle:',
            options: [
              '$\\Delta U > 0$ and $W_{\\text{net}} < 0$',
              '$\\Delta U = 0$ and $W_{\\text{net}} < 0$',
              '$\\Delta U = 0$ and $W_{\\text{net}} > 0$',
              '$\\Delta U > 0$ and $W_{\\text{net}} = 0$'
            ],
            correctAnswer: 1,
            explanation: 'A complete cycle returns to the starting state, so $\\Delta U = 0$. Clockwise means the gas does positive net work on its surroundings, so the net work done on the gas is negative ($W_{\\text{net}} < 0$). That is the cycle a heat engine runs.'
          },
          {
            question: 'A gas is taken once around a counterclockwise cycle on a PV diagram. Over the full cycle, which statement is correct?',
            options: [
              'Net work is done on the gas, and the gas loses net energy by heating',
              'The gas does net work, and it gains net energy by heating',
              'Zero net work, because the gas returns to its starting state',
              'The internal energy of the gas rises by the enclosed area'
            ],
            correctAnswer: 0,
            explanation: 'Counterclockwise means $W_{\\text{net}} > 0$: the surroundings do net work on the gas. Because $\\Delta U = 0$ for a cycle, $Q_{\\text{net}} = -W_{\\text{net}} < 0$, so the gas transfers that much energy out by heating. Returning to the start makes $\\Delta U$ zero, not the work.'
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
            question: 'A rectangular cycle on a PV diagram has corners at $(2\\text{ L},\\, 100\\text{ kPa})$, $(6\\text{ L},\\, 100\\text{ kPa})$, $(6\\text{ L},\\, 300\\text{ kPa})$, and $(2\\text{ L},\\, 300\\text{ kPa})$, traced clockwise. The net work done by the gas is:<br/><br/><svg viewBox="0 0 320 220" width="320" height="220" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:12px auto 4px;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb"><line x1="50" y1="10" x2="50" y2="190" stroke="#374151" stroke-width="1.5"/><line x1="50" y1="190" x2="310" y2="190" stroke="#374151" stroke-width="1.5"/><text x="160" y="212" text-anchor="middle" font-size="13" fill="#374151" font-weight="600">Volume (L)</text><text x="16" y="105" text-anchor="middle" font-size="13" fill="#374151" font-weight="600" transform="rotate(-90,16,105)">Pressure (kPa)</text><text x="50" y="204" text-anchor="middle" font-size="11" fill="#6b7280">0</text><text x="115" y="204" text-anchor="middle" font-size="11" fill="#6b7280">2</text><text x="245" y="204" text-anchor="middle" font-size="11" fill="#6b7280">6</text><text x="44" y="165" text-anchor="end" font-size="11" fill="#6b7280">100</text><text x="44" y="55" text-anchor="end" font-size="11" fill="#6b7280">300</text><line x1="50" y1="160" x2="300" y2="160" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="4"/><line x1="50" y1="50" x2="300" y2="50" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="4"/><line x1="115" y1="20" x2="115" y2="190" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="4"/><line x1="245" y1="20" x2="245" y2="190" stroke="#e5e7eb" stroke-width="0.5" stroke-dasharray="4"/><rect x="115" y="50" width="130" height="110" fill="rgba(147,51,234,0.12)" stroke="none"/><polygon points="115,160 245,160 245,50 115,50" fill="none" stroke="#7c3aed" stroke-width="2.5"/><polygon points="160,156 155,160 160,164" fill="#7c3aed"/><polygon points="241,125 245,130 249,125" fill="#7c3aed"/><polygon points="200,46 205,50 200,54" fill="#7c3aed"/><polygon points="119,85 115,80 111,85" fill="#7c3aed"/><circle cx="115" cy="160" r="4" fill="#7c3aed"/><circle cx="245" cy="160" r="4" fill="#7c3aed"/><circle cx="245" cy="50" r="4" fill="#7c3aed"/><circle cx="115" cy="50" r="4" fill="#7c3aed"/></svg>',
            options: [
              '400 J',
              '600 J',
              '800 J',
              '1200 J'
            ],
            correctAnswer: 2,
            explanation: 'Enclosed area $= \\Delta P \\times \\Delta V = (300 - 100) \\times 10^3 \\times (6 - 2) \\times 10^{-3} = 200{,}000 \\times 0.004 = 800$ J. Clockwise → the gas does positive net work. (The net work done on the gas is $W_{\\text{net}} = -800$ J.)'
          }
        ]
      }
    },
    {
      id: 'tl3-pv-drill',
      type: 'input-boxes' as const,
      content: `
**PV Diagram Calculation Drill** 📊

1) An isobaric expansion at $P = 150$ kPa from $V = 2.0$ L to $V = 6.0$ L. Work done on the gas, $W$ (in J, with sign)?

2) A rectangular clockwise cycle with $\\Delta P = 100$ kPa and $\\Delta V = 5.0$ L. Net work done by the gas per cycle (in J)?

3) A gas completes a clockwise cycle in which the gas does 400 J of net work. During some steps it gains 1000 J by heating. How much energy does it lose by heating during the other steps (in J)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-600', '500', '600'],
        hint1: '$W = -P\\Delta V = -(150{,}000)(0.004) = -600$ J. Negative because the gas expands.',
        hint2: 'Work done by the gas $= \\Delta P \\times \\Delta V = (100{,}000)(0.005) = 500$ J (positive for a clockwise cycle).',
        hint3: 'For a cycle: $\\Delta U = 0$, so $Q_{\\text{net}} = -W_{\\text{net}}$ = net work done by the gas = 400 J. Energy in minus energy out by heating is 400 J, so the energy out is $1000 - 400 = 600$ J.',
        explanation: 'For isobaric work on the gas use $W = -P\\Delta V$. For cycles, the net work done by the gas equals the enclosed area, and the net energy gained by heating equals the net work done by the gas.'
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
            options: ['Vertical line at constant volume', 'Horizontal line at constant pressure', 'Hyperbola, the same as an isotherm', 'Steeper curve than isothermal']
          }
        ],
        correctAnswers: ['Horizontal line', 'Vertical line', 'Hyperbola', 'Steeper curve than isothermal'],
        hint1: 'Constant pressure = constant height on the P axis.',
        hint2: 'Constant volume = constant position on the V axis.',
        hint3: 'At constant $T$, $PV$ is constant, which is a hyperbola. In an adiabatic expansion the temperature also falls, so the pressure drops faster.',
        explanation: 'Each process has a characteristic shape: isobaric (horizontal), isochoric (vertical), isothermal (hyperbola), adiabatic (steeper curve).'
      }
    }
  ]
}
