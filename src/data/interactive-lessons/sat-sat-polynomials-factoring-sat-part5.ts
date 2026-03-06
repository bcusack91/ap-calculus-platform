export const satPolynomialsPart5Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf5-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 5 of 7 — Rational Expressions**

### Simplifying Rational Expressions

A rational expression is a fraction with polynomials:

$$\\frac{x^2 - 9}{x^2 + 5x + 6} = \\frac{(x+3)(x-3)}{(x+2)(x+3)} = \\frac{x - 3}{x + 2} \\quad (x \\neq -3)$$

**Steps:** Factor numerator and denominator, then cancel common factors.

### Multiplying & Dividing

**Multiply:** Factor, cancel, then multiply what remains.

$$\\frac{x^2 - 4}{x + 1} \\cdot \\frac{x + 1}{x - 2} = \\frac{(x+2)(x-2)}{x+1} \\cdot \\frac{x+1}{x-2} = x + 2$$

**Divide:** Flip the second fraction and multiply.

### Adding & Subtracting

Find a common denominator:

$$\\frac{2}{x+1} + \\frac{3}{x-1} = \\frac{2(x-1) + 3(x+1)}{(x+1)(x-1)} = \\frac{5x + 1}{x^2 - 1}$$

### Undefined Values (Domain Restrictions)

A rational expression is undefined when the denominator equals zero. The SAT asks: "What value of $x$ makes the expression undefined?"`
    },
    {
      id: 'pf5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rational Expressions** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{x^2 + 4x + 3}{x^2 - 1}$',
            options: ['$\\frac{x + 3}{x - 1}$', '$\\frac{x + 1}{x - 1}$', '$\\frac{x + 3}{x + 1}$', '$\\frac{4x + 3}{-1}$'],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{(x+1)(x+3)}{(x+1)(x-1)} = \\frac{x+3}{x-1}$ (cancel $(x+1)$, $x \\neq -1$).'
          },
          {
            question: 'For what value of $x$ is $\\frac{5}{x^2 - 4}$ undefined?',
            options: ['$x = 2$ and $x = -2$', '$x = 4$ only', '$x = 2$ only', '$x = 0$'],
            correctAnswer: 0,
            explanation: 'Denominator $= 0$: $x^2 - 4 = 0$ → $(x-2)(x+2) = 0$ → $x = 2$ or $x = -2$.'
          },
          {
            question: '$\\frac{1}{x} + \\frac{1}{x+2} = $',
            options: ['$\\frac{2x + 2}{x(x+2)}$', '$\\frac{2}{2x + 2}$', '$\\frac{1}{x^2 + 2x}$', '$\\frac{2}{x(x+2)}$'],
            correctAnswer: 0,
            explanation: 'Common denominator is $x(x+2)$: $\\frac{x+2}{x(x+2)} + \\frac{x}{x(x+2)} = \\frac{2x+2}{x(x+2)}$.'
          }
        ]
      }
    },
    {
      id: 'pf5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Always factor first** before simplifying rational expressions
- Cancel only common **factors** (not terms!)
- Undefined when denominator = 0
- To add/subtract fractions: find common denominator, combine numerators`
    }
  ]
};
