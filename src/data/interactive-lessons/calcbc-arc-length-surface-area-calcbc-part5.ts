export const calcbcArcLengthPart5Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc5-intro',
      type: 'text' as const,
      content: `# Arc Length

**Part 5 of 7 — Arc Length with $x = g(y)$**

### When $x$ is a Function of $y$

$$L = \int_c^d \sqrt{1 + \left(\frac{dx}{dy}\right)^2}\,dy$$

### Example

$x = y^2$ from $y = 0$ to $y = 1$:

$L = \int_0^1 \sqrt{1 + 4y^2}\,dy$`
    },
    {
      id: 'arc5-quiz1',
      type: 'multiple-choice' as const,
      content: '**$x = g(y)$ Form** 🎯',
      exercise: {
        questions: [
          {
            question: 'Arc length of $x = \\frac{y^3}{3}$ from $y = 0$ to $y = 1$: set up the integral.',
            options: ['$\\int_0^1 \\sqrt{1 + y^4}\\,dy$', '$\\int_0^1 \\sqrt{1 + y^2}\\,dy$', '$\\int_0^1 y^2\\,dy$', '$\\int_0^1 \\sqrt{1 + 9y^4}\\,dy$'],
            correctAnswer: 0,
            explanation: '$dx/dy = y^2$. $(dx/dy)^2 = y^4$. $L = \\int_0^1 \\sqrt{1 + y^4}\\,dy$.'
          }
        ]
      }
    },
    {
      id: 'arc5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Sometimes integrating with respect to $y$ gives a simpler integral.`
    }
  ]
};
