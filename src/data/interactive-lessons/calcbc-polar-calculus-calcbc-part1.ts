export const calcbcPolarPart1Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar1-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 1 of 7 — Polar Coordinates & Slopes**

### Polar ↔ Rectangular Conversion

$$x = r\cos\theta, \quad y = r\sin\theta$$
$$r^2 = x^2 + y^2, \quad \tan\theta = y/x$$

### Slope of a Polar Curve

For $r = f(\theta)$:

$$\frac{dy}{dx} = \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}$$

(This comes from the chain rule: $x = r\cos\theta$, $y = r\sin\theta$)`
    },
    {
      id: 'polar1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polar Slopes** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $r = 2$, find $\\frac{dy}{dx}$ at $\\theta = \\pi/4$.',
            options: ['$-1$', '$1$', '$0$', 'Undefined'],
            correctAnswer: 0,
            explanation: '$dr/d\\theta = 0$. $\\frac{dy}{dx} = \\frac{0 \\cdot \\sin\\theta + 2\\cos\\theta}{0 \\cdot \\cos\\theta - 2\\sin\\theta} = \\frac{2\\cos\\theta}{-2\\sin\\theta} = -\\cot\\theta$. At $\\theta = \\pi/4$: $-\\cot(\\pi/4) = -1$.'
          }
        ]
      }
    },
    {
      id: 'polar1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
The slope formula uses the product rule on $x = r\\cos\\theta$ and $y = r\\sin\\theta$.`
    }
  ]
};
