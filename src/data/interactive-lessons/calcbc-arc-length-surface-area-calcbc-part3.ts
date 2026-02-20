export const calcbcArcLengthPart3Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc3-intro',
      type: 'text' as const,
      content: `# Arc Length & Surface Area

**Part 3 of 7 — Surface Area of Revolution**

### Around the $x$-axis

$$S = 2\pi\int_a^b y\sqrt{1 + (y')^2}\,dx$$

### Around the $y$-axis

$$S = 2\pi\int_a^b x\sqrt{1 + (y')^2}\,dx$$`
    },
    {
      id: 'arc3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Surface Area** 🎯',
      exercise: {
        questions: [
          {
            question: 'Surface area of $y = x$ from $0$ to $1$ rotated about the $x$-axis:',
            options: ['$\\pi\\sqrt{2}$', '$2\\pi$', '$\\pi$', '$\\sqrt{2}\\pi/2$'],
            correctAnswer: 0,
            explanation: '$S = 2\\pi\\int_0^1 x\\sqrt{1 + 1}\\,dx = 2\\pi\\sqrt{2} \\cdot [x^2/2]_0^1 = 2\\pi\\sqrt{2} \\cdot 1/2 = \\pi\\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'arc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
$S = 2\\pi\\int r \\cdot ds$ where $r$ is the radius and $ds$ is the arc length element.`
    }
  ]
};
