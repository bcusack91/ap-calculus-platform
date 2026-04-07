export const chemIntroEquilibriumPart4Data = {
  topicSlug: 'intro-equilibrium',
  sections: [
    {
      id: 'ie4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Manipulating Equilibrium Constants

**Part 4 of 7 — Reversing, Multiplying, and Adding Reactions**

When you modify a chemical equation, the equilibrium constant changes in a predictable way. These rules are essential for combining known $K$ values to find unknown ones.
      `
    },
    {
      id: 'ie4-reverse',
      type: 'text' as const,
      content: `
## 📏 Rule 1: Reversing a Reaction

If you reverse a reaction, the new $K$ is the **reciprocal** of the original:

$$\\text{Forward: } A \\rightleftharpoons B \\quad K_{\\text{fwd}}$$

$$\\text{Reverse: } B \\rightleftharpoons A \\quad K_{\\text{rev}} = \\frac{1}{K_{\\text{fwd}}}$$


---

### Example

$$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g) \\quad K_c = 4.0 \\times 10^8$$

$$2\\,\\text{NH}_3(g) \\rightleftharpoons \\text{N}_2(g) + 3\\,\\text{H}_2(g) \\quad K_c = \\frac{1}{4.0 \\times 10^8} = 2.5 \\times 10^{-9}$$

The products and reactants switch — the fraction flips.
      `
    },
    {
      id: 'ie4-multiply',
      type: 'text' as const,
      content: `
## 📏 Rule 2: Multiplying a Reaction by a Factor

If you multiply all coefficients by a factor $n$, the new $K$ is raised to the $n$th power:

$$\\text{Original: } A \\rightleftharpoons B \\quad K$$

$$\\text{Multiplied by } n: \\quad nA \\rightleftharpoons nB \\quad K' = K^n$$


---

### Example

$$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g) \\quad K_c = 50$$

Multiply by $\\frac{1}{2}$:

$$\\frac{1}{2}\\text{H}_2(g) + \\frac{1}{2}\\text{I}_2(g) \\rightleftharpoons \\text{HI}(g) \\quad K_c' = 50^{1/2} = \\sqrt{50} \\approx 7.07$$

Multiply by 2:

$$2\\,\\text{H}_2(g) + 2\\,\\text{I}_2(g) \\rightleftharpoons 4\\,\\text{HI}(g) \\quad K_c' = 50^2 = 2500$$
      `
    },
    {
      id: 'ie4-adding',
      type: 'text' as const,
      content: `
## 📏 Rule 3: Adding Reactions (Hess\'s Law for K)

If you add two reactions together, the overall $K$ is the **product** of the individual $K$ values:

$$\\text{Reaction 1: } A \\rightleftharpoons B \\quad K_1$$
$$\\text{Reaction 2: } B \\rightleftharpoons C \\quad K_2$$
$$\\text{Overall: } A \\rightleftharpoons C \\quad K_{\\text{overall}} = K_1 \\times K_2$$


---

### Why Multiply?

When you add reactions, the equilibrium expressions multiply (it\'s algebra — you\'re multiplying fractions). Intermediates cancel out.


---

### Example

$$\\text{Reaction 1: } \\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{NO}(g) \\quad K_1 = 4.7 \\times 10^{-31}$$

$$\\text{Reaction 2: } 2\\,\\text{NO}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{NO}_2(g) \\quad K_2 = 1.8 \\times 10^{6}$$

$$\\text{Overall: } \\text{N}_2(g) + 2\\,\\text{O}_2(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$$

$$K_{\\text{overall}} = K_1 \\times K_2 = (4.7 \\times 10^{-31})(1.8 \\times 10^{6}) = 8.5 \\times 10^{-25}$$


---

### Summary Table

| Operation | Effect on K |
|-----------|------------|
| Reverse reaction | $K' = 1/K$ |
| Multiply by $n$ | $K' = K^n$ |
| Add reactions | $K_{\\text{overall}} = K_1 \\times K_2$ |
      `
    },
    {
      id: 'ie4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Manipulating K — Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If the equilibrium constant for A ⇌ B is $K = 100$, what is the equilibrium constant for B ⇌ A?',
            options: [
              '$100$',
              '$-100$',
              '$0.01$',
              '$10$'
            ],
            correctAnswer: 2,
            explanation: 'Reversing a reaction gives $K_{\\text{rev}} = 1/K = 1/100 = 0.01$.'
          },
          {
            question: 'If $K = 4.0$ for A ⇌ B, what is $K$ for $2A \\rightleftharpoons 2B$?',
            options: [
              '$8.0$',
              '$2.0$',
              '$16$',
              '$4.0$'
            ],
            correctAnswer: 2,
            explanation: 'Multiplying the equation by 2 means $K\' = K^2 = (4.0)^2 = 16$.'
          },
          {
            question: 'Reactions with $K_1 = 10$ and $K_2 = 5$ are added. The overall $K$ is:',
            options: [
              '$15$',
              '$50$',
              '$2$',
              '$5$'
            ],
            correctAnswer: 1,
            explanation: 'When reactions are added, their K values are multiplied: $K_{\\text{overall}} = K_1 \\times K_2 = 10 \\times 5 = 50$.'
          }
        ]
      }
    },
    {
      id: 'ie4-calculations',
      type: 'input-boxes' as const,
      content: `
**Manipulating K — Calculations** 🧮

Given: $\\text{A}(g) \\rightleftharpoons 2\\,\\text{B}(g)$, $K_c = 25$

**1)** What is $K_c$ for $2\\,\\text{B}(g) \\rightleftharpoons \\text{A}(g)$? (Enter as a decimal)

**2)** What is $K_c$ for $\\frac{1}{2}\\text{A}(g) \\rightleftharpoons \\text{B}(g)$? (Enter as a whole number)

**3)** Given also: $\\text{B}(g) \\rightleftharpoons \\text{C}(g)$, $K_c = 2.0$. What is $K_c$ for $\\text{A}(g) \\rightleftharpoons 2\\,\\text{C}(g)$? (Enter as a whole number)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.04', '5', '100'],
        hint1: 'Reversing the reaction: $K_{\\text{rev}} = 1/K = 1/25 = 0.04$.',
        hint2: 'Multiplying by 1/2: $K\' = K^{1/2} = \\sqrt{25} = 5$.',
        hint3: 'A ⇌ 2B has $K_1 = 25$. B ⇌ C has $K_2 = 2.0$. For 2B ⇌ 2C, $K = K_2^2 = 4$. Overall: $K = K_1 \\times K_2^2 = 25 \\times 4 = 100$.',
        explanation: '1) Reverse: $K = 1/25 = 0.04$. 2) Multiply by 1/2: $K = 25^{1/2} = 5$. 3) A ⇌ 2B ($K_1 = 25$) + 2(B ⇌ C) ($K_2^2 = 4.0$) = A ⇌ 2C: $K = 25 \\times 4.0 = 100$.'
      }
    },
    {
      id: 'ie4-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Operation Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Reversing a reaction does what to K?',
            options: ['Takes the reciprocal', 'Squares it', 'Takes the square root', 'No change']
          },
          {
            label: 'Doubling all coefficients does what to K?',
            options: ['Doubles K', 'Squares K', 'Takes the reciprocal', 'No change']
          },
          {
            label: 'Adding two reactions does what to their K values?',
            options: ['Adds them', 'Multiplies them', 'Averages them', 'Subtracts them']
          },
          {
            label: 'Halving all coefficients does what to K?',
            options: ['Halves K', 'Takes the square root of K', 'Squares K', 'No change']
          }
        ],
        correctAnswers: [
          'Takes the reciprocal',
          'Squares K',
          'Multiplies them',
          'Takes the square root of K'
        ],
        hint1: 'Reverse → $1/K$. Multiply by n → $K^n$.',
        hint2: 'Doubling all coefficients means $n = 2$, so $K\' = K^2$.',
        hint3: 'Halving means $n = 1/2$, so $K\' = K^{1/2} = \\sqrt{K}$.',
        explanation: 'Reverse: $K\' = 1/K$. Multiply by $n$: $K\' = K^n$. Add reactions: $K_{\\text{total}} = K_1 \\times K_2$. Halving ($n = 0.5$): $K\' = \\sqrt{K}$.'
      }
    },
    {
      id: 'ie4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Manipulating K** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Given: Reaction 1: A ⇌ B, $K_1 = 3.0$. Reaction 2: B ⇌ C, $K_2 = 4.0$. If you want K for C ⇌ A, what is it?',
            options: [
              '$12$',
              '$1/12$',
              '$1/7$',
              '$7$'
            ],
            correctAnswer: 1,
            explanation: 'A ⇌ C has $K = K_1 \\times K_2 = 3.0 \\times 4.0 = 12$. Reversing to get C ⇌ A: $K = 1/12$.'
          },
          {
            question: 'If $K = 64$ for $A \\rightleftharpoons 3B$, what is $K$ for $\\frac{1}{3}A \\rightleftharpoons B$?',
            options: [
              '$4$',
              '$64/3$',
              '$\\sqrt[3]{64} = 4$',
              '$64^3$'
            ],
            correctAnswer: 0,
            explanation: 'Multiplying the equation by 1/3 gives $K\' = K^{1/3} = 64^{1/3} = 4$.'
          }
        ]
      }
    }
  ]
}
