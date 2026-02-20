export const calcbcArcLengthPart1Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc1-intro',
      type: 'text' as const,
      content: `# Arc Length & Surface Area

**Part 1 of 7 — Arc Length in Rectangular Form**

### Arc Length Formula ($y = f(x)$)

$$L = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$$

### Worked Example

$y = x^{3/2}$ from $x = 0$ to $x = 4$:

$\frac{dy}{dx} = \frac{3}{2}x^{1/2}$

$L = \int_0^4 \sqrt{1 + \frac{9}{4}x}\,dx = \frac{2}{3} \cdot \frac{4}{9}\left[\left(1 + \frac{9x}{4}\right)^{3/2}\right]_0^4 = \frac{8}{27}(10\sqrt{10} - 1)$`
    },
    {
      id: 'arc1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Arc Length** 🎯',
      exercise: {
        questions: [
          {
            question: 'Set up the arc length integral for $y = x^2$ from $x = 0$ to $x = 1$.',
            options: ['$\\int_0^1 \\sqrt{1 + 4x^2}\\,dx$', '$\\int_0^1 \\sqrt{1 + 2x}\\,dx$', '$\\int_0^1 (1 + 4x^2)\\,dx$', '$\\int_0^1 2x\\,dx$'],
            correctAnswer: 0,
            explanation: '$dy/dx = 2x$. $(dy/dx)^2 = 4x^2$. $L = \\int_0^1 \\sqrt{1 + 4x^2}\\,dx$.'
          }
        ]
      }
    },
    {
      id: 'arc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Arc length = $\\int \\sqrt{1 + (dy/dx)^2}\\,dx$.`
    }
  ]
};
