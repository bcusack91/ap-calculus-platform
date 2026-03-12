export const calcabAntiderivativesPart4Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti4-intro',
      type: 'text' as const,
      content: `# Antiderivatives

**Part 4 of 7 — Rewriting Before Integrating**

### Algebraic Manipulation

Many integrals require rewriting before applying basic rules.

### Expand Products

$$\\int (x+1)(x-3)\\,dx = \\int (x^2 - 2x - 3)\\,dx = \\frac{x^3}{3} - x^2 - 3x + C$$

### Split Fractions

$$\\int \\frac{x^3 + 2x}{x^2}\\,dx = \\int \\left(x + \\frac{2}{x}\\right)\\,dx = \\frac{x^2}{2} + 2\\ln|x| + C$$

### Rewrite Radicals

$$\\int \\frac{3}{\\sqrt{x}}\\,dx = \\int 3x^{-1/2}\\,dx = 3 \\cdot \\frac{x^{1/2}}{1/2} + C = 6\\sqrt{x} + C$$`
    },
    {
      id: 'anti4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Simplify Then Integrate** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{x^4 - 3x^2 + 1}{x^2}\\,dx$.',
            options: ['$\\frac{x^3}{3} - 3x - \\frac{1}{x} + C$', '$\\frac{x^3}{3} - 3x + \\frac{1}{x} + C$', '$x^2 - 3\\ln|x| + \\frac{1}{x} + C$', '$\\frac{x^3}{3} + 3x - \\frac{1}{x} + C$'],
            correctAnswer: 0,
            explanation: 'Split: $\\int (x^2 - 3 + x^{-2})\\,dx = \\frac{x^3}{3} - 3x + \\frac{x^{-1}}{-1} + C = \\frac{x^3}{3} - 3x - \\frac{1}{x} + C$.'
          },
          {
            question: 'Evaluate $\\int (2x - 1)^2\\,dx$.',
            options: ['$\\frac{(2x-1)^3}{6} + C$', '$\\frac{4x^3}{3} - 2x^2 + x + C$', '$4x^2 - 4x + 1 + C$', '$\\frac{(2x-1)^3}{3} + C$'],
            correctAnswer: 1,
            explanation: 'Expand: $(2x-1)^2 = 4x^2 - 4x + 1$. Integrate: $\\frac{4x^3}{3} - 2x^2 + x + C$. (Note: option A also works via u-sub!)'
          }
        ]
      }
    },
    {
      id: 'anti4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

1. **Expand** products before integrating
2. **Split** fractions into separate terms when possible
3. **Rewrite** radicals using fractional exponents
4. These techniques reduce complex integrals to sums of power rule applications`
    }
  ]
};
