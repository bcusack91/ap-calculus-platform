export const calcbcParamDerivPart1Data = {
  topicSlug: 'parametric-derivatives-calcbc',
  sections: [
    {
      id: 'pd1-intro',
      type: 'text' as const,
      content: `# Parametric Derivatives

**Part 1 of 7 \u2014 First Derivatives & Tangent Lines**

Building on parametric curves, we now focus on derivative applications: tangent line equations, normal lines, and interpreting slopes in context.

### The First Derivative (Review & Extension)

For $x = f(t)$, $y = g(t)$:

$$\\boxed{\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{g'(t)}{f'(t)}}$$

**Tangent line** at parameter $t = t_0$:

$$y - g(t_0) = \\frac{g'(t_0)}{f'(t_0)}\\big(x - f(t_0)\\big)$$

**Normal line** at $(x_0, y_0)$: perpendicular to tangent

$$y - y_0 = -\\frac{f'(t_0)}{g'(t_0)}(x - x_0)$$`
    },
    {
      id: 'pd1-example',
      type: 'text' as const,
      content: `### Worked Example

**Find the tangent and normal lines to** $x = t^2 + 1$, $y = t^3 - t$ **at** $t = 1$.

**Step 1:** Point: $x(1) = 2$, $y(1) = 0$. Point is $(2, 0)$.

**Step 2:** Derivatives: $dx/dt = 2t = 2$, $dy/dt = 3t^2 - 1 = 2$.

**Step 3:** Slope: $dy/dx = 2/2 = 1$.

**Tangent line:** $y - 0 = 1(x - 2) \\implies y = x - 2$

**Normal line:** $y - 0 = -1(x - 2) \\implies y = -x + 2$

> **AP Tip:** Always find the point AND the slope before writing the line equation. Don\u2019t forget to evaluate $x(t_0)$ and $y(t_0)$\u2014not just the slope!`
    },
    {
      id: 'pd1-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'For $x = \\cos t$, $y = \\sin t$, the tangent line at $t = \\pi/4$ has slope:',
            options: ['$-1$', '$1$', '$0$', 'Undefined'],
            correctAnswer: 0,
            explanation: '$dy/dx = \\frac{\\cos t}{-\\sin t} = -\\cot t$. At $t = \\pi/4$: $-\\cot(\\pi/4) = -1$.'
          },
          {
            question: 'For $x = e^t$, $y = e^{2t}$, the tangent line at $t = 0$ passes through:',
            options: ['$(1, 1)$ with slope $2$', '$(0, 0)$ with slope $1$', '$(1, 1)$ with slope $1$', '$(e, e^2)$ with slope $2e$'],
            correctAnswer: 0,
            explanation: 'Point: $(e^0, e^0) = (1,1)$. $dy/dx = 2e^{2t}/e^t = 2e^t$. At $t=0$: slope $= 2$.'
          },
          {
            question: 'The normal line to a parametric curve is:',
            options: ['Perpendicular to the tangent at the same point', 'Parallel to the tangent', 'Always vertical', 'The secant line'],
            correctAnswer: 0,
            explanation: 'The normal line is perpendicular to the tangent line at the point of tangency. Its slope is the negative reciprocal of the tangent slope.'
          }
        ]
      }
    },
    {
      id: 'pd1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Tangent Line Analysis**',
      exercise: {
        dropdowns: [
          {
            label: 'For $x = t - \\sin t$, $y = 1 - \\cos t$ (cycloid), the tangent slope at $t = \\pi$ is:',
            options: ['$0$ (horizontal tangent)', 'Undefined (vertical tangent)', '$1$', '$-1$'],
            correctAnswers: ['$0$ (horizontal tangent)'],
            hints: ['$dy/dt = \\sin t = 0$ at $t = \\pi$, but $dx/dt = 1 - \\cos t = 2 \\ne 0$.'],
            explanation: '$dy/dx = \\frac{\\sin\\pi}{1 - \\cos\\pi} = \\frac{0}{2} = 0$. Horizontal tangent at the top of the arch.'
          },
          {
            label: 'If $dx/dt = 0$ and $dy/dt \\ne 0$ at $t = t_0$, the tangent line is:',
            options: ['Vertical', 'Horizontal', 'Does not exist', 'Has slope $1$'],
            correctAnswers: ['Vertical'],
            hints: ['$dy/dx = (dy/dt)/(dx/dt)$ would be undefined.'],
            explanation: 'When $dx/dt = 0$ and $dy/dt \\ne 0$, the slope is undefined, meaning the tangent line is vertical: $x = f(t_0)$.'
          }
        ]
      }
    },
    {
      id: 'pd1-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'Find the slope of the tangent line to $x = 3t$, $y = 2t^2 + 1$ at $t = 2$. Enter as a fraction or integer.',
        correctAnswer: '8/3',
        acceptableAnswers: ['8/3'],
        hints: ['$dx/dt = 3$, $dy/dt = 4t$.', 'At $t=2$: $dy/dx = 8/3$.'],
        explanation: '$dx/dt = 3$, $dy/dt = 4t = 8$. $dy/dx = 8/3$.'
      }
    },
    {
      id: 'pd1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Tangent line:** Use point-slope form with $(f(t_0), g(t_0))$ and slope $g'(t_0)/f'(t_0)$
- **Normal line:** Slope is $-f'(t_0)/g'(t_0)$ (negative reciprocal)
- **Horizontal tangent:** $dy/dt = 0$ and $dx/dt \\ne 0$
- **Vertical tangent:** $dx/dt = 0$ and $dy/dt \\ne 0$

> **Next:** Part 2 covers the **second derivative** and concavity in depth.`
    }
  ]
};
