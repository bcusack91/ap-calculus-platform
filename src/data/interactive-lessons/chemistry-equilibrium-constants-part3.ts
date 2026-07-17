export const chemEquilibriumConstantsPart3Data = {
  topicSlug: 'equilibrium-constants-expressions',
  sections: [
    {
      id: 'ece3-intro',
      type: 'text' as const,
      content: `# 🔄 $K_c$ vs $K_p$

**Part 3 of 7 — Concentration vs. Pressure Equilibrium Constants**

---

### Topics in This Part

| Section |
|---------|
| 💨 $K_p$ — The Pressure-Based Constant |
| Example |
| 🔄 Converting Between $K_c$ and $K_p$ |
| Finding $\\Delta n$ |
| When $\\Delta n = 0$ |

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
      `
    },
    {
      id: 'ece3-conversion',
      type: 'text' as const,
      content: `
## 🔄 Converting Between $K_c$ and $K_p$

The relationship between $K_p$ and $K_c$ is:

$$\\boxed{K_p = K_c(RT)^{\\Delta n}}$$

where:
- $R = 0.08206\\;\\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\text{}\\cdot\\text{K}^{-1}$
- $T$ = temperature in **Kelvin**
- $\\Delta n$ = (moles of gaseous products) − (moles of gaseous reactants)


---

### Finding $\\Delta n$

For $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$:

$$\\Delta n = 2 - (1 + 3) = 2 - 4 = -2$$


---

### When $\\Delta n = 0$

If the total moles of gas are the same on both sides:

$$K_p = K_c(RT)^0 = K_c$$

> 🔑 **Key Concept:** When $\\Delta n = 0$, $K_p = K_c$ — they are equal!


---

> **Problem:** For $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$ at 25°C, $K_c = 4.61 \\times 10^{-3}$. Calculate $K_p$.

> **Solution:**

$\\Delta n = 2 - 1 = 1$

$$K_p = K_c(RT)^{\\Delta n} = (4.61 \\times 10^{-3})(0.08206 \\times 298)^1$$

$$K_p = (4.61 \\times 10^{-3})(24.45) = 0.113$$
      `
    },
    {
      id: 'ece3-mcq-kp',
      type: 'multiple-choice' as const,
      content: `
**$K_c$ vs $K_p$ — Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$, what is $\\Delta n$?',
            options: [
              '$\\Delta n = -2$',
              '$\\Delta n = 0$',
              '$\\Delta n = 1$',
              '$\\Delta n = 2$'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta n$ = moles of gaseous products − moles of gaseous reactants = $2 - (1 + 1) = 0$. Since $\\Delta n = 0$, $K_p = K_c$ for this reaction.'
          },
          {
            question: 'For which reaction is $K_p = K_c$?',
            options: [
              '$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$',
              '$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$',
              '$\\text{H}_2(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\,\\text{HCl}(g)$',
              '$\\text{2 SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons \\text{2 SO}_3(g)$'
            ],
            correctAnswer: 2,
            explanation: '$K_p = K_c$ when $\\Delta n = 0$. For $\\text{H}_2 + \\text{Cl}_2 \\rightleftharpoons 2\\,\\text{HCl}$: $\\Delta n = 2 - 2 = 0$. The others all have $\\Delta n \\neq 0$.'
          },
          {
            question: 'If $K_c = 0.50$ at 500 K for a reaction where $\\Delta n = 2$, which is true?',
            options: [
              '$K_p = K_c$ because temperature does not matter',
              '$K_p < K_c$ because $\\Delta n > 0$',
              '$K_p > K_c$ because $(RT)^2 > 1$',
              'Cannot determine without knowing $R$'
            ],
            correctAnswer: 2,
            explanation: '$K_p = K_c(RT)^{\\Delta n} = 0.50 \\times (0.08206 \\times 500)^2 = 0.50 \\times (41.03)^2 = 0.50 \\times 1683.5 = 841.7$. Since $(RT)^2 \\gg 1$ and $\\Delta n > 0$, $K_p > K_c$.'
          }
        ]
      }
    },
    {
      id: 'ece3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — $K_c$ and $K_p$** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$K_p$ uses _______ instead of molar concentrations',
            options: ['mole fractions', 'partial pressures', 'total pressure', 'molality']
          },
          {
            label: 'In the formula $K_p = K_c(RT)^{\\Delta n}$, $T$ must be in',
            options: ['Celsius', 'Fahrenheit', 'Kelvin', 'any temperature unit']
          },
          {
            label: 'When $\\Delta n$ is negative, $K_p$ is _______ than $K_c$',
            options: ['larger', 'smaller', 'equal to', 'unrelated to']
          },
          {
            label: '$K_p$ is only used for equilibria involving',
            options: ['aqueous species', 'gaseous species', 'solid species', 'all phases']
          }
        ],
        correctAnswers: ['partial pressures', 'Kelvin', 'smaller', 'gaseous species'],
        hint1: '$K_p$ stands for pressure.',
        hint2: 'The ideal gas law uses absolute temperature.',
        hint3: 'When $\\Delta n < 0$, $(RT)^{\\Delta n} < 1$.',
        explanation: '$K_p$ uses partial pressures and applies to gas-phase equilibria. Temperature must be in Kelvin. When $\\Delta n < 0$, $(RT)^{\\Delta n} < 1$, making $K_p < K_c$.'
      }
    },
    {
      id: 'ece3-input-calculation',
      type: 'input-boxes' as const,
      content: `
**Calculate $\\Delta n$** 🧮

Find $\\Delta n$ for each reaction (enter an integer, use a negative sign if needed):

**1)** $\\text{2 SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons \\text{2 SO}_3(g)$

**2)** $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$

**3)** $\\text{CO}(g) + 2\\,\\text{H}_2(g) \\rightleftharpoons \\text{CH}_3\\text{OH}(g)$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '1', '-2'],
        hint1: '$\\Delta n$ = moles of gas products − moles of gas reactants.',
        hint2: 'For reaction 1: products have 2 moles of gas, reactants have 2 + 1 = 3.',
        hint3: 'For reaction 3: products have 1 mole of gas, reactants have 1 + 2 = 3.',
        explanation: '1) $\\Delta n = 2 - 3 = -1$. 2) $\\Delta n = 2 - 1 = 1$. 3) $\\Delta n = 1 - 3 = -2$.'
      }
    },
    {
      id: 'ece3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Check — $K_c$ vs $K_p$** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{C}(s) + \\text{CO}_2(g) \\rightleftharpoons 2\\,\\text{CO}(g)$, what is $\\Delta n$ for the $K_p = K_c(RT)^{\\Delta n}$ conversion?',
            options: [
              '$\\Delta n = 0$',
              '$\\Delta n = 1$',
              '$\\Delta n = 2$',
              '$\\Delta n = -1$'
            ],
            correctAnswer: 1,
            explanation: 'Only count **gaseous** species! C(s) is excluded. Gaseous products: 2 mol CO. Gaseous reactants: 1 mol $CO_{2}$. $\\Delta n = 2 - 1 = 1$.'
          },
          {
            question: 'At 300 K, $K_c = 10.0$ for a reaction with $\\Delta n = -1$. Using $R = 0.08206$, what is the approximate value of $K_p$?',
            options: [
              '$K_p = 10.0$',
              '$K_p = 246$',
              '$K_p = 0.41$',
              '$K_p = 0.0041$'
            ],
            correctAnswer: 2,
            explanation: '$K_p = K_c(RT)^{\\Delta n} = 10.0 \\times (0.08206 \\times 300)^{-1} = 10.0 \\times (24.62)^{-1} = 10.0 / 24.62 \\approx 0.41$.'
          }
        ]
      }
    }
  ]
}
