export const calcbcParamDerivPart2Data = {
  topicSlug: 'parametric-derivatives-calcbc',
  sections: [
    {
      id: 'pd2-intro',
      type: 'text' as const,
      content: `# Parametric Derivatives

**Part 2 of 7 \u2014 Second Derivatives & Concavity**

The second derivative of a parametric curve tells us about concavity. The formula is subtle\u2014pay careful attention!

### The Second Derivative Formula

$$\\boxed{\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}}$$

**Common mistake:** It is NOT $\\frac{d^2y/dt^2}{d^2x/dt^2}$!

The correct process:
1. Find $dy/dx = g'(t)/f'(t)$
2. Differentiate $dy/dx$ with respect to $t$
3. Divide by $dx/dt$`
    },
    {
      id: 'pd2-example',
      type: 'text' as const,
      content: `### Worked Example

**Find** $d^2y/dx^2$ **for** $x = t^2$, $y = t^3$.

**Step 1:** $dy/dx = \\frac{3t^2}{2t} = \\frac{3t}{2}$

**Step 2:** $\\frac{d}{dt}\\left(\\frac{3t}{2}\\right) = \\frac{3}{2}$

**Step 3:** $\\frac{d^2y}{dx^2} = \\frac{3/2}{2t} = \\frac{3}{4t}$

**Interpretation:**
- For $t > 0$: $d^2y/dx^2 > 0$ \u2192 concave up
- For $t < 0$: $d^2y/dx^2 < 0$ \u2192 concave down
- At $t = 0$: undefined (cusp in the curve $y = x^{3/2}$)

| $t$ | $dy/dx$ | Sign of $d^2y/dx^2$ | Concavity |
|-----|---------|---------------------|-----------|
| $-2$ | $-3$ | Negative | Down |
| $-1$ | $-3/2$ | Negative | Down |
| $1$ | $3/2$ | Positive | Up |
| $2$ | $3$ | Positive | Up |`
    },
    {
      id: 'pd2-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'For $x = e^t$, $y = e^{-t}$, $\\frac{d^2y}{dx^2}$ equals:',
            options: ['$2e^{-3t}$', '$-e^{-2t}$', '$e^{-3t}$', '$-2e^{-3t}$'],
            correctAnswer: 0,
            explanation: '$dy/dx = -e^{-2t}$. $\\frac{d}{dt}(-e^{-2t}) = 2e^{-2t}$. $d^2y/dx^2 = \\frac{2e^{-2t}}{e^t} = 2e^{-3t}$.'
          },
          {
            question: 'The curve $x = \\cos t$, $y = \\sin t$ ($0 < t < \\pi$) is:',
            options: ['Always concave down (toward center)', 'Always concave up', 'Changes concavity', 'Linear'],
            correctAnswer: 0,
            explanation: '$dy/dx = -\\cot t$. $\\frac{d}{dt}(-\\cot t) = \\csc^2 t$. $d^2y/dx^2 = \\frac{\\csc^2 t}{-\\sin t} = -\\csc^3 t < 0$. Always concave down.'
          },
          {
            question: 'A common ERROR when computing $d^2y/dx^2$ parametrically is:',
            options: ['Taking $\\frac{d^2y/dt^2}{d^2x/dt^2}$', 'Using $dy/dx = (dy/dt)/(dx/dt)$', 'Evaluating at a specific $t$', 'Using the chain rule'],
            correctAnswer: 0,
            explanation: 'The most common error is computing $\\frac{y\'\'(t)}{x\'\'(t)}$ instead of $\\frac{(d/dt)(dy/dx)}{dx/dt}$. These are NOT the same!'
          }
        ]
      }
    },
    {
      id: 'pd2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concavity Analysis**',
      exercise: {
        dropdowns: [
          {
            label: 'For $x = t + 1$, $y = t^2 - 4t$, the curve changes concavity:',
            options: ['Never (always concave up since $d^2y/dx^2 = 2$)', 'At $t = 2$', 'At $t = 0$', 'At $t = -1$'],
            correctAnswers: ['Never (always concave up since $d^2y/dx^2 = 2$)'],
            hints: ['$dy/dx = (2t-4)/1 = 2t-4$. Differentiate again.'],
            explanation: '$dy/dx = 2t - 4$. $d/dt(2t-4) = 2$. $d^2y/dx^2 = 2/1 = 2 > 0$ always. This is a parabola $y = (x-1)^2 - 4(x-1)$.'
          },
          {
            label: 'For $x = t^3$, $y = t^2$, the second derivative at $t = 1$ is:',
            options: ['$-2/9$', '$2/3$', '$2/9$', '$0$'],
            correctAnswers: ['$-2/9$'],
            hints: ['$dy/dx = 2t/(3t^2) = 2/(3t)$. Differentiate with respect to $t$.'],
            explanation: '$dy/dx = 2/(3t)$. $d/dt(2/(3t)) = -2/(3t^2)$. $d^2y/dx^2 = \\frac{-2/(3t^2)}{3t^2} = \\frac{-2}{9t^4}$. At $t=1$: $-2/9$.'
          }
        ]
      }
    },
    {
      id: 'pd2-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'For $x = t - \\sin t$, $y = 1 - \\cos t$, find $d^2y/dx^2$ at $t = \\pi/2$. Enter the simplified value.',
        correctAnswer: '-1',
        acceptableAnswers: ['-1', '-1.0'],
        hints: ['$dy/dx = \\sin t/(1-\\cos t)$. At $t = \\pi/2$: $dy/dx = 1/(1-0) = 1$.', 'Differentiate $dy/dx$ w.r.t. $t$ using the quotient rule.'],
        explanation: '$dy/dx = \\frac{\\sin t}{1-\\cos t}$. Using quotient rule: $\\frac{d}{dt}(dy/dx) = \\frac{\\cos t(1-\\cos t) - \\sin t \\cdot \\sin t}{(1-\\cos t)^2} = \\frac{\\cos t - 1}{(1-\\cos t)^2} = \\frac{-1}{1-\\cos t}$. At $t = \\pi/2$: $\\frac{-1}{1-0} = -1$. $dx/dt = 1 - \\cos(\\pi/2) = 1$. $d^2y/dx^2 = -1/1 = -1$.'
      }
    },
    {
      id: 'pd2-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- $d^2y/dx^2 = \\frac{(d/dt)(dy/dx)}{dx/dt}$ \u2014 differentiate the first derivative w.r.t. $t$, then divide by $dx/dt$
- **Never** use $\\frac{y''(t)}{x''(t)}$
- Concavity interpretation is the same as Cartesian: positive = up, negative = down

> **Next:** Part 3 covers **velocity, acceleration, and speed** for parametric motion.`
    }
  ]
};
