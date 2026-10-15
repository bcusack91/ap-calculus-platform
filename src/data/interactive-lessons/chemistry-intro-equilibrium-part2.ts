export const chemIntroEquilibriumPart2Data = {
  topicSlug: 'intro-equilibrium',
  sections: [
    {
      id: 'ie2-intro',
      type: 'text' as const,
      content: `# ⚖️ Equilibrium Expressions: $K_c$ and $K_p$

**Part 2 of 7 — Writing and Using Equilibrium Constants**

---

### Topics in This Part

| Section |
|---------|
| ⚖️ The Equilibrium Constant $K_c$ |
| Rules for Writing $K_c$ |
| Example |
| ⚖️ The Equilibrium Constant $K_p$ |
| 🧪 Worked Example: Calculating $K_p$ |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ie2-kc-expression',
      type: 'text' as const,
      content: `
## ⚖️ The Equilibrium Constant $K_c$

For the general reaction:

$$aA + bB \\rightleftharpoons cC + dD$$

The equilibrium constant expression is:

$$\\boxed{K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}}$$


---

### Rules for Writing $K_c$

1. **Products** go in the numerator, **reactants** in the denominator
2. Each concentration is raised to the power of its **stoichiometric coefficient**
3. $K_c$ uses **molar concentrations** (mol/L)
4. $K_c$ is dimensionless by convention on the AP exam

> 🔑 **Key Concept:** Stoichiometric coefficients become **exponents**, not multipliers, in the equilibrium expression.


---

### Example

$$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$$

$$K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$$
      `
    },
    {
      id: 'ie2-kp-expression',
      type: 'text' as const,
      content: `
## ⚖️ The Equilibrium Constant $K_p$

For gaseous reactions, we can use partial pressures instead of concentrations:

$$\\boxed{K_p = \\frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}}$$


---

Only gases appear, and each partial pressure (in atm) is raised to its coefficient.


---

### Example

$$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$$

$$K_p = \\frac{(P_{\\text{NH}_3})^2}{(P_{\\text{N}_2})(P_{\\text{H}_2})^3}$$


---

### Which Constant Should You Use?

| The Problem Gives You | Write |
|-----------------------|-------|
| Molar concentrations, [X] | $K_c$ |
| Partial pressures, $P_X$ | $K_p$ |

> 💡 **Tip:** The AP exam always makes clear which constant it wants. You will not be asked to convert a $K_c$ value into a $K_p$ value.
      `
    },
    {
      id: 'ie2-writing-expressions',
      type: 'multiple-choice' as const,
      content: `
**Writing Equilibrium Expressions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the correct $K_c$ expression for: $2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{SO}_3(g)$?',
            options: [
              '$K_c = \\frac{[\\text{SO}_3]}{[\\text{SO}_2][\\text{O}_2]}$',
              '$K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2[\\text{O}_2]}$',
              '$K_c = \\frac{[\\text{SO}_2]^2[\\text{O}_2]}{[\\text{SO}_3]^2}$',
              '$K_c = \\frac{2[\\text{SO}_3]}{2[\\text{SO}_2][\\text{O}_2]}$'
            ],
            correctAnswer: 1,
            explanation: 'Products over reactants, each raised to their stoichiometric coefficient: $K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2[\\text{O}_2]}$. The coefficients become exponents, NOT multipliers.'
          },
          {
            question: 'What is the $K_p$ expression for $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$?',
            options: [
              '$K_p = \\frac{P_{\\text{PCl}_5}}{(P_{\\text{PCl}_3})(P_{\\text{Cl}_2})}$',
              '$K_p = \\frac{(P_{\\text{PCl}_3})(P_{\\text{Cl}_2})}{P_{\\text{PCl}_5}}$',
              '$K_p = \\frac{P_{\\text{PCl}_3} + P_{\\text{Cl}_2}}{P_{\\text{PCl}_5}}$',
              '$K_p = (P_{\\text{PCl}_3})(P_{\\text{Cl}_2})(P_{\\text{PCl}_5})$'
            ],
            correctAnswer: 1,
            explanation: 'Product partial pressures are multiplied together in the numerator and the reactant partial pressure goes in the denominator. Pressures are never added in an equilibrium expression, and the flipped fraction is the expression for the reverse reaction.'
          },
          {
            question: 'For $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$ at equilibrium, $P_{\\text{PCl}_5} = 0.40$ atm and $P_{\\text{PCl}_3} = P_{\\text{Cl}_2} = 0.20$ atm. What is $K_p$?',
            options: [
              '$0.10$',
              '$0.50$',
              '$1.0$',
              '$10$'
            ],
            correctAnswer: 0,
            explanation: '$K_p = (0.20)(0.20)/0.40 = 0.040/0.40 = 0.10$. Adding the product pressures gives $0.40/0.40 = 1.0$, using only one product gives 0.50, and inverting gives 10.'
          }
        ]
      }
    },
    {
      id: 'ie2-calculations',
      type: 'input-boxes' as const,
      content: `
**Calculating $K_c$** 🧮

For the reaction: $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$

At equilibrium: $[\\text{H}_2] = 0.10$ M, $[\\text{I}_2] = 0.20$ M, $[\\text{HI}] = 0.40$ M

**1)** Calculate $K_c$. (Enter as a whole number)

**2)** What is $K_c$ for the reverse reaction, $2\\,\\text{HI}(g) \\rightleftharpoons \\text{H}_2(g) + \\text{I}_2(g)$? (to 3 significant figures)

**3)** In a different experiment, the equilibrium partial pressures are $P_{\\text{H}_2} = 0.50$ atm, $P_{\\text{I}_2} = 0.50$ atm, and $P_{\\text{HI}} = 2.0$ atm. What is $K_p$? (Enter as a whole number)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '0.125', '16'],
        hint1: '$K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = \\frac{(0.40)^2}{(0.10)(0.20)}$',
        hint2: 'Reversing a reaction inverts $K$.',
        hint3: '$K_p = \\frac{(P_{\\text{HI}})^2}{(P_{\\text{H}_2})(P_{\\text{I}_2})}$',
        explanation: '1) $K_c = \\frac{(0.40)^2}{(0.10)(0.20)} = \\frac{0.16}{0.02} = 8$. 2) $K_{\\text{rev}} = 1/8 = 0.125$. 3) $K_p = \\frac{(2.0)^2}{(0.50)(0.50)} = \\frac{4.0}{0.25} = 16$.'
      }
    },
    {
      id: 'ie2-kp-conversion',
      type: 'text' as const,
      content: `
## 🧪 Worked Example: Calculating $K_p$

> **Problem:** For $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$ at 400 K, an equilibrium mixture has $P_{\\text{N}_2} = 2.0$ atm, $P_{\\text{H}_2} = 1.0$ atm, and $P_{\\text{NH}_3} = 0.40$ atm. Find $K_p$.

> **Solution:**

**Step 1:** Write the expression with exponents from the coefficients.

$$K_p = \\frac{(P_{\\text{NH}_3})^2}{(P_{\\text{N}_2})(P_{\\text{H}_2})^3}$$

**Step 2:** Substitute equilibrium partial pressures.

$$K_p = \\frac{(0.40)^2}{(2.0)(1.0)^3} = \\frac{0.16}{2.0} = 0.080$$

**Step 3:** Interpret. $K_p < 1$, so at 400 K the equilibrium mixture favors the reactants.

> ⚠️ **Warning:** Use partial pressures for $K_p$ and molar concentrations for $K_c$. Never mix the two in one expression.
      `
    },
    {
      id: 'ie2-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**$K_c$ vs $K_p$ Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$K_c$ uses concentrations in units of',
            options: ['mol/L', 'atm', 'g/L', 'Pascals']
          },
          {
            label: '$K_p$ is used for reactions involving',
            options: ['only aqueous species', 'only gases', 'only solids', 'only liquids']
          },
          {
            label: 'In a $K_p$ expression, partial pressures are measured in',
            options: ['atm', 'mol/L', 'grams', 'kelvins']
          },
          {
            label: 'Stoichiometric coefficients appear in the $K$ expression as',
            options: ['multipliers', 'exponents', 'subscripts', 'denominators']
          }
        ],
        correctAnswers: [
          'mol/L',
          'only gases',
          'atm',
          'exponents'
        ],
        hint1: '$K_c$ stands for K-concentration — uses molarity.',
        hint2: 'Partial pressures are meaningful for gases.',
        hint3: 'On the AP exam, partial pressures in $K_p$ are expressed in atmospheres.',
        explanation: '$K_c$ uses molarity (mol/L). $K_p$ uses partial pressures, in atm, and applies to gaseous reactions. Coefficients become exponents in the equilibrium expression.'
      }
    },
    {
      id: 'ie2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Equilibrium Expressions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $2\\,\\text{NO}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$, the equilibrium expression is:',
            options: [
              '$K_c = \\frac{[\\text{NO}]^2[\\text{O}_2]}{[\\text{NO}_2]^2}$',
              '$K_c = \\frac{[\\text{NO}_2]^2}{[\\text{NO}]^2[\\text{O}_2]}$',
              '$K_c = \\frac{[\\text{NO}_2]}{[\\text{NO}][\\text{O}_2]}$',
              '$K_c = \\frac{2[\\text{NO}_2]}{2[\\text{NO}] + [\\text{O}_2]}$'
            ],
            correctAnswer: 1,
            explanation: 'Products over reactants with coefficients as exponents: $K_c = \\frac{[\\text{NO}_2]^2}{[\\text{NO}]^2[\\text{O}_2]}$.'
          },
          {
            question: 'For $2\\,\\text{NO}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$ at equilibrium, $P_{\\text{NO}} = 0.20$ atm, $P_{\\text{O}_2} = 0.50$ atm, and $P_{\\text{NO}_2} = 0.40$ atm. What is $K_p$?',
            options: [
              '$4.0$',
              '$8.0$',
              '$0.13$',
              '$1.6$'
            ],
            correctAnswer: 1,
            explanation: '$K_p = (0.40)^2/[(0.20)^2(0.50)] = 0.16/0.020 = 8.0$. Leaving out both squares gives 4.0, squaring only the product pressure gives 1.6, and inverting the expression gives 0.13.'
          }
        ]
      }
    }
  ]
}
