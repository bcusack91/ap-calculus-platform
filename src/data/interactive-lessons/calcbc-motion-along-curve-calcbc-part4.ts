export const calcbcMotionPart4Data = {
  topicSlug: 'motion-along-curve-calcbc',
  sections: [
    {
      id: 'mc4-intro',
      type: 'text' as const,
      content: `# Tangent Lines, Second Derivatives, and Concavity

**Part 4 of 7 — Deeper Curve Analysis**

### Tangent Line to a Parametric Curve

At the point where $t = t_0$:

$$\\boxed{\\text{Slope} = \\frac{dy}{dx}\\bigg|_{t=t_0} = \\frac{y'(t_0)}{x'(t_0)}}$$

**Tangent line:** $y - y(t_0) = \\frac{y'(t_0)}{x'(t_0)}\\big(x - x(t_0)\\big)$

### Special Tangent Cases

| $x'(t_0)$ | $y'(t_0)$ | Tangent |
|-----------|-----------|---------|
| $\\neq 0$ | $\\neq 0$ | Normal slope $y'/x'$ |
| $= 0$ | $\\neq 0$ | **Vertical tangent** |
| $\\neq 0$ | $= 0$ | **Horizontal tangent** |
| $= 0$ | $= 0$ | Cusp / need further analysis |`
    },
    {
      id: 'mc4-second',
      type: 'text' as const,
      content: `### Second Derivative (Concavity of Parametric Curve)

$$\\boxed{\\frac{d^2y}{dx^2} = \\frac{\\dfrac{d}{dt}\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}}$$

> **Key Fact:** Do NOT simply take $y''(t)/x''(t)$! You must differentiate $dy/dx$ with respect to $t$, then divide by $dx/dt$.

### Worked Example

$x(t) = t^2$, $y(t) = t^3$.

1. $\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}$

2. $\\frac{d}{dt}\\left(\\frac{3t}{2}\\right) = \\frac{3}{2}$

3. $\\frac{d^2y}{dx^2} = \\frac{3/2}{2t} = \\frac{3}{4t}$

At $t = 1$: $d^2y/dx^2 = 3/4 > 0$ → concave up.
At $t = -1$: $d^2y/dx^2 = -3/4 < 0$ → concave down.`
    },
    {
      id: 'mc4-tangentex',
      type: 'text' as const,
      content: `### Tangent Line Example

$x(t) = \\cos t$, $y(t) = \\sin t$ at $t = \\pi/4$.

| Step | Calculation |
|------|------------|
| Point | $(\\cos(\\pi/4), \\sin(\\pi/4)) = (\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$ |
| $x'(t)$ | $-\\sin t$ |
| $y'(t)$ | $\\cos t$ |
| Slope at $t=\\pi/4$ | $\\frac{\\cos(\\pi/4)}{-\\sin(\\pi/4)} = -1$ |
| Tangent line | $y - \\frac{\\sqrt{2}}{2} = -1\\left(x - \\frac{\\sqrt{2}}{2}\\right)$ |

This simplifies to $y = -x + \\sqrt{2}$, tangent to the unit circle.`
    },
    {
      id: 'mc4-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: '$x(t) = t + 1$, $y(t) = t^2 - 3$. At $t = 2$, the slope $dy/dx$ is:',
            options: ['$4$', '$2$', '$1$', '$3$'],
            correctAnswer: 0,
            explanation: '$dy/dx = y\'/x\' = 2t/1 = 2t$. At $t = 2$: $dy/dx = 4$.'
          },
          {
            question: 'The WRONG way to compute $d^2y/dx^2$ for parametric curves is:',
            options: ['$y\'\'(t)/x\'\'(t)$ (this is NOT correct)', '$\\frac{d}{dt}(dy/dx) \\div (dx/dt)$', 'Using the formula $\\frac{(d/dt)(y\'/x\')}{x\'(t)}$', 'All of the correct methods involve $x\'(t)$ in the denominator'],
            correctAnswer: 0,
            explanation: '$d^2y/dx^2 \\neq y\'\'/x\'\'$. You must use $\\frac{(d/dt)(dy/dx)}{dx/dt}$.'
          },
          {
            question: 'If $x\'(t_0) = 0$ and $y\'(t_0) \\neq 0$, the curve has:',
            options: ['A vertical tangent line', 'A horizontal tangent line', 'A cusp', 'No tangent line'],
            correctAnswer: 0,
            explanation: '$dy/dx = y\'/x\' \\to \\pm\\infty$ when $x\' = 0$ and $y\' \\neq 0$: vertical tangent.'
          }
        ]
      }
    },
    {
      id: 'mc4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Second Derivative Practice**',
      exercise: {
        dropdowns: [
          {
            label: 'For $x(t) = t^2$, $y(t) = t^3$: $dy/dx$ simplifies to:',
            options: ['$3t/2$', '$3t^2/2t^2$', '$t/2$', '$3/2$'],
            correctAnswers: ['$3t/2$'],
            hints: ['$dy/dx = 3t^2/(2t)$.'],
            explanation: '$3t^2/(2t) = 3t/2$.'
          },
          {
            label: 'The second derivative $d^2y/dx^2$ for this curve is:',
            options: ['$3/(4t)$', '$3/2$', '$6t/2 = 3t$', '$3/(2t)$'],
            correctAnswers: ['$3/(4t)$'],
            hints: ['$\\frac{d}{dt}(3t/2) = 3/2$. Then divide by $x\'(t) = 2t$.'],
            explanation: '$(3/2)/(2t) = 3/(4t)$.'
          }
        ]
      }
    },
    {
      id: 'mc4-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'If $x(t) = 3t$, $y(t) = t^2 + 1$, what is $dy/dx$ at $t = 4$? (Enter as a fraction like a/b.)',
        correctAnswer: '8/3',
        acceptableAnswers: ['8/3', '2.67', '2.667'],
        hints: ['$dy/dx = y\'/x\' = 2t/3$. Plug in $t = 4$.'],
        explanation: '$dy/dx = 2t/3$. At $t = 4$: $2(4)/3 = 8/3$.'
      }
    },
    {
      id: 'mc4-summary',
      type: 'text' as const,
      content: `### Key Formulas

$$\\frac{dy}{dx} = \\frac{y'(t)}{x'(t)} \\qquad \\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{x'(t)}$$

**Common Error Alert:** $d^2y/dx^2 \\neq y''(t)/x''(t)$!

**Next: Part 5 — AP Exam Strategies for Parametric Motion**`
    }
  ]
};
