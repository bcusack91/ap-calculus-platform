export const chemGalvanicCellsPotentialsPart5Data = {
  topicSlug: 'galvanic-cells-potentials',
  sections: [
    {
      id: 'gc5-intro',
      type: 'text' as const,
      content: `
# 🔗 Connecting Free Energy and Cell Potential

**Part 5 of 7 — ΔG° = −nFE°**

One of the most important equations in AP Chemistry links Gibbs free energy directly to cell potential. This bridges thermodynamics and electrochemistry into a unified framework.
      `
    },
    {
      id: 'gc5-equation',
      type: 'text' as const,
      content: `
## The Key Equation

$$\\Delta G° = -nFE°$$

| Symbol | Meaning | Value/Units |
|--------|---------|-------------|
| $\\Delta G°$ | Standard free energy change | J (or kJ) |
| $n$ | Moles of electrons transferred | dimensionless |
| $F$ | Faraday\'s constant | $96{,}485$ C/mol $e^-$ |
| $E°$ | Standard cell potential | V (volts = J/C) |

### Why the Negative Sign?

- Spontaneous reactions have $\\Delta G° < 0$
- Spontaneous galvanic cells have $E° > 0$
- The negative sign ensures: positive $E°$ → negative $\\Delta G°$ ✓

### Unit Check

$$\\Delta G° = -(\\text{mol})(\\text{C/mol})(\\text{J/C}) = \\text{J}$$

The units work out to joules (convert to kJ by dividing by 1000).
      `
    },
    {
      id: 'gc5-three-way',
      type: 'text' as const,
      content: `
## The Thermodynamic Triangle

Three key relationships connect $\\Delta G°$, $E°$, and $K$:

$$\\Delta G° = -nFE° = -RT\\ln K$$

From these, we can derive:

$$E° = \\frac{RT}{nF}\\ln K$$

At 25°C (298 K):

$$E° = \\frac{0.0257}{n}\\ln K = \\frac{0.0592}{n}\\log K$$

### The Web of Connections

| Know | Want | Use |
|------|------|-----|
| $E°$ | $\\Delta G°$ | $\\Delta G° = -nFE°$ |
| $E°$ | $K$ | $K = e^{nFE°/(RT)}$ |
| $K$ | $\\Delta G°$ | $\\Delta G° = -RT\\ln K$ |
| $\\Delta G°$ | $E°$ | $E° = -\\Delta G°/(nF)$ |
| $K$ | $E°$ | $E° = (RT/nF)\\ln K$ |
| $\\Delta G°$ | $K$ | $K = e^{-\\Delta G°/(RT)}$ |

### All Three Consistent

| Spontaneous? | $\\Delta G°$ | $E°$ | $K$ |
|-------------|-----------|-----|-----|
| Yes | $< 0$ | $> 0$ | $> 1$ |
| At equilibrium | $= 0$ | $= 0$ | $= 1$ |
| No | $> 0$ | $< 0$ | $< 1$ |
      `
    },
    {
      id: 'gc5-worked-example',
      type: 'text' as const,
      content: `
## Worked Example

For the Daniell cell: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$

$E° = +1.10$ V, $n = 2$ mol $e^-$

### Calculate ΔG°

$$\\Delta G° = -nFE° = -(2)(96{,}485)(1.10)$$
$$= -212{,}267 \\text{ J} = -212.3 \\text{ kJ}$$

### Calculate K at 298 K

$$\\ln K = \\frac{nFE°}{RT} = \\frac{(2)(96{,}485)(1.10)}{(8.314)(298)} = \\frac{212{,}267}{2478} = 85.66$$

$$K = e^{85.66} = 1.6 \\times 10^{37}$$

This enormous $K$ confirms the reaction is virtually complete at equilibrium.
      `
    },
    {
      id: 'gc5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**ΔG° and E° Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If E°_cell = +0.50 V and n = 2, ΔG° is:',
            options: [
              '+96.5 kJ',
              '−96.5 kJ',
              '+48.2 kJ',
              '−48.2 kJ'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = -nFE° = -(2)(96{,}485)(0.50) = -96{,}485$ J $= -96.5$ kJ.'
          },
          {
            question: 'If ΔG° for a 2-electron cell reaction is −200 kJ, E° is approximately:',
            options: [
              '+1.04 V',
              '−1.04 V',
              '+2.07 V',
              '−2.07 V'
            ],
            correctAnswer: 0,
            explanation: '$E° = -\\Delta G°/(nF) = -(-200{,}000)/((2)(96{,}485)) = 200{,}000/192{,}970 = +1.04$ V.'
          },
          {
            question: 'The Faraday constant F represents:',
            options: [
              'The charge of one electron',
              'The charge of one mole of electrons',
              'The voltage of a standard cell',
              'The energy of one electron'
            ],
            correctAnswer: 1,
            explanation: '$F = 96{,}485$ C/mol is the charge carried by one mole of electrons. It equals $N_A \\times e = (6.022 \\times 10^{23})(1.602 \\times 10^{-19})$.'
          }
        ]
      }
    },
    {
      id: 'gc5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Thermodynamic Triangle Calculations** 🧮

1) $E° = +0.80$ V, $n = 1$. Calculate $\\Delta G°$ in kJ. (to 1 decimal)

2) $\\Delta G° = -579$ kJ, $n = 6$. Calculate $E°$ in V. (to 3 significant figures)

3) If $E° > 0$ for a cell, is $K$ greater than or less than 1? (type "greater" or "less")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-77.2', '1.00', 'greater', '-77.20', '1.000', '1.0'],
        hint1: '$\\Delta G° = -(1)(96485)(0.80) = -77{,}188$ J.',
        hint2: '$E° = -(-579{,}000)/((6)(96485))$',
        hint3: 'Positive E° → spontaneous → products favored → K > 1.',
        explanation: '1) $\\Delta G° = -(1)(96485)(0.80) = -77{,}188$ J $= -77.2$ kJ. 2) $E° = 579{,}000/(6 \\times 96485) = 579{,}000/578{,}910 = 1.00$ V. 3) $E° > 0$ → $\\Delta G° < 0$ → $K > 1$.'
      }
    },
    {
      id: 'gc5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Connecting the Three Quantities** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For a spontaneous cell, ΔG° is',
            options: ['positive', 'negative', 'zero', 'undefined']
          },
          {
            label: 'For a spontaneous cell, E° is',
            options: ['positive', 'negative', 'zero', 'undefined']
          },
          {
            label: 'For a spontaneous cell, K is',
            options: ['less than 1', 'equal to 1', 'greater than 1', 'zero']
          },
          {
            label: 'The n in ΔG° = −nFE° represents',
            options: ['moles of reactant', 'moles of electrons transferred', 'moles of product', 'Avogadro\'s number']
          }
        ],
        correctAnswers: ['negative', 'positive', 'greater than 1', 'moles of electrons transferred'],
        hint1: 'Spontaneous = thermodynamically favorable = ΔG < 0.',
        hint2: 'Galvanic cells produce positive voltage.',
        hint3: 'Products favored → K > 1.',
        explanation: 'For a spontaneous cell: ΔG° < 0, E° > 0, K > 1. All three are consistent. n = moles of electrons transferred in the balanced redox equation.'
      }
    },
    {
      id: 'gc5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — ΔG° and E°** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A cell has E° = 0.00 V. What can you conclude?',
            options: [
              'ΔG° = 0 and K = 1 — the system is at equilibrium under standard conditions',
              'The cell is broken',
              'ΔG° < 0 and K > 1',
              'ΔG° > 0 and K < 1'
            ],
            correctAnswer: 0,
            explanation: '$E° = 0 \\Rightarrow \\Delta G° = -nF(0) = 0 \\Rightarrow K = 1$. The reaction is at equilibrium under standard conditions — neither direction is favored.'
          },
          {
            question: 'Why does multiplying a half-reaction by 2 NOT change E° but DOES change ΔG°?',
            options: [
              'E° is intensive; ΔG° is extensive',
              'E° depends on concentration; ΔG° does not',
              'Both change equally',
              'Neither changes'
            ],
            correctAnswer: 0,
            explanation: '$E°$ is an intensive property — it does not depend on the amount of substance. But $\\Delta G° = -nFE°$, and doubling the reaction doubles $n$, which doubles $\\Delta G°$. $\\Delta G°$ is extensive.'
          }
        ]
      }
    }
  ]
}
