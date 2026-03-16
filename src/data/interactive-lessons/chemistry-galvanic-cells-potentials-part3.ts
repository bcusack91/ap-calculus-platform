export const chemGalvanicCellsPotentialsPart3Data = {
  topicSlug: 'galvanic-cells-potentials',
  sections: [
    {
      id: 'gc3-intro',
      type: 'text' as const,
      content: `
# ⚡ Standard Reduction Potentials

**Part 3 of 7 — E° and Calculating Cell Voltage**

Every half-reaction has a **standard reduction potential** ($E°$) that measures its tendency to gain electrons. By comparing two half-reactions, we can calculate the voltage (EMF) of a galvanic cell.
      `
    },
    {
      id: 'gc3-table',
      type: 'text' as const,
      content: `
## Standard Reduction Potential Table

All half-reactions are written as **reductions** (gaining electrons):

| Half-Reaction | $E°$ (V) |
|--------------|---------|
| $\\text{F}_2 + 2e^- \\rightarrow 2\\text{F}^-$ | $+2.87$ |
| $\\text{Au}^{3+} + 3e^- \\rightarrow \\text{Au}$ | $+1.50$ |
| $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$ | $+0.80$ |
| $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$ | $+0.34$ |
| $2\\text{H}^+ + 2e^- \\rightarrow \\text{H}_2$ | $0.00$ (reference) |
| $\\text{Ni}^{2+} + 2e^- \\rightarrow \\text{Ni}$ | $-0.26$ |
| $\\text{Fe}^{2+} + 2e^- \\rightarrow \\text{Fe}$ | $-0.44$ |
| $\\text{Zn}^{2+} + 2e^- \\rightarrow \\text{Zn}$ | $-0.76$ |
| $\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$ | $-1.66$ |
| $\\text{Li}^+ + e^- \\rightarrow \\text{Li}$ | $-3.04$ |

### Reading the Table

- **More positive** $E°$: stronger tendency to be reduced (stronger oxidizing agent)
- **More negative** $E°$: stronger tendency to be oxidized (stronger reducing agent)
- The **Standard Hydrogen Electrode (SHE)** is the reference: $E° = 0.00$ V
      `
    },
    {
      id: 'gc3-cell-potential',
      type: 'text' as const,
      content: `
## Calculating Standard Cell Potential

$$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}}$$

### Important Rules

1. $E°$ values are **NOT multiplied** by stoichiometric coefficients (they are intensive properties)
2. The species with the **higher** (more positive) $E°$ is reduced (cathode)
3. The species with the **lower** (more negative) $E°$ is oxidized (anode)
4. A spontaneous galvanic cell always has $E°_{\\text{cell}} > 0$

### Worked Example: Zn-Cu Cell

- Cathode: $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$ ($E° = +0.34$ V)
- Anode: $\\text{Zn}^{2+} + 2e^- \\rightarrow \\text{Zn}$ ($E° = -0.76$ V)

$$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}} = (+0.34) - (-0.76) = +1.10 \\text{ V}$$

The positive $E°_{\\text{cell}}$ confirms the reaction is spontaneous.
      `
    },
    {
      id: 'gc3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Reduction Potential Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which metal is the strongest reducing agent?',
            options: [
              'Au (E° = +1.50 V)',
              'Cu (E° = +0.34 V)',
              'Zn (E° = −0.76 V)',
              'Li (E° = −3.04 V)'
            ],
            correctAnswer: 3,
            explanation: 'The strongest reducing agent has the most negative $E°$ (greatest tendency to be oxidized). Li at $E° = -3.04$ V is the strongest reducing agent on this list.'
          },
          {
            question: 'When calculating E°_cell, you should:',
            options: [
              'Multiply E° by the number of electrons transferred',
              'Add E°_cathode and E°_anode',
              'Subtract E°_anode from E°_cathode',
              'Reverse the sign of both E° values'
            ],
            correctAnswer: 2,
            explanation: '$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}}$. Do NOT multiply by coefficients — $E°$ is an intensive property.'
          },
          {
            question: 'A spontaneous galvanic cell must have:',
            options: [
              'E°_cell < 0',
              'E°_cell = 0',
              'E°_cell > 0',
              'E°_cell can be any value'
            ],
            correctAnswer: 2,
            explanation: 'A positive $E°_{\\text{cell}}$ corresponds to a negative $\\Delta G°$ (spontaneous). $\\Delta G° = -nFE°$.'
          }
        ]
      }
    },
    {
      id: 'gc3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Cell Potential Calculations** 🧮

Use: Ag⁺/Ag = +0.80 V, Fe²⁺/Fe = −0.44 V, Ni²⁺/Ni = −0.26 V, Cu²⁺/Cu = +0.34 V

1) $E°_{\\text{cell}}$ for a cell with Ag cathode and Fe anode: (in V, to 3 significant figures)

2) $E°_{\\text{cell}}$ for a cell with Cu cathode and Ni anode: (in V, to 3 significant figures)

3) $E°_{\\text{cell}}$ for a cell with Ni cathode and Fe anode: (in V, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.24', '0.60', '0.18'],
        hint1: '$E°_{\\text{cell}} = 0.80 - (-0.44)$',
        hint2: '$E°_{\\text{cell}} = 0.34 - (-0.26)$',
        hint3: '$E°_{\\text{cell}} = -0.26 - (-0.44)$',
        explanation: '1) $0.80 - (-0.44) = 0.80 + 0.44 = 1.24$ V. 2) $0.34 - (-0.26) = 0.34 + 0.26 = 0.60$ V. 3) $-0.26 - (-0.44) = -0.26 + 0.44 = 0.18$ V.'
      }
    },
    {
      id: 'gc3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Reduction Potential Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The reference electrode for standard reduction potentials is',
            options: ['silver-silver chloride', 'standard hydrogen electrode (SHE)', 'copper electrode', 'lithium electrode']
          },
          {
            label: 'A more positive E° means the species is a stronger',
            options: ['reducing agent', 'oxidizing agent', 'acid', 'base']
          },
          {
            label: 'E° values are NOT multiplied by coefficients because E° is',
            options: ['an extensive property', 'an intensive property', 'always positive', 'dimensionless']
          },
          {
            label: 'In a galvanic cell, the half-reaction with the higher E° is the',
            options: ['anode', 'cathode', 'salt bridge', 'external circuit']
          }
        ],
        correctAnswers: ['standard hydrogen electrode (SHE)', 'oxidizing agent', 'an intensive property', 'cathode'],
        hint1: 'The SHE is defined as E° = 0.00 V.',
        hint2: 'More positive E° = greater tendency to be reduced = better at oxidizing others.',
        hint3: 'Voltage does not depend on the amount of substance — it is per-electron.',
        explanation: 'SHE is the reference (E° = 0.00 V). More positive E° → stronger oxidizing agent. E° is intensive (not scaled by coefficients). The higher E° half-reaction is reduced (cathode).'
      }
    },
    {
      id: 'gc3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Standard Reduction Potentials** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Can Ag⁺ (E° = +0.80 V) spontaneously oxidize Cu (E° = +0.34 V)?',
            options: [
              'No — Ag has a higher E°',
              'Yes — E°_cell = 0.80 − 0.34 = +0.46 V (spontaneous)',
              'No — both E° values are positive',
              'Yes — E°_cell = 0.34 − 0.80 = −0.46 V (spontaneous)'
            ],
            correctAnswer: 1,
            explanation: 'Ag⁺ is reduced (cathode, E° = +0.80 V) and Cu is oxidized (anode, E° = +0.34 V). $E°_{\\text{cell}} = 0.80 - 0.34 = +0.46$ V. Positive, so YES, it is spontaneous.'
          },
          {
            question: 'Which pair produces the largest E°_cell? Use: Au³⁺/Au = +1.50 V, Li⁺/Li = −3.04 V, Cu²⁺/Cu = +0.34 V',
            options: [
              'Au cathode, Cu anode: E° = 1.16 V',
              'Au cathode, Li anode: E° = 4.54 V',
              'Cu cathode, Li anode: E° = 3.38 V',
              'Au cathode, Li anode: E° = 1.54 V'
            ],
            correctAnswer: 1,
            explanation: '$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}} = 1.50 - (-3.04) = 4.54$ V. This is the largest possible cell voltage from these three — pairing the strongest oxidizing agent (Au³⁺) with the strongest reducing agent (Li).'
          }
        ]
      }
    }
  ]
}
