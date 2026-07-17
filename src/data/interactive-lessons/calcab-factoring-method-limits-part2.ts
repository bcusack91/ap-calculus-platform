export const calcabFactoringMethodPart2Data = {
  topicSlug: 'factoring-method-limits',
  sections: [
    {
      id: 'fml2-intro',
      type: 'text' as const,
      content: `# 🛠️ The Factoring Toolbox

**Part 2 of 4 — Common patterns to recognize**

---

### Topics in This Part

| Section |
|---------|
| 🔑 Difference of Squares |
| 🔑 Quadratic Trinomials |
| Common Factor Extraction |

> 🔑 **Why this matters:** Knowing your factoring patterns lets you spot the cancellation in seconds.`
    },
    {
      id: 'fml2-difsq',
      type: 'text' as const,
      content: `
## ◯$ {}^{2}$ Difference of Squares

$$a^2 - b^2 = (a - b)(a + b)$$

Pops up constantly in $0/0$ problems with $x^2$ in the numerator.

**Examples:**
- $x^2 - 9 = (x - 3)(x + 3)$
- $x^2 - 16 = (x - 4)(x + 4)$
- $4x^2 - 25 = (2x - 5)(2x + 5)$
- $x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x-1)(x+1)(x^2 + 1)$
      `
    },
    {
      id: 'fml2-quad',
      type: 'text' as const,
      content: `
## 📐 Quadratic Trinomials

$$ax^2 + bx + c = a(x - r_1)(x - r_2)$$

where $r_1, r_2$ are the roots. Use the quadratic formula or AC-method.

**Worked example:** $\\lim_{x \\to 2} \\dfrac{x^2 - 5x + 6}{x - 2}$.

- Direct sub: $\\dfrac{4 - 10 + 6}{0} = 0/0$. Indeterminate.
- Factor: $x^2 - 5x + 6 = (x - 2)(x - 3)$.
- Cancel: $\\dfrac{(x-2)(x-3)}{x-2} \\to x - 3$.
- Substitute: $2 - 3 = -1$. **Answer: $-1$.**

> 💡 If the denominator is $(x - 2)$, the numerator factors *must* contain $(x - 2)$ — otherwise $0/0$ wouldn\'t happen.
      `
    },
    {
      id: 'fml2-common',
      type: 'text' as const,
      content: `
## 🔧 Common Factor Extraction (GCF)

Sometimes you can pull out an obvious common factor first.

**Example:** $\\lim_{x \\to 0} \\dfrac{x^3 - 4x}{x}$.

- Direct sub: $0/0$.
- Factor numerator: $x^3 - 4x = x(x^2 - 4)$.
- Cancel: $\\dfrac{x(x^2 - 4)}{x} = x^2 - 4$ for $x \\ne 0$.
- Substitute: $0 - 4 = -4$. **Answer: $-4$.**
      `
    },
    {
      id: 'fml2-mc',
      type: 'multiple-choice' as const,
      content: `**Pattern Spot** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Factor $x^2 - 7x + 12$.',
            options: ['$(x-3)(x-4)$', '$(x+3)(x+4)$', '$(x-2)(x-6)$', '$(x+12)(x-1)$'],
            correctAnswer: 0,
            explanation: 'Find two numbers multiplying to 12 and adding to $-7$: $-3$ and $-4$.'
          },
          {
            question: 'Compute $\\lim_{x \\to 4} \\dfrac{x^2 - 7x + 12}{x - 4}$.',
            options: ['$1$', '$0$', '$-1$', 'DNE'],
            correctAnswer: 0,
            explanation: '$\\dfrac{(x-3)(x-4)}{x-4} \\to x - 3 \\to 4 - 3 = 1$.'
          },
          {
            question: 'Compute $\\lim_{x \\to 0} \\dfrac{x^3 + 5x^2}{x^2}$.',
            options: ['$0$', '$5$', '$\\infty$', 'DNE'],
            correctAnswer: 1,
            explanation: '$\\dfrac{x^2(x + 5)}{x^2} \\to x + 5 \\to 5$.'
          }
        ]
      }
    },
    {
      id: 'fml2-input',
      type: 'input-boxes' as const,
      content: `**Apply** 🧮

**1)** $\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x - 1} = ?$

**2)** $\\lim_{x \\to 3} \\dfrac{x^2 - 6x + 9}{x - 3} = ?$

**3)** $\\lim_{x \\to -1} \\dfrac{x^2 + 3x + 2}{x + 1} = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '0', '1'],
        hint1: '$(x-1)(x+1)/(x-1) \\to x+1 \\to 2$.',
        hint2: '$(x-3)^2/(x-3) \\to x - 3 \\to 0$.',
        hint3: '$(x+1)(x+2)/(x+1) \\to x + 2 \\to 1$.',
        explanation: 'Factor, cancel, substitute. Repeat as needed.'
      }
    }
  ]
}
