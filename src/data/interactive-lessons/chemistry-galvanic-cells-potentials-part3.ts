export const chemGalvanicCellsPotentialsPart3Data = {
  topicSlug: 'galvanic-cells-potentials',
  sections: [
    {
      id: 'gc3-intro',
      type: 'text' as const,
      content: `# ⚡ Standard Reduction Potentials

**Part 3 of 7 — E° and Calculating Cell Voltage**

---

### Topics in This Part

| Section |
|---------|
| ⚡ Standard Reduction Potential Table |
| 🔢 Calculating Standard Cell Potential |
| ⚠️ Important Rules |
| 🧪 Worked Example: Zn-Cu Cell |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 3
- Understanding the core concepts covered in Part 3
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'gc3-table',
      type: 'text' as const,
      content: `
## ⚡ Standard Reduction Potential Table

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


---

> 🔑 **Key Concept — Reading the Table:**
>
> - **More positive** $E°$: the species on the left (for example $\\text{Ag}^+$) is more easily **reduced**
> - **More negative** $E°$: the metal on the right (for example Li) is more easily **oxidized**
> - Values are measured relative to the hydrogen half-reaction, which is assigned $E° = 0.00$ V
      `
    },
    {
      id: 'gc3-cell-potential',
      type: 'text' as const,
      content: `
## 🔢 Calculating Standard Cell Potential

> 🔑 **The Master Equation:**
>
> $$\\boxed{E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}}$$

---

### ⚠️ Important Rules

| # | Rule |
|---|------|
| 1 | $E°$ values are **NOT multiplied** by stoichiometric coefficients — they are **intensive** properties |
| 2 | The species with the **higher** (more positive) $E°$ is reduced (**cathode**) |
| 3 | The species with the **lower** (more negative) $E°$ is oxidized (**anode**) |
| 4 | A spontaneous galvanic cell always has $E^\\circ_{\\text{cell}} > 0$ |

> ⚠️ **Warning:** Never multiply $E°$ values by stoichiometric coefficients. $E°$ is an **intensive property** — it does not change when you scale the equation.

---

### 🧪 Worked Example: Zn-Cu Cell

> **Problem:** Calculate $E^\\circ_{\\text{cell}}$ for a Zn-Cu galvanic cell.
>
> - Cathode: $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$ &nbsp;&nbsp; ($E° = +0.34$ V)
> - Anode: $\\text{Zn}^{2+} + 2e^- \\rightarrow \\text{Zn}$ &nbsp;&nbsp; ($E° = -0.76$ V)

> **Solution:**

$$\\boxed{E^\\circ_{\\text{cell}} = (+0.34) - (-0.76) = +1.10 \\text{ V}}$$

> ✅ The positive $E^\\circ_{\\text{cell}}$ confirms the reaction is **spontaneous**.
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
            question: 'Which metal is most easily oxidized?',
            options: [
              'Au (E° = +1.50 V)',
              'Cu (E° = +0.34 V)',
              'Zn (E° = −0.76 V)',
              'Li (E° = −3.04 V)'
            ],
            correctAnswer: 3,
            explanation: 'The metal whose half-reaction has the most negative $E°$ has the greatest tendency to run in reverse, as an oxidation. Li at $E° = -3.04$ V is the most easily oxidized on this list, and Au, with the most positive value, is the hardest to oxidize.'
          },
          {
            question: 'When calculating $E^\\circ_{\\text{cell}}$, you should:',
            options: [
              'Multiply $E°$ by the number of electrons transferred',
              'Add $E^\\circ_{\\text{cathode}}$ and $E^\\circ_{\\text{anode}}$',
              'Subtract $E^\\circ_{\\text{anode}}$ from $E^\\circ_{\\text{cathode}}$',
              'Reverse the sign of both $E°$ values'
            ],
            correctAnswer: 2,
            explanation: '$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$. Do NOT multiply by coefficients — $E°$ is an intensive property.'
          },
          {
            question: 'A spontaneous galvanic cell must have:',
            options: [
              '$E^\\circ_{\\text{cell}} < 0$',
              '$E^\\circ_{\\text{cell}} = 0$',
              '$E^\\circ_{\\text{cell}} > 0$',
              '$E^\\circ_{\\text{cell}}$ can be any value'
            ],
            correctAnswer: 2,
            explanation: 'A positive $E^\\circ_{\\text{cell}}$ corresponds to a negative $\\Delta G°$ (spontaneous). $\\Delta G° = -nFE°$.'
          }
        ]
      }
    },
    {
      id: 'gc3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Cell Potential Calculations** 🧮

> **Standard Reduction Potentials:**
>
> | Half-Reaction | $E^\\circ$ (V) |
> |--------------|--------------|
> | $\\text{Ag}^+(aq) + e^- \\rightarrow \\text{Ag}(s)$ | $+0.80$ |
> | $\\text{Cu}^{2+}(aq) + 2e^- \\rightarrow \\text{Cu}(s)$ | $+0.34$ |
> | $\\text{Ni}^{2+}(aq) + 2e^- \\rightarrow \\text{Ni}(s)$ | $-0.26$ |
> | $\\text{Fe}^{2+}(aq) + 2e^- \\rightarrow \\text{Fe}(s)$ | $-0.44$ |

**1)** $E^\\circ_{\\text{cell}}$ for a cell with Ag cathode and Fe anode: (in V, to 3 significant figures)

**2)** $E^\\circ_{\\text{cell}}$ for a cell with Cu cathode and Ni anode: (in V, to 3 significant figures)

**3)** $E^\\circ_{\\text{cell}}$ for a cell with Ni cathode and Fe anode: (in V, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.24', '0.60', '0.18'],
        hint1: '$E^\\circ_{\\text{cell}} = 0.80 - (-0.44)$',
        hint2: '$E^\\circ_{\\text{cell}} = 0.34 - (-0.26)$',
        hint3: '$E^\\circ_{\\text{cell}} = -0.26 - (-0.44)$',
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
            label: 'A metal whose ion has a very negative E° is most easily',
            options: ['oxidized', 'reduced', 'precipitated', 'neutralized']
          },
          {
            label: 'A more positive E° means the ion on the left of the half-reaction is more easily',
            options: ['oxidized', 'reduced', 'precipitated', 'neutralized']
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
        correctAnswers: ['oxidized', 'reduced', 'an intensive property', 'cathode'],
        hint1: 'A very negative reduction potential means the reverse half-reaction, oxidation of the metal, is favored.',
        hint2: 'More positive E° = greater tendency to be reduced.',
        hint3: 'Voltage does not depend on the amount of substance — it is per-electron.',
        explanation: 'A very negative E° means the metal is easily oxidized; a very positive E° means the ion is easily reduced. E° is intensive (not scaled by coefficients). The higher E° half-reaction is reduced (cathode).'
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
            question: 'Can $\\text{Ag}^+$ ($E^\\circ = +0.80$ V) spontaneously oxidize Cu ($E^\\circ = +0.34$ V)?',
            options: [
              'No — Ag has a higher $E^\\circ$',
              'Yes — $E^\\circ_{\\text{cell}} = 0.80 - 0.34 = +0.46$ V',
              'No — both $E^\\circ$ values are positive',
              'No — $E^\\circ_{\\text{cell}} = 0.34 - 0.80 = -0.46$ V'
            ],
            correctAnswer: 1,
            explanation: '$Ag^{+}$ is reduced (cathode, $E^\\circ = +0.80$ V) and Cu is oxidized (anode, $E^\\circ = +0.34$ V). $E^\\circ_{\\text{cell}} = 0.80 - 0.34 = +0.46$ V. Positive, so YES, it is spontaneous. Getting $-0.46$ V comes from treating Cu as the cathode, which is the reverse reaction.'
          },
          {
            question: 'Which pair produces the largest $E^\\circ_{\\text{cell}}$? Use: $\\text{Au}^{3+}/\\text{Au} = +1.50$ V, $\\text{Li}^+/\\text{Li} = -3.04$ V, $\\text{Cu}^{2+}/\\text{Cu} = +0.34$ V',
            options: [
              'Au cathode, Cu anode: $E^\\circ_{\\text{cell}} = 1.16$ V',
              'Au cathode, Li anode: $E^\\circ_{\\text{cell}} = 4.54$ V',
              'Cu cathode, Li anode: $E^\\circ_{\\text{cell}} = 3.38$ V',
              'Li cathode, Au anode: $E^\\circ_{\\text{cell}} = 4.54$ V'
            ],
            correctAnswer: 1,
            explanation: '$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 1.50 - (-3.04) = 4.54$ V. This is the largest possible cell voltage from these three — pairing the most easily reduced ion $(Au^{3+})$ with the most easily oxidized metal (Li). Making Li the cathode reverses the roles: $-3.04 - 1.50 = -4.54$ V, which is not spontaneous.'
          }
        ]
      }
    }
  ]
}
