export const chemElectrolyticCellsFaradayPart1Data = {
  topicSlug: 'electrolytic-cells-faraday',
  sections: [
    {
      id: 'ef1-intro',
      type: 'text' as const,
      content: `# ⚡ Electrolysis — Driving Non-Spontaneous Reactions

**Part 1 of 7 — Electrolytic Cells and External Voltage**

---

### Topics in This Part

| Section |
|---------|
| 🔧 How Electrolysis Works |
| The Key Idea |
| Requirements |
| Anode and Cathode in Electrolytic Cells |
| ⚡ Energy Considerations |

> 🔑 **Key Concept:** An electrolytic cell uses an external source of electrical energy to make a thermodynamically unfavored redox reaction occur (CED 9.7, 9.8).

---

### What You'll Master in Part 1
- Explain what the external power source does in an electrolytic cell
- Identify the anode and cathode from the half-reactions
- Relate the minimum applied voltage and $\\Delta G°$ to $E°_{\\text{cell}}$`
    },
    {
      id: 'ef1-how-it-works',
      type: 'text' as const,
      content: `
## 🔧 How Electrolysis Works

### The Key Idea

An external voltage source (battery or power supply) pushes electrons in the **opposite** direction from what they would naturally go, driving a non-spontaneous reaction forward.


---

### Requirements

1. An **external power source** providing voltage > $|E°_{\\text{cell}}|$
2. An **electrolyte** (molten salt or aqueous solution) to carry current via ions
3. Two **electrodes** (often inert — Pt or graphite)


---

### Anode and Cathode in Electrolytic Cells

| Property | Galvanic Cell | Electrolytic Cell |
|----------|:------------:|:-----------------:|
| Anode | Oxidation ✓ | Oxidation ✓ |
| Cathode | Reduction ✓ | Reduction ✓ |
| Electron flow in the wire | Anode → cathode | Anode → cathode (pushed by the source) |
| Thermodynamically favored? | Yes | No |

**AN OX and RED CAT still apply!** Oxidation is always at the anode, reduction at the cathode — regardless of cell type. Identify each electrode by the half-reaction that happens there (CED 9.8.A.3).
      `
    },
    {
      id: 'ef1-energy',
      type: 'text' as const,
      content: `
## ⚡ Energy Considerations

### The Thermodynamic Reality

For any electrolysis reaction, the numbers tell the story:

| Quantity | Value | Meaning |
|----------|:-----:|---------|
| $\\Delta G$ | $> 0$ | Non-spontaneous — needs energy input |
| $E_{\\text{cell}}$ | $< 0$ | Negative cell potential |
| External voltage required | $\\geq \\lvert E_{\\text{cell}} \\rvert$ | Must overcome the thermodynamic barrier |

> 🔑 **Bottom line:** You have to *pay* with electrical energy to make an electrolysis reaction go.

---

### 🔗 Linking the Voltage to ΔG°

The same equation used for galvanic cells applies: $\\Delta G° = -nFE°$ (CED 9.9). A negative $E°_{\\text{cell}}$ gives a positive $\\Delta G°$, which is the energy the power source must supply per mole of reaction.

---

### 🧪 Example: Electrolysis of Water

$$2\\text{H}_2\\text{O}(l) \\rightarrow 2\\text{H}_2(g) + \\text{O}_2(g)$$

| Parameter | Value |
|-----------|:-----:|
| $E°$ | $-1.23$ V (non-spontaneous) |
| Electrons transferred, $n$ | 4 (per $\\text{O}_2$ formed) |
| Minimum applied voltage | $1.23$ V |
| $\\Delta G°$ | $-(4)(96{,}485)(-1.23) \\approx +475$ kJ/mol$_{rxn}$ |

> 📏 The reverse reaction, $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$, is thermodynamically favored: electrolysis simply runs a favored reaction backward by supplying energy.
      `
    },
    {
      id: 'ef1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Electrolysis Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an electrolytic cell, the external power source:',
            options: [
              'Is not needed, because electrolysis reactions are spontaneous',
              'Pushes electrons from the cathode back to the anode through the wire',
              'Forces electrons from anode to cathode against natural flow',
              'Only heats the solution so that the ions can move more freely'
            ],
            correctAnswer: 2,
            explanation: 'The power source forces a non-spontaneous reaction by pulling electrons from the anode and pushing them to the cathode, the direction they would not naturally flow. It drives the reaction "uphill" energetically; without it, nothing happens, and its role is electrical, not heating.'
          },
          {
            question: 'In an electrolytic cell, the anode is the electrode where:',
            options: [
              'Reduction occurs, the reverse of a galvanic cell',
              'Oxidation occurs, just as in a galvanic cell',
              'Electrons enter the cell from the power source',
              'No reaction occurs, because the source supplies the energy'
            ],
            correctAnswer: 1,
            explanation: 'Oxidation always occurs at the anode, in both galvanic and electrolytic cells. Electrons are pulled out of the anode by the power source and pushed into the cathode, where reduction occurs.'
          },
          {
            question: 'Electrolysis is used for:',
            options: [
              'Generating electricity from chemical reactions',
              'Driving non-spontaneous chemical reactions using electricity',
              'Measuring the equilibrium constant of a reaction',
              'Finding the enthalpy change of a reaction'
            ],
            correctAnswer: 1,
            explanation: 'Electrolysis uses electrical energy to drive reactions that would not occur spontaneously. This is the reverse of a galvanic cell, which generates electricity; equilibrium constants and enthalpy changes are found by other methods.'
          }
        ]
      }
    },
    {
      id: 'ef1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Electrolytic Cell Basics** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In BOTH galvanic and electrolytic cells, oxidation occurs at the',
            options: ['cathode', 'anode', 'salt bridge', 'external wire']
          },
          {
            label: 'In an electrolytic cell, ΔG is',
            options: ['negative', 'zero', 'positive', 'undefined']
          },
          {
            label: 'The minimum voltage needed for electrolysis equals',
            options: ['E°_cell (a negative number)', '|E°_cell| (its absolute value)', 'twice |E°_cell|', 'any small voltage']
          },
          {
            label: 'Electrons from the power source are pushed into the',
            options: ['cathode', 'anode', 'salt bridge', 'electrolyte']
          }
        ],
        correctAnswers: ['anode', 'positive', '|E°_cell| (its absolute value)', 'cathode'],
        hint1: 'AN OX applies to all electrochemical cells.',
        hint2: 'Non-spontaneous reaction = ΔG > 0.',
        hint3: 'The applied voltage must overcome the unfavorable cell potential.',
        explanation: 'Oxidation at the anode always (AN OX). ΔG > 0 for electrolysis (non-spontaneous). Minimum voltage = |E°|. The source pushes electrons into the cathode, where reduction occurs.'
      }
    },
    {
      id: 'ef1-input-practice',
      type: 'input-boxes' as const,
      content: `
**Electrolysis Energy** 🧮

**1)** The electrolysis of water has $E° = -1.23$ V. What minimum voltage must be applied? (in V, positive value)

**2)** The reaction transfers $n = 4$ electrons. What is $\\Delta G°$ in kJ/mol$_{rxn}$? (3 significant figures)

**3)** Is the ΔG for electrolysis positive or negative? (type "positive" or "negative")

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.23', '475', 'positive'],
        hint1: 'Take the absolute value of E°.',
        hint2: '$\\Delta G° = -nFE° = -(4)(96{,}485)(-1.23)$; divide by 1000.',
        hint3: 'Electrolysis is non-spontaneous.',
        explanation: '1) Minimum voltage = |−1.23| = 1.23 V. 2) $\\Delta G° = -(4)(96{,}485)(-1.23) = +474{,}700$ J ≈ 475 kJ. 3) ΔG > 0 (positive) because the reaction is non-spontaneous.'
      }
    },
    {
      id: 'ef1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Electrolysis Basics** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has E°cell = −0.62 V. Which statement about running it in an electrolytic cell is correct?',
            options: [
              'It occurs on its own once the electrodes touch the solution',
              'It needs an applied voltage of at least 0.62 V because ΔG° > 0',
              'It needs exactly 0.62 V, and any larger voltage stops it',
              'It cannot be made to occur, because E° is negative'
            ],
            correctAnswer: 1,
            explanation: 'A negative $E°$ means a positive $\\Delta G°$, so the reaction is not thermodynamically favored and needs an external source of at least $|E°| = 0.62$ V. A larger voltage still drives it, and a negative $E°$ means "needs energy," not "impossible."'
          },
          {
            question: 'Which is a real-world example of electrolysis?',
            options: [
              'A car battery producing electricity',
              'Splitting water into $H_{2}$ and $O_{2}$ using a power supply',
              'A lemon battery lighting an LED',
              'A Daniell cell lighting a bulb'
            ],
            correctAnswer: 1,
            explanation: 'Splitting water ($2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$) is a non-spontaneous process that requires an external power supply — a classic example of electrolysis.'
          }
        ]
      }
    }
  ]
}
