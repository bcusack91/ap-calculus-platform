export const chemReactionTypesPart3Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt3-intro',
      type: 'text' as const,
      content: `# 🔥 Combustion Reactions

**Part 3 of 7 — Burning It Down**

---

### Topics in This Part

| Section |
|---------|
| 📌 Complete Combustion of Hydrocarbons |
| General Form |
| Common Examples |
| Key Recognition |
| 📌 Combustion of Oxygenated Compounds |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 3
- Understanding the core concepts covered in Part 3
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'rt3-complete-combustion',
      type: 'text' as const,
      content: `
## 📌 Complete Combustion of Hydrocarbons

When a hydrocarbon (a compound containing only C and H) burns in **excess oxygen**, the products are always **carbon dioxide** and **water**.


---

### General Form

$$\\boxed{\\text{C}_x\\text{H}_y + \\left(x + \\frac{y}{4}\\right)\\text{O}_2 \\rightarrow x\\text{CO}_2 + \\frac{y}{2}\\text{H}_2\\text{O}}$$


---

### Common Examples

| Hydrocarbon | Balanced Equation |
|------------|-------------------|
| Methane (CH₄) | $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$ |
| Propane (C₃H₈) | $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$ |
| Octane (C₈H₁₈) | $2\\text{C}_8\\text{H}_{18} + 25\\text{O}_2 \\rightarrow 16\\text{CO}_2 + 18\\text{H}_2\\text{O}$ |
| Ethylene (C₂H₄) | $\\text{C}_2\\text{H}_4 + 3\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 2\\text{H}_2\\text{O}$ |


---

### Key Recognition

> 💡 **Tip:** If you see a hydrocarbon + O₂ → it\'s combustion. The products are **always CO₂ + H₂O** for complete combustion.
      `
    },
    {
      id: 'rt3-oxygenated-combustion',
      type: 'text' as const,
      content: `
## 📌 Combustion of Oxygenated Compounds

Compounds containing C, H, **and O** (like alcohols and sugars) also undergo combustion. The products are still CO₂ and H₂O.


---

### Examples

| Compound | Balanced Equation |
|----------|-------------------|
| Methanol (CH₃OH) | $2\\text{CH}_3\\text{OH} + 3\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 4\\text{H}_2\\text{O}$ |
| Ethanol (C₂H₅OH) | $\\text{C}_2\\text{H}_5\\text{OH} + 3\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O}$ |
| Glucose (C₆H₁₂O₆) | $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$ |


---

### Cellular Respiration

> 💡 **Tip:** Glucose combustion is chemically identical to cellular respiration — your body "burns" glucose to release energy!

$$\\boxed{\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energy}}$$
      `
    },
    {
      id: 'rt3-incomplete-combustion',
      type: 'text' as const,
      content: `
## 📌 Complete vs. Incomplete Combustion

### Complete Combustion
- Occurs with **excess oxygen**
- Products: **CO₂ + H₂O**
- Blue flame
- Maximum energy released


---

### Incomplete Combustion
- Occurs with **limited oxygen**
- Products may include: **CO** (carbon monoxide), **C** (soot), or both, along with H₂O
- Yellow/orange flame
- Less energy released

> ⚠️ **Warning:** **Carbon monoxide (CO) is toxic** and odorless — this is why proper ventilation matters. CO binds to hemoglobin more strongly than O₂, preventing oxygen transport.


---

### Comparison

| Feature | Complete | Incomplete |
|---------|----------|------------|
| O₂ supply | Excess | Limited |
| Carbon product | CO₂ | CO and/or C (soot) |
| Flame color | Blue | Yellow/orange |
| Energy output | Maximum | Less |
| Safety | Safer | Dangerous (CO) |


---

### Incomplete Combustion Example

$$2\\text{CH}_4 + 3\\text{O}_2 \\rightarrow 2\\text{CO} + 4\\text{H}_2\\text{O}$$

With even less oxygen:

$$\\text{CH}_4 + \\text{O}_2 \\rightarrow \\text{C} + 2\\text{H}_2\\text{O}$$
      `
    },
    {
      id: 'rt3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Combustion Reactions Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The complete combustion of any hydrocarbon always produces:',
            options: [
              'CO + H₂O',
              'CO₂ + H₂',
              'CO₂ + H₂O',
              'C + H₂O'
            ],
            correctAnswer: 2,
            explanation: 'Complete combustion of a hydrocarbon (C and H only) in excess oxygen always produces carbon dioxide (CO₂) and water (H₂O).'
          },
          {
            question: 'What are the products of the complete combustion of C₂H₆ (ethane)?',
            options: [
              '$2\\text{CO}_2 + 2\\text{H}_2\\text{O}$',
              '$2\\text{CO}_2 + 3\\text{H}_2\\text{O}$',
              '$2\\text{CO} + 3\\text{H}_2\\text{O}$',
              '$\\text{CO}_2 + 3\\text{H}_2\\text{O}$'
            ],
            correctAnswer: 1,
            explanation: '$2\\text{C}_2\\text{H}_6 + 7\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 6\\text{H}_2\\text{O}$. Per molecule of C₂H₆: 2 carbon atoms → 2 CO₂ and 6 hydrogen atoms → 3 H₂O.'
          },
          {
            question: 'Incomplete combustion is dangerous primarily because:',
            options: [
              'It produces too much CO₂',
              'It produces carbon monoxide (CO), which is toxic',
              'It creates too much heat',
              'It consumes too much oxygen'
            ],
            correctAnswer: 1,
            explanation: 'Incomplete combustion produces carbon monoxide (CO), a colorless and odorless gas that is highly toxic. CO binds to hemoglobin more strongly than O₂, preventing oxygen transport in the blood.'
          },
          {
            question: 'A yellow, sooty flame indicates:',
            options: [
              'Complete combustion with excess oxygen',
              'Incomplete combustion with limited oxygen',
              'A synthesis reaction',
              'The presence of a catalyst'
            ],
            correctAnswer: 1,
            explanation: 'A yellow or orange flame with soot (carbon particles) is a sign of incomplete combustion. Limited oxygen means not all carbon is fully oxidized to CO₂ — some remains as solid carbon (soot) or CO.'
          }
        ]
      }
    },
    {
      id: 'rt3-balance-drill',
      type: 'input-boxes' as const,
      content: `
**Balance the Combustion Equations** 🧮

Find the coefficient of O₂ needed for complete combustion. Enter just the number.

**1)** $\\text{C}_2\\text{H}_2 + \\underline{\\hspace{1em}}\\,\\text{O}_2 \\rightarrow 2\\text{CO}_2 + \\text{H}_2\\text{O}$ → coefficient of O₂ = ?

**2)** $2\\text{C}_4\\text{H}_{10} + \\underline{\\hspace{1em}}\\,\\text{O}_2 \\rightarrow 8\\text{CO}_2 + 10\\text{H}_2\\text{O}$ → coefficient of O₂ = ?

**3)** $\\text{C}_2\\text{H}_5\\text{OH} + \\underline{\\hspace{1em}}\\,\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O}$ → coefficient of O₂ = ?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.5', '13', '3'],
        hint1: 'Count O atoms on the right: 2(2) + 1 = 5 oxygen atoms. Each O₂ provides 2, so 5/2 = 2.5.',
        hint2: 'Right side: 8(2) + 10(1) = 26 oxygen atoms. Divide by 2: 26/2 = 13.',
        hint3: 'Right side: 2(2) + 3(1) = 7 oxygen atoms. The OH in ethanol provides 1, so need 6 more from O₂: 6/2 = 3.',
        explanation: '1) Products: 4 + 1 = 5 O atoms → 5/2 = 2.5 O₂. (Can multiply through by 2: $2\\text{C}_2\\text{H}_2 + 5\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 2\\text{H}_2\\text{O}$.) 2) Products: 16 + 10 = 26 O atoms → 26/2 = 13 O₂. 3) Products: 4 + 3 = 7 O atoms. Ethanol has 1 O, so need 6 from O₂ → 6/2 = 3 O₂.'
      }
    },
    {
      id: 'rt3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Combustion Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The reactant that combines with a fuel in combustion is',
            options: ['nitrogen', 'oxygen', 'carbon dioxide', 'water']
          },
          {
            label: 'Cellular respiration is chemically equivalent to the combustion of',
            options: ['methane', 'ethanol', 'glucose', 'octane']
          },
          {
            label: 'To distinguish combustion from other reaction types, look for',
            options: ['a metal reactant', 'O₂ as a reactant with CO₂ and H₂O as products', 'a precipitate forming', 'two compounds exchanging ions']
          },
          {
            label: 'If a hydrocarbon has more carbon atoms, the coefficient of O₂ needed',
            options: ['decreases', 'stays the same', 'increases', 'becomes zero']
          }
        ],
        correctAnswers: ['oxygen', 'glucose', 'O₂ as a reactant with CO₂ and H₂O as products', 'increases'],
        hint1: 'Combustion requires a fuel + an oxidizer.',
        hint2: 'Your body oxidizes C₆H₁₂O₆ for energy.',
        hint3: 'The defining feature of combustion.',
        explanation: 'Combustion requires oxygen (O₂). Cellular respiration combusts glucose (C₆H₁₂O₆). The hallmark of combustion is O₂ reacting with a fuel to produce CO₂ + H₂O. Larger hydrocarbons need more O₂ because there are more C and H atoms to oxidize.'
      }
    },
    {
      id: 'rt3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Combustion Reactions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'What is the balanced equation for the complete combustion of butane (C₄H₁₀)?',
            options: [
              '$\\text{C}_4\\text{H}_{10} + 6\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 5\\text{H}_2\\text{O}$',
              '$\\text{C}_4\\text{H}_{10} + 5\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 5\\text{H}_2\\text{O}$',
              '$2\\text{C}_4\\text{H}_{10} + 13\\text{O}_2 \\rightarrow 8\\text{CO}_2 + 10\\text{H}_2\\text{O}$',
              '$\\text{C}_4\\text{H}_{10} + 13\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 5\\text{H}_2\\text{O}$'
            ],
            correctAnswer: 2,
            explanation: 'C₄H₁₀: 4C → 4CO₂, 10H → 5H₂O. O atoms needed: 4(2) + 5(1) = 13. So 13/2 = 6.5 O₂. Multiply by 2 to clear the fraction: $2\\text{C}_4\\text{H}_{10} + 13\\text{O}_2 \\rightarrow 8\\text{CO}_2 + 10\\text{H}_2\\text{O}$.'
          },
          {
            question: 'Which observation suggests incomplete combustion is occurring?',
            options: [
              'A blue flame with no visible smoke',
              'A yellow flame with black soot deposits',
              'Clear, odorless exhaust',
              'The reaction produces only CO₂ and H₂O'
            ],
            correctAnswer: 1,
            explanation: 'Yellow/orange flame and soot (solid carbon particles) are hallmarks of incomplete combustion. Complete combustion gives a clean blue flame with no soot.'
          }
        ]
      }
    }
  ]
}
