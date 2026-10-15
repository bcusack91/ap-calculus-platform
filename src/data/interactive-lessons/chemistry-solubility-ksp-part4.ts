export const chemSolubilityKspPart4Data = {
  topicSlug: 'solubility-ksp',
  sections: [
    {
      id: 'sk4-intro',
      type: 'text' as const,
      content: `# 💎 Predicting Precipitation — Q vs K_sp

**Part 4 of 7 — Will a Precipitate Form?**

---

### Topics in This Part

| Section |
|---------|
| ⚛️ The Ion Product, Q_sp |
| Comparing Q_sp to K_sp |
| Key Steps |
| 📌 Don't Forget Dilution! |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'sk4-qsp',
      type: 'text' as const,
      content: `
## ⚛️ The Ion Product, Q_sp

$Q_{sp}$ is calculated exactly like $K_{sp}$, but using the **actual** (non-equilibrium) ion concentrations in solution:

$$\\boxed{Q_{sp} = [\\text{M}^{n+}]^a_{\\text{actual}}[\\text{X}^{m-}]^b_{\\text{actual}}}$$


---

### Comparing Q_sp to K_sp

| Condition | Meaning | Result |
|-----------|---------|--------|
| $Q_{sp} < K_{sp}$ | Solution is unsaturated | No precipitate; more solid can dissolve |
| $Q_{sp} = K_{sp}$ | Solution is exactly saturated | At equilibrium; no change |
| $Q_{sp} > K_{sp}$ | Solution is supersaturated | **Precipitate forms** until $Q_{sp} = K_{sp}$ |

> 💡 **Tip:** If $Q_{sp} > K_{sp}$, a precipitate **will** form. The system removes ions from solution until $Q_{sp}$ decreases back to $K_{sp}$.

> 🔑 **Key Concept:** Always calculate $Q_{sp}$ using actual ion concentrations (after dilution), then compare to $K_{sp}$. This three-step method works for any precipitation prediction.

---

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
## 📌 Don't Forget Dilution!

When mixing two solutions, the total volume increases and concentrations decrease:

$$\\boxed{[\\text{ion}]_{\\text{after mixing}} = \\frac{[\\text{ion}]_{\\text{initial}} \\times V_{\\text{initial}}}{V_{\\text{total}}}}$$

> ⚠️ **Warning:** Always account for dilution when mixing solutions! Forgetting this step overestimates $Q_{sp}$ and can lead to incorrect precipitation predictions.

---

> **Problem:** 50.0 mL of $0.0020$ M $\\text{Pb(NO}_3)_2$ is mixed with 50.0 mL of $0.0040$ M NaCl. Does $PbCl_{2}$ precipitate? ($K_{sp} = 1.7 \\times 10^{-5}$)

> **Solution:**

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
              'More of the solid dissolves until $Q_{sp} = K_{sp}$',
              'Nothing, because the solution is already at equilibrium',
              'A precipitate forms until $Q_{sp} = K_{sp}$',
              '$K_{sp}$ increases until it matches the new $Q_{sp}$'
            ],
            correctAnswer: 2,
            explanation: 'When $Q_{sp} > K_{sp}$, the solution is supersaturated. Ions combine to form a precipitate, reducing ion concentrations until $Q_{sp}$ equals $K_{sp}$. Dissolving more solid would push $Q_{sp}$ even higher, and $K_{sp}$ is fixed at a given temperature.'
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

25.0 mL of $0.0010$ M $AgNO_{3}$ is mixed with 75.0 mL of $0.0020$ M NaCl.

$K_{sp}(\\text{AgCl}) = 1.8 \\times 10^{-10}$

**1)** What is $[\\text{Ag}^+]$ after mixing? (Enter in scientific notation, e.g. 6.0e-5)

**2)** What is $[\\text{Cl}^-]$ after mixing? (Enter in scientific notation, e.g. 4.0e-2)

**3)** What is $Q_{sp}$? (Enter in scientific notation, e.g. 7.25e-9)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        questions: [{ question: '1)', answer: '2.5e-4', acceptableAnswers: ['2.5e-4'] }, { question: '2)', answer: '1.5e-3', acceptableAnswers: ['1.5e-3'] }, { question: '3)', answer: '3.75e-7', acceptableAnswers: ['3.75e-7', '3.8e-7'] }],
        hint1: '$[\\text{Ag}^+] = (0.0010)(25.0)/(100.0)$',
        hint2: '$[\\text{Cl}^-] = (0.0020)(75.0)/(100.0)$',
        hint3: '$Q_{sp} = [\\text{Ag}^+][\\text{Cl}^-] = (2.5 \\times 10^{-4})(1.5 \\times 10^{-3})$',
        explanation: '1) $[\\text{Ag}^+] = (0.0010)(25.0)/100.0 = 2.5 \\times 10^{-4}$ M. 2) $[\\text{Cl}^-] = (0.0020)(75.0)/100.0 = 1.5 \\times 10^{-3}$ M. 3) $Q_{sp} = (2.5 \\times 10^{-4})(1.5 \\times 10^{-3}) = 3.75 \\times 10^{-7}$. Since $Q_{sp} = 3.75 \\times 10^{-7} \\gg K_{sp} = 1.8 \\times 10^{-10}$, a precipitate FORMS.'
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
            options: ['equilibrium concentrations', 'actual ion concentrations in solution', 'the mass of solid initially added', 'the K_sp value itself']
          },
          {
            label: 'When mixing solutions, you must account for',
            options: ['the temperature change on mixing', 'dilution of both solutions', 'the molar masses of the salts', 'the color of the precipitate']
          },
          {
            label: 'If Q_sp < K_sp, the solution is',
            options: ['supersaturated — a precipitate forms', 'unsaturated — more can dissolve', 'at equilibrium with the solid', 'saturated — no more can dissolve']
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
            question: 'Equal volumes of $1.0 \\times 10^{-3}$ M $BaCl_{2}$ and $1.0 \\times 10^{-3}$ M $Na_{2}SO_{4}$ are mixed. $K_{sp}(\\text{BaSO}_4) = 1.1 \\times 10^{-10}$. Does $BaSO_{4}$ precipitate?',
            options: [
              'No — $Q_{sp}$ is less than $K_{sp}$ after dilution',
              'Yes — $Q_{sp} = (5.0 \\times 10^{-4})^2 = 2.5 \\times 10^{-7} > K_{sp}$',
              'Cannot determine without knowing the exact volume',
              'No — sulfates are soluble, so $BaSO_{4}$ stays dissolved'
            ],
            correctAnswer: 1,
            explanation: 'After mixing equal volumes, each ion is diluted by half: $[\\text{Ba}^{2+}] = [\\text{SO}_4^{2-}] = 5.0 \\times 10^{-4}$ M. $Q_{sp} = (5.0 \\times 10^{-4})^2 = 2.5 \\times 10^{-7} \\gg 1.1 \\times 10^{-10} = K_{sp}$. Yes, $BaSO_{4}$ precipitates — it is one of the exceptions to the rule that sulfates are soluble. The exact volume doesn\'t matter, only that the volumes are equal.'
          },
          {
            question: 'To a solution with $[\\text{Ag}^+] = 1.0 \\times 10^{-5}$ M, NaCl is slowly added. At what $[\\text{Cl}^-]$ does AgCl begin to precipitate? ($K_{sp} = 1.8 \\times 10^{-10}$)',
            options: [
              '$[\\text{Cl}^-] = \\sqrt{K_{sp}} = 1.3 \\times 10^{-5}$ M',
              '$[\\text{Cl}^-] = K_{sp} \\times [\\text{Ag}^+] = 1.8 \\times 10^{-15}$ M',
              '$[\\text{Cl}^-] = [\\text{Ag}^+]/K_{sp} = 5.6 \\times 10^{4}$ M',
              '$[\\text{Cl}^-] = K_{sp}/[\\text{Ag}^+] = 1.8 \\times 10^{-5}$ M'
            ],
            correctAnswer: 3,
            explanation: 'Precipitation begins when $Q_{sp} = K_{sp}$: $[\\text{Ag}^+][\\text{Cl}^-] = 1.8 \\times 10^{-10}$. $[\\text{Cl}^-] = 1.8 \\times 10^{-10}/(1.0 \\times 10^{-5}) = 1.8 \\times 10^{-5}$ M. Multiplying instead of dividing gives $1.8 \\times 10^{-15}$ M, dividing the wrong way gives an impossible $5.6 \\times 10^{4}$ M, and $\\sqrt{K_{sp}}$ is the solubility of AgCl in pure water, which ignores the $Ag^{+}$ already present.'
          }
        ]
      }
    }
  ]
}
