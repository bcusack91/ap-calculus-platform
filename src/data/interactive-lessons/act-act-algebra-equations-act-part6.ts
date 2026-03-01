export const actAlgebraPart6Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg6-intro',
      type: 'text' as const,
      content: `
# 🔧 Algebraic Manipulation

**Part 6 of 7 — Factoring, Distributing, Combining Like Terms & Special Products**

Strong algebraic manipulation skills save time on **every** section of the ACT Math. These are the building blocks.

| Skill | Example |
|-------|---------|
| Distribute | $3(x + 4) = 3x + 12$ |
| Combine like terms | $5x + 2x - 3 = 7x - 3$ |
| Factor GCF | $6x^2 + 9x = 3x(2x + 3)$ |
| Factor trinomial | $x^2 + 5x + 6 = (x + 2)(x + 3)$ |
      `
    },
    {
      id: 'act-alg6-special',
      type: 'text' as const,
      content: `
## Special Products — Memorise These!

| Name | Formula |
|------|---------|
| Difference of squares | $a^2 - b^2 = (a + b)(a - b)$ |
| Perfect square (sum) | $a^2 + 2ab + b^2 = (a + b)^2$ |
| Perfect square (diff) | $a^2 - 2ab + b^2 = (a - b)^2$ |

**Example 1:** Factor $x^2 - 49$.

$$x^2 - 49 = (x + 7)(x - 7)$$

**Example 2:** Factor $4x^2 - 12x + 9$.

$$4x^2 - 12x + 9 = (2x)^2 - 2(2x)(3) + 3^2 = (2x - 3)^2$$

**Example 3:** Simplify $\\frac{x^2 - 9}{x + 3}$.

$$\\frac{(x+3)(x-3)}{x+3} = x - 3 \\quad (x \\neq -3)$$

**ACT Tip:** Difference of squares appears *constantly* on the ACT. Be ready to recognize it instantly.
      `
    },
    {
      id: 'act-alg6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Factoring Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Factor: $x^2 - 8x + 16$',
            options: ['$(x - 4)^2$', '$(x + 4)^2$', '$(x - 8)(x - 2)$', '$(x - 16)(x - 1)$'],
            correctAnswer: 0,
            explanation: '$x^2 - 8x + 16 = (x - 4)^2$ — a perfect square trinomial.'
          },
          {
            question: 'Simplify: $\\frac{x^2 - 25}{x - 5}$',
            options: ['$x - 5$', '$x + 5$', '$x^2 - 5$', '$25$'],
            correctAnswer: 1,
            explanation: '$\\frac{(x+5)(x-5)}{x-5} = x + 5$.'
          }
        ]
      }
    },
    {
      id: 'act-alg6-input1',
      type: 'input-boxes' as const,
      content: `
**Simplify** 🧮

Give the numerical result.

1) Expand and simplify: $(x + 3)(x - 3)$ when $x = 5$. Answer?
2) If $x^2 + 6x + 9 = (x + a)^2$, what is $a$?
3) $2(3x + 4) - (x - 2) = ?x + ?$ — what is the coefficient of $x$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16', '3', '5'],
        hint1: '$(5+3)(5-3) = 8 \\times 2$. Or use difference of squares: $25 - 9$.',
        hint2: '$x^2 + 6x + 9 = (x + 3)^2$. What\'s the number being squared?',
        hint3: '$6x + 8 - x + 2 = 5x + 10$.',
        explanation: '1) $25 - 9 = 16$. 2) $a = 3$ since $(x+3)^2 = x^2 + 6x + 9$. 3) $2(3x+4) - (x-2) = 5x + 10$, coefficient is 5.'
      }
    },
    {
      id: 'act-alg6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Identify the Technique** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x^2 - 64$ is best factored using …',
            options: ['GCF', 'Difference of squares', 'Grouping', 'Quadratic formula']
          },
          {
            label: '$6x^3 + 9x^2$ is best factored using …',
            options: ['Difference of squares', 'GCF', 'Perfect square', 'AC method']
          },
          {
            label: 'To simplify $\\frac{x^2 + 3x}{x}$, you should …',
            options: ['Cross-multiply', 'Cancel the $x$ from numerator and denominator', 'Square both sides', 'Set equal to zero']
          }
        ],
        correctAnswers: ['Difference of squares', 'GCF', 'Cancel the $x$ from numerator and denominator'],
        hint1: 'Two perfect squares separated by subtraction.',
        hint2: 'Both terms share a common factor of $3x^2$.',
        hint3: '$\\frac{x(x+3)}{x} = x + 3$ for $x \\neq 0$.',
        explanation: 'Difference of squares for $a^2 - b^2$. GCF when all terms share a common factor. Cancel common factors from rational expressions.'
      }
    },
    {
      id: 'act-alg6-distribute',
      type: 'text' as const,
      content: `
## Distribution & Combining Like Terms — Practice Table

| Expression | Simplified |
|-----------|-----------|
| $4(2x - 5) + 3x$ | $11x - 20$ |
| $-(x^2 - 3x + 1)$ | $-x^2 + 3x - 1$ |
| $(2x + 1)(x - 3)$ | $2x^2 - 5x - 3$ |
| $3x^2 + 7x - 2x^2 + x$ | $x^2 + 8x$ |

**ACT Tip:** Don't skip sign distribution — the most common algebra mistake on the ACT is dropping a negative sign when distributing.
      `
    },
    {
      id: 'act-alg6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Which expression is equivalent to $(3x - 2)^2$?',
            options: ['$9x^2 - 4$', '$9x^2 - 6x + 4$', '$9x^2 - 12x + 4$', '$9x^2 + 12x + 4$'],
            correctAnswer: 2,
            explanation: '$(3x-2)^2 = 9x^2 - 2(3x)(2) + 4 = 9x^2 - 12x + 4$.'
          },
          {
            question: 'If $x^2 - y^2 = 40$ and $x + y = 8$, what is $x - y$?',
            options: ['$4$', '$5$', '$8$', '$32$'],
            correctAnswer: 1,
            explanation: '$x^2 - y^2 = (x+y)(x-y) = 8(x-y) = 40 \\implies x - y = 5$.'
          }
        ]
      }
    }
  ]
};
