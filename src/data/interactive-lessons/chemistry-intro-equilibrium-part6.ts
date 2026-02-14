export const chemIntroEquilibriumPart6Data = {
  topicSlug: 'intro-equilibrium',
  sections: [
    {
      id: 'ie6-intro',
      type: 'text' as const,
      content: `
# 🧮 Problem-Solving Workshop

**Part 6 of 7 — Equilibrium Expression and K Calculations**

This workshop brings together everything from Parts 1–5: writing equilibrium expressions, calculating K, manipulating K values, and interpreting results. These multi-step problems mirror AP-level questions.
      `
    },
    {
      id: 'ie6-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

### Steps for Equilibrium Expression Problems

1. **Write** the balanced equation
2. **Identify** phases — exclude solids (s) and liquids (l)
3. **Write** the $K$ expression: products over reactants with coefficient exponents
4. **Plug in** equilibrium values
5. **Check** — does the magnitude of K make sense?

### Key Formulas

| Formula | When to Use |
|---------|-------------|
| $K_c = \\frac{[\\text{products}]}{[\\text{reactants}]}$ | All K calculations |
| $K_p = K_c(RT)^{\\Delta n}$ | Converting between $K_c$ and $K_p$ |
| Reverse: $K\' = 1/K$ | Flipping the reaction |
| Multiply by $n$: $K\' = K^n$ | Scaling coefficients |
| Add reactions: $K = K_1 \\times K_2$ | Combining reactions |
      `
    },
    {
      id: 'ie6-problem1',
      type: 'text' as const,
      content: `
## Worked Example 1: Calculating $K_c$

**Problem:** At 450°C, the equilibrium concentrations for the reaction

$$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$$

are: $[\\text{H}_2] = 0.0050$ M, $[\\text{I}_2] = 0.0050$ M, $[\\text{HI}] = 0.040$ M.

**Solution:**

$$K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = \\frac{(0.040)^2}{(0.0050)(0.0050)}$$

$$K_c = \\frac{1.6 \\times 10^{-3}}{2.5 \\times 10^{-5}} = 64$$

Since $K > 1$, products (HI) are favored at this temperature.
      `
    },
    {
      id: 'ie6-practice1',
      type: 'input-boxes' as const,
      content: `
**Practice Problem 1** 🧮

For the reaction: $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$

At equilibrium: $[\\text{PCl}_5] = 0.20$ M, $[\\text{PCl}_3] = 0.30$ M, $[\\text{Cl}_2] = 0.30$ M

1) Calculate $K_c$ (Enter to 2 decimal places)

2) Is the reaction product-favored or reactant-favored? (Enter "product-favored" or "reactant-favored")

3) What is $\\Delta n$ for this reaction? (Enter as an integer with sign, e.g. +1)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.45', 'reactant-favored', '+1'],
        hint1: '$K_c = \\frac{[\\text{PCl}_3][\\text{Cl}_2]}{[\\text{PCl}_5]} = \\frac{(0.30)(0.30)}{0.20}$',
        hint2: '$K_c = 0.45 < 1$, so reactants are favored.',
        hint3: '$\\Delta n = (1 + 1) - 1 = +1$',
        explanation: '1) $K_c = \\frac{(0.30)(0.30)}{0.20} = \\frac{0.09}{0.20} = 0.45$. 2) Since $K_c = 0.45 < 1$, the reaction is reactant-favored. 3) $\\Delta n = 2 - 1 = +1$.'
      }
    },
    {
      id: 'ie6-problem2',
      type: 'text' as const,
      content: `
## Worked Example 2: Combining K Values

**Problem:** Given:

$$\\text{Reaction 1: } \\text{NO}(g) + \\frac{1}{2}\\text{O}_2(g) \\rightleftharpoons \\text{NO}_2(g) \\quad K_1 = 1.3 \\times 10^{6}$$

Find $K$ for:

$$2\\,\\text{NO}_2(g) \\rightleftharpoons 2\\,\\text{NO}(g) + \\text{O}_2(g)$$

**Solution:**

Step 1: The target is the reverse of Reaction 1, multiplied by 2.

Step 2: Reverse Reaction 1: $K_{\\text{rev}} = 1/K_1 = 1/(1.3 \\times 10^6) = 7.7 \\times 10^{-7}$

Step 3: Multiply by 2: $K = (K_{\\text{rev}})^2 = (7.7 \\times 10^{-7})^2 = 5.9 \\times 10^{-13}$
      `
    },
    {
      id: 'ie6-practice2',
      type: 'multiple-choice' as const,
      content: `
**Practice Problem 2 — Combining K Values** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Given: A ⇌ 2B, $K_1 = 4.0$ and B ⇌ C, $K_2 = 3.0$. Find K for A ⇌ 2C.',
            options: [
              '$12$',
              '$36$',
              '$7$',
              '$144$'
            ],
            correctAnswer: 1,
            explanation: 'A ⇌ 2B has $K_1 = 4.0$. We need 2(B ⇌ C), so $K_2\' = K_2^2 = 9.0$. Overall: $K = K_1 \\times K_2\' = 4.0 \\times 9.0 = 36$.'
          },
          {
            question: 'Given: $\\text{N}_2 + \\text{O}_2 \\rightleftharpoons 2\\,\\text{NO}$, $K = 4.7 \\times 10^{-31}$. What is K for $\\text{NO} \\rightleftharpoons \\frac{1}{2}\\text{N}_2 + \\frac{1}{2}\\text{O}_2$?',
            options: [
              '$\\sqrt{4.7 \\times 10^{-31}}$',
              '$\\frac{1}{\\sqrt{4.7 \\times 10^{-31}}}$',
              '$\\frac{1}{4.7 \\times 10^{-31}}$',
              '$(4.7 \\times 10^{-31})^2$'
            ],
            correctAnswer: 1,
            explanation: 'The target is the reverse of the original divided by 2. Reverse: $K\' = 1/K$. Multiply by 1/2: $K\'\' = (1/K)^{1/2} = 1/\\sqrt{K}$.'
          }
        ]
      }
    },
    {
      id: 'ie6-practice3',
      type: 'input-boxes' as const,
      content: `
**Practice Problem 3 — $K_c$ to $K_p$ Conversion** 🧮

For $2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{SO}_3(g)$ at $T = 1000$ K, $K_c = 280$.

1) What is $\\Delta n$? (Enter as an integer with sign)

2) Calculate $RT$ using $R = 0.08206$ L·atm/(mol·K). (Round to 1 decimal place)

3) Calculate $K_p$. (Round to 1 decimal place)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '82.1', '3.4'],
        hint1: '$\\Delta n = 2 - (2 + 1) = -1$',
        hint2: '$RT = 0.08206 \\times 1000 = 82.06 \\approx 82.1$',
        hint3: '$K_p = K_c(RT)^{\\Delta n} = 280 \\times (82.1)^{-1} = 280/82.1$',
        explanation: '1) $\\Delta n = 2 - 3 = -1$. 2) $RT = 0.08206 \\times 1000 = 82.1$. 3) $K_p = 280 \\times (82.1)^{-1} = 280/82.1 = 3.4$.'
      }
    },
    {
      id: 'ie6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'At equilibrium for $\\text{COCl}_2(g) \\rightleftharpoons \\text{CO}(g) + \\text{Cl}_2(g)$: $[\\text{COCl}_2] = 0.50$, $[\\text{CO}] = 0.050$, $[\\text{Cl}_2] = 0.050$ M. What is $K_c$?',
            options: [
              '$0.005$',
              '$0.50$',
              '$5.0 \\times 10^{-3}$',
              '$0.005$ and $5.0 \\times 10^{-3}$ are both correct'
            ],
            correctAnswer: 3,
            explanation: '$K_c = \\frac{(0.050)(0.050)}{0.50} = \\frac{0.0025}{0.50} = 0.005 = 5.0 \\times 10^{-3}$. Both representations are equivalent.'
          },
          {
            question: 'For $2\\,\\text{A}(g) \\rightleftharpoons \\text{B}(g)$, $K_c = 100$ at 500 K. What is $K_p$?',
            options: [
              '$100 \\times (0.08206 \\times 500)^{-1} \\approx 2.4$',
              '$100 \\times (0.08206 \\times 500)^{+1} \\approx 4103$',
              '$100$',
              '$100 \\times (0.08206 \\times 500)^{-2} \\approx 0.059$'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta n = 1 - 2 = -1$. $K_p = 100 \\times (41.03)^{-1} = 100/41.03 \\approx 2.4$.'
          }
        ]
      }
    }
  ]
}
