export const calcabDiffEqPart2Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de2-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 2 of 7 \u2014 Separation of Variables**

### The Method

For DEs of the form $\\frac{dy}{dx} = f(x) \\cdot g(y)$:

1. Separate: $\\frac{dy}{g(y)} = f(x)\\,dx$
2. Integrate both sides
3. Solve for $y$ (if possible)

### Worked Example

$\\frac{dy}{dx} = xy$, $y(0) = 2$.

$\\frac{dy}{y} = x\\,dx$

$\\ln|y| = \\frac{x^2}{2} + C$

$y = Ae^{x^2/2}$ where $A = e^C$

$y(0) = A = 2$. So $y = 2e^{x^2/2}$.`
    },
    {
      id: 'de2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Separation of Variables** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{dy}{dx} = \\frac{x}{y}$ with $y(0) = 3$.',
            options: ['$y = \\sqrt{x^2 + 9}$', '$y = x^2 + 9$', '$y = \\sqrt{x + 9}$', '$y = \\sqrt{2x^2 + 9}$'],
            correctAnswer: 0,
            explanation: '$y\\,dy = x\\,dx$. $\\frac{y^2}{2} = \\frac{x^2}{2} + C$. $y^2 = x^2 + 2C$. $y(0) = 3$: $9 = 2C$, so $y^2 = x^2 + 9$, $y = \\sqrt{x^2 + 9}$.'
          },
          {
            question: 'Solve $\\frac{dy}{dx} = 3y$ with $y(0) = 5$.',
            options: ['$y = 5e^{3x}$', '$y = 3e^{5x}$', '$y = 5 + 3x$', '$y = e^{3x} + 4$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{y} = 3\\,dx$. $\\ln|y| = 3x + C$. $y = Ae^{3x}$. $y(0) = A = 5$.'
          }
        ]
      }
    },
    {
      id: 'de2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2
1. Separate variables: get all $y$ on one side, all $x$ on the other
2. Integrate both sides
3. Don't forget the constant $+C$ (or $A = e^C$ for exponentials)`
    }
  ]
};
