export const calcbcParametricPart3Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param3-intro',
      type: 'text' as const,
      content: `# Parametric Curves

**Part 3 of 7 — Arc Length (Parametric)**

### Parametric Arc Length Formula

$$L = \int_a^b \sqrt{\left(\\frac{dx}{dt}\\right)^2 + \left(\\frac{dy}{dt}\\right)^2}\,dt$$

### Example: Circle

$x = 3\cos t$, $y = 3\sin t$, $0 \leq t \leq 2\pi$

$\\frac{dx}{dt} = -3\sin t$, $\\frac{dy}{dt} = 3\cos t$

$L = \int_0^{2\pi}\sqrt{9\sin^2 t + 9\cos^2 t}\,dt = \int_0^{2\pi} 3\,dt = 6\pi$`
    },
    {
      id: 'param3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Arc Length** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find arc length for $x = t^2$, $y = t^3$, $0 \\leq t \\leq 1$. Set up the integral.',
            options: ['$\\int_0^1 \\sqrt{4t^2 + 9t^4}\\,dt$', '$\\int_0^1 \\sqrt{2t + 3t^2}\\,dt$', '$\\int_0^1 (2t + 3t^2)\\,dt$', '$\\int_0^1 \\sqrt{t^4 + t^6}\\,dt$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{(2t)^2 + (3t^2)^2} = \\sqrt{4t^2 + 9t^4}$.'
          }
        ]
      }
    },
    {
      id: 'param3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Arc length: $\\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$ — Pythagorean theorem in the parameter space.`
    }
  ]
};
