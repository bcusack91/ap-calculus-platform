export const chemEquilibriumConstantsPart4Data = {
  topicSlug: 'equilibrium-constants-expressions',
  sections: [
    {
      id: 'ece4-intro',
      type: 'text' as const,
      content: `# 📏 Magnitude of K

**Part 4 of 7 — What the Size of $K$ Tells Us**

---

### Topics in This Part

| Section |
|---------|
| 📌 Interpreting the Magnitude of $K$ |
| Real-World Examples |
| 🔢 Calculating $K$ from Equilibrium Concentrations |
| Steps |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ece4-interpretation',
      type: 'text' as const,
      content: `
## 📌 Interpreting the Magnitude of $K$

The equilibrium constant tells us the **extent** to which a reaction proceeds:

| $K$ Value | Interpretation | Product/Reactant Ratio |
|-----------|---------------|----------------------|
| $K > 10^3$ | Reaction goes **nearly to completion** | Products dominate |
| $1 < K < 10^3$ | Products slightly favored | More products than reactants |
| $K \\approx 1$ | Neither side strongly favored | Comparable amounts |
| $10^{-3} < K < 1$ | Reactants slightly favored | More reactants than products |
| $K < 10^{-3}$ | Reaction **barely proceeds** | Reactants dominate |


---

### Real-World Examples

| Reaction | $K$ | Interpretation |
|----------|-----|---------------|
| $2\\,\\text{H}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{H}_2\\text{O}(g)$ at 500 K | $\\sim 10^{80}$ | Essentially irreversible — goes to completion |
| $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$ at 25°C | $4.6 \\times 10^{-3}$ | Reactants $(N_{2}O_{4})$ are favored |
| $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$ at 425°C | $54$ | Products (HI) are favored |


---

> 💡 **Key Point:** A very large $K$ does **not** mean the reaction is fast. $K$ tells us about equilibrium position (thermodynamics), not rate (kinetics).
      `
    },
    {
      id: 'ece4-mcq-magnitude',
      type: 'multiple-choice' as const,
      content: `
**Interpreting $K$ Values** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has $K = 3.2 \\times 10^{-15}$. At equilibrium, the mixture consists primarily of:',
            options: [
              'Products',
              'Reactants',
              'Equal amounts of products and reactants',
              'Cannot determine without knowing the reaction'
            ],
            correctAnswer: 1,
            explanation: '$K = 3.2 \\times 10^{-15} \\ll 1$ means the denominator (reactants) is much larger than the numerator (products). Reactants dominate the equilibrium mixture.'
          },
          {
            question: 'Which $K$ value indicates a reaction that goes nearly to completion?',
            options: [
              '$K = 1.0 \\times 10^{-8}$',
              '$K = 0.50$',
              '$K = 2.0$',
              '$K = 4.5 \\times 10^{12}$'
            ],
            correctAnswer: 3,
            explanation: '$K = 4.5 \\times 10^{12} \\gg 1$ means the equilibrium lies far to the right — products overwhelmingly dominate. The reaction essentially goes to completion.'
          },
          {
            question: 'A reaction has $K = 2.5 \\times 10^{20}$. What can you conclude about the **rate** of this reaction?',
            options: [
              'The reaction is extremely fast',
              'The reaction is extremely slow',
              'Nothing — $K$ tells us about equilibrium, not rate',
              'The forward rate is much greater than the reverse rate'
            ],
            correctAnswer: 2,
            explanation: '$K$ is a thermodynamic quantity that describes the equilibrium position. It says nothing about how fast equilibrium is reached. A reaction can have a huge $K$ but still be slow (like diamond → graphite).'
          }
        ]
      }
    },
    {
      id: 'ece4-calculating-k',
      type: 'text' as const,
      content: `
## 🔢 Calculating $K$ from Equilibrium Concentrations

If we know the equilibrium concentrations, we can calculate $K$ by direct substitution.


---

> **Problem:** For $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$, calculate $K_c$ given equilibrium concentrations: $[\\text{N}_2] = 0.50\\;\\text{M}$, $[\\text{H}_2] = 0.30\\;\\text{M}$, $[\\text{NH}_3] = 0.20\\;\\text{M}$.

> **Solution:**

$$K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3} = \\frac{(0.20)^2}{(0.50)(0.30)^3}$$

$$K_c = \\frac{0.040}{(0.50)(0.027)} = \\frac{0.040}{0.0135} = 2.96$$


---

### Steps

1. Write the balanced equation
2. Write the $K_c$ expression (products over reactants, with exponents)
3. Substitute equilibrium concentrations
4. Calculate — no units on $K$
      `
    },
    {
      id: 'ece4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Magnitude of $K$** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A large $K$ value means the equilibrium mixture is mostly',
            options: ['reactants', 'products', 'solvent', 'catalyst']
          },
          {
            label: 'If $K = 1$, the equilibrium contains',
            options: ['only products', 'only reactants', 'comparable amounts of products and reactants', 'no molecules at all']
          },
          {
            label: '$K$ provides information about a reaction\u2019s',
            options: ['rate', 'mechanism', 'equilibrium position', 'activation energy']
          },
          {
            label: 'If you increase temperature and $K$ gets larger, the forward reaction is',
            options: ['exothermic', 'endothermic', 'not affected by temperature', 'at equilibrium']
          }
        ],
        correctAnswers: ['products', 'comparable amounts of products and reactants', 'equilibrium position', 'endothermic'],
        hint1: 'Products are in the numerator of K.',
        hint2: 'K = 1 means the numerator equals the denominator.',
        hint3: 'Think about Le Chatelier\u2019s principle — heat acts like a reactant or product.',
        explanation: 'Large $K$ → mostly products. $K = 1$ → comparable amounts. $K$ describes the equilibrium position (not rate). If raising $T$ increases $K$, the forward reaction is endothermic (heat is a "reactant").'
      }
    },
    {
      id: 'ece4-input-calculations',
      type: 'input-boxes' as const,
      content: `
**Calculate $K_c$** 🧮

For $\\text{A}(g) \\rightleftharpoons 2\\,\\text{B}(g)$, the equilibrium concentrations are $[\\text{A}] = 0.40\\;\\text{M}$ and $[\\text{B}] = 0.80\\;\\text{M}$.

**1)** What is $K_c$? (Enter a number with one decimal place)

**2)** Are products or reactants favored? (Enter "products" or "reactants")

**3)** If the equation is reversed to $2\\,\\text{B}(g) \\rightleftharpoons \\text{A}(g)$, what is the new $K_c$? (Enter a number with two decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.6', 'products', '0.63'],
        hint1: '$K_c = \\frac{[\\text{B}]^2}{[\\text{A}]} = \\frac{(0.80)^2}{0.40}$.',
        hint2: 'Is $K_c$ greater than or less than 1?',
        hint3: 'When you reverse a reaction, the new $K$ is $1/K_{\\text{original}}$.',
        explanation: '1) $K_c = \\frac{(0.80)^2}{0.40} = \\frac{0.64}{0.40} = 1.6$. 2) Since $K_c = 1.6 > 1$, products are favored. 3) Reversed: $K_c^{\\prime} = 1/1.6 = 0.625 \\approx 0.63$.'
      }
    },
    {
      id: 'ece4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Check — Magnitude of $K$** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'At a certain temperature, two reactions have $K_1 = 3.8 \\times 10^5$ and $K_2 = 7.2 \\times 10^{-6}$. Which statement is correct?',
            options: [
              'Reaction 1 is faster than Reaction 2',
              'Reaction 2 produces more products at equilibrium',
              'Reaction 1 produces more products at equilibrium',
              'Both reactions produce the same amount of products'
            ],
            correctAnswer: 2,
            explanation: '$K_1 \\gg K_2$, so Reaction 1 has a much larger ratio of products to reactants at equilibrium. Remember, $K$ tells us about equilibrium position, not rate.'
          },
          {
            question: 'For $\\text{A} \\rightleftharpoons \\text{B}$, $K_c = 0.040$ at 25°C. At equilibrium:',
            options: [
              '$[\\text{B}]$ is 25 times larger than $[\\text{A}]$',
              '$[\\text{A}]$ is 25 times larger than $[\\text{B}]$',
              '$[\\text{A}] = [\\text{B}]$',
              '$[\\text{B}] = 0$ because the reaction barely proceeds'
            ],
            correctAnswer: 1,
            explanation: '$K_c = \\frac{[\\text{B}]}{[\\text{A}]} = 0.040$, so $[\\text{A}] = \\frac{[\\text{B}]}{0.040} = 25[\\text{B}]$. The concentration of A is 25 times that of B.'
          }
        ]
      }
    }
  ]
}
