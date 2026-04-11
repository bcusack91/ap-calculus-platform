export const chemSolubilityKspPart2Data = {
  topicSlug: 'solubility-ksp',
  sections: [
    {
      id: 'sk2-intro',
      type: 'text' as const,
      content: `# 💎 Calculating Molar Solubility from K_sp

**Part 2 of 7 — From K_sp to Dissolved Concentration**

---

### Topics in This Part

| Section |
|---------|
| 📌 The ICE-Table Approach |
| For a 1:1 salt: $\\text{MX}(s) \\rightleftharpoons \\text{M}^+(aq) + \\text{X}^-(aq)$ |
| For a 1:2 salt: $\\text{MX}_2(s) \\rightleftharpoons \\text{M}^{2+}(aq) + 2\\,\\text{X}^-(aq)$ |
| For a 2:3 salt: $\\text{M}_2\\text{X}_3(s) \\rightleftharpoons 2\\,\\text{M}^{3+}(aq) + 3\\,\\text{X}^{2-}(aq)$ |
| 🧪 Worked Examples |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'sk2-method',
      type: 'text' as const,
      content: `
## 📌 The ICE-Table Approach

### For a 1:1 salt: $\\text{MX}(s) \\rightleftharpoons \\text{M}^+(aq) + \\text{X}^-(aq)$

If molar solubility = $s$, then:
- $[\\text{M}^+] = s$ and $[\\text{X}^-] = s$
- $K_{sp} = s \\cdot s = s^2$

$$\\boxed{s = \\sqrt{K_{sp}}}$$

> 🔑 **Key Concept:** Set molar solubility = $s$, express each ion concentration in terms of $s$ using stoichiometry, substitute into $K_{sp}$, and solve.

---

### For a 1:2 salt: $\\text{MX}_2(s) \\rightleftharpoons \\text{M}^{2+}(aq) + 2\\,\\text{X}^-(aq)$

If molar solubility = $s$, then:
- $[\\text{M}^{2+}] = s$ and $[\\text{X}^-] = 2s$
- $K_{sp} = (s)(2s)^2 = 4s^3$

$$\\boxed{s = \\sqrt[3]{\\frac{K_{sp}}{4}}}$$

---

### For a 2:3 salt: $\\text{M}_2\\text{X}_3(s) \\rightleftharpoons 2\\,\\text{M}^{3+}(aq) + 3\\,\\text{X}^{2-}(aq)$

- $[\\text{M}^{3+}] = 2s$ and $[\\text{X}^{2-}] = 3s$
- $K_{sp} = (2s)^2(3s)^3 = 4s^2 \\cdot 27s^3 = 108s^5$

$$\\boxed{s = \\sqrt[5]{\\frac{K_{sp}}{108}}}$$
      `
    },
    {
      id: 'sk2-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Examples

> **Problem:** Find the molar solubility of AgCl ($K_{sp} = 1.8 \\times 10^{-10}$).

> **Solution:**

$\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$

$$\\boxed{s = \\sqrt{K_{sp}} = \\sqrt{1.8 \\times 10^{-10}} = 1.3 \\times 10^{-5} \\text{ M}}$$


---

> **Problem:** Find the molar solubility of PbCl₂ ($K_{sp} = 1.7 \\times 10^{-5}$).

> **Solution:**

$\\text{PbCl}_2(s) \\rightleftharpoons \\text{Pb}^{2+}(aq) + 2\\,\\text{Cl}^-(aq)$

$K_{sp} = (s)(2s)^2 = 4s^3$

$$\\boxed{s = \\sqrt[3]{\\frac{1.7 \\times 10^{-5}}{4}} = \\sqrt[3]{4.25 \\times 10^{-6}} = 1.6 \\times 10^{-2} \\text{ M}}$$


---

> ⚠️ **Warning:** You **cannot** directly compare $K_{sp}$ values to rank solubility unless the compounds have the **same formula type** (same ratio of ions). For different types, you must compare molar solubilities.
      `
    },
    {
      id: 'sk2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Molar Solubility** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For a 1:1 salt with $K_{sp} = 4.0 \\times 10^{-8}$, the molar solubility is:',
            options: [
              '$4.0 \\times 10^{-8}$ M',
              '$2.0 \\times 10^{-4}$ M',
              '$2.0 \\times 10^{-8}$ M',
              '$1.6 \\times 10^{-15}$ M'
            ],
            correctAnswer: 1,
            explanation: 'For a 1:1 salt, $K_{sp} = s^2 \\implies s = \\sqrt{4.0 \\times 10^{-8}} = 2.0 \\times 10^{-4}$ M.'
          },
          {
            question: 'For $\\text{MX}_2$ where $K_{sp} = 2.7 \\times 10^{-9}$, the relationship between $K_{sp}$ and $s$ is:',
            options: [
              '$K_{sp} = s^2$',
              '$K_{sp} = 2s^3$',
              '$K_{sp} = 4s^3$',
              '$K_{sp} = s^3$'
            ],
            correctAnswer: 2,
            explanation: '$\\text{MX}_2 \\rightleftharpoons \\text{M}^{2+} + 2\\,\\text{X}^-$. $K_{sp} = [\\text{M}^{2+}][\\text{X}^-]^2 = (s)(2s)^2 = 4s^3$.'
          },
          {
            question: 'Can you determine which is more soluble just by comparing $K_{sp}$: $\\text{AgCl}$ ($K_{sp} = 1.8 \\times 10^{-10}$) vs $\\text{Ag}_2\\text{CrO}_4$ ($K_{sp} = 1.1 \\times 10^{-12}$)?',
            options: [
              'Yes — AgCl has larger $K_{sp}$ so it\'s more soluble',
              'No — they have different formula types, so you must compare molar solubilities',
              'Yes — Ag₂CrO₄ is always more soluble',
              'No — you need temperature data'
            ],
            correctAnswer: 1,
            explanation: 'AgCl is 1:1 ($K_{sp} = s^2$) and Ag₂CrO₄ is 2:1 ($K_{sp} = 4s^3$). Different formula types require calculating and comparing actual molar solubilities.'
          }
        ]
      }
    },
    {
      id: 'sk2-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Molar Solubility Calculations** 🧮

**1)** $\\text{BaSO}_4$, $K_{sp} = 1.1 \\times 10^{-10}$. (1:1 salt) What is the molar solubility? (Enter in scientific notation, e.g. 1.0e-5)

**2)** $\\text{Ca(OH)}_2$, $K_{sp} = 5.0 \\times 10^{-6}$. ($K_{sp} = 4s^3$) What is the molar solubility? (Round to 3 significant figures, e.g. 0.01)

**3)** For the BaSO₄ solution above, what is $[\\text{Ba}^{2+}]$? (Enter in same format as answer 1)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.0e-5', '0.01', '1.0e-5'],
        hint1: '$s = \\sqrt{1.1 \\times 10^{-10}} = 1.05 \\times 10^{-5}$',
        hint2: '$s = \\sqrt[3]{5.0 \\times 10^{-6}/4} = \\sqrt[3]{1.25 \\times 10^{-6}}$',
        hint3: 'For a 1:1 salt, $[\\text{Ba}^{2+}] = s$.',
        explanation: '1) $s = \\sqrt{1.1 \\times 10^{-10}} = 1.05 \\times 10^{-5} \\approx 1.0 \\times 10^{-5}$ M. 2) $s = \\sqrt[3]{1.25 \\times 10^{-6}} = 1.08 \\times 10^{-2} \\approx 0.01$ M. 3) For BaSO₄, $[\\text{Ba}^{2+}] = s = 1.0 \\times 10^{-5}$ M.'
      }
    },
    {
      id: 'sk2-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Solubility Relationships** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For a 1:1 salt, K_sp = ',
            options: ['s', 's²', '4s³', '27s⁴']
          },
          {
            label: 'For a 1:2 salt (MX₂), K_sp = ',
            options: ['s²', '2s³', '4s³', '8s³']
          },
          {
            label: 'Molar solubility is defined as',
            options: ['mass dissolved per liter', 'moles dissolved per liter in a saturated solution', 'K_sp itself', 'the density of the solution']
          },
          {
            label: 'Comparing K_sp directly to rank solubility works only for',
            options: ['all ionic compounds', 'compounds with the same formula type', 'compounds with the same cation', 'any two compounds']
          }
        ],
        correctAnswers: [
          's²',
          '4s³',
          'moles dissolved per liter in a saturated solution',
          'compounds with the same formula type'
        ],
        hint1: '1:1 salt: $K_{sp} = (s)(s) = s^2$.',
        hint2: '1:2 salt: $K_{sp} = (s)(2s)^2 = 4s^3$.',
        hint3: 'Same formula type means same ion ratio (e.g., both 1:1 or both 1:2).',
        explanation: '1:1 → $s^2$. 1:2 → $4s^3$. Molar solubility = mol/L in saturated solution. Direct $K_{sp}$ comparison only works for same formula types.'
      }
    },
    {
      id: 'sk2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Molar Solubility** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$\\text{Ag}_2\\text{CrO}_4$ has $K_{sp} = 1.1 \\times 10^{-12}$. Its molar solubility is:',
            options: [
              '$s = \\sqrt{1.1 \\times 10^{-12}} = 1.05 \\times 10^{-6}$ M',
              '$s = \\sqrt[3]{\\frac{1.1 \\times 10^{-12}}{4}} = 6.5 \\times 10^{-5}$ M',
              '$s = 1.1 \\times 10^{-12}$ M',
              '$s = \\sqrt[3]{1.1 \\times 10^{-12}} = 1.03 \\times 10^{-4}$ M'
            ],
            correctAnswer: 1,
            explanation: '$\\text{Ag}_2\\text{CrO}_4 \\rightleftharpoons 2\\,\\text{Ag}^+ + \\text{CrO}_4^{2-}$. $K_{sp} = (2s)^2(s) = 4s^3$. $s = \\sqrt[3]{K_{sp}/4} = \\sqrt[3]{2.75 \\times 10^{-13}} = 6.5 \\times 10^{-5}$ M.'
          },
          {
            question: 'The molar solubility of $\\text{CaF}_2$ ($K_{sp} = 3.9 \\times 10^{-11}$) in pure water is $2.1 \\times 10^{-4}$ M. What is $[\\text{F}^-]$?',
            options: [
              '$2.1 \\times 10^{-4}$ M',
              '$4.2 \\times 10^{-4}$ M',
              '$1.05 \\times 10^{-4}$ M',
              '$3.9 \\times 10^{-11}$ M'
            ],
            correctAnswer: 1,
            explanation: '$\\text{CaF}_2 \\rightleftharpoons \\text{Ca}^{2+} + 2\\,\\text{F}^-$. Each formula unit produces 2 F⁻ ions. $[\\text{F}^-] = 2s = 2(2.1 \\times 10^{-4}) = 4.2 \\times 10^{-4}$ M.'
          }
        ]
      }
    }
  ]
}
