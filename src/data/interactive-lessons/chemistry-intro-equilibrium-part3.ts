export const chemIntroEquilibriumPart3Data = {
  topicSlug: 'intro-equilibrium',
  sections: [
    {
      id: 'ie3-intro',
      type: 'text' as const,
      content: `# ⚖️ Heterogeneous Equilibrium

**Part 3 of 7 — Solids and Liquids in Equilibrium Expressions**

---

### Topics in This Part

| Section |
|---------|
| 🤔 Why Exclude Solids and Liquids? |
| Physical Reasoning |
| Example 1: Decomposition of Calcium Carbonate |
| Example 2: Water Equilibrium |
| 📌 Important Clarifications |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 3
- Understanding the core concepts covered in Part 3
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ie3-why-exclude',
      type: 'text' as const,
      content: `
## 🤔 Why Exclude Solids and Liquids?

The equilibrium constant is defined in terms of **activities**, not concentrations:

- For gases: activity ≈ partial pressure (in atm)
- For dissolved species: activity ≈ molar concentration (in M)
- For pure solids and pure liquids: activity = **1** (by definition)

> 🔑 **Key Concept:** Pure solids and liquids have an activity of 1, so they don\'t affect the value of $K$ and are left out of the expression.

Since pure solids and liquids have an activity of 1, they don\'t affect the value of $K$ and are left out.


---

### Physical Reasoning

The "concentration" of a pure solid or liquid is its density divided by its molar mass — this is a **constant** that doesn\'t change as the reaction proceeds. Since it doesn\'t vary, it\'s absorbed into the equilibrium constant.


---

### Example 1: Decomposition of Calcium Carbonate

$$\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$$

$$K_p = P_{\\text{CO}_2}$$

Both CaCO₃ and CaO are solids — they are excluded. Only the gaseous CO₂ appears.


---

### Example 2: Water Equilibrium

$$\\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}^+(aq) + \\text{OH}^-(aq)$$

$$\\boxed{K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14} \\text{ at 25°C}}$$

Liquid water is excluded from the expression.
      `
    },
    {
      id: 'ie3-practice-expressions',
      type: 'multiple-choice' as const,
      content: `
**Writing Heterogeneous Equilibrium Expressions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $K_c$ for: $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\,\\text{CO}(g)$?',
            options: [
              '$K_c = \\frac{[\\text{CO}]^2}{[\\text{C}][\\text{CO}_2]}$',
              '$K_c = \\frac{[\\text{CO}]^2}{[\\text{CO}_2]}$',
              '$K_c = \\frac{2[\\text{CO}]}{[\\text{CO}_2]}$',
              '$K_c = [\\text{CO}]^2$'
            ],
            correctAnswer: 1,
            explanation: 'Carbon is a solid — exclude it. $K_c = \\frac{[\\text{CO}]^2}{[\\text{CO}_2]}$. Only gases and aqueous species appear in the expression.'
          },
          {
            question: 'For $\\text{Fe}_2\\text{O}_3(s) + 3\\,\\text{CO}(g) \\rightleftharpoons 2\\,\\text{Fe}(s) + 3\\,\\text{CO}_2(g)$, the equilibrium expression is:',
            options: [
              '$K_c = \\frac{[\\text{Fe}]^2[\\text{CO}_2]^3}{[\\text{Fe}_2\\text{O}_3][\\text{CO}]^3}$',
              '$K_c = \\frac{[\\text{CO}_2]^3}{[\\text{CO}]^3}$',
              '$K_c = \\frac{[\\text{CO}_2]}{[\\text{CO}]}$',
              '$K_c = \\frac{3[\\text{CO}_2]}{3[\\text{CO}]}$'
            ],
            correctAnswer: 1,
            explanation: 'Fe₂O₃(s) and Fe(s) are both solids — exclude them. Only the gases remain: $K_c = \\frac{[\\text{CO}_2]^3}{[\\text{CO}]^3}$.'
          },
          {
            question: 'For $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$, the equilibrium expression is:',
            options: [
              '$K_{sp} = \\frac{[\\text{Ag}^+][\\text{Cl}^-]}{[\\text{AgCl}]}$',
              '$K_{sp} = [\\text{Ag}^+][\\text{Cl}^-]$',
              '$K_{sp} = [\\text{Ag}^+] + [\\text{Cl}^-]$',
              '$K_{sp} = \\frac{1}{[\\text{Ag}^+][\\text{Cl}^-]}$'
            ],
            correctAnswer: 1,
            explanation: 'AgCl is a solid — exclude it. $K_{sp} = [\\text{Ag}^+][\\text{Cl}^-]$. This is the solubility product expression.'
          }
        ]
      }
    },
    {
      id: 'ie3-important-note',
      type: 'text' as const,
      content: `
## 📌 Important Clarifications

### Solids Must Still Be Present!

> 🔑 **Key Concept:** Even though solids and liquids don\'t appear in the $K$ expression, they must still be **present** for the equilibrium to exist.

For $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$:
- If all the CaCO₃ decomposes (none left), the system is NOT at equilibrium
- Some solid CaCO₃ must remain for the reverse reaction to be possible


---

### Amount of Solid Doesn\'t Matter

As long as some solid is present:
- Adding more solid does NOT shift the equilibrium
- Removing some solid (as long as some remains) does NOT shift the equilibrium
- The equilibrium partial pressure of CO₂ is the same whether you have 1 g or 1 kg of CaCO₃


---

### Aqueous Species ARE Included

> ⚠️ **Warning:** Don\'t confuse dissolved species with liquids! $\\text{H}_2\\text{O}(l)$ is excluded, but $\\text{Na}^+(aq)$ is included.

- $\\text{H}_2\\text{O}(l)$ → pure liquid → **excluded**
- $\\text{Na}^+(aq)$ → dissolved species → **included**
- $\\text{NaCl}(s)$ → solid → **excluded**
- $\\text{NaCl}(aq)$ → dissolved → **included**

> 💡 **Tip:** Remember: **G**ases and **A**queous species — they **go ahead** into the $K$ expression. **S**olids and **L**iquids — they **stay out**!
      `
    },
    {
      id: 'ie3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Include or Exclude?** 🔍

For each species, determine whether it appears in the equilibrium expression.
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\text{H}_2\\text{O}(l)$ in the equilibrium expression:',
            options: ['Include', 'Exclude']
          },
          {
            label: '$\\text{CO}_2(g)$ in the equilibrium expression:',
            options: ['Include', 'Exclude']
          },
          {
            label: '$\\text{CaCO}_3(s)$ in the equilibrium expression:',
            options: ['Include', 'Exclude']
          },
          {
            label: '$\\text{Na}^+(aq)$ in the equilibrium expression:',
            options: ['Include', 'Exclude']
          },
          {
            label: '$\\text{Fe}(s)$ in the equilibrium expression:',
            options: ['Include', 'Exclude']
          }
        ],
        correctAnswers: ['Exclude', 'Include', 'Exclude', 'Include', 'Exclude'],
        hint1: 'Pure liquids (l) are excluded; gases (g) are included.',
        hint2: 'Solids (s) are excluded; aqueous species (aq) are included.',
        hint3: 'Only gases and aqueous species appear in equilibrium expressions.',
        explanation: 'Pure liquids (l) and solids (s) have activities of 1 and are excluded. Gases (g) and aqueous species (aq) have variable concentrations and must be included.'
      }
    },
    {
      id: 'ie3-input-practice',
      type: 'input-boxes' as const,
      content: `
**Heterogeneous Equilibrium Calculations** 🧮

**1)** For $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$, if $K_p = 0.040$ atm at a certain temperature, what is $P_{\\text{CO}_2}$ at equilibrium? (in atm)

**2)** How many species appear in the $K_c$ expression for $\\text{C}(s) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}(g) + \\text{H}_2(g)$? (Enter a number)

**3)** For $\\text{NH}_4\\text{Cl}(s) \\rightleftharpoons \\text{NH}_3(g) + \\text{HCl}(g)$, if $P_{\\text{NH}_3} = P_{\\text{HCl}} = 0.30$ atm at equilibrium, what is $K_p$? (Enter to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.040', '3', '0.09'],
        hint1: 'Since both solids are excluded, $K_p = P_{\\text{CO}_2}$.',
        hint2: 'C(s) is excluded. The remaining species are H₂O(g), CO(g), and H₂(g).',
        hint3: '$K_p = P_{\\text{NH}_3} \\times P_{\\text{HCl}} = 0.30 \\times 0.30$',
        explanation: '1) $K_p = P_{\\text{CO}_2} = 0.040$ atm. 2) Exclude C(s); include H₂O(g), CO(g), H₂(g) → 3 species. 3) $K_p = (0.30)(0.30) = 0.09$.'
      }
    },
    {
      id: 'ie3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Heterogeneous Equilibrium** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Adding more solid CaCO₃ to the equilibrium CaCO₃(s) ⇌ CaO(s) + CO₂(g) will:',
            options: [
              'Increase $P_{\\text{CO}_2}$',
              'Decrease $P_{\\text{CO}_2}$',
              'Have no effect on $P_{\\text{CO}_2}$',
              'Increase $K_p$'
            ],
            correctAnswer: 2,
            explanation: 'Solids do not appear in the equilibrium expression. Adding more solid does not change any concentrations or pressures at equilibrium. $K_p = P_{\\text{CO}_2}$ remains the same.'
          },
          {
            question: 'Pure liquids and solids are excluded from equilibrium expressions because:',
            options: [
              'They do not participate in the reaction',
              'Their concentrations are constant and incorporated into K',
              'They have zero concentration',
              'They are always in excess'
            ],
            correctAnswer: 1,
            explanation: 'The concentration (density/molar mass) of a pure solid or liquid is constant — it does not change as the reaction proceeds. This constant value is incorporated into the equilibrium constant K.'
          }
        ]
      }
    }
  ]
}
