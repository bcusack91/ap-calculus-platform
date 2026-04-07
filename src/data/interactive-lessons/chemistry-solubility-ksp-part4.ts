export const chemSolubilityKspPart4Data = {
  topicSlug: 'solubility-ksp',
  sections: [
    {
      id: 'sk4-intro',
      type: 'text' as const,
      content: `
# 💎 Predicting Precipitation — Q vs K_sp

**Part 4 of 7 — Will a Precipitate Form?**

When two solutions containing ions are mixed, will a precipitate form? The answer depends on whether the **ion product** ($Q_{sp}$) exceeds the solubility product ($K_{sp}$).
      `
    },
    {
      id: 'sk4-qsp',
      type: 'text' as const,
      content: `
## The Ion Product, Q_sp

$Q_{sp}$ is calculated exactly like $K_{sp}$, but using the **actual** (non-equilibrium) ion concentrations in solution:

$$Q_{sp} = [\\text{M}^{n+}]^a_{\\text{actual}}[\\text{X}^{m-}]^b_{\\text{actual}}$$

### Comparing Q_sp to K_sp

| Condition | Meaning | Result |
|-----------|---------|--------|
| $Q_{sp} < K_{sp}$ | Solution is unsaturated | No precipitate; more solid can dissolve |
| $Q_{sp} = K_{sp}$ | Solution is exactly saturated | At equilibrium; no change |
| $Q_{sp} > K_{sp}$ | Solution is supersaturated | **Precipitate forms** until $Q_{sp} = K_{sp}$ |

### Key Steps

1. Calculate the ion concentrations **after mixing** (account for dilution!)
2. Calculate $Q_{sp}$
3. Compare $Q_{sp}$ to $K_{sp}$
      `
    },
    {
      id: 'sk4-dilution',
      type: 'text' as const,
      content: `
## Don't Forget Dilution!

When mixing two solutions, the total volume increases and concentrations decrease:

$$[\\text{ion}]_{\\text{after mixing}} = \\frac{[\\text{ion}]_{\\text{initial}} \\times V_{\\text{initial}}}{V_{\\text{total}}}$$

### Worked Example

50.0 mL of $0.0020$ M $\\text{Pb(NO}_3)_2$ is mixed with 50.0 mL of $0.0040$ M NaCl. Does PbCl₂ precipitate? ($K_{sp} = 1.7 \\times 10^{-5}$)

**Step 1: Calculate concentrations after mixing**

$V_{\\text{total}} = 50.0 + 50.0 = 100.0$ mL

$[\\text{Pb}^{2+}] = \\frac{0.0020 \\times 50.0}{100.0} = 0.0010$ M

$[\\text{Cl}^-] = \\frac{0.0040 \\times 50.0}{100.0} = 0.0020$ M

**Step 2: Calculate Q_sp**

$Q_{sp} = [\\text{Pb}^{2+}][\\text{Cl}^-]^2 = (0.0010)(0.0020)^2 = (0.0010)(4.0 \\times 10^{-6}) = 4.0 \\times 10^{-9}$

**Step 3: Compare**

$Q_{sp} = 4.0 \\times 10^{-9} < K_{sp} = 1.7 \\times 10^{-5}$

$Q_{sp} < K_{sp}$ → **No precipitate forms.**
      `
    },
    {
      id: 'sk4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Precipitation Predictions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $Q_{sp} > K_{sp}$, what happens?',
            options: [
              'More solid dissolves',
              'Nothing — the solution is at equilibrium',
              'A precipitate forms until $Q_{sp} = K_{sp}$',
              '$K_{sp}$ increases to match $Q_{sp}$'
            ],
            correctAnswer: 2,
            explanation: 'When $Q_{sp} > K_{sp}$, the solution is supersaturated. Ions combine to form a precipitate, reducing ion concentrations until $Q_{sp}$ equals $K_{sp}$.'
          },
          {
            question: 'A student forgets to account for dilution when mixing solutions. Their $Q_{sp}$ will be:',
            options: [
              'Too high (overestimated)',
              'Too low (underestimated)',
              'Correct',
              'Zero'
            ],
            correctAnswer: 0,
            explanation: 'Without dilution correction, the student uses the original (higher) concentrations, giving an overestimated $Q_{sp}$. They might incorrectly predict precipitation.'
          }
        ]
      }
    },
    {
      id: 'sk4-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Will It Precipitate?** 🧮

25.0 mL of $0.0010$ M AgNO₃ is mixed with 75.0 mL of $0.0020$ M NaCl.

$K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$

**1)** What is $[\\text{Ag}^+]$ after mixing? (Enter in scientific notation, e.g. 2.5e-4)

**2)** What is $[\\text{Cl}^-]$ after mixing? (Enter in scientific notation, e.g. 1.5e-3)

**3)** What is $Q_{sp}$? (Enter in scientific notation, e.g. 3.8e-7)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.5e-4', '1.5e-3', '3.8e-7'],
        hint1: '$[\\text{Ag}^+] = (0.0010)(25.0)/(100.0)$',
        hint2: '$[\\text{Cl}^-] = (0.0020)(75.0)/(100.0)$',
        hint3: '$Q_{sp} = [\\text{Ag}^+][\\text{Cl}^-] = (2.5 \\times 10^{-4})(1.5 \\times 10^{-3})$',
        explanation: '1) $[\\text{Ag}^+] = (0.0010)(25.0)/100.0 = 2.5 \\times 10^{-4}$ M. 2) $[\\text{Cl}^-] = (0.0020)(75.0)/100.0 = 1.5 \\times 10^{-3}$ M. 3) $Q_{sp} = (2.5 \\times 10^{-4})(1.5 \\times 10^{-3}) = 3.75 \\times 10^{-7} \\approx 3.8 \\times 10^{-7}$. Since $Q_{sp} = 3.8 \\times 10^{-7} \\gg K_{sp} = 1.8 \\times 10^{-10}$, a precipitate FORMS.'
      }
    },
    {
      id: 'sk4-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Precipitation Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Q_sp is calculated using',
            options: ['equilibrium concentrations', 'actual ion concentrations in solution', 'initial solid mass', 'K_sp values']
          },
          {
            label: 'When mixing solutions, you must account for',
            options: ['temperature change only', 'dilution of both solutions', 'color change', 'molar mass']
          },
          {
            label: 'If Q_sp < K_sp, the solution is',
            options: ['supersaturated', 'unsaturated — more can dissolve', 'at equilibrium', 'contaminated']
          },
          {
            label: 'Precipitation continues until',
            options: ['all solid is gone', 'Q_sp = K_sp', 'Q_sp = 0', 'all ions are removed']
          }
        ],
        correctAnswers: [
          'actual ion concentrations in solution',
          'dilution of both solutions',
          'unsaturated — more can dissolve',
          'Q_sp = K_sp'
        ],
        hint1: '$Q_{sp}$ uses the actual (current) concentrations, not equilibrium values.',
        hint2: 'Total volume increases when you mix, diluting both solutions.',
        hint3: 'Precipitation removes ions until $Q_{sp}$ decreases to $K_{sp}$ (equilibrium).',
        explanation: '$Q_{sp}$ uses actual concentrations. Must account for dilution. $Q_{sp} < K_{sp}$ → unsaturated. Precipitation continues until $Q_{sp} = K_{sp}$.'
      }
    },
    {
      id: 'sk4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Precipitation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Equal volumes of $1.0 \\times 10^{-3}$ M BaCl₂ and $1.0 \\times 10^{-3}$ M Na₂SO₄ are mixed. $K_{sp}(\\text{BaSO}_4) = 1.1 \\times 10^{-10}$. Does BaSO₄ precipitate?',
            options: [
              'No — $Q_{sp} < K_{sp}$',
              'Yes — $Q_{sp} = (5.0 \\times 10^{-4})^2 = 2.5 \\times 10^{-7} > K_{sp}$',
              'Cannot determine without knowing the exact volume',
              'No — BaSO₄ is soluble'
            ],
            correctAnswer: 1,
            explanation: 'After mixing equal volumes, each ion is diluted by half: $[\\text{Ba}^{2+}] = [\\text{SO}_4^{2-}] = 5.0 \\times 10^{-4}$ M. $Q_{sp} = (5.0 \\times 10^{-4})^2 = 2.5 \\times 10^{-7} \\gg 1.1 \\times 10^{-10} = K_{sp}$. Yes, BaSO₄ precipitates.'
          },
          {
            question: 'To a solution with $[\\text{Ag}^+] = 1.0 \\times 10^{-5}$ M, NaCl is slowly added. At what $[\\text{Cl}^-]$ does AgCl begin to precipitate? ($K_{sp} = 1.8 \\times 10^{-10}$)',
            options: [
              '$[\\text{Cl}^-] = 1.8 \\times 10^{-5}$ M',
              '$[\\text{Cl}^-] = 1.8 \\times 10^{-10}$ M',
              '$[\\text{Cl}^-] = 1.8 \\times 10^{-5}$ M',
              '$[\\text{Cl}^-] = K_{sp}/[\\text{Ag}^+] = 1.8 \\times 10^{-5}$ M'
            ],
            correctAnswer: 3,
            explanation: 'Precipitation begins when $Q_{sp} = K_{sp}$: $[\\text{Ag}^+][\\text{Cl}^-] = 1.8 \\times 10^{-10}$. $[\\text{Cl}^-] = 1.8 \\times 10^{-10}/(1.0 \\times 10^{-5}) = 1.8 \\times 10^{-5}$ M.'
          }
        ]
      }
    }
  ]
}
