export const calcbcPartialFracPart1Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf1-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition

**Part 1 of 7 — The Concept**

### When to Use

For integrals of the form $\int \\frac{P(x)}{Q(x)}\,dx$ where $Q$ factors into linear or quadratic terms.

### Distinct Linear Factors

$$\\frac{1}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}$$

### Worked Example

$\int \\frac{1}{x^2 - 1}\,dx = \int \\frac{1}{(x-1)(x+1)}\,dx$

$\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$

$1 = A(x+1) + B(x-1)$

$x = 1$: $1 = 2A$, $A = 1/2$

$x = -1$: $1 = -2B$, $B = -1/2$

$$\int \left(\\frac{1/2}{x-1} - \\frac{1/2}{x+1}\\right)\,dx = \\frac{1}{2}\ln|x-1| - \\frac{1}{2}\ln|x+1| + C$$`
    },
    {
      id: 'pf1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Partial Fractions** 🎯',
      exercise: {
        questions: [
          {
            question: 'Decompose $\\frac{3}{x(x+3)}$.',
            options: ['$\\frac{1}{x} - \\frac{1}{x+3}$', '$\\frac{1}{x} + \\frac{1}{x+3}$', '$\\frac{3}{x} - \\frac{3}{x+3}$', '$\\frac{1}{x} - \\frac{3}{x+3}$'],
            correctAnswer: 0,
            explanation: '$3 = A(x+3) + Bx$. $x=0$: $3 = 3A$, $A = 1$. $x=-3$: $3 = -3B$, $B = -1$. Result: $\\frac{1}{x} - \\frac{1}{x+3}$.'
          }
        ]
      }
    },
    {
      id: 'pf1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. Factor the denominator first
2. Set up: one fraction per factor
3. Solve for constants using strategic $x$ values`
    }
  ]
};
