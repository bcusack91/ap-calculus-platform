export const chemEquilibriumConstantsPart3Data = {
  topicSlug: 'equilibrium-constants-expressions',
  sections: [
    {
      id: 'ece3-intro',
      type: 'text' as const,
      content: `# 💨 The Pressure Constant $K_p$

**Part 3 of 7 — Writing and Calculating $K_p$ from Partial Pressures**

---

### Topics in This Part

| Section |
|---------|
| 💨 $K_p$ — The Pressure-Based Constant |
| Example |
| Solids and Liquids in $K_p$ |
| 🧮 Calculating $K_p$ from Partial Pressures |
| Partial Pressures from Mole Fractions |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 3
- Understanding the core concepts covered in Part 3
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ece3-kp-definition',
      type: 'text' as const,
      content: `
## 💨 $K_p$ — The Pressure-Based Constant

For gas-phase reactions, we can use partial pressures instead of molar concentrations.

For: $a\\text{A}(g) + b\\text{B}(g) \\rightleftharpoons c\\text{C}(g) + d\\text{D}(g)$

$$\\boxed{K_p = \\frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}}$$

where $P_X$ is the partial pressure of species X in **atm** (for AP Chemistry).


---

### Example

$$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$$

$$K_p = \\frac{(P_{\\text{NH}_3})^2}{(P_{\\text{N}_2})(P_{\\text{H}_2})^3}$$

The same rules apply: products over reactants, coefficients as exponents.


---

### Solids and Liquids in $K_p$

Only **gases** appear in a $K_p$ expression. Pure solids and pure liquids are left out, just as they are in $K_c$.

$$\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g) \\qquad K_p = P_{\\text{CO}_2}$$

> 🔑 **Key Concept:** A question tells you which constant it wants. If it gives partial pressures, write $K_p$; if it gives molar concentrations, write $K_c$. Converting between $K_c$ and $K_p$ is not assessed on the AP exam.
      `
    },
    {
      id: 'ece3-mcq-kp',
      type: 'multiple-choice' as const,
      content: `
**Writing $K_p$ Expressions — Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is the correct $K_p$ expression for $\\text{2 SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons \\text{2 SO}_3(g)$?',
            options: [
              '$K_p = \\frac{(P_{\\text{SO}_3})^2}{(P_{\\text{SO}_2})^2(P_{\\text{O}_2})}$',
              '$K_p = \\frac{2P_{\\text{SO}_3}}{2P_{\\text{SO}_2} + P_{\\text{O}_2}}$',
              '$K_p = \\frac{(P_{\\text{SO}_2})^2(P_{\\text{O}_2})}{(P_{\\text{SO}_3})^2}$',
              '$K_p = \\frac{P_{\\text{SO}_3}}{(P_{\\text{SO}_2})(P_{\\text{O}_2})}$'
            ],
            correctAnswer: 0,
            explanation: 'Products go in the numerator and reactants in the denominator, each partial pressure raised to its coefficient. Coefficients are exponents, not multipliers, and reactant pressures are multiplied, not added.'
          },
          {
            question: 'What is the $K_p$ expression for $\\text{C}(s) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}(g) + \\text{H}_2(g)$?',
            options: [
              '$K_p = \\frac{(P_{\\text{CO}})(P_{\\text{H}_2})}{(P_{\\text{C}})(P_{\\text{H}_2\\text{O}})}$',
              '$K_p = \\frac{(P_{\\text{CO}})(P_{\\text{H}_2})}{P_{\\text{H}_2\\text{O}}}$',
              '$K_p = \\frac{P_{\\text{H}_2\\text{O}}}{(P_{\\text{CO}})(P_{\\text{H}_2})}$',
              '$K_p = (P_{\\text{CO}})(P_{\\text{H}_2})$'
            ],
            correctAnswer: 1,
            explanation: 'Solid carbon is omitted because a pure solid has no partial pressure. Water here is a gas, so it stays in the denominator. Inverting the fraction gives the expression for the reverse reaction.'
          },
          {
            question: 'For which reaction does $K_p$ depend on the pressure of only ONE species?',
            options: [
              '$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$',
              '$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$',
              '$\\text{NH}_4\\text{Cl}(s) \\rightleftharpoons \\text{NH}_3(g) + \\text{HCl}(g)$',
              '$\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$'
            ],
            correctAnswer: 3,
            explanation: 'Both $CaCO_{3}$ and CaO are solids, so $K_p = P_{\\text{CO}_2}$ alone. The $NH_{4}Cl$ decomposition has two gaseous products, giving $K_p = (P_{\\text{NH}_3})(P_{\\text{HCl}})$, and the other two reactions involve three gases each.'
          }
        ]
      }
    },
    {
      id: 'ece3-conversion',
      type: 'text' as const,
      content: `
## 🧮 Calculating $K_p$ from Partial Pressures

To find $K_p$, substitute the **equilibrium** partial pressures (in atm) into the expression.


---

### Example 1

> **Problem:** For $2\\,\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$ at a certain temperature, the equilibrium partial pressures are $P_{\\text{NO}_2} = 0.40$ atm and $P_{\\text{N}_2\\text{O}_4} = 0.80$ atm. Find $K_p$.

> **Solution:**

$$K_p = \\frac{P_{\\text{N}_2\\text{O}_4}}{(P_{\\text{NO}_2})^2} = \\frac{0.80}{(0.40)^2} = \\frac{0.80}{0.16} = 5.0$$


---

### Partial Pressures from Mole Fractions

Sometimes a question gives the **total pressure** and the **mole fraction** of each gas. Use Dalton's law:

$$\\boxed{P_A = \\chi_A P_{\\text{total}}}$$

> **Problem:** At equilibrium, a mixture for $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$ has a total pressure of 2.00 atm, with mole fractions $\\chi_{\\text{N}_2} = 0.25$, $\\chi_{\\text{H}_2} = 0.50$, and $\\chi_{\\text{NH}_3} = 0.25$. Find $K_p$.

> **Solution:**

| Gas | $\\chi$ | $P = \\chi P_{\\text{total}}$ |
|-----|---------|-------------------|
| $N_{2}$ | 0.25 | 0.50 atm |
| $H_{2}$ | 0.50 | 1.00 atm |
| $NH_{3}$ | 0.25 | 0.50 atm |

$$K_p = \\frac{(0.50)^2}{(0.50)(1.00)^3} = \\frac{0.25}{0.50} = 0.50$$

> ⚠️ **Warning:** Always use **equilibrium** pressures. Initial pressures go into an ICE table first, not directly into $K_p$.
      `
    },
    {
      id: 'ece3-input-calculation',
      type: 'input-boxes' as const,
      content: `
**Calculate $K_p$** 🧮

Use the equilibrium partial pressures given (all in atm).

**1)** $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$: $P_{\\text{PCl}_5} = 0.50$, $P_{\\text{PCl}_3} = 0.20$, $P_{\\text{Cl}_2} = 0.30$ (to 2 significant figures)

**2)** $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$: $P_{\\text{CO}_2} = 0.236$ (to 3 significant figures)

**3)** $\\text{2 SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons \\text{2 SO}_3(g)$: $P_{\\text{SO}_2} = 0.20$, $P_{\\text{O}_2} = 0.10$, $P_{\\text{SO}_3} = 0.40$ (to 2 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.12', '0.236', '40'],
        hint1: '$K_p = (P_{\\text{PCl}_3})(P_{\\text{Cl}_2})/P_{\\text{PCl}_5}$.',
        hint2: 'The solids drop out, so $K_p$ is just the $CO_{2}$ pressure.',
        hint3: '$K_p = (P_{\\text{SO}_3})^2/[(P_{\\text{SO}_2})^2(P_{\\text{O}_2})]$.',
        explanation: '1) $K_p = (0.20)(0.30)/0.50 = 0.12$. 2) $K_p = P_{\\text{CO}_2} = 0.236$. 3) $K_p = (0.40)^2/[(0.20)^2(0.10)] = 0.16/0.0040 = 40$.'
      }
    },
    {
      id: 'ece3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — $K_p$** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$K_p$ uses _______ instead of molar concentrations',
            options: ['mole fractions', 'partial pressures', 'total pressure', 'molar masses']
          },
          {
            label: 'In a $K_p$ expression, pure solids and liquids are',
            options: ['included at 1 atm', 'left out', 'included as their masses', 'placed in the numerator']
          },
          {
            label: 'A gas with mole fraction 0.30 in a mixture at 5.0 atm total has a partial pressure of',
            options: ['0.30 atm', '1.5 atm', '5.0 atm', '17 atm']
          },
          {
            label: '$K_p$ is only used for equilibria involving',
            options: ['aqueous species', 'gaseous species', 'solid species', 'all phases']
          }
        ],
        correctAnswers: ['partial pressures', 'left out', '1.5 atm', 'gaseous species'],
        hint1: '$K_p$ stands for pressure.',
        hint2: 'A pure solid or liquid has no partial pressure.',
        hint3: '$P_A = \\chi_A P_{\\text{total}}$.',
        explanation: '$K_p$ uses partial pressures and applies to gas-phase species. Pure solids and liquids are left out. $P = (0.30)(5.0) = 1.5$ atm.'
      }
    },
    {
      id: 'ece3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Check — $K_p$** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\,\\text{CO}(g)$, the equilibrium pressures are $P_{\\text{CO}_2} = 0.40$ atm and $P_{\\text{CO}} = 0.80$ atm. What is $K_p$?',
            options: [
              '$K_p = 0.63$',
              '$K_p = 1.6$',
              '$K_p = 2.0$',
              '$K_p = 0.26$'
            ],
            correctAnswer: 1,
            explanation: 'Solid carbon is left out: $K_p = (P_{\\text{CO}})^2/P_{\\text{CO}_2} = (0.80)^2/0.40 = 0.64/0.40 = 1.6$. Forgetting the square gives 2.0, inverting the ratio gives 0.63, and multiplying instead of dividing gives 0.26.'
          },
          {
            question: 'At equilibrium, a mixture of $\\text{H}_2$, $\\text{I}_2$, and HI has a total pressure of 4.0 atm with $\\chi_{\\text{H}_2} = 0.10$, $\\chi_{\\text{I}_2} = 0.10$, and $\\chi_{\\text{HI}} = 0.80$. What is $K_p$ for $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$?',
            options: [
              '$K_p = 8.0$',
              '$K_p = 20$',
              '$K_p = 64$',
              '$K_p = 0.016$'
            ],
            correctAnswer: 2,
            explanation: 'Partial pressures: $P_{\\text{H}_2} = P_{\\text{I}_2} = 0.40$ atm and $P_{\\text{HI}} = 3.2$ atm. $K_p = (3.2)^2/[(0.40)(0.40)] = 10.24/0.16 = 64$. Forgetting to square $P_{\\text{HI}}$ gives 20, dividing by only one reactant pressure gives 8.0, and inverting the expression gives 0.016.'
          }
        ]
      }
    }
  ]
}
