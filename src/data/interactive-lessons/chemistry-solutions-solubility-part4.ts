export const chemSolutionsSolubilityPart4Data = {
  topicSlug: 'solutions-solubility',
  sections: [
    {
      id: 'ss4-intro',
      type: 'text' as const,
      content: `
# 🌡️ Colligative Properties

**Part 4 of 7 — Boiling Point Elevation and Freezing Point Depression**

Colligative properties depend only on the **number of solute particles** in solution — not their identity. Adding any solute to a solvent raises its boiling point and lowers its freezing point. This is why we salt icy roads and why antifreeze protects car engines.
      `
    },
    {
      id: 'ss4-colligative-overview',
      type: 'text' as const,
      content: `
## 🔬 What Are Colligative Properties?

The word "colligative" comes from Latin *colligare* meaning "to bind together." These properties depend on the **collective number** of dissolved particles, regardless of what those particles are.


---

### The Four Colligative Properties

| Property | Effect of Adding Solute |
|----------|----------------------|
| **Boiling point elevation** | Boiling point increases |
| **Freezing point depression** | Freezing point decreases |
| **Vapor pressure lowering** | Vapor pressure decreases |
| **Osmotic pressure** | Creates pressure across a membrane |


---

### Why Do They Occur?

When solute particles are added to a solvent:
- They **disrupt** the orderly arrangement needed for freezing → lower freezing point
- They **lower** the vapor pressure → solvent must be heated to a higher temperature to boil
- More particles = greater effect


---

### Key Distinction

- **Nonelectrolytes** (glucose, sucrose): dissolve as intact molecules → 1 particle per formula unit
- **Electrolytes** (NaCl, CaCl₂): dissociate into ions → multiple particles per formula unit
      `
    },
    {
      id: 'ss4-boiling-point',
      type: 'text' as const,
      content: `
## 📌 Boiling Point Elevation

$$\\Delta T_b = iK_bm$$

where:
- $\\Delta T_b$ = change in boiling point (°C)
- $i$ = **van\'t Hoff factor** (number of particles per formula unit)
- $K_b$ = **ebullioscopic constant** of the solvent (°C/m)
- $m$ = **molality** of the solution (mol solute / kg solvent)


---

### The New Boiling Point

$$T_{b,\\text{solution}} = T_{b,\\text{pure}} + \\Delta T_b$$

The boiling point **increases** (we add $\\Delta T_b$).


---

### For Water

$K_b = 0.512$ °C/m and $T_{b,\\text{pure}} = 100.0$ °C


---

### Worked Example

What is the boiling point of a solution of 1.00 mol of glucose (nonelectrolyte, $i = 1$) in 1.00 kg of water?

$$\\Delta T_b = (1)(0.512)(1.00) = 0.512 \\text{ °C}$$

$$T_b = 100.0 + 0.512 = 100.5 \\text{ °C}$$
      `
    },
    {
      id: 'ss4-freezing-point',
      type: 'text' as const,
      content: `
## 📌 Freezing Point Depression

$$\\Delta T_f = iK_fm$$

where:
- $\\Delta T_f$ = change in freezing point (°C)
- $i$ = van\'t Hoff factor
- $K_f$ = **cryoscopic constant** of the solvent (°C/m)
- $m$ = molality


---

### The New Freezing Point

$$T_{f,\\text{solution}} = T_{f,\\text{pure}} - \\Delta T_f$$

The freezing point **decreases** (we subtract $\\Delta T_f$).


---

### For Water

$K_f = 1.86$ °C/m and $T_{f,\\text{pure}} = 0.0$ °C


---

### Worked Example

What is the freezing point of a solution of 0.500 mol of NaCl ($i = 2$) in 1.00 kg of water?

$$\\Delta T_f = (2)(1.86)(0.500) = 1.86 \\text{ °C}$$

$$T_f = 0.0 - 1.86 = -1.86 \\text{ °C}$$


---

### Why Does NaCl Have $i = 2$?

NaCl dissociates into **2 ions**: Na⁺ + Cl⁻. Each formula unit produces 2 particles:

$$\\text{NaCl} \\rightarrow \\text{Na}^+ + \\text{Cl}^-$$
      `
    },
    {
      id: 'ss4-vant-hoff',
      type: 'text' as const,
      content: `
## 📊 The van\'t Hoff Factor ($i$)

The van\'t Hoff factor tells you how many particles one formula unit produces in solution.

| Solute | Dissociation | Theoretical $i$ |
|--------|-------------|-----------------|
| Glucose (C₆H₁₂O₆) | Does not dissociate | 1 |
| NaCl | Na⁺ + Cl⁻ | 2 |
| CaCl₂ | Ca²⁺ + 2Cl⁻ | 3 |
| Al₂(SO₄)₃ | 2Al³⁺ + 3SO₄²⁻ | 5 |
| K₃PO₄ | 3K⁺ + PO₄³⁻ | 4 |


---

### Ideal vs. Actual $i$

In real solutions, ion pairing can reduce the effective $i$:
- NaCl: theoretical $i = 2$, actual $i \\approx 1.9$ in moderate concentrations
- CaCl₂: theoretical $i = 3$, actual $i \\approx 2.7$

For AP calculations, use the **theoretical** (ideal) $i$ unless told otherwise.
      `
    },
    {
      id: 'ss4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Colligative Properties Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which aqueous solution has the highest boiling point?',
            options: [
              '0.10 m glucose ($i = 1$)',
              '0.10 m NaCl ($i = 2$)',
              '0.10 m CaCl₂ ($i = 3$)',
              '0.10 m K₃PO₄ ($i = 4$)'
            ],
            correctAnswer: 3,
            explanation: '$\\Delta T_b = iK_bm$. All have the same $m = 0.10$. K₃PO₄ has the largest $i = 4$, producing the most particles and the greatest boiling point elevation.'
          },
          {
            question: 'Which solution has the lowest freezing point?',
            options: [
              '0.20 m glucose',
              '0.10 m NaCl',
              '0.10 m CaCl₂',
              '0.05 m Al₂(SO₄)₃'
            ],
            correctAnswer: 2,
            explanation: 'Calculate $im$ for each: glucose: $1 \\times 0.20 = 0.20$. NaCl: $2 \\times 0.10 = 0.20$. CaCl₂: $3 \\times 0.10 = 0.30$. Al₂(SO₄)₃: $5 \\times 0.05 = 0.25$. CaCl₂ has the largest $im = 0.30$, giving the greatest $\\Delta T_f$ and the lowest freezing point.'
          },
          {
            question: 'Road salt (NaCl) works to melt ice because:',
            options: [
              'It raises the freezing point of water',
              'It lowers the freezing point of water below the ambient temperature',
              'It is an exothermic reaction with ice',
              'It absorbs moisture from the air'
            ],
            correctAnswer: 1,
            explanation: 'NaCl dissolves in the thin water layer on ice and depresses the freezing point. If the new freezing point is below the current temperature, the ice melts.'
          }
        ]
      }
    },
    {
      id: 'ss4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Colligative Property Calculations** 🧮

> **Given:** $K_b = 0.512$ °C/m, $K_f = 1.86$ °C/m for water.

**1)** Calculate the boiling point (in °C) of a solution containing 0.300 mol of KBr ($i = 2$) in 500.0 g of water. (to 3 significant figures)

**2)** Calculate the freezing point (in °C) of a solution of 58.44 g of NaCl ($M = 58.44$ g/mol, $i = 2$) in 2.00 kg of water. (to 3 significant figures)

**3)** An antifreeze solution is 2.50 m ethylene glycol ($i = 1$). What is its freezing point in °C? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['100.61', '-1.86', '-4.65'],
        hint1: '$m = 0.300/0.500 = 0.600$ m. $\\Delta T_b = iK_bm = 2(0.512)(0.600)$. Add to 100.00.',
        hint2: '$n = 58.44/58.44 = 1.00$ mol. $m = 1.00/2.00 = 0.500$ m. $\\Delta T_f = 2(1.86)(0.500)$. Subtract from 0.00.',
        hint3: '$\\Delta T_f = 1(1.86)(2.50) = 4.65$ °C. $T_f = 0.00 - 4.65$.',
        explanation: '1) $m = 0.300/0.500 = 0.600$ m. $\\Delta T_b = 2(0.512)(0.600) = 0.614$ °C. $T_b = 100.00 + 0.614 = 100.61$ °C. 2) $n = 1.00$ mol, $m = 0.500$ m. $\\Delta T_f = 2(1.86)(0.500) = 1.86$ °C. $T_f = 0.00 - 1.86 = -1.86$ °C. 3) $\\Delta T_f = 1(1.86)(2.50) = 4.65$. $T_f = 0.00 - 4.65 = -4.65$ °C.'
      }
    },
    {
      id: 'ss4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Colligative Properties — Conceptual** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Colligative properties depend on the',
            options: ['identity of solute particles', 'number of solute particles', 'mass of solute', 'molar mass of solute']
          },
          {
            label: 'Adding a solute to a pure solvent causes the boiling point to',
            options: ['Increase', 'Decrease', 'Stay the same', 'Become unpredictable']
          },
          {
            label: 'CaCl₂ ($i = 3$) is more effective than NaCl ($i = 2$) as a road deicer because',
            options: ['CaCl₂ is cheaper', 'CaCl₂ produces more particles per formula unit', 'CaCl₂ has a higher molar mass', 'CaCl₂ is more soluble in organic solvents']
          },
          {
            label: 'The colligative property formulas use molality instead of molarity because molality',
            options: ['Is easier to measure', 'Does not change with temperature', 'Is always larger', 'Uses grams instead of moles']
          }
        ],
        correctAnswers: ['number of solute particles', 'Increase', 'CaCl₂ produces more particles per formula unit', 'Does not change with temperature'],
        hint1: 'The word "colligative" relates to the collective effect of particles.',
        hint2: 'Solute particles disrupt the solvent structure, requiring more energy to boil.',
        hint3: 'More particles per formula unit → greater freezing point depression.',
        explanation: 'Colligative properties depend on the number (not identity) of particles. Solute raises the boiling point and lowers the freezing point. CaCl₂ produces 3 particles vs. 2 for NaCl. Molality is temperature-independent since it uses mass, not volume.'
      }
    },
    {
      id: 'ss4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Colligative Properties** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.40 m solution of a nonelectrolyte in water has a freezing point of $-0.74$ °C. What is $K_f$ for water based on this data?',
            options: [
              '0.512 °C/m',
              '1.86 °C/m',
              '1.85 °C/m',
              '0.74 °C/m'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta T_f = 0.74$ °C (the magnitude of the depression). $K_f = \\Delta T_f / (im) = 0.74 / (1 \\times 0.40) = 1.85$ °C/m, which is consistent with the known $K_f = 1.86$ °C/m (rounding differences).'
          },
          {
            question: 'Which of the following 0.10 m aqueous solutions would have the highest boiling point?',
            options: [
              'C₆H₁₂O₆ (glucose)',
              'NaCl',
              'MgCl₂',
              'All have the same boiling point'
            ],
            correctAnswer: 2,
            explanation: 'MgCl₂ dissociates into Mg²⁺ + 2Cl⁻ ($i = 3$), producing the most particles. $\\Delta T_b = iK_bm$: glucose gives $1(0.512)(0.10) = 0.051$, NaCl gives $2(0.512)(0.10) = 0.10$, MgCl₂ gives $3(0.512)(0.10) = 0.15$. MgCl₂ has the highest boiling point.'
          }
        ]
      }
    }
  ]
}
