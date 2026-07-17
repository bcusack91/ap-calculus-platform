export const chemEquilibriumConstantsPart2Data = {
  topicSlug: 'equilibrium-constants-expressions',
  sections: [
    {
      id: 'ece2-intro',
      type: 'text' as const,
      content: `# ✍️ Writing Equilibrium Expressions

**Part 2 of 7 — Writing $K$ Expressions**

---

### Topics in This Part

| Section |
|---------|
| ✍️ Rules for Writing $K_c$ Expressions |
| What Goes In and What Stays Out |
| Example 1 |
| Example 2 |
| 📌 Homogeneous vs. Heterogeneous Equilibria |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ece2-rules',
      type: 'text' as const,
      content: `
## ✍️ Rules for Writing $K_c$ Expressions

For the reaction:

$$a\\text{A}(aq) + b\\text{B}(g) \\rightleftharpoons c\\text{C}(aq) + d\\text{D}(g)$$

$$K_c = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}$$


---

### What Goes In and What Stays Out

| Species | Include in $K$? | Why |
|---------|-----------------|-----|
| Gases $(g)$ | ✅ Yes | Concentration varies |
| Aqueous $(aq)$ | ✅ Yes | Concentration varies |
| Pure solids $(s)$ | ❌ No | Activity = 1 (constant density) |
| Pure liquids $(l)$ | ❌ No | Activity = 1 (constant density) |


---

### Example 1

$$\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$$

$$K_c = [\\text{CO}_2]$$

Both $\\text{CaCO}_3$ and $\\text{CaO}$ are **pure solids** — they are omitted from the expression.


---

### Example 2

$$\\text{2 H}_2\\text{O}(l) \\rightleftharpoons \\text{2 H}_2(g) + \\text{O}_2(g)$$

$$K_c = [\\text{H}_2]^2[\\text{O}_2]$$

Water as a pure liquid is omitted.
      `
    },
    {
      id: 'ece2-mcq-expressions',
      type: 'multiple-choice' as const,
      content: `
**Which Expression Is Correct?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$, what is the correct $K_c$ expression?',
            options: [
              '$K_c = \\frac{[\\text{NH}_3]}{[\\text{N}_2][\\text{H}_2]}$',
              '$K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$',
              '$K_c = \\frac{[\\text{N}_2][\\text{H}_2]^3}{[\\text{NH}_3]^2}$',
              '$K_c = \\frac{2[\\text{NH}_3]}{[\\text{N}_2] \\cdot 3[\\text{H}_2]}$'
            ],
            correctAnswer: 1,
            explanation: 'Products over reactants, each raised to its stoichiometric coefficient: $K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$. Coefficients become exponents, not multipliers.'
          },
          {
            question: 'For $\\text{Fe}_2\\text{O}_3(s) + 3\\,\\text{CO}(g) \\rightleftharpoons 2\\,\\text{Fe}(s) + 3\\,\\text{CO}_2(g)$, what is $K_c$?',
            options: [
              '$K_c = \\frac{[\\text{Fe}]^2[\\text{CO}_2]^3}{[\\text{Fe}_2\\text{O}_3][\\text{CO}]^3}$',
              '$K_c = \\frac{[\\text{CO}_2]^3}{[\\text{CO}]^3}$',
              '$K_c = \\frac{[\\text{CO}]^3}{[\\text{CO}_2]^3}$',
              '$K_c = \\frac{[\\text{Fe}]^2}{[\\text{Fe}_2\\text{O}_3]}$'
            ],
            correctAnswer: 1,
            explanation: 'Pure solids ($Fe_{2}O_{3}$ and Fe) are excluded. Only gases remain: $K_c = \\frac{[\\text{CO}_2]^3}{[\\text{CO}]^3}$.'
          },
          {
            question: 'For $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$, what is $K_c$?',
            options: [
              '$K_c = \\frac{[\\text{Ag}^+][\\text{Cl}^-]}{[\\text{AgCl}]}$',
              '$K_c = [\\text{Ag}^+][\\text{Cl}^-]$',
              '$K_c = \\frac{1}{[\\text{Ag}^+][\\text{Cl}^-]}$',
              '$K_c = [\\text{AgCl}]$'
            ],
            correctAnswer: 1,
            explanation: 'AgCl is a pure solid and is excluded. The expression is simply $K_c = [\\text{Ag}^+][\\text{Cl}^-]$. This is actually the solubility product $K_{sp}$!'
          }
        ]
      }
    },
    {
      id: 'ece2-heterogeneous',
      type: 'text' as const,
      content: `
## 📌 Homogeneous vs. Heterogeneous Equilibria

### Homogeneous Equilibrium

All species are in the **same phase**:

$$\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$$

$$K_c = \\frac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]}$$


---

### Heterogeneous Equilibrium

Species are in **different phases** — exclude pure solids and pure liquids:

$$\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\,\\text{CO}(g)$$

$$K_c = \\frac{[\\text{CO}]^2}{[\\text{CO}_2]}$$

The solid carbon is omitted.


---

> 💡 **AP Tip:** The AP exam loves to test whether you know to **exclude** pure solids and liquids. If you see $(s)$ or $(l)$, leave it out of $K$.
      `
    },
    {
      id: 'ece2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Building $K$ Expressions** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a $K_c$ expression, concentrations of products appear in the',
            options: ['numerator', 'denominator', 'exponent', 'subscript']
          },
          {
            label: 'Stoichiometric coefficients become _______ in the $K$ expression',
            options: ['multipliers', 'subscripts', 'exponents', 'denominators']
          },
          {
            label: 'Pure solids and pure liquids are excluded because their activity is',
            options: ['0', '1', 'infinity', 'variable']
          },
          {
            label: 'For $\\text{2 SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons \\text{2 SO}_3(g)$, the exponent on $[\\text{O}_2]$ in $K_c$ is',
            options: ['0', '1', '2', '3']
          }
        ],
        correctAnswers: ['numerator', 'exponents', '1', '1'],
        hint1: 'Products over reactants is the convention.',
        hint2: 'Think about $[\\text{A}]^a$ — the coefficient $a$ goes where?',
        hint3: 'The coefficient on $O_{2}$ in the balanced equation is 1.',
        explanation: 'Products go in the numerator, reactants in the denominator. Coefficients become exponents. Pure solids/liquids have activity = 1. The coefficient on $O_{2}$ is 1, so its exponent in $K_c$ is 1.'
      }
    },
    {
      id: 'ece2-input-practice',
      type: 'input-boxes' as const,
      content: `
**Write the Exponents** 🧮

For the reaction: $\\text{2 NO}(g) + \\text{O}_2(g) \\rightleftharpoons \\text{2 NO}_2(g)$

$$K_c = \\frac{[\\text{NO}_2]^{\\boxed{?}}}{[\\text{NO}]^{\\boxed{?}}[\\text{O}_2]^{\\boxed{?}}}$$

Enter the three exponents (integers):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '2', '1'],
        hint1: 'The coefficient on $\\text{NO}_2$ is 2.',
        hint2: 'The coefficient on $\\text{NO}$ is also 2.',
        hint3: 'The coefficient on $\\text{O}_2$ is 1.',
        explanation: 'From the balanced equation: $K_c = \\frac{[\\text{NO}_2]^2}{[\\text{NO}]^2[\\text{O}_2]^1}$. Each coefficient becomes an exponent.'
      }
    },
    {
      id: 'ece2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Check — Writing $K$ Expressions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, what is the correct $K_c$ expression?',
            options: [
              '$K_c = \\frac{[\\text{PCl}_5]}{[\\text{PCl}_3][\\text{Cl}_2]}$',
              '$K_c = \\frac{[\\text{PCl}_3][\\text{Cl}_2]}{[\\text{PCl}_5]}$',
              '$K_c = \\frac{[\\text{PCl}_3] + [\\text{Cl}_2]}{[\\text{PCl}_5]}$',
              '$K_c = [\\text{PCl}_3][\\text{Cl}_2]$'
            ],
            correctAnswer: 1,
            explanation: 'Products over reactants: $K_c = \\frac{[\\text{PCl}_3][\\text{Cl}_2]}{[\\text{PCl}_5]}$. All species are gases, so all are included. Concentrations are multiplied, not added.'
          },
          {
            question: 'For $\\text{NH}_4\\text{Cl}(s) \\rightleftharpoons \\text{NH}_3(g) + \\text{HCl}(g)$, what is $K_c$?',
            options: [
              '$K_c = \\frac{[\\text{NH}_3][\\text{HCl}]}{[\\text{NH}_4\\text{Cl}]}$',
              '$K_c = [\\text{NH}_3][\\text{HCl}]$',
              '$K_c = \\frac{[\\text{NH}_4\\text{Cl}]}{[\\text{NH}_3][\\text{HCl}]}$',
              '$K_c = [\\text{NH}_3] + [\\text{HCl}]$'
            ],
            correctAnswer: 1,
            explanation: '$NH_{4}Cl$ is a pure solid — it is excluded from the $K_c$ expression. Therefore $K_c = [\\text{NH}_3][\\text{HCl}]$.'
          }
        ]
      }
    }
  ]
}
