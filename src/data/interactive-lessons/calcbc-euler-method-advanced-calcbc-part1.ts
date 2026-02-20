export const calcbcEulerPart1Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul1-intro',
      type: 'text' as const,
      content: `# Euler's Method

**Part 1 of 7 — The Algorithm**

### The Idea

Given $\frac{dy}{dx} = f(x, y)$ and initial condition $(x_0, y_0)$, approximate the solution by stepping along tangent lines.

### Euler's Method

$$x_{n+1} = x_n + \Delta x$$
$$y_{n+1} = y_n + f(x_n, y_n)\cdot \Delta x$$

Each step: **new $y$ = old $y$ + slope $\times$ step size**`
    },
    {
      id: 'eul1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Euler Basics** 🎯',
      exercise: {
        questions: [
          {
            question: '$dy/dx = x + y$, $y(0) = 1$, $\\Delta x = 0.1$. Find $y_1$.',
            options: ['$1.1$', '$1.01$', '$0.1$', '$2$'],
            correctAnswer: 0,
            explanation: '$y_1 = y_0 + f(x_0, y_0)\\Delta x = 1 + (0+1)(0.1) = 1 + 0.1 = 1.1$.'
          },
          {
            question: 'Continuing: find $y_2$ using the same DE and step size.',
            options: ['$1.22$', '$1.2$', '$1.21$', '$1.3$'],
            correctAnswer: 0,
            explanation: '$y_2 = 1.1 + f(0.1, 1.1)(0.1) = 1.1 + (0.1 + 1.1)(0.1) = 1.1 + 0.12 = 1.22$.'
          }
        ]
      }
    },
    {
      id: 'eul1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
$y_{n+1} = y_n + f(x_n, y_n)\\Delta x$. One step at a time.`
    }
  ]
};
