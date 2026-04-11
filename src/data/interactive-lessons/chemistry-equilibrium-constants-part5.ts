export const chemEquilibriumConstantsPart5Data = {
  topicSlug: 'equilibrium-constants-expressions',
  sections: [
    {
      id: 'ece5-intro',
      type: 'text' as const,
      content: `# 🔧 Manipulating Equilibrium Constants

**Part 5 of 7 — Manipulating $K$**

---

### Topics in This Part

| Section |
|---------|
| 📏 Three Key Manipulation Rules |
| Rule 1: Reversing a Reaction |
| Rule 2: Multiplying Coefficients by $n$ |
| Rule 3: Adding Reactions (Hess's Law for $K$) |
| 📏 Combining Multiple Rules |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ece5-rules',
      type: 'text' as const,
      content: `
## 📏 Three Key Manipulation Rules

### Rule 1: Reversing a Reaction

If you **reverse** a reaction, the new $K$ is the **reciprocal**:

$$\\boxed{K_{\\text{reverse}} = \\frac{1}{K_{\\text{forward}}}}$$

**Example:** If $\\text{A} \\rightleftharpoons \\text{B}$, $K = 100$

Then $\\text{B} \\rightleftharpoons \\text{A}$, $K^{\\prime} = \\frac{1}{100} = 0.01$

---

### Rule 2: Multiplying Coefficients by $n$

If you **multiply** all coefficients by a factor $n$, the new $K$ is raised to that power:

$$\\boxed{K_{\\text{new}} = K^n}$$

**Example:** If $\\text{A} \\rightleftharpoons 2\\,\\text{B}$, $K = 4.0$

Then $2\\,\\text{A} \\rightleftharpoons 4\\,\\text{B}$, $K^{\\prime} = 4.0^2 = 16$

And $\\frac{1}{2}\\text{A} \\rightleftharpoons \\text{B}$, $K^{\\prime} = 4.0^{1/2} = 2.0$

---

### Rule 3: Adding Reactions (Hess's Law for $K$)

If you **add** two reactions, the $K$ values are **multiplied**:

$$\\boxed{K_{\\text{overall}} = K_1 \\times K_2}$$

**Example:**
- Reaction 1: $\\text{A} \\rightleftharpoons \\text{B}$, $K_1 = 10$  
- Reaction 2: $\\text{B} \\rightleftharpoons \\text{C}$, $K_2 = 5$  
- Overall: $\\text{A} \\rightleftharpoons \\text{C}$, $K_{\\text{overall}} = 10 \\times 5 = 50$
      `
    },
    {
      id: 'ece5-mcq-rules',
      type: 'multiple-choice' as const,
      content: `
**Apply the Rules** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $K = 2.5 \\times 10^4$ for $\\text{A}(g) \\rightleftharpoons 2\\,\\text{B}(g)$, what is $K$ for the reverse reaction $2\\,\\text{B}(g) \\rightleftharpoons \\text{A}(g)$?',
            options: [
              '$2.5 \\times 10^4$',
              '$-2.5 \\times 10^4$',
              '$4.0 \\times 10^{-5}$',
              '$6.25 \\times 10^8$'
            ],
            correctAnswer: 2,
            explanation: 'Reversing a reaction gives $K^{\\prime} = 1/K = 1/(2.5 \\times 10^4) = 4.0 \\times 10^{-5}$.'
          },
          {
            question: 'If $K = 9.0$ for $\\text{X}(g) \\rightleftharpoons 2\\,\\text{Y}(g)$, what is $K$ for $2\\,\\text{X}(g) \\rightleftharpoons 4\\,\\text{Y}(g)$?',
            options: [
              '$18$',
              '$81$',
              '$3.0$',
              '$4.5$'
            ],
            correctAnswer: 1,
            explanation: 'All coefficients are multiplied by 2, so $K^{\\prime} = K^2 = 9.0^2 = 81$.'
          },
          {
            question: 'Given: Reaction 1: $\\text{A} \\rightleftharpoons \\text{B}$, $K_1 = 3$ and Reaction 2: $\\text{B} \\rightleftharpoons \\text{C}$, $K_2 = 7$. What is $K$ for $\\text{A} \\rightleftharpoons \\text{C}$?',
            options: [
              '$10$',
              '$4$',
              '$21$',
              '$2.33$'
            ],
            correctAnswer: 2,
            explanation: 'Adding reactions means multiplying $K$ values: $K_{\\text{overall}} = K_1 \\times K_2 = 3 \\times 7 = 21$.'
          }
        ]
      }
    },
    {
      id: 'ece5-combined-rules',
      type: 'text' as const,
      content: `
## 📏 Combining Multiple Rules

AP problems often require you to apply **more than one rule** at a time.


---

> **Problem:** Given $\\text{A}(g) + \\text{B}(g) \\rightleftharpoons \\text{C}(g)$, $K = 8.0$. Find $K$ for: $3\\,\\text{C}(g) \\rightleftharpoons 3\\,\\text{A}(g) + 3\\,\\text{B}(g)$.

> **Solution:**

**Step 1:** Reverse the original reaction:

$\\text{C}(g) \\rightleftharpoons \\text{A}(g) + \\text{B}(g)$, $K^{\\prime} = \\frac{1}{8.0} = 0.125$

**Step 2:** Multiply all coefficients by 3:

$3\\,\\text{C}(g) \\rightleftharpoons 3\\,\\text{A}(g) + 3\\,\\text{B}(g)$, $K^{\\prime\\prime} = (0.125)^3 = 1.95 \\times 10^{-3}$


---

### Summary Table

| Operation | Effect on $K$ |
|-----------|--------------|
| Reverse reaction | $K^{\\prime} = 1/K$ |
| Multiply coefficients by $n$ | $K^{\\prime} = K^n$ |
| Add reactions | $K_{\\text{overall}} = K_1 \\times K_2$ |
      `
    },
    {
      id: 'ece5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Manipulating $K$** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When a reaction is reversed, the new $K$ equals the _______ of the original $K$',
            options: ['negative', 'reciprocal', 'square', 'square root']
          },
          {
            label: 'When coefficients are doubled, the new $K$ equals $K$ raised to the power of',
            options: ['0.5', '1', '2', '-1']
          },
          {
            label: 'When two reactions are added, their equilibrium constants are',
            options: ['added', 'subtracted', 'multiplied', 'divided']
          },
          {
            label: 'If $K = 100$ for a reaction, and you halve all coefficients, $K^{\\prime}$ equals',
            options: ['50', '200', '10', '10000']
          }
        ],
        correctAnswers: ['reciprocal', '2', 'multiplied', '10'],
        hint1: 'Reversing swaps numerator and denominator.',
        hint2: 'The coefficient becomes an exponent on $K$.',
        hint3: 'Halving coefficients means raising $K$ to the power of 0.5.',
        explanation: 'Reverse → reciprocal. Double coefficients → square $K$. Add reactions → multiply $K$ values. Halve coefficients → $K^{0.5} = \\sqrt{K} = \\sqrt{100} = 10$.'
      }
    },
    {
      id: 'ece5-input-practice',
      type: 'input-boxes' as const,
      content: `
**Calculate the New $K$** 🧮

Given: $\\text{2 NO}(g) + \\text{O}_2(g) \\rightleftharpoons \\text{2 NO}_2(g)$, $K = 4.0 \\times 10^{6}$

**1)** What is $K$ for the reverse reaction? (Use scientific notation like 2.5e-7)

**2)** What is $K$ for $\\text{NO}(g) + \\frac{1}{2}\\text{O}_2(g) \\rightleftharpoons \\text{NO}_2(g)$? (Round to the nearest integer)

**3)** If $K_1 = 4.0 \\times 10^6$ and $K_2 = 2.0 \\times 10^3$, and you add the two reactions, what is $K_{\\text{overall}}$? (Use scientific notation like 8.0e9)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.5e-7', '2000', '8.0e9'],
        hint1: 'Reverse: $K^{\\prime} = 1/K$.',
        hint2: 'Halving all coefficients means $K^{\\prime} = K^{1/2}$.',
        hint3: 'Adding reactions: $K_{\\text{overall}} = K_1 \\times K_2$.',
        explanation: '1) $1/(4.0 \\times 10^6) = 2.5 \\times 10^{-7}$. 2) Halving coefficients: $K^{\\prime} = (4.0 \\times 10^6)^{1/2} = 2000$. 3) $K_{\\text{overall}} = (4.0 \\times 10^6)(2.0 \\times 10^3) = 8.0 \\times 10^9$.'
      }
    },
    {
      id: 'ece5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Check — Manipulating $K$** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'If $K = 25$ for $\\text{A} + \\text{B} \\rightleftharpoons \\text{C}$, and $K = 4.0$ for $\\text{C} \\rightleftharpoons \\text{D}$, what is $K$ for $\\text{A} + \\text{B} \\rightleftharpoons \\text{D}$?',
            options: [
              '$29$',
              '$21$',
              '$100$',
              '$6.25$'
            ],
            correctAnswer: 2,
            explanation: 'Adding reactions: $K_{\\text{overall}} = K_1 \\times K_2 = 25 \\times 4.0 = 100$.'
          },
          {
            question: 'If $K = 64$ for $\\text{3 A}(g) \\rightleftharpoons \\text{3 B}(g)$, what is $K$ for $\\text{A}(g) \\rightleftharpoons \\text{B}(g)$?',
            options: [
              '$21.3$',
              '$4.0$',
              '$8.0$',
              '$192$'
            ],
            correctAnswer: 1,
            explanation: 'Dividing all coefficients by 3 is multiplying by $1/3$: $K^{\\prime} = K^{1/3} = 64^{1/3} = 4.0$.'
          }
        ]
      }
    }
  ]
}
