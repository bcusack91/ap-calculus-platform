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

$(2x + 3)(x - 4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$`
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
      id: 'pf1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Degree = highest exponent; leading coefficient = coefficient of that term
- When subtracting polynomials, distribute the negative to EVERY term
- Multiply polynomials using distribution (FOIL is just distribution for two binomials)
- Combine like terms as the final step`
    }
  ]
};
