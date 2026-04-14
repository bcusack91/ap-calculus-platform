export const satPolynomialsPart1Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf1-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 1 of 7 — Polynomial Basics**

### What is a Polynomial?

A polynomial is an expression with one or more terms: $a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$

- **Degree**: highest power of $x$ (e.g., $3x^4 + 2x - 1$ has degree 4)
- **Leading coefficient**: coefficient of the highest-degree term
- **Constant term**: the term with no variable ($a_0$)

### Adding & Subtracting Polynomials

Combine **like terms** (same variable and exponent):

$(3x^2 + 5x - 2) + (x^2 - 3x + 7) = 4x^2 + 2x + 5$

$(3x^2 + 5x - 2) - (x^2 - 3x + 7) = 3x^2 + 5x - 2 - x^2 + 3x - 7 = 2x^2 + 8x - 9$

**Subtraction trap**: distribute the negative sign to ALL terms in the second polynomial!

### Multiplying Polynomials

Use distribution (FOIL for binomials):

$(2x + 3)(x - 4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$

---

### Worked Example 1 — Multiplying Three Factors

**Expand $(x + 1)(x - 3)(x + 2)$.**

| Step | Work |
|------|------|
| First two factors | $(x+1)(x-3) = x^2 - 2x - 3$ |
| Multiply by third | $(x^2 - 2x - 3)(x + 2)$ |
| Distribute $x$ | $x^3 - 2x^2 - 3x$ |
| Distribute $2$ | $2x^2 - 4x - 6$ |
| Combine | $x^3 - 2x^2 + 2x^2 - 3x - 4x - 6 = x^3 - 7x - 6$ |

### Worked Example 2 — Subtraction Trap

**Simplify $(5x^3 - x^2 + 4) - (3x^3 + 2x^2 - x + 1)$.**

| Step | Work |
|------|------|
| Distribute negative | $5x^3 - x^2 + 4 - 3x^3 - 2x^2 + x - 1$ |
| Combine $x^3$ | $2x^3$ |
| Combine $x^2$ | $-3x^2$ |
| Combine $x$ | $x$ |
| Combine constants | $3$ |
| Result | $2x^3 - 3x^2 + x + 3$ |`
    },
    {
      id: 'pf1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polynomial Operations** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the degree of $5x^3 - 2x^5 + 7x$?',
            options: ['$5$', '$3$', '$1$', '$7$'],
            correctAnswer: 0,
            explanation: 'The highest power of $x$ is $5$ (from $-2x^5$). Don\'t be fooled by term order — the degree is the highest exponent appearing.'
          },
          {
            question: '$(4x^2 - 3x + 1) - (2x^2 + x - 5) = $',
            options: ['$2x^2 - 4x + 6$', '$2x^2 - 2x - 4$', '$6x^2 - 4x + 6$', '$2x^2 - 4x - 4$'],
            correctAnswer: 0,
            explanation: 'Distribute the negative: $4x^2 - 3x + 1 - 2x^2 - x + 5 = 2x^2 - 4x + 6$. Be careful with $-(-5) = +5$.'
          },
          {
            question: 'What is the coefficient of $x$ in the product $(x + 4)(x - 2)$?',
            options: ['$2$', '$-2$', '$4$', '$-8$'],
            correctAnswer: 0,
            explanation: 'FOIL: $x^2 - 2x + 4x - 8 = x^2 + 2x - 8$. The coefficient of $x$ is $2$.'
          }
        ]
      }
    },
    {
      id: 'pf1-text2',
      type: 'text' as const,
      content: `### Special Products to Memorize

| Pattern | Expansion |
|---------|-----------|
| $(a + b)^2$ | $a^2 + 2ab + b^2$ |
| $(a - b)^2$ | $a^2 - 2ab + b^2$ |
| $(a + b)(a - b)$ | $a^2 - b^2$ |
| $(a + b)^3$ | $a^3 + 3a^2b + 3ab^2 + b^3$ |

### Worked Example 3 — Using Special Products

**Expand $(3x - 2)^2$.**

| Step | Work |
|------|------|
| Apply $(a - b)^2$ | $(3x)^2 - 2(3x)(2) + (2)^2$ |
| Simplify | $9x^2 - 12x + 4$ |

⚠️ Common mistake: $(3x - 2)^2 \\neq 9x^2 - 4$. You must include the middle term!

### Degree of a Product

The degree of a product equals the **sum** of the degrees.

$(2x^3 + 1)(x^2 - 5x) → \\text{degree } 3 + 2 = 5$`
    },
    {
      id: 'pf1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Special Products & Degree** 🎯',
      exercise: {
        questions: [
          {
            question: 'Expand $(2x + 5)^2$:',
            options: ['$4x^2 + 20x + 25$', '$4x^2 + 25$', '$2x^2 + 10x + 25$', '$4x^2 + 10x + 25$'],
            correctAnswer: 0,
            explanation: '$(2x)^2 + 2(2x)(5) + 5^2 = 4x^2 + 20x + 25$.'
          },
          {
            question: 'What is the degree of $(x^2 + 3x)(2x^3 - 1)(x + 4)$?',
            options: ['$6$', '$5$', '$7$', '$8$'],
            correctAnswer: 0,
            explanation: 'Degrees: $2 + 3 + 1 = 6$. You don\'t need to multiply — just add the highest degrees.'
          },
          {
            question: '$(x + y)(x - y)(x^2 + y^2) = $',
            options: ['$x^4 - y^4$', '$x^4 + y^4$', '$x^2 - y^2$', '$x^4 - 2x^2y^2 + y^4$'],
            correctAnswer: 0,
            explanation: '$(x+y)(x-y) = x^2 - y^2$. Then $(x^2 - y^2)(x^2 + y^2) = x^4 - y^4$. Difference of squares twice!'
          }
        ]
      }
    },
    {
      id: 'pf1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Property** 🔍\n\nFor each expression, identify what type of operation or pattern it represents.',
      exercise: {
        dropdowns: [
          { label: '$(x + 3)^2 = x^2 + 6x + 9$', options: ['Perfect square trinomial', 'Difference of squares', 'FOIL', 'Factor by grouping'] },
          { label: '$(x + 5)(x - 5) = x^2 - 25$', options: ['Difference of squares', 'Perfect square trinomial', 'Sum of cubes', 'Distribution'] },
          { label: '$(2x + 1)(3x - 4) = 6x^2 - 5x - 4$', options: ['FOIL / Distribution', 'Difference of squares', 'Perfect square trinomial', 'Grouping'] },
          { label: '$5x^3 - 2x^5 + 7x$ has degree 5', options: ['Highest exponent determines degree', 'Leading term determines degree', 'Count the terms', 'Add the exponents'] }
        ],
        correctAnswers: ['Perfect square trinomial', 'Difference of squares', 'FOIL / Distribution', 'Highest exponent determines degree'],
        hint1: '$(a + b)^2 = a^2 + 2ab + b^2$ — the square of a binomial.',
        hint2: '$(a+b)(a-b) = a^2 - b^2$ — sum times difference.',
        hint3: 'FOIL is just distribution for two binomials: First, Outer, Inner, Last.',
        explanation: 'Square of sum → perfect square trinomial. Sum × difference → difference of squares. Two binomials → FOIL. Degree = highest exponent regardless of term order.'
      }
    },
    {
      id: 'pf1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Concept | Key Point |
|---------|-----------|
| Degree | Highest exponent (not first term!) |
| Subtraction | Distribute negative to ALL terms |
| $(a+b)^2$ | $a^2 + 2ab + b^2$ (don't forget middle term) |
| $(a+b)(a-b)$ | $a^2 - b^2$ |
| Degree of product | Sum of degrees |

- Combine like terms as the final step after every operation
- FOIL is just distribution for two binomials — use full distribution for larger products
- Special products save time and reduce errors on the SAT`
    }
  ]
};
