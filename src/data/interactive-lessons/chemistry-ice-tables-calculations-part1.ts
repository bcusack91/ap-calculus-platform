export const chemIceTablesCalculationsPart1Data = {
  topicSlug: 'ice-tables-calculations',
  sections: [
    {
      id: 'ic1-intro',
      type: 'text' as const,
      content: `# 🧊 Setting Up ICE Tables

**Part 1 of 7 — Initial, Change, Equilibrium**

---

### Topics in This Part

| Section |
|---------|
| 🏗️ The ICE Table Structure |
| 🧪 Worked Example |
| Substitute into K expression: |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ic1-structure',
      type: 'text' as const,
      content: `
## 🏗️ The ICE Table Structure

For the reaction: $aA + bB \\rightleftharpoons cC + dD$

|  | $A$ | $B$ | $C$ | $D$ |
|--|-----|-----|-----|-----|
| **I** (Initial) | $[A]_0$ | $[B]_0$ | $[C]_0$ | $[D]_0$ |
| **C** (Change) | $-ax$ | $-bx$ | $+cx$ | $+dx$ |
| **E** (Equilibrium) | $[A]_0 - ax$ | $[B]_0 - bx$ | $[C]_0 + cx$ | $[D]_0 + dx$ |


---

> 🔑 **Key Rules:**
> 1. **I row** — Fill in starting concentrations (often products start at 0)
> 2. **C row** — Use the variable $x$ with stoichiometric ratios: reactants decrease (negative sign), products increase (positive sign), coefficients become multipliers of $x$
> 3. **E row** — I + C for each column
> 4. Substitute the E row into the $K$ expression and solve for $x$


---

> ⚠️ **Warning:** The signs in the C row depend on the **direction of shift**:
> - If the reaction shifts right: reactants lose ($-$), products gain ($+$)
> - If the reaction shifts left: reactants gain ($+$), products lose ($-$)


---

> 💡 **Tip:** When products start at 0, their equilibrium expressions simplify to just the stoichiometric coefficient times $x$ (e.g., $0 + 2x = 2x$).
      `
    },
    {
      id: 'ic1-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example

> **Problem:** For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$ with $K_c = 50.0$, find the equilibrium concentrations given $[\\text{H}_2] = 1.00$ M, $[\\text{I}_2] = 1.00$ M, $[\\text{HI}] = 0$ M.

> **Solution:** Since we start with no products and $K > 0$, the reaction shifts **right**.

|  | $H_{2}$ | $I_{2}$ | 2 HI |
|--|-----|-----|------|
| **I** | 1.00 | 1.00 | 0 |
| **C** | $-x$ | $-x$ | $+2x$ |
| **E** | $1.00 - x$ | $1.00 - x$ | $2x$ |


---

### Substitute into K expression:

$$\\boxed{K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]}} = \\frac{(2x)^2}{(1.00 - x)(1.00 - x)} = \\frac{4x^2}{(1.00 - x)^2}$$

$$50.0 = \\frac{4x^2}{(1.00 - x)^2}$$

Take the square root of both sides:

$$\\sqrt{50.0} = \\frac{2x}{1.00 - x} \\implies 7.07 = \\frac{2x}{1.00 - x}$$

$$7.07(1.00 - x) = 2x \\implies 7.07 - 7.07x = 2x$$

$$7.07 = 9.07x \\implies x = 0.780$$

**Equilibrium concentrations:**
- $[\\text{H}_2] = 1.00 - 0.780 = 0.220$ M
- $[\\text{I}_2] = 1.00 - 0.780 = 0.220$ M
- $[\\text{HI}] = 2(0.780) = 1.560$ M
      `
    },
    {
      id: 'ic1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**ICE Table Setup** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an ICE table, what does the "C" row represent?',
            options: [
              'Concentration at equilibrium',
              'The change in concentration as the system reaches equilibrium',
              'The catalyst concentration',
              'The constant temperature'
            ],
            correctAnswer: 1,
            explanation: 'C stands for Change — it represents how much each concentration changes from the initial state to the equilibrium state. Changes are expressed in terms of the variable $x$.'
          },
          {
            question: 'For $A \\rightleftharpoons 3B$, if the change in [A] is $-x$, the change in [B] is:',
            options: [
              '$-x$',
              '$+x$',
              '$+3x$',
              '$-3x$'
            ],
            correctAnswer: 2,
            explanation: 'The stoichiometric coefficient of B is 3. For every 1 mol of A consumed, 3 mol of B are produced. If [A] changes by $-x$, then [B] changes by $+3x$.'
          },
          {
            question: 'When setting up an ICE table, how do you determine the sign of the change row?',
            options: [
              'Reactants always increase, products always decrease',
              'It depends on which direction the reaction shifts',
              'All changes are positive',
              'It depends on the value of K only'
            ],
            correctAnswer: 1,
            explanation: 'The sign depends on the direction of shift. If $Q < K$, the reaction shifts right (reactants decrease, products increase). If $Q > K$, the reaction shifts left (reactants increase, products decrease).'
          }
        ]
      }
    },
    {
      id: 'ic1-setup-practice',
      type: 'input-boxes' as const,
      content: `
**ICE Table Setup Practice** 🧮

For: $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$

Initial concentrations: $[\\text{N}_2\\text{O}_4] = 0.50$ M, $[\\text{NO}_2] = 0$ M

**1)** If the change in $[\\text{N}_2\\text{O}_4]$ is $-x$, what is the change in $[\\text{NO}_2]$? (Enter with sign, e.g., "+2x")

**2)** What is the equilibrium expression for $[\\text{N}_2\\text{O}_4]$ in terms of x? (Enter, e.g., "0.50 - x")

**3)** What is the equilibrium expression for $[\\text{NO}_2]$ in terms of x? (Enter, e.g., "2x")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['+2x', '0.50 - x', '2x'],
        hint1: 'The coefficient of $NO_{2}$ is 2, so the change is $+2x$ (product increases).',
        hint2: 'Equilibrium = Initial + Change: $0.50 + (-x) = 0.50 - x$.',
        hint3: 'Equilibrium = Initial + Change: $0 + 2x = 2x$.',
        explanation: '1) $NO_{2}$ has coefficient 2 and is a product → $+2x$. 2) $[\\text{N}_2\\text{O}_4]_{eq} = 0.50 - x$. 3) $[\\text{NO}_2]_{eq} = 0 + 2x = 2x$.'
      }
    },
    {
      id: 'ic1-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**ICE Table Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The I row contains',
            options: ['equilibrium concentrations', 'initial concentrations', 'changes in concentration', 'rate constants']
          },
          {
            label: 'In the C row, reactant changes are',
            options: ['always positive', 'always negative when shifting right', 'always zero', 'equal to K']
          },
          {
            label: 'The stoichiometric coefficients appear in the C row as',
            options: ['exponents of x', 'multipliers of x', 'additions to x', 'divisors of x']
          },
          {
            label: 'The E row equals',
            options: ['I row only', 'C row only', 'I + C', 'I × C']
          }
        ],
        correctAnswers: [
          'initial concentrations',
          'always negative when shifting right',
          'multipliers of x',
          'I + C'
        ],
        hint1: 'I = Initial. These are the starting values before the reaction shifts.',
        hint2: 'When shifting right, reactants are consumed (negative change).',
        hint3: 'E = I + C for each species.',
        explanation: 'I row: initial concentrations. C row: reactants decrease ($-$) when shifting right; coefficients are multipliers of $x$. E row = I + C.'
      }
    },
    {
      id: 'ic1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — ICE Table Setup** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $2\\,\\text{A}(g) \\rightleftharpoons \\text{B}(g) + 3\\,\\text{C}(g)$, if [A] changes by $-2x$, what are the changes in [B] and [C]?',
            options: [
              '[B]: $+x$, [C]: $+3x$',
              '[B]: $+2x$, [C]: $+3x$',
              '[B]: $-x$, [C]: $-3x$',
              '[B]: $+x$, [C]: $+x$'
            ],
            correctAnswer: 0,
            explanation: 'If 2 mol A is consumed ($-2x$), then by stoichiometry: 1 mol B is produced ($+x$) and 3 mol C is produced ($+3x$).'
          },
          {
            question: 'After solving an ICE table, you find $x = 0.30$ for the reaction $\\text{A} \\rightleftharpoons \\text{B}$, with $[\\text{A}]_0 = 0.50$ M. What is $[\\text{A}]$ at equilibrium?',
            options: [
              '$0.80$ M',
              '$0.30$ M',
              '$0.20$ M',
              '$0.50$ M'
            ],
            correctAnswer: 2,
            explanation: '$[\\text{A}]_{eq} = [\\text{A}]_0 - x = 0.50 - 0.30 = 0.20$ M.'
          }
        ]
      }
    }
  ]
}
