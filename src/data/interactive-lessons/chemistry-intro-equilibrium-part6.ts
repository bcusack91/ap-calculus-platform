export const chemIntroEquilibriumPart6Data = {
  topicSlug: 'intro-equilibrium',
  sections: [
    {
      id: 'ie6-intro',
      type: 'text' as const,
      content: `# 🧮 Problem-Solving Workshop

**Part 6 of 7 — Equilibrium Expression and K Calculations**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'ie6-strategy',
      type: 'text' as const,
      content: `
## 🛠️ Problem-Solving Strategy

### Steps for Equilibrium Expression Problems

1. **Write** the balanced equation
2. **Identify** phases — exclude solids (s) and liquids (l)
3. **Write** the $K$ expression: products over reactants with coefficient exponents
4. **Plug in** equilibrium values
5. **Check** — does the magnitude of K make sense?

> 💡 **Tip:** On the AP exam, always verify your answer: if $K \\gg 1$, products should dominate; if $K \\ll 1$, reactants should dominate.


---

### Key Formulas

| Formula | When to Use |
|---------|-------------|
| $K_c = \\frac{[\\text{products}]}{[\\text{reactants}]}$ | All K calculations |
| $K_p = \\frac{(P_{\\text{products}})}{(P_{\\text{reactants}})}$ | Gas equilibria given partial pressures |
| Reverse: $K\' = 1/K$ | Flipping the reaction |
| Multiply by $n$: $K\' = K^n$ | Scaling coefficients |
| Add reactions: $K = K_1 \\times K_2$ | Combining reactions |
      `
    },
    {
      id: 'ie6-problem1',
      type: 'text' as const,
      content: `
## 🔢 Worked Example 1: Calculating $K_c$

> **Problem:** At 450°C, the equilibrium concentrations for $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$ are: $[\\text{H}_2] = 0.0050$ M, $[\\text{I}_2] = 0.0050$ M, $[\\text{HI}] = 0.040$ M. Find $K_c$.

> **Solution:**

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

**1)** Calculate $K_c$ (Enter to 3 significant figures)

**2)** Is the reaction product-favored or reactant-favored? (Enter "product-favored" or "reactant-favored")

**3)** What is $K_c$ for the reverse reaction, $\\text{PCl}_3(g) + \\text{Cl}_2(g) \\rightleftharpoons \\text{PCl}_5(g)$? (to 2 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.45', 'reactant-favored', '2.2'],
        hint1: '$K_c = \\frac{[\\text{PCl}_3][\\text{Cl}_2]}{[\\text{PCl}_5]} = \\frac{(0.30)(0.30)}{0.20}$',
        hint2: '$K_c = 0.45 < 1$, so reactants are favored.',
        hint3: 'Reversing a reaction inverts $K$: $K_{\\text{rev}} = 1/0.45$.',
        explanation: '1) $K_c = \\frac{(0.30)(0.30)}{0.20} = \\frac{0.09}{0.20} = 0.45$. 2) Since $K_c = 0.45 < 1$, the reaction is reactant-favored. 3) $K_{\\text{rev}} = 1/0.45 = 2.2$.'
      }
    },
    {
      id: 'ie6-problem2',
      type: 'text' as const,
      content: `
## 🧪 Worked Example 2: Combining K Values

> **Problem:** Given $\\text{NO}(g) + \\frac{1}{2}\\text{O}_2(g) \\rightleftharpoons \\text{NO}_2(g)$, $K_1 = 1.3 \\times 10^{6}$. Find $K$ for $2\\,\\text{NO}_2(g) \\rightleftharpoons 2\\,\\text{NO}(g) + \\text{O}_2(g)$.

> **Solution:**

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
              '$(4.7 \\times 10^{-31})^{-1/2}$',
              '$\\frac{1}{4.7 \\times 10^{-31}}$',
              '$(4.7 \\times 10^{-31})^2$'
            ],
            correctAnswer: 1,
            explanation: 'The target is the reverse of the original divided by 2. Reverse: $K\' = 1/K$. Multiply by 1/2: $K\'\' = (1/K)^{1/2} = 1/\\sqrt{K} = K^{-1/2}$.'
          }
        ]
      }
    },
    {
      id: 'ie6-practice3',
      type: 'input-boxes' as const,
      content: `
**Practice Problem 3 — $K_p$ from Partial Pressures** 🧮

For $2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{SO}_3(g)$ at 1000 K, an equilibrium mixture has a total pressure of 2.00 atm. The mole fractions are $\\chi_{\\text{SO}_2} = 0.25$, $\\chi_{\\text{O}_2} = 0.25$, and $\\chi_{\\text{SO}_3} = 0.50$.

**1)** What is the partial pressure of $SO_{3}$ in atm? (Round to 2 significant figures)

**2)** What is the partial pressure of $SO_{2}$ in atm? (Round to 2 significant figures)

**3)** Calculate $K_p$. (Round to 2 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.0', '0.50', '8.0'],
        hint1: '$P_{\\text{SO}_3} = \\chi_{\\text{SO}_3} P_{\\text{total}} = (0.50)(2.00)$',
        hint2: '$P_{\\text{SO}_2} = (0.25)(2.00)$, and $P_{\\text{O}_2}$ is the same.',
        hint3: '$K_p = \\frac{(P_{\\text{SO}_3})^2}{(P_{\\text{SO}_2})^2(P_{\\text{O}_2})}$',
        explanation: '1) $P_{\\text{SO}_3} = (0.50)(2.00) = 1.0$ atm. 2) $P_{\\text{SO}_2} = (0.25)(2.00) = 0.50$ atm, and $P_{\\text{O}_2} = 0.50$ atm as well. 3) $K_p = \\frac{(1.0)^2}{(0.50)^2(0.50)} = \\frac{1.0}{0.125} = 8.0$.'
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
              '$2.0 \\times 10^{2}$',
              '$1.0 \\times 10^{-1}$',
              '$2.0 \\times 10^{-1}$',
              '$5.0 \\times 10^{-3}$'
            ],
            correctAnswer: 3,
            explanation: '$K_c = \\frac{(0.050)(0.050)}{0.50} = \\frac{0.0025}{0.50} = 5.0 \\times 10^{-3}$. Inverting the expression (reactants over products) gives $2.0 \\times 10^{2}$, using only one product term gives $0.050/0.50 = 1.0 \\times 10^{-1}$, and adding the product concentrations instead of multiplying gives $0.10/0.50 = 2.0 \\times 10^{-1}$.'
          },
          {
            question: 'For $2\\,\\text{A}(g) \\rightleftharpoons \\text{B}(g)$, $K_p = 100$ at 500 K. If $P_{\\text{A}} = 0.10$ atm at equilibrium, what is $P_{\\text{B}}$?',
            options: [
              '$1.0$ atm',
              '$10$ atm',
              '$0.10$ atm',
              '$1000$ atm'
            ],
            correctAnswer: 0,
            explanation: '$K_p = P_{\\text{B}}/(P_{\\text{A}})^2$, so $P_{\\text{B}} = K_p(P_{\\text{A}})^2 = 100 \\times (0.10)^2 = 1.0$ atm. Forgetting the square gives 10 atm, and dividing by $(P_{\\text{A}})^2$ instead of multiplying gives 1000 atm.'
          }
        ]
      }
    }
  ]
}
