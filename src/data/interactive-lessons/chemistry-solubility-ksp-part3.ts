export const chemSolubilityKspPart3Data = {
  topicSlug: 'solubility-ksp',
  sections: [
    {
      id: 'sk3-intro',
      type: 'text' as const,
      content: `
# 💎 The Common Ion Effect

**Part 3 of 7 — Reduced Solubility in the Presence of a Common Ion**

When a slightly soluble salt dissolves in a solution that already contains one of its ions, its solubility **decreases**. This is the **common ion effect** — a direct application of Le Chatelier\'s principle.
      `
    },
    {
      id: 'sk3-explanation',
      type: 'text' as const,
      content: `
## Why Does the Common Ion Reduce Solubility?

Consider dissolving $\\text{AgCl}$ in a solution that already contains $\\text{NaCl}$ (providing $\\text{Cl}^-$ ions):

$$\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$$

The $\\text{Cl}^-$ from NaCl shifts the equilibrium **left** (Le Chatelier\'s), reducing the amount of $\\text{AgCl}$ that dissolves.

### Mathematically

- In pure water: $K_{sp} = s \\cdot s = s^2$, so $s = \\sqrt{K_{sp}}$
- In 0.10 M NaCl: $K_{sp} = s \\cdot (s + 0.10)$

Since $s \\ll 0.10$: $K_{sp} \\approx s \\cdot 0.10$, so $s \\approx \\frac{K_{sp}}{0.10}$

This gives a much smaller $s$ than in pure water!
      `
    },
    {
      id: 'sk3-example',
      type: 'text' as const,
      content: `
## Worked Example

Find the molar solubility of $\\text{AgCl}$ ($K_{sp} = 1.8 \\times 10^{-10}$) in 0.10 M NaCl.

### In Pure Water (for comparison)

$s = \\sqrt{1.8 \\times 10^{-10}} = 1.3 \\times 10^{-5}$ M

### In 0.10 M NaCl

The Cl⁻ from NaCl provides an initial $[\\text{Cl}^-] = 0.10$ M.

$$K_{sp} = [\\text{Ag}^+][\\text{Cl}^-] = (s)(0.10 + s)$$

Since $s \\ll 0.10$: $(s)(0.10) \\approx 1.8 \\times 10^{-10}$

$$s = \\frac{1.8 \\times 10^{-10}}{0.10} = 1.8 \\times 10^{-9} \\text{ M}$$

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
              'Increase the solubility of AgCl',
              'Decrease the solubility of AgCl (precipitate more AgCl)',
              'Have no effect on AgCl solubility',
              'Increase $K_{sp}$'
            ],
            correctAnswer: 1,
            explanation: 'The added Cl⁻ (common ion) shifts the equilibrium left, causing more AgCl to precipitate and decreasing its solubility. $K_{sp}$ itself doesn\'t change — only the solubility does.'
          },
          {
            question: 'The common ion effect is an application of:',
            options: [
              'Hess\'s Law',
              'Le Chatelier\'s Principle',
              'The Ideal Gas Law',
              'Conservation of Mass'
            ],
            correctAnswer: 1,
            explanation: 'Adding a common ion increases the concentration of one product, shifting equilibrium toward the reactant side (Le Chatelier\'s Principle).'
          },
          {
            question: 'Which of the following would be a "common ion" when dissolving $\\text{PbCl}_2$?',
            options: [
              '$\\text{Na}^+$ from NaNO₃',
              '$\\text{Cl}^-$ from KCl',
              '$\\text{NO}_3^-$ from NaNO₃',
              '$\\text{K}^+$ from KCl'
            ],
            correctAnswer: 1,
            explanation: '$\\text{PbCl}_2 \\rightleftharpoons \\text{Pb}^{2+} + 2\\,\\text{Cl}^-$. A common ion is one that appears in the dissolution equation. Cl⁻ from KCl is a common ion.'
          }
        ]
      }
    },
    {
      id: 'sk3-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Common Ion Problems** 🧮

Find the molar solubility of $\\text{BaSO}_4$ ($K_{sp} = 1.1 \\times 10^{-10}$) in 0.050 M Na₂SO₄.

$\\text{BaSO}_4(s) \\rightleftharpoons \\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq)$

$[\\text{SO}_4^{2-}]$ from Na₂SO₄ = 0.050 M

$K_{sp} = (s)(0.050 + s) \\approx (s)(0.050)$

1) What is the molar solubility $s$? (Enter in scientific notation, e.g. 2.2e-9)

2) What is the molar solubility in pure water? (Enter in scientific notation, e.g. 1.0e-5)

3) By what factor did the common ion reduce solubility? (Enter as a whole number, approximately)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.2e-9', '1.0e-5', '5000', '0.00000', '0.00001'],
        hint1: '$s = K_{sp}/0.050 = 1.1 \\times 10^{-10}/0.050$',
        hint2: 'In pure water: $s = \\sqrt{K_{sp}} = \\sqrt{1.1 \\times 10^{-10}}$',
        hint3: 'Factor = $s_{\\text{pure}}/s_{\\text{common ion}}$',
        explanation: '1) $s = 1.1 \\times 10^{-10}/0.050 = 2.2 \\times 10^{-9}$ M. 2) $s = \\sqrt{1.1 \\times 10^{-10}} = 1.05 \\times 10^{-5} \\approx 1.0 \\times 10^{-5}$ M. 3) Factor $= 1.0 \\times 10^{-5}/(2.2 \\times 10^{-9}) \\approx 4{,}500 \\approx 5{,}000$.'
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
            options: ['is present in the original solid only', 'appears in both the solution and the dissolving salt', 'is always a cation', 'changes K_sp']
          },
          {
            label: 'The common ion effect always',
            options: ['increases solubility', 'decreases solubility', 'has no effect', 'changes K_sp']
          },
          {
            label: 'When using the approximation with a common ion, we assume',
            options: ['s is large', 's is negligible compared to the common ion concentration', 'K_sp changes', 'the solid disappears']
          }
        ],
        correctAnswers: [
          'appears in both the solution and the dissolving salt',
          'decreases solubility',
          's is negligible compared to the common ion concentration'
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
              'Higher — NaF helps dissolution',
              'Lower — F⁻ is a common ion that shifts equilibrium left',
              'The same — NaF doesn\'t affect CaF₂',
              'Zero — CaF₂ won\'t dissolve at all'
            ],
            correctAnswer: 1,
            explanation: 'F⁻ from NaF is a common ion in the CaF₂ dissolution. It shifts the equilibrium left, reducing the amount of CaF₂ that dissolves.'
          },
          {
            question: 'For $\\text{PbI}_2$ ($K_{sp} = 9.8 \\times 10^{-9}$) in 0.10 M KI, the molar solubility is approximately:',
            options: [
              '$s = K_{sp}/(0.10)^2 = 9.8 \\times 10^{-7}$ M',
              '$s = \\sqrt{K_{sp}} = 9.9 \\times 10^{-5}$ M',
              '$s = K_{sp}/0.10 = 9.8 \\times 10^{-8}$ M',
              '$s = K_{sp} = 9.8 \\times 10^{-9}$ M'
            ],
            correctAnswer: 0,
            explanation: '$\\text{PbI}_2 \\rightleftharpoons \\text{Pb}^{2+} + 2\\,\\text{I}^-$. $K_{sp} = (s)(0.10 + 2s)^2 \\approx (s)(0.10)^2 = 0.010s$. $s = 9.8 \\times 10^{-9}/0.010 = 9.8 \\times 10^{-7}$ M.'
          }
        ]
      }
    }
  ]
}
