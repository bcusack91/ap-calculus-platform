export const calcabUSubPart5Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub5-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 5 of 7 — Long Division and Completing the Square**

### When u-Sub Doesn't Work Directly

Some integrals need **algebraic manipulation** before substitution.

### Long Division for Improper Fractions

$$\\int \\frac{x^2 + 1}{x + 1}\\,dx$$

Divide first: $\\frac{x^2+1}{x+1} = x - 1 + \\frac{2}{x+1}$

$$\\int \\left(x - 1 + \\frac{2}{x+1}\\right)dx = \\frac{x^2}{2} - x + 2\\ln|x+1| + C$$

### Completing the Square

$$\\int \\frac{1}{x^2 + 4x + 8}\\,dx = \\int \\frac{1}{(x+2)^2 + 4}\\,dx$$

Let $u = x + 2$:

$$\\int \\frac{1}{u^2 + 4}\\,du = \\frac{1}{2}\\arctan\\left(\\frac{u}{2}\\right) + C = \\frac{1}{2}\\arctan\\left(\\frac{x+2}{2}\\right) + C$$`
    },
    {
      id: 'usub5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Algebraic Manipulation + Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{x^2}{x-1}\\,dx$.',
            options: ['$\\frac{x^2}{2} + x + \\ln|x-1| + C$', '$x^2 + \\ln|x-1| + C$', '$\\frac{x^2}{2} - x + \\ln|x-1| + C$', '$\\frac{x^2}{2} + x - \\ln|x-1| + C$'],
            correctAnswer: 0,
            explanation: 'Long division: $\\frac{x^2}{x-1} = x + 1 + \\frac{1}{x-1}$. Integrating: $\\frac{x^2}{2} + x + \\ln|x-1| + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{1}{x^2 + 6x + 13}\\,dx$.',
            options: ['$\\frac{1}{2}\\arctan\\left(\\frac{x+3}{2}\\right) + C$', '$\\arctan(x+3) + C$', '$\\ln|x^2+6x+13| + C$', '$\\frac{1}{4}\\arctan\\left(\\frac{x+3}{2}\\right) + C$'],
            correctAnswer: 0,
            explanation: 'Complete the square: $x^2+6x+13 = (x+3)^2 + 4$. Let $u = x+3$: $\\int \\frac{du}{u^2+4} = \\frac{1}{2}\\arctan(u/2) + C$.'
          }
        ]
      }
    },
    {
      id: 'usub5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

1. **Long division** when the degree of numerator $\\geq$ degree of denominator
2. **Complete the square** when you see $x^2 + bx + c$ in a denominator
3. After algebraic prep, standard techniques (u-sub, $\\arctan$) apply`
    }
  ]
};
