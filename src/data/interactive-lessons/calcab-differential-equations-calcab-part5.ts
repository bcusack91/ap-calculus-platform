export const calcabDiffEqPart5Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de5-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 5 of 7 \u2014 More Separation of Variables Practice**

### Harder Examples

$$\\frac{dy}{dx} = \\frac{y^2}{x}, \\quad y(1) = 2$$

$\\frac{dy}{y^2} = \\frac{dx}{x}$

$-\\frac{1}{y} = \\ln|x| + C$

$y(1) = 2$: $-\\frac{1}{2} = 0 + C$, so $C = -\\frac{1}{2}$

$-\\frac{1}{y} = \\ln x - \\frac{1}{2}$

$y = \\frac{1}{\\frac{1}{2} - \\ln x} = \\frac{2}{1 - 2\\ln x}$`
    },
    {
      id: 'de5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Separation of Variables Practice** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{dy}{dx} = \\frac{y}{x+1}$ with $y(0) = 4$.',
            options: ['$y = 4(x+1)$', '$y = 4e^x$', '$y = (x+1)^4$', '$y = 4\\ln(x+1)$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{y} = \\frac{dx}{x+1}$. $\\ln|y| = \\ln|x+1| + C$. $y = A(x+1)$. $y(0) = A = 4$.'
          }
        ]
      }
    },
    {
      id: 'de5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5
Practice various types of separable DEs to build fluency.`
    }
  ]
};
