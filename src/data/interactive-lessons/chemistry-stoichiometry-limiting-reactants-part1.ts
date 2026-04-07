export const chemStoichiometryLimitingReactantsPart1Data = {
  topicSlug: 'stoichiometry-limiting-reactants',
  sections: [
    {
      id: 'sl1-intro',
      type: 'text' as const,
      content: `
# ⚖️ Mole Ratios

**Part 1 of 7 — The Foundation of Stoichiometry**

Stoichiometry is the math of chemistry — it lets you calculate **how much** of each substance is involved in a reaction. The foundation of all stoichiometric calculations is the **mole ratio**, which comes directly from the coefficients in a balanced equation.
      `
    },
    {
      id: 'sl1-coefficients',
      type: 'text' as const,
      content: `
## 📌 Coefficients Tell the Story

In the balanced equation:

$$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$$

The coefficients tell us that:
- **2 molecules** of H₂ react with **1 molecule** of O₂ to produce **2 molecules** of H₂O
- **2 moles** of H₂ react with **1 mole** of O₂ to produce **2 moles** of H₂O


---

### Key Insight

Coefficients give **mole ratios**, not mass ratios. The ratio 2:1:2 means:
- 2 mol H₂ : 1 mol O₂ : 2 mol H₂O

This ratio is the **conversion factor** for all stoichiometric calculations.
      `
    },
    {
      id: 'sl1-writing-ratios',
      type: 'text' as const,
      content: `
## ✍️ Writing Mole Ratios

From any balanced equation, you can write a mole ratio between **any two** substances.


---

### Example: $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$

All possible mole ratios:

| Ratio | Value |
|-------|-------|
| N₂ to H₂ | $\\frac{1 \\text{ mol N}_2}{3 \\text{ mol H}_2}$ or $\\frac{3 \\text{ mol H}_2}{1 \\text{ mol N}_2}$ |
| N₂ to NH₃ | $\\frac{1 \\text{ mol N}_2}{2 \\text{ mol NH}_3}$ or $\\frac{2 \\text{ mol NH}_3}{1 \\text{ mol N}_2}$ |
| H₂ to NH₃ | $\\frac{3 \\text{ mol H}_2}{2 \\text{ mol NH}_3}$ or $\\frac{2 \\text{ mol NH}_3}{3 \\text{ mol H}_2}$ |


---

### How to Choose

Pick the ratio that **cancels the given unit** and **introduces the desired unit**.

If you know moles of N₂ and want moles of NH₃:

$$\\text{mol NH}_3 = \\text{mol N}_2 \\times \\frac{2 \\text{ mol NH}_3}{1 \\text{ mol N}_2}$$
      `
    },
    {
      id: 'sl1-mole-to-mole',
      type: 'text' as const,
      content: `
## ⚖️ Mole-to-Mole Conversions

### The Simplest Stoichiometry Problem

Given moles of one substance, find moles of another using the mole ratio.


---

### Worked Example

**Given:** $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$

How many moles of NH₃ are produced from 5.0 mol N₂?

$$\\text{mol NH}_3 = 5.0 \\text{ mol N}_2 \\times \\frac{2 \\text{ mol NH}_3}{1 \\text{ mol N}_2} = 10.0 \\text{ mol NH}_3$$


---

### Another Example

How many moles of H₂ are needed to react with 4.0 mol N₂?

$$\\text{mol H}_2 = 4.0 \\text{ mol N}_2 \\times \\frac{3 \\text{ mol H}_2}{1 \\text{ mol N}_2} = 12.0 \\text{ mol H}_2$$


---

### General Formula

$$\\text{mol of B} = \\text{mol of A} \\times \\frac{\\text{coefficient of B}}{\\text{coefficient of A}}$$
      `
    },
    {
      id: 'sl1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mole Ratio Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the equation $2\\text{Al} + 3\\text{Cl}_2 \\rightarrow 2\\text{AlCl}_3$, the mole ratio of Al to Cl₂ is:',
            options: [
              '1:1',
              '2:3',
              '3:2',
              '1:3'
            ],
            correctAnswer: 1,
            explanation: 'The coefficients are 2 for Al and 3 for Cl₂, giving a mole ratio of 2:3. This means 2 moles of Al react with every 3 moles of Cl₂.'
          },
          {
            question: 'Given $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$, how many moles of O₂ are needed to react with 3.0 mol CH₄?',
            options: [
              '1.5 mol',
              '3.0 mol',
              '6.0 mol',
              '9.0 mol'
            ],
            correctAnswer: 2,
            explanation: '$\\text{mol O}_2 = 3.0 \\text{ mol CH}_4 \\times \\frac{2 \\text{ mol O}_2}{1 \\text{ mol CH}_4} = 6.0 \\text{ mol O}_2$'
          },
          {
            question: 'The mole ratio used in stoichiometry comes from:',
            options: [
              'The masses of the reactants',
              'The coefficients in the balanced equation',
              'The subscripts in the chemical formulas',
              'The volume of gases'
            ],
            correctAnswer: 1,
            explanation: 'Mole ratios come directly from the coefficients in the balanced equation. Subscripts tell you the composition of each molecule, not the reaction ratios.'
          },
          {
            question: 'Given $4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3$, how many moles of Fe₂O₃ are produced from 2.0 mol Fe?',
            options: [
              '0.50 mol',
              '1.0 mol',
              '2.0 mol',
              '4.0 mol'
            ],
            correctAnswer: 1,
            explanation: '$\\text{mol Fe}_2\\text{O}_3 = 2.0 \\text{ mol Fe} \\times \\frac{2 \\text{ mol Fe}_2\\text{O}_3}{4 \\text{ mol Fe}} = 1.0 \\text{ mol Fe}_2\\text{O}_3$'
          }
        ]
      }
    },
    {
      id: 'sl1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Mole-to-Mole Calculation Drill** 🧮

Use the equation: $2\\text{C}_2\\text{H}_6 + 7\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 6\\text{H}_2\\text{O}$

**1)** How many moles of O₂ are needed to react with 5.0 mol C₂H₆? (to 3 significant figures)

**2)** How many moles of CO₂ are produced from 5.0 mol C₂H₆? (to 3 significant figures)

**3)** How many moles of H₂O are produced from 3.5 mol O₂? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17.5', '10.0', '3.0'],
        hint1: 'Ratio: $\\frac{7 \\text{ mol O}_2}{2 \\text{ mol C}_2\\text{H}_6}$. Multiply $5.0 \\times 7/2$.',
        hint2: 'Ratio: $\\frac{4 \\text{ mol CO}_2}{2 \\text{ mol C}_2\\text{H}_6}$. Multiply $5.0 \\times 4/2$.',
        hint3: 'Ratio: $\\frac{6 \\text{ mol H}_2\\text{O}}{7 \\text{ mol O}_2}$. Multiply $3.5 \\times 6/7$.',
        explanation: '1) $5.0 \\times 7/2 = 17.5$ mol O₂. 2) $5.0 \\times 4/2 = 10.0$ mol CO₂. 3) $3.5 \\times 6/7 = 3.0$ mol H₂O.'
      }
    },
    {
      id: 'sl1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Mole Ratio Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Before using a mole ratio, you must first make sure the equation is',
            options: ['written in words', 'balanced', 'in net ionic form', 'memorized']
          },
          {
            label: 'In the equation 2A + B → 3C, the mole ratio of A to C is',
            options: ['2:1', '1:3', '2:3', '3:2']
          },
          {
            label: 'Mole ratios relate the amounts of substances in terms of',
            options: ['grams', 'liters', 'moles', 'molecules']
          },
          {
            label: 'To convert from moles of reactant to moles of product, you need',
            options: ['the molar mass', 'the density', 'the mole ratio from the balanced equation', 'Avogadro\'s number']
          }
        ],
        correctAnswers: ['balanced', '2:3', 'moles', 'the mole ratio from the balanced equation'],
        hint1: 'Mole ratios are only valid from balanced equations.',
        hint2: 'Read the coefficients directly: A has 2, C has 3.',
        hint3: 'The coefficients represent moles, not grams.',
        explanation: 'The equation must be balanced before extracting mole ratios. The coefficients give the ratio directly: 2A:3C = 2:3. Mole ratios work in moles. The mole ratio is the bridge between moles of different substances.'
      }
    },
    {
      id: 'sl1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Mole Ratios** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Given $2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$, how many moles of O₂ are produced from 0.50 mol KClO₃?',
            options: [
              '0.33 mol',
              '0.50 mol',
              '0.75 mol',
              '1.50 mol'
            ],
            correctAnswer: 2,
            explanation: '$\\text{mol O}_2 = 0.50 \\text{ mol KClO}_3 \\times \\frac{3 \\text{ mol O}_2}{2 \\text{ mol KClO}_3} = 0.75$ mol O₂.'
          },
          {
            question: 'In the Haber process ($\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$), how many moles of H₂ are consumed to produce 8.0 mol NH₃?',
            options: [
              '4.0 mol',
              '8.0 mol',
              '12.0 mol',
              '16.0 mol'
            ],
            correctAnswer: 2,
            explanation: '$\\text{mol H}_2 = 8.0 \\text{ mol NH}_3 \\times \\frac{3 \\text{ mol H}_2}{2 \\text{ mol NH}_3} = 12.0$ mol H₂.'
          }
        ]
      }
    }
  ]
}
