export const calcbcPolarPart4Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'pol4-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 4 of 7 \u2014 Slopes of Polar Curves**

To find $dy/dx$ for a polar curve $r = f(\\theta)$, treat it as parametric with parameter $\\theta$:

$$x = r\\cos\\theta = f(\\theta)\\cos\\theta, \\quad y = r\\sin\\theta = f(\\theta)\\sin\\theta$$

### The Slope Formula

$$\\boxed{\\frac{dy}{dx} = \\frac{\\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta}{\\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta}}$$

This comes from the product rule:
- $dx/d\\theta = f'\\cos\\theta - f\\sin\\theta$
- $dy/d\\theta = f'\\sin\\theta + f\\cos\\theta$`
    },
    {
      id: 'pol4-example',
      type: 'text' as const,
      content: `### Worked Example

**Find the slope of** $r = 1 + \\cos\\theta$ **at** $\\theta = \\pi/3$.

$r = 1 + \\cos(\\pi/3) = 3/2$, $dr/d\\theta = -\\sin(\\pi/3) = -\\sqrt{3}/2$

$$\\frac{dy}{dx} = \\frac{(-\\sqrt{3}/2)\\sin(\\pi/3) + (3/2)\\cos(\\pi/3)}{(-\\sqrt{3}/2)\\cos(\\pi/3) - (3/2)\\sin(\\pi/3)}$$

$$= \\frac{(-\\sqrt{3}/2)(\\sqrt{3}/2) + (3/2)(1/2)}{(-\\sqrt{3}/2)(1/2) - (3/2)(\\sqrt{3}/2)} = \\frac{-3/4 + 3/4}{-\\sqrt{3}/4 - 3\\sqrt{3}/4} = \\frac{0}{-\\sqrt{3}} = 0$$

The tangent is **horizontal** at $\\theta = \\pi/3$!

> **AP Tip:** Horizontal tangents occur when $dy/d\\theta = 0$ and $dx/d\\theta \\ne 0$. Vertical tangents when $dx/d\\theta = 0$ and $dy/d\\theta \\ne 0$.`
    },
    {
      id: 'pol4-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'For the circle $r = a$ (constant), $dy/dx$ at angle $\\theta$ equals:',
            options: ['$-\\cot\\theta$', '$\\cot\\theta$', '$-\\tan\\theta$', '$\\tan\\theta$'],
            correctAnswer: 0,
            explanation: '$dr/d\\theta = 0$. $dy/dx = \\frac{0 + a\\cos\\theta}{0 - a\\sin\\theta} = -\\cot\\theta$. This matches the circle: the tangent at angle $\\theta$ is perpendicular to the radius.'
          },
          {
            question: 'The polar curve $r = \\theta$ (spiral) has a horizontal tangent when:',
            options: ['$\\tan\\theta = -\\theta$', '$\\tan\\theta = \\theta$', '$\\tan\\theta = \\frac{1}{\\theta}$', 'Never'],
            correctAnswer: 0,
            explanation: '$y = \\theta\\sin\\theta$, so $dy/d\\theta = \\sin\\theta + \\theta\\cos\\theta = 0 \\implies \\tan\\theta = -\\theta$. This transcendental equation has infinitely many solutions. $\\tan\\theta = \\frac{1}{\\theta}$ comes from $dx/d\\theta = \\cos\\theta - \\theta\\sin\\theta = 0$, which marks vertical tangents.'
          },
          {
            question: 'At $\\theta = 0$ on $r = 1 + \\cos\\theta$, the tangent line is:',
            options: ['Vertical', 'Horizontal', 'Has slope $1$', 'Undefined, since $dy/d\\theta = 0$ too'],
            correctAnswer: 0,
            explanation: '$x = r\\cos\\theta$, $y = r\\sin\\theta$. $dx/d\\theta = -\\sin\\theta\\cos\\theta - (1+\\cos\\theta)\\sin\\theta$, which is $0$ at $\\theta = 0$. $dy/d\\theta = -\\sin^2\\theta + (1+\\cos\\theta)\\cos\\theta$, which is $0 + 2 = 2 \\ne 0$ at $\\theta = 0$. Since $dx/d\\theta = 0$ and $dy/d\\theta \\ne 0$, the tangent at $(2, 0)$ is vertical.'
          }
        ]
      }
    },
    {
      id: 'pol4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Tangent Line Analysis**',
      exercise: {
        dropdowns: [
          {
            label: 'At the origin ($r = 0$) of a polar curve, the tangent line:',
            options: ['Is the line $\\theta = \\theta_0$ where $f(\\theta_0) = 0$', 'Does not exist, since both derivatives are $0$', 'Is horizontal, since $y = r\\sin\\theta = 0$ there', 'Is vertical, since $x = r\\cos\\theta = 0$ there'],
            correctAnswers: ['Is the line $\\theta = \\theta_0$ where $f(\\theta_0) = 0$'],
            hints: ['When $r = 0$ at $\\theta = \\theta_0$, the curve passes through the origin at angle $\\theta_0$.'],
            explanation: 'When $r = 0$ at $\\theta = \\theta_0$ and $dr/d\\theta \\ne 0$, the tangent line at the origin is the line $\\theta = \\theta_0$. Its Cartesian slope is $\\tan\\theta_0$. Both $x$ and $y$ are $0$ there, but $dx/d\\theta = f\'(\\theta_0)\\cos\\theta_0$ and $dy/d\\theta = f\'(\\theta_0)\\sin\\theta_0$ are not both $0$.'
          },
          {
            label: 'For $r = \\sin(2\\theta)$, the tangent lines at the origin occur at:',
            options: ['$\\theta = 0, \\pi/2, \\pi, 3\\pi/2$', '$\\theta = 0$ and $\\theta = \\pi$ only', '$\\theta = \\pi/4, 3\\pi/4, 5\\pi/4, 7\\pi/4$', 'None: the slope formula gives $0/0$'],
            correctAnswers: ['$\\theta = 0, \\pi/2, \\pi, 3\\pi/2$'],
            hints: ['$r = 0$ when $\\sin(2\\theta) = 0$.'],
            explanation: '$\\sin(2\\theta) = 0$ at $\\theta = 0, \\pi/2, \\pi, 3\\pi/2$, so the curve passes through the origin four times. The lines $\\theta = 0$ and $\\theta = \\pi$ are the same line, as are $\\theta = \\pi/2$ and $3\\pi/2$, so the tangent lines at the origin are the $x$-axis and the $y$-axis. The angles $\\pi/4, 3\\pi/4, \\ldots$ are petal tips ($|r| = 1$), not the origin.'
          }
        ]
      }
    },
    {
      id: 'pol4-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'For $r = 2\\cos\\theta$, find $dy/dx$ at $\\theta = \\pi/3$. Use: $dr/d\\theta = -2\\sin\\theta$, $r = 1$. Simplify to get $dy/dx = a/\\sqrt{3}$ where $a$ is an integer. What is $a$?',
        correctAnswer: '1',
        acceptableAnswers: ['1'],
        hints: ['Num: $(-\\sqrt{3})(\\sqrt{3}/2) + 1 \\cdot (1/2) = -3/2 + 1/2 = -1$.', 'Den: $(-\\sqrt{3})(1/2) - 1 \\cdot (\\sqrt{3}/2) = -\\sqrt{3}$.'],
        explanation: 'Num: $(-2\\sin\\frac{\\pi}{3})\\sin\\frac{\\pi}{3} + 1 \\cdot \\cos\\frac{\\pi}{3} = -3/2 + 1/2 = -1$. Den: $(-2\\sin\\frac{\\pi}{3})\\cos\\frac{\\pi}{3} - 1 \\cdot \\sin\\frac{\\pi}{3} = -\\sqrt{3}/2 - \\sqrt{3}/2 = -\\sqrt{3}$. $dy/dx = (-1)/(-\\sqrt{3}) = 1/\\sqrt{3}$. So $a = 1$.'
      }
    },
    {
      id: 'pol4-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Polar slope: $\\frac{dy}{dx} = \\frac{(dr/d\\theta)\\sin\\theta + r\\cos\\theta}{(dr/d\\theta)\\cos\\theta - r\\sin\\theta}$
- Treat polar as parametric with $\\theta$ as the parameter
- Horizontal tangent: numerator $= 0$, denominator $\\ne 0$
- At the origin: tangent line has slope $\\tan\\theta_0$ where $f(\\theta_0) = 0$

> **Next:** Part 5 covers **rates of change** on polar curves: $dr/d\\theta$, $dx/d\\theta$, and $dy/d\\theta$.`
    }
  ]
};
