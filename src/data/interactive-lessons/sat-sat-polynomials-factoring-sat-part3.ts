export const satPolynomialsPart3Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf3-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 3 of 7 — Polynomial Division**

### Long Division

Divide $x^3 + 2x^2 - 5x + 6$ by $x - 1$:

1. $x^3 \\div x = x^2$. Multiply: $x^2(x-1) = x^3 - x^2$. Subtract: $3x^2 - 5x$
2. $3x^2 \\div x = 3x$. Multiply: $3x(x-1) = 3x^2 - 3x$. Subtract: $-2x + 6$
3. $-2x \\div x = -2$. Multiply: $-2(x-1) = -2x + 2$. Subtract: $4$

Result: $x^2 + 3x - 2$ remainder $4$.

### Synthetic Division (Faster!)

For dividing by $(x - c)$: write the coefficients, bring down, multiply, add.

Dividing $x^3 + 2x^2 - 5x + 6$ by $(x - 1)$:

| | 1 | 2 | -5 | 6 |
|---|---|---|---|---|
| 1↓ | | 1 | 3 | -2 |
| | 1 | 3 | -2 | **4** |

Result: $x^2 + 3x - 2$ with remainder $4$.

### The Remainder Theorem

The remainder when $f(x)$ is divided by $(x - c)$ equals $f(c)$.

Check: $f(1) = 1 + 2 - 5 + 6 = 4$ ✓`
    },
    {
      id: 'pf3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polynomial Division** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the remainder when $x^3 - 4x + 2$ is divided by $(x - 2)$?',
            options: ['$2$', '$0$', '$-2$', '$6$'],
            correctAnswer: 0,
            explanation: 'By the Remainder Theorem: $f(2) = 8 - 8 + 2 = 2$. Much faster than doing long division!'
          },
          {
            question: 'If $(x + 3)$ is a factor of $x^2 + 5x + 6$, then $f(-3) = $',
            options: ['$0$', '$3$', '$6$', '$-3$'],
            correctAnswer: 0,
            explanation: 'If $(x + 3)$ is a factor, the remainder is 0, so $f(-3) = 0$. This is the Factor Theorem: $(x - c)$ is a factor iff $f(c) = 0$.'
          },
          {
            question: 'When $2x^2 + 7x + 3$ is divided by $(x + 3)$, the quotient is:',
            options: ['$2x + 1$', '$2x + 3$', '$2x - 1$', '$x + 1$'],
            correctAnswer: 0,
            explanation: 'Since $(x + 3)$ is a factor: $2x^2 + 7x + 3 = (x + 3)(2x + 1)$. Check by FOIL: $2x^2 + x + 6x + 3 = 2x^2 + 7x + 3$ ✓'
          }
        ]
      }
    },
    {
      id: 'pf3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Remainder Theorem**: remainder of $f(x) ÷ (x-c) = f(c)$ — plug in and evaluate!
- **Factor Theorem**: $(x - c)$ is a factor iff $f(c) = 0$
- Synthetic division is faster than long division for linear divisors $(x - c)$
- Don't forget to include $0$ coefficients for missing terms in division`
    }
  ]
};
