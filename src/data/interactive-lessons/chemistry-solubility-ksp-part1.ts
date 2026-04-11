export const chemSolubilityKspPart1Data = {
  topicSlug: 'solubility-ksp',
  sections: [
    {
      id: 'sk1-intro',
      type: 'text' as const,
      content: `# 💎 Dissolution Equilibrium and K_sp

**Part 1 of 7 — The Solubility Product Constant**

---

### Topics in This Part

| Section |
|---------|
| ⚖️ Dissolution as an Equilibrium |
| The K_sp Expression |
| General Form |
| 📌 Common K_sp Expressions |
| Key Points |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'sk1-dissolution',
      type: 'text' as const,
      content: `
## ⚖️ Dissolution as an Equilibrium

When you add a slightly soluble salt to water:

$$\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$$

- **Forward**: Solid dissolves → ions enter solution
- **Reverse**: Ions collide and re-form solid (precipitation)
- **Equilibrium**: Rate of dissolution = Rate of precipitation


---

### The K_sp Expression

Since the solid has a constant concentration (pure solid activity = 1), it is **excluded** from the equilibrium expression:

$$K_{sp} = [\\text{Ag}^+][\\text{Cl}^-]$$

**Not** $\\frac{[\\text{Ag}^+][\\text{Cl}^-]}{[\\text{AgCl}]}$ — the solid is omitted!


---

### General Form

For $\\text{M}_a\\text{X}_b(s) \\rightleftharpoons a\\,\\text{M}^{b+}(aq) + b\\,\\text{X}^{a-}(aq)$:

$$\\boxed{K_{sp} = [\\text{M}^{b+}]^a[\\text{X}^{a-}]^b}$$

> 🔑 **Key Concept:** The $K_{sp}$ expression includes only dissolved ion concentrations, each raised to its stoichiometric coefficient. The pure solid is always excluded (activity = 1).
      `
    },
    {
      id: 'sk1-examples',
      type: 'text' as const,
      content: `
## 📌 Common K_sp Expressions

| Compound | Dissolution | $K_{sp}$ Expression |
|----------|-------------|---------------------|
| $\\text{AgCl}$ | $\\text{AgCl} \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^-$ | $[\\text{Ag}^+][\\text{Cl}^-]$ |
| $\\text{PbCl}_2$ | $\\text{PbCl}_2 \\rightleftharpoons \\text{Pb}^{2+} + 2\\,\\text{Cl}^-$ | $[\\text{Pb}^{2+}][\\text{Cl}^-]^2$ |
| $\\text{Ca}_3(\\text{PO}_4)_2$ | $\\text{Ca}_3(\\text{PO}_4)_2 \\rightleftharpoons 3\\,\\text{Ca}^{2+} + 2\\,\\text{PO}_4^{3-}$ | $[\\text{Ca}^{2+}]^3[\\text{PO}_4^{3-}]^2$ |
| $\\text{Fe(OH)}_3$ | $\\text{Fe(OH)}_3 \\rightleftharpoons \\text{Fe}^{3+} + 3\\,\\text{OH}^-$ | $[\\text{Fe}^{3+}][\\text{OH}^-]^3$ |


---

### Key Points

- $K_{sp}$ values are typically very small (e.g., $1.8 \\times 10^{-10}$ for AgCl)
- Smaller $K_{sp}$ → less soluble (for compounds with the same formula type)

> ⚠️ **Warning:** Comparing $K_{sp}$ values directly to rank solubility only works for compounds with the **same ion ratio** (e.g., both 1:1). For different formula types, calculate and compare molar solubilities.

- $K_{sp}$ depends only on temperature (like all equilibrium constants)
- The solid must be present for $K_{sp}$ to apply (saturated solution)
      `
    },
    {
      id: 'sk1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**K_sp Expressions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why is the solid excluded from the $K_{sp}$ expression?',
            options: [
              'Solids have zero concentration',
              'Pure solids have constant concentration (activity = 1) and are incorporated into K',
              'Solids don\'t participate in equilibrium',
              'The solid has already dissolved'
            ],
            correctAnswer: 1,
            explanation: 'Pure solids have an activity of 1 (constant "concentration"), so they are incorporated into the equilibrium constant and don\'t appear in the expression.'
          },
          {
            question: 'What is the $K_{sp}$ expression for $\\text{Ag}_2\\text{CrO}_4(s) \\rightleftharpoons 2\\,\\text{Ag}^+(aq) + \\text{CrO}_4^{2-}(aq)$?',
            options: [
              '$[\\text{Ag}^+][\\text{CrO}_4^{2-}]$',
              '$[\\text{Ag}^+]^2[\\text{CrO}_4^{2-}]$',
              '$2[\\text{Ag}^+][\\text{CrO}_4^{2-}]$',
              '$\\frac{[\\text{Ag}^+]^2[\\text{CrO}_4^{2-}]}{[\\text{Ag}_2\\text{CrO}_4]}$'
            ],
            correctAnswer: 1,
            explanation: '$K_{sp} = [\\text{Ag}^+]^2[\\text{CrO}_4^{2-}]$. The coefficient 2 for Ag⁺ becomes an exponent. The solid is excluded.'
          },
          {
            question: 'If $K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$ and $K_{sp}(\\text{AgBr}) = 5.0 \\times 10^{-13}$, which is more soluble?',
            options: [
              'AgBr (smaller $K_{sp}$ means more soluble)',
              'AgCl (larger $K_{sp}$ means more soluble)',
              'They are equally soluble',
              'Cannot compare without molar masses'
            ],
            correctAnswer: 1,
            explanation: 'For compounds with the same formula type (both are 1:1), larger $K_{sp}$ = more soluble. AgCl has a larger $K_{sp}$, so it is more soluble.'
          }
        ]
      }
    },
    {
      id: 'sk1-practice',
      type: 'input-boxes' as const,
      content: `
**Writing K_sp Expressions** 🧮

Write the $K_{sp}$ expression for each compound. Count the total number of ion concentration terms (including exponents) that appear.

**1)** $\\text{BaSO}_4(s) \\rightleftharpoons \\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq)$. How many ion terms appear in $K_{sp}$? (Enter a number)

**2)** $\\text{Pb(IO}_3)_2(s) \\rightleftharpoons \\text{Pb}^{2+}(aq) + 2\\,\\text{IO}_3^-(aq)$. The exponent on $[\\text{IO}_3^-]$ is? (Enter a number)

**3)** $\\text{Bi}_2\\text{S}_3(s) \\rightleftharpoons 2\\,\\text{Bi}^{3+}(aq) + 3\\,\\text{S}^{2-}(aq)$. The exponent on $[\\text{Bi}^{3+}]$ is? (Enter a number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '2', '2'],
        hint1: '$K_{sp} = [\\text{Ba}^{2+}][\\text{SO}_4^{2-}]$ — two terms.',
        hint2: '$K_{sp} = [\\text{Pb}^{2+}][\\text{IO}_3^-]^2$ — exponent matches the coefficient.',
        hint3: '$K_{sp} = [\\text{Bi}^{3+}]^2[\\text{S}^{2-}]^3$ — 2 Bi³⁺ ions produced.',
        explanation: '1) $K_{sp} = [\\text{Ba}^{2+}][\\text{SO}_4^{2-}]$ has 2 ion terms. 2) The coefficient 2 becomes exponent 2 on $[\\text{IO}_3^-]$. 3) The coefficient 2 becomes exponent 2 on $[\\text{Bi}^{3+}]$.'
      }
    },
    {
      id: 'sk1-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**K_sp Fundamentals** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'K_sp applies only to',
            options: ['all ionic compounds', 'slightly soluble ionic compounds at saturation', 'covalent compounds', 'gases']
          },
          {
            label: 'The solid in a dissolution equilibrium is',
            options: ['included in K_sp', 'excluded from K_sp', 'equal to K_sp', 'always absent']
          },
          {
            label: 'Coefficients in the balanced dissolution become',
            options: ['multipliers in K_sp', 'exponents in K_sp', 'subscripts in K_sp', 'ignored in K_sp']
          },
          {
            label: 'A smaller K_sp means the compound is',
            options: ['more soluble', 'less soluble', 'equally soluble', 'insoluble']
          }
        ],
        correctAnswers: [
          'slightly soluble ionic compounds at saturation',
          'excluded from K_sp',
          'exponents in K_sp',
          'less soluble'
        ],
        hint1: '$K_{sp}$ describes the saturated-solution equilibrium of sparingly soluble compounds.',
        hint2: 'Pure solids are excluded from equilibrium expressions.',
        hint3: 'Smaller $K_{sp}$ → fewer ions in solution → less soluble.',
        explanation: '$K_{sp}$ applies to slightly soluble salts at saturation. The solid is excluded. Coefficients become exponents. Smaller $K_{sp}$ = less soluble.'
      }
    },
    {
      id: 'sk1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — K_sp Basics** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{Ca(OH)}_2(s) \\rightleftharpoons \\text{Ca}^{2+}(aq) + 2\\,\\text{OH}^-(aq)$, the $K_{sp}$ expression is:',
            options: [
              '$[\\text{Ca}^{2+}][\\text{OH}^-]$',
              '$[\\text{Ca}^{2+}][\\text{OH}^-]^2$',
              '$[\\text{Ca}^{2+}]^2[\\text{OH}^-]$',
              '$\\frac{[\\text{Ca}^{2+}][\\text{OH}^-]^2}{[\\text{Ca(OH)}_2]}$'
            ],
            correctAnswer: 1,
            explanation: '$K_{sp} = [\\text{Ca}^{2+}][\\text{OH}^-]^2$. The coefficient 2 for OH⁻ becomes an exponent. The solid is excluded.'
          },
          {
            question: 'Which statement about $K_{sp}$ is FALSE?',
            options: [
              '$K_{sp}$ depends on temperature',
              '$K_{sp}$ includes the solid in its expression',
              'Larger $K_{sp}$ generally means greater solubility',
              '$K_{sp}$ applies to saturated solutions'
            ],
            correctAnswer: 1,
            explanation: '$K_{sp}$ does NOT include the solid — pure solids are excluded from equilibrium expressions. The other statements are all true.'
          }
        ]
      }
    }
  ]
}
