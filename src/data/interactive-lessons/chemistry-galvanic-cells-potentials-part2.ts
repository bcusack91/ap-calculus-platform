export const chemGalvanicCellsPotentialsPart2Data = {
  topicSlug: 'galvanic-cells-potentials',
  sections: [
    {
      id: 'gc2-intro',
      type: 'text' as const,
      content: `# 🔋 Galvanic Cell Structure

**Part 2 of 7 — Salt Bridges, Electron Flow, and Ion Flow**

---

### Topics in This Part

| Section |
|---------|
| 🏗️ Anatomy of a Galvanic Cell |
| The Two Half-Cells |
| Key Components |
| The Zn-Cu Cell (Daniell Cell) |
| 🔀 Flow Directions |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'gc2-cell-anatomy',
      type: 'text' as const,
      content: `
## 🏗️ Anatomy of a Galvanic Cell

### The Two Half-Cells

A galvanic cell consists of two **half-cells**, each containing:
- An **electrode** (solid conductor, often a metal)
- An **electrolyte solution** (containing the relevant ions)


---

### Key Components

| Component | Function |
|-----------|----------|
| **Anode** | Electrode where oxidation occurs (negative terminal) |
| **Cathode** | Electrode where reduction occurs (positive terminal) |
| **Salt bridge** | Allows ion flow to maintain electrical neutrality |
| **External wire** | Carries electrons from anode to cathode |

---

### The Zn-Cu Cell (Daniell Cell)

![Diagram of a Zinc-Copper Galvanic Cell showing the anode, cathode, salt bridge, electron flow, and ion flow](/diagrams/galvanic-cell.svg)

**Anode (oxidation):** $\\text{Zn}(s) \\rightarrow \\text{Zn}^{2+}(aq) + 2e^-$

**Cathode (reduction):** $\\text{Cu}^{2+}(aq) + 2e^- \\rightarrow \\text{Cu}(s)$

**Overall:** $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$
      `
    },
    {
      id: 'gc2-flow-directions',
      type: 'text' as const,
      content: `
## 🔀 Flow Directions

---

### ⚡ Electron Flow (through the wire)

$$\\text{Anode} \\xrightarrow{e^-} \\text{Cathode}$$

Electrons flow from **anode to cathode** through the external circuit.

---

### 🧂 Ion Flow (through the salt bridge)

| Ion Type | Direction | Examples |
|----------|-----------|----------|
| **Anions** (−) | Migrate toward the **anode** | $\\text{NO}_3^-$, $\\text{Cl}^-$ |
| **Cations** (+) | Migrate toward the **cathode** | $\\text{K}^+$, $\\text{Na}^+$ |

---

### 🤔 Why Is the Salt Bridge Necessary?

> Without a salt bridge, the cell would **stop working almost immediately.**

Here's why:

1. The anode solution would become too **positive** (excess $\\text{Zn}^{2+}$ produced)
2. The cathode solution would become too **negative** ($\\text{Cu}^{2+}$ consumed)
3. This charge imbalance would **halt the reaction**

The salt bridge maintains **electrical neutrality** by allowing ion migration between the two half-cells.

---

### ± Anode Sign Convention

> In a **galvanic** cell:
>
> - Anode = **negative** terminal **(−)**
> - Cathode = **positive** terminal **(+)**
>
> ⚠️ This is **opposite** to electrolytic cells!
      `
    },
    {
      id: 'gc2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Cell Structure Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a galvanic cell, electrons flow through the:',
            options: [
              'Salt bridge',
              'Electrolyte solution',
              'External wire',
              'Electrode interior only'
            ],
            correctAnswer: 2,
            explanation: 'Electrons flow through the **external wire** from anode to cathode. Ions (not electrons) flow through the salt bridge and solution.'
          },
          {
            question: 'The salt bridge in a galvanic cell:',
            options: [
              'Allows electrons to flow between half-cells',
              'Maintains electrical neutrality by allowing ion migration',
              'Increases the voltage of the cell',
              'Prevents the reaction from occurring'
            ],
            correctAnswer: 1,
            explanation: 'The salt bridge allows ions to migrate between half-cells to maintain electrical neutrality. Without it, charge buildup would halt the cell.'
          },
          {
            question: 'In a Daniell cell, the Zn electrode is the:',
            options: [
              'Cathode (positive terminal)',
              'Anode (negative terminal)',
              'Salt bridge',
              'Inert electrode'
            ],
            correctAnswer: 1,
            explanation: 'Zinc is oxidized ($\\text{Zn} \\rightarrow \\text{Zn}^{2+} + 2e^-$), so it is the anode. In a galvanic cell, the anode is the negative terminal.'
          }
        ]
      }
    },
    {
      id: 'gc2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Cell Component Identification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Oxidation occurs at the',
            options: ['cathode', 'anode', 'salt bridge', 'voltmeter']
          },
          {
            label: 'In a galvanic cell, the anode has a charge of',
            options: ['positive (+)', 'negative (−)', 'neutral', 'depends on the reaction']
          },
          {
            label: 'Cations in the salt bridge migrate toward the',
            options: ['anode', 'cathode', 'external wire', 'voltmeter']
          },
          {
            label: 'As a galvanic cell operates, the mass of the anode',
            options: ['increases', 'decreases', 'stays the same', 'oscillates']
          },
          {
            label: 'As a galvanic cell operates, the mass of the cathode',
            options: ['increases', 'decreases', 'stays the same', 'oscillates']
          }
        ],
        correctAnswers: ['anode', 'negative (−)', 'cathode', 'decreases', 'increases'],
        hint1: 'AN OX, RED CAT.',
        hint2: 'The anode produces electrons, giving it a negative charge in galvanic cells.',
        hint3: 'Cations move toward the region becoming more negative (where $Cu^{2+}$ is consumed).',
        explanation: 'Oxidation at the anode (negative in galvanic). Cations migrate toward the cathode to replace consumed ions. The anode dissolves (mass decreases, e.g., Zn → $Zn^{2+}$) and metal deposits on the cathode (mass increases, e.g., $Cu^{2+}$ → Cu).'
      }
    },
    {
      id: 'gc2-input-practice',
      type: 'input-boxes' as const,
      content: `
**Cell Analysis** 🧮

For a galvanic cell with the overall reaction:
$\\text{Mg}(s) + \\text{Fe}^{2+}(aq) \\rightarrow \\text{Mg}^{2+}(aq) + \\text{Fe}(s)$

**1)** Which metal is the anode? (type the element symbol)

**2)** Which metal is the cathode? (type the element symbol)

**3)** How many electrons are transferred in the balanced reaction?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Mg', 'Fe', '2'],
        hint1: 'Which metal is oxidized (loses electrons)?',
        hint2: 'Which metal is produced by reduction?',
        hint3: 'Mg goes from 0 to +2, Fe goes from +2 to 0.',
        explanation: '1) Mg is oxidized (Mg → $Mg^{2+}$ + $2e^{-}$), so Mg is the anode. 2) $Fe^{2+}$ is reduced to Fe at the cathode, so Fe is the cathode. 3) Mg loses $2e^{-}$ and $Fe^{2+}$ gains $2e^{-}$ → 2 electrons transferred.'
      }
    },
    {
      id: 'gc2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Cell Structure** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'What would happen if the salt bridge were removed from an operating galvanic cell?',
            options: [
              'The cell voltage would increase',
              'The cell would continue operating normally',
              'The current would stop as charge builds up',
              'The electrodes would dissolve faster'
            ],
            correctAnswer: 2,
            explanation: 'Without the salt bridge, charge would accumulate: the anode solution becomes too positive, the cathode solution too negative. This charge buildup opposes electron flow and the cell quickly stops.'
          },
          {
            question: 'In a galvanic cell, anions from the salt bridge flow toward the:',
            options: [
              'Cathode (to balance consumed cations)',
              'Anode (to balance produced cations)',
              'External wire',
              'They don\'t flow at all'
            ],
            correctAnswer: 1,
            explanation: 'At the anode, metal dissolves producing cations (e.g., $Zn^{2+}$). Anions from the salt bridge migrate toward the anode to balance these new positive charges.'
          }
        ]
      }
    }
  ]
}
