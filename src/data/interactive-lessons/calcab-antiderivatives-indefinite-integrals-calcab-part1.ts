export const calcabAntiderivativesPart1Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti1-intro',
      type: 'text' as const,
      content: `# Antiderivatives & Indefinite Integrals

**Part 1 of 7 — What is an Antiderivative?**

### Definition

An **antiderivative** of $f(x)$ is a function $F(x)$ such that $F'(x) = f(x)$.

The **indefinite integral** represents the family of all antiderivatives:

$$\\int f(x)\\,dx = F(x) + C$$

The "$+ C$" is essential! Since the derivative of a constant is 0, there are infinitely many antiderivatives.

### Power Rule for Integration

$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$

This reverses the power rule for differentiation.

### Worked Examples

| $f(x)$ | $\\int f(x)\\,dx$ |
|---------|-------------------|
| $x^4$ | $\\frac{x^5}{5} + C$ |
| $x^{-3}$ | $\\frac{x^{-2}}{-2} + C = -\\frac{1}{2x^2} + C$ |
| $\\sqrt{x} = x^{1/2}$ | $\\frac{x^{3/2}}{3/2} + C = \\frac{2}{3}x^{3/2} + C$ |
| $\\frac{1}{x^4} = x^{-4}$ | $\\frac{x^{-3}}{-3} + C = -\\frac{1}{3x^3} + C$ |`
    },
    {
      id: 'anti1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Power Rule for Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int x^7\\,dx$.',
            options: ['$7x^6 + C$', '$\\frac{x^8}{8} + C$', '$\\frac{x^7}{7} + C$', '$8x^8 + C$'],
            correctAnswer: 1,
            explanation: '$\\int x^7\\,dx = \\frac{x^{7+1}}{7+1} + C = \\frac{x^8}{8} + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{1}{x^5}\\,dx$.',
            options: ['$-\\frac{1}{4x^4} + C$', '$\\frac{1}{4x^4} + C$', '$-\\frac{5}{x^4} + C$', '$\\ln|x^5| + C$'],
            correctAnswer: 0,
            explanation: '$\\int x^{-5}\\,dx = \\frac{x^{-4}}{-4} + C = -\\frac{1}{4x^4} + C$.'
          },
          {
            question: 'Evaluate $\\int \\sqrt[3]{x}\\,dx$.',
            options: ['$\\frac{3}{4}x^{4/3} + C$', '$\\frac{4}{3}x^{4/3} + C$', '$\\frac{x^{2/3}}{2/3} + C$', '$\\frac{1}{3}x^{-2/3} + C$'],
            correctAnswer: 0,
            explanation: '$\\int x^{1/3}\\,dx = \\frac{x^{4/3}}{4/3} + C = \\frac{3}{4}x^{4/3} + C$.'
          }
        ]
      }
    },
    {
      id: 'anti1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. An antiderivative reverses differentiation: if $F' = f$, then $\\int f = F + C$
2. **Power Rule:** add 1 to the exponent, divide by the new exponent
3. **Always include $+C$** for indefinite integrals
4. The special case $n = -1$: $\\int x^{-1}\\,dx = \\ln|x| + C$ (next part)`
    }
  ]
};
