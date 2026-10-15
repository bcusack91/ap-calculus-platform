export const chemGalvanicCellsPotentialsPart4Data = {
  topicSlug: 'galvanic-cells-potentials',
  sections: [
    {
      id: 'gc4-intro',
      type: 'text' as const,
      content: `# 🔍 Reading Cell Diagrams

**Part 4 of 7 — Reading Cell Diagrams and Observations**

---

### Topics in This Part

| Section |
|---------|
| 🔍 A Five-Step Routine for Any Cell Diagram |
| 🔩 Inert Electrodes |
| 💨 Cells That Make or Use a Gas |
| 🧪 Worked Example — Zinc and Iron(III) |

> 🔑 **Key Concept:** AP questions show a drawing of a cell and ask what happens in it. The CED expects you to describe a cell's operation "at both the macroscopic and particulate levels": electron flow, the reaction in each half-cell, changes in electrode mass, gas evolution, and ion flow through the salt bridge (9.8.A.1).

---

### What You'll Master in Part 4
- Work out the anode, cathode and electron flow from a diagram and a table of $E°$ values
- Explain when and why an inert electrode is used
- Predict what you would observe in each half-cell`
    },
    {
      id: 'gc4-routine',
      type: 'text' as const,
      content: `
## 🔍 A Five-Step Routine for Any Cell Diagram

| Step | Question to ask | How to answer |
|------|-----------------|---------------|
| 1 | Which half-reactions are possible? | Find each half-cell's couple in the $E°$ table |
| 2 | Which side is the cathode? | The couple with the **higher** $E°$ is reduced (galvanic cell) |
| 3 | Which way do electrons move? | Through the wire, **anode → cathode** |
| 4 | Which way do salt-bridge ions move? | Anions → anode compartment; cations → cathode compartment |
| 5 | What can be observed? | Mass change, gas bubbles, color change, concentration change |

---

### Observations to Expect

| Process at the electrode | What you would see |
|--------------------------|-------------------|
| Metal electrode oxidized (e.g., Zn → $\\text{Zn}^{2+}$) | Electrode loses mass; metal ion concentration rises |
| Metal ion reduced (e.g., $\\text{Cu}^{2+}$ → Cu) | Electrode gains mass; colored ion may fade |
| Gas formed (e.g., $2\\text{H}^+ + 2e^- \\rightarrow \\text{H}_2$) | Bubbles at that electrode |
| Ion changes oxidation state in solution (e.g., $\\text{Fe}^{3+}$ → $\\text{Fe}^{2+}$) | Color change; electrode mass unchanged |

> 💡 An electrode's mass changes only if the electrode itself takes part (dissolves) or a solid forms on it.
      `
    },
    {
      id: 'gc4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding — Reading a Diagram** 🎯

A cell has a nickel electrode in 1 M $\\text{Ni(NO}_3)_2$ and a silver electrode in 1 M $\\text{AgNO}_3$, joined by a $\\text{KNO}_3$ salt bridge. ($E°$: $\\text{Ag}^+/\\text{Ag} = +0.80$ V; $\\text{Ni}^{2+}/\\text{Ni} = -0.26$ V)
      `,
      exercise: {
        questions: [
          {
            question: 'Which electrode is the cathode, and why?',
            options: [
              'Nickel, since Ni has the lower E° and is reduced',
              'Silver, since Ag⁺ has the higher E° and is reduced',
              'Neither, since both metals sit in 1 M solutions',
              'Both, since each electrode gains electrons'
            ],
            correctAnswer: 1,
            explanation: 'In a galvanic cell the couple with the higher reduction potential is reduced, so $\\text{Ag}^+$ gains electrons at the silver electrode, which is the cathode. Nickel metal is oxidized at the anode.'
          },
          {
            question: 'Which observation is expected as the cell operates?',
            options: [
              'The nickel electrode gains mass',
              'The silver electrode gains mass',
              'Bubbles form at the silver electrode',
              'Both electrodes keep the same mass'
            ],
            correctAnswer: 1,
            explanation: '$\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$ deposits silver on the cathode, increasing its mass. Nickel dissolves at the anode, so that electrode loses mass. No gas is produced in either half-reaction.'
          },
          {
            question: 'Which ions move into the nickel half-cell from the salt bridge?',
            options: [
              'K⁺, to replace the Ni²⁺ that is reduced',
              'NO₃⁻, to balance the Ni²⁺ that is produced',
              'Ag⁺, carried across from the silver half-cell',
              'Ni²⁺, carried in to rebuild the electrode'
            ],
            correctAnswer: 1,
            explanation: 'Oxidation at the anode adds $\\text{Ni}^{2+}$ to the solution, so anions ($\\text{NO}_3^-$) flow in to keep it neutral. $\\text{K}^+$ moves toward the silver cathode, where $\\text{Ag}^+$ is removed. The salt bridge carries its own ions, not the reacting metal ions.'
          }
        ]
      }
    },
    {
      id: 'gc4-inert',
      type: 'text' as const,
      content: `
## 🔩 Inert Electrodes

Some half-reactions contain **no solid metal**, for example:

$$\\text{Fe}^{3+}(aq) + e^- \\rightarrow \\text{Fe}^{2+}(aq) \\qquad \\text{Cl}_2(g) + 2e^- \\rightarrow 2\\text{Cl}^-(aq)$$

Electrons still need a conducting surface to enter or leave the solution, so the half-cell uses an **inert electrode**, usually platinum or graphite.

| Inert electrode | What it does | What it does not do |
|-----------------|--------------|---------------------|
| Pt or graphite | conducts electrons to or from the dissolved species | is not oxidized or reduced, so its mass does not change |

---

## 💨 Cells That Make or Use a Gas

When a half-reaction produces a gas, bubbles appear at that electrode. When a gas is a reactant, it is bubbled over an inert electrode.

| Half-reaction | Electrode | Observation |
|---------------|-----------|-------------|
| $2\\text{H}^+ + 2e^- \\rightarrow \\text{H}_2(g)$ | cathode (Pt) | bubbles of $\\text{H}_2$ |
| $2\\text{Cl}^- \\rightarrow \\text{Cl}_2(g) + 2e^-$ | anode (Pt or graphite) | pale green gas |
      `
    },
    {
      id: 'gc4-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example — Zinc and Iron(III)

> **Problem:** One half-cell has a zinc strip in 1 M $\\text{Zn(NO}_3)_2$. The other has a platinum wire in a solution that is 1 M in both $\\text{Fe(NO}_3)_3$ and $\\text{Fe(NO}_3)_2$. ($E°$: $\\text{Fe}^{3+}/\\text{Fe}^{2+} = +0.77$ V; $\\text{Zn}^{2+}/\\text{Zn} = -0.76$ V.) Describe the cell.

**Step 1 — Couples:** $\\text{Fe}^{3+}/\\text{Fe}^{2+}$ and $\\text{Zn}^{2+}/\\text{Zn}$.

**Step 2 — Cathode:** $\\text{Fe}^{3+}$ has the higher $E°$, so it is reduced at the **platinum** electrode.

**Step 3 — Electrons:** from the zinc strip (anode) through the wire to the platinum wire.

**Step 4 — Salt bridge:** anions move toward the zinc half-cell; cations toward the iron half-cell.

**Step 5 — Observations:**
- Zinc strip loses mass; $[\\text{Zn}^{2+}]$ rises.
- Platinum wire mass is unchanged.
- In the iron half-cell, $[\\text{Fe}^{3+}]$ falls and $[\\text{Fe}^{2+}]$ rises (the yellow-brown color of $\\text{Fe}^{3+}$ fades).

Overall: $\\text{Zn}(s) + 2\\text{Fe}^{3+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + 2\\text{Fe}^{2+}(aq)$, $E°_{\\text{cell}} = 0.77 - (-0.76) = +1.53$ V
      `
    },
    {
      id: 'gc4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Describe the Cell** 🔽

A platinum electrode dips into 1 M HCl with $\\text{H}_2$ gas at 1 atm bubbling over it. The other half-cell is a magnesium strip in 1 M $\\text{Mg(NO}_3)_2$. ($E°$: $\\text{H}^+/\\text{H}_2 = 0.00$ V; $\\text{Mg}^{2+}/\\text{Mg} = -2.37$ V)
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Reduction occurs at the',
            options: ['platinum electrode', 'magnesium strip', 'salt bridge', 'voltmeter']
          },
          {
            label: 'At the platinum electrode you would observe',
            options: ['bubbles of hydrogen forming', 'a metal coating forming', 'the electrode dissolving', 'no change at all']
          },
          {
            label: 'The mass of the magnesium strip',
            options: ['decreases', 'increases', 'stays the same', 'doubles']
          },
          {
            label: 'Electrons travel through the wire toward the',
            options: ['platinum electrode', 'magnesium strip', 'salt bridge', 'hydrochloric acid']
          }
        ],
        correctAnswers: ['platinum electrode', 'bubbles of hydrogen forming', 'decreases', 'platinum electrode'],
        hint1: 'The couple with the higher $E°$ is reduced.',
        hint2: 'Reducing $\\text{H}^+$ makes $\\text{H}_2$ gas.',
        hint3: 'Magnesium is oxidized to $\\text{Mg}^{2+}$, which dissolves.',
        explanation: '$\\text{H}^+$ (0.00 V) is reduced at the platinum electrode, producing $\\text{H}_2$ bubbles, while Mg (−2.37 V) is oxidized and the strip loses mass. Electrons travel from the magnesium anode to the platinum cathode.'
      }
    },
    {
      id: 'gc4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Reading Cell Diagrams** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Why does the Fe³⁺/Fe²⁺ half-cell in the worked example use a platinum wire?',
            options: [
              'Platinum is oxidized and supplies the electrons',
              'No solid metal takes part, so a conducting surface is needed',
              'Platinum raises the cell potential of the iron half-cell',
              'Platinum reacts with Fe³⁺ to form a protective coating'
            ],
            correctAnswer: 1,
            explanation: 'Both iron species are dissolved ions, so the half-cell needs an inert conductor that carries electrons without reacting. Platinum is neither oxidized nor reduced, does not change $E°$, and does not react with $\\text{Fe}^{3+}$.'
          },
          {
            question: 'In a cell where Al is oxidized and Cu²⁺ is reduced, which pair of observations is expected?',
            options: [
              'The aluminum gains mass and the blue color deepens',
              'The aluminum loses mass and the blue color fades',
              'The aluminum keeps its mass and bubbles form on it',
              'Both electrodes keep their mass and only the voltage changes'
            ],
            correctAnswer: 1,
            explanation: 'Aluminum is oxidized and dissolves, so its electrode loses mass. $\\text{Cu}^{2+}$ is reduced to copper metal, so the blue color of the copper solution fades and the copper electrode gains mass.'
          },
          {
            question: 'A cell diagram shows bubbles forming at one electrode. Which half-reaction could explain this at the cathode?',
            options: [
              '2H⁺(aq) + 2e⁻ → H₂(g)',
              'Cu²⁺(aq) + 2e⁻ → Cu(s)',
              'Zn(s) → Zn²⁺(aq) + 2e⁻',
              '2Cl⁻(aq) → Cl₂(g) + 2e⁻'
            ],
            correctAnswer: 0,
            explanation: 'Reduction occurs at the cathode, and reducing $\\text{H}^+$ produces hydrogen gas. Forming chlorine gas is an oxidation, which would occur at the anode, and the copper and zinc half-reactions form or consume solids rather than gas.'
          }
        ]
      }
    }
  ]
}
