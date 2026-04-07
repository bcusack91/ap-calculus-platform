export const chemSolutionsSolubilityPart5Data = {
  topicSlug: 'solutions-solubility',
  sections: [
    {
      id: 'ss5-intro',
      type: 'text' as const,
      content: `
# 🔬 Osmotic Pressure and the van\'t Hoff Factor

**Part 5 of 7 — $\\Pi = iMRT$, Electrolytes vs. Nonelectrolytes**

Osmotic pressure is the fourth colligative property — and arguably the most important in biology and medicine. It governs water balance across cell membranes, IV fluid design, and kidney function. On the AP exam, you need to calculate it and connect it to the van\'t Hoff factor.
      `
    },
    {
      id: 'ss5-osmosis',
      type: 'text' as const,
      content: `
## 📌 Osmosis

**Osmosis** is the net movement of solvent (usually water) through a **semipermeable membrane** from a region of **lower** solute concentration to **higher** solute concentration.


---

### Semipermeable Membrane

A membrane that allows solvent molecules to pass through but blocks solute particles (ions or large molecules).


---

### Driving Force

The solvent naturally moves to dilute the more concentrated side — this is an entropy-driven process.


---

### Direction Rules

| Term | Meaning | Water Flow Direction |
|------|---------|---------------------|
| **Hypertonic** | Higher solute concentration | Water flows **out** of the cell |
| **Hypotonic** | Lower solute concentration | Water flows **into** the cell |
| **Isotonic** | Equal solute concentration | No net water flow |


---

### Biological Importance

- Red blood cells placed in a hypotonic solution swell and may burst (lysis)
- In a hypertonic solution, they shrink (crenation)
- IV fluids must be isotonic (typically 0.9% NaCl — "normal saline")
      `
    },
    {
      id: 'ss5-osmotic-pressure',
      type: 'text' as const,
      content: `
## 💨 Osmotic Pressure ($\\Pi$)

**Osmotic pressure** is the minimum pressure that must be applied to the solution side to **prevent** osmosis.

$$\\Pi = iMRT$$

where:
- $\\Pi$ = osmotic pressure (atm)
- $i$ = van\'t Hoff factor
- $M$ = molarity of the solution (mol/L)
- $R$ = gas constant = $0.08206$ L·atm/(mol·K)
- $T$ = temperature in Kelvin


---

### This looks like the ideal gas law!

$$\\Pi V = nRT \\quad \\Rightarrow \\quad \\Pi = \\frac{n}{V}RT = MRT$$

With the van\'t Hoff factor for electrolytes: $\\Pi = iMRT$


---

### Worked Example

Calculate the osmotic pressure at 25°C of a 0.100 M NaCl ($i = 2$) solution.

$$T = 25 + 273 = 298 \\text{ K}$$

$$\\Pi = (2)(0.100)(0.08206)(298) = 4.89 \\text{ atm}$$

That is a surprisingly large pressure — about 72 psi — from a relatively dilute solution!
      `
    },
    {
      id: 'ss5-electrolyte-comparison',
      type: 'text' as const,
      content: `
## 🔋 Electrolytes vs. Nonelectrolytes

### Strong Electrolytes
- **Completely** dissociate into ions in solution
- Examples: NaCl, KBr, HCl, NaOH, CaCl₂
- Conduct electricity strongly
- $i$ equals the total number of ions produced


---

### Weak Electrolytes
- **Partially** dissociate in solution
- Examples: CH₃COOH (acetic acid), NH₃, HF
- Conduct electricity weakly
- $i$ is between 1 and the theoretical maximum (closer to 1 for weak electrolytes)


---

### Nonelectrolytes
- Do **not** dissociate — dissolve as whole molecules
- Examples: glucose (C₆H₁₂O₆), sucrose, ethanol, urea
- Do not conduct electricity
- $i = 1$ always


---

### Impact on Colligative Properties

For 0.10 m solutions in water ($K_f = 1.86$ °C/m):

| Solute | $i$ | $\\Delta T_f = iK_fm$ | Freezing Point |
|--------|-----|------|----------------|
| Glucose | 1 | $1(1.86)(0.10) = 0.186$ °C | $-0.19$ °C |
| NaCl | 2 | $2(1.86)(0.10) = 0.372$ °C | $-0.37$ °C |
| CaCl₂ | 3 | $3(1.86)(0.10) = 0.558$ °C | $-0.56$ °C |
      `
    },
    {
      id: 'ss5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Osmotic Pressure Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Osmosis is the movement of:',
            options: [
              'Solute from high to low concentration',
              'Solvent from high to low solute concentration',
              'Solute through a semipermeable membrane',
              'Solvent from low to high solute concentration through a semipermeable membrane'
            ],
            correctAnswer: 3,
            explanation: 'Osmosis is specifically the movement of solvent (not solute) through a semipermeable membrane from the side with lower solute concentration (more solvent) to the side with higher solute concentration (less solvent).'
          },
          {
            question: 'A red blood cell is placed in a 2.0% NaCl solution (normal saline is 0.9%). The cell will:',
            options: [
              'Swell and possibly burst',
              'Shrink (crenate)',
              'Remain unchanged',
              'Dissolve completely'
            ],
            correctAnswer: 1,
            explanation: 'The 2.0% NaCl solution is hypertonic relative to the cell interior (~0.9%). Water moves out of the cell by osmosis, causing it to shrink (crenate).'
          },
          {
            question: 'Which solution has the greatest osmotic pressure at 25°C?',
            options: [
              '0.10 M glucose ($i = 1$)',
              '0.10 M NaCl ($i = 2$)',
              '0.050 M CaCl₂ ($i = 3$)',
              '0.10 M KNO₃ ($i = 2$)'
            ],
            correctAnswer: 1,
            explanation: '$\\Pi = iMRT$. Calculate $iM$ for each: glucose: $1(0.10) = 0.10$. NaCl: $2(0.10) = 0.20$. CaCl₂: $3(0.050) = 0.15$. KNO₃: $2(0.10) = 0.20$. NaCl and KNO₃ are tied. But NaCl appears first among the tied options.'
          }
        ]
      }
    },
    {
      id: 'ss5-osmotic-calc',
      type: 'input-boxes' as const,
      content: `
**Osmotic Pressure Calculations** 🧮

> **Given:** $R = 0.08206$ L·atm/(mol·K)

**1)** Calculate the osmotic pressure (in atm) of a 0.200 M glucose ($i = 1$) solution at 37°C (body temperature). (to 3 significant figures)

**2)** A 0.150 M CaCl₂ ($i = 3$) solution at 25°C has what osmotic pressure? (in atm, to 3 significant figures)

**3)** A protein solution has an osmotic pressure of 0.0821 atm at 25°C. What is the molarity of the protein? ($i = 1$; answer in M to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5.1', '11.0', '0.0034'],
        hint1: '$T = 37 + 273 = 310$ K. $\\Pi = (1)(0.200)(0.08206)(310)$.',
        hint2: '$T = 298$ K. $\\Pi = (3)(0.150)(0.08206)(298)$.',
        hint3: '$M = \\Pi/(iRT) = 0.0821/((1)(0.08206)(298))$.',
        explanation: '1) $\\Pi = (1)(0.200)(0.08206)(310) = 5.09 \\approx 5.1$ atm. 2) $\\Pi = (3)(0.150)(0.08206)(298) = 11.0$ atm. 3) $M = 0.0821/((1)(0.08206)(298)) = 0.0821/24.45 = 0.00336 \\approx 0.0034$ M.'
      }
    },
    {
      id: 'ss5-reverse-osmosis',
      type: 'text' as const,
      content: `
## 📌 Reverse Osmosis

If you apply pressure **greater** than the osmotic pressure to the concentrated side, you can force solvent to flow **backward** — from high concentration to low concentration.


---

### Applications

- **Water desalination** — removing salt from seawater (seawater $\\Pi \\approx 27$ atm, so applied pressure must exceed this)
- **Water purification** — removing contaminants
- **Maple syrup production** — concentrating sap


---

### Reverse Osmosis vs. Osmosis

| Feature | Osmosis | Reverse Osmosis |
|---------|---------|----------------|
| Direction | Low → high solute conc. | High → low solute conc. |
| Pressure required? | Spontaneous | Requires applied pressure > $\\Pi$ |
| Energy input? | None | Significant |
| Result | Dilutes concentrated side | Concentrates the solution |
      `
    },
    {
      id: 'ss5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Electrolytes and Osmosis — Key Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Acetic acid (CH₃COOH) is a weak electrolyte, so its van\'t Hoff factor is',
            options: ['Exactly 1', 'Between 1 and 2', 'Exactly 2', 'Greater than 2']
          },
          {
            label: 'To prevent osmosis, pressure applied to the solution side must equal',
            options: ['Zero', 'The vapor pressure', 'The osmotic pressure', 'The atmospheric pressure']
          },
          {
            label: 'Reverse osmosis requires pressure that is',
            options: ['Less than osmotic pressure', 'Equal to osmotic pressure', 'Greater than osmotic pressure', 'Equal to atmospheric pressure']
          },
          {
            label: '0.30 M glucose ($i = 1$) and 0.15 M NaCl ($i = 2$) are',
            options: ['Not related', 'Isotonic to each other', 'The glucose solution is hypertonic', 'The NaCl solution is hypertonic']
          }
        ],
        correctAnswers: ['Between 1 and 2', 'The osmotic pressure', 'Greater than osmotic pressure', 'Isotonic to each other'],
        hint1: 'Weak electrolytes partially dissociate, so $i$ is between 1 and the theoretical max.',
        hint2: 'Osmotic pressure is defined as the pressure needed to stop osmosis.',
        hint3: 'Compare $iM$ products: glucose: $1(0.30) = 0.30$; NaCl: $2(0.15) = 0.30$.',
        explanation: 'CH₃COOH partially dissociates, so $1 < i < 2$. Osmotic pressure exactly stops osmosis; reverse osmosis needs more. Both solutions have $iM = 0.30$, so they are isotonic.'
      }
    },
    {
      id: 'ss5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Osmotic Pressure** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A solution containing 6.00 g of urea (CH₄N₂O, $M = 60.06$ g/mol, $i = 1$) in 1.00 L of solution at 27°C has an osmotic pressure of approximately:',
            options: [
              '1.22 atm',
              '2.46 atm',
              '4.92 atm',
              '0.246 atm'
            ],
            correctAnswer: 1,
            explanation: '$n = 6.00/60.06 = 0.0999$ mol. $M = 0.0999/1.00 = 0.0999$ M. $T = 300$ K. $\\Pi = (1)(0.0999)(0.08206)(300) = 2.46$ atm.'
          },
          {
            question: 'Osmotic pressure measurements are often used to determine the molar mass of large molecules (like proteins) because:',
            options: [
              'Proteins dissolve only in organic solvents',
              'Even dilute protein solutions produce measurable osmotic pressures',
              'Proteins are strong electrolytes',
              'Osmotic pressure does not depend on temperature'
            ],
            correctAnswer: 1,
            explanation: 'Osmotic pressure is very sensitive — even very dilute solutions produce measurable pressures. For a 0.001 M solution at 25°C: $\\Pi = (1)(0.001)(0.08206)(298) = 0.024$ atm = 18 mmHg, which is easily measurable. Other colligative properties ($\\Delta T_f$, $\\Delta T_b$) would be too small to detect at such low concentrations.'
          }
        ]
      }
    }
  ]
}
