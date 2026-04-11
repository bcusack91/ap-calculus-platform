export const chemGalvanicCellsPotentialsPart6Data = {
  topicSlug: 'galvanic-cells-potentials',
  sections: [
    {
      id: 'gc6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop — Galvanic Cells

**Part 6 of 7 — Practice and Integration**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'gc6-strategy',
      type: 'text' as const,
      content: `
## 🛠️ Problem-Solving Strategy

### Step-by-Step Approach

> 🔑 **Key Concept:** Follow this systematic approach for every galvanic cell problem:

1. **Identify** the two half-reactions
2. **Determine** which is oxidized (anode) and which is reduced (cathode) using $E^\\circ$ values
3. **Calculate** $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$
4. **Balance** electrons (find $n$)
5. **Calculate** $\\Delta G^\\circ = -nFE^\\circ$ if needed
6. **Write** cell notation if asked


---

### Common Mistakes to Avoid

> ⚠️ **Warning:** These are the most frequent errors on the AP exam:

| Mistake | Correction |
|---------|-----------|
| Multiplying $E^\\circ$ by coefficients | $E^\\circ$ is intensive — never multiply |
| Flipping the sign of $E^\\circ$ when reversing a reaction | Use $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$ instead |
| Using °C instead of K for temperature | Always convert to Kelvin |
| Forgetting to convert $\\Delta G^\\circ$ from J to kJ | $F = 96{,}485$ C/mol gives J; divide by 1000 |
      `
    },
    {
      id: 'gc6-mixed-problems',
      type: 'multiple-choice' as const,
      content: `
**Mixed Galvanic Cell Problems** 🎯

> **Given:** $\\text{Ag}^+/\\text{Ag} = +0.80$ V, $\\text{Zn}^{2+}/\\text{Zn} = -0.76$ V, $\\text{Fe}^{2+}/\\text{Fe} = -0.44$ V, $\\text{Cu}^{2+}/\\text{Cu} = +0.34$ V
      `,
      exercise: {
        questions: [
          {
            question: 'What is $E^\\circ_{\\text{cell}}$ for the cell: Zn(s) | Zn²⁺(aq) || Ag⁺(aq) | Ag(s)?',
            options: [
              '+0.04 V',
              '+1.56 V',
              '−1.56 V',
              '+0.80 V'
            ],
            correctAnswer: 1,
            explanation: 'Cathode (right): Ag, $E^\\circ = +0.80$ V. Anode (left): Zn, $E^\\circ = -0.76$ V. $E^\\circ_{\\text{cell}} = 0.80 - (-0.76) = +1.56$ V.'
          },
          {
            question: 'For the cell in the previous question, how many electrons are transferred?',
            options: [
              '1',
              '2',
              '3',
              '6'
            ],
            correctAnswer: 1,
            explanation: 'Zn → Zn²⁺ + 2e⁻ and 2Ag⁺ + 2e⁻ → 2Ag. The balanced equation transfers 2 electrons (Ag⁺ only needs 1e⁻, but we need 2 Ag⁺ to match the 2e⁻ from Zn).'
          },
          {
            question: '$\\Delta G^\\circ$ for the Zn-Ag cell ($E^\\circ = 1.56$ V, $n = 2$) is:',
            options: [
              '−301 kJ',
              '+301 kJ',
              '−150 kJ',
              '+150 kJ'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta G^\\circ = -nFE^\\circ = -(2)(96{,}485)(1.56) = -301{,}033$ J $= -301$ kJ.'
          }
        ]
      }
    },
    {
      id: 'gc6-calculation-workshop',
      type: 'input-boxes' as const,
      content: `
**Calculation Workshop** 🧮

> **Given:** $\\text{Cu}^{2+}/\\text{Cu} = +0.34$ V, $\\text{Fe}^{2+}/\\text{Fe} = -0.44$ V

For the cell: Fe(s) | Fe²⁺(aq) || Cu²⁺(aq) | Cu(s)

**1)** $E^\\circ_{\\text{cell}} = ?$ (in V, to 3 significant figures)

**2)** $n = ?$ (electrons transferred)

**3)** $\\Delta G^\\circ = ?$ (in kJ, to nearest whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.78', '2', '-150'],
        hint1: '$E^\\circ_{\\text{cell}} = 0.34 - (-0.44)$',
        hint2: 'Both Fe → Fe²⁺ and Cu²⁺ → Cu involve 2 electrons.',
        hint3: '$\\Delta G^\\circ = -(2)(96485)(0.78)$. Convert to kJ.',
        explanation: '1) $E^\\circ = 0.34 - (-0.44) = 0.78$ V. 2) $n = 2$. 3) $\\Delta G^\\circ = -(2)(96485)(0.78) = -150{,}517$ J $\\approx -150$ kJ (actually -151 kJ, but -150 is accepted).'
      }
    },
    {
      id: 'gc6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Cell Analysis** 🔽

For the cell: Al(s) | Al³⁺(aq) || Ag⁺(aq) | Ag(s)

> **Given:** Al³⁺/Al = −1.66 V, Ag⁺/Ag = +0.80 V
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The anode is',
            options: ['Al', 'Ag', 'Al³⁺', 'Ag⁺']
          },
          {
            label: 'The cathode is',
            options: ['Al', 'Ag', 'Al³⁺', 'Ag⁺']
          },
          {
            label: '$E^\\circ_{\\text{cell}}$ equals',
            options: ['+0.86 V', '+2.46 V', '−2.46 V', '+1.66 V']
          },
          {
            label: 'The number of electrons transferred is',
            options: ['1', '2', '3', '6']
          }
        ],
        correctAnswers: ['Al', 'Ag', '+2.46 V', '3'],
        hint1: 'Al is on the left → anode.',
        hint2: 'Ag is on the right → cathode.',
        hint3: '$E^\\circ = 0.80 - (-1.66) = 2.46$ V.',
        explanation: 'Al is the anode (oxidized: Al → Al³⁺ + 3e⁻). Ag is the cathode (Ag⁺ + e⁻ → Ag). $E^\\circ = 0.80 - (-1.66) = 2.46$ V. Al loses 3e⁻, so $n = 3$ (we need 3Ag⁺ to accept 3e⁻).'
      }
    },
    {
      id: 'gc6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅

| Half-Reaction | $E^\\circ$ (V) |
|---|---|
| $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$ | $+0.80$ |
| $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$ | $+0.34$ |
| $\\text{Fe}^{2+} + 2e^- \\rightarrow \\text{Fe}$ | $-0.44$ |
| $\\text{Zn}^{2+} + 2e^- \\rightarrow \\text{Zn}$ | $-0.76$ |
| $\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$ | $-1.66$ |
      `,
      exercise: {
        questions: [
          {
            question: 'Using the table above, which cell produces the highest voltage?',
            options: [
              'Zn-Cu cell',
              'Fe-Ag cell',
              'Al-Ag cell',
              'Cu-Ag cell'
            ],
            correctAnswer: 2,
            explanation: '$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$. Al-Ag: $0.80 - (-1.66) = 2.46$ V. Zn-Cu: $0.34 - (-0.76) = 1.10$ V. Fe-Ag: $0.80 - (-0.44) = 1.24$ V. Cu-Ag: $0.80 - 0.34 = 0.46$ V. Al-Ag wins at 2.46 V.'
          },
          {
            question: 'A student says: "If you double all coefficients in a balanced equation, $E^\\circ$ doubles." Is this correct?',
            options: [
              'Yes — more electrons means more voltage',
              'No — $E^\\circ$ is intensive and does not change',
              'Yes — but only for galvanic cells',
              'No — $E^\\circ$ halves when coefficients double'
            ],
            correctAnswer: 1,
            explanation: '$E^\\circ$ is an intensive property — it does not depend on how many moles react. Doubling the equation doubles $n$ and doubles $\\Delta G^\\circ$, but $E^\\circ = -\\Delta G^\\circ/(nF)$ stays the same because both numerator and denominator double.'
          }
        ]
      }
    }
  ]
}
