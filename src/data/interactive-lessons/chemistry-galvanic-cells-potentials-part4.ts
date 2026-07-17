export const chemGalvanicCellsPotentialsPart4Data = {
  topicSlug: 'galvanic-cells-potentials',
  sections: [
    {
      id: 'gc4-intro',
      type: 'text' as const,
      content: `# 📝 Cell Notation (Line Notation)

**Part 4 of 7 — Shorthand for Electrochemical Cells**

---

### Topics in This Part

| Section |
|---------|
| 📝 Cell Notation Rules |
| The Format |
| Conventions |
| Example: Daniell Cell |
| ⭐ Special Cases in Cell Notation |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'gc4-rules',
      type: 'text' as const,
      content: `
## 📝 Cell Notation Rules

### The Format

$$\\boxed{\\text{Anode} \\mid \\text{Anode ion} \\| \\text{Cathode ion} \\mid \\text{Cathode}}$$


---

### Conventions

| Symbol | Meaning |
|--------|---------|
| $\\mid$ (single line) | Phase boundary (solid/liquid, liquid/gas, etc.) |
| $\\|$ (double line) | Salt bridge |
| Anode on the **left** | Oxidation half-cell |
| Cathode on the **right** | Reduction half-cell |
| Concentrations in parentheses | e.g., $(1.0$ M$)$ |

> 🔑 **Key Concept:** Read cell notation **left to right** — anode (oxidation) → salt bridge → cathode (reduction).

---

### Example: Daniell Cell

$$\\boxed{\\text{Zn}(s) \\mid \\text{Zn}^{2+}(aq) \\| \\text{Cu}^{2+}(aq) \\mid \\text{Cu}(s)}$$

**Read left to right:**
1. Zn solid electrode (anode)
2. Phase boundary
3. $Zn^{2+}$ ions in solution
4. Salt bridge
5. $Cu^{2+}$ ions in solution
6. Phase boundary
7. Cu solid electrode (cathode)
      `
    },
    {
      id: 'gc4-special-cases',
      type: 'text' as const,
      content: `
## ⭐ Special Cases in Cell Notation

### 🔩 Inert Electrodes

When a half-reaction involves only aqueous species (no solid metal), we use an **inert electrode** — typically **Pt** (platinum) or **C** (graphite):

> **Example:**
>
> $$\\text{Pt} \\mid \\text{Fe}^{2+}(aq), \\text{Fe}^{3+}(aq) \\| \\text{Ag}^+(aq) \\mid \\text{Ag}(s)$$
>
> The comma separates species in the **same phase**.

---

### 💨 Gas Electrodes

For reactions involving gases, the gas contacts the Pt electrode and is separated by a phase boundary:

> **Example:**
>
> $$\\text{Pt} \\mid \\text{H}_2(g) \\mid \\text{H}^+(aq) \\| \\text{Ag}^+(aq) \\mid \\text{Ag}(s)$$
>
> The $\\text{H}_2$ gas bubbles over the Pt surface.

---

### 🎯 Key Points for AP

| Rule | Detail |
|------|--------|
| Anode position | **Always** on the left |
| Cathode position | **Always** on the right |
| Species order | Listed as they appear in the half-reaction |
| $\\mid$ (single line) | Phase boundary |
| $\\|$ (double line) | Salt bridge |
| Comma | Separates species in the **same** phase |
      `
    },
    {
      id: 'gc4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Cell Notation Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In cell notation, the anode is written:',
            options: [
              'On the right side',
              'On the left side',
              'In the middle',
              'Above the salt bridge'
            ],
            correctAnswer: 1,
            explanation: 'By convention, the anode (oxidation) is always written on the **left** side of cell notation, and the cathode (reduction) on the right.'
          },
          {
            question: 'The double line (||) in cell notation represents:',
            options: [
              'A phase boundary',
              'An inert electrode',
              'The salt bridge',
              'The external wire'
            ],
            correctAnswer: 2,
            explanation: 'The double line ($\\|$) represents the salt bridge. A single line ($\\mid$) represents a phase boundary.'
          },
          {
            question: 'For the cell: Pt | $Fe^{2+}(aq)$, $Fe^{3+}(aq)$ || $Cu^{2+}(aq)$ | Cu(s), why is Pt used?',
            options: [
              'Pt is always required in galvanic cells',
              'There is no solid metal for the $Fe^{2+}/Fe^{3+}$ half-reaction',
              'Pt provides the voltage',
              'Pt acts as the salt bridge'
            ],
            correctAnswer: 1,
            explanation: 'The $Fe^{2+}/Fe^{3+}$ half-reaction involves only aqueous ions — no solid metal to serve as an electrode. An inert conductor (Pt) provides a surface for electron transfer without participating in the reaction.'
          }
        ]
      }
    },
    {
      id: 'gc4-notation-drill',
      type: 'input-boxes' as const,
      content: `
**Reading Cell Notation** 🧮

For the cell: $\\text{Al}(s) \\mid \\text{Al}^{3+}(aq) \\| \\text{Ni}^{2+}(aq) \\mid \\text{Ni}(s)$

**1)** Which metal is the anode? (element symbol)

**2)** Which metal is the cathode? (element symbol)

**3)** How many electrons are transferred in the balanced reaction? ($Al^{3+}$ needs $3e^{-}$, $Ni^{2+}$ needs $2e^{-}$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Al', 'Ni', '6'],
        hint1: 'The anode is always on the left in cell notation.',
        hint2: 'The cathode is always on the right in cell notation.',
        hint3: 'LCM of 3 and 2 is 6: 2Al → $2Al^{3+}$ + $6e^{-}$, $3Ni^{2+}$ + $6e^{-}$ → 3Ni.',
        explanation: '1) Al is on the left → anode. 2) Ni is on the right → cathode. 3) To balance electrons: 2 × $3e^{-}$ = 3 × $2e^{-}$ = 6 electrons transferred.'
      }
    },
    {
      id: 'gc4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Cell Notation Elements** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A single vertical line | represents a',
            options: ['salt bridge', 'phase boundary', 'external wire', 'inert electrode']
          },
          {
            label: 'In notation: Sn(s) | $Sn^{2+}(aq)$ || $Ag^{+}(aq)$ | Ag(s), the species being oxidized is',
            options: ['Sn(s)', '$Sn^{2+}(aq)$', '$Ag^{+}(aq)$', 'Ag(s)']
          },
          {
            label: 'An inert electrode is needed when',
            options: ['the reaction is slow', 'no solid metal participates in the half-reaction', 'the cell voltage is low', 'two gases react']
          },
          {
            label: 'A comma in cell notation separates species that are in the',
            options: ['different phases', 'same phase', 'different half-cells', 'the salt bridge']
          }
        ],
        correctAnswers: ['phase boundary', 'Sn(s)', 'no solid metal participates in the half-reaction', 'same phase'],
        hint1: 'Single line = phase change, double line = salt bridge.',
        hint2: 'The left side is the anode where oxidation occurs.',
        hint3: 'When all species in a half-reaction are dissolved ions, we need Pt or C.',
        explanation: 'Single line = phase boundary. Sn is on the left (anode, oxidized). Inert electrodes are needed when no solid metal participates. Commas separate species in the same phase (e.g., $Fe^{2+}$, $Fe^{3+}$ both in solution).'
      }
    },
    {
      id: 'gc4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Cell Notation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Write the cell notation for a cell where Mg is oxidized and $Fe^{2+}$ is reduced.',
            options: [
              'Fe(s) | $Fe^{2+}(aq)$ || $Mg^{2+}(aq)$ | Mg(s)',
              'Mg(s) | $Mg^{2+}(aq)$ || $Fe^{2+}(aq)$ | Fe(s)',
              '$Mg^{2+}(aq)$ | Mg(s) || Fe(s) | $Fe^{2+}(aq)$',
              '$Fe^{2+}(aq)$ | Fe(s) || Mg(s) | $Mg^{2+}(aq)$'
            ],
            correctAnswer: 1,
            explanation: 'Anode (oxidation, Mg) on the left: Mg(s) | $Mg^{2+}(aq)$. Salt bridge: ||. Cathode (reduction, Fe) on the right: $Fe^{2+}(aq)$ | Fe(s). Complete: Mg(s) | $Mg^{2+}(aq)$ || $Fe^{2+}(aq)$ | Fe(s).'
          },
          {
            question: 'For the notation: Pt | $Cl_{2}(g)$ | $Cl^{-}(aq)$ || $MnO_{4}^{-}(aq)$, $Mn^{2+}(aq)$ | Pt, the Pt electrode on the left is the:',
            options: [
              'Cathode — reduction occurs there',
              'Anode — oxidation occurs there',
              'Salt bridge',
              'Spectator'
            ],
            correctAnswer: 1,
            explanation: 'The left side is always the anode. $Cl_{2}$ is being produced from $Cl^{-}$ (oxidation). Pt provides the electrode surface since the reactant is a gas/solution.'
          }
        ]
      }
    }
  ]
}
