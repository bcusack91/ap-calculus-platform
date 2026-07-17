export const chemSolutionsSolubilityPart6Data = {
  topicSlug: 'solutions-solubility',
  sections: [
    {
      id: 'ss6-intro',
      type: 'text' as const,
      content: `# 🧮 Problem-Solving Workshop

**Part 6 of 7 — Mixed Concentration and Colligative Property Calculations**

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
      id: 'ss6-strategy',
      type: 'text' as const,
      content: `
## 🛠️ Problem-Solving Strategy

### Step-by-Step Approach

1. **Read** the problem — identify what is given and what is asked
2. **List** the relevant formula(s)
3. **Convert** units if needed (g → mol, mL → L, °C → K)
4. **Determine** the van\'t Hoff factor $i$ (does the solute dissociate?)
5. **Plug in** and solve
6. **Check** — does the answer make physical sense?


---

### Key Formulas Reference

| Formula | Used For |
|---------|----------|
| $M = n/V$ | Molarity |
| $m = n/\\text{kg solvent}$ | Molality |
| $M_1V_1 = M_2V_2$ | Dilution |
| $\\Delta T_b = iK_bm$ | Boiling point elevation |
| $\\Delta T_f = iK_fm$ | Freezing point depression |
| $\\Pi = iMRT$ | Osmotic pressure |


---

### Constants for Water

- $K_b = 0.512$ °C/m
- $K_f = 1.86$ °C/m
- $T_b = 100.0$ °C, $T_f = 0.0$ °C
- $R = 0.08206$ L·atm/(mol·K)
      `
    },
    {
      id: 'ss6-worked-example-1',
      type: 'text' as const,
      content: `
## 🧪 Worked Example 1: Concentration Conversion

> **Problem:** A solution is prepared by dissolving 34.2 g of sucrose ($C_{12}H_{22}O_{11}$, $M = 342.30$ g/mol) in 200.0 g of water. The density of the resulting solution is 1.024 g/mL. Calculate molality, molarity, mass percent, and mole fraction.

### Given

| Quantity | Value |
|----------|-------|
| Mass of sucrose | 34.2 g |
| $M_{\\text{sucrose}}$ | 342.30 g/mol |
| Mass of water | 200.0 g |
| $d_{\\text{solution}}$ | 1.024 g/mL |

---

### Step-by-Step Solution

| Step | Find | Calculation | Result |
|------|------|-------------|--------|
| 1 | Moles of sucrose | $34.2 / 342.30$ | 0.0999 mol |
| 2 | **(a) Molality** | $0.0999 / 0.2000$ kg | $m = 0.500$ m |
| 3 | Total mass of solution | $34.2 + 200.0$ | 234.2 g |
| 4 | Volume of solution | $234.2 / 1.024$ | 228.7 mL = 0.2287 L |
| 5 | **(b) Molarity** | $0.0999 / 0.2287$ | $M = 0.437$ M |
| 6 | **(c) Mass percent** | $(34.2 / 234.2) \\times 100$ | 14.6% |
| 7 | Moles of water | $200.0 / 18.02$ | 11.10 mol |
| 8 | **(d) Mole fraction** | $0.0999 / (0.0999 + 11.10)$ | $\\chi = 0.00893$ |

> 🔑 **Tip:** Notice how each concentration unit uses different denominators: molality uses kg of **solvent**, molarity uses L of **solution**, mass percent uses g of **solution**, and mole fraction uses total moles.
      `
    },
    {
      id: 'ss6-conversion-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concentration Conversion Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A solution has a molality of 2.00 m and the solvent is water. To convert to molarity, you also need to know:',
            options: [
              'Only the molar mass of the solute',
              'The density of the solution',
              'The vapor pressure of the solution',
              'The temperature only'
            ],
            correctAnswer: 1,
            explanation: 'Molality uses mass of solvent, while molarity uses volume of solution. To convert between them, you need the density of the solution to relate mass to volume.'
          },
          {
            question: 'Which of the following pairs are equivalent? (For a dilute aqueous solution where density ≈ 1.00 g/mL)',
            options: [
              'Molarity and mole fraction',
              'Molality and mass percent',
              'Molarity and molality (approximately)',
              'Mass percent and ppm'
            ],
            correctAnswer: 2,
            explanation: 'For very dilute aqueous solutions, the mass of solvent ≈ mass of solution ≈ volume of solution (since density ≈ 1). So mol/L ≈ mol/kg, meaning molarity ≈ molality.'
          },
          {
            question: 'A 5.00% by mass NaCl solution has a density of 1.034 g/mL. What is its molarity? ($M_{\\text{NaCl}} = 58.44$ g/mol)',
            options: [
              '0.855 M',
              '0.885 M',
              '1.034 M',
              '0.500 M'
            ],
            correctAnswer: 1,
            explanation: 'In 1.000 L of solution: mass = $1034$ g. Mass NaCl = $0.0500 \\times 1034 = 51.7$ g. Moles = $51.7/58.44 = 0.885$ mol. $M = 0.885$ M.'
          }
        ]
      }
    },
    {
      id: 'ss6-mixed-calc-1',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations — Set 1** 🧮

> **Given:** $K_f = 1.86$ °C/m, $K_b = 0.512$ °C/m, $R = 0.08206$ L·atm/(mol·K)

**1)** A solution of 9.00 g of glucose ($M = 180.16$ g/mol, $i = 1$) in 250.0 g of water has what freezing point? (in °C, to 3 significant figures)

**2)** What is the boiling point (°C) of a solution made by dissolving 14.6 g of NaCl ($M = 58.44$ g/mol, $i = 2$) in 500.0 g of water? (to 3 significant figures)

**3)** What is the osmotic pressure (atm) of a 0.0500 M KBr ($i = 2$) solution at 25°C? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-0.37', '100.51', '2.45'],
        hint1: '$n = 9.00/180.16 = 0.04996$ mol. $m = 0.04996/0.250 = 0.200$ m. $\\Delta T_f = (1)(1.86)(0.200)$.',
        hint2: '$n = 14.6/58.44 = 0.2498$ mol. $m = 0.2498/0.500 = 0.500$ m. $\\Delta T_b = (2)(0.512)(0.500)$.',
        hint3: '$\\Pi = iMRT = (2)(0.0500)(0.08206)(298)$.',
        explanation: '1) $m = 0.04996/0.250 = 0.200$ m. $\\Delta T_f = (1)(1.86)(0.200) = 0.372$ °C. $T_f = 0.00 - 0.372 = -0.37$ °C. 2) $m = 0.2498/0.500 = 0.500$ m. $\\Delta T_b = 2(0.512)(0.500) = 0.512$ °C. $T_b = 100.00 + 0.512 = 100.51$ °C. 3) $\\Pi = (2)(0.0500)(0.08206)(298) = 2.45$ atm.'
      }
    },
    {
      id: 'ss6-worked-example-2',
      type: 'text' as const,
      content: `
## 🧪 Worked Example 2: Finding Molar Mass from Colligative Data

> **Problem:** A solution of 5.00 g of an unknown nonelectrolyte in 100.0 g of water freezes at $-0.930$ °C. Find the molar mass of the unknown.

### Given

| Quantity | Value |
|----------|-------|
| Mass of unknown | 5.00 g |
| Mass of water | 100.0 g = 0.1000 kg |
| Freezing point | $-0.930$ °C |
| $i$ (nonelectrolyte) | 1 |
| $K_f$ (water) | 1.86 °C/m |

---

### Step-by-Step Solution

| Step | Action | Calculation | Result |
|------|--------|-------------|--------|
| 1 | Find $\\Delta T_f$ | $0.0 - (-0.930)$ | 0.930 °C |
| 2 | Find molality | $\\Delta T_f / (iK_f) = 0.930 / (1)(1.86)$ | $m = 0.500$ m |
| 3 | Find moles | $m \\times \\text{kg solvent} = 0.500 \\times 0.1000$ | 0.0500 mol |
| 4 | Find molar mass | $\\text{mass} / \\text{moles} = 5.00 / 0.0500$ | **100.0 g/mol** |

> 🔑 **AP Application:** This technique is used in the lab to identify unknown compounds — a classic AP free-response question topic.
      `
    },
    {
      id: 'ss6-mixed-calc-2',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations — Set 2** 🧮

**1)** An unknown nonelectrolyte ($i = 1$) dissolves: 3.50 g in 50.0 g of water, and the solution freezes at $-1.86$ °C. What is the molar mass (g/mol) of the unknown? (to 3 significant figures)

**2)** What mass (in grams) of ethylene glycol ($M = 62.07$ g/mol, $i = 1$) must be added to 4.00 kg of water to lower the freezing point to $-10.0$ °C? (to nearest whole number)

**3)** A 0.200 M solution of an electrolyte at 25°C has an osmotic pressure of 14.6 atm. What is the van\'t Hoff factor $i$? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['70.0', '1335', '3.0'],
        hint1: '$\\Delta T_f = 1.86$ °C. $m = \\Delta T_f/(iK_f) = 1.86/(1 \\times 1.86) = 1.00$ m. Then $n = m \\times \\text{kg solvent}$.',
        hint2: '$\\Delta T_f = 10.0$ °C. $m = 10.0/(1 \\times 1.86) = 5.376$ m. Moles = $m \\times 4.00$. Mass = moles $\\times 62.07$.',
        hint3: '$i = \\Pi/(MRT) = 14.6/((0.200)(0.08206)(298))$.',
        explanation: '1) $m = 1.86/(1 \\times 1.86) = 1.00$ m. $n = 1.00 \\times 0.0500 = 0.0500$ mol. $M = 3.50/0.0500 = 70.0$ g/mol. 2) $m = 10.0/1.86 = 5.376$ m. Moles = $5.376 \\times 4.00 = 21.51$ mol. Mass = $21.51 \\times 62.07 = 1335$ g. 3) $i = 14.6/((0.200)(0.08206)(298)) = 14.6/4.889 = 2.99 \\approx 3.0$.'
      }
    },
    {
      id: 'ss6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Problem-Solving Strategies** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To determine the molar mass of an unknown using freezing point depression, you need to know',
            options: ['Only the freezing point change', 'The freezing point change, mass of solute, and mass of solvent', 'Only the molarity', 'The vapor pressure']
          },
          {
            label: 'If a solution has a larger $\\Delta T_f$ than predicted for a nonelectrolyte, the solute is likely',
            options: ['A nonelectrolyte', 'An electrolyte that dissociates', 'Insoluble', 'A gas']
          },
          {
            label: 'The formula $\\Pi = iMRT$ uses molarity instead of molality because',
            options: ['Molarity is more accurate', 'Osmotic pressure is measured at constant temperature', 'The derivation comes from the ideal gas law (PV = nRT)', 'There is no particular reason']
          },
          {
            label: 'For a dilute aqueous solution, molarity and molality are approximately equal because',
            options: ['They use the same units', 'The density of dilute solution ≈ 1.00 g/mL, so 1 L ≈ 1 kg', 'Moles cancel out', 'Temperature has no effect']
          }
        ],
        correctAnswers: ['The freezing point change, mass of solute, and mass of solvent', 'An electrolyte that dissociates', 'The derivation comes from the ideal gas law (PV = nRT)', 'The density of dilute solution ≈ 1.00 g/mL, so 1 L ≈ 1 kg'],
        hint1: 'You need $\\Delta T_f$ to find molality, mass of solvent to find moles, and mass of solute to find molar mass.',
        hint2: 'A larger $\\Delta T_f$ means more particles ($i > 1$), which implies dissociation.',
        hint3: 'The osmotic pressure equation is derived from the ideal gas law, which uses volume.',
        explanation: 'Finding molar mass requires $\\Delta T_f$, mass of solute, and mass of solvent. Larger-than-expected $\\Delta T_f$ indicates $i > 1$ (electrolyte). $\\Pi = iMRT$ parallels $PV = nRT$, using concentration in mol/L. In dilute aqueous solutions, density ≈ 1 g/mL makes L solution ≈ kg solvent.'
      }
    },
    {
      id: 'ss6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.10 m aqueous solution of a compound freezes at $-0.56$ °C. The van\'t Hoff factor for this compound is approximately:',
            options: [
              '1',
              '2',
              '3',
              '4'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta T_f = 0.56$ °C. $i = \\Delta T_f/(K_fm) = 0.56/((1.86)(0.10)) = 0.56/0.186 = 3.0$. The compound dissociates into 3 ions (e.g., $CaCl_{2}$ → $Ca^{2+}$ + $2Cl^{-}$).'
          },
          {
            question: 'Which technique would give the most accurate molar mass determination for a protein with $M \\approx 50{,}000$ g/mol?',
            options: [
              'Boiling point elevation',
              'Freezing point depression',
              'Osmotic pressure measurement',
              'Mass percent analysis'
            ],
            correctAnswer: 2,
            explanation: 'Large molecules have very low molalities even at measurable masses, making $\\Delta T_b$ and $\\Delta T_f$ immeasurably small. Osmotic pressure is much more sensitive — even 0.001 M solutions produce measurable pressures (several mmHg).'
          }
        ]
      }
    }
  ]
}
