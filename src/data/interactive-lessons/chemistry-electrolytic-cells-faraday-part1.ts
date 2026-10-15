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
| Electrode Conventions in Electrolytic Cells |
| ⚡ Energy Considerations |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
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

### Electrode Conventions in Electrolytic Cells

| Property | Galvanic Cell | Electrolytic Cell |
|----------|:------------:|:-----------------:|
| Anode | Oxidation ✓ | Oxidation ✓ |
| Cathode | Reduction ✓ | Reduction ✓ |
| Anode sign | − (negative) | + (positive) |
| Cathode sign | + (positive) | − (negative) |
| Spontaneous? | Yes | No |

**AN OX and RED CAT still apply!** Oxidation is always at the anode, reduction at the cathode — regardless of cell type.
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

### ⚠️ Overpotential — The Hidden Cost

In practice, the actual voltage needed is **higher** than the thermodynamic minimum. This extra voltage is called **overpotential** — it overcomes kinetic barriers at the electrode surfaces.

$$\\boxed{V_{\\text{applied}} = |E_{\\text{cell}}| + \\eta_{\\text{overpotential}}}$$

> 💡 Overpotential depends on the electrode material, current density, and which gases are being produced. It's why real electrolysis always costs more energy than theory predicts.

---

### 🧪 Example: Electrolysis of Water

$$2\\text{H}_2\\text{O}(l) \\rightarrow 2\\text{H}_2(g) + \\text{O}_2(g)$$

| Parameter | Value |
|-----------|:-----:|
| $E°$ | $-1.23$ V (non-spontaneous) |
| Minimum applied voltage | $1.23$ V |
| Typical actual voltage | $\\sim 1.8 - 2.0$ V |
| Overpotential | $\\sim 0.6 - 0.8$ V |

> 📏 This reaction is how we produce hydrogen gas for fuel cells — electrolysis and fuel cells are **reverse processes** of each other!
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
            question: 'In an electrolytic cell, the anode is:',
            options: [
              'Negative, just as the anode is in a galvanic cell',
              'Positive (wired to the + terminal of the source)',
              'Negative (wired to the − terminal of the battery)',
              'Neutral, since only the cathode is connected to power'
            ],
            correctAnswer: 1,
            explanation: 'In an electrolytic cell, the anode is connected to the positive terminal of the power source, making it positive. This is OPPOSITE to a galvanic cell where the anode is negative.'
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
            label: 'Overpotential is',
            options: ['extra voltage beyond the minimum', 'the voltage of the galvanic cell', 'the minimum voltage itself', 'the voltage of the salt bridge']
          }
        ],
        correctAnswers: ['anode', 'positive', '|E°_cell| (its absolute value)', 'extra voltage beyond the minimum'],
        hint1: 'AN OX applies to all electrochemical cells.',
        hint2: 'Non-spontaneous reaction = ΔG > 0.',
        hint3: 'The applied voltage must overcome the unfavorable cell potential.',
        explanation: 'Oxidation at the anode always (AN OX). ΔG > 0 for electrolysis (non-spontaneous). Minimum voltage = |E°|. Overpotential = extra kinetic barrier voltage needed in practice.'
      }
    },
    {
      id: 'ef1-input-practice',
      type: 'input-boxes' as const,
      content: `
**Electrolysis Energy** 🧮

**1)** The electrolysis of water has $E° = -1.23$ V. What minimum voltage must be applied? (in V, positive value)

**2)** If the overpotential is 0.5 V, what is the actual applied voltage needed? (in V)

**3)** Is the ΔG for electrolysis positive or negative? (type "positive" or "negative")

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.23', '1.73', 'positive'],
        hint1: 'Take the absolute value of E°.',
        hint2: '$V_{\\text{applied}} = |E°| + \\text{overpotential}$',
        hint3: 'Electrolysis is non-spontaneous.',
        explanation: '1) Minimum voltage = |−1.23| = 1.23 V. 2) 1.23 + 0.50 = 1.73 V. 3) ΔG > 0 (positive) because the reaction is non-spontaneous.'
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
            question: 'The anode sign is different in galvanic vs electrolytic cells because:',
            options: [
              'Oxidation and reduction switch places',
              'The external power source reverses the electrode polarity',
              'The anode sign is always the same in both cells',
              'Different metals are used'
            ],
            correctAnswer: 1,
            explanation: 'In a galvanic cell, the anode naturally produces electrons (−). In an electrolytic cell, the power source connects the + terminal to the anode, making it +. The chemistry (oxidation at anode) is the same; only the polarity labeling changes.'
          },
          {
            question: 'Which is a real-world example of electrolysis?',
            options: [
              'A car battery producing electricity',
              'Splitting water into $H_{2}$ and $O_{2}$ using a power supply',
              'A lemon battery lighting an LED',
              'A fuel cell generating power'
            ],
            correctAnswer: 1,
            explanation: 'Splitting water ($2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$) is a non-spontaneous process that requires an external power supply — a classic example of electrolysis.'
          }
        ]
      }
    }
  ]
}
