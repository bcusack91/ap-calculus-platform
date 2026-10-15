export const chemSolubilityKspPart3Data = {
  topicSlug: 'solubility-ksp',
  sections: [
    {
      id: 'sk3-intro',
      type: 'text' as const,
      content: `# 💎 The Common Ion Effect

**Part 3 of 7 — Reduced Solubility in the Presence of a Common Ion**

---

### Topics in This Part

| Section |
|---------|
| 🤔 Why Does the Common Ion Reduce Solubility? |
| Mathematically |
| 🧪 Worked Example |
| In Pure Water (for comparison) |
| In 0.10 M NaCl |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 3
- Understanding the core concepts covered in Part 3
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'sk3-explanation',
      type: 'text' as const,
      content: `
## 🤔 Why Does the Common Ion Reduce Solubility?

Consider dissolving $\\text{AgCl}$ in a solution that already contains $\\text{NaCl}$ (providing $\\text{Cl}^-$ ions):

$$\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$$

The $\\text{Cl}^-$ from NaCl shifts the equilibrium **left** (Le Chatelier\'s), reducing the amount of $\\text{AgCl}$ that dissolves.


---

### Mathematically

- In pure water: $K_{sp} = s \\cdot s = s^2$, so $s = \\sqrt{K_{sp}}$
- In 0.10 M NaCl: $K_{sp} = s \\cdot (s + 0.10)$

Since $s \\ll 0.10$:

$$\\boxed{s \\approx \\frac{K_{sp}}{[\\text{common ion}]}}$$

> 🔑 **Key Concept:** The common ion effect is Le Chatelier's principle applied to dissolution equilibria — adding an ion that appears in the $K_{sp}$ expression shifts the equilibrium toward the solid, reducing solubility.

> 💡 **Tip:** When the common ion concentration is much larger than $s$, you can ignore $s$ in the sum, greatly simplifying the calculation.
      `
    },
    {
      id: 'sk3-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example

> **Problem:** Find the molar solubility of $\\text{AgCl}$ ($K_{sp} = 1.8 \\times 10^{-10}$) in 0.10 M NaCl.

> **Solution:**


---

### In Pure Water (for comparison)

$s = \\sqrt{1.8 \\times 10^{-10}} = 1.3 \\times 10^{-5}$ M


---

### In 0.10 M NaCl

The $Cl^{-}$ from NaCl provides an initial $[\\text{Cl}^-] = 0.10$ M.

$$K_{sp} = [\\text{Ag}^+][\\text{Cl}^-] = (s)(0.10 + s)$$

Since $s \\ll 0.10$: $(s)(0.10) \\approx 1.8 \\times 10^{-10}$

$$\\boxed{s = \\frac{1.8 \\times 10^{-10}}{0.10} = 1.8 \\times 10^{-9} \\text{ M}}$$


---

### Comparison

| Solution | Molar Solubility |
|----------|-----------------|
| Pure water | $1.3 \\times 10^{-5}$ M |
| 0.10 M NaCl | $1.8 \\times 10^{-9}$ M |

The common ion reduced solubility by a factor of about **7,000**!
      `
    },
    {
      id: 'sk3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Common Ion Effect** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Adding NaCl to a saturated solution of AgCl will:',
            options: [
              'Increase the solubility of AgCl, since more ions are present',
              'Decrease AgCl\'s solubility, so more AgCl precipitates',
              'Have no effect on AgCl, because $Na^{+}$ is a spectator ion',
              'Increase $K_{sp}$ for AgCl because $[\\text{Cl}^-]$ has gone up'
            ],
            correctAnswer: 1,
            explanation: 'The added $Cl^{-}$ (common ion) shifts the equilibrium left, causing more AgCl to precipitate and decreasing its solubility. $Na^{+}$ is a spectator, but the $Cl^{-}$ that comes with it is not. $K_{sp}$ itself doesn\'t change — only the solubility does.'
          },
          {
            question: 'The common ion effect is an application of:',
            options: [
              'Hess\'s Law of heat summation',
              'Le Chatelier\'s Principle',
              'Dalton\'s Law of partial pressures',
              'Conservation of Mass'
            ],
            correctAnswer: 1,
            explanation: 'Adding a common ion increases the concentration of one product, shifting equilibrium toward the reactant side (Le Chatelier\'s Principle).'
          },
          {
            question: 'Which of the following would be a "common ion" when dissolving $\\text{PbCl}_2$?',
            options: [
              '$\\text{Na}^+$ from $NaNO_{3}$',
              '$\\text{Cl}^-$ from KCl',
              '$\\text{NO}_3^-$ from $NaNO_{3}$',
              '$\\text{K}^+$ from KCl'
            ],
            correctAnswer: 1,
            explanation: '$\\text{PbCl}_2 \\rightleftharpoons \\text{Pb}^{2+} + 2\\,\\text{Cl}^-$. A common ion is one that appears in the dissolution equation. $Cl^{-}$ from KCl is a common ion.'
          }
        ]
      }
    },
    {
      id: 'sk3-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Common Ion Problems** 🧮

Find the molar solubility of $\\text{BaSO}_4$ ($K_{sp} = 1.1 \\times 10^{-10}$) in 0.050 M $Na_{2}SO_{4}$.

$\\text{BaSO}_4(s) \\rightleftharpoons \\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq)$

$[\\text{SO}_4^{2-}]$ from $Na_{2}SO_{4}$ = 0.050 M

$K_{sp} = (s)(0.050 + s) \\approx (s)(0.050)$

**1)** What is the molar solubility $s$? (Enter in scientific notation, e.g. 6.3e-8)

**2)** What is the molar solubility in pure water? (Enter in scientific notation, e.g. 3.4e-7)

**3)** By what factor did the common ion reduce solubility? (Enter as a whole number, approximately)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        questions: [{ question: '1)', answer: '2.2e-9', acceptableAnswers: ['2.2e-9'] }, { question: '2)', answer: '1.05e-5', acceptableAnswers: ['1.05e-5', '1.0e-5'] }, { question: '3)', answer: '4770', acceptableAnswers: ['4770', '4800', '4545', '4500', '5000'] }],
        hint1: '$s = K_{sp}/0.050 = 1.1 \\times 10^{-10}/0.050$',
        hint2: 'In pure water: $s = \\sqrt{K_{sp}} = \\sqrt{1.1 \\times 10^{-10}}$',
        hint3: 'Factor = $s_{\\text{pure}}/s_{\\text{common ion}}$',
        explanation: '1) $s = 1.1 \\times 10^{-10}/0.050 = 2.2 \\times 10^{-9}$ M. 2) $s = \\sqrt{1.1 \\times 10^{-10}} = 1.05 \\times 10^{-5}$ M. 3) Factor $= 1.05 \\times 10^{-5}/(2.2 \\times 10^{-9}) \\approx 4{,}770$, so the common ion cuts the solubility by a factor of roughly 5,000.'
      }
    },
    {
      id: 'sk3-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Common Ion Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A common ion is one that',
            options: ['is present in the original solid only', 'appears in both the solution and the dissolving salt', 'is always a cation, never an anion', 'lowers K_sp for the dissolving salt']
          },
          {
            label: 'The common ion effect always',
            options: ['increases solubility', 'decreases solubility', 'has no effect', 'changes K_sp']
          },
          {
            label: 'When using the approximation with a common ion, we assume',
            options: ['s is large compared with the common-ion concentration', 's is tiny next to the common-ion concentration', 'K_sp drops in proportion to the added common ion', 'the common-ion concentration is negligible next to s']
          }
        ],
        correctAnswers: [
          'appears in both the solution and the dissolving salt',
          'decreases solubility',
          's is tiny next to the common-ion concentration'
        ],
        hint1: 'A common ion is shared between the dissolving salt and the solution.',
        hint2: 'More of one ion → equilibrium shifts toward solid → less dissolves.',
        hint3: '$s + [\\text{common ion}] \\approx [\\text{common ion}]$ when $s$ is very small.',
        explanation: 'A common ion appears in both the dissolution equation and the existing solution. It always decreases solubility. We approximate by ignoring $s$ when it\'s much smaller than the common ion concentration.'
      }
    },
    {
      id: 'sk3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Common Ion Effect** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The solubility of $\\text{CaF}_2$ ($K_{sp} = 3.9 \\times 10^{-11}$) in 0.10 M NaF compared to pure water is:',
            options: [
              'Higher — the extra ions help $CaF_{2}$ dissolve',
              'Lower — $F^{-}$ is a common ion that shifts equilibrium left',
              'The same — NaF doesn\'t affect $CaF_{2}$',
              'Zero — $CaF_{2}$ won\'t dissolve at all'
            ],
            correctAnswer: 1,
            explanation: '$F^{-}$ from NaF is a common ion in the $CaF_{2}$ dissolution. It shifts the equilibrium left, reducing the amount of $CaF_{2}$ that dissolves.'
          },
          {
            question: 'For $\\text{PbI}_2$ ($K_{sp} = 9.8 \\times 10^{-9}$) in 0.10 M KI, the molar solubility is approximately:',
            options: [
              '$s = K_{sp}/(0.10)^2 = 9.8 \\times 10^{-7}$ M',
              '$s = \\sqrt[3]{K_{sp}/4} = 1.3 \\times 10^{-3}$ M',
              '$s = K_{sp}/(2 \\times 0.10)^2 = 2.5 \\times 10^{-7}$ M',
              '$s = K_{sp}/[\\text{I}^-] = 9.8 \\times 10^{-8}$ M'
            ],
            correctAnswer: 0,
            explanation: '$\\text{PbI}_2 \\rightleftharpoons \\text{Pb}^{2+} + 2\\,\\text{I}^-$. $K_{sp} = (s)(0.10 + 2s)^2 \\approx (s)(0.10)^2 = 0.010s$. $s = 9.8 \\times 10^{-9}/0.010 = 9.8 \\times 10^{-7}$ M. The 0.10 M of $I^{-}$ already comes from KI, so it is not doubled; dividing by $[\\text{I}^-]$ without squaring gives $9.8 \\times 10^{-8}$ M; and $\\sqrt[3]{K_{sp}/4}$ is the solubility in pure water, which ignores the common ion.'
          }
        ]
      }
    }
  ]
}
