export const chemGalvanicCellsPotentialsPart5Data = {
  topicSlug: 'galvanic-cells-potentials',
  sections: [
    {
      id: 'gc5-intro',
      type: 'text' as const,
      content: `
# 🔗 Connecting Free Energy and Cell Potential

**Part 5 of 7 — $\\Delta G^\\circ = -nFE^\\circ$**

One of the most important equations in AP Chemistry links Gibbs free energy directly to cell potential. This bridges thermodynamics and electrochemistry into a unified framework.
      `
    },
    {
      id: 'gc5-equation',
      type: 'text' as const,
      content: `
## 🔑 The Key Equation

> **The bridge between thermodynamics and electrochemistry:**
>
> $$\\Delta G^\\circ = -nFE^\\circ$$

| Symbol | Meaning | Units |
|--------|---------|-------|
| $\\Delta G^\\circ$ | Standard free energy change | J (or kJ) |
| $n$ | Moles of electrons transferred | dimensionless |
| $F$ | Faraday's constant | $96{,}485$ C/mol $e^-$ |
| $E^\\circ$ | Standard cell potential | V (volts = J/C) |

---

### 🤔 Why the Negative Sign?

| Condition | $\\Delta G^\\circ$ | $E^\\circ$ |
|-----------|-----------------|----------|
| Spontaneous | $< 0$ | $> 0$ |
| At equilibrium | $= 0$ | $= 0$ |
| Non-spontaneous | $> 0$ | $< 0$ |

The negative sign ensures these are always **opposite** in sign — positive $E^\\circ$ gives negative $\\Delta G^\\circ$. ✓

---

### 📏 Unit Check

$$\\Delta G^\\circ = -(\\text{mol})(\\text{C/mol})(\\text{J/C}) = \\text{J}$$

> 💡 The units work out to **joules**. Divide by 1000 to convert to kJ.
      `
    },
    {
      id: 'gc5-three-way',
      type: 'text' as const,
      content: `
## 🔗 The Thermodynamic Triangle

Three key relationships connect $\\Delta G^\\circ$, $E^\\circ$, and $K$:

> **Master Equations:**
>
> $$\\Delta G^\\circ = -nFE^\\circ = -RT\\ln K$$
>
> $$E^\\circ = \\frac{RT}{nF}\\ln K$$

At 25°C (298 K):

$$E^\\circ = \\frac{0.0257}{n}\\ln K = \\frac{0.0592}{n}\\log K$$

---

### 🗺️ The Web of Connections

| Know | Want | Use |
|------|------|-----|
| $E^\\circ$ | $\\Delta G^\\circ$ | $\\Delta G^\\circ = -nFE^\\circ$ |
| $E^\\circ$ | $K$ | $K = e^{nFE^\\circ/(RT)}$ |
| $K$ | $\\Delta G^\\circ$ | $\\Delta G^\\circ = -RT\\ln K$ |
| $\\Delta G^\\circ$ | $E^\\circ$ | $E^\\circ = -\\Delta G^\\circ/(nF)$ |
| $K$ | $E^\\circ$ | $E^\\circ = (RT/nF)\\ln K$ |
| $\\Delta G^\\circ$ | $K$ | $K = e^{-\\Delta G^\\circ/(RT)}$ |

---

### ✅ All Three Must Be Consistent

| Spontaneous? | $\\Delta G^\\circ$ | $E^\\circ$ | $K$ |
|:------------:|:-----------------:|:----------:|:---:|
| **Yes** | $< 0$ | $> 0$ | $> 1$ |
| **At equilibrium** | $= 0$ | $= 0$ | $= 1$ |
| **No** | $> 0$ | $< 0$ | $< 1$ |

> 💡 If you know **any one** of these three values, you can determine the other two!
      `
    },
    {
      id: 'gc5-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example

> **Daniell Cell:**
>
> $$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$
>
> $E^\\circ = +1.10$ V, &nbsp; $n = 2$ mol $e^-$

---

### 📐 Calculate $\\Delta G^\\circ$

$$\\Delta G^\\circ = -nFE^\\circ = -(2)(96{,}485)(1.10)$$

$$= -212{,}267 \\text{ J} = \\boxed{-212.3 \\text{ kJ}}$$

---

### 📐 Calculate $K$ at 298 K

$$\\ln K = \\frac{nFE^\\circ}{RT} = \\frac{(2)(96{,}485)(1.10)}{(8.314)(298)} = \\frac{212{,}267}{2478} = 85.66$$

$$K = e^{85.66} = \\boxed{1.6 \\times 10^{37}}$$

> 🔥 This enormous $K$ confirms the reaction is **virtually complete** at equilibrium — products are overwhelmingly favored.
      `
    },
    {
      id: 'gc5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**$\\Delta G^\\circ$ and $E^\\circ$ Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $E^\\circ_{\\text{cell}} = +0.50$ V and $n = 2$, $\\Delta G^\\circ$ is:',
            options: [
              '+96.5 kJ',
              '−96.5 kJ',
              '+48.2 kJ',
              '−48.2 kJ'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G^\\circ = -nFE^\\circ = -(2)(96{,}485)(0.50) = -96{,}485$ J $= -96.5$ kJ.'
          },
          {
            question: 'If $\\Delta G^\\circ$ for a 2-electron cell reaction is $-200$ kJ, $E^\\circ$ is approximately:',
            options: [
              '+1.04 V',
              '−1.04 V',
              '+2.07 V',
              '−2.07 V'
            ],
            correctAnswer: 0,
            explanation: '$E^\\circ = -\\Delta G^\\circ/(nF) = -(-200{,}000)/((2)(96{,}485)) = 200{,}000/192{,}970 = +1.04$ V.'
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

**1)** $E^\\circ = +0.80$ V, $n = 1$. Calculate $\\Delta G^\\circ$ in kJ. (to 1 decimal)

**2)** $\\Delta G^\\circ = -579$ kJ, $n = 6$. Calculate $E^\\circ$ in V. (to 3 significant figures)

**3)** If $E^\\circ > 0$ for a cell, is $K$ greater than or less than 1? (type "greater" or "less")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-77.2', '1.00', 'greater'],
        hint1: '$\\Delta G^\\circ = -(1)(96485)(0.80) = -77{,}188$ J.',
        hint2: '$E^\\circ = -(-579{,}000)/((6)(96485))$',
        hint3: 'Positive $E^\\circ$ → spontaneous → products favored → $K > 1$.',
        explanation: '1) $\\Delta G^\\circ = -(1)(96485)(0.80) = -77{,}188$ J $= -77.2$ kJ. 2) $E^\\circ = 579{,}000/(6 \\times 96485) = 579{,}000/578{,}910 = 1.00$ V. 3) $E^\\circ > 0$ → $\\Delta G^\\circ < 0$ → $K > 1$.'
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
            label: 'For a spontaneous cell, $\\Delta G^\\circ$ is',
            options: ['positive', 'negative', 'zero', 'undefined']
          },
          {
            label: 'For a spontaneous cell, $E^\\circ$ is',
            options: ['positive', 'negative', 'zero', 'undefined']
          },
          {
            label: 'For a spontaneous cell, K is',
            options: ['less than 1', 'equal to 1', 'greater than 1', 'zero']
          },
          {
            label: 'The $n$ in $\\Delta G^\\circ = -nFE^\\circ$ represents',
            options: ['moles of reactant', 'moles of electrons transferred', 'moles of product', 'Avogadro\'s number']
          }
        ],
        correctAnswers: ['negative', 'positive', 'greater than 1', 'moles of electrons transferred'],
        hint1: 'Spontaneous = thermodynamically favorable = $\\Delta G < 0$.',
        hint2: 'Galvanic cells produce positive voltage.',
        hint3: 'Products favored → $K > 1$.',
        explanation: 'For a spontaneous cell: $\\Delta G^\\circ < 0$, $E^\\circ > 0$, $K > 1$. All three are consistent. $n$ = moles of electrons transferred in the balanced redox equation.'
      }
    },
    {
      id: 'gc5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — $\\Delta G^\\circ$ and $E^\\circ$** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A cell has $E^\\circ = 0.00$ V. What can you conclude?',
            options: [
              '$\\Delta G^\\circ = 0$ and $K = 1$ — the system is at equilibrium under standard conditions',
              'The cell is broken',
              '$\\Delta G^\\circ < 0$ and $K > 1$',
              '$\\Delta G^\\circ > 0$ and $K < 1$'
            ],
            correctAnswer: 0,
            explanation: '$E^\\circ = 0 \\Rightarrow \\Delta G^\\circ = -nF(0) = 0 \\Rightarrow K = 1$. The reaction is at equilibrium under standard conditions — neither direction is favored.'
          },
          {
            question: 'Why does multiplying a half-reaction by 2 NOT change $E^\\circ$ but DOES change $\\Delta G^\\circ$?',
            options: [
              '$E^\\circ$ is intensive; $\\Delta G^\\circ$ is extensive',
              '$E^\\circ$ depends on concentration; $\\Delta G^\\circ$ does not',
              'Both change equally',
              'Neither changes'
            ],
            correctAnswer: 0,
            explanation: '$E^\\circ$ is an intensive property — it does not depend on the amount of substance. But $\\Delta G^\\circ = -nFE^\\circ$, and doubling the reaction doubles $n$, which doubles $\\Delta G^\\circ$. $\\Delta G^\\circ$ is extensive.'
          }
        ]
      }
    }
  ]
}
