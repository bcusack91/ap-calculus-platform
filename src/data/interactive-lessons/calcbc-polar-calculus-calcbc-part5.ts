export const calcbcPolarPart5Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar5-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 5 of 7 — Tangent Lines at the Pole**

### When Does the Curve Pass Through the Origin?

Set $r = 0$ and solve for $\theta$. Each solution gives a direction through the origin, and that value of $\theta$ gives the angle of a tangent line at the origin!

### Example

$r = \sin(2\theta)$: $r = 0$ when $2\theta = n\pi$, so $\theta = 0, \pi/2, \pi, 3\pi/2$.

The tangent lines at the origin are $\theta = 0$ ($x$-axis) and $\theta = \pi/2$ ($y$-axis).`
    },
    {
      id: 'polar5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Tangent Lines at Pole** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $r = 1 + \\cos\\theta$, when does the curve pass through the pole?',
            options: ['$\\theta = \\pi$', '$\\theta = 0$', '$\\theta = \\pi/2$', '$\\theta = 3\\pi/2$'],
            correctAnswer: 0,
            explanation: '$1 + \\cos\\theta = 0$ when $\\cos\\theta = -1$, i.e., $\\theta = \\pi$.'
          }
        ]
      }
    },
    {
      id: 'polar5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
At the origin: $r = 0$ gives the tangent lines.`
    }
  ]
};
