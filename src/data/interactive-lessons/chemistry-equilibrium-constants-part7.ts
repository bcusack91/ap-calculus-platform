export const chemEquilibriumConstantsPart7Data = {
  topicSlug: 'equilibrium-constants-expressions',
  sections: [
    {
      id: 'ece7-intro',
      type: 'text' as const,
      content: `# 🎯 AP Review — Equilibrium Constants & Expressions

**Part 7 of 7 — Putting It All Together**

---

### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations.

> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.

---

### What You'll Master in Part 7
- Solving AP-style questions that integrate multiple concepts from this unit
- Writing clear, concise explanations using proper chemistry terminology
- Identifying and avoiding common AP exam traps and mistakes`
    },
    {
      id: 'ece7-summary',
      type: 'text' as const,
      content: `
## 🔄 Key Concepts Review

### The Big Picture

| Concept | Formula / Rule |
|---------|---------------|
| $K_c$ expression | $\\frac{[\\text{products}]^{\\text{coeff}}}{[\\text{reactants}]^{\\text{coeff}}}$ |
| Exclude from $K$ | Pure solids $(s)$ and pure liquids $(l)$ |
| $K_p$ expression | Same form but with partial pressures |
| $K_p$ ↔ $K_c$ | $K_p = K_c(RT)^{\\Delta n}$ |
| Reverse reaction | $K_{\\text{rev}} = 1/K$ |
| Multiply by $n$ | $K_{\\text{new}} = K^n$ |
| Add reactions | $K_{\\text{overall}} = K_1 \\times K_2$ |
| $Q < K$ | Shift right (forward) |
| $Q > K$ | Shift left (reverse) |
| $Q = K$ | At equilibrium |


---

> ⚠️ **Common AP Mistakes to Avoid:**
> 1. **Forgetting to exclude solids/liquids** from the $K$ expression
> 2. **Confusing coefficients as multipliers** instead of exponents
> 3. **Using Celsius instead of Kelvin** in $K_p = K_c(RT)^{\\Delta n}$
> 4. **Counting all moles for $\\Delta n$** instead of only gaseous moles
> 5. **Thinking $K$ tells us about rate** — it only describes the equilibrium position
      `
    },
    {
      id: 'ece7-mcq-comprehensive',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{2 Cr}(s) + 3\\,\\text{Cl}_2(g) \\rightleftharpoons \\text{2 CrCl}_3(s)$, what is the $K_c$ expression?',
            options: [
              '$K_c = \\frac{[\\text{CrCl}_3]^2}{[\\text{Cr}]^2[\\text{Cl}_2]^3}$',
              '$K_c = \\frac{1}{[\\text{Cl}_2]^3}$',
              '$K_c = [\\text{Cl}_2]^3$',
              '$K_c = 1$'
            ],
            correctAnswer: 1,
            explanation: 'Both Cr(s) and CrCl₃(s) are pure solids — excluded! Only Cl₂(g) remains. With Cl₂ only in the denominator: $K_c = \\frac{1}{[\\text{Cl}_2]^3}$.'
          },
          {
            question: 'Given: $\\text{A} \\rightleftharpoons \\text{B}$, $K_1 = 0.50$ and $\\text{B} \\rightleftharpoons \\text{C}$, $K_2 = 8.0$. What is $K$ for $2\\,\\text{C} \\rightleftharpoons 2\\,\\text{A}$?',
            options: [
              '$0.0625$',
              '$16.0$',
              '$4.0$',
              '$0.25$'
            ],
            correctAnswer: 0,
            explanation: 'First, $\\text{A} \\rightleftharpoons \\text{C}$: $K = K_1 \\times K_2 = 0.50 \\times 8.0 = 4.0$. Then reverse: $\\text{C} \\rightleftharpoons \\text{A}$: $K = 1/4.0 = 0.25$. Then double coefficients: $2\\,\\text{C} \\rightleftharpoons 2\\,\\text{A}$: $K = 0.25^2 = 0.0625$.'
          },
          {
            question: 'At 500 K, $K_c = 6.0$ for a reaction with $\\Delta n = -2$. Given $R = 0.08206$, which is closest to $K_p$?',
            options: [
              '$K_p = 6.0$',
              '$K_p = 3.6 \\times 10^{-3}$',
              '$K_p = 1.0 \\times 10^4$',
              '$K_p = 246$'
            ],
            correctAnswer: 1,
            explanation: '$K_p = K_c(RT)^{\\Delta n} = 6.0 \\times (0.08206 \\times 500)^{-2} = 6.0 \\times (41.03)^{-2} = 6.0 \\times (1/1683.5) = 6.0 \\times 5.94 \\times 10^{-4} \\approx 3.6 \\times 10^{-3}$.'
          },
          {
            question: 'For $\\text{SO}_2\\text{Cl}_2(g) \\rightleftharpoons \\text{SO}_2(g) + \\text{Cl}_2(g)$, $K_c = 2.99 \\times 10^{-7}$ at 227°C. This reaction at equilibrium contains mostly:',
            options: [
              'Products ($\\text{SO}_2$ and $\\text{Cl}_2$)',
              'Reactant ($\\text{SO}_2\\text{Cl}_2$)',
              'Equal amounts of products and reactant',
              'Cannot determine without concentrations'
            ],
            correctAnswer: 1,
            explanation: '$K_c = 2.99 \\times 10^{-7} \\ll 1$, so the equilibrium lies far to the left. The mixture is almost entirely reactant ($\\text{SO}_2\\text{Cl}_2$).'
          }
        ]
      }
    },
    {
      id: 'ece7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Check** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the expression $K_p = K_c(RT)^{\\Delta n}$, $\\Delta n$ counts moles of',
            options: ['all species', 'only gaseous species', 'only aqueous species', 'only solid species']
          },
          {
            label: 'If you triple all stoichiometric coefficients, the new $K$ is',
            options: ['$3K$', '$K/3$', '$K^3$', '$K^{1/3}$']
          },
          {
            label: 'The equilibrium constant is affected by changes in',
            options: ['concentration', 'pressure', 'temperature', 'adding a catalyst']
          },
          {
            label: 'When $Q < K$ and the system shifts right, $Q$ will _______ until $Q = K$',
            options: ['decrease', 'increase', 'stay the same', 'fluctuate randomly']
          }
        ],
        correctAnswers: ['only gaseous species', '$K^3$', 'temperature', 'increase'],
        hint1: 'Only species with variable concentrations/pressures are counted in $\\Delta n$.',
        hint2: 'Coefficients become exponents on $K$.',
        hint3: '$K$ is a thermodynamic constant that depends on energy, which depends on temperature.',
        explanation: '$\\Delta n$ counts only gaseous moles. Tripling coefficients cubes $K$. Only temperature changes $K$. When $Q < K$, making products increases $Q$ toward $K$.'
      }
    },
    {
      id: 'ece7-input-ap-problems',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

For $\\text{2 SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons \\text{2 SO}_3(g)$

At equilibrium at 700 K: $[\\text{SO}_2] = 0.10\\;\\text{M}$, $[\\text{O}_2] = 0.20\\;\\text{M}$, $[\\text{SO}_3] = 0.60\\;\\text{M}$

**1)** Calculate $K_c$ (enter an integer)

**2)** What is $\\Delta n$ for this reaction? (enter an integer)

**3)** Is $K_p$ larger or smaller than $K_c$ for this reaction? (Enter "larger" or "smaller")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['180', '-1', 'smaller'],
        hint1: '$K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2[\\text{O}_2]}$.',
        hint2: '$\\Delta n$ = gaseous product moles − gaseous reactant moles.',
        hint3: 'When $\\Delta n < 0$, $(RT)^{\\Delta n} < 1$, so $K_p = K_c \\times (\\text{something} < 1)$.',
        explanation: '1) $K_c = \\frac{(0.60)^2}{(0.10)^2(0.20)} = \\frac{0.36}{0.002} = 180$. 2) $\\Delta n = 2 - 3 = -1$. 3) Since $\\Delta n = -1$, $K_p = K_c(RT)^{-1} = K_c/(RT)$. Since $RT > 1$, $K_p < K_c$, so smaller.'
      }
    },
    {
      id: 'ece7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Check — Equilibrium Constants & Expressions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'At 25°C, the decomposition of $\\text{N}_2\\text{O}_5$ has $K_c = 3.4 \\times 10^{18}$. At 35°C, $K_c = 1.2 \\times 10^{19}$. What can you conclude?',
            options: [
              'The reaction is exothermic because $K$ increases with temperature',
              'The reaction is endothermic because $K$ increases with temperature',
              'Temperature does not affect this reaction',
              'The reaction must be very fast'
            ],
            correctAnswer: 1,
            explanation: 'When temperature increases and $K$ increases, the forward reaction is favored by heat input, meaning it is endothermic. For an endothermic reaction, heat is like a reactant — adding it shifts equilibrium right, increasing $K$.'
          },
          {
            question: 'For $\\text{2 H}_2\\text{S}(g) \\rightleftharpoons 2\\,\\text{H}_2(g) + \\text{S}_2(g)$, $K_c = 1.67 \\times 10^{-7}$ at 800°C. If currently $Q = 5.0 \\times 10^{-6}$, what will happen?',
            options: [
              'More $\\text{H}_2$ and $\\text{S}_2$ will form',
              'More $\\text{H}_2\\text{S}$ will form',
              'Nothing — the system is at equilibrium',
              'The reaction will stop completely'
            ],
            correctAnswer: 1,
            explanation: '$Q = 5.0 \\times 10^{-6} > K = 1.67 \\times 10^{-7}$, so there are too many products. The reaction shifts left, converting H₂ and S₂ back into H₂S.'
          }
        ]
      }
    }
  ]
}
