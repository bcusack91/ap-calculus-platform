export const chemStoichiometryLimitingReactantsPart1Data = {
  topicSlug: 'stoichiometry-limiting-reactants',
  sections: [
    {
      id: 'sl1-intro',
      type: 'text' as const,
      content: `# ⚖️ Mole Ratios

**Part 1 of 7 — The Foundation of Stoichiometry**

---

### Topics in This Part

| Section |
|---------|
| 📌 Coefficients Tell the Story |
| ✍️ Writing Mole Ratios |
| Example: $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$ |
| ⚖️ Mole-to-Mole Conversions |
| The Simplest Stoichiometry Problem |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'sl1-coefficients',
      type: 'text' as const,
      content: `
## 📌 Coefficients Tell the Story

In the balanced equation:

$$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$$

The coefficients tell us that:
- **2 molecules** of $H_{2}$ react with **1 molecule** of $O_{2}$ to produce **2 molecules** of $H_{2}O$
- **2 moles** of $H_{2}$ react with **1 mole** of $O_{2}$ to produce **2 moles** of $H_{2}O$


---

> 🔑 **Key Concept:** Coefficients give **mole ratios**, not mass ratios. The ratio 2:1:2 means 2 mol $H_{2}$ : 1 mol $O_{2}$ : 2 mol $H_{2}O$. This ratio is the **conversion factor** for all stoichiometric calculations.
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
| $N_{2}$ to $H_{2}$ | $\\frac{1 \\text{ mol N}_2}{3 \\text{ mol H}_2}$ or $\\frac{3 \\text{ mol H}_2}{1 \\text{ mol N}_2}$ |
| $N_{2}$ to $NH_{3}$ | $\\frac{1 \\text{ mol N}_2}{2 \\text{ mol NH}_3}$ or $\\frac{2 \\text{ mol NH}_3}{1 \\text{ mol N}_2}$ |
| $H_{2}$ to $NH_{3}$ | $\\frac{3 \\text{ mol H}_2}{2 \\text{ mol NH}_3}$ or $\\frac{2 \\text{ mol NH}_3}{3 \\text{ mol H}_2}$ |


---

> 💡 **Tip:** Pick the ratio that **cancels the given unit** and **introduces the desired unit**.

If you know moles of $N_{2}$ and want moles of $NH_{3}$:

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

> **Problem:** Given $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$, how many moles of $NH_{3}$ are produced from 5.0 mol $N_{2}$?

> **Solution:**

$$\\text{mol NH}_3 = 5.0 \\text{ mol N}_2 \\times \\frac{2 \\text{ mol NH}_3}{1 \\text{ mol N}_2} = 10.0 \\text{ mol NH}_3$$


---

> **Problem:** How many moles of $H_{2}$ are needed to react with 4.0 mol $N_{2}$?

> **Solution:**

$$\\text{mol H}_2 = 4.0 \\text{ mol N}_2 \\times \\frac{3 \\text{ mol H}_2}{1 \\text{ mol N}_2} = 12.0 \\text{ mol H}_2$$


---

### General Formula

$$\\boxed{\\text{mol of B} = \\text{mol of A} \\times \\frac{\\text{coefficient of B}}{\\text{coefficient of A}}}$$
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
            question: 'In the equation $2\\text{Al} + 3\\text{Cl}_2 \\rightarrow 2\\text{AlCl}_3$, the mole ratio of Al to $Cl_{2}$ is:',
            options: [
              '1:1',
              '2:3',
              '3:2',
              '1:3'
            ],
            correctAnswer: 1,
            explanation: 'The coefficients are 2 for Al and 3 for $Cl_{2}$, giving a mole ratio of 2:3. This means 2 moles of Al react with every 3 moles of $Cl_{2}$.'
          },
          {
            question: 'Given $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$, how many moles of $O_{2}$ are needed to react with 3.0 mol $CH_{4}$?',
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
            question: 'Given $4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3$, how many moles of $Fe_{2}O_{3}$ are produced from 2.0 mol Fe?',
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

**1)** How many moles of $O_{2}$ are needed to react with 5.0 mol $C_{2}H_{6}$? (to 3 significant figures)

**2)** How many moles of $CO_{2}$ are produced from 5.0 mol $C_{2}H_{6}$? (to 3 significant figures)

**3)** How many moles of $H_{2}O$ are produced from 3.5 mol $O_{2}$? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17.5', '10.0', '3.0'],
        hint1: 'Ratio: $\\frac{7 \\text{ mol O}_2}{2 \\text{ mol C}_2\\text{H}_6}$. Multiply $5.0 \\times 7/2$.',
        hint2: 'Ratio: $\\frac{4 \\text{ mol CO}_2}{2 \\text{ mol C}_2\\text{H}_6}$. Multiply $5.0 \\times 4/2$.',
        hint3: 'Ratio: $\\frac{6 \\text{ mol H}_2\\text{O}}{7 \\text{ mol O}_2}$. Multiply $3.5 \\times 6/7$.',
        explanation: '1) $5.0 \\times 7/2 = 17.5$ mol $O_{2}$. 2) $5.0 \\times 4/2 = 10.0$ mol $CO_{2}$. 3) $3.5 \\times 6/7 = 3.0$ mol $H_{2}O$.'
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
            question: 'Given $2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$, how many moles of $O_{2}$ are produced from 0.50 mol $KClO_{3}$?',
            options: [
              '0.33 mol',
              '0.50 mol',
              '0.75 mol',
              '1.50 mol'
            ],
            correctAnswer: 2,
            explanation: '$\\text{mol O}_2 = 0.50 \\text{ mol KClO}_3 \\times \\frac{3 \\text{ mol O}_2}{2 \\text{ mol KClO}_3} = 0.75$ mol $O_{2}$.'
          },
          {
            question: 'In the Haber process ($\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$), how many moles of $H_{2}$ are consumed to produce 8.0 mol $NH_{3}$?',
            options: [
              '4.0 mol',
              '8.0 mol',
              '12.0 mol',
              '16.0 mol'
            ],
            correctAnswer: 2,
            explanation: '$\\text{mol H}_2 = 8.0 \\text{ mol NH}_3 \\times \\frac{3 \\text{ mol H}_2}{2 \\text{ mol NH}_3} = 12.0$ mol $H_{2}$.'
          }
        ]
      }
    }
  ]
}
