export const chemIntroEquilibriumPart2Data = {
  topicSlug: 'intro-equilibrium',
  sections: [
    {
      id: 'ie2-intro',
      type: 'text' as const,
      content: `
# ⚖️ Equilibrium Expressions: $K_c$ and $K_p$

**Part 2 of 7 — Writing and Using Equilibrium Constants**

The equilibrium constant quantifies the ratio of product concentrations to reactant concentrations at equilibrium. There are two forms: $K_c$ (using molar concentrations) and $K_p$ (using partial pressures for gaseous systems).
      `
    },
    {
      id: 'ie2-kc-expression',
      type: 'text' as const,
      content: `
## The Equilibrium Constant $K_c$

For the general reaction:

$$aA + bB \\rightleftharpoons cC + dD$$

The equilibrium constant expression is:

$$K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$$

### Rules for Writing $K_c$

1. **Products** go in the numerator, **reactants** in the denominator
2. Each concentration is raised to the power of its **stoichiometric coefficient**
3. $K_c$ uses **molar concentrations** (mol/L)
4. $K_c$ is dimensionless by convention on the AP exam

### Example

$$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$$

$$K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$$
      `
    },
    {
      id: 'ie2-kp-expression',
      type: 'text' as const,
      content: `
## The Equilibrium Constant $K_p$

For gaseous reactions, we can use partial pressures instead of concentrations:

$$K_p = \\frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}$$

### Relationship Between $K_c$ and $K_p$

$$K_p = K_c(RT)^{\\Delta n}$$

Where:
- $R = 0.08206$ L·atm/(mol·K)
- $T$ = temperature in Kelvin
- $\\Delta n = \\text{(moles of gaseous products)} - \\text{(moles of gaseous reactants)}$

### Example

For $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$:

$$\\Delta n = 2 - (1 + 3) = -2$$

$$K_p = K_c(RT)^{-2}$$

### Special Case: $\\Delta n = 0$

When $\\Delta n = 0$, then $K_p = K_c$ because $(RT)^0 = 1$.
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
            question: 'For the reaction $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, what is $\\Delta n$?',
            options: [
              '$-1$',
              '$0$',
              '$+1$',
              '$+2$'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta n = (1 + 1) - 1 = +1$. There are 2 moles of gaseous products and 1 mole of gaseous reactant.'
          },
          {
            question: 'For which reaction is $K_p = K_c$?',
            options: [
              '$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$',
              '$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$',
              '$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$',
              '$2\\,\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$'
            ],
            correctAnswer: 1,
            explanation: '$K_p = K_c$ when $\\Delta n = 0$. For H₂ + I₂ ⇌ 2 HI: $\\Delta n = 2 - (1 + 1) = 0$. All other options have $\\Delta n \\neq 0$.'
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

1) Calculate $K_c$. (Enter as a whole number)

2) What is $\\Delta n$ for this reaction?

3) If $K_c = 8.0$ at this temperature, what is $K_p$? (Enter as a number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '0', '8.0'],
        hint1: '$K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = \\frac{(0.40)^2}{(0.10)(0.20)}$',
        hint2: '$\\Delta n = 2 - (1 + 1) = 0$',
        hint3: 'When $\\Delta n = 0$, $K_p = K_c(RT)^0 = K_c$.',
        explanation: '1) $K_c = \\frac{(0.40)^2}{(0.10)(0.20)} = \\frac{0.16}{0.02} = 8$. 2) $\\Delta n = 2 - 2 = 0$. 3) Since $\\Delta n = 0$, $K_p = K_c = 8.0$.'
      }
    },
    {
      id: 'ie2-kp-conversion',
      type: 'text' as const,
      content: `
## Worked Example: Converting $K_c$ to $K_p$

**Problem:** For $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$, $K_c = 0.500$ at $T = 400$ K. Find $K_p$.

**Solution:**

$$\\Delta n = 2 - (1 + 3) = -2$$

$$K_p = K_c(RT)^{\\Delta n} = 0.500 \\times (0.08206 \\times 400)^{-2}$$

$$K_p = 0.500 \\times (32.82)^{-2} = 0.500 \\times \\frac{1}{1077.4}$$

$$K_p = 0.500 \\times 9.28 \\times 10^{-4} = 4.64 \\times 10^{-4}$$

Notice that $K_p < K_c$ when $\\Delta n < 0$ (fewer moles of gas on the product side).
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
            label: 'When $\\Delta n > 0$, $K_p$ is',
            options: ['greater than $K_c$', 'less than $K_c$', 'equal to $K_c$', 'undefined']
          },
          {
            label: 'Stoichiometric coefficients appear in the $K$ expression as',
            options: ['multipliers', 'exponents', 'subscripts', 'denominators']
          }
        ],
        correctAnswers: [
          'mol/L',
          'only gases',
          'greater than $K_c$',
          'exponents'
        ],
        hint1: '$K_c$ stands for K-concentration — uses molarity.',
        hint2: 'Partial pressures are meaningful for gases.',
        hint3: '$K_p = K_c(RT)^{\\Delta n}$. If $\\Delta n > 0$ and $RT > 1$, then $K_p > K_c$.',
        explanation: '$K_c$ uses molarity (mol/L). $K_p$ uses partial pressures and applies to gaseous reactions. When $\\Delta n > 0$, the $(RT)^{\\Delta n}$ factor is greater than 1, so $K_p > K_c$. Coefficients become exponents in the equilibrium expression.'
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
            question: 'If $K_c = 6.0 \\times 10^5$ for a reaction at 500 K and $\\Delta n = +2$, then $K_p$ is approximately:',
            options: [
              '$1.0 \\times 10^9$',
              '$6.0 \\times 10^5$',
              '$3.6 \\times 10^2$',
              '$4.5 \\times 10^{-1}$'
            ],
            correctAnswer: 0,
            explanation: '$K_p = K_c(RT)^{\\Delta n} = 6.0 \\times 10^5 \\times (0.08206 \\times 500)^2 = 6.0 \\times 10^5 \\times (41.03)^2 = 6.0 \\times 10^5 \\times 1684 \\approx 1.0 \\times 10^9$.'
          }
        ]
      }
    }
  ]
}
