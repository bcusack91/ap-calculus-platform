export const chemNernstEquationConcentrationPart2Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne2-intro',
      type: 'text' as const,
      content: `# 📉 Cell Potential Under Nonstandard Conditions

**Part 2 of 7 — Predicting How Concentration Changes Shift E**

---

### Topics in This Part

| Section |
|---------|
| 🔀 Five Kinds of Change |
| 🧮 Coefficients Matter |
| 🧪 Worked Example — Diluting a Cu/Ag⁺ Cell |
| 💨 Cells With a Gas |

> 🔑 **Key Concept:** Every nonstandard-conditions question reduces to one move: decide what the change does to $Q$, then read the direction of $E$ from $E = E° - \\frac{RT}{nF}\\ln Q$.

---

### What You'll Master in Part 2
- Predict the direction of $E$ for additions, removals and dilutions
- Use the stoichiometric exponents in $Q$ to handle dilution correctly
- Include gas pressures in $Q$ for cells that make or use a gas`
    },
    {
      id: 'ne2-five-changes',
      type: 'text' as const,
      content: `
## 🔀 Five Kinds of Change

Take a general cell reaction written in the thermodynamically favored direction:

$$\\text{Reactant ions} \\rightarrow \\text{Product ions}$$

$$Q = \\frac{[\\text{products}]}{[\\text{reactants}]}$$

| Change made to the cell | Effect on $Q$ | Effect on $E$ |
|-------------------------|---------------|---------------|
| Add more of a **reactant** ion | decreases | increases |
| Add more of a **product** ion | increases | decreases |
| **Remove** a reactant ion (e.g., precipitate it) | increases | decreases |
| **Remove** a product ion | decreases | increases |
| Add or remove a **solid** electrode material | no change | no change |

> 💡 **Removing an ion** is a common exam twist. If a stem says sulfide ions were added and CuS precipitated, $[\\text{Cu}^{2+}]$ went **down**. Then ask where $\\text{Cu}^{2+}$ sits in $Q$.

---

### Particle-Level Picture

A higher potential means a stronger tendency for electrons to move from the anode to the cathode. Crowding the cathode compartment with the ion being reduced, or emptying the anode compartment of the ion being formed, gives the forward reaction more to do before it reaches equilibrium.
      `
    },
    {
      id: 'ne2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding — Direction of the Shift** 🎯

All three questions use the cell $\\text{Ni}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Ni}^{2+}(aq) + \\text{Cu}(s)$, $E° = +0.59$ V.
      `,
      exercise: {
        questions: [
          {
            question: 'Sodium sulfide is added to the copper half-cell and solid CuS precipitates. How does the cell potential change?',
            options: [
              'It increases, because Q decreases',
              'It decreases, because Q increases',
              'It is unchanged, because CuS is a solid',
              'It reverses sign at once'
            ],
            correctAnswer: 1,
            explanation: 'Precipitating CuS lowers $[\\text{Cu}^{2+}]$, which sits in the denominator of $Q$, so $Q$ rises and $E$ falls. The new solid is left out of $Q$, but the drop in dissolved $\\text{Cu}^{2+}$ still changes $Q$. A modest decrease does not reverse the sign of a 0.59 V cell.'
          },
          {
            question: 'Which change would raise the cell potential above 0.59 V?',
            options: [
              'Adding nickel(II) nitrate to the nickel half-cell',
              'Adding copper(II) nitrate to the copper half-cell',
              'Adding water to the copper half-cell only',
              'Replacing the nickel strip with a thicker strip'
            ],
            correctAnswer: 1,
            explanation: 'Extra $\\text{Cu}^{2+}$ increases the denominator of $Q$, lowering $Q$ below 1 and raising $E$ above $E°$. Adding $\\text{Ni}^{2+}$ or diluting the copper side raises $Q$ and lowers $E$, and the size of the nickel strip does not appear in $Q$.'
          },
          {
            question: 'Both half-cells are diluted by the same factor. What happens to the potential of this cell?',
            options: [
              'It stays the same, because Q is unchanged',
              'It increases, because the ions are farther apart',
              'It decreases, because there are fewer ions to react',
              'It drops to zero, because diluting both sides restores Q = K'
            ],
            correctAnswer: 0,
            explanation: 'Here $Q = [\\text{Ni}^{2+}]/[\\text{Cu}^{2+}]$, and both ions have a coefficient of 1. Dividing both concentrations by the same factor leaves the ratio, and therefore $E$, unchanged. Fewer ions shorten the life of the cell, not its voltage.'
          }
        ]
      }
    },
    {
      id: 'ne2-coefficients',
      type: 'text' as const,
      content: `
## 🧮 Coefficients Matter

Exponents in $Q$ come from the coefficients in the **balanced overall reaction**. A dilution that leaves a 1:1 cell unchanged can shift a cell with unequal coefficients.

| Cell reaction | $Q$ | Dilute both half-cells 10× |
|---------------|-----|----------------------------|
| $\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$ | $\\dfrac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]}$ | ratio unchanged → $E$ unchanged |
| $\\text{Cu} + 2\\text{Ag}^{+} \\rightarrow \\text{Cu}^{2+} + 2\\text{Ag}$ | $\\dfrac{[\\text{Cu}^{2+}]}{[\\text{Ag}^{+}]^2}$ | numerator ÷10, denominator ÷100 → $Q$ ×10 → $E$ decreases |

> ⚠️ Multiplying a half-reaction by 2 to balance electrons does **not** change its reduction potential, but it **does** change the exponent on that ion in $Q$.
      `
    },
    {
      id: 'ne2-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example — Diluting a Cu/Ag⁺ Cell

> **Problem:** A cell runs $\\text{Cu}(s) + 2\\text{Ag}^{+}(aq) \\rightarrow \\text{Cu}^{2+}(aq) + 2\\text{Ag}(s)$, $E° = +0.46$ V, starting at standard conditions. Both half-cells are diluted to 0.10 M. Predict the direction of the change in $E$.

### Step 1 — Write Q

$$Q = \\frac{[\\text{Cu}^{2+}]}{[\\text{Ag}^{+}]^2}$$

### Step 2 — Evaluate Q after dilution

$$Q = \\frac{0.10}{(0.10)^2} = \\frac{0.10}{0.010} = 10$$

### Step 3 — Compare with 1

$Q = 10 > 1$, so $\\ln Q$ is positive.

### Step 4 — Conclude

$$E < 0.46 \\text{ V}$$

> ✅ Silver ions are squared in $Q$, so diluting them lowers the denominator faster than diluting $\\text{Cu}^{2+}$ lowers the numerator.

---

## 💨 Cells With a Gas

Gases enter $Q$ as partial pressures. For

$$\\text{Zn}(s) + 2\\text{H}^{+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{H}_2(g)$$

$$Q = \\frac{[\\text{Zn}^{2+}]\\,P_{\\text{H}_2}}{[\\text{H}^{+}]^2}$$

- Raising $P_{\\text{H}_2}$ (a product) raises $Q$ → $E$ decreases.
- Raising $[\\text{H}^{+}]$ (lowering the pH of the cathode compartment) lowers $Q$ → $E$ increases.
      `
    },
    {
      id: 'ne2-input-practice',
      type: 'input-boxes' as const,
      content: `
**Predict the Shift** 🧮

Cell: $\\text{Cu}(s) + 2\\text{Ag}^{+}(aq) \\rightarrow \\text{Cu}^{2+}(aq) + 2\\text{Ag}(s)$, starting at standard conditions. For each change, type **higher**, **lower** or **same** to describe the new cell potential compared with $E°$.

**1)** $[\\text{Ag}^{+}]$ is raised to 2.0 M.

**2)** $[\\text{Cu}^{2+}]$ is raised to 2.0 M.

**3)** The silver electrode is replaced with one twice as large.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['higher', 'lower', 'same'],
        hint1: '$\\text{Ag}^{+}$ is a reactant: it sits in the denominator of $Q$, squared.',
        hint2: '$\\text{Cu}^{2+}$ is a product: it sits in the numerator.',
        hint3: 'Solids never appear in $Q$.',
        explanation: '1) More $\\text{Ag}^{+}$ lowers $Q$ below 1, so $E$ rises above $E°$. 2) More $\\text{Cu}^{2+}$ raises $Q$ above 1, so $E$ falls below $E°$. 3) Solid silver is not in $Q$, so $E$ is unchanged.'
      }
    },
    {
      id: 'ne2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Concentration Changes** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s), both half-cells are diluted from 1.0 M to 0.010 M. What happens to the cell potential?',
            options: [
              'It decreases, because Q rises to 100',
              'It increases, because Q falls to 0.01',
              'It is unchanged, because both sides were diluted equally',
              'It falls to zero, because the solutions are now very dilute'
            ],
            correctAnswer: 0,
            explanation: '$Q = [\\text{Cu}^{2+}]/[\\text{Ag}^{+}]^2 = 0.010/(0.010)^2 = 100$. Because $Q > 1$, $E$ falls below $E°$. Equal dilution leaves $Q$ unchanged only when the coefficients are equal, and dilution alone does not bring the cell to equilibrium.'
          },
          {
            question: 'In the cell Zn(s) + 2H⁺(aq) → Zn²⁺(aq) + H₂(g), the pH of the hydrogen half-cell is raised from 0 to 2 while everything else stays standard. How does E change?',
            options: [
              'E increases, because fewer H⁺ ions compete',
              'E decreases, because [H⁺] falls and Q rises',
              'E is unchanged, because pH does not appear in Q',
              'E increases, because H₂ gas escapes faster'
            ],
            correctAnswer: 1,
            explanation: 'Raising the pH from 0 to 2 lowers $[\\text{H}^{+}]$ from 1 M to 0.01 M. $\\text{H}^{+}$ is a reactant in the denominator of $Q$ (squared), so $Q$ increases and $E$ decreases. pH enters $Q$ through $[\\text{H}^{+}]$.'
          },
          {
            question: 'Which change lowers the potential of the cell Ni(s) + Cu²⁺(aq) → Ni²⁺(aq) + Cu(s)?',
            options: [
              'Dissolving more Cu(NO₃)₂ in the copper half-cell',
              'Removing Ni²⁺ from the nickel half-cell',
              'Adding more Ni(NO₃)₂ to the nickel side',
              'Using a larger piece of nickel metal'
            ],
            correctAnswer: 2,
            explanation: 'Extra $\\text{Ni}^{2+}$ raises the numerator of $Q$, so $E$ decreases. Adding $\\text{Cu}^{2+}$ or removing $\\text{Ni}^{2+}$ lowers $Q$ and raises $E$, and solid nickel does not appear in $Q$.'
          }
        ]
      }
    }
  ]
}
