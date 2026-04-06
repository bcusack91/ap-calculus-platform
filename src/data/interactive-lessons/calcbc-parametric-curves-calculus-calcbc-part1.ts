export const calcbcParametricPart1Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param1-intro',
      type: 'text' as const,
      content: `# Parametric Curves & Calculus

**Part 1 of 7 — Parametric Equations**

### What Are Parametric Equations?

Instead of $y = f(x)$, we express both coordinates in terms of a parameter $t$:

$$x = f(t), \quad y = g(t)$$

### First Derivative

$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{g'(t)}{f'(t)}$$

### Worked Example

$x = t^2$, $y = t^3$

$\\frac{dx}{dt} = 2t$, $\\frac{dy}{dt} = 3t^2$

$$\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}$$

At $t = 2$: slope $= 3$.`
    },
    {
      id: 'param1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Parametric Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Given $x = \\cos t$, $y = \\sin t$, find $\\frac{dy}{dx}$.',
            options: ['$-\\cot t$', '$\\cot t$', '$-\\tan t$', '$\\tan t$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dx} = \\frac{\\cos t}{-\\sin t} = -\\cot t$.'
          },
          {
            question: 'For $x = t + 1$, $y = t^2 - 3t$, find $\\frac{dy}{dx}$ at $t = 2$.',
            options: ['$1$', '$-1$', '$2$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dx} = \\frac{2t-3}{1} = 2t - 3$. At $t = 2$: $2(2)-3 = 1$.'
          }
        ]
      }
    },
    {
      id: 'param1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$
2. Horizontal tangent when $\\frac{dy}{dt} = 0$ (and $\\frac{dx}{dt} \\neq 0$)
3. Vertical tangent when $\\frac{dx}{dt} = 0$`
    }
  ]
};
