export const chemEnthalpyCalorimetryPart6Data = {
  topicSlug: 'enthalpy-calorimetry',
  sections: [
    {
      id: 'eh6-intro',
      type: 'text' as const,
      content: `# 🏗️ Standard Enthalpies of Formation

**Part 6 of 7 — The Master Equation**

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
      id: 'eh6-definition',
      type: 'text' as const,
      content: `
## 🌡️ Standard Enthalpy of Formation ($\\Delta H°_f$)

The enthalpy change when **one mole** of a compound is formed from its **elements** in their **standard states**.


---

### Examples

$$\\text{C}(s, \\text{graphite}) + \\text{O}_2(g) \\rightarrow \\text{CO}_2(g) \\quad \\Delta H°_f = -393.5 \\text{ kJ/mol}$$

$$\\text{H}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\rightarrow \\text{H}_2\\text{O}(l) \\quad \\Delta H°_f = -285.8 \\text{ kJ/mol}$$

$$\\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g) \\rightarrow \\text{NH}_3(g) \\quad \\Delta H°_f = -45.9 \\text{ kJ/mol}$$


---

### Critical Rule

> 🔑 **AP Must-Know:** $\\Delta H°_f$ of any element in its standard state = 0. This is the #1 rule for formation enthalpy calculations.

| Element | Standard State | $\\Delta H°_f$ |
|---------|---------------|---------------|
| $\\text{O}_2(g)$ | Standard | 0 kJ/mol |
| $\\text{N}_2(g)$ | Standard | 0 kJ/mol |
| $\\text{C}(s, \\text{graphite})$ | Standard | 0 kJ/mol |
| $\\text{Fe}(s)$ | Standard | 0 kJ/mol |
| $\\text{Br}_2(l)$ | Standard | 0 kJ/mol |

This makes sense: an element doesn\'t change to form itself!
      `
    },
    {
      id: 'eh6-master-equation',
      type: 'text' as const,
      content: `
## 📌 The Master Equation

$$\\boxed{\\Delta H°_{\\text{rxn}} = \\sum n \\cdot \\Delta H°_f(\\text{products}) - \\sum m \\cdot \\Delta H°_f(\\text{reactants})}$$

where $n$ and $m$ are the stoichiometric coefficients.


---

### How to Use It

1. Look up $\\Delta H°_f$ for every compound in the reaction
2. Remember: $\\Delta H°_f = 0$ for elements in their standard states
3. Multiply each $\\Delta H°_f$ by its coefficient
4. Subtract the sum of reactants from the sum of products


---

### Worked Example

Calculate $\\Delta H°_{\\text{rxn}}$ for: $\\text{CH}_4(g) + 2\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)$

| Substance | $\\Delta H°_f$ (kJ/mol) | Coefficient |
|-----------|----------------------|-------------|
| $\\text{CH}_4(g)$ | $-74.8$ | 1 |
| $\\text{O}_2(g)$ | $0$ | 2 |
| $\\text{CO}_2(g)$ | $-393.5$ | 1 |
| $\\text{H}_2\\text{O}(l)$ | $-285.8$ | 2 |

$$\\Delta H°_{\\text{rxn}} = [(-393.5) + 2(-285.8)] - [(-74.8) + 2(0)]$$
$$= [-393.5 - 571.6] - [-74.8]$$
$$= -965.1 + 74.8 = -890.3 \\text{ kJ}$$
      `
    },
    {
      id: 'eh6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Formation Enthalpy Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\Delta H°_f$ for O₂(g) is:',
            options: [
              '−249.2 kJ/mol',
              '+249.2 kJ/mol',
              '0 kJ/mol',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: '$\\text{O}_2(g)$ is oxygen in its standard state. The $\\Delta H°_f$ of any element in its standard state is zero by definition.'
          },
          {
            question: 'The formation reaction for H₂O(l) is:',
            options: [
              '2H(g) + O(g) → H₂O(l)',
              'H₂O(g) → H₂O(l)',
              'H₂(g) + ½O₂(g) → H₂O(l)',
              'H₂(g) + O₂(g) → H₂O₂(l)'
            ],
            correctAnswer: 2,
            explanation: 'A formation reaction starts with elements in their standard states and produces exactly one mole of the compound. H₂(g) and O₂(g) are the standard states of hydrogen and oxygen.'
          },
          {
            question: 'Why is the formula "products minus reactants"?',
            options: [
              'Because products always have more energy',
              'It is an arbitrary convention',
              'Because ΔH = H_final − H_initial, and products are the final state',
              'Because reactants don\'t have enthalpy'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta H = H_{\\text{products}} - H_{\\text{reactants}} = H_{\\text{final}} - H_{\\text{initial}}$. Products are the final state, so they come first in the subtraction.'
          }
        ]
      }
    },
    {
      id: 'eh6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Formation Enthalpy Calculations** 🧮

> **Given:** 

| Substance | $\\Delta H°_f$ (kJ/mol) |
|---|---|
| $\\text{CO}_2(g)$ | $-393.5$ |
| $\\text{H}_2\\text{O}(l)$ | $-285.8$ |
| $\\text{C}_2\\text{H}_6(g)$ | $-84.7$ |
| $\\text{NH}_3(g)$ | $-45.9$ |
| $\\text{NO}(g)$ | $+90.3$ |
| $\\text{O}_2, \\text{N}_2, \\text{H}_2$ | $0$ |

**1)** Calculate $\\Delta H°_{\\text{rxn}}$ for: $\\text{C}_2\\text{H}_6(g) + \\frac{7}{2}\\text{O}_2(g) \\rightarrow 2\\text{CO}_2(g) + 3\\text{H}_2\\text{O}(l)$ (in kJ, to 3 significant figures)

**2)** Calculate $\\Delta H°_{\\text{rxn}}$ for: $4\\text{NH}_3(g) + 5\\text{O}_2(g) \\rightarrow 4\\text{NO}(g) + 6\\text{H}_2\\text{O}(l)$ (in kJ, to 3 significant figures)
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['-1559.7', '-1170.0'],
        hint1: '$[2(-393.5) + 3(-285.8)] - [(-84.7) + 0]$',
        hint2: '$[4(90.3) + 6(-285.8)] - [4(-45.9) + 0]$',
        explanation: '1) $[2(-393.5) + 3(-285.8)] - [-84.7] = [-787.0 - 857.4] - [-84.7] = -1644.4 + 84.7 = -1559.7$ kJ. 2) $[4(90.3) + 6(-285.8)] - [4(-45.9)] = [361.2 - 1714.8] - [-183.6] = -1353.6 + 183.6 = -1170.0$ kJ.'
      }
    },
    {
      id: 'eh6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Formation Enthalpy Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\Delta H°_f$ for diamond, C(s, diamond), is',
            options: ['zero', 'positive (not zero)', 'negative (not zero)', 'undefined']
          },
          {
            label: 'A formation reaction always produces exactly',
            options: ['one gram', 'one mole', 'one liter', 'one molecule']
          },
          {
            label: 'If all $\\Delta H°_f$ (products) are more negative than $\\Delta H°_f$ (reactants), the reaction is',
            options: ['endothermic', 'exothermic', 'thermoneutral', 'impossible']
          },
          {
            label: 'The standard state of mercury at 25°C is',
            options: ['Hg(s)', 'Hg(l)', 'Hg(g)', 'Hg₂(l)']
          }
        ],
        correctAnswers: ['positive (not zero)', 'one mole', 'exothermic', 'Hg(l)'],
        hint1: 'Diamond is NOT the standard state of carbon — graphite is. Forming diamond from graphite requires energy.',
        hint2: 'By definition, formation reactions produce ONE MOLE of product.',
        hint3: 'Products minus reactants: if products are more negative, the result is negative (exothermic).',
        explanation: 'Diamond is not the standard state of carbon (graphite is), so $\\Delta H°_f$(diamond) > 0. Formation reactions produce exactly 1 mol of product. More negative products means exothermic overall. Mercury is liquid at standard conditions.'
      }
    },
    {
      id: 'eh6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Formation Enthalpies** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a valid formation reaction?',
            options: [
              '2C(s) + 3H₂(g) → C₂H₆(g)',
              'C₂H₆(g) → 2C(s) + 3H₂(g)',
              'C(s) + 3H(g) → CH₃(g)',
              '2C(s) + 3H₂(g) → 2CH₃(g)'
            ],
            correctAnswer: 0,
            explanation: 'A formation reaction must: (1) start with elements in standard states (C(s,graphite) and H₂(g) ✓), (2) produce exactly 1 mol of compound (1 mol C₂H₆ ✓). Option B is the reverse, C uses atoms not molecules, D produces 2 mol.'
          },
          {
            question: 'For the reaction 2Al(s) + Fe₂O₃(s) → Al₂O₃(s) + 2Fe(s), given $\\Delta H°_f$: Al₂O₃ = −1675.7, Fe₂O₃ = −824.2, Al = 0, Fe = 0, $\\Delta H°_{\\text{rxn}}$ is:',
            options: [
              '−851.5 kJ',
              '+851.5 kJ',
              '−2499.9 kJ',
              '+2499.9 kJ'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta H° = [(-1675.7) + 0] - [0 + (-824.2)] = -1675.7 + 824.2 = -851.5$ kJ. This is the thermite reaction — highly exothermic!'
          }
        ]
      }
    }
  ]
}
