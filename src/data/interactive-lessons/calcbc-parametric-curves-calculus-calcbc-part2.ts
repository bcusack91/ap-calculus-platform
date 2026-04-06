export const calcbcParametricPart2Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param2-intro',
      type: 'text' as const,
      content: `# Parametric Curves

**Part 2 of 7 — Second Derivative**

### Second Derivative for Parametric Curves

$$\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}$$

Take the derivative **with respect to** $t$ of $\\frac{dy}{dx}$, then divide by $\\frac{dx}{dt}$.

### Example

$x = t^2$, $y = t^3$. We found $\\frac{dy}{dx} = \\frac{3t}{2}$.

$\\frac{d}{dt}\left(\\frac{3t}{2}\\right) = \\frac{3}{2}$

$$\\frac{d^2y}{dx^2} = \\frac{3/2}{2t} = \\frac{3}{4t}$$`
    },
    {
      id: 'param2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Second Derivative** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $x = e^t$, $y = e^{2t}$, find $\\frac{d^2y}{dx^2}$.',
            options: ['$2$', '$4e^t$', '$2e^t$', '$e^t$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dx} = \\frac{2e^{2t}}{e^t} = 2e^t$. $\\frac{d}{dt}(2e^t) = 2e^t$. $\\frac{d^2y}{dx^2} = \\frac{2e^t}{e^t} = 2$.'
          }
        ]
      }
    },
    {
      id: 'param2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
The second derivative formula: differentiate $dy/dx$ with respect to $t$, divide by $dx/dt$.`
    }
  ]
};
