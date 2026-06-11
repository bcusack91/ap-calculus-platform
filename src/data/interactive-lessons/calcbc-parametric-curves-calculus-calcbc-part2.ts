export const calcbcParametricPart2Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'par2-intro',
      type: 'text' as const,
      content: `# Parametric Curves & Calculus

**Part 2 of 7 \u2014 Derivatives of Parametric Curves**

The chain rule gives us a formula for $dy/dx$ in terms of the parameter $t$. This is one of the most-tested BC topics.`
    },
    {
      id: 'par2-firstderiv',
      type: 'text' as const,
      content: `### First Derivative

$$\\boxed{\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} \\quad \\text{provided } \\frac{dx}{dt} \\ne 0}$$

This gives the slope of the tangent line to the parametric curve at the point corresponding to parameter $t$.

### Example: $x = t^2 - 1$, $y = t^3 - 3t$

$$\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 3t^2 - 3$$

$$\\frac{dy}{dx} = \\frac{3t^2 - 3}{2t} = \\frac{3(t^2-1)}{2t}$$

At $t = 2$: $\\frac{dy}{dx} = \\frac{3(4-1)}{4} = \\frac{9}{4}$ at the point $(3, 2)$.

> **Key Fact:** Horizontal tangent when $dy/dt = 0$ (and $dx/dt \\ne 0$). Vertical tangent when $dx/dt = 0$ (and $dy/dt \\ne 0$).`
    },
    {
      id: 'par2-secondderiv',
      type: 'text' as const,
      content: `### Second Derivative

$$\\boxed{\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}}$$

**Critical:** This is NOT $\\frac{d^2y/dt^2}{d^2x/dt^2}$! You must differentiate $dy/dx$ with respect to $t$, then divide by $dx/dt$.

### Example (continued): $\\frac{dy}{dx} = \\frac{3t^2-3}{2t} = \\frac{3}{2}t - \\frac{3}{2t}$

$$\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) = \\frac{3}{2} + \\frac{3}{2t^2}$$

$$\\frac{d^2y}{dx^2} = \\frac{\\frac{3}{2} + \\frac{3}{2t^2}}{2t} = \\frac{3t^2 + 3}{4t^3}$$

At $t = 2$: $\\frac{d^2y}{dx^2} = \\frac{15}{32}$ (concave up since positive).`
    },
    {
      id: 'par2-mc1',
      type: 'multiple-choice' as const,
      content: '**Derivative Practice**',
      exercise: {
        questions: [
          {
            question: 'For $x = e^t$, $y = e^{-t}$, $\\frac{dy}{dx} =$',
            options: [
              '$-e^{-2t}$',
              '$-1$',
              '$e^{-2t}$',
              '$-\\frac{1}{e^t}$'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{dy/dt}{dx/dt} = \\frac{-e^{-t}}{e^t} = -e^{-2t}$.'
          },
          {
            question: 'For $x = \\cos t$, $y = \\sin t$, $\\frac{d^2y}{dx^2}$ at $t = \\pi/4$ equals:',
            options: ['$-\\sqrt{2}$', '$-1$', '$1$', '$\\sqrt{2}$'],
            correctAnswer: 0,
            explanation: '$dy/dx = \\frac{\\cos t}{-\\sin t} = -\\cot t$. $\\frac{d}{dt}(-\\cot t) = \\csc^2 t$. $\\frac{d^2y}{dx^2} = \\frac{\\csc^2 t}{-\\sin t} = -\\csc^3 t$. At $t=\\pi/4$: $-\\csc^3(\\pi/4) = -(\\sqrt{2})^3 = -2\\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'par2-tangent',
      type: 'text' as const,
      content: `### Tangent Lines

The tangent line at $t = t_0$:
$$y - y(t_0) = \\frac{dy}{dx}\\bigg|_{t=t_0} \\cdot (x - x(t_0))$$

### Example: $x = t + \\sin t$, $y = t - \\cos t$ at $t = 0$

Point: $(0 + 0, 0 - 1) = (0, -1)$

Slope: $\\frac{dy}{dx} = \\frac{1 + \\sin t}{1 + \\cos t}\\bigg|_{t=0} = \\frac{1}{2}$

$$\\boxed{y + 1 = \\frac{1}{2}(x - 0) \\implies y = \\frac{x}{2} - 1}$$

> **AP Tip:** Tangent line problems at specific parameter values are guaranteed on the BC exam. Always find the point AND the slope.`
    },
    {
      id: 'par2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify the Tangent**',
      exercise: {
        dropdowns: [
          {
            label: '$x = t^2$, $y = t^3$ at $t = 0$:',
            options: ['Cusp (both $dx/dt$ and $dy/dt$ are $0$)', 'Horizontal tangent', 'Vertical tangent', 'Slope = $1$'],
            correctAnswers: ['Cusp (both $dx/dt$ and $dy/dt$ are $0$)'],
            hints: ['$dx/dt = 2t = 0$ and $dy/dt = 3t^2 = 0$ at $t = 0$.'],
            explanation: 'When both derivatives are $0$, we have an indeterminate form. $\\lim_{t\\to 0} \\frac{3t^2}{2t} = 0$: the tangent is horizontal, but it\u2019s a cusp point.'
          },
          {
            label: '$x = \\cos t$, $y = 2\\sin t$ at $t = \\pi/2$:',
            options: ['Vertical tangent ($dx/dt = 0$, $dy/dt \\ne 0$)', 'Horizontal tangent', 'Slope = $2$', 'No tangent'],
            correctAnswers: ['Vertical tangent ($dx/dt = 0$, $dy/dt \\ne 0$)'],
            hints: ['$dx/dt = -\\sin t = -1$ at $t=\\pi/2$... wait, that\u2019s not $0$.'],
            explanation: 'Actually $dx/dt = -\\sin(\\pi/2) = -1 \\ne 0$ and $dy/dt = 2\\cos(\\pi/2) = 0$. So this is a horizontal tangent! The slope is $0/(-1) = 0$.'
          }
        ]
      }
    },
    {
      id: 'par2-input',
      type: 'input-box' as const,
      content: '**Slope Computation**',
      exercise: {
        question: 'For $x = t^2 + 1$, $y = t^3 - t$, find $dy/dx$ at $t = 1$. Compute $\\frac{dy/dt}{dx/dt} = \\frac{3t^2-1}{2t}$ at $t = 1$. What is the value?',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hints: ['$dy/dt = 3(1)^2 - 1 = 2$. $dx/dt = 2(1) = 2$.', '$dy/dx = 2/2 = 1$.'],
        explanation: '$\\frac{dy}{dx}\\bigg|_{t=1} = \\frac{3-1}{2} = \\frac{2}{2} = 1$.'
      }
    },
    {
      id: 'par2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

| Formula | Expression |
|---------|-----------|
| First derivative | $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ |
| Second derivative | $\\frac{d^2y}{dx^2} = \\frac{(d/dt)(dy/dx)}{dx/dt}$ |
| Horizontal tangent | $dy/dt = 0$, $dx/dt \\ne 0$ |
| Vertical tangent | $dx/dt = 0$, $dy/dt \\ne 0$ |

> **Coming Up:** Part 3 covers **arc length** of parametric curves.`
    }
  ]
};
