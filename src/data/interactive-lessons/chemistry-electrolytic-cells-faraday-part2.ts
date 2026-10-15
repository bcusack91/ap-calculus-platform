export const chemElectrolyticCellsFaradayPart2Data = {
  topicSlug: 'electrolytic-cells-faraday',
  sections: [
    {
      id: 'ef2-intro',
      type: 'text' as const,
      content: `# 🔄 Galvanic vs. Electrolytic Cells

**Part 2 of 7 — A Detailed Comparison**

---

### Topics in This Part

| Section |
|---------|
| ⚖️ Complete Comparison |
| What STAYS THE SAME |
| What CHANGES |
| 🔋 Recharging: Galvanic → Electrolytic |

> 🔑 **Key Concept:** Galvanic and electrolytic cells use the same parts and the same rules for naming electrodes. What differs is whether the reaction is thermodynamically favored and which way energy flows (CED 9.8.A.2).

---

### What You'll Master in Part 2
- Compare galvanic and electrolytic cells feature by feature
- Explain why AN OX / RED CAT holds in every cell
- Describe how recharging turns a galvanic cell into an electrolytic cell`
    },
    {
      id: 'ef2-comparison-table',
      type: 'text' as const,
      content: `
## ⚖️ Complete Comparison

| Feature | Galvanic Cell | Electrolytic Cell |
|---------|:------------:|:-----------------:|
| **Thermodynamically favored?** | Yes ($\\Delta G° < 0$) | No ($\\Delta G° > 0$) |
| **$E°_{\\text{cell}}$** | Positive | Negative |
| **Energy conversion** | Chemical → Electrical | Electrical → Chemical |
| **External power?** | No (produces power) | Yes (requires power) |
| **Anode** | Oxidation | Oxidation |
| **Cathode** | Reduction | Reduction |
| **Electron flow in the wire** | Anode → Cathode | Anode → Cathode |
| **Salt bridge** | Needed when the half-cells are separate | Often a single container |
| **Example** | Daniell cell (Zn/Cu²⁺) | Electroplating, electrolysis of molten NaCl |


---

### What STAYS THE SAME

- **Oxidation at the anode** (AN OX)
- **Reduction at the cathode** (RED CAT)
- **Electrons flow from anode to cathode** through the external circuit
- **Cations migrate toward the cathode, anions toward the anode**

> 🔑 **AP Must-Know:** AN OX / RED CAT applies to ALL electrochemical cells (CED 9.8.A.3). This never changes.


---

### What CHANGES

- **Thermodynamic favorability** (favored vs. driven by an external source)
- **Direction of energy flow** (chemical ↔ electrical)
- **What pushes the electrons** (the reaction itself vs. the power source)
      `
    },
    {
      id: 'ef2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Galvanic vs. Electrolytic Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement is true for BOTH galvanic and electrolytic cells?',
            options: [
              'The cell reaction is thermodynamically favored',
              'The cell converts chemical energy into electrical energy',
              'Oxidation occurs at the anode',
              'The cell needs an external power source'
            ],
            correctAnswer: 2,
            explanation: 'Oxidation at the anode (AN OX) is true for ALL electrochemical cells. Favorability, the direction of energy conversion, and the need for a power source all differ between the two types.'
          },
          {
            question: 'In an electrolytic cell, the power source pushes electrons into the:',
            options: [
              'Anode, where oxidation occurs',
              'Cathode, where reduction occurs',
              'Salt bridge, which carries them across',
              'Electrolyte, where they move with the ions'
            ],
            correctAnswer: 1,
            explanation: 'The source pulls electrons out of the anode (where oxidation releases them) and pushes them into the cathode, where a species gains them and is reduced. Electrons travel through wires and electrodes, never through the salt bridge or solution.'
          },
          {
            question: 'Which description fits an electrolytic cell?',
            options: [
              'E°cell > 0 and electrical energy is produced',
              'E°cell < 0 and electrical energy is consumed',
              'E°cell > 0 and electrical energy is consumed',
              'E°cell < 0 and electrical energy is produced'
            ],
            correctAnswer: 1,
            explanation: 'An electrolytic cell runs a reaction with a negative $E°_{\\text{cell}}$ (positive $\\Delta G°$), so it must consume electrical energy from an external source. A positive $E°_{\\text{cell}}$ describes a galvanic cell, which produces electrical energy.'
          }
        ]
      }
    },
    {
      id: 'ef2-charging-battery',
      type: 'text' as const,
      content: `
## 🔋 Recharging: Galvanic → Electrolytic

The CED's example of an external energy source driving an unfavorable process is using electrical energy "to drive an electrolytic cell or charge a battery" (9.7.A.1). Any galvanic cell can be recharged in principle by forcing its reaction backward. Take the Daniell cell:

---

### ⬇️ Discharging (Galvanic Mode)

$$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s) \\qquad E° = +1.10 \\text{ V}$$

| Property | Value |
|----------|-------|
| **Thermodynamically favored?** | ✅ Yes |
| **Zinc electrode** | Anode (Zn oxidized, loses mass) |
| **Copper electrode** | Cathode ($\\text{Cu}^{2+}$ reduced, gains mass) |

---

### ⬆️ Charging (Electrolytic Mode)

$$\\text{Zn}^{2+}(aq) + \\text{Cu}(s) \\rightarrow \\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\qquad E° = -1.10 \\text{ V}$$

| Property | Value |
|----------|-------|
| **Thermodynamically favored?** | ❌ No — needs more than 1.10 V from outside |
| **Zinc electrode** | Cathode ($\\text{Zn}^{2+}$ reduced, gains mass) |
| **Copper electrode** | Anode (Cu oxidized, loses mass) |

---

### 🔀 What Swaps During Charging?

| | Discharging | Charging |
|--|:-----------:|:--------:|
| **Anode** | Zinc | Copper |
| **Cathode** | Copper | Zinc |
| **Electron flow in wire** | Zn → Cu | Cu → Zn |
| **Reaction direction** | Forward | Reverse |

> ⚠️ **AP Trap:** The electrodes **swap names** during charging because the half-reactions reverse. Name each electrode by what happens there, every time.
      `
    },
    {
      id: 'ef2-input-practice',
      type: 'input-boxes' as const,
      content: `
**Quick Comparison** 🧮

Answer with "galvanic" or "electrolytic":

**1)** $\\Delta G° < 0$ and $E° > 0$ describes a _____ cell.

**2)** Requires an external power source: _____ cell.

**3)** Electrical energy is converted into chemical energy in a _____ cell.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['galvanic', 'electrolytic', 'electrolytic'],
        hint1: 'A thermodynamically favored reaction has $\\Delta G° < 0$.',
        hint2: 'Unfavored reactions need energy input.',
        hint3: 'Which cell stores energy in chemical form?',
        explanation: '1) Galvanic: thermodynamically favored, $\\Delta G° < 0$, $E° > 0$. 2) Electrolytic: needs an external voltage. 3) Electrolytic: the source supplies electrical energy that ends up stored in the products.'
      }
    },
    {
      id: 'ef2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Galvanic vs. Electrolytic** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student says: "In electrolytic cells, reduction occurs at the anode." Is this correct?',
            options: [
              'Yes — electrolytic cells swap the electrode roles',
              'No — reduction ALWAYS occurs at the cathode in all cells',
              'Yes — but only for molten salt electrolysis',
              'No — electrolytic cells involve no redox at all'
            ],
            correctAnswer: 1,
            explanation: 'Reduction at the cathode (RED CAT) is a universal rule. It applies to galvanic cells, electrolytic cells, and all other electrochemical cells; the electrodes are named by the half-reaction that occurs at each.'
          },
          {
            question: 'A dead Daniell cell is recharged with an external source. During charging, the zinc electrode is the:',
            options: [
              'The anode, since zinc atoms lose electrons there',
              'The cathode, since Zn²⁺ gains electrons there',
              'The anode, since the zinc electrode loses mass',
              'Neither, since zinc only conducts electrons'
            ],
            correctAnswer: 1,
            explanation: 'Charging reverses the cell reaction, so $\\text{Zn}^{2+}$ gains electrons and plates out as zinc. Reduction occurs at the cathode, so the zinc electrode is now the cathode and gains mass; copper is oxidized at the other electrode, the anode.'
          }
        ]
      }
    }
  ]
}
