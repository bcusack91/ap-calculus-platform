export const calcabDiffEqPart1Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de1-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 1 of 7 \u2014 Introduction to Differential Equations**

### What is a Differential Equation?

A **differential equation (DE)** is an equation involving a function and its derivative(s).

Examples:
- $\\frac{dy}{dx} = 3x^2$ \u2014 directly integrable
- $\\frac{dy}{dx} = 2y$ \u2014 the rate depends on the current value
- $\\frac{dy}{dx} = x + y$ \u2014 non-separable (not on AP AB)

### Solving by Direct Integration

$$\\frac{dy}{dx} = f(x) \\implies y = \\int f(x)\\,dx$$

### Worked Example

$\\frac{dy}{dx} = 6x^2 - 4x + 1$, $y(0) = 3$.

$y = 2x^3 - 2x^2 + x + C$

$y(0) = C = 3$. So $y = 2x^3 - 2x^2 + x + 3$.`
    },
    {
      id: 'de1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Direct Integration** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{dy}{dx} = \\cos x + 2$ with $y(0) = 1$.',
            options: ['$y = \\sin x + 2x + 1$', '$y = \\sin x + 2x$', '$y = -\\sin x + 2x + 1$', '$y = \\cos x + 2x + 1$'],
            correctAnswer: 0,
            explanation: '$y = \\sin x + 2x + C$. $y(0) = 0 + 0 + C = 1$. $y = \\sin x + 2x + 1$.'
          }
        ]
      }
    },
    {
      id: 'de1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1
1. A DE relates a function to its derivatives
2. Direct integration works when $\\frac{dy}{dx} = f(x)$
3. Use initial conditions to find $C$`
    }
  ]
};
