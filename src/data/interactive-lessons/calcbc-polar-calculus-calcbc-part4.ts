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
            options: ['$\\tan\\theta = -\\theta$', '$\\theta = 0$', '$\\theta = \\pi/2$', 'Never'],
            correctAnswer: 0,
            explanation: '$dy/d\\theta = \\sin\\theta + \\theta\\cos\\theta = 0 \\implies \\tan\\theta = -\\theta$. This transcendental equation has infinitely many solutions.'
          },
          {
            question: 'At $\\theta = 0$ on $r = 1 + \\cos\\theta$, the tangent line is:',
            options: ['Vertical (since $dx/d\\theta = 0$)', 'Horizontal', 'Has slope $1$', 'Does not exist'],
            correctAnswer: 0,
            explanation: '$dx/d\\theta = -\\sin\\theta\\cos\\theta - (1+\\cos\\theta)\\sin\\theta = -\\sin\\theta(\\cos\\theta + 1 + \\cos\\theta)$. At $\\theta=0$: $dx/d\\theta = 0$. But $dy/d\\theta = -\\sin(0)(2\\cos 0+1)+0 = 0$ also. Need L\'H\\^opital.'
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
            options: ['Is the line $\\theta = \\theta_0$ where $f(\\theta_0) = 0$', 'Does not exist', 'Is always horizontal', 'Is always vertical'],
            correctAnswers: ['Is the line $\\theta = \\theta_0$ where $f(\\theta_0) = 0$'],
            hints: ['When $r = 0$ at $\\theta = \\theta_0$, the curve passes through the origin at angle $\\theta_0$.'],
            explanation: 'When $r = 0$ at $\\theta = \\theta_0$ and $dr/d\\theta \\ne 0$, the tangent line at the origin is the line $\\theta = \\theta_0$. Its Cartesian slope is $\\tan\\theta_0$.'
          },
          {
            label: 'For $r = \\sin(2\\theta)$, the tangent lines at the origin occur at:',
            options: ['$\\theta = 0, \\pi/2, \\pi, 3\\pi/2$ (four tangent lines)', '$\\theta = 0$ only', '$\\theta = \\pi/4$ only', 'No tangent exists'],
            correctAnswers: ['$\\theta = 0, \\pi/2, \\pi, 3\\pi/2$ (four tangent lines)'],
            hints: ['$r = 0$ when $\\sin(2\\theta) = 0$.'],
            explanation: '$\\sin(2\\theta) = 0$ at $\\theta = 0, \\pi/2, \\pi, 3\\pi/2$. The curve passes through the origin four times, each with a different tangent direction.'
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

> **Next:** Part 5 covers **arc length** in polar coordinates.`
    }
  ]
};
