export const chemNernstEquationConcentrationPart3Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne3-intro',
      type: 'text' as const,
      content: `# 📉 Cell Potential Under Nonstandard Conditions

**Part 3 of 7 — Same Electrodes, Different Concentrations**

---

### Topics in This Part

| Section |
|---------|
| 🔧 How Concentration Cells Work |
| 🧭 Finding the Anode and Cathode |
| 🧪 Worked Example — Copper Concentration Cell |
| ⏳ How a Concentration Cell Runs Down |

> 🔑 **Key Concept:** A concentration cell has the **same** half-reaction on both sides, so $E° = 0$. It still produces a voltage because the two concentrations differ, and the CED asks you to find the direction of electron flow "by considering the direction needed to reach equilibrium" (9.10.A.3).

---

### What You'll Master in Part 3
- Explain why a cell with identical electrodes can have $E > 0$
- Identify the anode, cathode and electron-flow direction from the concentrations
- Describe how the concentrations, electrode masses and potential change as the cell runs`
    },
    {
      id: 'ne3-how-they-work',
      type: 'text' as const,
      content: `
## 🔧 How Concentration Cells Work

Consider two copper electrodes, one in 0.010 M $\\text{Cu}^{2+}$ and one in 1.0 M $\\text{Cu}^{2+}$, joined by a wire and a salt bridge.

- Both half-reactions are $\\text{Cu}^{2+} + 2e^- \\rightleftharpoons \\text{Cu}$, so $E°_{\\text{cell}} = 0$.
- The two solutions are not at equilibrium with each other: left alone, the concentrations would even out.
- The only way they can even out is by running the cell: copper dissolves on the dilute side and copper ions plate out on the concentrated side.

The net change is simply

$$\\text{Cu}^{2+}(\\text{concentrated}) \\rightarrow \\text{Cu}^{2+}(\\text{dilute})$$

$$Q = \\frac{[\\text{Cu}^{2+}]_{\\text{dilute}}}{[\\text{Cu}^{2+}]_{\\text{concentrated}}} = \\frac{0.010}{1.0} = 0.010$$

Because $Q < 1$ and $E° = 0$, the qualitative Nernst equation gives $E > 0$: the process is thermodynamically favored until the two concentrations match.

---

## 🧭 Finding the Anode and Cathode

| Half-cell | What happens | Electrode |
|-----------|--------------|-----------|
| **Dilute** side | $\\text{Cu} \\rightarrow \\text{Cu}^{2+} + 2e^-$ raises the low concentration | **Anode** (oxidation) |
| **Concentrated** side | $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$ lowers the high concentration | **Cathode** (reduction) |

> 💡 **Rule of thumb:** each side changes in the direction that makes the two concentrations more alike. Electrons flow through the wire **from the dilute side to the concentrated side**.
      `
    },
    {
      id: 'ne3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding — Concentration Cells** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two silver electrodes sit in 0.0010 M AgNO₃ and 0.50 M AgNO₃, connected by a wire and a salt bridge. Which electrode is the anode?',
            options: [
              'The electrode in 0.50 M AgNO₃',
              'The electrode in 0.0010 M AgNO₃',
              'The electrode with the larger surface area',
              'Neither, because E° for the cell is zero'
            ],
            correctAnswer: 1,
            explanation: 'Oxidation of silver on the dilute side, $\\text{Ag} \\rightarrow \\text{Ag}^{+} + e^-$, raises the low concentration and moves the system toward equal concentrations, so the dilute electrode is the anode. $E° = 0$ only means the potential comes entirely from the concentration difference.'
          },
          {
            question: 'Why does a concentration cell produce a voltage even though E° = 0?',
            options: [
              'Because the larger electrode has a higher reduction potential',
              'Because the salt bridge supplies the energy for the reaction',
              'Because Q is not equal to 1, so the cell is not at equilibrium',
              'Because the dilute solution has a negative reduction potential'
            ],
            correctAnswer: 2,
            explanation: 'With unequal concentrations, $Q$ differs from 1 (and from $K = 1$), so the system is away from equilibrium and $E$ is nonzero. Electrode size does not appear in $Q$, and the salt bridge only maintains charge balance.'
          },
          {
            question: 'In a nickel concentration cell, which way do electrons flow through the external wire?',
            options: [
              'From the dilute side to the concentrated side',
              'From the concentrated side to the dilute side',
              'From the larger electrode to the smaller one',
              'No net flow, because both electrodes are nickel'
            ],
            correctAnswer: 0,
            explanation: 'Oxidation happens on the dilute side (the anode) and reduction on the concentrated side (the cathode), so electrons leave the dilute-side electrode and travel to the concentrated-side electrode. The cell runs one way until the concentrations are equal.'
          }
        ]
      }
    },
    {
      id: 'ne3-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example — Copper Concentration Cell

> **Problem:** Half-cell A: Cu in 0.050 M $\\text{Cu(NO}_3)_2$. Half-cell B: Cu in 1.5 M $\\text{Cu(NO}_3)_2$. A salt bridge contains $\\text{KNO}_3$. Describe what happens as the cell operates.

### Step 1 — Identify the anode and cathode

A is dilute → **anode** (Cu is oxidized). B is concentrated → **cathode** ($\\text{Cu}^{2+}$ is reduced).

### Step 2 — Direction of electron flow

Through the wire from **A to B**.

### Step 3 — Changes in each half-cell

| Observation | Half-cell A (anode) | Half-cell B (cathode) |
|-------------|--------------------|-----------------------|
| $[\\text{Cu}^{2+}]$ | increases | decreases |
| Electrode mass | decreases | increases |
| Ions arriving from salt bridge | $\\text{NO}_3^-$ (balances new $\\text{Cu}^{2+}$) | $\\text{K}^+$ (replaces lost $\\text{Cu}^{2+}$) |

### Step 4 — Long-term behavior

The concentrations approach each other, $Q$ rises toward 1 (which is $K$ for this cell), and $E$ falls toward zero.

> ✅ The cell is "dead" when both solutions reach the same $\\text{Cu}^{2+}$ concentration.
      `
    },
    {
      id: 'ne3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Track the Cell** 🔽

A zinc concentration cell has 0.020 M $\\text{Zn}^{2+}$ in half-cell X and 2.0 M $\\text{Zn}^{2+}$ in half-cell Y.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Oxidation occurs in',
            options: ['half-cell X', 'half-cell Y', 'both half-cells', 'neither half-cell']
          },
          {
            label: 'As the cell runs, the mass of the zinc electrode in Y',
            options: ['increases', 'decreases', 'stays the same', 'drops to zero']
          },
          {
            label: 'As the cell runs, [Zn²⁺] in X',
            options: ['increases', 'decreases', 'stays the same', 'equals 2.0 M']
          },
          {
            label: 'When [Zn²⁺] is the same in both half-cells, the cell potential is',
            options: ['zero', 'equal to E° for Zn²⁺/Zn', 'at its maximum', 'negative']
          }
        ],
        correctAnswers: ['half-cell X', 'increases', 'increases', 'zero'],
        hint1: 'The dilute side is oxidized so that its concentration rises.',
        hint2: 'Reduction plates zinc metal onto the cathode.',
        hint3: 'Equal concentrations mean $Q = 1 = K$.',
        explanation: 'X is dilute, so zinc is oxidized there and $[\\text{Zn}^{2+}]$ in X rises. Y is the cathode, where $\\text{Zn}^{2+}$ is reduced and zinc plates onto the electrode, increasing its mass. When the concentrations match the cell is at equilibrium and $E = 0$.'
      }
    },
    {
      id: 'ne3-runs-down',
      type: 'text' as const,
      content: `
## ⏳ How a Concentration Cell Runs Down

The potential of a concentration cell depends on **how different** the two concentrations are:

| Concentration ratio (dilute : concentrated) | Distance from equilibrium | Cell potential |
|---------------------------------------------|---------------------------|----------------|
| 1 : 1000 | far | largest |
| 1 : 10 | closer | smaller |
| 1 : 1 | at equilibrium | zero |

> 🔑 **AP Connection:** Free-response items typically ask you to (1) identify the anode, (2) give the direction of electron flow or of ion flow in the salt bridge, and (3) justify what happens to $E$ over time. Justify with $Q$ and the approach to equilibrium, not with a Nernst calculation.
      `
    },
    {
      id: 'ne3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Concentration Cells** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these copper concentration cells has the largest initial cell potential?',
            options: [
              '0.10 M Cu²⁺ paired with 1.0 M Cu²⁺',
              '0.50 M Cu²⁺ paired with 1.0 M Cu²⁺',
              '0.0010 M Cu²⁺ paired with 1.0 M Cu²⁺',
              '1.0 M Cu²⁺ paired with 1.0 M Cu²⁺'
            ],
            correctAnswer: 2,
            explanation: 'The largest concentration difference puts the cell farthest from equilibrium ($Q$ farthest below 1), so it has the largest potential. Equal concentrations give $E = 0$, and the other two pairs are closer to equal.'
          },
          {
            question: 'In a silver concentration cell with a KNO₃ salt bridge, which ions move into the dilute (anode) compartment?',
            options: [
              'K⁺ ions, to replace the Ag⁺ that is consumed',
              'NO₃⁻ ions, to balance the Ag⁺ being produced',
              'Ag⁺ ions, which travel through the bridge to the cathode',
              'No ions, because the dilute side has the fewest ions'
            ],
            correctAnswer: 1,
            explanation: 'Oxidation on the dilute side produces $\\text{Ag}^{+}$, building up positive charge, so nitrate ions flow in from the bridge to keep the solution neutral. $\\text{K}^+$ flows the other way, into the cathode compartment where $\\text{Ag}^{+}$ is removed.'
          },
          {
            question: 'A student says a concentration cell will run forever because its electrodes are identical. What is the best response?',
            options: [
              'The electrodes corrode away, so the reaction stops',
              'Equal molarities make Q = K, so E drops to 0',
              'The salt bridge fills with ions and blocks the flow',
              'The solutions cool down until no reaction occurs'
            ],
            correctAnswer: 1,
            explanation: 'Running the cell raises the dilute concentration and lowers the concentrated one. When they are equal, $Q = K = 1$ and the potential is zero, so no further net reaction occurs. Corrosion, a clogged bridge or cooling are not what stops the cell; reaching equilibrium is.'
          }
        ]
      }
    }
  ]
}
